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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFLFWO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDlCHU6t02fQ8ZlvkgI72BbvD5visLQli12qiOxWkDeLQIhAPEECrTsvnfZ5%2BqXuAPJ5c45ZMir7slIjuV6dcHHq%2FEZKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs%2FJe2191HY8Rx2GAq3AOu6DNxOtIEdsbVvkeAg0I4bqdslQwsHx%2BxQzk57HegtnwQ%2B6PX7EZH7bAB62BAsEwagtOUUzJwDN%2Bo2VioN%2BpgQqYcxtQVxHkgIJRoZKIGU8y9CAJWWb2X8ItRKYM%2B9hO5GUdBt%2BMjO9EOGk1P4lHYKNLs2g%2F9mySADnYNnJGd2pDo7kL%2FryAaTq21a0B%2BxvXEvF8XzT4CL6YnWb9JgooWAfV4Hgff7Qbg13FUFgXetG4N%2FnJY7LhBPyGy7sDiSGBuD6kAYTKqeNufyGnr6sDM03E0S3VP6z56VFUAeYYChagPMDHkBN4b9Jb%2FASf4Y4SJwuSHilEQxuYM%2FYIkvq005TqRKlF9ZaWba6Ydl%2F%2F4WX4VmeUlCO027lbfi%2FuB0i37YjxK2MpYh62z58fIQg1dVESLbFVJJrB%2BKab53KXcGiAqOcH2Ccdp4JcYNbTKA9QLpB%2FxYYxV8Jsv18wejPuitGKs359a8uZxl9sjJwPony5cuVkL1MacHiyYFDFSX0VbrqVjIXmLX68q4q%2F2TAu3lXnGFrcds8MwBHe2UadmshRjuiAhEKfviHIoYYTaJK3mw8j4bIkeQvRoA7UHUG3s547VcHQBfw9IJXxCclAO%2BHWOqRedN%2BCHM7soMTCuv9G9BjqkAZ%2FV1IjCDUYjjZjwbAXEu%2FmTsX1qDT0kAZwvA8EqWLvcO1RZnFz%2FFlF6S5P45tJPCgQCUlUrYin2pbOF9jgzwmf%2Fqzx8VQC6JbZmoTqd8GWbL7L1xtcfrpMdxz%2BmNcVJ4XZmwqzAD4KyynOo8P%2Fppt%2BLBnb6ecVH2%2FEWTNaFjjanitgOLO9EQiQMQ3nDfGg3WTQuqJdEAw%2FS%2F8a8A%2BqydeF4tyX9&X-Amz-Signature=a7698a37e6040c95821a10d8db41201f25c0d8ebb8ee8332152ede088bf3b205&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFLFWO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDlCHU6t02fQ8ZlvkgI72BbvD5visLQli12qiOxWkDeLQIhAPEECrTsvnfZ5%2BqXuAPJ5c45ZMir7slIjuV6dcHHq%2FEZKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs%2FJe2191HY8Rx2GAq3AOu6DNxOtIEdsbVvkeAg0I4bqdslQwsHx%2BxQzk57HegtnwQ%2B6PX7EZH7bAB62BAsEwagtOUUzJwDN%2Bo2VioN%2BpgQqYcxtQVxHkgIJRoZKIGU8y9CAJWWb2X8ItRKYM%2B9hO5GUdBt%2BMjO9EOGk1P4lHYKNLs2g%2F9mySADnYNnJGd2pDo7kL%2FryAaTq21a0B%2BxvXEvF8XzT4CL6YnWb9JgooWAfV4Hgff7Qbg13FUFgXetG4N%2FnJY7LhBPyGy7sDiSGBuD6kAYTKqeNufyGnr6sDM03E0S3VP6z56VFUAeYYChagPMDHkBN4b9Jb%2FASf4Y4SJwuSHilEQxuYM%2FYIkvq005TqRKlF9ZaWba6Ydl%2F%2F4WX4VmeUlCO027lbfi%2FuB0i37YjxK2MpYh62z58fIQg1dVESLbFVJJrB%2BKab53KXcGiAqOcH2Ccdp4JcYNbTKA9QLpB%2FxYYxV8Jsv18wejPuitGKs359a8uZxl9sjJwPony5cuVkL1MacHiyYFDFSX0VbrqVjIXmLX68q4q%2F2TAu3lXnGFrcds8MwBHe2UadmshRjuiAhEKfviHIoYYTaJK3mw8j4bIkeQvRoA7UHUG3s547VcHQBfw9IJXxCclAO%2BHWOqRedN%2BCHM7soMTCuv9G9BjqkAZ%2FV1IjCDUYjjZjwbAXEu%2FmTsX1qDT0kAZwvA8EqWLvcO1RZnFz%2FFlF6S5P45tJPCgQCUlUrYin2pbOF9jgzwmf%2Fqzx8VQC6JbZmoTqd8GWbL7L1xtcfrpMdxz%2BmNcVJ4XZmwqzAD4KyynOo8P%2Fppt%2BLBnb6ecVH2%2FEWTNaFjjanitgOLO9EQiQMQ3nDfGg3WTQuqJdEAw%2FS%2F8a8A%2BqydeF4tyX9&X-Amz-Signature=e4f05ed505c38cad5821643fcd90661a9aa4231cb64b7f0065a9a0cbb298b66b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75L53KC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHkTREvhzmSF%2FhIXwoEw0q4SaHnxxQLEIVZ7opLpe9jCAiAVmFMpEsP8igtdYt9a7bTZAY5Oz5V1KSQ8TSWK5McVECqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLJvSq21Oyaqi7rqKtwDCRF447z826ZmdnQb6LZkxL7zDajYhtWaLNcuP4diI62PeU%2Fx3xIQoBvKYmLW9OK2EF9NZuzFiAdqIC1Y2xbjPzi8ALDC4IA9c0r6ev65tIAdOQawAi%2F83%2Ft9ijp8rVv8DdawOIh61pcYQY0a%2FQ%2BSZNzMT6RK6i0hbLVH4bPVzDvtoO%2F6waBaVxrtqq%2BKBGFr1TESqns3fLNp3HAIK9u4B%2Fx%2Fo6B%2BOikzla%2FuANNJak9PmxUkSaSxTJF2zfr3kImUo1QqZj3Z7g%2BEBYhCz7H4hJiZR5leoQx1EW0WBNY83flmEWy4j9Lr6Z3LxCDLZ7ZbmNOb%2Fkv6%2FpVEyOqXMATNUInoPBgtZmGZIgl8n1dwERMAxFgQOy2oXm6j%2B6dDhbiOk85TwAh7bf6qpDONdUK5G3HxgGWpf9yUQncI6lvG93s3Bn%2FD3%2BrVcGueI%2FXYN7jfx5cy%2B7%2Fo%2B9DByjnqsfBs5stO3K0VJS9kij9EQbdQAlFiiZd3JaQU7NlLfIC0i5pviSsXHevTwi0sODsFvld81MRkkihyGJUizq2VS0OQzojLb64aem8OffyVb8smx7YlqdEsVwVk%2FmBfLLkvkYWFCwys1IpFTu8rqPHfhTTjtdX6Gm9TMU2vRgeKYgEwt7%2FRvQY6pgGAEUzkYsxzMnpibG4fnRxCGo9ASeW%2FFcc%2FlMgZGzeIWnNsrsIzSwL4eQjEey0X8ELcL6sa593DBkaf3D3g6QR%2FJC5dJuEJ2EvfCRXtx2TQsGHSlUjKUm%2Fy%2BIDeL%2F%2B9wnRBlVVCE2QsBXRzXUPMiQso%2FfIAQOcbW1eYuzCt4BRLfwljgUES3BvJUM0Ky8ttMQH%2FdiquOHQG6vNW%2BtT3mz0XWKTGRPCz&X-Amz-Signature=6933d051c691f4af4f5e537a495ac0e522554d775041dda15d428240ed9cfc37&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMDJS27%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDpkju5%2FisKyt6Qh3%2FwZ18lhuZ%2BKBBF737Ly0j8MKA7owIgcCGUaCnSxnnRxZP32DSfFWD0Gpk%2Bc2FQl1ZisU1ah3wqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoFVv7m8UUyY6gh2yrcA8F0Vy53V%2FUa00eVMB6THrAVqDilCe4ZVz6UveJzDyB82tV7Fn8wj%2BzRoImpczRarA9DU%2Fd38R1Imy8EPXqZeoqfgDUYMl00imJ43Ybwaw7%2BbfUIRtbnpwSgZ7jlqQkP9OsCltZ4SxGU%2FL3qNKwfQixTMusu9Ow4azAk0tRlKN1i8g%2BdvUWOUYMzusyYH2lOIaAIVHuAri24kSQsV%2BvsFKoRNPh2MbuQLq7cgudtAIZaPVLhnTG30Zfl5735M1H%2FaaSxggPdaprx2KwPw6LdZye8dDH8YLO2H5dslqKCHXlI03RVP8DWJJAlVPD0mIlMxEPfKPZj2FtTSPyh6WHUA4AqEmYNc%2ByMlAryvbfGZKeNnz1wUjPL3fOc5IKkQw8yh0Z5oEMMeXW9ivuMu8nsy3GjJeh%2BS6Puh3Fd6bfPshvLBCQUNN%2Fma8dns8wpcBLTwS2pTLeLI5aZ0dgJ0qZpo%2BjyjgNpbkjtRfMOLeXftnHjf3fDqivs81ttzL2S4wyzcfqAN%2BSMzc02jT9ujtpva%2BAFtoPZeisgIQhUwSb%2BS4FN1JfKbFo9a6E0xo9baMDPFqUIhCwFkan6aChbV9%2F5u7Zz5Cskht%2F2RoG2W1IQAOQS6TZbW0YnTwewyGu0MKi%2F0b0GOqUBlGVUQFi5uNx0ewPcf0vyEVCxIkyA8%2BtkWo34dve8A522W6VEz%2FLhgqQfNe2Eq1%2B0yKtFkGl%2BIxdUwYuq2FwvtEyhwc2fPTCtk9pQtQst4PPXvuIo%2BDtyw%2BN64whjF3JkFvcmgJxXWfl5BIt6vQ8qykAOwxoI2sQWRkajDKGJ6GGKt4VQ0YK1t2lzfywDajKj1xAAccTJZd8gKKJXEGW67FpNVL8R&X-Amz-Signature=6421e24c2e4adc8b776c0a40c45a12e674d56bf96cb7b308125e7476197bc9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDFLFWO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDlCHU6t02fQ8ZlvkgI72BbvD5visLQli12qiOxWkDeLQIhAPEECrTsvnfZ5%2BqXuAPJ5c45ZMir7slIjuV6dcHHq%2FEZKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs%2FJe2191HY8Rx2GAq3AOu6DNxOtIEdsbVvkeAg0I4bqdslQwsHx%2BxQzk57HegtnwQ%2B6PX7EZH7bAB62BAsEwagtOUUzJwDN%2Bo2VioN%2BpgQqYcxtQVxHkgIJRoZKIGU8y9CAJWWb2X8ItRKYM%2B9hO5GUdBt%2BMjO9EOGk1P4lHYKNLs2g%2F9mySADnYNnJGd2pDo7kL%2FryAaTq21a0B%2BxvXEvF8XzT4CL6YnWb9JgooWAfV4Hgff7Qbg13FUFgXetG4N%2FnJY7LhBPyGy7sDiSGBuD6kAYTKqeNufyGnr6sDM03E0S3VP6z56VFUAeYYChagPMDHkBN4b9Jb%2FASf4Y4SJwuSHilEQxuYM%2FYIkvq005TqRKlF9ZaWba6Ydl%2F%2F4WX4VmeUlCO027lbfi%2FuB0i37YjxK2MpYh62z58fIQg1dVESLbFVJJrB%2BKab53KXcGiAqOcH2Ccdp4JcYNbTKA9QLpB%2FxYYxV8Jsv18wejPuitGKs359a8uZxl9sjJwPony5cuVkL1MacHiyYFDFSX0VbrqVjIXmLX68q4q%2F2TAu3lXnGFrcds8MwBHe2UadmshRjuiAhEKfviHIoYYTaJK3mw8j4bIkeQvRoA7UHUG3s547VcHQBfw9IJXxCclAO%2BHWOqRedN%2BCHM7soMTCuv9G9BjqkAZ%2FV1IjCDUYjjZjwbAXEu%2FmTsX1qDT0kAZwvA8EqWLvcO1RZnFz%2FFlF6S5P45tJPCgQCUlUrYin2pbOF9jgzwmf%2Fqzx8VQC6JbZmoTqd8GWbL7L1xtcfrpMdxz%2BmNcVJ4XZmwqzAD4KyynOo8P%2Fppt%2BLBnb6ecVH2%2FEWTNaFjjanitgOLO9EQiQMQ3nDfGg3WTQuqJdEAw%2FS%2F8a8A%2BqydeF4tyX9&X-Amz-Signature=ca84ba6054a3b5854ccec9a7f3116b09bc89a32004b46aa5a6eb83b6e895104f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
