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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SA7N5ES%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj1qY6s0cvSTzo8n5o7dGeWCw5p0xHT1f6nCWUdvqIGgIhANgPnKXzGwcxTz100egp262mwwfcikE6N2SnfnpILtVCKv8DCCkQABoMNjM3NDIzMTgzODA1IgxudvCfLlqUOkRP3JQq3AOTsDTpH%2Bi40KEIAO%2B%2B8XCiRRqyQIBxkaxC2DZWvhjbKwOEjSimO2H%2BVW%2BG1Pt4GQg084ddz%2BmQik1BR59pdQ60tsO%2FmlOZh4SIsAX5H11eeUQBLV3Nf6Acj4gy5f4frp4EB0ZnYLLFcJGt6HOqni3t6CLR0mcR5dwWdy0Xir2uxz3hYQB6bHFunY8Vf1SL4mH9h6aA5q0COc2csDM2k9OUlWl7jIkfnm3WhQ09ZoBQw2tPttqo63Xf6DMW4K59I%2B0pWTv%2BW3gB6pZywtEjah6uFW1ewY6SG3%2FRgE6Tojkj1NOz0XvQutcfRGKp7uyrOuPzSRJMBVu33bRqbMy8ZeCijvGEmXf0n1eFw%2BdK5PrCTQ6DBb4Rer4EpTWvjycw14FN6bXg6ckxT9YzfaNTk8XXZpF%2FWTCbjs1hnTxCm4AQCrBxgNWNKK1yZPfd5KU%2FbnltTvGYqHyc9lqkanT%2By98KfXD8TIImu%2BrLL6V3cUa%2FebG2rUPXvw1z%2Bm9OR3J1NqJkzOxftPOA181cF81hdYMWZXiNBkuYMrcsZUsgVH4PQUvlzKI%2BAzYUauaM1mPrj8uF3uxu%2FRVB39L6dZ%2FF5%2B7d4tjcmRjwPvHAhvqUsv8TqpJftI9ndQK%2BYoL3nzDPtKW%2BBjqkAQYATAhNHadB%2BKz1EB8vYW34nv65vlhHrS6v8PsK%2F7Mi6gJplanTmpzaCoRNHoaBBP6Xs3ijjJmPSv07oK5tFsP5OzB8rzAumR1919%2BS01%2B6FHBuVZ2ibd2jO7flOW4XoIJC4qoKHXRCeuN9hJaweD6Z%2BGxSakIivyiHadrogTAtnFemO8U6dpxSpqda0XM5nnoL1Y0mmlDNswuBxkkPVeTztotW&X-Amz-Signature=ec1e229ae8aa563f3bcd7f29a58b799ec50cd270e88e51de384291a6ec0fccea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SA7N5ES%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj1qY6s0cvSTzo8n5o7dGeWCw5p0xHT1f6nCWUdvqIGgIhANgPnKXzGwcxTz100egp262mwwfcikE6N2SnfnpILtVCKv8DCCkQABoMNjM3NDIzMTgzODA1IgxudvCfLlqUOkRP3JQq3AOTsDTpH%2Bi40KEIAO%2B%2B8XCiRRqyQIBxkaxC2DZWvhjbKwOEjSimO2H%2BVW%2BG1Pt4GQg084ddz%2BmQik1BR59pdQ60tsO%2FmlOZh4SIsAX5H11eeUQBLV3Nf6Acj4gy5f4frp4EB0ZnYLLFcJGt6HOqni3t6CLR0mcR5dwWdy0Xir2uxz3hYQB6bHFunY8Vf1SL4mH9h6aA5q0COc2csDM2k9OUlWl7jIkfnm3WhQ09ZoBQw2tPttqo63Xf6DMW4K59I%2B0pWTv%2BW3gB6pZywtEjah6uFW1ewY6SG3%2FRgE6Tojkj1NOz0XvQutcfRGKp7uyrOuPzSRJMBVu33bRqbMy8ZeCijvGEmXf0n1eFw%2BdK5PrCTQ6DBb4Rer4EpTWvjycw14FN6bXg6ckxT9YzfaNTk8XXZpF%2FWTCbjs1hnTxCm4AQCrBxgNWNKK1yZPfd5KU%2FbnltTvGYqHyc9lqkanT%2By98KfXD8TIImu%2BrLL6V3cUa%2FebG2rUPXvw1z%2Bm9OR3J1NqJkzOxftPOA181cF81hdYMWZXiNBkuYMrcsZUsgVH4PQUvlzKI%2BAzYUauaM1mPrj8uF3uxu%2FRVB39L6dZ%2FF5%2B7d4tjcmRjwPvHAhvqUsv8TqpJftI9ndQK%2BYoL3nzDPtKW%2BBjqkAQYATAhNHadB%2BKz1EB8vYW34nv65vlhHrS6v8PsK%2F7Mi6gJplanTmpzaCoRNHoaBBP6Xs3ijjJmPSv07oK5tFsP5OzB8rzAumR1919%2BS01%2B6FHBuVZ2ibd2jO7flOW4XoIJC4qoKHXRCeuN9hJaweD6Z%2BGxSakIivyiHadrogTAtnFemO8U6dpxSpqda0XM5nnoL1Y0mmlDNswuBxkkPVeTztotW&X-Amz-Signature=a51d8ec0b6534b8ddad1fb30fbf0acdf050a37da31277ebb1b925d5e3d4eaf6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXV72XG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BF6GjQoIpdmyv12TaAfgwa3e23lBdrI%2BV%2Fshud8VjgAIgSjNIyrdGAfjE1TKpa%2FJrdQ7Yi8didPLgQR4nrW3WOUUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGkSdv%2FeJ3xgjVxvyircAySmNU8Irx8Gps2DUewlxB5kDzKSnBi37FzFONtL8D5vGKpRyJx2qXYW1pRg9tf%2FvmvyEhVs9CBVNWQ1%2FcJPhGfV4C%2BLYIYzdOzGA6BcYRESgL9O6WSooomwUDzcyDAher1aQmKD%2FGgzh8sqQILdE3RIMveV5szKNoynyWithllEgkoY%2FRVElzQDCiFQF9YN2hJ3%2FCD2MlKAyIUbmWGJnDT9fwGfd4jizsGhfVd9DOLy%2F%2Bbu1pLQbP7TlP5k4RX3vVPiozqMOqNqESJiSjpMpK1Me067%2FoLEuEtq%2FyjiFT%2Fl%2FMoKRIBqvSXbuTly4H7MaJktza%2FtTW5K3E%2FlMT8RV%2BIcLk%2F5rw%2Fd5XCNVNh4Kq6nz2G%2BeMXUkKK3T%2FbcciQ%2BksQNPmgeXW6IyegkntOoJkjw4tIKbge8uaEdtIeZ%2BPMDiQBbSrnT0Nt051qdtMU9T%2B93FfzsBbI24lqTy%2FLtst%2FH2kkpYCio7KfITOVVtl9rZ%2FPt7IXq1fmgxdOIg2yn53Q705vtHpQNsufVA%2BN3VuVcNXbWT82igvZ7reP0b5Wdk4m90KooACEAp%2F6U2UTvQMT9dzM7pwvVhbxTgyL%2FimR34NpXrajAjtFMWq5cEReCn8%2FasLBiMNPmnzItMLm1pb4GOqUB2BJBlWOH3WFQSlk%2F34RzW2UB1IzY67umG%2FqbIcM2OiMPofza3%2B7U5KxD0Y1QJ9jP6nqyBJgYLORCMo4JeILiPO3IwH5Otuqn98qaNAHEj66qWJwmuub06NqGJthL5zGWE677XkRY0XaagbeYkXbo%2B8RApI1EWfGtzold%2FR%2FPWI1vMc7fbWP4z%2F6JOyHGsocaPFjE%2BmZB6RqVcwRaNFpJRtylteU9&X-Amz-Signature=ebc85143e0f20ab6bbf23b2fb3b81143954a2b31544ef73b5091578258632c98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWEWHIH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2RqiE3Jav6okBBpuF26ySFqbOU3VpdNV6TdtBnr8KTAiEA1o0WocOIFtRTQepLV3Yo3mP7Fgwe2xfh98wnAFsx4LAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNOK23aFevooE7Lz4SrcA6SjDiSpZQAIqfMJB8H%2F4Bus3bdp%2BtZJedWpRLFJtzSGEmRdWZIguzW1Dnxs8YkhoGpxkSzGa96ejOkU8iFM%2B7NswGdjBOm7breUSuveUxRXnXeGiQw85Q7hG%2Bg85SSbsy2oLH3BZzvMsxJ22EeFgO03LJjm9uC2uC9Vb92g3YPownWmQT6wb3mw3qL%2FS89GM%2BEzpMY4AOQ7XLbDeoIA7H0Dtt7GqCD5hiFZM5NGQxXldSNyFeueC1E7VcClkHaeB92VAvRhXVxkCimWdXTevVPBBX2QN0Qy5qhwCiHKAZ8bpgDZRMi09qP6YlckHdUwmAX8CTfwmAAKifHzM0oW7N4CX2PbRM8hsba7IsyQLxSDmzMcmi34CrcFek35RubCV4QjEZMsa4kcg%2BAqReYxs2vdOjdTW7e248KyVj4VQlw5JYJTyEojzmNC%2B1BCcMPjneoV%2B1oplN0kTGtDS0teh9mfUdBe3pgj1DrMA3pjYyUsXvJ3bPeAPvTNiFAizQtQoo4X8f790yQ4nSnrzn0yURytCqadQE58fOCuEExwIJADgG661%2BdaXaW7nPYRXPKTu3tnhOOsR7jsL9L6z7Ja0S7jQMH6aLVJ2c26ngGoxGnj27m3rqgOUYtbk%2BVwMOS0pb4GOqUBk6rI7D6Vrx4pA3QZQFuXR5i0ndxbplJX4a4sqPiiMxBmcLHmw09p%2FEc4kCXwtVoNinREB%2BhXCZSW2kWEkSmCPMVqsUt%2F6Ex8IRRlII71jdWa%2FDwSFT1lpM8G9nB8Ry5CpH9%2BBmfnOizhn3oShog2Zkpyj2x67WfCmidsfwkbbIp4hzkrrl6FIgh3w%2FAMFElBkObDt3iuxZrxRLE7MgFtQ4nikVM3&X-Amz-Signature=abec4a9958e65b6f2240db5f01f3299a54d0a66721126b23b66f5aea9f3c511b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SA7N5ES%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj1qY6s0cvSTzo8n5o7dGeWCw5p0xHT1f6nCWUdvqIGgIhANgPnKXzGwcxTz100egp262mwwfcikE6N2SnfnpILtVCKv8DCCkQABoMNjM3NDIzMTgzODA1IgxudvCfLlqUOkRP3JQq3AOTsDTpH%2Bi40KEIAO%2B%2B8XCiRRqyQIBxkaxC2DZWvhjbKwOEjSimO2H%2BVW%2BG1Pt4GQg084ddz%2BmQik1BR59pdQ60tsO%2FmlOZh4SIsAX5H11eeUQBLV3Nf6Acj4gy5f4frp4EB0ZnYLLFcJGt6HOqni3t6CLR0mcR5dwWdy0Xir2uxz3hYQB6bHFunY8Vf1SL4mH9h6aA5q0COc2csDM2k9OUlWl7jIkfnm3WhQ09ZoBQw2tPttqo63Xf6DMW4K59I%2B0pWTv%2BW3gB6pZywtEjah6uFW1ewY6SG3%2FRgE6Tojkj1NOz0XvQutcfRGKp7uyrOuPzSRJMBVu33bRqbMy8ZeCijvGEmXf0n1eFw%2BdK5PrCTQ6DBb4Rer4EpTWvjycw14FN6bXg6ckxT9YzfaNTk8XXZpF%2FWTCbjs1hnTxCm4AQCrBxgNWNKK1yZPfd5KU%2FbnltTvGYqHyc9lqkanT%2By98KfXD8TIImu%2BrLL6V3cUa%2FebG2rUPXvw1z%2Bm9OR3J1NqJkzOxftPOA181cF81hdYMWZXiNBkuYMrcsZUsgVH4PQUvlzKI%2BAzYUauaM1mPrj8uF3uxu%2FRVB39L6dZ%2FF5%2B7d4tjcmRjwPvHAhvqUsv8TqpJftI9ndQK%2BYoL3nzDPtKW%2BBjqkAQYATAhNHadB%2BKz1EB8vYW34nv65vlhHrS6v8PsK%2F7Mi6gJplanTmpzaCoRNHoaBBP6Xs3ijjJmPSv07oK5tFsP5OzB8rzAumR1919%2BS01%2B6FHBuVZ2ibd2jO7flOW4XoIJC4qoKHXRCeuN9hJaweD6Z%2BGxSakIivyiHadrogTAtnFemO8U6dpxSpqda0XM5nnoL1Y0mmlDNswuBxkkPVeTztotW&X-Amz-Signature=4ad78ebf2d409a20aa0c45ecf2b0268b414bef4aaeba5869b58e2be7ef0785d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
