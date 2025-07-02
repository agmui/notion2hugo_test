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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LAEVKU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKFfKATR00Y9xeP501VpxXp460TEygQ2xF9bw00dMflAiBCGxRyh4h56XSqOmkB%2FIjzbfT0tVVyDtwNLrnl6SUxNiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GGtYLVLkhzNWGvFKtwDtS3RpCrBd4haHAsk9fiWLpa%2B7NxmpemlSOpXs3ia%2B0Y5ZlLi4276jpolrYI%2FKWx1F9ZHuSx%2FCjE5G77Pfk%2F3pq1EzOTLZETYvDbNfZuQ7fTg%2F7k5HqK%2FqD0TRQOMMI%2BteMV27wSz8xfCbJSSSANmEnM34h7LZR%2FJgrCZNIxdKO%2FitnhkhLevKj4bNWrJ3wDoK3vMx0j%2F0MqJb%2FiFghR1k4Ls8%2F2SZhQa8gec9EpEz4w3uVDcQExsRdll6htH8CvsRnOHwsw4LTM13pWHTgTrnlNB3IeXbv%2BJfQvFCNCDZwa2MW8SJV9esHp5bW3aihxgq6SvJ60sUaFHITePWwpxvS0yMuZLmzQGacMjfbqbZG0H98v85mn4TDdlj21EAowmI9StjhaMYCcmep71kw%2FQQjXFh5i%2F6Q0JZVJkZQkCyxJRFxtu4z5%2Fbzik8vIZL8Qr27k2WbnPX9bobE3DZX0aKPWqwTWUXJjuSusTIRx06vjgbfJSazYY9HVvEa6l0dx01TJxFFr0VNGrLBIjbFFMzO4UTpF0FAZ%2B8yY%2FYyxISmlbfY7CJgjtw0pE2zuL1I4lPZFFIUQmtqlIIESUUXMq6I1xBeq3KrVm7I7b2c%2BEBrm5hodcaxqCOT1Xsz0wkLSTwwY6pgFRX10tufuXWmHjsgc9oq1Hf1cT6GIRuSdRfVDYD%2BI5xgHyn47i4cVM5YTSZv8Xuo0mGG9j29s8Psv3KvrgZzlBg90EX1GxaGZanpW2%2F180UNe7oeMfJwHZxOGZSHqOLX1HZ2c%2FkyF6CBxWLDW8ydhXPDADLS0P%2Fy9WuUYH4vvE1zrKZHeVep2sRqMbWMj8hMafjkAk5BdBMy7ILgWY%2B3P41EI6uogJ&X-Amz-Signature=28c625c50b6094dde1ca2667ec33134a676f9a9d8dc56b0acc3c7399fc5b0180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LAEVKU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKFfKATR00Y9xeP501VpxXp460TEygQ2xF9bw00dMflAiBCGxRyh4h56XSqOmkB%2FIjzbfT0tVVyDtwNLrnl6SUxNiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GGtYLVLkhzNWGvFKtwDtS3RpCrBd4haHAsk9fiWLpa%2B7NxmpemlSOpXs3ia%2B0Y5ZlLi4276jpolrYI%2FKWx1F9ZHuSx%2FCjE5G77Pfk%2F3pq1EzOTLZETYvDbNfZuQ7fTg%2F7k5HqK%2FqD0TRQOMMI%2BteMV27wSz8xfCbJSSSANmEnM34h7LZR%2FJgrCZNIxdKO%2FitnhkhLevKj4bNWrJ3wDoK3vMx0j%2F0MqJb%2FiFghR1k4Ls8%2F2SZhQa8gec9EpEz4w3uVDcQExsRdll6htH8CvsRnOHwsw4LTM13pWHTgTrnlNB3IeXbv%2BJfQvFCNCDZwa2MW8SJV9esHp5bW3aihxgq6SvJ60sUaFHITePWwpxvS0yMuZLmzQGacMjfbqbZG0H98v85mn4TDdlj21EAowmI9StjhaMYCcmep71kw%2FQQjXFh5i%2F6Q0JZVJkZQkCyxJRFxtu4z5%2Fbzik8vIZL8Qr27k2WbnPX9bobE3DZX0aKPWqwTWUXJjuSusTIRx06vjgbfJSazYY9HVvEa6l0dx01TJxFFr0VNGrLBIjbFFMzO4UTpF0FAZ%2B8yY%2FYyxISmlbfY7CJgjtw0pE2zuL1I4lPZFFIUQmtqlIIESUUXMq6I1xBeq3KrVm7I7b2c%2BEBrm5hodcaxqCOT1Xsz0wkLSTwwY6pgFRX10tufuXWmHjsgc9oq1Hf1cT6GIRuSdRfVDYD%2BI5xgHyn47i4cVM5YTSZv8Xuo0mGG9j29s8Psv3KvrgZzlBg90EX1GxaGZanpW2%2F180UNe7oeMfJwHZxOGZSHqOLX1HZ2c%2FkyF6CBxWLDW8ydhXPDADLS0P%2Fy9WuUYH4vvE1zrKZHeVep2sRqMbWMj8hMafjkAk5BdBMy7ILgWY%2B3P41EI6uogJ&X-Amz-Signature=732c9f6f174412b99c43065f1e148a3ca983d2f1cd449b4cf8fbf35b6c1dd843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LAEVKU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKFfKATR00Y9xeP501VpxXp460TEygQ2xF9bw00dMflAiBCGxRyh4h56XSqOmkB%2FIjzbfT0tVVyDtwNLrnl6SUxNiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GGtYLVLkhzNWGvFKtwDtS3RpCrBd4haHAsk9fiWLpa%2B7NxmpemlSOpXs3ia%2B0Y5ZlLi4276jpolrYI%2FKWx1F9ZHuSx%2FCjE5G77Pfk%2F3pq1EzOTLZETYvDbNfZuQ7fTg%2F7k5HqK%2FqD0TRQOMMI%2BteMV27wSz8xfCbJSSSANmEnM34h7LZR%2FJgrCZNIxdKO%2FitnhkhLevKj4bNWrJ3wDoK3vMx0j%2F0MqJb%2FiFghR1k4Ls8%2F2SZhQa8gec9EpEz4w3uVDcQExsRdll6htH8CvsRnOHwsw4LTM13pWHTgTrnlNB3IeXbv%2BJfQvFCNCDZwa2MW8SJV9esHp5bW3aihxgq6SvJ60sUaFHITePWwpxvS0yMuZLmzQGacMjfbqbZG0H98v85mn4TDdlj21EAowmI9StjhaMYCcmep71kw%2FQQjXFh5i%2F6Q0JZVJkZQkCyxJRFxtu4z5%2Fbzik8vIZL8Qr27k2WbnPX9bobE3DZX0aKPWqwTWUXJjuSusTIRx06vjgbfJSazYY9HVvEa6l0dx01TJxFFr0VNGrLBIjbFFMzO4UTpF0FAZ%2B8yY%2FYyxISmlbfY7CJgjtw0pE2zuL1I4lPZFFIUQmtqlIIESUUXMq6I1xBeq3KrVm7I7b2c%2BEBrm5hodcaxqCOT1Xsz0wkLSTwwY6pgFRX10tufuXWmHjsgc9oq1Hf1cT6GIRuSdRfVDYD%2BI5xgHyn47i4cVM5YTSZv8Xuo0mGG9j29s8Psv3KvrgZzlBg90EX1GxaGZanpW2%2F180UNe7oeMfJwHZxOGZSHqOLX1HZ2c%2FkyF6CBxWLDW8ydhXPDADLS0P%2Fy9WuUYH4vvE1zrKZHeVep2sRqMbWMj8hMafjkAk5BdBMy7ILgWY%2B3P41EI6uogJ&X-Amz-Signature=4372e67e93ea7f13e656a2124bb254a1f6dbcf24f7fe598f7ccbba9b6e9ef088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATW5CIC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2V5%2FnrtbOQ3kmxLtVwvluPZ0NSZjzeM6rjV0nHYma7AiBj%2FSS6Fzr8ZlZrVLnXOQl5%2FY88D09au0%2Br6PJ3oBZyHSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4KZrI7%2BUUbH41sTaKtwDa206DLhJz%2BoDkchncQbUQsOrMccTKAXdabbLRL0FvOVj2OrAobV0mcLpfrRDp3%2BXZccMvc7Kda9xJnNZPbCtjgxAFleu9M%2BTuPSGw9GRssysD65jKaTgcAQMNNozhXm39GSGc%2B1bsOiq6nH6aP4KJKxSVBMsADm8qrGHw%2FMq1L6atnXNkbw20u5sf4fA60Wtl593ramcLR13C8W5RHh9iudoNUDecrSQoFXQ%2Fil536nYrla75nkPee0o5rfJYeGluwHimocZLLePmbks41wOPSzUyMMCdfW0BxOxPFYPuyq4ZUX5MtDHiCYop5ep7iLmuJ7PdqDHy41PMBIk1Ba%2BSV0z7hhaywNdMpKwbPIpo2Nc9sAFby4KXLmruS6AdlyGGd7bFxAEWM%2F6uxbcMU9%2F2wH9pKXPyXhcZNzG1qqWB9m4s3nhuPGilyshyH2eTU2zbqQOvFB4Yo7km4BvY7ViVUW05u5rBuYyx%2BGtu5ow8LEU0le68%2F0yJcOpiirVP99h1u6WNWEfSaK%2FYYR2SnMcIK5K6GKdM%2Bp3KaqcS3MJd40XY33zar5RHfNv53mDbT1ZPoHlBRfX4qjTEltAehfwOz5bVHxVzkfweXkYGFK5B%2F8hc9BtfcBX3PfMCg4wrrSTwwY6pgEtssOXGVlaymC%2Fbiv5upzaXZmNFunuH9iw1pdN8XfuD3IZ3itlYf988oP3ZwTF6SFo9SEpc1Eny%2B0TZxlAfZa3KYmDCqdhbx585gh6%2BjJxk7PcPCtCkXM%2B3ciMNNyV2X4rzf6EKHsYHMr9ETJrk4gFsJhPFEZDeXWsDySWA3hJYarMlbQg6XjLP8FqvxMjg4s9sPxO0%2Bk1fQhkiWQBR6ajEa5ZZGdb&X-Amz-Signature=afd47bfb70e3e9150fab98f9170d72f473f966a3ac586576e6445bcb4d58c452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFU4BUXW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI251bL%2FRlQXRliqbPd%2B6A5bXSIeve5mONTusDIa8FMAiEArbTFC6jwnC4PIJLhU9CirsZ%2F5%2BIrbQbrI47HVW6iyagqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP34fdKj%2Bq%2BMKV%2BwCrcA3hMX0hQlwFUtJCvvZpvFhJRVYLrU14GsZMcGbN%2Br7nnJw2vpXbvsT8rLwa%2BKkOVkcDs6yonUHpsfi4M32lTIxqn%2FH3XGbE90H3tygSXwbln%2FHrBMpar8%2BgJ7rIkeihF%2B9hO%2BjNggLymPBuO1ZrKBxHvrqxoJvKHS0jm%2BOLJMHj9X7TyJmTyh5wrvmqsE%2FS4Bg4je3qKPLS8isOhfFLlXf94NbueY8xAHag8HQOAlQjHzVRbNBv4UdzgsnG%2BFzkflYX8fr6mcMoeIiRRGUu%2FSZOaWooXZaxHIl3GpUHnrMioEfUe48rdQzNFVdRb%2FBWsUtJKgenxXbvxUks9CeKzgc%2FjyQiMSXKE37gRQJPezof9yCjygq6qRTEfW2tmo9Meuhrji%2FPfhISbbpji%2FWKHOSG5xTChF3NT2kjuNtwSZrwZG%2BNv6Jl5GeSvZ4hLVl%2BXK4zTVBYSDo7zgTr%2FDQxvrVygHMcgx8EsFiLg8pY7hEC8pveWaS9J12%2B9jUkBIh%2Fs7or68lqjHNHFTPd6x58pRssZm0p03t0Yt3zqH8EVWIUjVaCmKnZAzr1O%2BVmrPiuC3CrOSu7On5IzwwXdRVibG60Klwmu6oMsVJWYk9QJtm3EXGpbwlY29SJantifMLK0k8MGOqUB90Z5QXWDvQKEl2bSrVGMleRMD21eoHqAWstu0LWCnUFeIRUigYZvTjVs0nRy4zvioFxa0Dw%2FBTe4%2FBWStPkXbAttUvZOOYx6Gv4c%2FmJRHmGgaemrf%2FK3UAaOy7CtDJbNc%2BUxt6%2FxnrAOU5%2BxdqBiDAcSC4AnXvmxAguvGLS5D%2BZDUcHEShFPM%2BMsVskF1DUIxuaU4oa7fnqV5bVg6KhcCn0%2B7oLZ&X-Amz-Signature=8b452aa35581d1f28a3f0887f1f42f59ac2ca13027f95a464d8b69637ef9dcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LAEVKU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKFfKATR00Y9xeP501VpxXp460TEygQ2xF9bw00dMflAiBCGxRyh4h56XSqOmkB%2FIjzbfT0tVVyDtwNLrnl6SUxNiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GGtYLVLkhzNWGvFKtwDtS3RpCrBd4haHAsk9fiWLpa%2B7NxmpemlSOpXs3ia%2B0Y5ZlLi4276jpolrYI%2FKWx1F9ZHuSx%2FCjE5G77Pfk%2F3pq1EzOTLZETYvDbNfZuQ7fTg%2F7k5HqK%2FqD0TRQOMMI%2BteMV27wSz8xfCbJSSSANmEnM34h7LZR%2FJgrCZNIxdKO%2FitnhkhLevKj4bNWrJ3wDoK3vMx0j%2F0MqJb%2FiFghR1k4Ls8%2F2SZhQa8gec9EpEz4w3uVDcQExsRdll6htH8CvsRnOHwsw4LTM13pWHTgTrnlNB3IeXbv%2BJfQvFCNCDZwa2MW8SJV9esHp5bW3aihxgq6SvJ60sUaFHITePWwpxvS0yMuZLmzQGacMjfbqbZG0H98v85mn4TDdlj21EAowmI9StjhaMYCcmep71kw%2FQQjXFh5i%2F6Q0JZVJkZQkCyxJRFxtu4z5%2Fbzik8vIZL8Qr27k2WbnPX9bobE3DZX0aKPWqwTWUXJjuSusTIRx06vjgbfJSazYY9HVvEa6l0dx01TJxFFr0VNGrLBIjbFFMzO4UTpF0FAZ%2B8yY%2FYyxISmlbfY7CJgjtw0pE2zuL1I4lPZFFIUQmtqlIIESUUXMq6I1xBeq3KrVm7I7b2c%2BEBrm5hodcaxqCOT1Xsz0wkLSTwwY6pgFRX10tufuXWmHjsgc9oq1Hf1cT6GIRuSdRfVDYD%2BI5xgHyn47i4cVM5YTSZv8Xuo0mGG9j29s8Psv3KvrgZzlBg90EX1GxaGZanpW2%2F180UNe7oeMfJwHZxOGZSHqOLX1HZ2c%2FkyF6CBxWLDW8ydhXPDADLS0P%2Fy9WuUYH4vvE1zrKZHeVep2sRqMbWMj8hMafjkAk5BdBMy7ILgWY%2B3P41EI6uogJ&X-Amz-Signature=bcd2e77389eccc36662bf637e4ae71a17c919ceabd16fdf767da3a8c80f93f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
