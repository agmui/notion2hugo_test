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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHT6IOLE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnkSPfI8iT6uKncdBhyeCtYZSx6Itlzsp0WenSx%2F8J8AiEAkT1IDhfyBg0TreA276om3OpkB2K8coYrN%2FY3pHNfN38qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfUU2k%2BKw9Opl4n0yrcA6qXPAqJqkR8egYKmoGb79FqvZUxuSnbpTq31DJyhOK3Z2m87D7IrqXo8q4ph32AlVTtmtN78mFa24zAl0MVaedEPTWbQxZU8%2BUWQYhgT4tBt75Ezz2oGK8dtUmfZB5IAUoWAyUtfowUEXKy3RHOMBrvARKhXVtBZMxnhfyZsExV8Jb2t2tnupVP0id4rr%2BZ71%2FB0oVsMN9exaBdpRe6SYomI13k8iyDegElsjrFIi03JnnMne2Z22hFCcywdNPXTRileIpt9aMoKaJ6IXWEWIyNYucLmXMKPg7RrLuIOVoa6yVgXxHNIKCAAWzWk1giiU5Gfeu%2Fz6uxrOJ8ZXLWAZ3du09FRuezcOwxw0zUa6ubrATZEk2%2BSyxXd3xQ4DYBNfr9AnHIlog%2FTgQyoLEMxI5HPOdcCbISACQVHtZQ5YakhJzKbfOsxfZEvQhIvo6K%2Fiz7A11zbEBt%2FRkTMRjISRYt05d2tHOAKy4oEI3P%2B1Kh0L4e5YLBosCOZuvgDC1gTL%2BYVlY0%2Bwnx0A%2FcaSFKeLfGETGwbW8vs%2BZRKAauRJci1GWNfk4aqPyFuQyTe%2F4KZMbnxNzc6Sq9WTct6OImpTcY6dGE4Tt6LOER602CQbb%2Fj1uzWU8VuMcQpRjYMO6K38QGOqUB6IF4ohrxRFgrz9LOdbZQJmN89x2X1ybB2EUWHxa63guej3AJC97XLdET0oXhQ6v5N6VwHsyWPN0mZEZXGaMCF9i9NWLSHzEy7Vvvk8zdflE5XJOZEyV4lYXiOh7SeNTYUQOEMgOz4eS8jKA6vIENkC6s8nPP3Li%2BsKv2PFdbxNGyrYiF52V6ZlopdZeWt1yj7CvFh7k537KAQukK%2Bx4EjM9p%2FjN3&X-Amz-Signature=c4ab4bfcb3a1ae62c1931121264b2654388e6b0009012258b4c84be145ec50f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHT6IOLE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnkSPfI8iT6uKncdBhyeCtYZSx6Itlzsp0WenSx%2F8J8AiEAkT1IDhfyBg0TreA276om3OpkB2K8coYrN%2FY3pHNfN38qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfUU2k%2BKw9Opl4n0yrcA6qXPAqJqkR8egYKmoGb79FqvZUxuSnbpTq31DJyhOK3Z2m87D7IrqXo8q4ph32AlVTtmtN78mFa24zAl0MVaedEPTWbQxZU8%2BUWQYhgT4tBt75Ezz2oGK8dtUmfZB5IAUoWAyUtfowUEXKy3RHOMBrvARKhXVtBZMxnhfyZsExV8Jb2t2tnupVP0id4rr%2BZ71%2FB0oVsMN9exaBdpRe6SYomI13k8iyDegElsjrFIi03JnnMne2Z22hFCcywdNPXTRileIpt9aMoKaJ6IXWEWIyNYucLmXMKPg7RrLuIOVoa6yVgXxHNIKCAAWzWk1giiU5Gfeu%2Fz6uxrOJ8ZXLWAZ3du09FRuezcOwxw0zUa6ubrATZEk2%2BSyxXd3xQ4DYBNfr9AnHIlog%2FTgQyoLEMxI5HPOdcCbISACQVHtZQ5YakhJzKbfOsxfZEvQhIvo6K%2Fiz7A11zbEBt%2FRkTMRjISRYt05d2tHOAKy4oEI3P%2B1Kh0L4e5YLBosCOZuvgDC1gTL%2BYVlY0%2Bwnx0A%2FcaSFKeLfGETGwbW8vs%2BZRKAauRJci1GWNfk4aqPyFuQyTe%2F4KZMbnxNzc6Sq9WTct6OImpTcY6dGE4Tt6LOER602CQbb%2Fj1uzWU8VuMcQpRjYMO6K38QGOqUB6IF4ohrxRFgrz9LOdbZQJmN89x2X1ybB2EUWHxa63guej3AJC97XLdET0oXhQ6v5N6VwHsyWPN0mZEZXGaMCF9i9NWLSHzEy7Vvvk8zdflE5XJOZEyV4lYXiOh7SeNTYUQOEMgOz4eS8jKA6vIENkC6s8nPP3Li%2BsKv2PFdbxNGyrYiF52V6ZlopdZeWt1yj7CvFh7k537KAQukK%2Bx4EjM9p%2FjN3&X-Amz-Signature=e7d7f61fb3af65293b8bb2a7b6db8a00977d292ef3119395e42e436009be0533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHT6IOLE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnkSPfI8iT6uKncdBhyeCtYZSx6Itlzsp0WenSx%2F8J8AiEAkT1IDhfyBg0TreA276om3OpkB2K8coYrN%2FY3pHNfN38qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfUU2k%2BKw9Opl4n0yrcA6qXPAqJqkR8egYKmoGb79FqvZUxuSnbpTq31DJyhOK3Z2m87D7IrqXo8q4ph32AlVTtmtN78mFa24zAl0MVaedEPTWbQxZU8%2BUWQYhgT4tBt75Ezz2oGK8dtUmfZB5IAUoWAyUtfowUEXKy3RHOMBrvARKhXVtBZMxnhfyZsExV8Jb2t2tnupVP0id4rr%2BZ71%2FB0oVsMN9exaBdpRe6SYomI13k8iyDegElsjrFIi03JnnMne2Z22hFCcywdNPXTRileIpt9aMoKaJ6IXWEWIyNYucLmXMKPg7RrLuIOVoa6yVgXxHNIKCAAWzWk1giiU5Gfeu%2Fz6uxrOJ8ZXLWAZ3du09FRuezcOwxw0zUa6ubrATZEk2%2BSyxXd3xQ4DYBNfr9AnHIlog%2FTgQyoLEMxI5HPOdcCbISACQVHtZQ5YakhJzKbfOsxfZEvQhIvo6K%2Fiz7A11zbEBt%2FRkTMRjISRYt05d2tHOAKy4oEI3P%2B1Kh0L4e5YLBosCOZuvgDC1gTL%2BYVlY0%2Bwnx0A%2FcaSFKeLfGETGwbW8vs%2BZRKAauRJci1GWNfk4aqPyFuQyTe%2F4KZMbnxNzc6Sq9WTct6OImpTcY6dGE4Tt6LOER602CQbb%2Fj1uzWU8VuMcQpRjYMO6K38QGOqUB6IF4ohrxRFgrz9LOdbZQJmN89x2X1ybB2EUWHxa63guej3AJC97XLdET0oXhQ6v5N6VwHsyWPN0mZEZXGaMCF9i9NWLSHzEy7Vvvk8zdflE5XJOZEyV4lYXiOh7SeNTYUQOEMgOz4eS8jKA6vIENkC6s8nPP3Li%2BsKv2PFdbxNGyrYiF52V6ZlopdZeWt1yj7CvFh7k537KAQukK%2Bx4EjM9p%2FjN3&X-Amz-Signature=483159bfe99f3350fe0902a58a7eee17ae6c6f125666e8e25cfac34883e9e2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XINNUW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxtHT0sWYdCIJ%2B%2FXZ8FMNyxgM%2BifnnGTmk%2B2BA%2BRZLAAiA3OQi7TLb5%2BaJf%2F7OuRMYTC9l%2Bj9miQaaGKiYAyNywJCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4CVAzj%2Bld5JsyrRKtwDH3DsWlZtahEf1sSnAt60RRwZWlDcya7OinGBW3XapM0fwaw5CTv6o7R7UR%2F8E7memT3D6%2F%2BLlrEphSaVeL1d6%2FaYo%2FFDyXLNW7Ly67KmrPZhSYDwLGTu9Fizeta6YBHG7UL0kTiF2CCNZoaZb3XnJUBQC34gMolYDzvHsWrodbP6qVV38iKKkBsH8%2FdxrRyK0O8S2FKvDdVlE8LtbU%2F6tibZ%2FuexKU6%2FyZkEbzYNddro4RM0ZGUZxe8HDZATiQJreCq10WwZ%2FhAul8ujImTKKfoLQ6Bg4iwfAbn6I0Yef%2FrkOmFL3mfZE9SkPeFV2CYXXV4U7254PmaOVL1TWGXshfulpuK7ahp6s5EEF9axuET6xhubfcYqJXVZfeb7%2BgYYRiuSHhEyyNJiUD4Lexc2FLDtBRG6jDECST104nLMre%2FCU0qA2lk5KWolA7op5UC4Yy8nreziRyZCxRSWJSUkG%2B6e5yXnlTDATU50Zo3EsSiods64vSAXR3ZpX5wt0X5ZfO7DmQ7bZ0G1KAdzkkDXuno%2BZldtcVUGqDaWTR4IJs6KgHJHupHC0hNj8Vs8cBjz7vYzyGl48XohWOpl1ivGXmc4gzSsMJSVVHM0%2B0N0M2mA00zy5bQDGYH38hEwoovfxAY6pgHYtH9HNku%2B%2FltonqNHXF0LO%2BlYvamPbYprAQKuElgRZJU4WjaqW903cmENidZQjv0bSe0YW6gLH6I59Zx3QOjZ7KWPad1U%2B5dXv0ImL7FtWMennSnQTQ5boKERehCZ8%2FbXhF7vWQtk7%2FrEjEVTIzbIY2mITOzFWW3%2B%2BtBLm52k1r7pCd4tJcQ6FrD9IcXJdnEJxYBM%2F34XdslEUPWgsymsluQqK9VE&X-Amz-Signature=00abe143adf9362822faef0690e9accd70418e10de2af3dad70e97344ff32270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHXAFMY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhn7KAcuHRGxTga0Gq%2FOEy%2FaQT7qsEnI9HAi3Dyx5WNAiEAxN35YYCSP0o%2FVmwpWhju9suuPYMi1%2F8jDqCRYzau%2BBIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9cXKRhyHKyp2%2ByHCrcAwu6hPsPFbQOuG%2FvXNmZBVSbipnQll2cv%2FQI2IW20ujyFpkgHIHZmfRDb7i2XoHXZR%2FvV3GszgrFgMrPT%2F74PidWQ84AsdFeJagYF9CLjws%2Bj6pFfIciyylRkOhbD4QAMiRmBp%2FMV3uV2VGomM3mWhfTf8x7i3FSFETtqVL%2FZambpoVnqn9Qoa9HhERh37qsbNuHZfFVctfr0LmsJvlYH45qZZj5JRcNsPJbc2TgC5JWAG71aLmtF3mAfrCqYAR9urUzMOCgLe2qMuq2WsN430RRFXverwUPgp%2BXqeKXh%2Fh2yDcgZrWwpRQk%2FK9B87a4P6mUc%2FWIVF3AlmqfNI7VtxVMf5pI%2BIykJ%2FIRcVdiL3x3dAks%2B1g64tQCN9Y%2FT3lvx76by89KdJU2U3qeeDpq2ptxyfQnpn7VjTaoYOZPxiC8QjeZaxlEb%2FOag36HV0GAORprh1aNlVBd5B9CUZ4PlFTtLl6IT2WzEmZI2uEDNqoMhLMUURplaAxEOXciTTJbp8ChVarvLX9ekIKAO%2FmobSeDlewPKKy5fPYc2YcyEG9WROVP1cokdEahFvBI%2BGI5pfR1DJ2%2FdjSgztr40ClkTvv2f8l2HkhbHqUT6QmjdK4QrkdnTuhlIWlNrfwRMPSK38QGOqUBq5Hl%2Bw%2Flrwkuuer5pXLhw1j9Ylsu%2BhsxV89I813NeAw18rLDIJsRfcmTzcojIUnKvtZtZzVC6J5L%2FqTEd%2Fk6jbn8cXYmBF9GCiADE2hrS1M9w%2BFDc09xT%2BMntP9CF1MLIVOJH%2BLuyYBe9otOEOJ%2FADUx%2B4SwoIv8kKUKwiDNRFE3L%2BcXiv1KYq%2FEtGfoDJFrLkJVnp35gMRGcxVJB24Rl7aDOGpp&X-Amz-Signature=7edecdb2075a3bfcff5cd84dde2fca2868291e88d9dd076983e699c96a5ed19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHT6IOLE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnkSPfI8iT6uKncdBhyeCtYZSx6Itlzsp0WenSx%2F8J8AiEAkT1IDhfyBg0TreA276om3OpkB2K8coYrN%2FY3pHNfN38qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfUU2k%2BKw9Opl4n0yrcA6qXPAqJqkR8egYKmoGb79FqvZUxuSnbpTq31DJyhOK3Z2m87D7IrqXo8q4ph32AlVTtmtN78mFa24zAl0MVaedEPTWbQxZU8%2BUWQYhgT4tBt75Ezz2oGK8dtUmfZB5IAUoWAyUtfowUEXKy3RHOMBrvARKhXVtBZMxnhfyZsExV8Jb2t2tnupVP0id4rr%2BZ71%2FB0oVsMN9exaBdpRe6SYomI13k8iyDegElsjrFIi03JnnMne2Z22hFCcywdNPXTRileIpt9aMoKaJ6IXWEWIyNYucLmXMKPg7RrLuIOVoa6yVgXxHNIKCAAWzWk1giiU5Gfeu%2Fz6uxrOJ8ZXLWAZ3du09FRuezcOwxw0zUa6ubrATZEk2%2BSyxXd3xQ4DYBNfr9AnHIlog%2FTgQyoLEMxI5HPOdcCbISACQVHtZQ5YakhJzKbfOsxfZEvQhIvo6K%2Fiz7A11zbEBt%2FRkTMRjISRYt05d2tHOAKy4oEI3P%2B1Kh0L4e5YLBosCOZuvgDC1gTL%2BYVlY0%2Bwnx0A%2FcaSFKeLfGETGwbW8vs%2BZRKAauRJci1GWNfk4aqPyFuQyTe%2F4KZMbnxNzc6Sq9WTct6OImpTcY6dGE4Tt6LOER602CQbb%2Fj1uzWU8VuMcQpRjYMO6K38QGOqUB6IF4ohrxRFgrz9LOdbZQJmN89x2X1ybB2EUWHxa63guej3AJC97XLdET0oXhQ6v5N6VwHsyWPN0mZEZXGaMCF9i9NWLSHzEy7Vvvk8zdflE5XJOZEyV4lYXiOh7SeNTYUQOEMgOz4eS8jKA6vIENkC6s8nPP3Li%2BsKv2PFdbxNGyrYiF52V6ZlopdZeWt1yj7CvFh7k537KAQukK%2Bx4EjM9p%2FjN3&X-Amz-Signature=38da70fd1b65a1986ee6a196ccc7e9dded867a82b1be7340b6c59bb4f22111d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
