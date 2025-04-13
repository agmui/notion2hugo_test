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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WSU5KN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDm6Aw77kk4vKRKy%2FPN%2BzIxGgbuprxpdY7FDOfkzsfn3gIgdMYcQTK7sq6b%2BuXKp9qXU8LTKIayU6vFq%2FeAK8fzkUQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBKmJWQkivK87j2EircA5IhgHjd6Xc%2FzZ3iBijFsZXRQl%2FcqL%2FOIlW2soKl8fOhidcYl69jkuIDzdXhSK1xP49V2erUOpYw7Djd7CMMOftyjYokuVrI5hV8ZUWGZdafhUcOdNvCmt4%2FSOxuYND7nnjhObNKea07P1xilbADrbbzEpgKBH72%2FY0bUFL1gHs36IZuTekHlpElCnA9tyXvy8OBoNTKAH5aXAGN2vV8K3yhqG%2BbqZ3ZvMCxUF3jGlo1b2TlakMnynRkw3wKTxmgntASIWkv0UnbOGPjd5qnlYxGgUvBxIWakSamEmI2RofIHkz%2BSp2CrxTHpnWKbDF5HFDSiZUvtAiD5db%2FRA9L6QHZngPzM6gXULkt3eJuIvNRP2OvFABIDJTtdPlnp%2F0VgQH070RCHmDvaxcK4FBNm27O%2Bo1MWi51WL0m7PcZJ7ZuC25xbpGDBq2QQ6sxgY4oiVGNN2iCumXZZbjy8zEcbBE%2F%2BMbuv1qXyRgLjnnmBGLQKBw0HGLk%2FwpLtpER96mNMscQ3pQsemRr4b0vkeFigIn88krv2naci2BRMbGgHdNND3uvUizZVD3Tz5rh46KneuBSgScBSeL6mmuDg2i3gZzH0yPHL1DOfOlKdelYskEDEtnRyn8ykA6k0nIsMOGN7b8GOqUBHMj6OmTGeX0%2FWtv7VN3gRKQKFW1%2Fh5QzI9eP2mFAsxarFkU0AsMLmIqSxgYWfSqIna2TWiz%2F13FL0C5ghUFM4xqoLtJ757gBv9JA2iRUgR0jaZ0ynye6iBQ9BAhtknSyuWERzfKOXyvlEbkFbTgvfGkE3q%2BfV%2BpcVAEfEs5zsdQk4xb9ZM%2FNqzrza4C0%2FHDS8g3MMJQV9LiXEEeQLkbZXUYAu13%2F&X-Amz-Signature=553f0b3c17aaf3b0873dbc679c0a82e38118ee62eaaf4d2619686f5f95291fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WSU5KN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDm6Aw77kk4vKRKy%2FPN%2BzIxGgbuprxpdY7FDOfkzsfn3gIgdMYcQTK7sq6b%2BuXKp9qXU8LTKIayU6vFq%2FeAK8fzkUQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBKmJWQkivK87j2EircA5IhgHjd6Xc%2FzZ3iBijFsZXRQl%2FcqL%2FOIlW2soKl8fOhidcYl69jkuIDzdXhSK1xP49V2erUOpYw7Djd7CMMOftyjYokuVrI5hV8ZUWGZdafhUcOdNvCmt4%2FSOxuYND7nnjhObNKea07P1xilbADrbbzEpgKBH72%2FY0bUFL1gHs36IZuTekHlpElCnA9tyXvy8OBoNTKAH5aXAGN2vV8K3yhqG%2BbqZ3ZvMCxUF3jGlo1b2TlakMnynRkw3wKTxmgntASIWkv0UnbOGPjd5qnlYxGgUvBxIWakSamEmI2RofIHkz%2BSp2CrxTHpnWKbDF5HFDSiZUvtAiD5db%2FRA9L6QHZngPzM6gXULkt3eJuIvNRP2OvFABIDJTtdPlnp%2F0VgQH070RCHmDvaxcK4FBNm27O%2Bo1MWi51WL0m7PcZJ7ZuC25xbpGDBq2QQ6sxgY4oiVGNN2iCumXZZbjy8zEcbBE%2F%2BMbuv1qXyRgLjnnmBGLQKBw0HGLk%2FwpLtpER96mNMscQ3pQsemRr4b0vkeFigIn88krv2naci2BRMbGgHdNND3uvUizZVD3Tz5rh46KneuBSgScBSeL6mmuDg2i3gZzH0yPHL1DOfOlKdelYskEDEtnRyn8ykA6k0nIsMOGN7b8GOqUBHMj6OmTGeX0%2FWtv7VN3gRKQKFW1%2Fh5QzI9eP2mFAsxarFkU0AsMLmIqSxgYWfSqIna2TWiz%2F13FL0C5ghUFM4xqoLtJ757gBv9JA2iRUgR0jaZ0ynye6iBQ9BAhtknSyuWERzfKOXyvlEbkFbTgvfGkE3q%2BfV%2BpcVAEfEs5zsdQk4xb9ZM%2FNqzrza4C0%2FHDS8g3MMJQV9LiXEEeQLkbZXUYAu13%2F&X-Amz-Signature=47818d1630505d635bbed7a7c366a27c92b236e18fd3a5b014c7540db4f28231&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFE2BJ46%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIETV9nXvEitsjMbTJmoHZsbyn5gVP7a8LvWAIad9TJlQAiEAkf1UUW4U6IZ1MBcNflX6P02Ybx5gbU6smeW%2FxG3BOq0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI21J1vLO6UJZA5ekCrcA2QVIl%2BQW4Ax9ioI8ALhCvV5Zu6ofdsJK%2B2R%2FGCUv8BZbZ0SOkbZMDXCqIJFtpKXMbVyx1m%2F7xalXrsIf2FXCxcuK21E%2BjhT07%2B1z5M0LENMMbaRIxEO7qGexW8qcMTSNCGlzrvtZMPsI7bTJyx75MjZTJIZgImnhTISF4GVWxAT%2FRk2xYEEq5kUbA9oj8fMMlkaiRJ6njlWI7PIbiuRrmKL2x86fIF7ae85CAvqNDyOdCheZM7%2FvwrKJDSdj2ofm3TYGfwW%2FscMqBi%2FmMATnyeccLp0HXum0aEmD%2Bv4nLO4m7ClNvw1nRSH%2F2k4pw0v6Ot5rimQSmWd2%2FW9CTN45s3%2BozPsG%2BBfk7m7jUql20BADrBtP2JpmJJsrxxsEcUwcTnVI8mOOZSSYLMk1DGE9ADP%2FwFOin0X1jSNgeWMt0zKPGgf43GQtp9mr1ILec20RcB9LzuqyjM9cbXrl2o5%2FqZLQAdeX8iL6FjrFrSG56skfp0C6kFcSerV1DFRI5vnyJS%2F6fFK10aNuEFUQ62MZ0lBOh4FNWGdjKK61ygAnuMv5U8II%2FOGJygppnDQPeX%2BMn347I3dLZeFI88fGZ8g0wG4p8uzd97HOygerYC40HWinoiM9Uu6X%2Bzs6qd%2BMOCN7b8GOqUBLxRmY8vmkXgD1iVDKw4cE%2B2k9qHto4eTN4eueuBeB0s%2FTaBtvGZk5BJ9WnzS2C74ozL%2FZq7YJrxrCtg4ZjjdWjQUQk8z4WZIn212TdJ2iasxzl7AMhkZm6nmgCzz7Iw0G5fH0QHhARn7Zl%2BFlBhUpOozu4zvvDj3C6KP%2F9BfIizHJ7dxTbB4%2FvFbqcBCFkKilubHfwx8G4evFJDBW0W5LYsiE8A%2B&X-Amz-Signature=0f22f751a0c9d332e76aa1e381be77489d4a1d87f067e8c28bdc60381b43a5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNQRTDO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBpo4pdkOrX%2B%2B0fDFGn0eLlAAVhH5lnDnWR06Xqu81ciAiAdXSIfy6mS0PuKbwgXdJTh5I4u6n8wOn1J6XjQJYegECqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYkDisjaYHG0IzQnbKtwDKex6HlmOMn9DQXkXWraSl95j%2F%2FgW2mGNeYTMeQu%2FPxQiTrVGc4PMl32RzrOJV5vMHUpWQMX7o%2FHp8SEVSLjBk%2B0Uu%2FFpLYXFNQJh95wK%2FDMBVBsvh1GM4oSBtcGwCQ5d%2FW%2BEmCG7RjFalZk%2BmJlzL1PgwhC19TR1dPAXfKLX9U7%2FJuuFB0Ax5DlIIS%2BPpn0bKX6DZPLhYIfYvGkZdTDJA6BFPo%2BHTlN68jARirHyPKnbSRPwtYfGCNOFKVFLSYDHiey5FGvI7%2FSG%2F2V4zp8XLr1giLKpBG8XxhZsnECnMqBlSBK3z7EL8%2BaI3Qu3Byq0qzR%2F31al8ZnBm2jYvAo2lTMk1r0SV3VeA%2B5B0ghGgno8cfuUs6si9g4ghtSGIsauDAbcbM7meZvWepiyQy9buwIUS2htxZfHoKoYOXz0446Bf1MKuoyBAjjCEdqY%2FhK3s0J%2F5KU%2BfhOkJjkGM49pHh6LiWJYT18%2FW4E8i4KXmovbYTHi8GhC2YiKDgNlY3gB%2FFKvFQWTLPznul9lQmsH29CaxJlSL6L2FnEeyxD%2FDb2LiQzZ39KddM%2FFeBPjig5LO5I3aVSj%2FizJcPazm6rliyRXBLoLFO%2BnpbfmilA1a3DVc0HDgdLnxCcXH4Mw2o3tvwY6pgF%2Fq5V%2BeT3QslL9okvaHqj2QSVJ3uYuPw0aVdk3Q843MmAOpXb7b8J%2F61%2B9XAUW%2Fc%2FNebkrF7FnMf3Ecy8SHxxqQLrqM7vMpMVncUjcCsp5e2mJH8Fk48xDCgeiSR0QqAvRKa1tenfjw2EjVu7IMj3VKJJxxg9sXwPJ4dkAi%2BH3p6a0Na%2B%2BoWWH5AzGO9aGkrZaLRxz7YcZjkmJhRMgmN2MVQrhezd2&X-Amz-Signature=67c78468ea75b535b5414db4609a45b783f42d8b2fb54648b21c96ba99da1166&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WSU5KN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDm6Aw77kk4vKRKy%2FPN%2BzIxGgbuprxpdY7FDOfkzsfn3gIgdMYcQTK7sq6b%2BuXKp9qXU8LTKIayU6vFq%2FeAK8fzkUQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBKmJWQkivK87j2EircA5IhgHjd6Xc%2FzZ3iBijFsZXRQl%2FcqL%2FOIlW2soKl8fOhidcYl69jkuIDzdXhSK1xP49V2erUOpYw7Djd7CMMOftyjYokuVrI5hV8ZUWGZdafhUcOdNvCmt4%2FSOxuYND7nnjhObNKea07P1xilbADrbbzEpgKBH72%2FY0bUFL1gHs36IZuTekHlpElCnA9tyXvy8OBoNTKAH5aXAGN2vV8K3yhqG%2BbqZ3ZvMCxUF3jGlo1b2TlakMnynRkw3wKTxmgntASIWkv0UnbOGPjd5qnlYxGgUvBxIWakSamEmI2RofIHkz%2BSp2CrxTHpnWKbDF5HFDSiZUvtAiD5db%2FRA9L6QHZngPzM6gXULkt3eJuIvNRP2OvFABIDJTtdPlnp%2F0VgQH070RCHmDvaxcK4FBNm27O%2Bo1MWi51WL0m7PcZJ7ZuC25xbpGDBq2QQ6sxgY4oiVGNN2iCumXZZbjy8zEcbBE%2F%2BMbuv1qXyRgLjnnmBGLQKBw0HGLk%2FwpLtpER96mNMscQ3pQsemRr4b0vkeFigIn88krv2naci2BRMbGgHdNND3uvUizZVD3Tz5rh46KneuBSgScBSeL6mmuDg2i3gZzH0yPHL1DOfOlKdelYskEDEtnRyn8ykA6k0nIsMOGN7b8GOqUBHMj6OmTGeX0%2FWtv7VN3gRKQKFW1%2Fh5QzI9eP2mFAsxarFkU0AsMLmIqSxgYWfSqIna2TWiz%2F13FL0C5ghUFM4xqoLtJ757gBv9JA2iRUgR0jaZ0ynye6iBQ9BAhtknSyuWERzfKOXyvlEbkFbTgvfGkE3q%2BfV%2BpcVAEfEs5zsdQk4xb9ZM%2FNqzrza4C0%2FHDS8g3MMJQV9LiXEEeQLkbZXUYAu13%2F&X-Amz-Signature=e47fbe96751ded1138836d2d704eb458604947b5b0629888bb234f7e2777ebf4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
