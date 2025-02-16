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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZGKBOF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCRJKpGmW8uckmb8RmwIgU6RoX4Iqt1N3swpLYsyh1qSQIhALD%2BhHQ7Ij6rm3Spf%2BRhyQpYSGcLYLWLj1Y74W0x1tJYKv8DCGMQABoMNjM3NDIzMTgzODA1IgyAo9MUdcOuM%2F%2Fv%2Fwkq3APdQvkRZpuWHvsPd%2BCKAQUC7jpo5AZ1zjTPeTF7N0Qz3p4IgRZMZdqvN9GAc22M2Dkmx49i%2BxF%2BGzCtMVuwfyXvkYN9L%2FgfOtVw6W%2FmnetViTJZRkUNTA2WyIcCapG1vVkF8wWiH8S7cghZpOoULrPJJ12pSHwyCJ7c8PkB8Qy0vshvGYMeBTxtSp83FgOU68qdGKyeAyKGi5ZFBjtgtZZuPRX8MsaCfzv7C7ALwJ0BxBO8fY174Kss5vbIXuUjnpQn2%2Btkr07ucZfbwItJyZO3rrhIaeA%2F66Fwe4rCmd%2FuyhTzZvwHhcgdw7c6m46x0C%2F5j4veoVRn1ddygAWu%2BKyZLWx6hYR2nePZi4nVm6EIa79DS%2Fkj6iwWCmKv8pQNd2QJNIGkwQ6YdmGj3hAhOoV78QIMsjBXq88UIs4gX9RYoaAa6844UnHBfFyd29coIYmfO1c6ZVBdxneqlUF7KlZjMsVg%2BQDOyawzhvctNJDKhrssIPjCGs7%2B66y4tIxblH%2FJutDbscafbiED1xjL2UbkWzNqRXuknlLQw7C6af%2FtGYMNUeY2zg56BwUOOTTuhLZRyPcaqrjKe3cz59aYCAlIdaXtL%2FP5ljEGJgKAbnl9Z%2FbuFmijrt3264bU1zDZwci9BjqkAY%2FSdWcyQOsyBhQt9sujQWSxtmSXaYmZt%2FZ5eloVk9rRivaZ85uGaQTS0ozcbKtnJeQlMm6EYHPYLAH9vh7xxZU%2Fngf5SzYKZvD9ZQW%2BdXO%2FX32T5H6EO57Dv%2FFnki1Fs%2BWu%2F9ovvvZCzAg7rM9YSBUyel7xyZbbLawl4FG54GO3LddXxF4UelgKIBrRzwl2TRlwUSwxvWGy%2FBjB26rrBsWOAG4Q&X-Amz-Signature=5897fe11ff0944a8e183fbee66884c01a6b7e22208779bbc136efb7e53967c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZGKBOF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCRJKpGmW8uckmb8RmwIgU6RoX4Iqt1N3swpLYsyh1qSQIhALD%2BhHQ7Ij6rm3Spf%2BRhyQpYSGcLYLWLj1Y74W0x1tJYKv8DCGMQABoMNjM3NDIzMTgzODA1IgyAo9MUdcOuM%2F%2Fv%2Fwkq3APdQvkRZpuWHvsPd%2BCKAQUC7jpo5AZ1zjTPeTF7N0Qz3p4IgRZMZdqvN9GAc22M2Dkmx49i%2BxF%2BGzCtMVuwfyXvkYN9L%2FgfOtVw6W%2FmnetViTJZRkUNTA2WyIcCapG1vVkF8wWiH8S7cghZpOoULrPJJ12pSHwyCJ7c8PkB8Qy0vshvGYMeBTxtSp83FgOU68qdGKyeAyKGi5ZFBjtgtZZuPRX8MsaCfzv7C7ALwJ0BxBO8fY174Kss5vbIXuUjnpQn2%2Btkr07ucZfbwItJyZO3rrhIaeA%2F66Fwe4rCmd%2FuyhTzZvwHhcgdw7c6m46x0C%2F5j4veoVRn1ddygAWu%2BKyZLWx6hYR2nePZi4nVm6EIa79DS%2Fkj6iwWCmKv8pQNd2QJNIGkwQ6YdmGj3hAhOoV78QIMsjBXq88UIs4gX9RYoaAa6844UnHBfFyd29coIYmfO1c6ZVBdxneqlUF7KlZjMsVg%2BQDOyawzhvctNJDKhrssIPjCGs7%2B66y4tIxblH%2FJutDbscafbiED1xjL2UbkWzNqRXuknlLQw7C6af%2FtGYMNUeY2zg56BwUOOTTuhLZRyPcaqrjKe3cz59aYCAlIdaXtL%2FP5ljEGJgKAbnl9Z%2FbuFmijrt3264bU1zDZwci9BjqkAY%2FSdWcyQOsyBhQt9sujQWSxtmSXaYmZt%2FZ5eloVk9rRivaZ85uGaQTS0ozcbKtnJeQlMm6EYHPYLAH9vh7xxZU%2Fngf5SzYKZvD9ZQW%2BdXO%2FX32T5H6EO57Dv%2FFnki1Fs%2BWu%2F9ovvvZCzAg7rM9YSBUyel7xyZbbLawl4FG54GO3LddXxF4UelgKIBrRzwl2TRlwUSwxvWGy%2FBjB26rrBsWOAG4Q&X-Amz-Signature=abd4fcc555122f9ab92985f4a7359aea0a090ca3e03839ba92245a128eb9b0db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637D6ARTJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEm2RMcEYcdL7PH%2BF38I2OjRqw%2BQuFTZ4KBM%2Fs%2B0iqJcAiBDSPJjn%2B22X59EeYuKUthUoRNpgDl9aijgZKlcHRxXLyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2FrVfQTFMRCd%2BOjkeKtwDnxNhHNAUAcWmA4Kyw4Eq1bDBa2Qx%2BfMNiAHIifutQHgxbWMHouDqZjE2l7%2FuiyaRaVUkWrw0z7XiM1WQJfZ%2Fb%2By1y%2Facpci%2Bxeab4evSpa%2FktV0JKUSTPVqgrhMCvDGa6GXxLZovA%2BHA%2BjXpOl%2BaAycuZNVCL%2BK5voKO2DzIXKqF%2F3ixvNuy%2BCS%2BWXOlqM51WB79p4wasyPaXgks8lrVLKXRWalarPrpn%2BkrI0WsykJhM7dVp9OxZJAQMhtKhx7U75VLd%2BV16xH1yv28wKhrRo%2BE9ONzxHo8dY%2BpYnE1%2ByK%2FZ7pFdU%2BtW08AcOXB8mKOHSlr0b8txm88DZApA7M1jwqWAAycxvPeBw0sby9Ev2OIuHtDbddesEaUo2Ffv4xAne00yNfBVx5v0If0cxhThXcQ3bIoJZZE%2FiKn2Z9ybjclyOGgX8lk3cNuzeuJ2yX2PJdkNZDi6hI7tk9NDxDdacy59GMqTzmrhNnELHeubirP5nr8SRQRZF7DL61hpTRUKIG%2BhMPWli%2FuPfmYh8RZc796FxOfinr%2BGGXlRBqyOv%2BrLQFaOzs9Bqo5W9Z65A%2FilSkPQ2jiJLY6kq9VLlxMkNia%2FjnnFspeGxDdo9OLywkJGW%2FJwqi9mdVxDoUw5MHIvQY6pgHUya2bIDqWalcpAxCZQhAnW%2ByMze9lJj5koj%2FNfOgDz6zrJ7URO9N6BN3W3qekMlrX3fvOeHhu3%2FrJptZETh6aTObIe4TO23TNzMd2UknZxaGSt44hSvdnyzvvyXgQQnY6Aqnd8CrqP4tkOilXckvI3uVAHvZgLN98tZ1CdZ%2FRnGoe6qUxSpKZHUgicekVcl4PExglef53XV2UrWGvIsZF6oC%2BRvFa&X-Amz-Signature=7c4b5010b509cace6cb4619e16f34a93d6fbd148233fb43faa5faca66c06f6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XZRQOH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCDAE4qcsPfTNLMs0MtLsDjLRbqYHQ%2FczMtQ2lYrAQQXgIhANZ6ml96Jy01JtOQGBA7912ryVGsu4V0vNMleaSEP209Kv8DCGMQABoMNjM3NDIzMTgzODA1Igykx3xHh3Ycx2y4Fawq3ANifxhLaEipWyqKbnxy6o1zXLsrNRPvfg3iHEOLT%2B%2BY9y9KoQhWzIn%2BRsLLbNSlDqcRUZayhF4CAgWW%2FBPrwPtupNa2J%2FHDgTfurLrAymRdi7v2W%2BAKKamxR9NwKLII02HpM2SOO3eLnzqg0a5zw80L6K7VSFQ0Xo6FRmaoyGwUbk8ws7ICx1ub16D9GOFfc05DOu0jc2FvkiK3fAfdYPDZDmviFyPW7uENjaVNyVrmnnhn2QerhuTf6Orh0v1l%2FcxtWR9Z6Lw8e1eARpMPNdX6CuJSe2zCpKvoo1Czuv9XRCZkG%2F3GwgeOF98IzcVvcj23BIWChlR6Hg7FlCXldRMpv7saBrUWpfjlBv61wyiA8908tDsyw8%2BGx%2FqksOXx%2BYgb3j0UvGr1kHSXeSWmdymUApforHW8aLEC5hIgVA59sGGLa9E9OyC88NBOUmb5Q%2FdxEtfTsWAUq9m%2FFKDM1gfgoAzkr7lFLxfmdywxiF7LD6S3sjw6%2FoR3XcdY2vewSf%2BfcRRppbRdqnCZL72Va5I8aGwyxsa8ADZPQ6rMm0JkTokrwgWKSFXwXL17yR1Kl4a%2BOeX2d6bQZWix6PiADer6g7uLEH%2BBqNgZSaP261JTFMii5Nzh%2BFzg8WmzhTClwMi9BjqkAVoBUC9HQfQmCrh9SZYGSY3gwyrvDSaVCuz5xCpc7N%2BzhrmcVyQNKUO2c7YrMgsUMRXOI9eZJpn3t4FPt1TBkUW%2Bqz8mqM6lbWlcQDrRBaOREwktrKEPXFKKOCz7JVOhEax08Pqb82ut2SB4vTo%2BZmQQ%2FDnDiDfIEalk9MDyKFyRjsPmb9r%2Fs9F%2BpHu9rTsqn9Yw24CIkSUqB2q%2BRko1apY9ab1R&X-Amz-Signature=b314e85ac42a1d70b1210869d24ebdde2076ec7fddbef597b8368be0db4aa0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZGKBOF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCRJKpGmW8uckmb8RmwIgU6RoX4Iqt1N3swpLYsyh1qSQIhALD%2BhHQ7Ij6rm3Spf%2BRhyQpYSGcLYLWLj1Y74W0x1tJYKv8DCGMQABoMNjM3NDIzMTgzODA1IgyAo9MUdcOuM%2F%2Fv%2Fwkq3APdQvkRZpuWHvsPd%2BCKAQUC7jpo5AZ1zjTPeTF7N0Qz3p4IgRZMZdqvN9GAc22M2Dkmx49i%2BxF%2BGzCtMVuwfyXvkYN9L%2FgfOtVw6W%2FmnetViTJZRkUNTA2WyIcCapG1vVkF8wWiH8S7cghZpOoULrPJJ12pSHwyCJ7c8PkB8Qy0vshvGYMeBTxtSp83FgOU68qdGKyeAyKGi5ZFBjtgtZZuPRX8MsaCfzv7C7ALwJ0BxBO8fY174Kss5vbIXuUjnpQn2%2Btkr07ucZfbwItJyZO3rrhIaeA%2F66Fwe4rCmd%2FuyhTzZvwHhcgdw7c6m46x0C%2F5j4veoVRn1ddygAWu%2BKyZLWx6hYR2nePZi4nVm6EIa79DS%2Fkj6iwWCmKv8pQNd2QJNIGkwQ6YdmGj3hAhOoV78QIMsjBXq88UIs4gX9RYoaAa6844UnHBfFyd29coIYmfO1c6ZVBdxneqlUF7KlZjMsVg%2BQDOyawzhvctNJDKhrssIPjCGs7%2B66y4tIxblH%2FJutDbscafbiED1xjL2UbkWzNqRXuknlLQw7C6af%2FtGYMNUeY2zg56BwUOOTTuhLZRyPcaqrjKe3cz59aYCAlIdaXtL%2FP5ljEGJgKAbnl9Z%2FbuFmijrt3264bU1zDZwci9BjqkAY%2FSdWcyQOsyBhQt9sujQWSxtmSXaYmZt%2FZ5eloVk9rRivaZ85uGaQTS0ozcbKtnJeQlMm6EYHPYLAH9vh7xxZU%2Fngf5SzYKZvD9ZQW%2BdXO%2FX32T5H6EO57Dv%2FFnki1Fs%2BWu%2F9ovvvZCzAg7rM9YSBUyel7xyZbbLawl4FG54GO3LddXxF4UelgKIBrRzwl2TRlwUSwxvWGy%2FBjB26rrBsWOAG4Q&X-Amz-Signature=d0b6e7be6c624855ac986a4071b3d282b5136e5a7cfba09b2ef33e6832849949&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
