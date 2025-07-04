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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR3TVQ3V%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFFXWN2JLC6c8rJY1A8bEyBlL5wGFcEii6TTGhbRhwNNAiEA3RHo50NpzsZHWY2wK9yw%2FbiZhCRxLnzwu1cCRvJLGaAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFCmpK45B76c1ACNhSrcA4gpFlLMrFLWQJVEFL6EXkRV6QDtd7hYdDKhbbwxw%2BGRQszIrTTeEG6VP8dnkNFQfovQ533BtgpcDU%2FCpOmXQ6%2FRMhNUVCJSzGtCSc27C8isQOS5gxb6DzOwcfcInJHdb915WXwr3t6h%2BhSCUuaqqO%2BeW58UxDd5WcLwRbGmWdeag%2FZhIIGLqgJTs6RDb%2FC4vF%2FZwU9Kuec0acTtGq%2B%2BDT2HPdmoLAU4ptr1fvuk9TFN1fVGmk88YW3iLGLGx7Y1xIfVa1tiLZPUoq39qcue6wNHCAPISQE%2BNYsdu7kFOGF9cGzomSjC9WuUAc3hXA%2BVtaxdt%2FdLEQjnEV1WX79vlbZHn6%2FWR%2FVquJHCQ5Kgj83g5LFevmm70j0HDk73TJMhKqVs6P7aw2ymAmqnOFaql4qaUcyqo7m4J%2BgqP%2Bk%2B18sAA8IWb36LYieVVlVAAbmFn%2Bab5qTay6VpYeDtKMzkrxw1dCJZvLXoeZQeQA68fP2EXu%2FUjohRkIFqeua55K9ag%2BgmGll2lqqsAhjvyy1Z5rnUMChMuk6qu%2F0Ro3ZWm6Z2XcafvZ%2FcmapgjpzPjIdV1HRRajOGZselY7EnNSn9CfUTyMkOuDgeReHlWo2Jg3at%2B%2FdV6%2BCedDcyjdhzML3ooMMGOqUB7KNynJK05F4hvhWP6AMqxRuBdJ5nAIDA0kDJGkszzEoRvh1o9P86ZsGsNwm8FGhUOBBu3AaRTm4gLLmdm%2BhlyPtgE9pmf%2BneI9XD1Lj0u6Eb%2FTR0puzfxK5Dpi4Pm90z6%2BgxjcC%2FXPqEyK0PWtlehViNp24oRiWGoQFUoJ7sExzVIXGQo4pyWfjDqeAAfSsmFLpxl2vzPIbqsa7GancLiB3MGhrn&X-Amz-Signature=76bec40fa75bfdd5e1d82a9955a6675e6e5ad265c108614b480ba74d9a76b792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NUO7ACO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDW8ORbmTHeMP0DqTsh2ZJATXyAuazFcBGhoiX%2F7OJAqAIhAIDFRUgQLUBl16uHbmfeRz%2FUs7dUuQotVrW2hsTV%2FlimKv8DCDUQABoMNjM3NDIzMTgzODA1IgyizIShZ9i0mVcXncAq3ANliqFrQ%2Fb6347emM2pGvDscx%2Fo3RjLK%2FZsgCcU%2FCKRU0YV%2BmXhWbUYrAJ6BYdgO4eVUkC8GeIQzqPcWoW0UUEin1BaRIzAPoQyWOKEFOy%2BByYHA9NdgON1f%2Bb%2FqL4l20qevfQSFYz44966tZhOv9y1er2EhJtIkzmXIplYWL%2B4iT0dEPHIANUHAXe2Kh%2Bd3RNNbtb1Wr6Ml3djKW%2F%2FzGsgy%2Fzyr9kpsYDM6Lnp22jhuIiOZGseUa0KmXnKaWN48JBeqA0WP5%2BJHQ0d%2FW2ouvPo%2FQH7%2FzhfjkryTE4dF2DAeHWljSsSOogDK01r5HVcH0prG59mMTOqtfQPNRvF383qsrBc4%2BqIJOtwwy0J1SMfyw5JjVetzkbMBY98eIS58zvJ%2BWDNYOFyPCrsCxldKCL1SZamzLDW8XHGm%2FEVh0lNdLJCP9uqxXzwOPI4MeOr0RVbGmnlIkQbOUZhK03OfsTLUifuY0JHAo8TX2akdvIZL9AcHjaNj18nEOfOQFhszCMxCzHUaZgVzrDw10LbjVdTSLNRET2toDXv0nds%2FPDIU%2FEGVLtwdzdo9dmbp2CvYCYoBz%2FAxY5lP9w8x6qA4YMuNzqqnBlAcj4DxIYJUhCEQfqwDJ%2FgDZO%2BAcEpKjCR6KDDBjqkAab2zm%2BpZS6GCQmT78O7MnuyL9POgFSuVokDjo9fNoHYUB7DRumPK9N7JUQ0XBsufffhxlTCqOfniemP07SDKcEe8BQBzotIrI9ZLJPruoH%2BzAMkSiQ6hog6%2FnvCyjCq9hmyW%2BQWwDP8LVyFUy%2BHrrx17relFHdsh4xpchfqRW5IkeqQd7xU7SPmV2gyM99HdzgQEbjKBJWtb5fDrmZzeOW8eKcl&X-Amz-Signature=98e8b09c6883e1b713a7f7937dcf2e7ff591ad16635b47504177d56f9e241dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
