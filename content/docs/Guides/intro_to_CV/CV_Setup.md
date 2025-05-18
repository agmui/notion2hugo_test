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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMYLO3T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF5S9RNzUWcTo0pteBjBssriR1khEiLhRq54ljIA9%2FWAiEA5uCCnx79MQJnMvboAP6J35yJDJAXo3CY887EZgMvLO4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPcgDo00dpf9k2%2F63SrcAxUfVIA9ZvJt6bNFTj2NOwqPzfhJxfrky8g52oCSs383xAmz7A1gYEhJbG2RVKGs8HMFoAJSYy9XXp9YAjI%2Fj1asxYF9FAV7WMZQCsU3m33B86cnGheOAzidlae1pGSY8d5a6KKSa67nqiG6YYScYFM0f4blHT8FzEMIEDfWDkRCwxYK7%2BWFw%2FT6artVo7qn8CYlMB7%2Fi0l9NTatsusTLtlgIvZ1d9Goro2Buj9vNfd2rUshuA7kPF6QDi%2F9LZm9pw4nSbLLanypoHe5r9rGZNFk3sobGLAOGrpAI5WFjXsAzcf7pVEXm9DLOuuQW4LLeOcSebUW17gisugo1Kb92kNIfkYOcGO2iZhSDM7E3EC0m8aXCdTQhoVKwdGoD8%2B%2Fi2dui6S%2FAbhLeLAJIE8Zo4NQ%2FEk%2F0xr8NQLObDbpU81P2N6ITxQYUTdMBPaMEL2WDXRIaDfzHPVQW%2FnmOoVZdd4WRR5tbfJ1cDKnuXRCBZvsFuqwIxyeRcMM3POUQeoWGIVMv7uYc4ibaAVjNoZbT5faG6unnvxbQgFyG2d3LlAmWeJimviH06jLirJTNclgGUx2H7vPTQAhiJz0muPGKOBHaWVNwriL2NGFk0OILlzm3FnHrSrEmOIjCXU6MNrnqMEGOqUBBqdR5PevYRjRnbs%2BOtnzEboAz5qgmRljiAjDycwC%2BsYTCRylE0r7v6t8D22Q%2FPGB%2FrFK4x11vOvWvn9Y50EuixGJEubbt%2Ff1nglXmysJsju0hs5nA%2B0J48z08HuBKvpd7p9B4hjMqX9G2qbu0UJBCOCVlFYVF82M%2F5RqkM2RUqsgCW0BjU1y2e65gANMZPHIKxi56QSDXs%2BEuTVnJKlyfTFZqKwB&X-Amz-Signature=3e368b3be1151c875a794e7e656d760734c20615b5fff6d4c8ad9f3b32e7e900&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T734NXZ4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPSMgdnLL%2BwegYDU%2FId04yiqFypq3sB5TNfV234vtmrAiAvH3VTd%2F1UlpWScbpM5gjiUO6YWI1fjEwcoWOA%2FqGX6ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMah39ral7giUvR2nYKtwDhbX0Qigf8PJHZ6qjEpDs25npv32luOZlgr96fjSi460h%2FGVjWKJk9RBzDr80NyYAwKQ1EwTWwNdqSR2%2Bv%2Bde%2FCh9VqJdSzEvMilaWfMrnBXkNXKzJ5TXMt8un5RnK07%2FMV6lzZ%2F8Q8UM8w1r1WDqK9RNPdr8Vjw0MWzA3SQKQPdi5KMtD5mWQgGwUoHQYetC5KaWwGLCS%2Fee5pxQLj98fY6LhBzRE5DLnoWNZ3kKw8mQIw4C7RTsHZr%2BkbkNtBdWrsh%2Fv%2BBd0Z9IfP%2FQOrlmd%2Bsbh0Iu061O7SyI33JiFio%2BnbGxRKpMB8An2Tbw4G%2Bw4iopzy9KuRa8wMbMB5m5JV0hv0oCFmENKSbZxbxbSXG4MZ4bdEGHeCmgkRRVooWJk3vDR9oAbacvgPp3gQjSK%2FVQ20Lg4VOnalO50jMpsI33Xokwx6lo4iAaMgf2FHZoFMcET228F1gV4PKeJu5zBE6RpGXlwx68GK5pyFW0QBGfbd9dVJXvds%2FaeVBWKTZnWnzSKjd%2BMM7mQIiENbGZTgsFkFZaFxWW2VCUdF9EAELhKlbuXLQnxfpch3U1QaXD75etmaS47OK%2Fp4H%2BSGEOgqS4jRUeZVn0z20sdfvVfuV4h3hdQz%2Bx8UeRt7EwteeowQY6pgHka%2FPz7g3IkaEE8FLmEE2oI0BCy9h9e6alyM7PNrkKr3kn6bVgcdz5WJxXf3fRd5wvnS%2ByWTPAJ1ArVCOWdQIs0U6nxCsXGtayIzmdPKfXU036q8MrfKTDjiMb7naLP9sLzlN5EkjrH7PwtSlvUY6E0p3%2F8wI1JZpJCDVGzu1g%2FAMDLZp2OZ1p1bOHSHg5aFO2OWKleSd6087nJMsY60UT5TsOpzPd&X-Amz-Signature=f9e13f12188987f421d0f241bfab22815f6dd417aab2f3bf33e0c3c1b979eedb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
