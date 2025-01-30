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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJKPHLH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2IXToY379GnjxXEy8%2FuVLP7Qs8Bc%2F9WqEbQGNN30MhAiBHM9s4oL1pu4ooFJDtUkYzvnPkGW1ZpxZzKV7ZOW9seiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMehNJhZOn%2F7lX0oJSKtwDM24xOsMffBfk%2BEokfgRPiSn19ieXAtPIxvBsgBFkVzObN%2Bj14NU9X1IUrOIfc4SSi64VNS0TIfLG2JnO9sKQ4gmXtPmFPao7VBXQNnIdH%2BQTPmflp9d7r8B1KqaOe1QtMlDVj1E9hfY0pwhLyVDLzOVF1b%2Fh%2FtRyxvopepkJ6Vr5Ar3cXuduvh%2B6hcQURyzbgOJPNMAxZ1q3s%2BYVGSTmsfhCbg3VSAWENLQVNbqyt3qdjhRNbVAr42nif68Zt5oRa8JUlQQ3DgZpZ7aIJ3HVdPA4RK5rYANk%2F%2BuE2XWDTW7V%2BbgNyjRBZcUEuvio9hM5VKIpa3jZYWOFBT3%2Bp0R%2Bwud8FDZUCH%2BJsPP3HOdFVhtbf4Nbjr5nF3wRwe3HSDqaRdtnAUM035LCKbCsztDI4kDy14F5F0o6gnhvVoU3u3NEKHdRskuhzy0WUtpoMzMeVEeFIO8eZuDBlZ61gzqCNPQC37e%2FncQJ0GcZ14KBh1VBM5hLuHr1qh%2BAgc7VAKZ9MawE4XpUIyKiCK1RI4jQ%2B8QzPEincIl4BnXje7OSIEHHjeDLsIuidhJRMvCNxDYmI7irpKUSWBJyGimq%2FGXWdGrSSlh9d7Rg3V2vYQvMEeYzOHP8lhMHzHd2XgQwg%2F7vvAY6pgE%2FPNkZn5AvJ%2FvALLxHWaSY4lzjMKjv9MedK0Oo2je7EXRnt8XsjlmHtWLUxtWCcycC1m3VnN0bYnRup6J1e%2BxF9biRcUFw9rsvVg887rMgHZHHe3eqMXzRdScphGR5v%2B8EcnST3h%2FqWYZqGN0J9DZoOJCBG4hPK5n%2BFeUMWxRxe75A2f3cHPIZcoRgEHu8SrAW46UUIC7bKvMLc8DG%2FrULh1%2Fmrazr&X-Amz-Signature=d72e6085036cbd9c8b116e79dfd252478b264cde9a245e56c8713763993ec8be&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJKPHLH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2IXToY379GnjxXEy8%2FuVLP7Qs8Bc%2F9WqEbQGNN30MhAiBHM9s4oL1pu4ooFJDtUkYzvnPkGW1ZpxZzKV7ZOW9seiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMehNJhZOn%2F7lX0oJSKtwDM24xOsMffBfk%2BEokfgRPiSn19ieXAtPIxvBsgBFkVzObN%2Bj14NU9X1IUrOIfc4SSi64VNS0TIfLG2JnO9sKQ4gmXtPmFPao7VBXQNnIdH%2BQTPmflp9d7r8B1KqaOe1QtMlDVj1E9hfY0pwhLyVDLzOVF1b%2Fh%2FtRyxvopepkJ6Vr5Ar3cXuduvh%2B6hcQURyzbgOJPNMAxZ1q3s%2BYVGSTmsfhCbg3VSAWENLQVNbqyt3qdjhRNbVAr42nif68Zt5oRa8JUlQQ3DgZpZ7aIJ3HVdPA4RK5rYANk%2F%2BuE2XWDTW7V%2BbgNyjRBZcUEuvio9hM5VKIpa3jZYWOFBT3%2Bp0R%2Bwud8FDZUCH%2BJsPP3HOdFVhtbf4Nbjr5nF3wRwe3HSDqaRdtnAUM035LCKbCsztDI4kDy14F5F0o6gnhvVoU3u3NEKHdRskuhzy0WUtpoMzMeVEeFIO8eZuDBlZ61gzqCNPQC37e%2FncQJ0GcZ14KBh1VBM5hLuHr1qh%2BAgc7VAKZ9MawE4XpUIyKiCK1RI4jQ%2B8QzPEincIl4BnXje7OSIEHHjeDLsIuidhJRMvCNxDYmI7irpKUSWBJyGimq%2FGXWdGrSSlh9d7Rg3V2vYQvMEeYzOHP8lhMHzHd2XgQwg%2F7vvAY6pgE%2FPNkZn5AvJ%2FvALLxHWaSY4lzjMKjv9MedK0Oo2je7EXRnt8XsjlmHtWLUxtWCcycC1m3VnN0bYnRup6J1e%2BxF9biRcUFw9rsvVg887rMgHZHHe3eqMXzRdScphGR5v%2B8EcnST3h%2FqWYZqGN0J9DZoOJCBG4hPK5n%2BFeUMWxRxe75A2f3cHPIZcoRgEHu8SrAW46UUIC7bKvMLc8DG%2FrULh1%2Fmrazr&X-Amz-Signature=339123140e8fde1f127e038badc3f1eb493c7336a7563eb08511b98b6cea2787&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCC35DU%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsRv4vi6h%2FhCIVhXlVR8bFD37uUphdKb7lejBqsbtApAiAkQZg3u1NVInm0IX3V5E%2B7fbusyKjAIyc1CcgFDX2eLiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9mjPcYQmKw5hggVKtwD%2BJmb0B799BOxG1qKlfbTWGPVnvyI20kvlpZd0JMDZrjesPjfPkGUfp2c7tb%2F%2FIwBApM0rPdIdgd33%2BFlwOhfpA99tbvsh4HQ4bEuNDQ%2BgkOVWhUTduY3qP3HEffkauEUQIIrix8DGeHnBI9pE94TBVeYKQhQ24JNCTYcoOlZct5JrZ0lZPVtKLOheLtAmdqYnfvh5Hd9VPN5xqW4my1qFjl0lC0EXtzcJJ9EkZXxmg1sBkyA%2FrfiwAVYCpYF%2Fp3teBwKqBdIplpSt4eUCE0q%2B6Wm9Sc0orc17T8mYdJPzGxnY4iTOGEu%2BUpz1ApPH6bKfwVbSGMVForKKgOHlWJ7v9O5pgot6cTsbPTIJXtlBNPYzIO%2BP2ESiOYdiHfm6xX0gH0nQWhHcnmIhQYV1ZADKaL3ZxSMmHxYDe19ShyZKTXH%2BJR3qcJRWIuY5qv1i%2ByIAoFoHY0hK9H5wsvQW70y4vRzgsqGB8YP5a6fZI1gK2e63ZcrdYWdqwAw9l5rKpMBrFb3vdA38xVRU%2FcN%2Br95UYNXAiHxh633wphadh5t4BaFqBGh9HYv4UKED2qM%2BoWyswLLLuPDIk7wYGUlJbSOnrm6grM%2B2EpZvB1EPH0KAtfjhp55ijfTKoXgeNswi%2F7vvAY6pgEch28G9NW79rryJODz35F8D2BUuIW2rawnxu%2FrIW5ljv7Iybe0EOr%2BFYTow%2BfMm3ZMuPfID892tZ1G%2B%2B%2Bq4NTX1d9wUTCiDeIPvM5KySjzbQnfu4tFuJtPKS2kNk2rMKo1e1yaqfL0Q30Yxo%2B9bsI%2FCCbADAoUSv5g%2FluhO1mD%2BoEidP6xmTRplpSuBfR4RuK4sxofWde2fCy%2Fm35qWpUKTCnnGRhJ&X-Amz-Signature=1624e7723b20d6427b626f679f1d72bd5bbfb24d72a17f296cc4e6e54692d9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V7JCAXK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJUP76bjf%2Fq%2FSgarWIBSrUsmelBy4wEUoPpcRUK4bhqwIhAKaUv2c7eJvLmLovjCoQQTmWdi716lcN6LL0mXj4a2laKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw84kmfOXDOtTATUxQq3AN65Mhp08yHHK2isTv4JczUj2OVUh8IAMjqfWHuVT3i6ptjPKYC%2BCVY%2FN8TcYmYTgAZK2ytW3UOyz4RRRD8Iy8sUngRIUKpsbVHnsnrXtXJZ7hVUJULXcKR6rhaXvtDA7VaR3TY%2BFopeV19Beezvqkj25DoU%2FY44QgHdnTfX653OxPxI5ri4kt9EXSZi5%2BLCDgbYbjZHW3HQ1h71xsNK3gNBpjgNjl99xffoKlWiZbDnjJIV%2FggIeWvoVxUniEJTwA6PewqlUBN4Lg%2BR%2FwEcxZJiM3lbaEjkMobIv5y8UIg%2Be6I36ZOv0tO73YpxeduOtJUMSvymzl7TiUC5H5cubHbtxvn6HMcEUqzB7cHUpyUYGW%2FI8YdzUMQmJEyYKZ9tX3gVLebNanlm7dN71rAEFatvXWdE9qIgyq6HyhhH%2BAcswNkLoao5%2BptOxJ8WN4QaX3FJsl58VumKcMq2wXdHkCqwIDVtoZ0T1z41ozA1tvIWOqykW2H2M3b5I4WozFETJZxgzrsp4ZZx6Ntk3%2F2D7JkO0rHjXTNKgfvmZRiDLpuXCp%2BdhFG03a87v3sf2hJPfEHnTvF%2FUGwggsUbBZTF3Fhwh41ftP7RwJy2kvIj%2FSpHQfAlH86Mdx0pAdJZDD5%2Fe%2B8BjqkATKS6ENZmovfJ5a4HD%2FTDNvPoZLPrGm%2FbBt0ATRnC1AAD7DV0u82nyvem02LA7yCTOmQQQ%2F8shtxaIBJaYbM8ItQqfchJInlmwVcYDl7stnTmSE89MT2At6n4VrjJUX5uqrHE0ZfDDF7fqWY5JVP7L56fNka%2BNOApbAjJ2IyCl0hN22WjLdqv5ZRSe52emz2Uhg6upr5WuhrTCElN%2BEJp2PPataI&X-Amz-Signature=fd15573deec7a0d1ec59639fe269e32b1b0775e954653be2f5aaa72c10359015&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJKPHLH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2IXToY379GnjxXEy8%2FuVLP7Qs8Bc%2F9WqEbQGNN30MhAiBHM9s4oL1pu4ooFJDtUkYzvnPkGW1ZpxZzKV7ZOW9seiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMehNJhZOn%2F7lX0oJSKtwDM24xOsMffBfk%2BEokfgRPiSn19ieXAtPIxvBsgBFkVzObN%2Bj14NU9X1IUrOIfc4SSi64VNS0TIfLG2JnO9sKQ4gmXtPmFPao7VBXQNnIdH%2BQTPmflp9d7r8B1KqaOe1QtMlDVj1E9hfY0pwhLyVDLzOVF1b%2Fh%2FtRyxvopepkJ6Vr5Ar3cXuduvh%2B6hcQURyzbgOJPNMAxZ1q3s%2BYVGSTmsfhCbg3VSAWENLQVNbqyt3qdjhRNbVAr42nif68Zt5oRa8JUlQQ3DgZpZ7aIJ3HVdPA4RK5rYANk%2F%2BuE2XWDTW7V%2BbgNyjRBZcUEuvio9hM5VKIpa3jZYWOFBT3%2Bp0R%2Bwud8FDZUCH%2BJsPP3HOdFVhtbf4Nbjr5nF3wRwe3HSDqaRdtnAUM035LCKbCsztDI4kDy14F5F0o6gnhvVoU3u3NEKHdRskuhzy0WUtpoMzMeVEeFIO8eZuDBlZ61gzqCNPQC37e%2FncQJ0GcZ14KBh1VBM5hLuHr1qh%2BAgc7VAKZ9MawE4XpUIyKiCK1RI4jQ%2B8QzPEincIl4BnXje7OSIEHHjeDLsIuidhJRMvCNxDYmI7irpKUSWBJyGimq%2FGXWdGrSSlh9d7Rg3V2vYQvMEeYzOHP8lhMHzHd2XgQwg%2F7vvAY6pgE%2FPNkZn5AvJ%2FvALLxHWaSY4lzjMKjv9MedK0Oo2je7EXRnt8XsjlmHtWLUxtWCcycC1m3VnN0bYnRup6J1e%2BxF9biRcUFw9rsvVg887rMgHZHHe3eqMXzRdScphGR5v%2B8EcnST3h%2FqWYZqGN0J9DZoOJCBG4hPK5n%2BFeUMWxRxe75A2f3cHPIZcoRgEHu8SrAW46UUIC7bKvMLc8DG%2FrULh1%2Fmrazr&X-Amz-Signature=2f22514db2ce8255139bb6127cbd0d2522c702a9922d44ccb58f33f423a84ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
