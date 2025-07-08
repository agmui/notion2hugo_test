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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTTYKT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFhr8VZaFeHfs%2BarSgREhxtH3wGCzM3V6P0lvwHJ0mzpAiAIsEmQntj6KGQyo0%2Bw8iLjJBNT8%2FFvuuh9OsxwYTB2ByqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNTKZJjKSHz25VzEKtwDW4XQ8EuIxjv0LTS0AHMdXdMgDAmpdHicJdjHPLApQ4Idg85BtkEc%2BCroeWakr4GV97YAwFts9iWuEEjoegAW5xp5knLOCuuotiLQUjLYMzAMz0qvBRxCmLUOO3KtbBU7UwhM%2BuUe5q1O1ktgCRyh4d7pWATykSzlKafO1e%2FPUf9VdDHg6ehosVr6ulH5mMAbEdqPdk2VNwRecC%2FLozQrUvANM0fBNdLjPKJecFkdnd47WgPZdoG5ESGGAOW7uA6UsLVT15lDIzosNSzUnwoU9D9Xh%2BP0xmt3Nd6CoGa1e7yc0%2B0OwrX%2Bh%2Bz0SyMCLWX5Lkrj6PByzMRldfC5rSQLGcZ3YKUYXxj8qyF4OL2bcO2Xx5fTHpCUpQfV2KsHnjiwCiNE0r46Z4SiaOIegnS6Cf55O0WKK3j7EJUC6%2B51LJab8JlQCjnm5lR24qDWOlawQOQUi%2BlkEjomhw8MyERAcXe1PBwP6TNCJ53FX5lheutpuecYQvxbWKeae1wdOl7HGGHi3xCyQM%2Ft0KMZFC02wpvUOxUUGKynZ1GTonPcDBlOsUO5LrHHRyDTSVxbhTYAJFU5DjK5bym8xRBwjt1SYHnIonyuOX%2F%2F2DesHg7A%2BY3cNJcNCjQ7FwHtOmsw%2FYOywwY6pgGgycvzLapCnOsmuw3Sb15fnuCz5HI7eiZ3jrl0sD%2FzAC5b1qwrUh9fv3kdeMIABAfkVCHVdBlClcV1ldco2gWmSS2i2UccntsnWddW8Ny%2FNxo9rAxagBnhYMPF8L9dg1UeuLlQVyQHt%2BYhUMyi47l6fBbzeE5nsLYLrT0O7MvVDUoklV1OB2X5WeslOC%2FQ%2BIJS23qovYBzK3FxxlPHyPvkY5JJeqOC&X-Amz-Signature=8c0a9adc37a7fab790e31fe2e57cd0bf20df319e8b221802360487c4b877300f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTTYKT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFhr8VZaFeHfs%2BarSgREhxtH3wGCzM3V6P0lvwHJ0mzpAiAIsEmQntj6KGQyo0%2Bw8iLjJBNT8%2FFvuuh9OsxwYTB2ByqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNTKZJjKSHz25VzEKtwDW4XQ8EuIxjv0LTS0AHMdXdMgDAmpdHicJdjHPLApQ4Idg85BtkEc%2BCroeWakr4GV97YAwFts9iWuEEjoegAW5xp5knLOCuuotiLQUjLYMzAMz0qvBRxCmLUOO3KtbBU7UwhM%2BuUe5q1O1ktgCRyh4d7pWATykSzlKafO1e%2FPUf9VdDHg6ehosVr6ulH5mMAbEdqPdk2VNwRecC%2FLozQrUvANM0fBNdLjPKJecFkdnd47WgPZdoG5ESGGAOW7uA6UsLVT15lDIzosNSzUnwoU9D9Xh%2BP0xmt3Nd6CoGa1e7yc0%2B0OwrX%2Bh%2Bz0SyMCLWX5Lkrj6PByzMRldfC5rSQLGcZ3YKUYXxj8qyF4OL2bcO2Xx5fTHpCUpQfV2KsHnjiwCiNE0r46Z4SiaOIegnS6Cf55O0WKK3j7EJUC6%2B51LJab8JlQCjnm5lR24qDWOlawQOQUi%2BlkEjomhw8MyERAcXe1PBwP6TNCJ53FX5lheutpuecYQvxbWKeae1wdOl7HGGHi3xCyQM%2Ft0KMZFC02wpvUOxUUGKynZ1GTonPcDBlOsUO5LrHHRyDTSVxbhTYAJFU5DjK5bym8xRBwjt1SYHnIonyuOX%2F%2F2DesHg7A%2BY3cNJcNCjQ7FwHtOmsw%2FYOywwY6pgGgycvzLapCnOsmuw3Sb15fnuCz5HI7eiZ3jrl0sD%2FzAC5b1qwrUh9fv3kdeMIABAfkVCHVdBlClcV1ldco2gWmSS2i2UccntsnWddW8Ny%2FNxo9rAxagBnhYMPF8L9dg1UeuLlQVyQHt%2BYhUMyi47l6fBbzeE5nsLYLrT0O7MvVDUoklV1OB2X5WeslOC%2FQ%2BIJS23qovYBzK3FxxlPHyPvkY5JJeqOC&X-Amz-Signature=4d8521fc94a0059469f9d9082a58896434a5685ef422f5497074512051c83572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTTYKT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFhr8VZaFeHfs%2BarSgREhxtH3wGCzM3V6P0lvwHJ0mzpAiAIsEmQntj6KGQyo0%2Bw8iLjJBNT8%2FFvuuh9OsxwYTB2ByqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNTKZJjKSHz25VzEKtwDW4XQ8EuIxjv0LTS0AHMdXdMgDAmpdHicJdjHPLApQ4Idg85BtkEc%2BCroeWakr4GV97YAwFts9iWuEEjoegAW5xp5knLOCuuotiLQUjLYMzAMz0qvBRxCmLUOO3KtbBU7UwhM%2BuUe5q1O1ktgCRyh4d7pWATykSzlKafO1e%2FPUf9VdDHg6ehosVr6ulH5mMAbEdqPdk2VNwRecC%2FLozQrUvANM0fBNdLjPKJecFkdnd47WgPZdoG5ESGGAOW7uA6UsLVT15lDIzosNSzUnwoU9D9Xh%2BP0xmt3Nd6CoGa1e7yc0%2B0OwrX%2Bh%2Bz0SyMCLWX5Lkrj6PByzMRldfC5rSQLGcZ3YKUYXxj8qyF4OL2bcO2Xx5fTHpCUpQfV2KsHnjiwCiNE0r46Z4SiaOIegnS6Cf55O0WKK3j7EJUC6%2B51LJab8JlQCjnm5lR24qDWOlawQOQUi%2BlkEjomhw8MyERAcXe1PBwP6TNCJ53FX5lheutpuecYQvxbWKeae1wdOl7HGGHi3xCyQM%2Ft0KMZFC02wpvUOxUUGKynZ1GTonPcDBlOsUO5LrHHRyDTSVxbhTYAJFU5DjK5bym8xRBwjt1SYHnIonyuOX%2F%2F2DesHg7A%2BY3cNJcNCjQ7FwHtOmsw%2FYOywwY6pgGgycvzLapCnOsmuw3Sb15fnuCz5HI7eiZ3jrl0sD%2FzAC5b1qwrUh9fv3kdeMIABAfkVCHVdBlClcV1ldco2gWmSS2i2UccntsnWddW8Ny%2FNxo9rAxagBnhYMPF8L9dg1UeuLlQVyQHt%2BYhUMyi47l6fBbzeE5nsLYLrT0O7MvVDUoklV1OB2X5WeslOC%2FQ%2BIJS23qovYBzK3FxxlPHyPvkY5JJeqOC&X-Amz-Signature=21e2c6cffd6a7bd2cd33dcaf10a4b378acf35f4af3b282cc6ce30165ade0ab28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUQDNUO%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCn2oEdYOZkQVH2kP6wI4N0ZEh4p5%2FGJ18hfW%2BYWchgPQIgXlcWgLEntDbz8132%2B4XuphiD48oe0gxTYvNoY8%2Bprv4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXXCC5WSedJVReMmCrcAwrc4dDN7Aqj8Ad9CCCWvWRV41cvghgXTvQ4HP94p%2FSK142huSI7lqu7ed5dWkHQ2rLJM5KgZjVLE23ALYYStBVR21G36R68FCo2QtUxwpU4MD60zMH5Y5F1pCNroCj7exww9sIp%2B0J21aAGXsqnT7ynNSLj%2FTs8TDZRs3p%2Fv1OjX7Pu5BE4aWgjhjUca57bWdSNX7IsvZPUtKI%2Bn4rnnpdAlcj%2Fokqe6YGQ%2BjXZOxmqlRlrHkECDFWld4q8HTnzEdHUzNHdCFIQrWFkFdUaxCHb%2FGC5yrR3m9qAcYxa05dmIDCiQWv4htJqN8K5eVQNpDXnauWtzwHH660LrNuQLVgggj16P94us3womIod5iTW1DiR7PQuApgzSD6PzYg2OQh9J%2F3SvUvJCe3CgdWit8eTdFKCnuHJT%2B5GZuOvjLCyc%2FOp2SB3NP%2FkoiL6WhyFSSa7ehIWHsKLl4gF4nNAhJtrKAGdgnofFmRXWtpsLt%2BmRol%2FBy6mWD%2FuCQuzMfgCb7eujedu58UBpjIu3ZjBJinzja6MECbAIe%2FP%2FiA9gAX%2BmATZpQKh5wQUjl6EYPe33ZKic5NPi5DloBbJR%2F%2F0VtubOv88xo9R2JWUdfnzMxqORs9vdCoNN06wqgNhMMqEssMGOqUBdLK%2BU9Ff1tP4EG1Dg3UNSoxi07D%2B%2BI1kCq3czX5ZtNtQ9q%2Brs8R5jWlPWmjU0vtnpPUsPiX9lHIxJBIIurhO5xoNMIx9Ci45nGl3b5ebDGPAU9mGuZVdAWNd%2BreibenFhqaCyhykLPFgr6bbTC5zQfYEj9OLjqNZc5o1c2Rpya611VzneRLv8v9g5tDyTX9alVNlSjin6Tof0BfFb2aVeRkb7EIj&X-Amz-Signature=f1673e22d44ebe4c2df314463fb322f18dc7d7a8a7da0bec9876c6fc6195f808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEH66SJ7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIF%2FYFHLvk1WSnA9VZQ80Qdg18EVp1nXw3HBqCmUgzuv2AiEAtSzyRaOoXEnSAqQDfvWsLPZ3EoIP07lYtibjxMPvJkEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFDiWPIZbDaFkuqjCrcAwOePDvqAh6IRHy%2Bv6lzUTCoLQzXRyFbV35oqEzEP0Hz%2F7eCT0%2FIhmcdpvHPl93wWA1ElQtlLw%2FU4GkGbAyC%2Fl0FZN%2FHZY3k%2F%2FiywHbMImwD9%2BasG1U5cnPwiGsxDXLEGFml5%2Bw81%2B%2F4tgFdZJuMmYIF98OwrwtHcHQsRzWk0nJmvcaA04uy88oJwT18yUICwIif5Mb8%2B1FnEKZMRJP0mp3hAT%2BE3abjYi41mpFe5yF2r9%2BWULLsDC9myHOvJBx%2FZW3MKWNNslplJCkpCpidYLbQpZSP5p4k7hEQ2DY3EiEaqHppcsR8GAO11ySjJiWfvEDIe4Ldpi8HXKI2%2FR5QdydyCwPC2CxJnaJAg1jQ95cUhsa6jfDiwX3vRWgmHUoqxA6A%2BApMlsdncnye9IdTh9iYeQsYmAcJ6BX2TWHs7aiFqSLih2Y6gPyzrHtduJt2Xs82lGpYbpCsjqtnlnfCiXZZTLV5Nziv961doG1EpnmmAp5f2DBU1Hi38%2FpLUXAS%2BlOv1%2BGBGv449zJ8J98dUd1%2BCr3OWhgtZ2jlh8wcQ2zvrwWPG2Pok3EJ1RurnyBdSpeUaKtLSuqXkbLuLfxB6PVJlL005cYot0djXGT3zE4c%2B2S9p9lOWP8y1l7rMKWDssMGOqUBq3QhG8WRo1%2F9WMe6W3bT0oTbERtl6Lk7D6fRyranXtlfGMuts3cPOjwpGW4JcMRHoNOKG2KrqRYB4AOrIho2uCpQWXPmr1lbdWcUrghi9jgrRqLNSBNCkYWf9xlMXeF1zAndsPk5C3R8npMCqL8Q9yxwU1Ccx%2Fza6GDiXgkAfeLRBj90yjSb0JlfkE97F9iGYt%2FJFqT7p1rIpXT0vc8%2FvFG6GBRF&X-Amz-Signature=cab017de0d77dc144c28596c7764fbbd66b2bc20dede0965329973976034e906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTTYKT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFhr8VZaFeHfs%2BarSgREhxtH3wGCzM3V6P0lvwHJ0mzpAiAIsEmQntj6KGQyo0%2Bw8iLjJBNT8%2FFvuuh9OsxwYTB2ByqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNTKZJjKSHz25VzEKtwDW4XQ8EuIxjv0LTS0AHMdXdMgDAmpdHicJdjHPLApQ4Idg85BtkEc%2BCroeWakr4GV97YAwFts9iWuEEjoegAW5xp5knLOCuuotiLQUjLYMzAMz0qvBRxCmLUOO3KtbBU7UwhM%2BuUe5q1O1ktgCRyh4d7pWATykSzlKafO1e%2FPUf9VdDHg6ehosVr6ulH5mMAbEdqPdk2VNwRecC%2FLozQrUvANM0fBNdLjPKJecFkdnd47WgPZdoG5ESGGAOW7uA6UsLVT15lDIzosNSzUnwoU9D9Xh%2BP0xmt3Nd6CoGa1e7yc0%2B0OwrX%2Bh%2Bz0SyMCLWX5Lkrj6PByzMRldfC5rSQLGcZ3YKUYXxj8qyF4OL2bcO2Xx5fTHpCUpQfV2KsHnjiwCiNE0r46Z4SiaOIegnS6Cf55O0WKK3j7EJUC6%2B51LJab8JlQCjnm5lR24qDWOlawQOQUi%2BlkEjomhw8MyERAcXe1PBwP6TNCJ53FX5lheutpuecYQvxbWKeae1wdOl7HGGHi3xCyQM%2Ft0KMZFC02wpvUOxUUGKynZ1GTonPcDBlOsUO5LrHHRyDTSVxbhTYAJFU5DjK5bym8xRBwjt1SYHnIonyuOX%2F%2F2DesHg7A%2BY3cNJcNCjQ7FwHtOmsw%2FYOywwY6pgGgycvzLapCnOsmuw3Sb15fnuCz5HI7eiZ3jrl0sD%2FzAC5b1qwrUh9fv3kdeMIABAfkVCHVdBlClcV1ldco2gWmSS2i2UccntsnWddW8Ny%2FNxo9rAxagBnhYMPF8L9dg1UeuLlQVyQHt%2BYhUMyi47l6fBbzeE5nsLYLrT0O7MvVDUoklV1OB2X5WeslOC%2FQ%2BIJS23qovYBzK3FxxlPHyPvkY5JJeqOC&X-Amz-Signature=eb32fba0d00ff6f7b2ccd8fa612656216e9b0b747fb87de2e742ae1139c1f6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
