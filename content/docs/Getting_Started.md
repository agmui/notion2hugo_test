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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77GI6WG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDSDLFGEThtboyJvgrlTIeaeHzESG2kfF6S4CQ4IfkCowIgessA%2BMg38TuwsJmey3c%2Bmu%2F8%2Bz1Y9waG71wmS6jRqugqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhMaAOEYbysxCy0yyrcAwfV%2BLmz7YNcCwpeNVD1TqRdlb44VpvZH1xmgPwVmn2io0fJ%2FPN6aN8f13vnkcFAx8Qr308q7r9FosvZXZVVlqNcV3NyyjmI6kRC58oBU9fFWtO%2Fczj77gW%2FbHYFlyMbJUdlmLIOZvSM%2Bis1OIAneoHwgrOlWq5H%2Bh9vhN3bLCK4vUXx8kJ7fI0HOa6pD0Y%2FMq43jchEmoEQ0il1Kpha%2F5SMFgyyrpVKg6y5zpF3KxWwOEFtitk8zFT7Z7OCzXRawwY6hPYVHgxTJaROn%2BWn3uxUhsPAJ3ptOthemukX43pEXJArzVYlQ64btrDi%2F8GW9f3z8bauddK%2Fy%2FekUbiQ7aiSmUKvX0j7HIMjaGuXpCpJ%2BkJv16Bo%2BAwPz88SpcMisgIzx5jLAQ2Czyuz8jtwMmPREfPsHdYR%2BlvmXkw6eoGP73hhziWRiOY5eH7Y6U8AgYfLFZE628c3jesHQyyUMjGn6Wz8pRKxwE%2Fw%2BhoEfsWWbttj34hVGILHei%2BSVcIZrc2fRkfLFZtB%2FWA%2ByrQhLi6WuHxcHuMOYs57TUej%2Fr%2F3fqjaT%2FU3Fpu8oxeeHhRyPesL41D5fExh32rmX%2F7W%2FYMR%2Fc7DI2cogy6yzDYeX0n7RXNHqq9deLAGMHEeMPOQwr4GOqUB3spNHRnEdTqb9H6YJNpsjgLTvUdgBv7xVAVHLeyuQUSzBRZvTCVuFPF%2Fc%2BMBroerPPS5UzpcQJ%2FDbDoHZp8pFe%2FtDH3U4%2FzXEwkccejPsZtgvwG%2BZriyypjnqZz4lXdyBDGHH%2FmX7ggEtI43fXspnAuOOYm23t96g764Wpmv5l1Wd49vP1BH9hPSJ49oSADxP2USKSQxNRZWCj7nMLG5Wskxig7z&X-Amz-Signature=f460f37a2a6fce6e360aff5b7324effb722b3c068d5b6a3c5ed01cfff958bf0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77GI6WG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDSDLFGEThtboyJvgrlTIeaeHzESG2kfF6S4CQ4IfkCowIgessA%2BMg38TuwsJmey3c%2Bmu%2F8%2Bz1Y9waG71wmS6jRqugqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhMaAOEYbysxCy0yyrcAwfV%2BLmz7YNcCwpeNVD1TqRdlb44VpvZH1xmgPwVmn2io0fJ%2FPN6aN8f13vnkcFAx8Qr308q7r9FosvZXZVVlqNcV3NyyjmI6kRC58oBU9fFWtO%2Fczj77gW%2FbHYFlyMbJUdlmLIOZvSM%2Bis1OIAneoHwgrOlWq5H%2Bh9vhN3bLCK4vUXx8kJ7fI0HOa6pD0Y%2FMq43jchEmoEQ0il1Kpha%2F5SMFgyyrpVKg6y5zpF3KxWwOEFtitk8zFT7Z7OCzXRawwY6hPYVHgxTJaROn%2BWn3uxUhsPAJ3ptOthemukX43pEXJArzVYlQ64btrDi%2F8GW9f3z8bauddK%2Fy%2FekUbiQ7aiSmUKvX0j7HIMjaGuXpCpJ%2BkJv16Bo%2BAwPz88SpcMisgIzx5jLAQ2Czyuz8jtwMmPREfPsHdYR%2BlvmXkw6eoGP73hhziWRiOY5eH7Y6U8AgYfLFZE628c3jesHQyyUMjGn6Wz8pRKxwE%2Fw%2BhoEfsWWbttj34hVGILHei%2BSVcIZrc2fRkfLFZtB%2FWA%2ByrQhLi6WuHxcHuMOYs57TUej%2Fr%2F3fqjaT%2FU3Fpu8oxeeHhRyPesL41D5fExh32rmX%2F7W%2FYMR%2Fc7DI2cogy6yzDYeX0n7RXNHqq9deLAGMHEeMPOQwr4GOqUB3spNHRnEdTqb9H6YJNpsjgLTvUdgBv7xVAVHLeyuQUSzBRZvTCVuFPF%2Fc%2BMBroerPPS5UzpcQJ%2FDbDoHZp8pFe%2FtDH3U4%2FzXEwkccejPsZtgvwG%2BZriyypjnqZz4lXdyBDGHH%2FmX7ggEtI43fXspnAuOOYm23t96g764Wpmv5l1Wd49vP1BH9hPSJ49oSADxP2USKSQxNRZWCj7nMLG5Wskxig7z&X-Amz-Signature=7e6d630f0e4de0c3573d60e11fd6888ea4a052497742e61b8449bbdf0ffc8c06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TJ5TXJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCKWmTAYE9NE5NNVsAeF2vinsSYljPqaS1nrVAihKPOZwIhAIB2S8vtsNTwlmVqWHKDOpnWNoV3Ncq0FRbml1m1mNCnKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFt29dJ5I8ekY8B%2FYq3AOv9BqEb8Kbl8s%2B20RWR0ecqEvoekqehLpJp6vj78ooh1K%2B82%2B9mkUZkRGnRh%2FcT8eW3ta5zJ%2BKkvkinCbyygJa49rRiMHN4nIT6fKGUMnOqzoBp%2FwTyEXEekDgpuf%2BYXTc5XoeXDaYM15lD3fUxkJ9ncZzLGhPZ1%2FJ3SL8xJo%2F7zCsriLRC4GwIaIW5yPif0pPtIB3%2BgFzMWk01EE5YW261RUrbf5U3LhuQrEOrcZvD04AVvJNLgL9PVH886SRbNR9BGxTSNHYVH58i5zET9O8hhXuJM8gdqYkXmaInHgl5k8DdyPQp1bZL%2BPiIGHgDW7Y8xfNsTrVexAWzIzrdWFTgRLQeTEYlfKtNx4%2FSQQc7g3flvSdXV5eBfCtcL01vcpndLKqE15mwU4gTxvmz3%2FJineDC4owVQRikwQZSdkmLiMpfmnO5nT5qvYH6zCgVp1iOLRdEVYSbdXkFrOaSB9K6jiI%2BCFn4DGZ8Vyq3PuBGYgP%2FgPkDUP8oB1aNK3MfVxIVAWLQSR9XvthnMbkyEwe7lUE8LJfzMtEGnXDjwEceYdrMUSJvwUI8Y2CjShXR1j8XjoLEwqXGz1LqJAhzkDl%2Fxv%2F6cvjPDBnkEaE0pTpqRm1p9aVfItgXwfvEzCzkMK%2BBjqkATrdagbApUtwFO8pcVPTsLTDa%2FedqYlLpq0N0bZTkEBamQA5jpqwY7m3FHuBmTpaiYKJPO1WXzbgb9CdTlV4avVAXjMKfFi3eyr%2BWB91t2HFdjP75EW%2FAf1oEy7%2Bb7pr7FAeAZXS2Fh8K17aMxo4xaQ5pO7Cc27h5oXrKSE8v2%2FOtzfEElbifxPjz323C77BZj9%2F9OrzsFTsrxZA87ZeXexwfGbB&X-Amz-Signature=e204356655afb402c6eba484f12efab68b692f819f4a9c211f3f9558230cbfe1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAWKY53%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIALtm9jnSWOjKTFmTk62z9QAiLPEROqy65wF142c0l51AiB9T13ewxdWwaWqmDJY%2B7nItMoWIcRv%2Blibbgwz8h5ndSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEGcDUZszp12AN6QEKtwDXCbji9x4Wk5ufSqsF2WcbdD0%2B6a1MQIIu20jWFO0MI95j4hayL8P76D9d8T4QcQS5TEEMSe0rXQA0uWuKk6MWUkO2RVyqUltB%2B%2FFMtGLkgbYPaLgqiideLcOPwAMhUMVgRSS5dw1mhsqQwY2O7hyjTiMdDkJD7q6Y4glX%2F3Z92QdpBXE2hlJbOJ89ccs4axHbgZJD9fEB0oxLGMV0Vd3%2BLdtJBcyKHawlZS1PE%2BsJpmt0%2F2Ozs8BBX2cdYwjaGjErSvy%2BtJw21QneC5OrQYhsZka3mVALyfvLiZxZ9Jm9bFnB5sI9g%2FpXcSFClL78s2do61qfa66z1KgnM7JfEL%2FPrx2%2Bwu7Nsrrzzp082dQLepVQLlOvYmPc5Onnuj8Y0tq%2BYfUtgCy%2FnD7ziK1ZT21L9G%2FsgWG9Rk%2FnLF8uS5XiIXd4NvGk%2FQLEeR48J4b6uwUCGUYM294o25YRlqp%2FOpW5wtM%2BnTbnemGWP3bv4IZfwJKPAkBx3Qy%2FCHGX9tOu6nNW2b0EPDLr1BhKYaSvdVCZq3ZqxS6zvv09Az2%2FUkLZzifC0TKykdj%2FZpIAZyEYg1Cf11PuzjjPMcFZwCGOtHH3QdHI4Zde2Ga9ywrmjSX1tPLmzKF8u0iJDx%2FafEwo5DCvgY6pgHDYr3DN3MrGacxdQHyfTjpW3msWuOct1rCMs%2FA0bs2dq4iw221ZqNnZoqJEYBLvyPjRJh4roEbhIDB8rrYrCGquGnYeDll%2FCjUP3zSS1egrq9Aw041ud0gj9jV7TqWrFGV8D2GSPNEln39lU9B6XSfQIZf5OwiECF4HIHO4vjsr4hvfNKgW%2FYeq6AKL7NXxXp8OyZ7lSy0QkFKJ4KXjwTJDZnJ9Rb3&X-Amz-Signature=d65c4281ff62b673a83aa4990b247dbfa8a2b49e596d516625cbbd025bd4d686&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77GI6WG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDSDLFGEThtboyJvgrlTIeaeHzESG2kfF6S4CQ4IfkCowIgessA%2BMg38TuwsJmey3c%2Bmu%2F8%2Bz1Y9waG71wmS6jRqugqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhMaAOEYbysxCy0yyrcAwfV%2BLmz7YNcCwpeNVD1TqRdlb44VpvZH1xmgPwVmn2io0fJ%2FPN6aN8f13vnkcFAx8Qr308q7r9FosvZXZVVlqNcV3NyyjmI6kRC58oBU9fFWtO%2Fczj77gW%2FbHYFlyMbJUdlmLIOZvSM%2Bis1OIAneoHwgrOlWq5H%2Bh9vhN3bLCK4vUXx8kJ7fI0HOa6pD0Y%2FMq43jchEmoEQ0il1Kpha%2F5SMFgyyrpVKg6y5zpF3KxWwOEFtitk8zFT7Z7OCzXRawwY6hPYVHgxTJaROn%2BWn3uxUhsPAJ3ptOthemukX43pEXJArzVYlQ64btrDi%2F8GW9f3z8bauddK%2Fy%2FekUbiQ7aiSmUKvX0j7HIMjaGuXpCpJ%2BkJv16Bo%2BAwPz88SpcMisgIzx5jLAQ2Czyuz8jtwMmPREfPsHdYR%2BlvmXkw6eoGP73hhziWRiOY5eH7Y6U8AgYfLFZE628c3jesHQyyUMjGn6Wz8pRKxwE%2Fw%2BhoEfsWWbttj34hVGILHei%2BSVcIZrc2fRkfLFZtB%2FWA%2ByrQhLi6WuHxcHuMOYs57TUej%2Fr%2F3fqjaT%2FU3Fpu8oxeeHhRyPesL41D5fExh32rmX%2F7W%2FYMR%2Fc7DI2cogy6yzDYeX0n7RXNHqq9deLAGMHEeMPOQwr4GOqUB3spNHRnEdTqb9H6YJNpsjgLTvUdgBv7xVAVHLeyuQUSzBRZvTCVuFPF%2Fc%2BMBroerPPS5UzpcQJ%2FDbDoHZp8pFe%2FtDH3U4%2FzXEwkccejPsZtgvwG%2BZriyypjnqZz4lXdyBDGHH%2FmX7ggEtI43fXspnAuOOYm23t96g764Wpmv5l1Wd49vP1BH9hPSJ49oSADxP2USKSQxNRZWCj7nMLG5Wskxig7z&X-Amz-Signature=584ae4f3c1177e5b28554bf9eacaf2f9fbda1708cbc1df7b564dda21f7a51b14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
