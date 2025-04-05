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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOSLDYI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUfaZ%2FCGjGfHoAaT68w87fTTxfPj9xnYmz2dKZvsolbQIgQUuLVVkEGWNaPOI6f6m94j9FV%2FvOIkYOEUpV6f3X%2BX4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAXMy67pnpWqYTDv%2FyrcA4Se74BHCuOBr0A0CNmxQTotyBnfheWt0k4MvPEIAhJlb7nHcZfwPVWgkYUjFfJbCQxUyPyxL6dwqGBuTD2sEWYW1nhFaE6s9ET1bp8TzbVz5Nxbo1qRgnQZZ43e176uTywk7mpkvhRilDRCJM9ZRLsMzYg3hftXhQCDVPuAFvcFU4nnAVMAjwbdcK1pTJMorr%2BjN6CBfc%2BaxpmKpnQcAHimUY%2BizThkOvg%2BhclluvQH%2FtmSD87rmJCCk8ZsNs55CjIfIjpPxhILq4jrdbFhBjMinI%2FQcE87cXgOvnRTTsg%2FuYWGp2MVYQiu4RhA06g0tEBYo2WJaoQg52xGx7PLIyot4MHjfDlf4xo8HF2cOiiDnmFHYnf67yNvOFfMSs8vTTlpyKxPpQ2JMUZNwry3ykkg%2BR7YyGcf2T8ssHzTRw0I500FoCPC4OTESzihXEORkPvsjiysGU6kpCqAhL%2FDkvaMS4ZYSOzJkDANmVi6G73OHPs%2FVfgJmvdf95sVXurnvNmL4Turlu11c2NweqI8OJYjT5vQ%2BbJ2IZQkAh5ckxNIZeqrQJrQt1SdU7zSBUgqFy6EzaNJBt8gLN2NhDyNzuL3eVi0bmt7IAXt9l8mQ1L1lrp6L0HWybbH6nDnMI%2Fvwr8GOqUBGsPoVQHDtUMBQ6g%2F57PkFds9iG%2F2SHb0g81nwatUnd3%2BbdXvYQX7XJZGBPkv%2BC40KMLzrbENdMEySnLz4uanaEl3OpVtC1OV2uCVo5M4PNWCPo7tuk3pc6CdosRDiIoCLqnOMWDVkTXPlm6y1Q84ynScRbfX%2FJgu8ZuIcUsbkUwSD62L85pJiwNxQ0isadrbVwms%2FsUpf6SiqvCz943LaA6DGKtJ&X-Amz-Signature=812801dea845af55cecb854f1c572f8446c31e8dff92db80a2d684c338f3c893&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOSLDYI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUfaZ%2FCGjGfHoAaT68w87fTTxfPj9xnYmz2dKZvsolbQIgQUuLVVkEGWNaPOI6f6m94j9FV%2FvOIkYOEUpV6f3X%2BX4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAXMy67pnpWqYTDv%2FyrcA4Se74BHCuOBr0A0CNmxQTotyBnfheWt0k4MvPEIAhJlb7nHcZfwPVWgkYUjFfJbCQxUyPyxL6dwqGBuTD2sEWYW1nhFaE6s9ET1bp8TzbVz5Nxbo1qRgnQZZ43e176uTywk7mpkvhRilDRCJM9ZRLsMzYg3hftXhQCDVPuAFvcFU4nnAVMAjwbdcK1pTJMorr%2BjN6CBfc%2BaxpmKpnQcAHimUY%2BizThkOvg%2BhclluvQH%2FtmSD87rmJCCk8ZsNs55CjIfIjpPxhILq4jrdbFhBjMinI%2FQcE87cXgOvnRTTsg%2FuYWGp2MVYQiu4RhA06g0tEBYo2WJaoQg52xGx7PLIyot4MHjfDlf4xo8HF2cOiiDnmFHYnf67yNvOFfMSs8vTTlpyKxPpQ2JMUZNwry3ykkg%2BR7YyGcf2T8ssHzTRw0I500FoCPC4OTESzihXEORkPvsjiysGU6kpCqAhL%2FDkvaMS4ZYSOzJkDANmVi6G73OHPs%2FVfgJmvdf95sVXurnvNmL4Turlu11c2NweqI8OJYjT5vQ%2BbJ2IZQkAh5ckxNIZeqrQJrQt1SdU7zSBUgqFy6EzaNJBt8gLN2NhDyNzuL3eVi0bmt7IAXt9l8mQ1L1lrp6L0HWybbH6nDnMI%2Fvwr8GOqUBGsPoVQHDtUMBQ6g%2F57PkFds9iG%2F2SHb0g81nwatUnd3%2BbdXvYQX7XJZGBPkv%2BC40KMLzrbENdMEySnLz4uanaEl3OpVtC1OV2uCVo5M4PNWCPo7tuk3pc6CdosRDiIoCLqnOMWDVkTXPlm6y1Q84ynScRbfX%2FJgu8ZuIcUsbkUwSD62L85pJiwNxQ0isadrbVwms%2FsUpf6SiqvCz943LaA6DGKtJ&X-Amz-Signature=4ffb4ca35f2249e160745cb98237d4c647579c7a5486a7fba54ab73258f59df9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXHFCVI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFxnEqbOPbrRAyUcFpwnMR4UfbuPJzw89RNaKV1eUDGgIhALmu2iIdXOIXk0qvF3j91GFXAwcZdOmHHyWvSMX8VkD0Kv8DCCYQABoMNjM3NDIzMTgzODA1Igxu0P7xqOSGChCdZqQq3AMzsGCvEv8aP5z6SM32p49D%2FZzUVG40FOJU5q848oSN5%2FgbCS2TbT8UEZsP45sZ6wELVEWSLpWuRmFdHDZnVydqhREFFg3oUw16suf%2FJCkiLSN%2BA%2BNjlTMEm0o3E0Q0EchcYsq7e%2BvwcF5QKACNWout05%2BR762%2BHfnKtQRz2c69z4XVQsr8t6VQRgjsXpuwOgmoYYu52id5w%2FDaCwHFLlFHCaoygzZsTSVDeUjNQg4sgWDAL0AltxENnqi0wHGK%2FwebQx%2BzsszuHafniEZNQScsQ%2Bw9toNhumZlOnQuaDRpfrS7JPZ9rVG2E%2F%2FUCANpzakH2aElwksanT9gpeL3zjjT7icxWuMNy8bbJxpseyfUEHZZbptlk0dCPeCw%2Ft77jRCr4JIi0FGv5K67oX%2BEE3xmA6A6wdcE8WDBf7U1mhmKLwiLG14SO604AKZkglOV1jmbKFV50KytDJTXtE2ZVf5OpKi1lVNBpq1%2F%2FCmnheGMiDpHa%2BFqO0%2Fn9Q64n8L%2FHPgGkK9Q8JUOCNaF3PKDh7LrPoSsWFL7dP5HsD%2FlydnCAQnoCUzhuoiC2x76LfV2%2BvPLYLb4TrF391FGeTJU512f9MvCdtw4xJ%2FPWBrtgK6XBxTSjFh38HTzq%2F8x7zCQ8MK%2FBjqkAfKeiC%2BSLyzDyzUmd2bRIhfhjF3E7QdttApIF1BBH4peWZV%2Fi9dK3mdcpImx0ArurgFTLl4iwZBVcPd41vvWvBBmDythoGaVkicgS7nusmF4Akt9fA5%2F96MwNQUQtB%2FADF2HyAVrCn%2BEbyl1gjy9i%2Bj%2FHAFFfD1tbCgZ6iGG5Sf%2FuGfrtbQIvQk5G2zjgCIUt4YwVh3hWnFuk3sm81Sz%2B5zD6oDx&X-Amz-Signature=9653561926785ddd400289e8cdd09f72ef48cc3615cd0cabd56306500f8b9dff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXZXDHA%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BmiGyi00R8z8NDqpKhMgkvct0Cxk5oBUPJBOC4360dwIhAO8oC9N1PUzkwyHGOQtkcemuUW55wfWr38FGwXiKzyiUKv8DCCYQABoMNjM3NDIzMTgzODA1IgwOysnWDFsOPsTOM44q3AOP0FU8CkIod204hqlAjc1cKCdM%2FSMSRJ3e3zK47UUlYeapB2KcDjOb1HhS0MId03npCHfhockBz44S6fbSQjV0BfZb3AB5vRDj%2BNQs8BYlT4aBZxYD4v3w7HvHXW34MxNlOasioVMfwrNObl6Th3w8KFe1JP0kw4mR0Rj2bb0PCJCoOhlm1fFTnUuLBbMm%2Bo5JeSqLPVOT2E32PLD1vdk22kxD%2Fux7McwVcJPzaLSeJHvbL0z4%2BYYm7yZ557Gv349MtI0WuC3pMSzoDm5SJtqWkljZFKA7%2FON2vEVgFJKHlD7fL%2FvazeOQ%2BJhk8JoAV6IOAOIFf%2FVjj0kqjc0a%2FTaC5gw96T%2B4cuQq5ODIqXYg%2FYpMPCTcjG9MQADcKkoAqaC%2FfDM1z0bR5NvkhejN8DVKgv7uz30vXWbe6Jf2opc%2B0%2FLgUlZmzimqHI4KxlddokffGi6ephabpdVkAEN%2FqRoP%2BSzI%2B9EY7bQQ1ImAX3q5zdapWL3mdr0tNHdaf6841R%2Bxjepz9uafCuIJooW%2BI6kGiQH1yU45SwLPdOUkmOBDetSCqLyaIi36QAbjEQZJds1s%2FDnmJ79YAm5i6MJcLu4fvQZu7ijziz%2FR0PO5%2FQov%2FeWrkMNQdVPe27092zCD8MK%2FBjqkAVSxjBalAFsWzLxs8szM3iHxLCgBXniddT6Y71f3YWu5TTIosCYuSHNa%2FoWZwm0xygS8KE6DrIduY9VPiVorpl%2F3gno2viP7nEjc%2BtQIcO69gdWBREZzWpGaU6sLVI%2FPydboO0hJ4A9zbnMaV7IglK%2FEZXeGx7tbz2yvywCxBYnnIeBa2eqredjkltEry4jsJWogrNpJBqX0PNmz3XDg1%2BQ9Itok&X-Amz-Signature=11783c26a8b9f9fe409de70cb2433177f1d513e4c8ad87dfa52b1c80f7b8eb27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOSLDYI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUfaZ%2FCGjGfHoAaT68w87fTTxfPj9xnYmz2dKZvsolbQIgQUuLVVkEGWNaPOI6f6m94j9FV%2FvOIkYOEUpV6f3X%2BX4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAXMy67pnpWqYTDv%2FyrcA4Se74BHCuOBr0A0CNmxQTotyBnfheWt0k4MvPEIAhJlb7nHcZfwPVWgkYUjFfJbCQxUyPyxL6dwqGBuTD2sEWYW1nhFaE6s9ET1bp8TzbVz5Nxbo1qRgnQZZ43e176uTywk7mpkvhRilDRCJM9ZRLsMzYg3hftXhQCDVPuAFvcFU4nnAVMAjwbdcK1pTJMorr%2BjN6CBfc%2BaxpmKpnQcAHimUY%2BizThkOvg%2BhclluvQH%2FtmSD87rmJCCk8ZsNs55CjIfIjpPxhILq4jrdbFhBjMinI%2FQcE87cXgOvnRTTsg%2FuYWGp2MVYQiu4RhA06g0tEBYo2WJaoQg52xGx7PLIyot4MHjfDlf4xo8HF2cOiiDnmFHYnf67yNvOFfMSs8vTTlpyKxPpQ2JMUZNwry3ykkg%2BR7YyGcf2T8ssHzTRw0I500FoCPC4OTESzihXEORkPvsjiysGU6kpCqAhL%2FDkvaMS4ZYSOzJkDANmVi6G73OHPs%2FVfgJmvdf95sVXurnvNmL4Turlu11c2NweqI8OJYjT5vQ%2BbJ2IZQkAh5ckxNIZeqrQJrQt1SdU7zSBUgqFy6EzaNJBt8gLN2NhDyNzuL3eVi0bmt7IAXt9l8mQ1L1lrp6L0HWybbH6nDnMI%2Fvwr8GOqUBGsPoVQHDtUMBQ6g%2F57PkFds9iG%2F2SHb0g81nwatUnd3%2BbdXvYQX7XJZGBPkv%2BC40KMLzrbENdMEySnLz4uanaEl3OpVtC1OV2uCVo5M4PNWCPo7tuk3pc6CdosRDiIoCLqnOMWDVkTXPlm6y1Q84ynScRbfX%2FJgu8ZuIcUsbkUwSD62L85pJiwNxQ0isadrbVwms%2FsUpf6SiqvCz943LaA6DGKtJ&X-Amz-Signature=ea864662d47bd7045b316e2bcda313361da80c350a22923f18c1e009b1548e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
