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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLE5EFFM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5DAp4G7kJj3Qhgs80Q6kLOiNSpo3keuk67H1KVROfzgIgbXcUrjKTBagD8swrsxBddAVUAEs%2Bh%2BP3w0%2BIo7T%2Fm18q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEvhFWyX6vU7%2FMGf2SrcA%2B1mlOqvfBtIp%2B4xIjCkTewznwVfJ412xtxhcQqQBZ4Pcj29bIrzITiyrW5SIpID1CJlfVq%2FzZoJdnvfBHCCY04k0zH4EpmQZjWiMKWXE9HpH9DIxFL8PG44NrS%2BJFZuF89sPo3RRU75It%2BkwtgSTkVM1Sl95h5At%2FY9vFV4%2F%2BMt00CCuXPM29T5mIMZyr%2F9JNqP3akXRTbEs2tQYZ7c%2F77i50EshzHgFBkrj48gnrwDwDTMSxOGYFbfXADImxBa2nQ2Fto8%2FNjG0Tva%2FQqoDCqzk%2FWndd7kz3GkMpuPvQYUhiHgGh8MZ5%2BPjy7qQADHUXIshJ8epkPvyTJ03FJDGsp0NH%2BGT9%2FKyaylOR%2FS%2BuiJUs126mIQRBR18kYCulNL7YMzeaDB4f46BSBYj4T9GRr9oILnE%2B8nUSQ6kNSoDjNhzgSpZ4pDvEPAazkG2qtNwNQeWlPJw8V9jdYVKH6XWcJMtSq%2BPZhUo0GmwdUqImj22OUT3Q25eORazn7nt8x8gUbVEmN8Tj1beS5zPmnObcDPrK7DqgUB1JrflZH2WIfC%2FHO9mzhurPRD8ky57xJS%2BEz3E0YwJ6qUjgaP%2FtoT7BtLchZwIPBQ874OSpSLpx0Uv5vfXmh48svqjrTEMLSWuMQGOqUBu%2F0whqC8WNItDRU%2FiU32ggSXLM%2F32XZ3jwIH4YgOrI6sG7DbcQ5pPgkD833CkitcIP2kJEinSLrgUhDEDJOT8NvD%2FKu1gHC0XFH2dRspBZMIpQ3QeEmY%2BEUJEfML906n6G9hVsgaykFkFqeJmeKH%2BRsM3955w11FihXdWXU%2BaPRX6k93xNXeuKAKCAWqqCqZLprndO7x0Ti7OCFEDvEg9EhTMAFg&X-Amz-Signature=ecddca4a74c1fdfd5d788a0a829428b650d466005e671d86f3ed3ae031625528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GXIV57T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd2jOhCyYXuXQx865ewltX2YlZjGr%2FgUD5IH%2F7E7BpnwIgIdCNekeoIhlNe%2FZCL5xsBBueRUT5fFk9RArOV1yHbxgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAYOFFkoptonoZ587CrcA2OuPBOgdisQ7wp5GwgHcCRYSuRfyo2ZqJRt64jC3rCb3dtauV%2BgQIBGR928JOWl4Fy0N0Nu1mHz%2BhD4Kzb7LTXgR%2FxpF3hm8neDrT4A1%2BABug4VJnEk4W5cC4ZCXDTXw25X%2FjurpF5L8fe8XXI%2BzQ5OqcwC1sSiuf1LFWBsWZyKvFPcr6gV1Y8QCM3Eoad2shFFzNLnSaAGpo0GhAX5xxbnp2zE9PSZbDhr0co6Rk3cB%2FCYkGjJ%2B%2Fsr0kp3LS%2Bc6%2FLzkIoWXRNYUx22W2jC9%2FuMQWw9PwmnFbMlLMBBmLmv7Rxx0Rp6Nvy2bGM7D3nlPNinTVwoKIxYZ7l2Gr0ujt2Thbx1sc46kz1xjeBS1gphuMvO5Jg7%2BHVbsIb%2FUvhrp97oEM%2FN3NxlDGfPLYgp%2FxnkMLOBOhg8xXnTPgsUMMwK%2Fe53uz2w92y6rrUMyYYE%2BDvN3k2xqddDMABtKk8ybLyjdd%2FmV9Z7xlWbdQsUbvMVlNx%2BEwM1zpNr3GPTjmsxUjaq%2BkW3BM2%2BCN6l%2F%2B7s1JN0QbuMeT%2FBglF46lE8M%2F%2Bc2uJybRZR3OPdrlkGWLIalVnNCdcPl81cCLFYJymM1RM%2F3EM85VDuZ6kBZn6L6%2Ba06be03Q7cnHWE%2FwFPMNSQuMQGOqUBEFqinqPYO4K8aqJtV2H%2BDyrER85asN2yz3Mxxs6Ci30%2B9bT6%2Budn3XPM02R7IwTalQuFUHv96n1z5RX6D%2F2JLAQjizF8quE4zxH6NgLTGF4TDcs9tdyUzoPHyshhxvSWVYCn9%2BTMozPdI7csOn5yvV%2FIPPYE6b0w8cNyf2YIHmhMW4%2BgJPu%2Fu06j1M%2BFnBN2ek%2FU7wnUAJFo7WYONkGPXA%2FUCqyR&X-Amz-Signature=6dd1a2292f24d4eda71734a9586f9e3a9e8ced1c3f0832ac684c2c0c71a5ef69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
