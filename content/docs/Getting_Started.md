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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QLXPHGV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFxAdPFLENIeAYaihFe6Q9qwIGpH72eOH6J1LGG19%2BLrAiEArCFrTTBBbzgkxpR9J8Kc2oV8cbAg0eGtgOW8bti5uiEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDESlZ6c%2B%2FHeT4LwwVircA9UEdkGqAadbtlJRUAylfKNoigiBPHM0%2F1%2FKz%2FjSCQeH0bVER%2BLPOkJlF%2BRHncZL5JyX146n2AuOnEyW5Ck05SMzS3YKVnwzZ8ZeVDELYXxKaOwQJhQZptPnZCsthBrk9zchzqeJpsViLrt7gHA64cG8f2OEcmPNDcoqtPS42gcq5NLrP57XqBJv6j3ivSTzAwSI9UR7GH0WRSNX6ywCTKrnmiKVYfVAAnmK3%2FLQVHsCK27z4XPIiJe98RXt28GpFhOfE3bkVMv58ukfyHVNDCFD7WgqOxiXBawIrRZzO6LHafdchqvHQdwTVmYg7O%2F9q5rL3BZBPR7fHE3yvL6yGakjzGlew%2BlVj2IFfjGq18BLLMn3Fyf0x66L9vjYAZrarVi2HepLnNUXVzhpQT05ipcaWkRvruutig1JnCz4M8a3q3aZFPhbow85ZE%2BFKO8DpalIwvZl2H%2Bxiv2N8Su0ZjOHk3OUnvqcQ%2BbEtV07N%2B5lx6FdquclpzeR%2BWlXQq25D7Ck0NlijMbm7PhowNsb4bzAtiNEHVqiRQvTumM%2BMO70koDAwVOvbc6t09MokZ8Zm0Tl2mNvc4CAwVh7AZF%2BRMzI0Dg1%2FNY0fgpmMmoDzZ%2Bq%2BnkYh8vBFaxXgtb7MNDMpMMGOqUB0hx1JbEylLcCDLBR17KH4q4WmyLD%2F3n2Gc8Lg3DPaqPVSNK7euynb6iJ3scj4OBuneWc%2B6uLljFvIj6TGaACP7QmKYZFadBBRXlk%2BD0Jwpk0KWKdfYf9tt6ajiXBEBwdtUNq28bkPRzlu1x0hsEi5s4%2FWfYupwNMs4oupXuF7QqMbdqDkMP%2BRInaH3FHGKATj3tKTppzofFNmJTwFloDFMYq2eJV&X-Amz-Signature=314eb59e69d554da5e258c2772053fdce1cd437bfe120ec2ab6334471ff7e237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QLXPHGV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFxAdPFLENIeAYaihFe6Q9qwIGpH72eOH6J1LGG19%2BLrAiEArCFrTTBBbzgkxpR9J8Kc2oV8cbAg0eGtgOW8bti5uiEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDESlZ6c%2B%2FHeT4LwwVircA9UEdkGqAadbtlJRUAylfKNoigiBPHM0%2F1%2FKz%2FjSCQeH0bVER%2BLPOkJlF%2BRHncZL5JyX146n2AuOnEyW5Ck05SMzS3YKVnwzZ8ZeVDELYXxKaOwQJhQZptPnZCsthBrk9zchzqeJpsViLrt7gHA64cG8f2OEcmPNDcoqtPS42gcq5NLrP57XqBJv6j3ivSTzAwSI9UR7GH0WRSNX6ywCTKrnmiKVYfVAAnmK3%2FLQVHsCK27z4XPIiJe98RXt28GpFhOfE3bkVMv58ukfyHVNDCFD7WgqOxiXBawIrRZzO6LHafdchqvHQdwTVmYg7O%2F9q5rL3BZBPR7fHE3yvL6yGakjzGlew%2BlVj2IFfjGq18BLLMn3Fyf0x66L9vjYAZrarVi2HepLnNUXVzhpQT05ipcaWkRvruutig1JnCz4M8a3q3aZFPhbow85ZE%2BFKO8DpalIwvZl2H%2Bxiv2N8Su0ZjOHk3OUnvqcQ%2BbEtV07N%2B5lx6FdquclpzeR%2BWlXQq25D7Ck0NlijMbm7PhowNsb4bzAtiNEHVqiRQvTumM%2BMO70koDAwVOvbc6t09MokZ8Zm0Tl2mNvc4CAwVh7AZF%2BRMzI0Dg1%2FNY0fgpmMmoDzZ%2Bq%2BnkYh8vBFaxXgtb7MNDMpMMGOqUB0hx1JbEylLcCDLBR17KH4q4WmyLD%2F3n2Gc8Lg3DPaqPVSNK7euynb6iJ3scj4OBuneWc%2B6uLljFvIj6TGaACP7QmKYZFadBBRXlk%2BD0Jwpk0KWKdfYf9tt6ajiXBEBwdtUNq28bkPRzlu1x0hsEi5s4%2FWfYupwNMs4oupXuF7QqMbdqDkMP%2BRInaH3FHGKATj3tKTppzofFNmJTwFloDFMYq2eJV&X-Amz-Signature=34b6d33dc011d5b027fd66c7eda21d51f7a3398dc3a9e67eed58fcda07faf860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QLXPHGV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFxAdPFLENIeAYaihFe6Q9qwIGpH72eOH6J1LGG19%2BLrAiEArCFrTTBBbzgkxpR9J8Kc2oV8cbAg0eGtgOW8bti5uiEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDESlZ6c%2B%2FHeT4LwwVircA9UEdkGqAadbtlJRUAylfKNoigiBPHM0%2F1%2FKz%2FjSCQeH0bVER%2BLPOkJlF%2BRHncZL5JyX146n2AuOnEyW5Ck05SMzS3YKVnwzZ8ZeVDELYXxKaOwQJhQZptPnZCsthBrk9zchzqeJpsViLrt7gHA64cG8f2OEcmPNDcoqtPS42gcq5NLrP57XqBJv6j3ivSTzAwSI9UR7GH0WRSNX6ywCTKrnmiKVYfVAAnmK3%2FLQVHsCK27z4XPIiJe98RXt28GpFhOfE3bkVMv58ukfyHVNDCFD7WgqOxiXBawIrRZzO6LHafdchqvHQdwTVmYg7O%2F9q5rL3BZBPR7fHE3yvL6yGakjzGlew%2BlVj2IFfjGq18BLLMn3Fyf0x66L9vjYAZrarVi2HepLnNUXVzhpQT05ipcaWkRvruutig1JnCz4M8a3q3aZFPhbow85ZE%2BFKO8DpalIwvZl2H%2Bxiv2N8Su0ZjOHk3OUnvqcQ%2BbEtV07N%2B5lx6FdquclpzeR%2BWlXQq25D7Ck0NlijMbm7PhowNsb4bzAtiNEHVqiRQvTumM%2BMO70koDAwVOvbc6t09MokZ8Zm0Tl2mNvc4CAwVh7AZF%2BRMzI0Dg1%2FNY0fgpmMmoDzZ%2Bq%2BnkYh8vBFaxXgtb7MNDMpMMGOqUB0hx1JbEylLcCDLBR17KH4q4WmyLD%2F3n2Gc8Lg3DPaqPVSNK7euynb6iJ3scj4OBuneWc%2B6uLljFvIj6TGaACP7QmKYZFadBBRXlk%2BD0Jwpk0KWKdfYf9tt6ajiXBEBwdtUNq28bkPRzlu1x0hsEi5s4%2FWfYupwNMs4oupXuF7QqMbdqDkMP%2BRInaH3FHGKATj3tKTppzofFNmJTwFloDFMYq2eJV&X-Amz-Signature=5c9f0d54768a5b8f3efefdc30ce46d8aab60777e3695027713f0b79e18a3fbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM6KKQDQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIH8RsKGPRqawWc8GWLMJao%2F95VjeAZmFbVdGixzE%2FL%2FaAiBnhH00yXYRFT355um8NTQ3ONjZR8bUiV%2B8vx9WSjLM3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMYpnPmCMl%2Bsy8ITRBKtwDqeLyC%2F%2FKFiKvWRhMY9ayzqtwpwYIwJZWsjycwm2O%2FtC8gNkPkNops9pRGBIsXCL%2Fpp5DSzyRYY5QrQCap80MS2AM%2FO%2Fm3I1BL%2BPDc3Gzry1numRePZ9g7s5fyTUdCn269o%2FuvZNHt3jkFJWDymCedaopzUVlMGE63RcLMYGO21cwOleMgf8v6iBmOEWTmkSVOUPiy4SSs9fXbNdzkeQvpTMl5WjrgCeAdBRdcPHp4AO07en4GT1Fq3NCMflgIgkIiQkGegX36nPxQjoN8B5fIMt3v5NOhOk%2FgLfM3aLSOyBF4lknhuEEnRALfA2LUS10ESTStgo3qvYqS%2FiuZjpZXdJDmVft%2FG9rgjJ5hImVVzHG%2BarcAmPWnXafK40NUXAl3s9DDhmrQvBtP01e9BQ%2FY8jDrlyDgn3x%2BXIf3nr0%2F1LlhO0%2FIAj%2BSRRAKIrj8l2cZr1YnhU8ZC05H32xqjECR7reN4Judcj2icMGdN3HgSPn71qtn8aOuJdX1i4wuPLFVIktkeVHIdhbhLFe4XlADHJLfLhR9FzGE4fqEPaYIMlQwuUm%2B%2B7x%2FMmYU6gsPdLbEnAt5n0UBnIPBEjqHreAoXxmlzw6XtyaLoSVlswQVgEQhXZviSoprpKkhVow89SkwwY6pgE87YQKtuzespO%2BLGgsgMQqmqmz6Lnn3GFx%2BW3rKbVmAzbnMm5JW%2Bkpf2Dt54cKd8xp3AyW4D1AdLUBxxoAgmORMl8Na7WhyFcSFYUziR2Rw1vwVXbDrHMJ2pppdq0KoWmaMmRMnVivbaZj%2FQDZbB0Anx2C%2BCv%2FMBxj2dJgJmy28n76kt63JFGpHXdSqaXNwUdKASpI738YbaxZ0UbFSXAs1bJ8CG6V&X-Amz-Signature=1db67d2822ac1c639d5b430ff79637afa9944539bac878446f2e91a8b2713bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMOLDQF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHirOQ73jYlII%2BpPbqzYavHQym9nmC78teOau%2BTQ6AoGAiEAi5onIECM0rT7bGTYvQkXML6zQjkcoK7PecHf%2BuXA%2FQ8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDg8ctVBV%2Fi8IZzP9CrcA%2Fl3fc5gEPFG2QG3k%2Bg4kidKcbwlUeLt%2BU2pf%2Fsx1DmqLTIuexYsL8rwYkZEgBYF5l6QCnHcr5%2Fk30kPTploLHTKC44ttiqsNnntqjG4Q%2BFK9ucvKhHEp%2Fmc5bx1PHkGiwh0VzEyCe0nR93mcC8EawyTykrEvSzGwGBAGydhFRMc2lB86OsGSYqXZVjWCtuq3cKj1LVvt696lptfmtJYEEv%2F%2BClWFjh87j4fyO6bWMdgU5bWGqVKZNW09KlX1xGsiIsefDOPqC%2BYhBmIyJAy5I2lIr%2Bg4JGUrqQBncJLCManAmDnAoriXF%2FLyDHGQjtCIZkpt1wm2k%2B88rIAmOuaXkX8Xp%2BvPQ3cE9%2Bt%2FU51T3Ac5cF8Sv5yIeS3FLLA42A7Ww1gBFf2cWVhjrkjxPrCJji585DFbt05BvQN%2FapFiRNbNPWU2CIymzIQobGdzayr81%2FE9ukiMAEhpvfi7niTaMZxjtP5Pu56rOpW0erjuOjoZ7RL7s0sMi0xb6q9h9EEDGBuK%2BQjup2t4EaTa5e4JKTBqV0R%2BOIrsh6xP1DIP5DRaCbQcod6TgFK7VtbbSvo6a8W1E4HNGllEg7A%2Fj5ndows4NghDNvqYVb3Sdn3laJArTHCNObhoKzrYFKwMNHVpMMGOqUBMNUgwhtqUWxERs%2FvYnQyIGOw46XKyBGrxO%2B%2FQbjOu%2Fdf16jHrkuXaVHptqxYn3Me2XMm7EWqycFkgivwBIGR9jwmyrEEoQ1BXmB2roYXtsQ6Qzd0AdwBWWG7JKUquM4lCq31Xb0rKuZmAvXIAgb737QT8xxbZGKiJ1O%2Bj8R%2BGTlM64lFBZmcWWl8oBBUDNCDVXUVa%2BbFb3FwYPVkznxJu7%2FDKgte&X-Amz-Signature=82695715cf12786db1f30e6877484e7d36e2604f8b63fb1b8d025efd6cc502fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QLXPHGV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFxAdPFLENIeAYaihFe6Q9qwIGpH72eOH6J1LGG19%2BLrAiEArCFrTTBBbzgkxpR9J8Kc2oV8cbAg0eGtgOW8bti5uiEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDESlZ6c%2B%2FHeT4LwwVircA9UEdkGqAadbtlJRUAylfKNoigiBPHM0%2F1%2FKz%2FjSCQeH0bVER%2BLPOkJlF%2BRHncZL5JyX146n2AuOnEyW5Ck05SMzS3YKVnwzZ8ZeVDELYXxKaOwQJhQZptPnZCsthBrk9zchzqeJpsViLrt7gHA64cG8f2OEcmPNDcoqtPS42gcq5NLrP57XqBJv6j3ivSTzAwSI9UR7GH0WRSNX6ywCTKrnmiKVYfVAAnmK3%2FLQVHsCK27z4XPIiJe98RXt28GpFhOfE3bkVMv58ukfyHVNDCFD7WgqOxiXBawIrRZzO6LHafdchqvHQdwTVmYg7O%2F9q5rL3BZBPR7fHE3yvL6yGakjzGlew%2BlVj2IFfjGq18BLLMn3Fyf0x66L9vjYAZrarVi2HepLnNUXVzhpQT05ipcaWkRvruutig1JnCz4M8a3q3aZFPhbow85ZE%2BFKO8DpalIwvZl2H%2Bxiv2N8Su0ZjOHk3OUnvqcQ%2BbEtV07N%2B5lx6FdquclpzeR%2BWlXQq25D7Ck0NlijMbm7PhowNsb4bzAtiNEHVqiRQvTumM%2BMO70koDAwVOvbc6t09MokZ8Zm0Tl2mNvc4CAwVh7AZF%2BRMzI0Dg1%2FNY0fgpmMmoDzZ%2Bq%2BnkYh8vBFaxXgtb7MNDMpMMGOqUB0hx1JbEylLcCDLBR17KH4q4WmyLD%2F3n2Gc8Lg3DPaqPVSNK7euynb6iJ3scj4OBuneWc%2B6uLljFvIj6TGaACP7QmKYZFadBBRXlk%2BD0Jwpk0KWKdfYf9tt6ajiXBEBwdtUNq28bkPRzlu1x0hsEi5s4%2FWfYupwNMs4oupXuF7QqMbdqDkMP%2BRInaH3FHGKATj3tKTppzofFNmJTwFloDFMYq2eJV&X-Amz-Signature=7d30bc83a0d43c401c414791b90c351a0c17df57e6d08a51b3af49f697ff70b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
