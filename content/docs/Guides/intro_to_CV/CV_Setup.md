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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCK2NOU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDG%2BrNifRG72Av%2BPDJxRxvUTB54cqrrNyH3aeKeW7xDOwIgPdY2BCx5LLdk8p1dkzgyPld0XIzb0o7%2BLgq6vE138VQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDa8pBnUN45WLYTCyrcA7kfAWENlLtQeE7NMOPLKFx%2FX8vo1YowQmQ1XZkHxsruH1G3Zvfe6Z2kaozlMGX%2B6ilk0i%2FMIgVjqq6O63BWzJRv3xh1SuHRNOWO5bVPFetq4sXyp0vVcVRNiAgXW5hzmbPHnQ8%2Bc8LrACyP0X4RuxLctjPnty2Zx%2FV2KacRGgwhK6ENthqtk9TafENvCqjAQjAJHRKN4Nj8isVvOU6JDJAczALwEUNQoTdoAc0emhDIkDQ8jQRdLUSlKvzVSFQDJLV46A%2FktN4sgVPhRbh6tTYuXFYYHTWgSwzqoG9ADAiwLbXG8ZjX%2B%2B6lgCrWXSXn4XXepcZcGpGWhdFjCgH8Eo23fQzk76WBepOS1gCCTroB%2B5lj%2FoggYJhfhBw1mXeAka4FEV7MEop7A3u%2BIcJJ8oz9Jjam7EufjPaTNQSbprQEk3oT2v806a8EhM5Renjl1iBWn90kF4zr5WVEk1WlwKdNX5akULcK8xh1NvjyRDKi3vZAaEhiC0CAgAie%2FkRqFoFOQTQWh9qI1gzKlesMOdffgiULGJC3KE1VJURyXLAO7QfPMZgHpiOQW9zZmyjFiMTL%2B2pTROrbLLiwk7jwr51q4anM1%2BLLWJmKE6XLO91wg7rcYq8HwwxUnXojMJiH1b0GOqUBnsRG%2BpzPZhYIMrOb3tNyOgz%2BwthkoMcQyZIPo8oyY40j0xbtutLKeZd8ZdMPXnCD44VGmLQaUSbIk7A2Zc1EL3aLw4ArLPL0aunhOJeDG7jLuMtUjrZtnEWzgusybDAIYM7ETV9F%2FBUT%2BD1xsAuuYMVv2QcIFNdk4sCpT49qL8E9LSCejQq%2Fe33bfLTOvhHv3gxjUG1nQGB9OEkJtVJYTuXEy3H4&X-Amz-Signature=7eba1ae6784f7b07168c5459b95cfdba049251d2e907b4f8a44e099beb4bfbe5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MF2KCZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBQqeVv2bKFlob3k9M8mdbCO9Sw%2FOuIybTM7tNIctbGaAiEA5lJAfWhvwU27t12BdbWmQEidRpIoZu6gd92TOCWUVwYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCK0MI28EiPoibz4fSrcA%2BqntJIhz2ASguDO0lpSZEhptoyaLdrz5ILhXNAQC8D%2BllKIkWKs9ohLIKhFtZSgdGqGnPwq3uNkYYlLIGQbd7Qm4vtji2V1HAQGH0Z7Ek0MzNkEr%2BMypfjK7s2WMVVW8rWgomQ0b3Zo2v%2B25ZidaOn8tqew9p18cJScqrGAAg%2B0lyI%2BIFknLCFKUFRaByeMcWNF%2FgrpC%2BcWCk6Rny5sE50FiCfIA8D8X%2BXOC5OIQwrvRvDrsxj3T812PWGaP2NEeoGVOaXJ84weeVFJw2l9tstFksZyLETi6%2BBVoR%2FUcDCrkkhfvqTkEsqlbQR6A5qBqEaTWV%2B9hwqm9eNjtAIYGo4FL4JdQ0c9WH4Tavh1bRU6NUQGO%2BOkDKcs5In%2Bh7AR0qGnVByx05zFxq84j7AHjGr9UCvUcjf11Iul%2BO9SW4sy%2FxkEoTsW30miHgzX6TKehzRpLUxPPq6mbLbX4xQQffcdQXJB8vuOghpvfL1EYGHAx3RsA%2BBus6P2UkkQy1ivbaivJeehlQfCPPuL1b5Vxct3k5IA%2BHTJTDgyOAyuwfxj6nQAuNk7wepjDfOSe4pPL%2Bi7jhJ3%2FM8Zs4QzyrhbzibT0koGVmdKE%2FWO5MRLGz1VpHp0VngtbrJyDTXfMNKG1b0GOqUB4D9xg3oThIHtL55c%2BwfQuPNBitU%2F4Xmgg8M9QuiV2FHreSPZdHb%2Fu89rYZmOt02ocQLRatIvvXhAsVv9xDLnn91oF61ttmDoXVI2x9k%2Bn5hHo7zEv7K6Z9GEffIj4tLQPBvW2NsTS3jpDJH2Xe0NqmNscSofFaTJRhDZU2ive7btyFPM8TuZWavV8WBeWUU40AUfgNsEsKSgBnzSQpYgV0Ywe7oq&X-Amz-Signature=a16d3a6225af5be4a18de41b46ae7ed52e70822c16a21b9e303d38b6cd7be30b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
