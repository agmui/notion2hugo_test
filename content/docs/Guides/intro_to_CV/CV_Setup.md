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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNPZ5UE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHnrmE2gqSO6QeqXBuBzgkYuYzCUP3siJbfeFsvkXdU5AiEA%2FQxRNac5MNG397T6ZshoApOxTynnOnX%2FxKL6zMmrivgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHgW0iX2SEONNEBzSrcA%2FIB%2B6LwUIUSi7Pvfstzd3%2BDjgG0E%2Fgp4DMnND7uI%2Fjhaf%2FewaxtZTH%2FPMQaeLRaAmN%2F902VP3okVBh77RbT3CqyjpIKqx%2FRlI1gchRVxVUO3XHFogvl6AQjt97FWV2FBLoMXIFkiULJK9HBRqvrVvtpnrAdHXgaVaFyn9%2FycFJArfHpDHIqU5%2FDjgfjSNJoRy5CsFZyf2vocBVG1u19WsLx%2FHdTeRUsTPns1qW49C6DOMAsZSJOVkphop2YbaxY2gYdFMrMjFuhud5VCMaow5WWw3YUXxBKuEzedw1u9xQB9a96qicTlb1IzvVqCDBAq1SSaf2AS7QjImwPMLiH5t0M9%2F67WTaXDm8GVogKvNhAkEgCD4SZu8z4%2FJT8EYVWbJh733lb4ErzstjdhfS2DVhGSkDC7lM0wW3tQaC8D7MhUMCt3V20hGi8s%2B854oVitutNQh35OLPgXz6TcJburOhjZddMZBmgnGxEmVRg4yv1enaee%2FZs8j5d%2F3u10YQAHQMXGSr7lavMLjh6whb%2Br%2BxWghEPDzGqe2t9yZ3316MXNi5g6RgDM3vmWvXplGj7xOuFkTWqrdTQu1FcrC3CUU2unICgTVo%2BhlX%2FwZ8r0q%2B3XHGBfQrSsxjc5WC6MPvqhcEGOqUBrxsaqnfHNzHMApDWmoQfQlJssdwvri880C7p8ctKSIdbT4HIKTaV9W2CCPuEZ4xtPQP7R5HUnbIUrJa2YFoarvDs%2BAjstoNT%2FvtycFf5qjNWhcrXPXUKxCO9zM2yK2U9%2FhS24aj9UEkl%2FL9Ht6z3ZOXIyLPcgOGENnV%2FAWS4CBD4LoXUOlQsBglkir3x7kp%2FFhlHwuXouhNPviywvgHRb2U3WWXA&X-Amz-Signature=6e659af3e8cab3ec6995bab879a176bbea4790a4aaec1661ce909b4b403de507&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMWWS3L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDuDC7lxmOecn6U7l7jusd7%2FrFnS7QphjahQmla0hnZZwIgJkqXdFavVvK65h7qw3CbuC7u22MXxqLRYDCWmonjAGkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUZWCiEY%2F2cmTAobSrcA1SLba7X6Xw6m71FxDO%2Be1lF2AIpc2q9mEWKBcvIc04er01Ud%2BDBnUrgOdf4mlOXz9ebX5VK8IMSdzgmAkrj6mzB0PDGaKIy6Wt16rff%2BsplioMxZOGZV1YBda3NxTeYA5MNRrBKhU3Q%2B7D8DCELnf3rkxX9Ax40%2FuEfXI%2BPLaAoE026BruwYNVouYp8sqOjaDIQEPz%2Fjg1MN%2BYfaDivd8hG179pu8%2BETe1I4t0fK5xj9oJwPkWymOEa6AEOSBekDiPaF0JRyicKkmAHaP3XrPMaEDPS4sHzkUtUgA4R25yNX%2FlZ%2BzoLN0rmzMQ%2Bn%2FEjfAtklDOMuqHx%2F7TICSR2rp5CB%2F40pO36BN8vCt4UYSPX4KjmJlHmaSYpxRHb3IVzidRi8bhCxiKcZ4Fl%2BA7umZBbc%2Bx%2BZ5En1uiFMnn0PGZWz7Aehv0Spf7%2Fy6eLK%2Fk8mJD6MIEEg5vjvOTwBd4HuXsxFi77%2B%2BqQkfuOZ7wCsG31qLncuIFrx0uRM1ojclOITS0pGJAaidbCIQ82j9mvizSNQd5kxEHPVHYA%2BwbrvoRGmsJc%2B05oPzoJdCbhaLmfylOq8%2B1a6MFPjxnTU%2FGNl6DBqKKH%2FLcc1%2BI2DHTbhuqf0ELy5xljLmLVh2UbMOHqhcEGOqUBAI%2FKpVpibKZcAEPqkE7SZA%2FO5zdyA%2B5a81wy6VRzHMFYMEFOtPpBpkh7fsZpWm17gsS0wtIT%2FVRfjVZNGK5N80ezYO0n%2F7BwmgbuDoSnPmaVeKeO1Mw7gdb%2BjNkafX3IxRHcj9zpv1VQc14zIucNmZIxDCKjxMc0%2Fo4vmp%2FPq9NwtKP5XyvgovHt%2BGlSku0ASayrWTDPkF3LEJk2pnqbfwrBn%2B3S&X-Amz-Signature=5697f9233292ef11aeedaa7b2684514b43dd8289f0a6790dd69bf2d922747114&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
