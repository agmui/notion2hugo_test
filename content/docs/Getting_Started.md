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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUO5Z3M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOR0p%2F%2BovhvMn3PhL%2BJHQnflu25Eu79R%2FnlyZ7JIW4hAiEAkpu17XLBBooKw88m5HgohrBwTTSxyAjUat8%2BFE6sLdkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCYN4ICPoIaOPC%2FAgircA0ECFAjHVmeHuN7jEjeX8ylG3d%2BVk%2FaXY%2FzowG%2BDPs2wKLcBF7yYL8U58PpPJ7ItMySWlW1p%2F4aW1TYSDhbHyc3%2FdXHSy%2BYDrObNFENHW3dRcvfhnyyFSETwEazX1RqpsgEuZzl%2BsRSMMKLcdnt%2FTDQ0CP%2FSbG6mo6hz38uhHObauKtWliW7USM3wHc6VHY%2FX5%2Fw8op0shQ4jYK7GrPrxtLHT3ykJ4MA33EKS%2F7SLoULOInCfld8%2BMw1Wp1e%2BKJ%2F34A1a%2B6tmHaDqpX4yncbAR%2BrS9UhY3jedJK8S5bKMllSewUl%2FxuPtvgocOt9oDTIwCegKnrO1mhkJJSe5EBqYDGeQ6eQ8B5xb0utEMVZhlklDHVZn21S6XkNeWMex2j30wUoQ4n4TfxDr5QPxyf2bxSg%2BVg2%2BW18Aj76CtHX7dW4CFhkEZuj0uo7FBtvac0fVPySi8GFWZ1%2F3dXBCXFO8NS3fkS0O7LnVMEISJHvrqLQH7AmQP4njtJUJKR0Sg5E9EyU%2BfN%2F1QLD%2F2O7ede2viJaf7Vph9vlHo0uXpiyK6fC%2FrU9BKdPqK58W50%2B0yfkY1G14Hwzn6BXJhf6VZj3pxOSKKQo7%2FHBnMdCZEwQzu09nFuobFgMc8TGqsHZMNPJ9MAGOqUBxehAQm37tVfzoGNCh5zyfJfQNb%2FMqZngfeMDdwXlb7JAOp4vhYhnh5eE%2BIS5xJuwqKxJDrNiTlqVszIS6ICBQeXl6kA4mdnNOLA2DGmhxrdjQeTwm3cbK4AwL1wOPW7LQDoVze%2BxWhsgH1h5THeQVXD4WjpnPGjFsZ8jmKqFq2zCb5FzG7GtkJ8xnVZAl1fZ8afyUUCJ4yBWVFl4TXsTyR9AagAw&X-Amz-Signature=ec8f4444b4e3952e35d0deb1299ee09c840cd9295db17edbde9abe1d6ebadaba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUO5Z3M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOR0p%2F%2BovhvMn3PhL%2BJHQnflu25Eu79R%2FnlyZ7JIW4hAiEAkpu17XLBBooKw88m5HgohrBwTTSxyAjUat8%2BFE6sLdkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCYN4ICPoIaOPC%2FAgircA0ECFAjHVmeHuN7jEjeX8ylG3d%2BVk%2FaXY%2FzowG%2BDPs2wKLcBF7yYL8U58PpPJ7ItMySWlW1p%2F4aW1TYSDhbHyc3%2FdXHSy%2BYDrObNFENHW3dRcvfhnyyFSETwEazX1RqpsgEuZzl%2BsRSMMKLcdnt%2FTDQ0CP%2FSbG6mo6hz38uhHObauKtWliW7USM3wHc6VHY%2FX5%2Fw8op0shQ4jYK7GrPrxtLHT3ykJ4MA33EKS%2F7SLoULOInCfld8%2BMw1Wp1e%2BKJ%2F34A1a%2B6tmHaDqpX4yncbAR%2BrS9UhY3jedJK8S5bKMllSewUl%2FxuPtvgocOt9oDTIwCegKnrO1mhkJJSe5EBqYDGeQ6eQ8B5xb0utEMVZhlklDHVZn21S6XkNeWMex2j30wUoQ4n4TfxDr5QPxyf2bxSg%2BVg2%2BW18Aj76CtHX7dW4CFhkEZuj0uo7FBtvac0fVPySi8GFWZ1%2F3dXBCXFO8NS3fkS0O7LnVMEISJHvrqLQH7AmQP4njtJUJKR0Sg5E9EyU%2BfN%2F1QLD%2F2O7ede2viJaf7Vph9vlHo0uXpiyK6fC%2FrU9BKdPqK58W50%2B0yfkY1G14Hwzn6BXJhf6VZj3pxOSKKQo7%2FHBnMdCZEwQzu09nFuobFgMc8TGqsHZMNPJ9MAGOqUBxehAQm37tVfzoGNCh5zyfJfQNb%2FMqZngfeMDdwXlb7JAOp4vhYhnh5eE%2BIS5xJuwqKxJDrNiTlqVszIS6ICBQeXl6kA4mdnNOLA2DGmhxrdjQeTwm3cbK4AwL1wOPW7LQDoVze%2BxWhsgH1h5THeQVXD4WjpnPGjFsZ8jmKqFq2zCb5FzG7GtkJ8xnVZAl1fZ8afyUUCJ4yBWVFl4TXsTyR9AagAw&X-Amz-Signature=2cbb4f5e6ebea0a268e1545d26be5d62a738f6e22f862e94ab659a7a5800f0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUO5Z3M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOR0p%2F%2BovhvMn3PhL%2BJHQnflu25Eu79R%2FnlyZ7JIW4hAiEAkpu17XLBBooKw88m5HgohrBwTTSxyAjUat8%2BFE6sLdkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCYN4ICPoIaOPC%2FAgircA0ECFAjHVmeHuN7jEjeX8ylG3d%2BVk%2FaXY%2FzowG%2BDPs2wKLcBF7yYL8U58PpPJ7ItMySWlW1p%2F4aW1TYSDhbHyc3%2FdXHSy%2BYDrObNFENHW3dRcvfhnyyFSETwEazX1RqpsgEuZzl%2BsRSMMKLcdnt%2FTDQ0CP%2FSbG6mo6hz38uhHObauKtWliW7USM3wHc6VHY%2FX5%2Fw8op0shQ4jYK7GrPrxtLHT3ykJ4MA33EKS%2F7SLoULOInCfld8%2BMw1Wp1e%2BKJ%2F34A1a%2B6tmHaDqpX4yncbAR%2BrS9UhY3jedJK8S5bKMllSewUl%2FxuPtvgocOt9oDTIwCegKnrO1mhkJJSe5EBqYDGeQ6eQ8B5xb0utEMVZhlklDHVZn21S6XkNeWMex2j30wUoQ4n4TfxDr5QPxyf2bxSg%2BVg2%2BW18Aj76CtHX7dW4CFhkEZuj0uo7FBtvac0fVPySi8GFWZ1%2F3dXBCXFO8NS3fkS0O7LnVMEISJHvrqLQH7AmQP4njtJUJKR0Sg5E9EyU%2BfN%2F1QLD%2F2O7ede2viJaf7Vph9vlHo0uXpiyK6fC%2FrU9BKdPqK58W50%2B0yfkY1G14Hwzn6BXJhf6VZj3pxOSKKQo7%2FHBnMdCZEwQzu09nFuobFgMc8TGqsHZMNPJ9MAGOqUBxehAQm37tVfzoGNCh5zyfJfQNb%2FMqZngfeMDdwXlb7JAOp4vhYhnh5eE%2BIS5xJuwqKxJDrNiTlqVszIS6ICBQeXl6kA4mdnNOLA2DGmhxrdjQeTwm3cbK4AwL1wOPW7LQDoVze%2BxWhsgH1h5THeQVXD4WjpnPGjFsZ8jmKqFq2zCb5FzG7GtkJ8xnVZAl1fZ8afyUUCJ4yBWVFl4TXsTyR9AagAw&X-Amz-Signature=58e28df7c0e1e1b14bcada89f5e60a576b1868dcf54a0a161b96c0d1f56475ed&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2U7DQFK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEDbqAYS5N4OMt3zjUC2TpdAMbZLWKFsCLCy7fIHC0AAiA7n7Z%2BSgu%2BQowlmyrxf%2BR804LQiHmcAnWmH94NP%2BD7Lir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMA1cthLVsYWfu8mC2KtwDLRgT7gTF7QUI5Jykw24YaUSHOqh0n6uAmsbPaBF8bDBTYnM5FgfJJNYTdBw8MXltfUSRFeM%2FlMwjSGO1eY%2FRBA9AcUhobJqbbG54BZ0NKsMNgvLLqR0R9ySovrS3LfMVT%2BW16p26oGM27P%2Bixdq76kYSmvAUk8Mi4cUbHd8B9Nt%2BfdPxpnEMTgyGlAYlgOnXiNe4onNSb8dKoRhl363vfCFnyfDdjctW6XG946sCMYp2V%2Fn43T%2Bq11A9ammmmiCIHhdESCsGeVrpP92CqFObr8oI36d%2BhiA3D5U8JBBJ2vjJR604X0sjIdAN%2FiDoKrWtYkjObS%2FuXIj5Dyb7UIpq9NpFoidyPhiC6K3oF0Je2Rpcak5jpgDlKso0YMLE52L9k2%2FyMGgZYnI%2B99JC0ouV9O7Nq6sRMVamFXKicHbeuLdHTXIOKxCQEmfS5xOrih4QE9YDdHYOZp%2FJOGYnd0TyXws5B5MY5sgjHFhDRthu%2FhbIqkmjW0qBV%2FL2Uv2FO2daV6x4IxVhaGNDa0pn5IBTjosUOYEOhONpxr3kzT0n54Yy1UqbNs5s17pTaiCLcv6Rw78ztQdbXGcbSGa1RpcuVaVykyvKy7uRzYdKwRUPyR3PoDoyD5%2BRRyZhpRAwn8n0wAY6pgFzpngKGaNRvK%2FHLOL%2B%2FcVY0jgt5bFyT7ytP1%2F8hGDH0JdOzz6xDhilea%2FXNiSXNDPLMFBi4wTArZDMnL%2FqANDCcbhHRXhN1QOEdHYp96XICAFX37SvlG9nehRAExfVaq1o39ttdqtKXRslpimMq2FCEQLzn2EuYnoPqyLWTdnNwCoTGA6SYIqWpEOWMp7c0LFGK29uwfw4vghyGKZBfsb5XnKP2lHd&X-Amz-Signature=98ac67a4720650f828e113ff735b7e8a060c330cab460b94a0116548d75b1152&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3M4FVT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpkBlo3W%2BVpWihlDh06g1kdHm%2FuOdJQQ%2BYliGMwnC0ggIgCEikav6BP5Dm6nx5U2MjzzOQ7rc42BMTJWFjrw0OEk4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPHiTAVKhL20tEV98SrcA0kcJAdBR2f4YNThEGYPMO8F9uJxQKvK1DgYBS2Dx7FVO88MT6lokmt%2FYpzlZpwgrWc7GNnfC2oK0DBe8NvfvnK7d0nKi2UENR2pLS6y0P6w21i4DOw%2BM%2FqSBxE46vvOhONfyKvtcaYapiTqDZELlBIBD8X%2B1xmVle6a6EnIFWnx2rnqvI2Brvo97Ri6R%2BeoHcekpCLFtmr8biYpAcWk%2FS7xjwncj96pKT%2FEZcinuvMW9611kpH%2FWroxCd41ocqT8DNk%2BntO89UHpT5LSQ90e63Swxc2j42ETeB4hVrlH0MMse0efqDe2vU9k8K9Co0AtrEVwkxEpYBlWiTlyT5LPo9PQRYezZg52xfMt%2FgfPyxb%2FTc1LWbL%2BkrOi3HYNYOEdV3LkNVYtFzr%2B1TOW6t99AbqWT6dZxbGG6dZVRfKqi7Ejag0%2FScj7TErESkCARsozvk2U%2Fsj4aSR6szt6TEJYt%2FjfEAB0dyTRUQinslLooqFEhx827VSpb4OKONusjyKTG3pbzmt0%2FYzA2lyUoPKa20tJCA%2Fo3nv3MXOdKmblUlzEi2IeWGK%2FuPs3GuZgldamtmMPQOaZWHLtF%2F%2FmcoXs1y1p%2BvWI8Ii%2BklEGiPDCap%2FsPno1Btg0dQbBX7RMNnJ9MAGOqUBzYpvqotZF1YfCz1h6XC2ZFdBc4aCLH1t6qVrOUWiXvff5M78XXK0W4ROxlugg%2BsDSjMIXz6xEcY7B0yN%2BnNicz0vL9P6KTCsX%2F3PT2J8OcF4FO%2Bu4mcLvYzLHGIQZsNFuvjrg1lnTNOhYkKHiCbnKQfgIdrZcPG3EsR4luw2I%2Fn9yyleHuB9dwf0mnMex08npyJbd5DFwBAcVpF0g0dNsrDIFvnS&X-Amz-Signature=db66c940710b2ec39be43d521f146b7b977f7a7aacf4edae6a3545b9aab34e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUO5Z3M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOR0p%2F%2BovhvMn3PhL%2BJHQnflu25Eu79R%2FnlyZ7JIW4hAiEAkpu17XLBBooKw88m5HgohrBwTTSxyAjUat8%2BFE6sLdkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCYN4ICPoIaOPC%2FAgircA0ECFAjHVmeHuN7jEjeX8ylG3d%2BVk%2FaXY%2FzowG%2BDPs2wKLcBF7yYL8U58PpPJ7ItMySWlW1p%2F4aW1TYSDhbHyc3%2FdXHSy%2BYDrObNFENHW3dRcvfhnyyFSETwEazX1RqpsgEuZzl%2BsRSMMKLcdnt%2FTDQ0CP%2FSbG6mo6hz38uhHObauKtWliW7USM3wHc6VHY%2FX5%2Fw8op0shQ4jYK7GrPrxtLHT3ykJ4MA33EKS%2F7SLoULOInCfld8%2BMw1Wp1e%2BKJ%2F34A1a%2B6tmHaDqpX4yncbAR%2BrS9UhY3jedJK8S5bKMllSewUl%2FxuPtvgocOt9oDTIwCegKnrO1mhkJJSe5EBqYDGeQ6eQ8B5xb0utEMVZhlklDHVZn21S6XkNeWMex2j30wUoQ4n4TfxDr5QPxyf2bxSg%2BVg2%2BW18Aj76CtHX7dW4CFhkEZuj0uo7FBtvac0fVPySi8GFWZ1%2F3dXBCXFO8NS3fkS0O7LnVMEISJHvrqLQH7AmQP4njtJUJKR0Sg5E9EyU%2BfN%2F1QLD%2F2O7ede2viJaf7Vph9vlHo0uXpiyK6fC%2FrU9BKdPqK58W50%2B0yfkY1G14Hwzn6BXJhf6VZj3pxOSKKQo7%2FHBnMdCZEwQzu09nFuobFgMc8TGqsHZMNPJ9MAGOqUBxehAQm37tVfzoGNCh5zyfJfQNb%2FMqZngfeMDdwXlb7JAOp4vhYhnh5eE%2BIS5xJuwqKxJDrNiTlqVszIS6ICBQeXl6kA4mdnNOLA2DGmhxrdjQeTwm3cbK4AwL1wOPW7LQDoVze%2BxWhsgH1h5THeQVXD4WjpnPGjFsZ8jmKqFq2zCb5FzG7GtkJ8xnVZAl1fZ8afyUUCJ4yBWVFl4TXsTyR9AagAw&X-Amz-Signature=e36b7f677a076e58d82bcecee28b9b70cb557ee06dc8a050a9f3706c78ac0480&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
