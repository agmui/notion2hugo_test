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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OILLRUZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEQ6at6D5xbmTO%2BC%2BDz8IN69J1jPTAtb4I0UHdL6sWYfAiB0%2FYAgmInSPi8959G95tPTvLUmbZ90rzMR73bbGVfAgCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMDQk2MuALLP3kngR3KtwD%2FOMIzTem5zk3GH0XXkZZ8XvxzOP32Bx8Zow50YLxAkNjAHJcfpD4dWG01bh1t3w6Xwc5yx7uKypPF%2FKZsoOK9Ywi%2FC%2Ba4G1BSHEG8q%2FAH7PukmFahJc19e129zgA5xXrmokmkiBhWG1d0ebhYkYNoUmUrDiQFKUzcB5SRGHZCIYdL7pyDRUVuDoWXpByUXGJR3WcVc%2B%2FcQsdK7uJpwOqxbLQsuH0E4EOLroCDxSpYSsgSam5tobHiqCNC63xpSbR8nrqOzUd%2Fp7hRofS05LOdT1hbR8%2B1ofwkhRms82TaqNJa90Umk354DUsGyhpWbt3aY2SXskTBCuthcXOmReGUmF1TrD37nGh8R7IWyloP8rfqCNXGOX1H3ebZNO81nqatqgGQK3n4HwuWuPsSssZ2kFJ4MDG5l2dO6mgtzjdHvxEsCA61tquprdHmSqa%2Fi7V993waiSm5uINtGjlzkOtI%2F%2BM8ngAc9PU%2Fxn6Q7wEHCsxpS1GXsBzBcun4QOfL3yIsYVb7%2Bb2yd0NzzAYB%2B7pzR0rY82BLMj7Ekhb42C5W8mj358toI3nU6skjo4glyoNBXPnhGXzKPShOzqARFKLm%2FemyIK8ozzkIMSym9m0cMH5GKm9TUklH9xoV1kw%2BMG1wgY6pgFZedDT0qxBPx%2Bfo174zdxBqbb14Rf8%2BoAwGee1dmpnrYAKlRuLt54aoqg0fgewW2p%2FAHPW%2FigYW0OrMsHwpMRlsyeJWhQ2p5o%2Bi5OZLjt5ZlCIZ2yIv2VZAA5t8zdATj6%2F4emf8WVOAxR1B6afdPn5sPV%2BFldc%2BJ3LsG69BBsdc22wzlaQVlCNNVO%2BWbY2ebcaW9i8tCW8d1iGrVteFT51vUxWMn%2Fx&X-Amz-Signature=a047af95afcd331434d81df0de646dcf1da8145c7f42ad463c4aee1bf11dcf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OILLRUZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEQ6at6D5xbmTO%2BC%2BDz8IN69J1jPTAtb4I0UHdL6sWYfAiB0%2FYAgmInSPi8959G95tPTvLUmbZ90rzMR73bbGVfAgCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMDQk2MuALLP3kngR3KtwD%2FOMIzTem5zk3GH0XXkZZ8XvxzOP32Bx8Zow50YLxAkNjAHJcfpD4dWG01bh1t3w6Xwc5yx7uKypPF%2FKZsoOK9Ywi%2FC%2Ba4G1BSHEG8q%2FAH7PukmFahJc19e129zgA5xXrmokmkiBhWG1d0ebhYkYNoUmUrDiQFKUzcB5SRGHZCIYdL7pyDRUVuDoWXpByUXGJR3WcVc%2B%2FcQsdK7uJpwOqxbLQsuH0E4EOLroCDxSpYSsgSam5tobHiqCNC63xpSbR8nrqOzUd%2Fp7hRofS05LOdT1hbR8%2B1ofwkhRms82TaqNJa90Umk354DUsGyhpWbt3aY2SXskTBCuthcXOmReGUmF1TrD37nGh8R7IWyloP8rfqCNXGOX1H3ebZNO81nqatqgGQK3n4HwuWuPsSssZ2kFJ4MDG5l2dO6mgtzjdHvxEsCA61tquprdHmSqa%2Fi7V993waiSm5uINtGjlzkOtI%2F%2BM8ngAc9PU%2Fxn6Q7wEHCsxpS1GXsBzBcun4QOfL3yIsYVb7%2Bb2yd0NzzAYB%2B7pzR0rY82BLMj7Ekhb42C5W8mj358toI3nU6skjo4glyoNBXPnhGXzKPShOzqARFKLm%2FemyIK8ozzkIMSym9m0cMH5GKm9TUklH9xoV1kw%2BMG1wgY6pgFZedDT0qxBPx%2Bfo174zdxBqbb14Rf8%2BoAwGee1dmpnrYAKlRuLt54aoqg0fgewW2p%2FAHPW%2FigYW0OrMsHwpMRlsyeJWhQ2p5o%2Bi5OZLjt5ZlCIZ2yIv2VZAA5t8zdATj6%2F4emf8WVOAxR1B6afdPn5sPV%2BFldc%2BJ3LsG69BBsdc22wzlaQVlCNNVO%2BWbY2ebcaW9i8tCW8d1iGrVteFT51vUxWMn%2Fx&X-Amz-Signature=1eec6706d98ed6dbec1977b873feba0b6b7a3d51e0058dcee7d14b80291966b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OILLRUZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEQ6at6D5xbmTO%2BC%2BDz8IN69J1jPTAtb4I0UHdL6sWYfAiB0%2FYAgmInSPi8959G95tPTvLUmbZ90rzMR73bbGVfAgCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMDQk2MuALLP3kngR3KtwD%2FOMIzTem5zk3GH0XXkZZ8XvxzOP32Bx8Zow50YLxAkNjAHJcfpD4dWG01bh1t3w6Xwc5yx7uKypPF%2FKZsoOK9Ywi%2FC%2Ba4G1BSHEG8q%2FAH7PukmFahJc19e129zgA5xXrmokmkiBhWG1d0ebhYkYNoUmUrDiQFKUzcB5SRGHZCIYdL7pyDRUVuDoWXpByUXGJR3WcVc%2B%2FcQsdK7uJpwOqxbLQsuH0E4EOLroCDxSpYSsgSam5tobHiqCNC63xpSbR8nrqOzUd%2Fp7hRofS05LOdT1hbR8%2B1ofwkhRms82TaqNJa90Umk354DUsGyhpWbt3aY2SXskTBCuthcXOmReGUmF1TrD37nGh8R7IWyloP8rfqCNXGOX1H3ebZNO81nqatqgGQK3n4HwuWuPsSssZ2kFJ4MDG5l2dO6mgtzjdHvxEsCA61tquprdHmSqa%2Fi7V993waiSm5uINtGjlzkOtI%2F%2BM8ngAc9PU%2Fxn6Q7wEHCsxpS1GXsBzBcun4QOfL3yIsYVb7%2Bb2yd0NzzAYB%2B7pzR0rY82BLMj7Ekhb42C5W8mj358toI3nU6skjo4glyoNBXPnhGXzKPShOzqARFKLm%2FemyIK8ozzkIMSym9m0cMH5GKm9TUklH9xoV1kw%2BMG1wgY6pgFZedDT0qxBPx%2Bfo174zdxBqbb14Rf8%2BoAwGee1dmpnrYAKlRuLt54aoqg0fgewW2p%2FAHPW%2FigYW0OrMsHwpMRlsyeJWhQ2p5o%2Bi5OZLjt5ZlCIZ2yIv2VZAA5t8zdATj6%2F4emf8WVOAxR1B6afdPn5sPV%2BFldc%2BJ3LsG69BBsdc22wzlaQVlCNNVO%2BWbY2ebcaW9i8tCW8d1iGrVteFT51vUxWMn%2Fx&X-Amz-Signature=d0e3a1b3a88415a76586b6bda79774d36ce78d7ab9f097f1a9dfd9e3138680a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623YU5XCU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG2MLg9QMQYWnkT%2BzbBSMCkJD%2FULvF8RMZuRCzELqfVeAiEA5nBw07N%2FbtIfv4z2zu2q6BDSsi2BCnnuflzqV%2FOx1d0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFPjBRcoK%2FbituqspyrcA2otl5e22kXlAlKXfYi7gRNiCYAe%2B57LyTF0qJQwW1DxMMt10T%2FfXgvTj6bPF3Vlt0jCdWMETUyr%2BGxOW3HKbiLr6tWJzoP7MdC%2B9EPQAdIIGW9DBjttxsK%2Bx4ZvVsiGPnzDWggoehnRlq3kGEpRauBVlzw%2BUEcK0EnU2WcoiNan%2BMY5W7nu0IrjsaidYu35hGvkHVJuRFaN52Br0%2BV85YKHXbY7OHAQTXoeY5fjA4H7LXDkSxx0DHvgSdlGAAcRwNh5vbU%2FDFaikewwjTu01NZQ6%2F9T2IXch7q7bf6lE4ICe0WHONvinWH0yW67WBAPumagH4zHdf4YyT1p%2FgBDrhYYGT0V8AUbAsimNWYsbwMrfWOSkj6hGKMYPo3Ez%2FP3mXXujkwYXrE6EIsTuKFb3ZU9X1Ksy9mz663QMQthZlI%2Bj7RCmNQfeO%2BA5WcQAOh%2FVpRNqfsZz32GtLmvZid72i4TJkaNf%2FlXJgK6AfmJpAfZ7muo2Ueg6joFpcmKl6X9ZxrToWvHXLgG5dUPqp9ipNyUDicu7XrPk4KAxrsTK7g7a4xv1r%2FInJkOdxVCS6vgWxoHeFFyuLb5ZuQX3CWBDCiG4fBOey%2F%2FKWXQpO6hLKp%2B2MjWZ1HAU48jub%2BzMPjBtcIGOqUBXeDQhIuKZWVZMPZAO2nKBxQuvSdmoNMM7PfJrMCPyyKpafKJzzavwshRm8a0cpMoC6F50ZvnaJxabOrfYp7PV1g27Kg2AaQCSl9M901TTSYfD3hLyfMG7tCJjD99LxXWay4cjWm2TkruQDg5xcP%2FiVNhgOumFZMERiRJK%2B7mmHPTHIKixOs78OFJC5udo4txNMWwXrCt3XdPD%2F3gk48L%2BTfSrq33&X-Amz-Signature=7d5ee7885dbb5d82be921bea07005afa6449ffa84deeddd92c746a3ea69f789d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMY2YXX4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBc%2Feev%2FMyB0n%2Blx1lbFY66H73dU6zjIfHDNPbjCdIu8AiEAmPH9oKZIEUBE75JtHkGTaEfUF0Ylg7LdDmqIdDNLrhwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFEooPRPVufjwloviSrcA73pcSeziDDLZprg0amJNH7162mwaQM%2BtN7rjDIjget7DmXKvmJWxOSR0fGSTm6hkmmIS5xdrjOzACv76Apm%2B2W25BWOg8CIQaguTNDCpdyiFgJ0CvoTVU6ca5RWpySlUkS5l5H7WObB6Ou%2FKX8kh7QOj4PKPbCWzJquKNujdi%2BwxBNXL5KyhYbfZl3NnBKx4H%2FIf8PFTTtonT28bjWpNfa3f2WMcfIeoRqUWN3UrlkM75sAqt0N3e6I7Sjq%2FNfLSjYfBolJne%2FclixqIvyAfB1e5arXnNeGjJvmZwk9s1RXGd1ut2oVrg%2Fifiuaog1niq6SGtdL6Iz8pIUDGSPIBmzEyiX5ViPcrSK%2FyNKZ6SSdZ7tXLBOSpRtRPkPVGg4m93z7poJ21Ks%2FgKeErmWq16I1Iv3oaThijJbODPEiz7UHrgOVSyTqenYHJ%2FufAacGKYklTB6gnxftJwSMm1Cww4mG1NzEyTQP0S6b65%2Bve6KK0pG%2FUwg70fPtcnt3amP2QAd37LaRjNCg%2FIKhurRqSxZ5JwKPt9dFl7nR%2BGLocw0zNlWVhqNp0k0LhCFfSpR%2BiWjXkujJv89zGp%2FJC0C0hCTUBpOs%2B%2FQ7oBoKfj7GavgN5s3m%2FQxoi0%2BWHH1yMKnCtcIGOqUB5ZNQzr%2FYJIW7VVECbL6qt%2Ftfl3KBL5o%2BugWq0CHlSOJsrsESdrXydghvaqPXrWlLZ9NO6PanK%2BrQTyz%2FTXn4xgKm5qCDf58c%2BFTYgyh0RtcmkBX7bGfAv19hZ4sWHcH5prq2hM43lvi9%2F2LLWwixq2T2KAL325fwA3aR5sZfeDZAMsBgqi5TPpihGOVigQX5TcCFOYorW8EIoV5UY0pRjWDS2UXO&X-Amz-Signature=25dc2d0f2bc16b7054afcbbdaa1c8b9e19130608a80ec185cf391a8bc5363791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OILLRUZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEQ6at6D5xbmTO%2BC%2BDz8IN69J1jPTAtb4I0UHdL6sWYfAiB0%2FYAgmInSPi8959G95tPTvLUmbZ90rzMR73bbGVfAgCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMDQk2MuALLP3kngR3KtwD%2FOMIzTem5zk3GH0XXkZZ8XvxzOP32Bx8Zow50YLxAkNjAHJcfpD4dWG01bh1t3w6Xwc5yx7uKypPF%2FKZsoOK9Ywi%2FC%2Ba4G1BSHEG8q%2FAH7PukmFahJc19e129zgA5xXrmokmkiBhWG1d0ebhYkYNoUmUrDiQFKUzcB5SRGHZCIYdL7pyDRUVuDoWXpByUXGJR3WcVc%2B%2FcQsdK7uJpwOqxbLQsuH0E4EOLroCDxSpYSsgSam5tobHiqCNC63xpSbR8nrqOzUd%2Fp7hRofS05LOdT1hbR8%2B1ofwkhRms82TaqNJa90Umk354DUsGyhpWbt3aY2SXskTBCuthcXOmReGUmF1TrD37nGh8R7IWyloP8rfqCNXGOX1H3ebZNO81nqatqgGQK3n4HwuWuPsSssZ2kFJ4MDG5l2dO6mgtzjdHvxEsCA61tquprdHmSqa%2Fi7V993waiSm5uINtGjlzkOtI%2F%2BM8ngAc9PU%2Fxn6Q7wEHCsxpS1GXsBzBcun4QOfL3yIsYVb7%2Bb2yd0NzzAYB%2B7pzR0rY82BLMj7Ekhb42C5W8mj358toI3nU6skjo4glyoNBXPnhGXzKPShOzqARFKLm%2FemyIK8ozzkIMSym9m0cMH5GKm9TUklH9xoV1kw%2BMG1wgY6pgFZedDT0qxBPx%2Bfo174zdxBqbb14Rf8%2BoAwGee1dmpnrYAKlRuLt54aoqg0fgewW2p%2FAHPW%2FigYW0OrMsHwpMRlsyeJWhQ2p5o%2Bi5OZLjt5ZlCIZ2yIv2VZAA5t8zdATj6%2F4emf8WVOAxR1B6afdPn5sPV%2BFldc%2BJ3LsG69BBsdc22wzlaQVlCNNVO%2BWbY2ebcaW9i8tCW8d1iGrVteFT51vUxWMn%2Fx&X-Amz-Signature=c018f647a4537e1f85ca1c46f8d110bddbf8ff8fec83f303722941d7b6e585f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
