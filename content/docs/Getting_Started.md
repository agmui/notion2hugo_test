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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JCH7LS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRNHi8ggqEIPQoSCup0HBkUUyADZNnRWjd2TL2kRnmBAiAWptMmeguAdErDwnDQaFpCT%2B1o7hDNuvfqNDebaW%2B4xSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMLo%2Ffdu8TXAd3R30wKtwDZcfjQ3762G9vnsAKagkdJxJKlUs719rplVi5EUkHw2SAzPpMgignsx2FGVx%2BZhzsdd%2F%2FtXTppAkxj1mOsvJnt4sZDRU0QHEL5xPP1%2BBL36e%2Fk%2B19xYSYP60yR50jLKmdVzJAN6m%2FcHWHNTRxdMWG2nmItX5fUuNRlaURQuydbWBssSLiRKFcQUYioc9asgPwuqkqEEi7LXc7ZPaBSbc31ylqjAfxHxL1Oe%2FWepSS3B%2FVgunEz%2BTzWTKPBvpT31IOaLkbdCst9FDMFEZK7S8%2F8mBMdt7fq5baRIjv45WLJprPfUdpjoN0xqkEngiJ3Wy%2FhocJ4YnLuNdhTRJEs7cZuzjyVuxFvhjgyEtjSLhsuCfA6sa71lQjzwdX8pZ0R56iJAvNWuGs27ktAnI0NE3kJVVyfmLcniLni9atZumorsOh36cMHaKvA%2BOJ%2FVx8NWcffnEFHJwWIvekeORTIVXvv%2FsQrrBYbSPCQXBvYMffoog1cOKkTDspZC3QUvLlsV2ONKjrzclvpzhVDT2bz6L%2FPE0rEQwumUmPEausnpoHeq3%2BSkzMMydrh0%2F9VhEqeGfRuFs2JFsLiWd9ArGMY75rju1lAsEFfU8ekb0T6bbDReBwc%2FyCqIzj4K0CABAw8vX9vwY6pgHCE5NC0NOq3b0gvz2Nz6cDNiiiaaT4VyeJM5V3OLNuF0ZUuP%2F8ylvQwdfUFYrktS%2FDF1ulMzewbdkQLuW2gEEIEHynIgdfhpeLUQPfNbBvHS%2BxXNU86NPnsf7U7v228rZby%2BmcWi59X3M5zmdEDz99NGEP5MA%2B9JMESCyvjfvsoVyRgmg8NyZIhRMPwhJ%2B59bKgOkuWkidZsvRYtiA%2Bfm14k8Goirm&X-Amz-Signature=406bcb85ab2f31e3a5b6c335d361696d40def611f217755d34d6b2825aab0d47&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JCH7LS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRNHi8ggqEIPQoSCup0HBkUUyADZNnRWjd2TL2kRnmBAiAWptMmeguAdErDwnDQaFpCT%2B1o7hDNuvfqNDebaW%2B4xSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMLo%2Ffdu8TXAd3R30wKtwDZcfjQ3762G9vnsAKagkdJxJKlUs719rplVi5EUkHw2SAzPpMgignsx2FGVx%2BZhzsdd%2F%2FtXTppAkxj1mOsvJnt4sZDRU0QHEL5xPP1%2BBL36e%2Fk%2B19xYSYP60yR50jLKmdVzJAN6m%2FcHWHNTRxdMWG2nmItX5fUuNRlaURQuydbWBssSLiRKFcQUYioc9asgPwuqkqEEi7LXc7ZPaBSbc31ylqjAfxHxL1Oe%2FWepSS3B%2FVgunEz%2BTzWTKPBvpT31IOaLkbdCst9FDMFEZK7S8%2F8mBMdt7fq5baRIjv45WLJprPfUdpjoN0xqkEngiJ3Wy%2FhocJ4YnLuNdhTRJEs7cZuzjyVuxFvhjgyEtjSLhsuCfA6sa71lQjzwdX8pZ0R56iJAvNWuGs27ktAnI0NE3kJVVyfmLcniLni9atZumorsOh36cMHaKvA%2BOJ%2FVx8NWcffnEFHJwWIvekeORTIVXvv%2FsQrrBYbSPCQXBvYMffoog1cOKkTDspZC3QUvLlsV2ONKjrzclvpzhVDT2bz6L%2FPE0rEQwumUmPEausnpoHeq3%2BSkzMMydrh0%2F9VhEqeGfRuFs2JFsLiWd9ArGMY75rju1lAsEFfU8ekb0T6bbDReBwc%2FyCqIzj4K0CABAw8vX9vwY6pgHCE5NC0NOq3b0gvz2Nz6cDNiiiaaT4VyeJM5V3OLNuF0ZUuP%2F8ylvQwdfUFYrktS%2FDF1ulMzewbdkQLuW2gEEIEHynIgdfhpeLUQPfNbBvHS%2BxXNU86NPnsf7U7v228rZby%2BmcWi59X3M5zmdEDz99NGEP5MA%2B9JMESCyvjfvsoVyRgmg8NyZIhRMPwhJ%2B59bKgOkuWkidZsvRYtiA%2Bfm14k8Goirm&X-Amz-Signature=4a4b86e21bf4eea1371f2eb66771fb8145f16930b58b39850f8286bd329da408&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XOOVCF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE8K%2FClqsleSukdclISH1GWtZ72h6YsUO%2B0BqD6fPrUgIgeyWaJmdSJ8ZfUyRHA5dFqURJ1qOMxL0xdn67pPGUGAcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBcwAgiLoAc%2BKyiOpSrcA5AnG0AN6fI2scV0b6qt19%2F8KqswoGe3nHKAbaf2ewXsjanteDRAXzk9U4SKwP2VjM8hISKu06mpQDC30aJzrVzt4r8rCaa00MwX%2Fos49f5SUMARJ2zmHuv85jw9jAUdvvbAfDdMOjZzJHN24jcofct43Uq8hsoqg7fKdEleVapblnILaCdWbgFnciDWc5UkqwyWKCYY4NAsse5aXwcxkarlPOGOU1QEXxG%2F002%2B0fY5bBj2ZqAyLNmdd3z25gnAPiqvaCIylIjd9i2r34lYNtuZOjLLS%2Fxt%2FZbeqjNj4uQi9ZOPRfduZceGdz7q1eYN2S7cs5usIHsX%2FeXL5reh124CgkkDYFm00LoIvF%2FVvxtDVXESmfjPVy99wKNqegSTRrU8ACyxKY5iqkrKl5pCAjxMf%2BIcIuZuD9kMcHhQjj4ZXZLHNppFfRY%2FfgNICgQIFz8ra5BZYAkZHNz98KyvW9kfEd45iH6B3u%2BmcEagKRcvjSsoV0bJ2XPWj0CzzieLLvIPOFBhKEimhosAPlsXce2vZGictr09wrFMsi2PeHq%2F8%2FvsY2XQo9FFjWNUdwd0xuGPDjeEXxGkJ7QGsSwTGi4W0MCKbBOdll0t7sAhmqs%2B7grUB2jVgZ2eVmuzMNT0%2Fb8GOqUBMnDbPpGOu7ciO0glfd5E%2FwAHmTehWphs%2F4fadLFxAvu6fe52Op9UPBDNEffpyOcO1GNZ1u3%2BNqnLWHyQQY0VXb6HkbLbBGF441ATdMwoTwAHkx2lBHHX7%2BT8TlstctSw7E2kWiR2pSQ3CsbbRq9geTzdWZuX4uFJywRrDiGHjkNgwjmArJ1%2BErgMj35sI%2BBZUAHfC8KtQeSyypzTa4r%2Blz1UySlS&X-Amz-Signature=99444be3f5381c6ba524956dd0a1b74b75cd4f7b05507632f3eec83d1f060a82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IGFPZH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdTCwEVdoo0SLrXIIH%2FxKdDJJWTkPeHgBwA7x6%2BMZJTAiEA%2Fd7LkI3F47J3uU6jZ7dc8nm6jHnoBOCmZlgCyY%2FYKtoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNekY6lbF0MQ%2FH8FwSrcAw3SuLGCw66EAYWanSFm33%2F8rtT2xN05hJUKOVd3TPusXJL6LRkvE%2BCMLMVmQoC6z1bSXybLJEWJivKlhgL4VtRHF50BKC9atGA8ihM0g%2BjyW9cx%2B3jn9MiPM34soRb2vQlUad8Lw0GjrdpNLwLq692w%2Fk1kNhGNitep7iNQHyBInzNV6aCcWaZhgLuNB%2B%2BHqI65EgSwhed%2FVclTMJ6VcBeCFTiToQm2A%2FqbqYA6huR939POZZbjuBT2iWcxWPk470e0jTiL0Uu1zuIg%2Fw8G3uF6uJ68NnC4JQg2s5Olhv1vvHRGoL5A1WfnX8Hf6mw1EKOci8wdAwmyozaFs6kRHz6Z0cbmfOSdHRf1LHFbXSCtdtJwQNKcaeDPaUiJsN8NxwJbBqpjY3GwqxE9MoDV9how4zJQNVh0gPFwgaw5uhJxulcH3q18bqB6eAvcW5XMouNlWXIOrdu%2BaAYZ3YhS1rCSqi31srHAoBDCnqaT3Tix6qtBnBC%2FFV4%2BTEUjyZLS3KVS8rFZKawx2jjMC6oX9DN3OpKp3s0u0vgRzOo5Lp0qlaE5uKKvGH%2FncWkQ5lHsCYxODAjPYoaSaKstrmRazRqUH9aQF3rzVOVmgKPEZBw7rCslEToF7tNciTc2MPz0%2Fb8GOqUBg53gMkEWgoSUwURZ2kd0yQiqgW18%2FxoWEyhupylVOK9f%2Bf1gl6tswB6%2BUp783EWZCpM4VqP1W2gbLe7TJxW14XHn0fN%2FYqMRYJ74OHEtTPoOlYXEdwdANs8eesbszmOLEHWAI6Hs4pWa3c%2Bz9Uhv1A%2FiJyrrFPOvRrMSz6ijMhJorosiESO5ETH4dE4UxbjxeEYRjz3UTcqYpXHtrMu8fn0ALHzo&X-Amz-Signature=c11e8efd96b410e494f619fab7f31448ba40922ec6089f92c107f1437f9d0cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JCH7LS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRNHi8ggqEIPQoSCup0HBkUUyADZNnRWjd2TL2kRnmBAiAWptMmeguAdErDwnDQaFpCT%2B1o7hDNuvfqNDebaW%2B4xSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMLo%2Ffdu8TXAd3R30wKtwDZcfjQ3762G9vnsAKagkdJxJKlUs719rplVi5EUkHw2SAzPpMgignsx2FGVx%2BZhzsdd%2F%2FtXTppAkxj1mOsvJnt4sZDRU0QHEL5xPP1%2BBL36e%2Fk%2B19xYSYP60yR50jLKmdVzJAN6m%2FcHWHNTRxdMWG2nmItX5fUuNRlaURQuydbWBssSLiRKFcQUYioc9asgPwuqkqEEi7LXc7ZPaBSbc31ylqjAfxHxL1Oe%2FWepSS3B%2FVgunEz%2BTzWTKPBvpT31IOaLkbdCst9FDMFEZK7S8%2F8mBMdt7fq5baRIjv45WLJprPfUdpjoN0xqkEngiJ3Wy%2FhocJ4YnLuNdhTRJEs7cZuzjyVuxFvhjgyEtjSLhsuCfA6sa71lQjzwdX8pZ0R56iJAvNWuGs27ktAnI0NE3kJVVyfmLcniLni9atZumorsOh36cMHaKvA%2BOJ%2FVx8NWcffnEFHJwWIvekeORTIVXvv%2FsQrrBYbSPCQXBvYMffoog1cOKkTDspZC3QUvLlsV2ONKjrzclvpzhVDT2bz6L%2FPE0rEQwumUmPEausnpoHeq3%2BSkzMMydrh0%2F9VhEqeGfRuFs2JFsLiWd9ArGMY75rju1lAsEFfU8ekb0T6bbDReBwc%2FyCqIzj4K0CABAw8vX9vwY6pgHCE5NC0NOq3b0gvz2Nz6cDNiiiaaT4VyeJM5V3OLNuF0ZUuP%2F8ylvQwdfUFYrktS%2FDF1ulMzewbdkQLuW2gEEIEHynIgdfhpeLUQPfNbBvHS%2BxXNU86NPnsf7U7v228rZby%2BmcWi59X3M5zmdEDz99NGEP5MA%2B9JMESCyvjfvsoVyRgmg8NyZIhRMPwhJ%2B59bKgOkuWkidZsvRYtiA%2Bfm14k8Goirm&X-Amz-Signature=57c49f1871fe8f1850ce7d6d0e00f6815b4d053de18880e327152d2ac2c27b85&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
