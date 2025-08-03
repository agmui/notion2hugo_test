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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63JBG37%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FnShpDr%2BUkfd8Uz0yLsskKr3Xd5jQxn%2FjXWklE%2BNxAiEAgBUnWGsRctKK1ZMpCx3lixV7Fgoy%2Fgpt%2FEvgN8ANGCkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCHqwHUMMZ3fpEGQdircA6F%2F3h4mmLc77mpjvpr2epjBc616wDWCYkga2n2ClP58veukUD5a178RrLPsJYEe5GjGKcSjPJDbLQKZ3EyoX3H0pKcEiajTFwOpqNiLXqP280dk6xEz5Y3UC4atAoA3TCAzGnikNAgnTnUv%2Ftc%2F%2BtGM6IzD4DmGPfDzDFE6WFkhlNXBCBJhPnAKfJ9ep9PBDWUrVrRbXccUYbhzB146NkaiuePwNBlNU3k79yoPalyKx2I1azk5op5HcC9%2BFVJlYdQD%2BAmYbLxWwU%2BEjkkREV%2B9lyy4jNEl0sDdU9brUX2ltiKYA7Gr8gqrgkVpGg8tNCsGECCxiZj7fEy0gVX%2FVneLdpFhlEZLZYBXckMzIlolUKUtV%2Fn2GYg6TWBQEHle8WTeJ%2F72It8rhBoHSl9UfTCpvmdb4MB%2BMNcyOWN0RFMOzxH7lvRCoGyT4nIjUgjorKXMnBxmS7Mg6bi4%2FSQAiFiV0NOnyJedgUSdsenlTjRO39C02WVxYFjmCec8y7evrmNGgMCrIyDJWFKgXLzZEmNN600vvEvZB6vjspV%2FT%2BWPjcd7DAxbgrtAVw75mSR5rEOIjBN%2FchYT5bPjGCkK9VH8CE4G%2BdvhVtjowpBIUZ3ItnbBrTQl9Ru1UBhEMPmju8QGOqUBsfN0PiiNJfphk1qbX1NUu1CexoBaehsKgeZhzhqz1ZiHy6uGl8qj6gyxHAC2OteSkD4vOfkR9npjaAzCuHWSSUCH9ncCSsir7H3js66xv9Khfwyc64w6rjSonGbvKk8ff6psIbdhih%2FyF7Gs3qboyFl1rcyG%2BlpMwxj62oeJWEtUSd9K2LoYYW0YxfcIjud1Dsbu6tPTHZ9NKVWBN%2F5%2BNKrwRGHp&X-Amz-Signature=70fb50128a80135ee06b4968c6fc5dc71eba2e36be5a262e7e1dd0c35b4ca19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63JBG37%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FnShpDr%2BUkfd8Uz0yLsskKr3Xd5jQxn%2FjXWklE%2BNxAiEAgBUnWGsRctKK1ZMpCx3lixV7Fgoy%2Fgpt%2FEvgN8ANGCkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCHqwHUMMZ3fpEGQdircA6F%2F3h4mmLc77mpjvpr2epjBc616wDWCYkga2n2ClP58veukUD5a178RrLPsJYEe5GjGKcSjPJDbLQKZ3EyoX3H0pKcEiajTFwOpqNiLXqP280dk6xEz5Y3UC4atAoA3TCAzGnikNAgnTnUv%2Ftc%2F%2BtGM6IzD4DmGPfDzDFE6WFkhlNXBCBJhPnAKfJ9ep9PBDWUrVrRbXccUYbhzB146NkaiuePwNBlNU3k79yoPalyKx2I1azk5op5HcC9%2BFVJlYdQD%2BAmYbLxWwU%2BEjkkREV%2B9lyy4jNEl0sDdU9brUX2ltiKYA7Gr8gqrgkVpGg8tNCsGECCxiZj7fEy0gVX%2FVneLdpFhlEZLZYBXckMzIlolUKUtV%2Fn2GYg6TWBQEHle8WTeJ%2F72It8rhBoHSl9UfTCpvmdb4MB%2BMNcyOWN0RFMOzxH7lvRCoGyT4nIjUgjorKXMnBxmS7Mg6bi4%2FSQAiFiV0NOnyJedgUSdsenlTjRO39C02WVxYFjmCec8y7evrmNGgMCrIyDJWFKgXLzZEmNN600vvEvZB6vjspV%2FT%2BWPjcd7DAxbgrtAVw75mSR5rEOIjBN%2FchYT5bPjGCkK9VH8CE4G%2BdvhVtjowpBIUZ3ItnbBrTQl9Ru1UBhEMPmju8QGOqUBsfN0PiiNJfphk1qbX1NUu1CexoBaehsKgeZhzhqz1ZiHy6uGl8qj6gyxHAC2OteSkD4vOfkR9npjaAzCuHWSSUCH9ncCSsir7H3js66xv9Khfwyc64w6rjSonGbvKk8ff6psIbdhih%2FyF7Gs3qboyFl1rcyG%2BlpMwxj62oeJWEtUSd9K2LoYYW0YxfcIjud1Dsbu6tPTHZ9NKVWBN%2F5%2BNKrwRGHp&X-Amz-Signature=7ecfe1275f9a3b659a5ea95808512fe21207dac94cde71903b11a14d8d92dad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63JBG37%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FnShpDr%2BUkfd8Uz0yLsskKr3Xd5jQxn%2FjXWklE%2BNxAiEAgBUnWGsRctKK1ZMpCx3lixV7Fgoy%2Fgpt%2FEvgN8ANGCkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCHqwHUMMZ3fpEGQdircA6F%2F3h4mmLc77mpjvpr2epjBc616wDWCYkga2n2ClP58veukUD5a178RrLPsJYEe5GjGKcSjPJDbLQKZ3EyoX3H0pKcEiajTFwOpqNiLXqP280dk6xEz5Y3UC4atAoA3TCAzGnikNAgnTnUv%2Ftc%2F%2BtGM6IzD4DmGPfDzDFE6WFkhlNXBCBJhPnAKfJ9ep9PBDWUrVrRbXccUYbhzB146NkaiuePwNBlNU3k79yoPalyKx2I1azk5op5HcC9%2BFVJlYdQD%2BAmYbLxWwU%2BEjkkREV%2B9lyy4jNEl0sDdU9brUX2ltiKYA7Gr8gqrgkVpGg8tNCsGECCxiZj7fEy0gVX%2FVneLdpFhlEZLZYBXckMzIlolUKUtV%2Fn2GYg6TWBQEHle8WTeJ%2F72It8rhBoHSl9UfTCpvmdb4MB%2BMNcyOWN0RFMOzxH7lvRCoGyT4nIjUgjorKXMnBxmS7Mg6bi4%2FSQAiFiV0NOnyJedgUSdsenlTjRO39C02WVxYFjmCec8y7evrmNGgMCrIyDJWFKgXLzZEmNN600vvEvZB6vjspV%2FT%2BWPjcd7DAxbgrtAVw75mSR5rEOIjBN%2FchYT5bPjGCkK9VH8CE4G%2BdvhVtjowpBIUZ3ItnbBrTQl9Ru1UBhEMPmju8QGOqUBsfN0PiiNJfphk1qbX1NUu1CexoBaehsKgeZhzhqz1ZiHy6uGl8qj6gyxHAC2OteSkD4vOfkR9npjaAzCuHWSSUCH9ncCSsir7H3js66xv9Khfwyc64w6rjSonGbvKk8ff6psIbdhih%2FyF7Gs3qboyFl1rcyG%2BlpMwxj62oeJWEtUSd9K2LoYYW0YxfcIjud1Dsbu6tPTHZ9NKVWBN%2F5%2BNKrwRGHp&X-Amz-Signature=b93df6a6ceaa6411def9428e957fa6169e9e93431cf8fb8f2daf6f72a19ee846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YND6D27%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiUvg%2BVY8Tlqo9GNN2cz2tcnsSSCBQYQ6Ko2qUcAyfCgIhAL6oPceZXuCBGO0xP2EvjBjaK1PByUO7gaULU0oZrIeqKv8DCCQQABoMNjM3NDIzMTgzODA1IgxtLoi%2BvfTVtsWlEAAq3AP3Y4hhJoU2GnELIT3E9zW0b%2BRJ8bn1s%2BpNOWgBCZozO0gZVyV0gBMl2CzHSC26Tid7u4TutVe6%2Fq5Zg6%2B%2F5ttZglvjoQjiMsSjVdVqz69TIOmrNKw4G1jyh1SMSIYwJY2BnDw6Bdkp1IrBV82ebHkov3NvUVNbyOd0WLTEMVerKOlLec7r3HMDkQksUqTTTzuVS%2FJhhcnvVL8t1Dt67FFRSepqs6p2cQtzrs0wNkqJPTByBaD0N1WLXnuf5QpiE4WvcBiXCUHBzel5KvlScOIWbYP68C6LHZWmpCqCirmEsdR2Z9QMuK2PjQ5ci9hWMhV3j%2FRY8LdV17IBt2LfT%2FBl2Ow5oi8p7FvfmZbvNpqrwxOi1KqhvnjYFlTS%2F6Z69Iuci50Yg03U0XYCpbtOoCZ2vCYEiSw4IYiosc5hpTvSOfjXm1nWjW68Nu9Lip11uq%2B2FsVQ3UgqNP%2BvXg9BLx%2BX88R9fu2b8zG3ACXzrUyNUmJAVSf%2BvDnJQOWgPja8BS%2FnvyOpJv5ZCIH4Sr90eNjHK8zrY1pdvBrICFD0QhCn%2FRapVTAPVZpkzcfWo8Vo3w19yUjox%2FjJFAy14PBrKKc4KgoRLcS%2F90PFBjAkWwTIn21lusWTJiMPENPD%2FDDvo7vEBjqkAZ0Fpl90s8gaqa7xL7%2BawOfwWRQ5nChM6Nkr7ri8Z7xL2ps5SB7M7bVRpzWK6Poe832UJ7j7vCgGSBI5n%2FY7IjVNdXm9pSudoLBBPeHiO50RXV0fZs1A%2Flrqbx4qnOUPQ%2Bs4uqid0TE9VGVkW1Dd4oIykHFsezksdnkODJ04qHCXjbf4PWK1TK0P5I2nnp0VJVqtgz4W7kHx14aJlUJhtbOjMKfb&X-Amz-Signature=1301fc44ad7c43e08f870e5fed50be9925a338ec308651aa596eaa7e7158f96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EQVQYEH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYNyIZXaHv%2BxN9d%2FnS8s3eQ72p31QJ5c%2BnlTD64t3rOAiEAsPDe5Bei4phTTUU%2BjoJr5J%2B0Jh8Cd5AWw74y%2B2cq2E0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKa4SXPeywt0lawSJyrcAwIpZnUF4K6Um0E6BYClzSjyLjUBNXTc7lVCnixAAA5vxAF89ovMbtehjOgOsy%2Fi1uggGmo3yz8O9XaUNio3dCQwx9z0NEdfuHWstZWTDMr5NxcMZ7VmjUYq29Dgo36WI1qX81wDrajLQBeK9aWx0jmIUoLtyiNY17grhamDXLT4ZjsX4u%2F6aGLkWUlKNTbUOxg6foYwhXhV8uSdDeGXeWXScfaS8KlFlczLJ1g0IdSvlUQScxE0wv9dbbBb9dP2nnoALZvCzUeR%2FIxpvTEx02XcJKUf9dnxj9Bz91pAsi%2F8VMWycgpfRuj9EPPnJ0rkKp1ixlbGzVli8P1d8OnaXMbsWP2WZCrebrr0yGy25NIZ%2Fi3r2OOFUUA9L1aqfRnWWlmRZaRpiGglLCgpgAUrARRfy2at4l6LGspp8upcLrkDBrLd%2Fw%2B3nHLleKiAIlxQ%2BWIo%2BWuw2MWoIY%2FzCKSCACiR9qPd6PHmtUakLw7j4je3hqqmshMC%2F%2Bu3uIfFI%2BB%2FIyjWjJEUEk2UeYgl063DFJDfoLm5eQEX%2FvnH3MaSSgRourlkWg8t3ekTCvW2Dk6bb9eXTWeC3t0%2BVhzTojmwPtIW5Tz2kMBDOhzI8BbNSJggOg1kCz0TNFQ%2FCAi5MPKlu8QGOqUBVYLDhRTIBHkQBuG9N8X3iKzJXUSqCZXMav%2FGPzRy1YvijjwB1KkZCjomPcBuU8soGgFSm7YBtap5bD28kVEkw4Ct2bBQFrHbTRwwl8HA4e3QjgUbRpXAQxufKWf87bgLH5rQzgybD7hfW%2BIDbtwL36%2BKXUsdSP4Gj%2BT8pGMZ5uFch%2BfXSQcuaAslf5zwlZNmJ4DCYsA%2F2h4xxwYsoqzTyGyuIDe8&X-Amz-Signature=12b8421178802583541983228d0d128264101e81eea3466a55266b7b4b971852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63JBG37%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FnShpDr%2BUkfd8Uz0yLsskKr3Xd5jQxn%2FjXWklE%2BNxAiEAgBUnWGsRctKK1ZMpCx3lixV7Fgoy%2Fgpt%2FEvgN8ANGCkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCHqwHUMMZ3fpEGQdircA6F%2F3h4mmLc77mpjvpr2epjBc616wDWCYkga2n2ClP58veukUD5a178RrLPsJYEe5GjGKcSjPJDbLQKZ3EyoX3H0pKcEiajTFwOpqNiLXqP280dk6xEz5Y3UC4atAoA3TCAzGnikNAgnTnUv%2Ftc%2F%2BtGM6IzD4DmGPfDzDFE6WFkhlNXBCBJhPnAKfJ9ep9PBDWUrVrRbXccUYbhzB146NkaiuePwNBlNU3k79yoPalyKx2I1azk5op5HcC9%2BFVJlYdQD%2BAmYbLxWwU%2BEjkkREV%2B9lyy4jNEl0sDdU9brUX2ltiKYA7Gr8gqrgkVpGg8tNCsGECCxiZj7fEy0gVX%2FVneLdpFhlEZLZYBXckMzIlolUKUtV%2Fn2GYg6TWBQEHle8WTeJ%2F72It8rhBoHSl9UfTCpvmdb4MB%2BMNcyOWN0RFMOzxH7lvRCoGyT4nIjUgjorKXMnBxmS7Mg6bi4%2FSQAiFiV0NOnyJedgUSdsenlTjRO39C02WVxYFjmCec8y7evrmNGgMCrIyDJWFKgXLzZEmNN600vvEvZB6vjspV%2FT%2BWPjcd7DAxbgrtAVw75mSR5rEOIjBN%2FchYT5bPjGCkK9VH8CE4G%2BdvhVtjowpBIUZ3ItnbBrTQl9Ru1UBhEMPmju8QGOqUBsfN0PiiNJfphk1qbX1NUu1CexoBaehsKgeZhzhqz1ZiHy6uGl8qj6gyxHAC2OteSkD4vOfkR9npjaAzCuHWSSUCH9ncCSsir7H3js66xv9Khfwyc64w6rjSonGbvKk8ff6psIbdhih%2FyF7Gs3qboyFl1rcyG%2BlpMwxj62oeJWEtUSd9K2LoYYW0YxfcIjud1Dsbu6tPTHZ9NKVWBN%2F5%2BNKrwRGHp&X-Amz-Signature=9dccf9961e6048db7e078ed34806c34b82d336e45c4d0aad908cccd6a0b1507c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
