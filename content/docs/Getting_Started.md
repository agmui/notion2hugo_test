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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V3I6GO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEwyHtMyjtY4gOvBGFRVdq3kiLMHeMGptRqi3XHQL0KzAiAI%2FOve0lU%2B3cBXQuCEfBZfwLU8ps%2F6n33khggAsD%2FrtyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3OkCcTZl8QpEsquKtwDjrEVh1Mf38tU7XITXv8KYRu8iUP7BU9rdkg4o4PIMdutyJy%2BKyLBC3K%2FwKj42PL22as1BwKiyli1OIoH0PSltkrZ07tCMxN8yBy3dto7pYc1wySVMUyuXgdI1sv72nwwF7JODN1%2BbmY7KnGSKHVhBAhKg%2FywNAWgn7yGQO0zt%2FIXqf%2FcgL0Ic8VwqLk9TSlaRXnKF1MQeXPj%2Bqkk2Hb4YS1x266rsSozCYmW86p8XzY9E1JmNZgmhiSWoNvHXakJQqBhQZ0I%2FCjFERSEXB%2Fc4Ht1SKVu2tYbKEftB3uPuDatwxAJoDECGoiyehm9XRpaTYdcmjvVTiH%2BKAFT8Ami2Ff1Q9fumTaYkZ4VHVYcHhENdIYFqVW2rkfNTsoeo6H5FikMX86p3IekfG3YKOiRytM%2FYmm7uJ9SjzXtuBO%2F25%2F9w6Fnl4ih6n%2FNMHAL%2FQFIs7RnSpAd8dvS7JHB5AhltWS9bfE%2FEgTQ3DjVWvosj3CMU8qEAWjylHpEjRW5nPTs0SDltd6yJTkASHV8BDj9ViffyGKnidkDgC5m14OvzNSKyGGBJnDKHM12syFV5tZ1QlgY87F8aRqrvpBXrleqf7HmWhjYrEUoTAo5RsbUAGRUpg5YPMwT51ag0hQw%2FNrEvgY6pgGm1mGJeW6zr8uc4YhGzVlGrJ2P71AMoUB02oSm8QGadF8qqpe0jcRd6Is8mT20%2FL8CUAFmMrKC64V61NZoDlEIhSIDDbXbo7xFRupkkKqtfhIx7U0nD1sQb6Cmz64HF5HytNPllZpCHhfW6Q5rW56LIkpeVd1hdMOqis6RmQkciIkwtZj%2F6pRgQ0srhIG9wpOjnsx0E9MYDH0IlVjxmtsjUFJY6TVI&X-Amz-Signature=2e89d422a835db5820209f09df216d8b20c0c53af0fdaa1fc76986387a635267&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V3I6GO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEwyHtMyjtY4gOvBGFRVdq3kiLMHeMGptRqi3XHQL0KzAiAI%2FOve0lU%2B3cBXQuCEfBZfwLU8ps%2F6n33khggAsD%2FrtyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3OkCcTZl8QpEsquKtwDjrEVh1Mf38tU7XITXv8KYRu8iUP7BU9rdkg4o4PIMdutyJy%2BKyLBC3K%2FwKj42PL22as1BwKiyli1OIoH0PSltkrZ07tCMxN8yBy3dto7pYc1wySVMUyuXgdI1sv72nwwF7JODN1%2BbmY7KnGSKHVhBAhKg%2FywNAWgn7yGQO0zt%2FIXqf%2FcgL0Ic8VwqLk9TSlaRXnKF1MQeXPj%2Bqkk2Hb4YS1x266rsSozCYmW86p8XzY9E1JmNZgmhiSWoNvHXakJQqBhQZ0I%2FCjFERSEXB%2Fc4Ht1SKVu2tYbKEftB3uPuDatwxAJoDECGoiyehm9XRpaTYdcmjvVTiH%2BKAFT8Ami2Ff1Q9fumTaYkZ4VHVYcHhENdIYFqVW2rkfNTsoeo6H5FikMX86p3IekfG3YKOiRytM%2FYmm7uJ9SjzXtuBO%2F25%2F9w6Fnl4ih6n%2FNMHAL%2FQFIs7RnSpAd8dvS7JHB5AhltWS9bfE%2FEgTQ3DjVWvosj3CMU8qEAWjylHpEjRW5nPTs0SDltd6yJTkASHV8BDj9ViffyGKnidkDgC5m14OvzNSKyGGBJnDKHM12syFV5tZ1QlgY87F8aRqrvpBXrleqf7HmWhjYrEUoTAo5RsbUAGRUpg5YPMwT51ag0hQw%2FNrEvgY6pgGm1mGJeW6zr8uc4YhGzVlGrJ2P71AMoUB02oSm8QGadF8qqpe0jcRd6Is8mT20%2FL8CUAFmMrKC64V61NZoDlEIhSIDDbXbo7xFRupkkKqtfhIx7U0nD1sQb6Cmz64HF5HytNPllZpCHhfW6Q5rW56LIkpeVd1hdMOqis6RmQkciIkwtZj%2F6pRgQ0srhIG9wpOjnsx0E9MYDH0IlVjxmtsjUFJY6TVI&X-Amz-Signature=bf1f061980aa0fa0eedd67a64033a5d88fd99de0df3818534b81bf011b637fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ33LHVV%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC5U2qFp7tLUW9OAQOLe1Xo0%2Bqr3VWN%2FjG77tACqXTbUAIgS9Y29RKnxaM68quMU04Msmyg9jiN1NamubYJmLy7bAMqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcaoYEs1Eh0%2BERslircA2sDNZaJHX9ixoDrQzD0OIefx42NV6DdcQXq3LleiAdzyMrntHUQLZ%2F01HjAtU1LsZFEnHv%2F2VSgOce6ZjHZJX%2Bl7bL8OP7%2FXyL6hER20c4hQuA%2FzIIsaPGoZ2QQ%2BBWJI%2BDWeAuboffNNyTlAz8tIfQgDVYnhirZRlM5rFD7qWzIa12JN6ZmbSmicYwEpT1%2BVVQl1L5nAHnMrQtNVGF7iglpBvFTfpMGc3Pb1xFRNTfvBOtCXMoU4qfmLeKP7BEefsH%2FALqTzGolMxv%2Frd%2Fp34XmZkj8Xy9rNhyhXqUh42dnkMxzomiV2QVR8hfBatzVig7vpC85fzsQnV5JPoXfEiYpbMBhTlcvWvSuqd8HJytv2y6VMk5r9ydJOnSkdQFKuRDzYLDVrSyAAVP7vSLM18P3GGRQImKo9A%2BcXsSVclbyNJ5e80SZcwbn58BhYo13X91KqVxHlMG19XWbekdJP1BIP4GAQM8ou0pGDmgpjLmmmTju3VtB4C46Ysd7UyDVZN83JRHa0%2BYDvfo9TLBKwW1zWG0Yoo5dG32ySJPxu2yZVoor9qpJd4t8JHFXX%2F9W6EKWy1IFQdSlnXL27reh7m5K1P97MEIgCXZLxZDEA74Z904irQQbcbbU7ZOaML%2FaxL4GOqUBrTmqOza2YyQiiwaPRwIGnQa2qeIJ776bqi%2BlSY5%2FmGPXpVuR5b%2BjtQg04DNoArXd6znVemAraaXn%2BZB3C33uutXr9yQ%2FUGPmsumLDsc%2F8xuzXpeXx%2FkXv2yeF%2Bgd59%2F%2FYI4GaFTVlR8ZtWJrZBNPNWoZFcGyeUZIXo4xrEfgckah2HNc5p3XzGbVgb2PXP%2Bq88qcWo8K7ibquFTpxguzKy04DJHh&X-Amz-Signature=2e15336c86b6b69b375e9c4b559e4df087a39671a2369880fb189ed48541de2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNUJA7H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDEsGCyLFpKRJaDNn3O0q0sNGXMUgQRWrgsKf3OenBOFQIgI97RWI63jCSla41Q8VBr6unp8Vlpbd0ACXkfOw%2BOCVMqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRHkZhZtGKioFN6pSrcA%2B0G%2FEsq0lgVG7zUFehjwA%2FM64JKh18D2Cq3YIICv1RxFWzqIaIEw67XgZ7i%2BlLy9JnudkLeQUh2HzPrlW%2Bw7SW6KOFlF9FzRW0mRHfkPx%2BilXusX3o4sx3zzpQMVLm6XPSLcpgn1mtYk9pW1OM%2BI5m5S3ew6ddd%2F0NkV7d5sjnFwmQbA%2F0N31PggYGE5qvsWTn6BGjTiKlL9bk9%2FlRVB%2FLJ8XhzTSw0iEWIxVW6SUguPaboZdRB4qirtcIHmLOP%2FSNHZvVUhcucRGEkOSaBo0WuZF5uEliAf59NPCQONiFSvVYy6IQeg9QRkZ52e525CuejcJZF5gyN%2FZTraZ%2BvR3EuKIl8JpkGazOMlPFT3kz72eq0x%2B8VuDnRU6MW6FuolsZ2ard8w4%2FLH3uY2%2FamcZpIdz7tTxge9JhJobZcsiy740D763%2BNB4TJn%2BTlKgG593N3Q74%2FpyZIy%2BW6W2%2FDXZAi666PxMxTL%2FrftiKSrY71Y8IGBY4KXBHhI6PriBKFz6WHJIq7DhuPmj2VNgj3Ar70sMLvBGKU%2B7%2BdjWogsSwAy3Vc4SWV%2FPl9aCHB8A6t%2F1x0BGuO%2FG9qgXYwrrL9IQGMR5%2FzwI8moUINL7EA8h6YFZ3zJ9ImU7vlCmtlMMbaxL4GOqUB2M%2Fp5hlKCi2DJajs7uWG1h0oOXplkuCW3axKggVSZ6TrWRcBxwLKkd%2Bz%2FZ3FrAxkDHlwDRqddz3bD%2BijqbCea9KX2N%2FOK6KuQDjm%2BzrAjCkTmGDM8NtPWkMDcA7JakrLz%2FrRyNnTuYk2qV6PZHpUhYW0KKUCYoJwuul5CveEpX0GLCxJHq8wOwEJvkbPiUphPUMh0sS6gOdr3lnnOUycyfryzWWJ&X-Amz-Signature=18a5a197260fdf3f4e03f7935f8f957b5d65a91007f89dd7c800e582f5ff796f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V3I6GO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEwyHtMyjtY4gOvBGFRVdq3kiLMHeMGptRqi3XHQL0KzAiAI%2FOve0lU%2B3cBXQuCEfBZfwLU8ps%2F6n33khggAsD%2FrtyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3OkCcTZl8QpEsquKtwDjrEVh1Mf38tU7XITXv8KYRu8iUP7BU9rdkg4o4PIMdutyJy%2BKyLBC3K%2FwKj42PL22as1BwKiyli1OIoH0PSltkrZ07tCMxN8yBy3dto7pYc1wySVMUyuXgdI1sv72nwwF7JODN1%2BbmY7KnGSKHVhBAhKg%2FywNAWgn7yGQO0zt%2FIXqf%2FcgL0Ic8VwqLk9TSlaRXnKF1MQeXPj%2Bqkk2Hb4YS1x266rsSozCYmW86p8XzY9E1JmNZgmhiSWoNvHXakJQqBhQZ0I%2FCjFERSEXB%2Fc4Ht1SKVu2tYbKEftB3uPuDatwxAJoDECGoiyehm9XRpaTYdcmjvVTiH%2BKAFT8Ami2Ff1Q9fumTaYkZ4VHVYcHhENdIYFqVW2rkfNTsoeo6H5FikMX86p3IekfG3YKOiRytM%2FYmm7uJ9SjzXtuBO%2F25%2F9w6Fnl4ih6n%2FNMHAL%2FQFIs7RnSpAd8dvS7JHB5AhltWS9bfE%2FEgTQ3DjVWvosj3CMU8qEAWjylHpEjRW5nPTs0SDltd6yJTkASHV8BDj9ViffyGKnidkDgC5m14OvzNSKyGGBJnDKHM12syFV5tZ1QlgY87F8aRqrvpBXrleqf7HmWhjYrEUoTAo5RsbUAGRUpg5YPMwT51ag0hQw%2FNrEvgY6pgGm1mGJeW6zr8uc4YhGzVlGrJ2P71AMoUB02oSm8QGadF8qqpe0jcRd6Is8mT20%2FL8CUAFmMrKC64V61NZoDlEIhSIDDbXbo7xFRupkkKqtfhIx7U0nD1sQb6Cmz64HF5HytNPllZpCHhfW6Q5rW56LIkpeVd1hdMOqis6RmQkciIkwtZj%2F6pRgQ0srhIG9wpOjnsx0E9MYDH0IlVjxmtsjUFJY6TVI&X-Amz-Signature=dca500cf752fd1afae13cf187c3446818d4ac2d9a9fd590beddb1583045df0cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
