---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KWP6EO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCjzf5EGCmVoGMe7Xx4IV8SriqTIODZGg4uvRYzxMR8nQIhALl%2FkFBCjSV%2FDKPpzQgV6O8pUgLp0KsOP%2FiiJks%2FCFGTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF0K9It6ymCAeZ%2F1Uq3ANZroS%2BGFa6%2BM%2ByPx0jELGXeuqAN35%2FPjcE4nD4eAjJe544UDxiwRSVZxe839XKliT83KaK8OolWV%2F%2FHmXaVZgFZNr6%2B0LFbPncB2nHitpLIQ0lgVjJ9pr%2B0vvRb2VlsCYJ1yR9c7TdRF3WpkJhM7IlBnTl3powMLKD0XeOVVhAMcM2E7OCwfWnSzYjpjg%2Bu86JKkt7SfwzbIz%2FrWbddoxeM6Pb%2BPn2MMILzFVot5BRJMCHVGGDsSOJ6H3T9yi8P%2F6cLvGpTZG%2F11I2iCX%2FlhGiTp21ORMyFlsUv70gFdRAOfWaln7IfU1W0tSs6xTNUEj6ywnyAPoYKIEcX4Su2POTl6TBwBCesqYb7cqxkkf%2B8Hj5vIwY2oMVIB2K6FlW8lnDNvkSRIDEvq2Jj1qGpC56p5zXMsuSBLx4Hn0yitHrd2uvgET7zlSZYVa3nZmguR6fIyyDD%2B5hCYqFl2iafHW4YTHpPC4SSp3xovtlY3%2Fd%2FHp4S0CvagZ0VzvqNl1b2h%2BuW4FOoWaaS1yC3kMp1MDEcn3XsG3xVrdZ8uDjd%2FvBTVQTDHT8V8svNHzTy%2FCkgD3kpOPVHyr4mx7WsHW8lK89qC4NizKsYPpN9PbeHX7ZaRBPO6UKTMVNnceeszCkve6%2FBjqkAQ%2BIsg3q0bEO5VvVW9rjIQ1eLi30Kycx9aGBK1QbJsVnP2aTlSK9UiUy4k0NzNfhWI89xpDbOM9YhI%2B4CewskvUjws5qMufpeFcDJd0maAYpJz8Bi%2FOks6baTbAj2YPizV7zdKfFNI5ETqybi8DjDEB5Kl7xXv%2FllkpQ0v2f5PLdqny%2FaO0d1LGw0vfz4Hyw7sqOksZCaP8SttsBpzaJGBE47D8a&X-Amz-Signature=8bc3f1ab34777e2f61dff7f0f08460b31c4a50644477e82da0274b85e9aa4587&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KWP6EO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCjzf5EGCmVoGMe7Xx4IV8SriqTIODZGg4uvRYzxMR8nQIhALl%2FkFBCjSV%2FDKPpzQgV6O8pUgLp0KsOP%2FiiJks%2FCFGTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF0K9It6ymCAeZ%2F1Uq3ANZroS%2BGFa6%2BM%2ByPx0jELGXeuqAN35%2FPjcE4nD4eAjJe544UDxiwRSVZxe839XKliT83KaK8OolWV%2F%2FHmXaVZgFZNr6%2B0LFbPncB2nHitpLIQ0lgVjJ9pr%2B0vvRb2VlsCYJ1yR9c7TdRF3WpkJhM7IlBnTl3powMLKD0XeOVVhAMcM2E7OCwfWnSzYjpjg%2Bu86JKkt7SfwzbIz%2FrWbddoxeM6Pb%2BPn2MMILzFVot5BRJMCHVGGDsSOJ6H3T9yi8P%2F6cLvGpTZG%2F11I2iCX%2FlhGiTp21ORMyFlsUv70gFdRAOfWaln7IfU1W0tSs6xTNUEj6ywnyAPoYKIEcX4Su2POTl6TBwBCesqYb7cqxkkf%2B8Hj5vIwY2oMVIB2K6FlW8lnDNvkSRIDEvq2Jj1qGpC56p5zXMsuSBLx4Hn0yitHrd2uvgET7zlSZYVa3nZmguR6fIyyDD%2B5hCYqFl2iafHW4YTHpPC4SSp3xovtlY3%2Fd%2FHp4S0CvagZ0VzvqNl1b2h%2BuW4FOoWaaS1yC3kMp1MDEcn3XsG3xVrdZ8uDjd%2FvBTVQTDHT8V8svNHzTy%2FCkgD3kpOPVHyr4mx7WsHW8lK89qC4NizKsYPpN9PbeHX7ZaRBPO6UKTMVNnceeszCkve6%2FBjqkAQ%2BIsg3q0bEO5VvVW9rjIQ1eLi30Kycx9aGBK1QbJsVnP2aTlSK9UiUy4k0NzNfhWI89xpDbOM9YhI%2B4CewskvUjws5qMufpeFcDJd0maAYpJz8Bi%2FOks6baTbAj2YPizV7zdKfFNI5ETqybi8DjDEB5Kl7xXv%2FllkpQ0v2f5PLdqny%2FaO0d1LGw0vfz4Hyw7sqOksZCaP8SttsBpzaJGBE47D8a&X-Amz-Signature=f42ecca42cc1dccdbc5c06e5a3fb6b418acbfd64c88f47879cf7b343a8eebd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGY3K4II%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFMbH3oITJO3Dm9z4mQ5B%2FxMp7DTmBtgvE0pHLyNz4UmAiA175kAFGpPV5xpFlx9JGNkRwY8rNhEHfkVqgEIUIzYVCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMviI2i8IMBzHl9O0tKtwDKf71YwuAA0pDXTILf3pyH%2BHyAn36q8SI6JJ5RLru%2BbWFwXwdoE%2BacZlNNtpnojpMTLZyg0UkR4O22Ah3L6EZ3w4bp%2FnVhXDiBqXAEM34jZlvaN8n2c88LYptbRucnb67L61MugBadD%2FnxXK4GkHNFhW4ewQBLwPP80oIr1d0qzAyDdIH78sGpJIIsanm3Zgf4dOgnwIYklG4XQImgdQFpl0EkuwiKPyfd%2BZse7KXBuc%2BTP07MOMi%2FgKcFEn2hkl2kjG9Hnw8%2FjYcI0Dr9agGR5pe8SZ%2BS%2Fk9BBIfsAqr2zybkKzZu%2FqUYuVpmO2PBj5evncvP%2BWNqAf9u7kvyDE773V4mldDhDBhD4DNIhLV5982YlsgytU1DbHgPHkz5kj38rSPd1AnKCkd6TynU8g%2FKBM11QWEm99S01LUchZEvDMtmthps6%2BaTpQVes%2BYKkwwiN3A3OwVOfYh1sZzfLTL1x1NzE7aUcr%2Bx6xxLaCLXBewJO8tM0RV%2F23pdiiRTd6tGrhw5pfDBNEnC2teZVK1mUZADuwMP61sJO14m2s2gOk9daU6xF6V7qwBcGLGnvjSdOcT3LcSOPFLoUd%2BgHK5CZJYUSU6L9CIAKTXLFfVwUgd%2FrU2rwCXVZgrd38wh77uvwY6pgEbK7do8kSuaWWU1VKs3U2y1zYT2zShsyA44h%2F73j0lMaG%2Bg2Y7mEEUptUAEWFiycsMu1iFtTHH4Kzr1WfbODJH3h42jLbEFGonGT6YTtzW0Z%2F%2BhhoWIsYao%2BGpfN6eqrVLvxvfdFw%2FBSLtdsFT51UAbvyvwQ5DEvyEtOsQxlRvqjMnllmkKS5RHNO8Kjd1xQf1j8lfV2nlVha5e2pPt1JjpLjaypB7&X-Amz-Signature=dbda1773324ac2c7336ce134214e7b50ac60e4938b8e1efea67106f88532abbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TVZLOA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIED86dEb5OFC34WDmKSp4GbcyWRQUnT%2F8ZVeM1dwk7%2FZAiAdMCvK7uJaT5soimafO6A0HLJNncHpQnVnRS1rbBqk2SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU2dSG1l%2FGvOWHErmKtwDkAm6az0Nx5hXlJQjiOtP%2BhBWCZkr6GmhihySyufT7LKUp8dwcnOokuLzSxJ%2FlbDWSiKtvZ%2B6l%2BVf1quXD79MAl2C9c%2B7K2x0kXtfnFJx8spKJR%2FYzJblYnTeL3a5sOdebaVa5jcX8CxBwt77tuaYYYggmw2iCff9UFJkEr00T4%2BV0KKCaaov32HIHBqSpiBjArabsZyvVUZAvHuTrr5sND%2FZ2qt06RhvFR1%2FxzSkqurleL%2BaoOug%2BDDLPZnMuAqoN8W%2BB%2FIgieMyd2U7kQzex%2F9NjXjiScUgSPv%2BfZIUzdrU7PqcoDZY2VESX1SGfMbXL32RSpY%2BbZoMLkJdGFjs5fFbibQTxqIs%2FF1ti414WwFQqa5Ik3hpq3niFHmiMt1YwwjLPB3mA9SyROUCfj7duQ6%2FT2mHCcE8gKe9yTsGcvuiEsaFUn2fVM7VwwVyWVanT5vu7xeyygQ3lRGSnUvbWu7Jy%2FMS2DUd9sm8oEsddkYzNN%2Fjjx9%2FlpoDLajlF0ORYd0M5O2FmLUcdNgIymtJRSLqr3nxqcYARvzbQS7NuThbjssAxhTP%2BX3puGxaAgvHXIemG%2BPkrzS55nmsS%2Fg1xy0I7mx6hkDHWZBEdiMnc1aJX%2BPt4jKxNc%2BXeqAwkb7uvwY6pgFPQtu97UGFHczIJG9R67hdUfS0Hw72SrLBhBMFn2u7j199DM96B21QgUcRgcpVa9%2Bgx4ng%2B2GNep65oAE03cTRfX1GNf7S%2F8XDiY%2BER05PP7SD%2FE83ZTZfXn7FdbOzSa8Gf7AxtLv34pO84z926eusVY3bXqntpn03sIjvlQcX9pTEPOItW0BYpr07xDTD93FoUMs2PhX2rGwkPbr2UXl%2FqdcOoDV3&X-Amz-Signature=f0f814b2ab8d1e33a653c0c902c602ea19242765c0d1fbffef5daa1df083b7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KWP6EO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCjzf5EGCmVoGMe7Xx4IV8SriqTIODZGg4uvRYzxMR8nQIhALl%2FkFBCjSV%2FDKPpzQgV6O8pUgLp0KsOP%2FiiJks%2FCFGTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF0K9It6ymCAeZ%2F1Uq3ANZroS%2BGFa6%2BM%2ByPx0jELGXeuqAN35%2FPjcE4nD4eAjJe544UDxiwRSVZxe839XKliT83KaK8OolWV%2F%2FHmXaVZgFZNr6%2B0LFbPncB2nHitpLIQ0lgVjJ9pr%2B0vvRb2VlsCYJ1yR9c7TdRF3WpkJhM7IlBnTl3powMLKD0XeOVVhAMcM2E7OCwfWnSzYjpjg%2Bu86JKkt7SfwzbIz%2FrWbddoxeM6Pb%2BPn2MMILzFVot5BRJMCHVGGDsSOJ6H3T9yi8P%2F6cLvGpTZG%2F11I2iCX%2FlhGiTp21ORMyFlsUv70gFdRAOfWaln7IfU1W0tSs6xTNUEj6ywnyAPoYKIEcX4Su2POTl6TBwBCesqYb7cqxkkf%2B8Hj5vIwY2oMVIB2K6FlW8lnDNvkSRIDEvq2Jj1qGpC56p5zXMsuSBLx4Hn0yitHrd2uvgET7zlSZYVa3nZmguR6fIyyDD%2B5hCYqFl2iafHW4YTHpPC4SSp3xovtlY3%2Fd%2FHp4S0CvagZ0VzvqNl1b2h%2BuW4FOoWaaS1yC3kMp1MDEcn3XsG3xVrdZ8uDjd%2FvBTVQTDHT8V8svNHzTy%2FCkgD3kpOPVHyr4mx7WsHW8lK89qC4NizKsYPpN9PbeHX7ZaRBPO6UKTMVNnceeszCkve6%2FBjqkAQ%2BIsg3q0bEO5VvVW9rjIQ1eLi30Kycx9aGBK1QbJsVnP2aTlSK9UiUy4k0NzNfhWI89xpDbOM9YhI%2B4CewskvUjws5qMufpeFcDJd0maAYpJz8Bi%2FOks6baTbAj2YPizV7zdKfFNI5ETqybi8DjDEB5Kl7xXv%2FllkpQ0v2f5PLdqny%2FaO0d1LGw0vfz4Hyw7sqOksZCaP8SttsBpzaJGBE47D8a&X-Amz-Signature=6d584c6223164ab2c259ff57dfed55fe21b8b90bcfdccc296fd7ab7144a10f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
