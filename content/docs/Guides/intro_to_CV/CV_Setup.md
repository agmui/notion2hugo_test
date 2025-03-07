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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TYYVEQM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoXdq5h5KCcmJ%2FKbLCEhgbC3MxhDbuw7lIgvKX%2Baoa6AiEA3%2B%2BsvAEH1VktspnxP5%2BegfTPELI7mbV6%2FDNxrl%2BnVMcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDENz%2FWsL81XO6SyDNircAz8nMe1ccPuVJBrqQsP1bj7NdCXQ5H5yS2%2FIuO8pbRW3jYZTfs5xUO3Zzjv%2Bri249EHpfun5veHDEnLwr%2FiU1jjbqNMin%2BRg%2BsdU8WaV7yr4uE6mLbMmcFBWanBqw%2Biu8wQC4iJDaCwbo07tRwUE3RgTsSIZWDMMtTZQ2P68p58xOOPWXn98TY1kEw71Szrdjema%2FDci3ZTr6DvwXLGbZ7ukRG3Yy0mx46chadbAqECUW70MVWopaLQj%2FobVxG1p%2Ft6lyHokU%2Fk2EBQUv6slkY2hdna8SacsGhCb2jojxWKrUQRvLHjPVluOZUYrllaD1eQcUbV0JUnLySTCryE6A9wH8l%2B%2FeZEXm%2B7xK%2F4YIJQlYEbDzJMtrUvn7jpJiJJq%2FOCEtzRHkNE%2Fkjv1SZ%2BfxgxRxftfbnSxkKfhimtRF%2FvHNa3nXuKkCt8tn2UF8z71n267V3f%2FNHy0TuMP6qZ1jCl%2B5q5AkYsaLlgJZ8rxPHMkr2J4QNUMa5jUVD3KlE43YjOFsRLCPzZ0cMqi4sXZ%2FZw5eoe4Z9s1EpHQ3yqX4FPmbQsdQAc31VQQHWQe%2FYQgk49gWvd4mmubUMOrk6Jbp%2FAynn2FKvh%2FNQqSP0PPnFo%2FWlCIsqwLGJDOsOs%2BMPPJqL4GOqUBDpqyiMN8LSoNdu4QTkqbWNGVplQSeJEpL3FbIoGZZky5x4124FclaCYDFqcUluN4%2FwOxx%2Fa23KFHDwRXKBdDXlFUPvRDZttUiDsgByFnSzymqQ1F4tfPaOQpq2BedU%2B4tw%2BgWGNyxQ%2F0E6XkbeED5hqmm2q%2BtwqgkeTjFFkCHhxsyANN1ymbYQwXYkC4HdJ44r%2BU7F27Mpo9I0Tvesle7%2FYYeiIM&X-Amz-Signature=2db2cbb697489172b01986380001b700d418860d94c57a84109c23a8a871a74c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTUCNNOV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMpO4k3EI%2FEvLiM2UYrzOkVM%2BG%2Bpjw%2F%2BgYN74B6u5RtwIhALbYPOCgjaCL6R5pxH5yV1CGkvzUCtbT4Gi9Ts3%2BHrIiKv8DCDgQABoMNjM3NDIzMTgzODA1IgxVaZj16AuskioR2IEq3ANr7ju22ax2j2oZJU0TFFh%2Fym48RsOGuVLvHmqPDD25Gl%2Bi1iOHQtcEDWfqB%2BBum9lIw4U9ZzWqZHIHHw3YsVqX0aB3zIx3Dl02epkNNd0geHg9Jo%2FiMLNRZQoatO41JFW57Ndb9wlTh9M6lpn1w2ZS5xQYleZ8Y7ZTcwsUnAtNOE%2FvaOOH03q0oNkNCU45WE1nyvU270gTIFUsrQ0F31mh4ZDYEdBVAmKgH2lVA662dLGHTz5HipfrbYBrUC1XTAmszQU4zEg7Vusas8l5veLBFauYOfgZflRvHvgJqsarrVdrIP8tDEPnacIr%2BKOqZkdjZYlt3vSUX%2F9dHPTyk9AFQ3aBqk%2B5HbZzf5S7LH5jcVZKpWKGCpJJNdvHckbdBXIRWasb0WZ1xR8g9OR%2FOZ%2BBVcKf9s4VOKR8LIrfpszKxzugLQOKq4TqP%2BO0cexXM5f%2BAN7cJ6EECccK7386waUt5K83Y08lrTjjOPwJ9Qfr4SZRjHyBvE9cfIvShO64GSn47tDC%2BFd%2FPduGnHtc%2BXfsZCOSk4mfRGyPlbTHg43epoCcWeWKFgmdv28ZK8XEV1gsUQQTMGrq7RKm4LsMAOlhpSIadR%2FzDj8BuirzXKEiQKiFoyBt5KPH50djLzC8yai%2BBjqkAaCXMHvPssMm22LSIP2KJU7PatwHyBY26%2B%2FP8skfETMO7pemBagyFOD01OMnJxgMHZd%2FlpdcM8Xfn86rrnStEk50%2F7KQezr6W0ozG7zeiF5QVaA0T6Kztx4zhH5ehfoPKZMVcUblL16vLZgd5Rcxv68ejpCMpK3AxyeLT%2BqJUzoc4npbghMBfs7fQ1PnYvuzGNgojY5uOwGDV%2BHtliEM5GZTL9Nz&X-Amz-Signature=7a632f1b2d10ec48be0e65c64daac85cf85a7c5f1017ead89edc6ce4c1281a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
