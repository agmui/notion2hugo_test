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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSOR6YI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGjlv0R3EdIK5vtRaJ%2FkQAd8Om605qOWDfcTZJ3%2BroTUAiB19zOZL%2Fy%2FS5Ufs26lb2s7UTMv8efRLkj08oesjEIJqiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn%2FtNOujgguTQOyzJKtwDXIw1soPPwVqnc3mqR4iHIhnNmhSj9h846gwPcWkljGRwe2940UJHbwFqH9i7D5zDxZdORflvTp8B%2FgLUCvEBXzE4EKFU7WifvHzogPF6zwu479fgSO4r2jHAyXVn7NSMlF1Y62T0kEu3u3oyPbe8ncAGaIInSjkniRZ5xxNWvJZYNTP7tXkDPbRCViA%2F6%2FZtENYPvLn6%2BqcRz7Sodyau5Rxk1m080iCYhIfjqT8X%2FAk%2B9i6gX3wjOBCenDTVu9xtfJGoGkVy9SPgIJ76ZNx16ErJ7mbsYUul0P6FVpCGZ%2FGmzKB1h%2BMQpdxTrn4%2Fi7lVnhLanG%2FmIHksi7bGiA6R2HYRovnXMOtTwN1AmC6LXozy%2FpGJYqAZOWZMwQ7cdrXiEzNXQmA8Jl5fj304jj1QJd%2FmHg56%2BznVAMK5c9Ijc1gCp%2ByaFyib%2FnceWv42MNjliZGuF6wN%2BQf2PpHeggx3FXEvKRfY66P7w01We7I6l%2F9wxjktBWc6MKjhcqLvkk0Hdu62N1X3B3WaG%2F%2Bc%2FvI%2BczcLxNlLpKas4KMwBKfSEWjneYQV%2BvrAj1nJlWMWkzKnvrRBTADUQjellk%2FXvE3Coj%2FIgk%2Bvl3tDoBHHK89YEWV4uHeelQXeUP%2FQdZsw5eXZvwY6pgGQtuuzj9uLuQrjaS5A7zIVbG7PbxFE7uwuflsDgFf0%2BRhWBjnQV6FdAwGumNZ%2BLC72nr1ua%2F206h918KROqweaO3BE5iaEdXOmVwTHjkyWT2KYVrIHa82reJaMxP0BiY3%2FGXRKuo0Ylz1U6t%2B9qPrBs3BqKvjz%2FAfYSZpOMrsG9aCgQSbSql4mkTuXSsjFj5L%2BS1DgFpTljhnRNxlmpn95nIiILLjA&X-Amz-Signature=709c55984afec2d32050f1174af3a027738afa9b8ed9642357139e75a6bb02f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSOR6YI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGjlv0R3EdIK5vtRaJ%2FkQAd8Om605qOWDfcTZJ3%2BroTUAiB19zOZL%2Fy%2FS5Ufs26lb2s7UTMv8efRLkj08oesjEIJqiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn%2FtNOujgguTQOyzJKtwDXIw1soPPwVqnc3mqR4iHIhnNmhSj9h846gwPcWkljGRwe2940UJHbwFqH9i7D5zDxZdORflvTp8B%2FgLUCvEBXzE4EKFU7WifvHzogPF6zwu479fgSO4r2jHAyXVn7NSMlF1Y62T0kEu3u3oyPbe8ncAGaIInSjkniRZ5xxNWvJZYNTP7tXkDPbRCViA%2F6%2FZtENYPvLn6%2BqcRz7Sodyau5Rxk1m080iCYhIfjqT8X%2FAk%2B9i6gX3wjOBCenDTVu9xtfJGoGkVy9SPgIJ76ZNx16ErJ7mbsYUul0P6FVpCGZ%2FGmzKB1h%2BMQpdxTrn4%2Fi7lVnhLanG%2FmIHksi7bGiA6R2HYRovnXMOtTwN1AmC6LXozy%2FpGJYqAZOWZMwQ7cdrXiEzNXQmA8Jl5fj304jj1QJd%2FmHg56%2BznVAMK5c9Ijc1gCp%2ByaFyib%2FnceWv42MNjliZGuF6wN%2BQf2PpHeggx3FXEvKRfY66P7w01We7I6l%2F9wxjktBWc6MKjhcqLvkk0Hdu62N1X3B3WaG%2F%2Bc%2FvI%2BczcLxNlLpKas4KMwBKfSEWjneYQV%2BvrAj1nJlWMWkzKnvrRBTADUQjellk%2FXvE3Coj%2FIgk%2Bvl3tDoBHHK89YEWV4uHeelQXeUP%2FQdZsw5eXZvwY6pgGQtuuzj9uLuQrjaS5A7zIVbG7PbxFE7uwuflsDgFf0%2BRhWBjnQV6FdAwGumNZ%2BLC72nr1ua%2F206h918KROqweaO3BE5iaEdXOmVwTHjkyWT2KYVrIHa82reJaMxP0BiY3%2FGXRKuo0Ylz1U6t%2B9qPrBs3BqKvjz%2FAfYSZpOMrsG9aCgQSbSql4mkTuXSsjFj5L%2BS1DgFpTljhnRNxlmpn95nIiILLjA&X-Amz-Signature=0ccd9466a5b3c1167ce1bc679d89adfabb96cdbacaa7a3fda52cd858c9f4ccc6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPHBHYU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCFhquc9GenNQSStzqLJKnHVtyHABfe8Fk0l%2F6KSlkMogIhAIG5nVENo57TrcL9aUKihHnkfLp2dWUB9hSzK2KGTJGsKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1BdAD%2B1SI9b3tFYMq3ANaCr36ue%2BhsIEmzy2MYOC6U4sYzhtw1Qs4ohrCLCD00rlBZpmyhNhmSWonlIUUzZeoyrfdGZFLEpGOtIXRts%2F0yffMqNTE7%2BCBcsCElBO91NyxTWrfdYfdE3ofv8GuLnmrGn7TXzRc1DNWx5OiEPQ13Lt6Jhg6asfTrrGCwNZfn8sKLJNiz8niWlsMYSbVYiRSCgIN4BGc4pwXC1EAiOvBlPoiX%2FT0u6B9EiPQh2tpm37a9gUuE9Y4N5Vf9%2FY9L0WS0NrqgeooUPjqmA%2FXHZroX9AjteKVNH5MfrdY5LqRAECqaALJG5g29BTDWMH4yow4ErqFLEPlhZEyCMxpy6NF4NzfxDNNw4rp01w4T%2FNTQNV6Oqtwz7TTWiLVp%2Bi20TMi4rI5uJcvlnjcleYgY9Of%2FaKkyT5l6obr0KtRUXBPe1dImcsLXIbEElIvGCzIEWfbIyPz7IM9FA9wPkM3PA7wj9qi2HA9q62PrgWfCV2H%2BcQ0SX0U0I1zioJAMnL%2BwGnuPM7XyAN5ZwcyHZVmw7y1CxYJbVpuOH3%2Bul0R2aHENx89GRdj0uJFDILhU8xQFKnjx4of79Gj1lAGyTYQjklBXV0ZfYyffqfbQIMft9r26lmyET3XgchH9OlhfTCv5dm%2FBjqkAZv8hdraZ7F3faF0s1SgMChh%2B%2FUn2EfOhIvEoGCaCb0xG1QKwo%2Fa7Z79jcGKybgMiGCTlGRpbrEFjMra%2BBu0k7bS58R72AwUkJ4gAr7kZ8jd2Tsw1lZKAzK9xs6RcEDVBRY1CuYd3qwbIeyGR4XpM6tznLKtUMhuxlynmwGY9zx%2FzUxpj%2FA3VI8sSmgWS4rnKlzgxEgC0nM9dXc0bAr4qYBW%2B75m&X-Amz-Signature=9ca4bb14ad41cd57a03fa1059b25e8d1d9c2ebf82487ad2cbaebf38906e5ad57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGTYPPS7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC%2BZ4pooU4ac2YsjU3A8s1JKTzw8GKo%2FcScsaBOMrPmJwIgD9YXUHtR3cnSG0T80xM%2BUd80G4GKw6Fggqe5S7dLEbgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLMxntTN8AYyOaifyrcA6Z5rIne1YaGYuglozu%2F2qS3F%2BQY8O%2FENzJMu6xnuFOT0EkfPHjfNfLlC0CRMSamsfCj3Le3KmVuz7%2BORx4dLAFe8I668UFuQK4azqSq%2BmzjpPKLi30X%2BFuzAi3UTKX3Am1rlzhXDy1m3%2BWEHclmYmiOiRo%2B90fD209IGE0XRBCmCUSDxe3TGaNp0F1m7dhMw3I%2B8YpUEq7APJcTlwG7ugnfXB7wndl527U%2BRggU%2FE%2FXV85TWMOEH1YCC8PAg%2FVm3Xbj0k7qgRyeZNpBG9GrZHU2Z2DqpaGi2AMza7cVIKwquCFUfgokJJR2iKIHkRK0j%2B9Mkqiwhz4koj%2Fzvwwrh2KD5zR4XMcHXJ6lcLDx5XU6RzX4l4u7auvcsNdR%2BBVZMxC%2FvLkDBYMi3qe%2Bd1FZcrsICLHSfuvFz4p20F9Ct4S2zGgOYVj4WCfP2639a7fcAMWLFkSpaJMmmbQBP3BFVlnuruuBffipW3e7k1zrQFskty35QJngkQvJqbH4h7WKp9dLNH%2BvsRrWdjaVcadjcDCsELGXkUI3bXtjVS9%2FyatdizZgRuqfK6sKeSFehDL9mJE5B8uHe0ht%2B24nocl00ZUO1gROsR1pWUVpOyMQdkLfHW0m%2BKZy1OUxEHDcMPnl2b8GOqUBAgrhLhh2TFsJSny6Y9GQkCl4gtcJRT236DdpGOdTTcp7mCZ3Z%2FNSKN3hriryXdvHMe1G32DKOppYp%2BdhrJgLZ8l54jeGTj3aV3xsN6CPFcXHS6GF95GowvCbMrzvHwWKI%2FFPBp97mbDnOwcTUybJQ4%2B6EoqsrUzEgx%2FMmGHs1FpA41LI7I9o5M75U%2B2Ohp4uBX50Mcu4i%2FwuoXx2pvjGEP5hFV9p&X-Amz-Signature=fbdcc64c8b5e50e38d25b62343cabf4dd1ccf7e23ccf7b899562edeeb76763fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSOR6YI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGjlv0R3EdIK5vtRaJ%2FkQAd8Om605qOWDfcTZJ3%2BroTUAiB19zOZL%2Fy%2FS5Ufs26lb2s7UTMv8efRLkj08oesjEIJqiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn%2FtNOujgguTQOyzJKtwDXIw1soPPwVqnc3mqR4iHIhnNmhSj9h846gwPcWkljGRwe2940UJHbwFqH9i7D5zDxZdORflvTp8B%2FgLUCvEBXzE4EKFU7WifvHzogPF6zwu479fgSO4r2jHAyXVn7NSMlF1Y62T0kEu3u3oyPbe8ncAGaIInSjkniRZ5xxNWvJZYNTP7tXkDPbRCViA%2F6%2FZtENYPvLn6%2BqcRz7Sodyau5Rxk1m080iCYhIfjqT8X%2FAk%2B9i6gX3wjOBCenDTVu9xtfJGoGkVy9SPgIJ76ZNx16ErJ7mbsYUul0P6FVpCGZ%2FGmzKB1h%2BMQpdxTrn4%2Fi7lVnhLanG%2FmIHksi7bGiA6R2HYRovnXMOtTwN1AmC6LXozy%2FpGJYqAZOWZMwQ7cdrXiEzNXQmA8Jl5fj304jj1QJd%2FmHg56%2BznVAMK5c9Ijc1gCp%2ByaFyib%2FnceWv42MNjliZGuF6wN%2BQf2PpHeggx3FXEvKRfY66P7w01We7I6l%2F9wxjktBWc6MKjhcqLvkk0Hdu62N1X3B3WaG%2F%2Bc%2FvI%2BczcLxNlLpKas4KMwBKfSEWjneYQV%2BvrAj1nJlWMWkzKnvrRBTADUQjellk%2FXvE3Coj%2FIgk%2Bvl3tDoBHHK89YEWV4uHeelQXeUP%2FQdZsw5eXZvwY6pgGQtuuzj9uLuQrjaS5A7zIVbG7PbxFE7uwuflsDgFf0%2BRhWBjnQV6FdAwGumNZ%2BLC72nr1ua%2F206h918KROqweaO3BE5iaEdXOmVwTHjkyWT2KYVrIHa82reJaMxP0BiY3%2FGXRKuo0Ylz1U6t%2B9qPrBs3BqKvjz%2FAfYSZpOMrsG9aCgQSbSql4mkTuXSsjFj5L%2BS1DgFpTljhnRNxlmpn95nIiILLjA&X-Amz-Signature=6f08a99ac2a52f51eb681eee9eb3d7d3c649618fbf3fbdf0b9da3ec9bda064e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
