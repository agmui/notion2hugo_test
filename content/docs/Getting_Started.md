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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UG3VI3Q%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDjXGlHVVRyQi3l8vu0r5ofX0ywBjrHQRzM0egCsdBSyQIgIvyirZuLIXD8aGWqvU%2FXg9Sd37tIxzUyBFPk01cqYhwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKA%2FzUmVfS723jN6CrcA3S%2BQW49XFEn%2B1XlPJzXT%2BMdPygZjFRjKx9tfbjMHjgqBeaxAbS3M5Z7M1yJXTbN7Csvaw7QBOeg3iqf8SuJW40pzSLV5U0J2pquLf1IDBwmqpX97uLSqaGE6yuz9tpp%2B2nO5hapXvux0FqnpjFlcD2FjEnD9RvR1hm0BSxEJxbdDR2h%2BLUzfJzRh8%2FXsL7dO7XPV%2Fc7HWpnMHhdDjgiIMK%2B6tpwjQJckYfGAN9sOdP5BWzxU9KUHKlFfEANEYvy93bDTzT7vZaRbVxeFiZihkhICcyWbpOjRq6tcXWrfxob5lUPNZNwftwThv8Ud6d6hqADOtMocg%2Fjj9epsRZRzjN7YQSiXYObugZbpziejC9ZHTZB8GOnL9pI8oF7vDHsy5eY1MOdpjnAMs9twtgDxuyeSSxQp1Sm3FxkhrRSzyaYxw4Qfzq49bnS8yEGFYgdrkW1ymC8dbmzwG6m84fMA%2F2OeBOMIZR%2BPBoj83m6krhvRsnrih%2BezyXX8KB7XnB9vDKgZv7ef4xBa22JFx8sfw2M6WFkrTCQSnem4MXE28WX4QjFl8pICAxpJUwXv746WRuH09Trpqp72cICi7I27Xk5nQhaOdQY8WD403Zwyug%2BHd6%2Fj4%2BhTh2zUopGMObPvr4GOqUBA4VXbjspw2TwgYdDrHI5155OIHUC3%2BVzzwpEbnzkRtGzYXyfBvNN2dudobeIlFitNOjL3JAfnPwSiwpsHjaLavsXs0HilXNXYhBCxHX4O2LXvpTYz6nFW8ZVZmoBO9FxzQV7pf6TJIyy2R9d61TIkIXcIFdbCQjhiCDx%2F8qLp0ENTvMBG%2F1xSqWZ9G7Bg3Fp6qsuKfrBwmiaHpa9iI%2BXW7i7jv43&X-Amz-Signature=c6bff7784eaf50c6e3dafc33918a9e9c373a67adb6f9b67825d9601b7d57f2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UG3VI3Q%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDjXGlHVVRyQi3l8vu0r5ofX0ywBjrHQRzM0egCsdBSyQIgIvyirZuLIXD8aGWqvU%2FXg9Sd37tIxzUyBFPk01cqYhwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKA%2FzUmVfS723jN6CrcA3S%2BQW49XFEn%2B1XlPJzXT%2BMdPygZjFRjKx9tfbjMHjgqBeaxAbS3M5Z7M1yJXTbN7Csvaw7QBOeg3iqf8SuJW40pzSLV5U0J2pquLf1IDBwmqpX97uLSqaGE6yuz9tpp%2B2nO5hapXvux0FqnpjFlcD2FjEnD9RvR1hm0BSxEJxbdDR2h%2BLUzfJzRh8%2FXsL7dO7XPV%2Fc7HWpnMHhdDjgiIMK%2B6tpwjQJckYfGAN9sOdP5BWzxU9KUHKlFfEANEYvy93bDTzT7vZaRbVxeFiZihkhICcyWbpOjRq6tcXWrfxob5lUPNZNwftwThv8Ud6d6hqADOtMocg%2Fjj9epsRZRzjN7YQSiXYObugZbpziejC9ZHTZB8GOnL9pI8oF7vDHsy5eY1MOdpjnAMs9twtgDxuyeSSxQp1Sm3FxkhrRSzyaYxw4Qfzq49bnS8yEGFYgdrkW1ymC8dbmzwG6m84fMA%2F2OeBOMIZR%2BPBoj83m6krhvRsnrih%2BezyXX8KB7XnB9vDKgZv7ef4xBa22JFx8sfw2M6WFkrTCQSnem4MXE28WX4QjFl8pICAxpJUwXv746WRuH09Trpqp72cICi7I27Xk5nQhaOdQY8WD403Zwyug%2BHd6%2Fj4%2BhTh2zUopGMObPvr4GOqUBA4VXbjspw2TwgYdDrHI5155OIHUC3%2BVzzwpEbnzkRtGzYXyfBvNN2dudobeIlFitNOjL3JAfnPwSiwpsHjaLavsXs0HilXNXYhBCxHX4O2LXvpTYz6nFW8ZVZmoBO9FxzQV7pf6TJIyy2R9d61TIkIXcIFdbCQjhiCDx%2F8qLp0ENTvMBG%2F1xSqWZ9G7Bg3Fp6qsuKfrBwmiaHpa9iI%2BXW7i7jv43&X-Amz-Signature=dc466f829fe076397636ec58dfcb8250acaddf7a81606a25d56812bfbb737928&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3ZBTTT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHX91vl8RN%2BOmrzOCNY9iCgK9erzy5%2BBVQkCJH9VYIRrAiBahEXS6pOz2xNSDgJv%2B4gO2wBqR1JS4RnE3K9XBcjJyyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImi18li%2Ff%2FF3GBG2KtwDbXgFNnjQM7nnCN4W9fZ21hDputZ76166d7ombDaK0%2FllIqNTHTQf33eS2llmLLXJETaOvb70madWrTfNDLUDXUvMbrN5GKaokgunfvAgDMWRiNZFyjrz1F1oa%2BngWMfMC%2B5UZGdxYq02LrWpbmWOzgoTPNfMiMeJScQths%2F1HzqNeWTN%2BcKtNEldm6mrRpLRI7YIHqbOf1Nf1i6pNZFIYF0zkBcFa698gscUt2UF5c2YqsgFaL45i0i%2B7f%2Bh43T6JeTqzoujX5CtccxUmD6BMipSMQ1rNmHsAecUogtP6kLpHSqnGONlsovpABRdQQHjkfTLS22sBovxaudfLwLvHSaZpolOCKhgj15r%2FLWkeqRckz0NktTwGwP4YGVD43J4qZuMatfIBFvB3f%2FK8gXJOrKXvXvCk79z9fyFggi26Dhu%2BAjcjdy3XJYNCBeFyr7UM%2F%2Bw7AxzIr6aBpLaD35kkaQcSyZ4nHMryTKAAT%2Fb5NC1ZEtHAXmEEMjKeaDx7EJmNOCJZZl%2FoRrVKmiXcy3qtr8TP5gql%2BGeeMvhepeL2i4DWBKckDWRdJnX%2BajUjQ56VgZQBz%2BjitOr3C%2BObVkTfCC6WilV%2B5TU1URkex2cD86lL6CjluDhmryAWFgw%2B8%2B%2BvgY6pgGbzCxCkXAqPkVm0jQZ8lHCldLObnZEfye%2Bsp9gwgJDUW5R9KAa1NAZ1nUZMv5w3jxpkmgUGMVGpEfVjL5wS5hkpUyjJq0Kky9YIgZSPqYGb6A96yyLRttbHdUfwWBVfni5s2sd3HokvJ04ApHsUWwXEaOw85zuzv8YsXe97Mc0bLrqte3c7982lqrrDgvoSfjM4Amh5YoAY08QAwkNMfd0yYpv8glW&X-Amz-Signature=87830a7cd13b83f7614b2fecad38aff2460418a158f19f6135f14160c425ad8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77YYCOM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFVdMbwFqt3ctpx8tqzbOYTag73DnfYD9l9PbLQKIbiiAiEA7xSzaqywprSysx5PML7KQ9F10Akc2oH5BFNJpTuXGP8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNphHjMjLpndWca2DyrcAxWURdtBJpmkZyebgiU6r4xm%2Fjeu1pJuz0VpeAx%2FWUkmUlsM%2FRuRWFuMsuFnYEv4ca9HDmQjuT6rdnN2ebBi%2FxCguW8HVjrs%2BxRTG5oQ4fwGOJWQWqWC46yNisa2dtFbZLKrwgBDvcROsTCNSXl6Ynb9522j%2FxSFlS1HON13Fb14m26xWQUmLF9qKILiYMftPnuJLERIFq9PSwAo%2FmewoSoFg%2FU0yRgnyNa3SCU5MrWkZvta2pEnSG9wyi5qIu1YvsXYcKgOSJb2PyPV1LBtI7al7bPnM%2BNsg8vIwANBeyKlS%2BFA%2BsRK%2BWAbb9rAEI6JLYKyUbQR%2FmM8RdPKisQ8fdtG2y04hX%2F824wDBXUeGhtwMF99Bx1y%2B2QQBOgdYUpGPIBTj9qXCDt%2F8inqlqWgqdzPbd%2FwNhIv6ktZjDY0Qc0V14WDAJix9WZ5NVJbNmuYkr3CjmAsYp5NwIRPNMeqfzusgbaXp0lJm18QkA0%2FmrKAJ3ut1z5Ikh6PSJ5X%2BhTzu9DpmzZCoeWTe9bbgJofjfoq6TwcfRnq5dUWpzJWr7XG4HRwHSjcsPi492d1jhvZ0VJatlNJq%2BP9T9CJx8s5wyeMpnPBxiK69FNmt7a3RoQxCCQh93XVwWRvD4t%2BMOLPvr4GOqUBD%2FqzQWF6ZfwBplg7oYORxPRkACQJH9ZQ8U4MDRMMJbYSsdQnRxbfB0HN0cJR42nG%2BGek9vg%2Fb6EX%2FGI7VtCCAkBGFHI1rpE5FGtqDOT7dIxI3j1796MFH7vS3ZCLmbFoMUs0et91M39QTY%2B7Yg5IHYnIi9uZszIcATlb0g%2F5mzLmBnmhe9Q34I6in0V33JnxwZHvwdrm8KyD8lqhWacle%2BpQhf2w&X-Amz-Signature=b53336cea966a3ab703889440259f582cd6b96ee0f319ccae90bc0126c8bcb66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UG3VI3Q%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDjXGlHVVRyQi3l8vu0r5ofX0ywBjrHQRzM0egCsdBSyQIgIvyirZuLIXD8aGWqvU%2FXg9Sd37tIxzUyBFPk01cqYhwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKA%2FzUmVfS723jN6CrcA3S%2BQW49XFEn%2B1XlPJzXT%2BMdPygZjFRjKx9tfbjMHjgqBeaxAbS3M5Z7M1yJXTbN7Csvaw7QBOeg3iqf8SuJW40pzSLV5U0J2pquLf1IDBwmqpX97uLSqaGE6yuz9tpp%2B2nO5hapXvux0FqnpjFlcD2FjEnD9RvR1hm0BSxEJxbdDR2h%2BLUzfJzRh8%2FXsL7dO7XPV%2Fc7HWpnMHhdDjgiIMK%2B6tpwjQJckYfGAN9sOdP5BWzxU9KUHKlFfEANEYvy93bDTzT7vZaRbVxeFiZihkhICcyWbpOjRq6tcXWrfxob5lUPNZNwftwThv8Ud6d6hqADOtMocg%2Fjj9epsRZRzjN7YQSiXYObugZbpziejC9ZHTZB8GOnL9pI8oF7vDHsy5eY1MOdpjnAMs9twtgDxuyeSSxQp1Sm3FxkhrRSzyaYxw4Qfzq49bnS8yEGFYgdrkW1ymC8dbmzwG6m84fMA%2F2OeBOMIZR%2BPBoj83m6krhvRsnrih%2BezyXX8KB7XnB9vDKgZv7ef4xBa22JFx8sfw2M6WFkrTCQSnem4MXE28WX4QjFl8pICAxpJUwXv746WRuH09Trpqp72cICi7I27Xk5nQhaOdQY8WD403Zwyug%2BHd6%2Fj4%2BhTh2zUopGMObPvr4GOqUBA4VXbjspw2TwgYdDrHI5155OIHUC3%2BVzzwpEbnzkRtGzYXyfBvNN2dudobeIlFitNOjL3JAfnPwSiwpsHjaLavsXs0HilXNXYhBCxHX4O2LXvpTYz6nFW8ZVZmoBO9FxzQV7pf6TJIyy2R9d61TIkIXcIFdbCQjhiCDx%2F8qLp0ENTvMBG%2F1xSqWZ9G7Bg3Fp6qsuKfrBwmiaHpa9iI%2BXW7i7jv43&X-Amz-Signature=97b749a44f2a570b94d97323180045f3ff901610d6d842192395f45989413555&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
