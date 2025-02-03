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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODMCG5P%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEBPbnQWt2uDxa4jLrm%2FV7m16zvnhKg8J%2B1nrzmwIwxAiEA%2BLng9AoVL4PZMk0BkQIy8BGqAG9gmsvMhgSW8nD2s7YqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4jL9aC5dWPOfAX2yrcAzKj1xldPBNqwubz%2FxuNKzD5srs%2B9u6vAWNPX3M3OW44N3Rz0nJVF76fnonojiPqxwb%2F4kiHpf65veh5Jel68oKi3PJ9XHe1NFuUvg4lmMu%2FUiA0VjHnYVuAHFiqggXay2MkVyrW6ddb5eluwOBLQvlK26mdHMEffIuSfp0G%2FCB8u%2FjiharSpbhqf7t9duTSZmiUm1rkp5jla%2F%2BWjQk7xac2XfxJqhI6m6lZVWFaGvT%2FfsoO%2BmzvkWvcTfkNjeoO%2BC3mSW85x%2BiHpk8CMppDoFB%2B992g1q64kjrwxb9O3nto6CihcBcf5fovZe5o9F6PW7uWepSSE7S45qX%2BbcxVw5TzgLYVvRAYrKeye1OQ%2FGpTmVg9C%2Be6z4VXBrORCAEXMvMgyqO%2F9daiANyJeiIehX7Z2mOME0OD2iWeM7VNdCD8hMZ5BHOL59sShJmRI27NuBbFfPj5Gt5B8wZSCjCmO72HEDWl2RxuDZhWDil9aOm8nVllp1JqSWqG6NlkDweN5oQCUIDR55P%2FVotYi8fymKd7wNZ3lS1R6BGvHUUCb9ItfF28LeKa0X4hnDSDXekzOTTVg4fcNxM2SpycFcEiIKvzICFTTHPEY21%2FjlOqFXT7niRy%2FiAu%2B5YJlDMSMJ27gb0GOqUBNDOPMyfdRMLA8MLBGAs00nT0wZ7541pyL%2FWgz%2BgnuwMjimAcCdcvlupDHCCkmPyGxFGBSSKogjmKDHl5Y6ScMirfbpQvE8An%2BA3jVz8mmYyKxmaY4YXF3eqPQNWGW3TQpwYCcVAX0wv5Bq6jr1%2BJpXAhD0eqKdNoNns8eXCoqCJb8nXTY7bn6ulzGXk7vvQx3BE1Xe6P2SAoxaBuUPaE2obJugy1&X-Amz-Signature=e8892b21de5159cd77fcebe8ff7c7356ff3941ce68a782440d51cb2812c14e66&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODMCG5P%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEBPbnQWt2uDxa4jLrm%2FV7m16zvnhKg8J%2B1nrzmwIwxAiEA%2BLng9AoVL4PZMk0BkQIy8BGqAG9gmsvMhgSW8nD2s7YqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4jL9aC5dWPOfAX2yrcAzKj1xldPBNqwubz%2FxuNKzD5srs%2B9u6vAWNPX3M3OW44N3Rz0nJVF76fnonojiPqxwb%2F4kiHpf65veh5Jel68oKi3PJ9XHe1NFuUvg4lmMu%2FUiA0VjHnYVuAHFiqggXay2MkVyrW6ddb5eluwOBLQvlK26mdHMEffIuSfp0G%2FCB8u%2FjiharSpbhqf7t9duTSZmiUm1rkp5jla%2F%2BWjQk7xac2XfxJqhI6m6lZVWFaGvT%2FfsoO%2BmzvkWvcTfkNjeoO%2BC3mSW85x%2BiHpk8CMppDoFB%2B992g1q64kjrwxb9O3nto6CihcBcf5fovZe5o9F6PW7uWepSSE7S45qX%2BbcxVw5TzgLYVvRAYrKeye1OQ%2FGpTmVg9C%2Be6z4VXBrORCAEXMvMgyqO%2F9daiANyJeiIehX7Z2mOME0OD2iWeM7VNdCD8hMZ5BHOL59sShJmRI27NuBbFfPj5Gt5B8wZSCjCmO72HEDWl2RxuDZhWDil9aOm8nVllp1JqSWqG6NlkDweN5oQCUIDR55P%2FVotYi8fymKd7wNZ3lS1R6BGvHUUCb9ItfF28LeKa0X4hnDSDXekzOTTVg4fcNxM2SpycFcEiIKvzICFTTHPEY21%2FjlOqFXT7niRy%2FiAu%2B5YJlDMSMJ27gb0GOqUBNDOPMyfdRMLA8MLBGAs00nT0wZ7541pyL%2FWgz%2BgnuwMjimAcCdcvlupDHCCkmPyGxFGBSSKogjmKDHl5Y6ScMirfbpQvE8An%2BA3jVz8mmYyKxmaY4YXF3eqPQNWGW3TQpwYCcVAX0wv5Bq6jr1%2BJpXAhD0eqKdNoNns8eXCoqCJb8nXTY7bn6ulzGXk7vvQx3BE1Xe6P2SAoxaBuUPaE2obJugy1&X-Amz-Signature=9b9d1de17a07715b9fc6896d23cddd9c291168c8a9e89213ef30c95560e77e41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKWHUUCF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDtVE7HFe1BS1uQh4%2BP2rKUTRKGdV5zGtx4mmhw7JlCgIgU1JLSrUxRYm6rbfhIjA2PFwSTXQqljoxfEDMCMooq0cqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpTrFsSg05MXDvRtircAwPP9zeuP3lScSsuav%2FPCQpiT9lFCVppMjyn%2BE2wnmfHllhQHjIWW1rBWTw04RBdgFrm%2FhSimeH%2Bv%2FIGxsI3QEV0qJZcK2yZMn0pu10RpO%2B7JrpNk41yQJpDOHVqfntXO9yCbtmDnoSpcC2BddZezkecZkQU106VlGPATWMzCi3BgNOkj%2BO7VB4QK9Ziclrs7inZ%2BaoxxsorpaDcl%2BPTOboeHHLfokdbMpeR3phZV5QTTqA9gKrlgCqeR%2F%2F%2BXoHXFSr0HdaMatHTqs8msNNqxihfCvViL7l06Tq6I3w3Br22DU89zzUf1FnM6EjdwAWXrw%2BIC9mh%2BDSGX8FNZFXi%2BhQlQWhxCXK37xdBl1NuwDwgi89kuTIgRYVP8DWMHEZooqolP4CS11cV%2Bngx0nSTF2QX5TXDhPmNlIvtETEtBJBPndr06njXzf9kJHJXnT2SsxdZmnamPsTFX1BdZ9JywI4CbzGH03MZn9UKIOqAKiZzXoSdJHsGWzKBmqEK3dgpcMdzmc44s3W0ATJ859gB%2FyFq0%2FVHit67qy8EH%2FeXzv6zkFC2N5jn2ZLFGyz4d0tstK20nHwPraU8LxXlmhDlHVRN9yixvW6t%2Fg4nmnr9ONK7z2aRKadmuNbcQlaWMMrAgL0GOqUBtLmgxvH08ExKQ9KH1PD1cO3UIgpvoSQVk9d7KMD47aB213z%2FHhuegy6yeuCd%2Bwa65CmccStN4licrhH0u8kE1mXLThgivq6uYh%2FhwznMOTRiAxgp34vOHtvGAzRYl9XIyOKlLaSPx9VQUhziI7DDy1coMhOjdPUSsatr%2FV8AckPMwp%2B2BrQ9ke4bbsMHL6MlrikqmHj0i84hgxqfecTMpKSpEhJP&X-Amz-Signature=7e94de662ffd5941e942357599058d9c4784dd2650fd11fc9f1d0cb675fcae64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KGHXMT2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJmudTGVdiI8wyFWMQgqUjvQU%2FCNYcxQ0CYIKS6iGuygIhAOVBaiMoOsYV7kf3s5wTkEVJIavIJPriEiFMOWSzAJFbKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXsdFp4iZBNTBoQzkq3APY1Xx%2B%2BEEmuaytSW2tTB9N86yqM2fmxqeccC1Ln8kDBq75YsrTHjQHaydyStRU0FpMXD72W9s7vrZWQQUtP7bV9VIBGEFjPaS2jChtdL9fHEQvfOh2apoRej4jRuSXI%2FbAiiRIMWY%2BrJIhXo0eshqP4vs50ltlD0vBmK3RmqdZug4z%2Fhu7DXvCSiN%2F0TDblQDVVyTA7mQ326%2Fz37nSourg8ozEEbX%2BcyVk5Bia4r67xoykCkA7VIEXL2Jm%2FRNHPEX4WWDJvK5KsVZTwwPGZX9USTNnRBzP%2BuKhx9fsVmsJqizRFjZ93hLpPivHvU6FSxqz%2FX8zhO7MQ0TFVt%2BuHuSMO3M0zoRuLaYapRVlrlFmge%2FXibphRWgUWZ2HUXiihXayL%2BJxOgEWQPd0PzSdp7BJXHGjLAJmXb12Joko7lyX5rzuMpkSS5jhHrdw9Dq2ZPLJcoRY37GnaaslyWEEopkyhJ8vNE0Qxx9dV3Ngy8sIpR8YXFFwMzgYYaPkeONd74iL1kdWvrIFWjJQBjVSzLR9OGelsRDZkAUbKVHtK2%2FHOUiRFg5opBDZg482thDagXM3AbSR1puaUqGGUMsjIlDLGTCeQWpUHecdk5DXqnLla2lpscT3pe5%2FFgb8szDkwYC9BjqkAfZL8MEP0bMTGlSGiPIi6Pkv4JHUn80k%2B2bLAEwVEws%2BXXub1OkNGI7%2FUui%2BJkKNDrc1OWJ4AvwXWCcK6b87dfNdnbIkaAOMWiPNym9oXAI8QrOwfisOOwbRk7dLmHRx4B8BXdBorDTTOkiaP4E0jt5WgC3q%2FahzCWsRiyQ9daXvbO5bFGzlufYmN3t2RvNAAFf7YKyNJp22p0jB4Blb3lEf%2BMjk&X-Amz-Signature=f722ae4c8fc6df7cd942a5360faa11deac59a2f00ab990c6cb25486d32857b39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODMCG5P%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEBPbnQWt2uDxa4jLrm%2FV7m16zvnhKg8J%2B1nrzmwIwxAiEA%2BLng9AoVL4PZMk0BkQIy8BGqAG9gmsvMhgSW8nD2s7YqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4jL9aC5dWPOfAX2yrcAzKj1xldPBNqwubz%2FxuNKzD5srs%2B9u6vAWNPX3M3OW44N3Rz0nJVF76fnonojiPqxwb%2F4kiHpf65veh5Jel68oKi3PJ9XHe1NFuUvg4lmMu%2FUiA0VjHnYVuAHFiqggXay2MkVyrW6ddb5eluwOBLQvlK26mdHMEffIuSfp0G%2FCB8u%2FjiharSpbhqf7t9duTSZmiUm1rkp5jla%2F%2BWjQk7xac2XfxJqhI6m6lZVWFaGvT%2FfsoO%2BmzvkWvcTfkNjeoO%2BC3mSW85x%2BiHpk8CMppDoFB%2B992g1q64kjrwxb9O3nto6CihcBcf5fovZe5o9F6PW7uWepSSE7S45qX%2BbcxVw5TzgLYVvRAYrKeye1OQ%2FGpTmVg9C%2Be6z4VXBrORCAEXMvMgyqO%2F9daiANyJeiIehX7Z2mOME0OD2iWeM7VNdCD8hMZ5BHOL59sShJmRI27NuBbFfPj5Gt5B8wZSCjCmO72HEDWl2RxuDZhWDil9aOm8nVllp1JqSWqG6NlkDweN5oQCUIDR55P%2FVotYi8fymKd7wNZ3lS1R6BGvHUUCb9ItfF28LeKa0X4hnDSDXekzOTTVg4fcNxM2SpycFcEiIKvzICFTTHPEY21%2FjlOqFXT7niRy%2FiAu%2B5YJlDMSMJ27gb0GOqUBNDOPMyfdRMLA8MLBGAs00nT0wZ7541pyL%2FWgz%2BgnuwMjimAcCdcvlupDHCCkmPyGxFGBSSKogjmKDHl5Y6ScMirfbpQvE8An%2BA3jVz8mmYyKxmaY4YXF3eqPQNWGW3TQpwYCcVAX0wv5Bq6jr1%2BJpXAhD0eqKdNoNns8eXCoqCJb8nXTY7bn6ulzGXk7vvQx3BE1Xe6P2SAoxaBuUPaE2obJugy1&X-Amz-Signature=a7ba66446a4992080c3189c32aa2fcc9e4ec5694cb11034ffb685b982c05fe25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
