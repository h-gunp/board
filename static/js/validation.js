// validateForm 이라는 이름의 함수를 정의합니다.
function validateForm() {
    // 1. HTML 문서에서 'createForm'이라는 이름의 폼을 찾고,
    //    그 안에서 'title'과 'body' 입력칸의 값을 가져옵니다.
    let title = document.forms["createForm"]["title"].value;
    let body = document.forms["createForm"]["body"].value;

    // .trim()을 사용하여 입력값의 양쪽 공백을 제거합니다. 
    // 이렇게 하면 스페이스바만 입력하는 경우도 막을 수 있습니다.
    if (title.trim() == "") {
        // "제목을 입력해주세요." 라는 경고창을 띄웁니다.
        alert("제목을 입력해주세요.");
        // return false를 실행하면 폼 제출(서버로 데이터 전송)이 취소됩니다.
        return false;
    }

    // 내용(body)이 비어있는지 확인합니다.
    if (body.trim() == "") {
        // "내용을 입력해주세요." 라는 경고창을 띄웁니다.
        alert("내용을 입력해주세요.");
        // 역시 폼 제출을 취소합니다.
        return false;
    }
    
    // 제목과 내용이 모두 비어있지 않다면,
    // return true를 실행하여 폼 제출을 정상적으로 진행합니다.
    return true;
}
