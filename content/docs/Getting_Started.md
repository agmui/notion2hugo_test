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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO6NQ34D%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG1B1qsJJrQzeZ6BLvG6UTQhCXcMPr1SflRp3UVwidDkAiAD9LR7HBISI9xH%2FmQ1mmxeCXpOhQMeqfTz3Yxn0TKoUSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtKlxHhOnfTaaQLoGKtwDjOB4jYR%2FpFkGy1R5t3FUouIf8A2KlJg%2Fu4L927IVGt60gJ%2Bs3mMaaaAw29cUfJBrOoTCxisDAL4emm1nf8qzx837ZrkEO5qFJ2g82dDVRTr8Lg8lF25fswb76oRl5B%2Bpx0IqKcx%2FsY9Q0nQbmvvKY533G%2BW3rG6z2zZ216zFggpxC3JSw%2FYkNMcwtJe3Ee3%2FZtmfVeJ7SBRwQvr8JJ2KcXTZQ2hngVgPu%2FJC5gg%2FPOTgL59yzzseZkgb9VHVJkutiw%2FEh%2BwFvBzInVCly6DuoSRLeOY0yh3qCSVlkJ%2F4hM6RrBWS%2BqS%2FMHaPYdKwWIHaGoJmLRcvsQy0Ic4Qmm4oYsVzKIc783Bdlrjm9YZh2uWBympfrDbOrDyq%2FYLAEO3YWG23TwO8rfOnEmDNMNMQf82Vqb6xGAq3hRGUVLzc6aRNHiQ%2F%2BpMwpmjm3p76JZE%2Fzs6wLkxFP7uk6rKnnByeVGhP4zivapzACJEZ%2B1WRnDVtQ%2F%2BiGHfcmUCXjHlItUookHaGYYS69UY6xaMVmOxrufD1ZpXLpkkmlnw1wAuOGPRcHX5SFjkUsK9SEcxY%2F7XlNmcqRts2EnA8PqeTDD4Ko34xyMClnQIj%2B5Ot1jivfJ1XyDoZIgA4aFseVUowhrrxwgY6pgHxe%2FAkpA0ZYYtEL4NlxXqj%2Fjp%2FNN3AJyJhX5rX2YcRmDde5zkR8gzOygbfjM4vvN1DmIfvzG4rZC4xqaHiS8pgdt28ItJj7s3bUNlhz3VjGamaKNzKKvGDKt1HXbmk3rvmjSyTFpKdpTgsKiNfXwN1Y2HSDmZtcg88hHQiBWl%2BuradnAV5wHl1TelRDr6RPslWAeRzdYKqOWZ%2F221Kj5S7wKxT7SWj&X-Amz-Signature=41a2291866fc95709683923eeba9e9f33837faf6bfd0b40b76a6e3f503f00264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO6NQ34D%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG1B1qsJJrQzeZ6BLvG6UTQhCXcMPr1SflRp3UVwidDkAiAD9LR7HBISI9xH%2FmQ1mmxeCXpOhQMeqfTz3Yxn0TKoUSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtKlxHhOnfTaaQLoGKtwDjOB4jYR%2FpFkGy1R5t3FUouIf8A2KlJg%2Fu4L927IVGt60gJ%2Bs3mMaaaAw29cUfJBrOoTCxisDAL4emm1nf8qzx837ZrkEO5qFJ2g82dDVRTr8Lg8lF25fswb76oRl5B%2Bpx0IqKcx%2FsY9Q0nQbmvvKY533G%2BW3rG6z2zZ216zFggpxC3JSw%2FYkNMcwtJe3Ee3%2FZtmfVeJ7SBRwQvr8JJ2KcXTZQ2hngVgPu%2FJC5gg%2FPOTgL59yzzseZkgb9VHVJkutiw%2FEh%2BwFvBzInVCly6DuoSRLeOY0yh3qCSVlkJ%2F4hM6RrBWS%2BqS%2FMHaPYdKwWIHaGoJmLRcvsQy0Ic4Qmm4oYsVzKIc783Bdlrjm9YZh2uWBympfrDbOrDyq%2FYLAEO3YWG23TwO8rfOnEmDNMNMQf82Vqb6xGAq3hRGUVLzc6aRNHiQ%2F%2BpMwpmjm3p76JZE%2Fzs6wLkxFP7uk6rKnnByeVGhP4zivapzACJEZ%2B1WRnDVtQ%2F%2BiGHfcmUCXjHlItUookHaGYYS69UY6xaMVmOxrufD1ZpXLpkkmlnw1wAuOGPRcHX5SFjkUsK9SEcxY%2F7XlNmcqRts2EnA8PqeTDD4Ko34xyMClnQIj%2B5Ot1jivfJ1XyDoZIgA4aFseVUowhrrxwgY6pgHxe%2FAkpA0ZYYtEL4NlxXqj%2Fjp%2FNN3AJyJhX5rX2YcRmDde5zkR8gzOygbfjM4vvN1DmIfvzG4rZC4xqaHiS8pgdt28ItJj7s3bUNlhz3VjGamaKNzKKvGDKt1HXbmk3rvmjSyTFpKdpTgsKiNfXwN1Y2HSDmZtcg88hHQiBWl%2BuradnAV5wHl1TelRDr6RPslWAeRzdYKqOWZ%2F221Kj5S7wKxT7SWj&X-Amz-Signature=d19f4b99a8b6e402bb165e8398cf499b8cc9cabba706af55acc582441a7f47f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO6NQ34D%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG1B1qsJJrQzeZ6BLvG6UTQhCXcMPr1SflRp3UVwidDkAiAD9LR7HBISI9xH%2FmQ1mmxeCXpOhQMeqfTz3Yxn0TKoUSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtKlxHhOnfTaaQLoGKtwDjOB4jYR%2FpFkGy1R5t3FUouIf8A2KlJg%2Fu4L927IVGt60gJ%2Bs3mMaaaAw29cUfJBrOoTCxisDAL4emm1nf8qzx837ZrkEO5qFJ2g82dDVRTr8Lg8lF25fswb76oRl5B%2Bpx0IqKcx%2FsY9Q0nQbmvvKY533G%2BW3rG6z2zZ216zFggpxC3JSw%2FYkNMcwtJe3Ee3%2FZtmfVeJ7SBRwQvr8JJ2KcXTZQ2hngVgPu%2FJC5gg%2FPOTgL59yzzseZkgb9VHVJkutiw%2FEh%2BwFvBzInVCly6DuoSRLeOY0yh3qCSVlkJ%2F4hM6RrBWS%2BqS%2FMHaPYdKwWIHaGoJmLRcvsQy0Ic4Qmm4oYsVzKIc783Bdlrjm9YZh2uWBympfrDbOrDyq%2FYLAEO3YWG23TwO8rfOnEmDNMNMQf82Vqb6xGAq3hRGUVLzc6aRNHiQ%2F%2BpMwpmjm3p76JZE%2Fzs6wLkxFP7uk6rKnnByeVGhP4zivapzACJEZ%2B1WRnDVtQ%2F%2BiGHfcmUCXjHlItUookHaGYYS69UY6xaMVmOxrufD1ZpXLpkkmlnw1wAuOGPRcHX5SFjkUsK9SEcxY%2F7XlNmcqRts2EnA8PqeTDD4Ko34xyMClnQIj%2B5Ot1jivfJ1XyDoZIgA4aFseVUowhrrxwgY6pgHxe%2FAkpA0ZYYtEL4NlxXqj%2Fjp%2FNN3AJyJhX5rX2YcRmDde5zkR8gzOygbfjM4vvN1DmIfvzG4rZC4xqaHiS8pgdt28ItJj7s3bUNlhz3VjGamaKNzKKvGDKt1HXbmk3rvmjSyTFpKdpTgsKiNfXwN1Y2HSDmZtcg88hHQiBWl%2BuradnAV5wHl1TelRDr6RPslWAeRzdYKqOWZ%2F221Kj5S7wKxT7SWj&X-Amz-Signature=62c201c42d4298afdfc95e9df0f42cf2556efcdf0ce52960bfd821cfe74ab8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUPZBR5L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwElXm%2FLU8AHf9zaZjlG7TH5wtVR4mvkgEP%2FbLRn7UOgIgIoR0UHroP1IjMgZSbDucg4v1n3VQvmXb4vBKeZvyg%2BEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBp8MrOuFWXjMstrVSrcAyHRFMoQxhSA9BsgRDq%2Blv2a9b0U6EN1qCyCqP4DzU4SnxOywFYGVoH8rvktmUS%2F17P%2Bin5VRDjO%2B1n2O0nkRYuMPxMmAfvLqQMs70cvE2ZrFokhGA5mCYdsO%2BOJVWwKUyASRaZA9u%2Fv7jK473gokDvkk8VSfIsHtcYWW9Lg%2FcCFoOFPSt9sqflTJE2EKvKFVsStGsIEWNn%2Bh2lSKleBXvEVUrrC3vofCO54YBMEfs0d%2Bwo7c%2BQD1%2FkRhUdHn%2FbnPV46EQt%2BmEn9HPm3%2FnZb4B4ZbpkwOH6oRpMfiP2V61Al0SXvgbGlRGsvXT8yspxmO5ARG3GqlTpbPzOOYKfpcj1rZfJPANdu1uItZI4VIq1PadrHPer69KyxJCdVt2GrGKv6HAQ9Fm09lRnh7laJLtluo6E5rxaF1mIQS2ZNZPZebM8DLbdEIim1ClV877AZsyInQrjIJLrHsHSVb9m%2FLEOBPiDE8FslRHEhMHjPBvPWnsdwjZQPOd61ppGz%2BhaWdujUgfBjaaZbXolD6lI1c57MFhbSIwzedfADqX9KHcvV3VRlNgZfXgQ4BYVuxu%2BoF2SACj6gHnaqL5xhvInT30RNd8hudVa5azZVFvKWYlyZG%2BsmZT0Qi7twVW9lML658cIGOqUBv1KgcC6zZzxixON3quCKr78y8j1IYL9RhtNR8xxJbof1a8VnUKjAE2bnmvmJhuRQVB1%2FR8BwmcVlriNuuQggw9jQLP7a3lb3xCm7s52ImQ5sP1dUsCxr1FzBGTpr69N%2BbXefogtwiT6JLhciioOm90ctsgW8IOJ8gkZiur7NbwJsFO5Tix1dntViVXJLeuQOFfqSS4YCyEXabQGkKi8jLHvunQV%2B&X-Amz-Signature=47d49b24626812a01d3f127d2a11494f843e07e303e5120480bf8157216636da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU34U2H%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGV4R%2B6Q5jzzlah4S9xdM946iwgmnbblH76Dw5cLENaGAiEApgS9FsooRlTpzHTBqmjRAb3g5sMHrpKVE5B0o7wj6L0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDH79y5j8CYBvexGRLSrcA182Au8CHBHmkU1uQf%2F%2Fh5IGesFMYJGUEmYhunc29TDiILqEku%2BJP4OFJRwGCmCv%2FKPZvzoDY2g3mD%2B7dbQQfGh7pbzGe3pfzfqrYhaRwARak0ydwqyYRgRQ%2F4SFIL6n8hFCeIUieuKs39enVtiKnknO%2Beiqy43JA%2Fx5Cd5qDRIS7UlfIOZYWw1up4dzC1Tvoss%2BhhWv6SuiRoxDQoda0mVSLBe4dg3xoE91mg1pldRLN91SP1BUB3h3Lxg6JOOj%2BvUnG33pYmRoWjJA8om4eynvNfG4GrL3nRN%2FygtNldUTfLADLsiUQeth8X%2FsWKAtUdO328ijOUEqZElXk7pxTbYvAXMmgvGiIjuCfSqaU1Gid6o%2F4rW9hXMfyRClbPPnJnzLRVrToNN%2Faq6JnFbAt%2B2CWWb1zmDu7ZuW1FZujbWzalM5G3tab89xTYWQBRd4OUgKY4ABf8WTOFLSU1WbCqGykxqDDVX6vMEJ0BNSqh5vlGQ06B3s5CFtmjDb2g1cQNISWyxaYHqjiRPqm9enqkmrXD9JUOdBWYXeJmssmcrE6TtFECuCJEVpgwRQuZq%2BubGeo7Jtt6mYHg6EOHtyHjZUHb%2BEYtWK195QWD8wzzFvbduI5whRn3mxhc%2BnMLy58cIGOqUBzqD1zPlZGfjoyvflGgmRZeUGMCtLtOwqPwarlOeyspIVM75lsS8WmJQRPU%2Bxbdte369RpgN0Kx5Sk7yYuyN2fPf6u%2BWyeDt8amE15uPnp7BLl4NJiGvOixRY9NEjmbViU1OALfDXrvnFX8mEjXC0NGTWHKbg2n6PsrxsBAn11UujHHUHKIddogUpFyAT5BiHhtfOo3Gf4Z7lYp0ZsXtyNn1S5xw1&X-Amz-Signature=1f8d759f0e6e2babc42d28a8180ad1ebd6aafc8cdbdb52bd943c3f37a10d6db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO6NQ34D%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG1B1qsJJrQzeZ6BLvG6UTQhCXcMPr1SflRp3UVwidDkAiAD9LR7HBISI9xH%2FmQ1mmxeCXpOhQMeqfTz3Yxn0TKoUSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtKlxHhOnfTaaQLoGKtwDjOB4jYR%2FpFkGy1R5t3FUouIf8A2KlJg%2Fu4L927IVGt60gJ%2Bs3mMaaaAw29cUfJBrOoTCxisDAL4emm1nf8qzx837ZrkEO5qFJ2g82dDVRTr8Lg8lF25fswb76oRl5B%2Bpx0IqKcx%2FsY9Q0nQbmvvKY533G%2BW3rG6z2zZ216zFggpxC3JSw%2FYkNMcwtJe3Ee3%2FZtmfVeJ7SBRwQvr8JJ2KcXTZQ2hngVgPu%2FJC5gg%2FPOTgL59yzzseZkgb9VHVJkutiw%2FEh%2BwFvBzInVCly6DuoSRLeOY0yh3qCSVlkJ%2F4hM6RrBWS%2BqS%2FMHaPYdKwWIHaGoJmLRcvsQy0Ic4Qmm4oYsVzKIc783Bdlrjm9YZh2uWBympfrDbOrDyq%2FYLAEO3YWG23TwO8rfOnEmDNMNMQf82Vqb6xGAq3hRGUVLzc6aRNHiQ%2F%2BpMwpmjm3p76JZE%2Fzs6wLkxFP7uk6rKnnByeVGhP4zivapzACJEZ%2B1WRnDVtQ%2F%2BiGHfcmUCXjHlItUookHaGYYS69UY6xaMVmOxrufD1ZpXLpkkmlnw1wAuOGPRcHX5SFjkUsK9SEcxY%2F7XlNmcqRts2EnA8PqeTDD4Ko34xyMClnQIj%2B5Ot1jivfJ1XyDoZIgA4aFseVUowhrrxwgY6pgHxe%2FAkpA0ZYYtEL4NlxXqj%2Fjp%2FNN3AJyJhX5rX2YcRmDde5zkR8gzOygbfjM4vvN1DmIfvzG4rZC4xqaHiS8pgdt28ItJj7s3bUNlhz3VjGamaKNzKKvGDKt1HXbmk3rvmjSyTFpKdpTgsKiNfXwN1Y2HSDmZtcg88hHQiBWl%2BuradnAV5wHl1TelRDr6RPslWAeRzdYKqOWZ%2F221Kj5S7wKxT7SWj&X-Amz-Signature=ad372d4d6a9e4375a62a07ec01139bdff04850308a54803683bf9312f098df06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
