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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4MWY3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHYIDLN5lZmm4TXx6ldurbaQ7bvj5GcTMTMgv%2B37k7mXAiBc96YXPYsDXWE6zfOKU%2BtiYyWyYxM5zJSfvNU8e6kzWyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMjqmBxDxYhx7C%2FCXqKtwDpswhRHRpZicXj4wWdWS77SNG%2F9%2FJMejVLWzkVQyIdJsxcneCo9K4H4wOX9U04xMI0U82XAQsWVYVBZBQJUd2NFfbH%2FbtslC8WbcGHlOePRKhXG00HtRUTL%2FUN7fXA4Ue%2BaQSQbQVjiIGhewHj73XOPWerL6lsYkvpmFQEsfM96zITz6JZfCmvAyrJn9%2Fw939bgsVcW0kRc80KenUxl8FWtoPwApztzOkccBjjGUZBBm4LvuvwNu%2BtkawDjMN4aVSPzEkxwjJ7TxzBbrSROP7RvHOZI%2FmKshvCSihmfEdzespt5REdemXifvAQ8OyDxCQMFv7lHUkhGXx1D%2Fltj5CkW3gRwfvzmfX2zIDbUm6i6aVb7yCNNWzA%2FD7QRNGOXbViwnjT27GF63Chp4MUMA%2B8SP7ZreE1GkFhv2xABSD2H0mxJh8zy9lSk%2BTQi7gSoWG5J6fD4oOvJqUy6HOuZI4m9L2HUpB7I%2Bz%2BCIyOi4jrHUgyHt1MINR2mAO5ZaVzk%2FlieV0dDlH74peyDFhJOwlRM6Tj9%2BRR3j8w8jpRhBE%2BLqjiSlhtPeZ6z6cVyhdy8cDWuZckRVh9Y2fZZ0%2FtxwHO8xenlTzB%2Fdg86HwwIUsRn9lZgbc56lwBny9AzUwpM2BvgY6pgEYKl6tkHpx5WrC7YXR0v7DWcaUEzp5Lv82ZAxHJnd7Gsmlx78wGcB%2Bu4nlqGxgWyl90q73gEKVz590oMHTEavJ6urqrB6MnAmTuUki0dn%2BfrtltJGBbEvpgncQvt5zN6yTGn7yRe7PYxIxh3GgnCC4ZfC9oN0MOaOEBw9FrwRXSF5QUsapCeamHORNq7C8QGo2HyGtzphYtGTDYU9OsShqtrqcAWAH&X-Amz-Signature=acb5504d0efa323fb8b8f37d313619a7bc865dc082c5f278921c56f33d4dbff9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4MWY3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHYIDLN5lZmm4TXx6ldurbaQ7bvj5GcTMTMgv%2B37k7mXAiBc96YXPYsDXWE6zfOKU%2BtiYyWyYxM5zJSfvNU8e6kzWyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMjqmBxDxYhx7C%2FCXqKtwDpswhRHRpZicXj4wWdWS77SNG%2F9%2FJMejVLWzkVQyIdJsxcneCo9K4H4wOX9U04xMI0U82XAQsWVYVBZBQJUd2NFfbH%2FbtslC8WbcGHlOePRKhXG00HtRUTL%2FUN7fXA4Ue%2BaQSQbQVjiIGhewHj73XOPWerL6lsYkvpmFQEsfM96zITz6JZfCmvAyrJn9%2Fw939bgsVcW0kRc80KenUxl8FWtoPwApztzOkccBjjGUZBBm4LvuvwNu%2BtkawDjMN4aVSPzEkxwjJ7TxzBbrSROP7RvHOZI%2FmKshvCSihmfEdzespt5REdemXifvAQ8OyDxCQMFv7lHUkhGXx1D%2Fltj5CkW3gRwfvzmfX2zIDbUm6i6aVb7yCNNWzA%2FD7QRNGOXbViwnjT27GF63Chp4MUMA%2B8SP7ZreE1GkFhv2xABSD2H0mxJh8zy9lSk%2BTQi7gSoWG5J6fD4oOvJqUy6HOuZI4m9L2HUpB7I%2Bz%2BCIyOi4jrHUgyHt1MINR2mAO5ZaVzk%2FlieV0dDlH74peyDFhJOwlRM6Tj9%2BRR3j8w8jpRhBE%2BLqjiSlhtPeZ6z6cVyhdy8cDWuZckRVh9Y2fZZ0%2FtxwHO8xenlTzB%2Fdg86HwwIUsRn9lZgbc56lwBny9AzUwpM2BvgY6pgEYKl6tkHpx5WrC7YXR0v7DWcaUEzp5Lv82ZAxHJnd7Gsmlx78wGcB%2Bu4nlqGxgWyl90q73gEKVz590oMHTEavJ6urqrB6MnAmTuUki0dn%2BfrtltJGBbEvpgncQvt5zN6yTGn7yRe7PYxIxh3GgnCC4ZfC9oN0MOaOEBw9FrwRXSF5QUsapCeamHORNq7C8QGo2HyGtzphYtGTDYU9OsShqtrqcAWAH&X-Amz-Signature=187fb04a5002323cfd3e4b031fd45d0cf0fff470498553357458ac17dc91f2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAT5YZPZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD5rWhw3z8pLvqkEbS64KaO1D%2BtRxSixzUs0GpHslu4sAIhAM7FWHf22FQDCG8TDKflAJn9chzaWQoFyZ44wKVBEMMdKv8DCHYQABoMNjM3NDIzMTgzODA1Igw2u7Z1wYzLw0PiASsq3ANh1ZpY420l7y7ZB%2F6yi4oSNWeVxQ9%2BMcqWPvtbEcpjmXQ2BZ2hAmtqO1ymgXQ9BdCjFMXiyUxgxzjdgymS0tDy4a52OWnhu3RwzxGjVqRDuLn5LYiuFlXzkWCX%2BXZJ5qT59dLDljYh3rPxAHwqPJjhZPzc3MRxU66Y3yOi5uxfalVxyKFufQcQWZOrwdw68mUstNW0jJJjXoAsmBiaxX5zdl%2BZo1HuQqPXw3Oph8ZxDJ19cc1tzx9%2BjAuRAtmvwDvSHDnf%2FgnUH0%2BUM9mBREZ5CDCM7%2BpimDQH1Awq%2FuWBmB%2FpsnlU%2FKQfmcMoKviVZ24nPeA2DiJ5NbCUxkyHsLBTHUYB6VPjCU%2FwD7C2ETKDUSAYRfBwEUPpmkKwtu6WkdE%2F1iWJTKH%2BErUrZtia4MjJTdKovQce8PSzwp0w4U3X4XO6pCDSgrQGqSdBe%2FSjY%2FBegEwRxUrFMIwB2BgTv3pZe%2FUDtAZIKeC6dicn2eTpoYTS4MQn8fTv0CjPfqi5AMGxHq0wiHw4RTL%2BxsiX%2Blbo%2BEQrD6D8EgiByQEuGR9PWheaiE%2Bs7WqUAJhcC4sDjfHb88f6OvA7jwH9AcrJhsJSvFUeS5ySIFKJ%2FYIlRkL1lm0XB2LtzcG4ttMLeTCQzYG%2BBjqkAXqR%2BtV3RpnXhqaPt1WhRj54FcqY8hARqcg4DwKw83rI4oPpJ84kGb%2FVBnAx6FBFLxq4lmMj25SQD0i6tB8aIDxFiD9rPIGIKczAN%2Fmu%2F8b7PpKq3f4ShOK6HgjALlHmsQTPqVacVAxyak77FfbfbkWoiksl%2FWdKo7Ja6g3w8FLBLXVaRQefWdRnO1CynuYQ32f4v0RvLLJQunHgfFFAi4tKfyCD&X-Amz-Signature=f0924844443f6696b674d9e4a83c98e2e1851a09414641bcacbf4db221fb74c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYECPAW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGHG3gHCOcgCRC8chqmstp1tNNRl0B%2BfYE2bKnokZX3kAiBzAuif0mVuClsYeAyVZRVBjHUpGKhw3Tx6Kuq2J3%2FYWir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhbpJNRiUm060%2BZ7MKtwDCpzMBvp1rgYWo8P8kj4Vz%2FJ6%2FobzmsdsSorc7vMaKwXQv2hi913QbOTh5GeQlrOMg7YCoI4rshDJDL%2BapEEgAH9MtcmBR6P%2Fd3cNZyO1459y0TR91a3yXirkVaB%2F%2B6cv4BpfUx6%2B5FV6Ci8I%2FskUzZtUjL%2BI6%2BpwsCo%2F%2FVBVjvbbBQbHD6EysGhxLBdZ6N1%2BxfRQ7BNejZEtxO2UtkGsqp3%2BIlf%2B4%2F4u%2BAoYM3Yy8VsS1s8PiDGnGzzBe%2Br6NUvj7YP4H21CVaFeOhneqY3G4N%2F%2FYyYj%2BCY4mqNWI%2BSh9II2AEQka8M4AQxE3TKZGJQ1RxUJmvq2Kjgto%2FbCev4QUGUgk8%2BOWxh4tLZpUKdCO1uaJ1XTGrbCrNiYq4xqTE5xfVaKj3dMhBeKTaPvXQO%2FYkSsxUy1GLNM7KEdXHZX%2Fagm0ViVtUFXITabLoYiwNL%2BoSzkm9pD4TrRRxyxX2pwqCIUaWoPLzo2dvl0%2B5Kgwn2288gar%2FwMXdi48rfBoXygaBSdOzxjlYl%2BcRRtli5q9Dx1FyJX3EA35LpXZVpmzQhKJlpLDZZ%2BJpFBIKeaKSmM1JoT4vxP5WKNjR2L1iEteemZ3Kj4VpOXJ2aP81drAzHogJ%2BsvnEJ5d%2BWrMow8syBvgY6pgFN5eI9FkwTJhcVsZuRihNtTmnGdxzdhyuPEgCsoTwz1%2Bp%2B5Lge2N41SH5SsxRtMfn5DJ0vWgbCJnUzCQxRcvZ4R9bXRJOscMZIqR4PQ3ONEPBFpeNqs0p6LdDoPU6R0vKvd9Lf89IA9me1wFH9MpKzyTff%2FhtSmdf4y470%2B65wu%2Fq0zYcgD6KWh%2BP1xoEcjr5ZXMmEWvi5UZS6BF1jv3lLCIBwq1HG&X-Amz-Signature=2a52a06c14d0f1016a99014aa4fe395770afc1a13299ede16ca3931d4defda9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4MWY3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHYIDLN5lZmm4TXx6ldurbaQ7bvj5GcTMTMgv%2B37k7mXAiBc96YXPYsDXWE6zfOKU%2BtiYyWyYxM5zJSfvNU8e6kzWyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMjqmBxDxYhx7C%2FCXqKtwDpswhRHRpZicXj4wWdWS77SNG%2F9%2FJMejVLWzkVQyIdJsxcneCo9K4H4wOX9U04xMI0U82XAQsWVYVBZBQJUd2NFfbH%2FbtslC8WbcGHlOePRKhXG00HtRUTL%2FUN7fXA4Ue%2BaQSQbQVjiIGhewHj73XOPWerL6lsYkvpmFQEsfM96zITz6JZfCmvAyrJn9%2Fw939bgsVcW0kRc80KenUxl8FWtoPwApztzOkccBjjGUZBBm4LvuvwNu%2BtkawDjMN4aVSPzEkxwjJ7TxzBbrSROP7RvHOZI%2FmKshvCSihmfEdzespt5REdemXifvAQ8OyDxCQMFv7lHUkhGXx1D%2Fltj5CkW3gRwfvzmfX2zIDbUm6i6aVb7yCNNWzA%2FD7QRNGOXbViwnjT27GF63Chp4MUMA%2B8SP7ZreE1GkFhv2xABSD2H0mxJh8zy9lSk%2BTQi7gSoWG5J6fD4oOvJqUy6HOuZI4m9L2HUpB7I%2Bz%2BCIyOi4jrHUgyHt1MINR2mAO5ZaVzk%2FlieV0dDlH74peyDFhJOwlRM6Tj9%2BRR3j8w8jpRhBE%2BLqjiSlhtPeZ6z6cVyhdy8cDWuZckRVh9Y2fZZ0%2FtxwHO8xenlTzB%2Fdg86HwwIUsRn9lZgbc56lwBny9AzUwpM2BvgY6pgEYKl6tkHpx5WrC7YXR0v7DWcaUEzp5Lv82ZAxHJnd7Gsmlx78wGcB%2Bu4nlqGxgWyl90q73gEKVz590oMHTEavJ6urqrB6MnAmTuUki0dn%2BfrtltJGBbEvpgncQvt5zN6yTGn7yRe7PYxIxh3GgnCC4ZfC9oN0MOaOEBw9FrwRXSF5QUsapCeamHORNq7C8QGo2HyGtzphYtGTDYU9OsShqtrqcAWAH&X-Amz-Signature=7d86a880365483b04dd6df93466c3eb2e84273c07947c512728686c5bfaf9713&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
