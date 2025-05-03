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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5NGIJ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFjHP8HZKlsT%2B9nGDXj6Naltibvid0n0DqbjO9l%2Bj6N6AiEA%2FJ3FBp4JQikoO8owr8lZMxvhzPKQNB4wwF9h14lW6OwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUuFdltMSIrC%2Fq1%2FCrcA16Rw1eGIR44UK8KPU85w4%2FkO0ZTHmHWetMs6CweG87uILXKWHNEUguN0sCS96yW7vvfJ0QseafVqyZqKRPFtuZp5yJFeJ1XkjAuJTXDFf9NSek%2FtdQ6rthIVymYi%2BKW2myKVulR6Jr7CMXDId%2FZalP%2FRUKQhI9sf3WXidHk1bni8kjFBSpxF5N2MGdwg5NGjP3ktgoCo2hFlvfSWOJWuSiuf4v0l5UxmTpxnfSPXUENhVo4gxxX3FpmRF4gxiK%2FhXaFWM5GxyQKvtTe7CpRmkAXgx565lLLNyXJUty0zd%2BuQn5SLKJoMgsOZ0ADoSBiSI2Z%2FzatOetjdFlAXElt9Ai2WhFv1oT%2BzCG9Bf64RYChdlMHVXmDCOUh58RZoWvSQQqA9ErlzXCeNx6c%2B0Q5q6%2FQM34ZahJIAcV13pPfdQ8fFxVySeM6%2Fkey2p1PlJeBOEyo3YWELRZzu6Cn%2BdHT%2F7UWNFig97vNG1EvOMYVwcKWl6i4mGr4e4GqaiXIyxAjLOEpTfIy2TXlJRtEaFs7GpN2RN8uKpEfM8y3ua5wJvPiwQ9aZbdxvdo5SA9718EUMom%2Bx4DVqH2kElzU6I3GUSDrigwbh5FYhH3Q2domg05p2ES5SUilYulhP5mGMLfe18AGOqUB%2BFFOG1ElEKV%2BQQc8y%2BUSB4u%2BA82UlwvZlB09szFLbXGmdW%2BSMlMLMbcKnZq9fKuY%2Biuydxz45SQD6LUH0GsdNnlJTcLZ4Q5cTvBH7ODLB51II0xzVUs8RXhRRYy8qg7j0zqwfdjrrTzTL8pmAz7vRhTgWAUvJ58sRgnpyWc98U%2BARTUnwyFI59s4PG3bNFoIxXY%2FxSmXRlHG2YSavxWGnn7eF3lj&X-Amz-Signature=766c3f9c2ea2dc7bf041e031bd945e42ff6f4f95dbfa312fbace772b7423a404&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5NGIJ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFjHP8HZKlsT%2B9nGDXj6Naltibvid0n0DqbjO9l%2Bj6N6AiEA%2FJ3FBp4JQikoO8owr8lZMxvhzPKQNB4wwF9h14lW6OwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUuFdltMSIrC%2Fq1%2FCrcA16Rw1eGIR44UK8KPU85w4%2FkO0ZTHmHWetMs6CweG87uILXKWHNEUguN0sCS96yW7vvfJ0QseafVqyZqKRPFtuZp5yJFeJ1XkjAuJTXDFf9NSek%2FtdQ6rthIVymYi%2BKW2myKVulR6Jr7CMXDId%2FZalP%2FRUKQhI9sf3WXidHk1bni8kjFBSpxF5N2MGdwg5NGjP3ktgoCo2hFlvfSWOJWuSiuf4v0l5UxmTpxnfSPXUENhVo4gxxX3FpmRF4gxiK%2FhXaFWM5GxyQKvtTe7CpRmkAXgx565lLLNyXJUty0zd%2BuQn5SLKJoMgsOZ0ADoSBiSI2Z%2FzatOetjdFlAXElt9Ai2WhFv1oT%2BzCG9Bf64RYChdlMHVXmDCOUh58RZoWvSQQqA9ErlzXCeNx6c%2B0Q5q6%2FQM34ZahJIAcV13pPfdQ8fFxVySeM6%2Fkey2p1PlJeBOEyo3YWELRZzu6Cn%2BdHT%2F7UWNFig97vNG1EvOMYVwcKWl6i4mGr4e4GqaiXIyxAjLOEpTfIy2TXlJRtEaFs7GpN2RN8uKpEfM8y3ua5wJvPiwQ9aZbdxvdo5SA9718EUMom%2Bx4DVqH2kElzU6I3GUSDrigwbh5FYhH3Q2domg05p2ES5SUilYulhP5mGMLfe18AGOqUB%2BFFOG1ElEKV%2BQQc8y%2BUSB4u%2BA82UlwvZlB09szFLbXGmdW%2BSMlMLMbcKnZq9fKuY%2Biuydxz45SQD6LUH0GsdNnlJTcLZ4Q5cTvBH7ODLB51II0xzVUs8RXhRRYy8qg7j0zqwfdjrrTzTL8pmAz7vRhTgWAUvJ58sRgnpyWc98U%2BARTUnwyFI59s4PG3bNFoIxXY%2FxSmXRlHG2YSavxWGnn7eF3lj&X-Amz-Signature=67f443fc2c9acfaee1ab0f59c3b14b2bc66024416847201278db9cc0a7d34776&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5NGIJ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFjHP8HZKlsT%2B9nGDXj6Naltibvid0n0DqbjO9l%2Bj6N6AiEA%2FJ3FBp4JQikoO8owr8lZMxvhzPKQNB4wwF9h14lW6OwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUuFdltMSIrC%2Fq1%2FCrcA16Rw1eGIR44UK8KPU85w4%2FkO0ZTHmHWetMs6CweG87uILXKWHNEUguN0sCS96yW7vvfJ0QseafVqyZqKRPFtuZp5yJFeJ1XkjAuJTXDFf9NSek%2FtdQ6rthIVymYi%2BKW2myKVulR6Jr7CMXDId%2FZalP%2FRUKQhI9sf3WXidHk1bni8kjFBSpxF5N2MGdwg5NGjP3ktgoCo2hFlvfSWOJWuSiuf4v0l5UxmTpxnfSPXUENhVo4gxxX3FpmRF4gxiK%2FhXaFWM5GxyQKvtTe7CpRmkAXgx565lLLNyXJUty0zd%2BuQn5SLKJoMgsOZ0ADoSBiSI2Z%2FzatOetjdFlAXElt9Ai2WhFv1oT%2BzCG9Bf64RYChdlMHVXmDCOUh58RZoWvSQQqA9ErlzXCeNx6c%2B0Q5q6%2FQM34ZahJIAcV13pPfdQ8fFxVySeM6%2Fkey2p1PlJeBOEyo3YWELRZzu6Cn%2BdHT%2F7UWNFig97vNG1EvOMYVwcKWl6i4mGr4e4GqaiXIyxAjLOEpTfIy2TXlJRtEaFs7GpN2RN8uKpEfM8y3ua5wJvPiwQ9aZbdxvdo5SA9718EUMom%2Bx4DVqH2kElzU6I3GUSDrigwbh5FYhH3Q2domg05p2ES5SUilYulhP5mGMLfe18AGOqUB%2BFFOG1ElEKV%2BQQc8y%2BUSB4u%2BA82UlwvZlB09szFLbXGmdW%2BSMlMLMbcKnZq9fKuY%2Biuydxz45SQD6LUH0GsdNnlJTcLZ4Q5cTvBH7ODLB51II0xzVUs8RXhRRYy8qg7j0zqwfdjrrTzTL8pmAz7vRhTgWAUvJ58sRgnpyWc98U%2BARTUnwyFI59s4PG3bNFoIxXY%2FxSmXRlHG2YSavxWGnn7eF3lj&X-Amz-Signature=8c932940aa8553f235dad3eaaffff3958f490734fff1d9938c316ed0f565ca67&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YF7Y4JK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDgS7yv0eLkrOLwHie%2BGZDffDWlfnMvhvDK%2FrK12ElflgIgRFge7hhOcaKiXze2ip96m6dp4kNK2g4UQndxPqEUMeMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4BcoeCcp9Bmk8PqSrcA7SXVSpcM7%2BgPeCbk68bSJZBJvLfnp9nB%2F2ru6rBQ4GoRnN4Wk%2Fa3AL5AJvYW48uVlTPa4Vu%2FY%2FIIsx9dyFtaCKHXSf9a%2BYQLVZoayAYUaeNvqJ0g3rLabiOxW%2BdkaxQlfMePteeyzMp9EHdaajazDXeAdZPHRTyqneWB1jZJB%2FPhsDV63Hcb94dQyh6HDB5maULWk6GHbJ0Hl58MeIaJEB62mqRHa7jjxDKU6vSaJWHV4GOqq1qRiOxxdWCU5F8lpnlUtn3vH5FCyJLtSiBo%2F00hE27K72E9xBBqQTaiYNO5FmK%2BonM4ckScptpjIddHeLtDVLJPl7ZqlBfHJgF%2FuhOHAJyY9O5dPQTve2miZR9NR0wk0xplRXhWBjPSgpcEWWuBl7kOxCdq5UwQPk5slVwnnMJoiTwv4hifacQaE6x3Xwm0PBSZXvhn77xssysi4LMi8RLeUNVHK8zQKkGfedyVpbjE88MpN6z%2BqGFYBHpiM8Dge3%2FxHtfZzg%2F9K5AusoQDfU4FOQg%2Bbt4TzT3sp8cLzU24%2Bq%2BjHdYuQ6cVT8YHenxiIPND9KMkHihnac4m59zlK6rmcJZ69Z5PHgspuKaBb7EvZnyVl0s4PPX5RgEQI5BCK6fGjHhTy4%2FMObe18AGOqUBYGS4VVbQvBeplm%2BtNgeDY%2F2Rsb1oyBqxT2h10youxxUqULvXx35itfVBOsAfUlwOWdhjnVQOP1TsjwYuB9M4jjU5Sez%2FhXReukwKZvWNHdFlTZk9XIMUoux3rP3gvlYdf8RHCmOUOZqH%2FJixTQYYdrtVlHknTbKAQs6%2Fj9fHEf%2B7lvMcWnn0I%2BbLs4CjwB%2B3Y8JSmUW1AoIEfP2EuUVzKv22KhGd&X-Amz-Signature=63187f763b7bebddfc05b011617eb70cf93479b5f3a77eb83ff7809a5946e115&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMJA2D3T%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAIO5bASKWoh7DADz2sXkV%2B%2BOcN7Pmh7X1wRyLD9LuLPAiA0n95ySAjjfCfyrXDKkfl%2BCU%2Bv2ZwsLXKSzxgk0Ws8gSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMJqsQm9xZs4pbkCNKtwDBbWp24K1xuPxV9MLpM3pSjnfF1QksehSbdKt4bPu6H2onP4A4UOzFmNTlZlgBvin8oeqRK1xv3pskJK2rAJGLiM5ZIcpPBkqYxVDHoTHgZi6IVzYH2xnzveeCGFcpI5GGWuYduPSrzbqQUs%2BhPwwPDAMceAxP4569nxZA3VTrSxQJTqxjJmpDOI7yOFABFZ7OYluWfKWwkevuIczlJzA8QKtOMcmFO%2Bv7kXXTKLC%2F%2BywLQwOTt%2FeIaKvjYwwEEwvZcdAedUYn47etkIHPeNZpzUdHIMuha1wTgtJVV2PPdxf2CSQoHGdY%2FCJCt3PymSRIgmNXGSCDiqgku1aBAX3yrSICdibgPH9ifgKGZwE17YFHjxv9t4NuGfoBXsg7pwEOamY%2B06VtROJwzhTSNGTaLKevY5mcOziOn56Y0DprACOp2bIb07RIWuMOoNTIZDdEWdVKNXoHxhXqg8D21sXixaXxsmYoMZcJjAdIQ5wHY0Ay%2FGy7DgDIsn2oW1zFXbVaRXVZ2KpHgeWj14OL4kJ3U0cyRNogqD%2BU0sYikuOojWzzTWBhInuel1ielm14s1kGdcp6n7taWK65GAoPOG12QMUQ%2FpqoOBzYs0yRn%2FK4KuK3HHyfXYZ%2BF5Zv%2Bwwxt7XwAY6pgGSr8t4oOGNeUwnLHVaC%2BHsKXzZI3V%2FrE2ENDup96vugDo2uHlqIuUOJ7a5DySQbjna2PyBnh2QCkITEkzjhQrx1Bl2uJL9%2FfZVhhvRH8ofBQ9e3V%2Fs39%2B0N4YmpH8Fxn6US%2FXuiFBxJLEi%2FlRKj7rW3sjT%2Bv6fECeYKQXrtyDcHjDQtmalA6%2FPTxHD2WJZAKdCjYtOrQcAi6t4FU%2BhWgpfmOzwBcwc&X-Amz-Signature=71757e378f107563fa4b9eb87def7940151024f32405c7307396fbba27bab145&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5NGIJ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFjHP8HZKlsT%2B9nGDXj6Naltibvid0n0DqbjO9l%2Bj6N6AiEA%2FJ3FBp4JQikoO8owr8lZMxvhzPKQNB4wwF9h14lW6OwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUuFdltMSIrC%2Fq1%2FCrcA16Rw1eGIR44UK8KPU85w4%2FkO0ZTHmHWetMs6CweG87uILXKWHNEUguN0sCS96yW7vvfJ0QseafVqyZqKRPFtuZp5yJFeJ1XkjAuJTXDFf9NSek%2FtdQ6rthIVymYi%2BKW2myKVulR6Jr7CMXDId%2FZalP%2FRUKQhI9sf3WXidHk1bni8kjFBSpxF5N2MGdwg5NGjP3ktgoCo2hFlvfSWOJWuSiuf4v0l5UxmTpxnfSPXUENhVo4gxxX3FpmRF4gxiK%2FhXaFWM5GxyQKvtTe7CpRmkAXgx565lLLNyXJUty0zd%2BuQn5SLKJoMgsOZ0ADoSBiSI2Z%2FzatOetjdFlAXElt9Ai2WhFv1oT%2BzCG9Bf64RYChdlMHVXmDCOUh58RZoWvSQQqA9ErlzXCeNx6c%2B0Q5q6%2FQM34ZahJIAcV13pPfdQ8fFxVySeM6%2Fkey2p1PlJeBOEyo3YWELRZzu6Cn%2BdHT%2F7UWNFig97vNG1EvOMYVwcKWl6i4mGr4e4GqaiXIyxAjLOEpTfIy2TXlJRtEaFs7GpN2RN8uKpEfM8y3ua5wJvPiwQ9aZbdxvdo5SA9718EUMom%2Bx4DVqH2kElzU6I3GUSDrigwbh5FYhH3Q2domg05p2ES5SUilYulhP5mGMLfe18AGOqUB%2BFFOG1ElEKV%2BQQc8y%2BUSB4u%2BA82UlwvZlB09szFLbXGmdW%2BSMlMLMbcKnZq9fKuY%2Biuydxz45SQD6LUH0GsdNnlJTcLZ4Q5cTvBH7ODLB51II0xzVUs8RXhRRYy8qg7j0zqwfdjrrTzTL8pmAz7vRhTgWAUvJ58sRgnpyWc98U%2BARTUnwyFI59s4PG3bNFoIxXY%2FxSmXRlHG2YSavxWGnn7eF3lj&X-Amz-Signature=59f0735f11e52d4b78b713cd76927258cce956c74d1b63e7502ef3780a295fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
