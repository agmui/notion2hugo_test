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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IXICTD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEK2kRNzw5VKTjkI54avvLQ9ntUkF3ZVSeLrODfXExwTAiEA9HU4FWYWyEFDmoM2EjYQTHMvOA6ZSrk%2FJoUVXaKKe78q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKbDHyHBdfIGr%2B2%2FWSrcA6XqwgRbXzObn%2Bj26Q9heu40Bpnc9cTFBQOFstcAYGlRrUYxCnbi4zdnWmm5HZIvjxENQKzUbFRZVpCN%2BpLYamrj1okvMWfs%2FUNjSdukjw6Ikvqlwp7yXBJqsGchoGbdTf5%2BnOJmX8ZDYhfK7jNTZJXrqnMBS96qSstTJsheD%2Bu6KaoZtt1EcLbvKhLX99PCf5nHLrgH3yfnrp0x5Y6D8BEs5tjZgJSNeCrejJyTvpcoF%2BCAdBSuWWlRZVQouthA6c804q7nVDT9xL3OYlLbDHa0HZIUW2cTWXL%2BJ63A0dNyCl3azltwHCVKjIHgESag%2BBEh%2FBrx9WVaOatytKWs26YBYUmEFJRbjTHNxzI2bSrRuN6RkfD77Um2WeTD2NnFv17Y8DgDuyzhnzUGb2fTZngsU%2BNEpgY95VywyMFcmLqXVCiOCf6cd8%2Bu89GieUwylnfT3EaUtdp6FgIvyiI7sHH5Hgui2lcrEIuTiS2JqsNqBqXL02j5L111V0qjSauxo5dPAmstvb0LYqFberNhyAsiVgbBtAqWZulKOkeB0A9UJsMawZeNmQfew2TWIldhxLv150k%2BasXg11bH7dkmzRfHf%2B8GJXpjphhhSuM3Y20HNLdIlcfC4ZGE5v7hMOju1b4GOqUBnnP8oCeCg3zowxSEzA3SU5sMEzF5xMtb%2FHxAlqZmM0WpCUSt9UJR9YtUp02P4eL7UQEH7aWu%2Bi3vt9T0z49Q2KQUWnqxammn05tz7DoT4hWCIPCp8N9YkXRsAJVjer5skmZnHKQz7rW5sUu0C4Z%2B98m74SO6ywPaMqpc58Qd7crjLLeZnpP%2FkW4trjEdSGQba6XWVcPcyWnjzP5zP5TvTXcLHMgc&X-Amz-Signature=e2234f278bfd9dd6dd38823b89b312dfec0ca88e2b77606407c806ccde629ef4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNECEDH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWpTxi5H5UdbHn4pDI4Chy4%2B%2F721kdeHWwsklz2mwr3QIhAM89qepQ3oZ8V%2FJvhevjvf2ewwGy0xYt1a4gB8AAfhZyKv8DCBYQABoMNjM3NDIzMTgzODA1Igxj4ymfhTfQ%2FS2rWVUq3ANYBMsbNPF08LVXRjVGMTbmZr%2FfVdbTnOLiLDx3hHNMrltlsNZGhqCP6pjR8gc3H5ij0hUZumDYnJv0j8dw3A1RiRenM2LtS9QH%2FToPQJLW5Hy7PxbpLlfsVVPP4OK7GsLj96J8W0A6aXoALkK%2FwgDrq8R9qD8GPOv5Rj0K2J9uCQ7zZzCiHRPE4wZw%2FIveVBzMWdbp67radXrtv0dZavR7VqsP0B%2FI5q%2F4RwaAdrcZYYIGeojnZYWC0tQVT5BjRHUMfONmmK%2B%2FZXSvO47Hvb24gsGB1EYHi4zRYIKqCzedXNmCPLF8Ef3TPF1k2qPyndT1j1WXVKkyTTMJhz8hmVBXE6MYaUOrw2RZaBf6ysRzvoc1qI8sB9lKc%2FJ7MUBJ41bUJzbBpftdcysc%2F%2FZWAU38k7gSXHMKVRu4MMSbKBVFsq7V%2BQMQfARfQbGmxNrmaVqrLSOLCPJhtsty5Ei6sAERe3oXZka%2Fi6MroJeT6KA36EZpqBUYC6pbxXg85PDKICrIwA46hyhefRtcPhDG21KJrCpZToKgo7E%2FLf4tBhuFJnF1coDELOFsz8FUUlTw3YvghHP1wFTD5M2mQF1buxzwRa%2FSwou9jW0F9DQ7ieizcaJcziGIhFVulW2VBTCj79W%2BBjqkAZbZb879hHAgq0kPl69OhKG%2BC2dNXcmA3MZ0UuqTpVJDaHXkSqUc9d3Xmr9shIoi9fY1bK0O%2FG3%2Fi7BdXzO9TsLNT9570SiocqdXIum2TEo2igEufAekjGzLUiuEtAMkrzLiu5lSpWPdIKUbLRCy2wl8jSepjMMwrhSiKEyfIvNHj%2F%2F%2FuFr2WakBVGaxcvnFnF2HR9B0I9YmTAFkGpYWB955lVRZ&X-Amz-Signature=08c803c679ca900048a38b0fa3eda1a480f21cbbd398fc0535d216e16f3c3be7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
