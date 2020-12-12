const content = document.querySelector(".content");
const item = document.querySelector("input");
const addBt = document.querySelector(".addBt");
const delAllBt = document.querySelector(".delete_all");

// 이벤트 처리함수는 이름 앞에 on을 붙임 onAdd, onClick, onDelete
function onAdd() {
  
  // 1. 사용자가 입력한 텍스트 받아오기
  const text = item.value;
  if (text === "") {
    item.focus();
    return;
  }

  // 2. 아이템 만들기
  const addItem = document.createElement("li");
  addItem.innerHTML = `<span class="item_name">${text}</span></i><i class="fas fa-minus-circle"></i>`;
  
  // 3. 아이템 추가
  content.appendChild(addItem);

  // 4. 새로 추가된 아이템으로 스크롤링
  addItem.scrollIntoView();

  // 5. 인풋 초기화
  item.value = "";
  item.focus();
}

// +버튼을 누르거나 enter 눌렀을 때
addBt.addEventListener("click", onAdd);

item.addEventListener('keypress', (event)=>{
  if(event.key === "Enter") {
    onAdd();
  }
})

// -버튼을 클릭하면 삭제하기
content.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-minus-circle")) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
});

// 휴지통 아이콘을 클릭하면 전체 삭제하기
delAllBt.addEventListener("click", function(){
  content.innerHTML="";
})