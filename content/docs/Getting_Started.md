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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PJN35NV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGGSFEz25s%2B7jHbYTplCvxI4RHtNyQc3sDSmEuOiK5%2F3AiEA9RoL1qFv8%2FV2do7MHd8Nvn6GTI6XbuGDk5ahzllcebgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDOkjnRJxdEpyP5jjSrcA6KxzFNAP8hzqcn7qG4q%2FLfMoLz49uJqpA5hKKe%2FWHcVYQmKKDnSWOGSO%2BXPS7LiYj1CUtVjUC3DBeuHSiGfGl%2FNZbJUoGjulTzBoXrBMB2xU21d407vXKHCwGxqMZ9%2B9ZCpIpMoO0l%2F%2BqUz7kK2vWFS7UOxgh9I4xVP%2BWi1nIzBGnRA5Qy%2FyMchbRsTiHz5kmBBdnSqIXMjWiRKZuoL%2BXn%2BWpCKuS2L%2FycXBcqskgbFYBEM92ZdYy6landd2vIJqDs5E4AAFmzCya1XofgY2qGPZDLe%2Bw0YtUWwemGwSEf4RK4hESa8Be48I1iRaNKXAnCMnhS%2B%2F29%2Bl9n%2BskCtf%2FeyLUFkbRjihoT8%2BXR%2FIvnS%2BuxCvYMBL9yFNT%2FHTdL%2FkU8mUsN1%2FT%2FiPWaYI47KwqJ%2FsMGnqwR6lEgOoztK%2FOkTrsYl7Si1qtzkTAhiw3QL5bGCXajzcVa0RZJoSglEGB1fHp%2Brg4MMUfAiDZ68ssSZ4xgnNqGzVJCxu4geJC45xxNtTct6cBRzfy0q7K9eNmdi7AKqkqCFh0yYiBSFSs9zttfIJsLLa7NpiRaIMnrfiXiYljeUeuSQ4NlilTjfIVkYsP7pv8IhJ9%2BZhIfQI1rFFPw8lNCfQQr4qW8JMPaysb4GOqUBuKWf1UMdFuEu6992ep%2F3oVnBy7sBKmKH5uvS9r5VTFs4iLoyKJT%2FakkHfQbGMH7r1yQY490zhpEYPMvyLSv6a2l0Xxn3WB5VzxR323fjeaUNsoC5kzqoCKuZaXxtCzZrYAOlvQlz7aDA9yFvbbODMFQUGiePKwrYYG%2FdNG%2BvCn1dJ9BRsCVxxYnlP8xtunGA%2BxyK95hgfhLdDLss8ruTdaM453dL&X-Amz-Signature=327b18c1700b6ec331571caa59e3cc5468e6cf644712f0197183777d2f6a4b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PJN35NV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGGSFEz25s%2B7jHbYTplCvxI4RHtNyQc3sDSmEuOiK5%2F3AiEA9RoL1qFv8%2FV2do7MHd8Nvn6GTI6XbuGDk5ahzllcebgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDOkjnRJxdEpyP5jjSrcA6KxzFNAP8hzqcn7qG4q%2FLfMoLz49uJqpA5hKKe%2FWHcVYQmKKDnSWOGSO%2BXPS7LiYj1CUtVjUC3DBeuHSiGfGl%2FNZbJUoGjulTzBoXrBMB2xU21d407vXKHCwGxqMZ9%2B9ZCpIpMoO0l%2F%2BqUz7kK2vWFS7UOxgh9I4xVP%2BWi1nIzBGnRA5Qy%2FyMchbRsTiHz5kmBBdnSqIXMjWiRKZuoL%2BXn%2BWpCKuS2L%2FycXBcqskgbFYBEM92ZdYy6landd2vIJqDs5E4AAFmzCya1XofgY2qGPZDLe%2Bw0YtUWwemGwSEf4RK4hESa8Be48I1iRaNKXAnCMnhS%2B%2F29%2Bl9n%2BskCtf%2FeyLUFkbRjihoT8%2BXR%2FIvnS%2BuxCvYMBL9yFNT%2FHTdL%2FkU8mUsN1%2FT%2FiPWaYI47KwqJ%2FsMGnqwR6lEgOoztK%2FOkTrsYl7Si1qtzkTAhiw3QL5bGCXajzcVa0RZJoSglEGB1fHp%2Brg4MMUfAiDZ68ssSZ4xgnNqGzVJCxu4geJC45xxNtTct6cBRzfy0q7K9eNmdi7AKqkqCFh0yYiBSFSs9zttfIJsLLa7NpiRaIMnrfiXiYljeUeuSQ4NlilTjfIVkYsP7pv8IhJ9%2BZhIfQI1rFFPw8lNCfQQr4qW8JMPaysb4GOqUBuKWf1UMdFuEu6992ep%2F3oVnBy7sBKmKH5uvS9r5VTFs4iLoyKJT%2FakkHfQbGMH7r1yQY490zhpEYPMvyLSv6a2l0Xxn3WB5VzxR323fjeaUNsoC5kzqoCKuZaXxtCzZrYAOlvQlz7aDA9yFvbbODMFQUGiePKwrYYG%2FdNG%2BvCn1dJ9BRsCVxxYnlP8xtunGA%2BxyK95hgfhLdDLss8ruTdaM453dL&X-Amz-Signature=553ad068fc0e30b955d296892b2be58db90a132bae234c7136bdf86c36e5f494&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXCZN2V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDkOTtEnCGEdkpYcr%2FgxQOUKTgNGyxxJ4V%2FOAl1NT19gAiAh2wx%2BTfi%2Bu829dNTrM4lxzB8lPP01OaUoDGz6E3325Sr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM14ZFAUaKTxnkYNToKtwDYqljDFyrjgRgt0Pt%2BIeo8ffJc6M4%2BUxZrqYoS0256Hu32CgyfFJHZ1l6q2gjESC0shcjSKTnNlRvR4nkJ7HcPrxPp4XkqtN5ofk%2F49y7IiSLtkYo%2BnPMtEVirT09G%2BH%2BSvFbcHlnUHnkYCRZGI1HWTHJI63qCtu9jISlLqOflpCddEbMzYXhAb8Iy7prWr5D6KTtCx9SyEnMlU%2BEb7t4iTQjHYJ8XB3gv%2Fx3Dxg1XKekM1msMzeVLeIVq47OZDBs90w4Sxwri3qokaQlEeNz6dIgYAoo%2B1iR9N7RLKDRDBtgjTh0vFOv4qyzRMctSwTJHJJShLoQtryEgQDiIFpTom3F%2Fpd1Tv7PyK7bEgNERF1YANscPmAlYq%2BaBcdV%2Fp5a6F6kujRc9jBBXXD8RQubi4pPJxDhcqW%2Bj8gLVS5bXllN9y2gaNh5AiCxxvjiQpAv0Kor%2BYatR%2FRCYFMFP2QeXHYOCMvnMFnDVxdw5Hb1w%2Bn2zQg1SYuzb2RNrDKo7odHw99J0gdn%2FCzHFmjSMQIpJazhmAeTkzxjvSmqM0BQjEwigicWULsGQ26s7%2F15vUEH8UfsPsDY0gKe%2BXPmkn5r%2FHAxby2tkZE4v6M2agG8OgxuKu2ksIkYjx3MY0ownLOxvgY6pgGvl13VtOGtpRbLuxxmLAEbe%2Bi%2Fi3RKPFlqlcY5iFnNzBKaG3akbXWQXNXQtYB%2FjK%2F24epv8Kp1G2K2cABhht7c8ritZKa9jMe6uiQhbcy3%2Bs4XiRTW2weEZuOQ3Yy%2Fi8uKBZdE4hl%2BpSerJiiQVMWXgHPhPi9bH5maxnJW4HWQQxzVvXQlK6hob%2Bt2iQLTmBWuDC7Jvy48k7NoiUN6wl1A%2BH5yFpsO&X-Amz-Signature=6bc0b7b0f2848e4ec624b7429753608277eac1b598fca5d03890ef1fab7fe077&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXGTT5N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDtDIVnAHiZbo14oaLqrtx26Fe7Tvgl3t0yoDtH5cmY2AiEAnTwWPomYHpFEW%2B0aHVbZ31KC5%2BzObsMAGEM%2FKwj6r74q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJd9Nf8JQ%2BvOUDrOVCrcA%2FlTDtC6N%2B4sOvsxN2aNEx1iAhi12cxLr0UtFWGCpf4eYMHrZVSH1HUzDNdlP21ZA%2BVfDM6JqyGr1Kwh1ysV1m2RV9APOAe6BEx%2BgkEIbYGByOV8wO6EgCVHYP5UZSTz4JH%2Bv7KQTMZJ%2Bj7KDa4G%2FOMLqiIs89rSvarc98rdEAJqSagaA75JqP6NLtlXvUjTpxxxbhn0w5VYk6y6CjizkmXHuoA47hd0QIl9K93fMul4VjMjuk2DCCuMXST3Ystx8uGyiedlIBOwuGscWkxhwtFgLVr04%2FAzCbo6Irs8S96Rgw%2Bkbrxjv6wTZJ6jkrS74S2lDinQ4wd8rnJnQhqyaYs1pnsebHVCheWZoLXc06h6b1cYuQ6Vp1Az5PRxCGwppfneLzCBAmDlpB0z8RiHFQHf%2FmMq10VIX10%2Bod4ZbSsvnTrBY4n4gQ1fVJGFpOjBVQJsw4yjcXXAfLNPeVfSWTeXzKCkkHEnsz1cBeK8BwN4kMq0UOJGpMUslq4EUetjnxdHyEIqJ7%2B8Pc1epQLADW4g42GwEXRB%2FixoTRbf5%2FuSOnkY2oY6WlDPJpsPzgRvVW7LysYFRMjxF24WK7JVA7h8a8Zi%2F%2FSetjrVdiBooxb%2BT6oPJuPiONnEE7LOMKOzsb4GOqUBseSHb4DpQ48fA4kl3T8G4WGiyBkQhpWlqcb%2FKjenWo2ElJdysGZN6DBNJZzevcgz01r4NaJw6viKU7Io1553ihD2OVxpLQyfS%2FUlByALdtt%2F5Tf3a%2FzHA%2BsCCF9CX1APRLFkzQxuvfWNuVCvSlzXtsp6gvygF1EjTAk9WTR7MviTC2%2Bjbl7jLDc52zJ5FafXdYXkm%2BggcI9SIJVjQBA6cnuj6cs8&X-Amz-Signature=38728bd0af2e88e6bbb93a3e1b9ee15b4294b473e31944d185ef7d2916455d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PJN35NV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGGSFEz25s%2B7jHbYTplCvxI4RHtNyQc3sDSmEuOiK5%2F3AiEA9RoL1qFv8%2FV2do7MHd8Nvn6GTI6XbuGDk5ahzllcebgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDOkjnRJxdEpyP5jjSrcA6KxzFNAP8hzqcn7qG4q%2FLfMoLz49uJqpA5hKKe%2FWHcVYQmKKDnSWOGSO%2BXPS7LiYj1CUtVjUC3DBeuHSiGfGl%2FNZbJUoGjulTzBoXrBMB2xU21d407vXKHCwGxqMZ9%2B9ZCpIpMoO0l%2F%2BqUz7kK2vWFS7UOxgh9I4xVP%2BWi1nIzBGnRA5Qy%2FyMchbRsTiHz5kmBBdnSqIXMjWiRKZuoL%2BXn%2BWpCKuS2L%2FycXBcqskgbFYBEM92ZdYy6landd2vIJqDs5E4AAFmzCya1XofgY2qGPZDLe%2Bw0YtUWwemGwSEf4RK4hESa8Be48I1iRaNKXAnCMnhS%2B%2F29%2Bl9n%2BskCtf%2FeyLUFkbRjihoT8%2BXR%2FIvnS%2BuxCvYMBL9yFNT%2FHTdL%2FkU8mUsN1%2FT%2FiPWaYI47KwqJ%2FsMGnqwR6lEgOoztK%2FOkTrsYl7Si1qtzkTAhiw3QL5bGCXajzcVa0RZJoSglEGB1fHp%2Brg4MMUfAiDZ68ssSZ4xgnNqGzVJCxu4geJC45xxNtTct6cBRzfy0q7K9eNmdi7AKqkqCFh0yYiBSFSs9zttfIJsLLa7NpiRaIMnrfiXiYljeUeuSQ4NlilTjfIVkYsP7pv8IhJ9%2BZhIfQI1rFFPw8lNCfQQr4qW8JMPaysb4GOqUBuKWf1UMdFuEu6992ep%2F3oVnBy7sBKmKH5uvS9r5VTFs4iLoyKJT%2FakkHfQbGMH7r1yQY490zhpEYPMvyLSv6a2l0Xxn3WB5VzxR323fjeaUNsoC5kzqoCKuZaXxtCzZrYAOlvQlz7aDA9yFvbbODMFQUGiePKwrYYG%2FdNG%2BvCn1dJ9BRsCVxxYnlP8xtunGA%2BxyK95hgfhLdDLss8ruTdaM453dL&X-Amz-Signature=7a972b4c7bd9f6f590df9e4be54b8b9d2f2200e79aeba7619507603ec62d54c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
