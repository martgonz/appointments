$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var inputNameInput = $("input#inputName").val();
    var inputDateInput = $("input#inputDate").val();
    var inputStartTimeInput = $("input#inputStartTime").val();
    var inputEndTimeInput = $("input#inputEndTime").val();

    $(".inputName").text(inputNameInput);
    $(".inputDate").text(inputDateInput);
    $(".inputStartTime").text(inputStartTimeInput);
    $(".inputEndTime").text(inputEndTimeInput);

    $("#appointment").show();

    event.preventDefault();
  });
});
