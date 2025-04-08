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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DSHKFU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKTSIaBZjvYFgKSkzGq%2BiHWfLn2x0ZYta1ZQgREqZjRgIgWy5pMA4DTT9n5kdIfof%2BbUZKI%2FOLOnenwYBROU6i9Xgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPvZLTQRUSGdTLunkircA%2BM%2BBtToeuhZ9Rai5NnQu%2Bld6lDsCY1duNrrj%2BuoNDyho6EZyMGEuc66RoxKxHmnkcpS4Pp2NeQueblflDXCGkrI%2B7%2FXEbGrQWq0XVk%2FO9%2F01e%2BErWvmMsD4xK42%2FvbsOXlP9HNI6w62dfLtrV0jgqohOZLTOnV8VpTW5RiSb8zG4CDcagv13RUIfODK1hGmrF2eYwH0jM9xHaAAJpxtFxlZRokAYdSPYEWfJw5wLt6i7Zn8s91aNpEvcKbUiIVrgl8QZaLB1Qu1oZQNfJfCPSaVG1XSMc%2B8%2F3RTrxvXmCFN59q2S26LVMB8DMLumkhxNhVVniwAYngWSMlAXWC9pYxnUPgilt%2FvrPc7aSKH1RQZ%2BkVPWzkdS9MzDK9ukrGii7gii1wsna4AdAjX2h9BsAZTct7uRTbgmHxpnf9YAtgiX31mkD4b6X%2FRXKrQJ1auLTjWU55WaN%2FZVvUf6ubic0qYVTbeUlnu4QlHKljBc47EChz3unZA%2FhR6cBUBT4VRR5gOGxVGerg3ICJg1Zhae7juneJ5IzM6%2BhqG9Ku7vgBEqquzkrC%2BqWXC8h9h0LnBaN1iqgG9%2BNP6a4lL%2BRHGNUDFkGlgg0EGoQ%2BX1cPH6FK3kIm7BfRAkmwLLK%2FkMKjx078GOqUBoTTihZgeFQ60YGs%2BI%2FGgxfPBBQ1DEJXP2j8K%2Fz4T32M9Ygo4R0uFc5YXqB4qYhhVtmk5xPxLJQEwLM%2Fsjzxz91lgcvVQdAKh0fxHRD9wViprywWAMPBEZmXX5CM%2B4Wtf%2B5bCFqx1m3pSNAZrukoKrr91Q5Pde7IJNVU%2FxvkKyomPfehYkm%2F152ntT6pJMSJGSvmxMLxOjD%2BWG1uuqOZx0Ak%2Fcz62&X-Amz-Signature=6dfde32fe24e0c77bc677d803f20a493dddfab56c3ad503ab1c242f4060b6490&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DSHKFU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKTSIaBZjvYFgKSkzGq%2BiHWfLn2x0ZYta1ZQgREqZjRgIgWy5pMA4DTT9n5kdIfof%2BbUZKI%2FOLOnenwYBROU6i9Xgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPvZLTQRUSGdTLunkircA%2BM%2BBtToeuhZ9Rai5NnQu%2Bld6lDsCY1duNrrj%2BuoNDyho6EZyMGEuc66RoxKxHmnkcpS4Pp2NeQueblflDXCGkrI%2B7%2FXEbGrQWq0XVk%2FO9%2F01e%2BErWvmMsD4xK42%2FvbsOXlP9HNI6w62dfLtrV0jgqohOZLTOnV8VpTW5RiSb8zG4CDcagv13RUIfODK1hGmrF2eYwH0jM9xHaAAJpxtFxlZRokAYdSPYEWfJw5wLt6i7Zn8s91aNpEvcKbUiIVrgl8QZaLB1Qu1oZQNfJfCPSaVG1XSMc%2B8%2F3RTrxvXmCFN59q2S26LVMB8DMLumkhxNhVVniwAYngWSMlAXWC9pYxnUPgilt%2FvrPc7aSKH1RQZ%2BkVPWzkdS9MzDK9ukrGii7gii1wsna4AdAjX2h9BsAZTct7uRTbgmHxpnf9YAtgiX31mkD4b6X%2FRXKrQJ1auLTjWU55WaN%2FZVvUf6ubic0qYVTbeUlnu4QlHKljBc47EChz3unZA%2FhR6cBUBT4VRR5gOGxVGerg3ICJg1Zhae7juneJ5IzM6%2BhqG9Ku7vgBEqquzkrC%2BqWXC8h9h0LnBaN1iqgG9%2BNP6a4lL%2BRHGNUDFkGlgg0EGoQ%2BX1cPH6FK3kIm7BfRAkmwLLK%2FkMKjx078GOqUBoTTihZgeFQ60YGs%2BI%2FGgxfPBBQ1DEJXP2j8K%2Fz4T32M9Ygo4R0uFc5YXqB4qYhhVtmk5xPxLJQEwLM%2Fsjzxz91lgcvVQdAKh0fxHRD9wViprywWAMPBEZmXX5CM%2B4Wtf%2B5bCFqx1m3pSNAZrukoKrr91Q5Pde7IJNVU%2FxvkKyomPfehYkm%2F152ntT6pJMSJGSvmxMLxOjD%2BWG1uuqOZx0Ak%2Fcz62&X-Amz-Signature=5a1771b7dd0640950893bacb1b9b6d380bd96f8bc4ff155979c3f9997f843d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUH7U5XS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrMEZgbDzSq35dS0JzHb4gfj4DvozHvv%2Fa7k1G6unTbQIhAOBC8aDIjoplgfDhV%2BoXlIlXhsKA53sPPkSw6PQPHehnKv8DCHMQABoMNjM3NDIzMTgzODA1IgyO%2FLj%2Fez5kR%2B%2FYiCcq3ANXjF2VgH7cJDRGmGxme605vsJE2eSfdxu%2FoWtHprkcfnHA4ZD1iW7OxNUzvXxyAn10du%2B1unK32MS%2FaTVkE9ojl6Mnlk1AC3lS62EBoiAfO0vOBHD6ttWIW8ZhnwXPAlsF2hdPEyBs0MVeMC7VohxV%2F5vBFHkEoro3tuh%2FSoNchT65EpnClGWPgtzmpmlgHymRtdBWpkrOcwSJH9bxhJFY4d2LRUT%2FFhsr8rjW2rylW%2FshKlvi%2B0fI7%2FrYhHlOnZ7PYc6LhD8wx%2FbyPGKSl%2BRQK9BqgJk%2F5NZ%2FQuSY5cOABVGo%2FFo165m%2FCjtABKgVl6PfmScdAN1mkSX4X6AFcACNz8aQmHGXbr7bzHRsdiZ4YYdX%2FliSgVsUy2y4sx3sKHCdxW1U1JqhD51qVS%2BE1pRDDOGVuSri94vbWykddDCOHsxq69HfC7PavYxvTKnRVSDB4NJjw8XLrUvFmt4Pu%2BJ9XSFu4hM04wdeXbzaGkcvcLpvfrSAMU8V6dEhZJVHJFAaUHTlyZykb0hb1FSln3sHHYdPrfIvTlNWBiyIN7M4Wjk18RvOqrNy%2BPRWlAYPvtW02xFyL4rtI%2FZim8PLowbt%2BUvB9xaaqENyyX2BbHAp5iSD33ozZMHSsMXf6TDp8NO%2FBjqkAVAz2nrTF25SSa2rdTWPHaMAxH%2BDuFZDO4APyoeRcn%2Bx20LglInh1En3jw1Z3jMhKKIpBn210tJR7lZZJd1zuE3ku48cSjTT70ZGQJgqLgXnT%2F%2BPdc%2F4v7Js7J0JK%2FIzdgrNmV%2FI0zsUeED0FG1VKW0REmh3uKrwhlaGI17yx61SGke0oZoM2gGCgkQB9z1FmLyHMYgf%2BbdEX8SfAoppAI2kyniq&X-Amz-Signature=ef39984c82216e6ed6abf1b6dcb6e18836e70d74ca8d1d57198c91a73d7e1645&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEK62IHO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsVft9uZRFtmWXvuNiCDbSCGG2giUv7PunnbQOgFapbwIhAM90ExV1Fog%2BMzzR3vVe3aaUcrs6fsNN8C%2B1HpG%2F5XlUKv8DCHMQABoMNjM3NDIzMTgzODA1IgyySxLJ%2FX21%2FYRG0VAq3APk1tJElvpYRqcxuMHd%2FA6d6z6fVM%2BjvBy4HTmFx8uJ5BB36w%2B4qb%2Bt%2B8afyvlUtlyZeI9%2F%2FlbviyUypY60mD0wpIUhX4ucEvCa7WEx5wvBXxVf1WHsGckL7vXz1nEeB4jIaNlY5QPqfUUvT%2Fy4%2FYdTUyk%2B9yJmVUJSD6B01XOE%2F3m3828DzgyGW6NJVBmxh3TbnxhyWAf5gb1x9BZSoWd4ReJs2NGMR9OeZYovPiuMo7QOnbpx6XajGTp79c1tWUrlusMjfgkfyjziwwZerSuMIHZvAVxEp2kb2SZlo3yo0%2FZgS%2Bd7uCcysYSTVPLCVqnO41DI4Fzj3%2BjyHEioxs8Tl80V3TEYqCcHLWpjsQG1L5NeFp0oDAUiFAntW%2Bv8lMttGpBEP092uRCoe%2BXRxQKgWOxpZOVlrd4jVPzToVhcdT4Wv2EaZa7%2Bm8L7bJIipKhSFXQWISMzU2eAeJLHAzvCgO0hmycIP3hORq8b43I%2F0ifsMw%2FLq3PAkR%2BG39s2aORcoMQIsDmgG9cidHgaHjkkYQzc3AoKIiF95gOqpzJnzXIkHX4dkUZT%2F6gretiEPxogJ7TY2GqWWgfGXVLn709QQ1OOxRmbId1PnJIGH5Cb17HnjQ1ahY7fLahiADCM8dO%2FBjqkAdXdTnR4udj1yUeryq5cRrVKQDszrnKZoM4Xzny3PPrITHC2AL3gJom6NYBR043m8tSOlCsiV3epCejYrDhi%2BHShlncIlq2zrsnRkUAdHJhD5X2vgaPnbLe9%2F%2FMQbBCB9iFl1AiYfwsOicrWzkv3QIdv2JrsNKq1iB9YhZLDZjRkirCFynGLFOQ5IDos%2BTtzCi236IDGaK6LTZd0z%2B61iAbEWlQt&X-Amz-Signature=1da46090582545f8fac43786eebc33bc8b205c054c461dcc2058becf94c1dcdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DSHKFU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKTSIaBZjvYFgKSkzGq%2BiHWfLn2x0ZYta1ZQgREqZjRgIgWy5pMA4DTT9n5kdIfof%2BbUZKI%2FOLOnenwYBROU6i9Xgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPvZLTQRUSGdTLunkircA%2BM%2BBtToeuhZ9Rai5NnQu%2Bld6lDsCY1duNrrj%2BuoNDyho6EZyMGEuc66RoxKxHmnkcpS4Pp2NeQueblflDXCGkrI%2B7%2FXEbGrQWq0XVk%2FO9%2F01e%2BErWvmMsD4xK42%2FvbsOXlP9HNI6w62dfLtrV0jgqohOZLTOnV8VpTW5RiSb8zG4CDcagv13RUIfODK1hGmrF2eYwH0jM9xHaAAJpxtFxlZRokAYdSPYEWfJw5wLt6i7Zn8s91aNpEvcKbUiIVrgl8QZaLB1Qu1oZQNfJfCPSaVG1XSMc%2B8%2F3RTrxvXmCFN59q2S26LVMB8DMLumkhxNhVVniwAYngWSMlAXWC9pYxnUPgilt%2FvrPc7aSKH1RQZ%2BkVPWzkdS9MzDK9ukrGii7gii1wsna4AdAjX2h9BsAZTct7uRTbgmHxpnf9YAtgiX31mkD4b6X%2FRXKrQJ1auLTjWU55WaN%2FZVvUf6ubic0qYVTbeUlnu4QlHKljBc47EChz3unZA%2FhR6cBUBT4VRR5gOGxVGerg3ICJg1Zhae7juneJ5IzM6%2BhqG9Ku7vgBEqquzkrC%2BqWXC8h9h0LnBaN1iqgG9%2BNP6a4lL%2BRHGNUDFkGlgg0EGoQ%2BX1cPH6FK3kIm7BfRAkmwLLK%2FkMKjx078GOqUBoTTihZgeFQ60YGs%2BI%2FGgxfPBBQ1DEJXP2j8K%2Fz4T32M9Ygo4R0uFc5YXqB4qYhhVtmk5xPxLJQEwLM%2Fsjzxz91lgcvVQdAKh0fxHRD9wViprywWAMPBEZmXX5CM%2B4Wtf%2B5bCFqx1m3pSNAZrukoKrr91Q5Pde7IJNVU%2FxvkKyomPfehYkm%2F152ntT6pJMSJGSvmxMLxOjD%2BWG1uuqOZx0Ak%2Fcz62&X-Amz-Signature=402ad600019b2c91c707d6b1a3a65caa1e9df70115c7fa2f27373cfa49690f36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
