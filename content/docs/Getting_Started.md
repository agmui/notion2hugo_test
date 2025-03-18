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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVMMAK6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRr1F7OJRp5ICbAg6N0zfd0OJi4qNYA%2F%2FzdwS4H4h5pAIhAKfIuFdW00VySe9gOCz06rrrzlUpm4NHXl8WXLYw3Ul1Kv8DCFcQABoMNjM3NDIzMTgzODA1Igz7phNPtkCCQ1xl2Ikq3AOO8d%2FGu7z9aUiEdOtycd0Ams7RdH3PKLPeOYEwX2u7zUHlPTJ5CMHgrTF73k3RZGaSi2zbzxBrH13d5wyxcYOpw3yRBJCHi7BP89oLPE8RHzP7pvt5VKO6M%2FPx0gVYGBTK38N3KZDW3Lrn6vLuSGrZvSaD0W3feqBSJqtMTvkIV53b%2FVYHKtzWn3jMZeU2TbUwgw0JWfWy5gWqW1wh1SX9DV8y2Nhn3jXVM2IS5aNGK8m8BtGvb%2B7Xb6xsd4hUfLpk11d8NsAaRVZsnAkRaKtGHSa2yZ94lpfUf5NubOE67zw6LiVqyuBmPFR62xY%2B34ZPiW7lstzwrlKgLxLqZMEDHbMBuVE9muRXjaXkBZXQmp5NSbuZYIhUKLkn76dsD%2FlTlVWmf0CXGIigT9P9O1fH4eig37w2yxFsF3d8%2FhxudOJQK8M5JZGLscqNPf7TVZZdE4jsWJGb%2BwuTLpoAPSxyRwylPpnJslw7yzresOa9XBALtYvgsd1rRAe1PdzrJi7gne%2F%2BV4eTrEG2Z%2BZ3J0HXzPhg%2ByWwH4o%2FOXItYSKhLgZb87SBYz8ojwSojrsK0d0fxWvdXHzBM8Fp1Pq2UsPR4S5hFyCB6Ily7KUhynYZkbsyaQk9tSVzsMZjlDDnh%2BS%2BBjqkAXGPcQ4xJMYKhHHf4fMk8pmwEgcW2OxMDPH2py1uYl0ALbtyS%2B9HGloVdoBBnju1hNV5s40W1IyuHGFTVyHlwXfBfRqF9r77KyIPU0VNsN4zqws%2F8Zz1y5s6raRKbX6ZEq2Z7ioupsXtMzvLgEUNDMybfP504UProvKPxgSBDVIRz3IMnYTOEAl4l95Gg2%2FEJ0vXKnUfG3VUjAPCyN%2FeWmbupnPL&X-Amz-Signature=f00b5e5cfb15fbc51fa3badd2ffd5c37d5bfa929591cc789f596f8ce3487069b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVMMAK6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRr1F7OJRp5ICbAg6N0zfd0OJi4qNYA%2F%2FzdwS4H4h5pAIhAKfIuFdW00VySe9gOCz06rrrzlUpm4NHXl8WXLYw3Ul1Kv8DCFcQABoMNjM3NDIzMTgzODA1Igz7phNPtkCCQ1xl2Ikq3AOO8d%2FGu7z9aUiEdOtycd0Ams7RdH3PKLPeOYEwX2u7zUHlPTJ5CMHgrTF73k3RZGaSi2zbzxBrH13d5wyxcYOpw3yRBJCHi7BP89oLPE8RHzP7pvt5VKO6M%2FPx0gVYGBTK38N3KZDW3Lrn6vLuSGrZvSaD0W3feqBSJqtMTvkIV53b%2FVYHKtzWn3jMZeU2TbUwgw0JWfWy5gWqW1wh1SX9DV8y2Nhn3jXVM2IS5aNGK8m8BtGvb%2B7Xb6xsd4hUfLpk11d8NsAaRVZsnAkRaKtGHSa2yZ94lpfUf5NubOE67zw6LiVqyuBmPFR62xY%2B34ZPiW7lstzwrlKgLxLqZMEDHbMBuVE9muRXjaXkBZXQmp5NSbuZYIhUKLkn76dsD%2FlTlVWmf0CXGIigT9P9O1fH4eig37w2yxFsF3d8%2FhxudOJQK8M5JZGLscqNPf7TVZZdE4jsWJGb%2BwuTLpoAPSxyRwylPpnJslw7yzresOa9XBALtYvgsd1rRAe1PdzrJi7gne%2F%2BV4eTrEG2Z%2BZ3J0HXzPhg%2ByWwH4o%2FOXItYSKhLgZb87SBYz8ojwSojrsK0d0fxWvdXHzBM8Fp1Pq2UsPR4S5hFyCB6Ily7KUhynYZkbsyaQk9tSVzsMZjlDDnh%2BS%2BBjqkAXGPcQ4xJMYKhHHf4fMk8pmwEgcW2OxMDPH2py1uYl0ALbtyS%2B9HGloVdoBBnju1hNV5s40W1IyuHGFTVyHlwXfBfRqF9r77KyIPU0VNsN4zqws%2F8Zz1y5s6raRKbX6ZEq2Z7ioupsXtMzvLgEUNDMybfP504UProvKPxgSBDVIRz3IMnYTOEAl4l95Gg2%2FEJ0vXKnUfG3VUjAPCyN%2FeWmbupnPL&X-Amz-Signature=317133111cdb6aad90d432d348e058e00ea558fcca7b56dc5b04c8e1112b933e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUHNAJ6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKESSJN6B2vkjOwBEh8HEKT%2FEaHevoxn7NUFN0x%2FDiiAiB%2F%2Bck%2B%2BdwknKv0Rv%2FON%2B%2FwdaV2Y7ZEGJEhOdsbnogivCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMyDVjcTkAju5f15y%2FKtwDFtuyJkJ%2FSrJi6I1sZxx70gIte8JFvWtNk1XJI8St54NpsU4igByXb9JnlRnLpV9On8%2BZmWH9xhnenM4TcdTAvoFK14jJ1PWF8aASy%2FtVSkzSvLQG4GZoFkbMNuF8l1sXnwb9BlcZqCtR6VWVG5lCYVqcUXC0zrFvD%2F2jjqXpn33Jwp2tvxJ3oLVTgi9MwnjxW4YRddGZLaJIAffTxj4290xwGrvxmP9E3gOnEb6xlMtB7knNcBEihJb8HQvd%2BpqqPLoEumIzmvosjG7l6zcxc%2BejVDxXtkkdN221lGzpsWbT42YkmmUduruvpZ2Q3olwnHY786g%2FKts0mN9NvVlt2ZgVdSx149g%2BULtuhqrkXdIsj3Ut60k1otAfeja8T%2FWP011y7HEPbCnBHFCj5dDyPsqio5UUsYwwwZsiKfD%2F%2BNK0HegXSy%2BEtokiNkZqxPn%2Bx9xgADqilkHrXcVwTZhr9kZbhFXcSMEFzjtBXDEHSznxcb7IWrpv7zU6g6vR6dt3ruugyV0iAiXHS%2FoVMEO2m5xsaWHOtBv7OhIK6sXGYVzwCKMwNR7bm%2FW8S3VZy%2BTcHUMndVxcrfHBCcaWnu%2FL5LgcTvMNnfK6z7NfhRM4l%2FpxsWP1QNDmQmcJSzgwwLbkvgY6pgGdH7Q%2FqBOeN14%2FYuK5U8iUZr3PDFHPheSxyuOPONfxoSzU4Xy%2F4582SG3H9rU0CTgVXt9P1ioahd%2Bd7%2FO5evVNHd9u%2F9gfoxUSQDmUgzfu0V3dk4VseieYKTQc3lcEPSpcmVVfOkf3tul0yqZWcUSYfWRhrVPBE%2BgtBfXlVJrNrQA8FzNKHOrfF0L7cHBT29o%2FIeLyh4X02gT%2FCitLPL9aBnZsMBsM&X-Amz-Signature=1114501c78f87988f987bf10325cf3d24a97a3dd570c5ba3dd1490c2c1c1fb28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462FYAUZ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRYyyQtZIvutgsg2oP8j6X6yKscrEYJMwNzSD%2BkGvfXQIhAPAYSzpDPickVhhMsxbaaTF970sjiFheivoTKaxJ0GzxKv8DCFcQABoMNjM3NDIzMTgzODA1Igzx5xD3tlsx2HhwUPgq3AMnPwSoXYjynPAnKtEHnik0mI6EkMLrz1h2cyrr2L7xNcOLThhj1BTzx7z8sX%2FAOFTb4%2BhFV9IoImluWEhZDxvYf8G5ZSbqS7qNIXx4Y%2BVH7pKVP0j4RhEaD9HP1s71pTd18xpHG3%2B8OY%2Bqu3DycFlYnRJYrRwoQNlztI6ZnXDLYlKsgP6Kme5KGkwP5A9u7V896WYczi849zgUZuFjRqDAeDepQXtUkU9zfWjqh1nejFnbmZyhA2xTsoKW2wETDldsPwbJrgQc6non8PgquRxbA7uazhC%2FD4qGEMmrddnJfIEkeCHAlBbCgYOV8uqWmlBMdz4w7Qiw5AEanCxmO4NSfKwcA7QodKNGkxemwA69KLeSfnJvVH66JMnB1CYV2D7qXJ0pelF5JcOSYX1AfWbH192HAv4gzAoHzs47GhxFDTSn%2FSlmP21RanZAvPLd9P3KJw74rs5qyhFWBq9ygBqHDvNJPetchiyWKsqCkVOrnQ9y%2FS0S2FwBwBeqB7dbKTsjM6iRPbhl4XytGeK978mI7gJgEJbMqlHKMSHQtbsh5c02KuPz88qiJVIboRDQH3B5h0PwvXiPzE6QS9uwqj1eC%2BNJIb3mvRjdaAv5FH%2F0WMnwW%2BL3nTdU0yC5szC%2FiOS%2BBjqkAVpn5JPsRnhtOXlkOs2wp2Meqtc4AkJabcpglpunwEP%2FhLsDaS1C0jGfcjKjd0OslJyRq07RhlN6flmGcqOhId9Rkj2%2FlEbDM%2BScm92660eEKWOOUdkzEzeT%2Bx0MC%2BxNDoIA5T9GdexkbzgKZ9stMe5KSNR%2B1dCOq68kjzPLQivJTYWxgrTonBIugxkENSiICXNKKvwYMMlYYZtvKIT3Ak%2B%2BUbH6&X-Amz-Signature=f5821b5b92d4fe257e2464d4302ce19cd8cfe3c9b9ecb9e7a9a805c5664d346a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVMMAK6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRr1F7OJRp5ICbAg6N0zfd0OJi4qNYA%2F%2FzdwS4H4h5pAIhAKfIuFdW00VySe9gOCz06rrrzlUpm4NHXl8WXLYw3Ul1Kv8DCFcQABoMNjM3NDIzMTgzODA1Igz7phNPtkCCQ1xl2Ikq3AOO8d%2FGu7z9aUiEdOtycd0Ams7RdH3PKLPeOYEwX2u7zUHlPTJ5CMHgrTF73k3RZGaSi2zbzxBrH13d5wyxcYOpw3yRBJCHi7BP89oLPE8RHzP7pvt5VKO6M%2FPx0gVYGBTK38N3KZDW3Lrn6vLuSGrZvSaD0W3feqBSJqtMTvkIV53b%2FVYHKtzWn3jMZeU2TbUwgw0JWfWy5gWqW1wh1SX9DV8y2Nhn3jXVM2IS5aNGK8m8BtGvb%2B7Xb6xsd4hUfLpk11d8NsAaRVZsnAkRaKtGHSa2yZ94lpfUf5NubOE67zw6LiVqyuBmPFR62xY%2B34ZPiW7lstzwrlKgLxLqZMEDHbMBuVE9muRXjaXkBZXQmp5NSbuZYIhUKLkn76dsD%2FlTlVWmf0CXGIigT9P9O1fH4eig37w2yxFsF3d8%2FhxudOJQK8M5JZGLscqNPf7TVZZdE4jsWJGb%2BwuTLpoAPSxyRwylPpnJslw7yzresOa9XBALtYvgsd1rRAe1PdzrJi7gne%2F%2BV4eTrEG2Z%2BZ3J0HXzPhg%2ByWwH4o%2FOXItYSKhLgZb87SBYz8ojwSojrsK0d0fxWvdXHzBM8Fp1Pq2UsPR4S5hFyCB6Ily7KUhynYZkbsyaQk9tSVzsMZjlDDnh%2BS%2BBjqkAXGPcQ4xJMYKhHHf4fMk8pmwEgcW2OxMDPH2py1uYl0ALbtyS%2B9HGloVdoBBnju1hNV5s40W1IyuHGFTVyHlwXfBfRqF9r77KyIPU0VNsN4zqws%2F8Zz1y5s6raRKbX6ZEq2Z7ioupsXtMzvLgEUNDMybfP504UProvKPxgSBDVIRz3IMnYTOEAl4l95Gg2%2FEJ0vXKnUfG3VUjAPCyN%2FeWmbupnPL&X-Amz-Signature=cf524b6dc328eae13a1ff2bd4d6459002b987d5c627a2fb88d0287ee29cdb8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
