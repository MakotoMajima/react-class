# 0602 課題内容

## 1. Study FieldsとFull Studiesの連動
Full Studies APIの結果はStudy Fieldsの検索結果の一番上の結果の詳細の情報が取得できるようになっています。
今回はStudy FieldsのTitleをクリックした際にFull StudiesがクリックしたStudyのデータを表示するようにしてください。
また、クリックされたカードは選択状態であることが分かるようにハイライトしてください。
（タイトルの文字色、背景色を変えるなど）

各Study FieldsはNCTIdという固有のIDを持っているのでそちらを検索クエリとしてAPIをたたくと対象のStudyを取得することができます。