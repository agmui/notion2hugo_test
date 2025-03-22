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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W2B3DH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGrhZMPt7LMumZJriZfCEku0hB%2FUAUEigpCRzO5NdsNmAiAIZv00wyaFCv8nwxSj6WKmcgc0kdC%2BEcBk66w8vxH7YSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJI2sBSMi2R7misSiKtwDC5AanoZIqR1AEBXdBTIIWje6SeEsKjXVx%2FHl7DrBUe8G2%2BbpNREKKYx88LaE1YggYD1hTvdWfwAGYJQ8yT%2FYQZldYFCTb%2Bzd9isf5djaW3zSZnEQwQ95Vt8v0EdB2FOsDThK5YVJXfBwT3447Etl%2BMQP%2FWheE%2FAR9LbbJEorWoQbqiHGNXaJhNC6DBWMsPI1Z%2FiAubHuOF%2FgmreRJkdJuAtlwbFgEy9GDJJZk151ujQ3HPDFo9KOWmNA%2B7F%2FfPJSm1QShgLZtZuUrKuBefrzRSm%2FIsM2HbaFqlXz2v5q8QLABUroQnmgLZ0RT84qfRpD6whCWkcru5lTun0R03GYkKhz4dY1QjG4vkTzoeGh8xZ48oo2uU6amd1osRDolraUd7Ar9aP5Z64HDmCg%2FNA257T09H5zWe1wr1Qt47nA%2Biif212GPjnCJolKpGl5yESMPOFo2sst2LIIHfHI7DbHUDDasTJRr8pt6eh7XWbzAKhTSVnl%2FabVV6y04LCDVsVFbnCA6fE5N6MEmumcBUBGJ%2BYoM%2FNltMbZkL7lmOqRaz%2FWYHhanu%2FJJc4abscids3KxIY%2B0ugibM25CE4maQjHYTO1UyrHDWQETu19kBixU%2FlRlwG%2FFWTBiburHogwvKr5vgY6pgE2mkIlnLTv6RZWQ0LNF3%2FFIv3NQDY9OKO4hM4X7vESSlrgVriZ%2FjQmRMOhv68aNG6XrvcWwXe3rdmDPbshrNoZ%2BjuHKKMwSZVtSk3U%2Be%2FB9KQFIOxN08x%2F6s%2BRA2GMVuXbM3f5KqH%2FOrcIJLytTdEtZ%2BUq39kN0GNrlUd3CX1U0cwdPl78P%2F2VQ0rfvz2C6zYWJzTDWvtt7k%2FVZ%2B1ntzQD6EW%2FCKCq&X-Amz-Signature=eb831c8b84be9da5380eb0e61a6d94615d136afc5affbf549b926499bd89c2f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W2B3DH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGrhZMPt7LMumZJriZfCEku0hB%2FUAUEigpCRzO5NdsNmAiAIZv00wyaFCv8nwxSj6WKmcgc0kdC%2BEcBk66w8vxH7YSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJI2sBSMi2R7misSiKtwDC5AanoZIqR1AEBXdBTIIWje6SeEsKjXVx%2FHl7DrBUe8G2%2BbpNREKKYx88LaE1YggYD1hTvdWfwAGYJQ8yT%2FYQZldYFCTb%2Bzd9isf5djaW3zSZnEQwQ95Vt8v0EdB2FOsDThK5YVJXfBwT3447Etl%2BMQP%2FWheE%2FAR9LbbJEorWoQbqiHGNXaJhNC6DBWMsPI1Z%2FiAubHuOF%2FgmreRJkdJuAtlwbFgEy9GDJJZk151ujQ3HPDFo9KOWmNA%2B7F%2FfPJSm1QShgLZtZuUrKuBefrzRSm%2FIsM2HbaFqlXz2v5q8QLABUroQnmgLZ0RT84qfRpD6whCWkcru5lTun0R03GYkKhz4dY1QjG4vkTzoeGh8xZ48oo2uU6amd1osRDolraUd7Ar9aP5Z64HDmCg%2FNA257T09H5zWe1wr1Qt47nA%2Biif212GPjnCJolKpGl5yESMPOFo2sst2LIIHfHI7DbHUDDasTJRr8pt6eh7XWbzAKhTSVnl%2FabVV6y04LCDVsVFbnCA6fE5N6MEmumcBUBGJ%2BYoM%2FNltMbZkL7lmOqRaz%2FWYHhanu%2FJJc4abscids3KxIY%2B0ugibM25CE4maQjHYTO1UyrHDWQETu19kBixU%2FlRlwG%2FFWTBiburHogwvKr5vgY6pgE2mkIlnLTv6RZWQ0LNF3%2FFIv3NQDY9OKO4hM4X7vESSlrgVriZ%2FjQmRMOhv68aNG6XrvcWwXe3rdmDPbshrNoZ%2BjuHKKMwSZVtSk3U%2Be%2FB9KQFIOxN08x%2F6s%2BRA2GMVuXbM3f5KqH%2FOrcIJLytTdEtZ%2BUq39kN0GNrlUd3CX1U0cwdPl78P%2F2VQ0rfvz2C6zYWJzTDWvtt7k%2FVZ%2B1ntzQD6EW%2FCKCq&X-Amz-Signature=7ad5cb240c4f039d420b968de7ec8366bfecc124491d7ced4dba4bc56bcd5f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBXXHMJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQClJiF3tP1vvXIRxbaz0hXXCXhG17OTLLjxActkMq7IhAIgVuBZ%2FCEGDusEPf0OmzCMe3eG%2BW%2BkhmXPE%2FOBL08bHHoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhlC9gXkhSQxaAfvCrcA8Obqf4ZaYLZmSPMqfygpvZfTNQ70d7uoefkl0Ekd3EX96GCntDKUhYSfvt2kU5qPfqRBn6%2BnuPdnXE9Bmix1ixg35OreSP1gbMQDKoRKDP8t6iitvhcqusBScHMbdiNaaZHDdl72hwdb48y7%2FzEWRYMTh3%2FeN9GhuDvHteGmt78Dwe5A9P2dO4Q21bOc9wDENzaSg%2Bfh7GcI58aDnHFghf8cZfQcnu62UFEPex1cRIYpS8r1h8tEetB7Y2LO6FGOOV5if6uGAvO20waug1no4cfxwblmfbdVgcCad2oqKWFJL%2FGTmWHIRKgjiOltEu88BLWPSK8wCPUBr4bD4cRP6Zr%2BWC0ADHmqLfFbxN1Jt1f%2FxRqELUTV%2FsiXaHf9EqEdIOxuuKkQNrZEP7aJtHPKwRbeAr4U1dzR%2FuQ6etyV%2B%2B%2F6hmiBZEzdakVBY24LdVJ0i9Q7ifQnUVjIKIz85g8p%2FcQshj3WF%2BlR7B8BA8khg7q0eumLnwuyhSD69QZlYjUyKl8csn%2FiR1isFFeSUgHvRYuMryQUbXS5UujoI3Iwrh2JgEq9Ws8QFNVrstiA10RT6WQTe4ozffnk5fuQWIEuUDaJlBbG1FEsMNLjrU0%2FwRH0aWYErB6sEhjXlKxMOyq%2Bb4GOqUB3%2B8W7T2HeVStu8imkOOh4l%2Ba%2FcnYXfn0jwrdfzHoxArHij9l4qyhidkM%2FNSQVFgrnKYzmPJIBDNLAWtdJUInV6ZU7oMtYU22dQg14yGZk%2BYfUprYHSI3%2FKqhtbjsJZIER31P9EtVbsa%2BR%2BHP5f765A%2FT%2FTpRKmMuu5LIQ9U58l4cJwSTpXKYDYh7mQqylkasVHBzVaXVUzrisWtSb3XQ9CUPAC2g&X-Amz-Signature=fba34c4b58baae42f8e86c3743e63f7ce657d9b5c3e35c83a0b52074da4f8640&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OF2BKA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDLmZYEzzwiZ79IOhlRpisj5zFaLg8TYYscdteSsBAV1QIhAJLdDQ7h6Qj3MO41nzz%2BJDqIwVyX80QZXqZkNL9DeY27KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI3GF%2F1w%2FsD6VR4Tkq3AM%2Be%2Bk4MRSH3Yl0T7X378iCa%2BvtPlu%2BxBkveWaYRsMndsfZTnF0Y9Rt7Sq3yN%2BBd7uMgnai2SKQWnJ40mabz3Fh3ZI44alB4Yl%2FwRQIhvxeE5DW7AdM5CPKtWJgXOQILC0x8amAkB%2BEvwvoW%2F8OygjnZi%2FiGcEdF5c%2Bxmo%2BC3jR8wn50MpLYCMOWsiBXpChSKYA7sjVkKPD6iNJj2pAV%2FKTUTQxLIGfFBRIw8VC%2BW2ZL1WxOYje1o8wUxpeGwdYts6LJNqO1Itnp3IGTlRwPEmLkNq33AJyDvmzyewIiL5HsF4pxiA6Z70Vizj%2BEaJlmFekKOjD3EGyMuAU0AG9JPOGPWpQ2E%2BFXVZ7vUlZKhOZewnUkNbVt0s5NtcQnl5uqcpFIqP8lxEAn87z66c0wrXnu65Jof5XtB3dK4TeC8pdPUtPTjBO2hTF1TOuY7RMbaw%2FmT3bRgpOs412wO0X6lPBd1Nw7NNvXGEJD%2FgejNBffbWg7%2B2dyFSc2tbTqcyCszuxWqol0uKyBnCW3c8kzmcyCptHASKAfRpQo7HXUUUnoxn4QxJCFp7yhRzLc%2BQuP%2FPenO2332z3TKxpsJH%2BmYMstCjagxI0EIua3NcwGUJ5mn%2BQTbM8WDcTomFMgzCyqvm%2BBjqkAdvAB2knKbcRHsw%2BQywjy9RP%2FEi5o1jiKz99eBnlHFCQrQs9jZ08j9gHo%2BEjuVqQMAYozyIgogVK5ehJdWFhQK7ZyRo5G457zwUGKzYjkTx8I3%2BTeOhHFWpJzGGYP4ASC1j%2BeRoq2cAzIa5BQCZVBVEm3Bsn4Aq8dMSwy9er8WC%2Ffw4URJ9sJXRNACUe5dXvKxWnlhonqTnn705LKkcGWXG6DXAf&X-Amz-Signature=a1bf964af2dcaf51b6def1de53e4f5fde47f4469d74a062bf79824aa7174bcf1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W2B3DH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGrhZMPt7LMumZJriZfCEku0hB%2FUAUEigpCRzO5NdsNmAiAIZv00wyaFCv8nwxSj6WKmcgc0kdC%2BEcBk66w8vxH7YSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJI2sBSMi2R7misSiKtwDC5AanoZIqR1AEBXdBTIIWje6SeEsKjXVx%2FHl7DrBUe8G2%2BbpNREKKYx88LaE1YggYD1hTvdWfwAGYJQ8yT%2FYQZldYFCTb%2Bzd9isf5djaW3zSZnEQwQ95Vt8v0EdB2FOsDThK5YVJXfBwT3447Etl%2BMQP%2FWheE%2FAR9LbbJEorWoQbqiHGNXaJhNC6DBWMsPI1Z%2FiAubHuOF%2FgmreRJkdJuAtlwbFgEy9GDJJZk151ujQ3HPDFo9KOWmNA%2B7F%2FfPJSm1QShgLZtZuUrKuBefrzRSm%2FIsM2HbaFqlXz2v5q8QLABUroQnmgLZ0RT84qfRpD6whCWkcru5lTun0R03GYkKhz4dY1QjG4vkTzoeGh8xZ48oo2uU6amd1osRDolraUd7Ar9aP5Z64HDmCg%2FNA257T09H5zWe1wr1Qt47nA%2Biif212GPjnCJolKpGl5yESMPOFo2sst2LIIHfHI7DbHUDDasTJRr8pt6eh7XWbzAKhTSVnl%2FabVV6y04LCDVsVFbnCA6fE5N6MEmumcBUBGJ%2BYoM%2FNltMbZkL7lmOqRaz%2FWYHhanu%2FJJc4abscids3KxIY%2B0ugibM25CE4maQjHYTO1UyrHDWQETu19kBixU%2FlRlwG%2FFWTBiburHogwvKr5vgY6pgE2mkIlnLTv6RZWQ0LNF3%2FFIv3NQDY9OKO4hM4X7vESSlrgVriZ%2FjQmRMOhv68aNG6XrvcWwXe3rdmDPbshrNoZ%2BjuHKKMwSZVtSk3U%2Be%2FB9KQFIOxN08x%2F6s%2BRA2GMVuXbM3f5KqH%2FOrcIJLytTdEtZ%2BUq39kN0GNrlUd3CX1U0cwdPl78P%2F2VQ0rfvz2C6zYWJzTDWvtt7k%2FVZ%2B1ntzQD6EW%2FCKCq&X-Amz-Signature=20c8e1ec6fec740558c5e20c4388891dfe27bb71d10e998a0a559aed887a81d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
