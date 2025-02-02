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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWE4TDT4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyEIxbQ1%2B5o19BgWryqLTUVPMuRVNcfmMunjGQS%2BYSXAIhAK2yxLJuwMD%2BzMq69qb1mYxB54WwPBd%2FGWLIjR%2Brc9KVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqMwV2taEXMTRNeh8q3AOZU1MI%2FaT2Bvtar2%2F5cu1FcP46IokuqK7TBZT0PkNpkPE5dStyBd2EdPwe%2BMv4wx4Fal6wSZ%2BDqu27yBCSN5Ec9opGPrvgkDJE5wqTMW7bZCjZeXmiH8wzd0Uue%2Brpqbkh0LMpbx%2BGCwTHmbqC5PsXVblQYH4nByLfftIEBPOXbUrqT5PbKOkUyvBcx74B%2FEBfp8AVMp%2BOfroj0DbqZSACmuT%2BD42tyOyX1ld7b3yAQ7fWAP3ohyR%2BDKW6Z8FpFQNzON4oK2C1BKLrEbJ7KfPHYej%2F1TNEa34gs9KoSOchmqFdZGM16yaGuOmjrgqZ04UjGOq7shrRypHQ%2FZL8UwwTUN0O63lngcbEdpXKqsfULvHg2lqKwz4lDU9Q9bjIMJJdviUdYGw0Ckpij1CtFGUvfCA027e7i2LlTLsFE50ZSfFoMJuqRrmre0qALUJRZw1P9M3OQX%2Fc5L%2B46nsLezf8N%2FsQHtv%2FI8f9P1YsZLLb9ta1MTryeaNGgBwA%2F3WD%2FHDYnxEpvbrbrYLQv5tyu08AJhA57G3jfQBUWIF9vouAGDJpE38yHcj7GYvBvWC7wuTzUfMozfaiWSIVe8vosTEctYrNJo7NKV1QPyvAjEiNQl%2FtX6QNftHfCQfYPzD53%2F68BjqkARJf7X2drbji6beY64iJe%2FvA9g61Tz7AA1hLS6eT0j0EWOjHQA9AnzQIbcH5vn3a3AwcESY8QwDt82m7xXHaAEqzs3%2BqaszsBOz%2FNBDLNP0cSQMEJ2A5O2wngxVSX5FSS8iVm1jrBmMPuZNY2WcwYq2iByZUI4Qgu%2FtNVKaU1p6pxergmSv7CcQj3H6mEBMYQ8qlMU6cl9oImXX0JJgljQQyw8Qt&X-Amz-Signature=00d6d47a70ddbb7149374ee25e588673e0082283f30bd419b211323b86a1c3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWE4TDT4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyEIxbQ1%2B5o19BgWryqLTUVPMuRVNcfmMunjGQS%2BYSXAIhAK2yxLJuwMD%2BzMq69qb1mYxB54WwPBd%2FGWLIjR%2Brc9KVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqMwV2taEXMTRNeh8q3AOZU1MI%2FaT2Bvtar2%2F5cu1FcP46IokuqK7TBZT0PkNpkPE5dStyBd2EdPwe%2BMv4wx4Fal6wSZ%2BDqu27yBCSN5Ec9opGPrvgkDJE5wqTMW7bZCjZeXmiH8wzd0Uue%2Brpqbkh0LMpbx%2BGCwTHmbqC5PsXVblQYH4nByLfftIEBPOXbUrqT5PbKOkUyvBcx74B%2FEBfp8AVMp%2BOfroj0DbqZSACmuT%2BD42tyOyX1ld7b3yAQ7fWAP3ohyR%2BDKW6Z8FpFQNzON4oK2C1BKLrEbJ7KfPHYej%2F1TNEa34gs9KoSOchmqFdZGM16yaGuOmjrgqZ04UjGOq7shrRypHQ%2FZL8UwwTUN0O63lngcbEdpXKqsfULvHg2lqKwz4lDU9Q9bjIMJJdviUdYGw0Ckpij1CtFGUvfCA027e7i2LlTLsFE50ZSfFoMJuqRrmre0qALUJRZw1P9M3OQX%2Fc5L%2B46nsLezf8N%2FsQHtv%2FI8f9P1YsZLLb9ta1MTryeaNGgBwA%2F3WD%2FHDYnxEpvbrbrYLQv5tyu08AJhA57G3jfQBUWIF9vouAGDJpE38yHcj7GYvBvWC7wuTzUfMozfaiWSIVe8vosTEctYrNJo7NKV1QPyvAjEiNQl%2FtX6QNftHfCQfYPzD53%2F68BjqkARJf7X2drbji6beY64iJe%2FvA9g61Tz7AA1hLS6eT0j0EWOjHQA9AnzQIbcH5vn3a3AwcESY8QwDt82m7xXHaAEqzs3%2BqaszsBOz%2FNBDLNP0cSQMEJ2A5O2wngxVSX5FSS8iVm1jrBmMPuZNY2WcwYq2iByZUI4Qgu%2FtNVKaU1p6pxergmSv7CcQj3H6mEBMYQ8qlMU6cl9oImXX0JJgljQQyw8Qt&X-Amz-Signature=006721ac8bda4ad9fc57e291777e6abf3dbaba3b4c56fbbc3bf09599192ace28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634FXQZPR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0bPTM%2B0hrnaqEL2LgUqGwm7xZCGFpHnmT%2F3EPuC7nHwIgazxN2XQhBvJhr%2BN5SkrbGidO3WlsQQZnAwa7zpJoGO8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSQ2izzU0KrW4SqaSrcA0pjxkA1jUnH2fegcCCxofXHYRfDm6x4DPbg3hPHsDpeaJ14Xp%2BjAvD72Nu%2FU7SAmpguptUi1TctTWhsNuCH1KQpazI%2FB2LUd2hQIR10HdbGRBCtVSLL6bUD5OZ%2F%2BekrgpQ9bWsBA4b7pOR6I69IlB5jJyEelazeovF5IJpnbMEzKZt99HusK5NwY82R4PqIIBLGC3XDhdip5aZFYiUe8WRJEN0KjbjwNzCTbeP3ry0%2BfVpf99bevXEAwzYVQ6ab%2FA4bdbjJpg3HrL%2FbOU1h2oNMW2I4T72Q8jhxRCQnC28C7e8Z06aSso2zmL7wdytJwqTaZzewdpbhyKyjVETgVs%2FtKfWV5or9tNlmzUVHR838dNLPz4X8eFm9lCjfKgfBRFKY8TCijro4WXoJ1xh56SiUrCN%2FinMguPAfv%2F49pswBY%2FRTBYbq6t3x%2FMBHZEld8wIP0Oitpnvbw8fPbFiYiWBknCjdAjcZorN7ZOe%2Bb9B02wqmukX3LA%2FLO2bBFBvg0G1j3Yx4Ut0ucwim7RrRDfKKUMAOBNvGVplhLmQQnCMw%2Bi5DNa9ni0uUgqvziCYO0AQyEZFEaw8XjCi7YXG%2FmIkLxr8d%2B%2ByuGwVi0b9RTuzIlIWXliHtpjl9Vgu4MPnf%2FrwGOqUB%2BxkOTPJSLwGTulydGuWFpepXShCOFyOkf5JcS5qqIJGsVF9d47gvxB0KqHEUQl7xgVrkwIpQ9sGrKjtKxa81Et0XoGfnVBVH5r0iSoRsMTk4KG6hAKb8PCkfEa0nOwCyjsch7HcxZA%2BBO6HFKjj4yIP2hbhhBSf2OdUVPRWhEbI1Ipu5E%2FSDiNiIErZAqQ2M5%2BOukFqLwaBSnMe3wuqwIF8sL8NS&X-Amz-Signature=da69c5b94fe454712172d89888c3b7a6884cdd0dfde949862a9f61910724af81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBTMMM3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWMs2L1140YV8GSt7lyRcQAFHuWtPSqdglaEaMuLctrAiEAx6ZiqtnhBoicOKElcehUtuzP%2BVDHpRs2olXsZjyEcVYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fd8sdem3spbqLwcCrcAz58ktIH4%2F12EH7jo4WBfuWZj6O9vAxMAPefDqvYEdw4%2BXJ6xASe3u4R7VI7ThTGTpxrTFRX6VwJZ1QiKvRu1TuX19T6aGeJtz1xnM5M37BwUAy1KmWgfnKXXiR6AG%2BA93zKSRSPINVSDiOMEHha%2Bw5TiuwbvZiS1HDollT4dGPRHKDezxvoypy%2BIFcrYx4V1%2FmYZsxnKyrw7rsdFoCjKKtFQRWBSTd0DOmUCVR7PtUxfF%2FMfTp6NQJsVv8luvC45X97OZhikOJmrf9yEMWmRNt3B24BDvMPJ6RUqLCXyxgs%2BZQzppvffNXFwba6encIcBd%2FUK4vp82chcIzhUMPkY0Cuj2OU0Jf2yKjmbBU%2B6lkaFdUdS%2BOlr%2FogA1rlIeejxMvtWEJiYWFO0SuLxgz9Uvai%2FS9wG7bzHJGV9k6TodppvDqeYzQVafzBzpNw0ZGlpZnrtNqXpp3AIjjuN%2BmU8nEzmBythSP%2FNj5SJbSgTkTL8R3c3VkSVGCH1SlywuGpSd6Qbn%2FkcMiEw9A0p%2F1AH%2FNoK0eC7lDXmtWCUZsor5F4wXt5z9W1wJrzQRmGRT9V2ZaDhAg0TQsvYPq3vZkO48nA5c0wKLwQuwRGYfTRbPoPWWPkDTnxTsIrJuVMPfg%2FrwGOqUB2Ws%2Bs%2FH6agl7AYm3wJnPF7TBKDs6KOGOIsnLvMrmG96Vru1L%2BkeIet2TsmYIYPcsyhxpWLxKfoxxEOSmGRsrCS%2Fu%2BcWSaDzOkktyBo8iWWRCXlCONDKK8pEe7JTW7hBX0%2BkL9JqwbWZlrqQSw%2BwlHP97eMfKQCeD3sggoGNfjvnHO0HosJV6d%2BQwdrSqFEbFQQ2%2FHC8qC37MTXTbA1LtkCdns4RD&X-Amz-Signature=fd5a41b36247be6d669103c6696c7e8eea6b2ef22c0c92fb47a45f60e50f5450&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWE4TDT4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyEIxbQ1%2B5o19BgWryqLTUVPMuRVNcfmMunjGQS%2BYSXAIhAK2yxLJuwMD%2BzMq69qb1mYxB54WwPBd%2FGWLIjR%2Brc9KVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqMwV2taEXMTRNeh8q3AOZU1MI%2FaT2Bvtar2%2F5cu1FcP46IokuqK7TBZT0PkNpkPE5dStyBd2EdPwe%2BMv4wx4Fal6wSZ%2BDqu27yBCSN5Ec9opGPrvgkDJE5wqTMW7bZCjZeXmiH8wzd0Uue%2Brpqbkh0LMpbx%2BGCwTHmbqC5PsXVblQYH4nByLfftIEBPOXbUrqT5PbKOkUyvBcx74B%2FEBfp8AVMp%2BOfroj0DbqZSACmuT%2BD42tyOyX1ld7b3yAQ7fWAP3ohyR%2BDKW6Z8FpFQNzON4oK2C1BKLrEbJ7KfPHYej%2F1TNEa34gs9KoSOchmqFdZGM16yaGuOmjrgqZ04UjGOq7shrRypHQ%2FZL8UwwTUN0O63lngcbEdpXKqsfULvHg2lqKwz4lDU9Q9bjIMJJdviUdYGw0Ckpij1CtFGUvfCA027e7i2LlTLsFE50ZSfFoMJuqRrmre0qALUJRZw1P9M3OQX%2Fc5L%2B46nsLezf8N%2FsQHtv%2FI8f9P1YsZLLb9ta1MTryeaNGgBwA%2F3WD%2FHDYnxEpvbrbrYLQv5tyu08AJhA57G3jfQBUWIF9vouAGDJpE38yHcj7GYvBvWC7wuTzUfMozfaiWSIVe8vosTEctYrNJo7NKV1QPyvAjEiNQl%2FtX6QNftHfCQfYPzD53%2F68BjqkARJf7X2drbji6beY64iJe%2FvA9g61Tz7AA1hLS6eT0j0EWOjHQA9AnzQIbcH5vn3a3AwcESY8QwDt82m7xXHaAEqzs3%2BqaszsBOz%2FNBDLNP0cSQMEJ2A5O2wngxVSX5FSS8iVm1jrBmMPuZNY2WcwYq2iByZUI4Qgu%2FtNVKaU1p6pxergmSv7CcQj3H6mEBMYQ8qlMU6cl9oImXX0JJgljQQyw8Qt&X-Amz-Signature=d15801764e384a0daea5e6577c0a0b02d82382d7468b5bec746c0d89deeb6672&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
