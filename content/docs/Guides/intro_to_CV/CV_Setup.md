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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S24HX5Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPJSQCSOphH6HnNFHoe4FeKcTKjp%2FodPOc92mePkJ7cgIhAPGjOgOi3ZkrC9aq4np2OFZU92JB3cqtU5RTEOg9tOdQKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoVCPi2AIpSV%2Bfsgoq3AOq0DUHE6QKmZEQV22r7A9VDPrR%2FVYDBwdbTpXVsV27I%2BB6mJ33Guq53xdHkQ4QhLkPypfQIU5UnPLUiNPhU5xQn7147Wmv6zu6vQSwUbMoylEK1kzgbzN9dAINkOkV2vf3fPtmYCgNwFI5cJD%2BaQGpFqAp5BfJSCxb3NUV2EicKo18XjSNGqNdhhNm1zlGHnEb%2FBiiJYAU70Zq0AQE10iTC8o%2FkcRv0kLBmhDYbgn%2FQ9wSrajklgMIaO%2FDoduu6lfxdjNsebcE1dKWwEL6DR5l9Hn3tJ5wZ6vNUEU8hE7bD520tLrEr0siqiU4ASwuGyVDJy%2Fc%2Bp4azCqkT4l%2BI1lT%2FCBRv8p4%2BS8micyqHGb2ocH9cRkNrgoifHfgtnmGwcqU4O14m73LVFzyETad9uUyw3t5KAzBo9f6x986HL6BLni1ktdpMWiVV2Poa8dL73qnaq3zM357xd04sxw3V%2BSUhtRCRP7s5h2tvtTUPch3AyhtXDLPlIC1jN4QGj8BBF%2BziWRmPfwPva1%2B5P4%2Bcd1YpsHqzNtglr7sTuLofIm9XB11xlrTCuhX1Zwf7PPDI%2FZgTjIcwy3KQDTk7kQI9LQ61J1yVg0Dumxtv2A5sLbTbwhoDAwJHREjF22ChTCFxuzDBjqkAcyzwcVaR2p6X99%2FAsAL1Xp0rlrsJujW37TtKUxE8w%2B5yMkuyWVxv6RTySvlY9i%2Fga6pv0xIDJiCS%2FE84%2Bw1b3WW6OJc27BCc%2Bjmxw89EcnB476HunpwSEKQm9qHcC9yU8JlBpSQq5kbqCHcSginlebDpbP2gn7fKJKYkVI2uBhWKYyWhtBM5OlUWr3U2Ki7Up4LOUe%2Fu2nGv4Vx4eHVzlT3hqk9&X-Amz-Signature=5c420540537356018b4de4062c72ee95286a72d5c80fb37a07e06d1395a20adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3UKSYOA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFB6O2c%2B0JVd3Qw3KFqJpHc1jFJ6t5EiUWF4YVlztYt1AiBuxbLMp24cbgb%2FzTOQ3oQegia36bavndRsroOGFiEQ7CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZAN3FsTlxAInzqm5KtwDlMdbe5HBW%2BpSIx7v4dS7bOHrQA9%2Blrs4NLJA4FLo3eBcU%2FqbZJmlVZKU5DmLr%2F5WckDZm0u5N2N6fixJXSav9pICxltjhcjHQdDcQMbFHYrd%2FusitrgGq9Vu%2FAnoePykeBhtjLT2b0YkDMFSo1vZjG5ZN6RJCwuGBzMNjzzPuQBkqqpflpK3eQ%2FE4HD5LlIcx0Y2MJRWIvxdJYOBpgx57n4TA%2BXlbDWO%2Bb5gKVmhE%2F5%2BDmszH8SRY%2Byy50lWLLKIQk7hsE%2F9x6o4P%2BWwWlrPTSbRKSisMoFaeIc7S5WqhZUoNksjh7L58E1TlkXAtlTLM7uTxX2KxN2WQc8nbnPjC7Kx%2FNlywmtWPLBSxodK%2FEanNeUUyByExVfpyAsyWqqDr8lE%2FOe6N%2FkJIhEnOhuuBjjAOd29r7LoUVUVXwLT8YkK3LDKlCXiqnf4Q0DJ7kZT1D4yvcJwkIWAqfBsDJysX8FRhwiMFW2pYBIh21wCfQ7wdB3ZfiGsFjzCUxdChJR%2BSNqpJ2uZlexzH8e0qd2x3WmKZbibQ9YSlaXJobgX2Fe6K5WvrFOQyPNmO8HOB6o884X%2F%2BXf9xdylMjgQfLEx9ccgq1Ez0A8PDPA7FXJIlbUrg7WyTzmOFA4O%2Bygw0cXswwY6pgHlpWPS6Jf0%2FMbRd1DeD5sCJ1Ls3%2FRwTmnQRrmWxdVCsjLniS5YyZ%2BMnh1hFj%2BW6LNB8K95uUOA2FUudp%2FZyAFS4Ar1E%2Bw6g4vq4ZUdDhIpf0utKjLCeG0QIr0IfazE%2BFTaZP7RSmSQ81YYjPAaZKYBy9nnwcjCsP50cSRjO8YezZcjv6S59LgHTBckkZW5zxHOwQ1tssLEvOD8CMcnQ4aKiirajuuQ&X-Amz-Signature=509db39dfcdbb2befde119f11dc9a7a49173af7671979ad9b08190c50684899b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
