#WEB js exercise 2

## Prior knowledge
了解上禮拜的 code

## Requirement
1. 使用 jquery 的方式，改寫 createTodoElement 以及微調其他相關的方程式。
2. 用 jqeury 的方式拿取/重設 input 的值。
3. 跟隨助教參考文件，當使用者載入或點擊`更換圖片`按鈕時，使用 $.getJSON 對 flickr api 爬取關鍵字為 beautiful 的照片，隨機拿取一張圖片，依照 flickr url 的格式替換 body 的 background-image
4. bonus. 當使用者點擊 todoEle 時，用 transit 做顏色、位移、透明度變化的視覺特效。要在動畫完成後，呼叫 updatetodoListEle (todoDataArray) ;



## Guide
1-1 jquery 創建 element 的方式 http://api.jquery.com/jQuery/#jQuery2

3-1 要使用到 clickEvent.preventDefault()
https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

3-2 flickr 相關的 api 文件
 https://www.flickr.com/services/api/flickr.photos.search.html

3-3 flickr api 試用：輸入你要找的關鍵字在 text 欄位；挑選不簽署呼叫；輸出格式選 JSON ；點選 call method 按鈕後，就可以在文件最下面看到範例的 api 網址。
 https://www.flickr.com/services/api/explore/flickr.photos.search

3-4 照片 URL 格式說明
 https://www.flickr.com/services/api/misc.urls.html

3-5 0-99 任取一數
```javascript
Math.floor(Math.random() * 100 )
```

4-1 Jquery.transit 官網
http://ricostacruz.com/jquery.transit/

4-2 如何設定 callback function
```javascript
 //https://github.com/rstacruz/jquery.transit
 $("#example").transition({ key : value }, function() {..});
```

4-3 $(this) 是指觸發 callback 的 Element 的 jqeury 物件。
```
```
