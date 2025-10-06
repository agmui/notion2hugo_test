---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRL5I7M%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4GKM9kId01OEMt3RyQ%2Bi9aVnZLpPpcfzPUgUs5bqdPAiA41RzBueRTzJmyf5tu9Vm8OKzhJRznUC%2FSqbytx2pQwyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvl8cbb%2FizupWCb04KtwDMweyyIidtTrHfR80ivk%2BIxr2Np5s3BHQBHL33oOGm%2FyXvLIQwKsPzJV%2B8%2FU1GJHrzIEhdDj0r3x07e283UcR7z002kbqmCyP2JxOLykZ89%2BpFnyRsYEmEvWa65Zz2YjUoMAQZMYJxTitt1HREFwx2O9XeCPwXGHfuVa5mbcuoxAYcTio3aC5WCd7zKX%2FFuki8SK%2BbkgiTqtot3y4uCxulwBfzNUQD9Sv270HbweyZlZ1zKen7b0AVGdW12DfVhst%2FjqL2hvW4kr%2FSP%2FgbuiHyNRAA%2FKWDFrhZpONl5%2F56APY%2BT8X5XJFDi0TkufUR1PT0ZX8Nw6hq9OsyMgqKq%2BCmNfVMtnvIp2BhWjLBr46tS8puYFT2jzo%2B1FVNcX%2B7sX%2Bpzybn8g3UXZMGwPpxQIfx%2BffRLCNrhT2s%2BdzId7%2BQ7%2BX556B8vQP8RunncXLo7XwwQf5ha%2F%2Bjt5M1Y%2F9tt2vPaVyjHuA1uyAXrOTNnfMnDCEOi9wloZMjUi%2B4CYkAI%2FjgPeIgUcyYROsqZna7SBxjE6bBdax4%2FkolHur3lZ6VQGsdpdgmGF6XI4tJHEn7qEnbEqv3fUB0gI8dxPWs8ntDAnrgJnvzHfurcChEyu8%2Bu3mMIeSuWGCTmjZmXww25aMxwY6pgF97k2jIBFQ8UO2YhGNXhYcu05wPJ2CPzzvsBqN6%2BYW%2Fi77FwYO0f0UtMM2j9Z8beD0IoCHtwnGJ4OzSeVIjVBmcPwtSkRt%2BQHDJwrJQ%2BdtRgoKF55aoNhrFVT15fjkY%2BjI4J0PZpYokTpH6g5W3zMrBc%2B33wrplWvLxom8VtBiq37mrHYdKGSvcxIHsvykfOJ%2Bohu8pjlD2uCX3wotAJodOoSsexGl&X-Amz-Signature=007111b4b9d23862671d770f68ac8181ca60af528ee97c9222d61fe2e27c4166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
