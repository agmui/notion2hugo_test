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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UQUCDV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNi3pWxiUKBXM%2FDp%2Ba4nlxWStwTqfZikL0oM8QzMA%2FEAiAn2CeawP0qi4xK5bJIlwsKdh573X6pr9MbR5ST6EAEzCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkZTWdUUmCUtdI0aKtwD9eJjro%2FxJ1H%2Fzx1Q9jQgEsA96Q5FWoFcNlh%2B32fQNPuIMklSTZhk0bzGYX%2FJD%2BAo0VwuBkRjRoH6UfnUb5Uq%2FdgSG9z9nS1ZPvTKPuGAmCaaCwGsdHq5fqJx4tvfF%2B%2FM8Y86oC2E%2BhviCIBO7x0gePUv5MA0gQBcGax1WExBUxkr5s7Yb79Vz7S%2Bzjr%2FesNMz0mkvV9e8cuWsC3aTPLvTmGFHmR7BdCUPNCiP9eL8cZ7a4kftMMRKpIGi%2F1PM1nqK1cmIufhek9MMH6Zno0S7Bkiv%2BMkPtMgx1JgwaY6oh%2FdpKYf9nLBrNX4175ECnwpNgug7rrzm2h%2BrCB2fJ1wEsQVK654r7g4olhKye%2B24vzmu43uPE79Gv%2BRZzIEKW3ED4mccNgz9bhuDPL%2F0y09g7Kmg2lthvnGpN5lUgX90lj6rjsZmFKy0dLlA0rQl9%2BMy4X%2BcIOLaZ24OXnu6m8eKHT66aMEN91eOjo5swgz8qBAuqSQdXjg%2FmopDX5Sah5n8z%2Bk%2BY%2Fb%2FUkYaUkNUs4errAQuBusSWG6oc7%2FVft3GcLHSPrACJuYuDXsvt%2Fk6Q1NmdIxTopv1xSC4gaS%2FmTcoaMm%2FwvOGAlQRHv4VE5rRsMmaEqhuxsEB6QPJ4IwgaH7wAY6pgF0XlU7hN8UwN9whiqrDdH5NwG%2BELH6sa4jlGo2oZheuy5bdjnXMP91DvGoI1eLece2XuLLQa3iyP3qstqdm4ZzE6Kg%2BGwzuJVapqpD2EYaeuHBDhYfVr%2Fvek6Dv8C2l9DrPCfRvGdRSam8jihEQcQvp%2Fwkb32RgVNoPEcWCFNqTYLdYYAbnSBubvS7eSDGLcd5SxVomfD%2Bf86BhZV161uTfFaoNIRA&X-Amz-Signature=f1b7f3a02edf1d83f6dae8119f5462cd743510277d37815db09b9d38faf379d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UQUCDV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNi3pWxiUKBXM%2FDp%2Ba4nlxWStwTqfZikL0oM8QzMA%2FEAiAn2CeawP0qi4xK5bJIlwsKdh573X6pr9MbR5ST6EAEzCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkZTWdUUmCUtdI0aKtwD9eJjro%2FxJ1H%2Fzx1Q9jQgEsA96Q5FWoFcNlh%2B32fQNPuIMklSTZhk0bzGYX%2FJD%2BAo0VwuBkRjRoH6UfnUb5Uq%2FdgSG9z9nS1ZPvTKPuGAmCaaCwGsdHq5fqJx4tvfF%2B%2FM8Y86oC2E%2BhviCIBO7x0gePUv5MA0gQBcGax1WExBUxkr5s7Yb79Vz7S%2Bzjr%2FesNMz0mkvV9e8cuWsC3aTPLvTmGFHmR7BdCUPNCiP9eL8cZ7a4kftMMRKpIGi%2F1PM1nqK1cmIufhek9MMH6Zno0S7Bkiv%2BMkPtMgx1JgwaY6oh%2FdpKYf9nLBrNX4175ECnwpNgug7rrzm2h%2BrCB2fJ1wEsQVK654r7g4olhKye%2B24vzmu43uPE79Gv%2BRZzIEKW3ED4mccNgz9bhuDPL%2F0y09g7Kmg2lthvnGpN5lUgX90lj6rjsZmFKy0dLlA0rQl9%2BMy4X%2BcIOLaZ24OXnu6m8eKHT66aMEN91eOjo5swgz8qBAuqSQdXjg%2FmopDX5Sah5n8z%2Bk%2BY%2Fb%2FUkYaUkNUs4errAQuBusSWG6oc7%2FVft3GcLHSPrACJuYuDXsvt%2Fk6Q1NmdIxTopv1xSC4gaS%2FmTcoaMm%2FwvOGAlQRHv4VE5rRsMmaEqhuxsEB6QPJ4IwgaH7wAY6pgF0XlU7hN8UwN9whiqrDdH5NwG%2BELH6sa4jlGo2oZheuy5bdjnXMP91DvGoI1eLece2XuLLQa3iyP3qstqdm4ZzE6Kg%2BGwzuJVapqpD2EYaeuHBDhYfVr%2Fvek6Dv8C2l9DrPCfRvGdRSam8jihEQcQvp%2Fwkb32RgVNoPEcWCFNqTYLdYYAbnSBubvS7eSDGLcd5SxVomfD%2Bf86BhZV161uTfFaoNIRA&X-Amz-Signature=63b4d8d40fa1689c94e9cf6c2a12903a495108382642ad93f993c578a32cc0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UQUCDV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNi3pWxiUKBXM%2FDp%2Ba4nlxWStwTqfZikL0oM8QzMA%2FEAiAn2CeawP0qi4xK5bJIlwsKdh573X6pr9MbR5ST6EAEzCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkZTWdUUmCUtdI0aKtwD9eJjro%2FxJ1H%2Fzx1Q9jQgEsA96Q5FWoFcNlh%2B32fQNPuIMklSTZhk0bzGYX%2FJD%2BAo0VwuBkRjRoH6UfnUb5Uq%2FdgSG9z9nS1ZPvTKPuGAmCaaCwGsdHq5fqJx4tvfF%2B%2FM8Y86oC2E%2BhviCIBO7x0gePUv5MA0gQBcGax1WExBUxkr5s7Yb79Vz7S%2Bzjr%2FesNMz0mkvV9e8cuWsC3aTPLvTmGFHmR7BdCUPNCiP9eL8cZ7a4kftMMRKpIGi%2F1PM1nqK1cmIufhek9MMH6Zno0S7Bkiv%2BMkPtMgx1JgwaY6oh%2FdpKYf9nLBrNX4175ECnwpNgug7rrzm2h%2BrCB2fJ1wEsQVK654r7g4olhKye%2B24vzmu43uPE79Gv%2BRZzIEKW3ED4mccNgz9bhuDPL%2F0y09g7Kmg2lthvnGpN5lUgX90lj6rjsZmFKy0dLlA0rQl9%2BMy4X%2BcIOLaZ24OXnu6m8eKHT66aMEN91eOjo5swgz8qBAuqSQdXjg%2FmopDX5Sah5n8z%2Bk%2BY%2Fb%2FUkYaUkNUs4errAQuBusSWG6oc7%2FVft3GcLHSPrACJuYuDXsvt%2Fk6Q1NmdIxTopv1xSC4gaS%2FmTcoaMm%2FwvOGAlQRHv4VE5rRsMmaEqhuxsEB6QPJ4IwgaH7wAY6pgF0XlU7hN8UwN9whiqrDdH5NwG%2BELH6sa4jlGo2oZheuy5bdjnXMP91DvGoI1eLece2XuLLQa3iyP3qstqdm4ZzE6Kg%2BGwzuJVapqpD2EYaeuHBDhYfVr%2Fvek6Dv8C2l9DrPCfRvGdRSam8jihEQcQvp%2Fwkb32RgVNoPEcWCFNqTYLdYYAbnSBubvS7eSDGLcd5SxVomfD%2Bf86BhZV161uTfFaoNIRA&X-Amz-Signature=f4d719cfc87fd9d24c02e62176a4501fe1e1bcff3ac5e5bff8f47452a3c203d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHDTZQV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcIrf%2FgQW0psYLDUYxPZLWEJWURk4ze2A5oBqQABY9mAiApHVALBlGD4wr6Z1w83Oa5hUHdUw1YqONBdBvoxSnMfyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdTPNXqCn9gfjkS%2FKtwD7I3vOHuQN1231NO7znuBygTtoHNIDe6NPU2gZwuVxlqvNcN9NWvcEv8bWWkzVo%2Bifj5i0UYVqjGFSXkItqGE4tHnDg2gRv6bGOen6EU1h0SWsRKoMqenklOcvxFjKDxOk%2FJdnPAdXH4e1auPZTmx%2FZscD0%2Ba4Un%2FmNMokiT0G6Eo%2BYSNvEejxsiQbhwQqqDJd%2FD%2B%2BXZ8X4paHHE8uMPMt8IT5IER2r1qDUngWAh9RycfGSF1NsKt0p6w68d%2FYCGr2FUmQNKa2Amvol1QjrPILEwNanb5pRzi7qKx35ByUzFx5E7q2iltHnpQh8azAZIDErVy8w7rVBNfq4FyY6Qx4w7IbLUh0S0ERgRHoVQj14Jn6Yj1tpfV9hcxx96hTC%2BMqbLuXNrBc%2FCfWerdt1%2Fh1TQv3c17m4%2FZJvc%2F2IvbDWjkNrVeC%2FNkKNsJedWucKQD2TGuA108wqMlyLVKfh%2BBDun%2F51hK9PHYRhQC3Iy9CFImpvsXM%2BmWstazLwv8atkPI2p8tdGlLsWXjgC4CWttjUDx%2BAgaZhgzVy7zJveC9LZut4yGCrZXQxda%2Fy91uLVctauexHr856jw8KqYIg9YwWqP8A6xYdOxsVoYNwzeiujvx4jnSi%2FOTDt%2BrRsw%2FaD7wAY6pgG0F4DRcn95rSM%2Bh2IEk0T8xVyggWUZ4oze7ksLlvQ7FEUvoGGOIBBrsDYkIbsqE5VV2yx1OR2MSKQXFKiP2O%2BgjOahNvYa0eevuJh2jRptWzQXpGoBj99nLf3h0a%2BTLd56nq2aFSfqqumPhF6J1YhbPMbY5s4zzpCWlESH0Tz4mMhLNoTOToFnd%2B626i%2BwGgvzn%2F4p3%2F3XE9qQt0DpfNg13Dod8%2F9b&X-Amz-Signature=770f45ef1ea485ae61253f4a944a2c9fe37664cb7fdf035240825fdf5eede773&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UXRVDI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYeX5rHc3QlpkRCoQBVVhShcnpzDcPMmdefAkTsjcZ%2FAIgQNUoXCVrvLUERaurWLow7oWjkgAAbslWXALGV4MEEzQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN6nxHyt9BYirVklyrcA5%2BDicXPGQjYZQs5RmZUPzI%2BUb3dchpVpgbwxBJqlDfzH3aVwwX%2Bwu3gpOKZ%2BtbfzXSxYBgqAGcIeGcstp5kiPCiEj7Kvji6PKypgQoQGwZ0QRAl%2FEe1I11i%2BOrr9xeXu9ROpwDgK0bFk926UnqNkA792EklL7I3eWqP2JF%2Fidb80Gs6zs%2Fk%2Ff5HG5EVaFugh3%2BpLeuT9JD70DtKIavyPkAMfZrVNgagEwqgEX2AM85i1G5crj56S3YVrFbpZR6HhMJgTiIBH7C9sOj33cXbFOTzV6oUSL5fB6ZYeqtrQT3MgO5t%2Bb3fENhcWlcKwKQTn6ipFxgy8GxU7ZFigR7wLpqq2Hszd5TjraDO7HzBoUa%2FrIdUEkafYxOfgfFV8psNUix%2BNpGiyiBIa4p1H9HpUqLC7Nt7NNY1RaMno27GFNWt5E9JHLBKU1LdkRHW3xlwCq4H%2BgDBKk%2BY4yFMrq%2Bt3b867toBTj%2FGMzI0T2iyAOJujH8D9Jk%2BplmWXevpXF9umjC5UiTL8jh8DAn8xflcFNxA1WNP85NxK4f%2B%2FakhXkf5xDf2Z0Wgb%2B9Pax2tx0qg5HRasKr2VgA9igc9FPjI9vAPU1%2BEgHfIUXfKZhRGS90HxFvQvyV%2FfOCgohozMJCh%2B8AGOqUBw37SLwcPT6JZjh08%2B4fUqiHznHUSNzyrbEU9XlMsooj1yYXyuxPr5n3DkCOtb2UN5rBE4Ctr3VJt5RM0xWxa4nzp9IO0f7akG1JJQkz0x4osBvDnfAu9ha8S6wyNmkdej2kZ3RwbGOBA7E0NbLc6yf58PNJtgAi0jKJBn%2F%2FRNdDwGuJYDHNW28zeuOby0dPtvMSgHjSVqdrAKvHZOJuNn0cs6%2Bm4&X-Amz-Signature=81c6d4af9e89df811c9fe2337345a5bb600dccdd005c789ea73d1fb8cbe5ab2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UQUCDV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNi3pWxiUKBXM%2FDp%2Ba4nlxWStwTqfZikL0oM8QzMA%2FEAiAn2CeawP0qi4xK5bJIlwsKdh573X6pr9MbR5ST6EAEzCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkZTWdUUmCUtdI0aKtwD9eJjro%2FxJ1H%2Fzx1Q9jQgEsA96Q5FWoFcNlh%2B32fQNPuIMklSTZhk0bzGYX%2FJD%2BAo0VwuBkRjRoH6UfnUb5Uq%2FdgSG9z9nS1ZPvTKPuGAmCaaCwGsdHq5fqJx4tvfF%2B%2FM8Y86oC2E%2BhviCIBO7x0gePUv5MA0gQBcGax1WExBUxkr5s7Yb79Vz7S%2Bzjr%2FesNMz0mkvV9e8cuWsC3aTPLvTmGFHmR7BdCUPNCiP9eL8cZ7a4kftMMRKpIGi%2F1PM1nqK1cmIufhek9MMH6Zno0S7Bkiv%2BMkPtMgx1JgwaY6oh%2FdpKYf9nLBrNX4175ECnwpNgug7rrzm2h%2BrCB2fJ1wEsQVK654r7g4olhKye%2B24vzmu43uPE79Gv%2BRZzIEKW3ED4mccNgz9bhuDPL%2F0y09g7Kmg2lthvnGpN5lUgX90lj6rjsZmFKy0dLlA0rQl9%2BMy4X%2BcIOLaZ24OXnu6m8eKHT66aMEN91eOjo5swgz8qBAuqSQdXjg%2FmopDX5Sah5n8z%2Bk%2BY%2Fb%2FUkYaUkNUs4errAQuBusSWG6oc7%2FVft3GcLHSPrACJuYuDXsvt%2Fk6Q1NmdIxTopv1xSC4gaS%2FmTcoaMm%2FwvOGAlQRHv4VE5rRsMmaEqhuxsEB6QPJ4IwgaH7wAY6pgF0XlU7hN8UwN9whiqrDdH5NwG%2BELH6sa4jlGo2oZheuy5bdjnXMP91DvGoI1eLece2XuLLQa3iyP3qstqdm4ZzE6Kg%2BGwzuJVapqpD2EYaeuHBDhYfVr%2Fvek6Dv8C2l9DrPCfRvGdRSam8jihEQcQvp%2Fwkb32RgVNoPEcWCFNqTYLdYYAbnSBubvS7eSDGLcd5SxVomfD%2Bf86BhZV161uTfFaoNIRA&X-Amz-Signature=7c5d9cf0139b06f1f16872095dc8d21b751b857fc0d52f6c87954bfa499b0d27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
