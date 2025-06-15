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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7QH2TI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDLzVnFKxMyD96qQX4AmTETUceX%2FkfHmXLrMt0hQJXYjAiB4oJJUzko6IDOEAC6Vwt2AoAu0F0OmVXYGfual5SRfSyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMZqYPqkfJngRNCmhFKtwD%2BoUn2BHW8KNPcrVa3Q26oncgS6SGT5Nc9F8zYfbDO7DsI82OzopNMwei73RxkdZ3X0O0inbSXtNzH%2FLvMeSMF9KPpgNoOxzvfgTNn6RZGUW2PSAmGHXbZ1P1Y7s9uTiNGbbMhd5DsCpHU7EpDr%2F%2BH%2BtQPjLbDYLQ63W4kGj80%2BWKIjk29Zy9pPYsD9bFxvCuTwIAarPFZF%2BZEyyI6IY7Ov6IzpVqZtIGlz71kPJEmr1Sqh2bQw37HDFmkAz%2FXXd6gQvSj2FZWvK22i%2B7O7M7RhBhhfaXnipJMTux4InNfPpECymMas%2FmizIsAQxgn%2BkhThP2AjedzH15yhx6qKAsZJ2xUzPQpMG1X1592qfShmFRg0cFH6t%2FXZRQpGiutsSg0%2F3tMPeMCGERD61689z31cwkqy6SbyaIfJ6SbOUq76Ha5dcwolz%2FtvvlF668PUYAs2UHpk44KnQKPvLew2jI5EdX2N6T7X141rkZpZn9ap%2FBoNnlNCs6JkySk4CSshqH9hc2pDYzORxxVnVCdy%2FrhSsr%2Fk%2Fi6CCQ1gYebyqlxsLWrzqkG0Gyf4s2boPDEcBKjoxPFHeBtb8J6R0zEayUY1hu4CtM%2BUev8NUxw9%2FKMf6%2FC7UvRZ4UDguR66swlIW6wgY6pgEqyTWWgAGHh1sIrPZ6dPZb8I1NUz%2F7%2FHAzslED9ZIx6aGw41E5uwXinK9cJcp%2FMo%2BY0HSwBAfSvL9HDXgiGeJ%2F3tsUPo3VwuAqGXNpsMlZF%2Ba75BNX3k5NYB7n3tsu9cby%2Fe%2BVcwz2jwbHGZOwVTiGBvOlHOMQvvN5jrGUSn8ICGhjh0h73Chg9DTAp5K4I6EKJAL0RnWnUNixIw%2FceSals9Ll%2FjU7&X-Amz-Signature=2a8c4d22823056b4615ad55374b59798059d4b2b7401a527725766cdf53fe4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7QH2TI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDLzVnFKxMyD96qQX4AmTETUceX%2FkfHmXLrMt0hQJXYjAiB4oJJUzko6IDOEAC6Vwt2AoAu0F0OmVXYGfual5SRfSyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMZqYPqkfJngRNCmhFKtwD%2BoUn2BHW8KNPcrVa3Q26oncgS6SGT5Nc9F8zYfbDO7DsI82OzopNMwei73RxkdZ3X0O0inbSXtNzH%2FLvMeSMF9KPpgNoOxzvfgTNn6RZGUW2PSAmGHXbZ1P1Y7s9uTiNGbbMhd5DsCpHU7EpDr%2F%2BH%2BtQPjLbDYLQ63W4kGj80%2BWKIjk29Zy9pPYsD9bFxvCuTwIAarPFZF%2BZEyyI6IY7Ov6IzpVqZtIGlz71kPJEmr1Sqh2bQw37HDFmkAz%2FXXd6gQvSj2FZWvK22i%2B7O7M7RhBhhfaXnipJMTux4InNfPpECymMas%2FmizIsAQxgn%2BkhThP2AjedzH15yhx6qKAsZJ2xUzPQpMG1X1592qfShmFRg0cFH6t%2FXZRQpGiutsSg0%2F3tMPeMCGERD61689z31cwkqy6SbyaIfJ6SbOUq76Ha5dcwolz%2FtvvlF668PUYAs2UHpk44KnQKPvLew2jI5EdX2N6T7X141rkZpZn9ap%2FBoNnlNCs6JkySk4CSshqH9hc2pDYzORxxVnVCdy%2FrhSsr%2Fk%2Fi6CCQ1gYebyqlxsLWrzqkG0Gyf4s2boPDEcBKjoxPFHeBtb8J6R0zEayUY1hu4CtM%2BUev8NUxw9%2FKMf6%2FC7UvRZ4UDguR66swlIW6wgY6pgEqyTWWgAGHh1sIrPZ6dPZb8I1NUz%2F7%2FHAzslED9ZIx6aGw41E5uwXinK9cJcp%2FMo%2BY0HSwBAfSvL9HDXgiGeJ%2F3tsUPo3VwuAqGXNpsMlZF%2Ba75BNX3k5NYB7n3tsu9cby%2Fe%2BVcwz2jwbHGZOwVTiGBvOlHOMQvvN5jrGUSn8ICGhjh0h73Chg9DTAp5K4I6EKJAL0RnWnUNixIw%2FceSals9Ll%2FjU7&X-Amz-Signature=c660b05663f240fdfea507fe125b83946b979c6fd5b963b02ab9b057c24484c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7QH2TI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDLzVnFKxMyD96qQX4AmTETUceX%2FkfHmXLrMt0hQJXYjAiB4oJJUzko6IDOEAC6Vwt2AoAu0F0OmVXYGfual5SRfSyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMZqYPqkfJngRNCmhFKtwD%2BoUn2BHW8KNPcrVa3Q26oncgS6SGT5Nc9F8zYfbDO7DsI82OzopNMwei73RxkdZ3X0O0inbSXtNzH%2FLvMeSMF9KPpgNoOxzvfgTNn6RZGUW2PSAmGHXbZ1P1Y7s9uTiNGbbMhd5DsCpHU7EpDr%2F%2BH%2BtQPjLbDYLQ63W4kGj80%2BWKIjk29Zy9pPYsD9bFxvCuTwIAarPFZF%2BZEyyI6IY7Ov6IzpVqZtIGlz71kPJEmr1Sqh2bQw37HDFmkAz%2FXXd6gQvSj2FZWvK22i%2B7O7M7RhBhhfaXnipJMTux4InNfPpECymMas%2FmizIsAQxgn%2BkhThP2AjedzH15yhx6qKAsZJ2xUzPQpMG1X1592qfShmFRg0cFH6t%2FXZRQpGiutsSg0%2F3tMPeMCGERD61689z31cwkqy6SbyaIfJ6SbOUq76Ha5dcwolz%2FtvvlF668PUYAs2UHpk44KnQKPvLew2jI5EdX2N6T7X141rkZpZn9ap%2FBoNnlNCs6JkySk4CSshqH9hc2pDYzORxxVnVCdy%2FrhSsr%2Fk%2Fi6CCQ1gYebyqlxsLWrzqkG0Gyf4s2boPDEcBKjoxPFHeBtb8J6R0zEayUY1hu4CtM%2BUev8NUxw9%2FKMf6%2FC7UvRZ4UDguR66swlIW6wgY6pgEqyTWWgAGHh1sIrPZ6dPZb8I1NUz%2F7%2FHAzslED9ZIx6aGw41E5uwXinK9cJcp%2FMo%2BY0HSwBAfSvL9HDXgiGeJ%2F3tsUPo3VwuAqGXNpsMlZF%2Ba75BNX3k5NYB7n3tsu9cby%2Fe%2BVcwz2jwbHGZOwVTiGBvOlHOMQvvN5jrGUSn8ICGhjh0h73Chg9DTAp5K4I6EKJAL0RnWnUNixIw%2FceSals9Ll%2FjU7&X-Amz-Signature=aeb441f0c86e6b65ad3d964a583bd74412c348d75f6839a8a019f6f3e395330b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XCWSYT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCPFeC8x%2BNcwHJyl6rzUHb9zQwCCul%2Fm7hteKEmB30qwQIhAM1g7lPW7XkZEkNh%2B4IZURyXYMvPSOkleceBsJEQOBRCKv8DCEEQABoMNjM3NDIzMTgzODA1IgzaFCSXmHooDt1g0rQq3AOFtbn5Hx6PHInXHoBZiDiTIcmEy7RjK7ndUwM0tT1bPvrBeqM2O4SoVO3Zdrzl3dSU%2FpaOinSIY4Vo6SV2hkhzw50QvTXuLTJZot2I2g7tOzMJpMkuODzP1R3leb85YJWn4UXuinMFzUK1b%2ByliD4eb4uq78gZ2AUeEUUgStDiRXKcwWbdA2iG2fviYvHFsIRYAYn5IKBQ2sYCiQ1DuaWi5YpzVLD0RJbvi70QjDZ%2Fl6Jf22xq1Mb2L3WW%2BhmIWp%2F123n3GwDmXufbHjvn%2FavueOL19kI%2Fggm6TI%2BffhNV%2BebkBeNPXoYVDuQg8HZsV%2Btmsh%2Bw7P%2BIwavkL3oZ6N7CfqmInTlTuJaPv%2BVkwimak2jxvY7lwwyLiT17PRop0eriYI2rWCY%2BIU7xL6ScVX4c5K4syMxA36U%2FFsX8BtgfSsYd%2FzNNwiKpvv44rCU1LZnPDnVps9PadiWb7As1yAyAs6mdLCJ61oBnTeJaIB0qaS0eSW%2F%2Fq6sII4fwZZGYqYXYPHRGmScbZFX3LTvRaBpW7c7wkCa%2B2WQwJabDb0ax8%2B99PzQVpEkt1DTz9Wao2cKYebzKt2eVe5qVtcvdV2Lg3wgYM2ZXKtlHNDYAFmWvoGAzj%2Fg5dTpcHE95VTDlhLrCBjqkAQ5NTZWCzMYWtMfbpRFIAyCVzdVb4U%2FqI1z%2B80arrl3i6miDLx0POuWUsyYGGt%2Fs4dFYNGXN1xYNUhBNPjFGiF8N8lUyVqCsbTwOradPvIp00qicu%2FqqlVq6kNxWsqS1ly7rpHaHmMl2SrTbgO4bzA12LwWP9c7RKxclJtMubZthq2m%2B5kCyraj2uSi1pTb5gq%2FA6P4Mi1V1LGeGk0JZoURHCslO&X-Amz-Signature=858cdc820c5ffbc137ac2d3ccbe98150be56c3074ec145ee72a43e094b2c6468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TS27ZU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAbbN5X6wMtcJaFsDasR%2BOShWbNASG6Elgk2vT3qAuJ2AiEAiZ8TEg8Wwo318C5bffIbhP1HSACpBB5OKBKUWnk2smgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJly40o9Ch2QsGmezSrcA0NUph3zyFaka5a2gEgdOVAeUNdSxfAu5o0Hpinr3laKhe4QqqNJ7JxaGsLCc0To202hG%2BvHIM0GdgcNXxy%2B1M6x588EAfd%2FwV3WN1lu44KYEHS5CPUQT4UzUXvxsYdClUyW31sPD9tEj4VxW%2Fakeq6T1wroAlETAllxG7sT6tAtTWpvT4fLRE3LxKotQNbXietb7d5NGl0XqMIR6bOxvm6x9l3%2BzHdWY652ovuve3OWeZ9fShFSRSCNSA0%2BEDcY1c46VhBU3NGckjXEHBaX0IGPl%2FUo7XcrxC559BCiPjcqi61uAa16BgNIoENMviDvXtAk3pCbTbRDoCR7Q%2B7W7235OSAsp8RuQi2088xd9lo1UOCes%2FePQM648V6dw7ze4%2BeT9W%2Brutorf7HOTZvc2SJw4m1kP97Pi46B%2FhN0gEF08KNMOZrD3qc4lEmE%2BpNxd97VHzLA6n7sTIRus7oWDO2bCt3AUBzakgrbBMxSC2fHc%2F%2Bh4yH0hQnwxKqIch4pOVJHjsQGjjQDyFonhIyOcElstTPDyG%2FLzFI5%2B2SAPkaeEKSYFvUEvOGDoHBfGcAdpfGu%2F8t%2Bmzvfl2Vdyn7Iq2Iqbn9TDueU3T9Ue5Z%2BgwpD5oGrTf8p2xdpv%2B0AML2EusIGOqUB52kgMB%2FaBF7BhtsrF06PlWO%2F9gNO2U8pemXjaMCq6AybP2TvlgpSJCUHlQGc1c8N53JSRS%2FynOen30ZlUWJyG9dyC63yy7jhwdNszTzruNTcgr%2Bvh6vTBbmhtoUONj%2FlI1uimgEOTLIXaXFoDEBvzX4JnScxxcT8XbtsrbnO1LhuvgCiUZhRTx8hDLxcz46yYDilC3S6uB4NR6C%2FE5p3nb%2FIsOtv&X-Amz-Signature=48dae55e650e3a594bc897378938971bbbf0355dae3b97844a3afe9593333633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7QH2TI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDLzVnFKxMyD96qQX4AmTETUceX%2FkfHmXLrMt0hQJXYjAiB4oJJUzko6IDOEAC6Vwt2AoAu0F0OmVXYGfual5SRfSyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMZqYPqkfJngRNCmhFKtwD%2BoUn2BHW8KNPcrVa3Q26oncgS6SGT5Nc9F8zYfbDO7DsI82OzopNMwei73RxkdZ3X0O0inbSXtNzH%2FLvMeSMF9KPpgNoOxzvfgTNn6RZGUW2PSAmGHXbZ1P1Y7s9uTiNGbbMhd5DsCpHU7EpDr%2F%2BH%2BtQPjLbDYLQ63W4kGj80%2BWKIjk29Zy9pPYsD9bFxvCuTwIAarPFZF%2BZEyyI6IY7Ov6IzpVqZtIGlz71kPJEmr1Sqh2bQw37HDFmkAz%2FXXd6gQvSj2FZWvK22i%2B7O7M7RhBhhfaXnipJMTux4InNfPpECymMas%2FmizIsAQxgn%2BkhThP2AjedzH15yhx6qKAsZJ2xUzPQpMG1X1592qfShmFRg0cFH6t%2FXZRQpGiutsSg0%2F3tMPeMCGERD61689z31cwkqy6SbyaIfJ6SbOUq76Ha5dcwolz%2FtvvlF668PUYAs2UHpk44KnQKPvLew2jI5EdX2N6T7X141rkZpZn9ap%2FBoNnlNCs6JkySk4CSshqH9hc2pDYzORxxVnVCdy%2FrhSsr%2Fk%2Fi6CCQ1gYebyqlxsLWrzqkG0Gyf4s2boPDEcBKjoxPFHeBtb8J6R0zEayUY1hu4CtM%2BUev8NUxw9%2FKMf6%2FC7UvRZ4UDguR66swlIW6wgY6pgEqyTWWgAGHh1sIrPZ6dPZb8I1NUz%2F7%2FHAzslED9ZIx6aGw41E5uwXinK9cJcp%2FMo%2BY0HSwBAfSvL9HDXgiGeJ%2F3tsUPo3VwuAqGXNpsMlZF%2Ba75BNX3k5NYB7n3tsu9cby%2Fe%2BVcwz2jwbHGZOwVTiGBvOlHOMQvvN5jrGUSn8ICGhjh0h73Chg9DTAp5K4I6EKJAL0RnWnUNixIw%2FceSals9Ll%2FjU7&X-Amz-Signature=a2251425c4b73fe4503c62656a87e480f9ebb1244049e11ac7dab9bf3c83bed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
