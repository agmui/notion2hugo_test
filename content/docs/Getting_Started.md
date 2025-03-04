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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4IO34C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7CT1kN9RLbImzFM5SWeFgI9kP6XboLNj1VuBTM0pE2AiAVV3wy5O0KTdqjGAuqVJhiqmQd9kbeAtYyEmwzOVTUeSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qHTAZQx3yI6LWU1KtwDwGJp1srjHDHwOEIVX7K9JQ0FOqWS%2FjtTFDJAREDDZ9N5Kj5hBhsmC8fS%2BUIPodaSmmSKc5g94rU98R%2FJxSfBUa2xMbssG4zVI4rGXxPWWChBQkH6v47uSorpjMNvQbDhMYEjEjeYL2ruOFUM1F6ODs2O0oHBwFoalJHJiGWIgCmtcjZvRBWh40s3fByJYYuZWiuyiNxoH79%2BDsqIbJGjo38pVz346f5aYZkCNkt2le3HyV4BDgF4QD8QNoAxeDsiYQVWe2VGc1MlYixP7E6a2XY5WKZRSyV8DGXcuohqzf8RIanLwC9EE5q1TqL0nTBrWay9dWzB1IxDtceTvzwdFI0OGRH3%2Buvl%2Bxq3w%2B%2B5SAnMg4cjmCg2EsXnG5r1Zrpi4OAp%2BedtloekG8zPMguPZ63iUqznDpNmNIf7XX2lXf9B2vIHK3aDzgtJ%2FibTkjF1jHjgHUhIx3z2pwtHhOZHbWYZ0W802skyk0QaXOqPMAqkKMSNV7bfH5Xp3g2WJT57EW8ng5VkvO6oNcDW0CaEdtBmoYpyON9llAT2H%2FTiU4kaviQAJTc0fjm3KOGsN%2FIsV%2B6yRBLWp6pMWt4xNokfzRacddAxq7krssr1cQIZdz2OE2VS%2BgvBsqFk%2Bb8wrembvgY6pgGSgaSO7Cv3bxRV83yj9b6VfzuXQuc%2FHScEM09IiRDq06snfCNyHLEOdbPfVOUl2tk8%2BxZvvCbIx%2BC0mqiM7965r8HByDzEGQ8NFRWAvBnt5HPC36QTlz5NsPkZFdrYxdlkVArLQJaKDVRrlb86QKcYa2Fvodu8s0SsSTmdGmzgYNYkqMAMcT5nFwDZfzr0TDvyrXjX73rcnOypRL35o7rEP351oveg&X-Amz-Signature=04094673dd8b7340a1c5c467e94b34bb8e0884f956e7cd7dd0e8e6889136ead2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4IO34C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7CT1kN9RLbImzFM5SWeFgI9kP6XboLNj1VuBTM0pE2AiAVV3wy5O0KTdqjGAuqVJhiqmQd9kbeAtYyEmwzOVTUeSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qHTAZQx3yI6LWU1KtwDwGJp1srjHDHwOEIVX7K9JQ0FOqWS%2FjtTFDJAREDDZ9N5Kj5hBhsmC8fS%2BUIPodaSmmSKc5g94rU98R%2FJxSfBUa2xMbssG4zVI4rGXxPWWChBQkH6v47uSorpjMNvQbDhMYEjEjeYL2ruOFUM1F6ODs2O0oHBwFoalJHJiGWIgCmtcjZvRBWh40s3fByJYYuZWiuyiNxoH79%2BDsqIbJGjo38pVz346f5aYZkCNkt2le3HyV4BDgF4QD8QNoAxeDsiYQVWe2VGc1MlYixP7E6a2XY5WKZRSyV8DGXcuohqzf8RIanLwC9EE5q1TqL0nTBrWay9dWzB1IxDtceTvzwdFI0OGRH3%2Buvl%2Bxq3w%2B%2B5SAnMg4cjmCg2EsXnG5r1Zrpi4OAp%2BedtloekG8zPMguPZ63iUqznDpNmNIf7XX2lXf9B2vIHK3aDzgtJ%2FibTkjF1jHjgHUhIx3z2pwtHhOZHbWYZ0W802skyk0QaXOqPMAqkKMSNV7bfH5Xp3g2WJT57EW8ng5VkvO6oNcDW0CaEdtBmoYpyON9llAT2H%2FTiU4kaviQAJTc0fjm3KOGsN%2FIsV%2B6yRBLWp6pMWt4xNokfzRacddAxq7krssr1cQIZdz2OE2VS%2BgvBsqFk%2Bb8wrembvgY6pgGSgaSO7Cv3bxRV83yj9b6VfzuXQuc%2FHScEM09IiRDq06snfCNyHLEOdbPfVOUl2tk8%2BxZvvCbIx%2BC0mqiM7965r8HByDzEGQ8NFRWAvBnt5HPC36QTlz5NsPkZFdrYxdlkVArLQJaKDVRrlb86QKcYa2Fvodu8s0SsSTmdGmzgYNYkqMAMcT5nFwDZfzr0TDvyrXjX73rcnOypRL35o7rEP351oveg&X-Amz-Signature=8515ec607d06fd72441afba960814bc66507d39c27f85e542237f7b0e7438766&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAIKH4QY%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO6liA2Fs%2FkRZJI7EBxLiXYYmcNdL9yMAevSl2aSJS8AiApbaYy%2BLJo1MCubxOHQmUTUoWWkSlH2FT98JDU0%2FUzUiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMniE2G6WkWAm8wshRKtwDTslcmn3naWnVoPPVzlaiB3z5omGbtdUwZ3S2XapLrMidVNm7Nbtg%2BE8f7kWUF%2FzT7HnumLTfxoCDFxD214osNrPBCk2G51wombbpcr4xoelXFq3UKJ4dBdPYOEGVsqGpGfcESsnlA02gFyBoeiPpTkbP97VTwSvXumdFyc4aPgdobLcv2%2FWk%2F5YIe1hzulGtz8IhGzW3A9Lwpu%2FMAQ30%2BrGSB4Y2pmzVkpM5vtzSuhvc19Dn40zfOE8z1HZTajRaWQMvrrd%2F0HgMuoAwi3ptqsZ3OBpT8szvS6J8%2Bhu1bWJ6rLdKbPHtrvBM%2FGHPuphgcq%2FXbYzVN6%2FHP8aXr7hEZeujYvNLFIWUXXv36vKz8wog5n2opq6KhKjRgjt%2BfuYBArrcECBEkBhpLw%2FDTdgDjaEvx6EM%2BvGgvucqo4bURyWbOOxqZohKNAMXQ175qFXcoNbYoQCzOxzy%2Fgr5cPJsLVQC6QGuSK9FRKh%2FWXqMdtEQyPw2Hno8oLupDLVEBYuyZuo5GFHhSWfx5cfs22wbeOQei4NBS22ZIAVoLlZBsvEexlApHXZTwH%2BT54ZzIyIwYzX0wwj4i3hzcOLoHmN7DCkavwjHlhY%2F6iYxt8wkCwzdEvXJY%2BaUhGA5gQMwsOmbvgY6pgF8BbsBKHC9tF00frJCbXb4i8m2DyDH3JDns1quxdgGGPvMPdTy%2FwgBs5cToZBwsYCOO7n6NrgIQGFtrzMO%2BKevjEnqEZhDL07UMloZdI6WSVC1SWMDyjLhDJGR5wiftsvbIX%2BniIxhOW878iEZ7c36GQnpHgMG8t0pfNpVbJUubo4%2Fu2es%2F2X%2FsRgelIg%2Bi6MXCkYnUph1l9TjD8KhkzCMz4yG2uKQ&X-Amz-Signature=5bebdd5f2826609be7236dcf134b2d92a34933c02b08471c6553f95657f4b3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSB3KNT6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3BAokWugNY0N853TeZciWMRHunAiqD81yOSUdIKA9AiEA%2FRjsgJGC4B6lIPfZusPzFijl2RB5UhIZuct3crh6l%2B4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdhTFpqoZFTfoVYOircA0W4IxcLTYg3CcBzz5omf8SizQu6SjbhvLXxaZuBW3wuM9QFRdmul2KRuULw7wCbikpxXlNsh1AMgTXoaotA1ZS%2BndmArF4oVoJD3T6jseYiIRQ4Mtnj7DIewNTEavOmVUWgDOFwcjRXReiE3DSkE4ZFfjoBoPudUh4SUJTRXGrAucjevPgH4XXn6sbRiX6Kvl1YgcewzfgOgqCatdURPMmJRiF6mZ26KCEoCj1ThMfaiMJinNThKraeVOxoMPiMFwqvrg3j8nrqA5Tu5ZRrBAYYmkm211Ef2Emyej0NHZA94Me8FZyPBc1ap4JIXeJL%2BKhIPR%2B9etyeddbunULBsa%2F8piUVhiVtk76N5espOMqpLPxKrh%2FcOSKpPJscoHntQY%2FGOnZ7EXsYJuO4wYTIxX%2B7yk9NToucggcy9nM9wZZ4%2FN0zxqMLMfEUoO8voyb5DMFmkAktANGiE8nexr3Yx3iy4TROnpZdPvWP2FRz5Wm0vFumLxF1FsAYv0NiepclWvkcU1fH060XGa7LEChORsQdOEZKfo%2FknasT%2FhmfBnVkaxHsuiiAhfVFQFFFItoa3zoIt192jnW0JkyMWb7ZQz6Tp%2F1r4sxLFaFnDIPidoI73pkILTISruCh8MePMJHqm74GOqUBvQD9pblQXlNCjUaxBIbIQOdimA9Y86eEgnfW39LBID%2BxGM%2FGovHCTwejxS2YG2IKBV5yoFc6t%2FCEd6o859jekCEOgsNkwmByda%2BAvxuPkOERVHQfu3fOkFK0QG7TmceymrJat04%2BQV2MysgN4fDb%2F1%2BLC%2FIf41WuTpZiNOYKfuPytHkBYpVPzFG4S8%2FD4D25yjgwhyOF1qNsf4AbBGtrBhi74yJ4&X-Amz-Signature=381b843e40084ed98174e2b36013f34a2d1f4bd3cb8477e6dda950872177045d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4IO34C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7CT1kN9RLbImzFM5SWeFgI9kP6XboLNj1VuBTM0pE2AiAVV3wy5O0KTdqjGAuqVJhiqmQd9kbeAtYyEmwzOVTUeSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qHTAZQx3yI6LWU1KtwDwGJp1srjHDHwOEIVX7K9JQ0FOqWS%2FjtTFDJAREDDZ9N5Kj5hBhsmC8fS%2BUIPodaSmmSKc5g94rU98R%2FJxSfBUa2xMbssG4zVI4rGXxPWWChBQkH6v47uSorpjMNvQbDhMYEjEjeYL2ruOFUM1F6ODs2O0oHBwFoalJHJiGWIgCmtcjZvRBWh40s3fByJYYuZWiuyiNxoH79%2BDsqIbJGjo38pVz346f5aYZkCNkt2le3HyV4BDgF4QD8QNoAxeDsiYQVWe2VGc1MlYixP7E6a2XY5WKZRSyV8DGXcuohqzf8RIanLwC9EE5q1TqL0nTBrWay9dWzB1IxDtceTvzwdFI0OGRH3%2Buvl%2Bxq3w%2B%2B5SAnMg4cjmCg2EsXnG5r1Zrpi4OAp%2BedtloekG8zPMguPZ63iUqznDpNmNIf7XX2lXf9B2vIHK3aDzgtJ%2FibTkjF1jHjgHUhIx3z2pwtHhOZHbWYZ0W802skyk0QaXOqPMAqkKMSNV7bfH5Xp3g2WJT57EW8ng5VkvO6oNcDW0CaEdtBmoYpyON9llAT2H%2FTiU4kaviQAJTc0fjm3KOGsN%2FIsV%2B6yRBLWp6pMWt4xNokfzRacddAxq7krssr1cQIZdz2OE2VS%2BgvBsqFk%2Bb8wrembvgY6pgGSgaSO7Cv3bxRV83yj9b6VfzuXQuc%2FHScEM09IiRDq06snfCNyHLEOdbPfVOUl2tk8%2BxZvvCbIx%2BC0mqiM7965r8HByDzEGQ8NFRWAvBnt5HPC36QTlz5NsPkZFdrYxdlkVArLQJaKDVRrlb86QKcYa2Fvodu8s0SsSTmdGmzgYNYkqMAMcT5nFwDZfzr0TDvyrXjX73rcnOypRL35o7rEP351oveg&X-Amz-Signature=03b9655a9ba3920b1e02abd09e3b693a7dfda648402da20c352472b13f8b3f14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
