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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVC7BOT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBr8VTgjJ%2FD0USkDkcXFSMH5zY3nBaRBhFyR6SBr0zmlAiEApwmftg%2BiL7cBWxRY2rqnrQFvGeVZiTSd%2BM21FyCfbUsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPM1rXuuB2t7hRGI2yrcA8RQOSnUrY281kKjcGlZ%2F5qQFg9U2cvbdNgOSMxznVC1LipIxGbhiFtOvCfqjC0a349AxwDFE8T0sh0KMZ3uKbF8nP2TipxgE6HqXdvEhMFaSbF9v2AqwIfMhOwB3RWFRGwtgLSw5fcPD8Z6q2lzJ5Tk0QOzjpZm%2FhIZJGnbm1e6H8sXQgtARGY5BUArQM%2BBi7oqR2O76m66dFTSQhGK1G2Um7s4XCguIGPr3q0Z8EfsE%2BSP4SMQKQjvNN40lrPFh5UR6F9donxcO6mLs9ejp9GcLhW7nesZjg%2BXeY0OOmIPPDK%2BwCWTkhWy8AinW3ziOnIqNZ%2F45Pyb3kx3F55bKQNXZiUGVZG5s1RsEuDh8m1pHjiuorlEAt2DSmjZ7HI5rikuOVrth4hVnmW%2BeVwUYh%2F1idPDRY4OcLrS2HsfZQBXCB%2B0oeU%2BIPTo4e4aZuP%2BOeqhlPAv4kTm3jiShhR3dAWXiucEb9OQVEuTB3e4uuBHuCLuYVZEqwLJoMUgi2CeZk%2BWIWyoilMZuvKsOCG9NGPO8jZwEgnjAx%2FYAJdF2O1zZ2qY%2BNwbPy2cnkEt6xFAXpeedfbjHey0yDyHHmLoBO4Qj85vGi5T7C4bFFOF6uuxxE9NgTprGIEnQ5eEMPCTqcIGOqUBUz6IvOd2uz5WsKmMU0FDsSvl5QaWlYT9E0IadrAUeob%2BQZnJfbX%2FErwq50SNqioBkz1iUKae8VHXxOKwgfkX5dS5TZwfo5estfZR%2Bf6TPhGtxEFI5n49inPTJcOhBMHe8rmWKkNT%2BreOA%2FYeY%2BkXblPytyHnaTJd53608OYPk9%2BKYz9JLnRcJtfFOv5oBs%2BK0lvvgm87o4tyIf7SqbmrfjO8Zrc5&X-Amz-Signature=67a28f44587ff1dec55b2e47a5bc4b6ec29fa535438193a898561da0185a2e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77K3YTK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCmPxep2s63JkR1sXTDFQ3sxYWQ4K5Mo2PN8d3S%2Fe9zLwIhAJvmUunQIEL2%2Fh2mB%2F%2B2n8PB8hJFdLLnHxJlTueAtbUyKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeNPWqtZl%2FjN%2FuK94q3AN04OEauD%2BQVN3tYNRJVOTYHwoBPEW%2BaMUBvb6wr0TNyD0cViu6N1SzlypGuIPHP2Uv8nZK7bTv9ubyLy8bGrJ64gnoEOajW6nwY5P%2BezfU6n6u5fl8Rqi4UtZx6csaROKOsunJShZPinNkcdZ2dwZGxtiJ5okNQTDGReoXV7cqkQeqoyKx9obpQa1cXSK%2FBmCvguCZSQ6TrayU5X8ZzSfod2Uxx5Vr4FwTuiP%2By0A%2Fjf8wMghjSGW1PBaJvDv2%2FWR%2BbcuAB0V365UVxWgHMzqrRXjun9K4G63DjaZQwLksySDzweuh866CWsL8Lau%2FwVMzaDkqHONH9ylmR2NWq31regYGVt8sHDQXO%2FcjpX0My55454TcpVwegvPoFDo6kQWUPJklviivTly4Im1vbjxIjVQHvt5%2FqNDcRPhN3LLkumaLmYGNDpILr2eoFgEnOrzxMcTBnUgEu8jyTqeaSRx1RMUMveA98OExeMxHzRNBjLAtmXeGFoAnZyr6AhHkzY37%2B47Auct67YYEqrHK3H752Fwaw%2FUv5gbmkN5qyWGhPBgHORtvcL0HGP%2BoEUv4%2BbMa82b%2F6LMULfFpKImE1cmd8NqvfrikoppOnO2Vg9F7rs5pa4w9Xm4fohsFSDDak6nCBjqkAYLqKrW1Ifdmu%2B%2F3%2F1MFiNkaUhut3qcI0dg0sp4G21rjQwxoLlpueZrooFUCViz%2BFUXc%2Fg6m32cEnYcSoF1tYxc6IzxWo6bTzCYXmxT9UlTEUxMutTydu%2FPVF5ydMaqmkAOVPM%2FRn9FUqr3OchgsTfBmdxhzI81cSZBn8it0AADNnpwJ0GmDiS6DWHQDOAO6aBd7TrAi%2BaNOktkI9Cu88ws28SYp&X-Amz-Signature=9ffdbc4d75e148e1e45ae616959d1bd34f30e247f3e82c7426438ae654ccac34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
