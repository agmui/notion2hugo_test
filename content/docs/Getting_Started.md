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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJUEDMH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FkoRYo1ZXRnOmpj%2FLq4gLa3nqOrTJNz8sRBgR3PKLyAiA9Obu4K8h0sVS4HN%2FWHZ0wbbr0tM4t5Q0%2F%2BGp8A2wPSyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiRXfcrX1y9NB1JPKtwDtOIwQ%2FVPU7MlexV7w6zMTxh%2Bx7T5GjoTRmV914e8UajjnC%2BPNOZhF3jF7JcYLap9pc6kgpiUfcPnTxsTFbcTBx3g7eRxu5ZH4OXfJPXi8VTQeK%2BhSjw9KkSSWRdZS90hd3OSWz2MfBk7Y193Cd%2Fd4YHiin1xjlBUC34GIitBU6DgrXr5OgOA%2B6G3qDdOIoFFZWJPT7BhB3QLOWRQsx%2FEzXvPHnTCRMOpQmSMqWB8XjGiQCDdOjN5ZVkh7Y1JkMDyjizZw0Q8sVs5BKLtGz1hPlI2JTgjYqXLqb6oqu9usgA393OKTgSok1LkVOdZYM%2FkF7eIO4EBAOlo5tI468fExXvLmf868i6fCpAtHM8LvXTxOfNJP02xP1u80vyIZKxCnaATk9Jx6eREsnt9TX2PfklJyRYIzRtgZ80tCsYPKeg%2Fwo1yUkO3qNdLLICvI8eMUH%2BVv%2F02Ri%2F7vwrYmv6ej1DaS4rtl1bHEKQqvHysQX0MszPSznkWg7Jv%2FzEa94vYi3%2BuciMpW2LNDw4omRIgNUTJvf3ttNOkeEj9CikRlqPJCEJlNwOQtaITyta1wakwgzS%2B1KhjN3xirEfto7frCYsFqtEVUtBJQQLKE%2BNm8qBEDj%2B3mbNWgeUDl3kw0tK4wwY6pgHgZ1WMl6nRMrGH4QWwqwlGAlxf%2BQ1Ci6LBFL%2BXh6ZMAMk69olY3WdKx2awLIgkLgbreJVJUMknS5F4NJgbuoAQFQrrAqE17pii%2Bx%2FDcm52LQSspmOmAdSotpK47LtUIYpO7hbSfDRrBEsm8O7wE%2BRMPjE8%2FpMKOqWvAw1ag53QPfVZDgzHVrS8eFk0F4zyD8NwEqS28AdY36LXkuvYxbeZk6zxocaR&X-Amz-Signature=091b42004badc2e8af3ed0f55310dde4dca4a7a5c16f92c88587db5f28599b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJUEDMH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FkoRYo1ZXRnOmpj%2FLq4gLa3nqOrTJNz8sRBgR3PKLyAiA9Obu4K8h0sVS4HN%2FWHZ0wbbr0tM4t5Q0%2F%2BGp8A2wPSyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiRXfcrX1y9NB1JPKtwDtOIwQ%2FVPU7MlexV7w6zMTxh%2Bx7T5GjoTRmV914e8UajjnC%2BPNOZhF3jF7JcYLap9pc6kgpiUfcPnTxsTFbcTBx3g7eRxu5ZH4OXfJPXi8VTQeK%2BhSjw9KkSSWRdZS90hd3OSWz2MfBk7Y193Cd%2Fd4YHiin1xjlBUC34GIitBU6DgrXr5OgOA%2B6G3qDdOIoFFZWJPT7BhB3QLOWRQsx%2FEzXvPHnTCRMOpQmSMqWB8XjGiQCDdOjN5ZVkh7Y1JkMDyjizZw0Q8sVs5BKLtGz1hPlI2JTgjYqXLqb6oqu9usgA393OKTgSok1LkVOdZYM%2FkF7eIO4EBAOlo5tI468fExXvLmf868i6fCpAtHM8LvXTxOfNJP02xP1u80vyIZKxCnaATk9Jx6eREsnt9TX2PfklJyRYIzRtgZ80tCsYPKeg%2Fwo1yUkO3qNdLLICvI8eMUH%2BVv%2F02Ri%2F7vwrYmv6ej1DaS4rtl1bHEKQqvHysQX0MszPSznkWg7Jv%2FzEa94vYi3%2BuciMpW2LNDw4omRIgNUTJvf3ttNOkeEj9CikRlqPJCEJlNwOQtaITyta1wakwgzS%2B1KhjN3xirEfto7frCYsFqtEVUtBJQQLKE%2BNm8qBEDj%2B3mbNWgeUDl3kw0tK4wwY6pgHgZ1WMl6nRMrGH4QWwqwlGAlxf%2BQ1Ci6LBFL%2BXh6ZMAMk69olY3WdKx2awLIgkLgbreJVJUMknS5F4NJgbuoAQFQrrAqE17pii%2Bx%2FDcm52LQSspmOmAdSotpK47LtUIYpO7hbSfDRrBEsm8O7wE%2BRMPjE8%2FpMKOqWvAw1ag53QPfVZDgzHVrS8eFk0F4zyD8NwEqS28AdY36LXkuvYxbeZk6zxocaR&X-Amz-Signature=6be71b9fb0f595c34fd2fe99c0fabd7d14a278447f07891c3570ae56a4fea648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJUEDMH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FkoRYo1ZXRnOmpj%2FLq4gLa3nqOrTJNz8sRBgR3PKLyAiA9Obu4K8h0sVS4HN%2FWHZ0wbbr0tM4t5Q0%2F%2BGp8A2wPSyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiRXfcrX1y9NB1JPKtwDtOIwQ%2FVPU7MlexV7w6zMTxh%2Bx7T5GjoTRmV914e8UajjnC%2BPNOZhF3jF7JcYLap9pc6kgpiUfcPnTxsTFbcTBx3g7eRxu5ZH4OXfJPXi8VTQeK%2BhSjw9KkSSWRdZS90hd3OSWz2MfBk7Y193Cd%2Fd4YHiin1xjlBUC34GIitBU6DgrXr5OgOA%2B6G3qDdOIoFFZWJPT7BhB3QLOWRQsx%2FEzXvPHnTCRMOpQmSMqWB8XjGiQCDdOjN5ZVkh7Y1JkMDyjizZw0Q8sVs5BKLtGz1hPlI2JTgjYqXLqb6oqu9usgA393OKTgSok1LkVOdZYM%2FkF7eIO4EBAOlo5tI468fExXvLmf868i6fCpAtHM8LvXTxOfNJP02xP1u80vyIZKxCnaATk9Jx6eREsnt9TX2PfklJyRYIzRtgZ80tCsYPKeg%2Fwo1yUkO3qNdLLICvI8eMUH%2BVv%2F02Ri%2F7vwrYmv6ej1DaS4rtl1bHEKQqvHysQX0MszPSznkWg7Jv%2FzEa94vYi3%2BuciMpW2LNDw4omRIgNUTJvf3ttNOkeEj9CikRlqPJCEJlNwOQtaITyta1wakwgzS%2B1KhjN3xirEfto7frCYsFqtEVUtBJQQLKE%2BNm8qBEDj%2B3mbNWgeUDl3kw0tK4wwY6pgHgZ1WMl6nRMrGH4QWwqwlGAlxf%2BQ1Ci6LBFL%2BXh6ZMAMk69olY3WdKx2awLIgkLgbreJVJUMknS5F4NJgbuoAQFQrrAqE17pii%2Bx%2FDcm52LQSspmOmAdSotpK47LtUIYpO7hbSfDRrBEsm8O7wE%2BRMPjE8%2FpMKOqWvAw1ag53QPfVZDgzHVrS8eFk0F4zyD8NwEqS28AdY36LXkuvYxbeZk6zxocaR&X-Amz-Signature=f2ad2fd5cdd95da4a0152ae2970e66a03da29bf5ac6aabf6cd6905e8d519d098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCMXF4Z%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG206viSNaiONanGPmXfPJ6uBplpSA1CDLJf%2Bc041t%2BCAiEAymwQPexCkDAWlGbPVYZRng7RcUdV5w3dKSwG0tMlqTMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoUBxxi0h%2FRUJORPSrcA1To6MiK8vJ1OT63mW0mLz7NX44Q7c07UwZxqPH%2BD4NZUzsSb27W8D2P%2BQa9mH36raebVq0qHNCwa4UB2v%2FcqYoVli5LEH8ieFHVjQMUqlznojx%2FtN0D9FIrUGji6TZaHLf3YY%2F%2BFNaPRMAlGABfpTNvL6FhveFvg%2BmYOU1mQcrww6yFtXOLXqLqkiyc6s1aCTuhpjP0vgbQbw%2BZnTKOXIVqccqk3zW98c%2F8mfPAa%2Fu3goCXAb6Za%2BKEnKVYXqU1jc%2F0C0pgg5hmz94tUEeElkIlHl8lXZ7XIolkAPgkBAZUFnPb88LN%2B4tal01IXdr4w58f%2Bbg7X7P929fUc0TK3kQ%2By4uHl6sNWGY9cvVltOtwIZaJsVzDWs6%2FYT9YD8jXmXZrj5IvSmCcwcywrBxdrRM6ttuTEAw0yrJm8E2EiLHZCcGlah4SKTF%2FSk7eILx1sMP6XXmseplIan%2F8jCj%2Fz88DrgVSieDQZl9VtwLXO3rQyq50yB5aN8lCluQyf%2F%2B3zKc1BbQhV%2BnuaYGtZrpnmLf7zGLmY9%2BJC577Ds44f6in6Wsf4hBdhjQy71mdwj9r3FKb4ZXp3dPGYt%2BZEQ5v4I2vxDS7HEXIUtNFXWxAdRlnFn72PgP7ePj3NP%2BuMNPSuMMGOqUBHAGHrmCHy6wVGnnDoYzg5tb%2FBO6citDl%2FXxUIwUv1ifsxH%2B4IKMuEea%2B65JKUNCYuVAsDLDRyh4piOakJaq7XscnbJFdW90AUV206SIYCGkkXlQKXNXdpy3kS7xQ%2F4KXpv7azK9ThF6MAM7c%2FrXB%2F4P1byOG4yuB7Vx6PjQm7t3ofA0HtfljuJ5C1tFVBoQOS09afBJJvGLxzxK2Y1iuU%2BLWqZzf&X-Amz-Signature=89d29e612c2b6caaaa05e37cf9c4ee6eab1340a48eb84134951fa304e99100a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JWEXIO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnDC0bPqkUMBCCdH2gfW%2Br0TRVEyzOdUDX7wQGh91I%2FQIgfc8lNJ1%2F4VnKjXL9%2FnrJszp%2Bh58EEb16uxr1idR4hkoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlqQKMESBuYbD%2BuLircAx6DrQ8Ygv1718pa5YiITgT8KGHL5eBCIfeliL1DgvtHD408%2F69TuhxzRgqMb7%2FinEejMLtxtoJNZAQNsO8N5127hTMvSGsaM2qSjZh7kyS68Xg6Km%2Bd2iwUajoQNeZFv1ycmhBDGIyLKRRlkBRH7GxV7C38nsw5KFdR9UbZd%2BIffWnzx9se6TMeZwh%2FYRnD3MjGEa7Wa2U%2BBsduieBjPVQunleET5Gj2Yj5hSCvnxa9MYXo4WvteR0090VfqlRYx3JExtBInZkb%2F9vitSAFv6%2B1mrXzNstug0Bb6trsCUBl7mAHXjLRnARtXNjIyG0LXN6XNXtnHAAWPIceGQhdIkEI%2BRHOshnzh4%2Bo5gKX7856ITflw2HryjqZgvwyjuVmvPNxp6MunWwyicWxjMQ%2FckN8m5xovZ%2FU2XoDNtmju7px8TS9Bk2QkqBozWFOfHFxLxcA4dOeJhEg5WEwHnY0vmW5f4V2sXvITQYdYO4S0Bkj8eMZCpIbAvIfDy0xl0f9X7rDCTTPxxo2GQkc1gVgrvBGz7rMYmyhNiz8kzgNr9pbtb9O%2Ba8KIs99m45hfvDdlbROuPxWovhnC%2FefjN%2BhGl44VmTaKcUc44XCKfE3oINynNkSE6hZWxG1a7q5MNTRuMMGOqUB0nJg4wJaV6pksWksfWREBCSXFfGIWR20NCV2ShTjJxh2knSteBKlQwB2XPAT4LB8kZiespAtWW8p0yJA1pRw6A%2Bujc0OhMo%2B93gWUxUQ%2Ba%2Fu7uhOSY2H%2F8KwljYdMQAd%2Bgmkj%2FSJOz%2BKxOJvew%2BKxHwL3DB4axQaMRlQTpdzs8JWGgqCBnwfhLNl58eC12TmilmQ9UCl%2FiKZsHu%2FRHSHRaS6Uh8G&X-Amz-Signature=4ef453f869e1fb96ba28b368d6be49f762fa59654c67babb863c5047a79ea5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJUEDMH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FkoRYo1ZXRnOmpj%2FLq4gLa3nqOrTJNz8sRBgR3PKLyAiA9Obu4K8h0sVS4HN%2FWHZ0wbbr0tM4t5Q0%2F%2BGp8A2wPSyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiRXfcrX1y9NB1JPKtwDtOIwQ%2FVPU7MlexV7w6zMTxh%2Bx7T5GjoTRmV914e8UajjnC%2BPNOZhF3jF7JcYLap9pc6kgpiUfcPnTxsTFbcTBx3g7eRxu5ZH4OXfJPXi8VTQeK%2BhSjw9KkSSWRdZS90hd3OSWz2MfBk7Y193Cd%2Fd4YHiin1xjlBUC34GIitBU6DgrXr5OgOA%2B6G3qDdOIoFFZWJPT7BhB3QLOWRQsx%2FEzXvPHnTCRMOpQmSMqWB8XjGiQCDdOjN5ZVkh7Y1JkMDyjizZw0Q8sVs5BKLtGz1hPlI2JTgjYqXLqb6oqu9usgA393OKTgSok1LkVOdZYM%2FkF7eIO4EBAOlo5tI468fExXvLmf868i6fCpAtHM8LvXTxOfNJP02xP1u80vyIZKxCnaATk9Jx6eREsnt9TX2PfklJyRYIzRtgZ80tCsYPKeg%2Fwo1yUkO3qNdLLICvI8eMUH%2BVv%2F02Ri%2F7vwrYmv6ej1DaS4rtl1bHEKQqvHysQX0MszPSznkWg7Jv%2FzEa94vYi3%2BuciMpW2LNDw4omRIgNUTJvf3ttNOkeEj9CikRlqPJCEJlNwOQtaITyta1wakwgzS%2B1KhjN3xirEfto7frCYsFqtEVUtBJQQLKE%2BNm8qBEDj%2B3mbNWgeUDl3kw0tK4wwY6pgHgZ1WMl6nRMrGH4QWwqwlGAlxf%2BQ1Ci6LBFL%2BXh6ZMAMk69olY3WdKx2awLIgkLgbreJVJUMknS5F4NJgbuoAQFQrrAqE17pii%2Bx%2FDcm52LQSspmOmAdSotpK47LtUIYpO7hbSfDRrBEsm8O7wE%2BRMPjE8%2FpMKOqWvAw1ag53QPfVZDgzHVrS8eFk0F4zyD8NwEqS28AdY36LXkuvYxbeZk6zxocaR&X-Amz-Signature=f1a206e665ebf4d47164ea726430478fc63f74769db7d509a86310f2740dac4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
