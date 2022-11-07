#  Find Your Scent

## 프로젝트 설명
- 취향에 맞으면서 흔하지 않은 향수를 찾고 싶은 분들을 위한 향수 추천 제품을 찾아주는 반응형 테스트입니다.
- 결과 페이지에서 SNS 공유 및 영/한 버전의 상세 페이지로 이동 가능합니다.
<br>

## 배포 URL
https://find-your-scent.netlify.app/

<br>

## 사용 기술
HTML, JavaScript, BootStrap, Netlify

<br>

## 주요 기능
- 인트로 페이지에서 향과 향수에 관련된 명언을 랜덤으로 보여줍니다.
- 구현된 알고리즘을 통해 8가지의 카테고리로 분류된 해당 결과를 보여줍니다.
- 명료한 시각화를 위해 문제 진행 상황을 프로세스 바로 보여줍니다.
- 테스트 결과를 SNS로 공유할 수 있습니다.
- 시맨틱한 마크업, aria-label 태그 등을 통해 접근성을 고려했습니다. 

<br>

## 트러블슈팅
**1. 이미지 로딩 속도 개선 이슈**
- 문제별 예시 이미지의 로딩 속도를 개선하기 위해 평균 약 10% (최대 82%) 이미지 용량을 압축하고, 인트로 페이지에서 이후 이미지들을 미리 캐시메모리에 담아두는 방식으로 로딩 속도를 개선했습니다.

<br>

**2. 모듈 import 이슈**
- quotes, questions, results 내 데이터를 main.js에 import하는 과정에서 모듈 외부에서 import/export를 사용할 수 없다는 오류를 해결하기 위해 index.html내 다음과 같은 코드를 삽입해 해결했습니다.
```html
<script src="./src/scripts/main.js" type="module"></script>
```
- 해당 이슈를 정리한 [블로그 글](https://velog.io/@mooongs/JavaScript-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EB%A1%9C%EA%B7%B8-pf24rg25)
<br>

## 실제 구현 화면
![image](https://user-images.githubusercontent.com/80025366/185788621-5340f578-213d-4326-82a9-79d23c7e706b.png)
