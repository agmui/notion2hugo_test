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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YIXTIWV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiiQ%2F4W83FUePLMf2RXyTDva5SNpwAGtEsdGs1Zej3lAIhAIvlpHD%2FBFo9iBi2wd5ZQpcFPBFWSOy6f337VJF9zcZEKv8DCEgQABoMNjM3NDIzMTgzODA1IgwnzJIXgS1XkysRpmYq3AOk7xhcc8gGnvlU%2BkYYw3afQb1wESSZOE3y6Lo0lHynKuTIcCvstfgDppmOJOCnZ5CZqpMCoX0YauCGQxaqMmh8TGG%2F45O%2BN8rIkT5zb3XkPuJygtPJJSmMo%2FbIiF7sIRvHYnCvcNaRDprHKNrx%2BnKwhBU304UyCbTz0kDpc8TsYwWqVl8USaCCs%2BhJD9HycAyY9YITn3IzPmEEWYf4aJSIETF7bcEfwm39Nv2Z%2FsfXWzEqAOeUodV6OvTUijwxy8ZXdWSeOs2Vr3fcRYaEfoNd4h3DnXMIvL75rql2N0QeCBWRBVXrv8IE43uTJ1BcCHtYNNfMW1AoNev3Z737wEAAekUkg%2BRjY53dtxUlqUI8g2f4d1J95VdS31NXPVwRJHBZ%2FXVO7BkAeJ0BYatB2xv8h2Z2qS5RrtA93b7cZ3jPutXFMUzDMi%2BtLkBpygWdGWXbQiTbgR3YdMrbwM3cv1wI%2BIquxNTgtTce7E4nju8UXHui7AKKtBXq7oNO8u%2BcD8%2FJ%2BQWltctaR7VLXAhLIzPFt7wudz1emhTbCoZzzfyPcdfRzLsZSXD4mmO3bLswxKAC3rLM7SBLrTWOBpI4Hgd8j53RIq0Fi7gpyos2LH4QX26Jgai%2FLQ2ktxHrOTDP6eC%2BBjqkAf2xLwnwbV%2BfGCYzO91kg9i5%2F23wpBOmTNwDICw30Oe%2FquRvojiG1DaT%2ByBF0ms40x63GubRpI9lUTnhzlLib0qdcFVeYcHX3ha%2FZXETHFyXc6AjbkozA%2BYqXqj%2FE597QzRXS1jyIZfCUzH5BBVu%2BlOfnPh1pZNIZ%2BsIqEtGzvYBcrgfCVlv2v5NjCPDHksthhCYslQ8jeolsc8OWxenfI808lNX&X-Amz-Signature=f3d1fc67e58415bc91bc564a67ce5c5e51ed4d3a185245a140a54cfe261c63de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YIXTIWV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiiQ%2F4W83FUePLMf2RXyTDva5SNpwAGtEsdGs1Zej3lAIhAIvlpHD%2FBFo9iBi2wd5ZQpcFPBFWSOy6f337VJF9zcZEKv8DCEgQABoMNjM3NDIzMTgzODA1IgwnzJIXgS1XkysRpmYq3AOk7xhcc8gGnvlU%2BkYYw3afQb1wESSZOE3y6Lo0lHynKuTIcCvstfgDppmOJOCnZ5CZqpMCoX0YauCGQxaqMmh8TGG%2F45O%2BN8rIkT5zb3XkPuJygtPJJSmMo%2FbIiF7sIRvHYnCvcNaRDprHKNrx%2BnKwhBU304UyCbTz0kDpc8TsYwWqVl8USaCCs%2BhJD9HycAyY9YITn3IzPmEEWYf4aJSIETF7bcEfwm39Nv2Z%2FsfXWzEqAOeUodV6OvTUijwxy8ZXdWSeOs2Vr3fcRYaEfoNd4h3DnXMIvL75rql2N0QeCBWRBVXrv8IE43uTJ1BcCHtYNNfMW1AoNev3Z737wEAAekUkg%2BRjY53dtxUlqUI8g2f4d1J95VdS31NXPVwRJHBZ%2FXVO7BkAeJ0BYatB2xv8h2Z2qS5RrtA93b7cZ3jPutXFMUzDMi%2BtLkBpygWdGWXbQiTbgR3YdMrbwM3cv1wI%2BIquxNTgtTce7E4nju8UXHui7AKKtBXq7oNO8u%2BcD8%2FJ%2BQWltctaR7VLXAhLIzPFt7wudz1emhTbCoZzzfyPcdfRzLsZSXD4mmO3bLswxKAC3rLM7SBLrTWOBpI4Hgd8j53RIq0Fi7gpyos2LH4QX26Jgai%2FLQ2ktxHrOTDP6eC%2BBjqkAf2xLwnwbV%2BfGCYzO91kg9i5%2F23wpBOmTNwDICw30Oe%2FquRvojiG1DaT%2ByBF0ms40x63GubRpI9lUTnhzlLib0qdcFVeYcHX3ha%2FZXETHFyXc6AjbkozA%2BYqXqj%2FE597QzRXS1jyIZfCUzH5BBVu%2BlOfnPh1pZNIZ%2BsIqEtGzvYBcrgfCVlv2v5NjCPDHksthhCYslQ8jeolsc8OWxenfI808lNX&X-Amz-Signature=f5152179f93fe7a502ef7d42ab42ea6bfe83a8f0e5996b966171779dbdeb4683&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW5SU54Z%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDExAxeBFAE5HhXC%2BTd3hoiw0wnCRqK3kJLEAVThRq2gIgaOLuX5sQFOWxpDddjBZKKwXvsrcen2WmoTZBpQbpfRUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHZRPBrosW%2BKgav%2ByyrcA3UYHsDRUtFz%2BEG9AyW9dsmRqarMowF%2BUuq5acOuftqDsoPV5WqF%2FKly45lkpGE8WMCL7BNiIX0kTWOQSnWrlURgpI%2BYv2UZp%2BztT3If5J1U8YY3x4jpk97SuqlsotLx6rwGJCgCJdVEoKtTleGd9Zt3jsXEJdnlBvckj%2FtvRR4JyRKrmtKIiCQA4IGmUHPf9jdR0rTstRSqjZ27QvPufBHq6yhrPIPNjTewhfkLwWq1CqJnbtfvrJgkGDUcXDYCj%2FGm3hQ4u7vukYyxhP7%2FOflCptctAvL%2BRcRBgcDgobbFE8jenJDLm17TWaZ9VnkKxza3Gi4i43dRs9Wr29kedITjaajBA97SW4Kf%2FREAInEPGMJLEm%2FI1VCqhMhcrYK7occ1CzipDiq63owzXN9SExAvm1ReV6bP%2B2VFTT%2FHN7ECK%2FQQDrhg5zYnYnblhP%2BlnaJ%2BJT3OmbHSoedY58c3lqaygj84nMqnvJY0BCgs9za%2BPuVQwQqcRzy%2FBj5wLyuQiuEbIgdGyk6ITdlAm0CckzadUtpNw5jNqEp4MKCTb0nfPMl2Wax21jLt%2BI%2B4TY5wxQff2%2BdeWwS0%2FeYhdd02Izg9YRKVJAAQHy9G01ThHraWzQ55ARCVpPLdB2hsMJbp4L4GOqUB1WUMjJnvMmJG7o4l5MBpDfuGoynW079PaJOQnp0ZXnveYniSRJGVbs4PfLr7YxXOFDrrG3tR%2BDIGTw7r3it2Y8fQG2GBdJ5Bdjyv2%2F2VRsZj5uTrNgxLFz0HQJ4VIkf9rzDdf8LWMH4%2Bl5guOXhEqT7seIZBjGlkWC5dw%2BxB8sZswT0EdSf%2FjYXMLB8iclJZ3Wl5Xc27BXo13oY12u09Jcx%2BwFjM&X-Amz-Signature=5814c710319bbc25db03d14d5a94e5e08cdca8455daf983c058c3b2a5b2ea0d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBQLUBT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFaiEGU4LyjEBK3XCLx9dP7Pil%2BTf4BlstudQbHnIpMgIhAKnK5NcY%2FGPQuz4IOnfDd5KXS7SYWiPLiaAGXvL2yBr9Kv8DCEgQABoMNjM3NDIzMTgzODA1IgybMvMU13s6kEwtwFUq3ANfO4BfpnnDU0O9FYUxlm6%2BBp%2BN602ZyGMRF2AqieCr%2FwALO5PeA3ocFFVJ%2FPWAsxGiadJmlOlV1NjAO1KY5ySUy7dVo1tK3lTtBilPeJEkpV6pRKqNhskef%2BI5b8gmgyhK4LXP92qmkAgrOVo0mnpBbtBryVFujgx2Rxwm5XGz7%2FSbMDCUq5kp2aE%2FGPZtjONER1datZN8EiamS3jgaPL2zokYVTn3eEsbEaVoj4gZyeDFwcRNQDWHxJZYtxLx4Y%2BT4hy75LFJccDMCayO1ualwT7C4ECcPUDForqinaKQcmqLTQgDp%2FMUSE4unVSgR7aPr%2FjQJLRmsCosXsJTvXJIUmjLIfst%2BJ5shy4jfDEbIHWG7uiELxchobTxDvuKI68HaMO9g1IcB8C%2FwbboDJPoX9c9oUmkA8S3DNa3wezH1FwrX4zdC0GBQBJiEAWR756EIl3KPkZYoNfUrVnHytmXQPPHkX8531bwX1Y3B23qTRmEV5xYWJwgXlPHpw9YrzYA%2BhzzumCxThoUvNFOnDWpmY5zppJx53iqwmTbBlooIQzs%2BCAybi1F%2FxyvQqi6kjxmYsGzmIUemJ16yMyxtlD965DUQByKG2s6E1KE0uK3OgFowCx184uNpwyQRTC96eC%2BBjqkAcYv4ILFRcAm8Xg%2BFMoPZKqrGlHl1bNPIjBr18k1Kxw2vUQgZEg%2BSvmJEvJUo2v9fCHh9nGyU3E%2BKLmsZYARllIPz9Mozy7U5Iw%2B27SUevhdqfzOQOTMB8lPZO79U7XK1nWDFWZRKRFumiK0QH9O8d%2BSSVGOajyogjipjmvDCZtwy9hefvFEXWhb8Ni3dxd7cHVr0RSymFN5Sny3%2B8picS8%2FUeaj&X-Amz-Signature=bad867329564bce5591820706a8c441fead6f652f13487da4f4edf0361792d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YIXTIWV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiiQ%2F4W83FUePLMf2RXyTDva5SNpwAGtEsdGs1Zej3lAIhAIvlpHD%2FBFo9iBi2wd5ZQpcFPBFWSOy6f337VJF9zcZEKv8DCEgQABoMNjM3NDIzMTgzODA1IgwnzJIXgS1XkysRpmYq3AOk7xhcc8gGnvlU%2BkYYw3afQb1wESSZOE3y6Lo0lHynKuTIcCvstfgDppmOJOCnZ5CZqpMCoX0YauCGQxaqMmh8TGG%2F45O%2BN8rIkT5zb3XkPuJygtPJJSmMo%2FbIiF7sIRvHYnCvcNaRDprHKNrx%2BnKwhBU304UyCbTz0kDpc8TsYwWqVl8USaCCs%2BhJD9HycAyY9YITn3IzPmEEWYf4aJSIETF7bcEfwm39Nv2Z%2FsfXWzEqAOeUodV6OvTUijwxy8ZXdWSeOs2Vr3fcRYaEfoNd4h3DnXMIvL75rql2N0QeCBWRBVXrv8IE43uTJ1BcCHtYNNfMW1AoNev3Z737wEAAekUkg%2BRjY53dtxUlqUI8g2f4d1J95VdS31NXPVwRJHBZ%2FXVO7BkAeJ0BYatB2xv8h2Z2qS5RrtA93b7cZ3jPutXFMUzDMi%2BtLkBpygWdGWXbQiTbgR3YdMrbwM3cv1wI%2BIquxNTgtTce7E4nju8UXHui7AKKtBXq7oNO8u%2BcD8%2FJ%2BQWltctaR7VLXAhLIzPFt7wudz1emhTbCoZzzfyPcdfRzLsZSXD4mmO3bLswxKAC3rLM7SBLrTWOBpI4Hgd8j53RIq0Fi7gpyos2LH4QX26Jgai%2FLQ2ktxHrOTDP6eC%2BBjqkAf2xLwnwbV%2BfGCYzO91kg9i5%2F23wpBOmTNwDICw30Oe%2FquRvojiG1DaT%2ByBF0ms40x63GubRpI9lUTnhzlLib0qdcFVeYcHX3ha%2FZXETHFyXc6AjbkozA%2BYqXqj%2FE597QzRXS1jyIZfCUzH5BBVu%2BlOfnPh1pZNIZ%2BsIqEtGzvYBcrgfCVlv2v5NjCPDHksthhCYslQ8jeolsc8OWxenfI808lNX&X-Amz-Signature=2e4235982334d0ef28604404d631d0fd84130d1201de620ce950ca5e13394777&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
