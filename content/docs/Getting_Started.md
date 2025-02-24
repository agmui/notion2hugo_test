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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOSRWWO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDbXtVSDTYWY%2BphYiUz8ce8dRi5j89OQKM9f7g08t5dwIhAOdSVhvXoCiHptk4TEssdzB%2FAl0ZO0C4DW2MYI3sRgUXKv8DCDcQABoMNjM3NDIzMTgzODA1Igzx6VRXbame4u8FyFsq3AMtqBbs3VLUxNOTMsyX9Pl6rFJOk44z9k4SOxDxRqpqKQ%2B1pNX5Fe8XgaGZ3UshYSnkHSTNPTXIY%2FoDfcesxOeiiOTinWiN72klLtcBFFKmvfEeVZlCq1FENjEvzZUaELEI2kshoOMwZZwffTRkNZwRHitwG7WERSgbZOd9cvMSiVRRJEupvmq9YAVD01kL7Q8BCRiB6c%2FWalVcHvjG8RdH5Mzmk4BaSaScnnSYoHdf0cWzPEcDuEO1Joajr%2FPHVpEIKLUksnJoMYvZw978uF9NslK8yVr5pjJMluoSTVd%2FWFDi3P6apdmpoSQuGTpg9ySd86Q0Mq8RdmVpDx6RP47Tnuqt8atowZ%2BfW1vq8zHvuHaUiY4X1Q8%2BXxcpzQJmntq8OTnMGWWIkxFWN%2BKAumD1TlWaLd4IH4%2FXJQ1549kJ3LY1abWu%2BPWlYeDsrj1q6X7sW8unRrUbCcDp%2FcNjRpHl4v1teV3VSyIhKoyNyq8t23f6dRrMhfEDW0wjIBAUBlVNSGZmYsbvhEF2UQviCL%2F5cdJv7NpPLTPKTsT9oJDkUdiUR2pAzkRgP5iz%2FM9i0c4ei3%2Bm75rEM2uGXzy%2FNr%2BlM3sahurZ3fOe0UsMbG19Eq05uhb32XjoKSEahTCt1vO9BjqkAd8KW9OQFO%2BXGWzK3a3W2s5x2NatgHGq0V0y7xms5R8ffyvnvXpU8q4R%2BqsLVDTQiY%2FPekYHrqgzIZ%2BbEF2b8DyBWfGzefSxo70VbGaeyqQV%2B2HnAvLR0yOkhX%2FV9MYeBlIYnIatAPNqO7ZBUKjj5GHGeVqvSKMmoX2WiDRYyXyLyUXrBSwmNlJhFfQqn1c1mmBmt6oryKHny4xDSOe4JMpk98%2FQ&X-Amz-Signature=73ea9ed00feab13447ddff08036db1205198cac6ffcc5735218d548b48b28920&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOSRWWO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDbXtVSDTYWY%2BphYiUz8ce8dRi5j89OQKM9f7g08t5dwIhAOdSVhvXoCiHptk4TEssdzB%2FAl0ZO0C4DW2MYI3sRgUXKv8DCDcQABoMNjM3NDIzMTgzODA1Igzx6VRXbame4u8FyFsq3AMtqBbs3VLUxNOTMsyX9Pl6rFJOk44z9k4SOxDxRqpqKQ%2B1pNX5Fe8XgaGZ3UshYSnkHSTNPTXIY%2FoDfcesxOeiiOTinWiN72klLtcBFFKmvfEeVZlCq1FENjEvzZUaELEI2kshoOMwZZwffTRkNZwRHitwG7WERSgbZOd9cvMSiVRRJEupvmq9YAVD01kL7Q8BCRiB6c%2FWalVcHvjG8RdH5Mzmk4BaSaScnnSYoHdf0cWzPEcDuEO1Joajr%2FPHVpEIKLUksnJoMYvZw978uF9NslK8yVr5pjJMluoSTVd%2FWFDi3P6apdmpoSQuGTpg9ySd86Q0Mq8RdmVpDx6RP47Tnuqt8atowZ%2BfW1vq8zHvuHaUiY4X1Q8%2BXxcpzQJmntq8OTnMGWWIkxFWN%2BKAumD1TlWaLd4IH4%2FXJQ1549kJ3LY1abWu%2BPWlYeDsrj1q6X7sW8unRrUbCcDp%2FcNjRpHl4v1teV3VSyIhKoyNyq8t23f6dRrMhfEDW0wjIBAUBlVNSGZmYsbvhEF2UQviCL%2F5cdJv7NpPLTPKTsT9oJDkUdiUR2pAzkRgP5iz%2FM9i0c4ei3%2Bm75rEM2uGXzy%2FNr%2BlM3sahurZ3fOe0UsMbG19Eq05uhb32XjoKSEahTCt1vO9BjqkAd8KW9OQFO%2BXGWzK3a3W2s5x2NatgHGq0V0y7xms5R8ffyvnvXpU8q4R%2BqsLVDTQiY%2FPekYHrqgzIZ%2BbEF2b8DyBWfGzefSxo70VbGaeyqQV%2B2HnAvLR0yOkhX%2FV9MYeBlIYnIatAPNqO7ZBUKjj5GHGeVqvSKMmoX2WiDRYyXyLyUXrBSwmNlJhFfQqn1c1mmBmt6oryKHny4xDSOe4JMpk98%2FQ&X-Amz-Signature=b9588e2535c856a0e9c10c8c97e325b8b27e95fd455cdf08b86f7b64814367ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FV6ZYKG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQp37Iv82YiG9ctNlEEpfpht27o8b9WFyKO0X9EoXHFAIgbMct6JvU3a9fEKQIzzAjXnwdd8WnEbW4F4y2c7v9ggUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMOxu7VKO6xOBq3poSrcA6M2knNok7HAzlG%2F3KMvWHY7YmrIhodEgRYO2bbgCU5PeUJ1Os82DqScCtprubliiCBQjql6gxhqHvMn5BTvpu%2Bm8OsLgd2kU5zR3fNpn4yqBhpjeCtIA2SzGgLFPwWw3PFuZAQnaIidvmV9%2B4ua8F6LzSXTJaBeIwV7srEmW86xMpOEaYaxLODG0IYtsSXJTOsFGtrz16%2BFsLbSpKrX%2BIMrEnn47SOvnld9RJXkZ%2FeEvNrf7KvhZqKqPz3llfKEe81ypH5CHrjIIx4ku%2B9DFhU7e1qslhCUrkTTxqY2Mku8c5XPyZe6V5svbf%2B1DbUA2HNJqRdJG8SfqwtvpIMlXkL%2BDmMd%2F9aKTU6Qsq490bUSmveF%2B5zx4jn4EkNMQOr8kkxcbuHSQCjaCli17kmV%2FeRdCZpSD214%2FkJDMBYspUGDiq8Z6E4cYNt2LSYoHepNsU4Gt3KjYclXReqWWX%2BjRrYcusnfCc5%2FaJRLqDkArJMHOjjV34sblWEesQNmjff7MMiNvealCmkaCl4sclmZSFzcztbSs6jua9r%2Foder5M0JxttCekmiHQn379YPIr4uweSurL1FHbiF0zcH2lA1ujvLDSScuDeRinm8Bc1Ut3eaWsxli%2Bs7NseJNOjyMNLV870GOqUBDvV77Ql%2FNlmzqDNBHVb5e30wmCRLr%2BuWci7M%2FTD84j%2FtddSI27M9hNpi8Ln%2B3JaLCfdsm4iAefd9FHwoonTIYyBq43wM4UkR8fA2NDk%2BiiVc1o4VrkZlWAE3e%2BN1IvpBsiQNBQhLxd6OLA0CyKMxJLrExh0NNQh66KqBXFX2UFu6bwbobYvYhe0bRRgYGee2ZcD9ISF%2BQovqDHCvR8xeaya2Hdop&X-Amz-Signature=82a2942e7d76cf0d09ade4dfe46e042b2e5b1260143cf0b6d5efaaa68ae8e3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UESDNNN5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUbjGkQxFWNgoMnn6qpijkUw11BX8%2BJ6R2VCPdIfY54wIhAIy1ppcjOXfxnHzzpduyokeG%2BDyynkXxMKsyUtDU6tTjKv8DCDcQABoMNjM3NDIzMTgzODA1Igx2IPu%2FMLgf06cC%2BbQq3AMAMAnp8RNyqjc2EPeHqBjU48nFyAL66%2FdCA%2BpsWsaMwlzSw79i7c3b4BgiuO70R6ziNX9vzNlmmZebobvHnViw3SEv4DGh96AmRnl%2FfMGfhipGaIu%2FIwhYI4VEgp83s0iBelhC2s18YEWTTOxrqO2%2BzFlUczK7T6tvAHRMOJGEE4sMCPD3ywl5h2%2F%2BTMd7xgaQnWuUxpWaq7%2BRNscWPzvQ70wuXxRhEWpabDJblCEgGbd%2Butj%2Ba1C5Z8jfkFpO2GSdjo6gEZCJ%2FcSR%2FhOeOhh5hgsm%2BvqSZSN1vZLODRAiojpFmunbryetS735UL1Qjt5pHA3iZsi7DrnZxvb2RoE7Ux3ac83kUDjVmGwbbRMLmWo%2BNl8%2F8IGW%2Bf6a%2ForJqquY9GjaVAprK9ufD781RFYAzWuI3RwosUImdZTK0A8Okkm8VzMEeEK2A2IWBKO%2FDes4ymjU1Yp47xSfk7DWnltTWYtLQGyacT84ln12QxR0xkVmSJov6CBIWl1OiDAvcdFyYEv2PWDQqub38hesFKSL0Wk2UW0mXd0LtOcRA5qzqD6CspB2DN6%2F0DT%2Ff7nB%2BDqCRMrslWzZ1YzNT3foX4gEzEBU4xU8bufDZcAXcwnk8Jft0KxZ7fcu48aExzCK1vO9BjqkAec72E%2FADn7eMcHmcKjkeaZc%2Bx5ZFrboyhEmT3UznJT8NPH013Swhe4P8dUMFEM%2BC9mVpyOXneN6ll2%2FNJeriJbks%2BXO24mLeLob5%2FlVmvQ3ojvtvcjGbtAKNy9KKww9MZ7piDGByrMUG4oyxi8DXc%2Bp1viVAlKruVW%2FZW3%2FfmRKFPWv78l349CStxASDFZzkTmxT77U2aDFCPnXP%2FnOw1t9sCoT&X-Amz-Signature=900858eb2f8eb004c5d916b746efb87968a9936029a1005f61036cc8df666aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOSRWWO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDbXtVSDTYWY%2BphYiUz8ce8dRi5j89OQKM9f7g08t5dwIhAOdSVhvXoCiHptk4TEssdzB%2FAl0ZO0C4DW2MYI3sRgUXKv8DCDcQABoMNjM3NDIzMTgzODA1Igzx6VRXbame4u8FyFsq3AMtqBbs3VLUxNOTMsyX9Pl6rFJOk44z9k4SOxDxRqpqKQ%2B1pNX5Fe8XgaGZ3UshYSnkHSTNPTXIY%2FoDfcesxOeiiOTinWiN72klLtcBFFKmvfEeVZlCq1FENjEvzZUaELEI2kshoOMwZZwffTRkNZwRHitwG7WERSgbZOd9cvMSiVRRJEupvmq9YAVD01kL7Q8BCRiB6c%2FWalVcHvjG8RdH5Mzmk4BaSaScnnSYoHdf0cWzPEcDuEO1Joajr%2FPHVpEIKLUksnJoMYvZw978uF9NslK8yVr5pjJMluoSTVd%2FWFDi3P6apdmpoSQuGTpg9ySd86Q0Mq8RdmVpDx6RP47Tnuqt8atowZ%2BfW1vq8zHvuHaUiY4X1Q8%2BXxcpzQJmntq8OTnMGWWIkxFWN%2BKAumD1TlWaLd4IH4%2FXJQ1549kJ3LY1abWu%2BPWlYeDsrj1q6X7sW8unRrUbCcDp%2FcNjRpHl4v1teV3VSyIhKoyNyq8t23f6dRrMhfEDW0wjIBAUBlVNSGZmYsbvhEF2UQviCL%2F5cdJv7NpPLTPKTsT9oJDkUdiUR2pAzkRgP5iz%2FM9i0c4ei3%2Bm75rEM2uGXzy%2FNr%2BlM3sahurZ3fOe0UsMbG19Eq05uhb32XjoKSEahTCt1vO9BjqkAd8KW9OQFO%2BXGWzK3a3W2s5x2NatgHGq0V0y7xms5R8ffyvnvXpU8q4R%2BqsLVDTQiY%2FPekYHrqgzIZ%2BbEF2b8DyBWfGzefSxo70VbGaeyqQV%2B2HnAvLR0yOkhX%2FV9MYeBlIYnIatAPNqO7ZBUKjj5GHGeVqvSKMmoX2WiDRYyXyLyUXrBSwmNlJhFfQqn1c1mmBmt6oryKHny4xDSOe4JMpk98%2FQ&X-Amz-Signature=676e3ca29a572c21e2e518449de4c71e2149ad70ccfacd0e8eeff1cbc82330d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
