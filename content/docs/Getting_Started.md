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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKI4CACR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMkbLcvAUQ3Bhb1jZh8bXt%2BAezgqSULEKO5jOFQaa9TAiEA4zNL%2FZtlEM%2FnAy2sck9rHu5OjNLgITvegNtWjvn3%2BVUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyQal0PWArFDlCRmCrcA%2Fj27FICQ2gR1HYVYZFkpxSVv%2FjH2ZSbOrxHHcrVNy8hjXcTfsV92IB%2BZ7QL%2F3qlQNfvObRuhK%2B2QgOaTbAPOKMmd8ZduHF9X8Th%2F6%2B3UFwYxSewwBFmZO%2FQC%2FTHNT1DumIDK5KyjsP7URqRkOxiM%2BJj8WuXslWkC9I6lHkp8%2BBM3E5xgbLeqba0bkOIoJ4EypCV7HvdAWeyXWfW6U3itJPtjt59xPXlMn5%2F15qMvs4QPr7ZlJzccB2yEQIwXYfPpTlEZSZOxPRCGWditXyza8jPdbHCR2SpW6vTixhib%2Fe07z7sOfHx3modmbUiaVcjBlsUkL9AVsuYmNSekEMVRCvv3%2B9MAO8b09%2FF71gV4RlTzBjI72KfT0138Fr2JFIGOn0WvvCCgPwx1AskxxjniF1FobQDEmbvcLDC6Z7mgX4RUothmJ9tamif27fcyzYj5KbXy3vCrG1KOdxBU6iI63tBkG2EJKMreh7ouswzGi3FCqd5fYCVT0bDQvqPETZdYZId9aR9eRaGQ%2B7oUSQShMlLXsJs8qeMbRO3Xc9ylp4wJ6aRcM4bVCRJ4ZHU0vqzUWyIdM%2F3oz9ZF%2Bh4aWfOerpNonfbtJuQr4FPeVfZKV%2B4LtrRvwqpkuT1l0RLMLLo370GOqUBI%2BN%2FG5nA9rPpmP4lbKD%2BzER8%2Ft5PBI6SPOBSAoMkn5%2Bc3YcGKkq%2FpOHL9l8xdLcps4LnFA%2BIxJh8gB02nvcZWNYQnQGYW4jVGYvT7ukZRHh6iKYI5Pypuc%2Be9WpmM03ym3l8JelaXogfWA%2B6PpPic2iaSLxGnVfLYAC1bSy9ojKJFJEPxhnc6cO7asujwbyYI3S%2BIIkhGvXmLqGGhPnMc9UNtzs0&X-Amz-Signature=af0a5acc1b90886fac3fe4b8a03afda850ed94978311df5a982dcc6328963a40&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKI4CACR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMkbLcvAUQ3Bhb1jZh8bXt%2BAezgqSULEKO5jOFQaa9TAiEA4zNL%2FZtlEM%2FnAy2sck9rHu5OjNLgITvegNtWjvn3%2BVUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyQal0PWArFDlCRmCrcA%2Fj27FICQ2gR1HYVYZFkpxSVv%2FjH2ZSbOrxHHcrVNy8hjXcTfsV92IB%2BZ7QL%2F3qlQNfvObRuhK%2B2QgOaTbAPOKMmd8ZduHF9X8Th%2F6%2B3UFwYxSewwBFmZO%2FQC%2FTHNT1DumIDK5KyjsP7URqRkOxiM%2BJj8WuXslWkC9I6lHkp8%2BBM3E5xgbLeqba0bkOIoJ4EypCV7HvdAWeyXWfW6U3itJPtjt59xPXlMn5%2F15qMvs4QPr7ZlJzccB2yEQIwXYfPpTlEZSZOxPRCGWditXyza8jPdbHCR2SpW6vTixhib%2Fe07z7sOfHx3modmbUiaVcjBlsUkL9AVsuYmNSekEMVRCvv3%2B9MAO8b09%2FF71gV4RlTzBjI72KfT0138Fr2JFIGOn0WvvCCgPwx1AskxxjniF1FobQDEmbvcLDC6Z7mgX4RUothmJ9tamif27fcyzYj5KbXy3vCrG1KOdxBU6iI63tBkG2EJKMreh7ouswzGi3FCqd5fYCVT0bDQvqPETZdYZId9aR9eRaGQ%2B7oUSQShMlLXsJs8qeMbRO3Xc9ylp4wJ6aRcM4bVCRJ4ZHU0vqzUWyIdM%2F3oz9ZF%2Bh4aWfOerpNonfbtJuQr4FPeVfZKV%2B4LtrRvwqpkuT1l0RLMLLo370GOqUBI%2BN%2FG5nA9rPpmP4lbKD%2BzER8%2Ft5PBI6SPOBSAoMkn5%2Bc3YcGKkq%2FpOHL9l8xdLcps4LnFA%2BIxJh8gB02nvcZWNYQnQGYW4jVGYvT7ukZRHh6iKYI5Pypuc%2Be9WpmM03ym3l8JelaXogfWA%2B6PpPic2iaSLxGnVfLYAC1bSy9ojKJFJEPxhnc6cO7asujwbyYI3S%2BIIkhGvXmLqGGhPnMc9UNtzs0&X-Amz-Signature=2aea44dcff5dfdae21f5182645b6effa98ed9834087816e94d6c19ce87e25a47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2RZLQDW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB034lhoSN0CSaasf0VV5ebmNuChbD%2Bdbpl2Z1XUyHGDAiEA9K73uap3E9vd4ybWtDUohVA%2Fo8XXvbBIyAjp8O8Tpn4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHhq2P9V3sb5hnX8CrcAzV3jzwOVLVScfhPv17LL3jxzOTAhMwZNOkiXY1PuxXYPA7%2B86PQRqfxT0nNkv1HQHxF%2F%2FBy%2FWTA%2Fidb8UqQItiVbyCLUQWzGwwJtmjwUBSutaxXdNJqmfHdjbNVnonu6PDzsWyKxEPVxoi8vxFCPFWEsyNVBHkmz9QZyKVD6KUzWe2FW7jKszdrzHIR6yaibC6AIDOSVeHI57Opim9%2BY6hYnPSTHGcFxuFLY1zQqBAomon59%2Bc4l1s5bl5tPF6l%2F9VVRHc4cVdRcGZAt5O2vrflzWSmLvwWJVlqLb%2BRxd%2FzuOz7v%2Bt0nNvLMSFCVHbH6gRPFi2S7foiFmOAAzftraW1VravjuIL9M%2BKelaOdEnaijxFnYYcdHEuHIxuHFCATcSeovS62grUgRpB%2BWdhBjxG9ZCKGsGZqBxzNs9UbTQep%2BbKApuiuz5uXRIWmKknu4v90WcgjZ2gcAEHQRrZM3IoPlRYugfwiLcQEBWMa2iHCkKs86kesx3ldwA0f5lHA6OW6Idlhre3MpPqhojd4wA1JvTlg4rFBS5HnDHEW7t%2BrLGO4M2cpZKP2BcteJs1NhI2AMoUM9vNacT3HBvXunUzWbpUnxhd8uaNUvsXfePUbs7VGNXoycbAGrLyMOrn370GOqUB7P0kx2pS6Rv9IcErrTyj5uYXvsMcfQW7JG%2BzjsLqUMU3c5WyBs2KCdI85HsHcNurwyXeCUKtRLZdQGPvrB94w9p76M%2FxeBMXvscM8HjA3CzlkhKCuXHPpVkjNLaDYE92nKXN%2Bj4tVm9HdNI7sqho9MUu8CNvcFOuT0oQuT6PxbauH7k4POUIw7asqwhe13d56AKd21Ukihf81S67IG2CwbtrhpA7&X-Amz-Signature=071071d49a9a4b5063508bf1428ca5700760cbf9a1fc637a4d1fb2be3afe9bae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKZPCPW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGYwSiY%2FR3WnxqPbn%2FmSpatD4l6mHC2yiDaCg%2FojyXrwIgWQrz1BOxA%2BK7SlypuLaP34OyTFfj1W6aK8Ez%2BAzmrRcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsjSwaIf1D4Y2ZmqCrcAzxGQvslzoQuDcx2kBkAx0AQh9oP9wqp2DRxhBtZe8LewTS0cb3ipmpL0YMGZwq28f2qPdc9gfPLFij7K1QBPQufUfOh3nmnQLol2dtp4FXYt1umlNFMGtjapyBphCdv6OKdpKg0zlmgksDhENlVq84a9i0aRuYIr%2BQeAXkPMdOoME6U0YMp4J5x0GIwOgfD4BVhvqOdw8pFRtzRq6H0wQe0ZcGyn0x9gBGsEb4zEHiO0mccN7q%2Ft6V0rN%2BUUcViyKyrSd52YlnrV8zASuYX4xhCHEpUpFzPo6WGscJuELwrYK%2FBOWvOf6tT3y4kMrliNLgZ8QuXRw9NF3yzDyXK%2FYYXq3mqPRhZ8yCiCAFhrT48X12DHvg6Rxzxpo6w5jCOJSTJ90wwBkXG6c4cu2zcuglxgCSgw4B8KPo0Hc43N8Fjk3IQp%2BVY3728%2BVR98uamQunh0jejgkwHyVCCl1hDHqY1b4Xebzryh10naewDMjvIq0bX4R1zlIhZSguiLur8Rzxsx9hpEZsZer9gCOndH7aRqQep79eZoenNAROwzdUNrrj%2BJJ2FZmN%2FdznX9k1l0Rh6xBTuCiLTl%2FuEVBQzl78HI92YzYkkdnu9HS4XB%2Frs8tzQt76JsaA5mOwbMNLo370GOqUBVwxF1juIzoRaj%2BaTwphtVanyH4VVF17yWULk58xWoFOkUYR5RMj4Wo7eazfxBEiGBIKxmOSCHASB7dZJqRvyrA3TkGn7iCjP1LWLkxQAUttjO0XTAEz8MfUkfTV%2BiNqw0cs3N50RO1JXObywKZw2HNBMuAsu9hFB605PhRZrhRiIDdbONEUD7T%2BhZs%2FBIwjCNpumvZlcHXd4qwidKJT2fXH90w1b&X-Amz-Signature=99aa3d0c099366215c496c8b154a91664cd27ed503d4cb3738125f2f4be2aac7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKI4CACR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMkbLcvAUQ3Bhb1jZh8bXt%2BAezgqSULEKO5jOFQaa9TAiEA4zNL%2FZtlEM%2FnAy2sck9rHu5OjNLgITvegNtWjvn3%2BVUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyQal0PWArFDlCRmCrcA%2Fj27FICQ2gR1HYVYZFkpxSVv%2FjH2ZSbOrxHHcrVNy8hjXcTfsV92IB%2BZ7QL%2F3qlQNfvObRuhK%2B2QgOaTbAPOKMmd8ZduHF9X8Th%2F6%2B3UFwYxSewwBFmZO%2FQC%2FTHNT1DumIDK5KyjsP7URqRkOxiM%2BJj8WuXslWkC9I6lHkp8%2BBM3E5xgbLeqba0bkOIoJ4EypCV7HvdAWeyXWfW6U3itJPtjt59xPXlMn5%2F15qMvs4QPr7ZlJzccB2yEQIwXYfPpTlEZSZOxPRCGWditXyza8jPdbHCR2SpW6vTixhib%2Fe07z7sOfHx3modmbUiaVcjBlsUkL9AVsuYmNSekEMVRCvv3%2B9MAO8b09%2FF71gV4RlTzBjI72KfT0138Fr2JFIGOn0WvvCCgPwx1AskxxjniF1FobQDEmbvcLDC6Z7mgX4RUothmJ9tamif27fcyzYj5KbXy3vCrG1KOdxBU6iI63tBkG2EJKMreh7ouswzGi3FCqd5fYCVT0bDQvqPETZdYZId9aR9eRaGQ%2B7oUSQShMlLXsJs8qeMbRO3Xc9ylp4wJ6aRcM4bVCRJ4ZHU0vqzUWyIdM%2F3oz9ZF%2Bh4aWfOerpNonfbtJuQr4FPeVfZKV%2B4LtrRvwqpkuT1l0RLMLLo370GOqUBI%2BN%2FG5nA9rPpmP4lbKD%2BzER8%2Ft5PBI6SPOBSAoMkn5%2Bc3YcGKkq%2FpOHL9l8xdLcps4LnFA%2BIxJh8gB02nvcZWNYQnQGYW4jVGYvT7ukZRHh6iKYI5Pypuc%2Be9WpmM03ym3l8JelaXogfWA%2B6PpPic2iaSLxGnVfLYAC1bSy9ojKJFJEPxhnc6cO7asujwbyYI3S%2BIIkhGvXmLqGGhPnMc9UNtzs0&X-Amz-Signature=17c778f8ee259366822660068aac764a4236357e74760546a68475f3d1a5af9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
