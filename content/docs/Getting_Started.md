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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPEZXJB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGBy%2FfxnChJeYhzglY40d%2BmTA06CuhQ3kfyNlb%2BEoJ3TAiADcY1Suq9FMCJoMIFdtinEmHZP2kuDZ6QFQ9lT7K7nMSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPNlZFJgMlnBOVI2SKtwDfpfmREQarCk5KdXY3WuevFEB8hjs34NRlVCVq5BVViZgmMXZAsydID8JvLj7wNELndDoKS%2FJBWI1PNBndSnNuDL1LXXHREWP4%2BN1tzRAOqPy3FlgzFtG%2BuM8TAfSqkk0URfFaJMKaYMV94U6OYup2xsRthbEOxxVKJmdUftXBdnbC6%2BrrjZgtxj9lT%2F0KyLszezbOzMLIOgLwIHJ3%2BaA4v2Q6uJsDokbJG9efw56mfCzuy26di2BPQGz%2FR4b30A3U3eXY2fc6MvG9zE1CHrqRQUisj3V9MYrXx6epzRJkba%2F%2BMyb2ekTpa8GRUDo1FlOlBCjmO4xS2Eojd4bdFMnlZTfRgT8X%2FqKA3AZoEXkk01gcm73DK3GSyuLyP1onCb0feNnhdY6nBy3ShX7Fx%2B8Gs33T8UosVuwCzijtxHRrMqp6q%2Fln4HLf0cwYgv8DmmHnhgiohRzDibFczt1X92aKum5dmnxYlOFOyW9Q6hixYaCJwmUB4fs9Xgw1nevpuGLOpuitgIpxCeBABftebfGCX5x6KT958uhmljGchGtWjte2IslZzImSXCI6tRY6%2BBOuOECWEmfmYVttnhkWqtWThvxfVT6Hsb1DL0psU508BXOpEYcANsLNRXA6N4wqd6YwwY6pgFqHcKPPt0BHf9aFgbYHpKalh0jQv9Au9iR6d4%2BuIROOt5z6udxKYRP1JIMLKw%2Blvt%2BK%2FD9VMBfjCBfNULOwPv32dkp%2F5oEcpSK92z9WoQGhGQ2DplekgzMmTI%2BappMVL%2B97e8fbzNx42vwq9croF3NBfI2NaesVpC%2FatGhqKueY62LdILCTN%2BGnJgKGUCuoLKujvod25A86G9Newe16N0pDvRpvDXD&X-Amz-Signature=611220cd0dd0e8d77a8ec8ff2f4963a38fff7f54997df849c35a0c04587e1dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPEZXJB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGBy%2FfxnChJeYhzglY40d%2BmTA06CuhQ3kfyNlb%2BEoJ3TAiADcY1Suq9FMCJoMIFdtinEmHZP2kuDZ6QFQ9lT7K7nMSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPNlZFJgMlnBOVI2SKtwDfpfmREQarCk5KdXY3WuevFEB8hjs34NRlVCVq5BVViZgmMXZAsydID8JvLj7wNELndDoKS%2FJBWI1PNBndSnNuDL1LXXHREWP4%2BN1tzRAOqPy3FlgzFtG%2BuM8TAfSqkk0URfFaJMKaYMV94U6OYup2xsRthbEOxxVKJmdUftXBdnbC6%2BrrjZgtxj9lT%2F0KyLszezbOzMLIOgLwIHJ3%2BaA4v2Q6uJsDokbJG9efw56mfCzuy26di2BPQGz%2FR4b30A3U3eXY2fc6MvG9zE1CHrqRQUisj3V9MYrXx6epzRJkba%2F%2BMyb2ekTpa8GRUDo1FlOlBCjmO4xS2Eojd4bdFMnlZTfRgT8X%2FqKA3AZoEXkk01gcm73DK3GSyuLyP1onCb0feNnhdY6nBy3ShX7Fx%2B8Gs33T8UosVuwCzijtxHRrMqp6q%2Fln4HLf0cwYgv8DmmHnhgiohRzDibFczt1X92aKum5dmnxYlOFOyW9Q6hixYaCJwmUB4fs9Xgw1nevpuGLOpuitgIpxCeBABftebfGCX5x6KT958uhmljGchGtWjte2IslZzImSXCI6tRY6%2BBOuOECWEmfmYVttnhkWqtWThvxfVT6Hsb1DL0psU508BXOpEYcANsLNRXA6N4wqd6YwwY6pgFqHcKPPt0BHf9aFgbYHpKalh0jQv9Au9iR6d4%2BuIROOt5z6udxKYRP1JIMLKw%2Blvt%2BK%2FD9VMBfjCBfNULOwPv32dkp%2F5oEcpSK92z9WoQGhGQ2DplekgzMmTI%2BappMVL%2B97e8fbzNx42vwq9croF3NBfI2NaesVpC%2FatGhqKueY62LdILCTN%2BGnJgKGUCuoLKujvod25A86G9Newe16N0pDvRpvDXD&X-Amz-Signature=ecea8462f70e96875af92732f97065f4158e0f3f7cd915a5a83fb925626a4717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPEZXJB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGBy%2FfxnChJeYhzglY40d%2BmTA06CuhQ3kfyNlb%2BEoJ3TAiADcY1Suq9FMCJoMIFdtinEmHZP2kuDZ6QFQ9lT7K7nMSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPNlZFJgMlnBOVI2SKtwDfpfmREQarCk5KdXY3WuevFEB8hjs34NRlVCVq5BVViZgmMXZAsydID8JvLj7wNELndDoKS%2FJBWI1PNBndSnNuDL1LXXHREWP4%2BN1tzRAOqPy3FlgzFtG%2BuM8TAfSqkk0URfFaJMKaYMV94U6OYup2xsRthbEOxxVKJmdUftXBdnbC6%2BrrjZgtxj9lT%2F0KyLszezbOzMLIOgLwIHJ3%2BaA4v2Q6uJsDokbJG9efw56mfCzuy26di2BPQGz%2FR4b30A3U3eXY2fc6MvG9zE1CHrqRQUisj3V9MYrXx6epzRJkba%2F%2BMyb2ekTpa8GRUDo1FlOlBCjmO4xS2Eojd4bdFMnlZTfRgT8X%2FqKA3AZoEXkk01gcm73DK3GSyuLyP1onCb0feNnhdY6nBy3ShX7Fx%2B8Gs33T8UosVuwCzijtxHRrMqp6q%2Fln4HLf0cwYgv8DmmHnhgiohRzDibFczt1X92aKum5dmnxYlOFOyW9Q6hixYaCJwmUB4fs9Xgw1nevpuGLOpuitgIpxCeBABftebfGCX5x6KT958uhmljGchGtWjte2IslZzImSXCI6tRY6%2BBOuOECWEmfmYVttnhkWqtWThvxfVT6Hsb1DL0psU508BXOpEYcANsLNRXA6N4wqd6YwwY6pgFqHcKPPt0BHf9aFgbYHpKalh0jQv9Au9iR6d4%2BuIROOt5z6udxKYRP1JIMLKw%2Blvt%2BK%2FD9VMBfjCBfNULOwPv32dkp%2F5oEcpSK92z9WoQGhGQ2DplekgzMmTI%2BappMVL%2B97e8fbzNx42vwq9croF3NBfI2NaesVpC%2FatGhqKueY62LdILCTN%2BGnJgKGUCuoLKujvod25A86G9Newe16N0pDvRpvDXD&X-Amz-Signature=037e1965c758951dcbb5b0103deefb943898a42659fb1f37cd25fd352bf471bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFSAOGB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGfhPv5bZWsfcSDiZiLdg2EkuEVHl08dWLrHXxrhw9X3AiEAkGoBrVoMLWVaI06dHr2LE6lQuHpk9hs48IJERyZsF9sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAQSJo50qV3Vl5qBQircA8QfPhipDR1Qsqp616L%2BJ4bug%2BH%2FxFiVzhHzNFf41IHH7v%2FogCuyp5%2BATgXuETtc%2BAF9DSg5VUR%2FI1lH2%2BTKRCICTTCvRgmxMiTDe9ZyiuZRpX9kH76bPY2Awt1lQctJ6mOqKqDcajxI7%2B9FYl2ODLxvOctVEyuHI6ooAXm5hPBU7sK2LGe5HsayUlwGOInoW0O7X6HkO6miTMXd1I8zzRXghenf3QCy%2FKqZFrDVwzYMndbNhE2j%2BeiOQSBzBPUFtv6CbLanEP%2FmF2iz443FjOVTitHR8rIfcVmNGU19IZEM3jh9XvthUP32ogP7oDhJkMfz%2BVmK%2FNzI3mjd8Y1hoX4Z5WXInJDDy%2F3xCPyEQQvW0DQ9Mu5cMeSe42foIr1cJnItywlwMt%2BqNKGbYJ2u7YywC%2FAhpA6IkI7C5hdHhfwNdSLal%2Fm6qOqeCI4v9ValnjP%2F7eQCaAqBKK%2F%2FZXrq3FCWjfSgO8fplQBzd2exnYDpiwgv5xVBetET4gXQEW%2BNOoHbymZh6ho9cCWUExFob7zGBF0FGNt7uOjbZxANbmn2NEF%2B6H2JRRKyAQRFGc62G5HUDTrCEYwn8gBQLzAqbyvY47qw3xPjbRr%2FgAdnx1hfKCSgCzFyMYe0TMBvMPndmMMGOqUB%2BFsnXETPeLKynn3Rb63EcOh9BuRa7Wlg3vEliOz6LnLcq8oClRLOHi0OqPwQT%2FQEmGmmkFVgztE7PwtZFcwAybSYPiltEh6Gf%2Fp12jwsWNjbAx7OSkegJQKblCOwKMqG94%2BAj4TcIv4HzLVkuMlJJXO6f5JXSXjLmWpA851qTkWW0kyHu47%2FlLkj0sPl0FBjV0cltekTxyh8aqp5IQi4fSv1eR3j&X-Amz-Signature=97e26b6170048906a1ee49d5ee09a5ecb70ccb3c21cb19e7842de0815bd1f14d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWT6WV4T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIB%2FDsfOHMXJpofdGcZJ6%2FmBfc70GLohvbybPRzGZl%2BhrAiAsmGUMAwPXjg7fHTK90aDC%2FQ%2BlH%2BUJZxfYlxBZJLSy4Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMcvc3az2yV2FL0EX0KtwD8w1i7sKREenkcLepXF1VbXDaxQWaHxDG4KVgiBEKPbft6bYajySgZ5axQWBb0THbaOpJWDAj7iZnsVs1Hl%2BuBqNHgji6Qr1TWC%2BPvnCbUaEIRB7baYIdMIXCNQC%2B%2B421RjNiAsSuVurAWDXSjmySOmtblPRIk%2FDPX%2FzeyTIDtCcDvbYQ4AtNMVy7XmBNyDAjehSmVq9uQkMbioBzQ41fufkTnLOXQhlbcAFpQ%2FOwYMj5151kdTReS%2BZOWvDhWr9BMl8oP4BQ5gT4pDCoyvd8YzJDqvC6NF5vfVgRCVpBXzUSjFi%2Bo035GA1jzaMaZACgsigkXo29jo5L0YPSb0AZwTCh8VZWevnbSr3XiveMcBsk6RMoVyIPxu%2FUoqL96%2FcEM5gNfnZy%2F4qd1elWvofy4qRs%2BflXYnHz5g1QQsUI47TMO5k5ZdSSmV0K%2FE3XFv3EOKPmW0GBh3kzl5kDx7zT5n1HqwHc3q8dQNwpkMYm0fMfNrmWuVJpGFEIfrTBwJk7xzzpsZXpDsrPyuqLZvYsewoejSdr9%2BK8kp6yTRNnIU5LDb%2FbgsIkELtUfsQLzsyLR2QMeyqK4gBKAPhKi5P83C4C%2FRCeJFpn6eXurwdZddRqvRPYpNgRiDvFf%2FYwwN2YwwY6pgGHhi8sfBAm6Piv%2BG93u%2BNOofcjbq8SwzmEswtnzpiVnTP3s5XRiBAQQenUrRLfxLQ2PT3Q8aTXXoMYkycH5YR39LgKFsKFAZQX2wQgV93VysBZlySp1KnEXg4ecbB16jKyjf%2FRfWiQEMn76k9tRYIoJh5ljUE6Cj2jc1KLvj%2FRfU77gLcv1gnI0sKJDnSAYWiGxKGhBAkaRBCcZKUx%2F55ew7o1dhBH&X-Amz-Signature=b7eb8dc6727b9de83fc564b3c55f8f8784fc204ff5c6b0f4d56f71b4b8da2c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPEZXJB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGBy%2FfxnChJeYhzglY40d%2BmTA06CuhQ3kfyNlb%2BEoJ3TAiADcY1Suq9FMCJoMIFdtinEmHZP2kuDZ6QFQ9lT7K7nMSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPNlZFJgMlnBOVI2SKtwDfpfmREQarCk5KdXY3WuevFEB8hjs34NRlVCVq5BVViZgmMXZAsydID8JvLj7wNELndDoKS%2FJBWI1PNBndSnNuDL1LXXHREWP4%2BN1tzRAOqPy3FlgzFtG%2BuM8TAfSqkk0URfFaJMKaYMV94U6OYup2xsRthbEOxxVKJmdUftXBdnbC6%2BrrjZgtxj9lT%2F0KyLszezbOzMLIOgLwIHJ3%2BaA4v2Q6uJsDokbJG9efw56mfCzuy26di2BPQGz%2FR4b30A3U3eXY2fc6MvG9zE1CHrqRQUisj3V9MYrXx6epzRJkba%2F%2BMyb2ekTpa8GRUDo1FlOlBCjmO4xS2Eojd4bdFMnlZTfRgT8X%2FqKA3AZoEXkk01gcm73DK3GSyuLyP1onCb0feNnhdY6nBy3ShX7Fx%2B8Gs33T8UosVuwCzijtxHRrMqp6q%2Fln4HLf0cwYgv8DmmHnhgiohRzDibFczt1X92aKum5dmnxYlOFOyW9Q6hixYaCJwmUB4fs9Xgw1nevpuGLOpuitgIpxCeBABftebfGCX5x6KT958uhmljGchGtWjte2IslZzImSXCI6tRY6%2BBOuOECWEmfmYVttnhkWqtWThvxfVT6Hsb1DL0psU508BXOpEYcANsLNRXA6N4wqd6YwwY6pgFqHcKPPt0BHf9aFgbYHpKalh0jQv9Au9iR6d4%2BuIROOt5z6udxKYRP1JIMLKw%2Blvt%2BK%2FD9VMBfjCBfNULOwPv32dkp%2F5oEcpSK92z9WoQGhGQ2DplekgzMmTI%2BappMVL%2B97e8fbzNx42vwq9croF3NBfI2NaesVpC%2FatGhqKueY62LdILCTN%2BGnJgKGUCuoLKujvod25A86G9Newe16N0pDvRpvDXD&X-Amz-Signature=0fc8879eeef28d73a69c9935ff12728a8eabd79410324ecdbae558259b1ef202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
