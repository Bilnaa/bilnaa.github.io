const DefaultLayouts = {
    ultraWideFull: 'ultraWideFull',
    ultraWide: 'ultraWide',
    wideFull: 'wideFull',
    wide: 'wide',
    wideStrechedFull: 'wideStrechedFull',
    wideStrechedFullDouble: 'WideStrechedFullDouble',
    wideStreched: 'wideStreched',
    wideStrechedDouble: 'wideStrechedDouble',
    wideStrechedFullList: 'wideStrechedFullList',
    wideStrechedList: 'wideStrechedList',
    doublets: 'doublets',
    doubletsDouble: 'doubletsDouble',
    doubletsFull: 'doubletsFull',
    doubletsFullDouble: 'doubletsFullDouble',
    doubletsConstant: 'doubletsConstant',
    doubletsDoubleConstant: 'doubletsDoubleConstant',
    doubletsFullConstant: 'doubletsFullConstant',
    doubletsFullDoubleConstant: 'doubletsFullDoubleConstant',
    longDoublets: 'longDoublets',
    longDoubletsDouble: 'longDoubletsDouble',
    longDoubletsFull: 'longDoubletsFull',
    longDoubletsFullDouble: 'longDoubletsFullDouble',
    longDoubletsConstant: 'longDoubletsConstant',
    longDoubletsDoubleConstant: 'longDoubletsDoubleConstant',
    longDoubletsFullConstant: 'longDoubletsFullConstant',
    longDoubletsFullDoubleConstant: 'longDoubletsFullDoubleConstant',
    triplets: 'triplets',
    tripletsDouble: 'tripletsDouble',
    tripletsFull: 'tripletsFull',
    tripletsFullDouble: 'tripletsFullDouble',
    tripletsConstant: 'tripletsConstant',
    tripletsDoubleConstant: 'tripletsDoubleConstant',
    tripletsFullConstant: 'tripletsFullConstant',
    tripletsFullDoubleConstant: 'tripletsFullDoubleConstant',
    longTriplets: 'longTriplets',
    longTripletsDouble: 'longTripletsDouble',
    longTripletsFull: 'longTripletsFull',
    longTripletsFullDouble: 'longTripletsFullDouble',
    longTripletsConstant: 'longTripletsConstant',
    longTripletsDoubleConstant: 'longTripletsDoubleConstant',
    longTripletsFullConstant: 'longTripletsFullConstant',
    longTripletsFullDoubleConstant: 'longTripletsFullDoubleConstant',
    none: ''
};
const CellDesings = {
    Special1: 'Special1',
    Special2: 'Special2',
    Special3: 'Special3',
    CELLHelperText: 'CELLHelperText',
    small1: 'small1',
    small2: 'small2',
    normal1: 'normal1',
    normal2: 'normal2',
    normal3: 'normal3',
    normal4: 'normal4',
    normal5: 'normal5',
    normal6: 'normal6',
    normal7: 'normal7',
    wide1: 'wide1',
    wide2: 'wide2',
    wide3: 'wide3',
    wide4: 'wide4',
    wide5: 'wide5',
    wide6: 'wide6',
    wide7: 'wide7',
    wide8: 'wide8',
    wide9: 'wide9',
    wide10: 'wide10',
    wide11: 'wide11'
};
const Paging = {
    leading: 'leading',
    centered: 'centered',
    none: ''
};
const Orientation = {
    horizontal: 'horizontal',
    vertical: 'vertical'
};

function MainPage(request, extra, javascriptConfig, output) {
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

function Output(cellDesing, orientation, defaultLayout, paging, section, layout, data) {
    this.cellDesing = cellDesing;
    this.orientation = orientation;
    this.defaultLayout = defaultLayout;
    this.paging = paging;
    this.section = section;
    this.layout = layout;
    this.data = data;
}

function Section(sectionName, separator) {
    this.sectionName = sectionName;
    this.separator = separator;
}

function Layout(insets, visibleCellsWidthS, visibleCellsWidthM, visibleCellsWidthL, visibleCellsHeight,
    heightForVisibleCells, cellSize, ratio, constant, horizontalSpacing, verticalSpacing) {
    this.insets = insets;
    this.visibleCellsWidthS = visibleCellsWidthS;
    this.visibleCellsWidthM = visibleCellsWidthM;
    this.visibleCellsWidthL = visibleCellsWidthL;
    this.visibleCellsHeight = visibleCellsHeight;
    this.heightForVisibleCells = heightForVisibleCells;
    this.cellSize = cellSize;
    this.ratio = ratio;
    this.constant = constant;
    this.horizontalSpacing = horizontalSpacing;
    this.verticalSpacing = verticalSpacing;
}

function Insets(top, bottom, left, right) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
}

