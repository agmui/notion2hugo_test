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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJAZWGQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDhRC6%2Fd%2FQX8jJdXMtRVA5Vzmx2o8%2F67HxUqtq0PZpzOgIgbrp93bkXcEnCw%2BxLP3yLbFGqSo1Zi%2F%2FvmV9TWQDRICYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJuN5HA81AhfDNcWAyrcA86IQVr3BtEImnRFC2MnK4jyp6EQ5Afgjbes24bdxAzjgeRDVqxca%2Bt7tillYM%2BbwX9t4NHxcfXyTtPJOYn03zjHqsxmTfmZTbEa5csgmq8n8WXlosp%2BdKDSfyWyVEEaMksyicZmZt3twzUfHsD9kHHNyvP%2FGZkTfXXj9etDausU1RUYxryKgBgye2w%2FfrR%2B%2BuNdMYGGiTgY2cHhMcBzHu5BiUAPU4fOQG8p2CUEbW2Y6pnfDm9nZloYhmAOi8Qmiico1GhVlyAtoONPtX4hVXtgGSR5UxcgHNIlH01y69C0pOpgUTcmScNNUpkPuzS1OKJtgL0Xd0S0%2FAxxWYYtJENFYWE0%2FreCYjiEoM0K0mA9h9ElkdnFRc1TSteVuI9TduM6ZyjKd57bW63D8FXgWlB3d%2FGfkfvGc%2FF%2F%2FGuKWzApnjWY1t2Mx0SGxjw4qkHPLpZaj3CNhZOdV8KesBNTOvcd12yCWJb2u9tagtVl6VDRnV3bYf%2B8jyrjk8IfFjyZjP2Qh%2BtujgPM8fkrU%2BW6EYRbB8Ghq438gKB61OtZUB8oDN1QupddB4Kzumr%2BuTILM4AdvmYF8MMEUR8qp5plbAygecvr373pqD%2BE8zhv%2B5LLtfpHWlqHr0bl1hevML7Op8AGOqUB2CkAf2SUeHx1jx4JxDW2kjfD97ZAi3Jf%2FIYBml21n4SJa%2FdmRq9aJGSlfbs%2BN2kxyOXVQElHM4wEM3RwiwVAA%2FT3PnEcwKP46L7slowAjirTy35ZEri6cnk4849H7k1EXPbyXBTS2CqB6XkACNm6pedHPB%2FXsWF0WA5seWFQBAkCllEdiQQtL1DW36mMNOKi2vZ%2BCcyyjKwysetJ%2B89CDomHj%2F79&X-Amz-Signature=c1449140ed3ef43e6dbc5477a8dd4f472fa957d4a194feac33a2e6ad4fabfd57&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJAZWGQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDhRC6%2Fd%2FQX8jJdXMtRVA5Vzmx2o8%2F67HxUqtq0PZpzOgIgbrp93bkXcEnCw%2BxLP3yLbFGqSo1Zi%2F%2FvmV9TWQDRICYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJuN5HA81AhfDNcWAyrcA86IQVr3BtEImnRFC2MnK4jyp6EQ5Afgjbes24bdxAzjgeRDVqxca%2Bt7tillYM%2BbwX9t4NHxcfXyTtPJOYn03zjHqsxmTfmZTbEa5csgmq8n8WXlosp%2BdKDSfyWyVEEaMksyicZmZt3twzUfHsD9kHHNyvP%2FGZkTfXXj9etDausU1RUYxryKgBgye2w%2FfrR%2B%2BuNdMYGGiTgY2cHhMcBzHu5BiUAPU4fOQG8p2CUEbW2Y6pnfDm9nZloYhmAOi8Qmiico1GhVlyAtoONPtX4hVXtgGSR5UxcgHNIlH01y69C0pOpgUTcmScNNUpkPuzS1OKJtgL0Xd0S0%2FAxxWYYtJENFYWE0%2FreCYjiEoM0K0mA9h9ElkdnFRc1TSteVuI9TduM6ZyjKd57bW63D8FXgWlB3d%2FGfkfvGc%2FF%2F%2FGuKWzApnjWY1t2Mx0SGxjw4qkHPLpZaj3CNhZOdV8KesBNTOvcd12yCWJb2u9tagtVl6VDRnV3bYf%2B8jyrjk8IfFjyZjP2Qh%2BtujgPM8fkrU%2BW6EYRbB8Ghq438gKB61OtZUB8oDN1QupddB4Kzumr%2BuTILM4AdvmYF8MMEUR8qp5plbAygecvr373pqD%2BE8zhv%2B5LLtfpHWlqHr0bl1hevML7Op8AGOqUB2CkAf2SUeHx1jx4JxDW2kjfD97ZAi3Jf%2FIYBml21n4SJa%2FdmRq9aJGSlfbs%2BN2kxyOXVQElHM4wEM3RwiwVAA%2FT3PnEcwKP46L7slowAjirTy35ZEri6cnk4849H7k1EXPbyXBTS2CqB6XkACNm6pedHPB%2FXsWF0WA5seWFQBAkCllEdiQQtL1DW36mMNOKi2vZ%2BCcyyjKwysetJ%2B89CDomHj%2F79&X-Amz-Signature=b7da0eb8d38bf03caf34781818db289384b24f3d9ee37f7a3d2d5c64bc958b38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAYZEBG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDvlffsSR5FPPpJ8WcxRPBqtBKnep8SKJ41qgXLcJYUUwIgFewYrUXBPyW5HxkOemuB4dw%2Bk8iomJ2lFFwUMUjYvOsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLJWKSkCilq7O5zTbCrcAwOEgqzUILulESJ0x0ouaOwynanu2tzxj3MfJyvWbdfHQJReX0GYwjsbT6K8qUmYAtwwczlxNe%2FsfWOXHN5ICqN2zrQ7vOJ9rQT3Sa1t3BNlItXyp483K%2FfZNwfKZEXdYILO6wPNO3rDrQK5fIV7UXFhl724fBQ20g70HfobDBM1bpEgm3dgC%2BoyamktsrGzitIeJYb%2BycjJJMg8QqYJR1fqaImabUVTi7pB4DCOBPhTYePBz7jO6HOWxEkqQJJo7qNF8ss8X%2FckZ5sRGzJEek9EXsfRi1iRQ%2BMZejndme1STh%2Bx7qyoB83dfYG2lyGAKoN%2Fc6j873QsWVNe81M9FJ8jT2RX%2FXRkGsQCK5a5eDlsWRBnMhBheQK1dGD0LohH2Z7bfQenBtkGH%2Bznn%2BUZSdjjqBT1Z8RffkmaI8WAUb4nVYyNJBO%2B4fLg3Z4As8aGbq6yCzkrfJmoLV9D85i9yKY7%2FBqtzlPilER8muhrAMhieLrXzlOOL9nZ34UYRxMt0WldmlX1QuOhn3a2DnSbXgrYEFkQtDIkv2NGMkOEuytt5t71eyb%2BLXYmBRMEYAp2sdjR07uVKf4TEQXYS3EQ6czmctq15vYjrSBCJMHHDQIrh2oQ8DFYMItpPA%2FOMLfOp8AGOqUB6z8f9IBTVTvu1l17AYaFGaoeNF2o%2Bg66cQ2bRp7DsvIvcpqNp2kd5RKMLFPAIgmdKK6vJAOcnO5jUewE6qAlULEXQNYZIZENVQinXubYxPUhtqgQG2bygx9MKxHnN6Vyvzcru1qXraKV3LnUIXGzefEj2jMa2wOOxrbLF5Ba447wHaNIzRitKaYoVA8MEHhLIrF5ItPjudyfjyORxeOyZYAul%2F8h&X-Amz-Signature=955dc2d6927e97445d51c151079da235f0504ed5540f8a6793b8d1c1ab90a100&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE26MXM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGob5Ap%2FFFtFSMHj4SZJGAVxDIX8GPQfVoLyDfWC4%2FDxAiEA8sxYWu05Z7Ealp7BPfvGoK4%2FguaHMIr%2F6EjyuKQon8sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLvvI3mnisSWySMEQyrcA4cpBFJupklY31epliN8gt5i7Qxa9h19%2BF%2FVjrI1ca2EC5inokjkjdjSCx26qFYiHoRwwplb0BvzWJaEJF7n3Kaib9IkiAlMdB4BVx3EugrszsUBMRVx%2BHsEAtKi1LEHBuyiNjQJV3iECzzbGckL24yZahIbQA%2FZzWZfvh0%2BezhSTzTA0xuckcqBZzqIstyFm2fcIISXLClxeIX8MyZNAIVUTLbQdocaikPMjDeOHKaPbmQwJx9VLQoCCbth7eZViqs2zxmD0pY4YmHEvKsunDBe6kz9P9LtS37sl4mxWn1U9JA2%2BTz4lN44ZywVCHMXZIhDGaTVEVu3dUh%2FNf3DKBIC6ZkAiKxmZeb2aFqtXHfuLokPOAbJuF8IZYZ2rPVoUBru7dz0KtaVb5woAsPKvfD7o4NZLQqBJBguh6YUQJOh4%2BFCKZ7SgMitBQ6WDk6q9%2FvdBXDF79Vmq0ciZcHOxSSOa5ycvwokuwhaAs5vRSVW6c7Y4GdKHezmlOzrzSMAxGmyFaIfOg64raGB%2FJOVDkXT25MoL07NKCNOibN9yxJvTaTpT8M5VyywDc7slm9jgt1BYiCEnTHnitk99v24J0%2FvgF24%2FxUjwIZokBGKT0qTvRhBFMS64aJE%2Bh0QMOvPp8AGOqUBZ23Vd2HBqVUyTrVUgbSPwZUP5FX0QxgIBagjgZPQ%2BYMYmi9ymC4174Xgvz3p%2Fu6UG%2FvDtLhCL%2B7Ri9K2Ls1XHxfhz3m7osgPLKo27iVbNrA9luwAiwiwd4L9fxdENygdUq4vHvxPBRDPnhXHWOtbAC2VWyAnA4KhQUbrO70Llp8gqksWjf2pR6SNZsJazcks9neWTEaaNCDYT6LGBNgoPGqwNa9A&X-Amz-Signature=7339c4d7f92198b333071d9d3eeef567f90dfc786e9025ff0c1bdc9680f5d6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJAZWGQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDhRC6%2Fd%2FQX8jJdXMtRVA5Vzmx2o8%2F67HxUqtq0PZpzOgIgbrp93bkXcEnCw%2BxLP3yLbFGqSo1Zi%2F%2FvmV9TWQDRICYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJuN5HA81AhfDNcWAyrcA86IQVr3BtEImnRFC2MnK4jyp6EQ5Afgjbes24bdxAzjgeRDVqxca%2Bt7tillYM%2BbwX9t4NHxcfXyTtPJOYn03zjHqsxmTfmZTbEa5csgmq8n8WXlosp%2BdKDSfyWyVEEaMksyicZmZt3twzUfHsD9kHHNyvP%2FGZkTfXXj9etDausU1RUYxryKgBgye2w%2FfrR%2B%2BuNdMYGGiTgY2cHhMcBzHu5BiUAPU4fOQG8p2CUEbW2Y6pnfDm9nZloYhmAOi8Qmiico1GhVlyAtoONPtX4hVXtgGSR5UxcgHNIlH01y69C0pOpgUTcmScNNUpkPuzS1OKJtgL0Xd0S0%2FAxxWYYtJENFYWE0%2FreCYjiEoM0K0mA9h9ElkdnFRc1TSteVuI9TduM6ZyjKd57bW63D8FXgWlB3d%2FGfkfvGc%2FF%2F%2FGuKWzApnjWY1t2Mx0SGxjw4qkHPLpZaj3CNhZOdV8KesBNTOvcd12yCWJb2u9tagtVl6VDRnV3bYf%2B8jyrjk8IfFjyZjP2Qh%2BtujgPM8fkrU%2BW6EYRbB8Ghq438gKB61OtZUB8oDN1QupddB4Kzumr%2BuTILM4AdvmYF8MMEUR8qp5plbAygecvr373pqD%2BE8zhv%2B5LLtfpHWlqHr0bl1hevML7Op8AGOqUB2CkAf2SUeHx1jx4JxDW2kjfD97ZAi3Jf%2FIYBml21n4SJa%2FdmRq9aJGSlfbs%2BN2kxyOXVQElHM4wEM3RwiwVAA%2FT3PnEcwKP46L7slowAjirTy35ZEri6cnk4849H7k1EXPbyXBTS2CqB6XkACNm6pedHPB%2FXsWF0WA5seWFQBAkCllEdiQQtL1DW36mMNOKi2vZ%2BCcyyjKwysetJ%2B89CDomHj%2F79&X-Amz-Signature=93d6cda15f28907f50cd3a1c0108d9dc764f26f78ff179f199083a9213939282&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
