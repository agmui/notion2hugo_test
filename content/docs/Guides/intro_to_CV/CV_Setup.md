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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5UN7PB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHWkZerc%2Bm3cSryQ8E5BZxjXGDnU1sGRBgsoaXwENo2LAiA25WeRRM09Zxe8xEroBZSVtvdveL1OtnYrKjE9zjYGtCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxgJ%2F30L56TojO8JTKtwDcJmXor4%2FEE3Zpvx%2FjsGe4a41AuwQSWkgrH0QHN6qRwUkEnm3FkbomyhXbyQ5L7J4RsvL40z2wZONCCv06U7RabjmBIpJPEWBwtj7JDZrV43tEqluo8kLD4P0F7DDuH9Lw6PgZZRa3nFCehRxWdT5DQwzGkqAQyL22bxC%2FbFPemJx9f9I0Y4Qkacx%2B86FG3yyVFcQbDkqFJ9HZn0B8Iq9xQX8EE0cqAfwUGHCiYtwvjF%2BrNzEF8QVJGE8q5BNV7KWDnXML%2BWbjoRx8z%2BD7UES5M%2BM1vvxYwaOAMslUbHrqvjgsdWnM7hLqTq8Jp3HsQ4rMuy214Sjk%2FZkf1CMlaU2j21f7w%2BEI1ZLWylDDeqp8b0%2FiyhpJ1lk0%2BCFc53niYv9SyrEJ%2F3IF06haV%2FxwP9A06O6JrPxEbTjKGvBisEUdBSb2FKT00cwuPjPOTznIqtUPDG8Hx3SNcQ1wK8FNZVJwkb3ynutavRBb73xmE0S%2FhYFfc%2FD9WW%2FzibirYLKxMrwmK%2Fk6LEsyV0VVN%2BHfcizW%2FwCYHTzVR3kGILao4VK%2F0PWmxjMHBlBlFs61iZNPoIj2WTQ8kbLNZ5Rb1pC7suW5vt3BN5JKVFx7kl9ZVPjlPm4GB%2BiIJqjASVCknsw8OWNvQY6pgHFZ6YMv3VeiLCyHchCvmKPSswAufrybYrExDe4wjptHR%2Fjw7s0VKAp%2FRr94FgE2PHNCrACA44rbhsdbQDeJnBgVKDka5foRDfA9jbjdvNeCoJbO82i4zRocNTuUle2lRn8E%2F3bAvZQ4K4gIetT%2BMkO8ru3T1oJQfoiYqiwFGQxcn%2Bm%2BbjD4mCicTAw9uLwHOFV3tlk3Jh%2BY1LzaCCvMgPPjz3%2F4o%2Bx&X-Amz-Signature=1b11ef1b413284d304db2c248163527009e6a375f65887dd940e05df4c4d0208&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBDSDRG6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDKs0pBXSSgz8kG9m7dxGgotaRpkA7yFBMKhfcXgLaMZwIhAN%2F9ie4Mh%2BBlFWrlId4OLHJYegpqM%2FOCZlqN11P0szyAKv8DCEcQABoMNjM3NDIzMTgzODA1Igxk78xEmwmwxw0XlPIq3AMKezK5RBTzb3nZ%2BgMu8oO0HgkCgsIXVduzYi0N48g3N0VgJu00%2BChY11A5vKnv5zbapHQS6KPhDnwspUYAcOGRnn96EDj8rkAIoT49Uhng9Ii%2BsLElU5yVvI73vBZpZqqcKPNHOkw9%2BexU%2FfrQ7oXgwpjHi89EROsB%2BcREze5MILO9sIxRBzjrAcPrL4d4nachdcoOZHtLwJZRXCl3wnvu6h5ijWvKERtffE%2BXFYm%2B44kPFX31vrbgfME93d6itRxsuJ6uZmprHCtUoNs0iOB7668JYr7JYW5%2BE9qvSuOBS2AK8%2BaDnppUlwZPyyFiiZ8tL4g5ZO6fwKI1xCWBxgPb5yBE2oSHtAZw%2F1DttFhVD7F7Lf4FzqTYjBrdb8WcrUZVP4inNAERwQZ3H6MdgteZLNLFTmZgUiKMGksaWJGnFJqeBh4uvuxtXJHcqZUwblzj5IWzdBXgkgVG1prb7uKrn3wMPVuT8lYImwlrqsYPY1joHsM77huYyZTADu1TO26DHhPtLgkTIbLQwtNvzgysybuZPO3X6yZwFhcAEwDtnR71Tv0wS1%2BS%2Fm4yV1S7hgj9H%2BZSlHxCoGwXdpv%2BatpNF%2BRz4CSF%2FMSlsXGf4yYn4MWsXICotie3Nnkc7DC75Y29BjqkAe3BCefMZ3F2AphgDXWBS4fZPWNH0h6i626E8bT4K6tOW17LrSai%2BPJNPsiqggOSxrsf07iO0AhiqGQcuca3MfPFYhWLVbMuwPZYqhEcwzOpY3ASVeqxRxdK7uLrSm7WiDBc6S9F%2B2UPtu1rd45gTwoBbmykgtndGqkLnwqeI0mfLUC5oqhu6T3p4Xs8gQwhJSNXG1A2CCaEA9BfaYAJLBmeMdsR&X-Amz-Signature=4386fcdb336dbdfeba3ebe769d0597e38047586ecf248b91afd2fd59afe1beaf&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
