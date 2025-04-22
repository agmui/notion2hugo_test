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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPLU5PJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJFMEMCIBhlHsBg9lWP4KqXprEn%2FKxpvVHZXhfoVizBMCOVGtu3Ah9LzDt4pdMhd3WT46RnWTUAQaV9GwW9tDBXTImq%2F4X3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmVfw4yhjxKYpFenQq3ANSxFNAfDhgpj3uumIFpVlU0r1LCmnOr%2BvMVNpK6mWJsGewpJ7dXmH%2BHIIXY7fJVehZqNsIUCm2qZ8SQPxRKSZZFOL1xdxni3JQ2lJFH4X%2BBSddp%2BZaYjXsLFBpcsIGQh3UJDEtHIAM93L6cZ4zG%2F3s5N9Ptvnt0hth52AyAiWbm%2FZtPLfAbsuz7npIqK%2BONP7HRc42yogT11YYUxGugV8mxaXACdhNx2H%2F9Cn9ic7cMmTLoN%2F6vlAOE%2B%2BorMG606ZTWILsiwOdm036m1rVdq6%2BiG02Jwi4tfhBGIhEzHi9OK9NBW8uGA8Qjww9IXN484%2BMB39oVEL9TydghCN%2BGtl3RDM0pN8QrMR7Q%2FYSuRHYZMPvYMZagLl%2FRfeBmdEzSstJdqnIARfDdX0f3X2I0Jdihh8gJyhTiWCU5j5sjT4EWKd3UdO6KrcFCjz6LBXXk0Dfck062TLURE%2BIJXmZDry6ojxeuULLVi3%2Bn%2BwQa5aYaTMpCzwss%2BTNU1ekS1gZBVdv5r35uXJJEpSVlDyuEMi7NSpOyp82cZfbwl1lzYvol87UutDcQJ9JLvL9zbLt5PnkqGHB8WXMQGBiU%2B1weM8n5oHij9sFfpnHYBPe%2FyoGxH8%2FUmY2fNpj9RRHKDCzi53ABjqnAfoF78gh6f61SFQ78IzehpNOldEq7pCuc2toWd%2BaKjgoTytj%2Fdadl9DXTKyjdZKDfKLdlivN9EAWwcRMFnNYt5CrjrhMM5l%2FdMvGGaKyy%2FP4%2Fq%2BfF08eHNGIDTbVxUjF1ZtZM6ohG0ZJ9xm%2FT2o6H8t%2Bgl%2FyVjZWd0z0ruPGjMzww%2BG7nburADI3nrjx7rm4ajM6pqU3p1g7qdoAao1nMR%2F5nk6I3exi&X-Amz-Signature=96f560271778c6b570a55e44c0d748d269b3c2cc94813cffb37dc3a73aee4a27&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPLU5PJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJFMEMCIBhlHsBg9lWP4KqXprEn%2FKxpvVHZXhfoVizBMCOVGtu3Ah9LzDt4pdMhd3WT46RnWTUAQaV9GwW9tDBXTImq%2F4X3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmVfw4yhjxKYpFenQq3ANSxFNAfDhgpj3uumIFpVlU0r1LCmnOr%2BvMVNpK6mWJsGewpJ7dXmH%2BHIIXY7fJVehZqNsIUCm2qZ8SQPxRKSZZFOL1xdxni3JQ2lJFH4X%2BBSddp%2BZaYjXsLFBpcsIGQh3UJDEtHIAM93L6cZ4zG%2F3s5N9Ptvnt0hth52AyAiWbm%2FZtPLfAbsuz7npIqK%2BONP7HRc42yogT11YYUxGugV8mxaXACdhNx2H%2F9Cn9ic7cMmTLoN%2F6vlAOE%2B%2BorMG606ZTWILsiwOdm036m1rVdq6%2BiG02Jwi4tfhBGIhEzHi9OK9NBW8uGA8Qjww9IXN484%2BMB39oVEL9TydghCN%2BGtl3RDM0pN8QrMR7Q%2FYSuRHYZMPvYMZagLl%2FRfeBmdEzSstJdqnIARfDdX0f3X2I0Jdihh8gJyhTiWCU5j5sjT4EWKd3UdO6KrcFCjz6LBXXk0Dfck062TLURE%2BIJXmZDry6ojxeuULLVi3%2Bn%2BwQa5aYaTMpCzwss%2BTNU1ekS1gZBVdv5r35uXJJEpSVlDyuEMi7NSpOyp82cZfbwl1lzYvol87UutDcQJ9JLvL9zbLt5PnkqGHB8WXMQGBiU%2B1weM8n5oHij9sFfpnHYBPe%2FyoGxH8%2FUmY2fNpj9RRHKDCzi53ABjqnAfoF78gh6f61SFQ78IzehpNOldEq7pCuc2toWd%2BaKjgoTytj%2Fdadl9DXTKyjdZKDfKLdlivN9EAWwcRMFnNYt5CrjrhMM5l%2FdMvGGaKyy%2FP4%2Fq%2BfF08eHNGIDTbVxUjF1ZtZM6ohG0ZJ9xm%2FT2o6H8t%2Bgl%2FyVjZWd0z0ruPGjMzww%2BG7nburADI3nrjx7rm4ajM6pqU3p1g7qdoAao1nMR%2F5nk6I3exi&X-Amz-Signature=02a4a1c3dc510d4bdb2da8cd7c9c2c0563450f4ae8ce6f3342c21360574fc7be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYE265LZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFmf3ZikJhLfSa4uvW5qDjyGy%2Fwt63RQb%2BF33eu838zGAiEA39J2EtzXLXUxBxw0yiTboTB3gg2vBxCxjhX3eA85lGAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOT%2B8g2sgxcG%2FrCeyrcA2mgc62tsU%2B8%2Fn6Yk%2Fwb%2B1uuH3k3cyS3U%2BjEbMEGS0yuAp9vSh%2BWR1CiuQxbDPXBDpBImYUybeY9kuc95W9tqjFuD6btvMwyACrcQZKh50vEWMU3WBdOIXJZZK04CvbxHd1LZf8x1sMKcyFQ0BTL44vO3ghusv9CVE6XN%2Frh6Mx3aXN7lIMKJzoGGty5WsBzJGKqiMjETw%2FNYQ5YxEl139pjIDwhdHoTMqmxsf%2BmP9oKdJjQXRKPgIqzMg%2B%2BtpFagHCRqHNjbSHAf50jecZlbgDA9ekj8qQEnVPpVmCYcXjpurcDLyHZSF0ZBTERlZnXk3LG6GN6oSfbPl0zWv3D%2Bzpn47NssR24BAXNi0RlQLLuRJNHxnKaGgACFTauWNe2BtRuhu%2BkUiCEhrCZ5jDbIyNPDKzSF3TAakQVPzBEMeiLK1w48QM3lCv0yIeRikDIokyf0dnwuMHFo8mDu9f11rj1CwR067gYNHRnYHaHAyXQzdoD76fXkcpNI2L97oxgsPHuuyq4ALZ27sFkLV8hcOK8%2BeoKuEi4g6QWDPtYJ2RV9T4kb7xryMwDd5UkNKRPDen%2Fp7g9fPkJTI7xwoYgHsog5IySCIDtuYKya52CP6cZLdCzWH6dWQWiQ%2BGeMOKKncAGOqUBdAD08c7NDDbc0iTL5z9Jcjj2IXqGmVCME8CpUzQj8NDkWqW4eL8U7c03ElCSGD%2F4KkHkh1e%2Bni1LMjgGnEy5Bz7PAmdY%2Btp9WA7cLXxlPk%2BLuyCNal%2FW6vcqP0TRJPaWGTAG0TVSHUm3tYSDw%2FP%2Bg1g7hHxYY4HyNYjHSMdhhYW0y3X9HEqLaGPV06h9d2TQigfuB6E%2FSH8BF7MUEOBk4EQ0ClQL&X-Amz-Signature=007f6b9cd9d7895078204813529612480ca9895be740257bb4edd19281cdf9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3I4LNS2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIF3LE6bY875rRb54KAChHPXkbGhUu%2FzCouwbeaC6N1l9AiEA0sUbqi34bBrxlE%2BtGHljtB2JozENXgmf54zBG4JyitcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1N%2F9vfhIJcU71yUyrcA%2FBQhjZkWE5y6XdXUEwj7UzdSuKGaGYdMEFQdqqll8LnlDdGUDgVeYc3YgPFLuA4BGJFnOgRDbb8qwuF2AZDQqPHXH%2BFHltg8V2%2BqK28izfYB7DxRjSaz34AGscdudJnl0wRJbvxstEweUTuMKAhY2EqLkGC1q6s9zaTT90nK1nCDYGjfg9rJRUJBm7J5IYF5bTn9jAEiOOSrrBZYhkUv8ywERQT%2BCltUuGTbGWpShzguvYUgev6wJ1b1jKoOI4qADJIjQpwC10QPT5eAXRCUyrUk5osRsiPi72H9A6h%2FQCgN7dBLY6BxczOS3Le5smsBzEUOwJihlD%2FlVDjax%2FxpCHjsHfnIqmgDVbl%2FnxlCUcz3xU9R%2BCEp3oit2oLs8hjxRU1Qg%2FEF03a1UjDfcU9wjXgOJHFC2gCmLLYq%2BEarkP8SkCHMXDqU1U2jTP3LiCJ6UTE%2FB6Sno1%2FUkqnHAR67hjhdRId2foMCBdtP47Z%2B2xNLbpndV%2FYq9RuUTSogyDx2kBlocAlUVJcImaA9fe3bEaq%2FlCko3VX8Ync%2F2iER9jg9uhuAGITM6k%2F%2BThD7N2uhwMx%2BgKhCs4ctiwidGyA7dNGnwRjSl2dyyycRSfRl%2Fx%2BAT2%2BJPa0bcnb40iNMLGLncAGOqUBp%2B0WDeBgphNnMvTeQY6diiuOStT5ki6U9Ck%2FrZW52J2cjrQdqP9IH8kMZntSzmvPQLyhJ9J5lnT5%2BhCDOqUJJfb5UxOZPu3yGcPfnS9qQHtRcJitBXSgAInt49d9jtJ8SMcjV8iOVaFPEdDSUt3uVry69PLmgqbWsoxdz1dyC6PMdp%2BVCPk6PbuTiGdEjkVU7Fi503dJIAl5m98SRRGX5UfjJzI1&X-Amz-Signature=f5d1bd0d1d77d08ec8c322fc18de776ac3b367d0bd24ea57d6db50b2326832cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQPLU5PJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJFMEMCIBhlHsBg9lWP4KqXprEn%2FKxpvVHZXhfoVizBMCOVGtu3Ah9LzDt4pdMhd3WT46RnWTUAQaV9GwW9tDBXTImq%2F4X3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmVfw4yhjxKYpFenQq3ANSxFNAfDhgpj3uumIFpVlU0r1LCmnOr%2BvMVNpK6mWJsGewpJ7dXmH%2BHIIXY7fJVehZqNsIUCm2qZ8SQPxRKSZZFOL1xdxni3JQ2lJFH4X%2BBSddp%2BZaYjXsLFBpcsIGQh3UJDEtHIAM93L6cZ4zG%2F3s5N9Ptvnt0hth52AyAiWbm%2FZtPLfAbsuz7npIqK%2BONP7HRc42yogT11YYUxGugV8mxaXACdhNx2H%2F9Cn9ic7cMmTLoN%2F6vlAOE%2B%2BorMG606ZTWILsiwOdm036m1rVdq6%2BiG02Jwi4tfhBGIhEzHi9OK9NBW8uGA8Qjww9IXN484%2BMB39oVEL9TydghCN%2BGtl3RDM0pN8QrMR7Q%2FYSuRHYZMPvYMZagLl%2FRfeBmdEzSstJdqnIARfDdX0f3X2I0Jdihh8gJyhTiWCU5j5sjT4EWKd3UdO6KrcFCjz6LBXXk0Dfck062TLURE%2BIJXmZDry6ojxeuULLVi3%2Bn%2BwQa5aYaTMpCzwss%2BTNU1ekS1gZBVdv5r35uXJJEpSVlDyuEMi7NSpOyp82cZfbwl1lzYvol87UutDcQJ9JLvL9zbLt5PnkqGHB8WXMQGBiU%2B1weM8n5oHij9sFfpnHYBPe%2FyoGxH8%2FUmY2fNpj9RRHKDCzi53ABjqnAfoF78gh6f61SFQ78IzehpNOldEq7pCuc2toWd%2BaKjgoTytj%2Fdadl9DXTKyjdZKDfKLdlivN9EAWwcRMFnNYt5CrjrhMM5l%2FdMvGGaKyy%2FP4%2Fq%2BfF08eHNGIDTbVxUjF1ZtZM6ohG0ZJ9xm%2FT2o6H8t%2Bgl%2FyVjZWd0z0ruPGjMzww%2BG7nburADI3nrjx7rm4ajM6pqU3p1g7qdoAao1nMR%2F5nk6I3exi&X-Amz-Signature=e2bc15fb00a9b22e348c1291ea6c560cd15d399c5a1dda13fa493617809fe3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
