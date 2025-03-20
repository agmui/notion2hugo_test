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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UPRREO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIC397AYrAU3rzdyAHlawCNMEAuwgAn296I3QDc33%2F3v3AiAQ0YIdy1haTWzuZwZ0%2BkpYxIpIbYubtDs%2BJ2MewNPUFCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8io%2Btc%2BEKH6YvA0wKtwD1mfMKV9eGwIu%2FwG5QL3awd9Fr1w39RerRPBUUITEsnNRcOLsa1Bwvyc%2F12Two5OjhzcfgqD%2FMf7CamWtLw7w9GFGvEM6pI%2FjYVT%2BsdJh8PAPB684eNXtMbseD%2BVAVgYTbRjeVoemZIFDunbQFD1Oz7HOQ9czazn79jyEfbSu8z6U7MQFTT%2B57WCupVBoIUYvwtNtHNdSnHExId4fYWFYLZCGjyi6JrlWvKvzDYx1YKmdovalIfXBPPzD0ZubSMXgkCO7BCOihXiRnjNEC85LD4%2Bx5Thfs0Rl3CMGVreZEICRD5%2B%2FDHHQAI0h%2FSNKq5A0LA%2FEL9c%2BH14fkn%2BAGaN0eqZShu8J%2F%2FDxukTJHVr6P9Py4Hv1PJ42uqwBIHwxFxItfNMtVNN1CngjVZWw5Fj0ZdmfDMFP7t%2FM9rCjPU%2FhtHOyyAcLcVfCcMQwXaCLgMJK%2F6VzT2YT1Ty1%2FxIBHTmtJsRGZIaDpV8u%2F3Flgie3R%2FQ7k0KV07YknAa8rmIK02xx2QAuwmPNQgITzVp%2FBrMh0XP3YJ5rA0dPFCfZzf3HSs2AJ6SmD5q%2B8vJjBUnU1K%2FIHC5hGL2WH%2Bt5Zspp3918xbiah0f8kailS4SQT4XYkEeh4axQ2vOZr18N3vww%2F%2BjuvgY6pgHngG93bZAX4GPMoIaWCf7P%2FOlG4%2Bc%2Bx8Y%2BveQwgM3wUhoRPC1zpceMZUWU%2BsRtcncbAPC2x%2BZu%2BmzkFjAX%2FSJIPKdOSm2Xd%2FcbdJt8KH5iT0aw6yC26WKtxdzRCNHZyfcnjaYgkr9JefdIoYTFEPF9xh0zgF69g%2BAVwLsPsCjvQEJCtjF3IHyc9kztypt74gq2br38Mwz4hk7srl2%2F3bRoM%2FgS%2BFlu&X-Amz-Signature=58f2970c8e80954e5909d76dd829ed9c83a8ddd4068cbcae75dad20e4751dac6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UPRREO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIC397AYrAU3rzdyAHlawCNMEAuwgAn296I3QDc33%2F3v3AiAQ0YIdy1haTWzuZwZ0%2BkpYxIpIbYubtDs%2BJ2MewNPUFCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8io%2Btc%2BEKH6YvA0wKtwD1mfMKV9eGwIu%2FwG5QL3awd9Fr1w39RerRPBUUITEsnNRcOLsa1Bwvyc%2F12Two5OjhzcfgqD%2FMf7CamWtLw7w9GFGvEM6pI%2FjYVT%2BsdJh8PAPB684eNXtMbseD%2BVAVgYTbRjeVoemZIFDunbQFD1Oz7HOQ9czazn79jyEfbSu8z6U7MQFTT%2B57WCupVBoIUYvwtNtHNdSnHExId4fYWFYLZCGjyi6JrlWvKvzDYx1YKmdovalIfXBPPzD0ZubSMXgkCO7BCOihXiRnjNEC85LD4%2Bx5Thfs0Rl3CMGVreZEICRD5%2B%2FDHHQAI0h%2FSNKq5A0LA%2FEL9c%2BH14fkn%2BAGaN0eqZShu8J%2F%2FDxukTJHVr6P9Py4Hv1PJ42uqwBIHwxFxItfNMtVNN1CngjVZWw5Fj0ZdmfDMFP7t%2FM9rCjPU%2FhtHOyyAcLcVfCcMQwXaCLgMJK%2F6VzT2YT1Ty1%2FxIBHTmtJsRGZIaDpV8u%2F3Flgie3R%2FQ7k0KV07YknAa8rmIK02xx2QAuwmPNQgITzVp%2FBrMh0XP3YJ5rA0dPFCfZzf3HSs2AJ6SmD5q%2B8vJjBUnU1K%2FIHC5hGL2WH%2Bt5Zspp3918xbiah0f8kailS4SQT4XYkEeh4axQ2vOZr18N3vww%2F%2BjuvgY6pgHngG93bZAX4GPMoIaWCf7P%2FOlG4%2Bc%2Bx8Y%2BveQwgM3wUhoRPC1zpceMZUWU%2BsRtcncbAPC2x%2BZu%2BmzkFjAX%2FSJIPKdOSm2Xd%2FcbdJt8KH5iT0aw6yC26WKtxdzRCNHZyfcnjaYgkr9JefdIoYTFEPF9xh0zgF69g%2BAVwLsPsCjvQEJCtjF3IHyc9kztypt74gq2br38Mwz4hk7srl2%2F3bRoM%2FgS%2BFlu&X-Amz-Signature=8def1b6400f55aa2ee63987ea9011e09ad0fa7f082d782e992716ec439de2afd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76EQHUU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCv88SxUsCnqRmzSeBFhPyBryJqHeHQT%2FVxeSypXtfoAAIhAIcvZ7YYZUgtuLjGsWIYCGi4S221QyTVwIelLcZNT8HvKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKG1WrH7v1d%2BPvsLIq3ANKxDYTzEyp83EQLAFz8g10d1tGu%2BZiL9W9WfC3SGizkurbJGK%2F5JOgeKXUJ7kXY72Nt7NZGvgrEpI%2FM%2FQlOl8Ko1DYNgkvMwyE1xs10sGHTppV5c8yVgiG9h54r9UFRipzprRKgmR4NCfEtOTFYr0LcgaphhqPOXu5SaM43ox4VHZZWj7nvBSmiOL%2FLKX0pYr6Muc6lUXYVU2HFm75ezShyncfonVoC25%2Fpi1Abk8VJGLyPr6CnXkkmzOAyoKFklZGRYlCNhwKh72ToMvXfwcktvt6Pb4B6e3ZHYOzeLQasHQZmHj%2B3zlqwNCGZbo5mr0hy0XqDHeXPFL5x2l%2FT0dAE1TgDZrsyx3Wkix65xi1DqFwxfY%2FKFV2x%2BcL9WFnnFiUTXhknyzU1R0svMKkmzZbqeiXDoDnWU9dnqzvE9oUc2zYsfQOfXr3l9e8M3xE4ckP4IFcClzN%2BmiqxrfsmqFDWm0cQqqV4I6cgs8MzpWIPR3hJbUqtFSnvV9YeCVWiRLkpzdN4rq4u9tJT7nrswKlWG3C0ZOLVVErXXumitQSkrVDrc57TPj4aL3O%2FgcVFAbCtkM5G8tx7fbcZVG2A9x1TCDVnCShDc3k4SqJBCvy%2FAMtaHtr7qhVW78ccDDd6O6%2BBjqkAfBEifReNSMJnphQD4I5PCFaz%2B%2BCFsG8puHnCR%2FFmMcuT6s%2B4%2FoWZrpvQxwTvoLqZSX7dz4RR5VPUFI46KUQlRs8sEvpd4J0sqk0lWa6vnIUA7g3SF89utEs6HfXlQ3DRtXifgk4dJ3kgsLTgsCmqZtJPTfP26%2BxiNxJ2hNp6QQm%2BU28GdQPynordqoQ5Y8%2FuEWEVJRhax82u%2FQj6BR%2BaU%2BXqpIL&X-Amz-Signature=a0dbdb0a7b2c9d1f40f73d4e95aaa6828599cba2fef3591ad94d2832f14efe82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E2QQIBW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD0V%2FWyCUV6uixmMGdceWiuDwH%2FhdjgsLhfGFY05POdnAIhAKMr2ae64i7q1lluJVuuf0CzChxkjGEZnsPanGRlOqKuKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyKwFe2g9%2B5zZMEREq3APwqdzX9fnusAHvLIOfOxJMCKh4yX40FnNIzhqT0bMjkSDjBtH%2BFAeDCq9uADyh7aaIeQtIwQ2as7TDsMK1OmsV88i4wOt6MmVHkQ7pJiKat3RebIMSvwwD1h%2F6q1NngjWwlTBGXb8yGJzJg%2B%2BuRfPR0t7WmqnBYJEag6PWD%2BwjKAt6pZKHknh0FW5cn3%2FlLKiE4A2OeylU9PkiK9rrL6uPqPwkad%2BrMMZ4%2FAqmVWHSU5WOikRrJ8OCJvPLTQuHcZWubAllew7%2B0PrG9lrEwKaTQ3E2RK86M%2BoO8ahYswEGKIbeCtqWwFhuS4qXUBXXpQS0VWxufZ8Mp1%2FuUQWJHu7XLmb1GPONGjjjsfU47OZPzLSRp8GitPK6K7qA7%2BMTWGmmIzmHDgmbeZAqWBeT19qso7i4ZvYQHUxmrQViBcVI%2FeQqenjCaiso%2BgJ0MWAWjshRILrzYEHkvXCavZ6CU40FBrNOywOnUb%2BEwTGkKbC5Te%2FTbkXqzj5Bg9hOdRN%2B9zcToXfz78uYrihgxpPfMjB1IHLJc03Vez%2FywMWrmYbLsWfd3DX5Jy8vYBWv%2BI0EPjC4ZvLjOCVv0kkIwITR0ispc2ypqRTscsTSGEUVvIt6KycaylxAQjqnfHZMKjC96O6%2BBjqkAY%2F4K6bh%2FRMwYUUvQd4j6KQyihcyjmbTmffY0Nbgg0fzGBEqiE9tkqke5X9K%2FvJauM3BDzqMKSvXTQVoqa6LyaqpCmkZXW6Jr33iOzYDHN4w2IEZwCuafm8JMCa6788vkoUjW5a5zZzFqXwivlm6f0V%2BoYuiBLa%2B3Sdv%2BGtgDyJks7qyq9%2BN2q6MNEcrJ0nMm5%2BXYx4G8HccmPxBsjHsrVlqLvpl&X-Amz-Signature=04c59b0e88f1a4a120d51124b6267725acd6bc46cb3bb2c36a0c5962262a2efc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UPRREO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIC397AYrAU3rzdyAHlawCNMEAuwgAn296I3QDc33%2F3v3AiAQ0YIdy1haTWzuZwZ0%2BkpYxIpIbYubtDs%2BJ2MewNPUFCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8io%2Btc%2BEKH6YvA0wKtwD1mfMKV9eGwIu%2FwG5QL3awd9Fr1w39RerRPBUUITEsnNRcOLsa1Bwvyc%2F12Two5OjhzcfgqD%2FMf7CamWtLw7w9GFGvEM6pI%2FjYVT%2BsdJh8PAPB684eNXtMbseD%2BVAVgYTbRjeVoemZIFDunbQFD1Oz7HOQ9czazn79jyEfbSu8z6U7MQFTT%2B57WCupVBoIUYvwtNtHNdSnHExId4fYWFYLZCGjyi6JrlWvKvzDYx1YKmdovalIfXBPPzD0ZubSMXgkCO7BCOihXiRnjNEC85LD4%2Bx5Thfs0Rl3CMGVreZEICRD5%2B%2FDHHQAI0h%2FSNKq5A0LA%2FEL9c%2BH14fkn%2BAGaN0eqZShu8J%2F%2FDxukTJHVr6P9Py4Hv1PJ42uqwBIHwxFxItfNMtVNN1CngjVZWw5Fj0ZdmfDMFP7t%2FM9rCjPU%2FhtHOyyAcLcVfCcMQwXaCLgMJK%2F6VzT2YT1Ty1%2FxIBHTmtJsRGZIaDpV8u%2F3Flgie3R%2FQ7k0KV07YknAa8rmIK02xx2QAuwmPNQgITzVp%2FBrMh0XP3YJ5rA0dPFCfZzf3HSs2AJ6SmD5q%2B8vJjBUnU1K%2FIHC5hGL2WH%2Bt5Zspp3918xbiah0f8kailS4SQT4XYkEeh4axQ2vOZr18N3vww%2F%2BjuvgY6pgHngG93bZAX4GPMoIaWCf7P%2FOlG4%2Bc%2Bx8Y%2BveQwgM3wUhoRPC1zpceMZUWU%2BsRtcncbAPC2x%2BZu%2BmzkFjAX%2FSJIPKdOSm2Xd%2FcbdJt8KH5iT0aw6yC26WKtxdzRCNHZyfcnjaYgkr9JefdIoYTFEPF9xh0zgF69g%2BAVwLsPsCjvQEJCtjF3IHyc9kztypt74gq2br38Mwz4hk7srl2%2F3bRoM%2FgS%2BFlu&X-Amz-Signature=be9269d6bd04f6af0aa4cba48a8fcb2e45fce5fc0fa9ab097abdb3d4276b6cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
