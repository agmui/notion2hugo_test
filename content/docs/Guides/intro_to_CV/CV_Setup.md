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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP25QLPB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6zmXz8Dw5cgegO99W1zg3KGvIkz0ZChzcV3F4OWGowIhAL3JMfaWxZoaoV7byi%2FrKevuIAegKycssciF1dQ8Wv%2BZKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBk31vQsWmo3sRj8cq3AM2oVNyWFwrfikbvZqPZBrb2zt0JuimbYG%2B6cI%2BKn4Ertbiy5vlq0dTbLZajG1a%2FU49Ddr%2BAoM67Hnn2nxKfBj%2FjatiosIE0xXWRm9%2BrtKZfGqrp%2FSKfmp2EM26O5Jbe1UfZQYtN4VWE6zT%2F33x7eixgtUEls9bCpxTJGZwFbh5YxKYKED3sBIga9K93lOKTOJoT1yn8v1u0%2FEUPQAsOqeHKit%2Fd%2BL0US2FrP1Zwhkt9nd5nIV0QB5uGX01wYWMwEvU8RZEVK6R%2B2D%2FdYuvzI4vb6k5J%2BjXPIwx%2FGcImu7EtjjP%2FnSOgXhmHODlZvqvQBFxlN1cKRUO4x4YhRSlhOTNvVf0w9ov2W1wfsFrmTOu9mvoEx5HjHkZ2ZTa3E2SdG9iYOFU%2BEPiYjV8jeNLqsHLbXBp%2FSQiarJ8zmUR8agG0zKUf7%2BqGNYJoIx%2B7vSUtcaXRHWEnpTavhzVvBZT%2FSFOpeBM2vApLRhoh9WDHYc3a68AHBZ8h6Ga%2F5gkD3HQbTmHiKFswaOkLaKb0qh5OtfDcGRspv%2FbL%2B0jePrmuwZ2CkJlOHFuLdZ4fLswDXTaDafGrTe9zSXT2SDBx0tMy%2BRcYWSNeRZDsgCvIfOVCn1FCQx4XtGfqICCTI%2B2jzDr2%2F68BjqkAdtu%2Bf0fweXWKWKCeyaNBUoX1vDzPLxUKeY8rQceCg%2FWh9x3J9rgIDQfqKbmTg37EP884cZsBsd2JpwGs3M4em7AGL%2FAVtwNRiMcs2GM7QyETfrcO7bQ54YCtMCDUIZqcS1jNAJs7hW6vRQrCGHl2eKQTArlC5oObGlG6lFKYLE6JszPAeeskrvObWs5e0Rn60k6i2Q0uH9gjVqkZjeefRuDF2dc&X-Amz-Signature=d95a8673e6bc7f494e1dff8f95e89b13533c7de866d3d568157588f97f33289d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3YZ5D2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa7Y1sda3e%2FBfY%2B5f0XXaviEpNUwMJMnTbh2KE0RSGkgIgPqyN7r1qlQSJk7mKdZlcTF%2BK3EEyDPkQem96pq9qaCAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BDWF0IHZkQougRTSrcAxP615CUKr1l%2FV%2BTiC64jgip82W7eGmQo2AxE5yhyMXxOJMOLfztpfi5dMtqEdk%2FeL8ygUxBeXbM6zFjtGcTVyUe85Q2hE6Fgc0%2F3ryPZhqR3BNgsWvLYwu5K%2FNhw8ypMg4sYPHX1jyWcUNDQrMRN42R%2FlbTdcieJK3KXXHLnbTAWKObv%2BCJjNqdRyL8d6CqMl%2FttpXAWB8yoIJwi0V8uCuBrAVYwmAmxNtmtWZVfUJCnZE69%2F1A9gwt6Flkk9KSBVDi6b3WmYkQsxGRCCIms9SiktNU%2BctsEzYjjURBDwCdL6NA%2FItdNrxq5%2B4VSKf5uTp5XiyUOmNSOaLfza8Q5GP1GMWz45t6dXiFkCGPG3LULx8JfwIXyfSd1S3xiWV0f8Oe0hd61BYcllIuf9uWz1xIFjOThwZbaQroHyTLzp0duZhO2FKAtdqBaf6UmSYzPRJgSWN54ZBSBGrbeWqsgn%2BlIDKY5bkSPCP7yu2UvK4vn%2BvGs9wLwGYR3l9IGRgW4%2F1z7pfoEjj66KSfXVE4T9DKbv5pl6qXSuKwTRHU%2F20Y7LrXMYnL%2FuLR2LhQj%2FT%2FnijRNhTkjwYhl3SyT8W5fe69r6FIchkuyzVqxJLP8S7DqfgGsL2PhffHq%2B%2F0MIPh%2FrwGOqUBYnYn4P9iHJOnV9DDyycJa3KJncSt2yvbMqErnp4BpPqiAEuCqjSaFbu7epG6ryKUxEslonh7WBtqyzT3fRt8JSlXua8GbMDLFlpE6PWc49WqWqpJmweNiFn1N6HcZo1EkFm8iVJqyJ9OkuoCuRs%2FQf%2FEHI4c8sXWDvAprNFlIlley5nmzT%2F1eyCQ8U2aCLnotnvQ83w5rNenWRO7KsLuV1l5LtF7&X-Amz-Signature=8a2aa93be95dfe9e5b455488701252b91d179ebe091ae70457ac9f69fe12f135&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
