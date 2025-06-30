---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN65CY5I%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3LIvlaEi6jhqZg1CNH%2F8EFjF%2BFeJ0Ab76B1HvdOcsZgIgOEe0WN9cS2K1zIgNKxxOUISbAiIyfuBg7QRkoBnQWDwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyvidVJCX%2BC72NWqSrcA6E6ClYfjJ0MyqJ%2FFSkhHyd%2F9SZa%2FFhuuH1lnsHca2vhsxt%2BdnMvxSYT2Ulf%2FqyI5mUyWqew6PiCNghJmFiNA0cLEiJbJLzUixDBh5isQGvrsZiDKZROBt61ccTNerhaRIM%2BwoS2ieIEF88CJfwUJ%2Fl9CSwoBVsrNP3VRFm79iyi7dedMFlHjiGoOVknc1pT9ocABFHyqv2I%2F1uAzjhTs%2Bcz%2B67a1sGvNbNXW7UBitr2zkxLG8%2FivL71XfAKSCHnyPxvlv9QXtjL0JRMktlRAdXCN98Ai9pDyi7Fv04xpvooco4IBgCRqhtVXbNQj1VPQ6%2BgxTuucbkTHmPmd2d5J9k8zdwjM727itS9%2BJ3CmyAydQcmLja6aRZgPdnlOcqB4GcJib5rj1AvNbOJlJyQmUKyKqniRHPIsk2xZCRPujb0mUkdj1LYgwcDh4oPbwXAfeVswhj5YTRv4WUC0SPzXj9PGCKBsyFv87vUKOYtNLXT7v5pcHvkO62TWEEkoJRDocu1YcL%2BTwfDRgHsruQHlEUWS%2B%2Bml6vmC%2BCb2jnpB2wW1g1EJMsixtVmpHTvjScH5LrkJkl%2F3rRlCZQ%2FoRNe7muBFBDlpnS0tn%2Ff8%2F04BZh4AWV9rB60kY9pR2yZMOOji8MGOqUBxZmMGzbAZvVAyfY288lpJfIrV9O3fXqQS08Ov6mFcIxvcD3L%2F7VIAkgvNMdMnfB%2Bqt%2BWgVnASTXfUf7ofMOYrgAdGZklKL9JTO3UmUpqVFEmqXfbfSEJPScCn7%2BMxnbQNQdRPcwogs51l8dTX6ZYYRHWRfNIyY5QhairBnQWWl6YWeKx69ECPKpRHdD8e%2BZy8xZwno%2BppSVapfRZvL7qcWLnUnZL&X-Amz-Signature=61051627e69d003d20440948bf0de58695130ffef72071f761264e5f4ae28431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROW4OIE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr%2FvC%2FFbVtz5UI0xPt0BDwWUTWDjQpKcF1CnPq19xF7AIgaqUOoSorRGfoq71nkYXpsKBf%2FJGOmrRic7JARkxm%2BvQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJ5BDdwWwsMqYjAXircA7Z4AsjQ1U2uL3sIfIlJ3cxBpUGxCbWAYDvtsDeAOypw57VXs0lzEw9qYfHr8nRIKAVq5HN3TeqkQdx5Xxd%2BtEtzd%2FqDUY0rikUdiKkN6ukAdyf5Ls7O3D1174RvWVWRcDrRgZAyDCrf67VG231Lx2UmLJr6S8mQVe%2B4ZQuu3CavLPnDko9%2F7hP%2BtSkNJawnvVliYa4B8P2m8bMdsMt9acx95MHXv7616zPUA7HCMrMYbk3x926ss5VlfeAlKaf1QOYSbE86hUWD0EUZTJux61B9EYudQ0jE5Slqj8gIqqExLY6L5efdlR7M8vtD7%2Ft4AzCv7yLWIodVPYISOqPVyB5DGCazYDttZj5L6BYImCFxHEY7hIOsLtkCV%2FlivBen8%2BYpjgXAwN1LMaDk2se5xVc2PvPwCFyO0%2BheNu%2BwAALrd6pbh2IeHCWiyiYpm71zyjiRswzAlKeCd7xC%2F%2FHBcPHqJ2hL%2B2aXBYxyMsSx9cGd%2B0HegoIBpUt5RGokC3wv1lgn92eZn7Ye%2FZO8yFFlqbiI%2BHmTxNjebzRCDUQWddvch07u%2FRyxE2WebG3ExAzYUxj370Hotm79YIpaQE7kLdknnoTuCROUhmZpj6TRkdQUg1Qywo7p2H21m%2FX%2FMMuji8MGOqUBHBCIBHKpjsj1ppGcoCVpt7e%2F9Qg2FithRM46ReY%2BMS4qM9JdoNJ7ZJMDWbndXvAjozHljwGCtt2Q%2B9AtMPKXYj79WMZxq2nyH5JSGzh4uG5iNETzOxFeGaF31EVRNR7%2F4r92RHYBYD3tU%2BA8QMiUHl3%2BIcII7g%2FYJgBZz5L0dxGfrcSL3atTTw4oE74rm6dHpL%2BGEu%2FUUiOL0olccXQtw%2FstXSsI&X-Amz-Signature=f9c7710af5d7a3b616fbd5052c3cec65586230b8e51c3d6706c32157bbc99f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
