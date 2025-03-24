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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUE6NRSL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4d80lUN%2FVHdtS9o62DE2BM5TC5Xegbe7a%2B3qWowiyAAiEA2Oz%2BmPt%2FelVgPN4LoK3o0Zg4wpoCRWHIG%2BKiGECnOV0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGqo2TYIX%2BNT3wWMircA6O0aacfhSFkGN5SHypoK6m%2FAlrAZAdVDk80fTSmHZEn5k9xq302PhVMk4Nv8b3xu5bGgWNHsf3k0tL2ExToOIrKPtfLH3uTLgmni6zp9ruzmgFSYYYXqWevISj4cUQADjOtXpoOvdE0%2BiTMisK%2BpaUMSv49eMZhx6b1SVIrNIpwmLOOvgabeY%2B%2FBQGrnN%2BE1l8jaX8QuWeqgmkRGvOFTO4GP%2FE%2FV920tLJIx%2Ff6zzhSLOscbZXaQbTkitATnwRnSVzPG1X07iQQ4XWFLvDvaKwl17dOC36sv1nTpbdz5i1TBI4Z6ZroO881az3JeehAnmB4FEIFVGk9AqHDz6TaG%2B5cM5AxsFnJkexNjFm4Vwjfw1stQDaYYfvqOKhzowXFv%2Buo5YAGqyI1p4WUnTLhQjnAZ4yV7aYCi96lNv598fxSlgmBmaRbVTfo8KHOa0tG9EyuTbaz6PleqNHat82ByVmSYqsDq8dxZxd5Az2RKXKdixcCFmbkSVrUeKvQLHjc8Y2P7Lr%2Fhfxz4BqAQUVkJB7v%2FtiThBBJUdYuue%2Brms7nXbH%2FMKQOnSEycaAl60qoTdkhr6VkeVgY3htge5R4AX3ynWenDWlO8oYtsP9N1JRJqlnWmrQO422K6EDiMI7%2Bhb8GOqUBcc8az81cQU%2BlkT8YhKRriQrDBd%2FyskTm7h%2B%2FOQ%2BoHRAxIJXtbHq7V%2FWflTiPg1mcs6W0gKMJb87kLUFWcyz1uCpHWtjZHSjOLXddb1OKq7Z6ESdfryhP56FtCsxLMuD%2Fakm%2BUU8hLE%2FgsYZtoDaB%2BW97D1MdKrc5ZG804B7OWw8bS7wycw5ZDw0MxBnmfpgAuqSHPFyQIA0ds0ngKKV36%2BzkBCwJ&X-Amz-Signature=b7a8d2d8b5db5a03a89e62f19d4b22b37ca679c2085a23ad1c952b52490cad6e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUE6NRSL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4d80lUN%2FVHdtS9o62DE2BM5TC5Xegbe7a%2B3qWowiyAAiEA2Oz%2BmPt%2FelVgPN4LoK3o0Zg4wpoCRWHIG%2BKiGECnOV0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGqo2TYIX%2BNT3wWMircA6O0aacfhSFkGN5SHypoK6m%2FAlrAZAdVDk80fTSmHZEn5k9xq302PhVMk4Nv8b3xu5bGgWNHsf3k0tL2ExToOIrKPtfLH3uTLgmni6zp9ruzmgFSYYYXqWevISj4cUQADjOtXpoOvdE0%2BiTMisK%2BpaUMSv49eMZhx6b1SVIrNIpwmLOOvgabeY%2B%2FBQGrnN%2BE1l8jaX8QuWeqgmkRGvOFTO4GP%2FE%2FV920tLJIx%2Ff6zzhSLOscbZXaQbTkitATnwRnSVzPG1X07iQQ4XWFLvDvaKwl17dOC36sv1nTpbdz5i1TBI4Z6ZroO881az3JeehAnmB4FEIFVGk9AqHDz6TaG%2B5cM5AxsFnJkexNjFm4Vwjfw1stQDaYYfvqOKhzowXFv%2Buo5YAGqyI1p4WUnTLhQjnAZ4yV7aYCi96lNv598fxSlgmBmaRbVTfo8KHOa0tG9EyuTbaz6PleqNHat82ByVmSYqsDq8dxZxd5Az2RKXKdixcCFmbkSVrUeKvQLHjc8Y2P7Lr%2Fhfxz4BqAQUVkJB7v%2FtiThBBJUdYuue%2Brms7nXbH%2FMKQOnSEycaAl60qoTdkhr6VkeVgY3htge5R4AX3ynWenDWlO8oYtsP9N1JRJqlnWmrQO422K6EDiMI7%2Bhb8GOqUBcc8az81cQU%2BlkT8YhKRriQrDBd%2FyskTm7h%2B%2FOQ%2BoHRAxIJXtbHq7V%2FWflTiPg1mcs6W0gKMJb87kLUFWcyz1uCpHWtjZHSjOLXddb1OKq7Z6ESdfryhP56FtCsxLMuD%2Fakm%2BUU8hLE%2FgsYZtoDaB%2BW97D1MdKrc5ZG804B7OWw8bS7wycw5ZDw0MxBnmfpgAuqSHPFyQIA0ds0ngKKV36%2BzkBCwJ&X-Amz-Signature=7c6993bc0f18be7b0f31a9f77ad2870b5cb00c6f3eeb0d77a1293229ff302e44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722Z7XW6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8XCNi4Wzqcz9CbBCWRLw1%2Biw5YEt0YL1pX3lIZktd3AiAhxZnE1Yb%2FyDj9bPl5CrL4xPso%2FXWDgt4RfG3xAgRu2yqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWerd29WpVSPkOYxWKtwDQbkLgPVLl2bS%2FmjwasZ7LQcLE2zSgKP3S1qDWD44uuQaTQe3g9gLiT%2FY%2FcXfQw0Ubt4dXTXIVCV7nRc6SxpI4EYlaXE8Z8912iukR5ffOVPvJ5FczpvQd7lgfZ8r27Xzxqrh%2BkSKGQeMy75yoxVuOKNcyAvedZ16QwH%2BRSJyGD2uhyNnYSNAloBTJFiGnXhHJT4C0e8Cl%2Ff%2F8I88gP%2BFuRpPD49jLUj8Yq2Ig3hwIEp5qQillNpceGLNs%2FA2wTWFpMbzfYH8Tz4Jk3J1RDitp70MHle%2BeR1f1mEkR2HIW94BR65HH9Q8%2BTyohh7nLeS6UzokU5jc6CIo3VXNo%2FZK%2Fk%2Btl0Tetuc8kjbURj65e724ZjsmQ3jAnVjkBW%2Bl%2Byka7nVmw1h%2F%2BWojcwKCX8xG6xA9w%2FY3qMbaxWRV6g9I2%2ByXZjBMFAk0iofzjMzplHGRWKu7Mk2Fl73aeYQB6eYOted3A2iED6gAANPcspzK3K2iWTqCzVNxwioZbMSqCjUM9tdqdJ0lwdfAK2B1yJRGfkv8UmBE43528036k5s1nvOisDk%2FFaHq1qJxYzhl5uBpb3igY8ZTO5fOa1%2F4KmCcM4XNJLvKn2dUIKbuGh6sWcHfHvvw8wq9pN6pz3ww1%2F6FvwY6pgGp4h0q9DuWdbbb8i%2BSg%2BIdSyfW7jdPdyOo7PE0%2BUykLnVeF%2BBlj9RV%2B7SUhhsYpQ8Ep0RsueVrUSPnX%2FGJCNk%2BqzYXSVyVctKQegjLKtddHg2fnwQYFACAMqTUiIgXCsVwd%2FjqiKEth5hk3nszOWq%2FwQy1%2Bf0RnRumSSFHyFIDdpGrJcqVWR%2BHsbxJqQFPhkDmAgN9ys9MEichJzE%2F7Ae8azl2hULk&X-Amz-Signature=52bc29a294df34a193465903aa315aca3d2f6c9e1a7af5e9a4b76b16a5c3e68f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EF3DHK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6AqOwAHfjiKb41CGrYPSptOYyail6jtbIyjgIcYWHgAIgUQEppOOG8yyBYeWdYIHn28iv4uSOUJZhoMHqqGwVPXcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGdTowuLC0RyYbwSyrcA7CbTsHzbzvZDWIk5uwQJpIXnVvopF5Oh8vI%2BpDcz8PobVVIQxT0kGA9xFo5Xa9xtb%2F9qMkRIrlLQQX1M%2FF8soB3FMEb4OdgdnXGUi7tfL7e0wZSUsTwr5IBt35a3q4w9Q8nbUaw5b6O9qF2Ig7x1%2BGRb9xB%2BLECbRk6CZ%2BPiOhvYP5Pg3LK%2FfunC0rq1IaeuZwpsU9nxtl%2B9D9q2h1AEjeXC9vVcrWMDa6mUo1AbcI1wO4dE19xLi7zX1WKdVtpB%2BVVBjQic%2Fvqrj0OkVJ8R3P%2BTcUxkte1Q2GxSQXEStCGJExR7P%2BL%2F0EwIfems2qksvbd8hhGt9IQajJuqcuGYaQ2PDddgVkLEXsIcw3ubTiEpE46%2F1wYqlvVKzyw4hZmT319e7Hcyo0ATyQDmeZOaz64ROssgWholB0%2FCHcUDHwKlidf5zWW6H5yD%2BAfD3vzgaQ9%2BKvW%2Bvyt6Rvkx6MLsfK1x3vZK1%2BLHxg87z3Oa%2B5ZjmQwy3gMif9WZDpXrdyN2O23ntunH3gTKM3QgT%2FI3yXb%2F%2FV6INnLd%2F9YUsPxcsKf23L0MiXFXH3WSzxtgOfpRJarI1281Mxf1vDLy57RoKvH9oPJ6a8q9iLsbqfW%2FwbyAhlCISWd1AgnfPAHMJ7%2Bhb8GOqUBaY3uqGudy0%2FMf%2FCZLzQEh0UPDfVpkyZsHY%2BElCPWWBgAlkx4rzhGWPcIbB04jDU4lsx3eWT7h%2BEPmZEDK7dehysCB%2BFjtWyJrHD%2BQFvuKR3z8vZDzr2ixTYeRWNDYBmgP4yGQvykCcH42gw11hzxMnCYy4T4bXegzruwQjKqs%2F8da%2FgFMnUYJuNEIWFOhfYTSoPcVgITv36pWdiLoUwNTgFab1OS&X-Amz-Signature=39ecfe1405645438187ba340a4537e67ecf830959612b4aa2b529fde9a1512ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUE6NRSL%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4d80lUN%2FVHdtS9o62DE2BM5TC5Xegbe7a%2B3qWowiyAAiEA2Oz%2BmPt%2FelVgPN4LoK3o0Zg4wpoCRWHIG%2BKiGECnOV0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGqo2TYIX%2BNT3wWMircA6O0aacfhSFkGN5SHypoK6m%2FAlrAZAdVDk80fTSmHZEn5k9xq302PhVMk4Nv8b3xu5bGgWNHsf3k0tL2ExToOIrKPtfLH3uTLgmni6zp9ruzmgFSYYYXqWevISj4cUQADjOtXpoOvdE0%2BiTMisK%2BpaUMSv49eMZhx6b1SVIrNIpwmLOOvgabeY%2B%2FBQGrnN%2BE1l8jaX8QuWeqgmkRGvOFTO4GP%2FE%2FV920tLJIx%2Ff6zzhSLOscbZXaQbTkitATnwRnSVzPG1X07iQQ4XWFLvDvaKwl17dOC36sv1nTpbdz5i1TBI4Z6ZroO881az3JeehAnmB4FEIFVGk9AqHDz6TaG%2B5cM5AxsFnJkexNjFm4Vwjfw1stQDaYYfvqOKhzowXFv%2Buo5YAGqyI1p4WUnTLhQjnAZ4yV7aYCi96lNv598fxSlgmBmaRbVTfo8KHOa0tG9EyuTbaz6PleqNHat82ByVmSYqsDq8dxZxd5Az2RKXKdixcCFmbkSVrUeKvQLHjc8Y2P7Lr%2Fhfxz4BqAQUVkJB7v%2FtiThBBJUdYuue%2Brms7nXbH%2FMKQOnSEycaAl60qoTdkhr6VkeVgY3htge5R4AX3ynWenDWlO8oYtsP9N1JRJqlnWmrQO422K6EDiMI7%2Bhb8GOqUBcc8az81cQU%2BlkT8YhKRriQrDBd%2FyskTm7h%2B%2FOQ%2BoHRAxIJXtbHq7V%2FWflTiPg1mcs6W0gKMJb87kLUFWcyz1uCpHWtjZHSjOLXddb1OKq7Z6ESdfryhP56FtCsxLMuD%2Fakm%2BUU8hLE%2FgsYZtoDaB%2BW97D1MdKrc5ZG804B7OWw8bS7wycw5ZDw0MxBnmfpgAuqSHPFyQIA0ds0ngKKV36%2BzkBCwJ&X-Amz-Signature=496a8f67b21004f4b300eaa99faebbfd820ab2f9e5b460ca42cccc92613fcd57&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
