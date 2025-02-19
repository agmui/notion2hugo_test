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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJXNVSK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEwqgDy0rEWRWR%2FI3DbzQ84owyaqL1gSuL5spCZmA3KxAiEA5okb%2FgnY6gMXSbPuIMIyHGizmGb12gS4fKbKEgzL14YqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUd92XTO%2FqVGBDQXSrcA%2FGWGNplWSFAb53BZuxtfrxP5nkzneYUGN8xNJ5SUOzp18swjutZEUYfPB9O1ywS8b4I%2Fr2FxEGw5jj8lTQkEWUn%2F63Bhs6pSY0hHbJAvmrNfpgPtROy47KctCkfL2gPXk%2Blsl6C1BPKwM4ES8zAfCnTpXRNet%2FhC1V%2F0fE%2B6vZK3xMzSmJSYSYMLImtz2tylYpT6kK3FCMARSsLHvT%2BcO0UdoipiEiSHZbd6SShsSSQfU6XNA6DC76NskbNBYKP9li%2Bf5vDzPGNOJ6pwFxfXyTVbntKkANDLJlzRlVb96Yc6bBsReTY9jmxym6Dvc2Phj3MMLNE6%2F%2F%2Bq%2Bz2c2347D2QoKpPlqbUdyTF3%2FX1UVbSj0B4rb3pKIECdTNnKcU8Xv82tn0PkcFhe7RKyUoDdtqZIS6wOlEA5xK9PlzkBSrttTBrbi9uy2fzM0Lydtn%2BBL8iaOxpRfMKKo1fCbfh2sneCc7bo4vCjJ9ortQqQeGIKIFd0yk%2FNGjJJd5HGWdxP%2Fe7OHgu83m3FI5dNko1t9rpz8%2FxDZlUOG8iDy17F1daAenFdMdeSBk0Ue6DXf7fYTMYBjg3kDZ%2BCuSr9xrxhfddHP9IK6l79SwID5s08C3vKDnAsRFgesZH9D5qMMPi1b0GOqUBqVQOJBTTS2d3G3uyEtBBvyqE4iZXmzcnYLMqa1RmVp%2BovywPnGaXIw4GiFmB%2Fao5PZA%2Fyn3yj3WUnBFmNuK%2B9%2F0r6UoefnQlQYPvi5Ja%2Fy6o3%2FUoN3BlN4pQEwqd0bGSIjkXdinRQRiNiXEG3f8ArIrkx1MGomxycxMEkQwjNfphRrl6bp3wNir3tAgKT%2BAQtd1112bdJRWGFIKmM%2FYjDNeaskCu&X-Amz-Signature=16a422f6eb41a11cffe7b021d498e43eaf39cfcb330a40cb12012aaab8e7c45c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJXNVSK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEwqgDy0rEWRWR%2FI3DbzQ84owyaqL1gSuL5spCZmA3KxAiEA5okb%2FgnY6gMXSbPuIMIyHGizmGb12gS4fKbKEgzL14YqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUd92XTO%2FqVGBDQXSrcA%2FGWGNplWSFAb53BZuxtfrxP5nkzneYUGN8xNJ5SUOzp18swjutZEUYfPB9O1ywS8b4I%2Fr2FxEGw5jj8lTQkEWUn%2F63Bhs6pSY0hHbJAvmrNfpgPtROy47KctCkfL2gPXk%2Blsl6C1BPKwM4ES8zAfCnTpXRNet%2FhC1V%2F0fE%2B6vZK3xMzSmJSYSYMLImtz2tylYpT6kK3FCMARSsLHvT%2BcO0UdoipiEiSHZbd6SShsSSQfU6XNA6DC76NskbNBYKP9li%2Bf5vDzPGNOJ6pwFxfXyTVbntKkANDLJlzRlVb96Yc6bBsReTY9jmxym6Dvc2Phj3MMLNE6%2F%2F%2Bq%2Bz2c2347D2QoKpPlqbUdyTF3%2FX1UVbSj0B4rb3pKIECdTNnKcU8Xv82tn0PkcFhe7RKyUoDdtqZIS6wOlEA5xK9PlzkBSrttTBrbi9uy2fzM0Lydtn%2BBL8iaOxpRfMKKo1fCbfh2sneCc7bo4vCjJ9ortQqQeGIKIFd0yk%2FNGjJJd5HGWdxP%2Fe7OHgu83m3FI5dNko1t9rpz8%2FxDZlUOG8iDy17F1daAenFdMdeSBk0Ue6DXf7fYTMYBjg3kDZ%2BCuSr9xrxhfddHP9IK6l79SwID5s08C3vKDnAsRFgesZH9D5qMMPi1b0GOqUBqVQOJBTTS2d3G3uyEtBBvyqE4iZXmzcnYLMqa1RmVp%2BovywPnGaXIw4GiFmB%2Fao5PZA%2Fyn3yj3WUnBFmNuK%2B9%2F0r6UoefnQlQYPvi5Ja%2Fy6o3%2FUoN3BlN4pQEwqd0bGSIjkXdinRQRiNiXEG3f8ArIrkx1MGomxycxMEkQwjNfphRrl6bp3wNir3tAgKT%2BAQtd1112bdJRWGFIKmM%2FYjDNeaskCu&X-Amz-Signature=1ca4e3aebd78d21c198541f65c9187183de395a00150c2634be6ad0f48dc5602&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMII7RPU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDEUFhYSiJcIu5Nc7uCQrIYOMNPxOEsagVuD63Nj3FAzQIhANT75g5qIEQjSh2r7i7qgozqr1%2B2sw6gZQhvDaPvClgCKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBSinq2a3BBD7lXnEq3AN8g31YzW127hFJjpZfuQMfdWMEX3Cv2hSjRz20C%2FrEbqcTzWKC8wJQfSMz9pBfomJwHntdu3LxGqjLHXQszTzXDYBs2mwVBFyn1aOvbde5iVli0sSPl9eWKwKW4vDg52gnHVNhcNxJqWxaxo0wk%2Bq8iDhxEq1XWEYo%2F4T6iuu56nGYx8vNe5BcPJfu%2FSgDRTxgNEUTZlVM59GOVbcwqff%2B26r2fmi8Y1MLNb0e2XkRG3YW1rDGPnOXrRZzENhqqDQp3eHnKvi2Magm%2BZcmXYSGWaHKWmlJ9otyal8oI30HB%2BIHjpl1JUaEfPrLbgswawDLwBbIZJpgqP8VNxM7c%2BbctDXCDgUHhoR%2FGWA%2B6h%2FpYkYmMs7hmQ2U9mto2YtMpOuCrgvZxp2r3UhfvomWJPU23gPxymGPKZ9qDgGJH2l1idoCdHEWZLMvclYZHn16SfHnCEiGZpepIIlNNU2WNdQhJQATbH5uRmv%2FylC1ddN6zjtK95GhjcTByB%2B5n5AdCf0CHGlq0nDfWCM25hiXl10VfIcZh9M2y0XxDhKCFpLbHXjroqthSJvzGALrdSCrzPHbYETn2JK1UisUozSouNMWKwcyiBTPvuI9vjqdo%2BuLTCaMHSBbwIGgwBlhKzCw4tW9BjqkAdD7rA4dH8m7J98Ss19WZ8hQfluDa6GduuG2Wp7K6%2FHRYnfhVaHD2H6Ud2OtVxfr%2FGR0lppZYk4HzGMaFtcuBfVoAPZIuS0W9dXwRVA9hbOWgxLcbY%2FyZ8%2BboOKf2hiRyG%2B2BFCMJJKSAoMr1lKzhdnyZJUqvNQIDZl%2Fpz%2B%2BaoJtqejSYNlltkB1aBInknaDWpdhl%2FPJiMOz3sWBKrs36Wyrt1S0&X-Amz-Signature=9c84d95a765787ea35464a06344cd3125e694bced7ed9ffc68df1e360b0a21cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LTVFYL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEaoAp5L8qU8Ef%2BdrzDVetEl%2FFw%2F6l5NPWgyuyO2zPwKAiEAvI0EzNAtoeduTwuN%2Fy%2BIC72PinEFYemfLRIpsVvA7H8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD93TiK8HDRBN8%2FS3yrcA%2FE3zTY7nkD6vniCsfkD60Xi12frSUjvF9sx1zT1%2BR%2BvCp4flLZzBNa5SG6m46aCUYhX2gtcgWZovr%2F91pA01E3cbEnFeB%2FG75eyeTu5pdM2IIk1%2FHZV9JA2sAGn9BT33XUEQEw3K7Apd5L8vRXhcD%2F73YfKrokXuhvhEtjC17y19y71kYi1lCcRRot0xkbAlS0RY%2FQ9N1YpGfcX%2FvlTLkK6q6Uq4qErcmJt21LWHVSeqnhWMRu4iybEH%2B2Sk971I3S9WcKz%2FvH1vu%2BpXpsYDnjmw3GgNbgUQS1pj2hyTSoHKW8tUGuWu8fQDn8lVZsg8qIA%2BNfxCgNxrjiO017gD7ZMwWATO2jyBP7hkc4LJjSucncWIOi8rCwn1fBPirdin3l%2Bq7gkrlK6uMjVHQT3P37KIzp2AdQ%2BleZsiPwdYO0%2B58wvFDLGzh9LUsaqS7akWOHnqYqgIMvRVU8U60ueWXhfs8d7gsq8YthpYxWFuGWlY0Vga%2BKPGa4fhhSlYx8CV3BojEzWefYZOXvlkG9oEV0oKOBLv23tZk97Xl%2FjeMjHl6uxm4IN0TZWUU8XUySxmG2nSSyjpEIWwSPu4GdYhbLr188ayM8%2B9jirMbDE5cQ0jIKrZ4AlqfypU2FJMIDj1b0GOqUBpl5auJiCZMQVQP6pRknDKaiUE1mY8%2FP3lDmdEv78HF73ZGKI4zR%2B4ww33EdC%2FTAdUYN7kxWXff6xJd3FBD2zbpPc1eJo6SxWcqgHPF3zbaWH8YJBre89sGKuCpmHuQ44qYDFZUYhpjywd7MuXD%2BXIEjh8n%2BVfvIPqW4PI%2FVxh015i1QYRHAAOlhHiFWGNu%2B%2Bl%2BbJ98oL%2FTLm8TH8pV%2BsCZUVMnR%2F&X-Amz-Signature=95e21987f14b1f512ef4b2a03fe8e73fefb9e8135f7d1f31b36affa2f61c2264&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJXNVSK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEwqgDy0rEWRWR%2FI3DbzQ84owyaqL1gSuL5spCZmA3KxAiEA5okb%2FgnY6gMXSbPuIMIyHGizmGb12gS4fKbKEgzL14YqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUd92XTO%2FqVGBDQXSrcA%2FGWGNplWSFAb53BZuxtfrxP5nkzneYUGN8xNJ5SUOzp18swjutZEUYfPB9O1ywS8b4I%2Fr2FxEGw5jj8lTQkEWUn%2F63Bhs6pSY0hHbJAvmrNfpgPtROy47KctCkfL2gPXk%2Blsl6C1BPKwM4ES8zAfCnTpXRNet%2FhC1V%2F0fE%2B6vZK3xMzSmJSYSYMLImtz2tylYpT6kK3FCMARSsLHvT%2BcO0UdoipiEiSHZbd6SShsSSQfU6XNA6DC76NskbNBYKP9li%2Bf5vDzPGNOJ6pwFxfXyTVbntKkANDLJlzRlVb96Yc6bBsReTY9jmxym6Dvc2Phj3MMLNE6%2F%2F%2Bq%2Bz2c2347D2QoKpPlqbUdyTF3%2FX1UVbSj0B4rb3pKIECdTNnKcU8Xv82tn0PkcFhe7RKyUoDdtqZIS6wOlEA5xK9PlzkBSrttTBrbi9uy2fzM0Lydtn%2BBL8iaOxpRfMKKo1fCbfh2sneCc7bo4vCjJ9ortQqQeGIKIFd0yk%2FNGjJJd5HGWdxP%2Fe7OHgu83m3FI5dNko1t9rpz8%2FxDZlUOG8iDy17F1daAenFdMdeSBk0Ue6DXf7fYTMYBjg3kDZ%2BCuSr9xrxhfddHP9IK6l79SwID5s08C3vKDnAsRFgesZH9D5qMMPi1b0GOqUBqVQOJBTTS2d3G3uyEtBBvyqE4iZXmzcnYLMqa1RmVp%2BovywPnGaXIw4GiFmB%2Fao5PZA%2Fyn3yj3WUnBFmNuK%2B9%2F0r6UoefnQlQYPvi5Ja%2Fy6o3%2FUoN3BlN4pQEwqd0bGSIjkXdinRQRiNiXEG3f8ArIrkx1MGomxycxMEkQwjNfphRrl6bp3wNir3tAgKT%2BAQtd1112bdJRWGFIKmM%2FYjDNeaskCu&X-Amz-Signature=da2cf591848c933bc258cc35ae0b55f839982433fb8fec320b6385b15bf64b03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
