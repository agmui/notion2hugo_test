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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKOJKGT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWKXWojPCMzJJy28W2g8XCWlOMqQ8WvMhteuAfu7UxwAIhAKnXi0Ud9M%2BxCDwDIVgxBxEDr453imqcuolPotX8cFpPKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypsnEsQczsWGduTsEq3APggzujDyymOz1ueNvNkumVsUyYL6Q%2FzpMiGcdDIZ5jBENDXREIhfYH0%2BG2SLxiQaDNdkGPMHnn5qWNRWgDbluQbm9ujfORBZwnC2JN4G9%2F04ievSm%2FNZDLOG%2FkCyI7gmy35qxzOVXByChZXQ0VzFoLNZ9XVRDQVvAoIHjey3%2F0Pwtx1ekZIBLN8e80celNNvlulSdQ0JnYoul6tI6JUq%2BiNHXuOOhS38tDWUO76jytucst7UWqmq%2BCbyjZBCpwNjIzHl4SyHsm3GSlSjAVSBd2qW2EgxV3fQl15BD8OBAsVExGkPw27OvSm4%2BrVYH%2BZSfWJE5A2Xk3ICbSCbIEP2fZgZQdCL1aQYhbL17A6fTCdGMU8fJ1t9NtwOrYLKt9sdpJ%2FmiKcJCUlB47WQGGUuppyTXfjrekZSeZdqaEyiTb8GYJWBDqbGs%2BpkrtMbbige%2FGpJ8yS9k039R9FUKZE9mSKe9hybaSuztu%2F%2FNleSDTrBdtdaKXIipRd8Ym0WXzjqKe3CkxOY5c5%2B0t09%2BuWpcJV8k72kGe7oiGo3cVXRBzcZfyxbkn9T9ZNwi5h9ndrcBsQPxDFN1BlA6WwifozT4HCAJDFi8WvPq80d6GD92aumzZ2mZ2X2NqQJfLbDD7jYm%2FBjqkASzfB9MfNWM98s%2BiOe8EZVnZvHScwN%2FHGtD5jCYfEQt48sMoY8jxhgt0H75ez%2Fkqu%2FwWyBLCths6K4%2B4OQW3xQoLIFB8RVDZeEKDREKBlG8RigkhgUL693yESc63szNk1dyKclVM2kJdS176mZfzVQlJJq3YbgAFXacGZjZTTePNu%2BVMEq5uVkf7fh0oIG9zB3r4Rx0X4BMCwc7tZwIIg1QvHvCJ&X-Amz-Signature=f4ce99b204d3362fdd5d758798f76696f73905433de93c2bd58f72d5243e756e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKOJKGT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWKXWojPCMzJJy28W2g8XCWlOMqQ8WvMhteuAfu7UxwAIhAKnXi0Ud9M%2BxCDwDIVgxBxEDr453imqcuolPotX8cFpPKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypsnEsQczsWGduTsEq3APggzujDyymOz1ueNvNkumVsUyYL6Q%2FzpMiGcdDIZ5jBENDXREIhfYH0%2BG2SLxiQaDNdkGPMHnn5qWNRWgDbluQbm9ujfORBZwnC2JN4G9%2F04ievSm%2FNZDLOG%2FkCyI7gmy35qxzOVXByChZXQ0VzFoLNZ9XVRDQVvAoIHjey3%2F0Pwtx1ekZIBLN8e80celNNvlulSdQ0JnYoul6tI6JUq%2BiNHXuOOhS38tDWUO76jytucst7UWqmq%2BCbyjZBCpwNjIzHl4SyHsm3GSlSjAVSBd2qW2EgxV3fQl15BD8OBAsVExGkPw27OvSm4%2BrVYH%2BZSfWJE5A2Xk3ICbSCbIEP2fZgZQdCL1aQYhbL17A6fTCdGMU8fJ1t9NtwOrYLKt9sdpJ%2FmiKcJCUlB47WQGGUuppyTXfjrekZSeZdqaEyiTb8GYJWBDqbGs%2BpkrtMbbige%2FGpJ8yS9k039R9FUKZE9mSKe9hybaSuztu%2F%2FNleSDTrBdtdaKXIipRd8Ym0WXzjqKe3CkxOY5c5%2B0t09%2BuWpcJV8k72kGe7oiGo3cVXRBzcZfyxbkn9T9ZNwi5h9ndrcBsQPxDFN1BlA6WwifozT4HCAJDFi8WvPq80d6GD92aumzZ2mZ2X2NqQJfLbDD7jYm%2FBjqkASzfB9MfNWM98s%2BiOe8EZVnZvHScwN%2FHGtD5jCYfEQt48sMoY8jxhgt0H75ez%2Fkqu%2FwWyBLCths6K4%2B4OQW3xQoLIFB8RVDZeEKDREKBlG8RigkhgUL693yESc63szNk1dyKclVM2kJdS176mZfzVQlJJq3YbgAFXacGZjZTTePNu%2BVMEq5uVkf7fh0oIG9zB3r4Rx0X4BMCwc7tZwIIg1QvHvCJ&X-Amz-Signature=1afd8e63d656333cecd0a2a161897be74c2e92b2b29a1d88ae50a850284b035e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB3JGSE2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9yT4ilgxhIrOAt3oftSIbQzIYql9wOYt0gFa3jaEohwIhALnTizW%2BfXfYE4ihUcHAeoK4UyDsz6fRp40Q4qCVGupFKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf1al8Daeu7fRHkeYq3APd2wEth38H9eXuQx6e8isv3xfJfHoyXR2CZ5302hbAjoLzLr4%2F4VwrRtiOzJQhF0AaTOrR1owS4YB%2B%2Fb2Zz7rwdj5d9oRg9jg7XkgKFu%2BGB4xWaR%2BvbhAaQH%2F5rv4OHN7233%2FKErrK4BKQqUCQjr24kRpe1XKIktV%2Bt7to1%2BPyD60O2BGjxx1d00T3BHXzFvOHzdINqcI%2FWR3S2Pnaxj%2BdgijtZ0XPb2YZo%2F6c3jxuBDoL21eGHWOm0L7WacZQxjPvM4sof5eVzB0c6hpXEnrwFwyP5oDIZAjRybB0%2FU1lDrcgc%2BvgPJKHOT0GKCKPVaOu1WY%2BH6JeDLtMefPeelivo1OymACw%2FK%2F0BWoQOTvVXQUGAdvRdeDv%2FXjIIYj5JhxCSzv4DVULdtaafu1rajMqbXWWWiPOvRaLphh6UExDnnxnniD4FkzWs0tDVE%2FMrgRSp6LPqR%2B5RuEFf8dtZJCr7gebgUj4zJfz3LmhGU9gr1mPPFAc9QwDnC58GGQWt8RHo7WZ%2Ftwg6j9NpiSfaL3E2pia%2FR8cdgrvYC2durVru7gfNoW6wA64RHUR4v1HAWdT04TaVmc%2FkDGiVfxDXiFsgMF7WnYL%2FRwsx1lR9iL4LIobQt4rinidoOA%2FTjD2jom%2FBjqkASVlhitn894QmpDL1ethlfikFRSt%2Frz5YZ91KdaQK5YocnZxU%2FUoW8Zjn2YEIA%2Fn7d9CErfBnkrzdsHgWJtuN9voC1G2wPKCFSeSdgwAHgq4KmEcKZjb6XuHXk3gV0Daj9vjPSkZcIRp2ue8bOKIw8nKDHP%2BzDmfvNCxOgJdhSlVrg%2FpUW2vE%2BNpmMnrbMMYYJAs2FzwSLDWFi0PPKfKPxG7tkbQ&X-Amz-Signature=a24a70345fba1c9123ebd58cf15fd90b3b05664b443ef54b29a58fa6d3ae41b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GX2GW2L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9qequRd1kvM4IN3lefhir6Vc53j3lPw5tNlyMrDmWRwIhAIB7jSD%2BkIu3bF1lTx3WVHN4g3D7bLq0su4GmhZI6qhbKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTeIVvvzvAp4JQizsq3AOWT5Em6kYMJ77DE8lChL9sdUOZBXAqEOQ9F%2FpEZr5lxpLvo8OYOGmEjKgn%2FV%2BpCWO%2FCwgzvNfCy0zX2JK5kizcGFIbi6vcAB7VlN7%2BJS1rLHpjD1IWagFJoagBz9iE0IwfsV%2FtRRDApKqPcD9be9ojoKqduURlA1kRQb1JJGVVYV58kG83Z1A6U184pDys1BYtYCsH324j6Gwl2B0Oc8%2BO%2Be0en4mAkaW8DKvg%2BP3d8glwcldbg1y%2B5CVFhoeTlmMXx0oTvzDEncC23wsrUHCr9hPh8smWniU1JqWuJLMvqVPdE6kb6%2F9wOqHI4Ig5wRmcQHTsYm6RuC57lQKM0kMCm2uQRxmClPsw4%2F6IRNKmCpSS%2F0MsXSIve%2BwNsd%2FPS%2FwEkp1vlbZ7hpuELvSXfWYCNId9oRPPT06GqEifTvyojEy7jLfyV%2BeX8Izv%2BC0VniohpfJDBH8LMcs64Qga%2BJLvcDOkMIrfV9tUpLoILZekkbpXw4q05TWoX63ABmyo%2FwHXUXhE2z%2FObOhJOaeb6dlAvM3h16NTIGSAEO8nAYAeZ22uqDYVqYT9afPIOLT02mmkvX%2B%2BCtSUdqTEn7qb8B1NarV%2BVz9Bgd3FxEMQ0yylQVzGsdwn1ClQ7NUv9TCIjom%2FBjqkAWmdbln211nGQgPo3iUPd94ByzFIHBRl09YDBVBtiTP0%2FXIIb14Ya3zMw2iJZ20aJphD6W8cSDhIgkupAOU0Uxi8y%2BGdXkmdjlHVj30ZMMjmhLwwAq47y93E2rM%2B7W4y2FHUC86kQejjFKL77u8idwtkHk6vEOMYZey%2Bus76Q41s1du4ENgEGKfZkU348c%2FHQgugV0%2BrRGaQzjZaYLqP%2B1cskb4b&X-Amz-Signature=804f58c7010e4674c79db593e896b2de40a7902f662c196238e1379eda3c2ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKOJKGT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWKXWojPCMzJJy28W2g8XCWlOMqQ8WvMhteuAfu7UxwAIhAKnXi0Ud9M%2BxCDwDIVgxBxEDr453imqcuolPotX8cFpPKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypsnEsQczsWGduTsEq3APggzujDyymOz1ueNvNkumVsUyYL6Q%2FzpMiGcdDIZ5jBENDXREIhfYH0%2BG2SLxiQaDNdkGPMHnn5qWNRWgDbluQbm9ujfORBZwnC2JN4G9%2F04ievSm%2FNZDLOG%2FkCyI7gmy35qxzOVXByChZXQ0VzFoLNZ9XVRDQVvAoIHjey3%2F0Pwtx1ekZIBLN8e80celNNvlulSdQ0JnYoul6tI6JUq%2BiNHXuOOhS38tDWUO76jytucst7UWqmq%2BCbyjZBCpwNjIzHl4SyHsm3GSlSjAVSBd2qW2EgxV3fQl15BD8OBAsVExGkPw27OvSm4%2BrVYH%2BZSfWJE5A2Xk3ICbSCbIEP2fZgZQdCL1aQYhbL17A6fTCdGMU8fJ1t9NtwOrYLKt9sdpJ%2FmiKcJCUlB47WQGGUuppyTXfjrekZSeZdqaEyiTb8GYJWBDqbGs%2BpkrtMbbige%2FGpJ8yS9k039R9FUKZE9mSKe9hybaSuztu%2F%2FNleSDTrBdtdaKXIipRd8Ym0WXzjqKe3CkxOY5c5%2B0t09%2BuWpcJV8k72kGe7oiGo3cVXRBzcZfyxbkn9T9ZNwi5h9ndrcBsQPxDFN1BlA6WwifozT4HCAJDFi8WvPq80d6GD92aumzZ2mZ2X2NqQJfLbDD7jYm%2FBjqkASzfB9MfNWM98s%2BiOe8EZVnZvHScwN%2FHGtD5jCYfEQt48sMoY8jxhgt0H75ez%2Fkqu%2FwWyBLCths6K4%2B4OQW3xQoLIFB8RVDZeEKDREKBlG8RigkhgUL693yESc63szNk1dyKclVM2kJdS176mZfzVQlJJq3YbgAFXacGZjZTTePNu%2BVMEq5uVkf7fh0oIG9zB3r4Rx0X4BMCwc7tZwIIg1QvHvCJ&X-Amz-Signature=e4ba1cb18d93fda43668d2ca091c3e8e0b8d89f3091b07d5a3d289b3ccd05067&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
