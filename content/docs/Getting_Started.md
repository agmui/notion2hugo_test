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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ4EXRPX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIG2zP1gyhPBGkP7zu4heFd2SQazs1TUgDAD4bi4s4I%2BdAiBM0AJPBgD4NnJlXiexajB0rZlBfKqj6s6W8ea%2FcMaqfSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsN6L6Ao8QErowTAdKtwD2JFw2twMkzf1vQK84jaRWg1FwWLlz2PIZl%2Fwu3l1dXYwhOSCBe%2BKriyQ6q%2FEZl%2F7vM%2FnkoWDFWVay0%2FcztYrek5z6DflUXp%2Bw%2FOdn2OmrPanlUb8KRUAROckuKcQ1LlwIB1233atSwaZUxYj0C0FmfkqT9OgjHcXXwCpoHbwlTm%2Bf66PTH%2B%2FdEMQGGZB4Qc%2BLgoXQErs8cySWl5Ge0deNq7iT1sQ49RziJod1LuAEmwIrfrzaA%2BO8QoSUu1%2FFLx64IDgYmcmGetSEAXcDC61d6Pr96rf6ZOkFCkQfvyXdMQqKMTrmL7YbrIBCYb742yknFVNI3LYqsJBSB%2FzyFLVrlaO4nxurCoFQ3ejBDiYT6N2JEyqWXlff2VKSUsc57EyjYppDuVk2epQGy4zCVJfnN6Xr0Crorm0IMVzAN949%2Fe2SAQTW14hr%2FZdIVCaza2aXdk5xO4%2F9cunStm5Z%2FqnjJb5yIsuoHtuP4L3303hwj%2BercZMbYYuAELtmDn%2BApuL8TiNfnn9uqdm8qIITYCJ2TUseUEfiyxZYjNGB1Xc4c9t%2BGzlcnjsf2QA69Z8ZB0LlAoa7dxPI1uVBzLgYYxxSrArxzTYcXEDcPUBCJq7hItKODH0COsRSmL5D6Mw%2BsD4wQY6pgGydJjiTF%2Bt6gmI%2Bd5WGBjo6vXvmLT48yMED4jx9GCUuHVm0KuTWBmyg4n39YMfUSYLttc9KzWcK6cdAhSSi0PUtn2UmZURNuOj6FIAyzlhwLYPhMbzs9HqwgqDEqfhOWvWTRiu83%2B9NP%2FJPvAYzfJsskMXqOFGR2E4DO%2BQcyCYJ%2FJkNeALf7jXrBVd1kWFwJ6VhrPEQ%2FLlLJcs5TlSonbqQMCQRXGu&X-Amz-Signature=86ec5763e32546bea364dad70a5906d05e07ac44ff583d3f899099fad9ce7f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ4EXRPX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIG2zP1gyhPBGkP7zu4heFd2SQazs1TUgDAD4bi4s4I%2BdAiBM0AJPBgD4NnJlXiexajB0rZlBfKqj6s6W8ea%2FcMaqfSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsN6L6Ao8QErowTAdKtwD2JFw2twMkzf1vQK84jaRWg1FwWLlz2PIZl%2Fwu3l1dXYwhOSCBe%2BKriyQ6q%2FEZl%2F7vM%2FnkoWDFWVay0%2FcztYrek5z6DflUXp%2Bw%2FOdn2OmrPanlUb8KRUAROckuKcQ1LlwIB1233atSwaZUxYj0C0FmfkqT9OgjHcXXwCpoHbwlTm%2Bf66PTH%2B%2FdEMQGGZB4Qc%2BLgoXQErs8cySWl5Ge0deNq7iT1sQ49RziJod1LuAEmwIrfrzaA%2BO8QoSUu1%2FFLx64IDgYmcmGetSEAXcDC61d6Pr96rf6ZOkFCkQfvyXdMQqKMTrmL7YbrIBCYb742yknFVNI3LYqsJBSB%2FzyFLVrlaO4nxurCoFQ3ejBDiYT6N2JEyqWXlff2VKSUsc57EyjYppDuVk2epQGy4zCVJfnN6Xr0Crorm0IMVzAN949%2Fe2SAQTW14hr%2FZdIVCaza2aXdk5xO4%2F9cunStm5Z%2FqnjJb5yIsuoHtuP4L3303hwj%2BercZMbYYuAELtmDn%2BApuL8TiNfnn9uqdm8qIITYCJ2TUseUEfiyxZYjNGB1Xc4c9t%2BGzlcnjsf2QA69Z8ZB0LlAoa7dxPI1uVBzLgYYxxSrArxzTYcXEDcPUBCJq7hItKODH0COsRSmL5D6Mw%2BsD4wQY6pgGydJjiTF%2Bt6gmI%2Bd5WGBjo6vXvmLT48yMED4jx9GCUuHVm0KuTWBmyg4n39YMfUSYLttc9KzWcK6cdAhSSi0PUtn2UmZURNuOj6FIAyzlhwLYPhMbzs9HqwgqDEqfhOWvWTRiu83%2B9NP%2FJPvAYzfJsskMXqOFGR2E4DO%2BQcyCYJ%2FJkNeALf7jXrBVd1kWFwJ6VhrPEQ%2FLlLJcs5TlSonbqQMCQRXGu&X-Amz-Signature=8524ad5ca4e7f7921090afc457d6d1e69f949408f97f4cd39a3dca59f43b546b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ4EXRPX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIG2zP1gyhPBGkP7zu4heFd2SQazs1TUgDAD4bi4s4I%2BdAiBM0AJPBgD4NnJlXiexajB0rZlBfKqj6s6W8ea%2FcMaqfSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsN6L6Ao8QErowTAdKtwD2JFw2twMkzf1vQK84jaRWg1FwWLlz2PIZl%2Fwu3l1dXYwhOSCBe%2BKriyQ6q%2FEZl%2F7vM%2FnkoWDFWVay0%2FcztYrek5z6DflUXp%2Bw%2FOdn2OmrPanlUb8KRUAROckuKcQ1LlwIB1233atSwaZUxYj0C0FmfkqT9OgjHcXXwCpoHbwlTm%2Bf66PTH%2B%2FdEMQGGZB4Qc%2BLgoXQErs8cySWl5Ge0deNq7iT1sQ49RziJod1LuAEmwIrfrzaA%2BO8QoSUu1%2FFLx64IDgYmcmGetSEAXcDC61d6Pr96rf6ZOkFCkQfvyXdMQqKMTrmL7YbrIBCYb742yknFVNI3LYqsJBSB%2FzyFLVrlaO4nxurCoFQ3ejBDiYT6N2JEyqWXlff2VKSUsc57EyjYppDuVk2epQGy4zCVJfnN6Xr0Crorm0IMVzAN949%2Fe2SAQTW14hr%2FZdIVCaza2aXdk5xO4%2F9cunStm5Z%2FqnjJb5yIsuoHtuP4L3303hwj%2BercZMbYYuAELtmDn%2BApuL8TiNfnn9uqdm8qIITYCJ2TUseUEfiyxZYjNGB1Xc4c9t%2BGzlcnjsf2QA69Z8ZB0LlAoa7dxPI1uVBzLgYYxxSrArxzTYcXEDcPUBCJq7hItKODH0COsRSmL5D6Mw%2BsD4wQY6pgGydJjiTF%2Bt6gmI%2Bd5WGBjo6vXvmLT48yMED4jx9GCUuHVm0KuTWBmyg4n39YMfUSYLttc9KzWcK6cdAhSSi0PUtn2UmZURNuOj6FIAyzlhwLYPhMbzs9HqwgqDEqfhOWvWTRiu83%2B9NP%2FJPvAYzfJsskMXqOFGR2E4DO%2BQcyCYJ%2FJkNeALf7jXrBVd1kWFwJ6VhrPEQ%2FLlLJcs5TlSonbqQMCQRXGu&X-Amz-Signature=936dda0d096c657364cb348a106e8c484f4a5d0d2d0349982f1a97847a637f89&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSU2XUX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCJpyYt1zEmSHLjpdPep%2BFDjjxCVsHz5YgSbRrc3dhPTAIgWBu3GneeQm2aeX5Zh3RwUda9wiUNwoy8i0ORSF0eJZ8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbzeci1jsfdSG3wuCrcA4W89a6TZ%2BtEn9mhBGG3JB%2FlUt1g3UFCqBemo9B1ByP7QVHNcqUPmEKKb78or7b7Dsb9Kbsyqf3o%2BnpMnrIA1Od7kY3jnqBjPS%2BZ1WcMZIw15jSsv3THqMGn1lWsFSbyaB%2BmCRaR0nLtcI6ZLH68eLjSCFpBbp31OpmTWTCf7eBm7DfLmXgYwBg%2Frc2DAVQh%2BY7kSKjk4Oqe3xky1WA8gHYP9O4%2Bu3nvfshwDIru0686jUDefgD%2BoOXrumaVw%2B3duZHEF5rh8d6nWeck4N6KPy9xefCx2ZD7nJy%2F%2FCA%2FDKt4atHzmUuIFHqQTKnL2QzEe4JfYXO1o9s0h0e9POQaLM4MT0Ah2JG7R8IWcFpQ33MS0rewshAAfa%2BOb2lmDtiAidG%2BXmY9VMR3dQ8h2S6JLE%2BHm8eC%2F2kdH01TyDNolXLWlCy3lI0cIYU8T3qrhKRtVgoxpYyptFTkMf40wKCTWmfeHt%2FnvMWa8ByqjLmA%2BJutZ%2Bc5D8Cx5HMw03H6BDlXoJxwUkKeQ8btYp8aOcAZHYSrj5APMmAPJwKlyqc0PcKT0gibajUkuwJ4Q34V03boL7SdxBdQPMIyFtPdqPILzjy1yZouLVdZ6wRzZIc40DVXsAjEnCN3H8zviJiKMJjB%2BMEGOqUBXHBVmelSPeGetqSIaKWsNcr3o0WMzaC8awVtMyK2oD84NEGs2rNmrolZvnJhqJAUEO5rduoawV7Y3oA3b23Jx41SC1Pn%2F%2Ff%2BA0dSXO4SSCBudC5vjzU1NX5aptYpn3hzrmUtM1NoKC4WT8RxH6zCdUM5NssSdRycjUpGgH3Nx0PTXi42%2F2M8%2FrVSKI7nh3yevo490VvzbMAKgFBx98Z%2F%2B1wpHpMd&X-Amz-Signature=6922b124921c12c86519706222ff1e59c1b0de68270f805c65df841a6240e577&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQZHLZ4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsg25t7K0deQAtpTjQMyS2FOPZwUBkNeb%2BY3ZJW62raQIgFKV9w%2Fo3LZGJCRxUaCtL4WvXAIF5kq%2FnO0aOdQPCLSgqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEo64xcGpIs%2BCQzvircA7ZD%2BGLCfsSgBX1%2FQAd4uTRISZJ%2Fk%2Bd8Quc42wbb9QdqYkyJXiPs7U5hkdS6wSNBKLjYbMBh5YZ5aTc%2FxFz2HlHsV658rseu7WzKNA0Ty7HaiXtsp%2F3WfyO7rYiyzjMKCYjo3ZaVo1eTXZgHy6TuHOUE5ov608HtdkwPDzlu4tv%2BAl6QjCIz%2FdReDnffeGijK2ah6GPBYzAXME0TfBKFFgyAqvIY6y%2Fw2%2FDMDJT4GupmmKBsO9ZNxGVmcHdNuN6z%2FdPXkLQpzgnamZGJTgFIWbtRn%2FUHdM9EBimVHocd96o6ISv%2Fz%2FeWqkpJYFrYTF2djkP7MmaHZwtkTufgBoH5PzIJwTdFSIOYzlx58hYxdqoqVjBLyvdyLa57yZL2iyCJUH0O05KclQwOr8BYg3kGJEI9PjMYZkFRLQqPyr%2F2CIl28pImHJjINS%2FIDVHpUAfZ9roTdxUj35kDAbc7a5jJPp3ttB%2BVb2CzOTYBz3w5UhSYMGuvnbq2NeNQYcfqlGkFkQGIISgL7h%2FV50tLzRkR8X13%2BtY5UrgHkF8FwyYbjTpf%2BYO%2FvB4DXhBVWJXd9XaOY%2BmI%2FSMP8ZjEnVwBIQy4AATDc8hfaXjfDL7BfaakY%2BEzenbRxc89WNnUJSq6MP%2FA%2BMEGOqUBC%2FtxL4lzCRZvmQFObQHvL7qhUyz5mIPCoi%2Fxm0MxuPaNYzxkmJ99Gq%2BLHISu7RV9vJJNoAyn4aHysIQ%2Fq6W0zDHaNHJTssoMtPb5SMhAdnkwb9oZ%2FIVkN4IzdleFBeYL8Renci2%2BTcGRNnFLLoQciBQLMoLjkav1qVgNcX%2BWgqLlSGn2F5Ke691Gc2vQnI32gJwNVwWLV1%2F4lXfS7Hwp%2F%2F6DZCMs&X-Amz-Signature=d32dc87486ee4892c0ad912720c45cee93b40550c84473c56b08ab78f26d9e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ4EXRPX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIG2zP1gyhPBGkP7zu4heFd2SQazs1TUgDAD4bi4s4I%2BdAiBM0AJPBgD4NnJlXiexajB0rZlBfKqj6s6W8ea%2FcMaqfSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsN6L6Ao8QErowTAdKtwD2JFw2twMkzf1vQK84jaRWg1FwWLlz2PIZl%2Fwu3l1dXYwhOSCBe%2BKriyQ6q%2FEZl%2F7vM%2FnkoWDFWVay0%2FcztYrek5z6DflUXp%2Bw%2FOdn2OmrPanlUb8KRUAROckuKcQ1LlwIB1233atSwaZUxYj0C0FmfkqT9OgjHcXXwCpoHbwlTm%2Bf66PTH%2B%2FdEMQGGZB4Qc%2BLgoXQErs8cySWl5Ge0deNq7iT1sQ49RziJod1LuAEmwIrfrzaA%2BO8QoSUu1%2FFLx64IDgYmcmGetSEAXcDC61d6Pr96rf6ZOkFCkQfvyXdMQqKMTrmL7YbrIBCYb742yknFVNI3LYqsJBSB%2FzyFLVrlaO4nxurCoFQ3ejBDiYT6N2JEyqWXlff2VKSUsc57EyjYppDuVk2epQGy4zCVJfnN6Xr0Crorm0IMVzAN949%2Fe2SAQTW14hr%2FZdIVCaza2aXdk5xO4%2F9cunStm5Z%2FqnjJb5yIsuoHtuP4L3303hwj%2BercZMbYYuAELtmDn%2BApuL8TiNfnn9uqdm8qIITYCJ2TUseUEfiyxZYjNGB1Xc4c9t%2BGzlcnjsf2QA69Z8ZB0LlAoa7dxPI1uVBzLgYYxxSrArxzTYcXEDcPUBCJq7hItKODH0COsRSmL5D6Mw%2BsD4wQY6pgGydJjiTF%2Bt6gmI%2Bd5WGBjo6vXvmLT48yMED4jx9GCUuHVm0KuTWBmyg4n39YMfUSYLttc9KzWcK6cdAhSSi0PUtn2UmZURNuOj6FIAyzlhwLYPhMbzs9HqwgqDEqfhOWvWTRiu83%2B9NP%2FJPvAYzfJsskMXqOFGR2E4DO%2BQcyCYJ%2FJkNeALf7jXrBVd1kWFwJ6VhrPEQ%2FLlLJcs5TlSonbqQMCQRXGu&X-Amz-Signature=4b3e1a37e488b2b10aca6f859e7566c9819c3dbeb0108f80b64eaae4387f166f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
