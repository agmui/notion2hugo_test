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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSNGW4QH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDf6TEpjMU5OXEL%2BafMVq69nIsHqk4EHfg5mnKMFzIOrAIhAJXthiF4H43mD0zYaXFC7KaWwVJRLLnSFWjh7dAEsOofKv8DCF8QABoMNjM3NDIzMTgzODA1Igzs2S7k1byjUONW6gsq3APcFZZAE4jxcuIXDMq3bvEW8tdA7%2FiGX3pmJC273OkFn9MlQl6scElbNljVlAnOJvpQ%2BeMKneK3OoU7EhpbA4trjvTVWsiMQtwr1ivixm2uG%2BS6WyucXYb7Atrf4372dWrWkj9fg%2Fq0BWZzez6b864XIFTqdAlXDJlXL2hNrFBg%2FwKK7UHqPCslZ65evN%2Flm%2Fc6aMsATxT55DXBkoP3%2FZGOLos%2B22x%2BDhn%2FXaz1JDXB%2FdHVXGicEN7MCAY1XXuys4lzYBzhQg1BnZI9T9UTP0CRHXGu%2BoZsztvPEOkaS3v7pe63pp90MLlAgzwwxrbw%2FLMp2p0D6jvZLo3kZPTzQmR8HDMDurd4lyCzkBOLAFife6EpEIGPg8%2Bxp4J4tXleA1561tcMu4A9duNw6oImG407UdM4p6oaLTkh8R7ulHJQ9N8rr3K4sRocEjAZ925ncIdQRJ7XPMxng7NpQW%2FtohLt9bGeUX8d3%2BJRswt4j2YSyKOxieBhF7kdWWh46SwqWIhZYZvFDLZzn6EoUIl44aEpX0FTJAD9H%2F%2FQbBufCXT%2Fqw7qgxzzbbWGc3QuptBT2LutKe52YZpPBWNY75WEB0usIKx1fYGAMsOeXnodG%2FVGLdLuYq8EpgAYyrGrzjDdyMDCBjqkAcVcjR0p4vGOK7nuXtOnwveb1NByt0wv8UvojYJxtKgrNhMVmEkzBwlHgihjUWZ0GBHtoo3i9fufrByuWV8luikof3tkUcb9zilYmEfsEb2p10HZWBWyQYjlcrfrvhwvpYykBCCKzmGPFizOFv4GOCnjfksXPQ71BBQhNn6yhnB3L139ZONj0SmL7mQgPm9vH7ajWL61MjGET3ZMxaDuofHftTLw&X-Amz-Signature=be420a92d3ec694de154eb84ab393acc6a4abe61a4861e957b154c6ac2fd1f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6W6LIB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFtk%2F%2BRk5Z%2F%2FXfsVhnlL7eyDpyWVTwMDL%2B3znzljp7aNAiEAsd7Wh3rIlfknU9Ada%2FPnyC3u4PxBRgjRtBUIpdIpRlsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDvXuMJ59nGiVJwGrircAy4ssm2luRLEvnEaWwJDG521H7paob3AI3iThLxkP7s1%2F0S%2FtSv%2BhUBgg%2F5QvRmgvNgvEpSQ%2FK53dkU3sS9WOh7gA8zS2BT7IDjhVGcvvzkFkzryqWVR0Y4kClMerzhxtxGIq26iA5K8OqZucIFJlxIJtxZ%2BrXClCUHow8eiMygc00U8Xh%2BcJnYuA0LiHviK%2BzNeAs9hYjCy5t72ESeFdiDinqzGwY00PafdF7hF3Ct1BQAQjn1hQkAL%2BosNxtvKkJ3G%2FizI2DTIhLtb%2BONQDM%2BCC8mKxPDX9MtbGZ%2BqBPg9UzRuRSUFfEAVAmWHObOcLn1klsEKaJiBf9qfy5%2FNLDeKorhyI0qZ41kKTxIKkuuoWQXkLTeYKsC3306ocOc8AnLf8hBdWKfo9oUKFZcXvBCFsMEvrHHO1zQrrjiq%2B%2Bdb1ywMWnd13g8Cuv70F%2BYDG2arsiSBi3GrrF1ScaVtp7iNMBAYeKUD0nBDOankPcq8cTInLRxNyAKWSvdKuYjluTk3OcW1mw5tyBU1ANA0hGoI62MyzTV2vuxhKUCGIRrsvb5K6fETLN9Nl4Xq1XZ%2FlWUDtg28mCJYVHPcbytEJPjMi40mH7R%2B0CtGlbcSTzHGZnjZxiaQB19qDSokMInJwMIGOqUBxkR8BqqGmwP%2Fu8%2FqniQhFMGf8BOWsFU9akcNMoxLkwB6Sw8YRv9gEIW277ljaTlI8p4jhZ1pOfdVqpRRY2NQXO6ENWqunp9rJLEssrbGDymOu7dEPcl9xwKqvwyrsToPxkuZkmdYE9WGi9VkeXeWz6taEel60UfgJdT59Q5DgcPdGRKaevqTXBqV3uM95hCr11BEYDHbECkvhgjmP%2BgAZfs2AhLd&X-Amz-Signature=313c97f8a32c43b3254191652a758500e7dd00af3f6f49b8f57ee3621a547bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
