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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZYN3BW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyATot9sokllyfvESynmq6dp8vH9YvCeAIgZQhUOqPvAiEA55AdWXsluwIf6haWvOnbtcDbv12ZIP1DJ7BWi%2Fl4fl8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyPLB1LW5oudSdjQSrcA%2FwHut1IRTw%2BXiudzMeWhUsFDMeBF9tahTcMs3AfrhR%2BbKyi2yAM92g9D%2Ba1E4f87%2FoOUKX5nmwmNNa4tWwKNuloXs9J1RJumCb%2FRFTMub4JBGwUzOofyVwNXEupRLCD5SquoxUCZxEvIjYmuaeTy0v4fMjqlIXtGrsytBLVEjMg44G6dy%2FwO0S4VdH6P%2Bagir6NlGEcpDwhtzL4pL5P764pORcA2En0hVGLULVd6485tkn%2Bb16JHqxBFKea1sr6IiaVJoq2lWzVrdw5qORJHmvp861W4%2FW%2FRFjVWlLFOer4xaaGZH5%2Bk5TaTuWm6KyMW5sFo8M%2BwwL%2FNGpkfPFV298E4rLaeLJMlEG6vb%2BepOQW4OdWHcQfLQyMVLXlKcJRQ%2Fst0RHko%2BI69hEnj80WuCWC3%2BpXaUafpQ7VDfF8py%2FFuRydQqccW5GD47iNM9p%2BqT%2Bz5IcCeme3o3Bs7fI%2Fu92TcBbUPRBkg6zW86WhojXIRwhH5%2FDocQLdbHSUIWhvwwx3Sja3%2F3Wtu6AkjyZbAUL4KX25njLKMeDtB%2FPbWEhCQco3oHRdVOxEo%2FLPoOe1NXdz7D0ROtxmjBra1vOIb1Aq3n7nous%2F9pwQiVKlzWPHyNN2mfCL3So7OOUGMMLvzb4GOqUBnE%2B63rZwF8NaU0i5r4Tgjfe7npAQ76BRrNnIjrIJlI9ICBW9SXKUQH689B6iNlyYZ7RiudYH1%2BAhCBHa6emmZZq5s7ffqO%2BT4iIKfMuWH1BuSRyE7AZr9XeUnx%2BOS4XYKoQ%2FZfmtvZT81mp60zdPRo9BpvSZrzJCYjo4cfJeYPEuViK6vwSedN596%2B5jRiQZk%2BuwlYc9DHJrokWleYVqTWfqeexZ&X-Amz-Signature=a40e532841608d21f1dfda99fd252e848ea56747ea35b771ad6b2472bfbe6c57&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZYN3BW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyATot9sokllyfvESynmq6dp8vH9YvCeAIgZQhUOqPvAiEA55AdWXsluwIf6haWvOnbtcDbv12ZIP1DJ7BWi%2Fl4fl8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyPLB1LW5oudSdjQSrcA%2FwHut1IRTw%2BXiudzMeWhUsFDMeBF9tahTcMs3AfrhR%2BbKyi2yAM92g9D%2Ba1E4f87%2FoOUKX5nmwmNNa4tWwKNuloXs9J1RJumCb%2FRFTMub4JBGwUzOofyVwNXEupRLCD5SquoxUCZxEvIjYmuaeTy0v4fMjqlIXtGrsytBLVEjMg44G6dy%2FwO0S4VdH6P%2Bagir6NlGEcpDwhtzL4pL5P764pORcA2En0hVGLULVd6485tkn%2Bb16JHqxBFKea1sr6IiaVJoq2lWzVrdw5qORJHmvp861W4%2FW%2FRFjVWlLFOer4xaaGZH5%2Bk5TaTuWm6KyMW5sFo8M%2BwwL%2FNGpkfPFV298E4rLaeLJMlEG6vb%2BepOQW4OdWHcQfLQyMVLXlKcJRQ%2Fst0RHko%2BI69hEnj80WuCWC3%2BpXaUafpQ7VDfF8py%2FFuRydQqccW5GD47iNM9p%2BqT%2Bz5IcCeme3o3Bs7fI%2Fu92TcBbUPRBkg6zW86WhojXIRwhH5%2FDocQLdbHSUIWhvwwx3Sja3%2F3Wtu6AkjyZbAUL4KX25njLKMeDtB%2FPbWEhCQco3oHRdVOxEo%2FLPoOe1NXdz7D0ROtxmjBra1vOIb1Aq3n7nous%2F9pwQiVKlzWPHyNN2mfCL3So7OOUGMMLvzb4GOqUBnE%2B63rZwF8NaU0i5r4Tgjfe7npAQ76BRrNnIjrIJlI9ICBW9SXKUQH689B6iNlyYZ7RiudYH1%2BAhCBHa6emmZZq5s7ffqO%2BT4iIKfMuWH1BuSRyE7AZr9XeUnx%2BOS4XYKoQ%2FZfmtvZT81mp60zdPRo9BpvSZrzJCYjo4cfJeYPEuViK6vwSedN596%2B5jRiQZk%2BuwlYc9DHJrokWleYVqTWfqeexZ&X-Amz-Signature=45fad61c6d0b44dead29d5d25ea23a643e04a77223e90c62c0c222a06d65cb46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5QSYVE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FBBl6m9uzXC2QRoB9Z0pDstwM1Ao40butHAOeGLnQ%2BwIgSePZoDYY2UTDkIv2g331hExbtna7I9rxZGib2sXO%2B5EqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4oiggkxVDzcKPAACrcA7mABYxJUh%2BDn7l2l8L5l%2Fe3L2%2FWtoT%2F22NSFanEOxztChioFkXdPrehD0Z8QVoevXgDBm%2B2FeXIFWlJsdtWnXfruy4jYR9CSvwzIqODCJB1IYAQ9Z42%2FhTgrAg0xUt%2FS8OEu2rlSva7RyjOWehFPe8ihNm5uBuLcnFb4rVwrnoCm8q4HjpGWnXPaWeS3UfsdUDaNonK6kDlp1br2cIwfb6OgTdwzMyY%2BS9HjbzaIuNxwbRC8IUGdiwqsxj9gsFw%2FHkwwemx7p6sZ6UXSfiG%2FfRnMl%2FkwFdMtXIz0ttYqYMH907W%2BecEogEhVIdYo06mW%2BcAmiN7B%2FZWolGcvWUElDyJ%2BB2ju7MApWp1KCtngLw46iwGv70R5xtYAgUhijNhoEGpRnc6QsPuCDqf%2BgKIRu9TfrH1hMxiqt2%2BX1IZ%2FZ8XpWgqXkhHslMEE7QPdYVe8ikBl22VbD%2Fz9mgHFgrghSWdZZxcWSeORsxDqvzzbhM0xL%2Br6eYi%2FRwzLfnKHGjPS7k17ViVauDDmyyi2VnUPjgfrmonjHkjiV3x1bAbQ%2Fqv8Y7HIarV0JbfAGQJsb9u%2BkAkpvQ%2FkYaq5uSRqEkmhrdYN4jT3oe%2Fx1%2FoKskei38X9TJIQoKA%2Br8cR3d%2FMKzuzb4GOqUBTQdTB3dFVsXWAFy9DTH4KGkgZTN%2BIc78JoItaFS%2FXxXokmxLBuCBifQErLSe1Dc9CR60grI%2FHjuBuvfFtQrKLSebD%2Bmqz49IROvDJTXg%2FBRQd9eO06KHiA03B94oNZto1z2CnG8CJsSxFC2S8HAth%2F6SleIKZHx6%2FswJUEpKJVy58%2BBA9iNq1MqC10T24RqPfgFRgr6610NZPz%2FCCFo5hEbT8AVZ&X-Amz-Signature=ff05b1486ca02b0dd998196e942789f89ea076a4d87b92aaea9db17171acf930&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN6M4COT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuA8k0xfZ2ITsROflwVd2y%2Fe8uQrvdLOsaIGaLP3bWqQIgILj8kxsN1Bb32XXvLiLCIEh6N6XcEjXmV%2FrGr8vLAGwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ21%2BzEpfQRl28TGSrcA6%2FksdvNj9yB7D5yf26d85FYT%2FyKiQKBHlqEEsOjRApPyM%2BtZqSfItKfqr0uTebIbdxM7QB%2BVj9sBOQQpkRBs5l8P2IQEItUJbUFGYSHCQA%2F6JrMCo4m8w%2Fz1fNrhY%2BDd4n5kZvStWI%2B4dSwEjh4aoXM5XhTBEJ4zID2Z96gAAj9qPPE4JiJrhRcPDtLH9NJBRAHGymRFb6bkNR6RVI8u80RKlQPDWWiEaryxdDV7ki%2BG0YKgIxdOdA1SkqI4kId5ziTMcMw3etiHbB3KX6nEm0zuV62EKsCRJwr1vnFcFUHgM7E0aiSmrLY%2F9c34gmjzbEapBPvHdyIiUcN0bJVXsBr7NLwSAOpNyAHgLnFPvzYekibBEa%2BaD6BmIR5x5lNgJvWjabt92rg4BKqnI3mU8yE6rz4Rwvrx1o6298CNsQ5iZQ7vCIMPlS2RFkJvQjmrrbP91730c3iktbJIY6kxsu2sjF%2BUqTiCRxVZJxm7rE%2F3RaeYr1LyRo7mwCdC5IJmQYsLHOsS%2BjxQsiLCvc8cZaZbS79erdcd771fbngbTd1hANFb4sbedZZN5Upkc8fIfM6QDb3XcykrKXGBG9UAf1C%2Bz32FNbfxWHl2RB56gHOWMET52QLaXyscjXAMMHuzb4GOqUBQT88YGcSd34aKC7WW%2FSaPZrsdWeoPb2LlUuyPeK%2BK%2F7ok6oXorVMIwqiTR%2FLJUrc9e31Zv%2FEAgSzishWP9WPuRiA8wG6OdJdr7yVwrqMgiIFeh3NVAt89duyF9mXHrJ6IseqK7Dfz%2FOY3PxS7sySP36eh%2BTN5Z2DS6KfrrBDDB%2F6luiOjc4Xasd%2BdYqpWb0XHLrtfPJPE%2BwlfQhGE8ihmmnFFfwF&X-Amz-Signature=3c15d3f2cd7712bbf81e84182aeb4a0f5518ab3d08711c62238b61c3d2179b39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZYN3BW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyATot9sokllyfvESynmq6dp8vH9YvCeAIgZQhUOqPvAiEA55AdWXsluwIf6haWvOnbtcDbv12ZIP1DJ7BWi%2Fl4fl8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyPLB1LW5oudSdjQSrcA%2FwHut1IRTw%2BXiudzMeWhUsFDMeBF9tahTcMs3AfrhR%2BbKyi2yAM92g9D%2Ba1E4f87%2FoOUKX5nmwmNNa4tWwKNuloXs9J1RJumCb%2FRFTMub4JBGwUzOofyVwNXEupRLCD5SquoxUCZxEvIjYmuaeTy0v4fMjqlIXtGrsytBLVEjMg44G6dy%2FwO0S4VdH6P%2Bagir6NlGEcpDwhtzL4pL5P764pORcA2En0hVGLULVd6485tkn%2Bb16JHqxBFKea1sr6IiaVJoq2lWzVrdw5qORJHmvp861W4%2FW%2FRFjVWlLFOer4xaaGZH5%2Bk5TaTuWm6KyMW5sFo8M%2BwwL%2FNGpkfPFV298E4rLaeLJMlEG6vb%2BepOQW4OdWHcQfLQyMVLXlKcJRQ%2Fst0RHko%2BI69hEnj80WuCWC3%2BpXaUafpQ7VDfF8py%2FFuRydQqccW5GD47iNM9p%2BqT%2Bz5IcCeme3o3Bs7fI%2Fu92TcBbUPRBkg6zW86WhojXIRwhH5%2FDocQLdbHSUIWhvwwx3Sja3%2F3Wtu6AkjyZbAUL4KX25njLKMeDtB%2FPbWEhCQco3oHRdVOxEo%2FLPoOe1NXdz7D0ROtxmjBra1vOIb1Aq3n7nous%2F9pwQiVKlzWPHyNN2mfCL3So7OOUGMMLvzb4GOqUBnE%2B63rZwF8NaU0i5r4Tgjfe7npAQ76BRrNnIjrIJlI9ICBW9SXKUQH689B6iNlyYZ7RiudYH1%2BAhCBHa6emmZZq5s7ffqO%2BT4iIKfMuWH1BuSRyE7AZr9XeUnx%2BOS4XYKoQ%2FZfmtvZT81mp60zdPRo9BpvSZrzJCYjo4cfJeYPEuViK6vwSedN596%2B5jRiQZk%2BuwlYc9DHJrokWleYVqTWfqeexZ&X-Amz-Signature=e9af954a321202e10511e33353c2b490549aa7ecac463fd0ea6aa26807c03b48&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
