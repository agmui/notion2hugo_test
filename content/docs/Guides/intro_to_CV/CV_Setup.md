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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TI2S3U4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIGmARoSMifVM99SWDD6H8%2BZh994oQlAM6jQbrBKg1%2BAWAiAamG40R%2FfyfjKrODCKUS67tmBPJzDmS7UeUlrKbfiNcCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMKmJuyTTDd7%2BnsAQhKtwDZsam06UbctEqBAaeQ768r%2F2pbkVLeN1vI05SkNzKsAz06bEu4fecNiv9rnDuPaAtiQzGH3W81Rb5Gc46PqZc0K49u8bXUvo9%2FvRfI97ezKxiTsKfx9t7u5lcWJvDwTd6AAvPbWDSd836u2XhtfFzoxKaxA3LlatBPz6hB3Kibc1gnC6zU1W5KqcmDq0%2BZHdsPkS9iO30uP0so6NW%2FZRZUCjQ7pgqIt%2FjpMvoLMW3OvVcgrp6bfAaDXm31BDrimwXLva6YPIUAZN74ROsDsIX6h1jB%2BMlRTIgiNLbtZx9bVq0nXByfAT96Jg3uWAhA4QG%2BV%2FbrLWxucin%2Fzx4bHLFCZ6Cgu%2BCsBscd%2FNh01Yi28yJRaDKGxgEezy3c9zQOK%2FuHVwDVjGQdEKP130V9w%2FjKCyJbIZ3xP%2F5MqGsXJNuIOpbP4FHMgvT7PgdGtmfuqdH9mkaWqIKufI%2B%2BNdUEpDqxmOADU67X7g8witgONu26QDuozSq2ZmaEMkjCkDde%2FJIvtvVNcaNJ7eC7rE7N%2B4gY1lFTIKYoh%2FHHKevqVC61NVQWeNXHk%2FYQp2h4azZSWcDEO4sSHrX5YBvBWDPLWj4tFhOL21MWWlkUiLEg%2B2ZisQVVHXmKzawtCKsUVQw5YaOxAY6pgFvAYwMm%2F0AGJM1Z5ufje%2FVajZHE4lDqso8ZGWka6cqEJ3p7PAiRA7sVNCgh%2B7dbJy0Uytm9gUtVxyzRObOPGYv4l4X2BNn14r4XZA%2BfTllOMW40vKBmKBWSaIeAOefxHAsQnethoHYNsYum32DArYZBD1VDtIn6U6M0uSbY0KhzbRfQTJl6eP%2FBUdzeg%2BTpQzGy3NH%2FTiLLV2c5ftPcG9De%2Bmt6hls&X-Amz-Signature=aef783326e9f6c035353f6234baf0ee8c5552ecff55320df8f873782e0ded2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5KSJ6CS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF1jB%2BTorggyqRNnC2C%2F0zCfoQ23KAMmNSM2Mb7eG2YZAiEAtkaOv1REZNCeosmfzO4DXkqc4gQimte5emRRUvBHWfIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAKo6WQNvVGu8x8OLyrcA2w1cRSpvj5yKfmegcJdzE2299EZZ9c0%2B5x29Sgnivh3iv7hO9cKTc%2Faosxi2b1xs%2FjHmg49MzGs9Joe90gz1%2BRpoLLBtA26as23nZacKwylrqDAaYeqNzbPFWICbeEwXyzfHKJXBKU467OEagjnU5TdHwyjRjBoCaNC8Roy%2FuH%2Fg7VxL3ZSwzGcesE1CgYs0Sh4U0%2BeYeRE%2FEccAcFwxSC3XwgTyX9nm81nFQYNIxDaPzcbQqsau0d9b17Wb%2F3p6zywFZ4b%2BBRxmvprUgf%2FXiu3qme%2FNB%2FXdP3%2BNBh%2F22ElqAabW0%2B%2FBhmKGyR4QFErx50r38bfJiqouDwyFdGX3OaiKXoRvlljeKYIXhYpyE0gm3Y6JfZQU104qssigQmMkchwsZqAQjnT98w7Hba%2FP1b%2FmatDSUCbWkWGe3RpyJ8QUDXUJXLdQ%2B%2FvNtgWfZ7O3wlfVuxc52S%2B%2FSLVTyqHetgpLsuQ2VHKlFhb3%2BaT3JNWKWxehOSqjb7Wwdj7tqUO3WtWrYGNJsSc1X36cLidkeVkwepMtRA9e8K6qS2wxR%2Fgv8wsunHs%2B0OmmQZrk0kuK1UR3FaC90CIJ2V6DcIHHSMK0iEX67D799wHiytD1FvL%2Bg4Pf7PGkfUXTythMPOFjsQGOqUBu%2BH09ruweq1siIYd3QYY49w%2B2Ux1KEcYMDd%2B9%2BGSX19Df4hWfsQ3JQJz6aB%2F7u1TozKH9kW1nO8JH4KpjqNrmH8P4C0n7aNicmIXv2qVCL3vL%2BUYSv0gtXcdRNK%2B49NBqYs%2FgrWy2KaGyNnezQOfbEP%2BD6DX2EnkQdi96uhiYCFznKc%2BMYGs5cmbyqPNGCcbhxs7kv%2Blvc5q99ciZD5ecteH47gw&X-Amz-Signature=13ac962f0e78a36a48a175d4e3bcd08737c3e7b0f239ea7ee5c42a61e7e232cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
