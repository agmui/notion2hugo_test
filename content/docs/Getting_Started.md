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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYPDWMQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFIGs9Pu2zHqQYfKb4sJNZ2YTneWZJKG2uJsEezOVT%2FNAiEAiImJHSTRf%2F1CJjsywCMjyyB38R2DYFl0o%2BUbyyVjiDAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVRMNkYknxGKnbzzyrcA0e6Q%2F0USceouUtAChrFS2NZ2R8vDOAWoogL6%2BnsEXiB9fHpXoXSmXo3i5kp%2FkUMpAoypw%2F9DOGbxlKCRwaZrfpK22Ce%2FrHWDcNmW6w5nNLSH3DBFQe6%2FShzlvKuboM%2B43uuZJqL3Pj%2BKWSm4YSvyDKZnTCr%2FGg9sSOamK0lCcK%2FgRFuYdH34zamDJnQW4wy99qM4glI8H8GwAQM%2F%2B8xNRgkSY%2B0ZhZxhAhwBcs6x%2FIV5f0VNNsJCOvUERgjm6j6LHpySL41d1wWLgaYoC5FRRjUxr8Le3256EcR%2BPNnRoQ9XkTWuruBHVnwZMl%2BwpGrcOmT2j9l18yCLM9PVY%2B%2BtFTKn9w6qTwrk0Ol61%2FStYn6BTAGZbrrCm6NVaaFTewgGCW6rxgLtJn3Ll4bYnlRQT%2Fsz0gpEzm18RKzqad9IDxHpNXl6j1XKBhcBFnwifGedvG2Iv6QLFupQScz1YxMSUWQYX%2FWv2UOEwlIKt%2FjBiGmjFAbi6CNafwvjAL887c5kgk86PVmcbRJv7wmINZcZk0IUU9%2FfVJ8GaWxv5b5tLiBz0syfw5yIxFfI9bVLdOqhKmLSaZ1SCZ3W6CngUQMmAoOnGijjRBHyyxCKY13efxvpr56bgVM9k5qa1n6MLuG8L4GOqUBs9IAFgdPzneLAAt4fOSsV0jRv%2FNEJfsBQUUgp9rpBF2KAJ4DHky2TjQi3hRb4IyVGaE7D5feQPz5udtOPEaHSlcGX0ysRi6%2F1aCBiYcyDkcNmK%2Be32HS6CUMgDYLnPaIwnCcPbIDz7q35%2BfymEwgGJLe%2FGUg3Awm2e4iFO1%2FFYPF%2BlpgqZ%2F8cpPHuPRnNdUcQN4F4JfjKgSYL9uvPvOXIXfsrbO4&X-Amz-Signature=f4914d325b60110cd1afc8ffbd93d6184537248c0b7548964f9c7b6be818430d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYPDWMQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFIGs9Pu2zHqQYfKb4sJNZ2YTneWZJKG2uJsEezOVT%2FNAiEAiImJHSTRf%2F1CJjsywCMjyyB38R2DYFl0o%2BUbyyVjiDAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVRMNkYknxGKnbzzyrcA0e6Q%2F0USceouUtAChrFS2NZ2R8vDOAWoogL6%2BnsEXiB9fHpXoXSmXo3i5kp%2FkUMpAoypw%2F9DOGbxlKCRwaZrfpK22Ce%2FrHWDcNmW6w5nNLSH3DBFQe6%2FShzlvKuboM%2B43uuZJqL3Pj%2BKWSm4YSvyDKZnTCr%2FGg9sSOamK0lCcK%2FgRFuYdH34zamDJnQW4wy99qM4glI8H8GwAQM%2F%2B8xNRgkSY%2B0ZhZxhAhwBcs6x%2FIV5f0VNNsJCOvUERgjm6j6LHpySL41d1wWLgaYoC5FRRjUxr8Le3256EcR%2BPNnRoQ9XkTWuruBHVnwZMl%2BwpGrcOmT2j9l18yCLM9PVY%2B%2BtFTKn9w6qTwrk0Ol61%2FStYn6BTAGZbrrCm6NVaaFTewgGCW6rxgLtJn3Ll4bYnlRQT%2Fsz0gpEzm18RKzqad9IDxHpNXl6j1XKBhcBFnwifGedvG2Iv6QLFupQScz1YxMSUWQYX%2FWv2UOEwlIKt%2FjBiGmjFAbi6CNafwvjAL887c5kgk86PVmcbRJv7wmINZcZk0IUU9%2FfVJ8GaWxv5b5tLiBz0syfw5yIxFfI9bVLdOqhKmLSaZ1SCZ3W6CngUQMmAoOnGijjRBHyyxCKY13efxvpr56bgVM9k5qa1n6MLuG8L4GOqUBs9IAFgdPzneLAAt4fOSsV0jRv%2FNEJfsBQUUgp9rpBF2KAJ4DHky2TjQi3hRb4IyVGaE7D5feQPz5udtOPEaHSlcGX0ysRi6%2F1aCBiYcyDkcNmK%2Be32HS6CUMgDYLnPaIwnCcPbIDz7q35%2BfymEwgGJLe%2FGUg3Awm2e4iFO1%2FFYPF%2BlpgqZ%2F8cpPHuPRnNdUcQN4F4JfjKgSYL9uvPvOXIXfsrbO4&X-Amz-Signature=c21001fa2bbead8a55bf88da8ed067e7e2bc1a6cc8010ce3670e16495cc58e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3GE3UMH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDM3asKCDu0D7j3i%2B1QcoFWc8NmWF0rsUtmuFnDbIfVOgIhALZ2cLmj7akyfr6iKSZwpjPUDQoQD8UjnomqQxuR5DnVKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDDj6wRX%2FPVTxHJIgq3APxSc3KLdNUN9W9jMtIaSecH2FFLs0Vs4Fi40jkYwTYc0LZkDVOR7AoNSZI9oMS%2B5Wfm%2Bn4TbPJKF5k7zKXlvD9l7HHpi86nuLwHcWZGud2bh14J4XxXnGWdrOKAkCZ4VWOJ5aSwgY%2BoydidIC6FzxKzzlcgmt%2Bz841ZU8VF1pSpr5phaK4JOLNvbiPKEXNNml9sr7z8ucyNHacdnZO40H8PvHP82NBMkNhdRE3Zv%2BNBrJHrV5nL6qIcmx1DWrKU2femAzhbA2FrLziRDifrGpWpSqrJfsfkGBTvaqVg8S7bqlYFXs68JOCL5Sjp5%2FK5XQC4rG4bc6kx9pmNSicXXmPYRDL%2F%2F9iprVGFQ2poQ%2Fp0tTufNF5uN5d2kRWC%2BjqKXXVaZcsVDsT0NUCwc1Sny0oT13ZCMsv11E9nYphA5UzO7fHvmF85spFoRyfpy%2B6Sc7eonYdiwoYMNIv4iShnqpeX2BwdPBvTZDzI7%2BNO%2Bao0K2h3%2FUKO%2BNGvkibqMbOiipOURmntH8iWvhgX5VcvqIxTkQTzHrcZ7Ybwu%2F6EPIniS6h21reueGF69OZ5WqBnVxteC2L2u7XuoqyZjNtvhmHZ7gWCpjwwAcZ02y5nHZsc%2BHwypr%2Fhss%2F%2FTHMrDDchvC%2BBjqkAQdK0Lt9xkk2obOIrxvG0i%2BvVeS2wJJxA7ThyRs0JO4W4le0hKUceq8aK6Fj0QgMcXUjZ%2BnlIbH%2BotI1%2FrQLvflxbmwet9DzLwD8eIrefFQ%2BzMb5yqchWDuK2Gwl9ADTBpcykJ1veqkPFymE3z0aPARkF49uGWikfchQvc%2Bvhl%2BXS3N2wWAIpqV3Hkw0ofFOpfYHCPNwhyFUA5TI1bPUeGHGxEdh&X-Amz-Signature=383bef869326107cd3fcd9dd7feaf5b3bbbc4be95dfad28c1a37364bd2b9b4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBH2NJUG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDDRBEhWDRVsrBSuqJthc1JdWNTV6rRnX7B1iIqFrOkoQIhAL%2FrFNt9dT%2F%2FckT3xC22aSwqNbI1vyE25RlGgnUibLwEKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1IOtK8qQtkW2avtQq3AMaEytm1hUUSGTEvPl%2F9Fo6dAQlJQv7zEYg2aSfAO2zgkUEQYrwpssecYMjMUmHmz2BuNGlN1b48LAUFLo2ebeifK%2Fy%2B9GtDm8Vk%2FlOHjlKfGBo53JAzY9ivxAKDqE8luaVzDX5HVW3w9p5eTOZdz8MkNaeu4%2BJCVOgLxBfrPEEAGyMqyGdwHGvYXrDCkpU2E6JdcFhjPwPnbrspq9AKDi409y9KA3y7KRn7XC9yda70PWF7HTJz31KFkTfl%2Bt7baIBtSVtsIWt5yhOlp8fSWGdkaVtRnHIdt4i2CY%2FCJHy%2Bmr6kC2l82BYdG3d1oND0AJ4LqpDmarWeT7xXftUS7ibbUMkKoNMvPaHfGhxVr609aCS4gv6tycufwDtUSrPZ3UfdWFEOPjSO8ip%2BnqcmfOwgj8SgqmMU%2FpURYd9v2VBLTrIAHnS%2BTaCkpNThA7k2aObhn74FvUJ9a3xydPsDeom5hp4u%2FOopBJCBBcpHqcv1ONSBZoRK6%2FzKnkVCtHKtiU4YOBpUKXjwiNhnO1%2BQj9C%2FlP5I9FOhD0YR3ckqZsbBLCyoU%2FCT%2FiwFKfmk%2BjvM%2B8BZbqo1Ue7Tzry2qxqm9WnWIgW9Pk6iT6ihun5bmEFLSI9YsPWADHP0iU9uDCkhvC%2BBjqkAW5fkmFj1WBHhSAIWNGIa6PfXMHnFnlpAOVcCzrlTHezkt%2BMVOpBUyARQP9mM6y46xWhZgQDBsA5R1C%2FaClrASkEO1qL9hQRHZJWlOU3Z%2F%2BxGJcYFP0MQ05bF%2FI0QKNItCBtvwYEDdXgqc%2Feiq0ew6DGNhSsVsfQFDoqMuBaI9gotiiAt8QRW%2F%2F7ir5Q4OfT1L5NIxKz8H34Ktefm3hSKEy0X6tv&X-Amz-Signature=e4f636679fd2c9e3643b3ad7d8d8e64de7c1cc8a752d39cbc696e72166b35b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYPDWMQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFIGs9Pu2zHqQYfKb4sJNZ2YTneWZJKG2uJsEezOVT%2FNAiEAiImJHSTRf%2F1CJjsywCMjyyB38R2DYFl0o%2BUbyyVjiDAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVRMNkYknxGKnbzzyrcA0e6Q%2F0USceouUtAChrFS2NZ2R8vDOAWoogL6%2BnsEXiB9fHpXoXSmXo3i5kp%2FkUMpAoypw%2F9DOGbxlKCRwaZrfpK22Ce%2FrHWDcNmW6w5nNLSH3DBFQe6%2FShzlvKuboM%2B43uuZJqL3Pj%2BKWSm4YSvyDKZnTCr%2FGg9sSOamK0lCcK%2FgRFuYdH34zamDJnQW4wy99qM4glI8H8GwAQM%2F%2B8xNRgkSY%2B0ZhZxhAhwBcs6x%2FIV5f0VNNsJCOvUERgjm6j6LHpySL41d1wWLgaYoC5FRRjUxr8Le3256EcR%2BPNnRoQ9XkTWuruBHVnwZMl%2BwpGrcOmT2j9l18yCLM9PVY%2B%2BtFTKn9w6qTwrk0Ol61%2FStYn6BTAGZbrrCm6NVaaFTewgGCW6rxgLtJn3Ll4bYnlRQT%2Fsz0gpEzm18RKzqad9IDxHpNXl6j1XKBhcBFnwifGedvG2Iv6QLFupQScz1YxMSUWQYX%2FWv2UOEwlIKt%2FjBiGmjFAbi6CNafwvjAL887c5kgk86PVmcbRJv7wmINZcZk0IUU9%2FfVJ8GaWxv5b5tLiBz0syfw5yIxFfI9bVLdOqhKmLSaZ1SCZ3W6CngUQMmAoOnGijjRBHyyxCKY13efxvpr56bgVM9k5qa1n6MLuG8L4GOqUBs9IAFgdPzneLAAt4fOSsV0jRv%2FNEJfsBQUUgp9rpBF2KAJ4DHky2TjQi3hRb4IyVGaE7D5feQPz5udtOPEaHSlcGX0ysRi6%2F1aCBiYcyDkcNmK%2Be32HS6CUMgDYLnPaIwnCcPbIDz7q35%2BfymEwgGJLe%2FGUg3Awm2e4iFO1%2FFYPF%2BlpgqZ%2F8cpPHuPRnNdUcQN4F4JfjKgSYL9uvPvOXIXfsrbO4&X-Amz-Signature=cf8ad2e314909605010a312914aae1402e11701d6b8f26d1039aefea92fd0aef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
