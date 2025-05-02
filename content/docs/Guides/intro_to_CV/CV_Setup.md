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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GORVJ2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCOwtrNhmviYRd3eI7VKAA0qy4gr4oUbNWuyc3FI76zRwIgEqRxoqm4RB2EHcj1CnUl8mCYGhx0Uhw1da3xNzDap2YqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMewJtwoCj5e7xJv8yrcAzpsHYWDT1EuZclmeZtu6fKE0CysHM2XylPCoSEUicRPFIPME01%2FJ%2B55YMg6C4enAgMMzUFyG39BCRbpam7fBW166CCMQTbTibs9vwbw6%2FA2ly4D4RXuP4xi6SFjpZrEBShoadAkyCtH8bffd16whs%2BF9ZN4t1XojYEfDod9xeCnvzJQ5xiJnb3JhW7CohRCtNNpm%2FBn4Tfhqp1tQ8dLEGUU8PWzINupWro%2BRAJL09EVlEUYdqcEz%2BamYFp5cZGms6BUl7D%2B4hNy2A1XUHHhAsToczZUfmEaXwlAMpNxxqDlwuYHpuKB6ZawgRIBr%2BVWQ9u%2FQaQjPMYUX7lanptCX00%2FblLtG2J5DSNFCf39Xd0KBZrwvwi%2B1i7AtKrBMrZQZRNj%2FcU8x5FvqKJ3uc0zWdrtujM8GubYCpZ3Y0CosVmejOsCYfTlodYuN7vrArFiGnMKtptbQuiJ2toUeG6jXIwYJX3x6Lfxv6JgxPmFRh168%2FeEheAgF7%2BrlmpoMBIdQLxqXxc8QuMafE%2FeyMR51xR%2BA7iO2LGPo2NjKWSm4zqwano%2FILeXT3m4kGaa0x3RZo6k%2FPOSWGCw6YH%2FgJ8%2Bvs0YdmBsfSadppEbIUW%2BTSIzwjz%2FQEyccAVgiVc1MLmr08AGOqUBp5uxXnfJeBSmh56bETpJKtWfo1c7ZTvJsxppT0Roc8mZSJVc09qH%2FrH6pj1BHMKed1lGeP3aXpjFB%2Bll8lKM7fdAS0OkgPVVbGTI9dF0AoaBdsXBQXpErZ48ukYi6UE2%2Boq5jBxwL81HAG%2Br%2Fl7%2FWh1Z2wsPgkn2nB79sLyGK6xAESnL3%2Fgo%2BgrQ96rj23teqNItFvf6l%2F%2BUApJ0LFI%2Bz%2BxpROGL&X-Amz-Signature=7f01096b5ca20c4d0ece8150e252a3cb575037df40969f7e5b34dd2bf81b8192&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUE2C3HS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCICGKvDGchgr9bYlPamfiBtVbxNm9fmwWJsI5fdriEhg7AiEAnc2ZEFEfhrLSVI5sN45FILhBmNF21VZfZofZB4rdZ2wqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2FizpdfCQURRzrNircA6SDCoYuzP5mocak7kTQ4tV25PLr0mxn9U%2Bz25fcnyxjaxmTV8RovAUN6T7UsqtSLm%2FsBINTQpuKPA8DZ6BHLIcANzoUOqfNlzd%2FljSZVhkE4w0BTEyuspeFO8wks5t44AOYRtKYfmKfjZpBHdp1758b1mEll3w9g3K8VGnuUAaXMlOvt33vm0EGJYSGSAJ3dnT47jI5FOyaC3%2Fyhza7HfFX%2F7QlGe8T4RFS2B4jIZ1UlzkJjDedr%2FUTpNhrP69p3OdSNW2nv%2FmbQpfOHM6%2FDPdGHBXkOJCTRgh1sEhRjsw9l71XtQsYUHboxIyejE6EeBHwmMi27SHV8XmEemB5JCevBuHMMilssECaokSiogp8j40%2Bn4GrToAOIujkeLL1sk3UTkY4D9Ia0QIGbo9QdFegWDeybCpd4WsXH28%2B85Z3GPorJxisqJBMPGRtiR4LHcPcqkOCiA%2BQSVCkeVscbmc4knzzERMfJUTIMDa%2B4W%2FrZFgGOEepJhM0IvFqFFXtuE1qiltk5YZgbNpDtJR2hzQxNJNjjMgwYcAe9IlP5CS1iuHh0NVOhB8JMEiGWLAnoNU%2BCPfG8GD5SRT3%2B2d7wLIxWWtmJlZGjWtEyli8x3mKym3ll%2Bjl4tKIqBZVMKus08AGOqUBgHUy86mIE0eSsP0G3%2FvMYvYPe6w11YrRRr0yQdH3kkg7depWbr5FgrL5Ni8OZHuFyY3Yg2pK8FfINWGT1bM4w%2FsGoov3ZhThemo5Dp6fMViSRlAvLDe3gsqI5hFefhNlyLmnT2bdhL8YEuaBe70UeSAKgZDaYXWaRvQ0AzPMINZ1aUYJQFYMpuShNQLcaJkAsHPqF5Eox0%2BQqMN6rlp2W486y11I&X-Amz-Signature=7355f320d389126422205f67891bc0f334dd36ecf7f085a0a7cc3bdf9593abd3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
