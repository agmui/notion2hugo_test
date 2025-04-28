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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG3L2AA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArz%2FRHwIHDvBpuGbhUF16aVCWNwrJF88GhleHRJp6V%2FAiEAj64TpitlnDu0v7UJP6i%2FQh1l8pcJPGRvXWWGaITDBf8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNFZgSWU4Iy89PnEOCrcAzJ%2BiVosaxIswaTxQ0acPGtrvXGyB%2Fyqt5fHsaOicL7jJau2HGCODA3Qd65DAi%2F3QjIGPYVw1xwn9Vm7nz86EbCF9SyJHLBbAOsZ5yyzrGaB2oZ2BKe9ICEaGWRv%2FE1dJ4EZxr6%2BD1QOgBxRnZljBH4bgoQ43V6DckGlm9ueiaDm2oAsaBEAAW7Y7YA4UrXtin50Vx5rmtr0Usf3wwRDEo0lEBVcPgzgF4QRdF4Laubu6xGpxx14YhsFL4Aoty7ZecWvPy01Gr3AkTXKytknNpAt4i605pfgC05Lf0MewCvQIGXxvIIe78%2FQBkWKplsriN%2F3dRdHPc%2BR4lQxGo%2BgPy3wJjF7548btXqgsw1tExkGr3cZWcIkkYLIwoN1BJzvzfWYWUn8329RjzsjvE8DxnKeMvcwsevI5AidAkZgirPTOzMBZ%2B8l743xDnKHS9zFlmZ4jzcZxOc9f47U45alydtScFmTQ8mhl7Rh9XhdsvOkhjqXfqZQb6rm5C51hH8pv7PJCobwwsmpYO13tULpDvxwipJ%2FPkUv984CmvVr0ld%2Fd6wy4lqJzp6D1dVX%2FIHRS3d4yKN2IKYXQJ8HJmhyHZUy0i%2BDaC5IUarVWD7eYTpU%2BdaNnNYxV9TX2gFPMLSiu8AGOqUBO6TUSiqLx%2FGlHbdmlHCMVK8IwN0n6URsw0biHYM%2BwuLmuiQOWoatU6nMzC5igzFWoNCAfTkwawrQPnHpHQRDlcMtf6CzdAqhHnBOGClJqBFriQfLO7cv5EAEgY0gKK90aU2fZ%2FktWS60otvn2a%2BbpUGPb52ekLwxHlrkMsYemw1sqaS8XapIeAgsvZQj5sm92wlK8QFfVEszC6do3aGqv9a3M6Gp&X-Amz-Signature=6170c20c5d724f9d14b38276835429fc8f4e27b8f3edde5484b675e01d19b830&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG3L2AA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArz%2FRHwIHDvBpuGbhUF16aVCWNwrJF88GhleHRJp6V%2FAiEAj64TpitlnDu0v7UJP6i%2FQh1l8pcJPGRvXWWGaITDBf8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNFZgSWU4Iy89PnEOCrcAzJ%2BiVosaxIswaTxQ0acPGtrvXGyB%2Fyqt5fHsaOicL7jJau2HGCODA3Qd65DAi%2F3QjIGPYVw1xwn9Vm7nz86EbCF9SyJHLBbAOsZ5yyzrGaB2oZ2BKe9ICEaGWRv%2FE1dJ4EZxr6%2BD1QOgBxRnZljBH4bgoQ43V6DckGlm9ueiaDm2oAsaBEAAW7Y7YA4UrXtin50Vx5rmtr0Usf3wwRDEo0lEBVcPgzgF4QRdF4Laubu6xGpxx14YhsFL4Aoty7ZecWvPy01Gr3AkTXKytknNpAt4i605pfgC05Lf0MewCvQIGXxvIIe78%2FQBkWKplsriN%2F3dRdHPc%2BR4lQxGo%2BgPy3wJjF7548btXqgsw1tExkGr3cZWcIkkYLIwoN1BJzvzfWYWUn8329RjzsjvE8DxnKeMvcwsevI5AidAkZgirPTOzMBZ%2B8l743xDnKHS9zFlmZ4jzcZxOc9f47U45alydtScFmTQ8mhl7Rh9XhdsvOkhjqXfqZQb6rm5C51hH8pv7PJCobwwsmpYO13tULpDvxwipJ%2FPkUv984CmvVr0ld%2Fd6wy4lqJzp6D1dVX%2FIHRS3d4yKN2IKYXQJ8HJmhyHZUy0i%2BDaC5IUarVWD7eYTpU%2BdaNnNYxV9TX2gFPMLSiu8AGOqUBO6TUSiqLx%2FGlHbdmlHCMVK8IwN0n6URsw0biHYM%2BwuLmuiQOWoatU6nMzC5igzFWoNCAfTkwawrQPnHpHQRDlcMtf6CzdAqhHnBOGClJqBFriQfLO7cv5EAEgY0gKK90aU2fZ%2FktWS60otvn2a%2BbpUGPb52ekLwxHlrkMsYemw1sqaS8XapIeAgsvZQj5sm92wlK8QFfVEszC6do3aGqv9a3M6Gp&X-Amz-Signature=37299f757d840cb796c0cc1928ce0f36a75253638c7bff7e5e84484e01fa2cde&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NBJRAL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7yy%2FlNxakQBlzIDYGGjQLe9mMxSWYA%2FdjeEOBR5SnLAiAM%2Fa98WPKCgvlGHwOx5N9Z6UQtpbwH0Jb4W9WyUOoapyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHo%2F6CceezOApSi7VKtwDr7QI6vOrdS6X7nKNDbMjjxwwpOpMbNkY9P0GAZOOGXX%2BemojSJDLA0t62cVXy7c94sZLl3JnutY06UVYlW9cQOSlxZXlMbawWUduSBpZReaEYWxhx8BnMWIXo6dtc8z%2FGrSw73eIQyvNY4IajzFI%2FubQIAjPQCuKO%2Fr%2F%2FB2QUtKgB265veZECQwi9TBq5cYKOmeQNRmuD5ka8m22TRjfRJ3gfoXSDmtCNyFXJ10WBOXJU23DeRff0HdotH%2BxHr44Mr4Ak97IoUIrd1cj3027xPrmAFDQLnKMZwUeqvokZo0VX41bmo0JZTD1Ubws148npwiozOd2L12PTz2UTuBeU32sEWA%2Btjmh6ugNYIUpOZFldxbWYbYdLz%2BoHfJMBMWrJIJJ6YcmkUACzvC1iDJ9rf4O9CezWs0uL6BR6q%2Fou1dlbqo4TaPFWTTSUZ%2FuyIGMyVPtGqY7STznSaz57ToXCTjcnuZT6lr8cCAlU17kdqnMDxJJGi5WHtVoSIUqm8OEa9CNLKwSfub%2Fuv%2B%2F4njpNl9rmpHf0LwTbFg2Xke7cGQxb%2FClIErjx%2Bq9DPqPBgyiIhQ6GU5cvkYsJXso6UvbT8Y3Uelgo6RfPXexbaQ82dELA0QQhs5abNkWTWgw5KG7wAY6pgHnucSKRPTeWEwyNHG6Yn33t4Mt55qI3WlhC1ZwTPEFRhevrfIFy3uYwgrKi0W1cxYg43bwK2W3yUze7fpGMpmBP%2FKDJQ1Pa51UYnC%2B2vdhUfcSXYSkimT6N81Ba42Pb7mhQW%2BCUtF4BJpZmhmepW8Z36R6O%2BjAdCdQHprkk%2BN%2FIjt6HMMYwqkj7gJP9DbEXVYFhccWB8Pb2XCR2u4A1d6ng9qSwNkc&X-Amz-Signature=25d32c48d12117c0f74d3cc4ae2a8f696a4f2a31a1844352c6d3596e3c663b72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGREO3TO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B9FZdVVns5C8Q26%2B5n3%2Bo2TbOYjmMduMTVQjRf2a%2FlAIhAOF3vEZq6oWrrJk%2BXfEKRYUehsCd1%2BchH6aw7HVwjgRMKv8DCGoQABoMNjM3NDIzMTgzODA1IgwfBfCC28c%2BLbfBHO0q3AO3MDd7BfujoJNf5yEFHoO4UWqbJshlSjKiUntwT1AzYS0SZGr1RECGXOsUBMM8C3H8%2BQy%2Fuh4u7LTnBUI3WNygbGkG9h5HblHr8Sp%2FVTDpcyAbiayquHGJSBFYsOnNMg11LG5sqPvK9Kn6v2WgWypM%2FbmJHB1fjkF2%2Bmg5lJYzdmfll%2BjR15CbiwOIMUEDzo9kWqjLwelRWZ%2BeaklMMLnyND9viR1KXhfpwr6nV1myDWUoLG22lJioqig8AbugI6IgOre9XBio%2FTVyExS85ZojA44ypMaYpOvek%2FXGNO2PvkWv6NbRLQ%2B%2BczOs3kfuEWCS0utsTDUPnBvxVNIvQv3kJJnkp9zyd9Td6Qm%2BfTHTmrG0Dip0ssHAhxfOL8UqRwLX1mH2TlQIHWnRr%2FwfVU95V9D58Ywnk9og2W7QSB%2BOdXD67c8T0dGJrPZHRyJmEcMY6sp5q9oR7z5N3vJrASBSj4Y6fI3EXRlOghB%2FrRz%2BGPCcbhvkF%2FkjGLG6Q1Z8UDOlBdAKmC3%2FjUAkDb%2Fc0EHeypMGnajpaYXeH4GU47R2jGokPrhNTdu4P45OxDuW8M86m9644mhDnoXvFSeNNOZebkYCEQ3QmnP0yy97oJGWxqSXOi%2B8L%2B2gkG5Z6DCNo7vABjqkAbTIv0uqJpPiodbjW6Gh3%2BvQVcwNZhvMoP3gpTCccAypnNb%2BLnFkAdPcgjrJ3P1pSTg%2F6zaJrBm5hgWXFOEmTxdaOyFGBHx1R%2FIU3k4Xqg%2BNhGBrtGdXVevuRDqDQVWGmge3yyyhBadKtrbxiTdmKO%2Fcc8rfAZfM6voeIdjVwnxjzL4F7LGBMNbiYmNtFBxR1EN4LNP7vEhqpGIvZT3jc%2BC%2FjDDO&X-Amz-Signature=22038d00d257814bacb97107ac5604ab15cac2d843787398272aafe92d1139dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG3L2AA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArz%2FRHwIHDvBpuGbhUF16aVCWNwrJF88GhleHRJp6V%2FAiEAj64TpitlnDu0v7UJP6i%2FQh1l8pcJPGRvXWWGaITDBf8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNFZgSWU4Iy89PnEOCrcAzJ%2BiVosaxIswaTxQ0acPGtrvXGyB%2Fyqt5fHsaOicL7jJau2HGCODA3Qd65DAi%2F3QjIGPYVw1xwn9Vm7nz86EbCF9SyJHLBbAOsZ5yyzrGaB2oZ2BKe9ICEaGWRv%2FE1dJ4EZxr6%2BD1QOgBxRnZljBH4bgoQ43V6DckGlm9ueiaDm2oAsaBEAAW7Y7YA4UrXtin50Vx5rmtr0Usf3wwRDEo0lEBVcPgzgF4QRdF4Laubu6xGpxx14YhsFL4Aoty7ZecWvPy01Gr3AkTXKytknNpAt4i605pfgC05Lf0MewCvQIGXxvIIe78%2FQBkWKplsriN%2F3dRdHPc%2BR4lQxGo%2BgPy3wJjF7548btXqgsw1tExkGr3cZWcIkkYLIwoN1BJzvzfWYWUn8329RjzsjvE8DxnKeMvcwsevI5AidAkZgirPTOzMBZ%2B8l743xDnKHS9zFlmZ4jzcZxOc9f47U45alydtScFmTQ8mhl7Rh9XhdsvOkhjqXfqZQb6rm5C51hH8pv7PJCobwwsmpYO13tULpDvxwipJ%2FPkUv984CmvVr0ld%2Fd6wy4lqJzp6D1dVX%2FIHRS3d4yKN2IKYXQJ8HJmhyHZUy0i%2BDaC5IUarVWD7eYTpU%2BdaNnNYxV9TX2gFPMLSiu8AGOqUBO6TUSiqLx%2FGlHbdmlHCMVK8IwN0n6URsw0biHYM%2BwuLmuiQOWoatU6nMzC5igzFWoNCAfTkwawrQPnHpHQRDlcMtf6CzdAqhHnBOGClJqBFriQfLO7cv5EAEgY0gKK90aU2fZ%2FktWS60otvn2a%2BbpUGPb52ekLwxHlrkMsYemw1sqaS8XapIeAgsvZQj5sm92wlK8QFfVEszC6do3aGqv9a3M6Gp&X-Amz-Signature=b52d551bad226fa04b1610afa54ae0a90e3f59c0311034f8a65b7735bf084a55&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
