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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVJWYTIO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCeNRQDdXl%2Bgu0FbWkngPTI1Ft84lpzUh19GBQyWRCVeQIgNydBWfP2N7OY%2ByHtlRQ5AolSmN2hxnQRlOrDKva5zOoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH8OoJgVCFU5vPiSsSrcA6tAzKeCTeYNGgjqcJivft5V8FLsBkjC1eW%2FcNnwU%2FIV7s5DeCV0QZLdpB3w1UJOD0wU47Diw5WllRLH8K54vm43TWtg0rOyFQBUnyyvFd77WSIxRhhzvZY887XBBvPsMjCxlhPckHLgKJ5afTQffRfkUkGgKhZ34JLHArJVnQ38q2R%2BrQH6%2BmbqIfTeSyE1%2FlTDy0gfPVhzSxNv3mIc%2Bj0Oq0%2FL%2F%2FO7wlxIfr%2BlRYLsWBnxnxPzjPQlMPlZ%2BFEvI0VVcws%2FhtGkGY6nLxyIR2PFUTuw8lK0zSqxngUdk3HqwzSH6PiyzjXS1E7PpAvi1HO78i%2FZ2Zaj%2Fw9sjqGLGlwHt4KVtATEM7T6mQq4nUzSW04pmtaWy%2B%2FyDJ0%2BQo%2BSdzV3gJDFIAQiVGyHSRBty5FBSXwaG3aDd7jWze8vrcNLXzspUFci94YGYuo5cBKpJp9uiMsiqmajbBR6kGLnA7SNX53dVejYZCrnpJUapGMCtLeRiECmr%2FHG2kR2JDEYrANdEmqa%2BdngfZ8Ut9i26Y%2FOMb9ewY96RFa7a0sYwY3qgegndTlXJ57ekZhj%2FIethz5HBFNbFfTTXoXLkrzmGlPTfSCfQzkp8JLAMFYbR0Y1hN5H%2FE6y0i8wv%2Fd%2FMM6HosMGOqUBcC6w2C9Mrd8%2Bu22NGTY2HCPNr3WU5V00hQHKO8hmDq0NjMaGxMIdiwgUkq7lQ9RYSU7XmeSPO9XjvbSmQUszomFw5tG1dJJwDTzjky6%2FW2nD2u2wLyClci0AlizsBn1g%2BuGzip%2FeemvyhbFs0kOMs26o%2B36PPsG0af7SnzFEExglwi2bIdCdkGvHEYlCRiCxsZH%2FoAy6lG5OnRrZCgyGEmDDa7YI&X-Amz-Signature=24040301ca5870190b989644a8051d0a7efe124ead07a4670b427a94baa5ab24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VIY6VO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQClX6tHKb7ZxVCBxGwqmxII2Q31FqWwH7PkJJtz5ca3jQIgeee6SHZc%2FZRzFA1GQqNcszj1aWmrX26XDOCaOCtChqkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnMpYLgqNtf1hLG%2FSrcAysj3sCXgt9P5kX9%2Bpp7UW4u94q5NybfxMeB9RTwCoJPtulCj4ptLhSQosDxRt5TGeaKzJLF0LgVWCP1tDw5jvJPN781VgHcnyGd3Ng%2B5vqVLln1iwNUqHmMVfwKqca2Je3oGMDgdpkr3KUidrNr%2BVYU0CNPqvZ1hhBH3I2bCyD9Vas0paSOL%2B6eKuie0Fkc%2FjW2rIzsQ3q%2Bfjo%2BABgoUmwkNxLLbJCSgKwWf4OgvIFo4qoATfEDlYvMs79cWYeGoeNxWG1Px9RPbX8nnX70gGbg2klpoV2vpmWkmNZ4qwOqHGCRZdnJ352c4%2FThalkxaEgoHutHLTyqM9Ms1wZfyvpDB4XsC%2B5u%2FXJAdrn9358VTn7PEdchL3qRoFapiJL2CwtZg9ZkKByzdd1FoJ1D5oNO7N6U704NStGeCnekvSntEe%2BfkLMqJsvVF68QLM1e1AfuypL5zgm9QEpY2UibFzszbP8qJsgvyxexlpMtLwzG8lg3JbRGzjgwE2NyAonrv9Zng6PTsYs52SYJ3ZTAAdaFklGYduy9wPBkj8FtPqIdAfugY3i7H3WqTzUaGFKtzcU7L7PkFrvSfLVeG8YuNFJuVGgoPgJYRgg64Yv4TRRMB7JZa5YX9kpOBy8FMJWJosMGOqUBUYokD%2BZvVATjjHyMYY59dOgdHbL2OmHAJKXMbsIhHvh9ZdSoRDssGn4I6dVhsFdybSNPnKTmBgU6tuuEC3BkBba0WyPq3CvwhX8eLiNNtZU%2BO7izFOnbKwpwIi6p9O2XDLhbWwxSagu2gpZrqM6vUAvjgg1U3p%2Fq8DLQqw%2ByNZy2guNjGbkpCUScT0kzpT50vgKZX0dBqdS6nTZEm4ezJkQsN9Fp&X-Amz-Signature=d2e6f14147b615ef4b2c743d142a6a4c10161bf22e25be43371e59cc3e2e1368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
