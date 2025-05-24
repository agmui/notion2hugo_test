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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKV2HJAT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDB8HQyMEgDOFLAtVe4f5UUOoOWC9KwcqUs%2Fy7OnAHqvQIgccIA6XiGs2fKqdkSo%2F4Biw8c8qP3N8rupP5P5iEIehsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFDxZryTTRDotnIkfCrcA%2FCocMYPMdUR34aZmisKOgv8vwgmrcLUatTC7ek3y6HMViHty%2FlyDdvBGF7GekulufIi%2B3YGBYFrCZZsZ03N0IyG5mNDJoikFL5KTduY92QtIuJPwM7o%2FWPAIjGaqMVLlw4MmUkOIbiOyWrTkl58Y3kF2B1A%2F9XA%2BmLuJVzljdq0vyjFCKN12Jv4Me5SOSIleDKZFvtjqQWgVWtsTDXzt2oMcVK%2FYLdtK8eBhhTcz%2ByxLOqlcEEOYp%2BdvobxUtvKGX2OXbGQXQFmnwsZcqIEYDSmg1m9EQHo3%2FIyi4jF6pBeHVZ5RLHYu89i0UajhwnEVCq6rSNGyFjFAIjpU3B0xzVc5bl17zUamoGgOZPELcCTXvQzOhZMGyGkw96yaZrE2w3FaDUs251rGK8F13f%2BNwFP9AOP0aVpGeQeGN%2FXgX%2BTYu0z%2BHxWVwfHqhmOCiH86L9gmu4Mt5YGogdo1V40qBRttAqVJDX%2FFRJpXL4NiQBRzu4dbksJA2Hfz4Gfe9KhJiNsIbyYcq6ZRKxi0T2avjjjrcRYPnQx%2F1zqVQ7gWnCxJThQ8F7FKKyevpmSRkyhoMsr2tZv%2Bz%2FHmrQd7QdbJsTSGuybpL9j%2FHnpxHyEU7fwz7UBLYGid1vV2O3WMOfhyMEGOqUBjEmythZy6190VYyYd%2BDikDjZns8JoOY7SOY9b97EbRYo0%2Bfq7CCZFmgofdOwoR2D%2BGDx66t9L6z5zNWqb9et76NMSiEgkpWWK7DGJ0Xj8D%2FBTJltja20fqgRjGD77Tj87PPC6%2F7IDis2H0L0akaatnlzxyskdowH07k7MsieyCBauagg2UNmqMrRTxP5qFQBS50IXROQWVKmOAQdtiUvnbrB95zY&X-Amz-Signature=67e280588a343fd793a199bc73be600337c60247929afdb37a78af694a29feb7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKV2HJAT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDB8HQyMEgDOFLAtVe4f5UUOoOWC9KwcqUs%2Fy7OnAHqvQIgccIA6XiGs2fKqdkSo%2F4Biw8c8qP3N8rupP5P5iEIehsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFDxZryTTRDotnIkfCrcA%2FCocMYPMdUR34aZmisKOgv8vwgmrcLUatTC7ek3y6HMViHty%2FlyDdvBGF7GekulufIi%2B3YGBYFrCZZsZ03N0IyG5mNDJoikFL5KTduY92QtIuJPwM7o%2FWPAIjGaqMVLlw4MmUkOIbiOyWrTkl58Y3kF2B1A%2F9XA%2BmLuJVzljdq0vyjFCKN12Jv4Me5SOSIleDKZFvtjqQWgVWtsTDXzt2oMcVK%2FYLdtK8eBhhTcz%2ByxLOqlcEEOYp%2BdvobxUtvKGX2OXbGQXQFmnwsZcqIEYDSmg1m9EQHo3%2FIyi4jF6pBeHVZ5RLHYu89i0UajhwnEVCq6rSNGyFjFAIjpU3B0xzVc5bl17zUamoGgOZPELcCTXvQzOhZMGyGkw96yaZrE2w3FaDUs251rGK8F13f%2BNwFP9AOP0aVpGeQeGN%2FXgX%2BTYu0z%2BHxWVwfHqhmOCiH86L9gmu4Mt5YGogdo1V40qBRttAqVJDX%2FFRJpXL4NiQBRzu4dbksJA2Hfz4Gfe9KhJiNsIbyYcq6ZRKxi0T2avjjjrcRYPnQx%2F1zqVQ7gWnCxJThQ8F7FKKyevpmSRkyhoMsr2tZv%2Bz%2FHmrQd7QdbJsTSGuybpL9j%2FHnpxHyEU7fwz7UBLYGid1vV2O3WMOfhyMEGOqUBjEmythZy6190VYyYd%2BDikDjZns8JoOY7SOY9b97EbRYo0%2Bfq7CCZFmgofdOwoR2D%2BGDx66t9L6z5zNWqb9et76NMSiEgkpWWK7DGJ0Xj8D%2FBTJltja20fqgRjGD77Tj87PPC6%2F7IDis2H0L0akaatnlzxyskdowH07k7MsieyCBauagg2UNmqMrRTxP5qFQBS50IXROQWVKmOAQdtiUvnbrB95zY&X-Amz-Signature=4e66d76dfbaae8859e9d2f7f8636b019d100d926bfe9255646185942d577fa3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKV2HJAT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDB8HQyMEgDOFLAtVe4f5UUOoOWC9KwcqUs%2Fy7OnAHqvQIgccIA6XiGs2fKqdkSo%2F4Biw8c8qP3N8rupP5P5iEIehsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFDxZryTTRDotnIkfCrcA%2FCocMYPMdUR34aZmisKOgv8vwgmrcLUatTC7ek3y6HMViHty%2FlyDdvBGF7GekulufIi%2B3YGBYFrCZZsZ03N0IyG5mNDJoikFL5KTduY92QtIuJPwM7o%2FWPAIjGaqMVLlw4MmUkOIbiOyWrTkl58Y3kF2B1A%2F9XA%2BmLuJVzljdq0vyjFCKN12Jv4Me5SOSIleDKZFvtjqQWgVWtsTDXzt2oMcVK%2FYLdtK8eBhhTcz%2ByxLOqlcEEOYp%2BdvobxUtvKGX2OXbGQXQFmnwsZcqIEYDSmg1m9EQHo3%2FIyi4jF6pBeHVZ5RLHYu89i0UajhwnEVCq6rSNGyFjFAIjpU3B0xzVc5bl17zUamoGgOZPELcCTXvQzOhZMGyGkw96yaZrE2w3FaDUs251rGK8F13f%2BNwFP9AOP0aVpGeQeGN%2FXgX%2BTYu0z%2BHxWVwfHqhmOCiH86L9gmu4Mt5YGogdo1V40qBRttAqVJDX%2FFRJpXL4NiQBRzu4dbksJA2Hfz4Gfe9KhJiNsIbyYcq6ZRKxi0T2avjjjrcRYPnQx%2F1zqVQ7gWnCxJThQ8F7FKKyevpmSRkyhoMsr2tZv%2Bz%2FHmrQd7QdbJsTSGuybpL9j%2FHnpxHyEU7fwz7UBLYGid1vV2O3WMOfhyMEGOqUBjEmythZy6190VYyYd%2BDikDjZns8JoOY7SOY9b97EbRYo0%2Bfq7CCZFmgofdOwoR2D%2BGDx66t9L6z5zNWqb9et76NMSiEgkpWWK7DGJ0Xj8D%2FBTJltja20fqgRjGD77Tj87PPC6%2F7IDis2H0L0akaatnlzxyskdowH07k7MsieyCBauagg2UNmqMrRTxP5qFQBS50IXROQWVKmOAQdtiUvnbrB95zY&X-Amz-Signature=1deaf50d1ace0645b0d6bb8616c5295379ebc880db343fc4add9bedad79a7e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR4M7ZWO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC1i%2BoepNJ3UX5F6WfjbhJ5KYYewZpF2%2BRRhP7a32f8owIhAPns9Lv5lUECXYTk5KaYnQmqAa0LyfyU6iHUR%2BzX50CVKv8DCBsQABoMNjM3NDIzMTgzODA1IgwKbLCXzqscFBrZgrkq3APkOeFRfufg3rdPmOA%2FEY45QBp1RF9Ino14ncb5jnqEP8m0oO%2BH2zJ4dCR6ZcWOGq3wsCV4vqW06uOTE7WciS8ike24SZONrVVcl%2BxbT9wbig3k5jhLQ6QoTI%2FxZnLY6vxoIXXh6mmcffnTP8KMHx8cPDhpDXp%2BY%2BkBDmDjm3HoXz0vDt4Ws4mQ1usgHq2cOlfzG8T1OAw9bNLOSz%2FFHlOqoct6%2FvR91xldrGI4xonv5SsW5%2BRohuFKZNuEbZhMIUmmARFFY0C%2Bg0uFvlcdn76zB0lAYkJunFde%2F7w85thKZGmV2tgBjPtjraQ4%2B7wITajh3AIny5QSQdBpa9qL5bacNPV19hjI9OVZVsv%2B1p7c0yCWytFkkJLF4twGczpJfg%2FW%2B4yZdP%2BUBhzoDu3QxkbhK3hmrIdeE7WrkgTA8L%2FZyT9jBs6L8crBNpYFwnceC6XUrkLUROY52Xbb3%2FoigsBB4t1pK1rlb2gaZJVGrforpK017UrlNY1961iHpW0oMmp0Mb2uj0BBkUX%2FkXudoEe1NIkDUjBy%2FINA9kvLkh%2FACysZZkSG2k00Rf7rlKCWhtIwrbl7l6nFuM3uofaM%2BdFXmypVSwYBhLIbI7X8Io3KzmgRXEiURfl9HnhWrTCmlsjBBjqkAfEWHeROVOZsmPupeg4QgGz07icYXwA80JSrcBAr9fZYc9nFFXlcuchi1IvecqPPUyv3Yf%2BoVOgBHqUPGGaQHIwV4tiyfRXUI1x80awWxcEdJQTusXW5UxG90n0ND7fALJduua18F4eqk1o78YQVGnLp8L12x0WAx2bXZtMf%2BrcqgFOcjJMVIc4e5NLo6KDeYdSHy0HlTodWHb4XCEOcLL2ZK04Q&X-Amz-Signature=9eddf87381140005d7e99b1583b51f2621f9f39e01120d2b91eead0209cfdb57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QOXIHB3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCqj9eZMakVAxR1xqAkttt4CdA%2B41wo%2BgCOOfYcJn%2Bl4AIgX5THinrFLiGp2gcGrVZGRh6djCtN3mmGR1ncTDlfrmQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKWSB5WaXUfKuTECpSrcA4NSCZjRnw9wsD3aIwKesjl1HFn6547KVR1xQcyGGq9BPPtmpGPWCQcganwTEtpxZXkr7GYz3jEDXti4r4eFodWaGfmfm2h38psbxuub%2BiZJlb5xNPezMufonKMbyAiC4E%2B4eUSce2Eo9i1Ll%2F1MLoHnLP2xNAnKv6%2F5YYHFPJFmy3hzwTsesOBbx1wMJtQhFmksICXfc7ZHXFEZzie7zNHT8xZRdiEcJKXNfjwO83scT8pBA9rit42YF3hnLRDdKUwQzkde8%2FBXfavQgRmrVouQwmvnPVc88fjarSvhh4FAs9CoHZ5XVIAXFdz8d6UmmxVVLVrH3zZ6vdqAlQ9fyRkUnY0R8%2BtMPiw5T%2BANKu9j0CMuTuhtKW18aNNJcv8N7mT9gsTsZTwO8GeiDXNdIHWyZA2nLYLgMMg2uWCl%2BUKHhwYKxwLVtm%2FwfM2DeVHIw3DZInwAsvB1rsYSzP%2Fo%2FHikJz%2FyOWvB2QEncdJja7udlICGYsvc8U9Teh1DUDTWUp72q86a5A5qs66ImaM%2BxElxBV3T7KZMXs8IfiAAiIlotHWWJ%2BcGl9gsvZJw%2FkFH6yKhVuxtoVKqkEDjPec%2FqP7eLIH77pbNm6lih092CrGn3Ult21zr7OSi1TnZMOmVyMEGOqUBv0Ums4IZdtxkv9YaXGFqTFASk5YoQVuCkpd9iwHYth6RyClHCIWKmDE%2BO8KRon5yPyVPNlZdduHrDEixwurCULslfYUaFf3OOg10CWVzI8RfSPlMovopYW4IhrTBuil%2BnRiDKLyh%2B8k7j2zThrfJ%2FZlqDbjXTO2tP%2FMhLrPVQXnSmdkPB4JuCqEQB4O9qA5PHlD5Q59L1zxgIwpFWJ1pKYAAMweF&X-Amz-Signature=bce051fc3b25398c58936a30a24eaa05a11ae7a085ff95451c43fc7145f7730d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKV2HJAT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDB8HQyMEgDOFLAtVe4f5UUOoOWC9KwcqUs%2Fy7OnAHqvQIgccIA6XiGs2fKqdkSo%2F4Biw8c8qP3N8rupP5P5iEIehsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFDxZryTTRDotnIkfCrcA%2FCocMYPMdUR34aZmisKOgv8vwgmrcLUatTC7ek3y6HMViHty%2FlyDdvBGF7GekulufIi%2B3YGBYFrCZZsZ03N0IyG5mNDJoikFL5KTduY92QtIuJPwM7o%2FWPAIjGaqMVLlw4MmUkOIbiOyWrTkl58Y3kF2B1A%2F9XA%2BmLuJVzljdq0vyjFCKN12Jv4Me5SOSIleDKZFvtjqQWgVWtsTDXzt2oMcVK%2FYLdtK8eBhhTcz%2ByxLOqlcEEOYp%2BdvobxUtvKGX2OXbGQXQFmnwsZcqIEYDSmg1m9EQHo3%2FIyi4jF6pBeHVZ5RLHYu89i0UajhwnEVCq6rSNGyFjFAIjpU3B0xzVc5bl17zUamoGgOZPELcCTXvQzOhZMGyGkw96yaZrE2w3FaDUs251rGK8F13f%2BNwFP9AOP0aVpGeQeGN%2FXgX%2BTYu0z%2BHxWVwfHqhmOCiH86L9gmu4Mt5YGogdo1V40qBRttAqVJDX%2FFRJpXL4NiQBRzu4dbksJA2Hfz4Gfe9KhJiNsIbyYcq6ZRKxi0T2avjjjrcRYPnQx%2F1zqVQ7gWnCxJThQ8F7FKKyevpmSRkyhoMsr2tZv%2Bz%2FHmrQd7QdbJsTSGuybpL9j%2FHnpxHyEU7fwz7UBLYGid1vV2O3WMOfhyMEGOqUBjEmythZy6190VYyYd%2BDikDjZns8JoOY7SOY9b97EbRYo0%2Bfq7CCZFmgofdOwoR2D%2BGDx66t9L6z5zNWqb9et76NMSiEgkpWWK7DGJ0Xj8D%2FBTJltja20fqgRjGD77Tj87PPC6%2F7IDis2H0L0akaatnlzxyskdowH07k7MsieyCBauagg2UNmqMrRTxP5qFQBS50IXROQWVKmOAQdtiUvnbrB95zY&X-Amz-Signature=d53ababd344396a5218e054cb675f8afc5f9581eb912c27afb1c2cc78215398b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
