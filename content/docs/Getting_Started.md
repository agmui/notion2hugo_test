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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3GWF3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FE%2BIDfLS8rIELtxXfSUVMqj3GR2%2B%2FPrgOWDPbjo1xHAiBwDm3HcdVvqXIPgEU4XB39XXVH9qWglfWiImm%2FZUrLiyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMkEBw54%2BmwjsZ%2B%2FQKKtwDSZMl77Tg28jz8d1xn9rrQz5X1bm9bEk0CShm1aJI0%2BunO%2BL6R5dGlXNDlLLDvzR8n8b9UoViZzoz8H%2FLSZjlTWYoUkJeD26HIh4Cmf3YcbdhVbxUs%2FzAQ%2FZjN4KYVhUxT0x6BDa3qTT7DPXfLc7AiRzUtpxk2Mon6M%2BnX4%2BKIrBvXhKWeTsGoqvVkOYFeSobDf4zrF8rWoFiaJCqlZvccSxw4uqKPBTAemULgmF%2Bcv5C%2BRaNS8oqZ0EJo2r5sk56pHtm1JOjN0MqibDAK85UqZRgv2uHYsfmv%2BWSihudUa3bgNHcOZYl%2B%2ByEYC9nB6rWEIN2B94dgmnvfC%2BkBzkTziSzNauEaKjNQPAP8TGDdu%2FTU5i%2BfX9WslpWQtdnBafw5B7%2Bim%2BRvO%2BU07S%2FByET%2BCoEgToWm%2Fc6iMeen2ykY04wOvTLRQvO0lW9kN8XxeZWIJ21Ls7lqYO0Oii0OdMIUa7Gar2cdQ30jBhMJmGNO583FyGyPXAyicuM%2BGMowcPHPQ9Fp1SqydHH2pOBgyxozUk%2ByULLjLUuaPJe7diAsAzBRFHbXXjkFppjgMbdwyamgd45AwVXJha8er50w%2FobizM3c5iTJ%2BYZACANdeLFmIOl8TKIRtTgGgAJFiQw1%2FuDwAY6pgFVTkOjFWYP6WN5h1m5rMlE8Z4z1NWYX8qh61Ub%2FCWHJ8llDJCBG45swHyNSHmfG8Vq%2B9vj5XEhXAWxEDCKHQjmOE96QbwZeD83welr9GbsCrlTd69ysetLryGro3M8s%2BfuqqsMxFyfNTVvR1K0AhNN4RFC2hPaOycYMJgYdvTzp3OWnHrou%2Fz5lu9YoB6Qt4T3XwX0EVSnfgyUaYvVPaZkUALt4KJj&X-Amz-Signature=da2e6685b52ff0391efff053ebeae0ea12140849f7cee8992d812e1c4b08d35a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3GWF3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FE%2BIDfLS8rIELtxXfSUVMqj3GR2%2B%2FPrgOWDPbjo1xHAiBwDm3HcdVvqXIPgEU4XB39XXVH9qWglfWiImm%2FZUrLiyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMkEBw54%2BmwjsZ%2B%2FQKKtwDSZMl77Tg28jz8d1xn9rrQz5X1bm9bEk0CShm1aJI0%2BunO%2BL6R5dGlXNDlLLDvzR8n8b9UoViZzoz8H%2FLSZjlTWYoUkJeD26HIh4Cmf3YcbdhVbxUs%2FzAQ%2FZjN4KYVhUxT0x6BDa3qTT7DPXfLc7AiRzUtpxk2Mon6M%2BnX4%2BKIrBvXhKWeTsGoqvVkOYFeSobDf4zrF8rWoFiaJCqlZvccSxw4uqKPBTAemULgmF%2Bcv5C%2BRaNS8oqZ0EJo2r5sk56pHtm1JOjN0MqibDAK85UqZRgv2uHYsfmv%2BWSihudUa3bgNHcOZYl%2B%2ByEYC9nB6rWEIN2B94dgmnvfC%2BkBzkTziSzNauEaKjNQPAP8TGDdu%2FTU5i%2BfX9WslpWQtdnBafw5B7%2Bim%2BRvO%2BU07S%2FByET%2BCoEgToWm%2Fc6iMeen2ykY04wOvTLRQvO0lW9kN8XxeZWIJ21Ls7lqYO0Oii0OdMIUa7Gar2cdQ30jBhMJmGNO583FyGyPXAyicuM%2BGMowcPHPQ9Fp1SqydHH2pOBgyxozUk%2ByULLjLUuaPJe7diAsAzBRFHbXXjkFppjgMbdwyamgd45AwVXJha8er50w%2FobizM3c5iTJ%2BYZACANdeLFmIOl8TKIRtTgGgAJFiQw1%2FuDwAY6pgFVTkOjFWYP6WN5h1m5rMlE8Z4z1NWYX8qh61Ub%2FCWHJ8llDJCBG45swHyNSHmfG8Vq%2B9vj5XEhXAWxEDCKHQjmOE96QbwZeD83welr9GbsCrlTd69ysetLryGro3M8s%2BfuqqsMxFyfNTVvR1K0AhNN4RFC2hPaOycYMJgYdvTzp3OWnHrou%2Fz5lu9YoB6Qt4T3XwX0EVSnfgyUaYvVPaZkUALt4KJj&X-Amz-Signature=4a13329b1e2bbd3698e487cd6d2bfa9c7023accbe074d3d2760ce176a0c0a50f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD5T6GB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf9coN1AsLQBfEPdZcnGzbYS468pXAVg%2Fm5myjI8ElnwIgMP75cG2J1TJan3SE7wm8yOnNL3JkMa4MYxFNHLR%2Bj0kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwMLHF96oyqqPidgCrcA9QW%2BoQsPVgVG3IDvbmpL7%2FhTmwFwfkFoUHT%2BrHyG8oamhTp2tKJbGGebnyrSVJOcq5b4UL8Uq1M%2B1MGdkINoCTYlIjwX3XR4OZmz2Cs1n6C%2B%2B1V8PUwhCvgbPsS10SwniAewauf%2BSFbJ8QCRqT4MaeTwy0bh4dveqwDISwDOeL51DMufS2gRYbJ7y61DPDHl9M86zi2TM1lGMahlryzWYMkRbSfjlZIgQYa7k%2BTT6A1art7l8rnTJ0Ba8Ul6BUv3xl5Thlbw0OSnTMmGddkfwHU3e9ZN6jCQjU5Hc6TywfHYCoC3nCVDvBRq9zNy3npYABk1bdBvrgm6wUpVXfmpEcVWJhd04xIqFZD5UF5S0uZQXG2%2BKeGx%2FoyXwBTtkalNz%2BpHHs2CzqkqOtBkBncf%2BSFWH17wdgqAYFmZYXav%2FyahqUBotKI6Li6sfs6ePa945oeAQqwNoVJWd1Mx7p%2FFkHu%2BhbsZ7SZC5uIO56s5kIL0nquQSw8nnbp5LM97LQRTBQJh3lHamvZK0gN7SQcTkPMyLxpRdSXUpBq7Tgu%2Faf6yep%2FZL3m2EYcCESz3TY77%2F0Myvf%2Fkj8GnJfcfHpWKjNSUdhgEHSzx6tuvnRRiCajXRWjcVMlVF6mdd8xMIL9g8AGOqUBFm0WRW6jG3dB%2F%2Fl0V7cnOTUjyGACFMuNb6ss%2Fck2QjpQ3rlImfCT3AsElZXmxAAB55diqznUNPHfHko%2FaOWXdEcvzSfy9pZiHFlp%2FMFoDV%2Bn8iAjLiNqsV%2FBWEIdA8mJkekQ%2F9fyI7VVseW0ex1DIWnPsPHQjfZVF%2BfPYQn6JV%2B6S3UPaCncJegN9FKypPYWXrPb3VJZaXJrEGLY97QZr8vfR9C8&X-Amz-Signature=969af145786979ec499f0d169f2c46011123672fde3ca2bc3a16317184ac6816&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36UBWOP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB6qoDCKKZjQvurfAK4xEZ0mxH9P4lv%2Fe0X55jJkUUsgIhANOqrrmNxFN7bXiEn5sQIRpU6UD49xg4RW1iDaGo72wLKv8DCF4QABoMNjM3NDIzMTgzODA1Igx34cukmwXZHzoccRAq3AN9Ktj95wP3ynvNnWwun7ru8eU0u515eA7j06O8BnF3xHzPPARFdQvpMIaCEWUVU7W%2BIw89SW652dVY2YB0D73pEK0nDuhoQ%2FQMqw02VjyefLXPKZz70VSR%2FDO%2FkN0CzxMCYaYlvp1awIzobR6n6Cug%2B2o7NfAylBNlSZUpVCEhMNPzXPBAP8ceku63GuedCCV3e30J31EjmUcKvkkQwdbP337W4qGDUTpWXTTzpH4%2F3a5svqesRLAComPJ3gV5MjYmBpEKEe5DUTLrOAOoSVSYOPjCJsNSH%2BN6V8J%2F1gV0Gh9Ql9GY8cUK0638LDfHoBCqupRE3851cjngcjzMbhrEU3%2FSEEax70%2B71nFZMEHO%2F2t7MnWdHcOQ9XhWxr5EJDMDVdwGrYF8NNmWCNi8nE0uyfPXepU89WfBeULXATlTvTFeYJI6J%2FbSw1abVVVhkQ4Nvmy10%2FIu0joPY9uXp1cWCqJNwD%2FQTDRMO40jdW9sKtL6ZuSAf%2F86TBubZlEMB2KhH90Js2VPdtB4QgC%2F94DpgLWUkeXU%2B0SOmcz55julrfxpQjkC1chumxclQBMHzqtHEy48PzNoXlHucC9JLmzHI6IUmVC1tDaUfZr3HGU89hBzMILwiUHWNYxLXTCL%2FIPABjqkAQeVz73UdJKga%2BAHwXC2gsAHwXD9kXU61Loe55j8awWSlkpXvdI8uIeyH1f6RL6Jzh2Jr79NHa8UQPWGgRh3cW58W7MjyHEH7tx4238xuqezDUytgWv%2FPphmrqDz8jpwfBVSzJL86qDxZymAdPRXlgzmlQwtXFvN1Y%2BDiLaP8EgmC8yDGy359cvNmojMZPJl9aU%2FgJFRb05MRO5fiSpqJ5dgYUqq&X-Amz-Signature=21d1e2d179e34be0e4912dbd7074d4857c517416e59af1c14fac0005198335de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZN3GWF3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FE%2BIDfLS8rIELtxXfSUVMqj3GR2%2B%2FPrgOWDPbjo1xHAiBwDm3HcdVvqXIPgEU4XB39XXVH9qWglfWiImm%2FZUrLiyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMkEBw54%2BmwjsZ%2B%2FQKKtwDSZMl77Tg28jz8d1xn9rrQz5X1bm9bEk0CShm1aJI0%2BunO%2BL6R5dGlXNDlLLDvzR8n8b9UoViZzoz8H%2FLSZjlTWYoUkJeD26HIh4Cmf3YcbdhVbxUs%2FzAQ%2FZjN4KYVhUxT0x6BDa3qTT7DPXfLc7AiRzUtpxk2Mon6M%2BnX4%2BKIrBvXhKWeTsGoqvVkOYFeSobDf4zrF8rWoFiaJCqlZvccSxw4uqKPBTAemULgmF%2Bcv5C%2BRaNS8oqZ0EJo2r5sk56pHtm1JOjN0MqibDAK85UqZRgv2uHYsfmv%2BWSihudUa3bgNHcOZYl%2B%2ByEYC9nB6rWEIN2B94dgmnvfC%2BkBzkTziSzNauEaKjNQPAP8TGDdu%2FTU5i%2BfX9WslpWQtdnBafw5B7%2Bim%2BRvO%2BU07S%2FByET%2BCoEgToWm%2Fc6iMeen2ykY04wOvTLRQvO0lW9kN8XxeZWIJ21Ls7lqYO0Oii0OdMIUa7Gar2cdQ30jBhMJmGNO583FyGyPXAyicuM%2BGMowcPHPQ9Fp1SqydHH2pOBgyxozUk%2ByULLjLUuaPJe7diAsAzBRFHbXXjkFppjgMbdwyamgd45AwVXJha8er50w%2FobizM3c5iTJ%2BYZACANdeLFmIOl8TKIRtTgGgAJFiQw1%2FuDwAY6pgFVTkOjFWYP6WN5h1m5rMlE8Z4z1NWYX8qh61Ub%2FCWHJ8llDJCBG45swHyNSHmfG8Vq%2B9vj5XEhXAWxEDCKHQjmOE96QbwZeD83welr9GbsCrlTd69ysetLryGro3M8s%2BfuqqsMxFyfNTVvR1K0AhNN4RFC2hPaOycYMJgYdvTzp3OWnHrou%2Fz5lu9YoB6Qt4T3XwX0EVSnfgyUaYvVPaZkUALt4KJj&X-Amz-Signature=17b3613c3a9f374fe96e9ee6b6ae652fc1cb44de48483310fbbfacba1afb814c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
