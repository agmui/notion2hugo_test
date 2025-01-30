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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGB3QHV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKsMAmwez%2F%2B5ggc%2FqrCCDv2m6GPDKjXgWga2pp9stVYAiBqKcvZwWMWUkjv3Uw0ZM7K1fQblfJOdoY2fmS%2B%2FEeyICqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0JoiAEmPzhHC8KuKtwDR2PmfvgoMHGzM5g948qnr1FSEjJf2FjNUT2IrVDbvPCrtohkyCDeEW922oFldVxyBOlfd%2B1iEuaBvVn3FT121vXSPjdaNCxHOsjQoeJ%2BT3mc1t%2FZaqEW345eAZW2beG35IGrw%2BE%2F7R3ftrKSo%2Fc1l8nzONZ4JI34vRuuzq3REGA71hINTtzTGvryZqwXT9omYow%2F9M6bZIKtkHvD4JCI7OWjQdjuUyBPxYBLuuiMa%2BR8T8As6NU4sohw%2BesWrul0U7fSuT3MhudpXQ5ljhHqWedm%2Fi56DJ6RE%2BYrynoUXEXQfJizKWgmm97UDsENOUqtDabhRvXqHyU7UY8peeVIY6NsPaQKbyc0RAkbQKKmo4941ZyReSnhyRflkFk39W5knf8ogkgrUhJoAEIdOscm%2B86uLmQlEeQPMT9SEHeUcLjzqPa9M4d9V1iV0H8PfDlGgOrRVWnB1QVuzOTtSFgMw5j%2BC%2Bf4I65TH3Plo4RBnIthHCt6KMGaKLCwE%2BLJLULApkZsRjz61%2BvF21n1Zz9%2Fm9VGE%2BW%2FMM91sf6kVzufMXCVhX6KHtn%2FwSh5LchomIMObHTZ3mbVDHroqs08haFOYBbLD4Al6Qnw3sRE1tw1jQmjS%2FfuiGSkcyUYoAowy6TsvAY6pgHsv9QnlS9929Al2BzWvq%2B%2BryrjvrR9cXVjSUGboH9v4H2jBvnwD4O6bX8RF1YsB5lG7fV2fDZy2G%2BJ26VjYVKMsanReCok%2FUoTX2h6Xyz%2BTtaevzlqoFbCEILcNED7OdMalw1WyVHxe885%2FuxRKi%2FumiPrl%2BlkwqW3BI04S1qIrxD7iYglQyvRuy4funecvQVYyEMOvN2xtcqTpe8CsmaG6OeU3d1o&X-Amz-Signature=5f59ccc994f85f687076543c2b5117c770d8f89ccada588bcf4e27d9fe861479&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGB3QHV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKsMAmwez%2F%2B5ggc%2FqrCCDv2m6GPDKjXgWga2pp9stVYAiBqKcvZwWMWUkjv3Uw0ZM7K1fQblfJOdoY2fmS%2B%2FEeyICqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0JoiAEmPzhHC8KuKtwDR2PmfvgoMHGzM5g948qnr1FSEjJf2FjNUT2IrVDbvPCrtohkyCDeEW922oFldVxyBOlfd%2B1iEuaBvVn3FT121vXSPjdaNCxHOsjQoeJ%2BT3mc1t%2FZaqEW345eAZW2beG35IGrw%2BE%2F7R3ftrKSo%2Fc1l8nzONZ4JI34vRuuzq3REGA71hINTtzTGvryZqwXT9omYow%2F9M6bZIKtkHvD4JCI7OWjQdjuUyBPxYBLuuiMa%2BR8T8As6NU4sohw%2BesWrul0U7fSuT3MhudpXQ5ljhHqWedm%2Fi56DJ6RE%2BYrynoUXEXQfJizKWgmm97UDsENOUqtDabhRvXqHyU7UY8peeVIY6NsPaQKbyc0RAkbQKKmo4941ZyReSnhyRflkFk39W5knf8ogkgrUhJoAEIdOscm%2B86uLmQlEeQPMT9SEHeUcLjzqPa9M4d9V1iV0H8PfDlGgOrRVWnB1QVuzOTtSFgMw5j%2BC%2Bf4I65TH3Plo4RBnIthHCt6KMGaKLCwE%2BLJLULApkZsRjz61%2BvF21n1Zz9%2Fm9VGE%2BW%2FMM91sf6kVzufMXCVhX6KHtn%2FwSh5LchomIMObHTZ3mbVDHroqs08haFOYBbLD4Al6Qnw3sRE1tw1jQmjS%2FfuiGSkcyUYoAowy6TsvAY6pgHsv9QnlS9929Al2BzWvq%2B%2BryrjvrR9cXVjSUGboH9v4H2jBvnwD4O6bX8RF1YsB5lG7fV2fDZy2G%2BJ26VjYVKMsanReCok%2FUoTX2h6Xyz%2BTtaevzlqoFbCEILcNED7OdMalw1WyVHxe885%2FuxRKi%2FumiPrl%2BlkwqW3BI04S1qIrxD7iYglQyvRuy4funecvQVYyEMOvN2xtcqTpe8CsmaG6OeU3d1o&X-Amz-Signature=303d9fded107c91e5e8b2fed638232859ea58184ff2067079c147699e90a719c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJFROEH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ58xqiC1yb9HLH24l3ONUVMdsT2Gmnmbu62Zz%2BCeXTAiAdtk8q4mv%2F2EgBlFMrKrnPF%2F7d4UL2giCsyC3KIaqmdiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpvKaKj5sGz8cuWasKtwDAz4Hncxp%2F7p8WPRu2YtFr8SFjEH%2B5jCHfix5KsOTm2QMMW%2FJYl3r50XxbM0ukR13vHBL%2BgZ%2FwZMbl%2F8ieNqGeKRgNnUs%2BCTeMIDwhCzG3pNcQ1hDv5mdvbCHGmKngyjAHzJF7dp6%2BSPrENHwfUKDhOrQYtLFhaieLvVuwsV7N0v38h3RtmU8b5N%2FVZo%2Fw3ZPaQmkNmrxHQff2GaNovAohG75SVBLBaA4jKt1GRYFcmja1J9OMUeXExr6NTv7Y6%2B98oWoT4uIZexQOR6XA7s3EJjtDWccydV5kXFCJHYSsoCWmGtFGsFwZBhwItJO1FGKJGO1OIsfbS7C9IXRi62U9w%2BGZUqVRRPpm7s5oYuusCAyKxz8lmpcyVTGKu5ozDgOL1NPauvw2%2B6y07o%2FCN7tPiL%2BupLkE4Gjj%2BSK1Hyz5zhdjCV8KQJ6SRjlpQZwhfm4WH7LG5sER1YVTdGXFUhQDcTbLocrBkziG34PXCXMx444EvnBIqbOCiRFFDQXXGPeug79DXxjlH%2F6f0YTdduEywLL3ebmRwdRqWBBVVMP3wvlWRp3yYDQNjwtw4Q5da7fefSIhOLs%2FSCEnFJJ2moHJPH6e1xgSDOFfnyW2YoyDLtk7VPEKc6Y7ihv5h8wxKTsvAY6pgHyC9lE79ED9B3TUz9XBaD3XL3MmwMudZfTJNHZm%2Fbot9R3tiG26Lp9ftcOGq0P96lJCb8Rh5r0HOSRsrQ0NUYISp2XFJMvHKooZHn%2Bjf8bEGSwaE81lL74DCOkvn%2BLqBuAmttykAm17MreSl7QWb%2FC7q%2F6B1NZqQ9ogOnoXEZH%2BJHa1862T6j%2BPRi%2FV%2F0ty2RjZINxNhgOharCuU%2F3q7AYyE7ndEir&X-Amz-Signature=bf53eb500055eebb60d692d90774cd515485e74450826167e95afb1c84cb46a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCH4F63%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcUnwMOjAUa0ymRUkv%2Fg2fhY%2B7Qihlzwztjizx3EW3xAIhALJEMYMgaBwGDvVt15M%2BoEktsxl98oMZVOtmO0pqJQCgKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUB3Owatx4ZOeEfs0q3APUF5xZe6M9dj6r5J9RZibX4iGyAwFwiQ%2BdJFFKY%2BDeZAtFGhGWIQQw%2Fvu7oHgNhe2IrlCT70WZ4Wz3IlSYWYgFHW5PXnfmce9XT21a%2FbLhBu8h8%2F33lKfCw9bK8EpWKs1NDSgErvRSXJ1mQ3UMaJNF1CHAV0toOr8HpSDNDytzs9GJDLJpKnWZ0mp5enIqFWqw0bcbC4%2B5M34Nm5Iv4oBja3nMQYAmENpgSoMyF5YVEkRwo0w1RecjgL5lHswnRnllkaOT3StKXnWIywrr6Qlez%2BMLnK7q2XillxOcHk0EmjoxiAocwoR5XlsvFmkvqL%2Boj20tWjLqOjqgafqdosmofHDOh%2FaBZ1VpFjdzrhWRAWtxuxHxoYwlaC74l5FYPwHLy%2BTAtg445nQKci7XdWNKKVYMhIbRzIT6n%2BidtZTozITnzh9pA9ir8lcBCqKbxMu%2B1HVIxaZwKyCpsU9NThdUA%2BLA%2FcF2uHvwvAe3fnS8wDuFUCjeW9TRi3pFFh7lTFd20mK2c2tvpKLYT%2FwXsNz%2B4b3SJNbhVC0VqhrICSwuuKywPerfPH2E3hq9NZEJEEtAw%2Fi%2Bb%2B5VbAO2QD%2BtjFvC55IlIAEN0FGT2i%2Bivz6e2JD1faAkQYTsi28RbjD5o%2By8BjqkAY0dtVj65R6ATMvq5GPQp2TOtkzsz%2BFJSaF8xxMAwSYpw3xVvyCZcN6il4G0okjotPxratYfSACdu33WzR7FSaOPDSLB8afA91hl%2BoVOlbLPUxWz470%2B0usfceKYPUs3J8Ahyww4yI8TQlshGhDzEaarcalMlIgnTTGpjbz%2FTIw8cLrixnAsdAZiAjnJnyz1q2CNst8%2Fv4psfGIYQBbMxwMy8H5L&X-Amz-Signature=d09c800db0a6aea9358b292b8639d08c0e0f68b399ffd3c725ab48f398134fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGB3QHV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKsMAmwez%2F%2B5ggc%2FqrCCDv2m6GPDKjXgWga2pp9stVYAiBqKcvZwWMWUkjv3Uw0ZM7K1fQblfJOdoY2fmS%2B%2FEeyICqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0JoiAEmPzhHC8KuKtwDR2PmfvgoMHGzM5g948qnr1FSEjJf2FjNUT2IrVDbvPCrtohkyCDeEW922oFldVxyBOlfd%2B1iEuaBvVn3FT121vXSPjdaNCxHOsjQoeJ%2BT3mc1t%2FZaqEW345eAZW2beG35IGrw%2BE%2F7R3ftrKSo%2Fc1l8nzONZ4JI34vRuuzq3REGA71hINTtzTGvryZqwXT9omYow%2F9M6bZIKtkHvD4JCI7OWjQdjuUyBPxYBLuuiMa%2BR8T8As6NU4sohw%2BesWrul0U7fSuT3MhudpXQ5ljhHqWedm%2Fi56DJ6RE%2BYrynoUXEXQfJizKWgmm97UDsENOUqtDabhRvXqHyU7UY8peeVIY6NsPaQKbyc0RAkbQKKmo4941ZyReSnhyRflkFk39W5knf8ogkgrUhJoAEIdOscm%2B86uLmQlEeQPMT9SEHeUcLjzqPa9M4d9V1iV0H8PfDlGgOrRVWnB1QVuzOTtSFgMw5j%2BC%2Bf4I65TH3Plo4RBnIthHCt6KMGaKLCwE%2BLJLULApkZsRjz61%2BvF21n1Zz9%2Fm9VGE%2BW%2FMM91sf6kVzufMXCVhX6KHtn%2FwSh5LchomIMObHTZ3mbVDHroqs08haFOYBbLD4Al6Qnw3sRE1tw1jQmjS%2FfuiGSkcyUYoAowy6TsvAY6pgHsv9QnlS9929Al2BzWvq%2B%2BryrjvrR9cXVjSUGboH9v4H2jBvnwD4O6bX8RF1YsB5lG7fV2fDZy2G%2BJ26VjYVKMsanReCok%2FUoTX2h6Xyz%2BTtaevzlqoFbCEILcNED7OdMalw1WyVHxe885%2FuxRKi%2FumiPrl%2BlkwqW3BI04S1qIrxD7iYglQyvRuy4funecvQVYyEMOvN2xtcqTpe8CsmaG6OeU3d1o&X-Amz-Signature=7117a276c46f91a4bb377b454da2f53e24bcc9bb5161ba325d5391e3a8230537&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
