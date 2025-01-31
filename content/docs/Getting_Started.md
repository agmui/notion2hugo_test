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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLNLH62%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwGYgE6Wj5U2Ddzv1psP%2FV%2F2mxZvM54ncAA6nFTZpKfAiAkWbS%2FKkioA%2FsDNa4ExkMeY1oOiytpHvW0twgfTYy1BCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA7xQOm8zxNq5yqmQKtwDa3sJ50XHC2e%2BskaIx94C4f5pWVefqxYPTig3eSuK8w2%2FGDlsiZMVJRxb4dBNYtroS6FU4wQACCK243AObS34lmFSh4kYjL0R7zvv1kUVkkkZfk6b1Z1Nhz%2BQmEgixj6%2B2obWc0XVKCW5x9c0DBGxPVoIYCGZgQ2U%2FznLIlFZs56X0l9wSmijT7V4sf4A4XiaJNwnOQdPMV6FV5oWOdgEeKJLeMLkt%2FJB3RxmGQcG8Z3%2FNY%2FcueLcZQ6%2Buk4zXsiqEpcRM03vTpsrp8g4OnASNQVyXF80N8c%2F9YFjhB5g%2BUSMJUak8wrTiCLozb0xaNYLDFzD1CZU7Dnt4y%2Fu%2BlCO4HHuBK9C5h2qy9NOaNA%2FR1OBiTG70kTNqkqPuHPb3x1Ii5qkFGtC8LU0tbFCDoQAs3gAh%2FlRyFYimEB%2B8mMo2mSdJ3GS1MUteJdh7qQjd87vdkZIeWBwvAiCoRdMjbKuVlg1GE0wbLObDzsDwfKe0elD%2FAVS1Z1eKGqc58%2FdwTkWoYhsLV%2F8MGB6cpv1G3Exwp3MfKfCf%2FxjIDynlIsrGVk9SSuaKtouwv2OGA%2F93OwFaXMm6nJVx7NRDxWRXtXOfrugu9fYr11gXnCB9uG4mJI4fTe9e8nnqAoh3DwwssnzvAY6pgGQ0tsgA6riFyQ7CEu4WjInNDUrGw5uH0Bs%2FbIehC0%2FTuk7O2ixODTc1z1aLvyMg3h0HCFx94HrmQulcE1AdIdJQCGU15sjo5liZObH7sLzjMVroFvTBBt9XFq2Al3WwiBYMuuVp4U4EiYBUUBw7k9EVsh%2F32HSmT%2B5m6Qaux7cXhU8nkU3RCqaMhqTTylNzntM2PSxhDykZkl9c9OxtJsaeAiNDOpI&X-Amz-Signature=f8d8279d398950bb3f77e2891ce79d4d5bcf8de6827df11842f5bd8f1f713ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLNLH62%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwGYgE6Wj5U2Ddzv1psP%2FV%2F2mxZvM54ncAA6nFTZpKfAiAkWbS%2FKkioA%2FsDNa4ExkMeY1oOiytpHvW0twgfTYy1BCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA7xQOm8zxNq5yqmQKtwDa3sJ50XHC2e%2BskaIx94C4f5pWVefqxYPTig3eSuK8w2%2FGDlsiZMVJRxb4dBNYtroS6FU4wQACCK243AObS34lmFSh4kYjL0R7zvv1kUVkkkZfk6b1Z1Nhz%2BQmEgixj6%2B2obWc0XVKCW5x9c0DBGxPVoIYCGZgQ2U%2FznLIlFZs56X0l9wSmijT7V4sf4A4XiaJNwnOQdPMV6FV5oWOdgEeKJLeMLkt%2FJB3RxmGQcG8Z3%2FNY%2FcueLcZQ6%2Buk4zXsiqEpcRM03vTpsrp8g4OnASNQVyXF80N8c%2F9YFjhB5g%2BUSMJUak8wrTiCLozb0xaNYLDFzD1CZU7Dnt4y%2Fu%2BlCO4HHuBK9C5h2qy9NOaNA%2FR1OBiTG70kTNqkqPuHPb3x1Ii5qkFGtC8LU0tbFCDoQAs3gAh%2FlRyFYimEB%2B8mMo2mSdJ3GS1MUteJdh7qQjd87vdkZIeWBwvAiCoRdMjbKuVlg1GE0wbLObDzsDwfKe0elD%2FAVS1Z1eKGqc58%2FdwTkWoYhsLV%2F8MGB6cpv1G3Exwp3MfKfCf%2FxjIDynlIsrGVk9SSuaKtouwv2OGA%2F93OwFaXMm6nJVx7NRDxWRXtXOfrugu9fYr11gXnCB9uG4mJI4fTe9e8nnqAoh3DwwssnzvAY6pgGQ0tsgA6riFyQ7CEu4WjInNDUrGw5uH0Bs%2FbIehC0%2FTuk7O2ixODTc1z1aLvyMg3h0HCFx94HrmQulcE1AdIdJQCGU15sjo5liZObH7sLzjMVroFvTBBt9XFq2Al3WwiBYMuuVp4U4EiYBUUBw7k9EVsh%2F32HSmT%2B5m6Qaux7cXhU8nkU3RCqaMhqTTylNzntM2PSxhDykZkl9c9OxtJsaeAiNDOpI&X-Amz-Signature=8eb09ff0e9c1f037e77960e15a18f301aae331b0d481a21a8c172c7652b4d960&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEARNMWZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH4VD6QefORkEajxQ8RpjW%2BSpnQ2%2FXWlXct1wz%2FaNexgIhALpdT%2FP52s5O%2FDbs7UCXbBuQ5Arca0G76bfzey%2FX%2FVspKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd2X%2F55Km%2F4yQE7bMq3APAoa6I2Tb16ouTYLveOeTJGMgSb2G9mduBJNLdrrK4oAH5S6Kc84Bly0YONDxjSL6ugDPWhy5odQVbvs3cZ2U%2F3%2FCUjeV%2FSxnRLaReRbCmJ1t5gspQTu9%2Bqc9h4%2B1BmYGycaXsl9kCT1mcFvSMVnzevB0ehAlkhYoIFYEYNWGOS%2FXXMxLHg59B1sBt2FnPxs8DDGCgv3hjFrQs1mFLfsmgMdL3eKqWceAWapIc9qBWMoco%2BT1MbsH%2FqXAssfoF4tOHVtBknoqBmnZP4DJ7k5ACk7R1GKrqSUubVhhXlJK2k0X3MGdr1BD880fB%2B6Hud%2B%2FxZq0hwMB4WIpOUTBumnu8ayb6jJb7cwbayrFd0mXjcTiOii2uTYc19l6UNr8EJwZPlmeNIFqEqXupY8fvw5Iewr6PJXPIDOjPuKq2vDTaEmI5LB9VylTYxY3W%2FR8EMDLch0PttygPvc3EdzaNhjs4IBT6%2F72OTLWGMJvKccUW08HIomwGeNLTRuf75wHdewIOj90ZK55qmzDMlQd0deVXdiqQPTHZcdNZh7pgbZKFldeBhzdbv0vUn4W%2F7bjvNftUxMJpEYk%2BVAjJJH5PmE%2Fy3ETMY23e2ypoen3ZbtGzC%2FtCRP4mBhd1%2BA0PDzDGyvO8BjqkAZAZm2YO7uMHy4QZyecVO4EAxwzkSf2A4kj3ySsdguf5VVBqZkIE%2Fp3K6aXHPhtEkxnWYLGrQzpjTN1vd1teU7ta9HB8yqV9Lz3xbETFhhnVLo3zb8XedaCxZkFIV8hlhd1zhndYsKIbw9j%2BPRxPZ7vB2XhP4IrFoZIlE00SQTZZtOFmjkUZtJ5iLzl75LaY3t37nQeto6bp3xFDK5rJplxsCmYo&X-Amz-Signature=5534bfb6a21b844fe5e7c3f3913d4d59f3a1ba5a992486589859464e158d1f50&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMRJ5SSQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx24rJ9QsUtEGv0emTlDeZKSfkW0GlgD4UvMCYXFH6FAiA3dFdaMM3pO120dwHJFpHssU0syGpcgD0cTR2%2BqBITciqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcaSf7ZSsyi7loH1uKtwDyFplyyBvQglksl%2FNvaMiKBH5%2B%2FWrv3BKNNTqP3rUSSf8FdpFYr8y1Z%2FmxKD74DnbrO%2FRM%2F4SIaEpjMVp36sd4IP9qPrnPhiqjYWzBV%2BB9hLhPLUjDhsFz0uypwMn1MkcFbN0h6rmkFRr3nbjdComQ8IixtU0lAehU29TzOY9iMZmFS8UApThjDg3NCnsaXjlBiRCMEaVZctOjUwAa%2F%2BoDjyR8KLzsuWadLucLtBLbVBTG5eASmCHA4TrtFq7IxknRCxJwfHROnuGaVvZQPveXdZwFj2VTdQyLWj6CYESGpNle3rjBuEw%2BDnvmr9xSibfk6PyIy95tYYL2bxaxGHGaRi2dVmg%2Ba%2FsitPO4s2OrhgEKI%2FGSTec3PRdlCNfjEWxzgG%2BN6LDMj1m9RJToD3rBJjzzBBcNkBkGNUeIX1Fk7KLqMybutmwg8MHNw5xFm51nUN0jAmtOohngdaU56F9qx7DXXT4RxKBvWThkUJnGVt%2FXLVQncXWOitt2t3ZsZfaF1ncc5%2FbpLOmcx3U%2BbpHjcdNRBewJoRVKJV9k54NK907Yuww5e807O%2BkzRU81zD4g4P%2FqB1ueUdh5wwufQnoW7Sc0fr8jRWl%2Fx14JNF6gur%2BuY%2B91PceAiZnQncw6MrzvAY6pgFxDMCQ8Vlqa3uf1n3%2FTBW7a3oB9VR6bo52RMzX30e09GO%2FE4yEtke9XclPFknH%2FruEv5NjVJGkxKrvR3J5%2Bum1%2FFUWMz1VGzL0ouNFrbW8GolAHlTTGdwDWj1dm1BjkIWXhmIqQQ9hYnUhB6dSPP%2FHykfNUn3lfau19RaU5qOyll1ljayorveiPrMczJdLQProPWRjCXACP8IAaX%2F85n1YEevjs5Dw&X-Amz-Signature=a1e71350026c4108018a823059a5d50d38ef38b2b54bd3f9a9bf2a598ff74c48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLNLH62%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwGYgE6Wj5U2Ddzv1psP%2FV%2F2mxZvM54ncAA6nFTZpKfAiAkWbS%2FKkioA%2FsDNa4ExkMeY1oOiytpHvW0twgfTYy1BCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA7xQOm8zxNq5yqmQKtwDa3sJ50XHC2e%2BskaIx94C4f5pWVefqxYPTig3eSuK8w2%2FGDlsiZMVJRxb4dBNYtroS6FU4wQACCK243AObS34lmFSh4kYjL0R7zvv1kUVkkkZfk6b1Z1Nhz%2BQmEgixj6%2B2obWc0XVKCW5x9c0DBGxPVoIYCGZgQ2U%2FznLIlFZs56X0l9wSmijT7V4sf4A4XiaJNwnOQdPMV6FV5oWOdgEeKJLeMLkt%2FJB3RxmGQcG8Z3%2FNY%2FcueLcZQ6%2Buk4zXsiqEpcRM03vTpsrp8g4OnASNQVyXF80N8c%2F9YFjhB5g%2BUSMJUak8wrTiCLozb0xaNYLDFzD1CZU7Dnt4y%2Fu%2BlCO4HHuBK9C5h2qy9NOaNA%2FR1OBiTG70kTNqkqPuHPb3x1Ii5qkFGtC8LU0tbFCDoQAs3gAh%2FlRyFYimEB%2B8mMo2mSdJ3GS1MUteJdh7qQjd87vdkZIeWBwvAiCoRdMjbKuVlg1GE0wbLObDzsDwfKe0elD%2FAVS1Z1eKGqc58%2FdwTkWoYhsLV%2F8MGB6cpv1G3Exwp3MfKfCf%2FxjIDynlIsrGVk9SSuaKtouwv2OGA%2F93OwFaXMm6nJVx7NRDxWRXtXOfrugu9fYr11gXnCB9uG4mJI4fTe9e8nnqAoh3DwwssnzvAY6pgGQ0tsgA6riFyQ7CEu4WjInNDUrGw5uH0Bs%2FbIehC0%2FTuk7O2ixODTc1z1aLvyMg3h0HCFx94HrmQulcE1AdIdJQCGU15sjo5liZObH7sLzjMVroFvTBBt9XFq2Al3WwiBYMuuVp4U4EiYBUUBw7k9EVsh%2F32HSmT%2B5m6Qaux7cXhU8nkU3RCqaMhqTTylNzntM2PSxhDykZkl9c9OxtJsaeAiNDOpI&X-Amz-Signature=75987efa54f1e355c4af252f7990bd293758b9d0d91fe4bd6e335411faca95b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
