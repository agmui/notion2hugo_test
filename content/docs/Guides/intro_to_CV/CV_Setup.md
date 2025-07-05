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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4QHXIM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE7WBPnsCtsvD1p4ZJBo7740q2hUhg8mCN205MGfosfAAiEA%2BHarKnBhkVM0I2wC42DHTYhmh7Npm%2BNZxLb0grWLzigq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMoRFrknCkImLmLINSrcA8xuo0LkzGNt0CKQ%2FbDKrwA5YtdG26pKUQDI9vQYeEfF7PVpobRKwxntxfmoS%2BWRFyzvkt8ZJOXTDYHrOoB06mujSmDD8fpkJ56gb09f%2FJgBAuhDq35Bsgn5QRGwaKlDlaBEbFCp56Mc0GycQDwbN7rpF8f6zcgka7442ewqbN6EFqYfRtUgl2CJjA2xLEuVCeLhM3KT9EF6TVL35cwXfPPw3KxCc3yQ8bnkwkN%2F9jQBiC0AXjln7PI9ECJ099Y4pblPpwlpPEDVQN0h1%2FxqmXCcqE9%2FsMhqeBlQ7ktaF%2BHe6zSGueZT6wCOgm9RF8cj0nIhvgdcfYaHYtCmJ44Xs9fppddNy%2B7lKyRTGlFWwloXwtwLKSyjIJNmOTJ9hHTeL14tEl%2Bw5pnyPYvMYOxp1cpDheB%2FiBPnPCH4wl80PLppavXu0RxYi8cLQWYtDBuy4DJGIe21GXoWmoYMYDP5TK9HhPrqu6JJz%2B%2F5m65apNSuYfqFYGq5QENuKi5NbylogINe3y3dgAc4VAtuFkVODeuJG51m7q3OsNYhPzzHOLtRcmrnMdMMzlknQh0IN9M%2B9nJt77inxdqmCwE1ow8RKNRbL%2B9gARvH%2FWXu12aBivVw5P6%2BMYBmd8xBlzufMKago8MGOqUBQL31ty%2BQ31nLIW9UOyKa9peyJTsNbdIWOhAoUz%2BFs2sNmNLac2bkdeoMNIcoRv7b7ZLmbImlW5670dHGFVkrVkAkuG1rUQ1lDTtmpVU6iDdTzQiLDQA9tUKzqewDT%2F6kmKSkmpplJhohtV7zLhfxmkx8TJJGwkWkUnFqGDKRpSusXjFfzgSlmFViIolRTFTBejIEsT1gvGK4TT7J7KajuMabpcfP&X-Amz-Signature=2f5493b319b979cb0e4dd570b08b20450271f7a57bca698ea1398dfedf989ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XRN7GHD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD%2F6kiASwqhrpCm4qVnCAX3cOLg7bf%2BBCoukFMrhpSRuwIgWhvYBt2kpjw5SGx1rP%2FNt0OAs2PxnPkxCVFpYZhqZ5Eq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLfrEVE3Qp%2B0I7LaOCrcA3Ajhuou2sWmfENR17%2FYp%2FHgRO%2Fxfr0yvY%2BwgTRV3KafrNNjJ3fq9mAXX05hOJ51EiXXvG5d7Cs%2FfFDtBv%2B%2BeHhqQSgsC0Xdxu9HTYg7z8HhCFlYz6MpUNcJ62Lkn%2FFuzOOv5gbUpqsoPfvDCfMNRiuT64Sssi8nrKbA29RTz6cEXnxw0VQ5RRQ4Xme3u8KbKC8R6mrYilOzcdY0lqnD3CgUnMficQOwbWOOtnOiKnbkzOOZ9y14z7KhenF6sQ8FxFNaDZ79OVleSLvEgEs0ABRWRSTHmm0UuG7oRtKrPcou1tBEJaL9BVY%2FZ3f9WoDbQDs%2BNq3LKsfElivxkILuzZujQCcUpNpHm9FU7f9R3%2Bwj8OVfm53iVayyfPdQ2A19ZL%2FB9VDwK8ajhm7xdEjTwaTXPYA89l9MBs5GMtN1IbeAsynAp9MVnuK5OqcMHpVvP2Tqu9mmqT2tWsffkg6wPhvDATLN05syPcvauAUghsDVuCR1c8XZoiAev1hWUruGuS5lz3R9Ir1iN9bXm%2FEXfukNApBfFpJbqPXqyqcFMbRveXgFFkErOjtn3Y0i1WI9GUTfnodxERkKf1s2a0wCQhq9Ya%2Bzj7qTPiqivfNHuzKO2L%2BrCHwQIsL0IsEUMMyaosMGOqUBKBcN0z8RqiIRMHgBOsbDZQA6ie7hACO8OvsjQRzqV8wyh%2FU3c5UNlX85xESIhWd88z0jGKKc5irkWj8jb%2BCAH5y5ZH%2FBcVguhPCU0IyCKFkJ6pXGAlPbNVJliE9XhwkSb1m3S7HFgaEFf89Lsp%2FwDYHIU8k1x7oVSBP1%2FXShJ75f7dP6ubLnzIr5NYG4pPQOTtQpMTXNEDj7d3AuGYbkIbwWSepM&X-Amz-Signature=d73902c8447c37610aebcb23c8d94dcac3b7ed9ee4ede9b96cdda8be519afbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
