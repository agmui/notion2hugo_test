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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPW3J6C2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCvGk%2F5I%2FY%2B%2FA2S7i5inrTmoaUlvJKwFff99HEp7NQLYgIgV%2FbSyOl3Svmsv9psrSAopRxktu6Djf70wcqvzPp8NaQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAlozfNXAN1IvRe5uSrcAzMvL3TxoM0DUQn1PCBbJcuFuOSaT%2BGBhkIE6u9AJ3Oybx7mvoSq2NYSJLwZlHApzwbMDe2kb7b5tfz%2FaDIGLPVSfWclLDmd%2Bq9%2BZNCvzlaGdCt1iapwy5gElFTHscKzGtGMmYrWxbsopVHap0csO17iCtAPeEiabt39ys0iO92crFYjPMLoUcwmoy9G%2FURDinXxmGihqyHaK%2FULReZxwCo5HMy%2Bg50WFFaO0A4u4VEhEZ1hukGLR%2F1y4PdEbtj49MpuGbRx52VqeRQZYlZ54QzueDUZEBTfK0zVr4yI2fiPiBcjeFdzRL0bf6vuZ0vbIf7IVxDNCPyCbeBANrKTp7rytAru0jHbWndNJl9yvvrUaQNKJ3UQ9Vthh7REz%2Fnc%2BnjqHfGp0j7yjzZPyUC5Dmrdj7Xhuy%2FviRR%2BtcsT80gD%2FNp4or57ouXsjUbIQ3M6KafI2QExwkUr%2Bd9FN2%2FM%2BsIy%2BPadRjiVvZIrID%2FiAHpYRBmL6%2FayhrYk0zXHC7Jt8KDB4ztj1UgYZd977zogT8hadRyRY3pXyy6DlBTfIZ1dKDw5lUlolVroALXuTCfL%2BfW%2F3HSVaaKgWK05dE7mk63TwVgent7n%2Fyvlf6luuCw69S2VE4G%2BCZ9X2yT6MMuWsMMGOqUBhurUpIbkuHS%2BY7pZdDlseaXP3NbNNbNPft1jaB17fVa95i3p%2B1CuCqOGpUIP6xPgiKHl07CX68juKFSgMg50lEJUS3nyuHBXXM1iZOyjRDqIy3gLiFGOb4R5RreceGtIGcbTHI9jB3Cw0LX8dfJmaIvzxo15fGhhSAtIQFQ0VRr3sH0lH9B0iEk0ZKj%2BbWls%2Fhw%2FkKNehpuiXwoAgHCjsekbMej%2F&X-Amz-Signature=9de20b3eaef6fb4495c0c2f2a0d55303c89ecf36e0f1de7223d12a3fbbe65717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQHBNOS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDkaZTFfo5zpR5AqL%2F1O3KK0rfnPqmcsW9X1ddsfjFFOAIgU4ITBhoyngIJ1ef9EM6eMdK0cEHofVJZ6Botbb5Cppgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP2cKKofO6H9%2F833oyrcAzqZucB0yujaeivkwDXn2xXvwWQDweRDhI7x%2F3qLw4GFscZw8PXnQMy%2FbmQwezkDbBRB5LB4ZfJH%2FwreU6TUG4TiV%2BO8EVW%2Bwho%2B6q674%2BdoDBElWKUcDgRF%2B40aq74d%2FOwMIDEOsxGpCaryVPTNlSC6Iy7HQ4rhLV73hUts3nhLF2e%2Fv37txSimzH8Y4o6kU8fpgP3qf7vFGBwHbSEg5Dsk1RLJ22yjgbgLRkNbdhrDeFG3%2BXxnHfYEdOv%2B0yMjhiMHqzHKQEweGknGzE5O6lXckY0isuor6ng2kRRdJq%2FnF8BAUyO555ifUYn348Mhr9NdekssKP0vNSFrk5yL6b6Hjw0TamQI0O2433EuI5d31s9cIfDcUDW5yvll1e6Kp6Bu7UJvWrqTGI9PQoLCTOpUB%2Bw%2FXoui6S4q63AM8vXouCL%2B%2Fhs5B7gK1C33NFIJ4OFq9tcQv6jQZtay1qFJ%2FqatSq9NsuMt%2FrbVUltDnAiV4L73CTBOOwkPxX1rFmgQrgeTsMi0aZvxvMr4BD%2BKITv7gKAmuNQgph9HbCMmp2jIw%2BYCChr29s%2Fts%2F3zWQWWZV%2F2cy%2BTtsX7HNO15jWLi0C3S2U5NwULDwn15D980J%2BnR8MVKmlx%2B9ce%2FEwdMJaXsMMGOqUB%2F%2FxmFiI89MrlEe84SzlNpO4KgzSut4tpwznrGBv6325c41JrQYJ8H6p1LnhM7iPuR%2FcYTNR7LrnlUBeJOGANYtTKsI5XD8oi1MTe13TFm4SMkdGO6PZ1rmggW%2Bls1GqZNwkgICJLcTKPUrLLQ8MpIANfUQI%2BDfVHvFzl4hGSvtFfF%2Fh%2BeTDLjCrVBlPpV5Uiu7Ao092X0MfAYWJFqRCrHs%2FlebBT&X-Amz-Signature=6ba266acd0f26cc6fbe41ad3614a3af5d8d4b0540bdba9ebb7b68f2e30bd1c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
