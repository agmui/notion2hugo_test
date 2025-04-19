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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITFAVGA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCC6hhw3KKdKgWSsIzzkNtA89rBhmJJOjAyBhvJ4RGZKAIgcSGJId8bbV2J%2BTwHfxDcZ8LvY5WLWs43c%2By%2F3TqfkcgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdUyEigHdgC7O29DSrcA8LSbTVj2i3HKXddNEU0%2F6cIhSCNWKG9b5NQF3Hesft1UbhDTKHjGyOxN5ZxfvZvpaFMyJyE5nvkinvkhZ9opZ030P7rpd5BkTZK0hEmAAAI%2BH1KRj%2F3ZeBxQIwFylZOIOXK%2Bk0GxtDVCG1wDKOT7gIhy2cUOpq06Vx6TTK4gghl2A2BNcjH4BVpGpthocHhOIJBVbJsaJbAtzku%2B48HjKPbXMauntahs0%2FGDiDrFD85DzN9%2BiMy9E549Upm7m70wWkXF5QvOGMRdir4oKQlrnkWHL4LCjw%2Bj9VEU83zhD3pPV5gL2j7%2Fy%2BgQwv%2FGDKLpCi9vEWV1bEFNj8A4RKmKeG5no3d5wWr8Ff95kbZhMPeRfNrGIZLPefTk%2BAiTdyhlOu8JVogynfB3gP8Osdud2xlLQBrxRCCcKfEjBGc%2FSDsVxTmPp0EK8glR%2BtrtNi4C6ab0S2VCt%2Fco7jaXYEJNT5LKTD2GBxFSvUFmUezTjzrqT5VCbLiOWAjT9OPFWuPYLwPxU1ZqCpIMVS7n6bLTgv2L%2B2drJcG2DRZojDsXElP%2FYbp8RRnSqLmEf8qPn9uYnqpkN31cEN%2B1JuIrnUv76zBm2IFFX9AXt7CdvCQIDMWr7HQSYyH6DbYhHHxMKX%2FjcAGOqUBdL%2B9G1%2Btni5ZLhQXfOTfEUC0bNFbDJbqZQGyMF7ydr2ANG7J4N3%2BEt%2FOsYf7ld4AewP8JfrTlkIlHH6UnWLCzEyZreThvPj%2FJ6pZXNRchclrSwR0HDfvoFbO8YfX08coNkoIS3i4wwyksXoxC9ivc19cMHBQ1Yanmkx25%2FDU2ysLXboTk3t31q0y6VLm%2FLxZp7%2FxvRdBmPXYw9%2FXcB1f4sCMcCfg&X-Amz-Signature=d8ba476c9f05bdb73e16a806b4affa54c50840f6a86938a7addad907f7993bbd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5QPKAV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCK%2BxtOlS9RiWJnoH7fG6qe4na7Q6MR7uDmoNpcAef%2FzwIhAIySnfZlJuD3yaH8%2BSHDjMdk1itatFEZmChOCdijlr7qKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWgA53clji4vuBI8Yq3ANknm4g7LxqkU08e%2Fflfecg%2BWbSL36ZiSoZ4hxDT679qV9O%2BrVU03J154a8wg8hYdINOrrFzV0LfK4uLm1yttzs1JnUpLI%2BJnQ36%2FOwhbfadzll74MI%2FWdFJZam%2FtBNmaXz3%2BrBBG4tpiKrCPOazpQzqyz1JqUNR0y%2FPLCWfUxcQ39LurzTTbX2nZfDOOT9EIJjuqV7AG7UCF8lkoWh3TqWNAs6qAr5Ha6x5toCOIMsBR8hfRbgAIxPRc7PHfuKKxE8OkN%2Buj1nwS4Gfshf%2Bx8WWgZTQFFxvH4SoSaoHmq2R7VJUMXyWm1tM%2BIKsR0hKEDTDTfcci9rH3PWFnUfdNS8Vm%2FlEBbIgNgG104LzPGboKvQeeWc041qayGIJhd0TSWIRHPgNx%2Bgyjhb2sVtQqDJdzQP%2BxLFehLOwGckjMkrR7Ob5RSKF%2Bw%2Fw59P%2FPMdyTlsHoZQjuGrbxIMxGRQ0KsRxDefGLJuYR%2F4w029bZ5J2lvXcwDWEEzRv6EvXrGieiyfDhJsCYwv8P6b9%2BfGSAOLdUWWJLWmgzeu29nrw2iwBGKQGYyT31zYohE%2B%2Bh3%2Fw7ff7ZidLRmmgyZHPnVPxg%2FlEHklzrAK4veRF00K0tRYCXhfoEMyIx9M5UiGkjCOnI7ABjqkAa5GeZYwQD3fsPdjbKUWQHA6g9f9dYK5D85YhJ5JvFzlsYkCt%2BUV2ilFiloRXRuQ3%2BrfwmRzXlFU6%2BjxhMgLEXGlQz%2ByFBxvJcZZtBcKWODSL%2BGdIhuZFNYNXFPYZSJpjZdrF7iVrvnS4p9yYgwD27sQDMI6VyuKsXx%2FC8Y41LFIESt1GbtbLPaicL6Pb1yJHKQ9GpUJ8jd%2B1cnU39%2BRsU1UwtJk&X-Amz-Signature=cfae110b88bc11a7b195a5197a5d0ac058f235fc9dd1d4cd62f1e1696b3d4936&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
