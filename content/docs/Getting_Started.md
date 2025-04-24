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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6GAXGQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY4Ivz%2F2OKewwbLNZFANcPCr7GJI6ryupOW2EcG6PtCAiBrC6YRwwqOJBDcXACzMy2tmD1j%2BPlJ7CuCUIkz0QvuCir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM7ZXH70lkrra3EezTKtwDCSOpcFgQffUNp3nkM1KaLAL6pVlzR3GL4BK1wcIVn5NLORYMKjtA1VBN8ReUee7x0gnsZcOXSVGPd%2By1YoMUofHgcBhiLDGwNG4wFojYTJ7Wo3J%2FXbWIPZlsyUp8z2CWhE9K9oHhEgI6%2Bwrgs10NoZJ0obkb1Y%2B1Lf6KQLmyIrh%2Fvyt2p2u9YVV5%2FOJ3V7NnS5iPXabtvdwLaqAO4oBMWJWNJWXy0PJ2bdr%2FZ5y6KiJZScA8MNsKtZS7zOzgU5ruAG0y48%2Bjt6lo7x8niEXq7USbFKwBqmU8hE2PAd4azo%2Fb7%2FcaAbS6kFW2U9OnI2zU9Wo%2Fkl6S7owVTg8ryri%2BRza27HCdf8GvgAgHhcW7B0lZfvTcKGcV0yf8OynLShjjlatI1qJeUXkZGoFXXEl2b48bD%2FVRh1YT9Ylmr4oMF9eJSs2vtXXjeJJ7beoIFzUiSdT%2FED4%2Fc5VEW3hTWegVhsTUQ1Xm6mqmstTZ%2FUxVL2sd0BEZeZ%2BA3zByY4xUWDBowY7Uel6i8fFl337BvXbmiJ%2BL7%2BvzpSUZchDK1vnBIZ3a8%2BOPVzwqrcvqNpQNQMgDpcvIZohAFs%2BZOJ1pvP9GWJB2OlJ9fDv2oPxwrCaOtQ%2B8k2As7V7Dsnehq9UwmMCqwAY6pgEHBBqeaf5oP0Vun8myAATt2MCk6tplQhaUaW8xQw%2FuOeuGq%2FCXRODrun%2FKa76Ixeh8QE%2FSs0CCO1jOvbsEB4xe9U3uTkXZJ6IhJMYe6sma67dd9GjP9sPDQ8AFKTnRMeSyaQBUn6uWzHjOtaBKs29tF9%2FgR3uMN%2BbpJcwTwlRzkh5cBBy2NCTZTsfG4rKhddBPZoYTAmAYEGGHpVURbhDWeM7dEMAW&X-Amz-Signature=780ddffe2909116bc3bd3d666941ec7378706bc6f70bd01f986857bef348378a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6GAXGQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY4Ivz%2F2OKewwbLNZFANcPCr7GJI6ryupOW2EcG6PtCAiBrC6YRwwqOJBDcXACzMy2tmD1j%2BPlJ7CuCUIkz0QvuCir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM7ZXH70lkrra3EezTKtwDCSOpcFgQffUNp3nkM1KaLAL6pVlzR3GL4BK1wcIVn5NLORYMKjtA1VBN8ReUee7x0gnsZcOXSVGPd%2By1YoMUofHgcBhiLDGwNG4wFojYTJ7Wo3J%2FXbWIPZlsyUp8z2CWhE9K9oHhEgI6%2Bwrgs10NoZJ0obkb1Y%2B1Lf6KQLmyIrh%2Fvyt2p2u9YVV5%2FOJ3V7NnS5iPXabtvdwLaqAO4oBMWJWNJWXy0PJ2bdr%2FZ5y6KiJZScA8MNsKtZS7zOzgU5ruAG0y48%2Bjt6lo7x8niEXq7USbFKwBqmU8hE2PAd4azo%2Fb7%2FcaAbS6kFW2U9OnI2zU9Wo%2Fkl6S7owVTg8ryri%2BRza27HCdf8GvgAgHhcW7B0lZfvTcKGcV0yf8OynLShjjlatI1qJeUXkZGoFXXEl2b48bD%2FVRh1YT9Ylmr4oMF9eJSs2vtXXjeJJ7beoIFzUiSdT%2FED4%2Fc5VEW3hTWegVhsTUQ1Xm6mqmstTZ%2FUxVL2sd0BEZeZ%2BA3zByY4xUWDBowY7Uel6i8fFl337BvXbmiJ%2BL7%2BvzpSUZchDK1vnBIZ3a8%2BOPVzwqrcvqNpQNQMgDpcvIZohAFs%2BZOJ1pvP9GWJB2OlJ9fDv2oPxwrCaOtQ%2B8k2As7V7Dsnehq9UwmMCqwAY6pgEHBBqeaf5oP0Vun8myAATt2MCk6tplQhaUaW8xQw%2FuOeuGq%2FCXRODrun%2FKa76Ixeh8QE%2FSs0CCO1jOvbsEB4xe9U3uTkXZJ6IhJMYe6sma67dd9GjP9sPDQ8AFKTnRMeSyaQBUn6uWzHjOtaBKs29tF9%2FgR3uMN%2BbpJcwTwlRzkh5cBBy2NCTZTsfG4rKhddBPZoYTAmAYEGGHpVURbhDWeM7dEMAW&X-Amz-Signature=cd8afc279dacf607b836ce3c0ec7c1c865e2ea8b34d345b51bdec8fee3761698&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75IALFU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYs51tSaC3XZQSThQ5s53SwlBFKfQsQaCDNXc3HPVvcQIhAORlDpHHVlZm7zszwUK3XtYmASZ3kXOBXOksRNxu4rmsKv8DCB4QABoMNjM3NDIzMTgzODA1Igybk%2BSgpLSRvU8X%2FSsq3AMNwt0BJVb3FyDGXcfY0CHrm%2B6HdvpRAFF8TGSsL%2Fnm0CDIhMf6vJGEKl4%2BPP6F%2Fa8xMOnxycd9p%2B%2Fkw9EuUwCeoGkhRmVwh62m%2Bll0tI0IpLaJKLSYAQ4nvuhEHnZBWh3iJWNitSRo4qQbzk7c7iVcuQsOjX85RzOo9BAPNMrC0zv1jPIJYb6WEymwttRqWNn3h%2F2flUMewdNtEbfADm5iLBN1sG5AwDul34WU3qNrKPfyNGewm9VsBMX%2BXCDU8q4cnvfqaMSal%2BT8KVQ1bqBKWzhI6iuGxpKr8%2Fr9va9JgR7bLQlN77k5k0tOl3Ph5TNkUZ6VkkJoe4nPhxqnG9Y6ktIEWg3R3GH4Mo7sWUdI4ZulfzUyBON5n%2BOz6cm3gnkC9UMBWYl1ZFSoWGrkOPcoBQticVxeb9sfDPgZ%2FTTQMrk48DAYS6gVrfJSEsrNA2QMcFV9uS8DoQNFXia3tUDTfyxSwxlvBiVqfzVM6K8evFb1FVvdEXkFi9I5%2B4JQvyRWKYCyLrZxicdBMKotqVXe0kQBR2Amx917fjbs36SxyQwZNMjXtq%2BhW7AXIaK0fS%2BemH3k7jqNUBTd8cTAv3Z%2BzqkgC8KoB87VhZw%2BQu8SUPOlZQzdi%2B%2Fwu4%2BsnzDyv6rABjqkAdmnkudVedHBrqdbKa%2FV3qZkEVh%2BCzUpBznGz3iZMqJ2LyZ5jlijOO62gtuFtOQ3FvWpY9957vFxXyCNtWsZo3Y3gJr5fTGmg9Jnez16A8g3SfN0AwTG5MYihqZZMPFTQ7%2FtYSARA6cKvQYsVBsbGG4S8M5II%2B5c68dVKkVHy%2F5bIpGnB9Dj9aBHvbWc9Fi9y3TDj9HfcWpHp%2FX4CjlzX3wpsPBj&X-Amz-Signature=b365dda5d912290b776a807cf12d2377ca50564716fbd7b8b010eda28a8a1d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GWBAGPC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID28UgbGN2TTvXydBJfyaJb2aMyjBWUrQIiIu1DBi2wwAiEAjkgCTGWMLL8csRLwQDWffFy3U0%2FXRpPJGbFuJ6X9jN0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDC06m9okn4KUR1T0gCrcA3k%2F%2FFDh%2BVpOmzpEl3FY76ayq1CDIuwHAESI9QzYlwAWippv%2F8y6dT7UDZ2D2nxyebeqWtSLNWKs%2FOwADjvYCGZ7%2FWWL0BUBFs4g%2BiM%2BG66aXUfCJXts%2FGWYlnHbGji%2Bwqh3ot5Lq4%2B66KSGlJmAGz7naEkV8lNuq94EaSE86w4IfPeOJwFmfUfYAY0n9Nv65lol89818eAPjbRfUIJsp0Yzu%2FoHPmjAM4Treo51JlYH4ztHLTFoyCnYt56%2BdZ870GdJ5yAv56uvlcfaLhASedt%2BoX48JYSHyQm35neXN6rV37b0zH3BHS2hC9BAgEAFKpadC5gPPcgCxnY%2BsVkNfsMz2viYBSaOvwIUn8ExACIDuLMlN8OwWErlgJtsO63ZxiYduz5tes8qT20DGnJq9PDcQfdJKavwaVG%2BpnYy0hMHAr74c%2F7oASbeDn4TZ0dzemcqrj%2BMj6jwtJefprg5Sux%2FIJkBY6dNhZFfcz0dR%2BPx444UrFQQ%2FTYd1a%2BR3goCizFYBpsUC%2FSix%2F2v%2FCd6wZ8j%2FGXc2AtNum5LTXzBlbiizfgHdUt1AQnTXkVKuXi5ZmsHlqTxGNxK5RdltkLehGvB3BaICJckFoMw4SEWB4Dh%2BGnRIBN3levbAsn6MNTAqsAGOqUBGJgwpvD2OrMkBjHIMRjBLpyG4mZpvyTNv0TGD1Q6o%2BUi123UkJOXWFpzNbg5IN7xmQUSdxCFy2PeVrxLgE931Apcx1H2kITaKj0CC4W3M5R9AZyKR%2FTqXe%2FfzBp3809moE5oMOSDsHl7%2BJ1ig2LlTWdqmTM3rLipHPZvGAVkAcM%2FU0hyy1aGjtMxt9fs8gq8Xqze6AhjPFtb1a4pHuX7SCdPPfyP&X-Amz-Signature=d833aecefca751766a15f9bbc3840b1986dcd39b80ec969e306e7d36566fdb12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6GAXGQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY4Ivz%2F2OKewwbLNZFANcPCr7GJI6ryupOW2EcG6PtCAiBrC6YRwwqOJBDcXACzMy2tmD1j%2BPlJ7CuCUIkz0QvuCir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM7ZXH70lkrra3EezTKtwDCSOpcFgQffUNp3nkM1KaLAL6pVlzR3GL4BK1wcIVn5NLORYMKjtA1VBN8ReUee7x0gnsZcOXSVGPd%2By1YoMUofHgcBhiLDGwNG4wFojYTJ7Wo3J%2FXbWIPZlsyUp8z2CWhE9K9oHhEgI6%2Bwrgs10NoZJ0obkb1Y%2B1Lf6KQLmyIrh%2Fvyt2p2u9YVV5%2FOJ3V7NnS5iPXabtvdwLaqAO4oBMWJWNJWXy0PJ2bdr%2FZ5y6KiJZScA8MNsKtZS7zOzgU5ruAG0y48%2Bjt6lo7x8niEXq7USbFKwBqmU8hE2PAd4azo%2Fb7%2FcaAbS6kFW2U9OnI2zU9Wo%2Fkl6S7owVTg8ryri%2BRza27HCdf8GvgAgHhcW7B0lZfvTcKGcV0yf8OynLShjjlatI1qJeUXkZGoFXXEl2b48bD%2FVRh1YT9Ylmr4oMF9eJSs2vtXXjeJJ7beoIFzUiSdT%2FED4%2Fc5VEW3hTWegVhsTUQ1Xm6mqmstTZ%2FUxVL2sd0BEZeZ%2BA3zByY4xUWDBowY7Uel6i8fFl337BvXbmiJ%2BL7%2BvzpSUZchDK1vnBIZ3a8%2BOPVzwqrcvqNpQNQMgDpcvIZohAFs%2BZOJ1pvP9GWJB2OlJ9fDv2oPxwrCaOtQ%2B8k2As7V7Dsnehq9UwmMCqwAY6pgEHBBqeaf5oP0Vun8myAATt2MCk6tplQhaUaW8xQw%2FuOeuGq%2FCXRODrun%2FKa76Ixeh8QE%2FSs0CCO1jOvbsEB4xe9U3uTkXZJ6IhJMYe6sma67dd9GjP9sPDQ8AFKTnRMeSyaQBUn6uWzHjOtaBKs29tF9%2FgR3uMN%2BbpJcwTwlRzkh5cBBy2NCTZTsfG4rKhddBPZoYTAmAYEGGHpVURbhDWeM7dEMAW&X-Amz-Signature=84f440178afcf429f3f8234da00caafccf19e3f93d1af65e8338233b889443e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
