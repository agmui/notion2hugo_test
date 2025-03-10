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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLMLQTM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIGPW508vAvZl7mCR1Lc9Efray5Orv%2FpzwcdMwQdVRA4kAiEAyMEy%2B%2BvO1Bpwma4xbsBlZ122EjT2SXABo8RIWwqDYvUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdk8Wq8lLfQF798xCrcA4sYBmiA9QOuPmo3VKHeVbbRhstf70MitWPbd11LW7rweYdYFR8JOyAM3jEYtFFMptKA1qlaNW29i4AHh7WXgpvX0egcf0jKBDjDdMy3pk2%2Fsupu4LyhTzFkB8lPuf2%2FeUuYFJuR0hGuIfn0fzRaBd16p7MjOP1VHU%2ByXCU%2FGvOJ5SsSc4zIiScHmCmsnoOxlJNZEXvJLDwGtqxgbcDccK0O8GsqahruGLQT3HLoyPZXsNLe3%2BzhhEt%2FEACUMvpKyOKCHwa1RsEklf%2BShryb4soQcUh43Iir%2F%2FI6kZotkPo0D%2B4x52XIMCQiZzwDQpzXBPwh06vc%2FzN5Bk7y5nc%2BXa95X3%2BOjbyb0ArobqUweiXrP%2Fbye1DhxB2HjIPrrMhys0YilYik7ExJKfJZNtey62rFVA2jpCm9HiuntQbVzKD2TA0Hk20S1dnuc5Wpx1RCqNLJpyxwkDnLUQaA6PEeCzFaHW%2F%2BI7SNpLiAgobbalFlJcsALz8IfViDCtsgc9u0WlfwgcrBintu6jziUOV4HpPWTJ6xjdQP%2BNTjKGijQio2Mq5PbIvapFyESPL56UbMQ5ccQ2IFoM0QztGNWSAi9nZ%2BvrMPaa1Ak6I28IEAiFj%2BQ2%2FmhFF4PkY691clMLDKu74GOqUBlng2x17o69IwQTwYLQU46BE%2FQ3WgzopzKqG1hgVfOMZfjGV0Og%2BbFDunJnlRSUVoAOx8mA%2B6dwKM%2FeCCIB7ObCnM3pM1DhDhuuFnIP0%2B8hD7TOcU3yrmlFBlCaLENnEPwNHpDy8NYwRPkKjxD1RtpqT4fqnLPJzagsDquTXnwNmOiXKVQtWWFR%2FoNcJ5FIPcK4YHP%2FqZB4Aq2F2ISLx5NgewhVMv&X-Amz-Signature=d4340bb5072f7954f00cbab09229f89d3f322c972d4168778dfd1b4ca35514a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLMLQTM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIGPW508vAvZl7mCR1Lc9Efray5Orv%2FpzwcdMwQdVRA4kAiEAyMEy%2B%2BvO1Bpwma4xbsBlZ122EjT2SXABo8RIWwqDYvUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdk8Wq8lLfQF798xCrcA4sYBmiA9QOuPmo3VKHeVbbRhstf70MitWPbd11LW7rweYdYFR8JOyAM3jEYtFFMptKA1qlaNW29i4AHh7WXgpvX0egcf0jKBDjDdMy3pk2%2Fsupu4LyhTzFkB8lPuf2%2FeUuYFJuR0hGuIfn0fzRaBd16p7MjOP1VHU%2ByXCU%2FGvOJ5SsSc4zIiScHmCmsnoOxlJNZEXvJLDwGtqxgbcDccK0O8GsqahruGLQT3HLoyPZXsNLe3%2BzhhEt%2FEACUMvpKyOKCHwa1RsEklf%2BShryb4soQcUh43Iir%2F%2FI6kZotkPo0D%2B4x52XIMCQiZzwDQpzXBPwh06vc%2FzN5Bk7y5nc%2BXa95X3%2BOjbyb0ArobqUweiXrP%2Fbye1DhxB2HjIPrrMhys0YilYik7ExJKfJZNtey62rFVA2jpCm9HiuntQbVzKD2TA0Hk20S1dnuc5Wpx1RCqNLJpyxwkDnLUQaA6PEeCzFaHW%2F%2BI7SNpLiAgobbalFlJcsALz8IfViDCtsgc9u0WlfwgcrBintu6jziUOV4HpPWTJ6xjdQP%2BNTjKGijQio2Mq5PbIvapFyESPL56UbMQ5ccQ2IFoM0QztGNWSAi9nZ%2BvrMPaa1Ak6I28IEAiFj%2BQ2%2FmhFF4PkY691clMLDKu74GOqUBlng2x17o69IwQTwYLQU46BE%2FQ3WgzopzKqG1hgVfOMZfjGV0Og%2BbFDunJnlRSUVoAOx8mA%2B6dwKM%2FeCCIB7ObCnM3pM1DhDhuuFnIP0%2B8hD7TOcU3yrmlFBlCaLENnEPwNHpDy8NYwRPkKjxD1RtpqT4fqnLPJzagsDquTXnwNmOiXKVQtWWFR%2FoNcJ5FIPcK4YHP%2FqZB4Aq2F2ISLx5NgewhVMv&X-Amz-Signature=e0ab039b28692f44f6575712451e348ce4253c72e25eef7d4c44cc98d6ed6baa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKNVI76%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDI87bHiNG6QQqSLMdxxlrkrY%2BXIDXf0e6zgLK6X8tragIhALvrNVzVpKQWirKLv5DLlPhO3BJWqSTg36VfZTxjbdNjKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURdHUY8thEb%2Brkbsq3ANzkpGZt0H30JDj%2B0QdNaZvp8i8inVLKhHx6gWVY6bsfQfi4R9beydbcBE3HxxDymS0LqJwz5Zm03CvG8nGhvHfmsz3PStnytT73FtA4VgnFEwR%2BUVyCPInm3tb4RP9uawCkS8lLLvBTIyjaX75nzrCHzR8T26VX9zLfI8ysmO9GnRsl4YbwSG8xz4qt4aJU7GE5k%2FcmB%2FRuZfIsQqx4TOqvevBA7hx6yJjHkBGOUky%2FNpXwQJtA6ACRaC5Yuy3%2ByK%2BB7p1Dk8l3A9KMCcwvkRPxVTtDBCuYMnLqdLNkJK8uFcEwO3mke8u7TEPKCfNBCbLIAi%2BzpaGqyZIp0KhpFenk7Z5WDtYjlymbuQvuk4pHwLdVWAYkBQObx0wYpjnH0ESuPlNABnv%2BOQ2k%2BuTBevOPFLn%2FFwSi%2Fm9EuGekuj5pXUlF3nWB%2BXY3bB0%2FpVOTN7cUXWf2%2FA7QQUgEaKPYaoiXOeXIXAR5ggkNXkpYth1LlebhH542Xry5BBZ%2B9GB3%2BeQoyvdiACCv90hUQC6l4VxyboTziT45KPqi3ByBKdnFfERXS6nTeLGtDJ03mbdir8qdRpg1Wn6y47NsZ1M2mFMK8atcir8OpYVsmCBDP%2B%2FMUJk%2FRAXbIDazhDhXTCNyru%2BBjqkAfge0IqgYsr6qBISZTPw%2FpeoV3DBT8BbH3byepiDBeEfDmlH4laduosp%2BWEqZcF1nnoXqbrvKvykWDnwmfuqY7Tk4Yue5oEpH0B5HA%2Fkd7NxB6JBVs6zwAbWNUC3pFBEA3Nl%2B9ObEj%2F6iG%2Bqz8yX5%2B9iQLmI4%2FBYZLpRkdo5Z214WGJt18TeCgsfPrCtSgGVVach65hcz7rdAEdhRpmeN%2F0iRHVY&X-Amz-Signature=96282c80d513b9ff082ed54492953d05bfd77de8d64cdb20843506dc43b2540c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7QL7NL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIFK0NlYdEILf4TAUlEmHwgS4IYR7EolwoiGyaAk5eNACAiBj3BgZYfOwmfOpghhzAXmOhRe9MGnMyHJaVILREdSa1CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtkEeJQAfyue1uZOKtwD8n%2Ft4Bb5IdbhTpz2xQO%2F7ZYn5snpJtUE6xULSUbtfFZ0uvX0umY8Q0%2BeFJpmp8szcccXNOfig4gSWtHf4pjJK7eThu3TirAa%2F3d%2BjQ0PKCJ5deylifETZADRKZJzFIAKjlzohTOaJcqW21rIgX4AdR2wVL%2Feh31WboQYFSL6Ndfl%2BizrFNrdreJmeDgSNvGkVOwJ3ODTHfRm3LiNSgrre9kMOa4QGn%2BGJCBWqLpqv5xP6XfkyadPuSUAjPt9k6O53XZOQ6nhSuG89RXUf8UK3dXgMDuj5MvK8a211s5Lc4ty4fmkW6dYjGo2KqCTKEW200HgwpJEhBfn06xoPrG14tBlJnL3WvinW2IxEuXNJppK%2BIhIsb8H5L2zluAEnmH%2F14ntW3uMODaTq%2Bx50HqvokOYgHaWyoUoYH%2FB5tMGcfCxWk8HjyM%2BYGlIvi3g4h%2BFWdhbTQDSgmV2emSLp19fQYVkaaartxhg0Au8WW3KRxkU%2Bh6VhCXrjFtCvnhIgTnwNJgEoI834LivB4jTzL2k4%2Fj%2FzTY3mQShMDeG9zKjuVbjjRLoWaJdVoSnHZxJF0ymD1E9y%2BtAakv6m%2FGAx4CFMnXcZOmLDqxfwAyIQyGBvdXNiwsvZZFrg4L9QoQwgcq7vgY6pgGaKIlyOqtHRCyKh19umERMcXMJbGaidbyu0pMoQGRmwjYmXNGFlc9ZCJRLLiiHF%2FcM6sKvmJgK5yccczIUu7DmvGZJ%2FfVGo7grc0yDl2A7O3knQm13W4Hf031jg9eWL2CyqKbgfI1qrghvCrpljvXbM4eqiRiTQtgxuSuUaPFTqI69w6i7x6MQLflgDyXolxtc4TIMNdeWUDS%2FTWqPgPTAS4062I0p&X-Amz-Signature=fa5e8225bc75ed328617f5162b976ac0a9e3d687d097b56bbad45f108c4a762a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLMLQTM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIGPW508vAvZl7mCR1Lc9Efray5Orv%2FpzwcdMwQdVRA4kAiEAyMEy%2B%2BvO1Bpwma4xbsBlZ122EjT2SXABo8RIWwqDYvUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdk8Wq8lLfQF798xCrcA4sYBmiA9QOuPmo3VKHeVbbRhstf70MitWPbd11LW7rweYdYFR8JOyAM3jEYtFFMptKA1qlaNW29i4AHh7WXgpvX0egcf0jKBDjDdMy3pk2%2Fsupu4LyhTzFkB8lPuf2%2FeUuYFJuR0hGuIfn0fzRaBd16p7MjOP1VHU%2ByXCU%2FGvOJ5SsSc4zIiScHmCmsnoOxlJNZEXvJLDwGtqxgbcDccK0O8GsqahruGLQT3HLoyPZXsNLe3%2BzhhEt%2FEACUMvpKyOKCHwa1RsEklf%2BShryb4soQcUh43Iir%2F%2FI6kZotkPo0D%2B4x52XIMCQiZzwDQpzXBPwh06vc%2FzN5Bk7y5nc%2BXa95X3%2BOjbyb0ArobqUweiXrP%2Fbye1DhxB2HjIPrrMhys0YilYik7ExJKfJZNtey62rFVA2jpCm9HiuntQbVzKD2TA0Hk20S1dnuc5Wpx1RCqNLJpyxwkDnLUQaA6PEeCzFaHW%2F%2BI7SNpLiAgobbalFlJcsALz8IfViDCtsgc9u0WlfwgcrBintu6jziUOV4HpPWTJ6xjdQP%2BNTjKGijQio2Mq5PbIvapFyESPL56UbMQ5ccQ2IFoM0QztGNWSAi9nZ%2BvrMPaa1Ak6I28IEAiFj%2BQ2%2FmhFF4PkY691clMLDKu74GOqUBlng2x17o69IwQTwYLQU46BE%2FQ3WgzopzKqG1hgVfOMZfjGV0Og%2BbFDunJnlRSUVoAOx8mA%2B6dwKM%2FeCCIB7ObCnM3pM1DhDhuuFnIP0%2B8hD7TOcU3yrmlFBlCaLENnEPwNHpDy8NYwRPkKjxD1RtpqT4fqnLPJzagsDquTXnwNmOiXKVQtWWFR%2FoNcJ5FIPcK4YHP%2FqZB4Aq2F2ISLx5NgewhVMv&X-Amz-Signature=9805da5410495160fce6cc6457217f6bbc824fd7ed8bb6d43b03611eeb07ced7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
