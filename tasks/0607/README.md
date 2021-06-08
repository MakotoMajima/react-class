# 0607 課題内容

## 1. Global State によるNTCIdの管理
現在はsrc/Pages/ClinicalDataPage.jsxの中の selectedIdで選択されたNTCIdを管理していますが、
これをsrc/Contexs/ClinicalDataContext.jsの中のselectedIdに置き換えて
src/Pages/ClinicalDataPage.jsxで利用しているカスタムフックである、useClinicalDataPage.jsを削除してください。（selectStudy 関数もそれに伴って削除してください。）

src/Contexs/ClinicalDataContext.jsの中のqueryは既にsrc/Components/FullStudyContainer.jsx, src/Components/StudyFieldsContainer.jsx, src/Components/SearchQueryForm.jsxの中で使われているのでこちらを参考にしてください。

終わったらこちらのレポジトリにPull Requestを送ってください。