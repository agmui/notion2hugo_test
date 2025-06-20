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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARBZFWA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUn4gXxpoD7u8sHdLR9ED6i9aF9zXZnuQ2Zb8L0Nao6wIgQBgCt2LC5cvHwp0jCk%2BDbUYNsqqn561Qxszl9OiRG3QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9u3IEBxHCw4FLC5CrcA591FrFAs4R4K5yXqsbePkFb09w8EFsa1suzxQ%2BDCay5arRadgLsY4oWFfXrTDRAkh76K0tyIYfSMDyertpfJGPtodg9JZ0607cFBuIopXkzYncX5O6TwgUtkdJTJ2%2FWD9HymtcuHfD6d4%2FjbiMVnnvHm9NzqCpvjEAQA0z%2BG8MKFh31cTTUzCDR3IjMu7W7QNW8jBTGniq0lEfZ%2BP1miDuquDHSZac%2FS00Wru9GvchqL5axE1JGBgqclW5NexSbuCfMx8UeepWZ7EDMJMhn8g4n5vzz0AwkAVbEe%2BtUFIaBGNnVcfWdArxD3RHyOSzC6PZFVKJlqUK9U0yttVBo3saKSfyjT%2FRIuIv3hOWSUCF1QtRPojA2YI0xykFrlAxi%2FzvE%2BbSA9eUtVHR9truogTCeMb3tbDTLPvfez%2F1joIXBKhElHpGksgcFMycgIbwzHeAmp%2BKiI25rfks8AcpGugghJceQig7bm1Po8OcyZCbewO6tBW0k5lnbh92HfbwT5%2BBM8Y%2F5e%2FWZP1cMINoIz6X%2F2n0oZZPgybrYLDeAdjjIVHP42CnEwF%2FiVKSVGhvarYPkAL5VDXKn5gQHZRh5luInVrVCnOU0YvWIGdMO756JxPTKOXqcQNjKnRHWML6O08IGOqUBucCY0EyDASFPs45PkQ61e6RK4idEBci327DjJ6zahGeEDEhWPE%2FM9gqrai1UG%2BqZXC09kc%2BJc17cFG2iz84EB8NbQuKRf52cfLWVfckB5Iy4r9TIoOexOizN%2BrmCGRTeKzdpFIlVWmACC4aXjpR9vuhCouQgcW7UX4SSsQvwsjRZm%2BU2GjR2nOVo3iAWFhzqAUBfj8d418ECm0TYavCB1lS3%2FMSb&X-Amz-Signature=a0cbf66d6c011a7bbd46205b28a062e15f958d02b6de188a01ddca9c70487a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAN5KSSE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYmtjF2jNm94S2VJvdiULlPRFEBByzT2nNgzlqlZD6HQIhAIIuz2FgppmI4jEKBfrKOgIUz0q3kvqCqJc9vm1RJ2EQKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz37OzRDgs6jRTGKSEq3ANlTk079zF1wF7t64IzbzUG2EOk%2BWhIvaUAr9%2FQfnGDl%2F%2BPK9oTF2nRCr9fzJQRQcyjFyfNu49idZ70w8xmfR4xQO5jr9mOL%2BZl%2B0fKWgc2X4vZEikVpw9r9X8xRklC9TDBGxVm4qZFsbkENBOis0F8OHs%2BufwxNyfFBLjxe6OFuqXt0RaAx%2FAbGq3wq%2BXeImu4l2NdXLPyW9DclSlT72XACWGT43%2B9kCXMgLisQL5h0W%2Bawq%2BIkm%2BlNBViAPjsO9f2odxP%2BGLYv4UCLLHqrUIdxloJiOvNaATgTzy8vWGous%2BGfMopxwLizvE45Lwwe%2BjULL6ddoFhCMs0Ci9SJtqqI4DS6Gw3G7TSBtA55sLgrR6%2FEJ%2FfzQ5yfZ36bs9j%2FXQnHb4bbclxoZ0kXOMUAByMK2h1ECDr0rGNhtAcuzE%2BIvC19nOTbasp1NrM17wXSL2LXU6L75twO3%2FIbGkZESeTMv62jM0ibsfHhCy4nVMYc%2BiMhi%2FzC80jt8mhE72KKaSrnmYBznmwF1XvP91YavBKcKOzCSWgF65xuEY%2FNhRK5H2FY3gTS%2F7xr17f8NIpTmJ%2BpAtm2iFinehDdhfxTghipz5hXteUW6mG3lYBse%2BCl%2BbPJCy%2FU5wVc8acmTDVjtPCBjqkAVofift%2FcD7TH1uY4fCQIsFtprPc%2BBseL8YwQlp4zIoAEoxhRPA6MWVm37uhU5QAvbUj1U7LH%2F%2BhuNTPqCGDTr9ZmBxIXxjpH9LJk6k9sEUG8b0AcPRLOE5z9uk1jfO%2FxkRNY%2BPNKUN8MphcqLS03wUcJZn2GMRyZujt%2FqWw4dRlV%2F8y0KT7LyLtgaGQBXQAmNnqRqw9zWJPDGvknDRz14FqDGb9&X-Amz-Signature=7e1e0ecf63a3aecf834e9e67ce9c778952b0a72e8bda787ed73bbec78cd84a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
