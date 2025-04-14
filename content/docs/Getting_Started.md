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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWMOSN5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhsaGFI0Of5szjbx3tQMIj3Y3BpMo7r7BByLBcDfGThAiBEHt9D7PUaFSDxUeL4Yb1SuHksNguPLqtczpvSJApEGir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMalXNFH1WHm3%2F7xwEKtwDKIddboLfrpMdeVvspxeTEVOpZjobfobQ7iewOiFO6bN3qQ%2FrhaN4BYGwhI77QKb14MCJsilqdUMA%2FJTFqqyNz5fM3NuskV7A2y95dV1Pl5rBuG6of4qONlrrG455wV8UazUtgNV%2F39XNcnC1XcntctAgVZo14juNYpYNIYRRnySMSXp2a9ulb3mgrj%2FGB9PqD3%2FZena9ZJnj5hNt1MfTF9yjFEVBlNqoQIXgghK17sxgb0P5TV0oN%2Fctuo45CM8aMzr4N3GJVFp8ZsGewvKZsnb7u3N8y0d3PJKPkbS4cNdX85PQ6B87ORGl5fZLkH%2FlylxrXqx5%2FHpX7FqTAoIOndiPgdRZLhEsmn4YmhMtTZ6IQ9%2BhDbuUYAAIS67weJr2GB9cyzXd1cIH8odeK0Gc5deHNFNM8MQNkH41gVKs1Hj6XIo429VVUksygKhsSQH28dSuGi0hjMuq56xTMhR%2FrtUu0H459vJy4OtzXrXFxKT%2FdcUh3TJewUrNnm4hV9iMdpxzp8aENV43YrG14OjjD4z0RlCE64ZhnKq%2FERtRLQGS5nkc7l2bROSwul8lXkUjAG%2BhkN%2B746dgSQOWbViPn3uVbA0oOr3Bc3pd146vFrs1aw%2FRssbmP0gZ1a4wyJv2vwY6pgG7iZM7U03cNe5FKiiRH9ZxhWx3OuPN0HVMe6ZDIKuP8nXoN%2FeckhB8b%2BAtTzIugaMnO2gT%2FhDvn0MDHH9gNfi9twUZYtPoWhmguccHHKkaK7utSUwIrdEVgD2yjETqNLs8AHMY23Agnk6eEue5risDJXE6lSskGK9u1kmaWH9qI1aeA3n%2BeJ7LgL6I31BCPYPe0d82bneuIVi9Gb6Ci5i3RvQU4ZYe&X-Amz-Signature=8631c55608dde2a06142bb2432165d4fc3dad356c578cc20a2e14ab41bf23a75&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWMOSN5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhsaGFI0Of5szjbx3tQMIj3Y3BpMo7r7BByLBcDfGThAiBEHt9D7PUaFSDxUeL4Yb1SuHksNguPLqtczpvSJApEGir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMalXNFH1WHm3%2F7xwEKtwDKIddboLfrpMdeVvspxeTEVOpZjobfobQ7iewOiFO6bN3qQ%2FrhaN4BYGwhI77QKb14MCJsilqdUMA%2FJTFqqyNz5fM3NuskV7A2y95dV1Pl5rBuG6of4qONlrrG455wV8UazUtgNV%2F39XNcnC1XcntctAgVZo14juNYpYNIYRRnySMSXp2a9ulb3mgrj%2FGB9PqD3%2FZena9ZJnj5hNt1MfTF9yjFEVBlNqoQIXgghK17sxgb0P5TV0oN%2Fctuo45CM8aMzr4N3GJVFp8ZsGewvKZsnb7u3N8y0d3PJKPkbS4cNdX85PQ6B87ORGl5fZLkH%2FlylxrXqx5%2FHpX7FqTAoIOndiPgdRZLhEsmn4YmhMtTZ6IQ9%2BhDbuUYAAIS67weJr2GB9cyzXd1cIH8odeK0Gc5deHNFNM8MQNkH41gVKs1Hj6XIo429VVUksygKhsSQH28dSuGi0hjMuq56xTMhR%2FrtUu0H459vJy4OtzXrXFxKT%2FdcUh3TJewUrNnm4hV9iMdpxzp8aENV43YrG14OjjD4z0RlCE64ZhnKq%2FERtRLQGS5nkc7l2bROSwul8lXkUjAG%2BhkN%2B746dgSQOWbViPn3uVbA0oOr3Bc3pd146vFrs1aw%2FRssbmP0gZ1a4wyJv2vwY6pgG7iZM7U03cNe5FKiiRH9ZxhWx3OuPN0HVMe6ZDIKuP8nXoN%2FeckhB8b%2BAtTzIugaMnO2gT%2FhDvn0MDHH9gNfi9twUZYtPoWhmguccHHKkaK7utSUwIrdEVgD2yjETqNLs8AHMY23Agnk6eEue5risDJXE6lSskGK9u1kmaWH9qI1aeA3n%2BeJ7LgL6I31BCPYPe0d82bneuIVi9Gb6Ci5i3RvQU4ZYe&X-Amz-Signature=1be735e4cc95d8d74b57de33a9b96015986f259a23ac0823cece8350b68379b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HOEPWTD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxLY5eaNbZk4wCtlVjyR5SciVVurCKB4cV1bvDSiAIAIhAP74OESrGFYqMYQ0ROwHZRliHRZFy4GLQfBvq0v0tWTCKv8DCCAQABoMNjM3NDIzMTgzODA1Igxfc%2Fj1YcFo1fHCaG4q3AP2XbP4Fn602UwDOW%2FNGmBbJukohEzue5mETyllndwbbmeDvoi6KrD2yy3AEi%2Ftj1uVKvqD5YRZY7jftaKaiybnOEKDEBAedDZYKCkvZ5TwvsbGxKo4zokkqVdJspRwWHJHkLPOab9MknRrrBxynxNd4nQiHqZD9m5rIPqYbJfTScx8gAJCXzGUxyn%2BLxUcUZAkeVjWxre3dGMG1XdD%2BQZ6auymEbWnabrthogKYvrJnB4N8t5UdM3EKK72BdW3fWk%2BGIOnumxTVqv%2B6PDU2YlA8PnLXAglEWRWspADrl9FyKjA%2BZ7ec5jOAd6xtSjktkZfunlY%2FM0n5DYNc2UHjjC%2B%2BE9R8iMO7u3w3YOxRqCdBAeiUhMt3h3OvhYPa5IQ9MafSinaatMmts3V4TLXnatWuAXCwo5Idv0djB%2BTAgwMyzyxkb35NmnZ360HehODlPxad0edsBcnbG9762hTb%2BUz886SI2Bi4X8rPvcZXxTIr%2FzsWoHvEmi9a8Q3dpy0qIuG0fCwezDL3YFmjH3eLU4tgVvMjbaS6%2FHa5mtzWZAH2mMtJ0BX0Tf3QYl1DTRiGUAVJFidTPS7fBppJx8WRC7nwLxmh%2Bj7yIIqFU45JIjpNRfKlgscqwqMIC0fWTCtm%2Fa%2FBjqkAXenTTSBWXO%2FW95UdIJU65v%2FQKNcoVRgyjVU95z9Ga%2FSVPQbuvosaXWJfefspFHXE4fiourRVkzqF4OLlKlkpjr%2B7iGhjDW%2B7FoJatWhJhCl2MIGOV7P%2FKD7h%2F%2FkQm4uKL31IRSh4xj1HE7lCh51gRUo98Dhlupy2IUGHUSwwHr4qRE4BGdPWtHkrsMgw5EaPyCgGcTXPqfKtNQBt7VrgQZBeIC7&X-Amz-Signature=5049cd60d67e239d0d35b5ebd8578abb90a78e3a4f7bd8cf5bfc1c967046631b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Z5RTE3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt0cII%2Fsqk%2FeSfkES3lX4Md1DxILFGV3%2B3Vyk0LJ3w4AiBTJwul1AxvphF%2FfvaXb%2BpU5CJVNjX0t34ZJPQC4cxx7ir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMywpVMRLASXHWPsS6KtwDSEA7uy5UV7NCtsfE8ciIzQlyoWKAbkbrtk%2FVICzF4xZ%2FV5aRGoAL9poa7I637%2BS%2F8rjgBsFiX6nmBIQoTNz%2BJu3DWZG4w7Ib2EyDDcGJEfanVQPFu%2BGabBAytsYqjJTVHOOfbZE2PwUg6vZDxaODuaQ16YWCbbO9g7gfXg80RN%2FehNblcdQgQA%2BJ6pdvAXGlYv8hPR2%2FVGO8wGz3thKdNbGPTwOX76HlKVtirSh6T2zuD1aD%2Bih%2BYw0qHLSjra7dL4qvJNyo1mr8dW6rCGZ5BzzNNvu%2F9kHqn4m470JZiO5jqM5kxyB9QNX2QNnS6iXzxrl0Krh0H867GNkuRUTAQx24rp5Bjdu9hoYgC5LdJPR8NGvzuGcPvg7N7ygSmv7eKBUBRd4QFviQAI2Tjjq1LKnx5DnKS249CIP3P8Ew1H9nsnipLH7ANCz4Z3RmI1AhvjHCuNQRY8punnunsNuV4ep%2BlTBTgsDblmV7GvhHeAl9xvLlhOqvY%2B98wUTnjy%2Buk54NrSe5%2FUbkkvTojtZ7BICILewYfBSSIAk6N0NCVoXYIM5ZgXDus6YgQWsijJ5LFREWzKny8vT%2BSfA7yJsHOrdJ%2FrDjX48WjBKfCJfp%2B96anD7AR1BqRdIdz6Uwlpv2vwY6pgEpnuPduqQNWOu%2FVn0w5tXlAEaBWU7lAaApqqoFsvEwsEY4G3MPpTYV2GhUxvN6S0SwE9AQKCM%2B%2BEsy3HSe9CQw0y2yofBhLowNrveyB1FRY99scpZA%2B0G2uW2igfzPCEwfZ%2FdXMqbi4NB9uidlG7fEh7zr7w3YvEeI5fLbryNGu7ejGuNsPjtpZsU%2BfRDkeLmxKMx%2BOD9GT8dcDbNHyenSGZ5Q2rp7&X-Amz-Signature=d4ac061b67c9b7fcaa81b838d63bc03b9f205aee3e6b2bb0b67759423b3b9e49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWMOSN5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhsaGFI0Of5szjbx3tQMIj3Y3BpMo7r7BByLBcDfGThAiBEHt9D7PUaFSDxUeL4Yb1SuHksNguPLqtczpvSJApEGir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMalXNFH1WHm3%2F7xwEKtwDKIddboLfrpMdeVvspxeTEVOpZjobfobQ7iewOiFO6bN3qQ%2FrhaN4BYGwhI77QKb14MCJsilqdUMA%2FJTFqqyNz5fM3NuskV7A2y95dV1Pl5rBuG6of4qONlrrG455wV8UazUtgNV%2F39XNcnC1XcntctAgVZo14juNYpYNIYRRnySMSXp2a9ulb3mgrj%2FGB9PqD3%2FZena9ZJnj5hNt1MfTF9yjFEVBlNqoQIXgghK17sxgb0P5TV0oN%2Fctuo45CM8aMzr4N3GJVFp8ZsGewvKZsnb7u3N8y0d3PJKPkbS4cNdX85PQ6B87ORGl5fZLkH%2FlylxrXqx5%2FHpX7FqTAoIOndiPgdRZLhEsmn4YmhMtTZ6IQ9%2BhDbuUYAAIS67weJr2GB9cyzXd1cIH8odeK0Gc5deHNFNM8MQNkH41gVKs1Hj6XIo429VVUksygKhsSQH28dSuGi0hjMuq56xTMhR%2FrtUu0H459vJy4OtzXrXFxKT%2FdcUh3TJewUrNnm4hV9iMdpxzp8aENV43YrG14OjjD4z0RlCE64ZhnKq%2FERtRLQGS5nkc7l2bROSwul8lXkUjAG%2BhkN%2B746dgSQOWbViPn3uVbA0oOr3Bc3pd146vFrs1aw%2FRssbmP0gZ1a4wyJv2vwY6pgG7iZM7U03cNe5FKiiRH9ZxhWx3OuPN0HVMe6ZDIKuP8nXoN%2FeckhB8b%2BAtTzIugaMnO2gT%2FhDvn0MDHH9gNfi9twUZYtPoWhmguccHHKkaK7utSUwIrdEVgD2yjETqNLs8AHMY23Agnk6eEue5risDJXE6lSskGK9u1kmaWH9qI1aeA3n%2BeJ7LgL6I31BCPYPe0d82bneuIVi9Gb6Ci5i3RvQU4ZYe&X-Amz-Signature=abe2ed23a720ae95364e6e323ba229d30a98d501b8ecc75e28d9bbdd0823f0cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
