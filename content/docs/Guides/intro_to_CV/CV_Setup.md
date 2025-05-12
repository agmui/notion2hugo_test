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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647WGF36R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCUNcxlWfYejiRjCrvrjXNOZYhOo4eJoUC4T0hg3ol8zQIhANLMsRuVZnsdeMTDjTk6KP22iEmWxFK0KeN%2B6GorX9RaKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwbq8ukex%2FWPuM8W1sq3AP3VG%2FRdP1da3rYG4eaS0D2D93dkxSZxPJ19Bf3nXkrISlFwQwaGNUirBYpBcQbPLQTKc1dH6TSzbxY4CpieyCXfaOrpjx4hrUex3ciwVJ7GaDIOHe%2BfErCv9bT%2FH6bmrQQ5ehZ3OxKxxjIYZJlqlTC60Q3hRjiH9ri4ns2f1MzLFY8kCPuLeBQQSa1Qw2TaB5wze6u8IsBwjDX9wAxpsrm7kF5vorxtqnGcfCkmmNjlirFj34PckVhgpDlbQ8k%2FAk8Frg7VI5bLvNn%2FecmpgNtjMWyIALgNTjYaUv94QwRNwwVKfE%2BeDdJUla5pL9LsTBQmEGVZqb01p0LHE%2BAAWksPfoOOUf2cMkXWSwNJ9UaomYY2DL3vhpZDfOP1hOAb%2FiavcUWVudJdCXLjEZ6CLLEb%2FEWjtO1f1jdAdTapLMPKJVmzWk9q9%2F9H%2BKphVmfKfHGonoYX0IeGNFfgN7bcmLCuJ4jP7bdmh2%2B38gtQ5WsjHYnmGPgjnAILRN%2BC523Ame7WsrS0Pdx3S%2BaNSsg3oXbjh6zW5kQD2KE1UuJ6b%2FxVnEPvF00AIkYKccPJ8uDT%2B0tmO8CZGYHWewkj7f9dvr5nNEbR56P7JroFKGLdRYIbYI%2BKG9JDdOP64rIRjDBsYXBBjqkAU3tJegLlPX4%2FVg7dV%2F4swnt%2F4v%2FBsI0EPNNvBIP%2F%2F1nMuklyeE8XNaD2vW44qap9kYiYPZabWTpFcexgslj0VRavOMAlrIzHckn0k1YtT9UfJHnymjT6p9XLVTJcWsFC8Ir6pSykgf3Q2d2kMU4oTm4cO4KdzvSfDU%2B5Zz%2Bn%2F%2FBbl31Qf%2FwbG18lm1lPcWFJeoEo0OPl8%2Ft8Xq%2FUmgwZiQDvrFx&X-Amz-Signature=72db798ceb5c89a96560277590b3c279cdb32a8ae8f584448fbf255b852876ba&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5C4CK5U%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIA3BClDhKERunj%2BjzeC1ATpYechvm6PaaIZTPL6FqbrjAiAl5LhQgzncvXXxx5bzJHO4S24Ll9gjWWMjnrT1bjbXvyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxaPMx%2FHC7n1VEUxHKtwD2bVsoHRIvVqp79T9yGTGUNG4x4%2BuRnBEQqiWcfDIq5OGLP9narY5EeayuETwRv6gIc6oeSBe115SigKW8noBZqfnv20tqB9Jm19P7aj1iuoL567y9N97LeBh4iH8xRvQDt74ZIi2jq7Zbrf1nwv7TWiYeYqEarWao2SOKqRbieRqogMBInjLYZJOnSJEvXYbQAGQfuTJ0mzs%2Bb6WINsPids3cDTxk3MD82lWSYwF7Vq3FBCehR41d2XvK1TqgLtUZhJC4u%2F0a61pvQtjUcgNEQg8dkCDr8Ny2k6Px6BmvjfZ9mitqAcN3kIK1o1OdXzChqKgw%2BdHstxRCl8qSzUYL5yuiYZ%2BSaElsmMMmtBRZtCw3kGQ4t8SYt5a0oPXAdvAevQqXrgR241xIVwNXB4q5Rxl%2B4VKEOfUJfe83o90BAz5kH4ZIDTkd%2FPej9gYwL9sMuKcF7sqfWkURQnW5Oq1Qe0gD1bqWq5IkjbTOxrlSYZxGMnItQw%2B1wQBogsCjU8gDcVdjnY7fgRskyNPTWDIF8%2BxfAf9SHqkbm3ExLQVjU4n37Qk6d4zvk9Ky6XHwtl3I7fcbUKE5zCMx6sIx5ZYvh8KopufRXnV4vXvfJTvDvL8LUb%2F8v7kpSw8GqAw6IWFwQY6pgH8J7yOi0BNSWwwzwnpxbyZujh5su28%2BKg7MeX54JlrTGCbEVhd03xqx3LGmZqex3q%2FNe6JCaQ0pyayCuMsG5opu%2FTAamxD%2FS7uv%2BEVfuqUcxVwRbvySIjc463tmZAWi8ubDlaJ0Pddhsa63GqjRl0ccX5WKpksPxBK4duYrBD7dRKxAnWctoO1w69gPsQV5J49fwRyLDltpgNyvG%2B%2FJgI8xuGpru%2Bt&X-Amz-Signature=6b4aaea381ba6c976cffa87eff680bf5ae093ca0897e6210983893df0f279960&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
