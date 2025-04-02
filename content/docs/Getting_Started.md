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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLSOHVKG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB%2FjQxfSUNARM8uChzlvH10Y0Na%2Fd2BDZ%2FqXv%2BwwIMy4AiEAqboD4eO%2FPgAcsPbm%2B1htpLqIb83wK6r5plO5BNS1JVgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvvKnK28mkN2JclLCrcA8eADEyAsNb%2BZwvHIFoWtE5rGz1rlPgBpamjvhTXx2GBMrYXYtUQorHWc3%2FOxvLbsrcYt0uhCwic1LE8GHNSX5UfvjwfLp2YYzbzNXMrkxSh7SuUEZq2wr8Emr2S7JAmAT9ILdEMc9dQCit8APuKwMZ3uaFKfBACukEB2%2F7HVRDpfcWPNt%2BtT9%2FFxI5dfIN2nah9rYcnov4PwGvAFYmgoW09uLvqr3x4WoQgHGXBmZpy3axxFJSXcv4T42gXPgIk1RC0oD5CSXehIrMuXfEuUkvF%2BV8GbeYgn28DNm6fj%2BZaXfSwU4JMIDCM6Yf3a%2BWF%2BQckpmH5HxkO0qX3j6pAeV3dxmuJlfZJmIour%2FQrCoxES1UyQc%2FqitpY04oOF9Bxgm04NZutvqBKyiWb9hZF%2Fxy6ZyyfyC4cj0ypv0S2s%2B0jU7FCsTnJRac90rVhu7As0VXycC06Jvq3hfNNjLt%2Bm%2BWLqfeYmQ0uD0X%2FI%2BoGrByosO2PrsaP9SHp634BZuyYwC5ezwSnjs6y5lzFDGjDvp9D9LkoV6Po8hF1K7WRExVvghJq1byzVKxbYmZuqtNPHksKW6%2BHv3n1iReWQYONhwahcXf8CvVtBXHJJb%2BiZv%2BAEOhXZOSYDy2G9Hs5MOaosb8GOqUB1Ugdy91IZYvFpt1wtO6fvy%2BD0hjRv6w1mZPfyU8Pes9%2FwksGxnQxj7IBlh%2Fns7CgL8Qo3KIYNNXtzjnK%2Fdhm4azJigAwbHEfReanUpif60QSNf%2FZH8kJDoIht6opr0VS37XtOwAmyW6NEQ9d5ZlK5kpQrV1ovxSWwbh6T29VL4tcWt92M7cJfQ0IPAEh2%2Fg7N4etxBPziVBcGeEPPi2NFhPbAl3e&X-Amz-Signature=208842a9c9a73ec89bffdb8137534c2051a20130a0a68fc5c9fd1be80c1870be&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLSOHVKG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB%2FjQxfSUNARM8uChzlvH10Y0Na%2Fd2BDZ%2FqXv%2BwwIMy4AiEAqboD4eO%2FPgAcsPbm%2B1htpLqIb83wK6r5plO5BNS1JVgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvvKnK28mkN2JclLCrcA8eADEyAsNb%2BZwvHIFoWtE5rGz1rlPgBpamjvhTXx2GBMrYXYtUQorHWc3%2FOxvLbsrcYt0uhCwic1LE8GHNSX5UfvjwfLp2YYzbzNXMrkxSh7SuUEZq2wr8Emr2S7JAmAT9ILdEMc9dQCit8APuKwMZ3uaFKfBACukEB2%2F7HVRDpfcWPNt%2BtT9%2FFxI5dfIN2nah9rYcnov4PwGvAFYmgoW09uLvqr3x4WoQgHGXBmZpy3axxFJSXcv4T42gXPgIk1RC0oD5CSXehIrMuXfEuUkvF%2BV8GbeYgn28DNm6fj%2BZaXfSwU4JMIDCM6Yf3a%2BWF%2BQckpmH5HxkO0qX3j6pAeV3dxmuJlfZJmIour%2FQrCoxES1UyQc%2FqitpY04oOF9Bxgm04NZutvqBKyiWb9hZF%2Fxy6ZyyfyC4cj0ypv0S2s%2B0jU7FCsTnJRac90rVhu7As0VXycC06Jvq3hfNNjLt%2Bm%2BWLqfeYmQ0uD0X%2FI%2BoGrByosO2PrsaP9SHp634BZuyYwC5ezwSnjs6y5lzFDGjDvp9D9LkoV6Po8hF1K7WRExVvghJq1byzVKxbYmZuqtNPHksKW6%2BHv3n1iReWQYONhwahcXf8CvVtBXHJJb%2BiZv%2BAEOhXZOSYDy2G9Hs5MOaosb8GOqUB1Ugdy91IZYvFpt1wtO6fvy%2BD0hjRv6w1mZPfyU8Pes9%2FwksGxnQxj7IBlh%2Fns7CgL8Qo3KIYNNXtzjnK%2Fdhm4azJigAwbHEfReanUpif60QSNf%2FZH8kJDoIht6opr0VS37XtOwAmyW6NEQ9d5ZlK5kpQrV1ovxSWwbh6T29VL4tcWt92M7cJfQ0IPAEh2%2Fg7N4etxBPziVBcGeEPPi2NFhPbAl3e&X-Amz-Signature=c9b4b43f16762d71d549fbee1fe1d16ba7837f93d7691b10361a6061910ac174&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BO2PDWY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDGLi2vB77pznLAKah1Bw4%2B5E900lHledzDHObHLOayCwIhAO1IC7fg74ZwLChDQlcTzcNOO7ct9YWK74ebdFf%2Bl98JKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoKO31EHoXWMk2o18q3AO4N70MO92AurIUKoraeAWOTiSEWaJUerH435yJtsRswfBgPvoDQOvkMCxcA1YJ5AcMxHNjs%2FtMqOa%2FZsYYYjXwgh0PTtkQC7ahXTgxcRC4K2lIUr%2FELQC9m11Co28QxLaiawZuabZ2M51odEI9nPFILqxQdy5Gdf6BhCMHEs9Se%2F4eOdFBGZ5BOmXbqlH%2B2eDhlfpxiDDJj0CZzetlXxrY46c2RzS5mbFkg%2F2aDPgd7D3Bud7SpUfp6PDVvJO9Wy%2FfYktb%2FvLHejVRqLm%2BywEC%2FQGu0nSSGLnQrBJgRSkEIO5Rt7G%2BhtAznLwWrWcAiMvePkQEi6Kpxe2nk3fOz4G91sPkMM8oZOysH16TGzkkeMjUfyXouAsdryZdWoWi%2B%2FD2PWtsoj5D3TyxHqsKl%2BSBfmdeNKlGp2Z3Cw2zzqlDwFeBJ1OjbAVUhECZufLDP59dbKmKRKoJiVHBdfd%2BqsmgxEOTL2hQuGukr7%2BfEeTN0qMhoxCPnzOBUDlHkKsnb7RyIsnjn8A4aElt8fLUxssYfBhC%2BeLxbRboxdGmKre8x1EDxCRtCLAx7jxtoNnbnoyqpIVEb4EVjBp7B9Rh8w610C4BuOJ6P8SPzTFcFLUwtTzXz6T68guzpGrNAzDlqLG%2FBjqkAUyg85%2Bk5FsPh7Fo1fcTV1kIsIaufhvVCX1K0yBFayr%2Begi5876N1lCITlrEIz%2FEXePR3%2FE0Tgi2Pw34UVTREAYdOIXWBBlQUpcszSVpToLoefxTmNYIDj2KOC3lHNXYbFDlyg8VK3u3YrG2u69%2BnUbYG0UPhN2YE%2FwaDZOZOF0FLcLik1tY5Yn1xI2o5NjR3B2amTz2oGgMO0z2mlo5ewknN%2Bda&X-Amz-Signature=c53fd223b07d824f3048bcb708e5a101fd30d84880aca6f338c4a2b9b9fab7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFQFXZS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDW0e%2Fc2A9WAwTTdqAi2u2GEM0L921YmWMHFZi4PLPqWQIgMT%2B8n6TSa9eo1uSoILWnrLmbP9JmjzMCqshXioenrjgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRbZiqJezJe9Q1U7CrcA1kxBOc7g4umv0G5mGqGz6tPXhlThQeYEmJkKCUVP8EPmacTawJb6km3IFZ9%2FVk%2BrdGa4hPI7RgmPf5dYU2oExiTkacDoRS0X3H0S3jjnEUie2xvlAlYWS5S1sZzjr5QfqcT%2FwuNFu2EwH7AtTXX8CB6EbJCzQ11%2BMob6%2FDBNOCdRtZqc%2Fcn47e3xMFIBQgmNPxrBYLtelewQUdrINfsFqWHaYX5PwhfbLS6v4i1PZ682%2F%2BrSilbXFGN0ic6maigyfe3U0p7ovGOdMmjTs8eNdbeYZUW1QRlaR59xBtvlj8WMntJe7IHSdwkpCfdegCXlpyt7QXDYBtDsHnWiSh0tHSHnJqsJ68Ny07eD%2B47sYXRYPJQYGmoSNjxJiIkf%2FHejTqPnyI8FifI0O%2FbFYuGJriClMtrVykYK5ATPAzK%2BuJw1VkyMGAgsQ7JqNoCK7%2Bhewg8oEWivPB5zWOGkxDjKhgIN0%2BFUY9yNTnzKBE3iKXHr5LrGKJsA2RAY7QaeeYneXGWnmn%2FTi1LJ78KP8G0dZqrOP6GgckPUlJQr7NcRdetF670G8F644LB7wvB2DcviW35Q%2FX9iIdVs9neO9U6kCMBjoemxGpS8aoIEPoml6uFvat1Sf8ZfQCyIlQYMPSpsb8GOqUBJExApuD7fd3ulJLyGS3CPZHCPxTfEQmjMhPUHNJPwqd5B%2FqbZCsTZSd7AKjKoiKf7kGrweJIKAHsNCqJMIIcf9%2FKH0nxNPEPgRfBi%2FDNNO%2F8MfCd3weDPJNL5tDhzXN4lNnOygKaydiQgO3P4PhC0fqdTpCELSsb7IxZwjJvAeesMY%2FyUEd11oCxouY9Y0XcQl8hOKiZ3qovn8Qgz3opSRy52Vm%2F&X-Amz-Signature=945a8b068bbeacd5d2e281ea497a231c3bbe6db84f6f9af3bb5bc5a105b74107&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLSOHVKG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB%2FjQxfSUNARM8uChzlvH10Y0Na%2Fd2BDZ%2FqXv%2BwwIMy4AiEAqboD4eO%2FPgAcsPbm%2B1htpLqIb83wK6r5plO5BNS1JVgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvvKnK28mkN2JclLCrcA8eADEyAsNb%2BZwvHIFoWtE5rGz1rlPgBpamjvhTXx2GBMrYXYtUQorHWc3%2FOxvLbsrcYt0uhCwic1LE8GHNSX5UfvjwfLp2YYzbzNXMrkxSh7SuUEZq2wr8Emr2S7JAmAT9ILdEMc9dQCit8APuKwMZ3uaFKfBACukEB2%2F7HVRDpfcWPNt%2BtT9%2FFxI5dfIN2nah9rYcnov4PwGvAFYmgoW09uLvqr3x4WoQgHGXBmZpy3axxFJSXcv4T42gXPgIk1RC0oD5CSXehIrMuXfEuUkvF%2BV8GbeYgn28DNm6fj%2BZaXfSwU4JMIDCM6Yf3a%2BWF%2BQckpmH5HxkO0qX3j6pAeV3dxmuJlfZJmIour%2FQrCoxES1UyQc%2FqitpY04oOF9Bxgm04NZutvqBKyiWb9hZF%2Fxy6ZyyfyC4cj0ypv0S2s%2B0jU7FCsTnJRac90rVhu7As0VXycC06Jvq3hfNNjLt%2Bm%2BWLqfeYmQ0uD0X%2FI%2BoGrByosO2PrsaP9SHp634BZuyYwC5ezwSnjs6y5lzFDGjDvp9D9LkoV6Po8hF1K7WRExVvghJq1byzVKxbYmZuqtNPHksKW6%2BHv3n1iReWQYONhwahcXf8CvVtBXHJJb%2BiZv%2BAEOhXZOSYDy2G9Hs5MOaosb8GOqUB1Ugdy91IZYvFpt1wtO6fvy%2BD0hjRv6w1mZPfyU8Pes9%2FwksGxnQxj7IBlh%2Fns7CgL8Qo3KIYNNXtzjnK%2Fdhm4azJigAwbHEfReanUpif60QSNf%2FZH8kJDoIht6opr0VS37XtOwAmyW6NEQ9d5ZlK5kpQrV1ovxSWwbh6T29VL4tcWt92M7cJfQ0IPAEh2%2Fg7N4etxBPziVBcGeEPPi2NFhPbAl3e&X-Amz-Signature=82cef0aed7274c51ba5122bf8f108e5d64fa87c59b55ec94bb7a48188a288d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
