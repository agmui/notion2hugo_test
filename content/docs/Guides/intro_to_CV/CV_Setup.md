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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWKUE65%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEOckb1GrnucAhQGSjpKWaaSSQv5iXpGCMc8VzOzn4PMAiAGC51BAq5gRsueXPqwI03CLmICoqpSCRT6Q2QFMSGgcyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMPf9WY6OWH7nWelnmKtwDOa4FuDOn4wT4BW0HM1Zo796FGCuyPR1F4rhlq2PaHX6zKLnn05sZO2zE8kFcj8%2FoK3YGg98zUdDL4JlLFOzA0jIlirjEwZDQdNLy2OqXySKerl98qkuelfAUhZcqhw6LuRaGRWxPuxlycH9MPvH1U2F51ldjyTf3jX%2B1yztETWZRi264Wu1jQK6%2FnsosZX%2BwgtV0dGrQvM1QqHoEPahca4cAeBwvRT2zIDo6Z3HyBHkZ4Vwi2DKmc6rKDq1myK0kGKbmmS94jx3n%2BpJzNe7g%2B3aswMUqdjX71ebMKQ9ekvNsE6NXO5ysx7mID6Co3wsGcIUJGN1AmHKVLseH6i5fgCLNBOp8U7HY8KbJaqWddmY0z9aAThqBosyc7OfirNogbzEdvviRxO7SbjCWViqqmykbHrRjRIdoPvVVw5XfybMLrQqWLj%2Fw32JzGgAc5NnKb1U1XwDA1AHW4dVcq%2BgNHFTApF4TRdZ8UvutsYzHiSTuoAhr2LQup%2B%2FLTA%2F%2BCaIEByyIEw2tM7TdEEZ%2BxwYvG7hmLvCuzb4EZcwKKXanAwyxl%2FcXWynSa86%2Fk%2F1Tvh31tZKEsG2gTQs6DPuf9o0alAgrOra3QKliAXwyRv3WSyXxrBilzVyuTxVhTJcwjKOTwQY6pgERAIczb34os9MfB91BAcMUu0lN3S4ScsOQnLaL%2BsevJlNW1mLe6jr3pTA4308MAWTC6J%2BtHYSITQX3AketlskkWDUFrlJamEubgh9IaHrVoXZyHMSBKoH3ra15ghlmwwS87b4bMjiEvuVt8C%2F5WIDnlf1l6TDVjUVPjuceu2Q2CBkg8hBWAcPHLRrPVx%2BOFIsjdQLpb%2F2M4DlteflFAqeAAxqc6r05&X-Amz-Signature=f95d073ce3f50e32e500f847bf49847104fd24e7b0bfd96482cc28c5f5df594b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQXSWSM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIH0ir%2FmOJpwthy0usNyjryC0xTqMhnhHiL3IP%2FC6Vw%2BXAiB2SacK5BBXy2hdU2BQhEqfKoRr7iHMP9hgYSX3E%2FeWgir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8C23ZooLJ5jdmCapKtwDeEilZP%2FrREbMjDqXUMieiXZfOkiXHuFtz%2BXBoezQSVBOuh%2FlK4j7HMhIb8FQ1i1ILJfgKIXpW2QejbpBHJVdtZCA81XMyf9i3eKdzFVh1FkdtLmLyhvBcHCcrQDy4zmVIUT00IdaaGrsND0gVkHsWuO6xLKRAu%2FQ5FkwR3ujspCT7AGBkPZy73i2hHk1b56mjbwhZGGbjdo8Kh1hyNdTqYav6nBBPCqYAef3UdGUiFzrqlHB2Ov5hMBpcUk98PgmXT5GMYlk%2FGE7vBXut8NSN24KlXvfBz%2FBwkGPTyZCcH%2BVnRIOMY0exZmVkJ11e8zn3fV6ASEEGFeXIpUnJc9gogw4cS%2B6%2FQagMbRmkSv3EEGxNRU1M3OMToKjaIV%2FsbBG4Tg35XQS5fOzrm68FHMBt1ol%2F7lSVMz0PKwFbRTUGIAZeRgIAfiWSf6nQvQQ70s1rVAqOEAX%2FmcfZbzpKJXs5uyIqFlFJdjjqQ31D9RgP8vwiTRF2FvE7SIiaG4Wy1Iog7VyQKswo%2Fsk5f3AF9HPt2JOGNN4bY5Tcaa9L1S4C6EpR1fa9vUea40Viyvgd7PrU9iah%2FpNEX8Rnj2uA0wcMj3xvGs%2FVv9M5ubWnfxG7H6jwxheZOLbS9Jw%2Fr8w9qKTwQY6pgFn3EMCkF3lzxdcu6e29XXDDVH%2FHZgTup3GHnRa25FvhyOSPMOD%2B79UBVjYGH12qz9Y%2B2PCDL0oU2J53yATVrini1G2LLcJD93pW6zA3XBY0Ib%2BJatJ41TY0OFtlFiMWtD9RCBxHnKpKcenI26OTs84TxehL27hgKUXbk0zYmOkAtuIacB2ciP5OCXGiKjsAuUvmx5l8Q5SN6A4hP4jrMjtAy8QytNm&X-Amz-Signature=cbfc0597d1fa032f93d5cfd86cb759cf9747deff622d0149f977a600446b6fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
