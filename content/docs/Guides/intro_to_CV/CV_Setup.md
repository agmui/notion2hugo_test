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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSSDBGG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCI%2FK0uDyyv6MFd65JlwGIQncs6rmH0GDlXpnBdgoLovgIhAIRcAHpyDdqhvw8S8Nh00m8dpGNdA2YmEbgP52logZwdKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3%2B%2BeDHGqVtnK2SdAq3ANmv7fx53gGat1wB%2FV7nsM8CdU%2F8FpfR0Crf5Q1n16vkWflW8CGe958dTidPkms9FveBPYQ0AWn0zN2yvdVLS0j0uXbF0ZuSBaicjiD%2B0I18qvltlP%2BP9PJntVjgCwny2rAiu9huqLPHYEC2fh3q5yOiXNoINlTDN7GcCBYfHiOuEwHvzxVhwhC6ZHU%2B%2FgE9TIYmUMAf3C4nAzBPx5FcIL4q3db8bRoB82HDvurNF9Hw2JTsUrfM8JOR895a3UlgENvWygvZTBhast%2FXn3wRQYH4pY9P8bwXEBctHXBbyYymdVXYrnGIdb%2FAiL98jPzn8lDsMuUyzOhlldvUpnw%2FuzrhlAWO3QSKcK8P2c39JaJm65uvRbtCz%2Fqhjw3lL50WO2nwXaXQoTtCB5C7Hr0KQiRYZmk5DQYCoAobKxUIGaoSvqzKwgNBR7ygtoqcYst36evoKUvhMp68t0xSqqxsPUbAFdqgR0gmFdSKcIqoVdfdSM%2BXJZF5C8qjfgA1S6wk%2Fgm1OPLHCwpVWODpsRvaLMth9W8aM%2F%2F76a1htXDle1G%2FfQGpgiFJXae5VuUsmp%2Bkc7h4P5VZ62fG5PTCsH0%2FBqWKDDRfNdws4aQoBGjC6taJNd4Dn%2FRt0zIIcyTajDsn6C%2FBjqkASocQ1RZ5wnqvTFDNpnkAV9NBkMerGJfuQeA1cxKT5OE%2FvvWRCuDvBgUH5R7F%2Fx05tlA0gPPPaHEzkRsR3mBsnQgYwJDi%2FyVg2tlBtjnRTkvBN9CjqWms6WI3UeMP%2BwiQrSy63FrgLduLPjlquQOmYopveceGWQQuvT%2FZ5nsTjyBe75d1%2F790BsM10OedR7NPMz4GQPBvesIpMNzfkvuK3NG2uyN&X-Amz-Signature=0f542c24ea131b7bc6fe739a573178dfa6ef7357cb19d498dff962986c4cf7cd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYJH3CT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDl8ObGNYJjZZQCRza15KG%2FM%2FKVmLjkCEABwCOwkVpcWgIgO70jIvgAMSUI%2BMIwMHU2A2o8xCzsDM8RfbXNFatVKcsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHPuyjrggMZtoTqSAyrcAzvwwb0wd%2FmoyA2e36a1uSo6wdbTxASdq5SdzTaUtkq7MzpuNj3SN2DZiTekVIWBqZyanpaxvq1%2FcgsG4LDOofZZMpe2WwXK4gxRcPp4p7fkAwyBkdAY5EE6mC5K9cZztT5S9sFdDR9o65mPlQrmiEWGRInDgveiK7o%2FnvGpCu9cKoALb%2F5sTFbgzpaqK3DnLHTFZWuvxtqJ3rQif4C%2Bw46Z5DZq0A0OHAPHBZvMd0MSlfx9VD01JW4fhn3k4X7WKT0oYEybflbCgN6BPcrekyjeaOyKpCc9jHqoshafStGv9KKVvr0%2Fdx0sEqbRbqEqklcRnr4B%2BAGG1jfFhqGliIUTPBgS8WB6nzgKqAdHQ6HtMsodazrclLsJ36HjFQNX4TTNqIg5YS4G1dFyMCu547D1wtCQZzm%2B%2FPUasbf8kAsV9U%2FfoTR67XgJsqdTQs2UiovTAnUJ84NwQzhMnFZxQ%2FH4U9Ex849ZqxhCWgbEZUGMK7swcAwQxC9pK2mXdmTbQXeBTsVQ9l35Vuy6rEOgdvdX3n%2BehF5QePAuxOx0wNBu4Cqn5NLHuzHjpIfDjQpXqxcwK18g3tpLK9eo8Og9XlcmYZSlwfF5lhIMgcHXOtfx4oTZ685gwyx5uU6%2FMLOfoL8GOqUBL%2BHoHjlVDNxdd%2B%2FHFlKBVneM0r09XKVlN21UchNbkmcOIKTt%2BZz7T9Sgtdsed3xvXfY6%2F4MLszJ3Sjpt%2FD1yr%2Fog%2FDtNANRAmi2iLPMPytpIN6i6hCBQpC1Br4UTcCb1JUk7DPTQeDmhOrujsusNrm7CnaARwgXNUG4LYku%2FKWaKY5zxiXGz3ObRnAh%2FSndo1KqZB%2BYPS2wdj3Uh%2Fpjnlez%2FSZSI&X-Amz-Signature=0c1dfefa1c68e29fd146217283a4fb551c201e2eb5dc7afd7d3cf0abc9755978&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
