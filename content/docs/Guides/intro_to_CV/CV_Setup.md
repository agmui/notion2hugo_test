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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XD65IO5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCR0AiiRbDIJUP1kGf1paay7v9FOnmta1V6KRN2dWdm1gIhAPcY2C%2Fq%2FT4SkJaH82GShbK53zSrTGQEXT1KaRMPln%2FGKv8DCGMQABoMNjM3NDIzMTgzODA1IgyNDMBOAgHPjujgpMUq3AOF86K%2BhSiO9OgX2PQT6ooWExrwVnCsR8l%2BoMO0PnQo2OX9GYTEDBH9jEfgdsFXA3PTj%2BEkfin19PI7%2B0IWY7Oy%2BrPR1mUmWTxeZP5r7PNuUfL9e697ikG%2FRUT9MVUGTSgaED1D0L2Q2jR2y%2Btyb8MNHK%2BihVUapsDIAWu7hJmu4q3bDaXs9ECxy1lT33ADNpvbGmS3kqTRQFyPgngVKoKE4%2BbKagEZYEvWpsuBD6ezs%2BBWkCi9C6O9%2FZgHbXqpXJB2UbEWAnqeCpvVdVR3FljUNzPbbyhUklEID6gego94ZPd64adGgDGNbYnjFJYmDeEY3aOJX6kEqZ%2BbaU0IhBAoEwaZumfDy4ALVKkjKEtycepw4j2JW%2Bjy8f7%2FfsSL5sO8E1MHaRULEs3CHdbminhwDfiML%2BsJe84Xvz%2BkniBIQATVyKHZE05otDXGEd18k1ItxU7KwWSyzz0mqNgRhCW99VVBMuboy88Pzn7rbstV20kS97zyNce9s84frIXIkmDTAtVULUDmDv7uHS4RVPrd%2BcFB3x3opnhqCcBNvEJ4vkPZvx%2BmYgC77pDT%2B4rgWFz0fUTFSzLB269L6T%2BgGny7KPAAHI4AeLLpDIGAp85NjJx6blCdybcod0f90zCVp%2F29BjqkAYst2vGtluBJ1HA02NzeiXTeEtVIvRf%2BvocuF2iYa2eVUMiDwyEpS6fDASCWDhrGyZWed7Vxxz6Yl14dUy3iFc%2B8IH%2F4oIq5sXmJFg8oqt10ote0aNtp2Zq1hM9kH7GzKurdqs95DT%2BmEGtImzfDNd2Cq%2FruBjOP9G7reSPGk73aG3MRDvbZa8Jh6dNu3v2bhSO%2B5B9dklhNW5R1WOqCu55NjsYo&X-Amz-Signature=c5104100b7e7ab714f82de7763b2f2a7577e383f44a1dd827941e88758f0688b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDOCDF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIA4Y64igb8aqt7Df3RkbFIUA%2FiCdbHB4hOb6C38pwsyHAiA5HH3H4R24gKTfBsWUeRQJqxpE8onCh7hzPjikfHjn%2Bir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMNWfBzBRsVGXMjygfKtwDG%2BgEyGXkkr9Cdi1a6vSKA1Mx6ZMjvkZPrEEV2xMpjUTjJsZtmVffwUrjILruXNgRFnfK%2FE7h2U1YWsjosg1kMwyzLf0G5cid2VD7Jemvz4oKMGnIbUrfFafz081Etv8noL8IGWBPdP9RWb85zkFeY7mdn15luChYfPnNsfriv%2FV73WPHFG9Lw79GF6Wnsg52UgFxgO2s1PWqD9zqhsBVuvIiVcUA5feFuRSfwN%2FYAKtlLrqAPDp04Djw4962UAKSDi%2FCTJzKHoH99%2B9amIBFF97ctXOJDtC9vEhPWVpp%2B1su9N0map5hDIKcmtFHbB9CH3bQ6aCpzfVPMuP8DnxQUWKV4gAsaCRi4KqI%2Fw0rrVtvdPyw6arSl3XxHUzSdZznUq6PcN2TmhzG4vXlntE2X%2FpgnWITbPqaTsECX%2BsHTJDifVb0J8UFYyzqjQyUo7qFU9BjaYW3TzkXy9hMRR3QgV%2BTUMIjakJ0Xigy0V6lxOdNnhFedBzvsAq6sVItIv9JuUuruXQzuGVAlPqDGvU29%2BqcI6KDcS%2FuUKtl8nCct6iQTqM4iUvxUSUEyZb6WbygYtu07xFZnFw43tNHAGt%2Feo%2F5x%2B4yv3tA6jbnIt0AkplSSvQi3XCDagsCWG8w7Kf9vQY6pgHF72PohCj5IReQJxcQr9d0ohlfRfE744fvItk7tensI%2BgD%2B%2BWvTIGfKIYfLIzFPG2kmNmbnqo7qgS0abGIb%2FuMupTopyCwQEX2j%2FCR7mDBybdoR3EE%2BqRDZuOiGgMgXCaRP8drJW4vlPGlHM3nZSM9MvcOMJewWQ9fIb5l9IXcLjdUQ5OscGj3GnN4qj%2BQJDdmj%2FuzQS8SJuIYgQwQ6UqOqGPAK4jt&X-Amz-Signature=73ee19bc4831684ad3330e07472e7f3609a36217d70b73da3b109cb6de840df6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
