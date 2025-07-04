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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSCDENE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDuqObQBro1PlKtWanXqOfOKRPTMIniUGaYDRyK91kdsQIgD0SZ3jmtRqEzQKpCD0CDnTI3RFcC1QQ9T9La5eyGLU0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIjo6hqY9nv3rSlzyCrcA0gNtZO7JU2qVXayZV12yAvRDkIW%2BiVVWD1wpINmV3yWYftd9bNorQjH1jUGCeKzDpTbtB68UcvM2mYrx4bF8dsfWeQzC21TzzbQqxdJX4xp8zwqTVhSYE4SZ%2B%2BtsfF%2Bw117rXfNHwTDdy8Qy4LZ5GBzdQdC9gU23gT4kuG0XkdtiJZwONsW7JpCll%2FPGvApJJHvMRpKtYA%2FU4XJzn60XNNR%2Fz5%2BX9fqlCi3Q0ePMAgiPaO9UwJF2S%2FkfRevsJPlFzRD4MOI%2Bi93mJIoB89bGeD3o0zYKcFbhwgZm%2FuXrJiKDWaurTkySu1YlodB1xD4W%2BaYtbqIRCczs%2B55d7c%2BhSxOAaHMFMNz8rR5Jq%2BmDvZ8E5NzE%2F7NMhuoUY9CQZr0mRLJ78esQVwK30F9ZPOCDVPEsDy2aoFoe5zse5x2x71MRsg41Hxml6nuZOxb%2BhBtD3PU%2BC0Hghtr4Uha9OxmpRDPsmYs23DkaXRfZEPECX4R3sbshKlnWMMa2bsJOM6RpyADh32x2k7upFwzmP8jby8vgbDrKxKEWtfCeslaahLCum5703vhb8jMrJcqsDJbKruccRH4n1BjiHmUcu7HgH3xBfuXuYmgRPWcXDYpMI3PN2E8GabIGL5VT5TLMITtn8MGOqUBpVyAOfg7imDgz4xIU8sxyh0xU4J2aJt%2FxqcdBolN8soptttnS0%2Fp%2By8HgFjKIPzJFXbgtEKwIpxd%2FnJgL%2FPByTNA5nYKDgwRC%2BJBg0aSV3bult1UVupiW0NlkuM5fpz5g5KURY1gIXYun9fhsssEIKbPtmOFV5IWs2PCX3VVGpBic078lX5KRXbbVDWbTsseJLquhYtMbCkys1oI8qmF7FGy6%2F8N&X-Amz-Signature=c60b85e2436bb5a71b27ebc761c42d21b50dcd479b713f41290f1cddbc6634c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSCDENE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDuqObQBro1PlKtWanXqOfOKRPTMIniUGaYDRyK91kdsQIgD0SZ3jmtRqEzQKpCD0CDnTI3RFcC1QQ9T9La5eyGLU0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIjo6hqY9nv3rSlzyCrcA0gNtZO7JU2qVXayZV12yAvRDkIW%2BiVVWD1wpINmV3yWYftd9bNorQjH1jUGCeKzDpTbtB68UcvM2mYrx4bF8dsfWeQzC21TzzbQqxdJX4xp8zwqTVhSYE4SZ%2B%2BtsfF%2Bw117rXfNHwTDdy8Qy4LZ5GBzdQdC9gU23gT4kuG0XkdtiJZwONsW7JpCll%2FPGvApJJHvMRpKtYA%2FU4XJzn60XNNR%2Fz5%2BX9fqlCi3Q0ePMAgiPaO9UwJF2S%2FkfRevsJPlFzRD4MOI%2Bi93mJIoB89bGeD3o0zYKcFbhwgZm%2FuXrJiKDWaurTkySu1YlodB1xD4W%2BaYtbqIRCczs%2B55d7c%2BhSxOAaHMFMNz8rR5Jq%2BmDvZ8E5NzE%2F7NMhuoUY9CQZr0mRLJ78esQVwK30F9ZPOCDVPEsDy2aoFoe5zse5x2x71MRsg41Hxml6nuZOxb%2BhBtD3PU%2BC0Hghtr4Uha9OxmpRDPsmYs23DkaXRfZEPECX4R3sbshKlnWMMa2bsJOM6RpyADh32x2k7upFwzmP8jby8vgbDrKxKEWtfCeslaahLCum5703vhb8jMrJcqsDJbKruccRH4n1BjiHmUcu7HgH3xBfuXuYmgRPWcXDYpMI3PN2E8GabIGL5VT5TLMITtn8MGOqUBpVyAOfg7imDgz4xIU8sxyh0xU4J2aJt%2FxqcdBolN8soptttnS0%2Fp%2By8HgFjKIPzJFXbgtEKwIpxd%2FnJgL%2FPByTNA5nYKDgwRC%2BJBg0aSV3bult1UVupiW0NlkuM5fpz5g5KURY1gIXYun9fhsssEIKbPtmOFV5IWs2PCX3VVGpBic078lX5KRXbbVDWbTsseJLquhYtMbCkys1oI8qmF7FGy6%2F8N&X-Amz-Signature=03c3d23c06308c23f38696813f2b18b93b2b11729d87dee45efa4b017f6bb3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSCDENE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDuqObQBro1PlKtWanXqOfOKRPTMIniUGaYDRyK91kdsQIgD0SZ3jmtRqEzQKpCD0CDnTI3RFcC1QQ9T9La5eyGLU0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIjo6hqY9nv3rSlzyCrcA0gNtZO7JU2qVXayZV12yAvRDkIW%2BiVVWD1wpINmV3yWYftd9bNorQjH1jUGCeKzDpTbtB68UcvM2mYrx4bF8dsfWeQzC21TzzbQqxdJX4xp8zwqTVhSYE4SZ%2B%2BtsfF%2Bw117rXfNHwTDdy8Qy4LZ5GBzdQdC9gU23gT4kuG0XkdtiJZwONsW7JpCll%2FPGvApJJHvMRpKtYA%2FU4XJzn60XNNR%2Fz5%2BX9fqlCi3Q0ePMAgiPaO9UwJF2S%2FkfRevsJPlFzRD4MOI%2Bi93mJIoB89bGeD3o0zYKcFbhwgZm%2FuXrJiKDWaurTkySu1YlodB1xD4W%2BaYtbqIRCczs%2B55d7c%2BhSxOAaHMFMNz8rR5Jq%2BmDvZ8E5NzE%2F7NMhuoUY9CQZr0mRLJ78esQVwK30F9ZPOCDVPEsDy2aoFoe5zse5x2x71MRsg41Hxml6nuZOxb%2BhBtD3PU%2BC0Hghtr4Uha9OxmpRDPsmYs23DkaXRfZEPECX4R3sbshKlnWMMa2bsJOM6RpyADh32x2k7upFwzmP8jby8vgbDrKxKEWtfCeslaahLCum5703vhb8jMrJcqsDJbKruccRH4n1BjiHmUcu7HgH3xBfuXuYmgRPWcXDYpMI3PN2E8GabIGL5VT5TLMITtn8MGOqUBpVyAOfg7imDgz4xIU8sxyh0xU4J2aJt%2FxqcdBolN8soptttnS0%2Fp%2By8HgFjKIPzJFXbgtEKwIpxd%2FnJgL%2FPByTNA5nYKDgwRC%2BJBg0aSV3bult1UVupiW0NlkuM5fpz5g5KURY1gIXYun9fhsssEIKbPtmOFV5IWs2PCX3VVGpBic078lX5KRXbbVDWbTsseJLquhYtMbCkys1oI8qmF7FGy6%2F8N&X-Amz-Signature=e3627967cf05b2d47173143ce8c6ad2322bffe5ec94dc0eedd3229cb08445ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q34OJDP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDQkz1ykZiVOs%2BoVk%2FaUo50NGUVpmWVdbJpMW1LRTo%2BJgIgLkqZoh6JhBFmI%2BnwBOVhr5Gt4AWv8NbA2%2Bq9CxedCuwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGg07YULXxb71IU7mSrcA6Kk3uMGiH4Jsq1uNrY5wdBbxcOo2vc50ctcavF329JH%2FQAfcNcErFHOHwdUARwgtyEL0QN9UCPtcqvxOAaO%2Ff1nzmKkIGc55FadnJDT%2BOzD05MfhUSZJHG5eSu525WoYyH78T2WUO8awDqVOqjJX1F87DJQQ0dN9kOMB6S19CDmnXQhUE2gs1XQR8kR%2BpALqm0xywXLvtYJM96Lg4xVqbPSRPpnixGBZ9hNj%2F7WrtvYW8z2KN5cZLX6KFMGOgjCuFKlWCx3ynbc2ah8HqvPz0SRqBFFiCL0Le8v9xh10czXgHrSTRcpJ%2BZAv%2FSYa9pl4YSe%2FQtcNwmdNyLUmYxwwDvwH4ccyGxXuFdeUvPumPO%2B%2FdKqOqBKQMbmU%2BXAWWnlW%2BqcCOI%2Blpob%2BGiBw0Wmu0ITqMtx2My%2BwkJMd5RnT1TDveroGajRpBmx1N68KmX4urCdnqNNBArNB2CMpV%2FXc8j7ibsq1awpJtbxz91bmqNtl9CaDiU2ECyDMNb5zqXSgrKNsDLblPr3L23w7nVuuQrr2wDcN7DujNtwPkhZTW1pD%2FRTDCF%2BYtDKeXSg8QejvapcfcoE8m3DQfkWh796gZ4OvbUFEbK843ygacQdEQ3AI06ep72na5Fbp%2FJpMIDtn8MGOqUBV1cl4JJl7qXKRqm6iWiofKYQ1Z0tMImsjjY405OPA80sfMYKGwwbHkjR0Htu453wAZ0WtY0f7MNGZyeb5Uz79E0X8BDDHPC6Sxn76VtjAt0c%2BXZfLmEV1B8q%2B39QjqFf51ScJVZs0hW%2B9zk5pSyqdXtnaOlO6my3i3E8B9v5BCM5OvjgZCgW5KxPeUFjZATzsADf%2F0YKRzmtKTC8GLnB2llgdM63&X-Amz-Signature=952c517d4c453a105c9eeb997896f1dd4cce243ec8df8531648516e089b553cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQZQLLA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBB3IkIh2sqdtX5EzpiLfnNJS7nBm430szS1RcUw0xSNAiEAoXVgjzCE4QRc7W%2BpDB6vQcK9905nPD3nF4a5%2BUGKMbQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKHdUMi5XH3ce0tY7ircA3KeI4XeOjrKHq7PY9poVuPxE5CJIjuGCe1mV8OwmvVlwEfFEFF%2FRibGrEO2z2EEXF02zkUct0SqZMT3YwON8QyOhh%2B%2Feuxjs0Ns5fMqc2dYy3bDmpdFz42eZNzVMJZZZV%2B835%2BswO9xP5ZNf5vM%2Blj0irH1F2q5THTzas3ilU9huMrWspW7qrByhIOqIYu%2BVK%2Bfm8vTL0UqqwVQ4dAMepkUS%2BJckos13WiG0nthm6UovtIsXal9aH3gdV6Ri7cFDouum%2BLkkNk9WaZUSUUdSKd0VAE6QL2fFKDSYRpQx5XwDi9XjjIbf4iavfXBGl2GOPlDpAdhEG5mSc%2B79K8nDa4w2eWnI3KixRhRwIr89aOYVC0vChUu%2Bn7N8FgYWnTnDAPNlY8Ns6CAATmgRKLBOIscS%2FJ24EVf0B1bvtCf2ZgUXHfV3DilHTd0GCS5KVBjMLbyzYiqO0ypLFhzzekXVZKgUOsVmotG5Hu4G5ziH1R5FtGnSx82D%2F9ApI9Kf69RZLvxq16BgCby%2FiMFcyMuMsQL4CE5IocWagFZ%2BNlDH%2BJ5N%2F9avxuVMP0C9em%2FKclj%2FDLcMcpEEStf%2FFF6xregIzEtT%2B0WzsqtN2RMVH4QGvWKGLYSLZuH8R5eH2RyMOXsn8MGOqUBsYCF%2BkZHfzioZfR8UhLINd19hz2s6GW1kyU8EXp1GGZfZM0hvgy3%2BoVeJ1%2Flw5U1Wi35uLNaH7jXxIC8Y8mA5av6pqgO88Z9azs5NHT1x9leFgyFP15w6olXjwseAVgW0veoCr8qYgSCNP%2FZb7p3R7aDdgKJfCL8dH%2FbRhgKo4FEB96dXfTvI6rzMmkZBtY7EW9umznOAuE9YwjE95U8kRrnOmXR&X-Amz-Signature=13fcc42bfbfda867354409d7371e201732749dedb9581f03d632ea2c2cb8ee4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSCDENE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDuqObQBro1PlKtWanXqOfOKRPTMIniUGaYDRyK91kdsQIgD0SZ3jmtRqEzQKpCD0CDnTI3RFcC1QQ9T9La5eyGLU0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIjo6hqY9nv3rSlzyCrcA0gNtZO7JU2qVXayZV12yAvRDkIW%2BiVVWD1wpINmV3yWYftd9bNorQjH1jUGCeKzDpTbtB68UcvM2mYrx4bF8dsfWeQzC21TzzbQqxdJX4xp8zwqTVhSYE4SZ%2B%2BtsfF%2Bw117rXfNHwTDdy8Qy4LZ5GBzdQdC9gU23gT4kuG0XkdtiJZwONsW7JpCll%2FPGvApJJHvMRpKtYA%2FU4XJzn60XNNR%2Fz5%2BX9fqlCi3Q0ePMAgiPaO9UwJF2S%2FkfRevsJPlFzRD4MOI%2Bi93mJIoB89bGeD3o0zYKcFbhwgZm%2FuXrJiKDWaurTkySu1YlodB1xD4W%2BaYtbqIRCczs%2B55d7c%2BhSxOAaHMFMNz8rR5Jq%2BmDvZ8E5NzE%2F7NMhuoUY9CQZr0mRLJ78esQVwK30F9ZPOCDVPEsDy2aoFoe5zse5x2x71MRsg41Hxml6nuZOxb%2BhBtD3PU%2BC0Hghtr4Uha9OxmpRDPsmYs23DkaXRfZEPECX4R3sbshKlnWMMa2bsJOM6RpyADh32x2k7upFwzmP8jby8vgbDrKxKEWtfCeslaahLCum5703vhb8jMrJcqsDJbKruccRH4n1BjiHmUcu7HgH3xBfuXuYmgRPWcXDYpMI3PN2E8GabIGL5VT5TLMITtn8MGOqUBpVyAOfg7imDgz4xIU8sxyh0xU4J2aJt%2FxqcdBolN8soptttnS0%2Fp%2By8HgFjKIPzJFXbgtEKwIpxd%2FnJgL%2FPByTNA5nYKDgwRC%2BJBg0aSV3bult1UVupiW0NlkuM5fpz5g5KURY1gIXYun9fhsssEIKbPtmOFV5IWs2PCX3VVGpBic078lX5KRXbbVDWbTsseJLquhYtMbCkys1oI8qmF7FGy6%2F8N&X-Amz-Signature=f87530bccdb3d12c7af87fa58c01cbc990d9b80b5216b2208db36b925b2d13cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
