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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOSNRAW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nql3B4iBsFnsXZ3G2npEtEamep1pk%2BEhvmDO6RZGkAIhALDAO2logd2fdySzNHe%2F%2BsD1SGjemklmEGqD4BoRJu4cKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrYXdALe1aiFE0Vooq3AOlrfsx0ElQs7IrYGvM2c3WTIC6PSsfU4aTbXNRkJsU1QeCYMjLwZFQntlbu2UR7%2Bv%2Fd5CwPfks3mySvPW0DXFTWI8SRUtuzj5bHGpgc22koJFEu07%2BU%2BraDXgzTs48zbyCL7%2B8VDHVxKrMQzkyu6c0%2BrHDArAyAWQcV0%2B4mVPuNFmPkYclF%2BwTiIaurHSfEhg8%2BYs9ZCczCoB6OGSGsXhzCmZ%2FZV6xfyYqnI6TJAqgvI3YRVU%2BhsVIcSkyjwMaPfjIv7bVN%2BN%2BqmjhA%2BTLhV3tNy0a6SpBDZ71ara98B8f97m44fuUpJgUFAoXMrzSdK1sGXMLup0fLXghIOM00nO%2BA9WPnKbQnV6cH61VDvoDFkwLXB3ftce3v5thjPvawTWV6PjctgWuRJxRyRT%2BfTEGkPpJQtlRT7m6lsurKv5Iv%2BZfdncsJAEzjfmYL0Zo3vhCEUK3cZpRxojgKe3%2FCQIu4FHj0yK1VJO1g%2FRuF8GXYvLXWWpBE1%2F6Botrjl5Q6VvUaU2nDteZPR1zeoMRbixsFj0cL5hvShkC5mncZfkkt5pYeCeevKMHLV7%2BgwIGvSvN32BlWyKxxl0HVzn7Y1kl%2F874W8yff9QW25ZsVlSgyQk%2FXaq8NnVx3F1yVTDLzam9BjqkAXUhWXRQiMeQtMmwHr3m8yX7N4OgurOdQrIOwFm7yC4c0oevOaVgleqCS8Gll0vlfaULiOLUE7zeeGP2h89%2B8eFqm%2FX0wTfi9Ms8j8CK5QNZ7JtRInhhDxu7DtazOoUEijJ0yPY6vqyi7BmMPn8%2Fqra2HH33dj33UoPBbzQbWisFhOjAEQIPgpdeomuRCSAofL4e3X71pDFtqMB%2FDd4xnqa6ZP52&X-Amz-Signature=31fca865bdefee4a1ae1df9a7a9ed0e510093493982b23d1326103e9c972285c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOSNRAW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nql3B4iBsFnsXZ3G2npEtEamep1pk%2BEhvmDO6RZGkAIhALDAO2logd2fdySzNHe%2F%2BsD1SGjemklmEGqD4BoRJu4cKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrYXdALe1aiFE0Vooq3AOlrfsx0ElQs7IrYGvM2c3WTIC6PSsfU4aTbXNRkJsU1QeCYMjLwZFQntlbu2UR7%2Bv%2Fd5CwPfks3mySvPW0DXFTWI8SRUtuzj5bHGpgc22koJFEu07%2BU%2BraDXgzTs48zbyCL7%2B8VDHVxKrMQzkyu6c0%2BrHDArAyAWQcV0%2B4mVPuNFmPkYclF%2BwTiIaurHSfEhg8%2BYs9ZCczCoB6OGSGsXhzCmZ%2FZV6xfyYqnI6TJAqgvI3YRVU%2BhsVIcSkyjwMaPfjIv7bVN%2BN%2BqmjhA%2BTLhV3tNy0a6SpBDZ71ara98B8f97m44fuUpJgUFAoXMrzSdK1sGXMLup0fLXghIOM00nO%2BA9WPnKbQnV6cH61VDvoDFkwLXB3ftce3v5thjPvawTWV6PjctgWuRJxRyRT%2BfTEGkPpJQtlRT7m6lsurKv5Iv%2BZfdncsJAEzjfmYL0Zo3vhCEUK3cZpRxojgKe3%2FCQIu4FHj0yK1VJO1g%2FRuF8GXYvLXWWpBE1%2F6Botrjl5Q6VvUaU2nDteZPR1zeoMRbixsFj0cL5hvShkC5mncZfkkt5pYeCeevKMHLV7%2BgwIGvSvN32BlWyKxxl0HVzn7Y1kl%2F874W8yff9QW25ZsVlSgyQk%2FXaq8NnVx3F1yVTDLzam9BjqkAXUhWXRQiMeQtMmwHr3m8yX7N4OgurOdQrIOwFm7yC4c0oevOaVgleqCS8Gll0vlfaULiOLUE7zeeGP2h89%2B8eFqm%2FX0wTfi9Ms8j8CK5QNZ7JtRInhhDxu7DtazOoUEijJ0yPY6vqyi7BmMPn8%2Fqra2HH33dj33UoPBbzQbWisFhOjAEQIPgpdeomuRCSAofL4e3X71pDFtqMB%2FDd4xnqa6ZP52&X-Amz-Signature=d96efd51a9bcc1bb93e22cb866293d82ec1f45719081f9482a74a9098db6e104&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRU6L5XR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmLV8zFHop4WqfH6b4EgvJymiARkirDUYC13QaqKf%2BuwIgf75e4QFj2GyXaAAgh8zMUfXCp6SKnDm3Du1Y%2BjurcWQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHobLM0BOyFt%2BGZtyircAwkhhv%2FxfHysnIlrbKKp%2FirxAfnFa3oxE665kPtvyjBE%2FoOEOTUjBb5GPkDANmo48cFd9ovC9DDaZc7%2BopU6Oa3HOtdi%2Fmfzpgut7MmD6QBGZMCOV4M1c71S40VWWJIO6VJHB05A45JhpPW1%2FLWPFnFDet3mEQNI6Tjp2is1G280zmbkD947J4siaJnXdS2oXkC3VG3woJMrZ75JoIUBnJQcDRXI1cIKIE1yiIY9R2K8ijk0zgUQaQ9sVIPaUWUwCGwzriprEg7ymT7gbl3StPlFdQFdjjs2FgHHhtzxAdYGI43B6M%2BpTshpWwS%2F5GpUKrPa8pljODVDHmabt0PRaivmc%2FTmxQrOCNU%2B4m%2FO7VyFKF82sB22x%2FGoKGBDnXgUa0v2oyZcX3Ur9AHJKBci52DVv7K2XZKp%2B61%2BP1T3%2F8cSaLqWZqNzg5QItHqQUjoO5bXsZG8ItBFI5Ru7XjtLQDS79yfZEIKQ7v2QAmgH%2BH0i8lO9GpkCPgAfvdM0bhsDGN%2BMOxaZLo9JlJ3XLcu9JHT24Y8hFK8BSkxrniIp8lwtSiXkNSl1Dzsq4mZkERRb0JM%2B5oddaDdrHwFBXBA5Dxcj3pO4Op6WrCS5EX3qMLfp%2Frtainrlt6WUrVxsMPfNqb0GOqUBwDI8oKVXMQHvJaQ5bDYFPPScw%2BpwrdQ1mrhHNgOC2uW9lD5NM5JDKfyC60A3PowoXLmrwkX4HCf8ojf2bhju%2FnprU%2BTBhbjIwQ7bWrGzOS5TwekoaNSLT%2FUGNxBaGuTJREy%2FReiT%2FSaIrJ8%2F3IcKFMZLutc440SAQrUvTnTLGIVlNDbHvR09r9izyTiuoO%2BzpuJ3MGEsQycGIUQTAlnMFigD4ldf&X-Amz-Signature=2419b0a45c0a7e6feb348d4878e1be0d4f41b0ae1b6a5e1a90629c4f4c7dca93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627E3VAR4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuRTb96MrrRkcXZlwyTp3dAW9p0rRNvC3wbu4gPWUYeAiABpTd2%2F2NK8SCnPn4NmvXiuTFce2LIYKBEeW%2FamR%2FXsSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Gn5S2PoStenPymgKtwDFUOUn%2FJ8yyIMGiy5waP7vXunrw0veYXrIepRG8%2BFbWfhCCnsjMMIc20lTTb9zylz30LcSouOYm2FRP9i6fEy46djQse7gG0o0VSqwNn%2BB09O91ASC01%2FxFZhkA5k4w48vhE6EYPnmgIVWr6p7dRatFv%2BKznb7xwpCFTIjum4r%2BfzTTFf6HfP25hskydr9RwngfSOFLC9nLJq%2BVjOLXR2IREr9LpNoTrxOYapGxd4y2Wt5V1sefm36ymWd0gCpRkXvXbuXbJxAIOCqsWb%2FqzemA%2BN1NAfzNe1ia1iHj%2B%2Fhs%2FmEUq1Hjn6l2oHuGLgR8L9L1%2FJXaedloHGyiNGWmIbEHHjC%2FyWEtfGMK4hdV4T4Nxmn%2BTwilRu4j6DdgA0wh7l4TyzdngRaOkz%2B%2BmbNON%2BfU0hrDQGzVQWsrOyPm5uMKu7PhqtZEIU2XG0d5KSaMWsL5LxUroVzwbfuK58dKBxA%2F5HZFn%2FssJt61OKZbuJQmZfIDXErsYMjRTvEmvB4pDEZeqtxOaH44dEkcUgT3EIGAM9NlPR2ghSqofgydogNRtV6p2nPWr0qer7%2FWijpvSBFuhzPJJ2GJEF26ZK%2Fz7DTpJ60sOB0LyOrJjopoR05ggc7w58HzFxprc1d8Qwzc2pvQY6pgFuv%2BYLlQQgMvm%2BEc2aRw2Pt3t9F2zatAuNGu2m1p435mJqiqK6pck2yhAuA9z%2BslvCYMUzCCW8hcU8yKXD2RVK28Y1bKIoNATSwusjbKayhbTv4%2BaHRSfQ2NatiDE3EAmZMToqIY0hfvKISY10r%2BMCSSM4s6s6Ntdo4MUboRQhtxE4fLWXNAlGSAjMHHgppN7UnWGS3Ti18HNbQlBZ75gSLoG0BGaI&X-Amz-Signature=4ec4046e7d09d4330522bfbecbd1ae4f864aa57d0d5233774e53869f08fac1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOSNRAW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nql3B4iBsFnsXZ3G2npEtEamep1pk%2BEhvmDO6RZGkAIhALDAO2logd2fdySzNHe%2F%2BsD1SGjemklmEGqD4BoRJu4cKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrYXdALe1aiFE0Vooq3AOlrfsx0ElQs7IrYGvM2c3WTIC6PSsfU4aTbXNRkJsU1QeCYMjLwZFQntlbu2UR7%2Bv%2Fd5CwPfks3mySvPW0DXFTWI8SRUtuzj5bHGpgc22koJFEu07%2BU%2BraDXgzTs48zbyCL7%2B8VDHVxKrMQzkyu6c0%2BrHDArAyAWQcV0%2B4mVPuNFmPkYclF%2BwTiIaurHSfEhg8%2BYs9ZCczCoB6OGSGsXhzCmZ%2FZV6xfyYqnI6TJAqgvI3YRVU%2BhsVIcSkyjwMaPfjIv7bVN%2BN%2BqmjhA%2BTLhV3tNy0a6SpBDZ71ara98B8f97m44fuUpJgUFAoXMrzSdK1sGXMLup0fLXghIOM00nO%2BA9WPnKbQnV6cH61VDvoDFkwLXB3ftce3v5thjPvawTWV6PjctgWuRJxRyRT%2BfTEGkPpJQtlRT7m6lsurKv5Iv%2BZfdncsJAEzjfmYL0Zo3vhCEUK3cZpRxojgKe3%2FCQIu4FHj0yK1VJO1g%2FRuF8GXYvLXWWpBE1%2F6Botrjl5Q6VvUaU2nDteZPR1zeoMRbixsFj0cL5hvShkC5mncZfkkt5pYeCeevKMHLV7%2BgwIGvSvN32BlWyKxxl0HVzn7Y1kl%2F874W8yff9QW25ZsVlSgyQk%2FXaq8NnVx3F1yVTDLzam9BjqkAXUhWXRQiMeQtMmwHr3m8yX7N4OgurOdQrIOwFm7yC4c0oevOaVgleqCS8Gll0vlfaULiOLUE7zeeGP2h89%2B8eFqm%2FX0wTfi9Ms8j8CK5QNZ7JtRInhhDxu7DtazOoUEijJ0yPY6vqyi7BmMPn8%2Fqra2HH33dj33UoPBbzQbWisFhOjAEQIPgpdeomuRCSAofL4e3X71pDFtqMB%2FDd4xnqa6ZP52&X-Amz-Signature=bf4261ef8074366bab79588395cb289552f63d4271aa18ed154a2b06a3f33a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
