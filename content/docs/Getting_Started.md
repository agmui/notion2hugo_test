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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6DU3OP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCDLaht6SWGWarb1r%2Fj3RSliIyxSb4YkjGLw502O37mgQIgNwD3DTeFyCOulERbTofAQP5%2Fiud3IKCJZPLjpPV9XkcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjMB2Mo0riUDANzQSrcA3AoaaSoUWWWbyYeACWogXTICyLUHF%2B7ouXozXu5pa2tfagHTadZyS%2F%2BIRipjJc2T9amWaEFE45Mgzw83HKCyCzuToyBDVrm6wthDGujzOsJgj43qBMNlF38dGTYlnovXxMRzcuuk9ryb%2F1CMpoAd81ybw3zDsQMzPXoBGjLpbri7nt0lczQktF33lWNF7ohKXRL2N4IxyDKnA1d70fVxMAGbVdoFxcb0aphl1GBOQrbriaV3nWkmehOqHXBrAFTfjmp3z04FOCBtCyV3vxjW6YYGs9Yfh3n0o045d9xuj9%2BEnk4r3InP%2BJSNqP%2FOVgjrle7Cvjx2SMuV0NtuO4co6jCMn20yMpIgl20Fagj3gvDFvEQtfAeRV4Y8vp1vU06dQmKXt52BjxN7Z7zcbWdkiUpmZ1uIFuypDFFMRHvN7dc%2F3gzU%2BIM9sgJ%2FeyynKWmgKxQmRBMObFkRYhkld93Igwxdc8NIkayCacxp55i1y9zmxkmYzpnTAmZKvULEULNOiQQLB9DTQPy%2FVQGIV26uUUQMHzkxO7J0bX1V2qUKflwAziDmeiB1uFbQ2nJZGHUnUtXz%2BsH8mdTL2lGfBtOCBJhTIVf%2BBzvWumnLIK7DhpXvHsgKWWBhW%2Bt3RefMK3hvMEGOqUBPkwEiBKnWpI9hFnWjp7Hw4jyF27kCKRMea5BNBUwuMa6KG2LijFde1HS8%2Fc7Bp9fKO8ZolY2gyIx%2BsWfHZXIme%2BVmqCsorHKJp5nRoD0KhE9BjRfEbohVOhOcEib2TaP09sgyEAmVf6pJgakgdWVK2ampIXCPfL%2FmwK7%2BuMpzfs8GH30v9FHEuUJvglH8lMid88T2golqcZA7sH5tcyEAvKV3fYe&X-Amz-Signature=ae74b7ffe4a01c98cbeac995b9876e5f112381f285341286f9627061e90d5790&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6DU3OP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCDLaht6SWGWarb1r%2Fj3RSliIyxSb4YkjGLw502O37mgQIgNwD3DTeFyCOulERbTofAQP5%2Fiud3IKCJZPLjpPV9XkcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjMB2Mo0riUDANzQSrcA3AoaaSoUWWWbyYeACWogXTICyLUHF%2B7ouXozXu5pa2tfagHTadZyS%2F%2BIRipjJc2T9amWaEFE45Mgzw83HKCyCzuToyBDVrm6wthDGujzOsJgj43qBMNlF38dGTYlnovXxMRzcuuk9ryb%2F1CMpoAd81ybw3zDsQMzPXoBGjLpbri7nt0lczQktF33lWNF7ohKXRL2N4IxyDKnA1d70fVxMAGbVdoFxcb0aphl1GBOQrbriaV3nWkmehOqHXBrAFTfjmp3z04FOCBtCyV3vxjW6YYGs9Yfh3n0o045d9xuj9%2BEnk4r3InP%2BJSNqP%2FOVgjrle7Cvjx2SMuV0NtuO4co6jCMn20yMpIgl20Fagj3gvDFvEQtfAeRV4Y8vp1vU06dQmKXt52BjxN7Z7zcbWdkiUpmZ1uIFuypDFFMRHvN7dc%2F3gzU%2BIM9sgJ%2FeyynKWmgKxQmRBMObFkRYhkld93Igwxdc8NIkayCacxp55i1y9zmxkmYzpnTAmZKvULEULNOiQQLB9DTQPy%2FVQGIV26uUUQMHzkxO7J0bX1V2qUKflwAziDmeiB1uFbQ2nJZGHUnUtXz%2BsH8mdTL2lGfBtOCBJhTIVf%2BBzvWumnLIK7DhpXvHsgKWWBhW%2Bt3RefMK3hvMEGOqUBPkwEiBKnWpI9hFnWjp7Hw4jyF27kCKRMea5BNBUwuMa6KG2LijFde1HS8%2Fc7Bp9fKO8ZolY2gyIx%2BsWfHZXIme%2BVmqCsorHKJp5nRoD0KhE9BjRfEbohVOhOcEib2TaP09sgyEAmVf6pJgakgdWVK2ampIXCPfL%2FmwK7%2BuMpzfs8GH30v9FHEuUJvglH8lMid88T2golqcZA7sH5tcyEAvKV3fYe&X-Amz-Signature=ddcc7e5c26ad2149644038f7d0191dd4add3ceebbb1d8e430a21ff759f75d3d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6DU3OP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCDLaht6SWGWarb1r%2Fj3RSliIyxSb4YkjGLw502O37mgQIgNwD3DTeFyCOulERbTofAQP5%2Fiud3IKCJZPLjpPV9XkcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjMB2Mo0riUDANzQSrcA3AoaaSoUWWWbyYeACWogXTICyLUHF%2B7ouXozXu5pa2tfagHTadZyS%2F%2BIRipjJc2T9amWaEFE45Mgzw83HKCyCzuToyBDVrm6wthDGujzOsJgj43qBMNlF38dGTYlnovXxMRzcuuk9ryb%2F1CMpoAd81ybw3zDsQMzPXoBGjLpbri7nt0lczQktF33lWNF7ohKXRL2N4IxyDKnA1d70fVxMAGbVdoFxcb0aphl1GBOQrbriaV3nWkmehOqHXBrAFTfjmp3z04FOCBtCyV3vxjW6YYGs9Yfh3n0o045d9xuj9%2BEnk4r3InP%2BJSNqP%2FOVgjrle7Cvjx2SMuV0NtuO4co6jCMn20yMpIgl20Fagj3gvDFvEQtfAeRV4Y8vp1vU06dQmKXt52BjxN7Z7zcbWdkiUpmZ1uIFuypDFFMRHvN7dc%2F3gzU%2BIM9sgJ%2FeyynKWmgKxQmRBMObFkRYhkld93Igwxdc8NIkayCacxp55i1y9zmxkmYzpnTAmZKvULEULNOiQQLB9DTQPy%2FVQGIV26uUUQMHzkxO7J0bX1V2qUKflwAziDmeiB1uFbQ2nJZGHUnUtXz%2BsH8mdTL2lGfBtOCBJhTIVf%2BBzvWumnLIK7DhpXvHsgKWWBhW%2Bt3RefMK3hvMEGOqUBPkwEiBKnWpI9hFnWjp7Hw4jyF27kCKRMea5BNBUwuMa6KG2LijFde1HS8%2Fc7Bp9fKO8ZolY2gyIx%2BsWfHZXIme%2BVmqCsorHKJp5nRoD0KhE9BjRfEbohVOhOcEib2TaP09sgyEAmVf6pJgakgdWVK2ampIXCPfL%2FmwK7%2BuMpzfs8GH30v9FHEuUJvglH8lMid88T2golqcZA7sH5tcyEAvKV3fYe&X-Amz-Signature=8a0f5f8b8b5d6a191bc371a23577ec09892f2c3fd082cc5374000e2ddfef23b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HLGWNJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHEoIzSqElPXlgSOj%2FNg5l4am%2FqxD%2Bnr5EokaJk6WmywAiB6obwt%2BIrPFz6tA3%2Fsy3Ie%2FNjntTikr%2B%2FkT7VlBvA%2BGSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIKCsRgK337CNMcUKtwD8gatImIRbbmUOXzZKM9nwDIYbbFY3RUetiKuQ0hADIax3hmtByAWPHyxRqwL87XiR2S%2FZ7Ke5%2F6EpTrP%2FdNG0P7gspLR4AyzcYu8vqyNDti2qXymtRMOM%2BUEpgd%2FnkLtrGK5Befp2xOKOcMcLqeINmRYykIouRib34jizvkVObRwjxCjKRFMPbltuLjBXCDGcSJbNHzPiIsCcla9sNmnN2J4Sci2b0h0%2FVexMKRaCH%2Fts2%2F13U%2Fm%2BxfS4i4%2FzesKpRhReEYCz8%2BjtOqOZlY%2Bked5v9ASSieiPt1szX%2FO%2FJLweo2%2BYJC3giAPGMSJLXkc17OjohBktOmmKsCNCBVt5bJqgXBFUbGqz5xhPKkyxog7XvGc%2Bot1vOKqPFt8OBfRIqgRPG3NCv%2BEnjjtBa5Ax8QIzQrlg7rFEPsYXT0E4uWHmDWgzu4bUkFYJZWWOLuKjG1T%2Fz9HXtnoibFV103k4vv%2Foh6%2BLn4z73Jw3Wr%2F%2F6xvTS5pSQY%2BRwLZoma5ICXWR7tzl3i%2FINixdtQffYJJQ53DMjCKarULfAy1nLoREmIOpyxmWVpAEdRGy9JquZmvSOsAPRh0MgtquJDy4pS%2BaoV22dB%2FraaF4chpiitvthrYxMTPHVxjq%2BUzuhkwoP28wQY6pgEfOa95s8Ln6gsFmlRNeQYhHQCjBGI7AFKC0w9D8DEm505pjOJ1tW1WSGN4HneSzj1r8GrsEL0ccOpPZimRpMoq5kutTvoTP4hiARFauWDvVWdRT%2FRT4JLRlI9BGcBfeRTSPl1j%2BV5gCl70bVWTI7Iws2sXcUxycg%2Fmi3KKA5%2FK2MDdGh4rRfm3hq7yyr843R%2FdIrw2TFwOo5zx4fNddKbij%2B%2FgViEt&X-Amz-Signature=b798071484aab8b5dc38cd8b236adaeedf5be3a97ae185cbb179c8c9f929294a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHS6TMNI%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD8VuaCnA%2F%2F1R5mMyvKCnAKSpo7sYrw8e4RZbgQxBYyJQIhALU%2Fv64TKMtB32tLq0T9Xo1b9yhkZjNZcwNffLGygJ15KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz19aArIgnpcelO0Rwq3APMvV81Ap7gQjnJ84EE5lfH29QdIww8sd25wAxQeqvi80AuasbOPtfQ8DksxFD5LyA3%2FtLdyuXrjnY%2FPlch%2BGdBVXKkyaw66G3nUvJyAFZDhgNgSgCOfg4BqLgSpN4M435MgfSvPMBp9jOne4DRH6g%2BJQHqa7EynD4Ipmwzx2n1KBdVcdS7FniXx199RtGSQj0up6WEodlsR%2BT7jrJW2R39rUrZn4FeAJh1kVaVRbyeJ2vOMGhvvzrpU2LDHprKbrhLi%2FwkuZVwygT%2BiotAoq8q%2B%2BGnCONaneyMvjn%2BzApYfI1qJZo7JkM4jux%2FTFzbmvlRKd1wcOmDmkNxLUgYjG%2FRZSpfhC4nTt52e8tEhx%2BKGkdms3nPvD9X%2Fmd9iKg7S2YSpjGR9KzarZWafS%2B6b3aQj2JVVfb8Gu0nZhzB0iA5cy5tyIGFYPcH3So%2F%2FuMUJrnxyDYmqkqtwlZjgfM8rReRbPYFJs%2FFysPA0Q43vZ71Y2aFVyxTQaE4iTpvtkJJNlrIFozMQvpxUq3pROJy8h6pd%2BMBS5tpgpGwMTN%2BqqjknwOZCzxYSxkvHodRxVGDf%2Fr2kG7cCNv9akT9mbc3mrVevVAokxbrNt%2FeSWWHVy8E9ThHuAmJKPMbDivXhzCQ4bzBBjqkAVHS42lQDfKdLKgm4g0Ekj7I%2FRgQHbhSfEqvP32tuJfiik%2FYJyIvHrSOIfSHYTvJg1kw19b%2BU5F13wZ8AOiAQ1saFfx1d9UY2j1wTv1CQM6Y%2FyE1noOx0bCBe35ddkJ8zVBvs787u2V88ys8bXLlod6TvW1LCqeGYT4r25UrDY8fvBL2eq9rra0cRfObK6eSZCWUpx%2BiYmO1%2FUuDb5rhFUuz7w0L&X-Amz-Signature=e25e23921ddbda287db3c0f11ad07be3e5d0c738a5e2cc8597a63af554cc6e44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6DU3OP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCDLaht6SWGWarb1r%2Fj3RSliIyxSb4YkjGLw502O37mgQIgNwD3DTeFyCOulERbTofAQP5%2Fiud3IKCJZPLjpPV9XkcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjMB2Mo0riUDANzQSrcA3AoaaSoUWWWbyYeACWogXTICyLUHF%2B7ouXozXu5pa2tfagHTadZyS%2F%2BIRipjJc2T9amWaEFE45Mgzw83HKCyCzuToyBDVrm6wthDGujzOsJgj43qBMNlF38dGTYlnovXxMRzcuuk9ryb%2F1CMpoAd81ybw3zDsQMzPXoBGjLpbri7nt0lczQktF33lWNF7ohKXRL2N4IxyDKnA1d70fVxMAGbVdoFxcb0aphl1GBOQrbriaV3nWkmehOqHXBrAFTfjmp3z04FOCBtCyV3vxjW6YYGs9Yfh3n0o045d9xuj9%2BEnk4r3InP%2BJSNqP%2FOVgjrle7Cvjx2SMuV0NtuO4co6jCMn20yMpIgl20Fagj3gvDFvEQtfAeRV4Y8vp1vU06dQmKXt52BjxN7Z7zcbWdkiUpmZ1uIFuypDFFMRHvN7dc%2F3gzU%2BIM9sgJ%2FeyynKWmgKxQmRBMObFkRYhkld93Igwxdc8NIkayCacxp55i1y9zmxkmYzpnTAmZKvULEULNOiQQLB9DTQPy%2FVQGIV26uUUQMHzkxO7J0bX1V2qUKflwAziDmeiB1uFbQ2nJZGHUnUtXz%2BsH8mdTL2lGfBtOCBJhTIVf%2BBzvWumnLIK7DhpXvHsgKWWBhW%2Bt3RefMK3hvMEGOqUBPkwEiBKnWpI9hFnWjp7Hw4jyF27kCKRMea5BNBUwuMa6KG2LijFde1HS8%2Fc7Bp9fKO8ZolY2gyIx%2BsWfHZXIme%2BVmqCsorHKJp5nRoD0KhE9BjRfEbohVOhOcEib2TaP09sgyEAmVf6pJgakgdWVK2ampIXCPfL%2FmwK7%2BuMpzfs8GH30v9FHEuUJvglH8lMid88T2golqcZA7sH5tcyEAvKV3fYe&X-Amz-Signature=b21288d37a30500dac7ca457b83104572ee94f6fad3c470393e8eaa937ec7127&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
