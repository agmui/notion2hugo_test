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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDNXLSV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCvTtcqFIU%2BDvCqGGi11rKBneF3N1QcWd6lrw0eFo3BtQIgcFWcbcHNgmXFAVGyxGnAL6XItEi2BQD9iGn34JPSj4MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTaWwL21byDVrgPVircA6Jga3qCimF5K12im464mLqUZdD%2F2BZYyVZq9oPsf0r%2BAWbtsyvbR8wDv3lRPlPa61fQj0e8%2B8xY6IlzPJ2jB%2F%2FE%2F1StZk2AzGZNJw2woCp5jKU6gz%2FiXSa38LZcK7PNqKyBMTNf8YtnE4WeYZsFvis6VHcC23Z%2Bk6%2BcAh8xb2o1KWyxcxup8H15z3KyXylj5QCtdMmI4yxXZH2dJUL8P3VnUB3bncqyaGibqNJbrdY2apSLV6Q3FHy48Jd1hwdpchW0JfIk8OaaSKccwxueRQ38k3Zk3zGMixf8nv5%2F6DAy9EtwXm%2FMFyVCiLCgbca3YOxYwyafeKhQlnvYsHJOusz%2Fbxa2nFdn2E44UROI0BgFAujMW0MNnU26Up6z5hQzANgqm96EIELnthxxSooXcKYwRU5viSNY64XUYtEZR8KciC8IalAv62%2B1MTEYlbRXNYjhjfaHK5kPeFv1kswXX34WdgqEOKyLoj3vLP%2BNG936pSdVdp%2FTnFheF3G1fzscB8lhVMNmSu4Dl0Ccf%2Fy4kHPbnhS2COZYdUu9eE2FSHvG2ooyg6Qkuj9lMdWZ2tNaoyS0zZnw8Tz4czM0lvpnExVuuvUnT65eBuAP7vhOvp4LVZ%2BrLheuKtEw0g52MOipwcEGOqUBoIzI59Slst7HrFno%2Fbpyuy92d%2B3VDbd9Y5t%2Bapjwj8uSo3EYc45XWnLiF6%2FSM5mIGZYw9nePxmqsxQ%2F4I1NKrcnpxKhprrydLsAX7crvgS14lVUAxGGC1wOuBtTfCnXRb%2B4eRYV23eVTCHvhOz36Ck1%2BJ5v2w3qyk%2FcGRyleceP43D7RatYBhJFFlnSm%2BkKIrK7%2FfZbZgGRNEguxH5OayoWzD8ax&X-Amz-Signature=e33aa74149eea2d6e0da9be020c2019610ec4c447d2b27ccbe8410bdb3d3299d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDNXLSV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCvTtcqFIU%2BDvCqGGi11rKBneF3N1QcWd6lrw0eFo3BtQIgcFWcbcHNgmXFAVGyxGnAL6XItEi2BQD9iGn34JPSj4MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTaWwL21byDVrgPVircA6Jga3qCimF5K12im464mLqUZdD%2F2BZYyVZq9oPsf0r%2BAWbtsyvbR8wDv3lRPlPa61fQj0e8%2B8xY6IlzPJ2jB%2F%2FE%2F1StZk2AzGZNJw2woCp5jKU6gz%2FiXSa38LZcK7PNqKyBMTNf8YtnE4WeYZsFvis6VHcC23Z%2Bk6%2BcAh8xb2o1KWyxcxup8H15z3KyXylj5QCtdMmI4yxXZH2dJUL8P3VnUB3bncqyaGibqNJbrdY2apSLV6Q3FHy48Jd1hwdpchW0JfIk8OaaSKccwxueRQ38k3Zk3zGMixf8nv5%2F6DAy9EtwXm%2FMFyVCiLCgbca3YOxYwyafeKhQlnvYsHJOusz%2Fbxa2nFdn2E44UROI0BgFAujMW0MNnU26Up6z5hQzANgqm96EIELnthxxSooXcKYwRU5viSNY64XUYtEZR8KciC8IalAv62%2B1MTEYlbRXNYjhjfaHK5kPeFv1kswXX34WdgqEOKyLoj3vLP%2BNG936pSdVdp%2FTnFheF3G1fzscB8lhVMNmSu4Dl0Ccf%2Fy4kHPbnhS2COZYdUu9eE2FSHvG2ooyg6Qkuj9lMdWZ2tNaoyS0zZnw8Tz4czM0lvpnExVuuvUnT65eBuAP7vhOvp4LVZ%2BrLheuKtEw0g52MOipwcEGOqUBoIzI59Slst7HrFno%2Fbpyuy92d%2B3VDbd9Y5t%2Bapjwj8uSo3EYc45XWnLiF6%2FSM5mIGZYw9nePxmqsxQ%2F4I1NKrcnpxKhprrydLsAX7crvgS14lVUAxGGC1wOuBtTfCnXRb%2B4eRYV23eVTCHvhOz36Ck1%2BJ5v2w3qyk%2FcGRyleceP43D7RatYBhJFFlnSm%2BkKIrK7%2FfZbZgGRNEguxH5OayoWzD8ax&X-Amz-Signature=78460e74f41b14ab2a93644be0bea32788708a4f90a3e5cace62420efcfef8ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDNXLSV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCvTtcqFIU%2BDvCqGGi11rKBneF3N1QcWd6lrw0eFo3BtQIgcFWcbcHNgmXFAVGyxGnAL6XItEi2BQD9iGn34JPSj4MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTaWwL21byDVrgPVircA6Jga3qCimF5K12im464mLqUZdD%2F2BZYyVZq9oPsf0r%2BAWbtsyvbR8wDv3lRPlPa61fQj0e8%2B8xY6IlzPJ2jB%2F%2FE%2F1StZk2AzGZNJw2woCp5jKU6gz%2FiXSa38LZcK7PNqKyBMTNf8YtnE4WeYZsFvis6VHcC23Z%2Bk6%2BcAh8xb2o1KWyxcxup8H15z3KyXylj5QCtdMmI4yxXZH2dJUL8P3VnUB3bncqyaGibqNJbrdY2apSLV6Q3FHy48Jd1hwdpchW0JfIk8OaaSKccwxueRQ38k3Zk3zGMixf8nv5%2F6DAy9EtwXm%2FMFyVCiLCgbca3YOxYwyafeKhQlnvYsHJOusz%2Fbxa2nFdn2E44UROI0BgFAujMW0MNnU26Up6z5hQzANgqm96EIELnthxxSooXcKYwRU5viSNY64XUYtEZR8KciC8IalAv62%2B1MTEYlbRXNYjhjfaHK5kPeFv1kswXX34WdgqEOKyLoj3vLP%2BNG936pSdVdp%2FTnFheF3G1fzscB8lhVMNmSu4Dl0Ccf%2Fy4kHPbnhS2COZYdUu9eE2FSHvG2ooyg6Qkuj9lMdWZ2tNaoyS0zZnw8Tz4czM0lvpnExVuuvUnT65eBuAP7vhOvp4LVZ%2BrLheuKtEw0g52MOipwcEGOqUBoIzI59Slst7HrFno%2Fbpyuy92d%2B3VDbd9Y5t%2Bapjwj8uSo3EYc45XWnLiF6%2FSM5mIGZYw9nePxmqsxQ%2F4I1NKrcnpxKhprrydLsAX7crvgS14lVUAxGGC1wOuBtTfCnXRb%2B4eRYV23eVTCHvhOz36Ck1%2BJ5v2w3qyk%2FcGRyleceP43D7RatYBhJFFlnSm%2BkKIrK7%2FfZbZgGRNEguxH5OayoWzD8ax&X-Amz-Signature=de439b45ad8c42b8c783030b2d07816a6e5ca95b1ed8d8288fae490a75320614&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ULIJRJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDObyjWlQKyEavu2VvvuKVBm9ERDq11huqsEco3ELeqMAiEAgMoAKecynusZYwiPFO989MDF0cZj0rVyJtFb%2F2alqqoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiUWP1CECvFAToIPCrcA6uitQBiib0Bdw9WKIKQP8kmBmhwwwkDyyCeatA602tqqh9vZO6hxJwtq5k2aH8LiO4sKjredyBMWrmYLA%2BsFunQ%2BwMDMEFveMDqIZKmIl4MYvi2UQ72Zso9YasvH2C1kUWBK82ZvAe3yChUBBlWubmz1lIrsEwcWC4BdKZDAWoDJ9nPH%2B7rxR3EnC%2F%2FOA5XWIyNdMnnUIU4YPOhzxTsHpxWVt%2F%2BRbjydLDH1XlwAFNdrAEVD9LRpclA9s%2B6gF3U5MxS%2FQul%2BvkMqa%2F2CNlrqGxg3jH7nGJ%2FDsijF8riasQDcn7sWJL%2BKdJrt%2FEvFerrZ20vT9MEF1WPRqoEKJVRn7amj9zSSEsm4Sdti60ARXY7pXvejQXJhpSHEWnZpki39vmCXytax2d2FtiZgE6xZKRFXMDM8iqo4nH%2BcUpKOSJ3CPlA0to3inHlRrEapdYnHsIlcX5Zv2K3RXW%2BwaSlEYXxlHAAQfYWw0kpobyEEsw96mN%2FgBeG6%2F9rCDZwRq96rBddcZjKylMkMdeuNpCTuYzqtCxL4hETjn7dj%2BOMF%2FRlseH3unh1JM%2FPJNdBtf1cwgzxN89VQTfQGvP5QsMCCm2uFYN2pDP2CW4Z9qip0ADm5mBZ5f%2F7ciDVgfp0MIapwcEGOqUB3WTUOr8V8QEdrYLgIsIPJyJ78n1IajkAQu%2BisIYyY%2Fzw9gpr3lCSr3U%2BTmmoAgaIlbFxIUeQUhy6U0A6HXKkbywULLePXEfEJ6oAxmhsf1Pt1zhHoypAzpwGNDeZtB%2BDs7Fgzfi6j5U%2Bu5KCZ5%2FAUGRRhYkuzwlcrDPpmmfAQnkic7wa5gjsGeELqtzrkSFyiMyBlbAzuFiiJLl9teAUPnGgG3FT&X-Amz-Signature=7070aba3905b1233fdc50e72ff43925f6d6c6c75874a34542b78ebae8f6d98ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLF7AHN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCSdktTAYA%2B9aQbncLoU7FpjQg2fFo7suktcFi8e0r3hQIgW9AY9OlgPH4Zu29Mnc0XgtJxPHp4gSPM32G2KeB6fiEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJvGFzo4f%2FuJkOe9yrcA5RcHU1ItwXoH9isuVSBSiH8oGHFbqZIHfHDdXupQF%2BoMsXT6zLiimbwirQCMQlYSKDGqSlxnVsPh1CQGm8EDhvohnEXSAhrrT5BNq8I5DdLKxQCilyFNEhNKzKFAd%2BQNb9qx8unPiMhIrzB2yzGFqG%2BRl3ItILsQw7wkPn3WNvky3pB9YhdPQj7vYPOv0uIKWFv65JXjdrpAz0VJYe4TbYbGjcMP%2BR8scF9Q9V4XhAMsZIyQgItlJIYIp6VG5Ox%2F53olCn6aH6Vd5OIJ5Us6stPORGbUU5UFXiekL7qJkxI0EBStDXkqMze1flyhiOiEQzqlNe%2Fw5VqdFKnJiZRuzGPTKw2TywRIpQKWeiEnrUOalL%2BejJqwjOutsnuBkPLJ7IpwxyT8plZGvl%2BhEV2YiSCNaxXAKtFCvItYcykD1clUgqJ3xE00YW0ZYbNrJ3mOwFZoffFN6RNrY75whDGBMlTLqlf6UQ5oCx7nB6PncWCG6NRFDacrE3h8CEqBwvVu%2FEIM8vdbXoTDDf%2F%2Fcc9eQRgi2pCbXHWHZzvNBY7pJHE%2BYCliYnqzpkduqOlfogvn1rDaW4Mhljzrl3JVosxiJWWELCwc5p2oyAA6c263zYHC%2F6L%2Bxsnw3zxe2STMPKpwcEGOqUBFxkNFfy6lxjTcQuTNWM52icIZ89DE8tFRfeNPLM%2B5TyO4Ed%2FhHYYMC2eG1n4hf%2F8qqR8l08oJIBlGzxEzUlaTghv%2FKcz0pvKOJXgHkMC8NQxniNQahogwNAVvRKEgrVeC%2F8SPERGFELllAllSc3qanlj8ivozvRxou3K%2BpSW%2B1rgGdB5bSeGa6YCZzJAec%2BBDcn9wvQT30TGnWZsNI6JtPjGVlmg&X-Amz-Signature=4a8ccfa4d42d674e576a9445f76c18b29e3b10107ac0ca3328a4c02d3d1abc58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDNXLSV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCvTtcqFIU%2BDvCqGGi11rKBneF3N1QcWd6lrw0eFo3BtQIgcFWcbcHNgmXFAVGyxGnAL6XItEi2BQD9iGn34JPSj4MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTaWwL21byDVrgPVircA6Jga3qCimF5K12im464mLqUZdD%2F2BZYyVZq9oPsf0r%2BAWbtsyvbR8wDv3lRPlPa61fQj0e8%2B8xY6IlzPJ2jB%2F%2FE%2F1StZk2AzGZNJw2woCp5jKU6gz%2FiXSa38LZcK7PNqKyBMTNf8YtnE4WeYZsFvis6VHcC23Z%2Bk6%2BcAh8xb2o1KWyxcxup8H15z3KyXylj5QCtdMmI4yxXZH2dJUL8P3VnUB3bncqyaGibqNJbrdY2apSLV6Q3FHy48Jd1hwdpchW0JfIk8OaaSKccwxueRQ38k3Zk3zGMixf8nv5%2F6DAy9EtwXm%2FMFyVCiLCgbca3YOxYwyafeKhQlnvYsHJOusz%2Fbxa2nFdn2E44UROI0BgFAujMW0MNnU26Up6z5hQzANgqm96EIELnthxxSooXcKYwRU5viSNY64XUYtEZR8KciC8IalAv62%2B1MTEYlbRXNYjhjfaHK5kPeFv1kswXX34WdgqEOKyLoj3vLP%2BNG936pSdVdp%2FTnFheF3G1fzscB8lhVMNmSu4Dl0Ccf%2Fy4kHPbnhS2COZYdUu9eE2FSHvG2ooyg6Qkuj9lMdWZ2tNaoyS0zZnw8Tz4czM0lvpnExVuuvUnT65eBuAP7vhOvp4LVZ%2BrLheuKtEw0g52MOipwcEGOqUBoIzI59Slst7HrFno%2Fbpyuy92d%2B3VDbd9Y5t%2Bapjwj8uSo3EYc45XWnLiF6%2FSM5mIGZYw9nePxmqsxQ%2F4I1NKrcnpxKhprrydLsAX7crvgS14lVUAxGGC1wOuBtTfCnXRb%2B4eRYV23eVTCHvhOz36Ck1%2BJ5v2w3qyk%2FcGRyleceP43D7RatYBhJFFlnSm%2BkKIrK7%2FfZbZgGRNEguxH5OayoWzD8ax&X-Amz-Signature=337fb0895894a250c3ce38bbb2e3636ba99e80467945050ee400da6c113e6f65&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
