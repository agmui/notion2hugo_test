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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IFGAY5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPrJtbQHFQI%2FgvPJuD5dJNIi%2FyyQH7EIxbdz7ganwd%2FAIhAPlRKvCFiAnrq9YOR01d7WIWmBTfrGxPJnKlZZsfWcv7KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR3zRHBz1jNq2psMIq3AMOyygB1TGjayn%2Ft%2FEw9Ef9J0LNrgMFjbo6Dh6arPUIhuxEomrfeiAzhHRqe091sUcR6UMiADrWJiljrlIH1i1%2FYVsEOZJhw3SkKiYAoAGj2zFpeDr6f8AsJKyXRDIvCubqI9HtObNbR9xtD%2FZC%2FG3wfd4C1r8IsYUoDIW%2BSKf74BHEd9XCs21PiGpKSiCj3vnd%2FPJCgcM1Uq35HJIQGIgr5PO0%2Fg3ZNadvdcz9Dm%2BSaJtoRKzIM65U66AoKihbjnb3zwhgb99W4Qbnn348igPrCGe%2BszJizKHA5x6pNE42i4IQlR0YMinJx0riWGCyzibpUyAx62NDUjBrxPwGk8LSeV2Bo3Y149cLWU87skEJjpTrhlwbkFgIlFuI51mrktmP29qKnFudpoYkk5cyrPiwunqH0c3plvYfv1l2CHPQvP4w7c4fJ0v%2FXEOX2PHMilR0FOxtgbIbNqZnqyE6UNXjT97fk%2BP69DVrs%2F8s2aQsG9q9SMrmds7ca9rRtqgydvw%2BMSlKw2Jw8%2F%2FaQe0bGD1KlJQoUg5Jv5Nga1gdsdlu7REwwFW62jcLLaWhqPdnauWEUqMIyzjIGfh%2FL%2B4ohdVT%2FA9r6C7rF37mGSsh4vN%2Bx4%2Bjs4y7eiafTtlsUDCw%2F8TDBjqkAecfUYRcGOjnY1xFK0LNWe%2FqsiZLUFEtdHfK5VAdiRFED06v3sGYkjFYIjmLqXuXEb9wFtCkt%2F0hq6%2BDMSFimxx1G1tGWMlULY1o5b1IlvoCQ5sjt%2F9RfRCoUztAPhtq2f6CHmkCTN60%2FsH6rFGqCVnCbCAoI3AZcRbfC6bcWL9g8VaTQrLSOY3UqNXG4JtlS4M92Ao2Bq%2BMHjip7pOu3M%2FASQw1&X-Amz-Signature=8f7a7a9e77959debd854feaf9a3fa0b70c7ecc2a24dea564ac93ee8e75c43974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IFGAY5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPrJtbQHFQI%2FgvPJuD5dJNIi%2FyyQH7EIxbdz7ganwd%2FAIhAPlRKvCFiAnrq9YOR01d7WIWmBTfrGxPJnKlZZsfWcv7KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR3zRHBz1jNq2psMIq3AMOyygB1TGjayn%2Ft%2FEw9Ef9J0LNrgMFjbo6Dh6arPUIhuxEomrfeiAzhHRqe091sUcR6UMiADrWJiljrlIH1i1%2FYVsEOZJhw3SkKiYAoAGj2zFpeDr6f8AsJKyXRDIvCubqI9HtObNbR9xtD%2FZC%2FG3wfd4C1r8IsYUoDIW%2BSKf74BHEd9XCs21PiGpKSiCj3vnd%2FPJCgcM1Uq35HJIQGIgr5PO0%2Fg3ZNadvdcz9Dm%2BSaJtoRKzIM65U66AoKihbjnb3zwhgb99W4Qbnn348igPrCGe%2BszJizKHA5x6pNE42i4IQlR0YMinJx0riWGCyzibpUyAx62NDUjBrxPwGk8LSeV2Bo3Y149cLWU87skEJjpTrhlwbkFgIlFuI51mrktmP29qKnFudpoYkk5cyrPiwunqH0c3plvYfv1l2CHPQvP4w7c4fJ0v%2FXEOX2PHMilR0FOxtgbIbNqZnqyE6UNXjT97fk%2BP69DVrs%2F8s2aQsG9q9SMrmds7ca9rRtqgydvw%2BMSlKw2Jw8%2F%2FaQe0bGD1KlJQoUg5Jv5Nga1gdsdlu7REwwFW62jcLLaWhqPdnauWEUqMIyzjIGfh%2FL%2B4ohdVT%2FA9r6C7rF37mGSsh4vN%2Bx4%2Bjs4y7eiafTtlsUDCw%2F8TDBjqkAecfUYRcGOjnY1xFK0LNWe%2FqsiZLUFEtdHfK5VAdiRFED06v3sGYkjFYIjmLqXuXEb9wFtCkt%2F0hq6%2BDMSFimxx1G1tGWMlULY1o5b1IlvoCQ5sjt%2F9RfRCoUztAPhtq2f6CHmkCTN60%2FsH6rFGqCVnCbCAoI3AZcRbfC6bcWL9g8VaTQrLSOY3UqNXG4JtlS4M92Ao2Bq%2BMHjip7pOu3M%2FASQw1&X-Amz-Signature=6dd6e5b8b218b519b85b6351aaa7ba3ab469f932866222fa41f3c215bb4fc403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IFGAY5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPrJtbQHFQI%2FgvPJuD5dJNIi%2FyyQH7EIxbdz7ganwd%2FAIhAPlRKvCFiAnrq9YOR01d7WIWmBTfrGxPJnKlZZsfWcv7KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR3zRHBz1jNq2psMIq3AMOyygB1TGjayn%2Ft%2FEw9Ef9J0LNrgMFjbo6Dh6arPUIhuxEomrfeiAzhHRqe091sUcR6UMiADrWJiljrlIH1i1%2FYVsEOZJhw3SkKiYAoAGj2zFpeDr6f8AsJKyXRDIvCubqI9HtObNbR9xtD%2FZC%2FG3wfd4C1r8IsYUoDIW%2BSKf74BHEd9XCs21PiGpKSiCj3vnd%2FPJCgcM1Uq35HJIQGIgr5PO0%2Fg3ZNadvdcz9Dm%2BSaJtoRKzIM65U66AoKihbjnb3zwhgb99W4Qbnn348igPrCGe%2BszJizKHA5x6pNE42i4IQlR0YMinJx0riWGCyzibpUyAx62NDUjBrxPwGk8LSeV2Bo3Y149cLWU87skEJjpTrhlwbkFgIlFuI51mrktmP29qKnFudpoYkk5cyrPiwunqH0c3plvYfv1l2CHPQvP4w7c4fJ0v%2FXEOX2PHMilR0FOxtgbIbNqZnqyE6UNXjT97fk%2BP69DVrs%2F8s2aQsG9q9SMrmds7ca9rRtqgydvw%2BMSlKw2Jw8%2F%2FaQe0bGD1KlJQoUg5Jv5Nga1gdsdlu7REwwFW62jcLLaWhqPdnauWEUqMIyzjIGfh%2FL%2B4ohdVT%2FA9r6C7rF37mGSsh4vN%2Bx4%2Bjs4y7eiafTtlsUDCw%2F8TDBjqkAecfUYRcGOjnY1xFK0LNWe%2FqsiZLUFEtdHfK5VAdiRFED06v3sGYkjFYIjmLqXuXEb9wFtCkt%2F0hq6%2BDMSFimxx1G1tGWMlULY1o5b1IlvoCQ5sjt%2F9RfRCoUztAPhtq2f6CHmkCTN60%2FsH6rFGqCVnCbCAoI3AZcRbfC6bcWL9g8VaTQrLSOY3UqNXG4JtlS4M92Ao2Bq%2BMHjip7pOu3M%2FASQw1&X-Amz-Signature=91b4ac64ce7040beaf014ceba5e274148428dc2144c37c39d4361e6381a1dc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGY7IX6P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE04aICtdgxeO%2Bd50LhpjNtYo08BJ0Q14WpuSyLoRXcnAiA9DzaXeMtxvK1SDpWVe%2FA9EW223XOU4QWNulsodPlgaiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXyNo7SZLqvf3E4PaKtwDnlaiEICSQlLo8G6JSddcyGvhNqZHH9%2FOWBTcPox8mrMzjvlNkgUIspFhCJORCZhfJ4mfR9p93TRJk21cAc1zSrMILRuLixxIb6lLw6B0u%2B%2BrL3s0uXZJ0v%2F2bYYlkuZBAN2Nx93ktdA1CEYQW9HzBcj3IMkYsZ29nrFW%2F9253zn7%2Bxcc7squX3miQHCTvlmZfoTsHPZOPozVyX4vU1VOH99YaeLgesEzUB1Pzw3CvOwYzrG%2BER4bVcVj8SqWyJocs%2BRtw%2BprjAQYFrQIQR0mwdubazJVrBU%2BPImzyaGd8aaKuX8ilQvjdF8j4Wac4vOug6i1Ndl9%2BbBTMXVEMM2JOloOR9y%2F22cWzDJiaoDj2MHlVt9KBm%2BobMIKXV3wDOkzfkqsXnxKywKKk1Y8P1yuXPajXZPvyOZ1zPQd%2B3DVPbKDVdYa%2FwXGbnQk1SxBHHHlSAutzKfK64JMcBamMJbSrP7c16pzvMJRGRpqzOgUVy%2FQCTUR43axpMURsFV32vyVKiRF14QXoxIxtaJ9wNdjKfSv1qqNfeQIsQgsL0wUtwUOym8taV99K0g1joQfTZLVBMQq1oCjujiHWHxktCcP5cfu83hYm50B0NYc9umRTc%2F4%2FfUumz9HfTyAHRQwgP%2FEwwY6pgFH8et3iAd%2FFtj5ANX52K0Qavcl%2Bc3KURRhAFzl28odB%2BMuu4rPz2Z4PW7X1PXRk3bUvkSbun%2FO%2B0bHGRscO3qFK19YpqlKKauCrNIkXiZq1CEz8VygBD45vedI0HC0%2BPRXVhsa%2BO0g50LD5G62GOmm%2FjYNZ%2FkLME2T3KtWJkp0j30LXQqr6uC%2FqPoMgYj6j5LRX9hUpvZgcriyXK9YH2i6KjyXOKXE&X-Amz-Signature=50b05a8e3d33210c353b4b7af12e7d4f04096dd5c01790828a9cdb661bfbc797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DELQXSI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkGmbfwzCjxHtT%2FhKKTX2sLjWYqPr9vaKzByRfsZ%2B2eQIhAIeKC54SKeGdnjuO21Ro0HpYLY17tZmCfzdnzgF5j7lIKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7gAkZBS7g950JXNwq3AMg21CDEaekzm%2FKCokBQ0GdPPbRJHyjGAe35XIeh2PmtM3SzHjQ4KFqv7sZ7OF5hhVG96GYDG5b9%2FftPrjVNvneZkZEhzhd2y3HftikBPURTE6o1TrgL%2B1X3eNp7uy1KSaYeyYx7hsdUmAYowSco1lenG%2FSDk%2BHkQ7%2B76R3WqO375n3CTJP8QL8WGudLbvmomPyU%2B1Qeeq0jBWZfn6ObjBH4eXh0g5rBkDX7Ki3vz2Tj6znhKzdAOg8h8Qo3aUeNWO%2F6dkQG7HCTsJaWKYL%2BnXKTejQ7sLECIbmrxc0VKn85bAXIH8877xvxTS6JqGdtOLxniRUOvDyUqjJKI5Ts7hNXp%2FTLKGZbY7WsQrDhJaupLHG5ZK4kdtEUUlf7OVdnLapL%2BRjjj%2Bm3Bltcu6s46Tety0kN5HhFmGtfPVTm0%2FFhMxSRzpPItGCxXlawbTbgzgQUFU1YTnNLbDEvd50EE0WQqV2n%2FO7MHW8UWKt%2FT6TkeAGzzWg9wlufht3vi9iEJsMPWajc4KAdJpjv7TftuGQP5XgB%2B8Rco4%2FfdDiuFN2w8LhGdyFUhfVGcPH4nzdMU%2Fo8p3QA1tUSZ%2F5ayapX2uEKJxSnIDUHnJ5fW7oZ1b0OeoXVA4zK3BpN3dCkTC5%2FsTDBjqkAViy2qMVsKXni526U9Meu9H4ze7S%2FNKxYiuzvA%2FbQa5Ogy%2FBxHJ4hUK%2FhHIqB7DXT556qvKJo8p6sKglIQ7eoRpqGG9%2Ft1KkmiCd%2FWlHtmc3ER5uiS2%2BbDVrN1WvgkscF2ZHkOanJTOAwjqpVfmuJFPgUUxuzLOID87zwTOhQMPyR2RuICdHfIhkljI0VWEv%2Bhh5B3b1YnA8PE2jbfC5x%2Flsjv0L&X-Amz-Signature=5a7e61bde8321c1c3a0e806e1fa01d4ecd283aa932c926c3e133b0c07a9e93f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IFGAY5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPrJtbQHFQI%2FgvPJuD5dJNIi%2FyyQH7EIxbdz7ganwd%2FAIhAPlRKvCFiAnrq9YOR01d7WIWmBTfrGxPJnKlZZsfWcv7KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR3zRHBz1jNq2psMIq3AMOyygB1TGjayn%2Ft%2FEw9Ef9J0LNrgMFjbo6Dh6arPUIhuxEomrfeiAzhHRqe091sUcR6UMiADrWJiljrlIH1i1%2FYVsEOZJhw3SkKiYAoAGj2zFpeDr6f8AsJKyXRDIvCubqI9HtObNbR9xtD%2FZC%2FG3wfd4C1r8IsYUoDIW%2BSKf74BHEd9XCs21PiGpKSiCj3vnd%2FPJCgcM1Uq35HJIQGIgr5PO0%2Fg3ZNadvdcz9Dm%2BSaJtoRKzIM65U66AoKihbjnb3zwhgb99W4Qbnn348igPrCGe%2BszJizKHA5x6pNE42i4IQlR0YMinJx0riWGCyzibpUyAx62NDUjBrxPwGk8LSeV2Bo3Y149cLWU87skEJjpTrhlwbkFgIlFuI51mrktmP29qKnFudpoYkk5cyrPiwunqH0c3plvYfv1l2CHPQvP4w7c4fJ0v%2FXEOX2PHMilR0FOxtgbIbNqZnqyE6UNXjT97fk%2BP69DVrs%2F8s2aQsG9q9SMrmds7ca9rRtqgydvw%2BMSlKw2Jw8%2F%2FaQe0bGD1KlJQoUg5Jv5Nga1gdsdlu7REwwFW62jcLLaWhqPdnauWEUqMIyzjIGfh%2FL%2B4ohdVT%2FA9r6C7rF37mGSsh4vN%2Bx4%2Bjs4y7eiafTtlsUDCw%2F8TDBjqkAecfUYRcGOjnY1xFK0LNWe%2FqsiZLUFEtdHfK5VAdiRFED06v3sGYkjFYIjmLqXuXEb9wFtCkt%2F0hq6%2BDMSFimxx1G1tGWMlULY1o5b1IlvoCQ5sjt%2F9RfRCoUztAPhtq2f6CHmkCTN60%2FsH6rFGqCVnCbCAoI3AZcRbfC6bcWL9g8VaTQrLSOY3UqNXG4JtlS4M92Ao2Bq%2BMHjip7pOu3M%2FASQw1&X-Amz-Signature=3e06536044733bf623bbe6992f93db4e69cb76cac69a0e55aa8ec00db60a6350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
