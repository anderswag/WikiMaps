$(document).ready(()=>{
  //AH: Put lists that belong to user to dropdown
  $.get('/api/lists')
    .then((result) => {
      result.forEach((list) => {
        let html = `<li data-list-id="${list.id}"><a href="#">${list.name}</a></li>`;
        $('.modal-list-drop').append(html);

        $('.modal-list-drop li').on('click', function (event){
          event.stopPropagation();
          /*console.log($(this).data("list-id"));*/
          let id = $(this).data("list-id");
          $('.list-holder').append(`<li data-token="${id}">${list.name}</li>`);
        })
      })
    })
    .catch((err) => {
      console.log(err);
    });
});
