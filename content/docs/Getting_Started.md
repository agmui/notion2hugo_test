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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTZJHXG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3jH3GsXmjHdNXu%2FXXfY8Kg0VhbIJkbAgsdic5Y5UnQAiEA9dnsfL82wd8nSQPZv4e1n4fY6JOPqI%2BU1CPeiKA4dyYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNY1JZVWepYMtuKhayrcA5afM16fNqk5C3USK%2BkKyGkyp%2FCyKwnzp8iY0y6WurfGuyZ2zJ1zR0DcDplPqs9xpPvs3JGMAJhVCz1M94N4sL%2FmO1Qx9smiQY%2F0cxEot9IpdbdnNmBNymkwQykv1F6688p7gnVswPJJl1CejmPbF28%2FNHUIXM9%2B7hCVcU78cGJnn6c6DQCn4CfwDADINiRUh38Q4k5xtzybzB93knaknYY1fz4KVs3%2FelDlaKrY99pUU9X3lsyzoegSKkbXMQ1%2F%2F%2Bl1ZNUjaFs%2FwTRM26DIWHjEs2OheDGiYEI0Q82DtmXOjErHEY1TblYbnz6WJDNSyMZKJNDNnSFlDFPfCIcgK6H7l9KBllpSG0%2FvgbWqr76397l8%2BaN8xIGXccXSRNt5QARQemIO6HMkP6rdv2iH7nMRO3rboYe29pP0qeEfxZBHOBlhv0IGuJNJR7VN2O0r5yxoWqNFDBSOQpY4WMhiWKQFCeC2LHGaXa%2B0K5xPU2K2J1wlokj5iyU0k%2FV8Mz5bNf5BCi2q9C%2BBgKuAZOL3lI6wwkWuY%2FcH6nVre%2FSuQSnEfIQnleDlJtEtCrJtaxpbd5X7KSrl8byFMVUA2Km2WxAh93x6qh2TqTcG4po9stQzObE%2BJdjbSiudc0oCMKaitcAGOqUBDdTSAXyPVXwCAPXgDswn7DdbWfR%2BUs%2FtKNj%2F4zytCToe7gSZGb7KiG4CvoREntpqjQY5bAJ1QjL6zvtkj%2FMRVLswr6AenIz5yso2MeqVQAp9Mbewn00IKe80W7IC0fCxJxizg15E5ptxKZFr4i32dSFZNdmQtR%2FXUGtChI%2FdAk8AuoMNwbRyk%2B76OFKTkD6yRsYfij6GHRe9lPvtr7dCNfFPWRs6&X-Amz-Signature=96c037da7998e54ade738783dd86e555d22cfaec82c378d2be4cacdf95f711cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTZJHXG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3jH3GsXmjHdNXu%2FXXfY8Kg0VhbIJkbAgsdic5Y5UnQAiEA9dnsfL82wd8nSQPZv4e1n4fY6JOPqI%2BU1CPeiKA4dyYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNY1JZVWepYMtuKhayrcA5afM16fNqk5C3USK%2BkKyGkyp%2FCyKwnzp8iY0y6WurfGuyZ2zJ1zR0DcDplPqs9xpPvs3JGMAJhVCz1M94N4sL%2FmO1Qx9smiQY%2F0cxEot9IpdbdnNmBNymkwQykv1F6688p7gnVswPJJl1CejmPbF28%2FNHUIXM9%2B7hCVcU78cGJnn6c6DQCn4CfwDADINiRUh38Q4k5xtzybzB93knaknYY1fz4KVs3%2FelDlaKrY99pUU9X3lsyzoegSKkbXMQ1%2F%2F%2Bl1ZNUjaFs%2FwTRM26DIWHjEs2OheDGiYEI0Q82DtmXOjErHEY1TblYbnz6WJDNSyMZKJNDNnSFlDFPfCIcgK6H7l9KBllpSG0%2FvgbWqr76397l8%2BaN8xIGXccXSRNt5QARQemIO6HMkP6rdv2iH7nMRO3rboYe29pP0qeEfxZBHOBlhv0IGuJNJR7VN2O0r5yxoWqNFDBSOQpY4WMhiWKQFCeC2LHGaXa%2B0K5xPU2K2J1wlokj5iyU0k%2FV8Mz5bNf5BCi2q9C%2BBgKuAZOL3lI6wwkWuY%2FcH6nVre%2FSuQSnEfIQnleDlJtEtCrJtaxpbd5X7KSrl8byFMVUA2Km2WxAh93x6qh2TqTcG4po9stQzObE%2BJdjbSiudc0oCMKaitcAGOqUBDdTSAXyPVXwCAPXgDswn7DdbWfR%2BUs%2FtKNj%2F4zytCToe7gSZGb7KiG4CvoREntpqjQY5bAJ1QjL6zvtkj%2FMRVLswr6AenIz5yso2MeqVQAp9Mbewn00IKe80W7IC0fCxJxizg15E5ptxKZFr4i32dSFZNdmQtR%2FXUGtChI%2FdAk8AuoMNwbRyk%2B76OFKTkD6yRsYfij6GHRe9lPvtr7dCNfFPWRs6&X-Amz-Signature=c312148dae27ecc855b9584e119addc74d5b148d5f33d49074b599675b6e5ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JIPGM6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2BcOA77cYDqWMQbDjTJ6GVEWnrJv%2B2H7fJaBqM8muUgIhAIlqbVa3Ba8OhIJ22Po%2Bi%2BRMD6e%2BSyuEb3mpX43CqiS8Kv8DCE8QABoMNjM3NDIzMTgzODA1Igyqq7NK9X%2B%2FtKNk4n0q3ANALW86n%2BR5FQemuwZPftXWEHjgeGQb%2B7SCH6oMEBa%2FrIq684V2bI0JPetfKoQ06fxQHBLQP8mDL6uwJJJNfunCtmkSrI0YOyQpYGjI5l2Zyfoi91Q56LhLinzSYgrgHEwzy9Girnil0wkmyu4bUoG%2FiCOHoN8HlEUoRxTzJ1bAPL1QrXh3bN5mkEvJUIENo9X4zvUt8iINPfxoHKhLNN%2Fxc%2FsC2ZKbwTYliT1KE0bkvXbREsgAVZ1y3CwFi7xi34YHMIDgq80eMDhM%2B9NJzgmQNE1PR6mYqeMARBbvEkw3drqcx%2FV7wupEd9uI2UVMJ0fnSyHD1YhBf9%2FoLnVVCICae4mywpyHR07LpsKZRvnX6ZfSLk2H18%2BK4R%2Fvc8C%2BvPXLBRf%2FcFJ6pmXHXsnL1LKaZokePtSUv9pvEqP8zYkcrm15KurN7qs0ic7Qi4EM1D4NfPQL80V2ffBqAqbVzph%2F7qfcV0QvKBSa1tdxgaROoh5DcmHblL2aRc93ZLZ23W1CcYdTvQRGBGvHxMs9a6PUcKbOB%2BSTOUgpKo%2FygXYLz4hcv0vZ83lqNP%2FOnD7tbPpTPk3tPlomiPmMVF5pzMXyVpX2P6pEbmU%2Bbav0HFczAoXGa5iYyOQIF1nvzzC%2BorXABjqkAfZvm43FauJFQFQSUxtYTst2SQM4C%2BzxpRhVMeccmleq7EUZB3%2Bv7sxR3ynJgYJxuIQ8%2FCeIdcFNBgj4BRoG3893XnooxW05%2FBChNq3EBo%2BPM5rslgWPRxNR9swFaOrZriDQMkX4EuvK7VEfUrERczsMfXOwLFUaakM5srUJkpQayv3o5uNbeM1YHlJ5%2BCtf9x6O76WcFFywEpu6EuXcNdBHmCp0&X-Amz-Signature=3dcf7b10dbcc139374b7a7e6bffcab0aff3d4d228450d9c24ce26c00893f3d68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O557ZYE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvSxsdaiU2AkJNGMDYcitZWRzoLBQhW6tR7MqpCD0jzwIhAK%2FCxuiibtDHXgtWNEEZ40IEG%2FsI7J5rbUHk1f3tFV0mKv8DCE8QABoMNjM3NDIzMTgzODA1Igx5voUJH9tNn5%2FK0rsq3AMJ3IN9oio7JWJT9%2F9k8FCFa0aIIq9748m4g4bmAg1dMCwLMdMIWFWFxDmDd1gGNlqtfWi41YNNYE29R9j8bvHo9a3DAKNZGhWgSxq6zfN9KY8hhHJzjPADrDVXRBl5HqXF%2FqjQ0vAuoRlToRnbo5o6prClR5Yy%2FN%2FaGZTTKeyBIyyYdr1qGHQxSBFwGPiZnXUnGkYa5ruJGZtbjsGHCmCFAonNPlA3u84DZYjZWsT%2FAJg4TKbz31PbPFqeGw6av8h28UilhaKy8j16%2B4eqzUC7YYuq4uUDD%2BY3z2TAzEaYi4zwURArRBYYD4N%2BM%2B%2Ba8RhKLskJOBEWaylaVT7cPDsaJYLDcdfQfKcACryh6qKFdbgX03Ttyva7cwWZS77b0uOMUJxD%2Bc%2B6O2zMSIXVUVqVG5w%2FY38lXcGX49qtFVC100sQQtC5cKHpR5z1wYVQW67TVE2fgoWC88oQ6XQ15ow%2FQaW3CNTn7pgG%2BnINVpmU2WsxA9y4bkK0n%2BaZHWMCJY%2FLKX846%2BgTmvY1bfIXxDeqJNVKVGQ3FR8evwl1%2BDuSvIKwOjoK5uBEET%2F1GIzfiSWI0ARCbyCmvT%2FfcXpWrAYe53cMoOn1XoZ6fHLpzjlZODv8LnvNFot3cBTA2zDUorXABjqkAQ5XgPfUEpX4L9yeNVM5YYUN03gKFgG5GIygoK5%2FkMf52Asd%2F7kXrUILxg9v2yJPvHOR9CIoLcVVkYCZUeJ19CqEBz6eyww8t3Zx%2BTSXY08eKkknIewK9BKTAf6hJllN8IkfnJv7wXxqjm3kwsbf%2FfNXGASy4QiuS646fkSbbSGU7FA5Xo2dqlQF56gJl9EBPwmj2tTYbkKg2RF%2BMCMFHAlLyWmh&X-Amz-Signature=3d350c0767af1732e817405c5ac523a6b562e57b065074e82e424bd3a1bc819a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTZJHXG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3jH3GsXmjHdNXu%2FXXfY8Kg0VhbIJkbAgsdic5Y5UnQAiEA9dnsfL82wd8nSQPZv4e1n4fY6JOPqI%2BU1CPeiKA4dyYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNY1JZVWepYMtuKhayrcA5afM16fNqk5C3USK%2BkKyGkyp%2FCyKwnzp8iY0y6WurfGuyZ2zJ1zR0DcDplPqs9xpPvs3JGMAJhVCz1M94N4sL%2FmO1Qx9smiQY%2F0cxEot9IpdbdnNmBNymkwQykv1F6688p7gnVswPJJl1CejmPbF28%2FNHUIXM9%2B7hCVcU78cGJnn6c6DQCn4CfwDADINiRUh38Q4k5xtzybzB93knaknYY1fz4KVs3%2FelDlaKrY99pUU9X3lsyzoegSKkbXMQ1%2F%2F%2Bl1ZNUjaFs%2FwTRM26DIWHjEs2OheDGiYEI0Q82DtmXOjErHEY1TblYbnz6WJDNSyMZKJNDNnSFlDFPfCIcgK6H7l9KBllpSG0%2FvgbWqr76397l8%2BaN8xIGXccXSRNt5QARQemIO6HMkP6rdv2iH7nMRO3rboYe29pP0qeEfxZBHOBlhv0IGuJNJR7VN2O0r5yxoWqNFDBSOQpY4WMhiWKQFCeC2LHGaXa%2B0K5xPU2K2J1wlokj5iyU0k%2FV8Mz5bNf5BCi2q9C%2BBgKuAZOL3lI6wwkWuY%2FcH6nVre%2FSuQSnEfIQnleDlJtEtCrJtaxpbd5X7KSrl8byFMVUA2Km2WxAh93x6qh2TqTcG4po9stQzObE%2BJdjbSiudc0oCMKaitcAGOqUBDdTSAXyPVXwCAPXgDswn7DdbWfR%2BUs%2FtKNj%2F4zytCToe7gSZGb7KiG4CvoREntpqjQY5bAJ1QjL6zvtkj%2FMRVLswr6AenIz5yso2MeqVQAp9Mbewn00IKe80W7IC0fCxJxizg15E5ptxKZFr4i32dSFZNdmQtR%2FXUGtChI%2FdAk8AuoMNwbRyk%2B76OFKTkD6yRsYfij6GHRe9lPvtr7dCNfFPWRs6&X-Amz-Signature=b98057cffa39dcbd6cf4f9edff83778b2418094c96843cb9ffbcd7b7be8b97a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
