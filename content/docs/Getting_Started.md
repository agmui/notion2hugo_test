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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7PJBZD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbMCluICXkMrkJcDblpjRTo01XyExQp2PTUeUDGScufAiAD5mOI2T5GUp0Q4lFP5FVHp%2F4KSzoXu6jUqpS0aJbStyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMkDbEhGLeZuBNTEXTKtwDjFjxRCj1xamLUEYZOFYqz%2FkI8w8%2BHH1SL9Wq6K3PF%2BrYJaWDuYg5QzpJ3Irgal0VKyJJvnzAbcfnDgsM9DR5LwlDMNcQRTgr7TjUbRfaEQwSwZJKiVMl9ZVMkTASzBuq8UYBt6ZKnJLqtEl22AnwSnfaEKaFnO158PvHQ%2F8qtrq1J9Jj3wI5aiXmK6S%2B7fmrg1kA%2FE7BSsyhzIbHhIctFBJ8wBVd85Ctmc%2F5RJPpaeRMD2ZR0URvTbt870goVTbMpkNJxSuFW9%2FGfuGtpO5ldBdXwIUnFzXAxrdBTUaA8MX9NaONCDtT0TG71WzbD209Zl0Vd9OAdIczFgAIsfDiBrTrJS9ewWbGsxD3sWrQOCfkdpQPv3OuH6fwkA0Fcsrpe6dDEWMGpOtP2sK%2BHQPZXXk4XUPrpXqyqh15ZRk4IZ7rrUMkxW2q45ZA%2Fg8vfThhQeJLNYKWFQ4h7HXCOxkOunKGITU3kzgEt7pUHHgh0GpCfWZxfQkgyckMVZ%2B7IkAQF8i8VJfwc1IXoHLeIxDcjA%2BLxeYxpHnzjxzVLoxlIDvf9BovufB4r0nw%2FWcuAsUAyKNocU1HIwyZugOr6dxv1SDds7Khv7fPDoRlkw7RwdFJ8S%2BaI1QLgZG7SBMw6pmQwgY6pgHysVKB%2FHfxIFArRVvl%2FR4CZ5aMCn6UmXvQmHDSGbAoyaAH9UPV%2B66vKk6DtYNi7xrMeX27hDv%2B3fSNyTfgNkj11QWjBzCLflED6SyLAsUSYqe3ZcEoFWHgQ%2B%2BJRTNuJ5gFS8TYiPp0FKlrkWz3LqlM7NH7jEolqvXEwYFmN4ubXhqB%2FOo83WoPS1lN%2F9eiq7zwQ6kZI4AVqVjhH4srTIB3En3%2F%2BdG1&X-Amz-Signature=122a8a5b85524c3ecf93b2e5575b2044f745e8b8950cfaf164319384209f6e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7PJBZD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbMCluICXkMrkJcDblpjRTo01XyExQp2PTUeUDGScufAiAD5mOI2T5GUp0Q4lFP5FVHp%2F4KSzoXu6jUqpS0aJbStyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMkDbEhGLeZuBNTEXTKtwDjFjxRCj1xamLUEYZOFYqz%2FkI8w8%2BHH1SL9Wq6K3PF%2BrYJaWDuYg5QzpJ3Irgal0VKyJJvnzAbcfnDgsM9DR5LwlDMNcQRTgr7TjUbRfaEQwSwZJKiVMl9ZVMkTASzBuq8UYBt6ZKnJLqtEl22AnwSnfaEKaFnO158PvHQ%2F8qtrq1J9Jj3wI5aiXmK6S%2B7fmrg1kA%2FE7BSsyhzIbHhIctFBJ8wBVd85Ctmc%2F5RJPpaeRMD2ZR0URvTbt870goVTbMpkNJxSuFW9%2FGfuGtpO5ldBdXwIUnFzXAxrdBTUaA8MX9NaONCDtT0TG71WzbD209Zl0Vd9OAdIczFgAIsfDiBrTrJS9ewWbGsxD3sWrQOCfkdpQPv3OuH6fwkA0Fcsrpe6dDEWMGpOtP2sK%2BHQPZXXk4XUPrpXqyqh15ZRk4IZ7rrUMkxW2q45ZA%2Fg8vfThhQeJLNYKWFQ4h7HXCOxkOunKGITU3kzgEt7pUHHgh0GpCfWZxfQkgyckMVZ%2B7IkAQF8i8VJfwc1IXoHLeIxDcjA%2BLxeYxpHnzjxzVLoxlIDvf9BovufB4r0nw%2FWcuAsUAyKNocU1HIwyZugOr6dxv1SDds7Khv7fPDoRlkw7RwdFJ8S%2BaI1QLgZG7SBMw6pmQwgY6pgHysVKB%2FHfxIFArRVvl%2FR4CZ5aMCn6UmXvQmHDSGbAoyaAH9UPV%2B66vKk6DtYNi7xrMeX27hDv%2B3fSNyTfgNkj11QWjBzCLflED6SyLAsUSYqe3ZcEoFWHgQ%2B%2BJRTNuJ5gFS8TYiPp0FKlrkWz3LqlM7NH7jEolqvXEwYFmN4ubXhqB%2FOo83WoPS1lN%2F9eiq7zwQ6kZI4AVqVjhH4srTIB3En3%2F%2BdG1&X-Amz-Signature=0f05af7a7efa738813be644c5cb034561b63a0d6a806a9132b15655e13d2a481&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7PJBZD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbMCluICXkMrkJcDblpjRTo01XyExQp2PTUeUDGScufAiAD5mOI2T5GUp0Q4lFP5FVHp%2F4KSzoXu6jUqpS0aJbStyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMkDbEhGLeZuBNTEXTKtwDjFjxRCj1xamLUEYZOFYqz%2FkI8w8%2BHH1SL9Wq6K3PF%2BrYJaWDuYg5QzpJ3Irgal0VKyJJvnzAbcfnDgsM9DR5LwlDMNcQRTgr7TjUbRfaEQwSwZJKiVMl9ZVMkTASzBuq8UYBt6ZKnJLqtEl22AnwSnfaEKaFnO158PvHQ%2F8qtrq1J9Jj3wI5aiXmK6S%2B7fmrg1kA%2FE7BSsyhzIbHhIctFBJ8wBVd85Ctmc%2F5RJPpaeRMD2ZR0URvTbt870goVTbMpkNJxSuFW9%2FGfuGtpO5ldBdXwIUnFzXAxrdBTUaA8MX9NaONCDtT0TG71WzbD209Zl0Vd9OAdIczFgAIsfDiBrTrJS9ewWbGsxD3sWrQOCfkdpQPv3OuH6fwkA0Fcsrpe6dDEWMGpOtP2sK%2BHQPZXXk4XUPrpXqyqh15ZRk4IZ7rrUMkxW2q45ZA%2Fg8vfThhQeJLNYKWFQ4h7HXCOxkOunKGITU3kzgEt7pUHHgh0GpCfWZxfQkgyckMVZ%2B7IkAQF8i8VJfwc1IXoHLeIxDcjA%2BLxeYxpHnzjxzVLoxlIDvf9BovufB4r0nw%2FWcuAsUAyKNocU1HIwyZugOr6dxv1SDds7Khv7fPDoRlkw7RwdFJ8S%2BaI1QLgZG7SBMw6pmQwgY6pgHysVKB%2FHfxIFArRVvl%2FR4CZ5aMCn6UmXvQmHDSGbAoyaAH9UPV%2B66vKk6DtYNi7xrMeX27hDv%2B3fSNyTfgNkj11QWjBzCLflED6SyLAsUSYqe3ZcEoFWHgQ%2B%2BJRTNuJ5gFS8TYiPp0FKlrkWz3LqlM7NH7jEolqvXEwYFmN4ubXhqB%2FOo83WoPS1lN%2F9eiq7zwQ6kZI4AVqVjhH4srTIB3En3%2F%2BdG1&X-Amz-Signature=f806507ed57e2cb35de5cad5bcfba8387bcd53bf22a44c2889caa873adaf81fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWPOQHV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdEkuLirpiGUcQb305P4%2BgkCtau3bgCdx7JtrmlENqrAIhAIwyBQ8sp837S8y3ij9WDVg5DXdGcpkNcE01DC260WLtKv8DCHIQABoMNjM3NDIzMTgzODA1Igz7gBWbwUF96FYPSLUq3AOsUkD7RXTlCOJQnfYyclibUHfrRXV7%2F8gwgs%2BVT723GgbtE7uII6yKtKW6jxGBgFAVCPfVuHI3RqpwylTft0fda0oFrFC2HQb4hFdI2XE8idKFGC6ygd2IiKpFdGpnwUmg1eRA70C1J3sUYtSr1XNrGAsUqPlB7oT4cjk5%2FoD%2FveKX9LXdc1c2ZluR3du%2BsGIjYIoJMpSkWX10oyLRLgOTT%2FGBWceqfNh9QeMEUwCAgsp%2B%2B6V04%2B3q4tL%2BlVLFWRymwnKlJPfGgGc9pZ9M58Bf7frngDeaSSOGu9vFEnIOX9EFiGNA%2B6fGw1wZHs7R%2BdG4oFQlY%2B7EksdrE7TGPnKHcpcViot49Tk5P1to1nLhY8e7kqG7KrkMOLBAl0qGy7LyWMhYIVQ13C%2FaKnOLz8GD6JOojV7gBAKVCOo6b7DI6FHMInpFUJH3mECER5VPIducFTnKy%2BSPERaawMx0hpknCeTodvzaIwjj9g2vXXIV5lNILoHZDY4ImcNKMWKE5gAZonjbuyuAC8ABGrvPGLh8U81CGrg4jWfqnaqpY6LQNf8Hfcxh0O%2BsCHqu%2F%2FXJ7uaaVtnU0x%2FQK6NxI14tgPCJ%2Fde%2Bwti5CUSereT6uiBSPrkWWO4bHF28%2FgXyuTC0%2Bo%2FCBjqkAR9UYgjtqrEL14dkeSuc3%2B1pdk4L1G20qk4lgBihyk%2FBxkPDxHuqTUAcFfxX4nh53mc7%2BGIomRygvl%2FFuMtGsTUvFvmxCOdEswTj2OeCeOxvcCdDsaH5sVJvWbFie6Wwshiz4hHyumoBs%2Bz1T8bSW9df8iuxRX%2FIBOMOXu6%2F%2FnquGTIFx9uprguorDIn02i%2BPcMQt3%2FZYe%2BKOcPyXP6kuwk9Qoq8&X-Amz-Signature=370cc2f6b03632cb7b6a0077c04385c8a719d23c0ea2d68d0c7748534beed3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPTPFKT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEYNq5xT6WJvBl2%2FLqQRTfU3WMKh%2BS0t2CHxHF%2FiXmIgIhAL3VF0odt0rMsLPU7Q7Xy9s8BMMGVT1AbZWK7HxRXP67Kv8DCHIQABoMNjM3NDIzMTgzODA1Igzle5Wy4Iw%2BAVEx8GEq3APuDipeMBbDOkNzcGFZKi%2FxxONJVQzp63rIjiVWaiL9Q88TrRy827ob710u5%2B7c4qZlZvZ9QlgFE4e%2Foy6fS1xuZpeOtWJKk%2BnwE1EZpWXghBjXZNi3XSMm4D1ivPilT5663XZEJcYMshb%2FI4rPSxm0FHo0UtVmn0BJvYAtafF4X3rpwwfAMIVnj7%2Fx0YEWIOmPOkWT9q4D7Zs6F%2FfEiL5xTgKb%2FgrpqGHkIg29cOmu2rwTfQ8O6KqcRX7VlrdbIeyH6iqaW3vEOvV2%2FFuQHaeLBdxeuJbNn%2FEI2Ufxw2cJ1aNp7TOFF%2BuPriiIyTxgc3391h0ZSyGytofIXz3kcGz6nWDyAYzq2%2BFJhvFX9L%2B5IDE%2FHMEJjBurM9qOV1f%2BDpF89qNowrFGRbsjOCtvOyiI2IF27yLMhivOm1nX8s9qi62H4Epx5s6FoA%2FjxKNmHAOzNXqYQM%2B2f2kaOIMo1lEtjKu0n3QkqwYpl2fK9MY8SEzT2WlbGwcHvbfDmQDryRC8V1K8ynJfjBabvWsXxgRHN5Ntv6uF%2FF0fI3xbde9YJT%2Bv9j6a0O66CYy06FkO2ZwuD%2BGBdE9BQ9Z4GfpuhTWuWNFLNqpjH%2FrdRAiIO2DJmZn%2BzMFbVlZv%2F4aVBDCQ%2Bo%2FCBjqkAR9n4b8vKQ4eF11zwRhM5otzqVlJ8CWjdA8PvgvkhTB%2Bekb1HzvAhvMFgXR8uQbdk7HZbf7yQbRuUhXtchlEIzPR%2B8Swy1c5CwwFh2ZWEWJppTeVNoc09o%2Bdjsqjjht5Sfnqwft6moYrGCVhJataSvyxIBLXjLkdGDjQbxcYs%2B9WvHIlpSVOQXOC3vq0uEYqIbusQuGD4O5kq5k%2F7p%2BA947ABWTH&X-Amz-Signature=66b61b99dd6fc7da2913943a09b57b8820fe5dd87e7eed7e4a63bf5a39db3e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7PJBZD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbMCluICXkMrkJcDblpjRTo01XyExQp2PTUeUDGScufAiAD5mOI2T5GUp0Q4lFP5FVHp%2F4KSzoXu6jUqpS0aJbStyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMkDbEhGLeZuBNTEXTKtwDjFjxRCj1xamLUEYZOFYqz%2FkI8w8%2BHH1SL9Wq6K3PF%2BrYJaWDuYg5QzpJ3Irgal0VKyJJvnzAbcfnDgsM9DR5LwlDMNcQRTgr7TjUbRfaEQwSwZJKiVMl9ZVMkTASzBuq8UYBt6ZKnJLqtEl22AnwSnfaEKaFnO158PvHQ%2F8qtrq1J9Jj3wI5aiXmK6S%2B7fmrg1kA%2FE7BSsyhzIbHhIctFBJ8wBVd85Ctmc%2F5RJPpaeRMD2ZR0URvTbt870goVTbMpkNJxSuFW9%2FGfuGtpO5ldBdXwIUnFzXAxrdBTUaA8MX9NaONCDtT0TG71WzbD209Zl0Vd9OAdIczFgAIsfDiBrTrJS9ewWbGsxD3sWrQOCfkdpQPv3OuH6fwkA0Fcsrpe6dDEWMGpOtP2sK%2BHQPZXXk4XUPrpXqyqh15ZRk4IZ7rrUMkxW2q45ZA%2Fg8vfThhQeJLNYKWFQ4h7HXCOxkOunKGITU3kzgEt7pUHHgh0GpCfWZxfQkgyckMVZ%2B7IkAQF8i8VJfwc1IXoHLeIxDcjA%2BLxeYxpHnzjxzVLoxlIDvf9BovufB4r0nw%2FWcuAsUAyKNocU1HIwyZugOr6dxv1SDds7Khv7fPDoRlkw7RwdFJ8S%2BaI1QLgZG7SBMw6pmQwgY6pgHysVKB%2FHfxIFArRVvl%2FR4CZ5aMCn6UmXvQmHDSGbAoyaAH9UPV%2B66vKk6DtYNi7xrMeX27hDv%2B3fSNyTfgNkj11QWjBzCLflED6SyLAsUSYqe3ZcEoFWHgQ%2B%2BJRTNuJ5gFS8TYiPp0FKlrkWz3LqlM7NH7jEolqvXEwYFmN4ubXhqB%2FOo83WoPS1lN%2F9eiq7zwQ6kZI4AVqVjhH4srTIB3En3%2F%2BdG1&X-Amz-Signature=17f46ee3bbfcccf5731fdc0907ce107932e77ecae8f0bce452637c7d5a2eee39&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
