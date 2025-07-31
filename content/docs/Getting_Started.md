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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3FW37P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwGVZ5gf8bp%2BwE04LOriCeqdRZ6xpZ%2Ff5sHtsfohcc%2BAiEA2X8XNcfjGZ3K83AIt8tMAdvN36W7sincDLq31qcp7HwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuxVHOUJSA20lVWhircA%2FwuHBCfr7jGbF%2Bf4MXq85IE40QxoV9TUyRTlbkAvjDNjZRyb7CD10xaiBRuZ%2FdLvhJkuQC1jTruVIg1o3qXtFWM4fHfbGd%2FTaDZ5QeZDcPi8pHFat12ceIQer%2FQPeiF%2F%2BoFPZ%2FEgSO%2BcQoVB2MqrS31Ytn4tXdtRqIEMJ9z%2B4IgkpCVlTp6uljHyIz01v%2BqKYydfooIuvOAyXhvZDy8Ni4JWyB2EO2envMZUtEEQJ7oCYwJNQZ6UQkH%2B%2BXZsCPxpinvPGdj6tNJJE0YhQHHKQGAzETyOL5Ty2kKKLFKjXD1y%2F%2BvDhLyZXgbGePnTQEj6WeNQpWkEZAEJ%2FQs1L0FffCAr6uuUUtorpM%2F9I6mCJCSZGaDLOmguuWq3n22Q12ydFUkmK2fa817EUIn8U5hsmOXcXIcJ8BulpEp%2B5PAL4pUjVUVh%2BrvNAIuypgJ7hV2SBKWZbZ9Bt4FmeVq71GqB%2BAkaFPvLoOOGK0EJbq%2Bf5nD%2Ba%2FVLGgtzGKy4IMZkxWG%2BurG02Jv3qKpvFdDKJ63SpOKwi1SaMMpnZ8XSWe5vJIryx3Q21XovTy%2BVHSVyIaqEOn6oUxZS6sbkH7wnzFQwOSCH2HUkUc4caAQC0n0c%2Brq4CvgQ1UM60USQGx2MMDMr8QGOqUBJ4iHisqriBNAyaxr930Id3pGyMOx0%2BiOG%2FMI%2B429ouJB4irYg8XZK3HLQU9KkyzEzQOQOEGKTiyaAxSysHT%2FpMVq%2BIm4fPgIlRjO%2FTgKe2PbKvL3eLBb60HSkizss8bhxupf5U1vIDq8i3og98BNsFyOtATTzxvtMTPaYKwZxHH%2FsGrASzvK8lQV%2BIccS357ml%2BydA3QXcXKrufJPS%2Br%2BusbFUbG&X-Amz-Signature=1fa8b325469b0621d7708d828390ac6838a63b9d060d5a4eec5fb0ac6c42dd34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3FW37P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwGVZ5gf8bp%2BwE04LOriCeqdRZ6xpZ%2Ff5sHtsfohcc%2BAiEA2X8XNcfjGZ3K83AIt8tMAdvN36W7sincDLq31qcp7HwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuxVHOUJSA20lVWhircA%2FwuHBCfr7jGbF%2Bf4MXq85IE40QxoV9TUyRTlbkAvjDNjZRyb7CD10xaiBRuZ%2FdLvhJkuQC1jTruVIg1o3qXtFWM4fHfbGd%2FTaDZ5QeZDcPi8pHFat12ceIQer%2FQPeiF%2F%2BoFPZ%2FEgSO%2BcQoVB2MqrS31Ytn4tXdtRqIEMJ9z%2B4IgkpCVlTp6uljHyIz01v%2BqKYydfooIuvOAyXhvZDy8Ni4JWyB2EO2envMZUtEEQJ7oCYwJNQZ6UQkH%2B%2BXZsCPxpinvPGdj6tNJJE0YhQHHKQGAzETyOL5Ty2kKKLFKjXD1y%2F%2BvDhLyZXgbGePnTQEj6WeNQpWkEZAEJ%2FQs1L0FffCAr6uuUUtorpM%2F9I6mCJCSZGaDLOmguuWq3n22Q12ydFUkmK2fa817EUIn8U5hsmOXcXIcJ8BulpEp%2B5PAL4pUjVUVh%2BrvNAIuypgJ7hV2SBKWZbZ9Bt4FmeVq71GqB%2BAkaFPvLoOOGK0EJbq%2Bf5nD%2Ba%2FVLGgtzGKy4IMZkxWG%2BurG02Jv3qKpvFdDKJ63SpOKwi1SaMMpnZ8XSWe5vJIryx3Q21XovTy%2BVHSVyIaqEOn6oUxZS6sbkH7wnzFQwOSCH2HUkUc4caAQC0n0c%2Brq4CvgQ1UM60USQGx2MMDMr8QGOqUBJ4iHisqriBNAyaxr930Id3pGyMOx0%2BiOG%2FMI%2B429ouJB4irYg8XZK3HLQU9KkyzEzQOQOEGKTiyaAxSysHT%2FpMVq%2BIm4fPgIlRjO%2FTgKe2PbKvL3eLBb60HSkizss8bhxupf5U1vIDq8i3og98BNsFyOtATTzxvtMTPaYKwZxHH%2FsGrASzvK8lQV%2BIccS357ml%2BydA3QXcXKrufJPS%2Br%2BusbFUbG&X-Amz-Signature=5b40900d9bab6576de24e5009a7f47aacc93f055bbde809f61389b00d966fc43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3FW37P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwGVZ5gf8bp%2BwE04LOriCeqdRZ6xpZ%2Ff5sHtsfohcc%2BAiEA2X8XNcfjGZ3K83AIt8tMAdvN36W7sincDLq31qcp7HwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuxVHOUJSA20lVWhircA%2FwuHBCfr7jGbF%2Bf4MXq85IE40QxoV9TUyRTlbkAvjDNjZRyb7CD10xaiBRuZ%2FdLvhJkuQC1jTruVIg1o3qXtFWM4fHfbGd%2FTaDZ5QeZDcPi8pHFat12ceIQer%2FQPeiF%2F%2BoFPZ%2FEgSO%2BcQoVB2MqrS31Ytn4tXdtRqIEMJ9z%2B4IgkpCVlTp6uljHyIz01v%2BqKYydfooIuvOAyXhvZDy8Ni4JWyB2EO2envMZUtEEQJ7oCYwJNQZ6UQkH%2B%2BXZsCPxpinvPGdj6tNJJE0YhQHHKQGAzETyOL5Ty2kKKLFKjXD1y%2F%2BvDhLyZXgbGePnTQEj6WeNQpWkEZAEJ%2FQs1L0FffCAr6uuUUtorpM%2F9I6mCJCSZGaDLOmguuWq3n22Q12ydFUkmK2fa817EUIn8U5hsmOXcXIcJ8BulpEp%2B5PAL4pUjVUVh%2BrvNAIuypgJ7hV2SBKWZbZ9Bt4FmeVq71GqB%2BAkaFPvLoOOGK0EJbq%2Bf5nD%2Ba%2FVLGgtzGKy4IMZkxWG%2BurG02Jv3qKpvFdDKJ63SpOKwi1SaMMpnZ8XSWe5vJIryx3Q21XovTy%2BVHSVyIaqEOn6oUxZS6sbkH7wnzFQwOSCH2HUkUc4caAQC0n0c%2Brq4CvgQ1UM60USQGx2MMDMr8QGOqUBJ4iHisqriBNAyaxr930Id3pGyMOx0%2BiOG%2FMI%2B429ouJB4irYg8XZK3HLQU9KkyzEzQOQOEGKTiyaAxSysHT%2FpMVq%2BIm4fPgIlRjO%2FTgKe2PbKvL3eLBb60HSkizss8bhxupf5U1vIDq8i3og98BNsFyOtATTzxvtMTPaYKwZxHH%2FsGrASzvK8lQV%2BIccS357ml%2BydA3QXcXKrufJPS%2Br%2BusbFUbG&X-Amz-Signature=196e8acfd7d9e84b1cc4ede12c1e1d93cb7e88dc49f8b3858a8e3281208fb19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIALK5UI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BwgRbt8Cksuk90v7VRUYewriwgNu2lZ3F2HXnKEIwpAiAq6xR3t7Rza4cQk451sFxmoe0BZZChrEs5FtZHzM4vaiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexUl5XCQCkZa%2BJwoKtwDqNyH3YIWkQyjbqAATsHzrzE0T7zH5La5oFohH8Vcv1%2B3i%2BLLcyWeDqCpyQOcaBfDWMjF%2BPDo784aF%2FTuwtmkerhOah67Y4naUFrxOjHQ2GiEhyLwQbhYCCzYDoXXLAtgqMvCHiSY4Lxyl0GoqGdIv2JpDFNigeY4u%2F0NaEDRvQ1HNcfNYFz4%2Fod5CJaCIj06U1PUL4%2FuJrLTC0djbsyRODGH8nB3Nr9EVrcH1BT3EXEYT5Mpb8gRKyYBjiL3HGZzz%2BINCQKheMwkOZQimDr6GNZiZj%2BSlCAA3WnrrsCJTT517zBiDybHxO7LEw5ZtRYj7WM9g53GmRojAv4dVetYmp4dH26QJmb8JzFqiESkAaGPv2QCT8V0GdXWEoPqEzWUfjtN6paorUKoNxHv%2FmAozI1LDvMqtdfIjiGUG0ievCJC%2BNYnVsEp%2Bs8st3wYZPlG%2F3i3SyFLkXmeOpyxDVPA1qdXzqv8f%2FkO1zOAW2ePtPcc7aeXNw1WjmMc4VKs16yqtRxNWMLHoJRcJ1le8%2BdOtrFCmDpQCVVXv9qNLoM8kvjUeyVZciIkhV5iJedOsbHz9QFUOoTYw7N8JZY%2FeE89CyYL3OG5w2TsETahU8ianglo%2Bp%2F%2FMl3fZ%2F%2FKNnQw1syvxAY6pgHulS4pGuM3LSIxx5BD95KnAQRiawdmSu5%2BHEI5SFtWN2ir%2BasGSTGYnxibmwqURLP0p6p0WH9rMYLOld%2F3d21AIoDyG4Izx6%2FuK8XR5ZTW22bzNHrVyo4oru2uy3lC307kS6su2vJ9rZ82XuDRCTQ2kF8ZbooYNdrQBJL4KZEa4FaZN4HhabcTDuel1h0gr%2Fspc6oeKy9NlUcUIxNcW5l7c07JjtVo&X-Amz-Signature=c1f1dc5d753d806d1f6802ff460b4bd9a21bae2d62a372f6ed6a079c531ce28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZDWQZCI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHretYrESoDBizeloc%2FSA%2FnocZCWa7IR6jLKvT5F1F79AiAz3p%2FaMeYv4qK%2B4nkgKtfWnY5g0QvaJ14L%2FApDhHcjZCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX5ZSMkOb%2FACfFArKtwD%2BxtuBvvXZPhYH7oTsbpO3p5F3bicKUC3rWzXDcrdFXjcpNq76z9phvE%2Bt7tzRSKs9Bg%2FKOZ2EswgXStevk%2BaxqGtRBAq1RVywV3KQJT1HjGczFbx1uuTN5AbG8VlSkDi9a5yMMAleX6Z%2BJuzg6AaHsP9JJxX0ZQjSNBc17otrKTGXPSOM6sy9CN6zVftuUXnd4Mh38OC52xiH%2F5meeCLcadHYtGz%2Fn8j06S%2B4rnV0elDVm3wdE6JbpRvVMwcFdKK9FYH88FY4QmKvC%2Foeb9m2M%2FW2Z0LueXA6rp%2BrUzXVGUV5VnbqmR9NFBR2SGjDf8eTbgXNLYYvnyzylYyq8Sz13hI5gMx8WU0Q3aR6h2Zd8RqLSxWeZNUTF6Rv85MX3ZC%2BgRn5bi7VmIpYIVKXq7AdfLRY0Xsu3d%2BIBXEPlgytmECJ5qHdmL2Ky1rtSM1MTqK29RyirR2fwDiK%2B1y5b%2B%2BMQoiECAJqN7qP9eLlHiyKoa2Vj86i4z25MW955N2tYuPfBTT6bbDOXZBcJ82GOoYfVFvlAQQasISuUIaYFJzi%2B2nqD80MntjORHKVaWQRyo4D6ACQL5MhuNvq9HyQ9LdkdeHLW9TfFysAsWXBdCwhC01%2FySBtBSxZQHZUPww0cyvxAY6pgGAG67sjrTVrNu5ntvLeY%2FA4rU0gl3dDqQjVYK78lJ4oy9kG0OlQJPm6rRgzKxK9UcsIxrpta5S%2FRI5AqOWU0YRUt4i5J3cq0zJDLOXXUUGakI%2BzcNY9K34uZO2nKFODS%2Be8TGghhbFKHh1ik6xBFYenYX%2FQijDbF1FwCEle7stIymk5t1Y0xXzOpMkzw5aIIDiy3BAhx1pPXubAUmL%2FhojbvR8e1KX&X-Amz-Signature=f942a5e5fa4b92e3ccbf57488083621bd67bad6dac960987d5f1999d1d5b530a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3FW37P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwGVZ5gf8bp%2BwE04LOriCeqdRZ6xpZ%2Ff5sHtsfohcc%2BAiEA2X8XNcfjGZ3K83AIt8tMAdvN36W7sincDLq31qcp7HwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuxVHOUJSA20lVWhircA%2FwuHBCfr7jGbF%2Bf4MXq85IE40QxoV9TUyRTlbkAvjDNjZRyb7CD10xaiBRuZ%2FdLvhJkuQC1jTruVIg1o3qXtFWM4fHfbGd%2FTaDZ5QeZDcPi8pHFat12ceIQer%2FQPeiF%2F%2BoFPZ%2FEgSO%2BcQoVB2MqrS31Ytn4tXdtRqIEMJ9z%2B4IgkpCVlTp6uljHyIz01v%2BqKYydfooIuvOAyXhvZDy8Ni4JWyB2EO2envMZUtEEQJ7oCYwJNQZ6UQkH%2B%2BXZsCPxpinvPGdj6tNJJE0YhQHHKQGAzETyOL5Ty2kKKLFKjXD1y%2F%2BvDhLyZXgbGePnTQEj6WeNQpWkEZAEJ%2FQs1L0FffCAr6uuUUtorpM%2F9I6mCJCSZGaDLOmguuWq3n22Q12ydFUkmK2fa817EUIn8U5hsmOXcXIcJ8BulpEp%2B5PAL4pUjVUVh%2BrvNAIuypgJ7hV2SBKWZbZ9Bt4FmeVq71GqB%2BAkaFPvLoOOGK0EJbq%2Bf5nD%2Ba%2FVLGgtzGKy4IMZkxWG%2BurG02Jv3qKpvFdDKJ63SpOKwi1SaMMpnZ8XSWe5vJIryx3Q21XovTy%2BVHSVyIaqEOn6oUxZS6sbkH7wnzFQwOSCH2HUkUc4caAQC0n0c%2Brq4CvgQ1UM60USQGx2MMDMr8QGOqUBJ4iHisqriBNAyaxr930Id3pGyMOx0%2BiOG%2FMI%2B429ouJB4irYg8XZK3HLQU9KkyzEzQOQOEGKTiyaAxSysHT%2FpMVq%2BIm4fPgIlRjO%2FTgKe2PbKvL3eLBb60HSkizss8bhxupf5U1vIDq8i3og98BNsFyOtATTzxvtMTPaYKwZxHH%2FsGrASzvK8lQV%2BIccS357ml%2BydA3QXcXKrufJPS%2Br%2BusbFUbG&X-Amz-Signature=6e940f71cd9369f953b8d96b00ff43629fe016d5d0d23008136733bc89a770f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
