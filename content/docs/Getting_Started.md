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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX7PCWS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGG%2F5S5HTrKOxEBxLYmkmOd%2FxXcF1OJ9%2FFWCjGUufBUBAiEA7A9CqgarIHQLCmWYmrORkqNzIaPXm6Q6NSKE5nFEvbwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPeyEs6NM8pysPpq%2FCrcAyUxy8gZEnCU%2FJsjY6AKQN7ucaPoUsYKjhZGhhQ%2FtFHllxj3X6SIvhMdTEGK6Qhshm3B7KuiwuRY74gKaAeRsMK%2Froce4xsXffgTyNmrad5zWWka1Sk3Q%2FbwsuLrOCfcYTm3Aybs2EMjiYff0%2FubtWWjgLFeQMDQ77ZYC1RPdN7NfZbp2d%2FKd%2Fv%2FB5T1bv9Zm50uzb7rleicIoqWqtlNsIW0SqyRR0aa33vm2ZWKZJp9gzF0ZaFUx5pyEHZGaX5CGsQdofpKnEpXj82C9b6lGk5H9VtUIcNJSaBVX%2BPTRHCjK%2BctehO8K85t7efmutQOj%2FX4%2Bj9R2md5qIyYyUHuDk%2BjAVc7Oh40pq8tnDywqf31pYH3QtIT74mJdkzMkR1y7YAyolRmOQ7FyQJhb6S8ZYtIKqHqay0EHUtOvDiV5KC8kpyN4XSlXYaaCtoIlZxnxgR0ckwcqjnZTuXIKnLJaLtr3e9%2FfpuXCb%2BgpHPHOxAqJ3bgrUG1mxjr2k7t6MNB77LgQPQKd3%2BDRdYfZTLkjMOiAmQh8bjQmun%2B5JENb98UjU0IGgKUrfRZQcfKIpSWei3h8i8sqqSFgdubJ1wErdwI48avR20sAt8zY9gx0ZsbkgPTvnoEywiQj7NoMP6MmL0GOqUBZnycLx5uVyWVlAgb9Tq41do9qvRF98pihts%2FT%2Fm0i8Suk21rQGjtfj3%2FdZJx36u7hYWoXhAFbkOqCwoMs4Dp39mSvLT5hw%2BeM8fj4hgyICeF65PGszw998D%2BTQcpStoL6d45dAxTEwu7tmFIoVgGY2BlOWnWHN5LkHQ97hGP5CU%2Be5Vqu92QpFQUpaT3yL86aXiCQFAV7bUKGl3PwrBDJGiUBbHN&X-Amz-Signature=842fba0b3a078184b7db28e7a539123a7ae0f19fc8b4b9098e74300bf9995bae&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX7PCWS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGG%2F5S5HTrKOxEBxLYmkmOd%2FxXcF1OJ9%2FFWCjGUufBUBAiEA7A9CqgarIHQLCmWYmrORkqNzIaPXm6Q6NSKE5nFEvbwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPeyEs6NM8pysPpq%2FCrcAyUxy8gZEnCU%2FJsjY6AKQN7ucaPoUsYKjhZGhhQ%2FtFHllxj3X6SIvhMdTEGK6Qhshm3B7KuiwuRY74gKaAeRsMK%2Froce4xsXffgTyNmrad5zWWka1Sk3Q%2FbwsuLrOCfcYTm3Aybs2EMjiYff0%2FubtWWjgLFeQMDQ77ZYC1RPdN7NfZbp2d%2FKd%2Fv%2FB5T1bv9Zm50uzb7rleicIoqWqtlNsIW0SqyRR0aa33vm2ZWKZJp9gzF0ZaFUx5pyEHZGaX5CGsQdofpKnEpXj82C9b6lGk5H9VtUIcNJSaBVX%2BPTRHCjK%2BctehO8K85t7efmutQOj%2FX4%2Bj9R2md5qIyYyUHuDk%2BjAVc7Oh40pq8tnDywqf31pYH3QtIT74mJdkzMkR1y7YAyolRmOQ7FyQJhb6S8ZYtIKqHqay0EHUtOvDiV5KC8kpyN4XSlXYaaCtoIlZxnxgR0ckwcqjnZTuXIKnLJaLtr3e9%2FfpuXCb%2BgpHPHOxAqJ3bgrUG1mxjr2k7t6MNB77LgQPQKd3%2BDRdYfZTLkjMOiAmQh8bjQmun%2B5JENb98UjU0IGgKUrfRZQcfKIpSWei3h8i8sqqSFgdubJ1wErdwI48avR20sAt8zY9gx0ZsbkgPTvnoEywiQj7NoMP6MmL0GOqUBZnycLx5uVyWVlAgb9Tq41do9qvRF98pihts%2FT%2Fm0i8Suk21rQGjtfj3%2FdZJx36u7hYWoXhAFbkOqCwoMs4Dp39mSvLT5hw%2BeM8fj4hgyICeF65PGszw998D%2BTQcpStoL6d45dAxTEwu7tmFIoVgGY2BlOWnWHN5LkHQ97hGP5CU%2Be5Vqu92QpFQUpaT3yL86aXiCQFAV7bUKGl3PwrBDJGiUBbHN&X-Amz-Signature=2c80d9b7b79cff7de12f21e425e3ac7305318faf9232747f2483c0563289e2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5IJOOOU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDSPeMZ4qu1ALexJKdL1Sx3k8NYhxy23dXi9Y4Co%2F7dKgIgdZtpsw3tpKbUb%2B1zmwImMqCphJ0AKzx28983OOrcvbkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNc5RRF9oDdQxmXlcCrcAwKnHGpphELVfIc51dIz8yYXx5MCKNst0Wx1hagw7AuKRvF8W5pUjwvXezrJd1tJG1kkAMaOVnCA8qboWZVQdUhElCoG0ed8Y3fYiWoVawZPSJcVYQu9KvpImkQ6TqhKrBDrZin6rLpM25NKWoJC0juYUrGitYO0W9ZYaecRnV9E0TNBG2ewZE3iXJ0dYp%2FZDImFZGLdCf4%2BYoWPTEHrVXUBlDz%2FK2sU4yhhuqF3i5QEOhlGE3TgLRwpyq0YPKvWhYdl%2FyXPzP6fXWtj8GfTkpxOBF44PNqT27BssLZii4oFVcmsQcBoyl8l4xRBgy3bf9J7H%2FrBwEir7v2yQRJqoByDB2NSUOUSD1tulvVL9aLK4d2IQ42W0RcOP3Wh2uAOF2wrARRhhsVLpqkSjDY%2FCubWgmlY4p%2B7WNOLelmZ57IGFPAwu7AOs1VmE8Z1aPw0HXmZCO70SkQ5AztxG0Qt0aM145zvaM7n3gu4MSDW4JATFUEN7NVusF2H2B%2B%2FGh8MQq8dAdCBRMhygwBu30M4aaQ%2BakqRU6hZ6SCL9Wl5uAM%2BZXnNYcZfR4x11kIcTwoqqEmU50t6FBgwkALiKPJsd7tVhp%2FZ9MLNxwIctq3NiXW71jZRI6jS7Oxrm7cdMJOMmL0GOqUBlX%2FoUMObKninZSl0MEvNH6Vkb8%2FSEu6StAPsSjtA6O7xoavY5Ud63MrNsRKuQambtAuiGfocBohEMS8ALyTLHUdYcXkTJqX47%2FQs5RZPWhP3IfNH57DIbLShX%2B29W0x0WD8bMfga2i7Y0csP6eyklOV6NR92lhnSjK8F0SYuzUQcQUHaxCiBfVVkV9DdRbPl1pNLofh%2FjjReX6ezhpBGSuIgfobs&X-Amz-Signature=5f812768b698b8ed6997bd716d9693ce35641f6efbdbcb46c01aea54a7c72378&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DH7Y3SC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDt1wYLRzpdrij1mX4ww%2BfmiQTxJtGDxrQ2Qep%2FRlMd2wIhAJ5qV7IaVxBAJxmKJOryPhFcLD%2BSE8jnkt9rT9RPclJWKv8DCHYQABoMNjM3NDIzMTgzODA1Igz8%2FT6yC%2BmlWJuWvG8q3APp2Ns16lNcONLa%2BfvI7khorrCuCLDFabylcQa0lqkCm8DVViPBh9C6O1O1VXBIH9HTMhYxExJ3MNHnk%2Bo06Jhlr7MZblD65kcKv18hWmbAXMu4j0T%2BghxAsL6mzMrNwHTH0I2cYf%2BqyoKa5%2FILhCij037kVGsIZZIavyEarDxSvY26g7Yo%2BVgJuuCXN7JdGfQpmA9ONBcp2HHGPoTj11ay%2FRKgQtJrgm4ha7oE9DBdJPg9XiI67kGvJGS4Z2pVl8ee8e7TqrCPK%2F82%2FkWXDbeYfP8E5h3Sa7izkPBngsqckalzN2PZgV6CRytTlRiDLsg4BH17E9pvwjOWRu8AxLblUxPMf1qI5o%2F81AbgD2p099Ror6R03bFlEZGUa1lW8Di3wqH8R6pqft%2FX3Ecxkn52XFlQiw6G%2Buny1Tjl5AOdqjsMdh8ZY%2FYbFvZAsgpTy%2B9SVv4p%2FTq9rvPm6rF3RqNh3reI0z420K3GvpWW92sDbXQ4KO7fMNrtHTxOz99yg0GHikRQ%2BzSnQCA4h1Ja5HbHg34D3fII%2BokXfCXkNOY%2FLwt6IBlDDH7LtzgodPzs3IrSAl9fsTFoyZKmGgjzINPOgfsHozKIGr8lus8t28AC0usTizi7I5WZUns36DCyjJi9BjqkAfG7Bh8%2FHkmJp8nP7azB%2FM8%2Fj1ESens31vY7IJK6vpDXxOETd80Pjo1rtqkMYuzPPudeV0XEuFxeuMBY%2Bf3BormtcQNLLuoI2g%2FMpdmAk%2BeI%2BZUqdCsgwdPlLAgDfrbyiGJcil2Unxb8wpktTRnYddBqPhDbBBUmQMxvcZzmYde5%2BTxXDktGs9zFm9HadmzNQCHsq%2FNO951T38hJw0yoWGdTR8Zc&X-Amz-Signature=9f6606b9eb1610984547832a72159f6088c8fc2d96a5d2d6a793c6a5a9e3b59e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BX7PCWS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGG%2F5S5HTrKOxEBxLYmkmOd%2FxXcF1OJ9%2FFWCjGUufBUBAiEA7A9CqgarIHQLCmWYmrORkqNzIaPXm6Q6NSKE5nFEvbwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPeyEs6NM8pysPpq%2FCrcAyUxy8gZEnCU%2FJsjY6AKQN7ucaPoUsYKjhZGhhQ%2FtFHllxj3X6SIvhMdTEGK6Qhshm3B7KuiwuRY74gKaAeRsMK%2Froce4xsXffgTyNmrad5zWWka1Sk3Q%2FbwsuLrOCfcYTm3Aybs2EMjiYff0%2FubtWWjgLFeQMDQ77ZYC1RPdN7NfZbp2d%2FKd%2Fv%2FB5T1bv9Zm50uzb7rleicIoqWqtlNsIW0SqyRR0aa33vm2ZWKZJp9gzF0ZaFUx5pyEHZGaX5CGsQdofpKnEpXj82C9b6lGk5H9VtUIcNJSaBVX%2BPTRHCjK%2BctehO8K85t7efmutQOj%2FX4%2Bj9R2md5qIyYyUHuDk%2BjAVc7Oh40pq8tnDywqf31pYH3QtIT74mJdkzMkR1y7YAyolRmOQ7FyQJhb6S8ZYtIKqHqay0EHUtOvDiV5KC8kpyN4XSlXYaaCtoIlZxnxgR0ckwcqjnZTuXIKnLJaLtr3e9%2FfpuXCb%2BgpHPHOxAqJ3bgrUG1mxjr2k7t6MNB77LgQPQKd3%2BDRdYfZTLkjMOiAmQh8bjQmun%2B5JENb98UjU0IGgKUrfRZQcfKIpSWei3h8i8sqqSFgdubJ1wErdwI48avR20sAt8zY9gx0ZsbkgPTvnoEywiQj7NoMP6MmL0GOqUBZnycLx5uVyWVlAgb9Tq41do9qvRF98pihts%2FT%2Fm0i8Suk21rQGjtfj3%2FdZJx36u7hYWoXhAFbkOqCwoMs4Dp39mSvLT5hw%2BeM8fj4hgyICeF65PGszw998D%2BTQcpStoL6d45dAxTEwu7tmFIoVgGY2BlOWnWHN5LkHQ97hGP5CU%2Be5Vqu92QpFQUpaT3yL86aXiCQFAV7bUKGl3PwrBDJGiUBbHN&X-Amz-Signature=6a693f11188f94ce93ab3de4ccf864a5f6c896d39004260f5f5c382a176816e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
