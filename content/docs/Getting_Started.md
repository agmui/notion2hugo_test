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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EGE6CU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHEmZ7Jc%2FerU6pBIz5Y%2BDKGPk88DJgPIZzysBQ6iJkbAiBAwHFEU1H%2BHsArwOzeVeJza9ka2Nj2gE952pIHMIXv5yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM%2F7eckBE1B%2BHSCUTMKtwDhu5FGwWakMndKgg76ZuQgn2psuszLEY%2FNUeWd4OEF%2Fp4etjY%2BhnhtjMkZjP6MD8KbMSbnXB178kb6Tyh7jVXQGnnWyHOKFYQ73NiVzFQTzbW%2FJXzzYCMyg6vl7WImn8Dhirteae2WqPs200yooDM%2BY23MqtT2otFXJQ5SGAzVsk58bOdFYqyx8d5oJ3b4WQ8g4DLXUAICQXyELWA2V2E1SfPqcteb638LyTuvdFZ3EvqPNqbL6%2Fh5asMMN0KutGx6MaTi9SJgLcuAclwt%2Fo9T8TV6xXv7BkhgSggH%2FY0LqZSjY0XBU6IEUbozOMkg1Fvx7J5SZQ93ppF8MHr4DiG0jeZz3T0OJsHAA1xeicxGicbRRqVxkbJZrVNHxbBE8lzhU7HmNHogbOxM1dytI8X9HaAxZFV%2BgfjTcoqhYjl%2Bf7b8yaCqM8lwGDeU%2BW33WM8lZ2n5lAsFwIEHcNpDeIKRQxpLPwCMVQwLy4oUvum1Oi%2FyldTN9DhJMjEfAx5P26ZhMzwWlmj%2Fbb84VWeC0YtCO%2Bz04u8U8E8hLFSXAe8MhQdRPz3qHUjUw4PH04iYr6cRcZkp0zvFO2ZOwi6C9F0JJsvGK3MSbmdpNPfJgOQfDMxDTUZ0vMNSf2mGP4w0ajwwAY6pgGOsFiMpuAA1w1u1nc4jX1iZtu2g%2By8P7U8D1Y%2BJoigX3tHVgl%2FDKwWABB2eEds6zwU1zLUDtqyEIxhFkCNDkWp30aqwlLbl4Uqq8O7ntU0MwB0VUC0QZMKmxEGQrCmD8BJJrLUgi1Ys1TA%2BhU0pJwxC5mvA26ih5VXBzqNyzsdMqsn7DizYGQkVQbpnb39P0%2FnFl7%2Bdt0ykue2Xs2wbXDt8dOnUiAs&X-Amz-Signature=0614e949a5e4f829d85ac29ef70b694b451a1d5bdbafa3013175925a282ba1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EGE6CU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHEmZ7Jc%2FerU6pBIz5Y%2BDKGPk88DJgPIZzysBQ6iJkbAiBAwHFEU1H%2BHsArwOzeVeJza9ka2Nj2gE952pIHMIXv5yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM%2F7eckBE1B%2BHSCUTMKtwDhu5FGwWakMndKgg76ZuQgn2psuszLEY%2FNUeWd4OEF%2Fp4etjY%2BhnhtjMkZjP6MD8KbMSbnXB178kb6Tyh7jVXQGnnWyHOKFYQ73NiVzFQTzbW%2FJXzzYCMyg6vl7WImn8Dhirteae2WqPs200yooDM%2BY23MqtT2otFXJQ5SGAzVsk58bOdFYqyx8d5oJ3b4WQ8g4DLXUAICQXyELWA2V2E1SfPqcteb638LyTuvdFZ3EvqPNqbL6%2Fh5asMMN0KutGx6MaTi9SJgLcuAclwt%2Fo9T8TV6xXv7BkhgSggH%2FY0LqZSjY0XBU6IEUbozOMkg1Fvx7J5SZQ93ppF8MHr4DiG0jeZz3T0OJsHAA1xeicxGicbRRqVxkbJZrVNHxbBE8lzhU7HmNHogbOxM1dytI8X9HaAxZFV%2BgfjTcoqhYjl%2Bf7b8yaCqM8lwGDeU%2BW33WM8lZ2n5lAsFwIEHcNpDeIKRQxpLPwCMVQwLy4oUvum1Oi%2FyldTN9DhJMjEfAx5P26ZhMzwWlmj%2Fbb84VWeC0YtCO%2Bz04u8U8E8hLFSXAe8MhQdRPz3qHUjUw4PH04iYr6cRcZkp0zvFO2ZOwi6C9F0JJsvGK3MSbmdpNPfJgOQfDMxDTUZ0vMNSf2mGP4w0ajwwAY6pgGOsFiMpuAA1w1u1nc4jX1iZtu2g%2By8P7U8D1Y%2BJoigX3tHVgl%2FDKwWABB2eEds6zwU1zLUDtqyEIxhFkCNDkWp30aqwlLbl4Uqq8O7ntU0MwB0VUC0QZMKmxEGQrCmD8BJJrLUgi1Ys1TA%2BhU0pJwxC5mvA26ih5VXBzqNyzsdMqsn7DizYGQkVQbpnb39P0%2FnFl7%2Bdt0ykue2Xs2wbXDt8dOnUiAs&X-Amz-Signature=6cf8d192bdd980cbbd3eb6ca72ed31588437f0615e4621afcb0fa53ceaf2c9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EGE6CU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHEmZ7Jc%2FerU6pBIz5Y%2BDKGPk88DJgPIZzysBQ6iJkbAiBAwHFEU1H%2BHsArwOzeVeJza9ka2Nj2gE952pIHMIXv5yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM%2F7eckBE1B%2BHSCUTMKtwDhu5FGwWakMndKgg76ZuQgn2psuszLEY%2FNUeWd4OEF%2Fp4etjY%2BhnhtjMkZjP6MD8KbMSbnXB178kb6Tyh7jVXQGnnWyHOKFYQ73NiVzFQTzbW%2FJXzzYCMyg6vl7WImn8Dhirteae2WqPs200yooDM%2BY23MqtT2otFXJQ5SGAzVsk58bOdFYqyx8d5oJ3b4WQ8g4DLXUAICQXyELWA2V2E1SfPqcteb638LyTuvdFZ3EvqPNqbL6%2Fh5asMMN0KutGx6MaTi9SJgLcuAclwt%2Fo9T8TV6xXv7BkhgSggH%2FY0LqZSjY0XBU6IEUbozOMkg1Fvx7J5SZQ93ppF8MHr4DiG0jeZz3T0OJsHAA1xeicxGicbRRqVxkbJZrVNHxbBE8lzhU7HmNHogbOxM1dytI8X9HaAxZFV%2BgfjTcoqhYjl%2Bf7b8yaCqM8lwGDeU%2BW33WM8lZ2n5lAsFwIEHcNpDeIKRQxpLPwCMVQwLy4oUvum1Oi%2FyldTN9DhJMjEfAx5P26ZhMzwWlmj%2Fbb84VWeC0YtCO%2Bz04u8U8E8hLFSXAe8MhQdRPz3qHUjUw4PH04iYr6cRcZkp0zvFO2ZOwi6C9F0JJsvGK3MSbmdpNPfJgOQfDMxDTUZ0vMNSf2mGP4w0ajwwAY6pgGOsFiMpuAA1w1u1nc4jX1iZtu2g%2By8P7U8D1Y%2BJoigX3tHVgl%2FDKwWABB2eEds6zwU1zLUDtqyEIxhFkCNDkWp30aqwlLbl4Uqq8O7ntU0MwB0VUC0QZMKmxEGQrCmD8BJJrLUgi1Ys1TA%2BhU0pJwxC5mvA26ih5VXBzqNyzsdMqsn7DizYGQkVQbpnb39P0%2FnFl7%2Bdt0ykue2Xs2wbXDt8dOnUiAs&X-Amz-Signature=3482ada46a4c1a4704bd0ce4728c56093e2c13f0373f4125b58e31a8f8cfb565&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQP7ADXA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI8UC0vlktfuCF188xsOnbFWQQFsv4aKWSHFRddBp20QIhAMgIS16rdUvwnCz0F5HystLpn2b6Q%2BC4qi9bAa23A0hzKv8DCGsQABoMNjM3NDIzMTgzODA1IgyDAf6bJL3Xm06CuZcq3ANcwqS3f9ZVkfxS6q7gJZio%2F%2F5x9JS%2BtJTMrBoag4J0PElDaR1YiqrocXZBq0GJ033VKZkKLZIDZCHglyT7qwWzhNI0C7ftcrgehFthSeOiWSLLJCl6RZesfwGORlBbw6s08wObRs97lALhGDnGqEswevOtxfqzN28LbCidQov235KG17PFPq9n7TsQwu%2Fc9YURX8FaeC99oAjCFsSsbrzZZLLkMESJivExKxFWdBVqlMHfw8VQT1kHhfpVWZZDowQz7U0D70Qdn5CrINX1aNZHR6sLEwhNkdOeO6gkW%2B5YIQmRuGmXv02%2F2P7EGxfE9K7HlTQKUsVJe1RQY7H%2FNAegZBygN5MsPcBTtuwHwXJ2fFhSNQLdCfw8ciE54wLjQgEggo0m8v9OpWpNY%2FpDLh1zKd0ihySCRXg%2BO6%2F0jTA7v2B4YNOThV6xl5tK5wiKbbIOWS5PZRyDYWo%2FERtR1PO3boZSMk4HtPOX9r5r1EnfUTqznyR5u0uWAIFgmN7bqHLYnuvij%2BK6pgUj0nxFW60uJ8I5w5293OZBLcLpRxRvzJly4UVJPpJBpmB59AgDbXsC4xXnStwIcKuUq3GgV1YP22Es4gtKyuHp9rFVqTUTzQDHi4rLb8DiQE4EKDDmqPDABjqkAf%2B9z4234ultBQ8tR34Z9N886REd81Ve3TYQA9vopbfKVLPcmVS9JO8px0KUQh83wPbl18RmG4nD9CPcDxN%2FsH9kZU3eMRM61UER0l2iRb3wSfIItmj1MeuPBYHYSUILfPKE%2FEyjMGEPwifagNteCBDtdIaXau0D6LUzgsTMTBHDH4SzJahQesCHVCE%2FZuGep3cWdd6JAGTA2YUxgBjOuL1qIACo&X-Amz-Signature=7f0ad5ca6209725a3ae4a1b11f4cd246a1a67941ff5e01a7c10f6a1835acf223&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQA4JPV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbRhJZaNbJlgCGjuqKL%2Bhkwlyjkf7zmOw91UUdXbJ6gwIgKYGknZ8hIp495hc3ttW%2FttumkpWRUoLgOaKksfppggsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDI3ppllVwYetWNjQ0ircA%2BWgpr7CiXkiSbmg2jZXA1VqRvbWvZRwS3pcs9gx8uB%2FBT9osR%2BP2T5bUoA6JKGEttiw%2B%2B5O8aB50CMLr9ZpqH6uLAjHFl2yAl04WMt4CQHduK4kK7zDje97DiX3hSoLfgVJ8uHrp8r%2FALB1rk6BR02N%2FsJzdnXDucgaE4Xoi17GK5mph5KcU1EO0EDov6roTfI6e2YkKRuI5RJ1Csbmv2FByxjrkyHQ1Zf6k3F2%2BLPfgoB1EZNDwbJ0GM92epNsVfk5Fefp%2BnalO74QvIgK%2FR5K9QEocmNVILtAuBW8eiuNXOza8jnLE1NuwhlOwjvjOH5rq6yBPey50XawR4KF5JtJYJg30r4oPr7J6bNV%2FylKgMwB%2F2sT0DjHAOsoEjd8H0o1bVEmCV1H7M3GvbXYf0leqhtsh8V4u3f4EUeFQpm0T7rG0NE67hzo0fUW%2Bkfg6sn87gCl6GXnr%2BgXcK8A2SZINY%2BkllZjfvN%2F9vf1DlnC%2FtW2MNSaY4%2BE4VHue7ZFyrwUQMZNiYDKnhqzpNO1ZpH2BwmG59B%2Bzv8SBQRZaX6Sy6lTMtQgs0lYLSyBAYdmSavZ%2BzcqP5Ouonyl4ePCqj6QmrlpxWfcZegVbXwTN2AZR6KgScmCj8%2ByrqeIMPGo8MAGOqUBFibQaNCQwMyhXZhuWIgTkt2RhoTmBIgbplascPVLzCZEeiPZpG%2FUoaqon0LuN8sOvNDhK%2FLllEu%2FHZSiHgjbbwb6XX64RXHxYBTNO0VFbitX%2FJ7sA94ppQIBPHHmr6yUKKZk6uEFZk4yKKEWJbMtcHeyXOa1hlqVAZCyd%2F5paglMwT7o%2FXqs4BOm3zsNDjWsCMNTh6JYT0pV0qSZ6mlsOy0BY5lg&X-Amz-Signature=a05f06dd50b4cc18b68449bc6402644be3f7637a1a2ef212ddbab3f8084a9fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EGE6CU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHEmZ7Jc%2FerU6pBIz5Y%2BDKGPk88DJgPIZzysBQ6iJkbAiBAwHFEU1H%2BHsArwOzeVeJza9ka2Nj2gE952pIHMIXv5yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM%2F7eckBE1B%2BHSCUTMKtwDhu5FGwWakMndKgg76ZuQgn2psuszLEY%2FNUeWd4OEF%2Fp4etjY%2BhnhtjMkZjP6MD8KbMSbnXB178kb6Tyh7jVXQGnnWyHOKFYQ73NiVzFQTzbW%2FJXzzYCMyg6vl7WImn8Dhirteae2WqPs200yooDM%2BY23MqtT2otFXJQ5SGAzVsk58bOdFYqyx8d5oJ3b4WQ8g4DLXUAICQXyELWA2V2E1SfPqcteb638LyTuvdFZ3EvqPNqbL6%2Fh5asMMN0KutGx6MaTi9SJgLcuAclwt%2Fo9T8TV6xXv7BkhgSggH%2FY0LqZSjY0XBU6IEUbozOMkg1Fvx7J5SZQ93ppF8MHr4DiG0jeZz3T0OJsHAA1xeicxGicbRRqVxkbJZrVNHxbBE8lzhU7HmNHogbOxM1dytI8X9HaAxZFV%2BgfjTcoqhYjl%2Bf7b8yaCqM8lwGDeU%2BW33WM8lZ2n5lAsFwIEHcNpDeIKRQxpLPwCMVQwLy4oUvum1Oi%2FyldTN9DhJMjEfAx5P26ZhMzwWlmj%2Fbb84VWeC0YtCO%2Bz04u8U8E8hLFSXAe8MhQdRPz3qHUjUw4PH04iYr6cRcZkp0zvFO2ZOwi6C9F0JJsvGK3MSbmdpNPfJgOQfDMxDTUZ0vMNSf2mGP4w0ajwwAY6pgGOsFiMpuAA1w1u1nc4jX1iZtu2g%2By8P7U8D1Y%2BJoigX3tHVgl%2FDKwWABB2eEds6zwU1zLUDtqyEIxhFkCNDkWp30aqwlLbl4Uqq8O7ntU0MwB0VUC0QZMKmxEGQrCmD8BJJrLUgi1Ys1TA%2BhU0pJwxC5mvA26ih5VXBzqNyzsdMqsn7DizYGQkVQbpnb39P0%2FnFl7%2Bdt0ykue2Xs2wbXDt8dOnUiAs&X-Amz-Signature=8fe78c92d6c17eb2aafa0485cfe7bd4db23434642e7824c915443afabe95a55b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
