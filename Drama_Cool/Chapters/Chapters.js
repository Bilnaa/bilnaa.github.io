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
		fixedLink = link.replace('https://streamtape.com/', 'https://streamta.pe/');
		output.push(new NeedsResolver('', new ModuleRequest(fixedLink, 'get', emptyKeyValue, null)));
		output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
	}
	if (link.includes('sbplay1') || link.includes('sbplay2')) {
		output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
	}
	if (link.includes('https://mixdrop.co/e/')) {
		output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
	}
	if (link.includes('fplayer.info')) {
		output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
	}
	if (link.includes('asianembed')) {
		if (!link.includes('streaming.php')) {
			var fixedLink = 'https:' + link;
			output.push(new NeedsResolver('', new ModuleRequest(fixedLink, 'get', emptyKeyValue, null)));
		} else {
			output.push(new NeedsResolver('', new ModuleRequest('https:' + link, 'get', emptyKeyValue, null)));
		}
	}
	if (link.includes('fembed-hd')) {
		output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
	}
}
let emptyExtra = new Extra([new Commands('', emptyKeyValue)], emptyKeyValue);
var chaptersObject = new Chapters(new ModuleRequest('', '', emptyKeyValue, null), emptyExtra, new JavascriptConfig(false, false, ''), new Output(new Videos(output, null), null, null));
var finalJson = JSON.stringify(chaptersObject);
savedData.innerHTML = finalJson;