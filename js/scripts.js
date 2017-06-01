$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var inputNameInput = $("input#inputName").val();
    var inputDateInput = $("#Date").val();
    var inputStartTimeInput = $("input#inputStartTime").val();
    var inputEndTimeInput = $("input#inputEndTime").val();
    var service = $("#service").val();
    var stylist = $("input:radio[name=stylist]:checked").val();

    $(".inputName").text(inputNameInput);
    $(".inputDate").text(inputDateInput);
    $(".inputStartTime").text(inputStartTimeInput);
    $(".inputEndTime").text(inputEndTimeInput);
    $(".service").text(service);
    $(".stylist").text(stylist);

    $("#appointment").show();

    event.preventDefault();
  });
});
