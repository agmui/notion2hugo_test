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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4YPCEZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3wdoo5HTYriSjmh%2FUkAuWZWXSpFfC9t0brNJjLL63wgIgDG%2BqiNEXcMrcReH5R5gAnpbMDHu6iOCRr6tk6TVQcqEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI1mDnXwL4KmTReHzSrcA2Y5G883DetpIAOh2BwwKKXQkAscc1fNwv2CROUfH%2FD2yeumRcdOoDIXqO6tM3MHerFCL%2BL6fvw96aFXFtitVpJskk6QtoVnvMj4vZ5oWjoHEWLDmCqB%2FUf3DAvsAq54x8devkzzIYCO3IpHXOhpeQjIwXaOhRPeVgHqOb6OVvE0WHlwfj%2BRm8bOO23iR7Jbmh04%2F8KeW25VPGDSH92JJNntcaHDPhUlMFGwOAa8RSbwlqYOzfasMNLHG6c56C5rvTYXFq8r7600cg%2B%2Bswq%2BfpnsWTpQXPBBG1dUD1nmaNvD%2F6RIrtX3mBje3A%2BLIOc84w%2BFsG0umbkX4nMKloVLgaCLJ3jmtYCaEAYKcb4AgX2GMajOLeFultC3anawXeTEENEX2u3NQtVl%2F4y6%2FJLjXw8wM4VBOmBs1%2BNsEbaHFBgiZV6PVNak3NFB9bg95RVT3q26kcNeQvg87C7At8HIT1cZqH7JwyLUnJO2jIPj3vIsrsSywU2uPAGQ%2Bnf2FqOOy3LusjtmyKyxrHcmyTzkGZS4yTNQDnov7JgCLA9zS6CVyxn%2F0AhIeAe7lHln%2B%2FA54HpWI17xsmYUXWnaigIohHXt3wC4wqbUAERy3PT%2FYJ5Gct0xOAC0B7OtkOpYMMOmosEGOqUBC4p6kKEIm2zK%2FlvNnPBqGTQpfRCzxkeC0IQLLDK7uuvxaqD9XiQwwbezoDth2L0aURStMo0MbVbLjIHOnR2fHuyFsm%2BH2pYathvpBsIbYIR%2F%2FHqq7GZbdtK0kFesokKiEd1O3N4wPP75STXnVqt1xLRtxmlLgLfZCuqUekZ8DJcdfuVE1x52aIMB35hdCCdTucl0AGU4rNNK0oR9wxevBQ26CBD9&X-Amz-Signature=07efc7075ae59bb8f4fb3e269407aac22914fc5b2b043de0b326567386b04ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4YPCEZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3wdoo5HTYriSjmh%2FUkAuWZWXSpFfC9t0brNJjLL63wgIgDG%2BqiNEXcMrcReH5R5gAnpbMDHu6iOCRr6tk6TVQcqEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI1mDnXwL4KmTReHzSrcA2Y5G883DetpIAOh2BwwKKXQkAscc1fNwv2CROUfH%2FD2yeumRcdOoDIXqO6tM3MHerFCL%2BL6fvw96aFXFtitVpJskk6QtoVnvMj4vZ5oWjoHEWLDmCqB%2FUf3DAvsAq54x8devkzzIYCO3IpHXOhpeQjIwXaOhRPeVgHqOb6OVvE0WHlwfj%2BRm8bOO23iR7Jbmh04%2F8KeW25VPGDSH92JJNntcaHDPhUlMFGwOAa8RSbwlqYOzfasMNLHG6c56C5rvTYXFq8r7600cg%2B%2Bswq%2BfpnsWTpQXPBBG1dUD1nmaNvD%2F6RIrtX3mBje3A%2BLIOc84w%2BFsG0umbkX4nMKloVLgaCLJ3jmtYCaEAYKcb4AgX2GMajOLeFultC3anawXeTEENEX2u3NQtVl%2F4y6%2FJLjXw8wM4VBOmBs1%2BNsEbaHFBgiZV6PVNak3NFB9bg95RVT3q26kcNeQvg87C7At8HIT1cZqH7JwyLUnJO2jIPj3vIsrsSywU2uPAGQ%2Bnf2FqOOy3LusjtmyKyxrHcmyTzkGZS4yTNQDnov7JgCLA9zS6CVyxn%2F0AhIeAe7lHln%2B%2FA54HpWI17xsmYUXWnaigIohHXt3wC4wqbUAERy3PT%2FYJ5Gct0xOAC0B7OtkOpYMMOmosEGOqUBC4p6kKEIm2zK%2FlvNnPBqGTQpfRCzxkeC0IQLLDK7uuvxaqD9XiQwwbezoDth2L0aURStMo0MbVbLjIHOnR2fHuyFsm%2BH2pYathvpBsIbYIR%2F%2FHqq7GZbdtK0kFesokKiEd1O3N4wPP75STXnVqt1xLRtxmlLgLfZCuqUekZ8DJcdfuVE1x52aIMB35hdCCdTucl0AGU4rNNK0oR9wxevBQ26CBD9&X-Amz-Signature=0047b6f4baad56abf47bdf851e5d9777d834dff66bf7293139d4d6fc0234c9db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4YPCEZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3wdoo5HTYriSjmh%2FUkAuWZWXSpFfC9t0brNJjLL63wgIgDG%2BqiNEXcMrcReH5R5gAnpbMDHu6iOCRr6tk6TVQcqEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI1mDnXwL4KmTReHzSrcA2Y5G883DetpIAOh2BwwKKXQkAscc1fNwv2CROUfH%2FD2yeumRcdOoDIXqO6tM3MHerFCL%2BL6fvw96aFXFtitVpJskk6QtoVnvMj4vZ5oWjoHEWLDmCqB%2FUf3DAvsAq54x8devkzzIYCO3IpHXOhpeQjIwXaOhRPeVgHqOb6OVvE0WHlwfj%2BRm8bOO23iR7Jbmh04%2F8KeW25VPGDSH92JJNntcaHDPhUlMFGwOAa8RSbwlqYOzfasMNLHG6c56C5rvTYXFq8r7600cg%2B%2Bswq%2BfpnsWTpQXPBBG1dUD1nmaNvD%2F6RIrtX3mBje3A%2BLIOc84w%2BFsG0umbkX4nMKloVLgaCLJ3jmtYCaEAYKcb4AgX2GMajOLeFultC3anawXeTEENEX2u3NQtVl%2F4y6%2FJLjXw8wM4VBOmBs1%2BNsEbaHFBgiZV6PVNak3NFB9bg95RVT3q26kcNeQvg87C7At8HIT1cZqH7JwyLUnJO2jIPj3vIsrsSywU2uPAGQ%2Bnf2FqOOy3LusjtmyKyxrHcmyTzkGZS4yTNQDnov7JgCLA9zS6CVyxn%2F0AhIeAe7lHln%2B%2FA54HpWI17xsmYUXWnaigIohHXt3wC4wqbUAERy3PT%2FYJ5Gct0xOAC0B7OtkOpYMMOmosEGOqUBC4p6kKEIm2zK%2FlvNnPBqGTQpfRCzxkeC0IQLLDK7uuvxaqD9XiQwwbezoDth2L0aURStMo0MbVbLjIHOnR2fHuyFsm%2BH2pYathvpBsIbYIR%2F%2FHqq7GZbdtK0kFesokKiEd1O3N4wPP75STXnVqt1xLRtxmlLgLfZCuqUekZ8DJcdfuVE1x52aIMB35hdCCdTucl0AGU4rNNK0oR9wxevBQ26CBD9&X-Amz-Signature=4754ffaf7c8e67b140d69edbb9eee6d8fe6c060b7f4521f1c9653c53bf4269b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z22LWMMP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElLWWTvCn17PfkNTAbR%2FH5bt0bP2C9oFb0GkG5fBD0LAiEAgIDR0vaVzxJ%2BJAiivsnHuLB%2FcuVScGCywJrk6zII768q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFJ6H5ap5V%2B3s0FjYyrcA8uqh7xGTgCoX5QLg472YaWeUwKtTUiFCGQz7de6jp3tw5siuXVYm%2BN7DzlRUbBAZnYBnnLH8v52LpOnOIhruyZhz3sou68L6v31gyDMD6A0r8NkDaHa7560xXclCmOmd2fIskNiD%2BjLEVAL4DFI%2BCclx76YYMOcmpKI9cKUmO5vdXXS%2F22ps1BcW2HToQCtKqu9jLtEdqqZToh8TWgEniBiBL3r1vgQiuXNbHLJjBnCZ7otjVWiHhY1YNM7x04nJAWnK4awPeZ5gMPuPwEwMwhotPkcDCnGQ%2ByPpWaOFFcNYBGFa2ZgVjWgZBLp2qhtLGXAGyj%2BVqpgHTll9BTbgLNCkN9YhY58ZiG5y%2BWDX43cdwHf7oQEdrlZ5DGFNaoY1J8yH7qpL4XLYqhX6ANoNzGnIOG82CypzzGPvWafW0yUcdZqmSoSq68OKh6XQJRsHAhE1ZrFprkSUU9VZxyN5a%2FR5jUCYTlrEwNuegbMek6XVHN3R130rFvgjqUcGrIWlWVo1%2FF9Qdg4LAK%2F44gA5q%2FEJs%2FZt6FzG%2BXyum5RTkvUHhpd%2F3mD89PQo61O1EP6sxVN7BFIWQiv54CSM5qjnlJnqtOXh%2FZdRHkavEGRgCwp1hMMNAvAOMXtB0U%2BMKyeosEGOqUBzx4Rwed%2FzQd3h9UL9bLi5ebHiAoVPwuG743%2FLWcD1h6GetFr9MSQSf%2FH2Rm%2BZ1FeDJu55m3FEnsglh6tAYxT9PL7dNI%2BPyI%2BTdjew2n5aeVRu54g%2B6TjYHc9%2FWlj7t7cmTgyuElkFrvgHY10s798f9jt%2BjRW6TyA4oroQAZbRhcEM4WHKh8roy%2BwNc%2FQqXcGSfFiMZAREF4Ic5J0XAQ1u9eNwWFk&X-Amz-Signature=56fdf70e5c009a6837f88d763cfbcd7bcca29964cc2ffbc30a1cda80ceccf559&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQM3UCT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0iFK1kX%2BCi1qLFqqnP1tEpUYVbgJDV58G62uqyQwTSAIgCQIffR79LXQatWhcId15KniUwqmoBtNxHEGZMnN5xk8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNpA%2FgwOOfAOE4LsIircAwtzi7sTI26X2zsND1McDuniAyL0Cgc2MlWR4GYwJmjayEcLdxGcz%2BZYEBBW%2BFmnoFNFn2Bky84eFwNO2iovGqQIsrRIgC3t0mNG9JTRslkgOk3wqnnr3HuI0rWk14c00uPLGaFrESNJvZSMQbxuvEZ6WsbJgTMfEdZhLBEDd5a0VhfkBaq56ykBdfqfU8D9rQTAKquIp4zu5LFsx43c%2BN%2FKgehjQ2RXmo9nLYds%2BMOkBeXWFPPxda%2FYND7Tq9VN2KVJN5U%2BDXWDLkMcQfSthel5vgfO6NrnVcuYa3tq6ZyfhGbgKZVYiz68MoRdS91l%2FyChG%2BHFU2gtnAueUD8nY3y0zMF5D8hpWKNqOMlhgfJstl7yKPUN7MCsYek2xjcHNxvgzskAZjsTO9F5uQpOA32pPEudxJzdsOZdSHc5RvAJdQJgiq74aCgtjyOp60gxopLIaLgI5VTJQD%2FVzr8TK4fPzFSe7Hrh3zw%2B8V1iJki09DzOJAJJSTu%2FS9Q6R3j97Pgd8akY1m174oEjzEOK0z1dJjgGW9pxGOVQ7ObcI8aBrrPZ285Dc2Dpco3CJeURHNy5%2Fb7CPM7WJwYo43OfsUt8aSWftA4c2VVko6bCfEVy5XkdJxDznqBFKmfkMNyeosEGOqUBgtMKfSjsnLwre1XSt9AOG9oaVLprCAEa3SRY20Arx2IwiNWfX9veDJTwUNDsekEoj9%2F4M8pmVtCdynigDbsmvCxOL9587WG8yBvgdR%2FlwEUlwU7N3m9RBIuX%2Flj4YjlH%2FW%2F06wqcx6qBumnoHBNwGw6vWyyda8gW7%2BZoWSUlR6Sjt82NUBXSotLSPhySu7APr9r6MiV5tVI76gnyZIyQf6j6FvHk&X-Amz-Signature=9d2f0b62adb7f0e7ce7913d653723f6ca94571802bd678b8e82bc873134be6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4YPCEZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3wdoo5HTYriSjmh%2FUkAuWZWXSpFfC9t0brNJjLL63wgIgDG%2BqiNEXcMrcReH5R5gAnpbMDHu6iOCRr6tk6TVQcqEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI1mDnXwL4KmTReHzSrcA2Y5G883DetpIAOh2BwwKKXQkAscc1fNwv2CROUfH%2FD2yeumRcdOoDIXqO6tM3MHerFCL%2BL6fvw96aFXFtitVpJskk6QtoVnvMj4vZ5oWjoHEWLDmCqB%2FUf3DAvsAq54x8devkzzIYCO3IpHXOhpeQjIwXaOhRPeVgHqOb6OVvE0WHlwfj%2BRm8bOO23iR7Jbmh04%2F8KeW25VPGDSH92JJNntcaHDPhUlMFGwOAa8RSbwlqYOzfasMNLHG6c56C5rvTYXFq8r7600cg%2B%2Bswq%2BfpnsWTpQXPBBG1dUD1nmaNvD%2F6RIrtX3mBje3A%2BLIOc84w%2BFsG0umbkX4nMKloVLgaCLJ3jmtYCaEAYKcb4AgX2GMajOLeFultC3anawXeTEENEX2u3NQtVl%2F4y6%2FJLjXw8wM4VBOmBs1%2BNsEbaHFBgiZV6PVNak3NFB9bg95RVT3q26kcNeQvg87C7At8HIT1cZqH7JwyLUnJO2jIPj3vIsrsSywU2uPAGQ%2Bnf2FqOOy3LusjtmyKyxrHcmyTzkGZS4yTNQDnov7JgCLA9zS6CVyxn%2F0AhIeAe7lHln%2B%2FA54HpWI17xsmYUXWnaigIohHXt3wC4wqbUAERy3PT%2FYJ5Gct0xOAC0B7OtkOpYMMOmosEGOqUBC4p6kKEIm2zK%2FlvNnPBqGTQpfRCzxkeC0IQLLDK7uuvxaqD9XiQwwbezoDth2L0aURStMo0MbVbLjIHOnR2fHuyFsm%2BH2pYathvpBsIbYIR%2F%2FHqq7GZbdtK0kFesokKiEd1O3N4wPP75STXnVqt1xLRtxmlLgLfZCuqUekZ8DJcdfuVE1x52aIMB35hdCCdTucl0AGU4rNNK0oR9wxevBQ26CBD9&X-Amz-Signature=8fc5eb89a2e27718dc85809436e69268ae7f539ba7480eeb48271818d2f6d745&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
