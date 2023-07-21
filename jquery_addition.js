<div class="col-md-3">
    <div class="input-group mb-3">
        <label class="input-group-text" for="selectLines">Line</label>
        <select class="form-select" id="selectLines">
            <option selected>Choose...</option>
        </select>
    </div>
</div>
<div id="Stationspad">
</div>
@section Scripts
    {
    <script type="text/javascript">
        let getUrl = '@Url.Action("GetLines")';
        $.get(getUrl, function (data) {
            $.each(data, function (index, item) {
                $('#selectLines')
                    .append($("<option></option>")
                        .attr("value", item.key)
                        .text(item.value));
            });
        });
        $(document).ready(function () {
            $('#selectLines').on("change", function () {
                const lineId = $('#selectLines').val();
                if (lineId == "")
                    return;
                let getStations = '@Url.Action("GetStations")?Lineid=' + lineId;
                $.get(getStations, function (data) {
                    $('#Stationspad').html("");
                    let counter=1;
                    let html = "";
                    $.each(data, function (index, item) {
                       
                        if (counter==1){
                         html+='<div class="row mb-2">';  
                        }
                        html+='<div class="col-md-3">';
                        let Stationdiv = `<div class="card col-md-12">
                                    <div class="card-header">
                                        ${item.stationName}
                                    </div>
                                    <div class="card-body">
                                     <i class="bi bi-gear"></i>
                                        <input class="form-control" value="Work Order" />
                                    </div>
                                    <div class="card-footer">
                                        ${item.stationId}
                                    </div>
                                </div>`;
                                html+=Stationdiv;
                                html+="</div>";
                                counter++;
                                if(counter >4){
                                     html+="</div>";
                                     counter=1;
                                }
                    });
                    $('#Stationspad').append(html);
                });
            });
        });
    </script>
}
</div>
