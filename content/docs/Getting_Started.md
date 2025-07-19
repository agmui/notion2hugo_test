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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJTPGZ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgdZ%2FuhsniAxcWorHgasmAJb2DLRYs5XNCecbeAdg%2BxAiEA4cm0QmrLXtc7x6YS8I%2BBHLnGN2PgBB3yNYbpBGXE6tcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj7zOKPdFrKOfhGEyrcA5lG5uVe32lW7T3H1dDmiTkKWkKr3Yynim1u1m0OxbTeyEBILK1ybPV8I5pClYKXNr56j4okVM%2FHtd2bSHz51Yq5GKwAg1JfS0i5aPn4YS4JBz3DLoi8T7MPDlBXmACplZ9sqi8Bsfii4DWQYruQORHSzlTHHRCfnibF5f07eKjVoPpnoiCzCe1SfxdQtNZC6acRd%2FOfxVWp%2F6Vrt23f6LSO7q0vdElcRzl31xv1UMf1lUFylMYR%2BMiBxcXex9vRLAyZWeKEGKpckkIusTKH2cm7BboeNkLYu13MbmSA4%2BTSxzNL0MvOqTxMiTi%2B392tivSN%2FdgHeI%2Bm1Gde4%2B7zstYf4qlZi7bjjt%2FCq4zsWrMl%2BF2nCQyerNPNUtzzLSs0RggK34Pzhw%2BneOiaytDq5eMU9VfmlKPhQE3DpdIkdQxRI9xnIv3XdhZR3UAbMj%2FOGRpxNvWPnL99jAT4SmF0bfCCG4RpseUPBLpru8vCofymJDkeE%2B4jZZWxedcSsKfnR3eU2juAIyHufT5h12P9sXD%2Fj71D9S9H%2BEyz%2FG8Zbeb6PbgEC2349haShPOeHZiqEbfBJimolj0sYFptIJ4ioen%2F9Df91iisvCxyA3jIsb8slNPVCKrhcxfDH%2F9uMIeh7MMGOqUBmNgajyvlXCTT5fqphN2S2YELJJ5lKmk%2FRzD%2BJ1Wn5IZgQC3dHEWkjtIYhbqqHXZe9WA9l80vB1MjvmMPJvrgw%2FBQXLcCeh8Z9y4YJPhDf028GLzYV3smq47u6sV8KJ1ckOuORGnuhUAAo9A2iptcWwXpy0EqFMcN5R4qUat80eYLmp9lXhg6G%2FqjA58L6DBv570oCnCIDBcBV0IulGCRGbmN5yNX&X-Amz-Signature=bf4294f9bde6a8f5302e08135e3912ccffa5e27a3e68a449f682f9ce748cde60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJTPGZ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgdZ%2FuhsniAxcWorHgasmAJb2DLRYs5XNCecbeAdg%2BxAiEA4cm0QmrLXtc7x6YS8I%2BBHLnGN2PgBB3yNYbpBGXE6tcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj7zOKPdFrKOfhGEyrcA5lG5uVe32lW7T3H1dDmiTkKWkKr3Yynim1u1m0OxbTeyEBILK1ybPV8I5pClYKXNr56j4okVM%2FHtd2bSHz51Yq5GKwAg1JfS0i5aPn4YS4JBz3DLoi8T7MPDlBXmACplZ9sqi8Bsfii4DWQYruQORHSzlTHHRCfnibF5f07eKjVoPpnoiCzCe1SfxdQtNZC6acRd%2FOfxVWp%2F6Vrt23f6LSO7q0vdElcRzl31xv1UMf1lUFylMYR%2BMiBxcXex9vRLAyZWeKEGKpckkIusTKH2cm7BboeNkLYu13MbmSA4%2BTSxzNL0MvOqTxMiTi%2B392tivSN%2FdgHeI%2Bm1Gde4%2B7zstYf4qlZi7bjjt%2FCq4zsWrMl%2BF2nCQyerNPNUtzzLSs0RggK34Pzhw%2BneOiaytDq5eMU9VfmlKPhQE3DpdIkdQxRI9xnIv3XdhZR3UAbMj%2FOGRpxNvWPnL99jAT4SmF0bfCCG4RpseUPBLpru8vCofymJDkeE%2B4jZZWxedcSsKfnR3eU2juAIyHufT5h12P9sXD%2Fj71D9S9H%2BEyz%2FG8Zbeb6PbgEC2349haShPOeHZiqEbfBJimolj0sYFptIJ4ioen%2F9Df91iisvCxyA3jIsb8slNPVCKrhcxfDH%2F9uMIeh7MMGOqUBmNgajyvlXCTT5fqphN2S2YELJJ5lKmk%2FRzD%2BJ1Wn5IZgQC3dHEWkjtIYhbqqHXZe9WA9l80vB1MjvmMPJvrgw%2FBQXLcCeh8Z9y4YJPhDf028GLzYV3smq47u6sV8KJ1ckOuORGnuhUAAo9A2iptcWwXpy0EqFMcN5R4qUat80eYLmp9lXhg6G%2FqjA58L6DBv570oCnCIDBcBV0IulGCRGbmN5yNX&X-Amz-Signature=b5d83faac61aa5626c80f45e9d1441b348d23968a4be256c7b5ea1244591afa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJTPGZ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgdZ%2FuhsniAxcWorHgasmAJb2DLRYs5XNCecbeAdg%2BxAiEA4cm0QmrLXtc7x6YS8I%2BBHLnGN2PgBB3yNYbpBGXE6tcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj7zOKPdFrKOfhGEyrcA5lG5uVe32lW7T3H1dDmiTkKWkKr3Yynim1u1m0OxbTeyEBILK1ybPV8I5pClYKXNr56j4okVM%2FHtd2bSHz51Yq5GKwAg1JfS0i5aPn4YS4JBz3DLoi8T7MPDlBXmACplZ9sqi8Bsfii4DWQYruQORHSzlTHHRCfnibF5f07eKjVoPpnoiCzCe1SfxdQtNZC6acRd%2FOfxVWp%2F6Vrt23f6LSO7q0vdElcRzl31xv1UMf1lUFylMYR%2BMiBxcXex9vRLAyZWeKEGKpckkIusTKH2cm7BboeNkLYu13MbmSA4%2BTSxzNL0MvOqTxMiTi%2B392tivSN%2FdgHeI%2Bm1Gde4%2B7zstYf4qlZi7bjjt%2FCq4zsWrMl%2BF2nCQyerNPNUtzzLSs0RggK34Pzhw%2BneOiaytDq5eMU9VfmlKPhQE3DpdIkdQxRI9xnIv3XdhZR3UAbMj%2FOGRpxNvWPnL99jAT4SmF0bfCCG4RpseUPBLpru8vCofymJDkeE%2B4jZZWxedcSsKfnR3eU2juAIyHufT5h12P9sXD%2Fj71D9S9H%2BEyz%2FG8Zbeb6PbgEC2349haShPOeHZiqEbfBJimolj0sYFptIJ4ioen%2F9Df91iisvCxyA3jIsb8slNPVCKrhcxfDH%2F9uMIeh7MMGOqUBmNgajyvlXCTT5fqphN2S2YELJJ5lKmk%2FRzD%2BJ1Wn5IZgQC3dHEWkjtIYhbqqHXZe9WA9l80vB1MjvmMPJvrgw%2FBQXLcCeh8Z9y4YJPhDf028GLzYV3smq47u6sV8KJ1ckOuORGnuhUAAo9A2iptcWwXpy0EqFMcN5R4qUat80eYLmp9lXhg6G%2FqjA58L6DBv570oCnCIDBcBV0IulGCRGbmN5yNX&X-Amz-Signature=be715d34788c43765c17e85d2ab71458e10058eb4406e5980fbff9852e0597bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAIK6S%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExYFyyfHuEgduyXzvVPaIiGk14UmBb7Vghpx%2BXWhndWAiBoBee%2BItU4mVNKuB9W225Kntmq9sgeyx2NJemMJNSDgiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgMAw40Krq3cN%2BN1tKtwDqAIwsvF0Yus6v95TroKg4v67PkaRM3ZGOcJLCY3a%2Fbo8eGBcynXUBPTylHc5osawL6NQTm9tq74C5jLy1bVsNBX13oLwSBkxiEzXfrzT0q6w10cfehMfyx%2Bsdp%2BIvXwx%2B8nnl1hbKMAb0CVDuj%2Bo6HA7GQKOJ5%2FtYr6Yp6%2BtGNz7NTF1KNziu%2FOPHtuJGO9HTqIHpTGlpjqY%2FvJaRCEnVG3SoMdhD4%2BIxz39dp4UH2UCnl1aPb5KOShhSHYVrF2YrGrOjcAuGPahfJOH5DLlTJ9rs74jWGf3uOPMeKA7bXrV0AfewebwJRYKkXN1TksLQaJH%2Fa%2BTiWkARjqZvF7CDlpvQQ5bLO8dhco9z%2B1SRP%2BVAXn42J7Hr1mbiqSIQTFWkC1dsJnSEHMqe85uv5GjJ7JsBvdRTbm3UpCKOOb%2BuUUi7NjQhsy9LLk6fGzWGG0lDo7QkGMZYo5%2FpcgVeq1A0ljT1Hh21oCzJC3%2Bfm6PcxvlyMlh77Ema7NNpPoVLv6zOi6HnnWyMhjbh5ex7sBRfJdnHwzoHD63VOY7539w7jqQTi8zySvKG%2FZAF3J2CyeAXyirv8DTpN59EteicOKZScb7yDMBYHh%2FmTSzt5YONutYNc3oCix5%2FoL%2F8VEw06DswwY6pgFCcAvTJaae5eOWm%2BG1NUqIabKA6cXD9na0TiaSH2FD0Mtb4faDWyXCSqyZ8DpeWd0rH84yfG5IutN5EF419tD5n7R%2BQ2YoabbdsA829eaXYt4Ab791JnbHuSNyWGnNu0aHTFcylRoVi88%2BgQBWSLqQ5r2DEvqQzVy%2Fk3E5KnJCO0A%2BlTSeWIZq8kYyFIy3Anj0zPt%2BbEPOBbUX%2FvIDWCkH40D2XAmV&X-Amz-Signature=f9009cc3c16b65502627880d2e4bfcd99585ea574753559f9d2f52847fcb615d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZW7VCL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESODF59sXepR%2BeNxi6YeuVYuEGDiFQ0WIREAbI%2FOysKAiEAwvUDMnCEdWekJM9V39UWhxoTnQunaPid7ke0WLmIZKQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGIVBTpJg144%2BmSfCrcA%2BHErkVjLXq1Vy04Nc05AdE2Zb%2Bc9NTVh6f%2B1kVnUp12RCTOT819K3i%2Fwy50SQ2ubtzrX11Igw9rLT7k01QVpmq1KSvrldLUgCvB%2BddDNk2vHGcSIWEv6S%2Be%2FLARk5qHytaEQBzemJmgayetvYHOffJzKXhcxTuBe4g47FLojV1dpRjkKTrx5xRiamRUdrduLBrQaVgfI%2Bm7IZFIImTpAYIu1%2FP5zqj1HcfITTBh9LApv6S2UIl4yueryUm3b02BYFid2HPJ%2Bl%2BhSopF%2BwufslcNe1yqZYMIADMfVMeoik%2F%2FpKkfFHzZTWfxdPGh0DzfxzRidixv%2FqmYbUU13otqZI1OAp1FVG%2BCOpDzeAlKsnxh26eWb6DQAa5ZnLPBTpNCCgqd8iYLVuHolWq12msGL5eK6muX1D8dJYcbqysjYFom%2BTcUm8HSwNRKLc8LQZ2Na14WyRZcwXFeQ9TJlm5WGuhQJmDWWd9aFAXkJ9P0qo9OJYUmoaMPDoXY3kRKbH%2BzVU62gE8XbRk1Ar6dZN8D%2BMpJlSKAAGSNFr%2Fz1SWpsUcF4By4fDJfgs6s%2BHWdwL0XbEUa37%2B3km7n6N8o0BV5DZj2MupL%2BcfrNkjPmSY0YNH%2Ba3WFIcakUDytFhhCMI2h7MMGOqUBCklD4HYgVrvXyP%2F8GXckFfliRrL8XBc8TzkTem6%2FjAgjrY9UHATBcjaWvSngOeUsWOUuc1AY2cjhBkx7grNItVPtnnPVpxIMJLF1p%2FuJRnOux7Vs7k%2FezPivhlhzs1%2BIxowY9IvN4Yj0W32YCo7SqTmdI0Xq69z9kP4a495o%2Ba2TTslz4KK3rNT%2BQG%2BtcL5JLqySRxnBLx8%2FeSIJ2cPm93hfCaBw&X-Amz-Signature=1d407965d4ad0562fc60c593955ae905a48edb3c40ce8f92c2770e15f47dec69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJTPGZ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgdZ%2FuhsniAxcWorHgasmAJb2DLRYs5XNCecbeAdg%2BxAiEA4cm0QmrLXtc7x6YS8I%2BBHLnGN2PgBB3yNYbpBGXE6tcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj7zOKPdFrKOfhGEyrcA5lG5uVe32lW7T3H1dDmiTkKWkKr3Yynim1u1m0OxbTeyEBILK1ybPV8I5pClYKXNr56j4okVM%2FHtd2bSHz51Yq5GKwAg1JfS0i5aPn4YS4JBz3DLoi8T7MPDlBXmACplZ9sqi8Bsfii4DWQYruQORHSzlTHHRCfnibF5f07eKjVoPpnoiCzCe1SfxdQtNZC6acRd%2FOfxVWp%2F6Vrt23f6LSO7q0vdElcRzl31xv1UMf1lUFylMYR%2BMiBxcXex9vRLAyZWeKEGKpckkIusTKH2cm7BboeNkLYu13MbmSA4%2BTSxzNL0MvOqTxMiTi%2B392tivSN%2FdgHeI%2Bm1Gde4%2B7zstYf4qlZi7bjjt%2FCq4zsWrMl%2BF2nCQyerNPNUtzzLSs0RggK34Pzhw%2BneOiaytDq5eMU9VfmlKPhQE3DpdIkdQxRI9xnIv3XdhZR3UAbMj%2FOGRpxNvWPnL99jAT4SmF0bfCCG4RpseUPBLpru8vCofymJDkeE%2B4jZZWxedcSsKfnR3eU2juAIyHufT5h12P9sXD%2Fj71D9S9H%2BEyz%2FG8Zbeb6PbgEC2349haShPOeHZiqEbfBJimolj0sYFptIJ4ioen%2F9Df91iisvCxyA3jIsb8slNPVCKrhcxfDH%2F9uMIeh7MMGOqUBmNgajyvlXCTT5fqphN2S2YELJJ5lKmk%2FRzD%2BJ1Wn5IZgQC3dHEWkjtIYhbqqHXZe9WA9l80vB1MjvmMPJvrgw%2FBQXLcCeh8Z9y4YJPhDf028GLzYV3smq47u6sV8KJ1ckOuORGnuhUAAo9A2iptcWwXpy0EqFMcN5R4qUat80eYLmp9lXhg6G%2FqjA58L6DBv570oCnCIDBcBV0IulGCRGbmN5yNX&X-Amz-Signature=9395422669b5d5d325941c3db8b85517722eee36ab39a4a8ee9dc66028a05470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
