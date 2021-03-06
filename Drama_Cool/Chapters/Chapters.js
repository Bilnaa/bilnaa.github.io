function Chapters(request, extra, javascriptConfig, output) {
	this.request = request;
	this.extra = extra;
	this.javascriptConfig = javascriptConfig;
	this.output = output;
}

function ModuleRequest(url, method, headers, httpBody) {
	this.url = url;
	this.method = method;
	this.headers = headers;
	this.httpBody = httpBody;
}

function Extra(commands, extraInfo) {
	this.commands = commands;
	this.extraInfo = extraInfo;
}

function Commands(commandName, params) {
	this.commandName = commandName;
	this.params = params;
}

function JavascriptConfig(removeJavascript, loadInWebView, javaScript) {
	this.removeJavascript = removeJavascript;
	this.loadInWebView = loadInWebView;
	this.javaScript = javaScript;
}

function KeyValue(key, value) {
	this.key = key;
	this.value = value;
}

function Output(videos, images, text) {
	this.videos = videos;
	this.images = images;
	this.text = text;
}

function Videos(needsResolver, rawVideo) {
	this.needsResolver = needsResolver;
	this.rawVideo = rawVideo;
}

function NeedsResolver(resolverIdentifier, link) {
	this.resolverIdentifier = resolverIdentifier;
	this.link = link;
}

function RawVideo(video) {
	this.video = video;
}

function Video(videoQuality, videoLink) {
	this.videoQuality = videoQuality;
	this.videoLink = videoLink;
}

function Text(text) {
	this.text = text;
}
var output = [];
var savedData = document.getElementById('ketsu-final-data');
var parsedJson = JSON.parse(savedData.innerHTML);
var emptyKeyValue = [new KeyValue('', '')];
var buttonBox = document.querySelector('div.anime_muti_link').querySelectorAll('li');
for (var x = 0; x < buttonBox.length; x++) {
	var link = buttonBox[x].dataset.video;
	if (link.includes('streamtape')) {
		output.push(new NeedsResolver('', new ModuleRequest(link.replace('streamtape.com', 'streamta.pe'), 'get', emptyKeyValue, null)));
	}
	if (link.includes('sbplay')) {
		output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
	};
	if (link.includes('dood')) {
		output.push(new NeedsResolver('', new ModuleRequest(link.replace('ws', 'so'), 'get', emptyKeyValue, null)));
	};
	if (link.includes('dembed1.com')) {
		if (!link.includes('https')) {
			var fixedLink = 'https:' + link;
			output.push(new NeedsResolver('', new ModuleRequest(fixedLink, 'get', emptyKeyValue, null)));
		} else {
			output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
		}
	} else {
		output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
	}
}
if (output.length > 0) {
	for (var x = 0; x < output.length; x++) {
		if (output[x].link.url == '{' || output[x].link.url.includes('streamtape') || !output[x].link.url.includes('https') || output[x].link.url.includes('dood.ws') || (output[x].link.url.includes('sbplay2') && output[x].resolverIdentifier == '')) {
			output.splice(x, 1);
		}
	}
	for (var y = 0; y < output.length; y++) {
		if (output[y].link.url == '{') {
			output.splice(y, 1);
		}
	}
}
let emptyExtra = new Extra([new Commands('', emptyKeyValue)], emptyKeyValue);
var chaptersObject = new Chapters(new ModuleRequest('', '', emptyKeyValue, null), emptyExtra, new JavascriptConfig(false, false, ''), new Output(new Videos(output, null), null, null));
var finalJson = JSON.stringify(chaptersObject);
savedData.innerHTML = finalJson;