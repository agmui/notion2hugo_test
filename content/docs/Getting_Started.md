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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEP6MRF3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDAQyGUk0mZu1z%2BHBNcQ9dZExZe9yX3bBvii%2F6D5WduUwIgCRculADHw3tIRCeDt970FJ5VHVStEqhNHoqtR%2BjqIeUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDErT%2FZ0TS3eaI5XHbSrcA7BpEGx74p8Ig%2BKBKgp%2Bi8t4F8rEkhW0aMXsUaRIxTd%2FlT1TGco33AeGtIfSAFGFjsFRZDXJ4RMcM87wLXfA6rK%2FVlafkwAadl%2FBZwCTF4p7GUf62DZ91ejuoONqB85jDQq6pi2mbWG%2FycvZDDJL%2BGJtFs0d7PnyiOSygG0MGXmmRA1b%2Bnnm9mLVww9b1a9xo05qf0uKUP6BsOprGZUPvXXiN4h13gDAT%2BaBZEiHtX4q5nk2B6mdZnQpZniM%2B51%2FOdlsyYoofNxjRfyAddsb7lBmdU3KerOlaTHuGQzEDDMZtq%2Fw4sqrbLKigx%2BEA9tItNsxDi%2FMT8Pt%2Ba8kSFanmG1dZ4FEAzEXNEgI5iFcH7YxvGHY7qkslKUgRkVNZn484J4o2WxsrJ8ofp14AIVvwL7hwHHdho%2FYGRp0C9v1yJWHuIH0aTdlHdl98K56mtQpGo332kYp28jTBGxz%2FmWwpR1%2FQbCZoXlP2AMki4cv0MbfKPmvbPoGk4boG7aKzobDh3p9HEKTGl5dp8kkGBOTg0HkrfHbPEANLZSuJlti4EY9czUOSMACwMvPrRdYL%2FbFQzQlTRAAF8hHezRg0G6bZQOLBccWA7SNYN1eiyBUwJ2LkWEWf8yFaBgjmeH2MLTEmMEGOqUBw2ywAFI53R9HPPqKkgMnKrQILBR2gR9k7Y72JgnzdLS7SFor%2F0964%2BU7jXoQ6N2KQ0uT3U6hlWFWnlLTlgSxqt6l3%2BZ82DLxh4waLrTRUYADrlDpHnaDxMf%2F5sreaqFc0CDc940YuZTh7P2IDgfvwlVghCybtTJTfl0hDpGJODduVsnymFp8e7SELvyGOTGMZ0nenREdWwZ0EzlS1vgWxgSeIkeu&X-Amz-Signature=17993ac982124af5eb907415d82b30c70434f604f650b73752553b150dfda825&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEP6MRF3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDAQyGUk0mZu1z%2BHBNcQ9dZExZe9yX3bBvii%2F6D5WduUwIgCRculADHw3tIRCeDt970FJ5VHVStEqhNHoqtR%2BjqIeUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDErT%2FZ0TS3eaI5XHbSrcA7BpEGx74p8Ig%2BKBKgp%2Bi8t4F8rEkhW0aMXsUaRIxTd%2FlT1TGco33AeGtIfSAFGFjsFRZDXJ4RMcM87wLXfA6rK%2FVlafkwAadl%2FBZwCTF4p7GUf62DZ91ejuoONqB85jDQq6pi2mbWG%2FycvZDDJL%2BGJtFs0d7PnyiOSygG0MGXmmRA1b%2Bnnm9mLVww9b1a9xo05qf0uKUP6BsOprGZUPvXXiN4h13gDAT%2BaBZEiHtX4q5nk2B6mdZnQpZniM%2B51%2FOdlsyYoofNxjRfyAddsb7lBmdU3KerOlaTHuGQzEDDMZtq%2Fw4sqrbLKigx%2BEA9tItNsxDi%2FMT8Pt%2Ba8kSFanmG1dZ4FEAzEXNEgI5iFcH7YxvGHY7qkslKUgRkVNZn484J4o2WxsrJ8ofp14AIVvwL7hwHHdho%2FYGRp0C9v1yJWHuIH0aTdlHdl98K56mtQpGo332kYp28jTBGxz%2FmWwpR1%2FQbCZoXlP2AMki4cv0MbfKPmvbPoGk4boG7aKzobDh3p9HEKTGl5dp8kkGBOTg0HkrfHbPEANLZSuJlti4EY9czUOSMACwMvPrRdYL%2FbFQzQlTRAAF8hHezRg0G6bZQOLBccWA7SNYN1eiyBUwJ2LkWEWf8yFaBgjmeH2MLTEmMEGOqUBw2ywAFI53R9HPPqKkgMnKrQILBR2gR9k7Y72JgnzdLS7SFor%2F0964%2BU7jXoQ6N2KQ0uT3U6hlWFWnlLTlgSxqt6l3%2BZ82DLxh4waLrTRUYADrlDpHnaDxMf%2F5sreaqFc0CDc940YuZTh7P2IDgfvwlVghCybtTJTfl0hDpGJODduVsnymFp8e7SELvyGOTGMZ0nenREdWwZ0EzlS1vgWxgSeIkeu&X-Amz-Signature=cbe05e563ef2410a2d87d044d799dd1136befac86c4a82fecf4be6309a39d2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEP6MRF3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDAQyGUk0mZu1z%2BHBNcQ9dZExZe9yX3bBvii%2F6D5WduUwIgCRculADHw3tIRCeDt970FJ5VHVStEqhNHoqtR%2BjqIeUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDErT%2FZ0TS3eaI5XHbSrcA7BpEGx74p8Ig%2BKBKgp%2Bi8t4F8rEkhW0aMXsUaRIxTd%2FlT1TGco33AeGtIfSAFGFjsFRZDXJ4RMcM87wLXfA6rK%2FVlafkwAadl%2FBZwCTF4p7GUf62DZ91ejuoONqB85jDQq6pi2mbWG%2FycvZDDJL%2BGJtFs0d7PnyiOSygG0MGXmmRA1b%2Bnnm9mLVww9b1a9xo05qf0uKUP6BsOprGZUPvXXiN4h13gDAT%2BaBZEiHtX4q5nk2B6mdZnQpZniM%2B51%2FOdlsyYoofNxjRfyAddsb7lBmdU3KerOlaTHuGQzEDDMZtq%2Fw4sqrbLKigx%2BEA9tItNsxDi%2FMT8Pt%2Ba8kSFanmG1dZ4FEAzEXNEgI5iFcH7YxvGHY7qkslKUgRkVNZn484J4o2WxsrJ8ofp14AIVvwL7hwHHdho%2FYGRp0C9v1yJWHuIH0aTdlHdl98K56mtQpGo332kYp28jTBGxz%2FmWwpR1%2FQbCZoXlP2AMki4cv0MbfKPmvbPoGk4boG7aKzobDh3p9HEKTGl5dp8kkGBOTg0HkrfHbPEANLZSuJlti4EY9czUOSMACwMvPrRdYL%2FbFQzQlTRAAF8hHezRg0G6bZQOLBccWA7SNYN1eiyBUwJ2LkWEWf8yFaBgjmeH2MLTEmMEGOqUBw2ywAFI53R9HPPqKkgMnKrQILBR2gR9k7Y72JgnzdLS7SFor%2F0964%2BU7jXoQ6N2KQ0uT3U6hlWFWnlLTlgSxqt6l3%2BZ82DLxh4waLrTRUYADrlDpHnaDxMf%2F5sreaqFc0CDc940YuZTh7P2IDgfvwlVghCybtTJTfl0hDpGJODduVsnymFp8e7SELvyGOTGMZ0nenREdWwZ0EzlS1vgWxgSeIkeu&X-Amz-Signature=3c4728f33b8c06b28981498e74288e340df3b4f6eff02a55e1bdcba6fc9c83fd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKNHENN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQD7M5AwreU0wK4yMLLtw3Y0Dwhl078rmWy%2F0v6dbmsKdgIgT1VuCAeEjoOjqbithyR4JYIV8Gbq1pr2gmUi5egk26Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEajXp8XhKVxBTz1iSrcA5YPy1%2B%2BoVPl67UGIWXl9Wl19Rc6RWyMdfB30eqiCMm%2B7sQMlBdtKwmodZy81sYagP0tNuqxHk235%2BoS%2BFN5B5ABpXVy5P%2FO3BrrCGuSWB1IPuWOyXDDJb%2Bc0q8sy1I%2BZX0UQNjrWc6hWnyO5ZEjyg%2Bq%2BVWSI%2BnEPOPAdGbPpFC94JWViWMxTJSTxufx7VOGSSXxpWffnBg0ECpzvFctzGG4FGnK63DzuLgy5fEEoWC7eX0QU6aT7MlfibCyNL7p1VVQE%2FBjQv3ku6mu515sqmyOzu%2FLWZr%2FSiKtOr%2BPwpX0fk%2FGy9k%2BWyqJVQPSBf2z0UQZTgGN%2BFP5sv01VhfqtXSnHo%2FG4mdV1sx%2FD8zSXz7RSa4urpms8ufEKgjF%2BFrsR9acnzaduWwOEtJ6rwScax4oiGw9B3y8%2FVjfxwgYdzC1ujEdKQSSqmsCXXlzPc86hpXyW14GHW9xgyJvRPQm2f8HANqbIe%2BR3PumG2RM6AavLJwZQ6NxPTmSk8ySIXPT6iNoUafT34aeKcOVf8PuhZv712F%2FZ2wiy6mJbx88QCfPGSXh324fwBs8gemYFcyWZjRLRFSP7u3lKt210LgDo59WpUQBabHAS%2FcYbR2epFt7vI9Dj7JsOz4nQBdUMKPEmMEGOqUBRSNTf17UeOU9tiiT3%2B99Tl%2Fy7VV8LgJyRTrYfCe0SsfI%2FZAoqttGA96c32QK6U9AoS%2B9T50XkZG%2FgcCLGQdYb0g4Zcp%2BUFj9F8xaZc16JpOj03pW7OcGVDSkheCm4QEDj0GoJm59jC9hVbWYX8V7y8Ip7%2BwgCA0IGFol0p8H1d9MAdaNGipKjP1d5UHxJqu4IF8FSbB8ySgr9FHRiMFjvYb%2BdLtD&X-Amz-Signature=6a3762a37f0ff5f22966d9f5e123f4294136fa95157360d603ba5682ad91884b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVW5EDS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBv6SIcU1ZqykIMgQAKN7V1M8z%2FfoJ2NlihckGu2atPfAiAUyRbTwJDhd7PjW2f0a3epL3brHr%2FheC6L7BzV3uHC4Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMywhB1l%2F%2Fr8epknvnKtwDUckZeraZ1Yho0n4xct374CBc%2FbkUk3CNhyGRuPY4rUuL5ywkBZibVAfyV2LNjl5pgm6bv0cmrV%2FGb1%2BgLLtwfTE45E5Fc7u0vSp5l8EyTrxHVK5GuQBSe5lEOAcW%2BvIBkdxOaPsrDQ9X3kh1wfkN%2FQeG0gACLdzMTpsq5N05go6A7SmSIuOZMgc%2BvvxPNV3uaZFLDLEfejxG4D2QXw3wh3Eo0evwSo5BQKEE6CRaZZhuruEGGvOZGnupeOgw%2BMJkCtCHU5vraMj0OgqxPSGIwRyx9sgbIfMjj7NTOD3kFmfIngXFTMlLxjNPP0Aarmp0JUjcU798c%2FceTE9HikJjiQeUhN3dnxHDlrPgbewnQsWY8GcmyVLvtzXZlMDQNvpyaZCh01rNqBmfeqAdlmaDaEPhfROGQH3GzWN6ZE2yWzyRE5jJEYSwxN8vmwzOXopSK%2FzLp3mUYnB0EBR3VwlpgTSoucD%2BGCuoUiitquYrpiAFli2djr37EH3U03IuF%2BCxcz2C8AGUAmlzH%2B49iyFcu23lYs2evbYFe5dQzum1dhQnHMgBr0IKOmBu3DsljataDfdAEtIC%2Bl9FTch%2FJc2fqTh1eY8GrdUHcR0jXMGnQqmkSN%2Fdt4K3RWMlJVAwsMSYwQY6pgH5NM%2BiLiCQZiEVV75RvAJAuGuCNAxNxDI39c4Xr5i2CrDASDP7ciNKqo4AnyX8qK9pjXPfGy%2FEcSr9mFk%2FIWqPuwPquOmy86jPjIDgvKxdhGT%2FRyMfDgigG4pKDJV0vbELChj%2Fk6mP7NgZ0DbTB9JeiWnld0FaGvVipYdjf9K0oJgBz36c2DA%2Fd9oKHPiQdcMWociIEXe9Uw7LiLPeBF%2FXjnXbOlkc&X-Amz-Signature=13c11e11b03294765cbdb79b465413a8518386d0298c546b7a5004781974d5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEP6MRF3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDAQyGUk0mZu1z%2BHBNcQ9dZExZe9yX3bBvii%2F6D5WduUwIgCRculADHw3tIRCeDt970FJ5VHVStEqhNHoqtR%2BjqIeUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDErT%2FZ0TS3eaI5XHbSrcA7BpEGx74p8Ig%2BKBKgp%2Bi8t4F8rEkhW0aMXsUaRIxTd%2FlT1TGco33AeGtIfSAFGFjsFRZDXJ4RMcM87wLXfA6rK%2FVlafkwAadl%2FBZwCTF4p7GUf62DZ91ejuoONqB85jDQq6pi2mbWG%2FycvZDDJL%2BGJtFs0d7PnyiOSygG0MGXmmRA1b%2Bnnm9mLVww9b1a9xo05qf0uKUP6BsOprGZUPvXXiN4h13gDAT%2BaBZEiHtX4q5nk2B6mdZnQpZniM%2B51%2FOdlsyYoofNxjRfyAddsb7lBmdU3KerOlaTHuGQzEDDMZtq%2Fw4sqrbLKigx%2BEA9tItNsxDi%2FMT8Pt%2Ba8kSFanmG1dZ4FEAzEXNEgI5iFcH7YxvGHY7qkslKUgRkVNZn484J4o2WxsrJ8ofp14AIVvwL7hwHHdho%2FYGRp0C9v1yJWHuIH0aTdlHdl98K56mtQpGo332kYp28jTBGxz%2FmWwpR1%2FQbCZoXlP2AMki4cv0MbfKPmvbPoGk4boG7aKzobDh3p9HEKTGl5dp8kkGBOTg0HkrfHbPEANLZSuJlti4EY9czUOSMACwMvPrRdYL%2FbFQzQlTRAAF8hHezRg0G6bZQOLBccWA7SNYN1eiyBUwJ2LkWEWf8yFaBgjmeH2MLTEmMEGOqUBw2ywAFI53R9HPPqKkgMnKrQILBR2gR9k7Y72JgnzdLS7SFor%2F0964%2BU7jXoQ6N2KQ0uT3U6hlWFWnlLTlgSxqt6l3%2BZ82DLxh4waLrTRUYADrlDpHnaDxMf%2F5sreaqFc0CDc940YuZTh7P2IDgfvwlVghCybtTJTfl0hDpGJODduVsnymFp8e7SELvyGOTGMZ0nenREdWwZ0EzlS1vgWxgSeIkeu&X-Amz-Signature=b47d758e24deae2e65c94ec1b45deb3a13c62ce7d92dfbeaf2749e37ad1e6b18&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
