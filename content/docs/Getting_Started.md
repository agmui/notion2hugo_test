---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MNGMZ3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCQ5GR9%2B80c%2B%2BliArIsEU%2B1K9xl5RdaFBwmO0vOzR05gwIhAPUd%2BOK5rDUogd5wvJEzdlFHW7QV7%2FKoJ2ZtIJ%2F8rjh9KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7HcIKUaV6NWqJgGIq3APoN9nCdLSPYHUN53Dza0Bl7pYt5G%2BqvacqeqVbrYGItezWOy4HFtZLN0Hc0rLEa7kOyYSljoIwLl2ZjHx95F7R6lHp2TycB7oCxT8bYE%2FeH2nFY4kylTEYZBXnAcJgBFl1wuBXj3Pv309v2XLZfHNCG%2FhVrdUzIG%2BB1yl4Hnt78ikdDfyVmv620xSE6%2FJQHDQKsuRPnM6Q7SeKj9VbLX432vavSmD3FY0La%2F8isPWAdU8gCsc0qbXD7XQM2zo77v8uubfX5ta%2F0G5As0avzz%2FjDrhEg4OkOrJGiOlprn9KQnpofzt7HqL8ROyW613AwOA51IYrXk8%2FySFx0H6PEdpXAsUflpxMx%2FJ0%2FmRYRBtkkAgU%2Fpnc4hzFbZ2%2BSIPmOt9EVMABKw1dL%2BtQ7fCZXdcjckE3KL4lmIxN0KOJH5NLYslbkQDui7%2FIBJZr9XluuQXrg6WFTKLZxnfk804EjV0%2Fi%2B19ihFasU%2BV3DuWAZG7WcKG4WpzS7gLSlkOv%2F14Qk7SKom7NtV62iZ7lf0FBexQ1S3S0x18EkEdbiIjURbPYXqsfrMiO3t3ZeFeTV3fxu69IiXheVsitah5Lg%2FCtwlKFzB8Ui5dTEbM2SqiKzhqeFdxqrPiuEyTSj8gLTChxbzBBjqkAbwjGICxtcLyxZG0UI93uG8Yl%2Fp3kxjvOaOr%2BRr9r96GwxEx79ndp0EwKdV31dDhbuwHzDgRYaq7ydmQ1dEXeKLgyIV5hmuBtYDtPFffeWE%2FkqhS8HteUNNLsQtKq1oCPIFEKDwTQPNIUfaoNT7Ztlr72bEKb4wtBAIrDRGQwmV5iNvhHLymREcqBOYiytH8XEx3ukDkJZ2cGkmOb%2F1CT%2FNR6a9w&X-Amz-Signature=b188114bad79f81bdebcb033b173cc00ee0c8fba53d81dba6d1b4d6039ca4c45&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MNGMZ3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCQ5GR9%2B80c%2B%2BliArIsEU%2B1K9xl5RdaFBwmO0vOzR05gwIhAPUd%2BOK5rDUogd5wvJEzdlFHW7QV7%2FKoJ2ZtIJ%2F8rjh9KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7HcIKUaV6NWqJgGIq3APoN9nCdLSPYHUN53Dza0Bl7pYt5G%2BqvacqeqVbrYGItezWOy4HFtZLN0Hc0rLEa7kOyYSljoIwLl2ZjHx95F7R6lHp2TycB7oCxT8bYE%2FeH2nFY4kylTEYZBXnAcJgBFl1wuBXj3Pv309v2XLZfHNCG%2FhVrdUzIG%2BB1yl4Hnt78ikdDfyVmv620xSE6%2FJQHDQKsuRPnM6Q7SeKj9VbLX432vavSmD3FY0La%2F8isPWAdU8gCsc0qbXD7XQM2zo77v8uubfX5ta%2F0G5As0avzz%2FjDrhEg4OkOrJGiOlprn9KQnpofzt7HqL8ROyW613AwOA51IYrXk8%2FySFx0H6PEdpXAsUflpxMx%2FJ0%2FmRYRBtkkAgU%2Fpnc4hzFbZ2%2BSIPmOt9EVMABKw1dL%2BtQ7fCZXdcjckE3KL4lmIxN0KOJH5NLYslbkQDui7%2FIBJZr9XluuQXrg6WFTKLZxnfk804EjV0%2Fi%2B19ihFasU%2BV3DuWAZG7WcKG4WpzS7gLSlkOv%2F14Qk7SKom7NtV62iZ7lf0FBexQ1S3S0x18EkEdbiIjURbPYXqsfrMiO3t3ZeFeTV3fxu69IiXheVsitah5Lg%2FCtwlKFzB8Ui5dTEbM2SqiKzhqeFdxqrPiuEyTSj8gLTChxbzBBjqkAbwjGICxtcLyxZG0UI93uG8Yl%2Fp3kxjvOaOr%2BRr9r96GwxEx79ndp0EwKdV31dDhbuwHzDgRYaq7ydmQ1dEXeKLgyIV5hmuBtYDtPFffeWE%2FkqhS8HteUNNLsQtKq1oCPIFEKDwTQPNIUfaoNT7Ztlr72bEKb4wtBAIrDRGQwmV5iNvhHLymREcqBOYiytH8XEx3ukDkJZ2cGkmOb%2F1CT%2FNR6a9w&X-Amz-Signature=efbafb588c0b2458c590c9356729eb14e71324a3658204f7cca2312826784c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MNGMZ3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCQ5GR9%2B80c%2B%2BliArIsEU%2B1K9xl5RdaFBwmO0vOzR05gwIhAPUd%2BOK5rDUogd5wvJEzdlFHW7QV7%2FKoJ2ZtIJ%2F8rjh9KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7HcIKUaV6NWqJgGIq3APoN9nCdLSPYHUN53Dza0Bl7pYt5G%2BqvacqeqVbrYGItezWOy4HFtZLN0Hc0rLEa7kOyYSljoIwLl2ZjHx95F7R6lHp2TycB7oCxT8bYE%2FeH2nFY4kylTEYZBXnAcJgBFl1wuBXj3Pv309v2XLZfHNCG%2FhVrdUzIG%2BB1yl4Hnt78ikdDfyVmv620xSE6%2FJQHDQKsuRPnM6Q7SeKj9VbLX432vavSmD3FY0La%2F8isPWAdU8gCsc0qbXD7XQM2zo77v8uubfX5ta%2F0G5As0avzz%2FjDrhEg4OkOrJGiOlprn9KQnpofzt7HqL8ROyW613AwOA51IYrXk8%2FySFx0H6PEdpXAsUflpxMx%2FJ0%2FmRYRBtkkAgU%2Fpnc4hzFbZ2%2BSIPmOt9EVMABKw1dL%2BtQ7fCZXdcjckE3KL4lmIxN0KOJH5NLYslbkQDui7%2FIBJZr9XluuQXrg6WFTKLZxnfk804EjV0%2Fi%2B19ihFasU%2BV3DuWAZG7WcKG4WpzS7gLSlkOv%2F14Qk7SKom7NtV62iZ7lf0FBexQ1S3S0x18EkEdbiIjURbPYXqsfrMiO3t3ZeFeTV3fxu69IiXheVsitah5Lg%2FCtwlKFzB8Ui5dTEbM2SqiKzhqeFdxqrPiuEyTSj8gLTChxbzBBjqkAbwjGICxtcLyxZG0UI93uG8Yl%2Fp3kxjvOaOr%2BRr9r96GwxEx79ndp0EwKdV31dDhbuwHzDgRYaq7ydmQ1dEXeKLgyIV5hmuBtYDtPFffeWE%2FkqhS8HteUNNLsQtKq1oCPIFEKDwTQPNIUfaoNT7Ztlr72bEKb4wtBAIrDRGQwmV5iNvhHLymREcqBOYiytH8XEx3ukDkJZ2cGkmOb%2F1CT%2FNR6a9w&X-Amz-Signature=24c19d3e810bf83c27a7c43fd2a855d40d3a25e4bf79211e30729e57579a8530&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPACK74%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD90S7ZpMe8KKaCcQ2DKKd3LdFuLL6GDopgK61HEeSmOAIgLQBofVaDJQcHmqPPawYobqvqLTlTR0BTlr56mKZbAT4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwiYOiew92xcarSIircA7%2F5JX%2FmJpkEs5mfR%2BhuIc4q5JOpWcolXZW38QtEYSoUP632Vd5a9gfGAEWqmzFSvsPdzECAjwDYCZlZiZTTeE3SP54npVh6AI0NpZFxj31Qj8i3YMnlgQBc118QsQDb8wHbTjSf0z0wXDPpqWe%2BUV4l0OHjJn9pAUlv0azT8ahIG2SC7IgDy7YqhKK%2FKvRuUh965Vg2lL2bzrw8%2BALYTH%2B0fZuE8NbS%2Bfo1QuhdmkdZ8oZNMWFlXfZcDPBNIiEvO90Xs916dddiizY4bDKt4E%2FfIId%2FFW8YpwgSgd8O4R8JgIyyIMiDYqgSoVWs0upuQhuUhzxep81MoZ0l4JpmAcaZkF38L1LdSmatE1bTLyWTZMPMGse06gQT3YKq0YiX6arNijOgsxC%2F99RVV0W7AIdGwgHv2SXMT4cE41oc6aFJyQ%2BSE%2FCMvp2a%2F5PhQOM%2FXg9VEmVvVywK7Ccc4DHKKU5vXd8cUkQgc5OGCAqsUT7gArJr2dabAX2bTQOFWXAqACVOW1nQXdIH0GHUvvHpeH4hdCBT6I93%2BPdoZr3bPn1SZWtwbyQMvoMgPMzAzYOQNu7peRipUeixTJheEy%2FIz1ItKV316cVQ%2B4PJ3u%2FKz5SfsUrjXtF8a1qTMmAFMIzFvMEGOqUBqOIz8DauV8Fo9aaplOz45XkKFHq8Onzib1CilrbzqNBx7mkFgc3lFOX69XHNse9sdN1oMj%2FOPg0rjiwM8ErhUrutHMbioDqsbDr3ROM97o9cxpCt64Rdmb0qDuUJZGVtE3%2F%2B84gkteX1jZSEjn8A%2B83yP%2F8OpXffrGQcbsQj0VOxqfi%2BIZdsvFTcr4a9N0yW5CvE%2Frv80JI%2F2y%2By%2ByR8RZP8VX1f&X-Amz-Signature=cb4b5ddcd34e25b43bfebeeb66896b43f3a1a3a35c18c916e3b23af0f4d7d3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2R7XX7Z%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIBk2iBJYh%2BhD68MfKT%2Fanuzk%2BSf78A00YZXhli84IGyHAiEA9%2BfNIC%2BygD%2BktdS3KaQ1RO0NMEpZK7VDfX1GaoDoApkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQCppx717Ut%2FDj4TCrcA8IE3gF4wSfem8BBprTaVWKnC0v%2BRRTjQl1iHAxNfuqxWN2JXOeMM33qqvomqEEqQCt8UL9x4pqZhMjIa%2FnSC6FsFMODS0ZiYVxD2Lx%2FC1DTlzFG9atKUYUCF5n5ZCyqdYszWgVUlV5toxBObjJ87ES77DaxZneFLhzDRgQf%2BSHFUTIA27Z5tml4%2B%2FfhJB%2Bt%2BUAoxCkFbomuOm8gD0hZ%2BK1dYdiG7Aiof89ekwMWn7L4bWKyulvY0uR8NY3L20Q5D3SzCpcTD%2BwDIRJrBe6VViroiiA8jr73QnCsxwtZmfVNSfO6e9vSioXcN9%2Bf%2F4WswJ7rtSmB9pS79UaqwsJdSvm3q%2FKD31FJN9GaTRURMa6FOXlpSZTgBA%2FOWQ0yil6Xc3T2tFZjQInmV1SXo2z%2BUbV63R8lbw%2BYcNEIy1nGPHJKutl5T0DrIwDrujUiMEDmXZCj8Mlr7QVdR3LTY%2BakAFG1pBgNzwslNij3hqVE7RWqFPTNDOCEeUVVKLh0stsvBiZ7LhG5WTQsbvEGsDBtHtbrVFVZCPGDrnYfDh9%2F4uH4J7mpqkhzqsWYFdNfrLoxiR4Euv%2FssI5%2BTqa4Qewnfj8mwBIzptsaG69tEnImPi9TR6Y0XZV4luWLNxdUMMLEvMEGOqUB0IKRC%2Bs7XhoBmOIGGoJi4YmYGIPgN79aFrUhgzfi%2BY2zfmJpUXL15GdSZKPdaVKONRNSvH05hMi0oTAwVmqeg4UkJAF%2F8ns2pmCXD18aenAiAu6%2FlTCNDPzefoxlyH4rnt9IEUn%2BmiFte%2BdvB1t%2B4GIqoPmUb97W%2BQIIJ6kL9r4u%2FqoLpDCFh37s7Vr0hvSxTx8oyDv32t%2Bs%2BLBt8sx4sZxXWvbH&X-Amz-Signature=b34fe077a65a9ef4c3a8ed6cf60b3a61fbdf23d79a98d62fe3023e921415976e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MNGMZ3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCQ5GR9%2B80c%2B%2BliArIsEU%2B1K9xl5RdaFBwmO0vOzR05gwIhAPUd%2BOK5rDUogd5wvJEzdlFHW7QV7%2FKoJ2ZtIJ%2F8rjh9KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7HcIKUaV6NWqJgGIq3APoN9nCdLSPYHUN53Dza0Bl7pYt5G%2BqvacqeqVbrYGItezWOy4HFtZLN0Hc0rLEa7kOyYSljoIwLl2ZjHx95F7R6lHp2TycB7oCxT8bYE%2FeH2nFY4kylTEYZBXnAcJgBFl1wuBXj3Pv309v2XLZfHNCG%2FhVrdUzIG%2BB1yl4Hnt78ikdDfyVmv620xSE6%2FJQHDQKsuRPnM6Q7SeKj9VbLX432vavSmD3FY0La%2F8isPWAdU8gCsc0qbXD7XQM2zo77v8uubfX5ta%2F0G5As0avzz%2FjDrhEg4OkOrJGiOlprn9KQnpofzt7HqL8ROyW613AwOA51IYrXk8%2FySFx0H6PEdpXAsUflpxMx%2FJ0%2FmRYRBtkkAgU%2Fpnc4hzFbZ2%2BSIPmOt9EVMABKw1dL%2BtQ7fCZXdcjckE3KL4lmIxN0KOJH5NLYslbkQDui7%2FIBJZr9XluuQXrg6WFTKLZxnfk804EjV0%2Fi%2B19ihFasU%2BV3DuWAZG7WcKG4WpzS7gLSlkOv%2F14Qk7SKom7NtV62iZ7lf0FBexQ1S3S0x18EkEdbiIjURbPYXqsfrMiO3t3ZeFeTV3fxu69IiXheVsitah5Lg%2FCtwlKFzB8Ui5dTEbM2SqiKzhqeFdxqrPiuEyTSj8gLTChxbzBBjqkAbwjGICxtcLyxZG0UI93uG8Yl%2Fp3kxjvOaOr%2BRr9r96GwxEx79ndp0EwKdV31dDhbuwHzDgRYaq7ydmQ1dEXeKLgyIV5hmuBtYDtPFffeWE%2FkqhS8HteUNNLsQtKq1oCPIFEKDwTQPNIUfaoNT7Ztlr72bEKb4wtBAIrDRGQwmV5iNvhHLymREcqBOYiytH8XEx3ukDkJZ2cGkmOb%2F1CT%2FNR6a9w&X-Amz-Signature=a826344a60b352bf48b7ba27d59cf8444063ff255f681f8fddd6713dce23da9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
