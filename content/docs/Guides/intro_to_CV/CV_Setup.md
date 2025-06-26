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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQ6DK4U%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCMzo7epUYGxk%2FnG1G%2BnYjfcIBlqV24ENVem4F9jyRORgIhAKuwKDJlgREHaA3zwA4F8e1Q5EkvgdhBrMefp00Gj2xMKv8DCF0QABoMNjM3NDIzMTgzODA1IgxVtjahkRh3V5mPVbIq3AO68n1W1Iv1%2Bf%2Fj%2Bg5onlf4Q8qFzgzgEXHA1Cy2jvmmZRsUXjKpJAK59Xat4wk5itGeOS8EIrwxOPRK%2FkkagSNmPcZ3gBDrH2GO32aQMgXzOqVLg4z%2FFjJW5ZfNlBHsBmMYHN7enmENCOvHcCbej1u3sV5PMZ0oVM2AXEGAwfbiMuTtxvgMRs4AZkN7cLvYUPeb1NdXEkXHBIzcRkeaAsNJNQnBz1kRfHQb6vMawIkSmAEyeV0OUDVGfYyUf9S81%2FJP1EG%2FqN2WRizVrb3eNqJZQn6FkD13zwQ7Hxu%2FOfQKNLKOvJV0vIydoUb9JTAKYulXqvVoXc8MEHDV%2Fr9Xq65a9W%2FEBdhjJPTBRkF5YMsCBR%2BCTVE5vZzf2oNGv20enEDQTuD4FiozVCWjW%2FBZNVbTLzwwFvC8XWA21nOkwW9j9lXCcqvlDykjo9%2B2Ol%2F4GAYIKCntmqrJ3Wf60xsYSIAm3enOF2o6FNg%2FFI8BBDldA%2BFJzzG3JRP2sPJtbDj324ILa0gAMeGBVoJ2ZACu74nTdKy4zDn0siu3uCvHHeeeztBr9Ge343lWT0ksgbrhCpdLOjKbIc1g%2BSdrig8hcjQTOP8uvxjVw8aBiAZ3JQf1Fuj%2FfoS0ckEaGvlUSjC%2B8vTCBjqkAVseLq13rPD9Mku8nMos2loH2R3mM%2B%2FO1ImbN8gXndDtEmrtWnK1OEw6rBfbHVCeKCncwScz8CSasAMBjQHMbMa%2Bb0zlIoDjSYp68MSVNkSyzDD6rYbVCM39RoDItYy%2F3W82BwQhJyGpl5FUvLnVS%2FZVu9jXZXm6H0Vl5JB5cmtY4q4XfLn%2FJYVQz0Uc1r8ukEVA%2BJQtfIT2%2BbMpICSw3MCayAWd&X-Amz-Signature=2653050d85070226bac34ba85d39d471c5b720c9f2ad03f5f94ddc9456a2e2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64JI4UB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCEz%2BU3V7%2FW%2FoHLTVhLu6gPNuAZQQYKseZV5O62uR9l1QIhAJq6WCvXBRLf6QHTGvGcO2Q4aec55%2FL0s9ZwtaB4o6fZKv8DCF0QABoMNjM3NDIzMTgzODA1IgzOI5hc5yfkXUMBVx0q3AMWGm4IQcj%2F%2FZvAZLL6orrmJXMKHuZDoa85EwS5OQU7WKpxSoI7NOtCPWCZbtiE0LaiMfuqiKsBjJUJneldnqm6wh6YZcGbvXYcRO31Doztdy146RUw6QjiKqqWhAOk0yoWztH72phPgDR646TeOQBntZUAnnxOQKWHpA2hfYCywj9IP5TDQObRfjpjuJHsBXNAWDI8zMrdl%2Ff3JwkT5iIe0KpL%2Fap1DxPg2PT6YOfFNRxueJFs2I9ouMgqEM3bs4dSP3%2FJhLLACwhgiOG1dMP1wsskWH8hgsiVFij7pwdrjSfHyu9lpT9kdr7poZh9fl8lzbTIXVtw5u22Z1Jp%2FjWjtHA8UDWm3il9lUiDkqSRda5WGDvmeej1F4eTBtFlgzFC7mog5rnBQZOEb%2BOJ%2FZSkH5epjXN3jqaXQp6l6Aeeu5vomaKoAkitn7rJkjmq694v30BAwq5fjWlJx%2F9Wjd2BioFpm%2FM3fqUsZUiXNmqIErF2WxwLtNAk5N6sKfwUSkEtiVRq3lzggw1b4ue2pr1JSavyaa3QfOzk5Svc89%2BV%2FAGSJ5C2UNg7vm583CUg%2FK3t0oU%2Fpl%2Ft%2FaRtCDCKLl0MC2xKMyxlsUQMUOJD%2F1EZXksZqVfrlD4k4%2BCBgzDo8vTCBjqkAU2M6373qd3oGimlWgYomoIRIlsyalmRGYdWO9%2FWOkQZF4tTof63t3d%2B0dm7YL9kyAllbtvM6YSuv3r%2BzcIXAvwGVgbyTmH4wPURek6%2Bq%2F93a6iaVZYB92fMPZZ25HYel1MIErRCUoH%2FxdVtdgEfbogJLJ1x5FFQ05TA95nJiLWWqA8itV0aMmQYQrgqHxSoLJ17GegbLSw5%2Ftwlj3DVzU2iWdiX&X-Amz-Signature=2fa81b45273ffa709a0069f521fa219e2b567b4b0c0ae4d4820413f3ce67d3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
