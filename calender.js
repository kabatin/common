var _ctl;
var _youbi = new Array("ì˙","åé","âŒ","êÖ","ñÿ","ã‡","ìy");
var _ycolor = new Array("#ffdddd", "#ddddff", "#ddddff", "#ddddff", "#ddddff", "#ddddff", "#8888ff");
var _color = new Array("#ffdddd", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#8888ff");

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var week = new Date(year, month - 1, 1).getDay();

function CallCalender(ctl)
{
    _ctl = ctl;

    var html = '<table border="1" style="border:1px solid black;border-collapse:collapse;font-size:13px;">';
    html += '<tr style="background-color:#aaaaff;">';
    html += '  <td><a href="#" onclick="SetMonth(-1);">&lt;&lt;</a></td>';
    html += '  <td colspan="4" align="center">' + year + 'îN ' + month + 'åé</td>';
    html += '  <td align="center"><a href="#" onclick="ResetCalender();">Å~</a></td>';
    html += '  <td align="right"><a href="#" onclick="SetMonth(1);">&gt;&gt;</a></td>';

    html += "<tr>";
    for (var i = 0; i < 7; i++)
        html += '<td align="center" style="background-color:' + _ycolor[i] + ';">' + _youbi[i] + "</td>";

    html += "</tr><tr>";
    for (var i = 0; i < week; i++)
        html += '<td width="18">&nbsp;</td>';

    var count = week;
    var maxDay = new Date(year, month, 0).getDate();
    for (var i = 1; i <= maxDay; i++)
    {
        if (count >= 7)
        {
            count = 0;
            html += "</tr><tr>"
        }
        html += '<td width="18" align="right" style="background-color:' + _color[count] + ';"><a href="#" onclick="SetDateText(' + i +');">' + i + "</a></td>";
        count++;
    }
    for (var i = count; i < 7; i++)
        html += '<td width="18">&nbsp;</td>';

    html += "</tr></table>";

    var x = _ctl.offsetLeft;
    var y = _ctl.offsetTop;

    var calender = document.getElementById("calender");
    calender.innerHTML = html;
    calender.style.left = x;
    calender.style.top = y + 21;
}

function SetMonth(addMonth)
{
    month += addMonth;

    date = new Date(year, month - 1, 1);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    week = date.getDay();

    CallCalender(_ctl);
}

function SetDateText(selDay)
{
    _ctl.value = year + "/" + month + "/" + selDay;
    ResetCalender();
}

function ResetCalender()
{
    var calender = document.getElementById("calender");
    calender.innerHTML = "";
}