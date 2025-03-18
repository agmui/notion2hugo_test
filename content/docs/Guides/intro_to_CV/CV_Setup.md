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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH45BFXA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDCzqpfgPcIvT%2FiJUs8dxpIo3TTLylAlFLMGdGPScf2BwIhAIEUd6td7pVMqUlWXLUbzT3L%2Bex0ENyMKmR3oLFV029lKv8DCGYQABoMNjM3NDIzMTgzODA1IgyaJD2ubCVUm%2Fg%2Bsdoq3AOXWiY40S8ihgJFmsRUQLl7TXtGRJNMIefJrSSUN9piMrfH8isNLGe0t2wEHd%2Bdk210IyYle3lsZYxsuX65hQnJMPj9MyZF%2FVDFiiKVezbLhuRBxu2MXngtXBJz%2FZvutbhyOyN415H55F0UyJbv8DFe8RWSpgjByuDPRaomONEKop4mC3zGIuk%2BNy9M%2FODVCRwT%2Bej%2FQyWAq6mrc50iX9uv6yivyxRbf6pQuNLuEeOHqmy35vCuTHuDm0IOosteJWRNymu7Jk0Qz7apvNeFaTdKNmfwAcXOkzEVDf2%2BjekrTtemRpWDewcVW1roC9ckH%2F%2FQI8ciVuda6FGMF%2FGMmJF3kaXUvx40sFvuqVtvHdPui07oV2HtLIzfTuNeXAjYAXT3b2NqClmApVmBe9FdIuvXlmyMu4a5NX52TLUqSnkWrUyEdYiSWsn045Jaig0jF8%2BNYYHGAioo%2BadI%2BZFLralaJ8DAGz1zf57cARYKcvkjhbefmVDBO0U98cJLQ1g15pnJhyjZzkZwP6AqIEav%2F5w3Pf7KJvYWgv9tlYsEiXnvIraS8QlHrG2PlrRURYXKDKDdVs%2Bq2XcaogBjGYV7YGaUKH2ANmkYNw5s8Th8MUkAMMixjQMzWr5kojRfADDdsOe%2BBjqkARbaegWO6gVN5xCusNGaBMtQZ06vav7FlA2%2FpyRhr102%2BMIe1qBWPV2LM%2B%2Ft%2FP8DEawb2x7QKTpaN%2F34NWCuEMEDuj8oftp%2BOZ%2ByUWeYb5k2U2T2o04Tke%2B%2B%2FepxkekaaYr88%2FDV%2FxLpbwraS0QG%2B%2BkF%2Bs1G%2FOhpVIkL%2FRqpMh3FDOXXEbrpmVyIuYtimDN4O3Ef7LfvWkNysJDtlM46bxZhq0%2Bt&X-Amz-Signature=87a70766fc1fb330bf75fb8458a7649089b4d28c28ea154c4e50323f87072fbc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSPJ5NL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD7uHlXKXwc2%2FIrBDf4Bzc8NwxCRnHJ46vgYawi9q2j7gIhAM4Ak8rVrlhaJ3Obbf4%2FRiUKqiWG9H38%2BSdMoh1gLnw8Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxvbPTEmOuT6zlHhUcq3AMa98YJWMh05k3QG%2BXHJ%2BYnM9JCMDnDQ5kn6qULCPv5sENgMk7vDg7EvwgI5P0t%2BqCEFoTqWuKz%2Fq0TgXtt8blbPHPSy1KdZhwZYAKKYX2nV3HZRZGVQZMWoRPYj53PiQA2qqaDosQxNynCQh3J8PRMxyOS%2BL0gJlxnT0vrlYpTgBU%2BH9FSZ8qwTPik1YrzldvxKLUgS23NEFRRpOqd%2FRjTPgWqPqch%2BjR77pBM2YtIwQUXYhID82u9o885HLNt8yWeI69cUjr3oUDX0DCpbVlsXrCutXTx%2FwH9yhHQDt0rbD4tvYvcuIEsiIlfVKA6G7wtkUoCgAwsQKQMZZj6kA8TS6%2FPf3lFmKy1mxRtZJmN%2BC7AkC8js4hABik%2B9%2BWX6sawFyXewwPDQ6qcjQMVxHLewl0P2fd6l8HOoYicKrXWJjY4G7DCWb6aCInZ0anU8Mhk914k7umyyqf%2Bat4E3Rios7MLXnrc0TN%2FWGk3A5CYacrjYcpoR%2Fluxdmcnebb9WRUc8800d61wWIlSGIMIwpEplIQQqJD1nVRHVM5Tof632YJKBdgfPx3627jXzx%2FVZHo8w7770zRznRp6jD3mPaqEYhSK9EaDEkKdUynxv6eSRlzaGMB%2FhZZilZp4jDjsee%2BBjqkAXx9iu8XnB5rne1l2hqhrmDkgUwlgdFwQHSW%2BCQ6jhiDiTMw%2F7rUqpiP7Q8u7xnYpjNDdr8ykB3lzgLXQ6H%2FMFxRRDoS12du%2FFJTBanerCEErfULur80o952EkpkcoH6IUF3SKdZ5veVuxiJ8aw9y%2BWo%2BrshtGDzhQ3TFoyJtV7%2F7pBnAeUWoUMkTw19MJ803wn3XWJ0%2FPzUDSTcNdzwjzlsbWrc&X-Amz-Signature=ab692aa027561dd065f3776e866483acd0233bdbb13a41af72edc98ab57c3624&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
