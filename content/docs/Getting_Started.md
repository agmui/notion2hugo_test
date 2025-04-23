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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WLW67SP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBXeShyz8F%2Fp%2BnRCKOmIStuewrL1zr0xgce6EnAbaXMcAiEAvfLVpP%2F4tuH8wgOh670h9NTPLDROjYq%2B5hSF01faReAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0tJ1saSeyy0S4RiyrcAx%2BF4Hz721TkLAjQLk6v6gjsJQPPiZvpgyzeHzpPrzkB1X9IoaZz26e%2FUEcWGkllVz6R2%2FKtKWU21QrLuvORewlYTxu5PtCd9DeeE%2BqLQHENu1qnplYOejFnTOD9iIr9HMgOhtYPjL5NvXGf6LlL%2BWtxrsNwulUO%2BDcUbC7s4zFTzY9NvtwnOXpKYlauXz0V9NyV4R0jR7%2BqWHMtc99RIiEUoAltWjnStVgbQP3bsBLEVVb%2FHk8OXQtwb5H7zOwUWy2%2BfyxIogLZTczlnt5qR6hzLVASlBvRK7RHiLnP8nN6xhVwVfpWWh48KpBMglO9BuIglrc6WLmVUohxaMrOp2woAXB3hSuu7wQJCuedCOrKMtFadO3pD0nGKeIURLze9NEh5tRF3eF%2Fb63%2FSZU5Aa46KPNe7aj9fIui23oaZUZFVWNXmk25qT9wZOVi4EdKeUabs%2BRp6oAFeCqantxYGsfm4%2B7RxvQAMfi9dfEXUkw5RMWoMsrSsNqYN389qiwdVm5WHXpopoUSif1GHCsOXpLLtJdVEspsJ03IvPLTR3iqoNRnlm2y4AINAB61saHQECNajq5dHPVLnapdloy5iOcSlq%2BHD6SUlCJ9yZCtLb0P1Fr9bPmffNgLmvBfMPbzoMAGOqUBKMzoAIbcG3xJF3wGQ8F4pHI3jK5rqgTl2AVooRo4pBhEHskn2cg8TnggHNL%2BgxD8wrU%2FxR3N93wxyKik9Y%2BFdbYJWqt%2Fb0YlRWMzw9U%2F4gVppHxXsy4evVfPDtV5BIst4IUhmMgqmM%2BXct27IMVQnA3ZfCVgiEk4zSGRiZltOx7AhBSDzZDMqORlLbm3obmSgxqh5wQLGnG99wB2taJoeFtnS8YR&X-Amz-Signature=90173f54b50132678829ba82c30644bf495491cc0d75c23cdecd4fca2a2f3e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WLW67SP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBXeShyz8F%2Fp%2BnRCKOmIStuewrL1zr0xgce6EnAbaXMcAiEAvfLVpP%2F4tuH8wgOh670h9NTPLDROjYq%2B5hSF01faReAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0tJ1saSeyy0S4RiyrcAx%2BF4Hz721TkLAjQLk6v6gjsJQPPiZvpgyzeHzpPrzkB1X9IoaZz26e%2FUEcWGkllVz6R2%2FKtKWU21QrLuvORewlYTxu5PtCd9DeeE%2BqLQHENu1qnplYOejFnTOD9iIr9HMgOhtYPjL5NvXGf6LlL%2BWtxrsNwulUO%2BDcUbC7s4zFTzY9NvtwnOXpKYlauXz0V9NyV4R0jR7%2BqWHMtc99RIiEUoAltWjnStVgbQP3bsBLEVVb%2FHk8OXQtwb5H7zOwUWy2%2BfyxIogLZTczlnt5qR6hzLVASlBvRK7RHiLnP8nN6xhVwVfpWWh48KpBMglO9BuIglrc6WLmVUohxaMrOp2woAXB3hSuu7wQJCuedCOrKMtFadO3pD0nGKeIURLze9NEh5tRF3eF%2Fb63%2FSZU5Aa46KPNe7aj9fIui23oaZUZFVWNXmk25qT9wZOVi4EdKeUabs%2BRp6oAFeCqantxYGsfm4%2B7RxvQAMfi9dfEXUkw5RMWoMsrSsNqYN389qiwdVm5WHXpopoUSif1GHCsOXpLLtJdVEspsJ03IvPLTR3iqoNRnlm2y4AINAB61saHQECNajq5dHPVLnapdloy5iOcSlq%2BHD6SUlCJ9yZCtLb0P1Fr9bPmffNgLmvBfMPbzoMAGOqUBKMzoAIbcG3xJF3wGQ8F4pHI3jK5rqgTl2AVooRo4pBhEHskn2cg8TnggHNL%2BgxD8wrU%2FxR3N93wxyKik9Y%2BFdbYJWqt%2Fb0YlRWMzw9U%2F4gVppHxXsy4evVfPDtV5BIst4IUhmMgqmM%2BXct27IMVQnA3ZfCVgiEk4zSGRiZltOx7AhBSDzZDMqORlLbm3obmSgxqh5wQLGnG99wB2taJoeFtnS8YR&X-Amz-Signature=b81400a5b22836349d33fdf177b981a03e881a6b7273810d0bc612ad042390ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3SYJWP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC4fsqG%2BhcaMq4gWZAENN044zBMFVGEmqsnY%2FSvGuDLLQIgF4H4SHJVuRi%2BD3rx3CRKrJ%2FIeC%2Fg3m2roe46jkE2m20qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGXuV2iOTcMqjBmsSrcAyxw8s6T1p1dJ2SvooAI494Fw8qC4ZXjZFqn3w3oUi6CwH4MPXd0R5uNi8mooeY32LCkn9cTft7Au9eLbBGuWhcz5cZRkI%2FBclZfHSo5RwCkGlgs44fnl1Kb1lB74GSezanbRc36D0NeR2LAjmImvqwgPs%2BrTuyyrSBPOsC5Kns1V2%2Bi%2BRaFmJuHFN%2Bq0EiPCi687WweSHcFiP3AaUuGamheakP6XweNpTEcNHMIIMvXLljb2vSQCH58EGwUawhZTgHAQ4UBBuosINid8GdFJ3cUrAY66ddIgAnFe7L6YSHDfP9Dp9vfSZIArIfwL5CIQ1xErQ1HgtUm6Km%2B3XAo69nSEzEkcK1Cu561y4nJwWzbFpq94H4zQKWGPYjiN3MX9ZUyxJ2ZZjuS4mCVxJjhpaaOj7YutE3%2BC%2FFZRsAWHc2bLIygQkKHpP%2BX0n4%2Fwc3TqXuSh1E6af8%2BnrIVl2ERapo338BSMSm7aA06HbNl9ebrDia9LjXsVUwF19%2FL%2FwJDlKH3wuM0B8dmve95nmLH3yULXuI2eitQALSlNJXCsmIp9gMb2V2Rmt55%2BhFeYvsWv3TpF1phP15m%2FohPmtNk7BFekhDoF70jjqBKMWrtU1ACT5cDSEfeNN7G8RcPMNXyoMAGOqUBVOACiWylsles2TbEt8SFhZR5d8ZWOITkFy72P%2BbKvxfEhNUjdLv1JSSdl%2F3DojHd6QxgMuVsmE%2BfGpZ1Onun0DBC8S5OEZ6H%2FcnVOBBWQn44QzsrKh2nwmYJmOk1zOY4YSKYe1kEobYmyjEx9KYxzojQsbzH8ngvCulMooKxsTeUUxU0%2FK1fHsAe3BvZP13pqiR%2Fmy3VP%2BiUWP79Wc89zWnMFYy8&X-Amz-Signature=5f9e722183c17026dde7507f28084967dca5fc25c8ab32a47717bc8c92bfb8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3H6LS4L%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDQozFZ%2Bpe3iDqr3NJeOwsCQ1ySfB9F97dRm1fKtVBkIgIhAJWi%2By3P9n9QFsCUMuSlaXCOE%2B5fCzrKuQqD0x7ITSyeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcJzE9LpWGnGASvX8q3AMzQ%2BwI%2FCnwh6s0t3JR5bRn4pJ7ADHoiHewmKYRKn4B5UQnu2L5TWIkz4pZ34Q2Pw8Tm2UTYinIPJF3GdI0qAPW7w3BvhE%2BZN%2BbLUk%2FnJ7Hw1OArnlafBNW63FSkfvZAaJgjNM8GHQODU25%2FsUpaIdR6O70zEDtRIZsE37Ude2r1kOfkjaCzWxLKH0myTFj5nDYp57I%2BJC%2F%2FWoTvLj4fpsPmf7d2yZn%2FNCXHvE%2F5vUKV7KXFuHVJVWWvEmiB0jz3aVmqLrKLijoKrh4Wa%2BXzchCZw1x8wvQ7zKTlgbOsBO8sTUYzYGL2%2BegT2EufwtPwUgsPLdCaOwy9s0hSpk2xJ4RPI1K9l6cE9nfKc%2Fp%2FHUHv9w5USI%2B8wMJsXP5fdjDKQvvKkKKYxqr%2FHt5T0mRJkdTjGBe3SK%2Fv96BEXwn1vcxcOBKpszOqdRBqYV9ELVNQc3V046zgO3zI0MNk%2ByefdPWsBPYen0T9v%2F5QKRdvv3y3fnnEjGW6I3vZVPizjAXBNo%2BB85f%2FfFnx%2BH%2BQ%2F%2BSoDOhAPS9AOiw%2BFeZ%2FzAUGxJqZcG0KT9iznomoBQQEqMp0Z3NOeSib5XijJkH2DvaNsrehfFdE8xC9nm02u%2FnU%2BNcY7bmadygmitdIsCdSTD68qDABjqkAQtBW1SBRjFnR1xrcaQVZ%2Fm%2Fr%2FUNM4PPl%2BwUHf3459J3Q6nnj3KgMV%2FXsysud2fTr35xHER%2FWVOXFxxoFX6HdEAuJ0xYsx3POaVHcIgcwNFByZjqb4tt9lz%2BL5eGX9OwE%2FQIwHwMPCu1Jm6cNlz7K2AN1fMhBNmRrzVm9uJAKb9wCK9kqOLNh%2F3q5xGdI8%2F6r%2Fh%2BMm0YK3FfelwWnRhkS%2Btlncej&X-Amz-Signature=eb4e7678f6e67fc7a181e316ee6ff88abe125efd3fda8d5e6451dc014fd41f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WLW67SP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBXeShyz8F%2Fp%2BnRCKOmIStuewrL1zr0xgce6EnAbaXMcAiEAvfLVpP%2F4tuH8wgOh670h9NTPLDROjYq%2B5hSF01faReAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0tJ1saSeyy0S4RiyrcAx%2BF4Hz721TkLAjQLk6v6gjsJQPPiZvpgyzeHzpPrzkB1X9IoaZz26e%2FUEcWGkllVz6R2%2FKtKWU21QrLuvORewlYTxu5PtCd9DeeE%2BqLQHENu1qnplYOejFnTOD9iIr9HMgOhtYPjL5NvXGf6LlL%2BWtxrsNwulUO%2BDcUbC7s4zFTzY9NvtwnOXpKYlauXz0V9NyV4R0jR7%2BqWHMtc99RIiEUoAltWjnStVgbQP3bsBLEVVb%2FHk8OXQtwb5H7zOwUWy2%2BfyxIogLZTczlnt5qR6hzLVASlBvRK7RHiLnP8nN6xhVwVfpWWh48KpBMglO9BuIglrc6WLmVUohxaMrOp2woAXB3hSuu7wQJCuedCOrKMtFadO3pD0nGKeIURLze9NEh5tRF3eF%2Fb63%2FSZU5Aa46KPNe7aj9fIui23oaZUZFVWNXmk25qT9wZOVi4EdKeUabs%2BRp6oAFeCqantxYGsfm4%2B7RxvQAMfi9dfEXUkw5RMWoMsrSsNqYN389qiwdVm5WHXpopoUSif1GHCsOXpLLtJdVEspsJ03IvPLTR3iqoNRnlm2y4AINAB61saHQECNajq5dHPVLnapdloy5iOcSlq%2BHD6SUlCJ9yZCtLb0P1Fr9bPmffNgLmvBfMPbzoMAGOqUBKMzoAIbcG3xJF3wGQ8F4pHI3jK5rqgTl2AVooRo4pBhEHskn2cg8TnggHNL%2BgxD8wrU%2FxR3N93wxyKik9Y%2BFdbYJWqt%2Fb0YlRWMzw9U%2F4gVppHxXsy4evVfPDtV5BIst4IUhmMgqmM%2BXct27IMVQnA3ZfCVgiEk4zSGRiZltOx7AhBSDzZDMqORlLbm3obmSgxqh5wQLGnG99wB2taJoeFtnS8YR&X-Amz-Signature=672468c80463975990daf0a9193c0af4fe9aea820539476b71eb9b627fe197d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
