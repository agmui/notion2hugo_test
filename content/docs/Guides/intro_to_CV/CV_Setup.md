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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQROVOXW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC4vTx%2F9sGt59ZdYXVOsBmiM05T3KbzrMRbkuxntYj7BQIgDa2Nh%2Bh5E6XZCfIzxqR6OP4O6BDFkVegnlUTnyNrftEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEicaI4RghSRwH%2BDlSrcAybRJ0fBRl7xc4B6qtJUyIRHD20HfskX8x7RetIpMd%2FvXoI0%2BoO1UH%2BZRtTy0ngd8jqLUzdPTS61k%2F54fbGWQPZPiEVCyB9naBJdmYm4VnGPXRPjVYItQm6Shs0327wBUj2fuxKW2crH%2FugCs2O2u337ZGs5ZSvP7565PkStBuFRqjOWm9W1ra0BidQj2hE9C8wGNJTnK66eA5awFJIMugSWblIJ14huGl4TQSjwZJ18wJEIQFgzMnWPZdSwznOpaGPvgXVd%2Fp7kefFAVZDABgaojv0PagIsrg0wmwulNr6oohwfkM2aITpYcrPsfFRiRS7PGiNJ18Eda3HRDYgXp8CUrhwSIv37gg0xTQSI14vdJ9AehP6%2FFp0KN5xWRj6hZkaZsTIZCMsi0D40ZdyOO3TxYMFcgwQI7wdvcBLe1jjZ11rZ5keMPnsytgY%2B84P9uh8QYwbbOdildihWZD%2Bmpun8mUOrXVP06m542eDNNnvtYeJoscE%2FnwurpjWXws4t1nKZlCil5UrztAKCOLVUjJqqtmE6qlCG84z%2BgdgBelUhqiiiKzD%2FZPmsJwryN%2FUcO5RSvhj%2FgIBPYTuuzFDGCKqQDfj%2FyxCo9ABBFYIHGm8cA%2FxET2qnCbRWObTbMIXziMIGOqUBAr26Pd4a7vuLPHDvZLs%2BnG1e520E1YtFwIVcGWJGn8wRXRiHYxNWnRey5HGQ2tsvfknzI50Wd2K9%2FDhZZ0XBbMOyaC8Jml%2Bl8qj8F%2BRORhOud%2BCGm%2FwHWufqdRkz148O%2F8JFcc5pEnUW%2FbGo3hZaoZW0gHGyq56CrnGYs0eRKlVHabD9FjeSWgNkofiwgthsSlfjyLxfZXz0MXZCxKDIvqSTYLOq&X-Amz-Signature=410f9a43f5785395a4a2fead211699dc5cb22018cce2fb6d7720bb037539909b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQ74O5P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE%2B%2FUE4%2Bum9nfmm6im%2FNzNM4wbmX56LP0%2FKwbuk2mhdTAiEAy1SuliWVfp3D9fqsQ1poIfTgilHYbMjk6w5BxqVwB%2Fgq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDF7Et8ZidgjgCP%2FZ2SrcAxCg2dDo1EZTXjMBmSCJfSo9sOspZ9FPIG1vVESpgm%2Bwlp4BkZUite6nvI%2FvC7naBhjAjbcN9nZMKT5gKh6xxA3lOja%2FruI4XdTnL597tZf9SLKYdMdx7hIWWcGhJ2PdYjbFOO9hJSiaVOcaw32mg9ylT%2BIurjZ7SLCiArKd5G01zuVCINpeJFmGPj4KghsAG%2Fem%2BAzAd2h6TY7uhLyOICS2uHOkZSLoiBn3AYhD52j8WYb4VntK4QfCkToEFcZvOtmmN5%2Br2Itgf64vasEHEnkseI1B3Kl%2BlhEjH4JVFw5ovWHDXUgH1FNzrlTQQ9sSZHJshCuN7cxb3MLP%2BtuzIYkcbdH2s7IPNaE1w9st3vIAzQ3px6l%2FvNdy9JzBoB3MK4q7TE9Y3JZon%2FKb9zftrpB7FIvvPzihQsqkhdhabLC9QK1rXAJ%2BsBVL0SNy9aYFHKGKofav0ihnxHehUXjWfLrVAWQJ0aK6rAd5dS%2BuElJw6qN8k6obElMPOQrp1CoPswQ%2FTj4f7EgVqf77OrNlLEPCVXFn0WCiINrgX03G%2FrE612H9NEo33dOBUd8P4VbJ7zyk%2F1ViuuZ7n03V7Dj%2BXcFxGZYuV%2FO1c00jBQ%2F1DZrOp8rnaG4%2FJGaUWWzvMLOpicIGOqUBInX5IIJRRzZ4nG9fHgmunIsUKd%2BHFdcDTxJu8%2FdH4ZbrawIZmbzRhspbYrmtdvknvoJtOZeo%2F9GBwzWe8xJbOJ0M6oBhDnEJOC3F0NKbZjpUGvKi98Y9kBZQr9LZyPWd8HvvpyP59SDXwFamPO5HA%2BMIgkmaBfjvlodFgu3IGVwq6NFo5g8g5s6l93t4DfWrBK6%2Fqw9pGTZk9%2FgV34xrcZS1j0kx&X-Amz-Signature=e236fe2aea6b80ae202b5f7fa465f23b6107e048376c22dd4a8c0ba54c727a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
