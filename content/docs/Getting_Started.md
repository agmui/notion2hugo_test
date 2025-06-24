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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CM3IRTZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCCklEVO4rB7j1evQj2XIJ%2Fcus8jzUW2p%2FX3KBD3mbPzQIge9asPEkaRruQyEde67AnFwvPjjVRVmT46Y7BTxhtY7gq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFTJn9XPLrBWc%2BUHGircA%2BiFdI38PZ9%2FZfgx4JkFtqOv7pdJvaszaa%2F40te5hdxOgyFzQt0SHN12jrDq2ofnagesPuaZ2%2BeZzcLT2kbXzfjeGsPnX4LG%2FXSK6yNO4VAXIo1TgXybiQHJXy3XsuLQ7FG7nfSIgHtlYGw7khXVjTgkHuWNOo%2F4iz0d2TItfFnheFea8b7lTuSjzqxWT4VuUfIolE%2FG%2Fhu0DotP299sjK%2F9D%2FCwTGN19dO55hY20t0SchX7FL0TqnvSVm3Q0bWIs7iq0lDYlG3LS1Hso2UI0ewMGjkn%2FPh%2BuqliMW%2FAzDgyLsDbDHEMOQLTz9Nhs7xrnw%2BQ3a4MsCYOPnrMjImMX5bNQrrsGUdEd3e%2F2dGzGmCw93%2B44Rr9FgYzOSCry8bwT3yhetX5GY0ARuACITtSl5FjyPgd0XvllB79S%2F0Sqj8Amn49%2FjKWu2RxLDcR8LB4b%2FBJ7N%2BHZqJGK0N92ea5YcUV2dS4%2BZ9%2FFTnIPIp2zeEKmc6EyOkt7F8Wn7huZ6npeROfRYUEDEs8%2Fxeus6YqDL7muBWeSdHDSuafU3oLmXh3mmFSZ8uMxrtjTW3prSpH%2BObGJD4vGhctYJUZ6xbKU6KJ4sWv3c%2FHXqL4M8%2BnQYiVdWyRTKVoDXUgJzFlMKe%2B68IGOqUBZ%2BSYU48RgyG0aL3RfMP%2Fk9%2FMmhpGpj6zSGhLeZSoGzwyrUKL74di4aqNo86Iv2M6vTSyu5xBiT%2FKHiksJXaw9XQXLsQc1Sdh6z%2BU%2Bzdtavj8Oq55cwpnlZyHt0OR%2Fls55VzOvGDn8Yl6noNAyxcRsIj9ZKdcTKGjcrH3DRxUu6IhgwQAp%2BvAP02ySnjujU5Q%2FiSdbVjWJz61dHBXqYfgSQnzsf2s&X-Amz-Signature=517a94e3d3044996a94337a5ede544b556295d547de75a7160932f581eb14554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CM3IRTZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCCklEVO4rB7j1evQj2XIJ%2Fcus8jzUW2p%2FX3KBD3mbPzQIge9asPEkaRruQyEde67AnFwvPjjVRVmT46Y7BTxhtY7gq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFTJn9XPLrBWc%2BUHGircA%2BiFdI38PZ9%2FZfgx4JkFtqOv7pdJvaszaa%2F40te5hdxOgyFzQt0SHN12jrDq2ofnagesPuaZ2%2BeZzcLT2kbXzfjeGsPnX4LG%2FXSK6yNO4VAXIo1TgXybiQHJXy3XsuLQ7FG7nfSIgHtlYGw7khXVjTgkHuWNOo%2F4iz0d2TItfFnheFea8b7lTuSjzqxWT4VuUfIolE%2FG%2Fhu0DotP299sjK%2F9D%2FCwTGN19dO55hY20t0SchX7FL0TqnvSVm3Q0bWIs7iq0lDYlG3LS1Hso2UI0ewMGjkn%2FPh%2BuqliMW%2FAzDgyLsDbDHEMOQLTz9Nhs7xrnw%2BQ3a4MsCYOPnrMjImMX5bNQrrsGUdEd3e%2F2dGzGmCw93%2B44Rr9FgYzOSCry8bwT3yhetX5GY0ARuACITtSl5FjyPgd0XvllB79S%2F0Sqj8Amn49%2FjKWu2RxLDcR8LB4b%2FBJ7N%2BHZqJGK0N92ea5YcUV2dS4%2BZ9%2FFTnIPIp2zeEKmc6EyOkt7F8Wn7huZ6npeROfRYUEDEs8%2Fxeus6YqDL7muBWeSdHDSuafU3oLmXh3mmFSZ8uMxrtjTW3prSpH%2BObGJD4vGhctYJUZ6xbKU6KJ4sWv3c%2FHXqL4M8%2BnQYiVdWyRTKVoDXUgJzFlMKe%2B68IGOqUBZ%2BSYU48RgyG0aL3RfMP%2Fk9%2FMmhpGpj6zSGhLeZSoGzwyrUKL74di4aqNo86Iv2M6vTSyu5xBiT%2FKHiksJXaw9XQXLsQc1Sdh6z%2BU%2Bzdtavj8Oq55cwpnlZyHt0OR%2Fls55VzOvGDn8Yl6noNAyxcRsIj9ZKdcTKGjcrH3DRxUu6IhgwQAp%2BvAP02ySnjujU5Q%2FiSdbVjWJz61dHBXqYfgSQnzsf2s&X-Amz-Signature=8ccbd5c4e80f8f5d31ce0e842318b7b1a040d16fb2e084814d16a0d0766cdcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CM3IRTZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCCklEVO4rB7j1evQj2XIJ%2Fcus8jzUW2p%2FX3KBD3mbPzQIge9asPEkaRruQyEde67AnFwvPjjVRVmT46Y7BTxhtY7gq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFTJn9XPLrBWc%2BUHGircA%2BiFdI38PZ9%2FZfgx4JkFtqOv7pdJvaszaa%2F40te5hdxOgyFzQt0SHN12jrDq2ofnagesPuaZ2%2BeZzcLT2kbXzfjeGsPnX4LG%2FXSK6yNO4VAXIo1TgXybiQHJXy3XsuLQ7FG7nfSIgHtlYGw7khXVjTgkHuWNOo%2F4iz0d2TItfFnheFea8b7lTuSjzqxWT4VuUfIolE%2FG%2Fhu0DotP299sjK%2F9D%2FCwTGN19dO55hY20t0SchX7FL0TqnvSVm3Q0bWIs7iq0lDYlG3LS1Hso2UI0ewMGjkn%2FPh%2BuqliMW%2FAzDgyLsDbDHEMOQLTz9Nhs7xrnw%2BQ3a4MsCYOPnrMjImMX5bNQrrsGUdEd3e%2F2dGzGmCw93%2B44Rr9FgYzOSCry8bwT3yhetX5GY0ARuACITtSl5FjyPgd0XvllB79S%2F0Sqj8Amn49%2FjKWu2RxLDcR8LB4b%2FBJ7N%2BHZqJGK0N92ea5YcUV2dS4%2BZ9%2FFTnIPIp2zeEKmc6EyOkt7F8Wn7huZ6npeROfRYUEDEs8%2Fxeus6YqDL7muBWeSdHDSuafU3oLmXh3mmFSZ8uMxrtjTW3prSpH%2BObGJD4vGhctYJUZ6xbKU6KJ4sWv3c%2FHXqL4M8%2BnQYiVdWyRTKVoDXUgJzFlMKe%2B68IGOqUBZ%2BSYU48RgyG0aL3RfMP%2Fk9%2FMmhpGpj6zSGhLeZSoGzwyrUKL74di4aqNo86Iv2M6vTSyu5xBiT%2FKHiksJXaw9XQXLsQc1Sdh6z%2BU%2Bzdtavj8Oq55cwpnlZyHt0OR%2Fls55VzOvGDn8Yl6noNAyxcRsIj9ZKdcTKGjcrH3DRxUu6IhgwQAp%2BvAP02ySnjujU5Q%2FiSdbVjWJz61dHBXqYfgSQnzsf2s&X-Amz-Signature=406a73506cbf8307a4fbe4950e3bfc28c8b8c4eccdb6ff43bd8a1ab685d37aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YJWNHA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIBo5Z8LEzKr4aZjZIz%2FJkJGe1UZfArZ1e9RlZSDjP1ysAiEA%2FunwG%2BXAlC31%2FyCYex8%2FN2igknaXHMUdk2Ji4zOyjykq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIsIg6BuPltdE456jSrcA09QxHoXljytSXLxTCcU8T9TE4EPGeNZd7Qm9OGpvc7bW475pnezydGpBds%2FL%2FunstR1itrT3zzFcWD%2FjvyLM14Nrah3OIm1JAR5yJUReEQdGekkeD0aKijbEseLDBke92uMguRniCilEJunh9HzGG3ch29TugoTt3FaNcC1CZieHmyBFQxcqKc4zdaLHfyHChQZlKUJkToQKWdW7gLnxKHxFqSLnt%2FvrHESghnh2r7QzwNqrkqh%2FIiSSsKT%2BeuV6x4ktx0dy8AGOKQbNd2z9Xf8NqXsVwbeS2yuV4awnTNC%2FMIG7iXxaFCxGkemFwmL4ugQHhSYADxWRytJF1VseUgmcp%2B8lsH6OwEHtTHCvSM13vMKgONBWPeU55ff9Lf5UBxAvcXLqfd3sqtjJtmMM6TTuk2VWXCcLiSBsOKho6xFyP9hnLw5a33bXKtV4GCnvUX44YJbpAMkuobSnp1OfNPFMXtlxW5GKdSz2I95i0ZcbkjHaHXVfseEXF7DKF0Lsu3XiwGKXexJjTVSSuL8uBMxm3Zb7JwBTiafChK8DsIQqLkGoTZE069zIQfdEAriYnNZfWgbEB7NbyThkrmiNGOZsOz1W6b7d%2F%2Fd7M0Wjw0SHjvh%2BuYOeO68IGvSMM%2B968IGOqUBFlhI6BaU%2Bzlmm0SeLVN9Mr902XhqTnXYt%2BrlUIseGBY4aKh0FqzJ5yGtD5XQ6f4kOvUB38ExMXsslkF9SEMoEe2oPOLGKA0peZOAZisXoZIBHprIljuxFluydwc0jsyh%2B4b04DBIsV6gK3Xf7KsDR%2BNKmrOocCdONr5rLS3ZFDHOBzqmAH%2BkndFzh4ihQPwvx31tEZai26iqjZQEP6LY4Ts0SsLq&X-Amz-Signature=e18476de14e5b6056e75a974e5caf2088c3f30dc0c8233798ff70126586314dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YITFVO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDj7HKyOPL0KLVwFJGZaeCNjXHGrHcr%2FiRHos7veBvouAiAsJkFP4SqqhcK86gxp7OpXSD4ailHWhgdv4NR4U%2FqOyir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMiLT84L915bdBGIU0KtwD1R8sy2%2Foe%2FjpGEi1mgkfYMzLu2%2FMT4pllMMoHOXNb7QqalxoSNjL0wpk27%2FGD53OqHwJvu9J65LVFr4YVEo5cSAi4UyYzz6XiyMgQ2orPq2%2BCbWay3zDZFYpC1Y02ASTo61zIgBgXs45dcPQK4rUH%2BiUm6bT2l98MSzd76Rkh5ajMuLJDrj7remclC%2FC9H57rwDX4SlKNOEQMgXMDFu3wM6vLlrBfNkU2Pxyf4G9RAOgT%2BDEZgxOZ6gbKiKCyURdV3cbSXuYWcIhL6EIhfTH2KzA7y3mWoPbvd4YwSal%2Bj946fvPErSApxTIvNtEjAD2XnfSERwOXSOM6LsBWeTLHC%2BIPaJdyGYitGJzLA65De0KOa9dD74sAMp4BhOf1p8bGQ6aJJHPop8S0blab5Hq%2BBh4SIYRZDPc6eV%2FIw3LXxnOb37K9%2Fau3vQUL0YPtQTLB6PTS4z%2BsLv%2BB5DSYU7PFrITJdgI5FqFVxUDgPeNpSSwiVlAvwrwi8uMkBkrPK8Ab%2FUbfx7bOzBpZtjoyVVeBxgPkHg0JeUaTeZXDsHdnVjnfCIbyeqEibgdZ%2Ff136qlcnhfGI16DHtQyIJNHUA5qxK1PAYxV4Y9xggXSNA7DCMU3hiYbtbqWh60Tpwwz73rwgY6pgFmZwSxdyXzLFR9mEmDDns1RfmEzIrxCq0tWylDMVrp8x4kZI4aGQEOAs0P5gYXQOeO0K%2B%2BmdX1Ndf18%2FWOHKZAeeJJ58DCRcEUbGMNkNHPn24HNqDKXod%2FsYAXNMG3Ti0DtRRG8ErKi%2F%2FhpoknQW7WbKuBrd77Jpyiu4%2Bw1wHqTMJyZ0XE9Ty4UyqgbqKeeaPKlHlknvsZDtiVN9TSeiiNynh632Oy&X-Amz-Signature=c2dc0c8eb7eedbafa3117985b82518818238068daf2b9f29a7208ed3d9af930d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CM3IRTZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCCklEVO4rB7j1evQj2XIJ%2Fcus8jzUW2p%2FX3KBD3mbPzQIge9asPEkaRruQyEde67AnFwvPjjVRVmT46Y7BTxhtY7gq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFTJn9XPLrBWc%2BUHGircA%2BiFdI38PZ9%2FZfgx4JkFtqOv7pdJvaszaa%2F40te5hdxOgyFzQt0SHN12jrDq2ofnagesPuaZ2%2BeZzcLT2kbXzfjeGsPnX4LG%2FXSK6yNO4VAXIo1TgXybiQHJXy3XsuLQ7FG7nfSIgHtlYGw7khXVjTgkHuWNOo%2F4iz0d2TItfFnheFea8b7lTuSjzqxWT4VuUfIolE%2FG%2Fhu0DotP299sjK%2F9D%2FCwTGN19dO55hY20t0SchX7FL0TqnvSVm3Q0bWIs7iq0lDYlG3LS1Hso2UI0ewMGjkn%2FPh%2BuqliMW%2FAzDgyLsDbDHEMOQLTz9Nhs7xrnw%2BQ3a4MsCYOPnrMjImMX5bNQrrsGUdEd3e%2F2dGzGmCw93%2B44Rr9FgYzOSCry8bwT3yhetX5GY0ARuACITtSl5FjyPgd0XvllB79S%2F0Sqj8Amn49%2FjKWu2RxLDcR8LB4b%2FBJ7N%2BHZqJGK0N92ea5YcUV2dS4%2BZ9%2FFTnIPIp2zeEKmc6EyOkt7F8Wn7huZ6npeROfRYUEDEs8%2Fxeus6YqDL7muBWeSdHDSuafU3oLmXh3mmFSZ8uMxrtjTW3prSpH%2BObGJD4vGhctYJUZ6xbKU6KJ4sWv3c%2FHXqL4M8%2BnQYiVdWyRTKVoDXUgJzFlMKe%2B68IGOqUBZ%2BSYU48RgyG0aL3RfMP%2Fk9%2FMmhpGpj6zSGhLeZSoGzwyrUKL74di4aqNo86Iv2M6vTSyu5xBiT%2FKHiksJXaw9XQXLsQc1Sdh6z%2BU%2Bzdtavj8Oq55cwpnlZyHt0OR%2Fls55VzOvGDn8Yl6noNAyxcRsIj9ZKdcTKGjcrH3DRxUu6IhgwQAp%2BvAP02ySnjujU5Q%2FiSdbVjWJz61dHBXqYfgSQnzsf2s&X-Amz-Signature=46b9acba75ee9be848b2f572409808ebc463c183453c05276f76a9d31a022164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
