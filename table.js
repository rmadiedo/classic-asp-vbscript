
<div class="row">
    <div class="col-md-3">
        <div class="input-group mb-3">
            <label class="input-group-text" for="selectLines">Line</label>
            <select class="form-select" id="selectLines">
                <option selected>Choose...</option>
            </select>
        </div>
    </div>
    <div class="col-md-3">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Date</span>
            <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id="ProcessDate">
        </div>
    </div>
    <div class="col-md-4">
        <button type="button" class="btn btn-outline-dark" onclick="save()">Search &nbsp;<i class="bi bi-search"></i></button>
    </div>
</div>
<div class="row">
    <div class="card border-success mb-3" style="max-width: 32rem;">
        <div class="card-header bg-transparent border-success">Completed Units</div>
        <div class="card-body text-dark">
            <div class="container">
                <div class="row">
                    <div class="col">
                        WorkOrder
                    </div>
                    <div class="col">
                        Sap
                    </div>
                    <div class="col">
                       CompleteDate
                    </div>
                    <div class="col">
                        Product
                    </div>
                    <div class="col">
                        Model
                    </div>
            </div>
        </div>
            <p class="card-text"></p>
        </div>
        <div class="card-footer bg-transparent border-success">Footer</div>
    </div>
</div>
<div class="row">
    <div class="card border-primary mb-3" style="max-width: 32rem;">
        <div class="card-header bg-transparent border-primary">In-Process Units</div>
        <div class="card-body text-dark">
            <div class="container">
                <div class="row">
                    <div class="col">
                        WorkOrder
                    </div>
                    <div class="col">
                        Sap
                    </div>
                    <div class="col">
                        CompleteDate
                    </div>
                    <div class="col">
                        Product
                    </div>
                    <div class="col">
                        Model
                    </div>
                </div>
            </div>
            <p class="card-text"></p>
        </div>
        <div class="card-footer bg-transparent border-primary">Footer</div>
    </div>
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
            $("#ProcessDate").val(formatDate(new Date()));
        });
        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        }
    </script>
}
</div>
