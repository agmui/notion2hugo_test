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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PW5RP2N%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEisVsK9tj511GM0AzX5Cn1pXPavRjigrFIxVXS5Zw1mAiA8cqTmuT7Xl0K3Auz7J%2FTEYKu8PY%2F2mV6255sbmib2aSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMla1OeLlQGqjt1EJ4KtwDDNM3tJP6BVQSuUH3cy%2BCRwnhnZ6h7l8mxw4%2FXhWtnJqQu9ZsMsaCUtPGdk4ad6phgmrxb2e7mO36voGT0MMhn7qA%2FNGI0rogtag8O9xaf6CUvq9KrLTbPX4B4QwFR%2B0TjWJkocPSmWNNCV2VkSCUotwD0gpNuocjEod0ahHdlz5a6iIoLKZNOApyfl%2BzV4HQdNGwarNSqjaMX12htZ7yDWgd%2BW7jouSS4iKrbxhr4%2BSd1E3fL%2Br3NsAgjO7A3kDIClcLKDruS%2BFUSE3%2F9UaRKwrGrfcC6xMIkjfOJ%2BX0y%2BVTn1ssgW7NZbNtiw4eiIROV2CRrwkReVMpKi0yrWkbm%2FTHF7wHzHGZ%2FySjeuHQC5eN%2BbQH3UWw2k4CSeBFIks53jtSaYvFCC2hwW4PYOkw4S1ooXDQ5Mnp9MYJjZbNzzybOHDbJwQWrLrA7AgijzIq7n945fbynTX2QUJYGpTOl67s%2F0UzFUHo7zCQ0Y09eyFAnRov%2FREJHmQ8ZOn3GaOPhbyYGpgzYvALuI3kS1fXXjJbtl2GPpfGc0fNUQXzUY7wq%2BRvPOaBfGCWexqA9IBtr6OgvKWL73W873pl53KGHmFQdc7e3wDgshsYmtHLQ3Lqlnrwm0ZXzOb4IMgw4KaTvgY6pgGKzoLkvvGZ14kRhVdM1Fg28o4wM1jXZZ9hmaWSZUQC4EJhrSql%2FRzxWvvFI7iwwNgXB%2FID8iEUTrgOuTMGvV4bKVzwprus3zWbrOcVpRedQHduA7Q98Lh0TlvkI3LhhDQck55hSVJTSSjszv1Jon6IsAzDg7fjVzz7YrFfVzSc%2BxOMrBcsV99gCB5%2FyTbh2z6zwonpGSVdGZF0dVzz7AHSGWA3vrRm&X-Amz-Signature=deffa3857e4d71a09a63c57df823ac4a4a1e0ff7393b3a7c4bfa9f22c74e6f00&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PW5RP2N%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEisVsK9tj511GM0AzX5Cn1pXPavRjigrFIxVXS5Zw1mAiA8cqTmuT7Xl0K3Auz7J%2FTEYKu8PY%2F2mV6255sbmib2aSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMla1OeLlQGqjt1EJ4KtwDDNM3tJP6BVQSuUH3cy%2BCRwnhnZ6h7l8mxw4%2FXhWtnJqQu9ZsMsaCUtPGdk4ad6phgmrxb2e7mO36voGT0MMhn7qA%2FNGI0rogtag8O9xaf6CUvq9KrLTbPX4B4QwFR%2B0TjWJkocPSmWNNCV2VkSCUotwD0gpNuocjEod0ahHdlz5a6iIoLKZNOApyfl%2BzV4HQdNGwarNSqjaMX12htZ7yDWgd%2BW7jouSS4iKrbxhr4%2BSd1E3fL%2Br3NsAgjO7A3kDIClcLKDruS%2BFUSE3%2F9UaRKwrGrfcC6xMIkjfOJ%2BX0y%2BVTn1ssgW7NZbNtiw4eiIROV2CRrwkReVMpKi0yrWkbm%2FTHF7wHzHGZ%2FySjeuHQC5eN%2BbQH3UWw2k4CSeBFIks53jtSaYvFCC2hwW4PYOkw4S1ooXDQ5Mnp9MYJjZbNzzybOHDbJwQWrLrA7AgijzIq7n945fbynTX2QUJYGpTOl67s%2F0UzFUHo7zCQ0Y09eyFAnRov%2FREJHmQ8ZOn3GaOPhbyYGpgzYvALuI3kS1fXXjJbtl2GPpfGc0fNUQXzUY7wq%2BRvPOaBfGCWexqA9IBtr6OgvKWL73W873pl53KGHmFQdc7e3wDgshsYmtHLQ3Lqlnrwm0ZXzOb4IMgw4KaTvgY6pgGKzoLkvvGZ14kRhVdM1Fg28o4wM1jXZZ9hmaWSZUQC4EJhrSql%2FRzxWvvFI7iwwNgXB%2FID8iEUTrgOuTMGvV4bKVzwprus3zWbrOcVpRedQHduA7Q98Lh0TlvkI3LhhDQck55hSVJTSSjszv1Jon6IsAzDg7fjVzz7YrFfVzSc%2BxOMrBcsV99gCB5%2FyTbh2z6zwonpGSVdGZF0dVzz7AHSGWA3vrRm&X-Amz-Signature=e61d8e9b22bb778b33f1b115a29aa22af86c750bb6f3f203f6ac08b593f123ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCEBZHM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnVvRanwCfqupndBsq1GoM57bgCrGqZuYkRv%2F7J4AeqAiEAg%2B8q9d%2B5w4OT3AoNDBP4EX6rBr%2FBLj54iw9OIy9TVnsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGhSbHTMtcKxgW%2FVCrcAxKIzTj0Fx%2Bo%2FausfboTKFqnyjsZ%2BkedVIg7rRHqw2oj0HWzK1ZouQQABTqkY6c4mDL0WR2%2F%2FhaZKeRDtsqT%2FL9k6V%2Fnjp72NzqPKen2BMqKV7fNLXu7KR4vBfUxlNrlM2WZ5TerIeoPB%2B4%2BwYgrQn408pO94NTFDLtHfEB%2FwqfojTptSgD0CWBnHwuJLg88TAnJuAh77MnCPjawacSCXT1cajugS53nMfBBEDWc9wee4%2FYfmbbSIdMYtNZ3HLwADnpZS1HEXCuFPn6KPUfiyJ1Jd%2B7xC%2FmwHs2Vzff9qgnpMEM%2FJ7iVsHDp2NkVPeAkvmjBb%2BoT0wcEG4bETmch2EFR9Zq3Hh6kmhGBASnMqx0bRkPVk1SuN9vKCP1Tkyr6Lh0wGQJc5kd0boBSrcKELmuHwCX5SoioxCo4IMXubGTZCfKtaMnL79jyNlLlB7UL7L4KhEnBlTEYg2YYF1uCm1Swm8Ggt2urW6qWbllCu1fLSi3hQBIy6TDqdTLZ1%2FDr455YntZ9OpsPQFGhSSh7Bupp58lgsFns4xBSldTS%2BJUiLBzUYjC5Cx%2Fd4H8bJEpcnuSIDOrqbm1sHaK94Sx4jNS3h0rTOcGQ0BSdQeMLEf%2BXhTY6ng2%2B5ncRheuxMNilk74GOqUB4iRcsrcfMoB1uF6F14jAxlV03dQKu96X%2Fg8%2FBBRIQ0ttr0rZ2cAr25t0Wlz9pQe0Ff3eVQu8fj9bTcvQnma2aWecs8m84bi4ajJYNnRqmTtL%2BhlAh5MdQj%2Btt%2FJbpDX8CW%2BMuWFqrsGWMezXfHcuQGAQcLQqEwuojd789Dmm4CvLpCy%2FecMYa%2FEvTRhe3pzrGJvRvyuXY7do4T4xjkHatCxfTB1l&X-Amz-Signature=517fc3f28697de55a48cb57378a2651ce285136912ea1ea4309cce7b8c37f045&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRWQ7DAC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbrbsT%2FDSFy4gcFUSjF0tdhaDTooYC2UNOMWZau%2Bq%2BgAiEAhJXkVGC0Hqyaz%2FvwjXxIg2eESGXKA9XHMIpztrYJ1J0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFAqCoWJIWWRMqI7CrcAzAGXPHMtIrkzaWEKAWql8FVDTTKTfM%2FeckKW0YNpI3OQn47h2vphuUhvpAgFLOSk0Bl2HYMtqeNxuqdkSShreIqa0rpKtzMk9P3ngpbw4pyx88%2Bgi3ZSTMLq%2BoXJa49L3T0IfsR9TdCafXKFNoZdAScUEnW%2BR8xyTylcaw9EmUro%2BZKZ4RbLgZhSa%2BfRR9a5pWCk2IBaPBfAIwaGT%2FVD6AheNAWPS7ypfWCFel%2BGtVC0Ad2GVR85c9OJmkrFj%2FFJnY0t4i8CbYndb2t1D8AR2TG8S8BZBiqq5tuEdW04QIoH3yzD%2BChno0qbnqDA%2FUIZPPId0KGIL60siqsEhHulJRO%2Fzv2E7ecHf6hnS%2BdQ3TpCL7ZdXcWrVI8C%2Bo9bpyht5u3U9a1vgLXZOl34zmWXTCn4DZqPNuRrMVUiJRaTjeAzbUBwk%2BK1ZO8CBMJhNUOmwl4o3RbfMm%2F6ulvPc263fYpJbcMacVIkByp4szh0Rgsr80WfzWJssYcHfaJSkAn51r3SnDeMhRq1PXYFo2lKfWVH9ucGTd0eYUKFKBHODvNz4J9%2FXqZMEAIq%2BBsk2MdwDEV2%2FPwa2%2F5KEIMICu39gvfDtFDV5%2F%2Fks21eRYQP%2BEqZ2Gtw8ZfIUVTzK%2FKMKelk74GOqUBA7Xyua2Ru%2BAnuSA%2F0%2F7tZOs%2FXbKUabMrOYZHdM6W5vKEi3ZqlGp0HkQqG75UAhYLvwrtHpXBp9DSTZK1ARZ7%2BEWVYsgKHEggv%2FSkh3Wo4L5xvZlWv54lF8ppcmgFfka7FFKzCF7CRycVhJgMI5CHOoIv0KwS5%2FXJtcQ942zMme5LM%2F3KunhlTC9LSNvTDxaVBdAeQbNxcHC9KZQXc4FZWhhLYjIR&X-Amz-Signature=4fa5107955787ff12eecfdb314c2d73d85da66b46df9f6a433c127499cc351e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PW5RP2N%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEisVsK9tj511GM0AzX5Cn1pXPavRjigrFIxVXS5Zw1mAiA8cqTmuT7Xl0K3Auz7J%2FTEYKu8PY%2F2mV6255sbmib2aSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMla1OeLlQGqjt1EJ4KtwDDNM3tJP6BVQSuUH3cy%2BCRwnhnZ6h7l8mxw4%2FXhWtnJqQu9ZsMsaCUtPGdk4ad6phgmrxb2e7mO36voGT0MMhn7qA%2FNGI0rogtag8O9xaf6CUvq9KrLTbPX4B4QwFR%2B0TjWJkocPSmWNNCV2VkSCUotwD0gpNuocjEod0ahHdlz5a6iIoLKZNOApyfl%2BzV4HQdNGwarNSqjaMX12htZ7yDWgd%2BW7jouSS4iKrbxhr4%2BSd1E3fL%2Br3NsAgjO7A3kDIClcLKDruS%2BFUSE3%2F9UaRKwrGrfcC6xMIkjfOJ%2BX0y%2BVTn1ssgW7NZbNtiw4eiIROV2CRrwkReVMpKi0yrWkbm%2FTHF7wHzHGZ%2FySjeuHQC5eN%2BbQH3UWw2k4CSeBFIks53jtSaYvFCC2hwW4PYOkw4S1ooXDQ5Mnp9MYJjZbNzzybOHDbJwQWrLrA7AgijzIq7n945fbynTX2QUJYGpTOl67s%2F0UzFUHo7zCQ0Y09eyFAnRov%2FREJHmQ8ZOn3GaOPhbyYGpgzYvALuI3kS1fXXjJbtl2GPpfGc0fNUQXzUY7wq%2BRvPOaBfGCWexqA9IBtr6OgvKWL73W873pl53KGHmFQdc7e3wDgshsYmtHLQ3Lqlnrwm0ZXzOb4IMgw4KaTvgY6pgGKzoLkvvGZ14kRhVdM1Fg28o4wM1jXZZ9hmaWSZUQC4EJhrSql%2FRzxWvvFI7iwwNgXB%2FID8iEUTrgOuTMGvV4bKVzwprus3zWbrOcVpRedQHduA7Q98Lh0TlvkI3LhhDQck55hSVJTSSjszv1Jon6IsAzDg7fjVzz7YrFfVzSc%2BxOMrBcsV99gCB5%2FyTbh2z6zwonpGSVdGZF0dVzz7AHSGWA3vrRm&X-Amz-Signature=6a6ff6c0afc2d05166033ce9c73714b4665948b274979e0b9f21911906296950&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
