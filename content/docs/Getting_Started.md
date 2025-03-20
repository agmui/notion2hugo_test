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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSW562R%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFItyB6OytOnEMhOXaPysjLh8SoSyLv%2FfrB%2FWAhkrInBAiA2T4NpIXviWRjnSzDcAtofJ6EHzM7kI73WOS2IozX06yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBvEpdQEDZzW3Vr8JKtwD%2BG8PylWLjQmd%2FIxsU44WFmuUwmn3ar%2BKrgScfKhR97ss1WKruh72e2S9IEXzec7QVo%2ByDg4fzN0Xrx2f6OHyD879OXgF5AakkWiqHBBPeelzPYWB%2BRYE1RCip6zRTQYUgxzlfB7VkWRNf213vy%2BHJD0HJWIRt7QBBEQNXZtGN5V3mm%2FuFl1BMJdVT6e6poJoWP3dDTdXv2DrPbOBSCWBj2%2F3ED80ZKFGy94fdjgnT%2BY2fZyc1Moyedjj4DrmX%2FigNcD5BS8%2BAoRtWZi6qOeoDBLTSkGObzDXbRca48MmXDPKF61X1%2BKEQV%2BAVsBOqGXoTUTilglGuH0cLo8qbPsrWyG1osBCtnnK510DYG58n6jQ3bzgG5QgY6Hr5useIlKbtqcY7mDEEuzspFPCGdIYSdqDXi6eOX9VTRUBiIZUrC7j5JZQHUwnzVbKMaGnbR2qda0l6HBIMqJdxoQfrfBKoS2RfR5K0qFogMeK8q5KS6opaKMH5te7e%2FnS4HxySJ7UsH8tt3nz78%2B%2BdqLWaXQf3xTkSqtV%2BrGliByNoRcgaqs%2FU%2B48%2BDXFJ4B88nMmjXQXW%2FC%2BhaK26KzHfmYdH%2BJ3k6UdPlKkkAEJ3XxAfSIV7y7XX%2BRHggVIkS9zIOgw8OntvgY6pgG4IKXeoJXBm8xPxLbwEFhiJiFWjeBywP0BpTV3HvjUiBrQteAqpgOCChszoH0ZGS9MQQ6Zb0MEyL9VhUDCaztqP07ygxBcwGZScpFnqxeYWmfB2ZZpLxhRtyRHzAZ3WewpB3nt2B2qFtqLmihe4j1S6E1Vw%2FryKoi2FcQODC%2FFcHLZO3fEF%2Bh5e2iUKyXKsAkzdeL%2BOrSD%2FXVczOEXnXdSEztvpfgm&X-Amz-Signature=bb085bab53638bc4bb7b23834deced84324bcb03ea938a29f5953a0c75534e02&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSW562R%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFItyB6OytOnEMhOXaPysjLh8SoSyLv%2FfrB%2FWAhkrInBAiA2T4NpIXviWRjnSzDcAtofJ6EHzM7kI73WOS2IozX06yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBvEpdQEDZzW3Vr8JKtwD%2BG8PylWLjQmd%2FIxsU44WFmuUwmn3ar%2BKrgScfKhR97ss1WKruh72e2S9IEXzec7QVo%2ByDg4fzN0Xrx2f6OHyD879OXgF5AakkWiqHBBPeelzPYWB%2BRYE1RCip6zRTQYUgxzlfB7VkWRNf213vy%2BHJD0HJWIRt7QBBEQNXZtGN5V3mm%2FuFl1BMJdVT6e6poJoWP3dDTdXv2DrPbOBSCWBj2%2F3ED80ZKFGy94fdjgnT%2BY2fZyc1Moyedjj4DrmX%2FigNcD5BS8%2BAoRtWZi6qOeoDBLTSkGObzDXbRca48MmXDPKF61X1%2BKEQV%2BAVsBOqGXoTUTilglGuH0cLo8qbPsrWyG1osBCtnnK510DYG58n6jQ3bzgG5QgY6Hr5useIlKbtqcY7mDEEuzspFPCGdIYSdqDXi6eOX9VTRUBiIZUrC7j5JZQHUwnzVbKMaGnbR2qda0l6HBIMqJdxoQfrfBKoS2RfR5K0qFogMeK8q5KS6opaKMH5te7e%2FnS4HxySJ7UsH8tt3nz78%2B%2BdqLWaXQf3xTkSqtV%2BrGliByNoRcgaqs%2FU%2B48%2BDXFJ4B88nMmjXQXW%2FC%2BhaK26KzHfmYdH%2BJ3k6UdPlKkkAEJ3XxAfSIV7y7XX%2BRHggVIkS9zIOgw8OntvgY6pgG4IKXeoJXBm8xPxLbwEFhiJiFWjeBywP0BpTV3HvjUiBrQteAqpgOCChszoH0ZGS9MQQ6Zb0MEyL9VhUDCaztqP07ygxBcwGZScpFnqxeYWmfB2ZZpLxhRtyRHzAZ3WewpB3nt2B2qFtqLmihe4j1S6E1Vw%2FryKoi2FcQODC%2FFcHLZO3fEF%2Bh5e2iUKyXKsAkzdeL%2BOrSD%2FXVczOEXnXdSEztvpfgm&X-Amz-Signature=4c4e883f27cbe32b6d584add3dc17dc74507c11dddda05b97467f3f0cb21fbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4XQG72%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCiDnBcKmwrfPvcQQTgnF6QUHJW75Ogd7dSR5jStsmLawIhAOiPRB7lVtH%2B0jGpn6OyoCHCrxn%2FrZxsApDuFSKH%2BlPmKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BjTxEonKkYzsEJxYq3AMTVlUQXswGIp6vnk8aM59HjqE0UpGgpKhSH4r%2BR%2F6RgrA9%2FYqfOmFXqLmfru7eZvtPdewBZgvcOlJBQDf3mH1I0Hvp4ml7yc2twGjzOM9pwo%2BYjpNwTSbmtbsWotzINTkU7vUDep3i%2BekXO4p%2F7myl1WssvnZRZBgvLhcEpg445rm8KJF4m7%2F8OuaN5Tau37Tg8KGftNs4ZIUR0j6iNUEBqvea9FUVzr0Wg4lumodwFo94XzIVkFKUkocG4fl109oaCQSeKRqER3QLh%2FaGs6o2tuNUuocTX6kgb5ABVZnw43LSnWYxAKKMPuUsv%2FNDKRjOHUaXpIHetIDCZ9M3xlnjlFoVZ%2FR1UUhgQqMOeRmPgv%2BBUSVkd5MowkBvnSxBGNYt53jg5FOMcPDR7%2Fb0EgOlT%2BMJVtkfuE%2Bf9GIGgsGe5y9g9V1LYG%2FINhkpg%2Flfxpvk847LBvJR729OF%2F4w8KA7uxMmZCSXtHnAumze%2BvQrwCmO%2BcxK1hR%2BfWyp209ru9YcSg6ytFvQpIqBxfV35VcWT95BzxKlLoMWb%2B3F3Lv0eBCnGTQsjVBWXh6Y%2FOzhg6KyI2d2rb%2B6lIGdA%2BUFiGKKHLnHVhXZ66%2FVLzj0b48NFYdNioRugqJtqUzFMDDR6u2%2BBjqkAVt16Dx6XpjsoVH2tvIi307rchjtO5xZJY4mXrCJhtlAHDRarg93vdkH7seZOJhWYKrbZaLu36SWkl%2B6UZBkiQLeOyH%2FhHtlxqvwUjWDkTWBFNbxOCs0FhiJQs06APLGH5cTmfFKZS0fVL6IfI1Hl4fLESf8DyTCEj3GWrLdgYDkatMbCrx802pM7HZyOrgWxcuMOEWkIUVUSwXf4enccVuFXHoT&X-Amz-Signature=8fce060f06b4473543a84d950989f86b47710adc141e73c79e47872301f6eafe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7NET44%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDts%2BgSNQ8XDYkIGvxtSRCTLPqfiMfSiPXkeWCoHWC8NQIgRmpVZQkI9DNDt2n0CTDOvtp2CQe2FkcctWHLxeVJcucqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEm09yQAHvP%2BE%2FYdCSrcA9mBJqRxYurItpaoxqFlNQj92Jb7IL5XZICeBCTe2wmmZp7bChRJ062NFfUUhC%2FuNF7STTOUqdtl9sNRm2XgVdywKy70uBeLfHUtTUvxXX59MDFBSc8JkW99V%2BI1EfSolAgy0MN7mezx5dA9QQiSNaGKErxWdoDZsCQ5SoDOF3n1SLBT8DmY773tyW5U%2BxD4z%2FadjcZ2HrtFuBy9n2I0st5wJMCfna2hoFpYFW44cJ4g3qOVk0yvTLqYTLqvF1sc2i%2FGNGWcKjjXvTdR0gDxa5tcpiBPx%2BrvThm3kV6dcpFAad3IOg5wMmU%2By8%2Bm3xzpOsZX1dSDlPhPnVYNOfU95TLHBlnsuVmyEqvHmNeICxMhaAo9JmWPkyA3EqhUZpI06yssHdo1Q%2FFzgfNaWs3Uwwl71gEZ5dqfZr1nEHPWC2dzLuBDRJyIGxMG6yTUcEWm%2FD2qGJ3SPp50y1sHvkBzJUfIDAnaSGv29LxHpw7RArTsFhFUrO0IgnymYOBspIXKCFbw%2FnL5JbLJclMX4wwo0n%2BFW5vjqAfCZQW3n0QwugWuOAWwJ5Ufxd%2BCztf%2BNxJts346KjiHwzs3Uet1LYX9QfuE4hhXRTOQ5YcK8MwUDol5CTuUZpigD5C63WTRML7p7b4GOqUBMCOwZPnomau8b3jDMWSlSMZLkOeNjsRgYaFBIkwjkIZ5MSwrbiDS9UjO78P4J2apyFIGaRpDFI7pF%2BZ7m1%2FN%2FO5Yl50ys41ePOCEHX6kgGn%2BebMStXKaaXijjpePUTF6URsyozrsmeBSykYHjQkFUJriCBJTOLq%2BQLdQjCzIDWkUkHniVEiVezVKfDFlnDfcjBiyAWOwesRZ7lumdXnIX0iYtO9J&X-Amz-Signature=021e436dbafc45ba0128aa3811187dd7e175328ef7535be2188fc763e53dfaa6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSW562R%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFItyB6OytOnEMhOXaPysjLh8SoSyLv%2FfrB%2FWAhkrInBAiA2T4NpIXviWRjnSzDcAtofJ6EHzM7kI73WOS2IozX06yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBvEpdQEDZzW3Vr8JKtwD%2BG8PylWLjQmd%2FIxsU44WFmuUwmn3ar%2BKrgScfKhR97ss1WKruh72e2S9IEXzec7QVo%2ByDg4fzN0Xrx2f6OHyD879OXgF5AakkWiqHBBPeelzPYWB%2BRYE1RCip6zRTQYUgxzlfB7VkWRNf213vy%2BHJD0HJWIRt7QBBEQNXZtGN5V3mm%2FuFl1BMJdVT6e6poJoWP3dDTdXv2DrPbOBSCWBj2%2F3ED80ZKFGy94fdjgnT%2BY2fZyc1Moyedjj4DrmX%2FigNcD5BS8%2BAoRtWZi6qOeoDBLTSkGObzDXbRca48MmXDPKF61X1%2BKEQV%2BAVsBOqGXoTUTilglGuH0cLo8qbPsrWyG1osBCtnnK510DYG58n6jQ3bzgG5QgY6Hr5useIlKbtqcY7mDEEuzspFPCGdIYSdqDXi6eOX9VTRUBiIZUrC7j5JZQHUwnzVbKMaGnbR2qda0l6HBIMqJdxoQfrfBKoS2RfR5K0qFogMeK8q5KS6opaKMH5te7e%2FnS4HxySJ7UsH8tt3nz78%2B%2BdqLWaXQf3xTkSqtV%2BrGliByNoRcgaqs%2FU%2B48%2BDXFJ4B88nMmjXQXW%2FC%2BhaK26KzHfmYdH%2BJ3k6UdPlKkkAEJ3XxAfSIV7y7XX%2BRHggVIkS9zIOgw8OntvgY6pgG4IKXeoJXBm8xPxLbwEFhiJiFWjeBywP0BpTV3HvjUiBrQteAqpgOCChszoH0ZGS9MQQ6Zb0MEyL9VhUDCaztqP07ygxBcwGZScpFnqxeYWmfB2ZZpLxhRtyRHzAZ3WewpB3nt2B2qFtqLmihe4j1S6E1Vw%2FryKoi2FcQODC%2FFcHLZO3fEF%2Bh5e2iUKyXKsAkzdeL%2BOrSD%2FXVczOEXnXdSEztvpfgm&X-Amz-Signature=d42b3b7a8f01dde2ec4b027382f09f60681d2970adc7e750f2673d76dcb00c36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
