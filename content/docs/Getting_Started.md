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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ZFXBDP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeyBKPeQHy33yhlSk0gJA%2BrcnJZSxBR3rOIX%2FL%2Bv00UQIhANLQP5uBz6L9CLmLmXypTxzpYzCjchAxe6FsNBQ1YA7CKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy82KjC%2FlPcTfJq6aIq3APmhjlNIfIDqppjY9khT%2BsCYoLrStdVVRNW4erwc1KjVAQjxlh3S%2BOAs4TxbKMyX2W42aZe9PQpSNNxkAF6e3MtNzU%2Bd7PaOUCdRq07chmJLgOfNaN1Jt2muySgghREspkf86ayzS64Y0haGf8qM%2Bii0QNgVx1KLYHfS69XigEaYOHrPyecWw9%2BemFVezKyvVg%2FXjms4iAexZ9WzVXBhTL7quHL88fah54PAZ2qHRjbrbOKt1LtjZGNghlQOanYNUhgura3ui4dshdXtyA%2FvnirLlk%2BlIzJTiZOinEfmF9d0gPWJyp88yNhzL2x2C9TCbIYUQmTLqZ6eCZiu98KsJmp6%2BNHnp528d1gfkm55hhgUQkhF0L8rW%2FpD97IQifkzOJUM%2F1J8%2BarQnq0pWNAiKbSiMGMcDzWe1JXhGshwzIPhCP6VP9HZda7eeB1QLzNnWEB1GtGD0vjNM1ZFGeO4q08Q3BfybdZBz3IRZzJY%2F94rOGeZ8cupHz2ZkV9UYihyQ7EuJ4xfrTTGtt0xjUkCQLjDCjvCYdY9QLGPDqpjuQoOuEmnswiS%2BfTaiCC0syKkSaa2TUDww2KgmNL8gYZg4OG7XfJjMKaDhthon5d1cxQbjfIHYJl3JCHfhYQrzC4kP%2FCBjqkAaKvgVKuLyV8boOn3XFgYjgMqhcPJLAvsyQC1m2Ltg5KtCUquo2jYanA9TK0W2dsr5OJwlu8VfpMu18UZSkLAZvuWtJ2fk%2FRHrRkEyN7ixx1oMf5ACtfsUFwvOywVVX8orKr4MjG6bg%2FhLunEC6H0OeyNBCfvVFIUGsczLdVCHXbmStGhLJMT9vpMUYLkr00yTy6aZKYxwUlJ%2BnLs0Nyvu473qZv&X-Amz-Signature=4eef331c483463e15dbc9e34a65d70ad2d1149f35183edc1755cefc9402ad82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ZFXBDP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeyBKPeQHy33yhlSk0gJA%2BrcnJZSxBR3rOIX%2FL%2Bv00UQIhANLQP5uBz6L9CLmLmXypTxzpYzCjchAxe6FsNBQ1YA7CKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy82KjC%2FlPcTfJq6aIq3APmhjlNIfIDqppjY9khT%2BsCYoLrStdVVRNW4erwc1KjVAQjxlh3S%2BOAs4TxbKMyX2W42aZe9PQpSNNxkAF6e3MtNzU%2Bd7PaOUCdRq07chmJLgOfNaN1Jt2muySgghREspkf86ayzS64Y0haGf8qM%2Bii0QNgVx1KLYHfS69XigEaYOHrPyecWw9%2BemFVezKyvVg%2FXjms4iAexZ9WzVXBhTL7quHL88fah54PAZ2qHRjbrbOKt1LtjZGNghlQOanYNUhgura3ui4dshdXtyA%2FvnirLlk%2BlIzJTiZOinEfmF9d0gPWJyp88yNhzL2x2C9TCbIYUQmTLqZ6eCZiu98KsJmp6%2BNHnp528d1gfkm55hhgUQkhF0L8rW%2FpD97IQifkzOJUM%2F1J8%2BarQnq0pWNAiKbSiMGMcDzWe1JXhGshwzIPhCP6VP9HZda7eeB1QLzNnWEB1GtGD0vjNM1ZFGeO4q08Q3BfybdZBz3IRZzJY%2F94rOGeZ8cupHz2ZkV9UYihyQ7EuJ4xfrTTGtt0xjUkCQLjDCjvCYdY9QLGPDqpjuQoOuEmnswiS%2BfTaiCC0syKkSaa2TUDww2KgmNL8gYZg4OG7XfJjMKaDhthon5d1cxQbjfIHYJl3JCHfhYQrzC4kP%2FCBjqkAaKvgVKuLyV8boOn3XFgYjgMqhcPJLAvsyQC1m2Ltg5KtCUquo2jYanA9TK0W2dsr5OJwlu8VfpMu18UZSkLAZvuWtJ2fk%2FRHrRkEyN7ixx1oMf5ACtfsUFwvOywVVX8orKr4MjG6bg%2FhLunEC6H0OeyNBCfvVFIUGsczLdVCHXbmStGhLJMT9vpMUYLkr00yTy6aZKYxwUlJ%2BnLs0Nyvu473qZv&X-Amz-Signature=5b79aa51ea0bb0ec8fd3878e4fb4f79e4c262157ddd5c029f2c9d6eac22d112d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ZFXBDP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeyBKPeQHy33yhlSk0gJA%2BrcnJZSxBR3rOIX%2FL%2Bv00UQIhANLQP5uBz6L9CLmLmXypTxzpYzCjchAxe6FsNBQ1YA7CKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy82KjC%2FlPcTfJq6aIq3APmhjlNIfIDqppjY9khT%2BsCYoLrStdVVRNW4erwc1KjVAQjxlh3S%2BOAs4TxbKMyX2W42aZe9PQpSNNxkAF6e3MtNzU%2Bd7PaOUCdRq07chmJLgOfNaN1Jt2muySgghREspkf86ayzS64Y0haGf8qM%2Bii0QNgVx1KLYHfS69XigEaYOHrPyecWw9%2BemFVezKyvVg%2FXjms4iAexZ9WzVXBhTL7quHL88fah54PAZ2qHRjbrbOKt1LtjZGNghlQOanYNUhgura3ui4dshdXtyA%2FvnirLlk%2BlIzJTiZOinEfmF9d0gPWJyp88yNhzL2x2C9TCbIYUQmTLqZ6eCZiu98KsJmp6%2BNHnp528d1gfkm55hhgUQkhF0L8rW%2FpD97IQifkzOJUM%2F1J8%2BarQnq0pWNAiKbSiMGMcDzWe1JXhGshwzIPhCP6VP9HZda7eeB1QLzNnWEB1GtGD0vjNM1ZFGeO4q08Q3BfybdZBz3IRZzJY%2F94rOGeZ8cupHz2ZkV9UYihyQ7EuJ4xfrTTGtt0xjUkCQLjDCjvCYdY9QLGPDqpjuQoOuEmnswiS%2BfTaiCC0syKkSaa2TUDww2KgmNL8gYZg4OG7XfJjMKaDhthon5d1cxQbjfIHYJl3JCHfhYQrzC4kP%2FCBjqkAaKvgVKuLyV8boOn3XFgYjgMqhcPJLAvsyQC1m2Ltg5KtCUquo2jYanA9TK0W2dsr5OJwlu8VfpMu18UZSkLAZvuWtJ2fk%2FRHrRkEyN7ixx1oMf5ACtfsUFwvOywVVX8orKr4MjG6bg%2FhLunEC6H0OeyNBCfvVFIUGsczLdVCHXbmStGhLJMT9vpMUYLkr00yTy6aZKYxwUlJ%2BnLs0Nyvu473qZv&X-Amz-Signature=ddfba7f69e790bd55fb7fa707222d6ff9bca2c096d288cbf5c4d5f087b2a47c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKOPMLU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTWdYGPVXgvc%2B1x9TdpJ1b%2FclGh%2FZ5CSrdBWt3TZ0QLQIhAJhkZLEX%2FBoMZR1WlkJZYl5qfWlcGMUWkD%2FAjy1ED9QoKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj%2FvsxVogkD8rpdbgq3APItcHd%2Fn4XOQg3YwRjXPper1zcQ3%2BQppGoc94wyyWj7fmbvkbWRrGE4za3y2NLsbxNJCMFsS7emtEq12cOXq8aS6LoXGt7%2BPmYURrgU0v1UDVBaOk5nUyM3YNRguGqbtABiz9NPRwtLZIu1SBsOTKkF4KN%2B2EmACSwgeVmyngajnMV3yaIt5uRh%2FXG7xxr%2Fm6NWMyBbjWjrWb5bNxslgXZp1FmB1VIFgGihr66qdv2J9emfBRgORQgCKXMnSgoASEXSQU1LMNRPKk6DmZEcpSUKfouwMXgIvyNgdyv6tIC0L8Y1%2B4ayXHEAzrviwR5w%2FDXwvJNMqnXfpCf7NAv9Yy7cYK7sJMXClja%2B9J84BN0Sf8gdgzDjdyHTKih86RbVIXmuPgTf8F62JgM7SGs0so39HgKStwxowEUbyQXRhCiBUJwFnQQ%2FubLNgtu%2FuPS8jWV8coMliD%2BqgcBkfHqUhZE8yCQw3Jqu63cI4pSFIotjHr7fhpngaC06Is%2B0QVfVsAWMgW3sg%2FMKSQci%2F9BsCo90kikEKNWhKo5T0XR6FzXsplOANmv8lCytKASTfBtnj3oPyqQfoBgFS67UgAA1VyVoNNHO1Ip%2FDTOeqkHud2%2FiNiwCv2mt%2FAxppoApjDJj%2F%2FCBjqkAZD7F8VwmCTxX%2FKafp3FDSv6UAvIQAk12M4mG7jKZD0mw2qujJuk%2F0ZsUm9pKci5c5QIEVBuHT0WxFQOiCUQew2W9j5gTMkJCNoy1LfIHEtwmswJkPFMDLU%2BORzuT6EIIrpbcjSyRgWl61OYM2%2F7UiVB2h05OlN7XL1ACR9MEyHI9R5QgxudQIT4EjUVaNQIZeEr2D5kBAr9Q7AkkcURApld6Uy3&X-Amz-Signature=efa4566fcdf9e9b38f27d729fd42bafab453bf46fa0d35aad9bf8cade875e15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4NQTG5E%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdwzBz6zGLoqjZYtCUOo5sWzmz9TA4zJy%2BO%2BY4CJxMTgIhAJrYeQzpqJpiuyoXfll0Zt4duMKzpESdvZDIIcG5SclxKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNLB1u%2FGaWngMPAxMq3ANy4XH%2FiIiBeBm9TnWmUlNLbcL2DASazfVgBbOVxAOit6zubTOJqu02sELCGpoDWuaeNO9CjJ6MHmTfQOmMqOKCck2aQ6OYPs4y0m%2Fwnp22Fbt8YeGmylpdgbCYzltSbnZI%2BvekQacaL5ppTTGe%2FGJHdHsUVv%2BNevhwomDyucIqX0WAlAQNaPM6%2BrmS%2F3UOl89cidVrF9EfKUB6quxXwXk0oRQzbms9%2BQADXOBa3tQDreWfRCi7yauG2MoS21vHIOCVdhzZE0g2ziHEWdG9SteCCDReZuRyzydH1sfFG1wWNekJflaqKFLK2XzyuTUeMwR%2BiOzsyLvbBH6gkvmzyPDqgHB0ev4Itt0%2BCqmyQk6HkUGlU8KEP2VOivaYNOT72qSVXwgrSDWPfHvgHRPH59EFtSetrzwAMBnY9YqVvM1VesGloYBGJj1pYWdO2%2B%2BxpWYGDDhox9a%2FOCEMtUedoBhK44x5wJ28o4EccF2zV93Dq0AaAtBmgVeGuzxsgxYCYbU%2Bs83XZF55d1QVZU1LrZz3GO4d4FcNbwbItfdCs%2FAHjNsx2afDy%2FZ3yaNHD4BZjRwMG8GCoRbAaIRA%2BeldFuedr8pQBJggpKUeL%2FVjt2y3LdqdInsng5UFJKrRqjC6sf%2FCBjqkAfrbBpjQNhnQLzpZtQlZfAn%2BDNVyuqvjk1r8jR4B4v9sozYu3GoOKU%2BT8AmnLIaBlZHqJnnxbIRhVCr746IpqaEZ59g6OBrha0kq6jt5sE2LLVEsmuEAcGVgZm6SW1hyRYiD9jDTXHYUISGPH1XjYKDGhLe%2FEB6l6uSmtGMCo2V11AycySlOmfTaba3pcPUfeyNXVWNx7MQe3dpWyMYWb6bFrH1v&X-Amz-Signature=ade24b0e888ddeb77fea3040ffd9a8f44a5c0a6564d6420712136d4fe713cd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ZFXBDP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeyBKPeQHy33yhlSk0gJA%2BrcnJZSxBR3rOIX%2FL%2Bv00UQIhANLQP5uBz6L9CLmLmXypTxzpYzCjchAxe6FsNBQ1YA7CKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy82KjC%2FlPcTfJq6aIq3APmhjlNIfIDqppjY9khT%2BsCYoLrStdVVRNW4erwc1KjVAQjxlh3S%2BOAs4TxbKMyX2W42aZe9PQpSNNxkAF6e3MtNzU%2Bd7PaOUCdRq07chmJLgOfNaN1Jt2muySgghREspkf86ayzS64Y0haGf8qM%2Bii0QNgVx1KLYHfS69XigEaYOHrPyecWw9%2BemFVezKyvVg%2FXjms4iAexZ9WzVXBhTL7quHL88fah54PAZ2qHRjbrbOKt1LtjZGNghlQOanYNUhgura3ui4dshdXtyA%2FvnirLlk%2BlIzJTiZOinEfmF9d0gPWJyp88yNhzL2x2C9TCbIYUQmTLqZ6eCZiu98KsJmp6%2BNHnp528d1gfkm55hhgUQkhF0L8rW%2FpD97IQifkzOJUM%2F1J8%2BarQnq0pWNAiKbSiMGMcDzWe1JXhGshwzIPhCP6VP9HZda7eeB1QLzNnWEB1GtGD0vjNM1ZFGeO4q08Q3BfybdZBz3IRZzJY%2F94rOGeZ8cupHz2ZkV9UYihyQ7EuJ4xfrTTGtt0xjUkCQLjDCjvCYdY9QLGPDqpjuQoOuEmnswiS%2BfTaiCC0syKkSaa2TUDww2KgmNL8gYZg4OG7XfJjMKaDhthon5d1cxQbjfIHYJl3JCHfhYQrzC4kP%2FCBjqkAaKvgVKuLyV8boOn3XFgYjgMqhcPJLAvsyQC1m2Ltg5KtCUquo2jYanA9TK0W2dsr5OJwlu8VfpMu18UZSkLAZvuWtJ2fk%2FRHrRkEyN7ixx1oMf5ACtfsUFwvOywVVX8orKr4MjG6bg%2FhLunEC6H0OeyNBCfvVFIUGsczLdVCHXbmStGhLJMT9vpMUYLkr00yTy6aZKYxwUlJ%2BnLs0Nyvu473qZv&X-Amz-Signature=5ed433ebdc4f1d9020dc81c5a04e666e9ff266676a97eec92bda5ef0c59387dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
