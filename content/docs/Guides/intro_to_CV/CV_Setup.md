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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIY7BPKP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAnzYteJDASQlpJQTQD%2FvgebJ9JnTOlMJC73b2POJMTUAiAIii6rhv4sv4vEXMRsZ9ya82I%2BV9IqONeHj0kTj970fCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM3NtcYFn%2BIrC6LZEyKtwD9%2B3Ats1JpPIpB7z4xE56%2B3qRZv3%2FWFcOx0kgFkgiDzXaWzdb8aq50TZQKP3xLHTFh8DWX5Unnxlio2oYLVQSLGnXwY8Q9uEV1DxxM8zKHuAx0Qtt0lEu4%2FO2Gj85Z%2BHUhC14WOOqglqPdz3BzHBAR80J%2B%2FLLAp3KXLj2WWGzb9kxCPYEr7mtQ%2BMLAYGtAjX5YGIJuNrLe63GJBEkXOtVi1eb7SGH7KbU2TND0VNF7BucmYH63355N0ot35t9SeYIyOobUR4ZmEbTF2IKeFn8clGvQ99lxiQ67n7g3WlkZSlXORgsWBE3uIVUtTPlHvXWwbMsrF8kbVIR4owztOmrpiecYi%2F3UftrzEoZ8kVHY9GRHGXrU0%2BYax02xtRVHsN%2BM6HkOvgM3chaKSzI8SBv4tjaMILe9nwoyHO482H75vfwJNQC%2FL%2F3l8zTgDKJVgl50Z62ILaSAHIl2LBxJtAHPqM3%2BBFFkQsQRvNXufwEYsPZ%2BCM%2BIu0IvpQ9yWGc8XMxNGAma%2BG6jbs7kYs2skJKxI92iEfUpVWNyoY1t619yZRF593%2B%2BE18qBtTohFNZBb7DOqJmHhf6y5r0QBS8%2BaUvH22MUMXL4g22ERfxM%2FJTaAClgaEG2o8ANDilD4wtt6YwwY6pgHYwazjlNACervP8cP5LMGOQY3qoJDfj8bcAK4xuFIcOkzbgmzGPB%2F147n9jhhTBVf4SAySTrzTFLddKrXk2zo5OS%2BCpfTnJrIFjkmNfmXi%2BnDtUBd1dqTNFhyV0RzIAdIb6fi1OC39dqmSdAB4uxiNidXWpfAA%2BpGbEGKZSWhzcoteeWKM6z0w%2FciT5GFghrkWc6H4nY2iW6%2BHszOVe5o4ZK1nXVAp&X-Amz-Signature=5e5076cfee3fa816f3c7a47f8b628a95512c2aaf7553089328d0632df7a3d0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVGIDZHG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIB1HQNlS0UKTTZ1qIqzwuJJ1MnkjFjoFh24JulLCSvaZAiBFjzBywYPU3kP2qcdmu6Bq09Ti3ELHgEt5kxAp3V%2F6%2Fyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMbnhhvcR2onIzhVQ8KtwDuwGcxMpBXdAGGAesB2%2BMG1GgK1fICYmR9ndxyG6piksWDZLZcN1qCH6a4ONwc2pDnd387DimBergRBzW2EmuQjagQZ%2BnE6odW5ZiQkWIRqUnlfnkycRZTUK2RJZ4npXUPHm7DvTwXkl6LQ8UAQvgjzN8vTIOJEZ110OEpfYt42F3a4TRvfS8rFKa4vRDVA9MvVFuFBSl44IUvkn5qOBe5cKZISQSS9DQ%2FOAPDCYj%2F3EcETOJF96MVjpchYmdQFouiw51AQf4Z8ullLLGwFH3743hPdUxxjN2z4SQpwoH0jYylEbj2lPQrrmjSXAth8oJngOpLo5XdNEWjQWWtDSLJYue7XdUWlWUfeh7IC5dFOp350wffSlWIHt5f0wqr2EOC35oVxPvvvAQU013USqbwzcanqio8gOkVZJDlMsp8jGX%2FlHFmZ9hh1KNrSPS%2FzXyt9m%2FujAou0w5Ms8KRyeLHMu8elwNaOoj%2BJ%2Fsk%2FDzaXJe%2BOAKRGhm4hlr3mkBxxdKI6WCDiMfFygWMEBhhN0y4gfRGhFddgcZ4dHx2lDrbhLwUt%2BmPI0dYQMHEbLf6SKughsop3dT3RgtBU0jQIHxdJevX7JdwbHkxyNTs8ptcbrHOGWrEbt8Pb%2FLDxMw%2Ft2YwwY6pgGYdS1J%2FaqFgZUuMk9G6HUXfGwM6QtMaVrFMPjQNXz3GwLBDxtNa02cZJZzFE3S8NLOyIYhNkwRM14N8ymnmPMndnZozVzqhxQVqNKtG3WqUysZseqMbWiqNA9cuiZvcID%2FAHi169F3G0NQoQpcR4QcdDiZDxKRhZPJqe31DQrTFr5XiIBt%2BtAC4BEFQgo6teW6CrpH3hhPVGFqoq%2B9ROkYjFqYK8U0&X-Amz-Signature=639bf0ae32ae5856504a35d056eebda7044c86fea53332193dbff355581ff455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
