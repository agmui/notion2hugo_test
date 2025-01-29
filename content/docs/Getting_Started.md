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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSTY4LN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL50wN4Kuqov1vVj1BKX6xelkVe0dUxfXBJintt25T0AIhALYrB3mP6pMxesg7ipgdUttowazduKPua6cT2kNqepl3KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ShMYxUOPCwzNCy8q3AP1NXupjNmIgzkII1rCPobHLG%2BMtvphmcZvqOwG8Jo%2FriUzaIRjp02A6jYvH2Hxm84p%2B7C65ow%2Fe5Q7LG2ZjRsDRVQC0z6DYmBASHEZEz9DDnvk4pblawihV%2FdeHlhSq%2FvIW1k%2Frj48SnsPDK%2FCXCsWkGeBt1FGpIOqBV3IHOpIL3Tjc6gxM%2BLtme0qb5cMcMzgkzWUbJsPKfjlA8iojvfHsOIqzJwgu3wba5PCkKzzvLS2vxvR7DgYlj4tSBBKl70InUkR2Slyf%2BZXTDi43pvczVGC5GQlWyB0ya1rQ1%2F%2F73FoEWy87LRjSTDtjD3%2FspBsbqip6hXBuanRkTj8mSlGNnbdp7e4mKKNEzZ7WwfwVibOFP1rEPIhtbmyPp74b%2FvaxFzSnF32Kyfn2abJaDec6qCts5chJJ%2FfdnzDR6WTIQxX%2FQ5q1TSmuLag402zYLRIL7Z0CZON9peCpJwxkLFEjFfMWuCjjrgQk09wutAP4gJeGUTuG8WguOcqzoM2S6Gf7HjbVp6fXDyaRq5%2Boiu5Qi%2FySvQmmpCsAtAlcA%2B%2BpEA9b%2FX5TkRcsHFLIrAgKciVE17BiKCJmqz3WqBLiwJAiWtbw%2BBhYRXg5PExHKNHkM4%2BcBYOLDUNEW%2FodDDrqeq8BjqkASlLh2rvWsxOa1BVKWctTEL7qvZVpPSJV6Wx9U0aYB7nUQLi3v9ru3KwM4W1zyV89t%2Bb1OSrJBOWb57D0w8IMkxLqI42cv9HjYaoHHMTm6WsOhzOBmX1in8JUFdYa%2BsdSLUCRrxygUlI5peSOmP5%2BnKBpB1NinteqVtDf0DtbXj2NqJICrfWHBp%2FBpG7MNzlfpDxpEgdDve3mUdGG886PeI%2BOUwS&X-Amz-Signature=4f22e70881e0047be9c06e57f96bb540a47be290de5b5b7535d35c4680975186&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSTY4LN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL50wN4Kuqov1vVj1BKX6xelkVe0dUxfXBJintt25T0AIhALYrB3mP6pMxesg7ipgdUttowazduKPua6cT2kNqepl3KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ShMYxUOPCwzNCy8q3AP1NXupjNmIgzkII1rCPobHLG%2BMtvphmcZvqOwG8Jo%2FriUzaIRjp02A6jYvH2Hxm84p%2B7C65ow%2Fe5Q7LG2ZjRsDRVQC0z6DYmBASHEZEz9DDnvk4pblawihV%2FdeHlhSq%2FvIW1k%2Frj48SnsPDK%2FCXCsWkGeBt1FGpIOqBV3IHOpIL3Tjc6gxM%2BLtme0qb5cMcMzgkzWUbJsPKfjlA8iojvfHsOIqzJwgu3wba5PCkKzzvLS2vxvR7DgYlj4tSBBKl70InUkR2Slyf%2BZXTDi43pvczVGC5GQlWyB0ya1rQ1%2F%2F73FoEWy87LRjSTDtjD3%2FspBsbqip6hXBuanRkTj8mSlGNnbdp7e4mKKNEzZ7WwfwVibOFP1rEPIhtbmyPp74b%2FvaxFzSnF32Kyfn2abJaDec6qCts5chJJ%2FfdnzDR6WTIQxX%2FQ5q1TSmuLag402zYLRIL7Z0CZON9peCpJwxkLFEjFfMWuCjjrgQk09wutAP4gJeGUTuG8WguOcqzoM2S6Gf7HjbVp6fXDyaRq5%2Boiu5Qi%2FySvQmmpCsAtAlcA%2B%2BpEA9b%2FX5TkRcsHFLIrAgKciVE17BiKCJmqz3WqBLiwJAiWtbw%2BBhYRXg5PExHKNHkM4%2BcBYOLDUNEW%2FodDDrqeq8BjqkASlLh2rvWsxOa1BVKWctTEL7qvZVpPSJV6Wx9U0aYB7nUQLi3v9ru3KwM4W1zyV89t%2Bb1OSrJBOWb57D0w8IMkxLqI42cv9HjYaoHHMTm6WsOhzOBmX1in8JUFdYa%2BsdSLUCRrxygUlI5peSOmP5%2BnKBpB1NinteqVtDf0DtbXj2NqJICrfWHBp%2FBpG7MNzlfpDxpEgdDve3mUdGG886PeI%2BOUwS&X-Amz-Signature=d50d6e321437664bc8daf2d9582f8b1e1799d0af2ae6dcb12c0b940a9cc64787&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIXEAMUM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN5piL4rhDu%2BPYtTMiSDPXzp1tHITovMyERqbsJdyZiAiANUpCKfCmBMUge3iM92saDjbv4iIESN0UeLUpp4jYCiiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2xv7MvxVEFL269y2KtwDMf2IuzOvnfmraZnSL98UEsZX%2FO604%2F2FuddtawtAV2HUGkv7KLIASPm7B1wB6a%2F7LrKane3yaobYB3F6sDdnVv%2BQY%2FcOQjEVtca2slK5IwjIfSCYDpUGGrUd%2BDxHMElmjFmPWJ2RU6RElC10ASrpVtlJiKmWi635wDitcLlNNmSIpyfbaxzUKdDuoaYKd2C%2B0qNw3HcwR70G966G%2BeQcb2DGFORYo%2BCQlytcKSuMTIXR1xJWf9qKP15MMeqgC5UfO1hb48d1%2B4TRYQg7OLQckP5a7QrgesQPet2q61EMP666Y%2Fn%2BaRlqBocl0LCxmL9w7w%2FRekbCd8KBGtEiczn5Rv0GGWOafaBiQ7j8b%2B3w4DPoJnQLNf7pQDfN51JbGy7UbC0VFfgtVi%2Bo32HHT1ubYg0%2BlqiT2EiPm9V1JtHF2mEVe3MPFtUc%2F6w4bvjsLWKRzhFwd7Fxy4SR7Ig9WF7cks65yv%2BYKDb3oLMph4pZjFjwkLHTnudTf7q%2BH7NmDy5%2F%2FjCD5r93YhLobIMXhbz4B7c2R6VAAIabCeBDnR4tnALCUKGwMXDpO9Kmk1zX3FTLTMeEeCnfJPvPTXv0uP5IKK6nmL4OFnCM1sZAlYqj%2BnKnab%2F3IOqmgqKDbq4wxqrqvAY6pgGy6RLbODd47W6tA4FEqy%2BEOduIRlvhmiiLa%2BY2WDxcd034Oz9gPc4VL75j0%2BzJ%2FsHSDbwXsfPf1MvsVP%2BgxS5VoQ%2F21KLYhE98Corc1QdzBN2XfILFrl92xQYAiKh1%2FWdhcl73yvE1BYadehfu2oupuqJDXhxGhIn6tSDcV%2BokZo3yrRh%2BbK1UPO8OhahMWe6GOJb3wW86LoOKjGgURhlRxTRniQHY&X-Amz-Signature=828c9d38da6ed0a8980041fa5c6fc6c686b80e7f50bdc1cda86524d713404495&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIYEQNJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxwSfx49hiLxuhkQSWDdhN9NQ9Y5cqom7%2Bu%2BW5%2F9JtnAiADAt2soCkeBCPvfmU5Eae1rGXHfaO8%2Fv4eR9zumhMFTyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEaITYujxzCM3RkixKtwDekVHeJkf8pUZ0zeYyuoqriBZ3e7Bwyh7mBnocTJWb23s7BX%2BvY%2F8KK%2BU9%2BuEFuRSo0WUtqtva3lfSZu9k1IJmUM6fRSKgyie2uVd2e1OoN6zmhuOwocIwAJ6U%2BYgYKFn95%2Bu%2B3ceTIdrlcQFRzrIPExEEEw9u6twR%2BRpiAJf%2FQmVAqhEt4Cj%2FNC9n2AHqTa%2FYNEJS20DI02aE3tPTP5ByBKCtyfPrgs%2BiQa%2F6%2BCxvQDjqvG4lT8QKxmXUHW9o%2Bawx4S4Ao9OMrktwUknySzLPa9Cf1az2aySm80T3S4xXRRIrc1qz0Dbp1uvLFEZY8fYy83y035mSmD1vyU9cJveAs8bwoxMdBp9uicWsdjVOVgOy2A7zrlDKYquTAImWNJXZJyWdBfZ30vCpApD6HuT5WxIW0WsObm6iQjIO6A3wxyxW%2FCeQh1dEhzroNapTxli%2FruVnHOiw%2BbhPiuIjrAo4OpRuvYyqAudc3UIy1SFIsZMS%2Fv5HW1l%2Fovz1%2B8rgrlTtwcIcwu1Fh3%2Fvyq9vX4VXWmAECM%2B4o5y%2BcQ5utwoiwi5K681icT1ynvCOkpYFlCIGj4ndSTNUYix7lUA%2BXUzBuY%2F9o0L3pFcmj9I27o56OGzxa4IsWlIKlois4MwtarqvAY6pgEQmvUoPJ6YkkxbjvyZ%2FMCKt%2FrgTq4phmXBMTZtG83ZduQiMpnrJNFkllp%2B3fGqvimOYQikHbdqr6m6HUd9Nk66wT%2BKIhXDVQX3soqx0F88pXUadlHrR2fibj4ZqHfCHMyQaiS9RsDvfsMRXd9ASrUt6FnEKfdwjGhqM%2BGcNPZfPn55rJOcsiRP9RbtwYX72XxrtTGo%2FN7zOMSZgtxl3U7dXPoUyPZe&X-Amz-Signature=4445784852192f7bf7b9238584c9359be7290704f2e1d294042fffb17a71c79c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSTY4LN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL50wN4Kuqov1vVj1BKX6xelkVe0dUxfXBJintt25T0AIhALYrB3mP6pMxesg7ipgdUttowazduKPua6cT2kNqepl3KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0ShMYxUOPCwzNCy8q3AP1NXupjNmIgzkII1rCPobHLG%2BMtvphmcZvqOwG8Jo%2FriUzaIRjp02A6jYvH2Hxm84p%2B7C65ow%2Fe5Q7LG2ZjRsDRVQC0z6DYmBASHEZEz9DDnvk4pblawihV%2FdeHlhSq%2FvIW1k%2Frj48SnsPDK%2FCXCsWkGeBt1FGpIOqBV3IHOpIL3Tjc6gxM%2BLtme0qb5cMcMzgkzWUbJsPKfjlA8iojvfHsOIqzJwgu3wba5PCkKzzvLS2vxvR7DgYlj4tSBBKl70InUkR2Slyf%2BZXTDi43pvczVGC5GQlWyB0ya1rQ1%2F%2F73FoEWy87LRjSTDtjD3%2FspBsbqip6hXBuanRkTj8mSlGNnbdp7e4mKKNEzZ7WwfwVibOFP1rEPIhtbmyPp74b%2FvaxFzSnF32Kyfn2abJaDec6qCts5chJJ%2FfdnzDR6WTIQxX%2FQ5q1TSmuLag402zYLRIL7Z0CZON9peCpJwxkLFEjFfMWuCjjrgQk09wutAP4gJeGUTuG8WguOcqzoM2S6Gf7HjbVp6fXDyaRq5%2Boiu5Qi%2FySvQmmpCsAtAlcA%2B%2BpEA9b%2FX5TkRcsHFLIrAgKciVE17BiKCJmqz3WqBLiwJAiWtbw%2BBhYRXg5PExHKNHkM4%2BcBYOLDUNEW%2FodDDrqeq8BjqkASlLh2rvWsxOa1BVKWctTEL7qvZVpPSJV6Wx9U0aYB7nUQLi3v9ru3KwM4W1zyV89t%2Bb1OSrJBOWb57D0w8IMkxLqI42cv9HjYaoHHMTm6WsOhzOBmX1in8JUFdYa%2BsdSLUCRrxygUlI5peSOmP5%2BnKBpB1NinteqVtDf0DtbXj2NqJICrfWHBp%2FBpG7MNzlfpDxpEgdDve3mUdGG886PeI%2BOUwS&X-Amz-Signature=829afbcb78ea71934e8819f364b160bfd9b1077319f6cd69b85029b3ea6f7268&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
