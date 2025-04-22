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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636P7TRI3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDxrjF6V61r8DY0j4Nzxt4ju358IBt6pYUXUb42k0lsTQIgUzbqHXrqxfWqwRKeaGGD0vFksSaub4mh7Ll9DnoazHEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwwvFQ%2F6OZSccsQ7yrcAyTFuh4zKjcWpihbisLAXXXHL4uhZBLApabSRFx02NaEKY%2FcfT%2F4KiWt1Ubd4bFINLo%2BF9beqC%2Bp8SNWHyv3FVTbK%2FHkibsicy9HVudUbEMAY60Q%2FruOxJ9lYvBkUPkYTsROBPWan4HNFnWD85633AinuG2Ywq9y3IPJoaKJSRhPKT3BDb7v4NNR59WEWMjQpqlkHPR8tY6wtqusyDvb63MU%2FzQinkyCw6EpAzgFI%2FeaFpLnCZFhFbb4Cg%2Fv2PNR%2B6dljV7EAxEDARMIEAedH%2BbXvdEbghu2n2x1486zeaMLXjcOolptoPA8wKioJ5H5X8GWqaU6yFbO3MFUHKmhbxj4s1zxbCXiC79NQvSi69j9%2F17QNoQFvmPk86XPMaelPauFDtsWPZY1V5IIJfU27yLHUB0Ty0KFbyZnmcvmnxwo31dHI71TUwhbYz3HzDN9TRw%2BW%2FwvtierGvNHwWAtFY5apxX%2BBskKnL5GFDb3tYvcgoUm4Fb6vY%2Bl7EiCc4YHpD%2F5Y3698BVGcOtyKKo%2F5T7HM7OOIJ5FJhbl88xZ3ifl06sgGr4aMP1pe3dlnA4EAuvUBo4ZIxCKjPD2bmLKvG%2F7ItFL1AN52BHlsjNGz0rNEBZ8QLosRh6978gfMKTCncAGOqUBCCIZQJE6GGO5L91fPlvv5HRAbhHan7v%2FZYVLUxbJ%2BuSeGMsvt4s%2FPJKnSSXtOERRAK0GBnLQB0HkhXocp%2B5h7FCjHkUlSgGzyU%2BvK2Unk7gPikXayChNwUwOWgvdoCn6%2BLLSUF1%2BNtbRgB4MoQ9uuiYD33KaE4QB%2BP1JnyTy%2F2ARhxNE3GKTvIFSSm%2ByEwoM1Sfi6ehAlQIKw%2FK1nA7aFZd3xR3u&X-Amz-Signature=ce277cf0dd8fc4c3c2c7288a62fe822591f0463774bfdea9bea5fe837b5b51d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636P7TRI3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDxrjF6V61r8DY0j4Nzxt4ju358IBt6pYUXUb42k0lsTQIgUzbqHXrqxfWqwRKeaGGD0vFksSaub4mh7Ll9DnoazHEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwwvFQ%2F6OZSccsQ7yrcAyTFuh4zKjcWpihbisLAXXXHL4uhZBLApabSRFx02NaEKY%2FcfT%2F4KiWt1Ubd4bFINLo%2BF9beqC%2Bp8SNWHyv3FVTbK%2FHkibsicy9HVudUbEMAY60Q%2FruOxJ9lYvBkUPkYTsROBPWan4HNFnWD85633AinuG2Ywq9y3IPJoaKJSRhPKT3BDb7v4NNR59WEWMjQpqlkHPR8tY6wtqusyDvb63MU%2FzQinkyCw6EpAzgFI%2FeaFpLnCZFhFbb4Cg%2Fv2PNR%2B6dljV7EAxEDARMIEAedH%2BbXvdEbghu2n2x1486zeaMLXjcOolptoPA8wKioJ5H5X8GWqaU6yFbO3MFUHKmhbxj4s1zxbCXiC79NQvSi69j9%2F17QNoQFvmPk86XPMaelPauFDtsWPZY1V5IIJfU27yLHUB0Ty0KFbyZnmcvmnxwo31dHI71TUwhbYz3HzDN9TRw%2BW%2FwvtierGvNHwWAtFY5apxX%2BBskKnL5GFDb3tYvcgoUm4Fb6vY%2Bl7EiCc4YHpD%2F5Y3698BVGcOtyKKo%2F5T7HM7OOIJ5FJhbl88xZ3ifl06sgGr4aMP1pe3dlnA4EAuvUBo4ZIxCKjPD2bmLKvG%2F7ItFL1AN52BHlsjNGz0rNEBZ8QLosRh6978gfMKTCncAGOqUBCCIZQJE6GGO5L91fPlvv5HRAbhHan7v%2FZYVLUxbJ%2BuSeGMsvt4s%2FPJKnSSXtOERRAK0GBnLQB0HkhXocp%2B5h7FCjHkUlSgGzyU%2BvK2Unk7gPikXayChNwUwOWgvdoCn6%2BLLSUF1%2BNtbRgB4MoQ9uuiYD33KaE4QB%2BP1JnyTy%2F2ARhxNE3GKTvIFSSm%2ByEwoM1Sfi6ehAlQIKw%2FK1nA7aFZd3xR3u&X-Amz-Signature=5001409b546a0fae3db32586e78c80c7ced60dc690be4558ddba8ccd4eb3fdcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVGE4XJ6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFXhY7CDzKkJ1%2F9F5vgVXAqinoxtdXRg9A4kmxRFRxodAiBj7o28MmibT%2BR2rzBKahUf977y%2FYG%2Bh%2BXbgWUgynu8VSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrBcRMF2UUvj4vWBeKtwDZHym1VvmBqKKUMZ5WLtxOf1lLcqOc1CmN6X8p0pZ15roXzxEV6y9tfux1YqjJKVUhSHt%2FRvucEbIYKL5HX7ztSl5lhZIe%2BhQRupreCjR9xadbGOHaWRLnO2ACs1Fr7lTYD32ALOd6yPsLmzM6kVyWxPNIntBbiSWv1wZECWuiEpQ%2FnDqXRFcEHAhxB%2BlnVX8XwPyObBFMnTmgdn6TU%2BRfJNrv%2BXDnrq7VINhun5bohhOf7KYgUQJQwv6TFCVxDfrIqSMaFhGFhMaRBz1RTNUY5RZt%2Fiw9x3bNLv1AoMZfqSECScOA%2B1c%2Bl8uhWBOvmczYFpYFdtIvVacf8diD%2BT2ItYM0e3%2BIyv4%2Bop6Hd5c%2FstLxrLVb3PefdKDULH7Vmkm6wTwgMMPljWZOFFV5rrC1cIy432YRJsAOUPLuqi1OL%2BOKnuc2KqZcB6TPeC2iXpebUO%2FMK2U3nPoeOKc%2B3c%2ByvuxFQ%2FdIXsoUtfJL5MyhMKvzZmfPXwePk28GADi8%2F6qs%2B583AvtTuLrBgA3SXBO54kf%2FtISkuuLENgaRx67NL6hVTfuasNQQcFqfAqvbQggDM4GQg0Gm3kz1nXRekkfH9%2FW6o2LBjcbLrQKyVdMek9WSk2P4qVC4F8D6owwxMKdwAY6pgFK1Tw7rNMQefrGVYXH%2FZXl%2FYWch1mIhG9dXQiacMGn14gXtNSP2LXL9kPRt7ksWIqatuicBtchalwtJImVjmudD8N1fWniVNSTRfdtevhdmMa9%2FOa2AaUWQUJlG4twv0dCZJ0ugC5zH%2F0fgbyZ6n1DjojtX%2BGWVlTc0WB%2F%2B6Tbv5qDu1Ob2qVvcZkqQDjxmh6X4t8ZVF%2BuF3cBi3yUUaIv4KTWNSqg&X-Amz-Signature=4cacbed2faa8c7a8c0e5a3027a67853da9b6d86a11dd14d804968119e4f4a29b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFLI2VD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCyOLpXAIamiQJ0S2ji39RvZElSN4LXxEH5Lwvmp6ssmgIhAJxxvB4Yu%2BMuEjjUbH6LKw6fPjsrkGLffvXCYUvKdJBqKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnN%2FmMpVJxChBt1Lcq3APpCAgq1gzXAbur7P4Wf%2BvM4vEUyry7g6U5ICrShA067HSHRhSxsQFMvMYWhJyoSLNGRGTw6Bh%2FOWQLdTpBKAhdvvpLRZcPQqz%2Bv3BV0ZLw9fSA61cLfL0cPkmtsbquFSbzG0i1lxTMWueF%2Ft90uD42MEYx9Ci9QZmYwFjdXaczGA3QVW73A3xtkdD98%2FpTPKNpicebMOkNxi8UR69ytnPfupHUQtxsV%2Fx14jbx9kVVMeXc9O4EZoA5hwhNBfLES31MkIbr2pBRR1swif4g9CwO13mW9CquaH2neyE%2FPkbgwquluuE64hIU73c15J4Tz77b4wIyZPwK1T9vVWTXyGBsX2ojgrj1GNRM4Dcp1pCpy0T44Onrz7vdWqTfzDEjYAeH4Dj94NCmam4UBonpXBWtA6RTXhvnD6PQniaQRdGtFP7ACVzD%2FJrQVx7ZSs8YyBlCm8d2Ep1swAUfjlATwLoDYww7heu2NKVWtMIH7gUuBvXY4bAM00Kc%2BO4wkpJWzR4j57yeG6B6b5YkZ%2BkYpL0%2FAXq%2B0y8aK1%2BfSqVGufYsPRjBSYuloU2rsM%2BFNBTICfwuq%2FmDW%2BtNRcTtqWBbWEDog27loDMKyxAjkmXjwOM53LQqSL8kkqF0%2BnawlzCJwp3ABjqkAQMxvcqK0YRLObhNJIg9LVABHWvwUAF57fnL%2FHbysO4cqrcYLrgqgcrFhpfm%2FVqEdc5z9QYfKuwZPAq1LGcBDIveYAW%2BOUmddff7x3wqWfzp%2B5iAH1MgFT%2Fr5bjReOo6TXfXX1M53HVWuovQOs5UhA5NW%2B0Q7HA1j%2BpC89fHytSj9FnwZrwEA%2BgBJHTb7bNzUl2gnpYwVVHpdK41opUAiSYX4Zwb&X-Amz-Signature=c6077c44f0d8cd2d111489b7220c93e413ce6f4b022f1fefca86d5f053ba9bae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636P7TRI3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDxrjF6V61r8DY0j4Nzxt4ju358IBt6pYUXUb42k0lsTQIgUzbqHXrqxfWqwRKeaGGD0vFksSaub4mh7Ll9DnoazHEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwwvFQ%2F6OZSccsQ7yrcAyTFuh4zKjcWpihbisLAXXXHL4uhZBLApabSRFx02NaEKY%2FcfT%2F4KiWt1Ubd4bFINLo%2BF9beqC%2Bp8SNWHyv3FVTbK%2FHkibsicy9HVudUbEMAY60Q%2FruOxJ9lYvBkUPkYTsROBPWan4HNFnWD85633AinuG2Ywq9y3IPJoaKJSRhPKT3BDb7v4NNR59WEWMjQpqlkHPR8tY6wtqusyDvb63MU%2FzQinkyCw6EpAzgFI%2FeaFpLnCZFhFbb4Cg%2Fv2PNR%2B6dljV7EAxEDARMIEAedH%2BbXvdEbghu2n2x1486zeaMLXjcOolptoPA8wKioJ5H5X8GWqaU6yFbO3MFUHKmhbxj4s1zxbCXiC79NQvSi69j9%2F17QNoQFvmPk86XPMaelPauFDtsWPZY1V5IIJfU27yLHUB0Ty0KFbyZnmcvmnxwo31dHI71TUwhbYz3HzDN9TRw%2BW%2FwvtierGvNHwWAtFY5apxX%2BBskKnL5GFDb3tYvcgoUm4Fb6vY%2Bl7EiCc4YHpD%2F5Y3698BVGcOtyKKo%2F5T7HM7OOIJ5FJhbl88xZ3ifl06sgGr4aMP1pe3dlnA4EAuvUBo4ZIxCKjPD2bmLKvG%2F7ItFL1AN52BHlsjNGz0rNEBZ8QLosRh6978gfMKTCncAGOqUBCCIZQJE6GGO5L91fPlvv5HRAbhHan7v%2FZYVLUxbJ%2BuSeGMsvt4s%2FPJKnSSXtOERRAK0GBnLQB0HkhXocp%2B5h7FCjHkUlSgGzyU%2BvK2Unk7gPikXayChNwUwOWgvdoCn6%2BLLSUF1%2BNtbRgB4MoQ9uuiYD33KaE4QB%2BP1JnyTy%2F2ARhxNE3GKTvIFSSm%2ByEwoM1Sfi6ehAlQIKw%2FK1nA7aFZd3xR3u&X-Amz-Signature=5087698a26a419dc0f5d1b643c4ca66539aa8730a13fe629b7fa485d9ff85740&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
