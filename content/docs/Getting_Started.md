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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65MGQBR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2Fa5ZZRcAdqPKI6NaJ1VfBZD%2FhkDycWaPuLdk%2BslOJjAiEA%2BZKDApsV97QoBmatjG%2Bk3qWOqkr2NINB2j2M%2FY2ik5AqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNnU70yV5nnFnR6USrcAxM3MMGVDygGvnX1dmCTT1lvT7qTO7a%2Fop8oPh3wtiM7Q%2ByoVaiEl8NRdvHcT56qc%2BwdCARaMu2EitaHudNS6SDRjMOXQRojpQBwN2lnLpp7%2B%2Fwfo7nEAib6nKtavF2CCN%2FvzTLiSiK016tX%2BF%2B0Y2g%2FteXbSjdU6RgCBiBaGGyEMKNGv%2BMfzXih2ydmT3IZo6pwA6elSVBkOwgA7ng%2BE8qxfNnESeFzsFU7ok2gYpKvkDOV1YcqTlYRWFKI6Xr%2BFY4BIqxKDy7pygf0L2OyP9meHv5lGCk0eNHe8%2BQCnugAg4%2Fob3Utv%2BEPUIsv8ryQooj4%2F7PKnmYdpDkA6ag9YI7RYL1lkyNloqlANwB%2Bv88yqKP49huV71rebhjxTMP31JzgYg7q4Ic41fhGyBJniMpQJSiCsREKTHelML%2FWfrtIBmrFU5G3cnym6tgPHx3GyuNI0eg02gJJWip%2FucnA6F7zXCeZtWBKNj8ITu2PlTpj6X4nHKBMB5e%2FV1Waee356AD5Aefzhnel%2Fb431nkAuNg14HmzMaFAy%2BMllAiktHiKLfI639bwaKSPV97cB2pY3YOy8mfqvixHV%2B85YSHygl%2FIaibAGi9wNV7et5iH80ySGdR2Rausb5gOyEy2MIGpxMMGOqUB91DlOQbsCxhMJFD3LtetmtRqDYlLohJiEUwDOiMex0KvLSMGGiri0zUngNdBlSUdZD5F7dXaOb5oHrVWcnwpJNZKkIuICR%2F30ujNpN5EKBrqqy4srWGSuhzqKXVUq2hJep3C9QPbqCkA9a6X71K6HDYTTw483e3w39MKs%2BVOT2qB7g5Xxfe7usblRqz6u1n8jwa%2BOnrj66w9unIHI6xcuxR7GS6A&X-Amz-Signature=900a71478fe22ae174c06c7ea7795f4597d9e344bbaedbd5e7eff133ee900deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65MGQBR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2Fa5ZZRcAdqPKI6NaJ1VfBZD%2FhkDycWaPuLdk%2BslOJjAiEA%2BZKDApsV97QoBmatjG%2Bk3qWOqkr2NINB2j2M%2FY2ik5AqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNnU70yV5nnFnR6USrcAxM3MMGVDygGvnX1dmCTT1lvT7qTO7a%2Fop8oPh3wtiM7Q%2ByoVaiEl8NRdvHcT56qc%2BwdCARaMu2EitaHudNS6SDRjMOXQRojpQBwN2lnLpp7%2B%2Fwfo7nEAib6nKtavF2CCN%2FvzTLiSiK016tX%2BF%2B0Y2g%2FteXbSjdU6RgCBiBaGGyEMKNGv%2BMfzXih2ydmT3IZo6pwA6elSVBkOwgA7ng%2BE8qxfNnESeFzsFU7ok2gYpKvkDOV1YcqTlYRWFKI6Xr%2BFY4BIqxKDy7pygf0L2OyP9meHv5lGCk0eNHe8%2BQCnugAg4%2Fob3Utv%2BEPUIsv8ryQooj4%2F7PKnmYdpDkA6ag9YI7RYL1lkyNloqlANwB%2Bv88yqKP49huV71rebhjxTMP31JzgYg7q4Ic41fhGyBJniMpQJSiCsREKTHelML%2FWfrtIBmrFU5G3cnym6tgPHx3GyuNI0eg02gJJWip%2FucnA6F7zXCeZtWBKNj8ITu2PlTpj6X4nHKBMB5e%2FV1Waee356AD5Aefzhnel%2Fb431nkAuNg14HmzMaFAy%2BMllAiktHiKLfI639bwaKSPV97cB2pY3YOy8mfqvixHV%2B85YSHygl%2FIaibAGi9wNV7et5iH80ySGdR2Rausb5gOyEy2MIGpxMMGOqUB91DlOQbsCxhMJFD3LtetmtRqDYlLohJiEUwDOiMex0KvLSMGGiri0zUngNdBlSUdZD5F7dXaOb5oHrVWcnwpJNZKkIuICR%2F30ujNpN5EKBrqqy4srWGSuhzqKXVUq2hJep3C9QPbqCkA9a6X71K6HDYTTw483e3w39MKs%2BVOT2qB7g5Xxfe7usblRqz6u1n8jwa%2BOnrj66w9unIHI6xcuxR7GS6A&X-Amz-Signature=de09cae9b41f167e16a09b6ff88c5bdab5377015ae415058df4d46d01194c895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65MGQBR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2Fa5ZZRcAdqPKI6NaJ1VfBZD%2FhkDycWaPuLdk%2BslOJjAiEA%2BZKDApsV97QoBmatjG%2Bk3qWOqkr2NINB2j2M%2FY2ik5AqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNnU70yV5nnFnR6USrcAxM3MMGVDygGvnX1dmCTT1lvT7qTO7a%2Fop8oPh3wtiM7Q%2ByoVaiEl8NRdvHcT56qc%2BwdCARaMu2EitaHudNS6SDRjMOXQRojpQBwN2lnLpp7%2B%2Fwfo7nEAib6nKtavF2CCN%2FvzTLiSiK016tX%2BF%2B0Y2g%2FteXbSjdU6RgCBiBaGGyEMKNGv%2BMfzXih2ydmT3IZo6pwA6elSVBkOwgA7ng%2BE8qxfNnESeFzsFU7ok2gYpKvkDOV1YcqTlYRWFKI6Xr%2BFY4BIqxKDy7pygf0L2OyP9meHv5lGCk0eNHe8%2BQCnugAg4%2Fob3Utv%2BEPUIsv8ryQooj4%2F7PKnmYdpDkA6ag9YI7RYL1lkyNloqlANwB%2Bv88yqKP49huV71rebhjxTMP31JzgYg7q4Ic41fhGyBJniMpQJSiCsREKTHelML%2FWfrtIBmrFU5G3cnym6tgPHx3GyuNI0eg02gJJWip%2FucnA6F7zXCeZtWBKNj8ITu2PlTpj6X4nHKBMB5e%2FV1Waee356AD5Aefzhnel%2Fb431nkAuNg14HmzMaFAy%2BMllAiktHiKLfI639bwaKSPV97cB2pY3YOy8mfqvixHV%2B85YSHygl%2FIaibAGi9wNV7et5iH80ySGdR2Rausb5gOyEy2MIGpxMMGOqUB91DlOQbsCxhMJFD3LtetmtRqDYlLohJiEUwDOiMex0KvLSMGGiri0zUngNdBlSUdZD5F7dXaOb5oHrVWcnwpJNZKkIuICR%2F30ujNpN5EKBrqqy4srWGSuhzqKXVUq2hJep3C9QPbqCkA9a6X71K6HDYTTw483e3w39MKs%2BVOT2qB7g5Xxfe7usblRqz6u1n8jwa%2BOnrj66w9unIHI6xcuxR7GS6A&X-Amz-Signature=6cc43424dc10037ff5364d99a1a5a66a43a1d08979cb9ba39619d2a6a36144f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFIE236%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClsuhjYUUo%2FuQkBj8UnQZy9P8MT%2FA2NsG37jSyEMj%2BAQIgL48BoEn6SYJNveC9bAUexkAWr02K4cGQ4rcvlLsoHd8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTOHvLiyi21WxmsuyrcA0nd7KPlEKhMfnSKy5f3qjpcUH3%2FNFNfRyDYxyTMm8rZWUlP3YC7hp%2BXTHNmYGfckO%2FOOdusQekr15UY5yYD0YbYiycGZH5nVwByyat0shOgyjJNVe5D6Em4r2JS%2Bb7nGKvOnjFGZGCATiBSpNoPIDXkKpFNaxtFYwfSbSC6bfNRShESLCBUlvq5SUUn94rbmK8y9RypFGf7Qx6FRku3E0UQL9r35%2BYFHQHh72OXziM1LgyWYkKZsAY1fuIrchzrKfsaKMTmOwWwlUyayOedu7R%2B8m1T3q1Go93z5Q7t5UFDLyHp2aO1ELPLJ6R%2FglapVq6HEuT0Xxi3szljwHosKg%2FsUtxE14UnTUtkmgXd4C5KMZnQpYLGoj5ybnHYNEn%2Bswj1oXSvwOKKniJj7sMaFOVB7BQNj5YKiZw671bKEJPHcGHfqKcxuaXFRkxF5xfym7GBIGlXPnm6hSdTB%2Fd4Hn5vEbaCGzajzRs9kbioHhvEw2q4HRb3p%2Bk%2F5MMiE5I%2F%2BJA%2FGGoeaZQInnjhtNdC1RizCLqixGP5csuKFT3Xs9oJBAumL9z8aX5ljJCZ1hN%2BFasQJ2UULB5ZHC2l5rFqr%2BeoKqEOkbZwVu5OakJlVIjlvoRL7Z5DVfM33BOqMKuqxMMGOqUBa2sYCuMVH6jzZe%2BATACkhEzhP8lD9HSLDc8xg5axZzuAfq5xzazxhRz9SiXAOkOuEYWtI5UMJOrMgNy2spgcZKI1M73Xj5cwDa6WPzqqvMzcCvmZMlhCXfkUY7eJB9NhI2g0eEUs8zqEp9uoSVBUeS6D7Rk09ZzZ0aUCRW8mp6XwMte8Vno7QcSda898IZldS3v04row8C7t9Fs9QtLZqYqHi7VT&X-Amz-Signature=8ee0d97655050a21a2fc7b599e75439b462c44b6c914684f853eab99b16d4196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXL7T24W%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMAbLwHpeFHXKgECVsjlPTB7qfttbOZojT4MWxmHiLswIhAPQOjZcD26aP1E0GEH9IH5vw9N734y0%2BIq4ixR8iXfmxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF0C798uUnnwEe2xIq3AOCku7TUWO2CPPbkZ5zupvJq0gV6lq0yHAGGu33jpCeTEb%2BXXjW%2B2g3N94gZM8PLf92cJcKWM5ulJkNVO8dgSXSgA4%2B8xFW2A3JVc3zB6czkqoOyKRvz41GBDzVW3QZtt9icVBzCFZFb0glsGjKqhl6lYis7DRfdRm6JUPqOPWzt85n5CKNmQm%2BVOwEcNxqV4WqEL8dctwGIgFW86CPK%2BlL6s568gUAaFxdN2CR7Jr34Es8jCe0eSX3SVM8gxIJLCju3QlHriNAlGAkvPXsMIKwx1kVHT0Dyk3GpBzZ%2BCjanNrmZ2crU4n7k5G9VkcrFO40PdyWCEPmLyXcuOfCX7D5LnMECTZ2MDLE7O95rI3m9i26VcP91EuPQCwXAzxBjAs0XlVX6zDGqQXARAuuoUsSLu169l8rhiPEAWXOEwwuwjDN7BzvaLFjLYAeCVBWMva6Jo2WJQMgB6MaI0vRctLG1xACcO91rpxFWBa5yn9odlWqJWlSySW%2BceiMBePdai2hmmMdUCsDAvaLa7pNY4XH5bE6yyX2ib%2Bfsl7%2BmNxgZsGItioVS4%2F%2FKk%2F3P05G9Ss09%2FuNy3GJogEDBnnvxBBRb4Ce4F0CRR359sruv0b3w0SvmzbN%2FfbXBhP6ZDDrqMTDBjqkAdjjPBM3zXuO70VwBaay32regdcsPyuTnAP9Oz7%2B0DpgZ7SbXeCe%2Bn%2F9kQaum%2FqnDAXni383VAR6etYJYnE2ZcVcbSJ%2B%2FreU8s6gXOt9Bu7nf%2BfwliMAGhLmY7Pdo3cv6RrGUorbVjpG%2BJfpwRSbdhw98EEC3RDfWaP6BppDN6GIrb6YQ6W%2FSGRBmBPkguBZNji8gRBuilqUg%2B2ov2E6SE24XrpR&X-Amz-Signature=bbdeac65837d3bbb84319675f91df2328b73d47b4f0f28354e299f4e8efbc117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65MGQBR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2Fa5ZZRcAdqPKI6NaJ1VfBZD%2FhkDycWaPuLdk%2BslOJjAiEA%2BZKDApsV97QoBmatjG%2Bk3qWOqkr2NINB2j2M%2FY2ik5AqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNnU70yV5nnFnR6USrcAxM3MMGVDygGvnX1dmCTT1lvT7qTO7a%2Fop8oPh3wtiM7Q%2ByoVaiEl8NRdvHcT56qc%2BwdCARaMu2EitaHudNS6SDRjMOXQRojpQBwN2lnLpp7%2B%2Fwfo7nEAib6nKtavF2CCN%2FvzTLiSiK016tX%2BF%2B0Y2g%2FteXbSjdU6RgCBiBaGGyEMKNGv%2BMfzXih2ydmT3IZo6pwA6elSVBkOwgA7ng%2BE8qxfNnESeFzsFU7ok2gYpKvkDOV1YcqTlYRWFKI6Xr%2BFY4BIqxKDy7pygf0L2OyP9meHv5lGCk0eNHe8%2BQCnugAg4%2Fob3Utv%2BEPUIsv8ryQooj4%2F7PKnmYdpDkA6ag9YI7RYL1lkyNloqlANwB%2Bv88yqKP49huV71rebhjxTMP31JzgYg7q4Ic41fhGyBJniMpQJSiCsREKTHelML%2FWfrtIBmrFU5G3cnym6tgPHx3GyuNI0eg02gJJWip%2FucnA6F7zXCeZtWBKNj8ITu2PlTpj6X4nHKBMB5e%2FV1Waee356AD5Aefzhnel%2Fb431nkAuNg14HmzMaFAy%2BMllAiktHiKLfI639bwaKSPV97cB2pY3YOy8mfqvixHV%2B85YSHygl%2FIaibAGi9wNV7et5iH80ySGdR2Rausb5gOyEy2MIGpxMMGOqUB91DlOQbsCxhMJFD3LtetmtRqDYlLohJiEUwDOiMex0KvLSMGGiri0zUngNdBlSUdZD5F7dXaOb5oHrVWcnwpJNZKkIuICR%2F30ujNpN5EKBrqqy4srWGSuhzqKXVUq2hJep3C9QPbqCkA9a6X71K6HDYTTw483e3w39MKs%2BVOT2qB7g5Xxfe7usblRqz6u1n8jwa%2BOnrj66w9unIHI6xcuxR7GS6A&X-Amz-Signature=bada8c53b7befeb98670e43619f85d34b71a42f8785688d1cbc512ea2adfb5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
