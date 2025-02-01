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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWPCMIQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FqqHQKeXKp83I7lt0YzzkniwmbtmYGki%2FvunzFr3viAiBjVxKMuHhHunhSbRCQn6HPP98dL0chX9LGp3J54%2B32viqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU7KQF9MS169pmsdYKtwD5bGpMk4sJ8Th%2F7V1sRaX2YdZaXi4ZtyheVH6XpH5KsbGpocRnddo%2FsLm68IvqHpMt7r50Hgk%2BlkXuJnI8e%2BKyF2yqv7O5O5UYmZChGse7lMfCwSnwPGMWFvLFssjPJcv%2FmcVNYmn0Az%2BBtcYLx0b%2F%2FmvbuS%2FmDBkEaCp%2B7IE2c3Kf%2FhdGLsUO4Pp75jkGrQtjOedeBG3sx5cpxCMHMO3KgLkN%2FxZuxBzMG3V%2BOGjhQBwCLul%2BG98PJdO8Zg47eM1D5%2BdN%2FI17wIlDSOncCQJbK9PUpLo%2Ft8Klh%2Bsc3oWoxG9SC9D3diAy0TWK0LscaN4tYa%2FxY%2Bq%2FfqMcEcOzdZ4DQuSK3eT4zz8zbdIRB92csmT4IhYdi5jNflz9w6Jy3dfxMvByDHxXqvGkncp607Xa8fCIiVQWfI5rPlLIFCloYrbmzB%2FPOUgRyvoWPHUMi3EpB9b5yUh%2FwE5d4VfZjLq3Do8%2B4S0zK1v6jQr1t3bYEGyTJFYtlU6IcSSQllNE1Uk6EJ6ZZXThd0gx6rWSSXrITKf5Pa8Yzwsr57CEVVAOKMYXuCR0XMntj8676k%2BJEECuXertoEmh%2B6XzdWuYYHn5BDA2bCU%2BqOjkXj%2B5iWsQgizhogkMILqS9X0ZyAw88P4vAY6pgE6xH6DOafTsOYTY3dwRoQg78KEpqb49l0M%2F7cEPdnS84gXgtkJrt%2FEEx4HDJBaMrewmy3x%2FZQF%2Bg8KO77SPWrWsk%2BZy35VH2EuPLeCTF8ndpvf53RKVf137TFNY4d4vipTcor2WT0N5JC1JT2rg9OUc8pcaYUq08SCkmAjiLjBYdZQ6NixuKmt39JCoJUTjkM9xvTund7PZOSkpKh%2FuWe6Vy3uaaNO&X-Amz-Signature=c2abffe3a296c0a57922a6c9deb277269d5bc2a283fd9c44ad794077170bfda3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWPCMIQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FqqHQKeXKp83I7lt0YzzkniwmbtmYGki%2FvunzFr3viAiBjVxKMuHhHunhSbRCQn6HPP98dL0chX9LGp3J54%2B32viqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU7KQF9MS169pmsdYKtwD5bGpMk4sJ8Th%2F7V1sRaX2YdZaXi4ZtyheVH6XpH5KsbGpocRnddo%2FsLm68IvqHpMt7r50Hgk%2BlkXuJnI8e%2BKyF2yqv7O5O5UYmZChGse7lMfCwSnwPGMWFvLFssjPJcv%2FmcVNYmn0Az%2BBtcYLx0b%2F%2FmvbuS%2FmDBkEaCp%2B7IE2c3Kf%2FhdGLsUO4Pp75jkGrQtjOedeBG3sx5cpxCMHMO3KgLkN%2FxZuxBzMG3V%2BOGjhQBwCLul%2BG98PJdO8Zg47eM1D5%2BdN%2FI17wIlDSOncCQJbK9PUpLo%2Ft8Klh%2Bsc3oWoxG9SC9D3diAy0TWK0LscaN4tYa%2FxY%2Bq%2FfqMcEcOzdZ4DQuSK3eT4zz8zbdIRB92csmT4IhYdi5jNflz9w6Jy3dfxMvByDHxXqvGkncp607Xa8fCIiVQWfI5rPlLIFCloYrbmzB%2FPOUgRyvoWPHUMi3EpB9b5yUh%2FwE5d4VfZjLq3Do8%2B4S0zK1v6jQr1t3bYEGyTJFYtlU6IcSSQllNE1Uk6EJ6ZZXThd0gx6rWSSXrITKf5Pa8Yzwsr57CEVVAOKMYXuCR0XMntj8676k%2BJEECuXertoEmh%2B6XzdWuYYHn5BDA2bCU%2BqOjkXj%2B5iWsQgizhogkMILqS9X0ZyAw88P4vAY6pgE6xH6DOafTsOYTY3dwRoQg78KEpqb49l0M%2F7cEPdnS84gXgtkJrt%2FEEx4HDJBaMrewmy3x%2FZQF%2Bg8KO77SPWrWsk%2BZy35VH2EuPLeCTF8ndpvf53RKVf137TFNY4d4vipTcor2WT0N5JC1JT2rg9OUc8pcaYUq08SCkmAjiLjBYdZQ6NixuKmt39JCoJUTjkM9xvTund7PZOSkpKh%2FuWe6Vy3uaaNO&X-Amz-Signature=04bc9ebdc37eda112da9c697f07684f344a3566855efe9b97ccca36ab2520379&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OB5JSAJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGttQXxQQ8EnMgx%2FraQ6aD3%2BvIHOuztLbfNBl2bYEASXAiB2Nry5rfSNaFXun8Bg2q%2FBi67Fg1mbynY9nfYm8C4LqCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FTIDGtCT0TXx0FYKtwD8%2FVDTjHMX82F5SSwUm%2FisTJim%2FBZqBMbZAuoB8r5AVck4pwgXFsE3w1fN%2BJh2J7pUT9al3Asxgdv8s1HXv5SmDy3%2FxCWdY5WehzzFdWW%2B4t6WMF3iBTHRCbBi2onXKNLSsaGg%2BtucDpsS2RPEuE%2FR2elmqgustLTPfupbcXwDGS3T9%2B7gSUmY14%2BNwzkwKeMxfTkj1s4nN%2FK%2BBcFBdK2S8KA8uv%2FRk%2FuT%2FDoK%2FAYkx7zIwN03IfTjYsW6q%2Fhl0aKLwiGjj9cyekeNeHyZxea3IVRooRu0MSIX02HpSY3R6CyYorSC9LQR%2BD2Zd02s88mUeWgaj9AhsgMabOWMFOaMKdHMx7tUqjYhfBSyhumIoa88JL%2F%2BUGd%2FLJb2DDiUVIInN69mTXphAUJ8nD%2FmoxXbLXFTVvGPnZx%2F%2F%2FF0FS%2B%2BQc3qSj27bi75ftQvvJUPgbB%2FKOyUQJqJyxZddwDuE4e6Flid1co3k2ExzFhgHozJIlGgFe2lrzA2sdCZULkmLBP8Jrj0NOMeQKj314h3ZR0JQr1uzBdAUu67YuRK6jIcTy9C4PjfCgpotYTqurK6GXywAKt5zDp85tvrzTPU3E6CIudqFo2PSodh9kFAZW3FFa3z0Uby3IUGdlp9tgw2MT4vAY6pgEfv7GF85Gh8W6oQC6opElcm7FyKF5kMD1JrgPNTlMSEgi5hyDS6GOxgrJDR79l7o5wz9w39Fi8W3d2nshOsOh1JCCM199wox7HKxyFNva48bNuqNglKxXovlqqYKSbtt646EA7ouONaUrXde6Tydjre7YNo7WFKVnjMcSPZdiFEWUcCVzy126OKXTYoDKYQLxtvxOSR43TMHVtwv9wZMaYPfBaOoIO&X-Amz-Signature=8b69e6a3750f0821d7d968907cbd12f887522c3edd903aa9d50f06d96c64e444&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMDVJ5Z%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUoFkB8Ex%2BCeTJVj0UXfNl1V6ClQLsTOlnRABJ90abxAiEA%2FdMZLtVn74WbrIvYMyk2bL3NPE5wpVskuiWSLfXQlmgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTu9Tq9i%2FHTP%2BWhGyrcA8YtWwxrUIMR7l4aNCR2%2BmA5Bfm%2B0ctwOTliuCEuINAA5xGfzV9JOqC2dufwxzgR0WxKd%2BNUJ7wBCjvxHwkW7qHJduFbYgDimttGlWupkZWgG9MWLdGuhIe8hsghgzgaMW3LHadB%2BuxThiuCSDQZDXnfht3Tn2bh%2BypHpdj0oNEnvb9m2d%2B2dOqL6451bRMYlpFj3Ao5jidNtCOzIOCese9kH5Ks0JkSDeoqFBbc2vEDhpc8tmts%2BiuDCiMf8XAzAGhfmKxcVjrkG53sJhEULyTgwznYkBMhVtHBSH9fV6aLGxgh5XXZawimCun3zdinUQY54vsPWr%2FenMrcpDYgZzP%2BCQMdRia7Ie4iZ9zoI4d6v0saF%2BJc5GL9uk4qJ%2B0vwMZjhS%2BIJR1WJnb3DVkiIXY1kecP8GFiTj8v08wT%2Bb1jTTQojEDa9Yn3QFE1tBwT3mtywJ4yh4LR4j81qZ9IrkS4rZ30LTlTSH0vTzFivUJNv74x5xPKkbpoLD8uoxUiKCvMTPKksScufFfXOBSRds%2FV1JRsp3ZNeSHcRaopc1IZ%2BxujsO%2F8pNDg92ojs6iz%2Bl76gBEJCdRIkMjmQn%2F9KAaee0nfvQM2a0Wiwi9EvNa7AEWgBGrwAjhpyBbXMMTJ%2BLwGOqUB6Vo6lB8ViSggkLgCWor2m2%2F2ZOHZj%2B9AJhaTJkolyxQGQgEI027P9UcCs%2FtHjv2KrekZqKALtKoQFFDrhbzysLoGbYWh%2B4%2Bb1XrM2wuNYcfKzvNfqPIdl8%2FiUIYNCvFyf04gRJPVMQ3QkBFia2OSsfSz%2BoQz0Sus309A72EthlUlApVGOXklSJrwuYI9oLFb14lcdQagCk%2FpC7iFx3XXWOt6FYI9&X-Amz-Signature=0adb1eaa0ba84500184b4c92d9b0ca3efe3b00c0f2b21380d4517e1db98f7bea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWPCMIQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FqqHQKeXKp83I7lt0YzzkniwmbtmYGki%2FvunzFr3viAiBjVxKMuHhHunhSbRCQn6HPP98dL0chX9LGp3J54%2B32viqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU7KQF9MS169pmsdYKtwD5bGpMk4sJ8Th%2F7V1sRaX2YdZaXi4ZtyheVH6XpH5KsbGpocRnddo%2FsLm68IvqHpMt7r50Hgk%2BlkXuJnI8e%2BKyF2yqv7O5O5UYmZChGse7lMfCwSnwPGMWFvLFssjPJcv%2FmcVNYmn0Az%2BBtcYLx0b%2F%2FmvbuS%2FmDBkEaCp%2B7IE2c3Kf%2FhdGLsUO4Pp75jkGrQtjOedeBG3sx5cpxCMHMO3KgLkN%2FxZuxBzMG3V%2BOGjhQBwCLul%2BG98PJdO8Zg47eM1D5%2BdN%2FI17wIlDSOncCQJbK9PUpLo%2Ft8Klh%2Bsc3oWoxG9SC9D3diAy0TWK0LscaN4tYa%2FxY%2Bq%2FfqMcEcOzdZ4DQuSK3eT4zz8zbdIRB92csmT4IhYdi5jNflz9w6Jy3dfxMvByDHxXqvGkncp607Xa8fCIiVQWfI5rPlLIFCloYrbmzB%2FPOUgRyvoWPHUMi3EpB9b5yUh%2FwE5d4VfZjLq3Do8%2B4S0zK1v6jQr1t3bYEGyTJFYtlU6IcSSQllNE1Uk6EJ6ZZXThd0gx6rWSSXrITKf5Pa8Yzwsr57CEVVAOKMYXuCR0XMntj8676k%2BJEECuXertoEmh%2B6XzdWuYYHn5BDA2bCU%2BqOjkXj%2B5iWsQgizhogkMILqS9X0ZyAw88P4vAY6pgE6xH6DOafTsOYTY3dwRoQg78KEpqb49l0M%2F7cEPdnS84gXgtkJrt%2FEEx4HDJBaMrewmy3x%2FZQF%2Bg8KO77SPWrWsk%2BZy35VH2EuPLeCTF8ndpvf53RKVf137TFNY4d4vipTcor2WT0N5JC1JT2rg9OUc8pcaYUq08SCkmAjiLjBYdZQ6NixuKmt39JCoJUTjkM9xvTund7PZOSkpKh%2FuWe6Vy3uaaNO&X-Amz-Signature=85a1e953f11661bf98c11dd46f10efd628b3938b1a1f8d497299f3c9d19d798f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
