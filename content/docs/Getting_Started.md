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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MSMV7H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLwEFRicYtVdpE1d06zASg63Ngml5UW2iX4IFnKb1WOAiAE2MLb%2B%2BBQv%2BgIx5dgxguMzdaMvY3a9K8P5EqTVB9NmyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe2Qv8xnal03dmVSYKtwDqOxHdSxnn41bNgNxB5mmVqVsY7yWzYVaoP3kGAKnT8FtB%2Bjy52nRG07GFzQeJP00Ji61yAhUJwrL5jGajV8tHHfkFZF5VxH1%2Btfntlotm4MVVcRuPmLQb%2BanZlxTWwCWJ90hTx1%2F%2Bmi54lQswywgk3AX6jyOBPOgmh3n1Fr4kQjEkzGqvNoisx04c9hmydZfCwct%2B8m%2FH1CNniqF7dRkufa1M5WZMlCrRHyqF2MKQOGnDMLNRnxCSWOeMQuNFVu5T9VjoMLeXm22J%2FnKA%2FQTyHEAh%2FBheG%2FZuh8seVc7kfGTMoNLzm9nPr6ODzIAsz%2FX4y11afaqCsDJDpzx2n2t%2BRCvAUatTovcWhlpbfmtnPcEEzpWMxZ78M3saiUnQmPWC%2B1YkIa4ahVW6Hs4BnPNeg3lfi5rZ2nBQgGyQfZi5XIjOL%2Bmriul9mYVk%2F2ADRTB1w3lyYW44Lf16XmTZf2zjeLp5%2BORXUCCaJ5MpeODI7F6j2uO%2BmQ4YGxa2j4XseTH1nT%2BLxm9RncJnF2u%2BId%2F%2BYY9yJdGq8R5ZUjt0A2bRDY4DoJwK2RKbH17s5VmQmdBcADq0aVxzVnhPzB8Pl3WAGccUnkCFfFuPy4S5QbCSLsT09ol2g%2F2%2FI4Zklkw683AwwY6pgH53JpeIpIJMa%2F%2Bacu5tZSjpWRCASm3%2FnDUJjE%2Fru9s9Mrz%2BV2N9Lc1MvPXoEomdEBKFbHmFSqtLCOLXbbMV9f4pqDvIBS%2Faw4bAqva4vGuQw3LzRMvfACVaMikR%2BUkuEOcLMQ7JQrbutM8%2FkFta5JB5iX7gmXt9Fdrwd5h%2B6KsVMtoDmoCRyh27qXdEfq1bGoxUPQYpGyci%2BXvXbkVgixLl8kCkcPt&X-Amz-Signature=ba7acb56c56d3653018f539aae23b3e055c38a937a7e1fa927e32ac04764a4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MSMV7H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLwEFRicYtVdpE1d06zASg63Ngml5UW2iX4IFnKb1WOAiAE2MLb%2B%2BBQv%2BgIx5dgxguMzdaMvY3a9K8P5EqTVB9NmyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe2Qv8xnal03dmVSYKtwDqOxHdSxnn41bNgNxB5mmVqVsY7yWzYVaoP3kGAKnT8FtB%2Bjy52nRG07GFzQeJP00Ji61yAhUJwrL5jGajV8tHHfkFZF5VxH1%2Btfntlotm4MVVcRuPmLQb%2BanZlxTWwCWJ90hTx1%2F%2Bmi54lQswywgk3AX6jyOBPOgmh3n1Fr4kQjEkzGqvNoisx04c9hmydZfCwct%2B8m%2FH1CNniqF7dRkufa1M5WZMlCrRHyqF2MKQOGnDMLNRnxCSWOeMQuNFVu5T9VjoMLeXm22J%2FnKA%2FQTyHEAh%2FBheG%2FZuh8seVc7kfGTMoNLzm9nPr6ODzIAsz%2FX4y11afaqCsDJDpzx2n2t%2BRCvAUatTovcWhlpbfmtnPcEEzpWMxZ78M3saiUnQmPWC%2B1YkIa4ahVW6Hs4BnPNeg3lfi5rZ2nBQgGyQfZi5XIjOL%2Bmriul9mYVk%2F2ADRTB1w3lyYW44Lf16XmTZf2zjeLp5%2BORXUCCaJ5MpeODI7F6j2uO%2BmQ4YGxa2j4XseTH1nT%2BLxm9RncJnF2u%2BId%2F%2BYY9yJdGq8R5ZUjt0A2bRDY4DoJwK2RKbH17s5VmQmdBcADq0aVxzVnhPzB8Pl3WAGccUnkCFfFuPy4S5QbCSLsT09ol2g%2F2%2FI4Zklkw683AwwY6pgH53JpeIpIJMa%2F%2Bacu5tZSjpWRCASm3%2FnDUJjE%2Fru9s9Mrz%2BV2N9Lc1MvPXoEomdEBKFbHmFSqtLCOLXbbMV9f4pqDvIBS%2Faw4bAqva4vGuQw3LzRMvfACVaMikR%2BUkuEOcLMQ7JQrbutM8%2FkFta5JB5iX7gmXt9Fdrwd5h%2B6KsVMtoDmoCRyh27qXdEfq1bGoxUPQYpGyci%2BXvXbkVgixLl8kCkcPt&X-Amz-Signature=c667f0238b8db6dd2c5bbb6a1467297c27f7c4d618aeccbf847abe134a83483f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MSMV7H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLwEFRicYtVdpE1d06zASg63Ngml5UW2iX4IFnKb1WOAiAE2MLb%2B%2BBQv%2BgIx5dgxguMzdaMvY3a9K8P5EqTVB9NmyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe2Qv8xnal03dmVSYKtwDqOxHdSxnn41bNgNxB5mmVqVsY7yWzYVaoP3kGAKnT8FtB%2Bjy52nRG07GFzQeJP00Ji61yAhUJwrL5jGajV8tHHfkFZF5VxH1%2Btfntlotm4MVVcRuPmLQb%2BanZlxTWwCWJ90hTx1%2F%2Bmi54lQswywgk3AX6jyOBPOgmh3n1Fr4kQjEkzGqvNoisx04c9hmydZfCwct%2B8m%2FH1CNniqF7dRkufa1M5WZMlCrRHyqF2MKQOGnDMLNRnxCSWOeMQuNFVu5T9VjoMLeXm22J%2FnKA%2FQTyHEAh%2FBheG%2FZuh8seVc7kfGTMoNLzm9nPr6ODzIAsz%2FX4y11afaqCsDJDpzx2n2t%2BRCvAUatTovcWhlpbfmtnPcEEzpWMxZ78M3saiUnQmPWC%2B1YkIa4ahVW6Hs4BnPNeg3lfi5rZ2nBQgGyQfZi5XIjOL%2Bmriul9mYVk%2F2ADRTB1w3lyYW44Lf16XmTZf2zjeLp5%2BORXUCCaJ5MpeODI7F6j2uO%2BmQ4YGxa2j4XseTH1nT%2BLxm9RncJnF2u%2BId%2F%2BYY9yJdGq8R5ZUjt0A2bRDY4DoJwK2RKbH17s5VmQmdBcADq0aVxzVnhPzB8Pl3WAGccUnkCFfFuPy4S5QbCSLsT09ol2g%2F2%2FI4Zklkw683AwwY6pgH53JpeIpIJMa%2F%2Bacu5tZSjpWRCASm3%2FnDUJjE%2Fru9s9Mrz%2BV2N9Lc1MvPXoEomdEBKFbHmFSqtLCOLXbbMV9f4pqDvIBS%2Faw4bAqva4vGuQw3LzRMvfACVaMikR%2BUkuEOcLMQ7JQrbutM8%2FkFta5JB5iX7gmXt9Fdrwd5h%2B6KsVMtoDmoCRyh27qXdEfq1bGoxUPQYpGyci%2BXvXbkVgixLl8kCkcPt&X-Amz-Signature=274d812d8beb27a4b1ff36a47296cd0cb10fcb8c355350ed4f6ae22ca4889ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M52DHWS%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAkUxTB41GqjFY%2FXp%2BNnwPGVHaP5hRYcqW3Z9l5C%2FV8AiEApbMUQ5hydwUBH%2BDKY%2F4XbzQk6kz0Ew%2FISi7WJaX1NywqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGncFs332uXFpIBpeCrcA9AhXKIabR71PdSZOsbjSnUajYAit92Uu6dEfZ9RGRipTz%2FYbPQYAmr8VoTMullM8ncf6teUfZGcTxYUOueVbLt3tYHw4tTWfUu%2Bcb5m%2F3%2BO0Wn3xzjghtCF6lImWyKDvDM3GiCKf17%2FRcPD3qYcdAbZ4OoQff6F1A%2FSS%2Bq1iCWf7p%2BnRyaI%2Bk1hlwklS7O7VMfZ2HGq%2BPvqV%2FH4ElJbgF6o55Lf46wsFAivXAvEg4sLIT4%2FunFgvlCwNJ9ffQ6RVC8ebUvFsOE0K%2F34hvaWbjj4uDtzuLrPt4Fngx%2BOH1DkqmZZDXStpW3%2FNfrp%2BhKdjABvrYyNToMFAjAWakQ347EhG2OFTAqbyKGNf4IEvpRZ7QLYGygTpu8fTERBlr7fRmUIkHrBRz1HLIjJOZN73ILN9Kiz6BszJIfPJvTediRlCJbfipYMQwnXkUfFtuldldwazZN64zikAdvWtJr%2F83%2B6djqiDm9vrAyjqUxKvs4o%2FIoupQbGe5MyUJIHyCmRO72SaDM47GHbvRDf8n0ua%2BMqNuCrcV2u7x2sKrcypi9oX%2BJJT%2BJK8FBAU78PXhyYkz81q0qOtgBx65WI0ZovPN1YRO7HVI6nWq98WmdxPcPRFXLpYkZH5Dz0txpOMOHNwMMGOqUBVQBIQtBHc9iIFPl2wKiKMZSLkkdeX%2FWUGUvbv1oDZdY0jtk4c8%2FZLWvLJPMUzn8ZHv7rBqxdDDR8t1JQ3I53GZdc99h%2BZrm72W8ZcnHzrP67qHK3nzMEjCQvHBomUVUn8E%2BLvIpPzg3KswzT8Wp8vAg0C1exaEvow8MRyraM1FPYBKPaYvLXBuRbmYfmNgyVitYi8oh4JLdhOQx30jpO%2B50qeTqO&X-Amz-Signature=be7f2f0cf65082bb3e0847278b99ccda65c8a7ece97419633c34c39aa3a6d2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MKKYRW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN1xfx%2FRSKdffsq%2B2qWGlo%2BmgQwboeVz2SYA%2BSYFMX4AiBQ77k%2FPhLwWklrRDpdraON283vkxsbW55h%2BMq8psYeFSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvuW3Fupvs62uA4EvKtwD1pm3wFFg7zsjVC8h8zergVi1Hu3HZqYomxIj5Fie48Qyi2b9VpWqVsEXK%2FRSxZPenuXfqsNxZBbff3484AQcHbyMhmotSNfh9Z869C1QCmatruZ3tewuZITFCGb34MdsN4e%2BDatlXpkZA02BEH8p5RfIcF0d%2B7gWFoV6irHJXCbijYpl6wB1E2M1Vfj2qa7%2B84jr3rYXGWDmORYbBMMU9%2BMbyate7KNKKyH11Rbp6KBwJDyvKFJBtEIPD7BaFXVjreOQBSWqemdeY6clk%2BIfstqm4r4a42wlrXkZB40JxenzEA3L4Fugv8oJt1vWZaGhjvuENsnWSMaMZx0YfGd%2F1EMRamq08oxoz0dw58Jhcn1C1gjcjlHqw%2FEvpavW3r%2FbnR5o6ZLn4mfjVRGszDFlZ2UUVItbWW%2B45v3YAMpc%2Fkdc0gejdwRBipU091K8Sdre78gMl7kHx4WSxK3xCIL5I6d34CywcyJF9xWc39ZT2GygxgLvuvo3kWhEKrYJudEmN8iyZ%2FMER62K8Ggj1thVDfvkRDP60aMeLGr39KLPzu5WJQexLfDtmVApDInYDlYz53PVJEVl6GDbDVwgbHEsXiwJZNVSKCUQANAOWobb8PC40SYigKcbTOGZlOgwis3AwwY6pgFC%2FuuIw09kt718aT%2FLlP0OwZACWKunH9VxfGIqECnpeyTaFT%2BZZfDUYrLsLSS8nEvL%2F0cY1v5JVrOFD38oV7Yg1nktxlkvabq992cJ7V35fFSyH8Q%2FhA7SY6X6nwMTKuKuwVeQcEe4fep1pLof5dcgn0MKNJgQgy4NYptbiIq1KMiqAtKCi%2Fmv7kg0MNo8ElY4sm9BJKr4Amz%2BO4kq0HR%2BVS7kiHiF&X-Amz-Signature=92828947ed9f4ad3bc23cf31c487f1822dbe65cc290db57d32ffa54e8595301d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MSMV7H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLwEFRicYtVdpE1d06zASg63Ngml5UW2iX4IFnKb1WOAiAE2MLb%2B%2BBQv%2BgIx5dgxguMzdaMvY3a9K8P5EqTVB9NmyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe2Qv8xnal03dmVSYKtwDqOxHdSxnn41bNgNxB5mmVqVsY7yWzYVaoP3kGAKnT8FtB%2Bjy52nRG07GFzQeJP00Ji61yAhUJwrL5jGajV8tHHfkFZF5VxH1%2Btfntlotm4MVVcRuPmLQb%2BanZlxTWwCWJ90hTx1%2F%2Bmi54lQswywgk3AX6jyOBPOgmh3n1Fr4kQjEkzGqvNoisx04c9hmydZfCwct%2B8m%2FH1CNniqF7dRkufa1M5WZMlCrRHyqF2MKQOGnDMLNRnxCSWOeMQuNFVu5T9VjoMLeXm22J%2FnKA%2FQTyHEAh%2FBheG%2FZuh8seVc7kfGTMoNLzm9nPr6ODzIAsz%2FX4y11afaqCsDJDpzx2n2t%2BRCvAUatTovcWhlpbfmtnPcEEzpWMxZ78M3saiUnQmPWC%2B1YkIa4ahVW6Hs4BnPNeg3lfi5rZ2nBQgGyQfZi5XIjOL%2Bmriul9mYVk%2F2ADRTB1w3lyYW44Lf16XmTZf2zjeLp5%2BORXUCCaJ5MpeODI7F6j2uO%2BmQ4YGxa2j4XseTH1nT%2BLxm9RncJnF2u%2BId%2F%2BYY9yJdGq8R5ZUjt0A2bRDY4DoJwK2RKbH17s5VmQmdBcADq0aVxzVnhPzB8Pl3WAGccUnkCFfFuPy4S5QbCSLsT09ol2g%2F2%2FI4Zklkw683AwwY6pgH53JpeIpIJMa%2F%2Bacu5tZSjpWRCASm3%2FnDUJjE%2Fru9s9Mrz%2BV2N9Lc1MvPXoEomdEBKFbHmFSqtLCOLXbbMV9f4pqDvIBS%2Faw4bAqva4vGuQw3LzRMvfACVaMikR%2BUkuEOcLMQ7JQrbutM8%2FkFta5JB5iX7gmXt9Fdrwd5h%2B6KsVMtoDmoCRyh27qXdEfq1bGoxUPQYpGyci%2BXvXbkVgixLl8kCkcPt&X-Amz-Signature=bc49b65ebe60cd82b95d02aaa5587e7d51b2ef43df37b003fd9489fcbc6c21f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
