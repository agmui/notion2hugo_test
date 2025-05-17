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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4ETIKS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy6T5ZSYIeKramCl1kARXRNtfj7DvddwJ78x9GpO5sZwIhANNRfslGXFdd86PeD8wm1McF20vC2P8SqqVvKcexhYe6Kv8DCFsQABoMNjM3NDIzMTgzODA1Igx6whGfze6N7d%2FmWI0q3AMImm4MhS%2BnajO4rakyGUMFpyrOfjisPrtIsLicNneE0%2FccjCff%2BxVANJ15%2BRNE%2B6UaHiPKKjtUfZUHdJYk3OGyz%2FeVuor9r1e35HislnT%2BKWwxdCmXugXUpraMwl7SyDVY2EudmzmJd5Ab0dNLNB4RsdTHN64BGJiofTWKxaIUURbszn4wLRUaAGXTq4voKms%2FDyut9ugdr5xZZW%2B%2F4c9ri4vTIbtoq3%2Bk2UXcAgWrTyz9md534hmofRMgyQgOLnp5kYTi1uZgMm%2BpPmF2HomwunSezgkY4FappBdJnkagIUcp5N7Q5q47WyRI%2FKrUOZXREXzsE7PE9bjuNOrRJQ8NXsneHCMEY6m5XK0Y8Wo0lUBompOK%2Bqh%2FTyL%2Bp%2FUeXYG4UyNTu7u6xIqJnQkkb9%2BsoZ8HUzoKbxTossGpeouJnVI1hQ3%2FSoW2zgcY4bx5C3WFLz2MqwC1OQQ09IDgUDtxEhLEStHu48rPZO6bMyoGiOPGyfV3bMNs7zywT5HBDxh1pug1XrZCPgLsmsEBW9pv1E6Ychwz0MGZ0f12mCUxIbe7f2Dh37aeHPeBFxIoxOkAgig2tQruCOZgr2Ku4oNVYK0Rg3QGswUM%2FH%2Bj4f9XsL8HyKj0sYG%2FtQc1DjCuvKHBBjqkAbC4m9txWM8Xgxl06WDCl7Gb0WtP5qanNy4RKarpGKWhDgocosAxd1wPGN4JGhOJVnmRtC0TgYoK4XR8oe40hQU2wWbJhC%2FFTg5yesG1k12phuTs%2BPe%2B55hxhDu0lRz3s4UTkFUT5PkwW%2F9SawgfvnqHDkJX9JP0FMtZtiP7OVTmQo3IbMgmU%2BpSRdg6vqF8mZhPWiTs6ySzL06HvKg5hApp13At&X-Amz-Signature=226f4362fc74bdb8220220347ecc8c06cc0614fa0b295c5098b0282dd07a896a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4ETIKS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy6T5ZSYIeKramCl1kARXRNtfj7DvddwJ78x9GpO5sZwIhANNRfslGXFdd86PeD8wm1McF20vC2P8SqqVvKcexhYe6Kv8DCFsQABoMNjM3NDIzMTgzODA1Igx6whGfze6N7d%2FmWI0q3AMImm4MhS%2BnajO4rakyGUMFpyrOfjisPrtIsLicNneE0%2FccjCff%2BxVANJ15%2BRNE%2B6UaHiPKKjtUfZUHdJYk3OGyz%2FeVuor9r1e35HislnT%2BKWwxdCmXugXUpraMwl7SyDVY2EudmzmJd5Ab0dNLNB4RsdTHN64BGJiofTWKxaIUURbszn4wLRUaAGXTq4voKms%2FDyut9ugdr5xZZW%2B%2F4c9ri4vTIbtoq3%2Bk2UXcAgWrTyz9md534hmofRMgyQgOLnp5kYTi1uZgMm%2BpPmF2HomwunSezgkY4FappBdJnkagIUcp5N7Q5q47WyRI%2FKrUOZXREXzsE7PE9bjuNOrRJQ8NXsneHCMEY6m5XK0Y8Wo0lUBompOK%2Bqh%2FTyL%2Bp%2FUeXYG4UyNTu7u6xIqJnQkkb9%2BsoZ8HUzoKbxTossGpeouJnVI1hQ3%2FSoW2zgcY4bx5C3WFLz2MqwC1OQQ09IDgUDtxEhLEStHu48rPZO6bMyoGiOPGyfV3bMNs7zywT5HBDxh1pug1XrZCPgLsmsEBW9pv1E6Ychwz0MGZ0f12mCUxIbe7f2Dh37aeHPeBFxIoxOkAgig2tQruCOZgr2Ku4oNVYK0Rg3QGswUM%2FH%2Bj4f9XsL8HyKj0sYG%2FtQc1DjCuvKHBBjqkAbC4m9txWM8Xgxl06WDCl7Gb0WtP5qanNy4RKarpGKWhDgocosAxd1wPGN4JGhOJVnmRtC0TgYoK4XR8oe40hQU2wWbJhC%2FFTg5yesG1k12phuTs%2BPe%2B55hxhDu0lRz3s4UTkFUT5PkwW%2F9SawgfvnqHDkJX9JP0FMtZtiP7OVTmQo3IbMgmU%2BpSRdg6vqF8mZhPWiTs6ySzL06HvKg5hApp13At&X-Amz-Signature=3255d4d6718e51d177750328831ca30f03fccebb483ef802450a3a1dd431c088&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4ETIKS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy6T5ZSYIeKramCl1kARXRNtfj7DvddwJ78x9GpO5sZwIhANNRfslGXFdd86PeD8wm1McF20vC2P8SqqVvKcexhYe6Kv8DCFsQABoMNjM3NDIzMTgzODA1Igx6whGfze6N7d%2FmWI0q3AMImm4MhS%2BnajO4rakyGUMFpyrOfjisPrtIsLicNneE0%2FccjCff%2BxVANJ15%2BRNE%2B6UaHiPKKjtUfZUHdJYk3OGyz%2FeVuor9r1e35HislnT%2BKWwxdCmXugXUpraMwl7SyDVY2EudmzmJd5Ab0dNLNB4RsdTHN64BGJiofTWKxaIUURbszn4wLRUaAGXTq4voKms%2FDyut9ugdr5xZZW%2B%2F4c9ri4vTIbtoq3%2Bk2UXcAgWrTyz9md534hmofRMgyQgOLnp5kYTi1uZgMm%2BpPmF2HomwunSezgkY4FappBdJnkagIUcp5N7Q5q47WyRI%2FKrUOZXREXzsE7PE9bjuNOrRJQ8NXsneHCMEY6m5XK0Y8Wo0lUBompOK%2Bqh%2FTyL%2Bp%2FUeXYG4UyNTu7u6xIqJnQkkb9%2BsoZ8HUzoKbxTossGpeouJnVI1hQ3%2FSoW2zgcY4bx5C3WFLz2MqwC1OQQ09IDgUDtxEhLEStHu48rPZO6bMyoGiOPGyfV3bMNs7zywT5HBDxh1pug1XrZCPgLsmsEBW9pv1E6Ychwz0MGZ0f12mCUxIbe7f2Dh37aeHPeBFxIoxOkAgig2tQruCOZgr2Ku4oNVYK0Rg3QGswUM%2FH%2Bj4f9XsL8HyKj0sYG%2FtQc1DjCuvKHBBjqkAbC4m9txWM8Xgxl06WDCl7Gb0WtP5qanNy4RKarpGKWhDgocosAxd1wPGN4JGhOJVnmRtC0TgYoK4XR8oe40hQU2wWbJhC%2FFTg5yesG1k12phuTs%2BPe%2B55hxhDu0lRz3s4UTkFUT5PkwW%2F9SawgfvnqHDkJX9JP0FMtZtiP7OVTmQo3IbMgmU%2BpSRdg6vqF8mZhPWiTs6ySzL06HvKg5hApp13At&X-Amz-Signature=22f78314dfe284b1c430fac8d9f4339eca7b8dff3725b47ec42e5f681c37db09&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZT2VKG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTB5cHx7jLEiMFH083fzfiF56RHPR9vu9dpKiegsWEnAIgScwOnQU10g1sqD0a6uINq190Aw9rGt25K37SKL7viTQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFTl9lYcsh0TGXPKOyrcAzPO9vmDeW9IbAQ9CroT5A9cBFrlCvCYtwYxzIYLxdUsDiNwQzFiIpGJPnQy%2FAQPue%2F52Ga%2Bt3biT7SPbSgr5Y%2B2hiLLbFE4IYNWbxFUaAhA4xYznj1J7231oKCCkehMRhuXzNqP%2FEMC9dixl7%2FqNXIITDHuJMTB9wPFcErrRO5laFxoC6l22A61rciZL2CP57HBoZ6B3oMmqu%2FDzvD6EMeLsSGUyRObpFMq%2BFdbF5uHN9UgRRNJsrAY628h5h88FilcRRvaIy1PSsx8Po7Ke%2B1OCa6L%2BMQKw3ejE%2BeKdMKhcGj3Z%2Bjjrvwyq9a215rWr5vWkEEetQKM7OKEZP79%2Bd6HjC1YJaT5lBxyqyTc%2BcBUU%2BNmKUwu7TP4WxdIZVpcys%2F94WrWR9LSux84hEE3aPQ5dOBp043uaeKsGl8ErE3kTI8yDioCKsbkbjpy7xb%2BylUSmw5dGBiUyfp6PDjUNNvKQa4jdWj7aLlTA0qaJ%2FLcUYCenZQrSXo1uRZnwLw%2FP87mPcpJF7qycbMgHgroyQJB%2BwrsUKkx1v0vh8BU%2Fpj2gE1UNZ5unEriQ7h22PNasvBZhWOzPt96H1RY2gCd3G%2BvNczvf24lMRj6uPzVl5dMWDp7KjZ7PS4mfaPBMOS8ocEGOqUBnyPaEAXkIZwERDyNvM4NENElnKPJGP2f2vlPCQDr9wZReNSUGh5IETxlBgRNlmBOrRx%2BWp8YY0oE2GuMxRMLgMHIn%2BTH46rkmaRm10BkP1EGQmtVGi0ymvEJJsWEnPSSxxkSeqe%2BoNDLV0GB%2BzNQNrstDkT6d0cT8WILj39z93omVyTOQwfC7qI%2FerdLTxDd7MYPIByHnKMnufIxnXXVYAbqDah6&X-Amz-Signature=513fa3fdc391682ee23b9fdb5e39224cbd2e2752a7b2d62917a42337a325a112&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GAK5CL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRZzJ9igtND4PlImlkEbWhSONhb0rmoW3bI61gzrvNiQIhAIQvjfjyq1Ub%2FPH1MRFdNEK1lobmUyeGj6mqCAKPhXJ7Kv8DCFsQABoMNjM3NDIzMTgzODA1Igw2TnWhPq77HNjXOjcq3AN06vPBCEumJv5UMHc3QuUdy6vVSn5%2Bospkd6UZmn%2FnOKVUVAOhLwRJ0EFnRvAcGcpSoqxfO5eVLGAXHSySJ2ZesRLaC66gi%2BkbNGzy0NsS20q%2FFtwRIbuc%2FwHBWn1m9gVJzXfY8rHhe26fXZ3uD01vfeh5KdLsCs1bCuFfrXMBeBV7bpsrRsyDczXAGNOOzZsEBLITV72j%2BKtFtapLGMVaX48BxjHyzSDmXQlw1%2B54rDQRE6%2Fchhbdqpb%2FnTwwajbUQXSmYpBWCc34fQxaKHWbpqfe%2F%2F5qsLY1SNd8yMcobuw9jrHuoc8Q0MAahNxFcLSI%2FBhX%2Bi1XgftkmVV%2FJOv3ijcAFvnUBz4ECwOD3StvSsYiUhYn8lp6A60mwM2bVlrep227PMlym0f%2FsXH2%2BV1cfAh7O6CnWaYDyYsTuw5hXYw9ZTgiY5YtSDEfG%2FWZOZ%2FVKA0CdjdYOpxN4bKcgDwhAvfidG8cXczeoMjXfTS3woX0VrsGv9g7Q6WjA0OtKGqIgaWwsoaXRsWj5N8ur3jSlNx8FyXcbkAsxV%2BWu4BXpy6w4RTTx8TzMeHHeHhuD2Nzjkt2iYzZzf0FI2uMwiSXa895uw0AZLCm0IHXmVij1LZN4M2smalMeBVmPDDfvKHBBjqkAQhV2QuFQQLtU95IJBfZs5jjQroJiB4cRDASDZ11ssQuhhx1fuqyClkC%2BjFKrGSdavHMhnAa2wseHmV7gn1YvOouaX%2FZw9T5Q7QKarNMi50n%2FcuiDtT6GjFWHoX3yEYu2SQ4cEd94ZV5gD6zOf%2FAfjckl2REwB%2FVpzN%2BcXwagL%2FsqX%2FL7D%2Bk2bPZbi7OrtTClqGWHp0xj%2BJWQon8%2FEIfUgQNcI10&X-Amz-Signature=8a283ad0aaac036676f909ca58054bba583e875e431d660ad547cea5e74cff7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4ETIKS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy6T5ZSYIeKramCl1kARXRNtfj7DvddwJ78x9GpO5sZwIhANNRfslGXFdd86PeD8wm1McF20vC2P8SqqVvKcexhYe6Kv8DCFsQABoMNjM3NDIzMTgzODA1Igx6whGfze6N7d%2FmWI0q3AMImm4MhS%2BnajO4rakyGUMFpyrOfjisPrtIsLicNneE0%2FccjCff%2BxVANJ15%2BRNE%2B6UaHiPKKjtUfZUHdJYk3OGyz%2FeVuor9r1e35HislnT%2BKWwxdCmXugXUpraMwl7SyDVY2EudmzmJd5Ab0dNLNB4RsdTHN64BGJiofTWKxaIUURbszn4wLRUaAGXTq4voKms%2FDyut9ugdr5xZZW%2B%2F4c9ri4vTIbtoq3%2Bk2UXcAgWrTyz9md534hmofRMgyQgOLnp5kYTi1uZgMm%2BpPmF2HomwunSezgkY4FappBdJnkagIUcp5N7Q5q47WyRI%2FKrUOZXREXzsE7PE9bjuNOrRJQ8NXsneHCMEY6m5XK0Y8Wo0lUBompOK%2Bqh%2FTyL%2Bp%2FUeXYG4UyNTu7u6xIqJnQkkb9%2BsoZ8HUzoKbxTossGpeouJnVI1hQ3%2FSoW2zgcY4bx5C3WFLz2MqwC1OQQ09IDgUDtxEhLEStHu48rPZO6bMyoGiOPGyfV3bMNs7zywT5HBDxh1pug1XrZCPgLsmsEBW9pv1E6Ychwz0MGZ0f12mCUxIbe7f2Dh37aeHPeBFxIoxOkAgig2tQruCOZgr2Ku4oNVYK0Rg3QGswUM%2FH%2Bj4f9XsL8HyKj0sYG%2FtQc1DjCuvKHBBjqkAbC4m9txWM8Xgxl06WDCl7Gb0WtP5qanNy4RKarpGKWhDgocosAxd1wPGN4JGhOJVnmRtC0TgYoK4XR8oe40hQU2wWbJhC%2FFTg5yesG1k12phuTs%2BPe%2B55hxhDu0lRz3s4UTkFUT5PkwW%2F9SawgfvnqHDkJX9JP0FMtZtiP7OVTmQo3IbMgmU%2BpSRdg6vqF8mZhPWiTs6ySzL06HvKg5hApp13At&X-Amz-Signature=76e5d428e900b27ce134eed8a36f0936cbdcb97f2b4418e4dcfbd5d6005ade3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
