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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L2GOES%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCTRXOb8e%2FehO9J1xe4Vfjdvtw9lSy9b%2BvLsrSY00lbfgIhAJppU%2BERJmK6490PALpPMnDJIVfL3wmI0jANGKpyuJfhKv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2B8uj0D4fZ6d6%2FF20q3ANZaGII%2BNonXZGUUdmg8QnHNXe6WFk8IUygZMag7e65QUwD9ainyBH6mvcDlUF%2FXWYQgP1xP1ACLfFAfOPWZa0ebCxnYeUVuCTcd4THBXuBL7mrSYIMRbTurRyebeVj%2Fh03%2FEeFa5vEQMQCW364G6zkBWC%2FFV%2FDCqv6hl8qqTkyvGyU%2F7eqFtJ3up2ORJSpyalIx71oWq9RfjRE%2F%2Fz18WXEOAXb335NZe8AUKqVR5gWwrBLqJ%2F%2B%2Bci5ZpFufyejeGXGroSvEFkqPQzgKqjJXykQeaaPEjiAp4Mb4MFGkAvHahcDvW2ob6reG7FjPJVTinm8RYgnwPRNAm3ImkD0k6DSDlGrr1sv%2FZOV9EUqhIvsC2qfFGy3W1%2FoF1tSyHRhwQXoGQHdRm3hJ1iyZSca56DMIzuw1OLM3Q3CfTDQ2NgaxCsk%2Bw8pPdM3IHLmNNW0yHvaf%2FMQ0Ta7trnE6mgfyTE97gimuntAvUk0ZbSz9yJl26UBW5FkZNvKDr0Z%2BhyCsHnGg%2FK25xT5HXj4umwLoyI99C70ug6%2BXunPx7bRkazRiRIxMAKl3ZeFEHc8AFWAoqeCMfSew4J5NWQNiRvFt12hejhk%2FHDPfRByvnC0AsUeAgkakpRXx201kM3bTzDPoKjABjqkAQjYZKr1qNSQMrEU6aUxxmiHH1z1w0XK%2F38wds8C7rd9fWEZEZldNRnoiBKd52svXJ7J2M2O%2BBjd1Vai9GBzaUopTvDN98kY4xYFxQR6jztZOck3YMu%2Fryd%2BPQHGuviqQkvUHnUaatPCV8DIyN4cmyqje9puxmyfCpF0VOrmgA8AS%2BUpXtY7QagnJvVgaH1RmxPlLjXYA59ruO1JvdOLl56Q7l6q&X-Amz-Signature=04533a31977bd02c9575d7442bd90fb0310ce698d727b2d9917cc73fd9b1bced&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L2GOES%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCTRXOb8e%2FehO9J1xe4Vfjdvtw9lSy9b%2BvLsrSY00lbfgIhAJppU%2BERJmK6490PALpPMnDJIVfL3wmI0jANGKpyuJfhKv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2B8uj0D4fZ6d6%2FF20q3ANZaGII%2BNonXZGUUdmg8QnHNXe6WFk8IUygZMag7e65QUwD9ainyBH6mvcDlUF%2FXWYQgP1xP1ACLfFAfOPWZa0ebCxnYeUVuCTcd4THBXuBL7mrSYIMRbTurRyebeVj%2Fh03%2FEeFa5vEQMQCW364G6zkBWC%2FFV%2FDCqv6hl8qqTkyvGyU%2F7eqFtJ3up2ORJSpyalIx71oWq9RfjRE%2F%2Fz18WXEOAXb335NZe8AUKqVR5gWwrBLqJ%2F%2B%2Bci5ZpFufyejeGXGroSvEFkqPQzgKqjJXykQeaaPEjiAp4Mb4MFGkAvHahcDvW2ob6reG7FjPJVTinm8RYgnwPRNAm3ImkD0k6DSDlGrr1sv%2FZOV9EUqhIvsC2qfFGy3W1%2FoF1tSyHRhwQXoGQHdRm3hJ1iyZSca56DMIzuw1OLM3Q3CfTDQ2NgaxCsk%2Bw8pPdM3IHLmNNW0yHvaf%2FMQ0Ta7trnE6mgfyTE97gimuntAvUk0ZbSz9yJl26UBW5FkZNvKDr0Z%2BhyCsHnGg%2FK25xT5HXj4umwLoyI99C70ug6%2BXunPx7bRkazRiRIxMAKl3ZeFEHc8AFWAoqeCMfSew4J5NWQNiRvFt12hejhk%2FHDPfRByvnC0AsUeAgkakpRXx201kM3bTzDPoKjABjqkAQjYZKr1qNSQMrEU6aUxxmiHH1z1w0XK%2F38wds8C7rd9fWEZEZldNRnoiBKd52svXJ7J2M2O%2BBjd1Vai9GBzaUopTvDN98kY4xYFxQR6jztZOck3YMu%2Fryd%2BPQHGuviqQkvUHnUaatPCV8DIyN4cmyqje9puxmyfCpF0VOrmgA8AS%2BUpXtY7QagnJvVgaH1RmxPlLjXYA59ruO1JvdOLl56Q7l6q&X-Amz-Signature=6f486331a5517e041d0cc15a0a31430fdb506152c4160644fb771a05ee3ac941&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6M37JI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDyBJrma9AFiu3MKrtFVmvzgqxECFT8AnDkLc%2FKE0N%2FowIhAMG2%2BLq2E1WwKXLu6M4U%2BY%2BTJv%2FTLYMcMPNu4TWpQrffKv8DCBMQABoMNjM3NDIzMTgzODA1IgyQzL0PSLH82uyyzTAq3APMmQ0saRs1MYAEVy1MtBPaHJpxgzUNt7qxQ8w9kd73ilxWRi48E5i97Y7L%2FfBBGj4l12Irou04rDIzpS4cj7WzcSNWRCPonSbsHD1gawJGWcF50wkT%2BNSwTOFtKF1MAv3iVBxPmVcIyp80Ua3xpLtmKV3%2FD2U0LOGLBplT3o4cZs0GFzehX9zBGmFUhU9ZDCHW3kU6XddlqkSUV7fMEpED7udRTQtKb8auYve2pyhAfssJUhIBg9bcf4SOVjYaDSA3wNb3jgQ2UFZWg02L8uY6vspGGnVqgZfT2CynDD3Uw28gCXWy7%2FxzLbxfmJ2pWpEis8Xco%2BV5cnGCLhHtBJu3bAChNYvP%2BTEQrJ%2FVicskqyI0DSCoNDlItzRexkhAZU9QJf0Oo2v58UtL0hErxjrSOKJNnXc2ZpwcSwx39U3aQPZanGKDJ71FBJ968GsnmoH2yE2E0KkWEZpfO8raAZxpYyutcS%2FN9P%2BRapB327ijQRNkTysGzs%2FWcmdKlPeNMXYXg9wJO6jkJpkXyRMD9j2o7ul0hbpW9J67nhn0J8mObyQLHhEvkSfxQIygyExPeTWgHmfKF4rOMCDiEK88B0by9TrYw%2BGks3ilHkWdY0RDUe2xm27PIS4f2RCL2DCCoKjABjqkAffEmk23QzfJBTXSExZUqF%2BHe72yteoZrmsN%2Bl3FUn2JfjvZcOP%2Bpmd9n7vvvnMeTKBKOtJZNtda%2BgFvX4%2FUii2CWf7AYWOzQauEcB4HX7ADI0g7Xh7M0P7dH7cR9HnEMxaubd7q88eQ4X74HwzzxU81SaMG2eWpsU7ItEEtQ%2BOeKqdwMuYbc332xs%2FHcTZMA2B9DRkyZUG728E3EmtCV1ldgDT6&X-Amz-Signature=d6bf1c583f94aa0a8a3bfae4dfe6241ddd700ea9f5d2b1e109e2ebfc72282220&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKJPWFX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBvOPhSaCp%2F%2FCKZI62V9Ht%2BAeGDqSwxbu6lgpYWtJ%2BogAiEA8c1FH05srG%2FpHUYZdbf5b9SGvnqDtsYBWJC%2B43nEa2kq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPPJQpLHsAMIDKrGXCrcA5QsxjedseGYQWorVQkKMbzsMoa0dPkWCHZW3wina54ma%2FkLhpPJCtTQqxMHCe9RM%2BcC8pRwD5HBJ2E%2B%2FGin32n3dWLqEUeqF7kzbiKzRi53c%2B4OQXbr9WC2VANRT6Iwaleu%2Bing0A0fc%2BTEtiqxQiMDq5Hiw6RH6jwOCiX4y%2FPLM67B1rEEfnGjipONPjcB%2Bd0Q0szq3Jzi4LG8ZCGMRG8mzJ1xpEbkfh%2BOZ7j4YTy8bziFa250mtGNLnlg4jz78VmDHkTxKe8YCuDoBycm%2FS8KpkyzutxzZRh2Qv2UhUXciO2nU8oLrR3P6w3pBjt%2F5%2BbfAawvNLcefqu5EZAqbltTJSCnymrv4oseGHOOmb6TW8kXnWYOlvkcH8geubSN88b2yrIRV7Jl27R%2F%2B%2B3vwPV0WMLnvkmniWPlv%2BKSKQ4Bvb9IaNIAr5z3Xqw1UV2XCsrN%2BHRcy4fxflsprzPKdtjWfUdbRb4I376HQp7o1VSToNmsyQdTZZXlVJXKOqqRgPMZvjqBY%2F%2BRnilgdRw83ZMfiDOUAdagm1zHJM2HKRHKA0k8LjU9PbYm30Cpd6S9xTSNC%2Bmq4aMNP8kazXbgeWMernXiljfbxsZMQpn%2BZculsD3UnAVffR%2B%2Fpp5PMNOgqMAGOqUB62R2KsIMAt1Yy6119hT62KYRnpcdLZR21FiSAYWsqlLzmyI%2FXU%2BsDACHgMCBb0wmNVKmcCwZDqb7YHAxcanV2nwO99yzndR6eUNjTO8OLqF%2FzHJPorRT8j3Dr9UsPjn8HLz8%2FJrajIJFOMDv7siD3S7gRrd70ACkdnujtZE4YfXuPJZMVr8MiCGZ%2FjrIThQgFdejK7TsjLi%2Fsqp%2Fhg%2FJPEuIOqhB&X-Amz-Signature=b8d0e4add23d98440ef3750f083d759c1a690931939256e6b1b1f51785faa483&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L2GOES%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCTRXOb8e%2FehO9J1xe4Vfjdvtw9lSy9b%2BvLsrSY00lbfgIhAJppU%2BERJmK6490PALpPMnDJIVfL3wmI0jANGKpyuJfhKv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2B8uj0D4fZ6d6%2FF20q3ANZaGII%2BNonXZGUUdmg8QnHNXe6WFk8IUygZMag7e65QUwD9ainyBH6mvcDlUF%2FXWYQgP1xP1ACLfFAfOPWZa0ebCxnYeUVuCTcd4THBXuBL7mrSYIMRbTurRyebeVj%2Fh03%2FEeFa5vEQMQCW364G6zkBWC%2FFV%2FDCqv6hl8qqTkyvGyU%2F7eqFtJ3up2ORJSpyalIx71oWq9RfjRE%2F%2Fz18WXEOAXb335NZe8AUKqVR5gWwrBLqJ%2F%2B%2Bci5ZpFufyejeGXGroSvEFkqPQzgKqjJXykQeaaPEjiAp4Mb4MFGkAvHahcDvW2ob6reG7FjPJVTinm8RYgnwPRNAm3ImkD0k6DSDlGrr1sv%2FZOV9EUqhIvsC2qfFGy3W1%2FoF1tSyHRhwQXoGQHdRm3hJ1iyZSca56DMIzuw1OLM3Q3CfTDQ2NgaxCsk%2Bw8pPdM3IHLmNNW0yHvaf%2FMQ0Ta7trnE6mgfyTE97gimuntAvUk0ZbSz9yJl26UBW5FkZNvKDr0Z%2BhyCsHnGg%2FK25xT5HXj4umwLoyI99C70ug6%2BXunPx7bRkazRiRIxMAKl3ZeFEHc8AFWAoqeCMfSew4J5NWQNiRvFt12hejhk%2FHDPfRByvnC0AsUeAgkakpRXx201kM3bTzDPoKjABjqkAQjYZKr1qNSQMrEU6aUxxmiHH1z1w0XK%2F38wds8C7rd9fWEZEZldNRnoiBKd52svXJ7J2M2O%2BBjd1Vai9GBzaUopTvDN98kY4xYFxQR6jztZOck3YMu%2Fryd%2BPQHGuviqQkvUHnUaatPCV8DIyN4cmyqje9puxmyfCpF0VOrmgA8AS%2BUpXtY7QagnJvVgaH1RmxPlLjXYA59ruO1JvdOLl56Q7l6q&X-Amz-Signature=b5ade4c15e725941b60530ae58f320d15768823cdcfe0225b58b5e361875ff12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
