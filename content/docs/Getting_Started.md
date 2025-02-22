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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TB67T3W%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsg%2B5weTIE%2F91aP19rVhOwaUX3%2BUzGGVVZzQYUekNpjAIhAMrO7hMxGLU8IzQsrEAbZItlK8bl%2Bq1Z%2BnvqeB5%2BC1z%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx0D8uGGcebB96VJwq3AOxlwyA5Dp0PtpxvI78yqAuPR4HKysUZkk%2FU5NZtDdfVg9WREPoGHGMwLYtLaV0rEKfCmRS2qfEWHwgr8pzljswEyYJWxuxW7TxpngKgkftZ7r%2FSLXIPp2Pyf47lbCcsxDf%2FheZojT79Akle%2F8eBSv31RNQ4KoPe6ma8nFy18WSx0eRllZAjsG%2B8OU8xi2LLp813THia5wz3hcNmkgvo%2BqrNv3cn2dCxFsvOmBOnhmPmhI2TS8JZM5FUB9oLHgdZiDuN8UJ3vIkSDIDiaSlE61CjtrXUgiwUbZj%2BPn9VM2ofpwBEIUW8FL4rkJLj7L4MtdiGgbCbNXWhm8%2FOU6f7B89OZljuo98w19T5JX99Nq1JrBbVGqbLFMtjjM07Erb4vE%2F4OmiPZ8ITNIjQwVIxZWsBUO7nEXP7N8WbxP0Z%2BrtQ%2F7Ln0%2FpfaVr3Q7VjdLg5CmutUxSsPcQwM%2FCP0IQ5NoeeD%2FNjojN1M8QkMbjUVRPs3j0i6TFpQdB6Mu3M3lRw1QgvAp1U24CE3CMLHj06%2FYtVOCUvyMlf23%2Fa2cARZFHlefSgND%2BTtyp04zuxA5KYTmVLA6BJAa7aa%2FlNkH2K2EHl0KQSsWMf%2BW%2B5ZJU0fAjUcP9v6ht%2BnnibZkHBDCtyOW9BjqkAcqNxz9%2F2kYZgJIFf%2BScu7edJKfwP0EswXY%2Ba1S5ypy5%2FV4pyBSiImwm%2B5JxwrL6C9CUYO8BPpg8xhiGC%2FcrNJ%2BAl9i8yXfcksGqDMg6jyBjOSBZbwewqm%2BdzmXj%2FnSg5MpbHEWpBihR%2Fm%2Fij7s6C1wmzm%2BNpJaRaMFz6AxYTQeg%2B04HIZiMVskw5gM6YGUsFjOsolGe%2Fo43xXDF%2FFUrModBdTWw&X-Amz-Signature=23d48f2a94611ced9a61b1287718c690a4d01024b339c9bfa41eefe1695956c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TB67T3W%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsg%2B5weTIE%2F91aP19rVhOwaUX3%2BUzGGVVZzQYUekNpjAIhAMrO7hMxGLU8IzQsrEAbZItlK8bl%2Bq1Z%2BnvqeB5%2BC1z%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx0D8uGGcebB96VJwq3AOxlwyA5Dp0PtpxvI78yqAuPR4HKysUZkk%2FU5NZtDdfVg9WREPoGHGMwLYtLaV0rEKfCmRS2qfEWHwgr8pzljswEyYJWxuxW7TxpngKgkftZ7r%2FSLXIPp2Pyf47lbCcsxDf%2FheZojT79Akle%2F8eBSv31RNQ4KoPe6ma8nFy18WSx0eRllZAjsG%2B8OU8xi2LLp813THia5wz3hcNmkgvo%2BqrNv3cn2dCxFsvOmBOnhmPmhI2TS8JZM5FUB9oLHgdZiDuN8UJ3vIkSDIDiaSlE61CjtrXUgiwUbZj%2BPn9VM2ofpwBEIUW8FL4rkJLj7L4MtdiGgbCbNXWhm8%2FOU6f7B89OZljuo98w19T5JX99Nq1JrBbVGqbLFMtjjM07Erb4vE%2F4OmiPZ8ITNIjQwVIxZWsBUO7nEXP7N8WbxP0Z%2BrtQ%2F7Ln0%2FpfaVr3Q7VjdLg5CmutUxSsPcQwM%2FCP0IQ5NoeeD%2FNjojN1M8QkMbjUVRPs3j0i6TFpQdB6Mu3M3lRw1QgvAp1U24CE3CMLHj06%2FYtVOCUvyMlf23%2Fa2cARZFHlefSgND%2BTtyp04zuxA5KYTmVLA6BJAa7aa%2FlNkH2K2EHl0KQSsWMf%2BW%2B5ZJU0fAjUcP9v6ht%2BnnibZkHBDCtyOW9BjqkAcqNxz9%2F2kYZgJIFf%2BScu7edJKfwP0EswXY%2Ba1S5ypy5%2FV4pyBSiImwm%2B5JxwrL6C9CUYO8BPpg8xhiGC%2FcrNJ%2BAl9i8yXfcksGqDMg6jyBjOSBZbwewqm%2BdzmXj%2FnSg5MpbHEWpBihR%2Fm%2Fij7s6C1wmzm%2BNpJaRaMFz6AxYTQeg%2B04HIZiMVskw5gM6YGUsFjOsolGe%2Fo43xXDF%2FFUrModBdTWw&X-Amz-Signature=e8011861ec65ece6872ef38faeac8b35a0597654a848f2d6b5c94dedc63db37c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XF723XZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2F3VNOsLXiXTtX8zipn7wA80SsGP44voZCboxcPBi0aAiAstrKNv22lMdtWNi%2FPRZZDxmxSvaDRMugzvrZS3rG0WiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoS%2FEUnig7W5riTgpKtwDOct%2FRU6nPM38pryLqDYRIddeEqMm2kj5AvTyU3wVOYH0XFeEfQEh3fCg1dLG0XB9h%2BOy17k2scWcg5ZyLPywXPuLpw%2F92vtBHcOqhvhPlHSTApJ6eIQaxFx%2FE8lGQWuHq1B1iwXvmyxV9wXVRwJdtSEKfJIuQBb5JIgs%2FiLwYR04RVSkVZ1fX%2BfMK%2BAlEyBoDWJgLFZRoD97dTOv8evg3TWjPypAK6eq61b0fLoxSRYL7JoLufF4PwnjOsDKMhsxdkmpstxgYLzDRh28N4qL1HZsVCdAUC4ymiOYw48%2F3HR3wcIQ%2BC%2FAe05SPElSG9NAb%2BXAsrjQFV1Ee6LpeEw6MbKX9KJFhDUtQmTzwNf2bEkve9Oz5xblkonTPk2PrPwR34JWuDua4J5Ix2Ss5aIA2i8zDiVnx6%2BT%2BUB2hRnhLDaVPoEpDSeaTgtkImTRRVNgNIIRLVgIRthWCMAy8sqPN5pYu83VJlklRg139Bt9tWOIe7r9NkQBow8zrzrKNqQ5d9bKYMt0w%2F2%2Fy1VrSCeEnq0Tantj6d7z5k%2FpYdrWdeLq1TXgqBbb6l4r527UP0gu%2FpJVF2yF1ywLSVdax0%2Buo7S45x1sQs9uLMn4wpjSGLF8u9XlJan85ltQxrUwlMflvQY6pgG6uEg8%2BMBYS8pPHybakRADVHzDaW9yqY%2B3%2BdMRK3rIdlPPLAXdCbPstYd0NDQz2CryK02wdBN0QKeKjzzBVIJ63FkmvgT4wesPXY3d%2BXx%2BPpIiBEvmyJN4Cf%2BZAd2tek2KIGjG2MxbDuoQZCc3NhnwYdeBUSlgVNMqYxvGCsV7tz2s%2BIQSpvXeTGSqbsUOrQJYAieQGOTM9NnYfGl922BPmM7Op%2F1K&X-Amz-Signature=fbe3012ac213b54cceb2fe278e018d1b829b617cb5519b7e957e22bd4d5382bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZKL6DV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy%2FoCFps8jAVKoCXMhq3X49O0RQb%2F2onyci6csDk9k0AiEAmTm28yjQ7BmzJ4MUDKJrY3JpMEu8k4dYA1b9y%2Ft%2FVR0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6YtHYVsonfvVdd%2FCrcA8JeuxUhgk8pSbnVjMCKm96XZCfsDTBdEmm3%2BwstIDmV26es4ErNOA2la8VktRcbJkIYWRgR3PxU8tGAdJJeJCQ%2BUdnSV35F8AlVEvkrq%2Bn%2BT4RYf5bv4Hh6b2h1nxLQGnHVwo5xm429btiyzLOFDQcCoKodjqBoiDsHx9wYUOqyHvdXbcWl8KCT5nrVq%2FfQYA11Ow6IBLdKmHmctbbG%2FbfXbeDY8QsnF%2FkG1no7TStiYsvsLs18cCbpHchvYN%2FbF4LyajNWxB%2BMDdSLrBqeJuyYDILYIemPncYl1WKTCSkEARFFeSixARJ3v89wMIXjVjog32O3Olqwg6Mh6W74u90A%2BiuRYwmP4jBtJMv%2BntBNJVQmDvYJbwPDghMJsoRwsFHdlcRQYzvX9On9VUcqbc%2FRk6y3tndjihELOGfgjTa6MsvCtQ41Hwzm4IhnDRtYsuQzdX8zc1nj3hci5zBCd%2FSSun40HtHE0%2F1gM61xovJJ9RcoZ78Kuo5qoU%2F%2FzjuofgdpLsrOd0bEb2IZCb0g9rzDfoLl7AhFcWbJ1nCSZaDk2TaulI746RKEjUOiiYGz7%2FJBvTPOp4VLl8wbRY4UTdAkdll1u%2FyDedZ1HG%2FJeVgsxZQ7OEBw3atuV4vFMLjH5b0GOqUBxj8WOPQor5llkSugvt%2BwX92sZNoiKXWF8sBVVqQnMdwjhr451DC%2BaI2SkK6niXec5HEcodBG6PvXAGjkjg02pF%2BETEr1GA2G63yR%2B0cLlyMM2KWH%2BMztS25WRHRACSETl3jjVOtgAPYzzU4P5o%2FH%2BC2TO%2BNKiaN%2BTieuzAl0l6zzR3aPt8zGfvXcz7wifL2GMitUNYo9KyQTBbK%2Fwk%2BDW%2BJ6c9d8&X-Amz-Signature=17d47d6725968a123342d70708a8fe149382edfeb0ebe87a9d78a92573000b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TB67T3W%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsg%2B5weTIE%2F91aP19rVhOwaUX3%2BUzGGVVZzQYUekNpjAIhAMrO7hMxGLU8IzQsrEAbZItlK8bl%2Bq1Z%2BnvqeB5%2BC1z%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx0D8uGGcebB96VJwq3AOxlwyA5Dp0PtpxvI78yqAuPR4HKysUZkk%2FU5NZtDdfVg9WREPoGHGMwLYtLaV0rEKfCmRS2qfEWHwgr8pzljswEyYJWxuxW7TxpngKgkftZ7r%2FSLXIPp2Pyf47lbCcsxDf%2FheZojT79Akle%2F8eBSv31RNQ4KoPe6ma8nFy18WSx0eRllZAjsG%2B8OU8xi2LLp813THia5wz3hcNmkgvo%2BqrNv3cn2dCxFsvOmBOnhmPmhI2TS8JZM5FUB9oLHgdZiDuN8UJ3vIkSDIDiaSlE61CjtrXUgiwUbZj%2BPn9VM2ofpwBEIUW8FL4rkJLj7L4MtdiGgbCbNXWhm8%2FOU6f7B89OZljuo98w19T5JX99Nq1JrBbVGqbLFMtjjM07Erb4vE%2F4OmiPZ8ITNIjQwVIxZWsBUO7nEXP7N8WbxP0Z%2BrtQ%2F7Ln0%2FpfaVr3Q7VjdLg5CmutUxSsPcQwM%2FCP0IQ5NoeeD%2FNjojN1M8QkMbjUVRPs3j0i6TFpQdB6Mu3M3lRw1QgvAp1U24CE3CMLHj06%2FYtVOCUvyMlf23%2Fa2cARZFHlefSgND%2BTtyp04zuxA5KYTmVLA6BJAa7aa%2FlNkH2K2EHl0KQSsWMf%2BW%2B5ZJU0fAjUcP9v6ht%2BnnibZkHBDCtyOW9BjqkAcqNxz9%2F2kYZgJIFf%2BScu7edJKfwP0EswXY%2Ba1S5ypy5%2FV4pyBSiImwm%2B5JxwrL6C9CUYO8BPpg8xhiGC%2FcrNJ%2BAl9i8yXfcksGqDMg6jyBjOSBZbwewqm%2BdzmXj%2FnSg5MpbHEWpBihR%2Fm%2Fij7s6C1wmzm%2BNpJaRaMFz6AxYTQeg%2B04HIZiMVskw5gM6YGUsFjOsolGe%2Fo43xXDF%2FFUrModBdTWw&X-Amz-Signature=992cb8e9f7733f5a4a0d4620977bcf28d65f41846d9004f69c1ced5c5c1c88d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
