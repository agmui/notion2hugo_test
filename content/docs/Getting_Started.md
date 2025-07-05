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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ345EB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDqx34k5VNIzCD4QFuVwV2ei8r5q53so5vY49G0%2F2yv3AIgKyPXQOeb91CBTZaQStdaIThYn9XapRTd0bBBuFAP3Psq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLyDNRpJoer6%2FKEj5CrcA3cvF%2FcSM5UwJB4cs5xXmQCpVCfQBCAqW5SPqCT8MSsK3kSRhKAak5AALtBhSmmNU4IveRa%2BJ9q5M3VA601vUD3XVFwaSNREeAoWgnekD8CL4hRE%2BunZ%2BPlaLlngGX8ouI0M63i0z%2BWYn0M8lOOFWsGBZ%2BvB2f2AOLnZe%2Fnj35JkDKH6McA2j3uqaGjPZGbmRKKX3gkJKa2DMUJCiyaXL0FS0rCsJgExLwHa6xClxJAVVPz6x5Z2HCWmHgB%2BDEyWg%2Fa1%2BOi9jpHTlefhRx3eQYBPMZnjXbdQFOFScQaCK4p1mnENv7BHrTMe%2FBH3wRX%2Bbn47Og7Ela%2BKloLBpXXTf8wtm8eODi1%2BPhFnzfNkv6VSTFFRjNQmm1n%2B%2ByUQ4Aa3ME0K1zaExXY9Fz1suN6T0%2FMmeiAowWfBp8k6VfBm%2B3AFPJ3MtXOZcILIWb6BNCc7x4vZWDBRZONuMeuP5yPl5RRanrkEmjxEA1kO1xZ5lf%2BFZ8DX2xfPK8%2BsyrsjG6x3KLSma%2B0XGbNU4rVkGuqg1JLFV2FOFt3JMmAlhQHiSmY4hx%2F47GLCt%2FO1MG2RinxtPGBEbCGdpmLQa4o6yX1JNnkKnhfQqX1zQM42o7cVT2kmjZpwjQX%2FgCwoaSJfMK3kpcMGOqUBO3So0nUc8AJa5OmM3XgTH24QAaM8JlRSSY0Cq%2Fgcx%2BnxXk1nymWi5eeM6pj5p3hkcLPAflsNCa01fx8cZ8o9RyTUSZ0%2FvMRw4Fs4L6txH7YUS3otRR2hBqreMkszFIFNm6HIz5sfRFEYnn8hn%2F0dmm30VgFrV9hngR%2FrxBC7lZNqScIQcu6hkJb4ovwJuRDztPp1rP9iR5BQfMelujg2qSab8sWY&X-Amz-Signature=019d6b3f01a2f92cfda98578594fef1de05bc06daf8bf5317b7b7042456199f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ345EB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDqx34k5VNIzCD4QFuVwV2ei8r5q53so5vY49G0%2F2yv3AIgKyPXQOeb91CBTZaQStdaIThYn9XapRTd0bBBuFAP3Psq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLyDNRpJoer6%2FKEj5CrcA3cvF%2FcSM5UwJB4cs5xXmQCpVCfQBCAqW5SPqCT8MSsK3kSRhKAak5AALtBhSmmNU4IveRa%2BJ9q5M3VA601vUD3XVFwaSNREeAoWgnekD8CL4hRE%2BunZ%2BPlaLlngGX8ouI0M63i0z%2BWYn0M8lOOFWsGBZ%2BvB2f2AOLnZe%2Fnj35JkDKH6McA2j3uqaGjPZGbmRKKX3gkJKa2DMUJCiyaXL0FS0rCsJgExLwHa6xClxJAVVPz6x5Z2HCWmHgB%2BDEyWg%2Fa1%2BOi9jpHTlefhRx3eQYBPMZnjXbdQFOFScQaCK4p1mnENv7BHrTMe%2FBH3wRX%2Bbn47Og7Ela%2BKloLBpXXTf8wtm8eODi1%2BPhFnzfNkv6VSTFFRjNQmm1n%2B%2ByUQ4Aa3ME0K1zaExXY9Fz1suN6T0%2FMmeiAowWfBp8k6VfBm%2B3AFPJ3MtXOZcILIWb6BNCc7x4vZWDBRZONuMeuP5yPl5RRanrkEmjxEA1kO1xZ5lf%2BFZ8DX2xfPK8%2BsyrsjG6x3KLSma%2B0XGbNU4rVkGuqg1JLFV2FOFt3JMmAlhQHiSmY4hx%2F47GLCt%2FO1MG2RinxtPGBEbCGdpmLQa4o6yX1JNnkKnhfQqX1zQM42o7cVT2kmjZpwjQX%2FgCwoaSJfMK3kpcMGOqUBO3So0nUc8AJa5OmM3XgTH24QAaM8JlRSSY0Cq%2Fgcx%2BnxXk1nymWi5eeM6pj5p3hkcLPAflsNCa01fx8cZ8o9RyTUSZ0%2FvMRw4Fs4L6txH7YUS3otRR2hBqreMkszFIFNm6HIz5sfRFEYnn8hn%2F0dmm30VgFrV9hngR%2FrxBC7lZNqScIQcu6hkJb4ovwJuRDztPp1rP9iR5BQfMelujg2qSab8sWY&X-Amz-Signature=046b5d5d6f5e8829e0e7a32cb30bbff24284987836cf6adcb1950cb20371a2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ345EB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDqx34k5VNIzCD4QFuVwV2ei8r5q53so5vY49G0%2F2yv3AIgKyPXQOeb91CBTZaQStdaIThYn9XapRTd0bBBuFAP3Psq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLyDNRpJoer6%2FKEj5CrcA3cvF%2FcSM5UwJB4cs5xXmQCpVCfQBCAqW5SPqCT8MSsK3kSRhKAak5AALtBhSmmNU4IveRa%2BJ9q5M3VA601vUD3XVFwaSNREeAoWgnekD8CL4hRE%2BunZ%2BPlaLlngGX8ouI0M63i0z%2BWYn0M8lOOFWsGBZ%2BvB2f2AOLnZe%2Fnj35JkDKH6McA2j3uqaGjPZGbmRKKX3gkJKa2DMUJCiyaXL0FS0rCsJgExLwHa6xClxJAVVPz6x5Z2HCWmHgB%2BDEyWg%2Fa1%2BOi9jpHTlefhRx3eQYBPMZnjXbdQFOFScQaCK4p1mnENv7BHrTMe%2FBH3wRX%2Bbn47Og7Ela%2BKloLBpXXTf8wtm8eODi1%2BPhFnzfNkv6VSTFFRjNQmm1n%2B%2ByUQ4Aa3ME0K1zaExXY9Fz1suN6T0%2FMmeiAowWfBp8k6VfBm%2B3AFPJ3MtXOZcILIWb6BNCc7x4vZWDBRZONuMeuP5yPl5RRanrkEmjxEA1kO1xZ5lf%2BFZ8DX2xfPK8%2BsyrsjG6x3KLSma%2B0XGbNU4rVkGuqg1JLFV2FOFt3JMmAlhQHiSmY4hx%2F47GLCt%2FO1MG2RinxtPGBEbCGdpmLQa4o6yX1JNnkKnhfQqX1zQM42o7cVT2kmjZpwjQX%2FgCwoaSJfMK3kpcMGOqUBO3So0nUc8AJa5OmM3XgTH24QAaM8JlRSSY0Cq%2Fgcx%2BnxXk1nymWi5eeM6pj5p3hkcLPAflsNCa01fx8cZ8o9RyTUSZ0%2FvMRw4Fs4L6txH7YUS3otRR2hBqreMkszFIFNm6HIz5sfRFEYnn8hn%2F0dmm30VgFrV9hngR%2FrxBC7lZNqScIQcu6hkJb4ovwJuRDztPp1rP9iR5BQfMelujg2qSab8sWY&X-Amz-Signature=c24f997268dbc8f88f49101913ff103ff47ea13eb3c8902b2333b1ce62bdca2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3DCUVB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCxAaKYuzAWwwge0O9uvPKtSxoyOKSfhT1Vvs3DAAFCAwIgU7dPpIhC4NBVhMAxxYoFdKZrkwYPTmPtzPDWrC2iUmkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH8GKf99mx1xb0KZHircAyoe8Jc92L6%2BB%2BE%2BKQNr8BVZXWRUi%2FToQRFxJsmF6EH8io8%2FdWvk%2Fi3ZFzn6bACYH%2FnBMwnVSwWznqx1gpP7w3dfO2un%2BRzTCBVuWKdPiAHQoa0RX%2BdUVKSEMu1TdYBte2ZmjtuYx7EwcSIdGWwbZWE3Fi1hSIFoPjs%2BxqfXq8FHbrMqFwflH5vE3336IlOgGttjTNDgKJLxgRQM47aYE8BYPb8esAg9vmMmOY8A6dKwcyJquNbqDBOgiFB7S58SdWdvQU81gjeQcZl5QYzfV4ZJZqw%2Bupnf8Z69TVOugxMTZXjKeAFNmlN95we7wRsGrQITgOLCj72FgbAKk%2BojwrVe7ZEHqpDyqVYBfCrZ7fWXsn81J0%2Bg0MJ0cbO%2BS1MmOgZz08FKWgdr6Fa2E5j%2B0VNjG0InCn3fXOennDPC8SQn09Qaiq7eNnUQ%2BlcFEotD%2BC1zlTEU4qCkiktAZnk1N%2B6HswtOEpZdWw6R4SXLnHcoxcohLdBGtGC1gUxhH7FgfThWp0CJWlX9Zs%2Fvhw0I7kuUB%2B2zJibKsUWAJrwHG01ZFu%2FS3%2FPJT9grP6HoJ604R1UcRfl6HjcRpPh5I83eII9VwbCMDfTSARqZfOwtu7issrBBsQkC4P8IEx35MLPPpMMGOqUB2gnKgWet1QlJXfX65P3CptrxQ6dbUuJ3xcG%2B6rKZpOqnpJpqXuc%2Fa%2BA3BlzuTRNPcOjGKnyNw8Y0JF01%2BIWK9y08kQz%2F%2BXAN3jLAZHOfaLpi7GsxABIrXCkBZPKJ9GnsAt0ujIqF%2Bz%2B6Nn1vjh5AE%2B1QfnVWV4OiuaNKWHGku1NevNaFE%2BsRnCM1juqI3cxqlUEvgYeFB%2BODt4UJwQse8URSSK7I&X-Amz-Signature=a558e517f7631233c5be4a821569954da5ed6ffc3407298232a0870c7f71dcfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCSMHE6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEyOnD68tbEPzPjqGgrUPp%2FAD%2FTn5hmRz1ji5qmBpU3gAiEAxaUwK1YB0Dbdyg0oHa57LB5t2XMkTWKsYVMYuGYKZ9Qq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGWPf9JmXUyvPCG%2BYyrcA7hKTxega7n5AYeRgTfYFbJeEfF97BOojjEIzlFLNw7pV6%2BMKrk2VriROuvwhuUtfKxQA1a6JqtYzj%2FRX4%2FXA5N9Tz6WXoy2%2Bz7xPdDlGVTN0GHRUV%2BB49MQtgo2PLTVeqwiItizuYMfdcII1Si69Ip4%2B3xnmFhdjsH94%2FpKhx60AHy1Mnyop%2F5hG0cIkppKa3pzbFQ0CZkg99OuzpLrBrIRPLrlCNqvMg0XZnu1iN8iN7onRVpas8OlJhwKmMEB7WH2FzCfsGl%2FJyF6Wsf4AWElDzKSfIM0wu%2FN6EKI5QCCs3joqnalp%2Bsfqmu9kQKpHDS40L4cXSFg9UBxs8O14lI9RlbVF2ejv7JwQcN7FLYzFjQc4cl5oolssD7t0EUGEv1WAibfB0nYCayenO%2FwV9O%2BmodgR8PZbE7ihsW29Q%2BTNa%2FKHlSWgfdAZK6cOfvgvpeZodsJRV9FOnCCrS%2BVQ2zuBwsvztgdeRoea8UZact5FFUOpasFFNmLWLsmRUWdGn%2FdtTsgsIcNlkI2KpikNBBgGhQEFEoqX%2Fsu2wYA9uSwHS2IufH6nMRvst4bAoTSRAS4XtL7PEqfIqdNGU%2F3CJDGnUWb5KWiwEsvpYYWl4w29K0g0WwW58v%2FcnBiMIjJpMMGOqUB4uISrseHJiw%2FNsO2zt8lShM%2B6PLUuXmPHmPt7ZJYZr%2F3k0u%2B0oM1%2BLvXuIUFVKVJqGPLzNGvG7JSJG74LkEbtBxIJuFM%2FOrdp5Xr0dfNTosIFbjHoUx%2BheO87LTofL3C2gnw3iIsdLRSZbiHYSVWHnAw6pnaFEhmeRoRVa10hieN5aaGIZKRKrKRTbHJFJqgB%2FMHHOfvO6Im8fcWiz3a1p7B00XJ&X-Amz-Signature=9b67291132dc0e3864257279d576bc387cf2fefad440f513668126bb5a56c779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ345EB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDqx34k5VNIzCD4QFuVwV2ei8r5q53so5vY49G0%2F2yv3AIgKyPXQOeb91CBTZaQStdaIThYn9XapRTd0bBBuFAP3Psq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLyDNRpJoer6%2FKEj5CrcA3cvF%2FcSM5UwJB4cs5xXmQCpVCfQBCAqW5SPqCT8MSsK3kSRhKAak5AALtBhSmmNU4IveRa%2BJ9q5M3VA601vUD3XVFwaSNREeAoWgnekD8CL4hRE%2BunZ%2BPlaLlngGX8ouI0M63i0z%2BWYn0M8lOOFWsGBZ%2BvB2f2AOLnZe%2Fnj35JkDKH6McA2j3uqaGjPZGbmRKKX3gkJKa2DMUJCiyaXL0FS0rCsJgExLwHa6xClxJAVVPz6x5Z2HCWmHgB%2BDEyWg%2Fa1%2BOi9jpHTlefhRx3eQYBPMZnjXbdQFOFScQaCK4p1mnENv7BHrTMe%2FBH3wRX%2Bbn47Og7Ela%2BKloLBpXXTf8wtm8eODi1%2BPhFnzfNkv6VSTFFRjNQmm1n%2B%2ByUQ4Aa3ME0K1zaExXY9Fz1suN6T0%2FMmeiAowWfBp8k6VfBm%2B3AFPJ3MtXOZcILIWb6BNCc7x4vZWDBRZONuMeuP5yPl5RRanrkEmjxEA1kO1xZ5lf%2BFZ8DX2xfPK8%2BsyrsjG6x3KLSma%2B0XGbNU4rVkGuqg1JLFV2FOFt3JMmAlhQHiSmY4hx%2F47GLCt%2FO1MG2RinxtPGBEbCGdpmLQa4o6yX1JNnkKnhfQqX1zQM42o7cVT2kmjZpwjQX%2FgCwoaSJfMK3kpcMGOqUBO3So0nUc8AJa5OmM3XgTH24QAaM8JlRSSY0Cq%2Fgcx%2BnxXk1nymWi5eeM6pj5p3hkcLPAflsNCa01fx8cZ8o9RyTUSZ0%2FvMRw4Fs4L6txH7YUS3otRR2hBqreMkszFIFNm6HIz5sfRFEYnn8hn%2F0dmm30VgFrV9hngR%2FrxBC7lZNqScIQcu6hkJb4ovwJuRDztPp1rP9iR5BQfMelujg2qSab8sWY&X-Amz-Signature=f61586dd0a25e5cfcf5ca2cc528ff7bd57d11b5d18bb5eb516313f79ad4eb3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
