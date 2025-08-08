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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGI25BMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGcTl%2F5afszMBX68F%2B18RVhTONEPILXvmYbpuXBwOazrAiEAlSRn%2FrL6uCZeGQGNSjQTaoT18M6PcJ%2Bylzb%2BP0qyGaYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF311jL1ErLJmpQTcyrcAwnDr%2FEH3hg7hw9S8q%2BEJ1xh32ubcmyBkc1fezbYd33HQ07S5z9imVrwlNryl%2Fevb2GXQ7kr3P4KwtFhT9QM3LW6D9kJdqh8iik0P8QcxxcuDzRw%2BE8P23eOMqPy%2FcqlKVxtOsFcfbKeijxb2pqm%2FhsSYUY2Ak6uIIYqpk8Dy9B7G20ykgBdlSIF2fIh76m6779786uvPMtWChwF%2BAEDPxW0DWI92bkOoOE0GpX236QcnFzWaTLVh7blXT4Kgb4djoPCKYC6f0hdM2GvGfFMdzzAv6mRH4x4UXD%2FFUeuFyC%2BucZmguAckEoT7eMFAf3iFLaAl%2F55xRHasuhONZA0iLavmkxVXx6pz89sNC7Ru%2FyF9iOERKOeky6p4goHs5qUFSLVahSJCZxDPWUNtj6jHloDe0YO8rP1FvmodAUuYIri6vsr5bGw9mGR00QgYYufCjGbNKZiy1lOpGmR1PZPyz%2F859tnuD2A3hT0%2FZBeftj%2BkCFBcrAdKwaR1pX8%2F5hNDL%2F9EcS9lPmKOq1IS4V7GNHVXh3qMuH%2FTFsHIxU7XsEeMqERbiW4dIfzpcEF0kBNFw426mCcwpf90fPEXWRXcc6udyzjzS32jdvSMKsU4RgZBwALDI8p5haB5CQrMO%2BS18QGOqUBB%2BOC8bqfzdilsyh5DvH7TIfDbytPlsrUDQm6FVLArUwS4rRWq5USOp8dJtSWLpxps3P9fVHws3%2FBnf2wBMrhlziXO9DM2PDP4G6lVbZ3n8%2BBoIoAS2LY1QTJNxPGnZjp5wNJ1EUBB2hU8Dd1rGqac4ap32HmCTaSYI%2Fv7VzEl3RSBL8dBccUSwWATdT6%2B%2Bp6%2F5OwwlVjW1VgAeL5q3WCAwfaaY%2BH&X-Amz-Signature=6f097e8d387411ce1e3141e1803cf029611131049737c49fe7ad04cfda73733a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L7RJMRY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFSOBu6nOYuoE%2Bu77YWYWrkj7favDOy8kPnj5F%2Blo9p2AiA49Zrw8a7xWeushkARXuCR9W4%2BPln01zosKKKW8znbvCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn%2BGupe6XTxLKfk2YKtwDxGr7G%2BeeHvgZ3X79CryNabQt1CenFMJcpl%2BwerB4kTjzCHnGXmb7vC%2B4d35M%2BsxaqktSapUcZ7KqTxHGFxIlSm9gbUeNxfxOaQJiYIbMVShjqweyQlrhHD1hYmqj0PmgWflm4Z1v4E4Kr3BUmrn0kxNNQ2ifFB1IoDFQ2ibcfnULmt5A3IGfGwpWm%2FyvYMU90UDGqpd7PZoMYsGAyu11ibHjFgYb%2FnPb%2BpkUkP%2FSKwvsNqkzjl09XX3Y7Wb43lpTpuCaAjcZ6CfzExG5vBdNCZ7QdTRfi9UXH12QrcU%2FF3dE%2Feo2jGR%2BUFw%2FrkNUnrP2SsK7KrGYU9ZrLFJFdQYzmrM0nrHGyjKhXeshGzywWZPGsYrGpqeXnAB92%2B6DjYYWvbUHGA5rU%2BuAtkHHj21E5uvRZr9XN8UhPz7SLbiynuaddvbaq%2FIupRlLbwhvQLGwrtIPQMP3eEr4RRauYLnL0DQSSwtBqZc%2B5KwU38KXvUq1ytkq5WYveT7PVy1rQL%2BV9ON4BdLlzMVCLQ3gbzwr%2FezMvnTum0gNJWY9QCCY8OhZqgZ1B9wR6bWp8kXkVBtiNOyPHHyW008iG1edeW%2BoElykav2Twvhhi8%2BzThe5%2BWHTNG6JOg2AoP%2Bhuikw05LXxAY6pgE15NMP95iZVb%2B5ytFeoNVhpuY%2BDWT3dYG%2FJgjrcoJUnQ%2BxcsdFWiVuscwsYe2G0N00R14uqRGhMRb9P1cgPD%2BfDJDo0eHpe7lWKJvu%2B15DvPuxQgTnJ%2BMfX05GunwGx0lJTrS3LbABtLx3El%2BxCYdmBBi7mLEq88IDd2HXLyAvTP29OUmdmzZhXBZHHaZpfcJqZ8qCZytob9g9H4On9AtHUh8leRzC&X-Amz-Signature=2c59dca8d3a53c28f66ce5a201b27101ef921df160d8bbeae11a4313002ad16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
