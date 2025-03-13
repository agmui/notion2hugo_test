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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL52RQR2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB413YWp8xRzn%2FwJ6c4qUoE4wbLm7xH5ptY6IUa5r9%2BbAiEAz3Be7RtUX0I8pqkvy858C0bw36uE5XHnHjcMiWaXwRQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRY2AVdrX%2FrFNG6jCrcA6Vas7n9ksXOlgrVLqi9tZps74M%2B2S91ChDjgdRHsBZynkQnACZdc5PJcnbtxA1mUum7%2BbEPs6EGkOYsTqj%2Fd%2Fs6EkdmpzdWhSlEFVcAvKzdMww4XLsai8daz3cRj1aT0LV3tS%2B3lSBaTbv18Kck3RxX3vEgZ0rW3WWWGDS0IqAvbzmunA8x4L1ypjZtLsFGUAdOHx1dKiOOXxD7x0ws5RBd86kyVqgcyIxHTKDiLE2jwWNdU1x9tbeXAp%2FHxA3%2BNynDSA9KdR84kvaYnk4UgZf2gl5SbXvFgY6UMOFlHTNguCyHSs%2FUGwWf0CIPmxV%2B06gutSx%2BB8%2FjHNA%2FdZ09BIPJEpRjJ9idHjV5gaAd%2FjJevJr2XHZef1fKle5l5Z4k%2BhFWgTSQ6sMU6G9jkFo8LUUre1k6ZiR6txYrvIsV1z6smauJ%2FJTibHQ3vkwBH14rXN7OayFRDfY0MJztWW2dB9P%2BlSfeWELa56EkhhsINEGXlTJ3Uwm7BaT63xE1fdLHb26JO451Lucbcm%2BLxoHEmeBh0X%2FDKl%2FLZs5pNcr2og%2B7JyK4gOM1WNPqpGoLopyyjg9Xr9HRd54jhVmjnGdh4IpcZLSvm7%2FeJGyNsxt8lNczJZZBom6%2BhCPsqcY8MNujyr4GOqUBbB98DQXLO2CvB5vtskQYotP6G5Krb4TdC0N8SDH8lhyZkfjHad0l8YevbcyXqnKoZBRNEZ0hWQtPzfieFyJe1xhgxBFBooet5ugPT2imDJ3JJ%2BblZACwdknJ0gruqbOJpRa%2FMDyVOkiSt0C2friGoN72eLKw6TVVZV6n5pnHN9gKefwV%2BQc%2BYCSpiVymvsryeRaLAvMGQXbU7SlR7qd0YTFc67ez&X-Amz-Signature=58197b8dbe2d3af4645b4a3786281da6452bde73e25b5d6f7c74bb62303ed1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL52RQR2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB413YWp8xRzn%2FwJ6c4qUoE4wbLm7xH5ptY6IUa5r9%2BbAiEAz3Be7RtUX0I8pqkvy858C0bw36uE5XHnHjcMiWaXwRQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRY2AVdrX%2FrFNG6jCrcA6Vas7n9ksXOlgrVLqi9tZps74M%2B2S91ChDjgdRHsBZynkQnACZdc5PJcnbtxA1mUum7%2BbEPs6EGkOYsTqj%2Fd%2Fs6EkdmpzdWhSlEFVcAvKzdMww4XLsai8daz3cRj1aT0LV3tS%2B3lSBaTbv18Kck3RxX3vEgZ0rW3WWWGDS0IqAvbzmunA8x4L1ypjZtLsFGUAdOHx1dKiOOXxD7x0ws5RBd86kyVqgcyIxHTKDiLE2jwWNdU1x9tbeXAp%2FHxA3%2BNynDSA9KdR84kvaYnk4UgZf2gl5SbXvFgY6UMOFlHTNguCyHSs%2FUGwWf0CIPmxV%2B06gutSx%2BB8%2FjHNA%2FdZ09BIPJEpRjJ9idHjV5gaAd%2FjJevJr2XHZef1fKle5l5Z4k%2BhFWgTSQ6sMU6G9jkFo8LUUre1k6ZiR6txYrvIsV1z6smauJ%2FJTibHQ3vkwBH14rXN7OayFRDfY0MJztWW2dB9P%2BlSfeWELa56EkhhsINEGXlTJ3Uwm7BaT63xE1fdLHb26JO451Lucbcm%2BLxoHEmeBh0X%2FDKl%2FLZs5pNcr2og%2B7JyK4gOM1WNPqpGoLopyyjg9Xr9HRd54jhVmjnGdh4IpcZLSvm7%2FeJGyNsxt8lNczJZZBom6%2BhCPsqcY8MNujyr4GOqUBbB98DQXLO2CvB5vtskQYotP6G5Krb4TdC0N8SDH8lhyZkfjHad0l8YevbcyXqnKoZBRNEZ0hWQtPzfieFyJe1xhgxBFBooet5ugPT2imDJ3JJ%2BblZACwdknJ0gruqbOJpRa%2FMDyVOkiSt0C2friGoN72eLKw6TVVZV6n5pnHN9gKefwV%2BQc%2BYCSpiVymvsryeRaLAvMGQXbU7SlR7qd0YTFc67ez&X-Amz-Signature=0ba7f6cc8424dfbb2c071b89084884a8900c50cf3d4893adbfb0879c93cb2f89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X24HNTHS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr0ZVj5UnKgpUZpgLv1Hn8NgkflOOvDlRAqeASFCNgFAiBqK6zB7AFr7gAKQ5MCAjZ5RjDk2eT1F4A9EoThUCfFZyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGss0J8ZvCwlyaNDSKtwD%2FuiLN9NwBZ0Zt7S5em0cCAbYyhU%2BYKXxjzFaEpELrfpfRVsXz8z4qxH%2BtHy1N8xBqcVi2HjLNOA12wlzctHR%2FO9RB2p6gK6IrZl3M0vuTENt6YMSStYBwHKq1uV8finmELnoL8o00xgXDy%2FFh9lRbRKIJ9oaHLuYYSeRqcM3TVEWfk5o1988kAzcqufF1wghS3MAN4Ri4NRBmVSg9E7Mx1pK5MNeGbzLmkvgxNbbGFEXvKepyNfMP0Dy%2BlnizhfhOJB8iQTOTTT5hcLdA6gQ8naM8EBCYkjai3ColWyFaztxy%2F3DwSruM%2B2F9Vt%2FbiQT751D5U5B5qv6cTVESqut56H9j%2BgNVcf9MtX%2Ftchu5moT90XaSimM3rvWo2BAzh4uz5mAXW3hdSB8k9fOHDgS%2BuFOgptzkHRwalvhTiPrCbk2%2BB9lOFBnbwYGbWjrVsOGW2dMiAVZfWOfv%2BY9eNTo9AoxS8nx3oY%2FeGlQ6MqnbnUkqCtGBgDTgQCKt%2BJMaitojSsfxpeesV3BWDruCKkx6QgOqqEYA2eQPO68lxZIj05L4N4F%2B%2BVCUCbBco81X7uBts1Jr5IUwqU7CIc5uKbFGL8n4tCxtGpPI4RbE2T%2Fw6QymyGg%2FdthLvaznuwwrqPKvgY6pgFTOXIidAS8Ro%2BaaV3PwT8J%2BcMt%2Be0xBP3%2FiLqpKKjLSbVdc7jrdTnZ7JnQqla69uW8kXBxZFaWJ3Gk7TptyZhoYE5NZM1AH1sfhmcT6T%2FXleRJu8TQxPtcqkML6RI8VrDzpt8OHNvmFDn8SLnFOKYe6nsBBFe8ZDpJiXuYprapjy61rloiRV4QFOFwtLnItpzKG%2FTZ9EkKsjSNJuqPLwyXYsGysPfK&X-Amz-Signature=8aeaf3f44bd42bf34288410af785962c330e6c9048eb4403e4cdf6bb7b8dddf6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WKFBBZW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B2K4FIOZmPPq97qLlLGcqpqNxRsmTxcARfzEG4xEQWgIhAOtfjRZfET20MXdvjn6pVcHgKWVXYTwv8UJhgV9HZHR3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGYjHE5x3Gp1bBIJgq3AP52Usm5p4zwRWgJ4vXAYfwuzqrAN1gq9gpNynkETqLpejWNPHDLDz8lOk6mYj1ntqBwC1L7Y5bCgL61T4xQZSg2D6OuWHsSZcR82e4Nbm8M%2B%2FgLMttXm0Yni5%2FJKLchuZlLPOf7Yvoq7fhdcAooBVv3IQPpUs2k5Oke8e9ao2XJnjnyl%2FUKO3osYD7P9M%2FTbkGslggAvTFJFmxL9Pj1MfdMsbrXlx2I1ovNtu4JtcEyfcQNR3BUu2tKsdLRnxqs65C5MaurQ7%2BFb0LAL7iR3AWIYgt0g649nP%2FPyJbd0yXB6z0S7ONOqI6SfQPSQNP0MHsEeeWvA5dfSd8yI17r3x5kSufwp0pykYJcaj187cR6yZCZXicLPnQVLU%2FW7KtWAnh90gpsqi%2FpHLX41NSK%2BafIYqnhOMjzZcNKqqNwSfZwv4KKSegyyGH2IFdRmfkpJsO2iO2%2FuMoyVIMEsWbQIdqT1naGOUYyFkDDrfYWF%2BpUkLGduXdtL%2ByPNCiScTKb1p3NT6rBrLmVLu8TafpbV9F7ckFfwPfKIfcUFm%2FeCbeNdZxqfdbVMS75S7XX%2FtpbMXvoPjSgG9tgI7GWjqZgOd3ofIw1Fxo7XFYgNwc2a3GRhcjcSeXAXWV0%2BsPsjDuo8q%2BBjqkAZz6HXeMqiQzTiz8PtXDy8WkU7CQUyv52wv5wQcwqfYEBBXcQcDK%2FRL94QxmKSyaKxqx2kCNtHdZvnRIEn6prn4Ziw4tiEBwP%2FLrPidBUGqr529LPXDlTRdxMTpJAjoPogTcjN%2BGccvPOk52awcI6RrJwnUUPhicikftzeW4jeyKbdPFDX1qC4FDtBrq5TFzY79%2ByLci8qwWoqEt8zraCEljh5Al&X-Amz-Signature=75eaca3b0d4ffbfed47cd83898e36009eafac33add14619a0baa0d1b32b7bdcb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL52RQR2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB413YWp8xRzn%2FwJ6c4qUoE4wbLm7xH5ptY6IUa5r9%2BbAiEAz3Be7RtUX0I8pqkvy858C0bw36uE5XHnHjcMiWaXwRQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRY2AVdrX%2FrFNG6jCrcA6Vas7n9ksXOlgrVLqi9tZps74M%2B2S91ChDjgdRHsBZynkQnACZdc5PJcnbtxA1mUum7%2BbEPs6EGkOYsTqj%2Fd%2Fs6EkdmpzdWhSlEFVcAvKzdMww4XLsai8daz3cRj1aT0LV3tS%2B3lSBaTbv18Kck3RxX3vEgZ0rW3WWWGDS0IqAvbzmunA8x4L1ypjZtLsFGUAdOHx1dKiOOXxD7x0ws5RBd86kyVqgcyIxHTKDiLE2jwWNdU1x9tbeXAp%2FHxA3%2BNynDSA9KdR84kvaYnk4UgZf2gl5SbXvFgY6UMOFlHTNguCyHSs%2FUGwWf0CIPmxV%2B06gutSx%2BB8%2FjHNA%2FdZ09BIPJEpRjJ9idHjV5gaAd%2FjJevJr2XHZef1fKle5l5Z4k%2BhFWgTSQ6sMU6G9jkFo8LUUre1k6ZiR6txYrvIsV1z6smauJ%2FJTibHQ3vkwBH14rXN7OayFRDfY0MJztWW2dB9P%2BlSfeWELa56EkhhsINEGXlTJ3Uwm7BaT63xE1fdLHb26JO451Lucbcm%2BLxoHEmeBh0X%2FDKl%2FLZs5pNcr2og%2B7JyK4gOM1WNPqpGoLopyyjg9Xr9HRd54jhVmjnGdh4IpcZLSvm7%2FeJGyNsxt8lNczJZZBom6%2BhCPsqcY8MNujyr4GOqUBbB98DQXLO2CvB5vtskQYotP6G5Krb4TdC0N8SDH8lhyZkfjHad0l8YevbcyXqnKoZBRNEZ0hWQtPzfieFyJe1xhgxBFBooet5ugPT2imDJ3JJ%2BblZACwdknJ0gruqbOJpRa%2FMDyVOkiSt0C2friGoN72eLKw6TVVZV6n5pnHN9gKefwV%2BQc%2BYCSpiVymvsryeRaLAvMGQXbU7SlR7qd0YTFc67ez&X-Amz-Signature=727de04a1c98d6e212245c7066ba714e47f4f8b1b221abaac19c878c16395d45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
