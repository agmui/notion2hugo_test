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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJFQHVZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJFMEMCHwzEOla4LtlWJWaH92cxcF4myXLcnGlt2RNerRv5kAUCIFTVpt8d7ulccnF11daj33peNhR0UDUf33V%2FJ%2Bp6JJTKKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzdYBag1mLZr7J8lAq3AOKsaqoaeDAhGdoOJN82RRbsq6ScMh%2F%2BTXZHZgmTNOY6ic8kwhoiyQXIAMBOpZlLpc2hKej%2FPpfvsrEl9Lcq%2FFWLia6qmE6%2BF9jeSvkxcJHbVd5U%2F9k%2B3dkEHV8jjRwxXvn6zBGhOk6GRQhLzzDSQipxF7d1Deo8p6nQtJ%2F778Mam5NBNeBInOTtettlorRtQSvwmRhVP%2BngcSOo2LNKLoRxh4Hkm8BCNHw6i8Yr1EED5j5vwgOgQJm7DS8On6nEEr5h%2BY5irf67%2BzrzE7vMmPidkYZ5JCdZVvJCgweiyhdYC8Hr8KueT19Ce7swbmNgwM6gRgH1hA2l9%2B7Yg2Us0QlDQUxJsPQPPU%2BzQriZlV9N5gVXrHiWEjn9ceh9xd9VuV4dkDSa3KuJ%2BtCCaXOo7Ru3L0%2FAndAvjMubNbozbFFtyNQKIwl%2FJeIQZkmUmpnMJpZPOzognrfJ8XAAqC0wVKpRLToelb%2B5e8Z6zWcmNAtayCN1BuaVanQY2zPFBTAReJZ4RDy1Oem2z79fPnm8immG%2F%2Bf2OP9KjmnQ79KfKmPx%2F217yobUTresVPPwuAhg2yUP3Xu41D0ky9doPgujMkAHfcrQsCznY3i9E0bUvbdXBJRwmG61f8Weqy0CjCLud%2B%2FBjqnARv1PxNNsuNnIcs6TCzMwnALWtrOPkNG2iJE8nlnUdZiPDbWdbdNUn2D50XklD5rRpwj8eI%2B61IjvlRFjc%2FlBq3SLAWoULtz%2FTgnugmUNvmdG34qXeBvXJu0ZfjcXHkk8QV74mffbABFL9OyynKEkoiCGGraPKpj%2FdilR2FQPA%2B9%2ByPXpFcdtte7h581wrw%2FrAW3iQle%2BLI%2FiCRL4zlkAG47Tym8uRRh&X-Amz-Signature=0df9ee5528f6487aa31137c29812422138c7344a1336b20a32fbfd4fbe2c7020&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJFQHVZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJFMEMCHwzEOla4LtlWJWaH92cxcF4myXLcnGlt2RNerRv5kAUCIFTVpt8d7ulccnF11daj33peNhR0UDUf33V%2FJ%2Bp6JJTKKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzdYBag1mLZr7J8lAq3AOKsaqoaeDAhGdoOJN82RRbsq6ScMh%2F%2BTXZHZgmTNOY6ic8kwhoiyQXIAMBOpZlLpc2hKej%2FPpfvsrEl9Lcq%2FFWLia6qmE6%2BF9jeSvkxcJHbVd5U%2F9k%2B3dkEHV8jjRwxXvn6zBGhOk6GRQhLzzDSQipxF7d1Deo8p6nQtJ%2F778Mam5NBNeBInOTtettlorRtQSvwmRhVP%2BngcSOo2LNKLoRxh4Hkm8BCNHw6i8Yr1EED5j5vwgOgQJm7DS8On6nEEr5h%2BY5irf67%2BzrzE7vMmPidkYZ5JCdZVvJCgweiyhdYC8Hr8KueT19Ce7swbmNgwM6gRgH1hA2l9%2B7Yg2Us0QlDQUxJsPQPPU%2BzQriZlV9N5gVXrHiWEjn9ceh9xd9VuV4dkDSa3KuJ%2BtCCaXOo7Ru3L0%2FAndAvjMubNbozbFFtyNQKIwl%2FJeIQZkmUmpnMJpZPOzognrfJ8XAAqC0wVKpRLToelb%2B5e8Z6zWcmNAtayCN1BuaVanQY2zPFBTAReJZ4RDy1Oem2z79fPnm8immG%2F%2Bf2OP9KjmnQ79KfKmPx%2F217yobUTresVPPwuAhg2yUP3Xu41D0ky9doPgujMkAHfcrQsCznY3i9E0bUvbdXBJRwmG61f8Weqy0CjCLud%2B%2FBjqnARv1PxNNsuNnIcs6TCzMwnALWtrOPkNG2iJE8nlnUdZiPDbWdbdNUn2D50XklD5rRpwj8eI%2B61IjvlRFjc%2FlBq3SLAWoULtz%2FTgnugmUNvmdG34qXeBvXJu0ZfjcXHkk8QV74mffbABFL9OyynKEkoiCGGraPKpj%2FdilR2FQPA%2B9%2ByPXpFcdtte7h581wrw%2FrAW3iQle%2BLI%2FiCRL4zlkAG47Tym8uRRh&X-Amz-Signature=98a26dcba57efc365a872c39138e1b381df5f214416cdddc4ee6103f7389d2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6O7LPDO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDUy9aT2qNCTgV1fFVOy5ffWM6%2FI6%2FfN%2B470JXQnPvmLgIgIPj30iKa1KTbzKZtVGqc4E7sxrHY7RmuvD3LZ4nA1rIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7e7OZd3pK0Sdaf9CrcA88rmBTso%2F3eeCur3HL%2FitxxGnoDHx2SAa21QwRvnBxn%2FQJtfkelESirM4alzXNHpLY1fpAa16zzRpGTduIEkgEs56LtTeHXt8kVqcSKF9%2Bn6LKKQqlvod%2BOOjnHHA7F1jc2zkkRJ345SuL4Zo5Bx7WIoL6xDzvSEcVCEAN28bD6xuOaryQOwObxBaztuvCNeHVH0bAkWlzpIJSMhaaHXjqSHvcH1snZyfe47P7ikTUp7dFW6vI5x4wkfc9QFTr0eawD1ODGvGE1JuG5WaWliuizL5pK3%2BzJM0wpNd05WW1gFi9prlHegk2q%2FBk7mWQ4%2F7xzZHVzwsGs2rXhsm44Ooa%2BNHdtPa4rCx%2F6aqL%2FKwWDAuCED%2FMAdXSwEaouXZ5BnxnJN5RxzI44QZKg%2BQrak8bXalHknIumkM4lHPRUp9OQnaZKpMqbvUGBzHy%2FOSLS3MdE7a7WE89I0Bg3vT8s8Qjw8LXi9pBf9Lu4WwW8EWWO8DVDXuAU5AEvmporxwybag5%2Btw9epuliefSZwZYHGN5e5K%2Fz7I0sbBG03tt67K7v0fcS2tv0s9kfY9aZy0Ao31NT9zvIg4%2FY54sh1ooCNmfu0lCmlrDCs8QmqGcWKS2q1p5TBiXM%2FLM3qyz8MIa5378GOqUBsnuZBRgnlRukRPeFPucQ1fWBCPA6a0zJFkbm7SsFSVwjrr8Q5iLC294laugspMmSF3cOU3s1MEWKGCyMbwGOHHYA5e5d7GQMj2HUZASFRMmgxyIUxI1MUb3CiUrK0wuWsG8eysPn9ldzxPIcQU9VGhJmIO390eU9mldj0LCZtX9feCk1l5W6yaalyTcFbAH7jUtBQgQbHYcvjzFyqebsZvND%2FccQ&X-Amz-Signature=a0801bc4c0220d34df6b948a6369505c4620500efec6ede92ceb5a12b9a1bbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK3IMMCM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAWFcvLPmaK932Ea9xIpvFB%2FZzG%2BF8O3JfqtekFUyPy3AiEAlBx%2FpxS0QaECmp1PUurKjt5wWqdviW0%2B03uT0MgXB6IqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORxVoYIlIKXZ3qPUCrcA3OjInb0JJBF02HWHr4m2jJaC5%2BgMzWmXKmDUpqnwn1WTJ5KASiMio2J%2FkOPg%2FeXvGPQwYHRp0xH5Char%2BxomsrFLNS6pso0w53n%2F2oJxuDRgW%2BRzXLAcBbyzPeGKA0xqvPTPP4jAYAPRgwxZV%2Fwh2NydUfiD1PlY3tyM%2FfaK1z0LUCWng6Aaq%2B7gGagomaGEMHXGTE72Z7vo711W0Pi39s5IO6I6C2%2BL1jrYhgwBVEDtRKL9TEFBouiEU7DfJ9b8DLytuhrq416uN3eH1fKTbxfMzE7a5VW%2BgEGZMZa928wnaHY26JRpTK6J1TP68ImG1rjBE4J2E%2BhKxbneJM2RAggoTTFSvOtqcDSZoeTWh7zpy6Ad2Sz4iLpb4ty342UeUKKccgjHLRpMuWeZu0WPBX1fxG1pOTuBixnWfInRGBLmOf9creu%2FUFxDbKGnwRZ%2Fyh6aKGmI4ff3%2BOrtDVQHxxrh6xAbeGJqe%2BtCvydJPUdMjV1FK2oNsoQDNLBkjwZtREbMwsk1JCdXCbo73lJKpYvM7SGk8eVv0vbzCedcl8tGty0tjI6FenvSLEC%2FtTlUBC6WIFfwFWkUrgh%2FYrLkxBwsVDK001r%2FQN525f669rYKgifbkKU2qaU1zzhMOa5378GOqUB%2BkbtjjJa6%2FCo%2BcgYmskkLRsrTSCsDX%2Brih1m50Jsh4hdpJEDHnBGan2GpVdIgNUOV3SwBlZQpDv5ah57Vj18JwyHbyYDLrnwYvclS3Wp2ff0jN%2FRW9PjOh5a7mwgixEqgTQ6TMuNY9KrIGFO8qxYFP8S1Q1eHdUvBR3BBFVU7rFQFBM%2BOXPewtYGivVxjAKLUFOr2TbohRdPoBDzs85fhwS%2B4%2FFR&X-Amz-Signature=f04cc8c120837c5f9f875cff7372764ba8abf545633672c21f52bb5206f725a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJFQHVZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJFMEMCHwzEOla4LtlWJWaH92cxcF4myXLcnGlt2RNerRv5kAUCIFTVpt8d7ulccnF11daj33peNhR0UDUf33V%2FJ%2Bp6JJTKKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzdYBag1mLZr7J8lAq3AOKsaqoaeDAhGdoOJN82RRbsq6ScMh%2F%2BTXZHZgmTNOY6ic8kwhoiyQXIAMBOpZlLpc2hKej%2FPpfvsrEl9Lcq%2FFWLia6qmE6%2BF9jeSvkxcJHbVd5U%2F9k%2B3dkEHV8jjRwxXvn6zBGhOk6GRQhLzzDSQipxF7d1Deo8p6nQtJ%2F778Mam5NBNeBInOTtettlorRtQSvwmRhVP%2BngcSOo2LNKLoRxh4Hkm8BCNHw6i8Yr1EED5j5vwgOgQJm7DS8On6nEEr5h%2BY5irf67%2BzrzE7vMmPidkYZ5JCdZVvJCgweiyhdYC8Hr8KueT19Ce7swbmNgwM6gRgH1hA2l9%2B7Yg2Us0QlDQUxJsPQPPU%2BzQriZlV9N5gVXrHiWEjn9ceh9xd9VuV4dkDSa3KuJ%2BtCCaXOo7Ru3L0%2FAndAvjMubNbozbFFtyNQKIwl%2FJeIQZkmUmpnMJpZPOzognrfJ8XAAqC0wVKpRLToelb%2B5e8Z6zWcmNAtayCN1BuaVanQY2zPFBTAReJZ4RDy1Oem2z79fPnm8immG%2F%2Bf2OP9KjmnQ79KfKmPx%2F217yobUTresVPPwuAhg2yUP3Xu41D0ky9doPgujMkAHfcrQsCznY3i9E0bUvbdXBJRwmG61f8Weqy0CjCLud%2B%2FBjqnARv1PxNNsuNnIcs6TCzMwnALWtrOPkNG2iJE8nlnUdZiPDbWdbdNUn2D50XklD5rRpwj8eI%2B61IjvlRFjc%2FlBq3SLAWoULtz%2FTgnugmUNvmdG34qXeBvXJu0ZfjcXHkk8QV74mffbABFL9OyynKEkoiCGGraPKpj%2FdilR2FQPA%2B9%2ByPXpFcdtte7h581wrw%2FrAW3iQle%2BLI%2FiCRL4zlkAG47Tym8uRRh&X-Amz-Signature=1197aed583569365027f9c82e4d9da8cd2dd0062de3e3783fc28d402b294b2d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
