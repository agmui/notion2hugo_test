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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WUPP2X%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDWyKBaEW5Gd1N5XU3eEQZjKtZskqvyfIyLkHSNotz2%2BQIgRBBlQlu1PpsDdQa7voQeyfcDngWXINk5WMTeKm%2Bk6Q0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDAjt4XqGXaxODP6pBircA0njZnncZmakdb35xB0JWWpSDRH%2F0UFJQOiDXPLkYqS0iyqYaM85lyYXz5i5AEDXpzGDn%2BNuBxuRGnRIZigjX%2BG4JCFBK6vAgVe2VB3%2FlCv%2FT7Ipv6UfS%2FSJnA33ZfAFYXXwmiy7DKRgXIfebU3lG9CQzMHiTtUxCh4FFlBQIkQ%2BvshBUCaoc%2FYDVGaOmcD6r95Z81EZW%2F5oAzEGT9UN5UdkUJK0fyNIJ80CzIBZis%2B5gu9ISdH44TTOtP3wWrUQ4BfPR5DO0oteAPk9K9LPZ1bE%2FMOEvPMuWjS80OOGWg%2B88hsL39bwdb%2Ftt%2F4BsEmRA94pDVGQIFLYCgRBLRhVjay82dFZD67XdUqu4diEybOxahuqBEotkOrjj9FHbeeXXQjznofN2%2BOToj8j57qL4lWAH3uvSKcqDbL8jJOdyWw0s9ULsXtfMPFHkioocO1dNsSpU5oMscG36iAy1EcYMO%2BPvl9pbam8%2FfJ7zxvt1PEBPC78oazyVvrhHCEq3XcrIDFiAMeRXHCjEZ1iTQGPNwg9blsS1af4YfS7qLsU7Miq73o0zE0ydlmkCtwDq51%2B7WRwhcHvqTx42nrn848X8jhJpnfPqPbbRjMVb0n2%2Fa4jQ7a4GH0SdDmsKc7hMPqAxsEGOqUB6U4H9v1Z3Q7JHBVlnbLahIVgyeuU63CrQ7uVMIWhT13zUq96Dt2a89rlyDU0vMge3Jhst0LcrSlW0KUM5C1jkHdQhcs4xqRmWDpnFKFhQTa%2BmLmWZiJLUhAxKuCVSoUfk4zkaLqazItljdgFXiUmNEHpBMbFJxX1g032emY7FvhnjebDdUo4ZNu8TQCCz%2FuUjftl0V4cbFRT%2BvFQTV93Za4xztBK&X-Amz-Signature=c55790d5f513de7f46b0f44cd644f31ff72f0c4bd9445ee40c1ffb32cf5f86c6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQ3SJZ4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDwLeHqa05JG3duFpbSwe%2F%2Fxspp8sygmWffU5Y0eAhZlAIgHXas8k0fTLOlw0CVSBltFYbPayWop0tVBKqVX3qX1%2B4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFpnTG2gWXKqy9pKPyrcA8cAbALDxcbXs15tAu7cLIMyJd3b1rTyeqHxmgkhWgBMY0B03mTlCMtu5I38a7lzRIJzA5jRFbgz8Y4YL7850UsDpwIHBisw807VM1APpuWoVoPFUHv%2BOt%2BdmfGPIcZ6HZ%2FLKZHDOcTYY8eopNFIxN2ueFBvWtzzhWhvB%2Bd1hQZTn52lXvVv7ui6jlFH7TLrTrMUvPSKC16QdVAzhc3GauR8CGkuZiQEyPHiSt%2FuWCJAT%2FNnYuP4kSYrnBOSIRhJX61IBy0fMkINtgDMzbNgEwV4mpB6xxKfjOnWKEdQbXpIHh52N2dKyLl%2Bq7GMj5UsziT2eWVYda7GAftN43C9L2q7lq5Dxj97VWyU4O8fxNmfHr%2B%2B5PrFG8QZetg6Kz8TgiB0OUPC2rUCiduOtijJ55jbI7DbjcgBMNRbunPLjHmuKX7fpaZZV0lclxNvmp7C%2FcUFvIxoxgn5HjfcbGL1%2BRSpVABPBGRhBCF%2B30W5ovRHvh4ztZO%2Fh%2BgR5celEG0Vw03TyOpxjevQLUifH%2FdVREWcNhAStY06rffiG6MNT0q7pkmRq%2B6WxZm20hDttus1zmAIltX3x0f53f8i%2F3Ph1dbA3CPETbRXp9AvXE5bEq%2Fsb3huiQwju8z6eta5MKyAxsEGOqUBBPnJfeF2IqcfqcMSBDS31AffkCfmHSIXCsluIkA2MEDidhCFS2A4GGVVV%2Bev%2F5bXvzNGDf%2BtQYnC70sVNqGu2kiP9rPztViUlibPI65wMi%2BhKaiDf3kCcYmANQNpfe181DIcb9lafFNvJ5r%2F8hYFEP%2BqtSqLmoUaLjLrfR1ws8ZtKCsf9NupxmoVdskfcOUPzPjR0aLd9ooVVazhCE5Tur%2BgWzY5&X-Amz-Signature=a4a82c672337c559f84b4ec61a6609aaa8d5460f2ed983e1777f761cdf10335f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
