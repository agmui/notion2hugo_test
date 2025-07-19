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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIE375P4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0KTLductUDo3gqClMpYFvnxINbqPot9BcKzEm7QFNMAiEAtftYQYGM9TVfiNkBQtkp2NmufyGz2ECv00NSgUli%2BAIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZgdYz6giGAhlRUBircA%2FW8QjdM2W78P9jjtQeR%2BRP7hxlURsyBy1GSyxABx3YS1v0Pb1v30lJAejkACySD5rX14UW9MbOjjsmJelHVmaBAqehz4bjnTnGNoxalAP1ESXV2WvFGke30J0PPVz2Uo5Bpg0yZ3pXdCzefrP9aLCTOq%2Ffbk0B88uPLQIqtd8eep%2FIm4vGPjWIrQP6oXJWhpuZFbM7Rgb8xmMS51QllRGv1tzq4j8kw6fN783h2E%2BcTiHitDMoxEqfB%2Fts5VaeHESoj2Nxxwmya7Zp8GhKXLO6XflMNLvLp58axOjow1EtBMJDF%2BghzzVwJy76DDPqefjLHzAAVWqRVClzpqwsxTkF2D%2FqwdPFzxIcTpxVCluFaH%2FEc0VpHRl8qsFG4RdLYIWgObL%2F1N%2FcE7ow6t81DiqiXMpwjQcbVdq8EwPzstSXrk3GyXfBbKOUwYE%2B5NRk8pdDSozMmeZA%2F5MV2MOp0z5C1bkDPSCeHpRJx9OYV08pnmQ9fPB7Se0iTfQpnHM92iH%2FS9A1WB%2FeVsVCuC4qR8UyMFPwoXQ4PtBmfREGKg9IZZVZFU6deV3LDerHyvbtJ30oNoBL6wWhuCgBqdEfn5yxoFSLJ8gRk6%2FSVuNsmzq8rsNeWyPsGIDyWRsRnMN%2FF7MMGOqUBOQb6nna4QWEI%2BTk7Xr2p%2F88obuuHqOQidQG4pjF43pmPUCLM%2BHl2AVWyn7thEm4XiGWpAvicNgLmQLzaM8JZdpyXsCEr8pl4cL0jdOG%2FvC0z1o1NwE%2B%2BWb6EVgpI6OGUnVmhKgRZ7hqm5attgMD%2F6RGR0VtZn2x23284wcIZwB1Is2%2BY0kZJ%2FdoTKW72lRz4lPRbjxEscLZKBtkiqnkFNzYKL248&X-Amz-Signature=1f288db9085db416f206e1f05c248b1792abb1c5cd2e3e4d5c35b8c2c03c5e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OD6L5IZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B57XrZaj1GdLZjcbIZEajyB6bvOwL5j4TcVxyx5lCSAIgJ0dcWu54QcCnvQr6lS8rUVczFgKRy9UIzBRO5UVaI7cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO79vncW6KKEQ%2BE1SircA6EZ3ln0DjvZLt9gefC%2F%2Bvob4cE41%2FpInppvPMzLyaHxTwfmI80gQShMDph%2BF4i%2Fm9vUZjHN3NZ8QoGcl0BNXel6lwHW7GE28OHgNmDg8crlAk5Olg3SvTAfCT%2FTCzGsZ0YIGTK9MNqIHqdhN%2FsPTBdZrhlmgLutxU4gNjnFsYbbAqNfq43YSeS8fzEaW5BfgnxnoQy97tVHMWUQ%2F8Wa4HuXe4kDkt8BMO0rjmPwtFCGhmDU%2FJ%2BrmZxceJEiLDq7e98lMsmEWMSTuDRx8jK7tMc%2F2AQf8szViBEm0A6Ng0CHiYORWXXY%2B2dHNNrN2zIw4sDxFu1%2FwvN4EUWR1c%2B1Fz1wvLtuyfjmdFQuGjB%2BwU0p5ZW%2FUno%2FC3aoc5vKnMgu66XtO%2FDBFHMpwcAaTIf88yMec3h2wt4tyaw0Bq22c5M2Skbw%2FTz7nchHiglPimH7fVwpv0z9M3kwf0QdDuZdRFAXaXUf73W5KHoi0yB91%2ByPZLqaej5qUZAmersJlHwiuyTe6yYWOUBVifF0q%2BLlDQYrhhKVjKpNAFrh1pmEntG9dW4r0ygMLgwigrlEvCdpfrRK%2BlQsut2ocan7Md6p6LcmPBWUv%2B0mQSGzvLqZRdZZhgxA2NE0sWM78K0yMMLF7MMGOqUBb%2FvPy2mCYVoy%2BIwpYFV9rpbpbaKOQI1E4Qwiy30oWCy6Sqos16BpiBl0yoRD4awwZf%2BnEKg7CdZ%2FQrGuvruaJ5bXymc2g0RADW%2FbipfS8O7VrkoR5MXNmaeU27S5ZB%2BmyDxT3%2Fi5r4VO6WTPkmRh%2FBf7jST%2FyOPRm7x%2FpzMwgfJzDhF6HLs%2F4KNBQ4v8QelJzy4Hj5NgURybky3axEoKuo40sz9f&X-Amz-Signature=09a186d891946fcadda579b81b4c92c70f4e6485bee64ec52447499a2ad6cf1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
