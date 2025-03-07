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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37OQQQ3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh9c5TxJPv7udSrjhsjhR8%2FOdSllOlsnZJWT3XQY0QAgIgMyBUawFQX2hqCHKIl2Lmc1ZcDJuu8JZx%2BSYYIxBFQH4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIglF2wMgTzN9DLPByrcA8W%2B7h2fUJ0%2BIKa3Vs2E6IE7GCcl%2BA%2BvA33wWGse0gogIWboUgo1kPFCHSHWycz3rRQrRMlVyuGwiR1wZEKQeSZ27MTcU%2BNHaf2voxAeopNPTwtGIy9XGU9VHGko8M2pUjs6PZN46SF1IpsGp69qJlDu2RDuMfghh5ZyvyOXT2qYsp52gOJ3nXF5Jh6U3g%2Bz6N9qARAAVq%2F3SxV29DQ9aKmDPqSQ%2BGFSWKzWOjLzwJmXds0jTfHKmYIoBM%2Bczoad4DjzkUDZ7lyDwJvIO8DWbeJZ5%2FGZRHHWekRxJxGLHLa5BndxQ%2BOrjFBA%2BppAG%2BjbJ2hAH1802j3ouOFQdmVZls9mEmXMet5x1gq5FVTuPh6DuGBIo74Z5P4IxmOCxTPF2FkaHy9ywKFRNZsptJrgWCorlV63txF%2BYaurTyrLzzCB6K5OEqNWsBH0Fu8gXtLPwzQ9eP6geUoAf%2FTVSjnuNRG%2BGkjkTw5DEJwFlZ0gNZ0%2B%2BIbUgjBfhqrKctm67ApislnJhQfS4rTU9yXst5usQUJTw6wJsM5fIErm4JzF7nuGlMGYJhkEYccFV4QOFgruX2GGiCcLW1vlvBs59YoxyUh1XWx1Uv9V9X%2BlfuANSipXm8sVt2g8E6DgNLUPMPTJqL4GOqUBtLb3pfVIc6eTHayWIeGMKcVH8kUPXV%2B7n0Mt1OUIJgUxxBJsdcihWEIalI%2FaPPsUsvnRY9Y9Vl4PskV%2Baax9KfohNd2LGc%2FmB3SviIqagGIX5VZgGQeAIhAgqMntTzjQDI9%2FkQBhm9u%2BKj7A2CnM%2BVT8jS4wSVqUqiXRVgTxGtqmgQZQTacrYMDLN21wBcy8HgrrhD22C%2Fv%2BQxvxdTO7JPnXIFpM&X-Amz-Signature=4e6365f65747d23c0eed6bf89ab424769a39476c421c9bb98082b70710871249&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37OQQQ3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh9c5TxJPv7udSrjhsjhR8%2FOdSllOlsnZJWT3XQY0QAgIgMyBUawFQX2hqCHKIl2Lmc1ZcDJuu8JZx%2BSYYIxBFQH4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIglF2wMgTzN9DLPByrcA8W%2B7h2fUJ0%2BIKa3Vs2E6IE7GCcl%2BA%2BvA33wWGse0gogIWboUgo1kPFCHSHWycz3rRQrRMlVyuGwiR1wZEKQeSZ27MTcU%2BNHaf2voxAeopNPTwtGIy9XGU9VHGko8M2pUjs6PZN46SF1IpsGp69qJlDu2RDuMfghh5ZyvyOXT2qYsp52gOJ3nXF5Jh6U3g%2Bz6N9qARAAVq%2F3SxV29DQ9aKmDPqSQ%2BGFSWKzWOjLzwJmXds0jTfHKmYIoBM%2Bczoad4DjzkUDZ7lyDwJvIO8DWbeJZ5%2FGZRHHWekRxJxGLHLa5BndxQ%2BOrjFBA%2BppAG%2BjbJ2hAH1802j3ouOFQdmVZls9mEmXMet5x1gq5FVTuPh6DuGBIo74Z5P4IxmOCxTPF2FkaHy9ywKFRNZsptJrgWCorlV63txF%2BYaurTyrLzzCB6K5OEqNWsBH0Fu8gXtLPwzQ9eP6geUoAf%2FTVSjnuNRG%2BGkjkTw5DEJwFlZ0gNZ0%2B%2BIbUgjBfhqrKctm67ApislnJhQfS4rTU9yXst5usQUJTw6wJsM5fIErm4JzF7nuGlMGYJhkEYccFV4QOFgruX2GGiCcLW1vlvBs59YoxyUh1XWx1Uv9V9X%2BlfuANSipXm8sVt2g8E6DgNLUPMPTJqL4GOqUBtLb3pfVIc6eTHayWIeGMKcVH8kUPXV%2B7n0Mt1OUIJgUxxBJsdcihWEIalI%2FaPPsUsvnRY9Y9Vl4PskV%2Baax9KfohNd2LGc%2FmB3SviIqagGIX5VZgGQeAIhAgqMntTzjQDI9%2FkQBhm9u%2BKj7A2CnM%2BVT8jS4wSVqUqiXRVgTxGtqmgQZQTacrYMDLN21wBcy8HgrrhD22C%2Fv%2BQxvxdTO7JPnXIFpM&X-Amz-Signature=60104d5521a8b63e77625fef2f3303b12ee864532fb07c4f677ec5e75cc9cf18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QZ7YDU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3V7OWZJxAJAn7MrMZYKGvML0hM9RIcH2pbyuoN%2ByWVAiAp4v1UtIV06amYFoPg7mPq3KGNaoIoIfWqXZK0539SrSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMOSzGO7lr2p1MpmQYKtwDL2veSWjKtZ3bPhe7r08xNCZb0LxPsvST%2BJzx6WcDCJxuoqeTiYeMB%2BE4QcQELiRgi%2BM16fD%2F3CeycgDRw0f1XEwRjBvsLgq7NIm%2BSJ50IArInimtqbx5wLLj9B5zHxOaPJf9IFiEZyQZBL%2BVBT9j2xIQqEBji%2FuBcBfRGAwdmgKgZEulJr8HhwLgeOy9DltvzQ9f1rEWNHKyGgE2atALD01F9t7gUsxx3K4thYGRsFi%2FoXYipn7sNgCRHFE3wyO%2FVayicj4%2FyhFOQBEVMgBhvIPPOfK2ukEReFyqV1go3pfRXAHBmnncY8tC2dUnKFCINXug6WlfikoD1LGb0QLlMGshDjeDcwkOYfc10kjlbK9Mj%2F1INtsJ98F228LHqkgEUsphn7AUiaKAiGM1nuAA9OIvMovloKvOsUvrVhyoVJvW%2Bxr3Dpn8pRkiQGF%2F8u3ZJ2bMpHf9xFhORW7Uz6pAQlnJegxUk1ipCGcxHLBJkXwdU5TIeeNaJW0snn61meQfWVSDSAHYSdJWHvdrjx02fIfrwKoN4RBmgFn22cp33XKMKbHXHoR9rkRGs2Zgw6pjJT6liFQjnCvPFuGZbtskFNesY%2Fm8ebPSfDIKsnj%2Bu8U3mK5d1ogGA47M6lowicmovgY6pgGXWTiPVKQiC5YSdMbkdmnwWVfvVtOrR5zFZecDaBAK5r35f5oRV1q7UU3LBcB0A2vXS%2F2BtIx7rTrA0Y%2F3h7cfPC2VjrUSm4qEGMaIX7ZDClXdJF4z7BWNvqDtHs82OfPw97L5fDV%2FncHg4KzpWOcf3KQKXemc1baUx5GPBt6d73Dv3rZ5Pdv9R3h%2FdfUBX4w%2FwsI4Jg%2BwV2r1bMgBrzYN4WqbIo5q&X-Amz-Signature=c486fa37c28d0641425ddd949467b4c2c242c6d544d316704f79e4fb260c4bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2SXXFU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F3K8QucdDesWjasr7BK8mx15V1Tns8TTuBXBU2bU1LAiEA1ezDFQhFznqh4bOHkvlTY0OvZjQulKhSObdqlBOJd9Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO74GnC3ikHiEAXfvSrcA02HoeTJy5yrjNIidN25MHf%2BlgAkp8PNzp4k2KygOiHVlcRvC%2BIELuJxztuEvPi4xXyjvZ3NqLZqEj0vClr%2BVDi%2BUd%2BbOtgjFL5p9AjxbnUeXS1tuU1TojDifSfxh4wVI8sSEGT624YmUriGGXbWUGNhCxGXBJGhEd9fO11hFA1d3m9x9vp8AGAZjBiD9A9WgCAn4BYuYHdnw3Y%2BGXzy5Fioc7r1dwPd8reJAOCUy%2BBpVTT%2BY2OAgnRZ3O1NdnHP3eT%2FBV1p9fRR6Nn55Z93Ha9QYxM7FZE5ojxmM48vL2jlWLoERWln4r2b86zCYqVTHudKZnrtEA1t5h6SJmHZl8gqMGia5QfaFmu9DSAUxBOZQv6hDijxrY%2FkU8rRZOaaRbP1FTSw7NsROXqHrXrevTSteHejkmyJu9IwaA6V6rEW0gyhDeSodhyqocigIHGK9NoX%2B3%2ButK2HXHaRbWda2TlUkd1N0nxKsxb3s4qiblvtm7Oyrrn3NLYTvI%2BPLx7oeOPziYKOsydoLZI1QqQ6KYQ15tkLMOqjTWTnYRHNZmFt96pcsvIV5pW6XpiucXOZjZDF3g324J0N4YaR3f1xPHtIkoamyC%2Fko4NLwxVsezck04BZw0DBRJ4BJlk6MNjIqL4GOqUBAzVxFSgiys3FbXf3uzxd1ogxjRlGPEjiOEe%2FwJ%2BuVcYInqHiciFS4nj2QmgdpQe9mE4pgXxIk4Dz%2Fae6VIRVPdxIqCUx4WAhgL1VRaa5n%2BAckDuN%2FnTkH8V%2FKmcbKOI9KuEOLZr4rm2PAEcsF7F40M5Jbkd4lysioz6MkQr%2FLeiHFHF6aFSu2%2BBY5Ts5i8vdpHIK9sVFabaKlFP9tO0O3qTjIlao&X-Amz-Signature=88b8f26f99bc8552e1bc82c11f3110b574d95974a81fc3679481c0dbe87ee525&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37OQQQ3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh9c5TxJPv7udSrjhsjhR8%2FOdSllOlsnZJWT3XQY0QAgIgMyBUawFQX2hqCHKIl2Lmc1ZcDJuu8JZx%2BSYYIxBFQH4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIglF2wMgTzN9DLPByrcA8W%2B7h2fUJ0%2BIKa3Vs2E6IE7GCcl%2BA%2BvA33wWGse0gogIWboUgo1kPFCHSHWycz3rRQrRMlVyuGwiR1wZEKQeSZ27MTcU%2BNHaf2voxAeopNPTwtGIy9XGU9VHGko8M2pUjs6PZN46SF1IpsGp69qJlDu2RDuMfghh5ZyvyOXT2qYsp52gOJ3nXF5Jh6U3g%2Bz6N9qARAAVq%2F3SxV29DQ9aKmDPqSQ%2BGFSWKzWOjLzwJmXds0jTfHKmYIoBM%2Bczoad4DjzkUDZ7lyDwJvIO8DWbeJZ5%2FGZRHHWekRxJxGLHLa5BndxQ%2BOrjFBA%2BppAG%2BjbJ2hAH1802j3ouOFQdmVZls9mEmXMet5x1gq5FVTuPh6DuGBIo74Z5P4IxmOCxTPF2FkaHy9ywKFRNZsptJrgWCorlV63txF%2BYaurTyrLzzCB6K5OEqNWsBH0Fu8gXtLPwzQ9eP6geUoAf%2FTVSjnuNRG%2BGkjkTw5DEJwFlZ0gNZ0%2B%2BIbUgjBfhqrKctm67ApislnJhQfS4rTU9yXst5usQUJTw6wJsM5fIErm4JzF7nuGlMGYJhkEYccFV4QOFgruX2GGiCcLW1vlvBs59YoxyUh1XWx1Uv9V9X%2BlfuANSipXm8sVt2g8E6DgNLUPMPTJqL4GOqUBtLb3pfVIc6eTHayWIeGMKcVH8kUPXV%2B7n0Mt1OUIJgUxxBJsdcihWEIalI%2FaPPsUsvnRY9Y9Vl4PskV%2Baax9KfohNd2LGc%2FmB3SviIqagGIX5VZgGQeAIhAgqMntTzjQDI9%2FkQBhm9u%2BKj7A2CnM%2BVT8jS4wSVqUqiXRVgTxGtqmgQZQTacrYMDLN21wBcy8HgrrhD22C%2Fv%2BQxvxdTO7JPnXIFpM&X-Amz-Signature=0ca06cadf0bbc1df0c2f8ad56ed351958c5af3d5b4df2aa200cd13e1b3b0e81f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
