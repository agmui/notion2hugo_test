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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNI7ILZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCPFHp5kGHfLlhsdFIDGoijl2CJmwN9NVkGMtIIX2xiNAIgITPAWwrl8P2AV2g7edx1BcoZ0KbgGkpISuUBunEDVpQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNw71P229XGEUiy3eyrcAwSvQqrA9nKKqc91wQFvqg5MCz43zJC11tCu6dFGFPlufIXTSMsjgqMKkUXQzQTDyBc4oD745gKAUzZ2t4FEIw24nCsYZnMZjPa3OinNkHDSiqEn3%2BL4ntU0zZ7g%2BlGhPaxtoGjJUXAR2dr988jRy8RpppEGx6XUmrw7eK3emeHBoW39kGsuoTeCbVFzsWL%2BMVjzU7r0TaOCgPxJfqcSM8ekBXr7VF10s8pxShPz4qg9C36F%2FBGjDMzPpunae2N9Al3%2FIpadEzu8vQey4Oby5G02RXpf5ALgZuNPllcn30qOAyei57lNJ7PQHgA7Yjs9twiKdgTkMZdjpXSngKQME8QNmHwD93XmQfzvxNmgLHxLeMur6SN8yOvRn4rxXnh%2BowyqCzYWzYeTnnAEAVbAoLG3NhUziEmQKlL5UK0CUWIEqz4AuDdZ%2F4OZ6rdCv7%2FH%2BeE2TDFmS3ffX5w6QUj3F9feQzIFkEPoDkxnpDt7HQbCfx8xlsncmcnIcV0%2BQXhhtNIKsP5orcZYwPgCM7Ipf9DMZIggt7xad0BQ434Yv1TLyWpoTxqcGODornEs2zvffp%2BwxpayM8YlJ7dU6IT6IN5LuOe3cjU1ui3RlePhPq%2FNpzYBLHsOnBwe6uKJMMStzcQGOqUB9i79U211VdJTZLt73Da8oedS46nC5hysNViGXA4qt8GXF27iK2loWESfVMg9KyBVmeY%2FtxQ6%2FW%2FxwQYo2kgON0GO3RG%2BirfiOTnOLeyViK3ynXLP8x21WvZOssUqjlKkA2njhhX9Ld3tJafY0hjMlB44e6Wx2VIfQFZ3QrDyfUUw3AGyA230p96cdf%2F%2Bpn1PcVLRgPeyXDaqOMuas3HfQjzyf8%2BQ&X-Amz-Signature=f0ac215bf4a10419baf5714c41e689796c639f0c386a3eaffe8603d741300ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZG3DTAX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDw0nEzFtkC1llkA8THsVkuXy%2Fa6Y46fY5nIgtx6NRTcQIgMIHXu84rRZZYN36rxx0bCESy1FEGuzsqpzavNfRJV2Yq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCjkxn%2BU8qQdd5XXvircA00HbGi6zY7SX8l8Nov7TZy8Wukaydc%2F2aaI8CzDA0NZl4e1RKIBD5DFnrzNQS7Vl4Z9Z0nxYBJ5xHykZuohXEQmPWo%2BmGpu%2BCxiG6x1coy9igdL0UOVNPB9IRif57VBGssSBGzzStE7OKTM1TaF%2FGTAnbaOD%2B8gMoTDHN8FAUM6kg70PE%2BOuSFlo06qza4X%2FxHCLP%2BQPxlSgzGU7Gkp1OjG7Xc4W27MvSq3Q90bTad8cnKlBx8wz8mYzZSBbAbgihVy1ewB7PwB%2B1hAcM7lmwUTu9FBdRoMFq%2FPLGbjVBOzI%2B6rrfm1yGe0nTau0Zr2DqFBulRW%2BeZq7xzhZX%2BmZZ%2FOyIAca8MxtdqLt6m9ROVQwtdVtmDZoK8ig0mQhBpTUmgVbIweXQSikMUBqGvm7Dolwwf4KkhTzwX%2F358emvuZ7ne7jDB%2BboPPhYWO76BpPLwfox4iOu5s8MsIoRlcHnqkI0ceC7yoABAZuxE2kc6L8Vw3CYQl%2BnAmHMAE9H31jHMhvfP8XefuLtikDuVYrhEbaUSH%2B%2BzIEd%2FFYb1eMVm4cyEMsTyCeagv0yRTEyNb3vKVR9CPHsU2IRL9WIe70Eoim9aFz%2B7uvjvqKeSrrYz3YNAmpzpIWQwe0HvPMNetzcQGOqUBSy0OSggous26U3i%2FbgHaDFF6wmCJSk5RO80GqktC8PtDGOJJi6nqvDNzRzPIelcYO3K7xDL2jXLEKpxI9WAgfwVJKpjzN8PbAgYb9wk46bRlxl%2BaHhVdCDxlgWF5LcrCqvnhx8vb4oYzRvxSgbW5bsyj1f0s995ZnBkR4w7QkZUG4lkHg8sOm7BP99fGVqgsanY%2FDOXCNXrfaZo3%2Bawjv9V35CDi&X-Amz-Signature=8d14f4f162d1f2d55dc115dffaff269657b47cb7d2a054a03b584faa336fc96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
