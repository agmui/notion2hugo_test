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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEICDOMT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD9MM%2FjcPYcd4YU2i23WP7A4Q%2Fbdqo13HaYwWBk6cJIBAIgbw4Q%2FDIH2aKi%2F1Xr5AJvjNOerGAh%2F1ReQFVDe%2Fc0lxcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK3sk%2Bmb%2B1B4X0y%2B9yrcA0jpXDOYMKfrXW%2F521bvOuGATrhJJNUTzbCGu3nPuG8pcyD3cqYjkySCmBmOCirnpyCxVwdTANyAv4Ed4s8d9nJvzVXqOm9%2FKcN5%2B4W1OiZf8BuQkE5vMNhGgOwUYplo%2FpGyhFl5GacCHOuNFdbhxwpEbrAPiORtEBMqeoGRsJ7ZO13MUIgoQbG%2FZNmrLu8M6VD6FoJqAfEjXdJAEujY8Qwpd8Rxv33sSkrE%2BU9OfaHrEfjx%2BVd0j9bPb8bsAKwlyDbyc6YsXkae0dUDeWhiYx53Cq2jNapsDoDUylASnUa%2F7RUeolT%2BJt4ucKVzTFuf7DcIe%2FZqUHUYt%2FH1uD%2Fr5sQWW6Cd4Cllcp5lol4pfiI625992DxNcQzeQaFdFYsZCGjZ5kLl5TLzZ%2FlCjM4ykVQLdrtwcJCBD0A4INahXXkmTlLPGxWQRlhXugjps1oeopbyyfrdrGEAQfGIiwuOYQAAbto%2FY1h7DmqoOKO3rwl2mhsLSDQTJSq1SsMIxXLZ10xfTN7hKSpdcVva8abwN%2F3ll1q0A%2FFGP3KUoyh8FkQQ2%2FZRJ2y4YB0szhhxcKZvxrCdtaUzKhhHxKGzANzFYIDqPZZ6gebjrVf6lTXiHHFmxESF2lGg45a3adaWMJuihL0GOqUBf%2FJfISrsxaDCLYxZI4C%2B6hMgtx6w7QxgJ8CqaYUbDtRP1iDShP%2BhyAYxkD3%2Fht2Wq3mDzNiftU08btvVprw0%2F5dEOkEJ%2FGZq%2BioXwWHGBUUFT320RnPpjUIZRXHlbkRmWhunc5EoKEWjnM21tHcC%2FHo7oFR%2BSICShPSw17MsZCoSM1HyCYjPiXbmDq8NxCu1Z%2FpsfYB5VRi5GlIp1EbMNr9x2Z7e&X-Amz-Signature=b971686f1f18ad0a8fef2f21ac59cb0968182789eca7eae327bfdea1385bed07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEICDOMT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD9MM%2FjcPYcd4YU2i23WP7A4Q%2Fbdqo13HaYwWBk6cJIBAIgbw4Q%2FDIH2aKi%2F1Xr5AJvjNOerGAh%2F1ReQFVDe%2Fc0lxcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK3sk%2Bmb%2B1B4X0y%2B9yrcA0jpXDOYMKfrXW%2F521bvOuGATrhJJNUTzbCGu3nPuG8pcyD3cqYjkySCmBmOCirnpyCxVwdTANyAv4Ed4s8d9nJvzVXqOm9%2FKcN5%2B4W1OiZf8BuQkE5vMNhGgOwUYplo%2FpGyhFl5GacCHOuNFdbhxwpEbrAPiORtEBMqeoGRsJ7ZO13MUIgoQbG%2FZNmrLu8M6VD6FoJqAfEjXdJAEujY8Qwpd8Rxv33sSkrE%2BU9OfaHrEfjx%2BVd0j9bPb8bsAKwlyDbyc6YsXkae0dUDeWhiYx53Cq2jNapsDoDUylASnUa%2F7RUeolT%2BJt4ucKVzTFuf7DcIe%2FZqUHUYt%2FH1uD%2Fr5sQWW6Cd4Cllcp5lol4pfiI625992DxNcQzeQaFdFYsZCGjZ5kLl5TLzZ%2FlCjM4ykVQLdrtwcJCBD0A4INahXXkmTlLPGxWQRlhXugjps1oeopbyyfrdrGEAQfGIiwuOYQAAbto%2FY1h7DmqoOKO3rwl2mhsLSDQTJSq1SsMIxXLZ10xfTN7hKSpdcVva8abwN%2F3ll1q0A%2FFGP3KUoyh8FkQQ2%2FZRJ2y4YB0szhhxcKZvxrCdtaUzKhhHxKGzANzFYIDqPZZ6gebjrVf6lTXiHHFmxESF2lGg45a3adaWMJuihL0GOqUBf%2FJfISrsxaDCLYxZI4C%2B6hMgtx6w7QxgJ8CqaYUbDtRP1iDShP%2BhyAYxkD3%2Fht2Wq3mDzNiftU08btvVprw0%2F5dEOkEJ%2FGZq%2BioXwWHGBUUFT320RnPpjUIZRXHlbkRmWhunc5EoKEWjnM21tHcC%2FHo7oFR%2BSICShPSw17MsZCoSM1HyCYjPiXbmDq8NxCu1Z%2FpsfYB5VRi5GlIp1EbMNr9x2Z7e&X-Amz-Signature=1306ae38dea14bd0bf89d1a70efc2a3b5ff420392d8b5ea31297a3aa5ea2634d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIOTGVN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICxYmWN1J0D0re8RKGT9XsOI2ySs%2B%2FDY5Q0LSAjPehavAiBIaiFDpHhv7Oin%2FYpf8sjoBdaqvABvPRV3AbjibyuR2Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMwp8Ytf%2BHJ0p23pj8KtwDvBtxnZbHUCJjrg2WdVcZFWGSKpeYO5FwhmG9fcIRXN31kAcBNkLqtQBgrvRgknbq%2BB36ewfA%2BjcnwrgLijLtBkKcPy8rPJqhHUvnMfP0su%2F6V2QQAriKiBV9Hh00Frie1CntsYF3rsJXFyJRBX8G7n2vxXDQWzQcprCOdBqV14EKHFFiAwW4R8oPOTmL3R1YBfFbMXbSFFs7AYKHi3jgkwPiWnXU7xudMdDHRvGbyMea4Q32liOTCFJPheX58%2BZPRnrih%2Bg58vDVjKFlKjgYiJTZjqec6DvWjx%2FQyJ36yX8R84KCtdiI9Wc%2Fi%2BurkUSZaP9N1p%2FGJwdXcdaWcz3HnEy5lUFrxdPuwqlofWn8bg0z1bICipVM1ZBzBsFDMmKe91fD4ol9tcnmaKCtb2%2B7g6L8LfvjQHp%2B0XizbrSwpeEyJqbAoeoyiRKBnsHD2zATqdRO%2BQJSWB8qlmRpLBey168tq%2FrXVr%2FqJAdtR1wOgK1DxF%2FarybMLDgib7dCOTSOEI33%2FM1bDgY3haiohpqJL1t2vVgIrC74XyHb%2Fk2j9byuBX4jGNLmL8OQTTZU7oLh9zF4mDoehk1MaEZT6eY4zgmKbHJiACWOrDIrdHtm3mcKE0jAFawJr0uZL9Mws6KEvQY6pgFRcXiFctxVm8VwpbFNXUUDY3zH83sS85ScorR9PnQhXT1md9HxdR4REh1HqilcpSO%2BvzUKiU%2FtGxng7HpVdZbGkeT%2FD3I3DE2Pz9ARaazKZfVTKBPVi4PsPLPj2mcoZWn5%2BPkzX995uPkfd2qmY4bi3YloTv6LHoDH6KByTWFPWi6hI7ZLL0AU2ErXQbY1owe%2FMB41nFTMfTjszOBTZQXg%2FxvSFiCt&X-Amz-Signature=71e638c4bc3d6a9b320600ee988224fa07313606b78111439f423237f88237e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3BEZU6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDNqT6iUlW2oWKUMtdvRkCdYtC22fOkFL%2B5wC9TfVv6ygIhANx0smd%2FymULz8BsvREUquUt7VI8%2F30vzO4UyRd3B4ORKv8DCBwQABoMNjM3NDIzMTgzODA1IgwePPwEcN6h1aFiV5sq3AM8AjUE29rT9oOexg2KT%2BVS0FZF1GUtwOErKoj%2FmdsLgdbY6S0Gj7usjKvrxlqsQ3FnFwx0YjtWVVylYV7FJL8IK8T6VhxTV84XPl57Zt3c2bBgEyyQ6akwjKkZhVRUgVTiWWpm%2FfnzsFwdWQAoXoTEZsSNUOvW3ZL%2FPkUSTFmXQSxj%2BJNKMXra4c9Jw9gV0Y7nosIJ0j83nK%2FHbCSPX3VtVLqwXzuQ752Umiw%2FodEcN4EZO9PW44K4DzKOOogWxHSj5jf08rjrxElOmjQljJw%2FRCP%2F9668G7w6A9kveX5%2Bxx3lrSriz5zFde7XYliXbtotrXO%2FkfV1HvagJbO3kWAVKxetmgHAoYCJzibsDdGBbe25477BwfBKnCBVjbuXk0z9p%2BSyUrcjqjol%2BDw9lJTLIgupnxyGZadR0IG%2BtRmyS1tyHgrVk3hM9kVNJ%2BiOk9lM9Br7%2B5aZvealL9EBg0kIQmwVXPeo6XXIm2j%2BD8QBlnZdY9tAh%2Bls3X90LXRcRx4vLfdqMz6zOeq7%2FcJlh%2Bu3ZM9vJJdmXSj%2Fp4WCanCTfP8JSC45HRgTtk83fDu26Iay9nXAaZI10mSr9jw%2Bp5qkAKq%2Bfo37i3bfIZ6vRUEv47oVnJoII6CLKWObJTDHooS9BjqkAfWupYdNqpCstAekr%2BZP6KIWO61EQzLRkpXOzPXqmfUkvSPWSSqMcuBj%2B8sGOfHoDHFnA80P09q1%2Fnoy7J7ANnee0z4LEMG6xdaLAMe5kg58AVZnbU1vLyKXUzbzh%2FJyY%2Fdt4g3EFZpc9tT%2BxSjjuf%2Fm5WeazTxWm7VRMfIWvQIp44OBm9Z8ooLtljxLZMU1sNibMFFYESUfpl3mZni6dSW4jJcB&X-Amz-Signature=1a1941dfba2846deecc93f024a5826fda1d4acde33958bbd0d45f195a20135e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEICDOMT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD9MM%2FjcPYcd4YU2i23WP7A4Q%2Fbdqo13HaYwWBk6cJIBAIgbw4Q%2FDIH2aKi%2F1Xr5AJvjNOerGAh%2F1ReQFVDe%2Fc0lxcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK3sk%2Bmb%2B1B4X0y%2B9yrcA0jpXDOYMKfrXW%2F521bvOuGATrhJJNUTzbCGu3nPuG8pcyD3cqYjkySCmBmOCirnpyCxVwdTANyAv4Ed4s8d9nJvzVXqOm9%2FKcN5%2B4W1OiZf8BuQkE5vMNhGgOwUYplo%2FpGyhFl5GacCHOuNFdbhxwpEbrAPiORtEBMqeoGRsJ7ZO13MUIgoQbG%2FZNmrLu8M6VD6FoJqAfEjXdJAEujY8Qwpd8Rxv33sSkrE%2BU9OfaHrEfjx%2BVd0j9bPb8bsAKwlyDbyc6YsXkae0dUDeWhiYx53Cq2jNapsDoDUylASnUa%2F7RUeolT%2BJt4ucKVzTFuf7DcIe%2FZqUHUYt%2FH1uD%2Fr5sQWW6Cd4Cllcp5lol4pfiI625992DxNcQzeQaFdFYsZCGjZ5kLl5TLzZ%2FlCjM4ykVQLdrtwcJCBD0A4INahXXkmTlLPGxWQRlhXugjps1oeopbyyfrdrGEAQfGIiwuOYQAAbto%2FY1h7DmqoOKO3rwl2mhsLSDQTJSq1SsMIxXLZ10xfTN7hKSpdcVva8abwN%2F3ll1q0A%2FFGP3KUoyh8FkQQ2%2FZRJ2y4YB0szhhxcKZvxrCdtaUzKhhHxKGzANzFYIDqPZZ6gebjrVf6lTXiHHFmxESF2lGg45a3adaWMJuihL0GOqUBf%2FJfISrsxaDCLYxZI4C%2B6hMgtx6w7QxgJ8CqaYUbDtRP1iDShP%2BhyAYxkD3%2Fht2Wq3mDzNiftU08btvVprw0%2F5dEOkEJ%2FGZq%2BioXwWHGBUUFT320RnPpjUIZRXHlbkRmWhunc5EoKEWjnM21tHcC%2FHo7oFR%2BSICShPSw17MsZCoSM1HyCYjPiXbmDq8NxCu1Z%2FpsfYB5VRi5GlIp1EbMNr9x2Z7e&X-Amz-Signature=eb229fd4a80a036654fcbfc432a1016d39a6ca8cc9f20383b5171773e3af150d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
