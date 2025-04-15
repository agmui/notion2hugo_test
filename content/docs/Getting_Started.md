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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672W24EL7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSdVvS9IT03HUTfY42QGxvolDLb%2F5%2FQ78qnfQIimvMxAiAISd6yBDJlioMFyQcJXe%2F6wSkLyCbCfDVeYKJQxb%2BfVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMhFr%2B2yMkYSOMaFokKtwDEEZJu8Dmbj17IjknXW3fgrmWg5YRUzfg%2FlHN3M%2BYnk1VUuwC4%2Fm50rXQDDue%2F6zvROM6USYK3E98c58R0fMvuGLE4kX4Y8IPtGbvEh4wtvNqpC8IW3ec%2FdOUmOgEANCgIXQMvJwLiu%2BfTz%2BnM%2FPMGDVzvRH9VtZnUmQ8tzW%2BXOkWzowCC23DTI0GR1sgVUE919WqTJqCGP%2FDjU9jJqubBzsS8fi1%2BeknXnUbfYmLlmjxONKgGhZgMtKA82rA%2FxwZMcuK8CpHPI%2BWLCKs43BNsB860LN%2FJRvwPKSLt4J8C0h%2Bjgni9xLCCMJRoLqWrN%2BMWEBLmKBnUoJfsXAD%2BOafqbo4XNT5AOBRZyJ0fWF0DJ5CqaSH3U1LKuaZX%2BY1xHOSUab154nz5l8cDoTXjXbpttrMTT8G5CX59WrWFApXWXgB5MfkYSlc4whGsZ81suwk4oO4THzaJM4SQYpotzs%2FY8jByQTIvp0%2FMykt0msb8Un3snlEAMFNGIGSL60RpG04HspkFN2yU479TCeYez7or1ujmKcO0hex6KpLgbBiKMCV5upMj8pN6Hrk8ynvaskaaSR5Ah3T7U4ihIhX5e9ukdWpjxdy3uyBXvWNsMdT9xzRmtHozDShW4R32Pcw6IT6vwY6pgG9c45rl%2FSSrjWHDZOk%2FWdCw5oDvy1qLsOxEXP%2Bg0d14Hq0Rz9ru%2F2VLsD13aHlNhJepaHGpuO8BY7w4MmcUP7Z%2FKTCAPd1cJw6ir42wiRmH7HmZ1SHIqesnVs92ZaRc5UUwAkUXPMiO4qDc25iDCE665bh5wEprModaZfFc0IIas7YQM%2Bgyt%2FufBDR1hlRcAAPYJePCSysclx43CyzjVEpTkNX1wxD&X-Amz-Signature=3861872c49f2935b26c22eedd3e80a810e8972766779951c9b6607afded40afe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672W24EL7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSdVvS9IT03HUTfY42QGxvolDLb%2F5%2FQ78qnfQIimvMxAiAISd6yBDJlioMFyQcJXe%2F6wSkLyCbCfDVeYKJQxb%2BfVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMhFr%2B2yMkYSOMaFokKtwDEEZJu8Dmbj17IjknXW3fgrmWg5YRUzfg%2FlHN3M%2BYnk1VUuwC4%2Fm50rXQDDue%2F6zvROM6USYK3E98c58R0fMvuGLE4kX4Y8IPtGbvEh4wtvNqpC8IW3ec%2FdOUmOgEANCgIXQMvJwLiu%2BfTz%2BnM%2FPMGDVzvRH9VtZnUmQ8tzW%2BXOkWzowCC23DTI0GR1sgVUE919WqTJqCGP%2FDjU9jJqubBzsS8fi1%2BeknXnUbfYmLlmjxONKgGhZgMtKA82rA%2FxwZMcuK8CpHPI%2BWLCKs43BNsB860LN%2FJRvwPKSLt4J8C0h%2Bjgni9xLCCMJRoLqWrN%2BMWEBLmKBnUoJfsXAD%2BOafqbo4XNT5AOBRZyJ0fWF0DJ5CqaSH3U1LKuaZX%2BY1xHOSUab154nz5l8cDoTXjXbpttrMTT8G5CX59WrWFApXWXgB5MfkYSlc4whGsZ81suwk4oO4THzaJM4SQYpotzs%2FY8jByQTIvp0%2FMykt0msb8Un3snlEAMFNGIGSL60RpG04HspkFN2yU479TCeYez7or1ujmKcO0hex6KpLgbBiKMCV5upMj8pN6Hrk8ynvaskaaSR5Ah3T7U4ihIhX5e9ukdWpjxdy3uyBXvWNsMdT9xzRmtHozDShW4R32Pcw6IT6vwY6pgG9c45rl%2FSSrjWHDZOk%2FWdCw5oDvy1qLsOxEXP%2Bg0d14Hq0Rz9ru%2F2VLsD13aHlNhJepaHGpuO8BY7w4MmcUP7Z%2FKTCAPd1cJw6ir42wiRmH7HmZ1SHIqesnVs92ZaRc5UUwAkUXPMiO4qDc25iDCE665bh5wEprModaZfFc0IIas7YQM%2Bgyt%2FufBDR1hlRcAAPYJePCSysclx43CyzjVEpTkNX1wxD&X-Amz-Signature=8d58ad76227b12166332e9a5fbcb3fc48729221afebde29df5b1654dc4ebaa84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KT2JYGH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnXnY7%2F0PzI%2FkJFwyERKm%2BZceaFy6KJdALj5V18zX9AiBlbOOY9T23KWjURQG2SWMEcI5bGOVLT6bCjKtGtRsk4Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMYHtmUSiJ0kVMmWk3KtwD0rTiLJYb06eTC9cOgnGlHGRgqj9Jp2yGf3B55btN%2Bx3pTIkI3uHY%2FD%2FVdT8Io9Af1XdlznqMTrMWVLx5huhTXX0MoLdgXnAPGZ5dk0E6qhPv%2BherH3mHrwivkcR1O%2FeiCh9QZLhu1CIUQxD9VbM16CGo8CPWatcFlKVQNsyfEztYs7mV5mqcJ4C2Ol24L5u%2Bfw2emH99zSBA7fvhpNdoR%2BZDy0VcJug1DW9DVxapaLWzta%2BlwKxfEpvflx5EK9yHRWXykgH3fB%2FUNzIYb0x%2BpkIMy4f2BiB8s8YRE3BUUkaR9NNCuMRFVXQR7LjD9REmO5L6RWdj5AFThC04A0TUzfyGpVeMvB58RrwQx8XxmSXglis%2BwVYi0KHjEA%2BeW3YepwM5By7h887Lz5WmkOPi4Y055l06r%2BO1kk94QLlZwUOxk0sIm7%2B19F1Vujr5OoAWNJy%2FWgzR6RXO18IbNkAQcQ2oOPvx8%2BBzHTE0Ke8Nue47upF6lug3iHd7tAJCmhw05uNgCBTgwCmITNuD%2BxOuy0pkPT8LtrvKZBsjvRaHIJUBVh4%2FAw8K3Fb%2B4JTC59UB0C4e0U6lc8rNEOPNC8rs4knmCJCcmNu%2FnTtYNQURzWQr%2B1gJEj4gHygJZEkw1YT6vwY6pgHWq26LdFNEzzGF49t4mh7zpi9DMznlChtcUJcXljSCefBfvKCyx0Vrqz4Sh62%2BhaR2rh%2F28q7ipzSKA%2F02wvTUszhH9DI7siRK3N%2B6dLO0u77cdmDxgflX2huhXUeDcuOVjfLc8K1COYHue3B2f6fa72k27TXgr%2BMBLAzSWQTA7bHvmFW8JsQHn02qCSJLGo6uA9rP6jaWKybLTKN60RNTYcYoA2BR&X-Amz-Signature=c77207eeebd2c19755440e65865e83a4f94ac7832458aed1e1d73e7a2c745a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGRSF7K%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQWRmdyvSM%2B4DOTxlAdUcGq2dUHJlmeF63FXOR37tseQIgLNHKHQn9%2BLizTmdUQG5l46PyZ42eAxtMs2LNeAOup0cq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDC25u0pebHw1jPeXRSrcA2nBqSCkLm5SZgA4qxo6bYnwDJViBniGopZJRi2%2Bh5Ia5vo%2FK5djZPRwwsZejFBVfa5cSn7zXFIHEp5vQcWvXf1f1QUihQEmHqTuUXMAsqFlj9E94HXHDBRnCjJ7ja1ZSNgIaJknOUCkgE1chnDYBQmqc1ofPqlA6VGSmVs61iftKjnA6ON%2FzlUTrUqSBR32y9onW8lYy3wELjKBZR7LNci7MYpFfqHrrj52F184GxW5rxB0NpeOaBKr9qcx%2Fw1gi2O0vniCIxgfPl%2F4RUDXfF5h0FfrAZpyUpla1YE3nm9xISHicpHsECAtjL4cJw61jPSoSTqccvp1VebckIR0DrswtOhJQPPHF5%2FXvyAztDgj0pakK%2BYwR7HLqgUmBxLvdwUvzSB9M7DvGenLQ5tvm%2B%2FdwtYM1xhG6KkrStarHFH3tNTxaKsN7ZMgHBBt7PbCelIAaNR9o8NadyuWSucgTsz7tX80GG1HbfAQvEKZOrK3aiNBD23FFTZ9LiYl5oM12m8O2W%2FT8RTD3xtBL4ywJqRGtowLDhsaLQgJqnGWQLuRwm%2B%2FVzlIDB320wCM%2FQbiKHZ7flqxF5ONktveOmkl%2B2wn2C99b0h%2FKZ5YyhTBsz6zsYf6E0TjSTZMCBMdMMuE%2Br8GOqUB4GN3xnEepBbPWQJieDe6iSfAmHCvy6IvUjRcEggkxfS4Gsq2n%2FMBWy%2F2Xw42vBgJ3FwnVWuxIyBRXCY%2F7MwBeQNzpjNXr2I%2F%2BcASv8Ur67XtsyHbG2W6ms%2BjxTZsc5QAab%2FppEmhAdXEM5lUq%2Fb%2Fs1Uh6FW5jPO0dwjivyIxZ03BDFNeBkQpyWhQbsutTm7m65Xm11vlVmCaFG65mybYdyN%2Bff1x&X-Amz-Signature=6a2192b90a191d6225577006c62a0cd8cb5662b0e2d57884633956445b18dd73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672W24EL7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSdVvS9IT03HUTfY42QGxvolDLb%2F5%2FQ78qnfQIimvMxAiAISd6yBDJlioMFyQcJXe%2F6wSkLyCbCfDVeYKJQxb%2BfVSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMhFr%2B2yMkYSOMaFokKtwDEEZJu8Dmbj17IjknXW3fgrmWg5YRUzfg%2FlHN3M%2BYnk1VUuwC4%2Fm50rXQDDue%2F6zvROM6USYK3E98c58R0fMvuGLE4kX4Y8IPtGbvEh4wtvNqpC8IW3ec%2FdOUmOgEANCgIXQMvJwLiu%2BfTz%2BnM%2FPMGDVzvRH9VtZnUmQ8tzW%2BXOkWzowCC23DTI0GR1sgVUE919WqTJqCGP%2FDjU9jJqubBzsS8fi1%2BeknXnUbfYmLlmjxONKgGhZgMtKA82rA%2FxwZMcuK8CpHPI%2BWLCKs43BNsB860LN%2FJRvwPKSLt4J8C0h%2Bjgni9xLCCMJRoLqWrN%2BMWEBLmKBnUoJfsXAD%2BOafqbo4XNT5AOBRZyJ0fWF0DJ5CqaSH3U1LKuaZX%2BY1xHOSUab154nz5l8cDoTXjXbpttrMTT8G5CX59WrWFApXWXgB5MfkYSlc4whGsZ81suwk4oO4THzaJM4SQYpotzs%2FY8jByQTIvp0%2FMykt0msb8Un3snlEAMFNGIGSL60RpG04HspkFN2yU479TCeYez7or1ujmKcO0hex6KpLgbBiKMCV5upMj8pN6Hrk8ynvaskaaSR5Ah3T7U4ihIhX5e9ukdWpjxdy3uyBXvWNsMdT9xzRmtHozDShW4R32Pcw6IT6vwY6pgG9c45rl%2FSSrjWHDZOk%2FWdCw5oDvy1qLsOxEXP%2Bg0d14Hq0Rz9ru%2F2VLsD13aHlNhJepaHGpuO8BY7w4MmcUP7Z%2FKTCAPd1cJw6ir42wiRmH7HmZ1SHIqesnVs92ZaRc5UUwAkUXPMiO4qDc25iDCE665bh5wEprModaZfFc0IIas7YQM%2Bgyt%2FufBDR1hlRcAAPYJePCSysclx43CyzjVEpTkNX1wxD&X-Amz-Signature=b57bcf6bae942fb60bd72c1da5a4a9b507be7559d60ed431ae6d9d78df552404&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
