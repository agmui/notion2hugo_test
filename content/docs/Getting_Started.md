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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHGE5DAB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC5ZSjtvkxj3IOzqeNF8uGTGVMt7upzC467QuLyUWCMuQIhAMEg8XAhbIlrF5qWBFcWXXKEYj0213ravYK2xHMxmA8rKv8DCFMQABoMNjM3NDIzMTgzODA1IgzXXoa2oyxgGNBErsQq3AMozcJH25r6KoZSlOi6u%2FdJzttiW4CbQjhlB%2FQxqHvFz9efEOYfyb9pp4qGu9YJoISFcwC1GlCje6CVUe1QUNGqUkqtEuoir47rPREqEM7pJhH7r5UhoOWhPlTxCrOed2KYOydUfDtqOr2iP0OS4BWYSfbW2PJrd6ipe0voZc%2FaDa2NV38sxxQWTALjZDyRVfvPLy%2FO8J%2BZkgYtuPgPgB%2FUvxCoCykBYnhbJCzf0LvOAcL5%2BN6ih7aT8Hax13wM8OC9UxSElWT%2FAJVRcCmbp3aZA66a%2FnYlsUvvBMAGhUzLKKH6x5vMGP41iFVXQX6sV0DWprX6eEpDGwWzPKDEv88%2F27LYOo0HhQeWonsO1YMbettRHKApa74TfdEz2EhAM8gA2CZ2d34rSikdNONse0M95tSWixZ4ozVMPztPNBFdwE28yzioFD86%2FH58hNaIX4PiciZMNetBDpaeUUhEpOT%2B9bOim23jkp%2FUveUz6HQr1momhlECtqGDiWh6WUgDQ%2FQo%2Bb9gK4eRqE%2BY9NVAgrmRKG5xSRLDFl5RRLBlu0dnkZSsLt7w1hZMvm3Um1ny53K3gC9y94BcaUoFmq0VXa5CGLCHldUTg89ojoQon%2BguzdLWHln9IdIL0MVpHjCU3%2FLCBjqkATuxk4ShtqMoPnZoiuOKLfZrA9FWRbH%2BmqbVNHhPP9OoCYywd1Mi8Xg7ajpV2KRxgumXAfNO4dLzXFo3%2BJSwBjh2h8nJcmoLBqUf5NPBcs%2FTDjaPS4rJYXM%2F9snDk7Su%2B4JeSZ0ttoY9iobX8fsV9WnpS4v849xoeBx24nj63VQ2D1WMx5ULSIc2ZADWvFjsYbNdONvczaRo0TFYg08i2V1WZLYf&X-Amz-Signature=d1931d5b98b83628a3b402e4fb958798f9a973f5ede981eb36012df0df29d2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHGE5DAB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC5ZSjtvkxj3IOzqeNF8uGTGVMt7upzC467QuLyUWCMuQIhAMEg8XAhbIlrF5qWBFcWXXKEYj0213ravYK2xHMxmA8rKv8DCFMQABoMNjM3NDIzMTgzODA1IgzXXoa2oyxgGNBErsQq3AMozcJH25r6KoZSlOi6u%2FdJzttiW4CbQjhlB%2FQxqHvFz9efEOYfyb9pp4qGu9YJoISFcwC1GlCje6CVUe1QUNGqUkqtEuoir47rPREqEM7pJhH7r5UhoOWhPlTxCrOed2KYOydUfDtqOr2iP0OS4BWYSfbW2PJrd6ipe0voZc%2FaDa2NV38sxxQWTALjZDyRVfvPLy%2FO8J%2BZkgYtuPgPgB%2FUvxCoCykBYnhbJCzf0LvOAcL5%2BN6ih7aT8Hax13wM8OC9UxSElWT%2FAJVRcCmbp3aZA66a%2FnYlsUvvBMAGhUzLKKH6x5vMGP41iFVXQX6sV0DWprX6eEpDGwWzPKDEv88%2F27LYOo0HhQeWonsO1YMbettRHKApa74TfdEz2EhAM8gA2CZ2d34rSikdNONse0M95tSWixZ4ozVMPztPNBFdwE28yzioFD86%2FH58hNaIX4PiciZMNetBDpaeUUhEpOT%2B9bOim23jkp%2FUveUz6HQr1momhlECtqGDiWh6WUgDQ%2FQo%2Bb9gK4eRqE%2BY9NVAgrmRKG5xSRLDFl5RRLBlu0dnkZSsLt7w1hZMvm3Um1ny53K3gC9y94BcaUoFmq0VXa5CGLCHldUTg89ojoQon%2BguzdLWHln9IdIL0MVpHjCU3%2FLCBjqkATuxk4ShtqMoPnZoiuOKLfZrA9FWRbH%2BmqbVNHhPP9OoCYywd1Mi8Xg7ajpV2KRxgumXAfNO4dLzXFo3%2BJSwBjh2h8nJcmoLBqUf5NPBcs%2FTDjaPS4rJYXM%2F9snDk7Su%2B4JeSZ0ttoY9iobX8fsV9WnpS4v849xoeBx24nj63VQ2D1WMx5ULSIc2ZADWvFjsYbNdONvczaRo0TFYg08i2V1WZLYf&X-Amz-Signature=074ced3155bf3ecb00d1e42301f500267db58d6907aae18ac4b5262be3087bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHGE5DAB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC5ZSjtvkxj3IOzqeNF8uGTGVMt7upzC467QuLyUWCMuQIhAMEg8XAhbIlrF5qWBFcWXXKEYj0213ravYK2xHMxmA8rKv8DCFMQABoMNjM3NDIzMTgzODA1IgzXXoa2oyxgGNBErsQq3AMozcJH25r6KoZSlOi6u%2FdJzttiW4CbQjhlB%2FQxqHvFz9efEOYfyb9pp4qGu9YJoISFcwC1GlCje6CVUe1QUNGqUkqtEuoir47rPREqEM7pJhH7r5UhoOWhPlTxCrOed2KYOydUfDtqOr2iP0OS4BWYSfbW2PJrd6ipe0voZc%2FaDa2NV38sxxQWTALjZDyRVfvPLy%2FO8J%2BZkgYtuPgPgB%2FUvxCoCykBYnhbJCzf0LvOAcL5%2BN6ih7aT8Hax13wM8OC9UxSElWT%2FAJVRcCmbp3aZA66a%2FnYlsUvvBMAGhUzLKKH6x5vMGP41iFVXQX6sV0DWprX6eEpDGwWzPKDEv88%2F27LYOo0HhQeWonsO1YMbettRHKApa74TfdEz2EhAM8gA2CZ2d34rSikdNONse0M95tSWixZ4ozVMPztPNBFdwE28yzioFD86%2FH58hNaIX4PiciZMNetBDpaeUUhEpOT%2B9bOim23jkp%2FUveUz6HQr1momhlECtqGDiWh6WUgDQ%2FQo%2Bb9gK4eRqE%2BY9NVAgrmRKG5xSRLDFl5RRLBlu0dnkZSsLt7w1hZMvm3Um1ny53K3gC9y94BcaUoFmq0VXa5CGLCHldUTg89ojoQon%2BguzdLWHln9IdIL0MVpHjCU3%2FLCBjqkATuxk4ShtqMoPnZoiuOKLfZrA9FWRbH%2BmqbVNHhPP9OoCYywd1Mi8Xg7ajpV2KRxgumXAfNO4dLzXFo3%2BJSwBjh2h8nJcmoLBqUf5NPBcs%2FTDjaPS4rJYXM%2F9snDk7Su%2B4JeSZ0ttoY9iobX8fsV9WnpS4v849xoeBx24nj63VQ2D1WMx5ULSIc2ZADWvFjsYbNdONvczaRo0TFYg08i2V1WZLYf&X-Amz-Signature=a87cb6c1c0ffc7819b295fa066c3b1a679e1aa652b0941a06c76cc8621d436ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA6VCWL6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBp5iHckoVEdYlbmSLb512%2F41qTyPYznWTDkRGihl98nAiEA%2BP5h%2F4sbErq2DsQGxdMAMARf%2FYRCWJS3r8U%2Bh01bm0cq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDYGG1lcRP2VbHaYlyrcA8NQ5pkT4YMm5rgVcFm1oaaE8mDxy0z7%2F6yGDGkhViLuNHxd2TKxjWs12XIMyCvIzHmIbzzkVhW5mF1UW2TgAiSj19%2FvgxO2S00h5c3eqRLxHWv5s1FCPHihmYPXZ6ZyUsce4eF2Rk7FclvJSQQyeJUFqyT0sC5VkS8dN%2FnpjOjhWcUfyRimSWUIqZ1p8CgRFYWGTBk%2BxYtW%2FTt23b%2BtCbcXtSq2NYEkuu8UpWBawEAaIvgDwZ1bDhLB9UYbfHnnc6RUcNuWUPmTvm%2FJjWuT7SDpZRB9URRF7hRBtol8Fidv3AdB%2Fb1UYNDYxapzvg93E8RO6f6ohGfpNmSAI9z891%2BJ2FkGzNVmVy84v%2FK1H7BuVh%2FJyCdXjKqwSD5UWrRiunzkBomWp36vHlPzP4mmkcyVItB0G2UJWM21aLcOvc3e%2BpvbBQ6g%2BOE1ohuR7VRCCpJFAZthxEMxMEVTZGjqinmpWrbBgOT6Ler1VIjVKzCCODqZWsnx4kc6K3yJPLpNKXniVY4KhRQzaOMLpYuVlpK85nYd%2BV52v42PXif2gVxexxh%2Bf3J%2BtY%2BqdPSsSrXmby9%2FuxEQDgfVU2Gktu0nZVmk3%2BgyQpFr1WeQL0pnMMH9rrsx%2BCa%2F3JusjlIWMKTe8sIGOqUBpE1MielmFcAamunG4p%2BVh%2F757N22pO1aDyP2eZERthaPJqBA2aRba61ctKyE5Ou%2BLHwt44JEAzclpWckMZk4G1%2F%2BGiCPkBt84%2BShBEdYjx%2BSAnourXXTInyBTGB8X0QbkmmgbXAuc%2FtnTkFk2QM%2FwG%2FStMMw2rvH%2B%2BJQmCLP9uhXOaeOc4OSyCUqFVAfHJ9kxrNygX5KLnv%2FXZGig1d8V%2FFK8Wly&X-Amz-Signature=5ec7a8ce71e544c5ef7edf5556770004f751c666bf7c46dc73a819156f97b8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R56WA6U5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHtAY%2BhGPIPIXZsRzHAmNppP5GdkXrMpjKNbI2cscGiSAiEAzlKiWcmqB0zouZcJL10BixNMyvwr4an4hQCoOUC%2FZE4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHvUCFTtCHpaNz%2FGiSrcA82JMhFeOunqUqmDaBzSLGZiYCR7C6BnuJRPp2vb%2BRdlaV%2FmGyChdbgKMpzEEw2YxwW%2FaYXI44rRY1HaOlR53E4Zp5kZDT6k4wCdBPRDW2%2BOoZ7eDNwyIfFq%2BQH6B42BgM7npX%2FeLfWeVU8CxjaEmDV92h9nmIwG%2Fcykx0VSXVexV2iTz0sWpBUcKgDQkCPhuuiY61w2SpRTVWY1IXSqAbddf4XjKOziqaNOCBR1cQZ%2FzrMzQ7OiaCno%2FnE2tz591mLIIu%2F9mkzaAt5oz%2B2KM%2B31XDrG81DzPJhgnVWhihA0uGCfzosBhq1zErl5yzIBvzlNPhEeot3GiDOEq9npyA9BqMHpGfa8jaz3MaaQSkj2wTROBVBRFlyqHWS7Qbh84c6LF2UOqWTdLypyKIPYeP7XNvmQ42wUig2%2Bha7L5HqNDoC3ZZvYvXixi0MYLl2Hzul4B0%2FvEtDoAYRE3R3hdTTnZlGFthIGZM5sPatScQPLGJHWZT%2B479j%2B9MIk7daEPjVB8hLF%2Bb53vTYqdXeIHM%2BvlcBXimJGuepwgFnG%2BLYL%2F3mQ0uNyQj17qgrj1y%2B21ZCl9GC59HH58ksitsOunJYxFG0mTIdGjGv1UvntRzAeWeCL%2BBzN32iBcynuMLPf8sIGOqUBWgejNKs8TD3rZ7xw63FEzUXpXQs52IycZFHwHiDQw2Axx0ZuwKjwpYlw3sFwiYPN%2FxmChkBweFWO0nIUkYit0ypYYGVIcuda3PRtSDXkg70HqNkrNSVze%2FMGk3exsil%2BXtc2CVAN9M4qVcKtt2ynAENJI7sMjvyeZy88fmIxPtmR3VcSaX9sJFYAHVebs5N9zvwpd4sHvronjMBSwbiQaGYgD8%2FH&X-Amz-Signature=ce54d139bd197cc21d3e79494b2c015cb98ad3dca39fb60ef8aa706f7989cd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHGE5DAB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC5ZSjtvkxj3IOzqeNF8uGTGVMt7upzC467QuLyUWCMuQIhAMEg8XAhbIlrF5qWBFcWXXKEYj0213ravYK2xHMxmA8rKv8DCFMQABoMNjM3NDIzMTgzODA1IgzXXoa2oyxgGNBErsQq3AMozcJH25r6KoZSlOi6u%2FdJzttiW4CbQjhlB%2FQxqHvFz9efEOYfyb9pp4qGu9YJoISFcwC1GlCje6CVUe1QUNGqUkqtEuoir47rPREqEM7pJhH7r5UhoOWhPlTxCrOed2KYOydUfDtqOr2iP0OS4BWYSfbW2PJrd6ipe0voZc%2FaDa2NV38sxxQWTALjZDyRVfvPLy%2FO8J%2BZkgYtuPgPgB%2FUvxCoCykBYnhbJCzf0LvOAcL5%2BN6ih7aT8Hax13wM8OC9UxSElWT%2FAJVRcCmbp3aZA66a%2FnYlsUvvBMAGhUzLKKH6x5vMGP41iFVXQX6sV0DWprX6eEpDGwWzPKDEv88%2F27LYOo0HhQeWonsO1YMbettRHKApa74TfdEz2EhAM8gA2CZ2d34rSikdNONse0M95tSWixZ4ozVMPztPNBFdwE28yzioFD86%2FH58hNaIX4PiciZMNetBDpaeUUhEpOT%2B9bOim23jkp%2FUveUz6HQr1momhlECtqGDiWh6WUgDQ%2FQo%2Bb9gK4eRqE%2BY9NVAgrmRKG5xSRLDFl5RRLBlu0dnkZSsLt7w1hZMvm3Um1ny53K3gC9y94BcaUoFmq0VXa5CGLCHldUTg89ojoQon%2BguzdLWHln9IdIL0MVpHjCU3%2FLCBjqkATuxk4ShtqMoPnZoiuOKLfZrA9FWRbH%2BmqbVNHhPP9OoCYywd1Mi8Xg7ajpV2KRxgumXAfNO4dLzXFo3%2BJSwBjh2h8nJcmoLBqUf5NPBcs%2FTDjaPS4rJYXM%2F9snDk7Su%2B4JeSZ0ttoY9iobX8fsV9WnpS4v849xoeBx24nj63VQ2D1WMx5ULSIc2ZADWvFjsYbNdONvczaRo0TFYg08i2V1WZLYf&X-Amz-Signature=b619bbb8b367dcc6f484b3c2d625499dd1ad0c1b2d4546ce0bf7260b9a8d4c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
