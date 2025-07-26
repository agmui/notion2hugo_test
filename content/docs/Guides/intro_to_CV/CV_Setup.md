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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREZCIUQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCLlQQ2tyUy13nQ4mK6zdzNfYKAQB20ojTbJETtn3didgIhAI1haIdx89YKBTSArDS40ne9EoVpldBL9UgVE2Rx%2BcfHKv8DCF8QABoMNjM3NDIzMTgzODA1Igwo%2FlMY9EyoOKgkatQq3AOmmH%2FP0H%2FUGp2hCGQgnZ7prRc%2F%2ByWRDJvz%2BCiqDo7V6nFnMgMcaBpvL2P%2F75k46%2Fm2gDnydgZGGGFXKvtREqIoyjYN6DEI4LK7SiOq%2BgqOru%2FAH5gADcoQcC833canNxc2ZJ1Mey8dE3L9IXaAsESC1sjHqxchsQI6DSE42e8SY%2BlPs%2B5Ir4s0CWLsUxhHaFEx7FySMf11pZShsd2t3W3QcTMxiE9bynWNNR938NoWCYMInzGyHAscCLhe8n3H%2FoaMvk1zMR8M5JWXz6PZ%2FhM7aspoaDJU6V7PoksLrSy6JMXYy9dmJr9%2FYbyD6oOf7qyQxyabqpjH5pKcGKP38qqj4vU8r7Yb70FOiVxJWQ%2FBSLGtV2FVFib%2F9uE0ahJ8ryAthD1xuXXIW3GNRe9VVA302Hj1dx25Mvznl8l1j%2FbB4Bneop%2Fq2RKU4Sjp9C2OEHwlS3CCByGiThrTn0A%2FJnMwTPaa7hDu06IIhBZ7ooP1qMDGenJTawyhQDbKHy9oCdm0ZJ7q8yRvv%2BSSPXMmo80QhpyJhl%2BJ78P9sZ6Cd%2BvJ%2Fa0MvfHXBr9hFzuwww7iFyyk0Z1dp%2Fj3JyKOgvKqICsTTKWyCXXInbxR6C0Fm6KnItO%2FhyalPk1WPRARdTD%2FwZPEBjqkAfVucxParBg%2Fo9eYcVep5uVs5IfoNIPQIT3DqmCXTJscxWIP1zZV0v2i5jxmner3%2B9M%2FdrfdYw4pT9CPUXtUqWr3P3cABMNw9nKCFOQi%2BIvkABNsxlrF%2BbmevUWMfpLFVmUQ34G1DK2EKB0AjjuMH%2FuzqK8duF445fwiWtQOXciEgnHz19rkHYh%2FgXgV9OD%2BjkfqgRrYyITeSh5i4hPBYfblhmvc&X-Amz-Signature=4c26efb9d438c4419e3a7df41d893335ad677cde2496b4c161d1b244ba246580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHN662R%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDHBzRTrNbo0CYk1Jpc9T6wWHaLLaZ7BSALjZ4Hn0RlrAIhAJABw1ZzPLC%2B%2By9duZ%2BpiivtApoT4VsHrXt%2BLe3mna6qKv8DCF8QABoMNjM3NDIzMTgzODA1IgwQQxXHn%2BWa31iAW1cq3AMkQG1lLpBM2Ui13pTQntuiQ3OulDwwcng6UTr4QcMsOoM67OU3KIR3WccvdKOR8vqtLDlCErblVx%2FopVfciu%2BE2YHu3ItJxPVI8NE%2FJ8bDDZuQB%2F%2FS78QK%2Bc8Cleut50J3XCmMJ09jItIdwyUZrGQEHh%2Fj5TvER2hCbkJJ1x9h6WuQiIDcNhXQPMhnEa%2FefsseLhxtdKtG9yHmL1qhf9NUaPiJqgPZS8%2B4DK1%2BpDdXdO8KBG1JZhIbRrkwJNWW098TU8lXk0M%2Bn2l9htAPKiwbAWUTFJDOon5iP9Q2vTVNjeL7s3I1FZQCSw0zRRpRZSntKghzHS%2BpnFUfE9UoW9kmd9NCKwHI1GhdQdmNJ7%2Bpz%2BRVaEqTbm6tTKx7ewGEreCAGG1f2jaenkTh1H8K7BWbbVSc9iWyBSLQyysgKrFAxMADMM2Q8LC6E03aHA1zeZyTlxAGR6W8BytKJsIo175pA84ATGfbsACY0rFOvYyJkTZEHgKvX0bQs7uEkQuw7BlTOJME6JEL7DibNpRv%2Bq28qGvTSoAJ2ip4XgDhQFKMZRQOBS12wBRzWgDqboTT%2BPh9zR2jqdpeVCvjAONR%2Bzc1%2FrUpHH7REjdIdFdROTslChTpiwiRQPdRBFCSujChwZPEBjqkAQOQWamuJuzH97hszhGL5ZoPry%2F6ScjFy6KSV8MyCsB87BMtrfVnnJsXpX%2BDHNdLBwPK7qLvS8jKY2rWQBwWxcdd%2BW0JLGkfyGRXl%2BMhYiJ3rK0KWizhSJ6ksMCnUTGULBkug999eQgYuDgfrHl5GCTxWU2xl%2BV5E1LJhXF5lOnjab6Za2vvUXsQ2iA8BVVdBT6uMRCllXLUc3C93PhtLKCe7Vvm&X-Amz-Signature=325cd826bea83f41c5ece48c07805304194a17ff4da68a02cae495742724c1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
