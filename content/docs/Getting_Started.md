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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTLO3LB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGV5U5A4qOZ%2Bk1PCWvnj%2B0LfTZPapPJ2j8TPHi2LLzdrAiB2H02%2FLx7lPSHCa0U4Bt1uKIbAzeTis5HnWceuFXnVCiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4QYmv01btacYRgJKtwDjkClnCDE3iOGsy7JAYPsWZC7MlsxKzX9F6fKcm1uKCfeQPI8uApVVQpd1aYEWw66%2FgkCvir%2BWzw8O0b2Fb6NBeZfZOm8eT9GAkb%2BfxLOIDMPk9JIQ9GvwWXtMzkLeAkQIfxEt8ALTAnfDo3xwb9xvu%2F3KXAWHUuOADvW2JQ1S7p%2F6Yb28%2Fp0M%2BlSjVkAixKfA04CSmf%2FK0IizDabljPw%2BhQZnjDheIcOC91AhV6jRfXYaQ%2FmfvkdklYYAhqA79DJiH%2F6mdPspNMuSSb8kwz%2FjaYzOQ31OZHkd7usZ69CQdSNCDrt2zRlE%2FC16MHUBhMMBp%2Bdcuwmat1LfVE5nA3Rv0b0le9nATWWnulVzzMEN%2BqnhZ1NQCENEGmlI0BgcuowRy34xt5tyUUEHYfCbkuB3XXcuQMr7IKuqNjea1TQO%2FKLYo%2FtsOO%2BCi%2B5jr23M6rELGdIc5GLomO5tio%2FQn99PfPUM3fJ9xzbY15cN8lj4FzAWoRg0BxobXAnQxBMOdFzZauZop5uwutv5feSxbbsf7Ywsx4x%2Bt8SpQ24mVGqZtG2QZw9g1V4TZnITR3hCXe6GHwMIOkFoGze7o2LUvZobtAAS5W9QCu%2B8BH8KbvFujsjxuJnZ9KpbjnQOf0wsISGwQY6pgFBuxa7ykhslTipEIKwjx%2FkxlKGUi8D0LWKtGatk0JrByzl8MYg%2BqLrRSsEEpawBXOIe0HQStM%2BDI3N6MewMTngT3UO%2FnzRrkW1y5rOrOw4s4atFCst%2FW%2B7layBQSjWMSpzD0hlCZe5l25%2FA1C55aQ0jVJiOYpPCoxevRgEWlO6Dm5g80fl0dGekvMDTCFvaMt218SmKJv1uwiXh13MddiAcsrdXTjL&X-Amz-Signature=073a0957a58669a23d1df938326b14a5c774338b307e17ab7cba745752b2d1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTLO3LB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGV5U5A4qOZ%2Bk1PCWvnj%2B0LfTZPapPJ2j8TPHi2LLzdrAiB2H02%2FLx7lPSHCa0U4Bt1uKIbAzeTis5HnWceuFXnVCiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4QYmv01btacYRgJKtwDjkClnCDE3iOGsy7JAYPsWZC7MlsxKzX9F6fKcm1uKCfeQPI8uApVVQpd1aYEWw66%2FgkCvir%2BWzw8O0b2Fb6NBeZfZOm8eT9GAkb%2BfxLOIDMPk9JIQ9GvwWXtMzkLeAkQIfxEt8ALTAnfDo3xwb9xvu%2F3KXAWHUuOADvW2JQ1S7p%2F6Yb28%2Fp0M%2BlSjVkAixKfA04CSmf%2FK0IizDabljPw%2BhQZnjDheIcOC91AhV6jRfXYaQ%2FmfvkdklYYAhqA79DJiH%2F6mdPspNMuSSb8kwz%2FjaYzOQ31OZHkd7usZ69CQdSNCDrt2zRlE%2FC16MHUBhMMBp%2Bdcuwmat1LfVE5nA3Rv0b0le9nATWWnulVzzMEN%2BqnhZ1NQCENEGmlI0BgcuowRy34xt5tyUUEHYfCbkuB3XXcuQMr7IKuqNjea1TQO%2FKLYo%2FtsOO%2BCi%2B5jr23M6rELGdIc5GLomO5tio%2FQn99PfPUM3fJ9xzbY15cN8lj4FzAWoRg0BxobXAnQxBMOdFzZauZop5uwutv5feSxbbsf7Ywsx4x%2Bt8SpQ24mVGqZtG2QZw9g1V4TZnITR3hCXe6GHwMIOkFoGze7o2LUvZobtAAS5W9QCu%2B8BH8KbvFujsjxuJnZ9KpbjnQOf0wsISGwQY6pgFBuxa7ykhslTipEIKwjx%2FkxlKGUi8D0LWKtGatk0JrByzl8MYg%2BqLrRSsEEpawBXOIe0HQStM%2BDI3N6MewMTngT3UO%2FnzRrkW1y5rOrOw4s4atFCst%2FW%2B7layBQSjWMSpzD0hlCZe5l25%2FA1C55aQ0jVJiOYpPCoxevRgEWlO6Dm5g80fl0dGekvMDTCFvaMt218SmKJv1uwiXh13MddiAcsrdXTjL&X-Amz-Signature=1006d1225764a7be6b19727c7c9360e0373cbea82503c9cd8d27da9cabd8377a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTLO3LB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGV5U5A4qOZ%2Bk1PCWvnj%2B0LfTZPapPJ2j8TPHi2LLzdrAiB2H02%2FLx7lPSHCa0U4Bt1uKIbAzeTis5HnWceuFXnVCiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4QYmv01btacYRgJKtwDjkClnCDE3iOGsy7JAYPsWZC7MlsxKzX9F6fKcm1uKCfeQPI8uApVVQpd1aYEWw66%2FgkCvir%2BWzw8O0b2Fb6NBeZfZOm8eT9GAkb%2BfxLOIDMPk9JIQ9GvwWXtMzkLeAkQIfxEt8ALTAnfDo3xwb9xvu%2F3KXAWHUuOADvW2JQ1S7p%2F6Yb28%2Fp0M%2BlSjVkAixKfA04CSmf%2FK0IizDabljPw%2BhQZnjDheIcOC91AhV6jRfXYaQ%2FmfvkdklYYAhqA79DJiH%2F6mdPspNMuSSb8kwz%2FjaYzOQ31OZHkd7usZ69CQdSNCDrt2zRlE%2FC16MHUBhMMBp%2Bdcuwmat1LfVE5nA3Rv0b0le9nATWWnulVzzMEN%2BqnhZ1NQCENEGmlI0BgcuowRy34xt5tyUUEHYfCbkuB3XXcuQMr7IKuqNjea1TQO%2FKLYo%2FtsOO%2BCi%2B5jr23M6rELGdIc5GLomO5tio%2FQn99PfPUM3fJ9xzbY15cN8lj4FzAWoRg0BxobXAnQxBMOdFzZauZop5uwutv5feSxbbsf7Ywsx4x%2Bt8SpQ24mVGqZtG2QZw9g1V4TZnITR3hCXe6GHwMIOkFoGze7o2LUvZobtAAS5W9QCu%2B8BH8KbvFujsjxuJnZ9KpbjnQOf0wsISGwQY6pgFBuxa7ykhslTipEIKwjx%2FkxlKGUi8D0LWKtGatk0JrByzl8MYg%2BqLrRSsEEpawBXOIe0HQStM%2BDI3N6MewMTngT3UO%2FnzRrkW1y5rOrOw4s4atFCst%2FW%2B7layBQSjWMSpzD0hlCZe5l25%2FA1C55aQ0jVJiOYpPCoxevRgEWlO6Dm5g80fl0dGekvMDTCFvaMt218SmKJv1uwiXh13MddiAcsrdXTjL&X-Amz-Signature=468eec739bfe801fa09c011cc38ddc599174217592a844ff4a5784ccbb3a3b06&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXI7M2X%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDD8HCUJQcx4VIpoI0fuEtSW1D9cXeRr2BfKh81IN0egAiEAxIj5o5me5%2FxmbVsX3xT53EcUYaq%2FqMk6Kj5KZEOYSRcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn2pLijkLtl5YOV2SrcA2ELbmevgjdiBSN6RPu79epPzVhd%2Br3WLgLJAPcjo1X%2F%2F6sjoe4exccx7k8n9oGsqlSO52wMUST9CL5LOGTXc1VlfdSsHnztbTAfp46wMk0w3LKj5YX1FiL4PmTXCUSKlLnwTE4bccrsqRzzUF64wJLBtYGZoxLuzUmSq%2BIrXK%2FUBbjkwz6WTB5d50%2BcZxAIj6k4k8K72R9Y%2FQbVNBKRajfIUhiXroFhv63njBoiprZOEQ21iZtIJabM%2BKM2T5xygDUWZhyVsSypbzsfwc8iTKL7hat79BFf36Lz5QSxFqphkqDAs%2B6oRJ0WvZB5uE0JcqPJpQ%2B2lr7zI2KWAlPgz9noE%2FJLej6G7kSuGgj4qCsVbY%2BV%2BkNpLmObpRmKMKMNxOoWjpl4hIetnJ%2FVrViaapthOZiGjpk%2FKoR5BZZVMYf6sLxUUz%2BEgqi5%2BeaV%2B%2BCxwO9Ixd1NiVoq6lXLXPV4ur1oK3KJun5%2FiFgHVZvc0Kp8krGkoeOXiKJLi1oRYHhfc%2BXX%2BneWNdv9uk%2FserXLIJPajyR5j1NlPi2kMCFy7zQSDPsa%2FJ6z7RSm65%2B2iG%2BxU7Dc3A58pqjCijLvQcTneWe%2F1rz2Qa%2BrI9qDhLwqLxuGk5lRprJbvmJUhQh5MJKEhsEGOqUBNnRwKIhwnqcrqNsQ3zxlPWqiYaRgGsOyWucwc77Mh%2F56tQG%2Fz6zg9YKbYiGEDCVmF0XyCYwBgem8KFlksAYR7xLoaYqXmVJKQUbvkx75BWIXYvwAz4CLPPHaRCvqpDVB%2BZ3XpCj7sxQeF9pCk4h1vWSJNgvvL01OPrPRj8eKwQCpmvqqbF8iz6phJ0Q5IIfMNR0Yc1IB51hwwrE0g3OUW%2B85CN5A&X-Amz-Signature=348fbdebae7eee27f4f5a9758ec863cc116a11683b2899e2ae2f4be64b1e175c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7OFCYP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDXx96LSVyX%2BJbeCAkQ5WmKyW0surXCsdDfqA3YHzdVxgIgNMA4nXboDritbajRUFDvQPkztTn1ND1lkoSsQh6jI68qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhPZE0rYgSbDNLTwCrcA91GJ%2BAm2GTxW3BP7DpA3T1CnOmoqR3jIzblHDrnGBUtbalbrVZDWEmxvbvX0j6mtuMl6I7hyZ%2FqopHsECg%2FU2n2ie2jToAr6dbrCzpPJh%2BOZ3iImxwQqdWvBEOsdf5vq9EEU4mPMyY%2BitdV7IJvdLZuh3NJADDHomD7IlKEI3bDGrXf5jBRxKgeTdqpods8p0obHn1zt9BtRO0ibXyhyLjLfgaHx7IrRR6I6BoFIpgiPOpk4JssWjuxKgSoqh%2FMe0E%2Ft8GNQn8%2Bk%2Bb6hiGZzXsduXoY8OFEOvVtw%2BCmuPPl3cS65G6D52qYduWZG4SepG7mDZ%2Fjtq2YvU%2FiYhVHb9u2ypRTb9u6dTjfgYCTHYn3p%2FtNTiznVvtdKSsYOGqVbaLF6iv7pj%2ByG9L5ETKbaHiqZJR5drosKIzxn6D%2B9bYa2ZEwshYBIpVhZs79dUKqpYSWFTKLPdOjxHllMR9j5R4TgrmfSP6jheZm6bPUBz9X6S8p0%2BlMF3KtyRYiA3DAd%2BsnLeil4Md54Y%2B0vu45p7MEuOLQbrT%2F2Ev7DNFzhI%2FYiiE4aRaAOqGCXOqSozRDWtQr7kRxbDyoYdg5Wav2LEx%2BEuVbHfKOlNmWYVPK1I0eCR3nqV6kZChpGGt7MJ2EhsEGOqUBZHoY%2F%2FfA96ilO8w1ZLqosdFHE03EUKpljevgAI8ar1CaQCqgZ%2Fi39By3ibbg4GS0Bq1t4KkPJF3NOmrCM12WlV%2B7c9tOOptLfZHLG3vwGUz5dh8GiQzYZnOVaRZ8FYOjZsbv2Xhc%2FZ9V4TbZGizJlm0343rR9sdLx%2FKySOlsAWfr4yORQyMVVmJERVAHaQrhli55kdJk6BeVQgZMPG%2BneVIBMVao&X-Amz-Signature=4aee7b38272dcb8f68cb45926a39ee43315248476fce335ea4f439bbed89298b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KTLO3LB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGV5U5A4qOZ%2Bk1PCWvnj%2B0LfTZPapPJ2j8TPHi2LLzdrAiB2H02%2FLx7lPSHCa0U4Bt1uKIbAzeTis5HnWceuFXnVCiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4QYmv01btacYRgJKtwDjkClnCDE3iOGsy7JAYPsWZC7MlsxKzX9F6fKcm1uKCfeQPI8uApVVQpd1aYEWw66%2FgkCvir%2BWzw8O0b2Fb6NBeZfZOm8eT9GAkb%2BfxLOIDMPk9JIQ9GvwWXtMzkLeAkQIfxEt8ALTAnfDo3xwb9xvu%2F3KXAWHUuOADvW2JQ1S7p%2F6Yb28%2Fp0M%2BlSjVkAixKfA04CSmf%2FK0IizDabljPw%2BhQZnjDheIcOC91AhV6jRfXYaQ%2FmfvkdklYYAhqA79DJiH%2F6mdPspNMuSSb8kwz%2FjaYzOQ31OZHkd7usZ69CQdSNCDrt2zRlE%2FC16MHUBhMMBp%2Bdcuwmat1LfVE5nA3Rv0b0le9nATWWnulVzzMEN%2BqnhZ1NQCENEGmlI0BgcuowRy34xt5tyUUEHYfCbkuB3XXcuQMr7IKuqNjea1TQO%2FKLYo%2FtsOO%2BCi%2B5jr23M6rELGdIc5GLomO5tio%2FQn99PfPUM3fJ9xzbY15cN8lj4FzAWoRg0BxobXAnQxBMOdFzZauZop5uwutv5feSxbbsf7Ywsx4x%2Bt8SpQ24mVGqZtG2QZw9g1V4TZnITR3hCXe6GHwMIOkFoGze7o2LUvZobtAAS5W9QCu%2B8BH8KbvFujsjxuJnZ9KpbjnQOf0wsISGwQY6pgFBuxa7ykhslTipEIKwjx%2FkxlKGUi8D0LWKtGatk0JrByzl8MYg%2BqLrRSsEEpawBXOIe0HQStM%2BDI3N6MewMTngT3UO%2FnzRrkW1y5rOrOw4s4atFCst%2FW%2B7layBQSjWMSpzD0hlCZe5l25%2FA1C55aQ0jVJiOYpPCoxevRgEWlO6Dm5g80fl0dGekvMDTCFvaMt218SmKJv1uwiXh13MddiAcsrdXTjL&X-Amz-Signature=78fb017f0aa625ec73196903696e304dae7b245404b54cfdad08be0d0d026a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
