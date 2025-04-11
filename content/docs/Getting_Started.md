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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5WWS6V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIByLIH0IXtzKvnqFP9Eu52uJPV%2B%2BYY3ZvFpLDOd%2FdBV1AiEA0GQRpWZRupLqBW%2BFXZqsTjayxAXTcXf43xDBmWkcJ7MqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwHSxKiH0ZGBrV9wircA6VWPHefaAvRRoFCCsy9QB%2BaiEKi%2BExVjrP%2BCv4CMQt8lFpyRYbJbCqyBIVRo9%2Fqt17gllbiQfC3zuP2IhSAem4zKViqNTlIFz5yoxbvnZ3TWU11RQQnFaZK0CQdE%2BOKm%2F%2FF%2FTrIY%2BE%2BUTHvWU9gEkUwhPo%2F3fDTMXzxEsfhzZI%2BrtRfIA3usZbh1WJkiC8nN3MAmFbXAJVjZtIbzglVcJOHPaScFAazLXI%2Bq3878i1qVTJmVNq0U72UQgKKNSfhsMzvLgdjukIOXTvbjSRJTM4bm3ftL7UTdFH6%2B4v6tBG1Qt8F%2FQLCjWxcsZ25Uk4Tv6LOxzwKvtf3ulEwcMBCWtpJtoFlqwsLnMGOyslleYfQ8UrtLhNj9nUPtnq3iXjV4Ww1aIOaCJVBCjYJzKxzue%2FNvKBSFxdHXuLkU%2Be9yqKwt1U0eE5RxBAL8mZNayjCHo75NXbFs3J4zJ%2BcU6jknCZgCQmJxHtHfy17M6TvAP5Gm4yj1OZU9IeL13uvFXvG%2F9KLb8VKVe7GY0nhwSDw5%2B509n8BS%2Bq8gb%2BgQZn2SPnnsJe9k8ZGnE8SzAHUYdOPNBb2Yob9N%2BXJYPI1UBWH0jjHAdMxiqCCZ%2FgjLUyMuE%2BOK03Q7Yd4XMwmhW3oMKWB5L8GOqUBDsVS2dCb3da8JQxSt57yP669SXpb66q6TXZYC8OvJcNOAzSnUiwxAIBB75JtH23fuzTxfJ8E88bzswUNfwtFhvAwDjnjAlRncLGXHW%2BB9K0Eq%2FiY4vdHkDQXnRCYFEBzbKktpMxt7hIxoBhcvBkpuJTE6HSUltxTgwH%2FmzYuVa9mO9Xmgp4vn7B6M%2BXI0sxV%2BqO1yoeNUcnC0ZZuTRBVkQb1dnS7&X-Amz-Signature=a120cb84f6c6eb76392a709e1922c7de11da4badf54d83e01babfebccbd8d24f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5WWS6V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIByLIH0IXtzKvnqFP9Eu52uJPV%2B%2BYY3ZvFpLDOd%2FdBV1AiEA0GQRpWZRupLqBW%2BFXZqsTjayxAXTcXf43xDBmWkcJ7MqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwHSxKiH0ZGBrV9wircA6VWPHefaAvRRoFCCsy9QB%2BaiEKi%2BExVjrP%2BCv4CMQt8lFpyRYbJbCqyBIVRo9%2Fqt17gllbiQfC3zuP2IhSAem4zKViqNTlIFz5yoxbvnZ3TWU11RQQnFaZK0CQdE%2BOKm%2F%2FF%2FTrIY%2BE%2BUTHvWU9gEkUwhPo%2F3fDTMXzxEsfhzZI%2BrtRfIA3usZbh1WJkiC8nN3MAmFbXAJVjZtIbzglVcJOHPaScFAazLXI%2Bq3878i1qVTJmVNq0U72UQgKKNSfhsMzvLgdjukIOXTvbjSRJTM4bm3ftL7UTdFH6%2B4v6tBG1Qt8F%2FQLCjWxcsZ25Uk4Tv6LOxzwKvtf3ulEwcMBCWtpJtoFlqwsLnMGOyslleYfQ8UrtLhNj9nUPtnq3iXjV4Ww1aIOaCJVBCjYJzKxzue%2FNvKBSFxdHXuLkU%2Be9yqKwt1U0eE5RxBAL8mZNayjCHo75NXbFs3J4zJ%2BcU6jknCZgCQmJxHtHfy17M6TvAP5Gm4yj1OZU9IeL13uvFXvG%2F9KLb8VKVe7GY0nhwSDw5%2B509n8BS%2Bq8gb%2BgQZn2SPnnsJe9k8ZGnE8SzAHUYdOPNBb2Yob9N%2BXJYPI1UBWH0jjHAdMxiqCCZ%2FgjLUyMuE%2BOK03Q7Yd4XMwmhW3oMKWB5L8GOqUBDsVS2dCb3da8JQxSt57yP669SXpb66q6TXZYC8OvJcNOAzSnUiwxAIBB75JtH23fuzTxfJ8E88bzswUNfwtFhvAwDjnjAlRncLGXHW%2BB9K0Eq%2FiY4vdHkDQXnRCYFEBzbKktpMxt7hIxoBhcvBkpuJTE6HSUltxTgwH%2FmzYuVa9mO9Xmgp4vn7B6M%2BXI0sxV%2BqO1yoeNUcnC0ZZuTRBVkQb1dnS7&X-Amz-Signature=9aaf77e9388f7c46de73c96fdf93acec70f29dfe319a22deb22c169d25fd30a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGMZ4HB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGa4xOUkO8boq6ymo3btrrjYZ64puynlG%2BAam0FOYjU4AiARh7naGwNL3kK%2BFPtHOZVdheBpPrudWtIHT16xI6senCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bn6SAYpGRU5pFNJBKtwDV5mloFDWJPvqtyFl8E%2FUrOiPn1aa1tYIn12hupRoX3i%2BCnNE%2BVqbMBBz1XDS5GuN27kzbbqGlAsbb1FAUXOpOqgwU3YlYjPznPEvZM8gUrMHc%2BX3af%2B9StQNgBstgy2g8YPtI%2FXPL%2FNpA%2BN5DEr4WyzAUdeQSsmlzn2iSSDSgl0sfrzDBgVsx52SIyUgz%2FW8%2Br8O2tTEXYYMXdfc1inKQCeoSOc5OxRwuYkteLh0C9NOHmXnABep2F%2Fv8Jtf05wiyKBWjrCzaxEl%2B9iK8SHT0YKGF4KrwYw%2B5obzwUcU2Gy8XKPsrpOKpzJIzTscbiDZxhNp%2FcOaSkWniqpqmaOeGxf2O3t1yyufMS1O3ep0F55G4kIo%2FtudDJSriLPgPWZB47p8pjjPqMbl%2BVD4i2QrHdDXxjXB31Bp63i4I22h%2FSvjyheerJiWZMvL3eCDoLRNadu66zLkQ14MT0OrFUU1jQB0vamJRen0xn3nDGoSJhdj%2BRv%2Fi2ZRN0u45AwwLTby0exxv8XA%2Blu%2B06Hr33LGJApuEPr8MV4Nw5NvfPxjZeunkvBtFTR9RecV5ppUVvyo5sm6ALBeHj8Af2TCQs3ezFhgqO1jusYTUli0gi%2FT%2F6%2BkW3T6k0Lea1bQSF4wroHkvwY6pgHSjMi8NNvNAhf2FjrFPQ4GpBazOke8RRFdsjaF4K5iKo65qY6OLtcuP5dbbi2ms8XwNph%2B%2BpmokUAeAr8zdNe5kXXVGbV7sjimdrsxGXhYEYoLgk%2B6Lxn6J9om9vjwhu4xEtNsEVEwVqyleTLe5X8XXf3C8oBZ%2BSgOcY9cu1bdvmt26h7e74ujLRt2iQ8SZLIjYL77pHVRuH%2BxDMKyWeFR2DzqQ7HP&X-Amz-Signature=0ea01c7fa7979760659218447600cd44271fbb15c5ef0ede896cc95546358604&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6DZTX2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDIEKfTZaKTabOLHLxWobxYhhLdvFfX1dlMd3IqayhNzgIhAIRgknrrm8t4GaiYjt%2Ft99ieKHsG6tFHOdmQCW2azxvgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwLsZO59mfPk5PEmkq3APmmAwJMUHDv2yNjLteI9lZRwYw3MshVn8eI2MWFGvWcPuhfZQXJgizWgzmmG0xcS%2BFBlQ4WEGsilT4ZhTjggbrsptv1XwaBZcIds1wORnxTZHytY7wd7xr%2BWbZui6yd2C8xCdjMI5ShZFmFQ2Wlw8YTs9huO4GQbQlmwmlwA0YRD63IARfJauEc7D14%2BWqnGjT0RMmcJCRWoHrAjVKwjVyHKG0hms%2FQbXXgW1oJN77%2FC5f3bHxBKSA8Jl4D0l3kJZW9MF5YV%2FbM2%2F8bm%2F8yH6oX5DRBdVJt95%2B%2FZpj8u%2BkiFHqcx4AyNpJuYWxNKJlIoAWjnv53cnOnx9H1qQ1Abej%2FF5DBZFFlmAzqV1UMieBsgWjsxEVT6Yv1VRnCog8IBEukPCuJVgcmnbL%2BEa1ziQd2GPIsNZ2d9jpr2qOQWnw0y9gsG3MvS5eQcQLGF2SWNkXvYm5ZpwtMm4bldKoV%2FKo6Af%2BZFb7Sb%2FhSvOP%2BBnMfepNxiP%2B2D3cwg9xKvlBc2zENvhNb%2BGljH983wDxajMgpmRpg5wSBc0MffkjTq%2BCI82X%2Ft0Hyqc3sLfKYG%2BgxpR2v%2FTg0qZKp%2BrBQoh3bkxXFJsmFIdFk8pK%2BmAS%2BJJI2Mmra2JeCx%2FK3x%2F5aDD0geS%2FBjqkAVHIO4n%2BG0KP%2Bxo9jvtatzf0LlblIruupVVYyay70lQx7cCVgykuH6FjxXxFkNWY1GPLzD0O%2BDYrg2Rnf2CrcoTmP5dywTGIunNd%2Be3StxuIxzjXWIk0IN91yMXKwsvZK2KXrjipBjJRgmhufUIFOlPZZFCSyni0Fc5MbSkVe72hFx65w1I09Emo1AlXpQdWZnIMUFrHwyC76kq%2FDEBJaqK6ax8G&X-Amz-Signature=c3abf8e96c5208590818617be1b3b1e6a683eab77e7ac856a3eae203e49730b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5WWS6V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIByLIH0IXtzKvnqFP9Eu52uJPV%2B%2BYY3ZvFpLDOd%2FdBV1AiEA0GQRpWZRupLqBW%2BFXZqsTjayxAXTcXf43xDBmWkcJ7MqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwHSxKiH0ZGBrV9wircA6VWPHefaAvRRoFCCsy9QB%2BaiEKi%2BExVjrP%2BCv4CMQt8lFpyRYbJbCqyBIVRo9%2Fqt17gllbiQfC3zuP2IhSAem4zKViqNTlIFz5yoxbvnZ3TWU11RQQnFaZK0CQdE%2BOKm%2F%2FF%2FTrIY%2BE%2BUTHvWU9gEkUwhPo%2F3fDTMXzxEsfhzZI%2BrtRfIA3usZbh1WJkiC8nN3MAmFbXAJVjZtIbzglVcJOHPaScFAazLXI%2Bq3878i1qVTJmVNq0U72UQgKKNSfhsMzvLgdjukIOXTvbjSRJTM4bm3ftL7UTdFH6%2B4v6tBG1Qt8F%2FQLCjWxcsZ25Uk4Tv6LOxzwKvtf3ulEwcMBCWtpJtoFlqwsLnMGOyslleYfQ8UrtLhNj9nUPtnq3iXjV4Ww1aIOaCJVBCjYJzKxzue%2FNvKBSFxdHXuLkU%2Be9yqKwt1U0eE5RxBAL8mZNayjCHo75NXbFs3J4zJ%2BcU6jknCZgCQmJxHtHfy17M6TvAP5Gm4yj1OZU9IeL13uvFXvG%2F9KLb8VKVe7GY0nhwSDw5%2B509n8BS%2Bq8gb%2BgQZn2SPnnsJe9k8ZGnE8SzAHUYdOPNBb2Yob9N%2BXJYPI1UBWH0jjHAdMxiqCCZ%2FgjLUyMuE%2BOK03Q7Yd4XMwmhW3oMKWB5L8GOqUBDsVS2dCb3da8JQxSt57yP669SXpb66q6TXZYC8OvJcNOAzSnUiwxAIBB75JtH23fuzTxfJ8E88bzswUNfwtFhvAwDjnjAlRncLGXHW%2BB9K0Eq%2FiY4vdHkDQXnRCYFEBzbKktpMxt7hIxoBhcvBkpuJTE6HSUltxTgwH%2FmzYuVa9mO9Xmgp4vn7B6M%2BXI0sxV%2BqO1yoeNUcnC0ZZuTRBVkQb1dnS7&X-Amz-Signature=8e331263ac09f01440f93cde81dbbd8e00097e4ba718365563570bc2632cf9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
