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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEEWJG4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5LSQqp3xGwWllD99Q1TF6%2BAGQEekrNRXMbVpGUf%2FlpAiA2Nt%2BDh1UrKGuV%2B5DED8GFlQNL3PIWvf08nMdneVnr0ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMZ%2Fl82LlcRtVH7wvLKtwD21Cd8KF8P0ku%2FMnUfDAQiDVALlltZ%2BiJlsV9YTauIOngNrmBHFCJ5j4BMZ%2B00ZUrTM8hKedi0QbLy7AgAZNhf221onPzugSrhOXJosg%2BmkxQRiEkiACxUbpS8TMIii8eCrAVo5dtF26Z0YzlAU%2FYJet6f1%2FYn5Q0ORpRjxsL8rl3I7dxBRGCmgpPhcrKdWO%2BNHFIuumwlNpw9YP2sHATo4%2Fwe7%2FXcjbVJvVTlTd5L4GACDGsoaBTkOS6fz5lZmf%2BxCHxJS%2BPu4HT2Ka0N5%2BxlVMR4mlx8IF0CAN4gT4sefFYnc6g1v8HDS61T%2FNxY1tyZfz6G571Ht3lMcmtXKJWShfoTacq9vYgkmEe9Ydk99tc6pFRNdBVyKct1g7KXfTy7YKwjcyyi%2BaoxvoPvZ8R%2BPb7iQdVWtp8jzxwbdStW2plLvOhmm4H46t00AlC%2FSuTR2zA5dBffBjVK2O%2BhUAnR2n3xMOcy3SBmQtiZ6FugSTatcCLI89HTkbOz%2B5Jb9QwvY%2B75HMNrAftYi%2FWd92pDNb8p7n47qxAIXNrxfDjCZbOq0oHePANWAhZSGvtaboTJWx1k01iqBdi8ZQ%2FCWixRcf1InGVqQSJioW3qGjTmTT%2F8C9lkOzQI0qCsGcwqs6JvwY6pgHUntQhogfx7HW5Gr3egjNZFvYcYHiJuJcWQLIXZhMBQrfKKIatBdsLGrbpBB7WP29eBrXVaijDI4KxXUtgIgFFIXgPfDDwMIFLWzs48QWn3P5k3cVs1OQqSqGDEmzm%2BB%2Bht%2FNDe0Tz9rNvACtbh0gIgnKqObQgoescenT9qVA0QljQQ7FJOUEnhF%2BdPuGqL7n%2B8uDOet3Z2UqQWsamGGD3JELLtRei&X-Amz-Signature=d6559908c0463e37140746e19f7b425373a0097fd859a94a9daa58307b5f8964&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEEWJG4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5LSQqp3xGwWllD99Q1TF6%2BAGQEekrNRXMbVpGUf%2FlpAiA2Nt%2BDh1UrKGuV%2B5DED8GFlQNL3PIWvf08nMdneVnr0ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMZ%2Fl82LlcRtVH7wvLKtwD21Cd8KF8P0ku%2FMnUfDAQiDVALlltZ%2BiJlsV9YTauIOngNrmBHFCJ5j4BMZ%2B00ZUrTM8hKedi0QbLy7AgAZNhf221onPzugSrhOXJosg%2BmkxQRiEkiACxUbpS8TMIii8eCrAVo5dtF26Z0YzlAU%2FYJet6f1%2FYn5Q0ORpRjxsL8rl3I7dxBRGCmgpPhcrKdWO%2BNHFIuumwlNpw9YP2sHATo4%2Fwe7%2FXcjbVJvVTlTd5L4GACDGsoaBTkOS6fz5lZmf%2BxCHxJS%2BPu4HT2Ka0N5%2BxlVMR4mlx8IF0CAN4gT4sefFYnc6g1v8HDS61T%2FNxY1tyZfz6G571Ht3lMcmtXKJWShfoTacq9vYgkmEe9Ydk99tc6pFRNdBVyKct1g7KXfTy7YKwjcyyi%2BaoxvoPvZ8R%2BPb7iQdVWtp8jzxwbdStW2plLvOhmm4H46t00AlC%2FSuTR2zA5dBffBjVK2O%2BhUAnR2n3xMOcy3SBmQtiZ6FugSTatcCLI89HTkbOz%2B5Jb9QwvY%2B75HMNrAftYi%2FWd92pDNb8p7n47qxAIXNrxfDjCZbOq0oHePANWAhZSGvtaboTJWx1k01iqBdi8ZQ%2FCWixRcf1InGVqQSJioW3qGjTmTT%2F8C9lkOzQI0qCsGcwqs6JvwY6pgHUntQhogfx7HW5Gr3egjNZFvYcYHiJuJcWQLIXZhMBQrfKKIatBdsLGrbpBB7WP29eBrXVaijDI4KxXUtgIgFFIXgPfDDwMIFLWzs48QWn3P5k3cVs1OQqSqGDEmzm%2BB%2Bht%2FNDe0Tz9rNvACtbh0gIgnKqObQgoescenT9qVA0QljQQ7FJOUEnhF%2BdPuGqL7n%2B8uDOet3Z2UqQWsamGGD3JELLtRei&X-Amz-Signature=aa616f93fdcf471e9877053d1c6be44580512bdd6c1e7be482d75919e835b6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GHAHRKE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BkjNtriSCh2k73fwJ85E52mFHNUIDDxx0Y7gJZByluAiEA66FtN20eNof8H%2Fmjkz3A%2BXNyQz1LwvAHLlZZKbJC5fkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGl6Y8y2T89cJ%2BkltircA40U3EiK%2BDSzmyF1FL1o9uvpE64g0GioOqeQc37H285WdtjAJF4uNVQGMeOYdNYdykhvnT4jBHl6Gajksot7rogfILd7JBjy9xL0suRLLb8bIvcRG5nVPcoYkpue2%2FMJvvf%2F8vTJ3T%2FLOThjfDIMKsgWvNul4JvV2%2BQfUtbHq29cAcJssLUX9id1xD01%2BXhvrSWbWrl7KGtPg%2FvFX7%2BbHuZ70FjwKaSY%2BsEhUgQo5e9xJVpfF7052u%2BxE9h%2B3%2FCBXN8kQMchqndj2YcqzuEkRfYMJt89AsR9v0mccr9WsNTclT%2BDQyEB2SqVCEu9epQV%2FQIdTUoZTjJ6m%2FVdbXgMSXch0GtbFkHVCv6mZSP3OV0L5psyFZUB0MoYgYZNya2u%2F9kgueGKo62782yHMeOyavPD7tiofiAwRDkee8l8ASrVoA912KlPjTzGP0SmHZFlw%2BEfJjf4mZAUkCMUPk3Vza9JkUjYtg2rrqmbXXd%2BN%2FmlekOjMmnX3Ul%2BecLlGg2CcwS%2BxuBCO5eiFGG7CH1NtD1d33QeDCV2IYa8i03TmvzmPGhWTEq0aUOewq3%2FAD%2B%2BOrqCjt4un3No6sakxXMX5Uzc3HOlKK3%2BI%2B2w48VBK0hiSbftk7TL5Kv1HrkqMLTNib8GOqUBOvZRIZdkbZudg6XinyTc0OMY6cQjOmiSEGID89aUeV1hNfDtzB0c24X%2BeGboW2Q3h7HYDzj5hRIpBWs0RkbbWC5PWzBpUwcDTDJhVSqoYtgEPWMY00nsLXN4aMmDi31Mt3Kx%2B5F8RFAGl%2BD09Ybfnc62XRcXbv2GWt5cCm3eb2RU%2B9Rdbit5k%2F4a4%2F62UZnSc6F3MWGcpHnEK6DGtEua%2BfG9qAbS&X-Amz-Signature=2a684f8d7f0de44bcd8e20654cf95af8071ad2b7b96068a7905ee02142f0d472&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHOGTCS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFptQaoCkNUKd3A9DDZ6EdItC0FryTZT%2Bg2ZiGzI1hHsAiAVwhbzJHv5FjjHUqgOKAMi%2FFMnsbX32ihJu2V6WwdyTSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMJx%2BXrpGxRR8lV3sHKtwDOw2pl5tTJgT6WDgtUEOnt1FFS%2F%2BUdtQxNQZh9Rh3VpDwN9owJuwYTsXj%2FIrSsMGVK5eM2xIqal058q9IjeGl9vtW%2BJvF1TDg%2FwtACnVUn6TemTcJL9lSMx54Ycf%2FqEiRVbLk3nKuyf5pJCaL2Qd%2BTrUbDoHenPaWpEFR155u%2FQryGQqoyOe6IeRluU0HmqfVZUNld0Q2ETTzP8pTbjlb%2Ftp49XpLdutYJjMBeLUClxXgeTVpra34OvacsCJymuGzl8ScIQWKI8%2F5canZPRloY7sOXisTWTl5HBvILEWsvocAbjZmJgZLZfEzWPYkhK09CXiNoj9DGarvjzMM4Lpfb33LAxOWPMzz0o5G3ssw6l%2Bjf1cbfXwKiPIAv1Kp9ANU0eEhd%2B0P3sWBFAWxhsAgkr3keEjWtV%2BlpTwB%2BCyRQLJxlzN7VygcW8OPITNtZwM2l8m6I87VyanLKUW8Psst5CUKYrvHVXs1oyjXJgRL883ueVyu48AypWNWTmOgvGP4HmrcfwylrjZwIG%2FkmqNba1b4x9T3PLiYrAvV91xY2XwMpSK29GpHs9uiACCAKbXo%2FHCwGKlhDgbredNIK5d45EkQxSanPPOAzI0dAhKpKBwLLz5zHnq%2FxAIpUH0wqs6JvwY6pgH%2BjmwuHAufCEYHi57MybYK%2B5x0nY4N6uyH9fiOvikpokF2iQCrtCR%2FGxDjBBqq%2Fg62P5xyD363loDSEb7ysCKSaQBY8BBBXhqE5hYSURgRcOnVu7%2B85Qs2h7Xsq7HGne%2B6058LHbuXKv9q74xUMKcs7EVXkmIF4QT7i0UevETl2dtTMtZIT4lHpzy6H2ypVvNnhrefleYXel%2FuWsjGBN%2BIKGTbkG5c&X-Amz-Signature=265aa22cb08cd357c015073e6eef6c38093d46dc296ce8e9d9beed31ee3f5d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEEWJG4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5LSQqp3xGwWllD99Q1TF6%2BAGQEekrNRXMbVpGUf%2FlpAiA2Nt%2BDh1UrKGuV%2B5DED8GFlQNL3PIWvf08nMdneVnr0ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMZ%2Fl82LlcRtVH7wvLKtwD21Cd8KF8P0ku%2FMnUfDAQiDVALlltZ%2BiJlsV9YTauIOngNrmBHFCJ5j4BMZ%2B00ZUrTM8hKedi0QbLy7AgAZNhf221onPzugSrhOXJosg%2BmkxQRiEkiACxUbpS8TMIii8eCrAVo5dtF26Z0YzlAU%2FYJet6f1%2FYn5Q0ORpRjxsL8rl3I7dxBRGCmgpPhcrKdWO%2BNHFIuumwlNpw9YP2sHATo4%2Fwe7%2FXcjbVJvVTlTd5L4GACDGsoaBTkOS6fz5lZmf%2BxCHxJS%2BPu4HT2Ka0N5%2BxlVMR4mlx8IF0CAN4gT4sefFYnc6g1v8HDS61T%2FNxY1tyZfz6G571Ht3lMcmtXKJWShfoTacq9vYgkmEe9Ydk99tc6pFRNdBVyKct1g7KXfTy7YKwjcyyi%2BaoxvoPvZ8R%2BPb7iQdVWtp8jzxwbdStW2plLvOhmm4H46t00AlC%2FSuTR2zA5dBffBjVK2O%2BhUAnR2n3xMOcy3SBmQtiZ6FugSTatcCLI89HTkbOz%2B5Jb9QwvY%2B75HMNrAftYi%2FWd92pDNb8p7n47qxAIXNrxfDjCZbOq0oHePANWAhZSGvtaboTJWx1k01iqBdi8ZQ%2FCWixRcf1InGVqQSJioW3qGjTmTT%2F8C9lkOzQI0qCsGcwqs6JvwY6pgHUntQhogfx7HW5Gr3egjNZFvYcYHiJuJcWQLIXZhMBQrfKKIatBdsLGrbpBB7WP29eBrXVaijDI4KxXUtgIgFFIXgPfDDwMIFLWzs48QWn3P5k3cVs1OQqSqGDEmzm%2BB%2Bht%2FNDe0Tz9rNvACtbh0gIgnKqObQgoescenT9qVA0QljQQ7FJOUEnhF%2BdPuGqL7n%2B8uDOet3Z2UqQWsamGGD3JELLtRei&X-Amz-Signature=4f119e217a48b0dff417ebf9490046ee6b9d7f15b7a97f4dfc2e4a54864d7f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
