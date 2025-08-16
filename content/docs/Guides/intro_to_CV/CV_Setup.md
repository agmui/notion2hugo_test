---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ22VVFT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDl%2BsNARiVuVv6SMD7LIozxqFgdZ3ke9NBv1MTP3e%2FUxgIhAJop2gTTBmyibMK55CerQBt4t0yPMFFHY4HOH88YwZ%2BCKv8DCHcQABoMNjM3NDIzMTgzODA1IgyDWolRA9PdS9MuKKQq3APO61r%2F4mXlUVUVfgNO0bMCri1x0B6y2GCk5ya9jYTuY5rsRcVcOowHxJ41pOEasOhAOUshZ7a%2BcHmtErMYjmOxcjJns4II1C9EVlbR49ZxHA%2BbUFcX99yhIq%2Bxii22FWXTmnZ7yAUNhhIIVM6kDeByU%2Fh0fkYRkOR5keB8eMhE%2BXIBBmDQMgJXysY6hAiZj6xCRgNisR7R9YBaMPvhQNNKWJjU6jZhwrRxHXt3bDYklSyARQ99B3EGBjdcxz%2BQco0o%2BqpkcVS38nHgveolDVEgRZZEbcxcEjYqnDUYwnvV0cGelbIFxCkuOTxBwJvlRvmk3niGuw%2B9LtbHde50lSY5DSyUoy%2FL70w9ZiLv2dRUV89SWHetal9nhGRvGLm3MJPTJ9LYekt4j1zZXoYVuU0F51xCJK3DFtf3LF6lOuRNt%2FTzjXkntSMv9k9jqctYWAZb5i6b0Ai6%2ByQ%2ByP6ytioDYs6muhT5zJZXx7MzahuB7ZitKZLAi452316oA9ostB8yqMiknniSTcGymisTy4MYqyIxU0UiJ2ssgRTq74%2BIszS0tXmrvFUVwo9h1OeW6znNHSwyNFZAYHy0fSG6Cl5B96xzrYhFsin%2FI%2BJ9c3Ak7hftxmhKWRB9N8rg9zDulYLFBjqkARqd%2Fv5a9mVBBymAVltm4vYbzSEiWoKyiqlWuiM6rdwRyVcctVY8FWMPGGiV%2BnhA7ZuU1jOVJu9gmG2XIvGbC2W8yMjv1CdCUJlkfmT8PyfEcmt9hTW3qBEMdFTTGeRFEYydmqtqWtrnikWKbOt97V%2FyaY%2FjRi75gXnwkluH%2Bsof1ywtsvnsQbFt2NLtefKNDRfUITHJldfeLuTHj8ufLMbUfU2p&X-Amz-Signature=0261c5169a62b852fe69d5adbf6a3faf3b266a7e6a638cfbbc4d6b38924b7331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJO7CR5J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB2Z2ke%2FGF3b9oXTDV9soiJGaQwNtED0kOHk7c1E%2FxIQIhAOfBO9e%2BPEybLloua5vv7x7vG6ko38u9GlsPz54BzRpoKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLCdZsupudzR4D7XQq3AMEo8UYGMcUpGitITsOr98Kq4HCPufUBiyNU9IgzTqLICXn6IcPVaDFivaRss8Li8dmnn5hDS3otTh8DHEuPfAJRQ3ZuPzXGclyWsehwgMapAd2JlFUqYj6nSPnIwMuSXApUEdLTzQcIo2FdfvCXsZH8cKy7%2BrTSqteUJAOFmvNCODnSxsP5Gb2g15Q3rvxn2tnI3i7V1X3MeQUsColCT7gFuzRkgtLK17kCRlsoGLTGKTDEPayS4sfhcnqyQ4Jy5sFTQK967R8ne7QikCUIwkGt7FBnlgpgRO%2BAF4FSaShwKIKqijdVH55QM1KvMORXD591HVx314z7SBpkCqH%2FuEY9P32LkoUqLhLZIbdVwhKY2Y2jy1ESfhPs2Woepgm%2BuMT3N0xwGd0bK76vDpAUVsG3pu%2FyHU55wE6QKSPzw%2FviNVAmvGMXsFXoKC1OqXYodi2vhFiOeMB3YsZ%2BJR53fpr52Sr%2BG1HjZC9ltlnNrQxYAtxJTKIJDf4CNuZ3KRWqwM9GZMsdx4yUp4vaZ8bCARoiIDxbSKt29R8wrmpdFLCcJ9qO8uISanQ7P7R7AnkBLBmzUKnDY7wHSdz2xwiaVFDma9irHRNAvWpnMWRilw%2FZ35hFM9IUUWYqNwH5DCul4LFBjqkATAfY5cDFcrBV27tpgqMI44HFxewDle%2B4Cb7TBn7vw3eYyIRbZP3ps47bbcFd6XkNF1vnzrxAo7vU6xvfmWIvXw%2BIlrTyQ51oPhDU199unQ4WNPCKlZMHU1h2bQajYr6pgQgHswYCHnuHaMnmHppehxEpp8FBQl4aHD7YD%2BCbO%2FDXPxTqnLitxYNxGhjU6L40nncURrpJ4P%2BfBvpu%2BZ0iNRJw%2F%2F2&X-Amz-Signature=4330c5fefc73a27c301acb4948572d7a6bef9fb64e46991d9f060adf14b7bec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