function Size(width, height) {
    this.width = width;
    this.height = height;
}

function Ratio(inRelation, number1, number2) {
    this.inRelation = inRelation;
    this.number1 = number1;
    this.number2 = number2;
}

function Data(image, title, description, field1, field2, field3, field4, isChapter, link, openInWebView) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.field1 = field1;
    this.field2 = field2;
    this.field3 = field3;
    this.field4 = field4;
    this.isChapter = isChapter;
    this.link = link;
    this.openInWebView = openInWebView;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
var savedData = document.getElementById('ketsu-final-data');
var parsedJson = JSON.parse(savedData.innerHTML);
let emptyKeyValue = [new KeyValue('', '')];
let output = [];
var dataArray = [];
var sliders = document.querySelector('.items.swiper-wrapper').querySelectorAll('.item.swiper-slide');
for (slider of sliders) {
    var image = slider.style.backgroundImage.split('"')[1];
    image = new ModuleRequest(image, 'get', emptyKeyValue, null);
    var title = slider.querySelector('a').title;
    var desc = slider.querySelector('p').textContent;
    var link = slider.querySelector('a').href;
    link = new ModuleRequest(link, 'get', emptyKeyValue, null);
    dataArray.push(new Data(image, title, desc, title, '', '', '', false, link));
}
var sliderLayout = new Layout(new Insets(0, 0, 0, 0), 1, 2, 3, 1, 500, new Size(400, 400), new Ratio('width', 1,
    3), new Size(0, 0), 0, 0);
output.push(new Output(CellDesings.Special3, Orientation.horizontal, DefaultLayouts.none, Paging.centered,
    new Section('', false), sliderLayout, shuffle(dataArray.slice())));
var lastEps = document.querySelector('.widget-body').querySelectorAll('.content');
var tabs = document.querySelector('.widget-title').querySelectorAll('.tab');
for (var x = 0; x < lastEps.length; x++) {
    var imgList = [];
    var dataArray = [];
    var sectionName = 'Ultimi Episodi: ' + tabs[x].textContent;
    var filmsList = lastEps[x].querySelectorAll('.film-list');
    for (filmList of filmsList) {
        var animes = filmList.querySelectorAll('.inner > .poster');
        for (anime of animes) {
            var img = anime.querySelector('img').src;
            title = anime.querySelector('img').alt;
            if (imgList.includes(img) == false) {
                imgList.push(img);
                img = new ModuleRequest(img, 'get', emptyKeyValue, null);
                var ep = anime.querySelector('.ep').textContent.trim();
                var link = anime.href;
                link = new ModuleRequest(link, 'get', emptyKeyValue, null);
                dataArray.push(new Data(img, title, '', ep, '', '', '', false, link));
            }
        }
    }
    output.push(new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longTripletsDouble, Paging
        .leading, new Section(sectionName, true), null, dataArray));
}
var dataArray = [];
var inProgress = document.querySelector('.owl-carousel').querySelectorAll('.item > .inner > .poster');
for (progress of inProgress) {
    var img = progress.querySelector('img').src;
    var title = progress.querySelector('img').alt;
    img = new ModuleRequest(img, 'get', emptyKeyValue, null);
    var ep = progress.querySelector('.ep').textContent.trim();
    var link = progress.href;
    link = new ModuleRequest(link, 'get', emptyKeyValue, null);
    dataArray.push(new Data(img,title, '', ep, '', '', '', false, link));
}
output.push(new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longDoubletsDouble, Paging
    .leading, new Section('Anime in corso', true), null, dataArray));
var dataArray = [];
var sectionName = 'Top Anime: ' + document.querySelector('.ranking > .widget-title > .tabs > .tab').textContent;
var animes = document.querySelector('.ranking > .widget-body > .content').querySelectorAll('a.thumb');
for (anime of animes) {
    var img = anime.querySelector('img').src;
    img = new ModuleRequest(img, 'get', emptyKeyValue, null);
    var title = anime.querySelector('img').alt;
    var link = anime.href;
    link = new ModuleRequest(link, 'get', emptyKeyValue, null);
    dataArray.push(new Data(img, title, '', '', '', '', '', false, link));
}
output.push(new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longTripletsDouble, Paging
    .leading, new Section(sectionName, true), null, dataArray));
let MainPageObject = new MainPage(new ModuleRequest('', 'get', emptyKeyValue, null), new Extra([new Commands('',
    emptyKeyValue)], emptyKeyValue), new JavascriptConfig(true, false, ''), output);
var finalJson = JSON.stringify(MainPageObject);
savedData.innerHTML = finalJson;