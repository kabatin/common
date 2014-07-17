----------------------------------------------------------------------
jQueryを利用しないネイティブJavaScriptによる軽量カレンダー選択ツール

CREATE Ver1.00 - 2014/07/17 H.Kabayama 
UPDATE Ver*.** - ****/**/**
----------------------------------------------------------------------

■利用したいページで「calender.js」を読み込む
<script src="calender.js" type="text/javascript"></script>

■埋め込みたいテキストボックスコントロールに対してonfocusにてコールする
<input type="text" id="date" size="20" onfocus="CallCalender(this);" />

以上