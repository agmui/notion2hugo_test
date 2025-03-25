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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKI6O4MQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoehVz%2FhwKEuEWF0%2B8AU6cjNg9BPTKsmc7mG3kP%2BXj3gIgX8MKh3T06QfQizpaDgOSqgU0%2FLgBcI79h6mUr9NOJRcqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErdAr6Yaz5f%2Bs1XLircA6DjF6Rq0z6WIn3JzEAFUQHyz0HmFezG%2Bs5CamrgPqfQZpibDxgVIDml3mAy8tI8Pk7MadypOj%2FD5UbR0t7xT9XL0z7z33xA%2Fxe60QZIQ3JZnMS%2FoBcI%2FUAATeCN57AE%2BqdFb0m0CD5IsYSkYNaGVP%2BUMEjoFIjCn0ZGvqjQxyW0sDsUjoUfYEfaZ1ehCBYEEH220XwsbRideSXzV5BkFiE3oN2v3m2Bynl0622%2Boe2xGkX0cax%2BstdMjSz%2BOzVku8RrJCa4kXQqMUjooWtaGQqNEPtHR1UFZXojMJ25mxtjUL100aOPckYC0KI6CQ1Tg3VW2U3b1jG4AQ8ANFY4aAPhOoHcGYfe5smAB28%2FES4dfmRoX87xwYLXa7QFf54LG1pOp6YWV2DtwNB7rAt6RCPcfNyjHuQH3zmVj%2FniG4bcORSUtY8BlOKhBcsr5sIRqdPbALCKzRPZL4GzBFNplLCx%2FMTcxWIeOlQwX55pXlxkAIy88s4F%2B990b8qWJafV0iRCiwU2IZjHwQCGC%2FOHCL2MNeL7qrzH%2BIkvg9meaNA0LcRCe14wBCkTI2FV4g4NaZEKGdYRBvzqWQvQOB4CwG%2BoEUBnF2GlIEc%2F0JNf9rvJUUm4xh869ZCI%2Bi5GMNKyiL8GOqUB0qI84nu8aFFuKUeWgrVwrIK6y0%2F2yglqRSdDZgc36JaKcGNdI90Mi7Ox6UZ0ypEXAovD4JgoMlkWP06o%2BaY%2FMqPnR2roV1EXzF28UQArftXQz9U%2BcmSabuumCnahl47eaDSNRMRTLp9Ia9ZGk9k%2ByG30ePuFNz7ZQJwT6cFnSOUMUMJz2DCC28E05OTgNRLa54xfwoOZDLXmPVQwY2RJ5SgWH8gN&X-Amz-Signature=298a5398c017e897ee1a4f73035a10f1269342b19572594bc5a8dc30168ada89&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKI6O4MQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoehVz%2FhwKEuEWF0%2B8AU6cjNg9BPTKsmc7mG3kP%2BXj3gIgX8MKh3T06QfQizpaDgOSqgU0%2FLgBcI79h6mUr9NOJRcqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErdAr6Yaz5f%2Bs1XLircA6DjF6Rq0z6WIn3JzEAFUQHyz0HmFezG%2Bs5CamrgPqfQZpibDxgVIDml3mAy8tI8Pk7MadypOj%2FD5UbR0t7xT9XL0z7z33xA%2Fxe60QZIQ3JZnMS%2FoBcI%2FUAATeCN57AE%2BqdFb0m0CD5IsYSkYNaGVP%2BUMEjoFIjCn0ZGvqjQxyW0sDsUjoUfYEfaZ1ehCBYEEH220XwsbRideSXzV5BkFiE3oN2v3m2Bynl0622%2Boe2xGkX0cax%2BstdMjSz%2BOzVku8RrJCa4kXQqMUjooWtaGQqNEPtHR1UFZXojMJ25mxtjUL100aOPckYC0KI6CQ1Tg3VW2U3b1jG4AQ8ANFY4aAPhOoHcGYfe5smAB28%2FES4dfmRoX87xwYLXa7QFf54LG1pOp6YWV2DtwNB7rAt6RCPcfNyjHuQH3zmVj%2FniG4bcORSUtY8BlOKhBcsr5sIRqdPbALCKzRPZL4GzBFNplLCx%2FMTcxWIeOlQwX55pXlxkAIy88s4F%2B990b8qWJafV0iRCiwU2IZjHwQCGC%2FOHCL2MNeL7qrzH%2BIkvg9meaNA0LcRCe14wBCkTI2FV4g4NaZEKGdYRBvzqWQvQOB4CwG%2BoEUBnF2GlIEc%2F0JNf9rvJUUm4xh869ZCI%2Bi5GMNKyiL8GOqUB0qI84nu8aFFuKUeWgrVwrIK6y0%2F2yglqRSdDZgc36JaKcGNdI90Mi7Ox6UZ0ypEXAovD4JgoMlkWP06o%2BaY%2FMqPnR2roV1EXzF28UQArftXQz9U%2BcmSabuumCnahl47eaDSNRMRTLp9Ia9ZGk9k%2ByG30ePuFNz7ZQJwT6cFnSOUMUMJz2DCC28E05OTgNRLa54xfwoOZDLXmPVQwY2RJ5SgWH8gN&X-Amz-Signature=014fd323ac6d94fe54044e56c06804959fd586c61f448f022e20f4ca8ed9126d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVHZZVF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3rDUQIYJoOe4Vgq7rA6m6wj%2BqH%2B2nYz1Yj7ePG0tp1AiBI8SRC9rcNElJT64xVTcqGxEJFCDT%2F1Bi960WCSvgSmyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmeG6aSkR3vnjF%2BwKtwDi8HTnk7nDiXbpfiUiA7%2BGBK%2Bh2loSt6JaUqZfRJQC%2BemC%2FyfgT9svVWzFYcRjh9dGuGVc5EEM%2B5BlDUyDUQut6ultn%2BBJwqaZSWc%2F7Ua2LMDmU7HF1GiKPWMk5oN5LnnJ1WeTFrsy9WvxVvZDPb988mzo7bQfMXbv9tVVduauLU%2FOnZzp3aWboryMN2el0%2B2C2KEKVlX6XPiBDzQKzEdEYl39jOGDNaM24jGqQYHALd0zHrkcgtGmJmUcf3OlMQhZ3rPZaNjMZ8JVONAN7EJv0m%2BIyabT8OWvPxTozkLri7bn8Y7lJPnfNu2wZb5DveAhT70UY1BlwtBpdOifg6HOAqE26LlL15Ln%2BPiT%2Fw2eFOLcCqncOwOf61oBu7k8FZvMZ50sTOm%2B3ZF7jQYX4ME2FfFY2qO7BmwNDaq%2FdDtHtwGrykmpxvwHa0S%2Fz%2BqfdGRiEM0uvcMqnK%2FC1f0PBrUYkH20nxHtarUEoQwUOw%2F3TXoG0mvN%2Fb6jOCxOWRHew0VLhSLXVlykWwxADQiJBxYdf%2FJnU9s8n9IoSYvQIWHfgy8gL32FdyOSc8DgsAvGEEZanyOZZvdUJisNgYj0iIjqqkJDpzI5hdXzW0WFUGUrlENlr6AyYvwgwAY9XIwu7OIvwY6pgHrou5UFDf7m5EfS7c8SY3oCdrEtjZfU8LuSJgqVp6rZIL8ktaEI2ejf5ZCfq2PRuO1hkRGkrQ8PnrnkK3gP7%2BO87QLDJw7sBs%2FrUh5mlVQS2A7F64%2FgqWb%2B50GvuXZtQoQRQ7QoPVqx%2F0sDMxWSEyN8xoygrUp91KbjZ9oqXGc0V4NvZudr%2Bg8UCTtYt34Wwaxwbh%2FABtivVv5C3Ydjq2hC8O7zga4&X-Amz-Signature=3ffeaa2453fe5f6a144f9bb291a379d6ae82b9480af65f8015c6315c7a9603cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VLQY26%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cyPsQujwqo8ZD3P4%2F61rKTxTUI2m0f9xNdk%2FdPqOrQIhAPHYUhpzytUbDV1k%2FNnu4h1AqatIEuMoI3oTiudpkYJDKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkLQL9iu1ZLMtDa1oq3AMXQFGh83NXQM%2Fm%2FBSF8gNRJ284oZ75pIJ51mXlKWjFGsHl4UIUmgk%2B%2F16MEn5%2FQEn1T9wjtPnCjKfYbF%2FYk3SesEtYzFsHlO59yYT%2FrJkaurt9XrXNLrQw2ukcZ5dZaOF9HRvBD5SgA5uhGi8ldZfT7jy5WSI8k1iBhAZVhlY1MSqMto6WWiNAxUzT0%2Bbc6PCJwOEELzRSn1BIHDN40regSN5pGbaVZoUXKQwsZyvDhxtLm%2B3NDP%2FJtzsgl9jHOBaPjOnKXXCnjFMUGBWJHl%2FffDgzQS2HcczoXcxckf3965Os6eoFEEay5WcHLEAyMM%2BIjYF8MsX4EwEOiDNcFf%2FRZ5B37K%2BNlDqtjVditJgPcCm6de%2FxgB7JTjimPH7Sp8ixys0u%2F9ln%2FdBDyU176lyYLDHif0w%2FHv1XQeL9fxni04UFd8cbG70hQIxMtZM9P9b%2FT4N7wCubxbhmnoGw5VOqpzmJEtIKzQKpugdU7XLV4wdo516KOIwO%2F3U%2B46Ph9mPaUT5FRI9YBVdSaEHwoZ764ioA3WeWgFGHzTekm%2F2zAKJ0MXJKU5rUWXqLgj2y7bV8Yp1ho6RXVVLcsW5FpNZgOl%2BDKGKfSbkfx6Qra4VrFRXC44Pd6ib%2B%2BHQEajDGsoi%2FBjqkAfkNKCnsE%2FrayIf1xHpf7BIjykm10Co1%2BH9P1r4LZB0qePppm9N%2FAoijpqYNBVxYpzTUpKBjPoX1yvDGbczjwO1YNaWtsPiVjPEzsm%2B5GvEgp8IiaJMR8xihDC7Ajxor9RZ77wtpX4qNBZtV875oj1Mxw28fVuUzRNifi%2F49UpodSy2zTmtL6xt9UdP0p6Of43cwqohcV9FuAgH5K6AWkjcmnp2H&X-Amz-Signature=603665820d641d88360e777e98c41f5b93a3dfb7fc737de8179fa334873c1465&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKI6O4MQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoehVz%2FhwKEuEWF0%2B8AU6cjNg9BPTKsmc7mG3kP%2BXj3gIgX8MKh3T06QfQizpaDgOSqgU0%2FLgBcI79h6mUr9NOJRcqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErdAr6Yaz5f%2Bs1XLircA6DjF6Rq0z6WIn3JzEAFUQHyz0HmFezG%2Bs5CamrgPqfQZpibDxgVIDml3mAy8tI8Pk7MadypOj%2FD5UbR0t7xT9XL0z7z33xA%2Fxe60QZIQ3JZnMS%2FoBcI%2FUAATeCN57AE%2BqdFb0m0CD5IsYSkYNaGVP%2BUMEjoFIjCn0ZGvqjQxyW0sDsUjoUfYEfaZ1ehCBYEEH220XwsbRideSXzV5BkFiE3oN2v3m2Bynl0622%2Boe2xGkX0cax%2BstdMjSz%2BOzVku8RrJCa4kXQqMUjooWtaGQqNEPtHR1UFZXojMJ25mxtjUL100aOPckYC0KI6CQ1Tg3VW2U3b1jG4AQ8ANFY4aAPhOoHcGYfe5smAB28%2FES4dfmRoX87xwYLXa7QFf54LG1pOp6YWV2DtwNB7rAt6RCPcfNyjHuQH3zmVj%2FniG4bcORSUtY8BlOKhBcsr5sIRqdPbALCKzRPZL4GzBFNplLCx%2FMTcxWIeOlQwX55pXlxkAIy88s4F%2B990b8qWJafV0iRCiwU2IZjHwQCGC%2FOHCL2MNeL7qrzH%2BIkvg9meaNA0LcRCe14wBCkTI2FV4g4NaZEKGdYRBvzqWQvQOB4CwG%2BoEUBnF2GlIEc%2F0JNf9rvJUUm4xh869ZCI%2Bi5GMNKyiL8GOqUB0qI84nu8aFFuKUeWgrVwrIK6y0%2F2yglqRSdDZgc36JaKcGNdI90Mi7Ox6UZ0ypEXAovD4JgoMlkWP06o%2BaY%2FMqPnR2roV1EXzF28UQArftXQz9U%2BcmSabuumCnahl47eaDSNRMRTLp9Ia9ZGk9k%2ByG30ePuFNz7ZQJwT6cFnSOUMUMJz2DCC28E05OTgNRLa54xfwoOZDLXmPVQwY2RJ5SgWH8gN&X-Amz-Signature=8b4def3db669c286b65b08d0646c2bffe59ab0e8d041d6c59a6e933eed608277&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
