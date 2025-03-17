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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX26LYP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJkkmRVW7ozZBrPkmi%2FOViW76jKShPOdAV6oCtc6nPjAiEAogTFPkjk2%2BBQL0%2Be6izDe4Ganpmqb3WtYos1MTI7IQUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDI0RkA8vbUbWyjY7RyrcA07QfVk37TB2p7TM358UTfHVnZvhMbV%2FgQKMUd%2BPOS%2FY7os39W7kBegucJ%2BoUPzAyhF3g8HGl0IihrawYFD9QYggbp05p1TXqlinEQMZUiP2Cqt%2FiKRPg%2F5H%2F0dE4OS3shhn2DZwR9S8eHOOhjcBL2vOsFc9mGAEaT6U%2BLdpZj7%2BcOPRbgCl8D4Aas89HLFoA2rqNv%2Fl7kO6wZZ1B0RlHK4pgUUbJeO7vZKs4t%2BZs7noBH16I4hO%2FbmxWRySJ4Nmagktro5VYulvsP%2Br%2F1Dbmf3hcL7Z%2BIH36x9L33b5X69PO01RgCZe8PdtKfvPL6JThhqfpHvDURPmMcwzqRspqR1zaojBoQxKgYdW9VOOG6x%2B1886V1SoLJ43SPo1yPpaGT8nQ%2BUxW6CJVoOqeJncHyEIrEA59kUNkcmWvNPIAeGsCcx1jgP3uAGRhlzdiwqzbrMXxSQFz4dMtq0G7bAx3Yttn%2BUv32zYoBhzTN9Qw%2FxX63%2BXB9VymwJDFzSnSzLp3YOTp1wrGL6BGLvq6ffLyejN2Fg9Jpg7GtNIsOkyHptV7x4LyPYSq6xXOmtNbRKnIgqb4peoOpdVt%2FRKFF1sFOuRG9lS8AP4bN63NHH%2FzSY1yLgtFFEFN8LLVdD6MPiv374GOqUBtrqzp%2FZn3s4Zi4x%2FrblwS%2BPU2PfNpJs8cqKxAAlUILZWmeOM5LK3cKf%2FwCSdpnBbZB%2BQnYIQvO%2BVhoMFonoyzHq0Tl3TEUuJlUidwo0Kfu8%2BNmMEXcmTm6BMwZPyLWODws13yn0s9tKOdcPHmhbHtYHt%2BQ6aO%2B6tG%2BYxxDjA6qvXP%2B9tg736etQYBJIQvjGuzl6TfSFcZ0OpIdSF0GlUTZY7VTWV&X-Amz-Signature=3f439240c0eb800bb4eec985446996f68acf336d5726defca5c8744c4b371620&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX26LYP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJkkmRVW7ozZBrPkmi%2FOViW76jKShPOdAV6oCtc6nPjAiEAogTFPkjk2%2BBQL0%2Be6izDe4Ganpmqb3WtYos1MTI7IQUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDI0RkA8vbUbWyjY7RyrcA07QfVk37TB2p7TM358UTfHVnZvhMbV%2FgQKMUd%2BPOS%2FY7os39W7kBegucJ%2BoUPzAyhF3g8HGl0IihrawYFD9QYggbp05p1TXqlinEQMZUiP2Cqt%2FiKRPg%2F5H%2F0dE4OS3shhn2DZwR9S8eHOOhjcBL2vOsFc9mGAEaT6U%2BLdpZj7%2BcOPRbgCl8D4Aas89HLFoA2rqNv%2Fl7kO6wZZ1B0RlHK4pgUUbJeO7vZKs4t%2BZs7noBH16I4hO%2FbmxWRySJ4Nmagktro5VYulvsP%2Br%2F1Dbmf3hcL7Z%2BIH36x9L33b5X69PO01RgCZe8PdtKfvPL6JThhqfpHvDURPmMcwzqRspqR1zaojBoQxKgYdW9VOOG6x%2B1886V1SoLJ43SPo1yPpaGT8nQ%2BUxW6CJVoOqeJncHyEIrEA59kUNkcmWvNPIAeGsCcx1jgP3uAGRhlzdiwqzbrMXxSQFz4dMtq0G7bAx3Yttn%2BUv32zYoBhzTN9Qw%2FxX63%2BXB9VymwJDFzSnSzLp3YOTp1wrGL6BGLvq6ffLyejN2Fg9Jpg7GtNIsOkyHptV7x4LyPYSq6xXOmtNbRKnIgqb4peoOpdVt%2FRKFF1sFOuRG9lS8AP4bN63NHH%2FzSY1yLgtFFEFN8LLVdD6MPiv374GOqUBtrqzp%2FZn3s4Zi4x%2FrblwS%2BPU2PfNpJs8cqKxAAlUILZWmeOM5LK3cKf%2FwCSdpnBbZB%2BQnYIQvO%2BVhoMFonoyzHq0Tl3TEUuJlUidwo0Kfu8%2BNmMEXcmTm6BMwZPyLWODws13yn0s9tKOdcPHmhbHtYHt%2BQ6aO%2B6tG%2BYxxDjA6qvXP%2B9tg736etQYBJIQvjGuzl6TfSFcZ0OpIdSF0GlUTZY7VTWV&X-Amz-Signature=60a1a126606fe1193a75bd0766e910a51217bc7ba415402d45c9ebaae2f9a382&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNIFZBHO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpHx%2FoE4sVjl9yZ0T741RIJUzIP%2FwrPYywIYBGf%2FgMNAiAvgZqBWMppFarmxajFA01u9NeuGHomtlOQF6Z4e1FjKCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMYYApddMzARu2hXucKtwDKBWqo0V3D6aIJnYk%2Bdre1yDOB7n4JHwH0LGcyUulSL%2BR4nZot03ZhKkli6V6VcFZ0yK9eOwzcCEBc0crTyrcqPhG3Z7FMq0heodNdTxy4Ve6Jt1gsbsV%2B9XpwOioTk5CS52KNCjqtxe71KwgyYZKv1%2BjyIJVnmZmbCJumXgkcf1eFBMh8IB4NUtI7SmCQ4XM3bP8I2svh%2BBdCK89PG30%2FdIVRGbU9DezFn3PNKQvigj4gXDHyVHBDai0TPPTT3%2F3K577VcCVfXlTbf0SQSPHvfSn5a7H2g9YyPGl3LEwjq4Us9vqt6dDn0NhxEZ%2FeD1Miu7otRQErIoBj0sCwnyya%2Ffb73ivyktfW7bCsBIQchVLZsUV1hs%2FXlW9VPpB5qPAm14Hdh5uLTawKWQkSDcCIehByECgu4%2BgLcfuB5BMR7Tg1QGP8dSpuBzWzcNKIawGgD9oG7qvvX1K3Tr2e1xL%2BeYM7qj4y86sgTLsMA8k0nwUP9aZRvycq6e9z8Xin9bySQ7VUkZdnnXeVggePGPHxkSw1eX%2FvZeuh6BwS038rox6MSKUyz3KWerh56Q9izPbSOzQTb1p5q%2FH5wvPK5uFcAtC5W5tZc1b19j4iFjr37LjHg5UKYQ3KuQtcjMwnbDfvgY6pgFk4ai4av%2B0FdbrhcjBLLW%2FQ%2Fx%2Fzos2CBWHwePIG4QT8xYDkzTGi%2BYsSN9iM8a%2BFFe6mmfykXXf7b92jt1ANFb2mEL%2FdWAnDNdLV3NL2R%2BuF1leKqj4CVzNY2LgYUDF0f218jsyMDfsKHHMDQX%2BUMQq4MBSTYwJFFqMsQgwbxjfopVKk%2B%2B4iR8puL2EGJ0Nzq%2FRv9zPOFFCnLvRJd6LfZCw%2FnjPaQ%2FR&X-Amz-Signature=d6de1caae05d9a3a61195af45f7fad6d9c0f9e2821b3c65a59643d9cee1db6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GVIK4G%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEwiNiYtFtfBuL2hDF%2FfvFttEd0py1vwg%2FOhrtudP3%2FwIhALgFRXIbd1byUrPxg9KoK9Gal0Mg3SyD%2Fit8VJuMwqzNKv8DCEEQABoMNjM3NDIzMTgzODA1Igx8kvFPduBXjz6ucIkq3ANltwpZN1hckw0ROhM6orOnHw7Tr2o1PMkvde2Fm1QDKjeoSIzcVm7IHQzEseiKQmo2AAflddnZfNu3cnNSDI34tz93sK3leLEid7wOSeKamMkqJPMoQxIDvOsx%2FCQ9giubfzFOjzF73yhwP6ouSx8OBunJ%2FZuFEH8hYa8T1cESDLl0iKqQ5NNZIL7lnUcZd3l7wlfHErGDvZXB6rXvFeLC0MMPaQRlUZt%2FPRYx6cZLqdhbP2W6ehtd1zfzr3j%2Bguk6ha7JAdTrI5tPyJz%2B0W6V4OeKZKSXjEN8G9BlA9pA9hSkSLHR68V%2F%2F0AE0VdF0lP8s8u7EsYygJdCbsiBJvmE6Ct%2BO04Jx%2FLNmvQ61AFym15Vm%2Fjcr9AWmiFsEaRZEn8GrtZou%2F7mbrypkJ070TAVDyyBJZldGYPuTy1IEc8bTHebVmozoSnVHwocqMWqWW%2FlTXOWQ7sC7tf4jH3uEyRd31PjrLtWZJPK8Moh22Qlx08ZjENd8kMX4JTWe5r2L3PoC6M659rnMvknci9w4x0QnEXUo0bhKngWzyl3hWRQhoTWxtyOKOM8qw1o6jXrY9hmUCNM89XFDyS36DNw1WrlVIkgzDqvwv%2BEAXZgjzmhGjIgWvLopOXFA13jNzCQr9%2B%2BBjqkAdk%2B72D1WKRKIHdiL7u2wbcgpFWsacco73QTd3HQr8a5efhrmGqeoLps%2BzeCbLfvVPgA%2F57a%2FylMmo56buogoNWHrYjnKUDm%2BcMue15rkTRidxom%2F%2B6pqDrPMYdQKJUi%2FU5M7goqDzZpyT%2F0jgYPjz6e%2FMuxtg%2FE9ae8GFyr1jvDKKQvjxJs3251YGiLbdCWvngQFs0JjtlObZNclCElxjgdQsjM&X-Amz-Signature=75a008552eada1b9b5b3d0e4ac5ba1e9315632f32b3b66d47c7131ac416cc38a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX26LYP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJkkmRVW7ozZBrPkmi%2FOViW76jKShPOdAV6oCtc6nPjAiEAogTFPkjk2%2BBQL0%2Be6izDe4Ganpmqb3WtYos1MTI7IQUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDI0RkA8vbUbWyjY7RyrcA07QfVk37TB2p7TM358UTfHVnZvhMbV%2FgQKMUd%2BPOS%2FY7os39W7kBegucJ%2BoUPzAyhF3g8HGl0IihrawYFD9QYggbp05p1TXqlinEQMZUiP2Cqt%2FiKRPg%2F5H%2F0dE4OS3shhn2DZwR9S8eHOOhjcBL2vOsFc9mGAEaT6U%2BLdpZj7%2BcOPRbgCl8D4Aas89HLFoA2rqNv%2Fl7kO6wZZ1B0RlHK4pgUUbJeO7vZKs4t%2BZs7noBH16I4hO%2FbmxWRySJ4Nmagktro5VYulvsP%2Br%2F1Dbmf3hcL7Z%2BIH36x9L33b5X69PO01RgCZe8PdtKfvPL6JThhqfpHvDURPmMcwzqRspqR1zaojBoQxKgYdW9VOOG6x%2B1886V1SoLJ43SPo1yPpaGT8nQ%2BUxW6CJVoOqeJncHyEIrEA59kUNkcmWvNPIAeGsCcx1jgP3uAGRhlzdiwqzbrMXxSQFz4dMtq0G7bAx3Yttn%2BUv32zYoBhzTN9Qw%2FxX63%2BXB9VymwJDFzSnSzLp3YOTp1wrGL6BGLvq6ffLyejN2Fg9Jpg7GtNIsOkyHptV7x4LyPYSq6xXOmtNbRKnIgqb4peoOpdVt%2FRKFF1sFOuRG9lS8AP4bN63NHH%2FzSY1yLgtFFEFN8LLVdD6MPiv374GOqUBtrqzp%2FZn3s4Zi4x%2FrblwS%2BPU2PfNpJs8cqKxAAlUILZWmeOM5LK3cKf%2FwCSdpnBbZB%2BQnYIQvO%2BVhoMFonoyzHq0Tl3TEUuJlUidwo0Kfu8%2BNmMEXcmTm6BMwZPyLWODws13yn0s9tKOdcPHmhbHtYHt%2BQ6aO%2B6tG%2BYxxDjA6qvXP%2B9tg736etQYBJIQvjGuzl6TfSFcZ0OpIdSF0GlUTZY7VTWV&X-Amz-Signature=585c67d5ba093d322fd3e315cabfd003e9f89ff3facfeee41bcab4dbf772e10e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
