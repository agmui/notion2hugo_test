---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWWZKTD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwOdfViPFTlxQktsyKZJCPJRBIUtuEdqUURWqAYdlU0AiEAu7bkZbibwi8PY9swczwPi7cRhjMNvp%2F362Y%2B5Plu68oqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLapyrwik86gcnziLCrcA%2Bj8x18RTyiVPWGcPyiBoulBmS%2FfmszTw9YFk3Ml7%2FliehrM3%2BcrAtXoYx6Gdtcsy3hGQWAxq3HibW0tIQRd98f4I4TqReu7rrNlfecPffwXg%2Bjt66ps%2BLrBJ%2BJEPzhQA7VUSyOunVq7Ora%2BhUCjCNtnsA%2Fagy3MBca5wxNmadpUdGP14CJDQ1c9SHWZVBJca10ubw0HXXQGRiMGS5Y%2FcGOGB90qLB106pOmODyKBTcgmGO0rqH%2BPXT1VPbeatkhDLndIXEp0X0gKtFLERxZEjfC5CMEH0thXBWjq%2BGVngELBYKYDgwH03NXJsH8NlYGj4SoOfSGTfrgQVKgHbph%2BDdWb4r4yILHf9hIewnFudE%2FDG3W6nfvVgHGozt%2BQf0Sg2hDe2am3JrrktVJPszapLU9xl51PdwxqOPqugppicVepqEF9dcK%2BLFpp2umk5gURRxjbUbwpHBA3Q%2FZfS6mLviiZ93u2IqyFHE1ycMYkq0VBawq3JaP7U4Q6vARCtzJWp3HWTiOT0wR5HtufMX4nLwR97H3KyvwbR%2B8LyYLjUVV%2BXaD7E%2BQ%2BEyCqo83GAfj72IS3KQL7g65I4ElcUj8k2%2FfBizakXFVowT4eX1zenqloKrjfJdPWcZex2TRMOPEkMMGOqUBK3YUex2chcghh5OsrCbOeu0HltZy8I0wDauvneH1Xo01OMYTeDihamj5f14qM3qsXCXkXEog%2FP14m9FBymbm3UcMI1HbFU8FqUSIeZIi8D3H%2BFb27GcUvCZlVXL3lBkknxTtcf3wjNdsCBYR%2FO2f5bazGKWV9oYACDc2fDozolMW1n70oyxcC4PYhbatmsaOsBYZxzdM%2FxDR5iDX6E%2BvVaX%2BOcQe&X-Amz-Signature=3a903fc0eee36f3e7ae8133d199f3c4de2ffbdf7606d7e4804300cd88fce152b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWWZKTD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwOdfViPFTlxQktsyKZJCPJRBIUtuEdqUURWqAYdlU0AiEAu7bkZbibwi8PY9swczwPi7cRhjMNvp%2F362Y%2B5Plu68oqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLapyrwik86gcnziLCrcA%2Bj8x18RTyiVPWGcPyiBoulBmS%2FfmszTw9YFk3Ml7%2FliehrM3%2BcrAtXoYx6Gdtcsy3hGQWAxq3HibW0tIQRd98f4I4TqReu7rrNlfecPffwXg%2Bjt66ps%2BLrBJ%2BJEPzhQA7VUSyOunVq7Ora%2BhUCjCNtnsA%2Fagy3MBca5wxNmadpUdGP14CJDQ1c9SHWZVBJca10ubw0HXXQGRiMGS5Y%2FcGOGB90qLB106pOmODyKBTcgmGO0rqH%2BPXT1VPbeatkhDLndIXEp0X0gKtFLERxZEjfC5CMEH0thXBWjq%2BGVngELBYKYDgwH03NXJsH8NlYGj4SoOfSGTfrgQVKgHbph%2BDdWb4r4yILHf9hIewnFudE%2FDG3W6nfvVgHGozt%2BQf0Sg2hDe2am3JrrktVJPszapLU9xl51PdwxqOPqugppicVepqEF9dcK%2BLFpp2umk5gURRxjbUbwpHBA3Q%2FZfS6mLviiZ93u2IqyFHE1ycMYkq0VBawq3JaP7U4Q6vARCtzJWp3HWTiOT0wR5HtufMX4nLwR97H3KyvwbR%2B8LyYLjUVV%2BXaD7E%2BQ%2BEyCqo83GAfj72IS3KQL7g65I4ElcUj8k2%2FfBizakXFVowT4eX1zenqloKrjfJdPWcZex2TRMOPEkMMGOqUBK3YUex2chcghh5OsrCbOeu0HltZy8I0wDauvneH1Xo01OMYTeDihamj5f14qM3qsXCXkXEog%2FP14m9FBymbm3UcMI1HbFU8FqUSIeZIi8D3H%2BFb27GcUvCZlVXL3lBkknxTtcf3wjNdsCBYR%2FO2f5bazGKWV9oYACDc2fDozolMW1n70oyxcC4PYhbatmsaOsBYZxzdM%2FxDR5iDX6E%2BvVaX%2BOcQe&X-Amz-Signature=d7eff0fc0b5f1a3b736bf064054215c5d9c948bb1e439470a70feb66be8949d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWWZKTD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwOdfViPFTlxQktsyKZJCPJRBIUtuEdqUURWqAYdlU0AiEAu7bkZbibwi8PY9swczwPi7cRhjMNvp%2F362Y%2B5Plu68oqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLapyrwik86gcnziLCrcA%2Bj8x18RTyiVPWGcPyiBoulBmS%2FfmszTw9YFk3Ml7%2FliehrM3%2BcrAtXoYx6Gdtcsy3hGQWAxq3HibW0tIQRd98f4I4TqReu7rrNlfecPffwXg%2Bjt66ps%2BLrBJ%2BJEPzhQA7VUSyOunVq7Ora%2BhUCjCNtnsA%2Fagy3MBca5wxNmadpUdGP14CJDQ1c9SHWZVBJca10ubw0HXXQGRiMGS5Y%2FcGOGB90qLB106pOmODyKBTcgmGO0rqH%2BPXT1VPbeatkhDLndIXEp0X0gKtFLERxZEjfC5CMEH0thXBWjq%2BGVngELBYKYDgwH03NXJsH8NlYGj4SoOfSGTfrgQVKgHbph%2BDdWb4r4yILHf9hIewnFudE%2FDG3W6nfvVgHGozt%2BQf0Sg2hDe2am3JrrktVJPszapLU9xl51PdwxqOPqugppicVepqEF9dcK%2BLFpp2umk5gURRxjbUbwpHBA3Q%2FZfS6mLviiZ93u2IqyFHE1ycMYkq0VBawq3JaP7U4Q6vARCtzJWp3HWTiOT0wR5HtufMX4nLwR97H3KyvwbR%2B8LyYLjUVV%2BXaD7E%2BQ%2BEyCqo83GAfj72IS3KQL7g65I4ElcUj8k2%2FfBizakXFVowT4eX1zenqloKrjfJdPWcZex2TRMOPEkMMGOqUBK3YUex2chcghh5OsrCbOeu0HltZy8I0wDauvneH1Xo01OMYTeDihamj5f14qM3qsXCXkXEog%2FP14m9FBymbm3UcMI1HbFU8FqUSIeZIi8D3H%2BFb27GcUvCZlVXL3lBkknxTtcf3wjNdsCBYR%2FO2f5bazGKWV9oYACDc2fDozolMW1n70oyxcC4PYhbatmsaOsBYZxzdM%2FxDR5iDX6E%2BvVaX%2BOcQe&X-Amz-Signature=0e9f08d536a5981a0459ef62f677299f4f022a62d3906ddddf1d4c0251d184ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XPUWWXS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp4r8RsI9FNJvWB%2FC4%2F0OJglvJK8EKgIiPk0DDofD9GAiA1BXeUES5H1nLxaW5Eo1BcIzrJ5tKvkZsZvVk5sBOm1yqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxFGsOzgFA%2FfYrXRMKtwDMp5SwGmDVD2095HypL8WubXHApIe%2FdT05tQacptTv3IQUdCvEErznTJ4pSoNs5BdWLfD3rvgrNjoO2K%2BqUD5TM52SzILRb48vszVIkkXmE62woWWEY6dmIfJ%2Blfbn%2B%2Bt6bTYXEnADlYlkAScqFBhTd25YrJ2U54SLsEXTjQmnXlGvygCGaWrmMBW6rPySlmsvlQZaTQrlgPCuek612LRK%2BDqdVwqOOPI92%2BjTEe9D7xWdUr0zSubO8x0jwWJ7eYpMv0OQzYCIzomSU6fL6dHU4PZjtvAm3aRFSPnVAXlZMoYsiVAftb6DmTgQCiAlr%2BXbMPHb9TnB%2B6vyWzHt2qkzuateJ6hEPbZaCEvABhGpYzXW0cZSbtaVcftrQOA7aR5fBzXNMgrgVZ%2FqDI%2FYj%2F0JethkUYf8AeT%2BJ2XbtAYPD2wDqpa%2FNfJrK3io6AqbqoqQC9ZE7owGG2otudWdOptb1Y%2FBI8MrJipF3KP9zOIqGkZ3VyAQLUyhTR8ZpvcqF1XcBDxziC4rOyeeXIeVT6TCqg7%2B6we13fziuPzZbiF8EUs%2BWOTIMtS6JLA9rIk6vxZDrEPmfDwyKakRU%2Bj4mvkSBOGjRZge7VJTH8ikPUTxHS9KZTYQfWZ%2FHt597Ew68OQwwY6pgFF7V03zpAK8vEBxv9G6HqAmBA%2FRtQtVa4kq2V0ZzAGKC%2BPJaLPj%2Be%2FYy8E%2Bjyzg4Lr7nhTarFq10%2F6ilD7FQRn4AEnGzIkRnhnn6ZbIuarvkF9BdVbfH6Ek%2BS1h5n66ciIxhJnVOtdHL%2BBrZVt75JHNvlKuE9UtrgmORKCp4Dq8HHGO35gawjVuOotv0CUfCmfwlttQHs2GDfWxkIpMttualP56I%2B0&X-Amz-Signature=6aaa9e02d4ae06a241ed5cee408c4523e0b9d430faef7da97f39b705b64a608c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQZJDDJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvubg8dVmiiBSZUYnF50IjNo2ex%2FyEgnWGBXCSBudXJQIhAPcD7cEIlEvghLTKai7nF2lf3Y%2Ff91Fzx%2FGvk4Osl0j5KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWrdZ%2BaEcm2S9rx1oq3APevDnSB%2Bf09ZdDzcyHwMpPCz5zuVJ9eQFYYM5X0Ybcw3ls7g5rbNrST27yNRV9DQClbZPYdXTOtazusqkRIcjRc7S8l4pEDRoLtwxs0ZJeMJRHJ0M1anlH3jxGoEzWqdGdwMYeiVwkU4Ac4m%2B23gMZ%2BF5WCKUdVzJNk80qVGp%2BZdoJy7jK5ixA1sYSxHTTLfZv%2F83xYz6cGp1KgvWJTAfJhsDI8fpJaYHOe3f%2BdoJ%2FB2V3Uro1sKrje4gmOEylyV%2B91M85LkIKAkUJEndDRGPysmEB%2BJ7HjGINsf0NdJU9cJt4iiafFkk085cXoGvbERF%2B6xLxMUL0YjprMLamiZzp1NUrdOBxeEdKVs03uKnF%2F%2F7qbrBy0W1aIoT3nvhAn7DnhWZe%2FoHrpfldtgi9CWIMUvmmSiq%2FMqEO2njpHY%2FP9QWGz1avdTLeOEwwKLEoN36CTlaFY16JLjo25DDrFN%2Fum8oJ4K16ASrZbDUFWBEed%2B5dbsrT3yyYvBc%2BFlJmyexMOYLLOCSgdXZV7YwMVj86m4vCD%2FLEqCnF6mcJC7DfWE1Q5LFG6JOPHznjPw0XyW3kFqSwYz0O80EcIJTxpi%2F%2BTulDf30Ag5buIqPES2Ekn5ny9SGgN%2BUs6%2BWjCjC1xJDDBjqkAdhmJZppr0rOqHDSSBud0LXoJmUnZHiBcq8boOjGEy6ppNR63ALvU3vQGAMHkZ5UntsAl2PCmcsufbNZt%2BYZVahLNqITvbR5%2FegcWmTjexTAE9gB7%2Buh7GPx594DMA%2FFDe4ch7frv4lQ7LZSnHgopy5nUl32tzWg4vk2JoZZzHxsbpsTbB6NSuvqaGovNCu9gHw1kQvTgaPwdXeIjqyGlTjTl%2F7D&X-Amz-Signature=8e8f4d9c6bf3061bb4d4260a6a2cd861b2409a5a371262fe369fd473442033f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWWZKTD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwOdfViPFTlxQktsyKZJCPJRBIUtuEdqUURWqAYdlU0AiEAu7bkZbibwi8PY9swczwPi7cRhjMNvp%2F362Y%2B5Plu68oqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLapyrwik86gcnziLCrcA%2Bj8x18RTyiVPWGcPyiBoulBmS%2FfmszTw9YFk3Ml7%2FliehrM3%2BcrAtXoYx6Gdtcsy3hGQWAxq3HibW0tIQRd98f4I4TqReu7rrNlfecPffwXg%2Bjt66ps%2BLrBJ%2BJEPzhQA7VUSyOunVq7Ora%2BhUCjCNtnsA%2Fagy3MBca5wxNmadpUdGP14CJDQ1c9SHWZVBJca10ubw0HXXQGRiMGS5Y%2FcGOGB90qLB106pOmODyKBTcgmGO0rqH%2BPXT1VPbeatkhDLndIXEp0X0gKtFLERxZEjfC5CMEH0thXBWjq%2BGVngELBYKYDgwH03NXJsH8NlYGj4SoOfSGTfrgQVKgHbph%2BDdWb4r4yILHf9hIewnFudE%2FDG3W6nfvVgHGozt%2BQf0Sg2hDe2am3JrrktVJPszapLU9xl51PdwxqOPqugppicVepqEF9dcK%2BLFpp2umk5gURRxjbUbwpHBA3Q%2FZfS6mLviiZ93u2IqyFHE1ycMYkq0VBawq3JaP7U4Q6vARCtzJWp3HWTiOT0wR5HtufMX4nLwR97H3KyvwbR%2B8LyYLjUVV%2BXaD7E%2BQ%2BEyCqo83GAfj72IS3KQL7g65I4ElcUj8k2%2FfBizakXFVowT4eX1zenqloKrjfJdPWcZex2TRMOPEkMMGOqUBK3YUex2chcghh5OsrCbOeu0HltZy8I0wDauvneH1Xo01OMYTeDihamj5f14qM3qsXCXkXEog%2FP14m9FBymbm3UcMI1HbFU8FqUSIeZIi8D3H%2BFb27GcUvCZlVXL3lBkknxTtcf3wjNdsCBYR%2FO2f5bazGKWV9oYACDc2fDozolMW1n70oyxcC4PYhbatmsaOsBYZxzdM%2FxDR5iDX6E%2BvVaX%2BOcQe&X-Amz-Signature=cd3aa4050eb84d364fdb5c224cdfbe5817f2199b992f92136d8f7e9ee18592b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
