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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU25QIFM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp1BBGuoYUzbuLOvP6%2BLm89ASmZ9ECXopFjGm2JROuhAiEA3W6p9T8Yf5w8DnupJOOAnHnl2w1Me9%2FpsHOSJwTBrxUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkWLhPzd4zghDlDaircA%2ByZ5plEHaSQ%2BuXQgQ4xG5Js62wwN8m4a0VwP7wAlmpvEac9O0ncoTtpepYcLTTbPWvF%2F%2FGXmVvQH8S9vvb520WF1%2FbefwJZGLtcKgLkUpXRd89sAkqZeTwXk14Dc63KHCn9%2BCUMhVjn7NP2dr4la%2BVsF%2B124EDKSwIDmyo%2BQJrYFfEVyu5IjUaZbZNADRDZQRyrKnnBsMOiQfers6%2Bqr3U6Ax0Gvhim05xVKTx3c08zZbULfbtI15enLvAgbWVYSFUCF5yXA6YxVUSYBH2U7peHzxCQhhx20%2Bu775NozWTDR3HpgBI%2BxRzqPCZEWkDl5HodNLU7OYDi9if7s7OFYZBbhaK3R5zW0jLS9XA7o0814Y6VaZYgRRwUEcTikKpv4esT%2BX7yqA7hfZFNme4cQlHlPISgpetRbxihAkaconNAUg6jPTO2Ba7F9XvU1F%2BYRwPCjujznmt6KTwefFRmzL%2FUi2TuPSe7TBX98pDiO%2BVHI7%2FkJUWGi2gbI1bSNokly%2BmpwHQuwztnMXs8jwDfmhp30aDY0GBrF461ZhsaEyodSyWUGSUE%2FCHyHrOlmMOvpkwhvX4WVgiFckMnD3o4SlVn0wWyTT%2Fb7oT5%2BNqQKcvAnrwVE2dy9%2BEUmMn8MPegyMIGOqUBncuUP8%2BwpElBqOHsNuXsUXOtG%2Bn62FBq74gGHCjc4TxFscZhjSSMipyzE%2F8vUz59864H46sWCIcuOLT8Qj89rn8q10J0pobnYGjDW238UHhFIIPsE1pXBsQxB07Go%2BqtYVXh%2BINqzNxVmQtBJEoK2sToEa%2FRCUqM4YRA8Y4krzXyqgaCgGKYOevXuxNDMM3yBQ1pDqNfvXha5NNo6FAWMSHx8Y3z&X-Amz-Signature=2ef69148b4bafd4aa8c4dc6d7c608ad7f4cce2e58670e16140bc7e3cd879753a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU25QIFM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp1BBGuoYUzbuLOvP6%2BLm89ASmZ9ECXopFjGm2JROuhAiEA3W6p9T8Yf5w8DnupJOOAnHnl2w1Me9%2FpsHOSJwTBrxUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkWLhPzd4zghDlDaircA%2ByZ5plEHaSQ%2BuXQgQ4xG5Js62wwN8m4a0VwP7wAlmpvEac9O0ncoTtpepYcLTTbPWvF%2F%2FGXmVvQH8S9vvb520WF1%2FbefwJZGLtcKgLkUpXRd89sAkqZeTwXk14Dc63KHCn9%2BCUMhVjn7NP2dr4la%2BVsF%2B124EDKSwIDmyo%2BQJrYFfEVyu5IjUaZbZNADRDZQRyrKnnBsMOiQfers6%2Bqr3U6Ax0Gvhim05xVKTx3c08zZbULfbtI15enLvAgbWVYSFUCF5yXA6YxVUSYBH2U7peHzxCQhhx20%2Bu775NozWTDR3HpgBI%2BxRzqPCZEWkDl5HodNLU7OYDi9if7s7OFYZBbhaK3R5zW0jLS9XA7o0814Y6VaZYgRRwUEcTikKpv4esT%2BX7yqA7hfZFNme4cQlHlPISgpetRbxihAkaconNAUg6jPTO2Ba7F9XvU1F%2BYRwPCjujznmt6KTwefFRmzL%2FUi2TuPSe7TBX98pDiO%2BVHI7%2FkJUWGi2gbI1bSNokly%2BmpwHQuwztnMXs8jwDfmhp30aDY0GBrF461ZhsaEyodSyWUGSUE%2FCHyHrOlmMOvpkwhvX4WVgiFckMnD3o4SlVn0wWyTT%2Fb7oT5%2BNqQKcvAnrwVE2dy9%2BEUmMn8MPegyMIGOqUBncuUP8%2BwpElBqOHsNuXsUXOtG%2Bn62FBq74gGHCjc4TxFscZhjSSMipyzE%2F8vUz59864H46sWCIcuOLT8Qj89rn8q10J0pobnYGjDW238UHhFIIPsE1pXBsQxB07Go%2BqtYVXh%2BINqzNxVmQtBJEoK2sToEa%2FRCUqM4YRA8Y4krzXyqgaCgGKYOevXuxNDMM3yBQ1pDqNfvXha5NNo6FAWMSHx8Y3z&X-Amz-Signature=440dc0ab9280103ae96c18a1583c06745a9a7d9fafa5b161d3c621130585f263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU25QIFM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp1BBGuoYUzbuLOvP6%2BLm89ASmZ9ECXopFjGm2JROuhAiEA3W6p9T8Yf5w8DnupJOOAnHnl2w1Me9%2FpsHOSJwTBrxUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkWLhPzd4zghDlDaircA%2ByZ5plEHaSQ%2BuXQgQ4xG5Js62wwN8m4a0VwP7wAlmpvEac9O0ncoTtpepYcLTTbPWvF%2F%2FGXmVvQH8S9vvb520WF1%2FbefwJZGLtcKgLkUpXRd89sAkqZeTwXk14Dc63KHCn9%2BCUMhVjn7NP2dr4la%2BVsF%2B124EDKSwIDmyo%2BQJrYFfEVyu5IjUaZbZNADRDZQRyrKnnBsMOiQfers6%2Bqr3U6Ax0Gvhim05xVKTx3c08zZbULfbtI15enLvAgbWVYSFUCF5yXA6YxVUSYBH2U7peHzxCQhhx20%2Bu775NozWTDR3HpgBI%2BxRzqPCZEWkDl5HodNLU7OYDi9if7s7OFYZBbhaK3R5zW0jLS9XA7o0814Y6VaZYgRRwUEcTikKpv4esT%2BX7yqA7hfZFNme4cQlHlPISgpetRbxihAkaconNAUg6jPTO2Ba7F9XvU1F%2BYRwPCjujznmt6KTwefFRmzL%2FUi2TuPSe7TBX98pDiO%2BVHI7%2FkJUWGi2gbI1bSNokly%2BmpwHQuwztnMXs8jwDfmhp30aDY0GBrF461ZhsaEyodSyWUGSUE%2FCHyHrOlmMOvpkwhvX4WVgiFckMnD3o4SlVn0wWyTT%2Fb7oT5%2BNqQKcvAnrwVE2dy9%2BEUmMn8MPegyMIGOqUBncuUP8%2BwpElBqOHsNuXsUXOtG%2Bn62FBq74gGHCjc4TxFscZhjSSMipyzE%2F8vUz59864H46sWCIcuOLT8Qj89rn8q10J0pobnYGjDW238UHhFIIPsE1pXBsQxB07Go%2BqtYVXh%2BINqzNxVmQtBJEoK2sToEa%2FRCUqM4YRA8Y4krzXyqgaCgGKYOevXuxNDMM3yBQ1pDqNfvXha5NNo6FAWMSHx8Y3z&X-Amz-Signature=65420e1d4475fda73a0665c2104cf96e1857ce4275061c4a2c6b7e39a20cf898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAKVDOZW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIVmq7WKl3rP8BSxtqe66L9M%2FSMnmDIWThDvwl0Yrz3AiAbeds5GxcjI8l5Ovyu237UQpQ8iRwNWNKEyeZnJMf5AiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM61jbsJmEnbitvcU7KtwDk9DGBDQ9t8H%2Fbdwts1jLnCzlqFXINpsmxgPeRrveXv%2B35urJte4fowjhWAOiMOqyQDJKdqcx4hqO2wP%2FZdCeGhpb6zxsUA4%2BWD6mmfdquju7%2Bdd3JThHsTLcGmEAeKjFBPE0ZqCGaMxl2I%2BnTPSNY85rQRkrwYPmutxiaK4iRAl6isEH%2BuKKX1hlraOsFWThmNfwBFbKCesK75%2BKikrmzWS5iDssJkcTybBCTX8p1k6jEqkDZ87h8aFov3R3RjvWwPmJ0ae6o4lxcc%2FDnloo7gweRk%2Bhy6DR1XY%2B3oWq6PrjVVBWBe6ZE0Yc4aQR80ugB0GJ2sWKiLI7AdhraR6DjtVtG8bvSYV1ZaBVGV5mEEHAochI3zcmBMRM8ytbCHTUX%2BCig5pJawz%2FIlWM6GwNuRe3vZ3mXM6XioD7wAJwSFVpMe%2FchERZhe8nX%2F0yOReTaIM4iSLGE4vyQYTCNeBkIQH9YDz2iKfDf76sFkDZdAS531pgdcXrMNnbFThUOiLgzERBo%2FBCz83IeIDKxzfM1ynubfu0JNKD8qCgJN%2BOudoS4QqVua2S2DNd3RIoqhKzj%2BbeWPbfl6Uv11H7ewOWTl%2FBzgPlqqmZViFQ0UqwkH0Z%2BtV4IOZBBodEb1YwrqHIwgY6pgHf0BwCdD2dahQwiVElY8kNAs2DLdt1ZjhyVLko0A2ADmAh7%2BZqHgVgnsnajrp97KueJ46rdHElfBt98an9LhxfNO4RxrE5tP9CAtEsqiBEJFQh1biOaaef3C7mdftc9xbeqJK%2FKkxRum3EY8BOH7R9Z0xIkPvd4shRhOmDOi6O46QQwEFy2wyJ0YQl16wXuoefyDuRZOo8lstFpnstkXwfssgWFnr7&X-Amz-Signature=037d6f7e40b2066e634d3544a7a778726304d4ab7d9177fc1782bc8ff92bb869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHG2OH7%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FOdqizDivdVBsAarv4rQjk6NavKEcKn%2F3HAab1BNQvgIgQJrfWmcD8PxvtQRUWj3eeyRZ3%2F7Urzm%2BerkXy8tvTFcqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSaQ0gt89ydFiqH2ircA8zfzrAPPr0wHiZ9h80%2F7WCA1uzQ0haF1mfIcxPdYN3ZLnCqTTPTcuSJiC8dKdJr%2BiFNOQX0TPbq0ZnwNOF3loejIxGApQjqQhMjBYoIJ%2BLyaU2NENFK%2Fh3hQMj8%2FzY%2F9tlNKz7WsrIPJ9QU4AXddW7eFua5N2qkjkW8cz%2FjZBrN9hfsm7MVsYTrH2RHYQ5LdegXu5zyHGpr7yC66xbsBLK0w5pVRoj2C82KKPja5ce4Suq55Sk74rFOgRLaRoPY9MS%2BN4f1NpMQb3hjAO%2BYAnF1vspmP2D%2B3g7rxdyRWuTjhy5nJaZikK0MFJTP%2FfXiaAwZExn1TS6yTCq%2Bq9LFlQdlrvHvq68k1wiqVpTgwVEg3BMGBZwUfo4fNhmAnoSR8Mc3Ie98C6msxu0KSXtou%2Bx4FK2rBCndQ1o89cjBywmxktyjFgLmrTzFKNBrdFSq6TplFMQ1o2AKDcptuYB2zj0gjptAqqqt7fuND5Afw24S6AEgqeeTuAwBCNhrmPF4l2yKDPv%2B%2B3lRM3ztGJlOyqNHq79%2FOcswYC0%2BZByyU7jJay2pp3HbJ65cJwO7%2Bq0XLy7bQsYiNkxJtD%2Bs6RM6qtoamkUkc7fVxVIyInQDFZ4BsUmvwwHiKrSmztrHMPagyMIGOqUBgBbJPal0Hsalbd%2FQ%2F13qmVyDhkDGjS%2BRc8Et%2Bl72n2hvOYnfJFxPIA8WGk66bqxnGD2ehBfo1yC6BO71Ah8%2B6mJLvwfoKfYtKFoCDBba%2B%2FsjQLRQpd%2BMH66bDqbweuYPoHSQbQN0laPAz0jozT8g0O6fGVmF%2B%2FiUW0QqvGGsChtNwAyvZo%2F9%2BTQiZpll4DBXHbanXSGV8hjdUnxbLP3sWwm%2B0Epf&X-Amz-Signature=ee3d8a7fac88baeb0e282b809b725b6eeb552cc8e6261b8dd94e2b97a009dc23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU25QIFM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFp1BBGuoYUzbuLOvP6%2BLm89ASmZ9ECXopFjGm2JROuhAiEA3W6p9T8Yf5w8DnupJOOAnHnl2w1Me9%2FpsHOSJwTBrxUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkWLhPzd4zghDlDaircA%2ByZ5plEHaSQ%2BuXQgQ4xG5Js62wwN8m4a0VwP7wAlmpvEac9O0ncoTtpepYcLTTbPWvF%2F%2FGXmVvQH8S9vvb520WF1%2FbefwJZGLtcKgLkUpXRd89sAkqZeTwXk14Dc63KHCn9%2BCUMhVjn7NP2dr4la%2BVsF%2B124EDKSwIDmyo%2BQJrYFfEVyu5IjUaZbZNADRDZQRyrKnnBsMOiQfers6%2Bqr3U6Ax0Gvhim05xVKTx3c08zZbULfbtI15enLvAgbWVYSFUCF5yXA6YxVUSYBH2U7peHzxCQhhx20%2Bu775NozWTDR3HpgBI%2BxRzqPCZEWkDl5HodNLU7OYDi9if7s7OFYZBbhaK3R5zW0jLS9XA7o0814Y6VaZYgRRwUEcTikKpv4esT%2BX7yqA7hfZFNme4cQlHlPISgpetRbxihAkaconNAUg6jPTO2Ba7F9XvU1F%2BYRwPCjujznmt6KTwefFRmzL%2FUi2TuPSe7TBX98pDiO%2BVHI7%2FkJUWGi2gbI1bSNokly%2BmpwHQuwztnMXs8jwDfmhp30aDY0GBrF461ZhsaEyodSyWUGSUE%2FCHyHrOlmMOvpkwhvX4WVgiFckMnD3o4SlVn0wWyTT%2Fb7oT5%2BNqQKcvAnrwVE2dy9%2BEUmMn8MPegyMIGOqUBncuUP8%2BwpElBqOHsNuXsUXOtG%2Bn62FBq74gGHCjc4TxFscZhjSSMipyzE%2F8vUz59864H46sWCIcuOLT8Qj89rn8q10J0pobnYGjDW238UHhFIIPsE1pXBsQxB07Go%2BqtYVXh%2BINqzNxVmQtBJEoK2sToEa%2FRCUqM4YRA8Y4krzXyqgaCgGKYOevXuxNDMM3yBQ1pDqNfvXha5NNo6FAWMSHx8Y3z&X-Amz-Signature=f40a88d3c3d8083b145fdf30f645f2af6d1a59f928c1024adbcff634757a0b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
