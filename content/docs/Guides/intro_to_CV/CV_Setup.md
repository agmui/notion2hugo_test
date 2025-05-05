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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3G44ZD4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FuvpFQ50ACZQCoy6DcK3geqcYEH7bOMr2aDXoJVQ%2B3AiEAtMQOG%2BPOxsvIhpsg37C8v3ZxnLBTT7XS1h2eyF%2Fv4t8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIKMbKkVcquhRdrLpSrcAzCp5FfwTk2zOZy5v75NVCotDLJopy0Y7Y9yaDohVQhyQ4NWbdIsBmDbM4cV0sc0%2BD86zHLClITqLAmxkWsjOSheuTllVV%2BbYQdE%2FtQur37r3bNdnxM9KYdyiePsxvcL2Le4tbnctntLeLy3pFXK54jZ4epDuWjHqAtLi7MihAal9StbfZ7KKYuONwncx4jSG9mfj%2Ffe6f6wooaUp1TRkWntUlYIzEugguupRIoDPFZ0r6QRL2sgOs1J6wYw5Jw3HP9BKnYSGFZkJAC3qJ6vrye4f%2Br7bpBpSzM0Uqp%2FCH6mNEurVMTSaRDm%2BHqK3Wi7Z8GAVn4Plqe85XXobuC2a6fN3pkmcwmUiBTkGCerecsIY6cR6iddIy%2FBpND%2BMndcBK6gB9IAf4vSuXbxGlSQu7odNMl%2FS1jyeQ2OlgqClCa0mBFYi432uF1BQA%2Bt0qTWARAonkvmUcOYkmyHQi7GhrUNxyZA1RBYUy73rJgOgrnunDZ0HwTvi59rs8yNTLSy2wI0JsgC2jc8fMgiN8yyDogy8xmyh3cqZJXeJj6EfOBJTPWRUguUdsDeb6dm4CWR0O%2Bjz0EA2zOQbVFEzcuti0CXrP6w8m1bv%2B7aX6%2B77gGeZmuJ9JFcUKMEP2JBMIjN5MAGOqUBnopiU6Hkruq0kOfK5Bz8KhNqvvQ%2BfKkXph93hTU7rsGupwKVYk76uULREcGIxyNftYXEQCRx%2ByHaw%2FcKiBWlXdxIKaF6CgQRzXozpvkANVF9RqrGXsJV9M2MydApCruUS2c4zXhPMbv5ApVganyW%2Fw5u%2BWdhFxyYHu%2F6%2FGF%2FDZvd5G%2B58%2FsEVH3lN1C5aCwwj0gPTk6vAlPI%2BrGbkj%2BY7DDoKgcU&X-Amz-Signature=103258dec50f9f100a156723fdf5c5010646c9d95403afb8b67b06fdbd57d444&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOUS76I%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdiYo3wPqpgL45EGPRkHN43M9xFW0m4akNw6Tk5XA0YAIhANUtiJW0Alx%2Bgp4ElszuydY0v2XqjeH2pmjgdE9ezsJpKv8DCDYQABoMNjM3NDIzMTgzODA1Igzz1JTmdeT7w%2BzHEVoq3AO%2F0ujs90zj%2BKUK%2Bhmguj%2FQiMGVBbYcKm17oqQR4fnDKBKcHxyspdQcZ6klaV%2Fz6nyZmDlRRScUjqtoVoWk9WGfKtq%2FWJsXkGKBele29CTyWJXsYHMuTEpJo1qehPkI0jL87JG3jAE9aEApZkrSMUqM7fqOJbbI87y31HHyJjzViK%2BPdbjxV2Mb5bMIEYuNeQzh8%2FbcmYEFJqI2huUpsU0Pp9xwotQi6O9CYZ0fGBqOoO%2FLoRPFbXWIKRI1cqGaY6U386hwLJ2WTlSuPZJutcvC9i3%2BkQymjeKE3lyKPwgBeTOpk5v2%2B%2FOExuXPereyICw6J3WcXSIFi8RXeTYtvnJV0Y3xguaQtaJTOXr3PpEEHwKkett3vgcnAyDWoV1JGM2wPE2sp0%2Fht9l43QcgTqmqCjMchhLWb%2Be4582KO0jsIx9yMR8XndjLCo6rs1nLsEVe9Nc68lQxJKmD1P4pzCoJY9Kbp0Ekz8AdQn9iUHEYmPkhK4tEt7kJaB60BJ%2FdJBwnu77BA%2BUqafkoSGZTafYmtYax%2FatoG9vZwEG4OEVlFljB6dri8ZjksdbYQ%2BTGSDL1HKz9JitFHzxyZBrINmlruyxLaXNpcoctDAYXyCr5ktmHRyG597Ninmoh0zC8zOTABjqkAbiNEluxINh1TST09wNoUnutBmH%2F2JROkXEhTOCKeWuHAxWjwpDm1RgpIf00cr8cccgGdHXZ5Tt93Kqv3pFkd2DwrvW0mRTC4u4lwV7NM6lQvYtElGpuMyogkzRhHRrkp7xzRRh5qAoPO8BLR7MJ%2Fsoqf1XugAgcw2qCXA3RcUbXKlBwp1zFIR5OrvxcbX9yMMQGbFrstoaBLKDazhEIpvOHl7bo&X-Amz-Signature=e2fb3e80d337417dc1ae4754df9ab8b7da4a270c14fbdc032ecaa028f3dd38fb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
