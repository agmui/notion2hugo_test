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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMBYWXN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA42RNrjqkWznX5hXgYTRm9KrUm%2BKXbUhOPS3M1lDvHLAiBqQRvtnjondyCpJVrlpqxlNwgH%2BjtsVufybJWbibiwsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK8pzvL%2FCLVLAu7iEKtwDKjYOg9gJ0%2BqjvvxbUk8kYl%2Bb%2BQOrsiOFxM9C%2BuKkzDqG6ulnxhR17RsJQN5u5vl8OTHoqsYvFeoF8ty84F%2BMkGJOrK1pF5WlJYkbzfzB7k69%2FqiysSKc7L4OCh2nizSn7V%2B8k56V1u7ZUIaMvge%2BOETpUPmTZIqjnqrWJldnrrsYCp8OMiRkmfMJ%2Fb18IT%2FyERgCc9coyipHqjEhO6JSm4cpJk26hVmHRLwa1jpVwBt5ZEqf%2ByKrocZeEFiiFj9GxoDXz8zWX%2BqdnedZdfVXCLlCC3uXOUJd4NjEc4tfyuvKXqEk0Ngj2vd8dr%2BJXJc%2FhB88dfI2u7zGOGeEQ2iMnOziaEe3hIgQABYweW%2F3bIDTFCeEwu45r8XaYSSZ5yZGgOPVNiPcTLg2Fm%2Fad%2Fvk3ptgo8jEaXfR8VtNjOdncq4PmsP9fZiR4X8DwFJ9MuWC%2FSGLIa%2Fei58HZw0w6%2B56qNuhJyLI%2F3gvu5aRJrpBbIvNJnatQoxaOpeX%2Fs6PBx3bCe0Rce5QrMAOYibUsSvpJuP4OP%2BJF9elpsl45jadwSd%2BOqMxGBFIWEGQ7kiL1oCJN6Vq745N53V8w%2FerrK1wYBQBKPHRuJH%2BeREEDMp1UHsJueGFbZgb7PWFEgIw6qK4wQY6pgGH%2FAl4ABxMpPY8hMTtItvBK9oqvAaEIGfPPy85XDSfUI5ORV%2BsFkno34gkv9saB9Dj548sbKmS6s84iqObggLAfwSdwoL7G0V%2FURD1X3Vtil0zCtnJ13e5SpGSJgAeqlUioQAHYiE0%2BJ3to7W90yf4z7BfLxrL%2B0VLyGcaOG6l%2F5A5ckX%2FppyH%2BLO%2BjKfDaLlzZq64x5tFgE3NsvokhUU3azBxbsTV&X-Amz-Signature=fc06e80c40600c3fb2dd187533e99714426f3850945ddaa6babda55a91ca6b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMBYWXN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA42RNrjqkWznX5hXgYTRm9KrUm%2BKXbUhOPS3M1lDvHLAiBqQRvtnjondyCpJVrlpqxlNwgH%2BjtsVufybJWbibiwsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK8pzvL%2FCLVLAu7iEKtwDKjYOg9gJ0%2BqjvvxbUk8kYl%2Bb%2BQOrsiOFxM9C%2BuKkzDqG6ulnxhR17RsJQN5u5vl8OTHoqsYvFeoF8ty84F%2BMkGJOrK1pF5WlJYkbzfzB7k69%2FqiysSKc7L4OCh2nizSn7V%2B8k56V1u7ZUIaMvge%2BOETpUPmTZIqjnqrWJldnrrsYCp8OMiRkmfMJ%2Fb18IT%2FyERgCc9coyipHqjEhO6JSm4cpJk26hVmHRLwa1jpVwBt5ZEqf%2ByKrocZeEFiiFj9GxoDXz8zWX%2BqdnedZdfVXCLlCC3uXOUJd4NjEc4tfyuvKXqEk0Ngj2vd8dr%2BJXJc%2FhB88dfI2u7zGOGeEQ2iMnOziaEe3hIgQABYweW%2F3bIDTFCeEwu45r8XaYSSZ5yZGgOPVNiPcTLg2Fm%2Fad%2Fvk3ptgo8jEaXfR8VtNjOdncq4PmsP9fZiR4X8DwFJ9MuWC%2FSGLIa%2Fei58HZw0w6%2B56qNuhJyLI%2F3gvu5aRJrpBbIvNJnatQoxaOpeX%2Fs6PBx3bCe0Rce5QrMAOYibUsSvpJuP4OP%2BJF9elpsl45jadwSd%2BOqMxGBFIWEGQ7kiL1oCJN6Vq745N53V8w%2FerrK1wYBQBKPHRuJH%2BeREEDMp1UHsJueGFbZgb7PWFEgIw6qK4wQY6pgGH%2FAl4ABxMpPY8hMTtItvBK9oqvAaEIGfPPy85XDSfUI5ORV%2BsFkno34gkv9saB9Dj548sbKmS6s84iqObggLAfwSdwoL7G0V%2FURD1X3Vtil0zCtnJ13e5SpGSJgAeqlUioQAHYiE0%2BJ3to7W90yf4z7BfLxrL%2B0VLyGcaOG6l%2F5A5ckX%2FppyH%2BLO%2BjKfDaLlzZq64x5tFgE3NsvokhUU3azBxbsTV&X-Amz-Signature=83be9d50b4973395618100bad1e4864b17d4080626aa68cb0f300f9f8272cf5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMBYWXN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA42RNrjqkWznX5hXgYTRm9KrUm%2BKXbUhOPS3M1lDvHLAiBqQRvtnjondyCpJVrlpqxlNwgH%2BjtsVufybJWbibiwsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK8pzvL%2FCLVLAu7iEKtwDKjYOg9gJ0%2BqjvvxbUk8kYl%2Bb%2BQOrsiOFxM9C%2BuKkzDqG6ulnxhR17RsJQN5u5vl8OTHoqsYvFeoF8ty84F%2BMkGJOrK1pF5WlJYkbzfzB7k69%2FqiysSKc7L4OCh2nizSn7V%2B8k56V1u7ZUIaMvge%2BOETpUPmTZIqjnqrWJldnrrsYCp8OMiRkmfMJ%2Fb18IT%2FyERgCc9coyipHqjEhO6JSm4cpJk26hVmHRLwa1jpVwBt5ZEqf%2ByKrocZeEFiiFj9GxoDXz8zWX%2BqdnedZdfVXCLlCC3uXOUJd4NjEc4tfyuvKXqEk0Ngj2vd8dr%2BJXJc%2FhB88dfI2u7zGOGeEQ2iMnOziaEe3hIgQABYweW%2F3bIDTFCeEwu45r8XaYSSZ5yZGgOPVNiPcTLg2Fm%2Fad%2Fvk3ptgo8jEaXfR8VtNjOdncq4PmsP9fZiR4X8DwFJ9MuWC%2FSGLIa%2Fei58HZw0w6%2B56qNuhJyLI%2F3gvu5aRJrpBbIvNJnatQoxaOpeX%2Fs6PBx3bCe0Rce5QrMAOYibUsSvpJuP4OP%2BJF9elpsl45jadwSd%2BOqMxGBFIWEGQ7kiL1oCJN6Vq745N53V8w%2FerrK1wYBQBKPHRuJH%2BeREEDMp1UHsJueGFbZgb7PWFEgIw6qK4wQY6pgGH%2FAl4ABxMpPY8hMTtItvBK9oqvAaEIGfPPy85XDSfUI5ORV%2BsFkno34gkv9saB9Dj548sbKmS6s84iqObggLAfwSdwoL7G0V%2FURD1X3Vtil0zCtnJ13e5SpGSJgAeqlUioQAHYiE0%2BJ3to7W90yf4z7BfLxrL%2B0VLyGcaOG6l%2F5A5ckX%2FppyH%2BLO%2BjKfDaLlzZq64x5tFgE3NsvokhUU3azBxbsTV&X-Amz-Signature=10e7262de25926e2cbb0354b7f4a0c40cfc58dbc68ecd5fceae127c5fbf2f8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAD2GQKB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICzWBd27usfV%2FQcrygQdu4yzcFuuHW9DEzD87U0iWmJpAiAxSSV134DduCQcPNQwPsgTFm3m%2Bfu7jzPqhFdFoAGFIyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZL68rNodM5T6Y17hKtwDCW1oRlUP3u5nzr%2Fu1uad%2F4zRLjo4s%2BEHI4cg4A18SjMV7lqJSFVHoY3E3KmLDh4ak8L7HyqQiY4tCj1y17yNvbb%2BktIozh%2F%2B2LN947v3wNvEbvGxj89i%2B1vCwbYG6G2lSAHeLOGDdmBslpqzquU2p6HbgqimtRRK1gy1GEOrStZsRbY30abNQAuyCjTEBjrkCGFnO%2BpH8Nk5T%2BnFebztW7HXcqTM60z1vIzjv706J6hu8jqJjqrnh%2BYV2Kq%2Fz162sEKyG838dwjdOBEwqjjqOK28EyI0Ji9T52ENiiTVkoVUasc64e0LXetisyweOyt%2Bvx%2FXJPgSV3tlztmCzCysWQ8MoBflxz%2By8HbAf77R%2Bc8E2vycYdcDeIzyNfsSPb1KP6X10Tnj2bBH6Qj0mOPMu80nKkMtTnl9yvg7peH5RYNsOtTPxzQnUJwg7aTTl5w7IQm9lSgBdHFunwALE%2BZuhG%2BIzmbc23y91T%2BMLmIdNJSbHThxDAIg1x4MW2czR3bkayyI36yHhcnrhzk%2Fi8UuZEHk46VrJJHYzpWhRwnvs09gQo1o54cA5wE%2B3mlsnxXOZqLrdXRSBGHdF1h9hG9so%2FKRhzP7vxzcqntuVvEXW073l61JaiDfFaffRYow6aK4wQY6pgFZI1f2C4zIdfgC2pnnzanvrI6qyKNodCHIktQd%2BA5T4IR441C0q%2Fi8Z5zxXuLghuYjyKfrgf3NA0vhF%2BpKs5uk5CTbCv1SCriIPHBbHrUe%2BcvqGWn37mJGi3ark9RHh9NkDZQcrdTiC0Rq2Mqd5TB9uO%2BO3Sl9keeV3FbN6VDEqY1pR0XqKcXk%2BhSG6wWirs1DNNYdpVdtoCkVsT8gyKomax418du9&X-Amz-Signature=f1993ec26b0994e688430e3c51bb2f881496086e7b398e893f1f03b7ac9ecb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIJKNJE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD55dpSRntdc5B8v2ZhfgxSFU%2Bfenul96UjBbUEVjw1%2FQIgcvHT38NUnIuGF1dL2JerS6DlqCNLri8JbChS9MWBfZUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAecOUO6WZVCSLH8TCrcA8y0bZV7oyRMSridIBjoFkO0nsw5aoH94FpH%2BgPZJUF6dEcFjyPz7%2FcVLYJHelUp3JsczeO4gC05%2Bk8Y1ErlQf2IbdlVY6G7AZjvS0As7fBZDcaMZwYmRlxXviFe5f%2BsnI3Pk6mgjEAGNCM6HfVKgrFNeYQidPQpZC6uWd0Ebyx47HSqta1%2BxUhN3guQ%2B%2FfNhrU8T3qi7drVywV%2BGOJae736lygSlvz357Ti1zlfqynBy34DkP1wCRIyY5BfRS2mte0BNw20IRubL%2FWmka9RhImfZld81gMNvVdBRTqK%2FvmjEwRU4K9%2B3VwvBuUo1sd9VUD1wA%2FHPG%2FjJyqViWiwSovctdld0GqIunXsBf6Fchx7X9gcZLnxxFRLzxtTfFNhtnRVOMXhqEgk8HgYrpupZfRX9Q7xUDnNk7jfJWhncF8hTakCbHhzJYzgQTw4rfTlErneZ97TkK1IWUhSQHByQ3X%2BJRd4oIArYlCmO3AlRKNtHM7sGp9mpXYGf998VG%2F20yJlQsSUPt3BRGL0b3UVE84gbl3cB%2Bz81RGAm%2FJ6nkmek%2FZAarNH%2FHBF3vnHiRzZsO3I2VycoItBQDy4NWZ65amxKU4BcDeTKkERuV4g5rLJ368LxNa%2FrKc%2FjydZMLmiuMEGOqUBXsV01XqK7Ziukq%2B5Sf8h%2B%2BSTYo8B%2BsHBr77pB14TrGjqOeRfhtAITt1oGx6qnNz1%2BqlJBT9NzOjXDsKmPwFmlOKjyKAXpV9pDCvp0VS9ZMAGdVCuwyFnwr%2F8iTVW0quFB3h5pg79bjMOHWXETUmqG%2B1mHvMWDkFmFDsLfBS8LXY%2BwZrbz1L%2FHnWcEfFArXdJFMPJ34IegtzrFcRr98dXzJV8hqdP&X-Amz-Signature=52d0ce4448f1e983c4d66082f30911916700d7e4ae7105f2db9064f6df1c5217&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMBYWXN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA42RNrjqkWznX5hXgYTRm9KrUm%2BKXbUhOPS3M1lDvHLAiBqQRvtnjondyCpJVrlpqxlNwgH%2BjtsVufybJWbibiwsyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK8pzvL%2FCLVLAu7iEKtwDKjYOg9gJ0%2BqjvvxbUk8kYl%2Bb%2BQOrsiOFxM9C%2BuKkzDqG6ulnxhR17RsJQN5u5vl8OTHoqsYvFeoF8ty84F%2BMkGJOrK1pF5WlJYkbzfzB7k69%2FqiysSKc7L4OCh2nizSn7V%2B8k56V1u7ZUIaMvge%2BOETpUPmTZIqjnqrWJldnrrsYCp8OMiRkmfMJ%2Fb18IT%2FyERgCc9coyipHqjEhO6JSm4cpJk26hVmHRLwa1jpVwBt5ZEqf%2ByKrocZeEFiiFj9GxoDXz8zWX%2BqdnedZdfVXCLlCC3uXOUJd4NjEc4tfyuvKXqEk0Ngj2vd8dr%2BJXJc%2FhB88dfI2u7zGOGeEQ2iMnOziaEe3hIgQABYweW%2F3bIDTFCeEwu45r8XaYSSZ5yZGgOPVNiPcTLg2Fm%2Fad%2Fvk3ptgo8jEaXfR8VtNjOdncq4PmsP9fZiR4X8DwFJ9MuWC%2FSGLIa%2Fei58HZw0w6%2B56qNuhJyLI%2F3gvu5aRJrpBbIvNJnatQoxaOpeX%2Fs6PBx3bCe0Rce5QrMAOYibUsSvpJuP4OP%2BJF9elpsl45jadwSd%2BOqMxGBFIWEGQ7kiL1oCJN6Vq745N53V8w%2FerrK1wYBQBKPHRuJH%2BeREEDMp1UHsJueGFbZgb7PWFEgIw6qK4wQY6pgGH%2FAl4ABxMpPY8hMTtItvBK9oqvAaEIGfPPy85XDSfUI5ORV%2BsFkno34gkv9saB9Dj548sbKmS6s84iqObggLAfwSdwoL7G0V%2FURD1X3Vtil0zCtnJ13e5SpGSJgAeqlUioQAHYiE0%2BJ3to7W90yf4z7BfLxrL%2B0VLyGcaOG6l%2F5A5ckX%2FppyH%2BLO%2BjKfDaLlzZq64x5tFgE3NsvokhUU3azBxbsTV&X-Amz-Signature=c0d13140fb2437a6612585756da9f21b38634ba0ba01bca9a6f2ffc056e4036d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
