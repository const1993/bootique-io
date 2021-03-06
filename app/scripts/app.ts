// Import styles, they will be processed as styles.css
import "../styles/main.scss";

import "jquery";
import "./app.bootstrap";

import {tryApply} from "./tryApply";
import {applySideMenu} from "./app.sidemenu";
import {applyModernizr} from "./app.modernizr";
import {applyDocsNav} from "./app.docsNav";
import {applyHashLinks} from "./app.hashLinks";
import {applyPureTables} from "./app.pureTables";
import {applyHighlightJs} from "./app.hljs";

// highlight.js uses own onload listener
tryApply(applyHighlightJs);

$(document).ready(function () {
  tryApply(applySideMenu);
  tryApply(applyModernizr);
  tryApply(applyDocsNav);
  tryApply(applyHashLinks);
  tryApply(applyPureTables);
});
