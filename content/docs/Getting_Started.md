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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXU7U2K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEiOgS3hFteXDDcHGlVV0OqA5pZq1c9lJAnCsXu5j4JwAiBIS2HudetCBFR%2FLd0yzSAdL0vv64gBPhhz6BFawo%2BwFir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BRwqdf2TT9Xrwwm1KtwDG2%2FzixveJvP540QM%2FOAAtYrEeRDg5oDdwWYd%2BEiCQtSFSU85Fdyzlm3%2F89u6Jv7hXH7FjDgeh3H7X%2BqgV4oAM3m3b3ZWBXnHWs07JkixlB1INqesqAn5GuRl6sXMZN4l3nt6Dr1qIdFv%2BHHc0%2Fzld1YQQI9rx81JttBD9fb4z%2Bi1TipHHRfOtx9fo%2BKNAraMnXBaIbfQfh%2B7VjrxAK7KTyPcv6CnISndc%2FmAeqU%2FIpjJ2vFXo0EHklrTfaFDwjt4ZUl1WaG2qA93KKXmeisipcV5zfu7cjpDGN7pFsdGh%2FzW%2BNVOVOiHysrN43aOj%2BNIOdfEXaNq8fO8s3HQeYHW%2Bb%2B06bRzggAD5S07rv%2FolyX%2BxFh81xi9UkrnaIKirfNyNJ%2Fy0RyXjlSHrhMefUrhQpVAsRsUwSAZHOaBGllzZ0G75c%2F0JpgZQJx56iIejJDl40f4B3ljRTzi4L2ERyZ6tMDt6zHFdCYfO79ngx%2BOOjxJQq9DriqKULHSkyxUHLS%2FWOvOinpM6%2FGR90AMeyAWayiwaALDFvFCbFgzSkVT1xMNSUpV7KbKPClXGzwo0oKlqewlLnn6R%2F5t29FMSeCXlur9iD8RjXPESN1hTPQ3vDAwK3Zouuqp3eOLzsAw7NGAvgY6pgFs0AVugcO2wCvh%2FJ33MHFUhEAP%2Bt1M3yXmlSkA1FAhwsK3JQBAjFtehd6feLemIWahGOGeoCYvA0J%2BUu%2BySAeaYPhD0kSnLmXMERgFuV22E6rK%2B7a3j5q8Ka0UwWxaAfkCuXSosEDAx5WZtpfLl9eE1djECx5GwFQIhWwbW0QZfJ%2BO%2BwwFaXWaYY14vXnVJA7kLwnTdoMi9jc7DqP2fL02sXKH8kTo&X-Amz-Signature=20e8ee75aa811be25edc230a503ad143a6251dad8f0076ba6d493a1913d40382&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXU7U2K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEiOgS3hFteXDDcHGlVV0OqA5pZq1c9lJAnCsXu5j4JwAiBIS2HudetCBFR%2FLd0yzSAdL0vv64gBPhhz6BFawo%2BwFir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BRwqdf2TT9Xrwwm1KtwDG2%2FzixveJvP540QM%2FOAAtYrEeRDg5oDdwWYd%2BEiCQtSFSU85Fdyzlm3%2F89u6Jv7hXH7FjDgeh3H7X%2BqgV4oAM3m3b3ZWBXnHWs07JkixlB1INqesqAn5GuRl6sXMZN4l3nt6Dr1qIdFv%2BHHc0%2Fzld1YQQI9rx81JttBD9fb4z%2Bi1TipHHRfOtx9fo%2BKNAraMnXBaIbfQfh%2B7VjrxAK7KTyPcv6CnISndc%2FmAeqU%2FIpjJ2vFXo0EHklrTfaFDwjt4ZUl1WaG2qA93KKXmeisipcV5zfu7cjpDGN7pFsdGh%2FzW%2BNVOVOiHysrN43aOj%2BNIOdfEXaNq8fO8s3HQeYHW%2Bb%2B06bRzggAD5S07rv%2FolyX%2BxFh81xi9UkrnaIKirfNyNJ%2Fy0RyXjlSHrhMefUrhQpVAsRsUwSAZHOaBGllzZ0G75c%2F0JpgZQJx56iIejJDl40f4B3ljRTzi4L2ERyZ6tMDt6zHFdCYfO79ngx%2BOOjxJQq9DriqKULHSkyxUHLS%2FWOvOinpM6%2FGR90AMeyAWayiwaALDFvFCbFgzSkVT1xMNSUpV7KbKPClXGzwo0oKlqewlLnn6R%2F5t29FMSeCXlur9iD8RjXPESN1hTPQ3vDAwK3Zouuqp3eOLzsAw7NGAvgY6pgFs0AVugcO2wCvh%2FJ33MHFUhEAP%2Bt1M3yXmlSkA1FAhwsK3JQBAjFtehd6feLemIWahGOGeoCYvA0J%2BUu%2BySAeaYPhD0kSnLmXMERgFuV22E6rK%2B7a3j5q8Ka0UwWxaAfkCuXSosEDAx5WZtpfLl9eE1djECx5GwFQIhWwbW0QZfJ%2BO%2BwwFaXWaYY14vXnVJA7kLwnTdoMi9jc7DqP2fL02sXKH8kTo&X-Amz-Signature=b0bfc4af8c50c4c7c248a48e4fbef96ce876d38ad77dabf32b3b44063a471c04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSHOZAM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDSOLsRGrje9xXnG1HqFfcLSD0T6WyQbU086GvQQ3gP8gIhAJLVZlXAx4cDObFL6eOUCRlwWMEIoE7Wwo7IR2n6X67yKv8DCHIQABoMNjM3NDIzMTgzODA1IgzMAO0kI8AmTRynXr0q3AOhfnpN%2B%2B09zvCGCAw2QcYYhVb297JBH1c9Zgbmm67%2F13VoGEE61eEz0XrOVDqgcDtLxg%2BbUFFYIGSHnYXqQr9iQYb4Q%2FQKaAsMJLSiXWiSJQsQWRvSTGxH4gTZZQFY5aXHIxaRprOVr92kK%2Bmbu%2FUj9QppQ%2FjYOGzb6CzdyKPTOhn9FeW8wn%2Bd5ckfh0NSucensIjomw1hPkV38tH0yKEnsMzdNnbaK%2FhJ8LSiKXJVZ8RboB1YAf5H8rNV0wDaGFNqgRWw5mrMm2cTfhbAbvALLraHPAUOWNYlBp%2BVA7%2FKiDpxvrBS7g3F%2BblCvJLIPRpmzbfOS7P7u%2Blkss%2FAjy5oh1cZlIhbMrFojuFyhPg%2BzNWLNh6RyaRuR7SsFEFEif%2FmuxV5sy5FeeNMMPMn40wxyY6re33sgUkxVJS66halzrYI9lTmo%2FBEdsjzoALSgfhO%2FGY2%2Bt0tN75H7jL4cTbbUynAhlD5p6SCs4srdlJ5VJK6Mql7qnmwbbHxJrQk4vREbxbEhY1kD4tzFLrbDcingXk3u2ki82bYl6Bp6U9EWe1dT8BKBmeLCCSnRmvhZqo6ccO4elAryzcXgniJthVR4ava5LfQ5YKmfTAyBsBPbok2k8M1862ZgMrIvzCN0oC%2BBjqkAQuQeFfrBtH1yvb0lwaPabQEtQ1loneAXbM4anthhVD%2FF516FdXLmNVAs2N7sUyWiSYXGbxuesKbhZFMop5gEJTYACNi03oqyVJSlWiAQk7%2B1kwHmw9wPR89PwLz9R7OVQSNlFlajr8fqvt0X5f0tTLzOwXubWak77zX7G1sOQbNI8Fd8kGHBs%2FSWHKFKrcqbWFSY3pu3tb9elshEMJxskRAyCnD&X-Amz-Signature=a039d5967d5a801b600b2f3e538bf23812a1979a6e69584f889464dfb22ffda0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWVTY5D%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDcCRvKCsmL%2BhwMqAW6IZwtq1b%2Bkw8bZNmDE8NzFoc%2B%2BAiEAwy%2B3uXxwrCoxbDmGwh%2F0mtoKrR48rWVv7qaHlCTBSjMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDObHcrT302btzCR2LSrcA0UMuXhDNYWczY%2BF8hFdqylJTcESnRPwhcdobgRG5wRmM6iMzsHcfNfrtAY5afdyNSjnaHoeL3eI13aESFSJoNrFLHuQazjkzOSDQRQsEVGjowngnffa0WonB4Y6vmW2YCKHEiPnEoXehTEcsEL6G%2B7SvbXnc2EY6K2vFMWhRNlm7eZiEkxyzjkQGiWZHdNq4QbUhVDISu%2FFouBEeEg6Vj3jZa5cR9dE69H%2FlYCJhB32SYOTRdUsRiBncVt2NhCxOfZ0W7rPmryAS%2FO2EC9976yJ27uZeAInDy%2Fpa8P2%2B5DWqrOFkDiXWUXPp9TwtJTUTA%2FXsABRbvGV0A51sCClfiTWIj4sWR0d7w3yI%2BxXGS13WBw97kQSgMxvK9oCGqWdudL2nA5BOLKIod4ConZWHEd5RssTrRF6AdTLksf1P95%2BGowrTSAw8YfuDuE5j0tnwLyIax4x4kcG33d3jTlitb3X%2F6ko27ZFuPSpwj4NApxiVV2B3T6fDRl%2Faj4Zq7gmvdrk8J9W7DNSiVTxtXxuA5lSFkbnvmmsNQ%2FQC%2Fqa07uzmwui4rCTjuA9wAfAOd3OIh4solyEOd6KipNseIhFdHmAPme21BY3GD2pCg17Zq%2BUQtjH28HRtO6FlfUoMI%2FSgL4GOqUBAma8MnZd7avsqoOsyHpcrYaCr3bp6FE1%2F8%2BuEnx5RrUKbzx4mVUD4BKuuH1ECJkpw3QMJyFhcpP%2B2ac2H3ZSt7MXNbWoYzRB2LwvKyNlGJOyuy1QS2%2B%2F1%2BlHcWaw9EcoMbC5qSzDc2%2BCqWnrWkJSVqfJHIlgQsgSwiHLBju%2FoTv8%2B4ZJ51Js%2BiaVs5GZBsfrpkkapg%2BTH5JKtIwsJhfVFeT8MKXd&X-Amz-Signature=91a5a44644852c7b5ed19ace5fef821384c6eec4fd6c89013576533eba4050bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXU7U2K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEiOgS3hFteXDDcHGlVV0OqA5pZq1c9lJAnCsXu5j4JwAiBIS2HudetCBFR%2FLd0yzSAdL0vv64gBPhhz6BFawo%2BwFir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BRwqdf2TT9Xrwwm1KtwDG2%2FzixveJvP540QM%2FOAAtYrEeRDg5oDdwWYd%2BEiCQtSFSU85Fdyzlm3%2F89u6Jv7hXH7FjDgeh3H7X%2BqgV4oAM3m3b3ZWBXnHWs07JkixlB1INqesqAn5GuRl6sXMZN4l3nt6Dr1qIdFv%2BHHc0%2Fzld1YQQI9rx81JttBD9fb4z%2Bi1TipHHRfOtx9fo%2BKNAraMnXBaIbfQfh%2B7VjrxAK7KTyPcv6CnISndc%2FmAeqU%2FIpjJ2vFXo0EHklrTfaFDwjt4ZUl1WaG2qA93KKXmeisipcV5zfu7cjpDGN7pFsdGh%2FzW%2BNVOVOiHysrN43aOj%2BNIOdfEXaNq8fO8s3HQeYHW%2Bb%2B06bRzggAD5S07rv%2FolyX%2BxFh81xi9UkrnaIKirfNyNJ%2Fy0RyXjlSHrhMefUrhQpVAsRsUwSAZHOaBGllzZ0G75c%2F0JpgZQJx56iIejJDl40f4B3ljRTzi4L2ERyZ6tMDt6zHFdCYfO79ngx%2BOOjxJQq9DriqKULHSkyxUHLS%2FWOvOinpM6%2FGR90AMeyAWayiwaALDFvFCbFgzSkVT1xMNSUpV7KbKPClXGzwo0oKlqewlLnn6R%2F5t29FMSeCXlur9iD8RjXPESN1hTPQ3vDAwK3Zouuqp3eOLzsAw7NGAvgY6pgFs0AVugcO2wCvh%2FJ33MHFUhEAP%2Bt1M3yXmlSkA1FAhwsK3JQBAjFtehd6feLemIWahGOGeoCYvA0J%2BUu%2BySAeaYPhD0kSnLmXMERgFuV22E6rK%2B7a3j5q8Ka0UwWxaAfkCuXSosEDAx5WZtpfLl9eE1djECx5GwFQIhWwbW0QZfJ%2BO%2BwwFaXWaYY14vXnVJA7kLwnTdoMi9jc7DqP2fL02sXKH8kTo&X-Amz-Signature=23849a827efb207d472a18597e70e44ed43a333e3bd111c75d167973a5d6f92e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
