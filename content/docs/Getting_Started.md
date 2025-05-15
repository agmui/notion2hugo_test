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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4LFDAJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSSBz5D6E0kR4djJZ7TP2AD4%2F0b7TqR1nenTg%2BP0xrFAiEA07u2DTFzHq2xG0FFie0hk2NggKKO3ZzK%2FrvKIzWJDtAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNgzGawcRW4SE%2B8%2FnircA6mzcH0%2FV8vrRPmvTwdoOtajBdqQwmZVJj2rW0KmCyYOBpkVhf5m4nhvcgky7yz3CQIaR5G7Dxw1IIYDvpoAb3tZ2IM0opCnefPTsJUaWwhFymqkWEGDsBF0FH8XglM0Ec%2FE8De%2BT%2BpARNe2vfG52Q2LL54zxe487WfmQymp9OzQpZmPrB3nQaiTZ4V1mCMIeyMoroPljj0mWuITQ9LH2huKAOHYOjQFSDcqvYJ0N3pvRBvZC0O%2BieWyqOyQMf0o1IRMRLTBgHM%2BzqPbrW2tH9WGqHdm9Xnnwfz7KB6xGkZ7Z4FehkOeOaWfgcqj81S54I3MoM0slGy9GuRQPJzWb7gMFYHAS%2FdVPLLjjgTU4jgcV6ALEVOipD6%2F19epUmwlMFxDEBv3Y0qZxZ87jHgT%2FGyy%2Fsx8kxVQ4jqQDcqQ9x%2Bi9O58oCZTNBlFs1aUvqc32cm8v9DWd%2BUsVz%2BfRuMMvLdJ5q7CHlO%2BpSl%2FMVPYq0wQCkxlegp5YbXJrl0iH5qs6Wl3x8tZbXy%2B48Pdm37RbQJYIQfmsRGAVs3B9FOKoZd0uDZXLONEUpa2hTcgMdB5wH8NES7gti8mzUlo0ObMtBNLkmqxdk2gE4SHfYvuQ%2F2jUrejgzTmGwLr2DtLMOnrlsEGOqUB1Usv%2BzGLUvAQ5wnSWmgmvzhle47Qx1jneVwLPIko2kMEhJAJCIKDRHzL02ookWDbc%2B2GM6hBkvO8O6DwrxMGiX%2FKhzYDgbElcH%2FpWqhqVNjyh8PVKHURULIypxc4VemYfPFpndHF39Atk27AA1W2kdgQ9cxJgVr5%2BEhYIcabATXvajQtqsx2W63RUze7aQpHwp4tkDEC%2FFPKEYZBN40PSeCt51dK&X-Amz-Signature=bde486f3f744a0e5d820f4452b06b0b9fe82ceda417ca064fafe4a3acb242c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4LFDAJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSSBz5D6E0kR4djJZ7TP2AD4%2F0b7TqR1nenTg%2BP0xrFAiEA07u2DTFzHq2xG0FFie0hk2NggKKO3ZzK%2FrvKIzWJDtAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNgzGawcRW4SE%2B8%2FnircA6mzcH0%2FV8vrRPmvTwdoOtajBdqQwmZVJj2rW0KmCyYOBpkVhf5m4nhvcgky7yz3CQIaR5G7Dxw1IIYDvpoAb3tZ2IM0opCnefPTsJUaWwhFymqkWEGDsBF0FH8XglM0Ec%2FE8De%2BT%2BpARNe2vfG52Q2LL54zxe487WfmQymp9OzQpZmPrB3nQaiTZ4V1mCMIeyMoroPljj0mWuITQ9LH2huKAOHYOjQFSDcqvYJ0N3pvRBvZC0O%2BieWyqOyQMf0o1IRMRLTBgHM%2BzqPbrW2tH9WGqHdm9Xnnwfz7KB6xGkZ7Z4FehkOeOaWfgcqj81S54I3MoM0slGy9GuRQPJzWb7gMFYHAS%2FdVPLLjjgTU4jgcV6ALEVOipD6%2F19epUmwlMFxDEBv3Y0qZxZ87jHgT%2FGyy%2Fsx8kxVQ4jqQDcqQ9x%2Bi9O58oCZTNBlFs1aUvqc32cm8v9DWd%2BUsVz%2BfRuMMvLdJ5q7CHlO%2BpSl%2FMVPYq0wQCkxlegp5YbXJrl0iH5qs6Wl3x8tZbXy%2B48Pdm37RbQJYIQfmsRGAVs3B9FOKoZd0uDZXLONEUpa2hTcgMdB5wH8NES7gti8mzUlo0ObMtBNLkmqxdk2gE4SHfYvuQ%2F2jUrejgzTmGwLr2DtLMOnrlsEGOqUB1Usv%2BzGLUvAQ5wnSWmgmvzhle47Qx1jneVwLPIko2kMEhJAJCIKDRHzL02ookWDbc%2B2GM6hBkvO8O6DwrxMGiX%2FKhzYDgbElcH%2FpWqhqVNjyh8PVKHURULIypxc4VemYfPFpndHF39Atk27AA1W2kdgQ9cxJgVr5%2BEhYIcabATXvajQtqsx2W63RUze7aQpHwp4tkDEC%2FFPKEYZBN40PSeCt51dK&X-Amz-Signature=30c7c02261e5f2491539b08f686b37c189687e23e15ab4036aaed8a3ff75dc2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4LFDAJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSSBz5D6E0kR4djJZ7TP2AD4%2F0b7TqR1nenTg%2BP0xrFAiEA07u2DTFzHq2xG0FFie0hk2NggKKO3ZzK%2FrvKIzWJDtAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNgzGawcRW4SE%2B8%2FnircA6mzcH0%2FV8vrRPmvTwdoOtajBdqQwmZVJj2rW0KmCyYOBpkVhf5m4nhvcgky7yz3CQIaR5G7Dxw1IIYDvpoAb3tZ2IM0opCnefPTsJUaWwhFymqkWEGDsBF0FH8XglM0Ec%2FE8De%2BT%2BpARNe2vfG52Q2LL54zxe487WfmQymp9OzQpZmPrB3nQaiTZ4V1mCMIeyMoroPljj0mWuITQ9LH2huKAOHYOjQFSDcqvYJ0N3pvRBvZC0O%2BieWyqOyQMf0o1IRMRLTBgHM%2BzqPbrW2tH9WGqHdm9Xnnwfz7KB6xGkZ7Z4FehkOeOaWfgcqj81S54I3MoM0slGy9GuRQPJzWb7gMFYHAS%2FdVPLLjjgTU4jgcV6ALEVOipD6%2F19epUmwlMFxDEBv3Y0qZxZ87jHgT%2FGyy%2Fsx8kxVQ4jqQDcqQ9x%2Bi9O58oCZTNBlFs1aUvqc32cm8v9DWd%2BUsVz%2BfRuMMvLdJ5q7CHlO%2BpSl%2FMVPYq0wQCkxlegp5YbXJrl0iH5qs6Wl3x8tZbXy%2B48Pdm37RbQJYIQfmsRGAVs3B9FOKoZd0uDZXLONEUpa2hTcgMdB5wH8NES7gti8mzUlo0ObMtBNLkmqxdk2gE4SHfYvuQ%2F2jUrejgzTmGwLr2DtLMOnrlsEGOqUB1Usv%2BzGLUvAQ5wnSWmgmvzhle47Qx1jneVwLPIko2kMEhJAJCIKDRHzL02ookWDbc%2B2GM6hBkvO8O6DwrxMGiX%2FKhzYDgbElcH%2FpWqhqVNjyh8PVKHURULIypxc4VemYfPFpndHF39Atk27AA1W2kdgQ9cxJgVr5%2BEhYIcabATXvajQtqsx2W63RUze7aQpHwp4tkDEC%2FFPKEYZBN40PSeCt51dK&X-Amz-Signature=997634174f2e4067f778b8ce956030fff98706e7171defffbc233c54baa9bd03&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L64K23S%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGt2j4wsXRDLU%2FPN1%2BJip%2BlGUtcmfojjm%2FpzWMHtyP36AiEAtUyriQOgRmE0yhcLnidLCZXHvvaOn4tqrXEcJUGSF9oq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDM2a4v8z%2B%2BJIGnlCGSrcAxZlRrg9gZ1sSjiE3pvgSaqLf8mmc4Oxu6ZWjHql3HlECFzG9BS0F%2FDXJiSNdG%2BsIAfmlW3HTzEMSjZGCPKC0JAc0mrbHJInGDzFCCjfLlL41543unw5YmfYOh1Oiq1up1BNJ%2BI8Y7ymn9JZMgkocA4Vzf%2BEbrvirC5N6n2%2BYjQcDHDRySDsDhLhfN8cqBONaLv7SCIGkuWqghKezXJSBau6qKUd9zVrqVkE%2B8B98d3afagyI0Pp91xIj2%2BOH%2BjKtWoqr1x4xrOniKa4BO6yd8CnOPhMABdcdg%2BU2CnF%2FzCOoZAIYrJdrpfjP5ETtKWcFgEi9T%2F6NNV1CRVAuc9rkNfdr1rv4MKxLBbqxG5oja5eqPK1efR45S5mQWQNB%2FWJzk54uCt4%2B2ifPo0yGKlu%2B1KG19xB5YfOc9mpvJCrvo5CMBDrjaK3H7svCsW4%2BwV7B49tkAmZ%2Bb%2FZvzatdL1Z6vTZdu7j27sTvBympoIjcP7x0HdvhuAPZMCMzwNfF7yrQnikhMtpv9%2Bae2rO7wxBldDouu%2Ba7%2BxcNSKIyY%2FVK2Et%2BpM82BDjOU6JHKBGyyGnE48YXWQAp7Zt7MDxkCdqGwz%2BRpZjc3g73ygqnrrbrs65XaTaxp%2FldbfN30GnMJXslsEGOqUBGT8qOzwPohDprqT6%2F%2Bv06GnNi3mX%2BzAGrpNERksfDFLEwNst951wzVgtadtdjQLX3YyniH1UAMgHzLZYw89wftn48lCQM27F1QRpGSv3yWez%2FpzPICPt4KhuYPtuqf1OFxWKAjzzeAKaVE24iEAQDLZyc9rOIJndaRr4Zz9ilQEXA28TYC1nVnXTG0JLVkOo3g8JeEUhXfLGLY%2FJBBq5J9o8WfT9&X-Amz-Signature=683cbaac2bf39105c948bf4b9c12694ba00f3ee2f3ea6250d54026585b594a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWB637U6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCuH2qvjMXXYwQZ%2FvreltUHXJOxgk8Ig3cwtOwarBRamgIhAOe8hSC6JioE0RTK%2FxyZai5MyAlhlWh9hQBikDkpEAQRKv8DCCsQABoMNjM3NDIzMTgzODA1IgxZd6t00GfjCrRdRWMq3AOX%2BlxuSmOdmVvWYm0h5nTGUKF2GITDL6fK7swgMmiGnFOc%2FGo%2FuxmZ0fzLaq%2B8bGLzkulMyFcvDp4uBB5nGEh66udtYxkgw%2Bum0o%2Ftlxof85ZWfDRlNTHqP2L6E4sTpv7qrmOkflcRLw%2B4LsxIZp2xU8jbM5rqG4UneeNAzqf8Em8wQU72A7RsTykRGOFP1b9A9AyippkJGfaPg0beYO4AGSg4cTDEft4EPoCRT3S3n1e2Y1%2FG9iz4Ddz4nPY0DT9clkDtOYW1cizCgwCKQKCwA0KYw1%2BGtuJDxVw%2F2WytedL0FnqO%2B0H0oFmsxXx%2FPxJN3%2FXHmV46xoVb8tnPVNAx7Vx2kHbVcgPUx8m3q2%2FmklBCSsfVrEIRaVwcZ3Qy4X6NiJCf3g7PSinBDne7PYmqWEZARlBq8yPRlfJAqYvhoAwKKL1ctAX%2BbHWvRm%2BHI%2F1IqYr%2FCuFsN1SRBdAf5s1LDaGJ%2BDjDELB6XRsIZ13GeiDqWEWDFf0%2Bn6Sl5rJJfSfdjz0GLMOf%2FQdPwpo0gEXnJqBp0jLlbZj%2BI4O4SRSGgNamD6SXInRgEy7qpM8WrX9Az9BXS7tTI4%2BP6NYlZ5giGWaT4xbZ88Np60KRkoKa5iYYMxHlXv38OXHsjDCH7JbBBjqkAQkL4Nfn7K%2B8gFEKEZmqx52NSglkurYAxQhSMnCTsewj67THMO6s9%2BhjgC8R%2BZcrLOmdKzfUv44mRxornFLTIctPhvz6Qf6pHUptYnFezhJ1STx3oXDQxeiqd1HKVqcDD8Ll97f%2FMt6u5wHoSH%2BOm8fUyCRHYfSlk2RnvzdKpRtHgz4jLqIB%2FqKK7zoK7Q9V97ldqwajplLzDRVQOgwkVXP%2Bq5qW&X-Amz-Signature=992d551904b926c45d0043fe8cc5c014fda10912c71943a050a7bc50abcf483b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4LFDAJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSSBz5D6E0kR4djJZ7TP2AD4%2F0b7TqR1nenTg%2BP0xrFAiEA07u2DTFzHq2xG0FFie0hk2NggKKO3ZzK%2FrvKIzWJDtAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNgzGawcRW4SE%2B8%2FnircA6mzcH0%2FV8vrRPmvTwdoOtajBdqQwmZVJj2rW0KmCyYOBpkVhf5m4nhvcgky7yz3CQIaR5G7Dxw1IIYDvpoAb3tZ2IM0opCnefPTsJUaWwhFymqkWEGDsBF0FH8XglM0Ec%2FE8De%2BT%2BpARNe2vfG52Q2LL54zxe487WfmQymp9OzQpZmPrB3nQaiTZ4V1mCMIeyMoroPljj0mWuITQ9LH2huKAOHYOjQFSDcqvYJ0N3pvRBvZC0O%2BieWyqOyQMf0o1IRMRLTBgHM%2BzqPbrW2tH9WGqHdm9Xnnwfz7KB6xGkZ7Z4FehkOeOaWfgcqj81S54I3MoM0slGy9GuRQPJzWb7gMFYHAS%2FdVPLLjjgTU4jgcV6ALEVOipD6%2F19epUmwlMFxDEBv3Y0qZxZ87jHgT%2FGyy%2Fsx8kxVQ4jqQDcqQ9x%2Bi9O58oCZTNBlFs1aUvqc32cm8v9DWd%2BUsVz%2BfRuMMvLdJ5q7CHlO%2BpSl%2FMVPYq0wQCkxlegp5YbXJrl0iH5qs6Wl3x8tZbXy%2B48Pdm37RbQJYIQfmsRGAVs3B9FOKoZd0uDZXLONEUpa2hTcgMdB5wH8NES7gti8mzUlo0ObMtBNLkmqxdk2gE4SHfYvuQ%2F2jUrejgzTmGwLr2DtLMOnrlsEGOqUB1Usv%2BzGLUvAQ5wnSWmgmvzhle47Qx1jneVwLPIko2kMEhJAJCIKDRHzL02ookWDbc%2B2GM6hBkvO8O6DwrxMGiX%2FKhzYDgbElcH%2FpWqhqVNjyh8PVKHURULIypxc4VemYfPFpndHF39Atk27AA1W2kdgQ9cxJgVr5%2BEhYIcabATXvajQtqsx2W63RUze7aQpHwp4tkDEC%2FFPKEYZBN40PSeCt51dK&X-Amz-Signature=676ec15b5ee44b4a1ca9fca3eda386140eb78c837d615b1d4ae48e297fe0b1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
