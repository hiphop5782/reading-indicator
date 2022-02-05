[![version-info](https://img.shields.io/badge/release-v0.0.1-blue)](https://github.com/hiphop5782/reading-indicator/releases/latest)

# reading-indicator (jquery plugin)

현재 스크롤의 위치를 상단에 표시하는 플러그인입니다.

## 설치

### CDN 적용

아래 둘 중 하나를 작성합니다.

#### beautify

```html
<script src="https://cdn.jsdelivr.net/gh/hiphop5782/reading-indicator@latest/dist/reading-indicator.js"></script>
```

#### minify

```html
<script src="https://cdn.jsdelivr.net/gh/hiphop5782/reading-indicator@latest/dist/reading-indicator.min.js"></script>
```

### 사용법

```javascript
$(selector).indicator({options});
```

## options

생성 시 옵션을 설정하여 기본 옵션을 덮어쓰기 할 수 있습니다.

기본 옵션은 다음과 같습니다.

```javascript
{
    //indicator 색상
    color:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    //indicator 크기(높이)
    height:"5px",
    
    //top button 설정
    topButton:{
        visible:true,//표시여부
        background:"black",//배경 색상
        foreground:"white",//글자 색상
        hover:"lightgoldenyellow"//하이라이트 색상
    }
}
```

## 적용

다음과 같이 영역을 생성합니다
```html
<div class="target"></div>
```

jQuery를 이용하여 indicator 도구를 생성합니다.
```javascript
$(".target").indicator();
```

옵션을 설정할 수 있습니다.
기본 옵션으로 설정된 것들 중 원하는 것을 덮어쓰기할 수 있습니다.
topButton을 null로 설정하거나 visible을 false로 설정하면 위로가기 버튼이 나오지 않습니다.
```javascript
$(".target").indicator({
    color:"black",
    topButton:null
});
```
