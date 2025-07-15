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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVKGDUH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD0WfXyqDhq4GPNN8zZRlTlJb1SGI7cJwG8DVFNiRzakgIhAM7DDYE9Xf%2FfALgVHfiEem4KTWHDhR2jpRSiULIYgpm1Kv8DCEQQABoMNjM3NDIzMTgzODA1IgzbrCLY7SQVHiEHbV8q3APB%2BD1PPpwseNeXgFq%2Bt%2B9UXWgHXo35GtXG8Af0hTsHqcqM%2B0WsIwJUcKWyOHq4N8%2FxQoO1DN2aYm9YuQPrPzVEfrguzAt4mabO14dqXrIRoVzPp1WVe%2BGKJIvReMSdU8pYimBtSkJ1262Vwmgyu7cMSCMwRhkzVSHqgI58e843%2BEKQrbxw8081uob1yIo0AWYCRat86637WiSaNm2vnzgHtWd9hwAwVlfohapPa3AB19iMxAVOEIE7QWGRiQAu%2FTaVGN5%2FDBCkcAG%2FMZMCaLZ5FO96oPV5%2FAvE51t2cFsEZNwwoch6XvdU3Ng8b6YsImRSbiUPxEPqg%2Bom6q5VKwMfnCt4%2FlnXyX9DjDFVEl8i4y3Gs2QA72mWUTmHz4HCd8gfkeI6mrKpx7yMroN%2BIC%2FNOdzdsXDyVCRjXki%2FnoLplFKYyjauHQ6rOSKzckmpq%2BgZmr0pHbp%2FuVXD4RbFhvnC6zq9XQGiP1dQ7yCSFoiRDBPoOzXry6yr%2BTjCTE%2BoxgTTvqQwNmag6NT1Nrajt3gxvK%2BYxv3azaDJoOX0VBOHKBrBp1nG81LiwAOXbp9o769VVi81fPRklFVL0nPE3yv1zvv4H94P6OM1CoVXtdaB8PxrqGQNy09PblAIQDDf2djDBjqkAY9jtZ0AeVCwXZhTFzzMcAVNKfdiXHbuNj2QR%2BixCqo%2FA%2BIhhRRS5tXGwx%2F%2F%2F42aLXjEMVrg8F5eP%2BJ%2FQdZXP5tm6uzh%2Fem0EoskOA%2BGfqLhSZzhVH6iJfu6W9736fV9K1kCgoy1U6O%2B6MxRotpb8ZTcULMUIK51eFID8rZPLKndv%2BgqqRlsOXBNF4YhTXGtKjBd7%2BIVzAXBZNOsrhFCSx1lNBOv&X-Amz-Signature=47c1adc7cf1812d4560efc8e97b068511357db0f05152bda0f511839b84424b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVKGDUH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD0WfXyqDhq4GPNN8zZRlTlJb1SGI7cJwG8DVFNiRzakgIhAM7DDYE9Xf%2FfALgVHfiEem4KTWHDhR2jpRSiULIYgpm1Kv8DCEQQABoMNjM3NDIzMTgzODA1IgzbrCLY7SQVHiEHbV8q3APB%2BD1PPpwseNeXgFq%2Bt%2B9UXWgHXo35GtXG8Af0hTsHqcqM%2B0WsIwJUcKWyOHq4N8%2FxQoO1DN2aYm9YuQPrPzVEfrguzAt4mabO14dqXrIRoVzPp1WVe%2BGKJIvReMSdU8pYimBtSkJ1262Vwmgyu7cMSCMwRhkzVSHqgI58e843%2BEKQrbxw8081uob1yIo0AWYCRat86637WiSaNm2vnzgHtWd9hwAwVlfohapPa3AB19iMxAVOEIE7QWGRiQAu%2FTaVGN5%2FDBCkcAG%2FMZMCaLZ5FO96oPV5%2FAvE51t2cFsEZNwwoch6XvdU3Ng8b6YsImRSbiUPxEPqg%2Bom6q5VKwMfnCt4%2FlnXyX9DjDFVEl8i4y3Gs2QA72mWUTmHz4HCd8gfkeI6mrKpx7yMroN%2BIC%2FNOdzdsXDyVCRjXki%2FnoLplFKYyjauHQ6rOSKzckmpq%2BgZmr0pHbp%2FuVXD4RbFhvnC6zq9XQGiP1dQ7yCSFoiRDBPoOzXry6yr%2BTjCTE%2BoxgTTvqQwNmag6NT1Nrajt3gxvK%2BYxv3azaDJoOX0VBOHKBrBp1nG81LiwAOXbp9o769VVi81fPRklFVL0nPE3yv1zvv4H94P6OM1CoVXtdaB8PxrqGQNy09PblAIQDDf2djDBjqkAY9jtZ0AeVCwXZhTFzzMcAVNKfdiXHbuNj2QR%2BixCqo%2FA%2BIhhRRS5tXGwx%2F%2F%2F42aLXjEMVrg8F5eP%2BJ%2FQdZXP5tm6uzh%2Fem0EoskOA%2BGfqLhSZzhVH6iJfu6W9736fV9K1kCgoy1U6O%2B6MxRotpb8ZTcULMUIK51eFID8rZPLKndv%2BgqqRlsOXBNF4YhTXGtKjBd7%2BIVzAXBZNOsrhFCSx1lNBOv&X-Amz-Signature=635a6a8348cb5f5e589ba860739823940d08c9e804a853a73e05dd9fd07a8c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVKGDUH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD0WfXyqDhq4GPNN8zZRlTlJb1SGI7cJwG8DVFNiRzakgIhAM7DDYE9Xf%2FfALgVHfiEem4KTWHDhR2jpRSiULIYgpm1Kv8DCEQQABoMNjM3NDIzMTgzODA1IgzbrCLY7SQVHiEHbV8q3APB%2BD1PPpwseNeXgFq%2Bt%2B9UXWgHXo35GtXG8Af0hTsHqcqM%2B0WsIwJUcKWyOHq4N8%2FxQoO1DN2aYm9YuQPrPzVEfrguzAt4mabO14dqXrIRoVzPp1WVe%2BGKJIvReMSdU8pYimBtSkJ1262Vwmgyu7cMSCMwRhkzVSHqgI58e843%2BEKQrbxw8081uob1yIo0AWYCRat86637WiSaNm2vnzgHtWd9hwAwVlfohapPa3AB19iMxAVOEIE7QWGRiQAu%2FTaVGN5%2FDBCkcAG%2FMZMCaLZ5FO96oPV5%2FAvE51t2cFsEZNwwoch6XvdU3Ng8b6YsImRSbiUPxEPqg%2Bom6q5VKwMfnCt4%2FlnXyX9DjDFVEl8i4y3Gs2QA72mWUTmHz4HCd8gfkeI6mrKpx7yMroN%2BIC%2FNOdzdsXDyVCRjXki%2FnoLplFKYyjauHQ6rOSKzckmpq%2BgZmr0pHbp%2FuVXD4RbFhvnC6zq9XQGiP1dQ7yCSFoiRDBPoOzXry6yr%2BTjCTE%2BoxgTTvqQwNmag6NT1Nrajt3gxvK%2BYxv3azaDJoOX0VBOHKBrBp1nG81LiwAOXbp9o769VVi81fPRklFVL0nPE3yv1zvv4H94P6OM1CoVXtdaB8PxrqGQNy09PblAIQDDf2djDBjqkAY9jtZ0AeVCwXZhTFzzMcAVNKfdiXHbuNj2QR%2BixCqo%2FA%2BIhhRRS5tXGwx%2F%2F%2F42aLXjEMVrg8F5eP%2BJ%2FQdZXP5tm6uzh%2Fem0EoskOA%2BGfqLhSZzhVH6iJfu6W9736fV9K1kCgoy1U6O%2B6MxRotpb8ZTcULMUIK51eFID8rZPLKndv%2BgqqRlsOXBNF4YhTXGtKjBd7%2BIVzAXBZNOsrhFCSx1lNBOv&X-Amz-Signature=018184618a32ab422832777cd14dc45aa34f865dbbb0949846b2951f3f7e4e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YHBSV3V%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD9%2FVb2PZC9CRF1ytj69bNSdvuVi0fvNgF2Q3IQPjTNAQIgSqWsBbKB%2BvK6x9lMG0QBqBothyjVcMSn%2BxOj7GTMEB0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIYklmm0Epf5I7VExSrcA2QFiT%2Bdmg%2FeMtvwSSCxlkWTZHmPVC4DTVEPyLV3TNIS%2BFEI59%2FuCh6RqIipySlSwSmwwZ9KDy2egTU1twgop4SE8qn8D73eQixBxpY22lP9f8IOkVYmg8ZkIofGA0BjQPwwT0BxQumnAY4TmR%2FIEUYWQCOI%2FoJZBhJuuY%2Fl%2FTWKyHXfWZYJUThMOtNopTsNe6gBlbxi%2FXBMe35XRQpnuZQlWb4QGWeRrOzQuMRJFyKXHDgZJsYMKIZUgKG2UXaj8CP4xpHQH%2BPM5NaCnFZBDX%2BpIyQpr0A35NhgNzeVmhrNTq8%2Fn%2FK%2BmEBskYlK0k%2BRCDHV376FZmgjpKh74FRgnHEZ3IOs5KpF9kSLqVSh6TTHF7CfgzTnlj%2BNMXXszfh59NGyUhohVyj6wmpdLN%2Fh4zMLt%2F6eaqBH5jdsrlcFVanvWNbyrCqLVaY83eWRY89nGnTYKytXgB4yN6wEDHba1f8D3gz8yXf5tSbfbrQ3IZmM1WwxuWsR%2FgfUWLljlMRHDJqHrwIs1zKJLM2wocUtHCNUya9EpVzqg0bHsGCKtlL31E6JFjPg1YQRqBzjEvMnPGttBQ%2B%2Bri%2B5k%2FnsDhwC3tZaZ1y1mRk8zElYTUtJwEMba73Q0VFS15lyW0MPMLXZ2MMGOqUBsoU%2FpaOIv2KXzaxvIbH5nh590jPXZjSyS%2FmBAgg4wShi4JYjTS%2F8v4l%2FQHtbjR2pL1UjKBGkGrBUIFQ5GX7Wq0mmiM9iBSTv4o6zLRG9KajoYRIFIRfLyHb0kaIMsYfryTl2i%2FGSWK9UGoOQtz4qjSJwDPD%2BAx7NQBunvhZYTMXHpuiDac04DSThgI2HjUpRvvwBsphKFulv1JfXIhmKX3Dol6k%2F&X-Amz-Signature=8608e18e78c0023d54b09b95c134e6805547435d4d5fc0097ac2110bab9b44cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBDFNJX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHqiS8JV3fdyEH0kJzWKlFySv%2FTpNt9mzW4cPfJsBAVNAiEA4iAz%2F76Sg%2BXFbGyq1RjVGr2B2yHujezqlPFd%2Fcp1Scwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCecfHF%2BzW0SuIqNQCrcA%2Bgz5JhhSJ62T5hAKTVYCxHp3iRQfWYbZkv4AqYv6do1YO3c53IQKCdhjrkoIqIQC4%2Bvx84s7DkQF04GKhcEBlwE9ja0iWEpEdgWwuvKmPip4MdNWmNZM2L2408WiWcFoncCGZEa6adEvpCt%2BDdV8TXIp1tie8NIwEnsn6Mp36dYw%2F9W49dTdTMesI20gC19g6%2BcBOMGYlxU5S%2FV%2FfEQ004f%2F%2BZ%2BV4Hck%2BDA7vR37w30t6zD0URKnQmN%2B50ACk9S%2FC7K0820rT6DIQgDAqJ3eGswiJspcMYIU6qQId9wmJ2PGrWNu7WQniUaTCgIbSARpKZmtFtfps%2F3aXoGDbtaBUvze9BhMGM14JGnVAGJHFB3BkuhpSVaC1c%2BI65bgz3C98qnzTpGdiZGXILtO709GxUuz2avJvcC%2FmpZt6oh7MPJ%2B9NQlgbiY%2BH0XEn2PKWHWhCmpIjQRuj1UKq6WxThQfdA5oTtajFmDwiXsFwXxq66wq7qzUarkSU4NknlhUV8W%2BJQViqz5V72%2BXY%2F68K0kQF1ciN5arMrydiTi%2BcQJrHwnnHzApIKboFaGO9NOyJsbjNgK%2B3hZ7LQRYuXGstSX2i86HUtfkZ607xToRzes6eZYnqR9hq3VNtbY6gQMMjZ2MMGOqUB%2BUK14AJgsxLuJL%2Fp2NEtJVoqFy4dxslSxpEL1vu0cq6icBSFBQsjaD9NcxTYVc%2FOs7SPXWYf9%2FSZbH1K8MendM2iGHWgny%2FgZL7dPcW6p1mHcREUt9Cz343YTWyFLhz0ub2R4U3RJU1TRprIrD%2BoRrL%2BaT3OqC5qKr8Gwysh8j%2FaiMyhtCfU0J9F5JT4fennRAkOG2TdFPPTO5%2FN4N3pGHgtNOAP&X-Amz-Signature=4dbe343f158401ecb9d0ea597cb1b409f7a48f62b2bb4f0f77bd6d256ca0641f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVKGDUH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD0WfXyqDhq4GPNN8zZRlTlJb1SGI7cJwG8DVFNiRzakgIhAM7DDYE9Xf%2FfALgVHfiEem4KTWHDhR2jpRSiULIYgpm1Kv8DCEQQABoMNjM3NDIzMTgzODA1IgzbrCLY7SQVHiEHbV8q3APB%2BD1PPpwseNeXgFq%2Bt%2B9UXWgHXo35GtXG8Af0hTsHqcqM%2B0WsIwJUcKWyOHq4N8%2FxQoO1DN2aYm9YuQPrPzVEfrguzAt4mabO14dqXrIRoVzPp1WVe%2BGKJIvReMSdU8pYimBtSkJ1262Vwmgyu7cMSCMwRhkzVSHqgI58e843%2BEKQrbxw8081uob1yIo0AWYCRat86637WiSaNm2vnzgHtWd9hwAwVlfohapPa3AB19iMxAVOEIE7QWGRiQAu%2FTaVGN5%2FDBCkcAG%2FMZMCaLZ5FO96oPV5%2FAvE51t2cFsEZNwwoch6XvdU3Ng8b6YsImRSbiUPxEPqg%2Bom6q5VKwMfnCt4%2FlnXyX9DjDFVEl8i4y3Gs2QA72mWUTmHz4HCd8gfkeI6mrKpx7yMroN%2BIC%2FNOdzdsXDyVCRjXki%2FnoLplFKYyjauHQ6rOSKzckmpq%2BgZmr0pHbp%2FuVXD4RbFhvnC6zq9XQGiP1dQ7yCSFoiRDBPoOzXry6yr%2BTjCTE%2BoxgTTvqQwNmag6NT1Nrajt3gxvK%2BYxv3azaDJoOX0VBOHKBrBp1nG81LiwAOXbp9o769VVi81fPRklFVL0nPE3yv1zvv4H94P6OM1CoVXtdaB8PxrqGQNy09PblAIQDDf2djDBjqkAY9jtZ0AeVCwXZhTFzzMcAVNKfdiXHbuNj2QR%2BixCqo%2FA%2BIhhRRS5tXGwx%2F%2F%2F42aLXjEMVrg8F5eP%2BJ%2FQdZXP5tm6uzh%2Fem0EoskOA%2BGfqLhSZzhVH6iJfu6W9736fV9K1kCgoy1U6O%2B6MxRotpb8ZTcULMUIK51eFID8rZPLKndv%2BgqqRlsOXBNF4YhTXGtKjBd7%2BIVzAXBZNOsrhFCSx1lNBOv&X-Amz-Signature=3e93620da0805eeb39a7fd3844bf3e36e195184eeb228936cb8054bf7d46726e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
