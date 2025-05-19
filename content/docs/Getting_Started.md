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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGEK7CT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBOC7HWsfXCz1V7TmSITMrffa80yRgIvXVNbProiMcKAIhANaEjKQtBz393w2956y%2B2M1BrrhymlZfCm%2Fhcyaay5ZgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghpd0EmQzRFiKkLEq3ANkLfJAjkH%2FBqejO6kKs5wAo5lqrDYNXX31QIU25S%2B20%2BVD3ssdOi6U9rVQWDeAvJFPOtwmPIddsskrq2K%2B%2BhJlO4kAdZpvr46l%2FEaotaR3RPDO3OL1yFYvb2ABNVSkCkoaceSxv1di9rZOzeYJN77xCNSxrpPePQvK88O0wFjCNpb80Q5XnXwUoozKBG6fX8Di0Plo4MOfHf6cDK4WQ3dfVdsH7INx7jj3T3lpJROlJpsoFEPh9ef%2B0kyb9%2BKr4%2BBkjNEQPR9TDoplqz5noJkYvmyIdYi8SW82lSD5U4b%2FF6pWuzrwa1jHDurXootsvA1PtMpFGRFx7rPqvDH2uZJoZ3ECs8RX%2FBmIyshGF6ioHdTChbdrw5mtcBCDo%2B%2FpsCUtt%2BuYkhWyEpralf26bNVk8PaBpvGe7hystpcCDRtzSc%2FI6oH%2B2BNokSTYLUZ%2BTnDjtdbTVmkZ1Gr9AXn5z1KT0znR7S3vmkqGZZBR4pCrmlGg5B2us6N%2BLSDccxMpcYFHWLXUq%2B6pYk1qYOcG8yoZVEV%2B3zQA70pipF8Go5QiZkP2C%2BY3GG%2BngK4vAcYqpB84lClUYNyCSjCZp5rezbYJ9o5i8Gu%2BEOVuIPCKC1FclC2uZu5dh1qk3QAgIzC6uqvBBjqkAe0mr77hNtFPQj%2FtkClHiaYrMSaeCCQJs6SchQrFul6IsEUsOTOXRRWlYqPun%2FTusxitiNQkYH8sA5D2toNahD8tmiCKSI0IfdBC%2B0xl62WNwU%2FmwXrFgQqmZOtSa%2FvfC7uQUKqvWy1NcVX2L%2Fv4kaB7oV63KPDUl0e6liQauRkgAUR7vdmiD86kr9C6TW0gJ2rvJv3nFrKHFC6jg0dlTJfoOfXD&X-Amz-Signature=4748ab029d9e1af58f71a7b4325661be4e650c59a3074c2b2526a4a94efca580&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGEK7CT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBOC7HWsfXCz1V7TmSITMrffa80yRgIvXVNbProiMcKAIhANaEjKQtBz393w2956y%2B2M1BrrhymlZfCm%2Fhcyaay5ZgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghpd0EmQzRFiKkLEq3ANkLfJAjkH%2FBqejO6kKs5wAo5lqrDYNXX31QIU25S%2B20%2BVD3ssdOi6U9rVQWDeAvJFPOtwmPIddsskrq2K%2B%2BhJlO4kAdZpvr46l%2FEaotaR3RPDO3OL1yFYvb2ABNVSkCkoaceSxv1di9rZOzeYJN77xCNSxrpPePQvK88O0wFjCNpb80Q5XnXwUoozKBG6fX8Di0Plo4MOfHf6cDK4WQ3dfVdsH7INx7jj3T3lpJROlJpsoFEPh9ef%2B0kyb9%2BKr4%2BBkjNEQPR9TDoplqz5noJkYvmyIdYi8SW82lSD5U4b%2FF6pWuzrwa1jHDurXootsvA1PtMpFGRFx7rPqvDH2uZJoZ3ECs8RX%2FBmIyshGF6ioHdTChbdrw5mtcBCDo%2B%2FpsCUtt%2BuYkhWyEpralf26bNVk8PaBpvGe7hystpcCDRtzSc%2FI6oH%2B2BNokSTYLUZ%2BTnDjtdbTVmkZ1Gr9AXn5z1KT0znR7S3vmkqGZZBR4pCrmlGg5B2us6N%2BLSDccxMpcYFHWLXUq%2B6pYk1qYOcG8yoZVEV%2B3zQA70pipF8Go5QiZkP2C%2BY3GG%2BngK4vAcYqpB84lClUYNyCSjCZp5rezbYJ9o5i8Gu%2BEOVuIPCKC1FclC2uZu5dh1qk3QAgIzC6uqvBBjqkAe0mr77hNtFPQj%2FtkClHiaYrMSaeCCQJs6SchQrFul6IsEUsOTOXRRWlYqPun%2FTusxitiNQkYH8sA5D2toNahD8tmiCKSI0IfdBC%2B0xl62WNwU%2FmwXrFgQqmZOtSa%2FvfC7uQUKqvWy1NcVX2L%2Fv4kaB7oV63KPDUl0e6liQauRkgAUR7vdmiD86kr9C6TW0gJ2rvJv3nFrKHFC6jg0dlTJfoOfXD&X-Amz-Signature=8890d7dd8b8d86694c779eb6ec30aca7bcd4cfbf0bf69dc48fe2b9cacc3d4f01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGEK7CT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBOC7HWsfXCz1V7TmSITMrffa80yRgIvXVNbProiMcKAIhANaEjKQtBz393w2956y%2B2M1BrrhymlZfCm%2Fhcyaay5ZgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghpd0EmQzRFiKkLEq3ANkLfJAjkH%2FBqejO6kKs5wAo5lqrDYNXX31QIU25S%2B20%2BVD3ssdOi6U9rVQWDeAvJFPOtwmPIddsskrq2K%2B%2BhJlO4kAdZpvr46l%2FEaotaR3RPDO3OL1yFYvb2ABNVSkCkoaceSxv1di9rZOzeYJN77xCNSxrpPePQvK88O0wFjCNpb80Q5XnXwUoozKBG6fX8Di0Plo4MOfHf6cDK4WQ3dfVdsH7INx7jj3T3lpJROlJpsoFEPh9ef%2B0kyb9%2BKr4%2BBkjNEQPR9TDoplqz5noJkYvmyIdYi8SW82lSD5U4b%2FF6pWuzrwa1jHDurXootsvA1PtMpFGRFx7rPqvDH2uZJoZ3ECs8RX%2FBmIyshGF6ioHdTChbdrw5mtcBCDo%2B%2FpsCUtt%2BuYkhWyEpralf26bNVk8PaBpvGe7hystpcCDRtzSc%2FI6oH%2B2BNokSTYLUZ%2BTnDjtdbTVmkZ1Gr9AXn5z1KT0znR7S3vmkqGZZBR4pCrmlGg5B2us6N%2BLSDccxMpcYFHWLXUq%2B6pYk1qYOcG8yoZVEV%2B3zQA70pipF8Go5QiZkP2C%2BY3GG%2BngK4vAcYqpB84lClUYNyCSjCZp5rezbYJ9o5i8Gu%2BEOVuIPCKC1FclC2uZu5dh1qk3QAgIzC6uqvBBjqkAe0mr77hNtFPQj%2FtkClHiaYrMSaeCCQJs6SchQrFul6IsEUsOTOXRRWlYqPun%2FTusxitiNQkYH8sA5D2toNahD8tmiCKSI0IfdBC%2B0xl62WNwU%2FmwXrFgQqmZOtSa%2FvfC7uQUKqvWy1NcVX2L%2Fv4kaB7oV63KPDUl0e6liQauRkgAUR7vdmiD86kr9C6TW0gJ2rvJv3nFrKHFC6jg0dlTJfoOfXD&X-Amz-Signature=613cd9bca0d27ae177ebc4bfcfa5de3e2dd0c418e042437db91207423ff5fa9c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELWZ353%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsOjdAX3VEUhVnD8y7OAOhnZ5PcKq5NJkipXj09PmtRgIge0F97UqdJbBj%2B66UaepdMlEi4CUesIPvZmZ%2BnGReg6IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjXESItQGz7L0n40SrcAzhKX5HFuyqZRtpKmR413bNTAFTwJjuReVoklznxxHoZSvCMRcjq3lbZWshhCYhPB8rejaxxgawovGhsdbHkvHhC6IrXCArM34MBTivyUtMzEOlmlBYb0s0UADAjX%2FmnP8MY4HtxVAir4WCGilCMICxIiQxEmrWXFMGOP6Q%2Fmy7%2BIGUBh6qHpVzVEUKzMDI4MpAaw1mDm6NumdvS1%2F0d0ArEfxnWpTJhVKUXtFbvdoBpy5amgQr9lwq84GuYGGBXJTPIdU0OY10%2B7ZoEX%2BkPOtRUjnMrl%2FDH%2FlUxGC77rc0JU2n1ALB0231F90Xn%2BBmlqiMN3IAV%2FEWvknAlai7%2Fbd7XlQeesqtpIOsfZ8fdxLA0%2BtFeiZFf42Sd7bHILs9xBkUsE6lrPxU46Zm3iVW1H4ljOEiR2WoV178CRQAGeHLxg5fhxRFGAK7Ljk3zk015Lv%2Fjhhv19QVuf%2BKWxuJWYdqVR%2BJt6SHmPSfDsd%2Fvz%2FPUx783KW735juTdpR59doR%2FT8dCN1KNAu26FwcD1dVXHF5%2Bk7C8QVH%2BBOlsDWMLP7i%2B7b9d%2BPA092VnjWHevogNvG%2FMf15gikDhYYHTFw1Uk3U9h9%2B%2FkpFUOMK5tSIxNM004yzIaWF1Crln5uvMPC5q8EGOqUBgVKKrmkWBbfJVSFCrmUbDs3Bh%2FlgtpJ%2FyZnR1pgnX0ytA8PKtdS8gW1Y4xzZ0JDQ22jNokGLiVVHIIA%2F4bpbdM6rGUJnHjq%2FUhXmeCpTuSNf9ql3Pw7Fju7VyIOPVwYpZFGCRO1v5dLwVbcb0%2BK9J5xYYEoCySndaqce52N0Se2ZVLlcePP2Q5vikbF542FSIA1zLZ9eAEOmaKusc0GBqVIayT09&X-Amz-Signature=6b35f134bc51ae8fa4bf89b652daa44165995207f3d92730548bb80aead89db4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSQEESJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjtDJPT7qUB1hEpO5ly3NbEOpFApxHE8SkBuedg%2BqCiAiAOmuRD%2FWvadnQukaRiVOkeBAaE%2F9sA9rZT69j%2Ff8j%2BICqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO5VsUHuQwum9Jr2KKtwD1k70HdaDmI8N4v0oddykAzGxy76VAcPyqUeCTKJ%2FgyGuLIPvlJx2hhF5FMO9bm36WQwKShtn3us8o%2Fl6kbsYuUaGKzGuy8LXeWmMYtPQqMP0KBZHZ98pilFoetTgv9vA5MBC6NgBG8QvjB0UD4xVPYz4Qp6tMDykgZZnWnW%2B2PXLNe0eACTS4FE5rwsFKNfKvpbEztu2HhiWcyha0aFkJiDXgIcGicA7oCydrqtnWDclDSgRdJMb5oJsMGTw43pv0dS0xuw3AUElzYycRo3ri1An0Lab3Qhaui1Xpq%2FYs1Xe6i9pr9kTTjJUjT48u%2BQJkpwvSrnq%2Fu3oADgRx7q3RoqMRB0e0dFz6sC15CaqYAd1Z%2FDEjyGZFAr7Oe5MNW%2Bbtqb1bXIfjqwRyhi%2Bqv2VWiVAFd0cCS55ki9kLBnS8xCKfsq9on%2FlHcJOdAeJrIQigYAozfZMzyv%2BEbSDZTDbhGNfBzUKb8WrF6x0bXHClqMG1z3M4PpbGXgu57CyTsAjmF%2FbaAJkurHN7R2BY2bnJ%2FkGcCGuwtloezzYR2pHwc6RMkcb%2BsPTAw9CHHvZc5ti%2FTElYrP5bi8Q1zC8w0w8QRoQxvdn5pnjL%2BPa5E04I9UgHH5VYnvdO58xDpYwgsWrwQY6pgE7e2GksG%2Fq6p8rlcKHRjhVq6%2BBY2LoOdQAJAqq0bCoHcKLuQpD60aDeej8reR2n5jQJKcPUM4RK%2F6YDhUGDIlA9OpO1y%2FFZj8u6TNfyJYkbS%2FXSecFrQpb%2Ft8hygjuZAt4MaGWerQLrW3dq%2F6XqJfl%2FbxkCDWc3XhjAG2xxaMvhotWKPYgOk%2F%2F4BBx518HKAujVNwdjxbGzhC4GKR4pSfp5WDwhHTX&X-Amz-Signature=b4eaaf462143edf9b1707990e6ab3c61f4116e75a961776a3c00877355d8e0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGEK7CT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBOC7HWsfXCz1V7TmSITMrffa80yRgIvXVNbProiMcKAIhANaEjKQtBz393w2956y%2B2M1BrrhymlZfCm%2Fhcyaay5ZgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwghpd0EmQzRFiKkLEq3ANkLfJAjkH%2FBqejO6kKs5wAo5lqrDYNXX31QIU25S%2B20%2BVD3ssdOi6U9rVQWDeAvJFPOtwmPIddsskrq2K%2B%2BhJlO4kAdZpvr46l%2FEaotaR3RPDO3OL1yFYvb2ABNVSkCkoaceSxv1di9rZOzeYJN77xCNSxrpPePQvK88O0wFjCNpb80Q5XnXwUoozKBG6fX8Di0Plo4MOfHf6cDK4WQ3dfVdsH7INx7jj3T3lpJROlJpsoFEPh9ef%2B0kyb9%2BKr4%2BBkjNEQPR9TDoplqz5noJkYvmyIdYi8SW82lSD5U4b%2FF6pWuzrwa1jHDurXootsvA1PtMpFGRFx7rPqvDH2uZJoZ3ECs8RX%2FBmIyshGF6ioHdTChbdrw5mtcBCDo%2B%2FpsCUtt%2BuYkhWyEpralf26bNVk8PaBpvGe7hystpcCDRtzSc%2FI6oH%2B2BNokSTYLUZ%2BTnDjtdbTVmkZ1Gr9AXn5z1KT0znR7S3vmkqGZZBR4pCrmlGg5B2us6N%2BLSDccxMpcYFHWLXUq%2B6pYk1qYOcG8yoZVEV%2B3zQA70pipF8Go5QiZkP2C%2BY3GG%2BngK4vAcYqpB84lClUYNyCSjCZp5rezbYJ9o5i8Gu%2BEOVuIPCKC1FclC2uZu5dh1qk3QAgIzC6uqvBBjqkAe0mr77hNtFPQj%2FtkClHiaYrMSaeCCQJs6SchQrFul6IsEUsOTOXRRWlYqPun%2FTusxitiNQkYH8sA5D2toNahD8tmiCKSI0IfdBC%2B0xl62WNwU%2FmwXrFgQqmZOtSa%2FvfC7uQUKqvWy1NcVX2L%2Fv4kaB7oV63KPDUl0e6liQauRkgAUR7vdmiD86kr9C6TW0gJ2rvJv3nFrKHFC6jg0dlTJfoOfXD&X-Amz-Signature=7db55ed3b4c5382ca399cf115ba65a5d636342af54da3b1b6e0f60cf5d0bfce0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
