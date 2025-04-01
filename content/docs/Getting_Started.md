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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YXYFID%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDqhrPb2z1YkvJU7%2FkXjyzuN%2F1rdBgDLcF7aoIbIJoL3AIhAIIaiRoq4ZxMcKr2EKExft9efWjbzHP4rJBDVAupXcFFKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdxfJURc%2BkwCP2go4q3APwL9iRnvjRzo3wLLKawxYwHwYlT94kKaR%2FQWaCxqrm6tSIR8W7XbdEjnZURQXRMc4pNzDmw8D4lWhj68BoDPFVPJiqj2%2BPcpoFhH%2BYPboSEUIVI6XFHXthTBUC%2F2LH92W9hMNL8FLPFlHjBz6eKLgjLkoeu6CNrSYM%2BOBgi2N9V5k25oKnUUf%2Boj3j7X%2FHYOUQ7AN%2Fuf0dqmiLfm2RhNaCQj4D2fHTjoK8Dw7fx29w1xjzTkQpf27eT5nhKlHMfegM%2BhBgUPv%2B2XKXIQoLPeoQrgIXMCULC6my2ZsFpO7evfN13xj0kgefTL8%2FunfGer5BC3%2FWh%2BKk8V3FKV3jDuOD9DT3dFXisOEZh0Hbd5onzNPAwIYDswmTfqHxf8fG%2Ft%2BdJM%2FDN82XT4SXNbJNxVeQmHRk32v%2FOXSAh6OU3MC0PCYf2IxP1YZ69frkisI4aeaugdp5tnhfliyqm7%2FCBoqmDhFqjkdVEhRIXj5iJEgWADQp%2BEPPwPHaAS%2B%2BNn6PAy6JEFr4bLjIbsir11GxZELCvEQ%2FORpMfnYAsPCjHcNOesxufAJ9KMPC%2BhY3zpqh8a6V1Bv%2B9gE7S9Hb2LrPeOf3I5QL3LeESlHgGRBN24b89zkHPoU5%2B7axqhUsxzCUlq6%2FBjqkAUeLzZD3Rp8ZCNKE0IOCmEuD4eNzFpiH44PSrI5hqPQYVJ9dhDlggC1qtJFAggQ0%2BvUim4qFCOewhqBbaD6aYpMeESE1K6DdmrR4bQT%2BCXir3%2BQRF2bRB52ob8xxSuXdt%2Bg9KF3imkard1T7EiP2E0PykYbgIhXvyzRNpk%2Fgg%2FuHpAbQ%2FrgNsSY4dlJxGkV9JvrwM8ovnsF3LCrO%2FnMP%2B%2FSkvDBj&X-Amz-Signature=d7b6b144f85316c205300963f1732fc29416ebe85b5f5071452b75508ea93421&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YXYFID%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDqhrPb2z1YkvJU7%2FkXjyzuN%2F1rdBgDLcF7aoIbIJoL3AIhAIIaiRoq4ZxMcKr2EKExft9efWjbzHP4rJBDVAupXcFFKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdxfJURc%2BkwCP2go4q3APwL9iRnvjRzo3wLLKawxYwHwYlT94kKaR%2FQWaCxqrm6tSIR8W7XbdEjnZURQXRMc4pNzDmw8D4lWhj68BoDPFVPJiqj2%2BPcpoFhH%2BYPboSEUIVI6XFHXthTBUC%2F2LH92W9hMNL8FLPFlHjBz6eKLgjLkoeu6CNrSYM%2BOBgi2N9V5k25oKnUUf%2Boj3j7X%2FHYOUQ7AN%2Fuf0dqmiLfm2RhNaCQj4D2fHTjoK8Dw7fx29w1xjzTkQpf27eT5nhKlHMfegM%2BhBgUPv%2B2XKXIQoLPeoQrgIXMCULC6my2ZsFpO7evfN13xj0kgefTL8%2FunfGer5BC3%2FWh%2BKk8V3FKV3jDuOD9DT3dFXisOEZh0Hbd5onzNPAwIYDswmTfqHxf8fG%2Ft%2BdJM%2FDN82XT4SXNbJNxVeQmHRk32v%2FOXSAh6OU3MC0PCYf2IxP1YZ69frkisI4aeaugdp5tnhfliyqm7%2FCBoqmDhFqjkdVEhRIXj5iJEgWADQp%2BEPPwPHaAS%2B%2BNn6PAy6JEFr4bLjIbsir11GxZELCvEQ%2FORpMfnYAsPCjHcNOesxufAJ9KMPC%2BhY3zpqh8a6V1Bv%2B9gE7S9Hb2LrPeOf3I5QL3LeESlHgGRBN24b89zkHPoU5%2B7axqhUsxzCUlq6%2FBjqkAUeLzZD3Rp8ZCNKE0IOCmEuD4eNzFpiH44PSrI5hqPQYVJ9dhDlggC1qtJFAggQ0%2BvUim4qFCOewhqBbaD6aYpMeESE1K6DdmrR4bQT%2BCXir3%2BQRF2bRB52ob8xxSuXdt%2Bg9KF3imkard1T7EiP2E0PykYbgIhXvyzRNpk%2Fgg%2FuHpAbQ%2FrgNsSY4dlJxGkV9JvrwM8ovnsF3LCrO%2FnMP%2B%2FSkvDBj&X-Amz-Signature=f56e436b0bc18dc03fa63bca1366103452d18a84aa71a3375630ba6752548eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNRJYQN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID3hBjRujS40vBcimwYkALpwLivY5UIxYyQFXf2DAwiiAiBqBtQReK7JJiPb2uW0qV4yZb3mnBzJoR3TH8trXpheOSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIi7QlVb5ugCHTfgKtwDlssxhJLKIpBF%2BPy7vj0TI2R798l6BJ8sfghj8pxjrC7SvjskCu%2B38H4j4SAPOANsuiCUj3cUUz86M9VEK82c8k4r7mOqLaj%2Bw8W4qS2%2FrdmAUJEqTZK9zo5%2Bcfjbi4WybpJ5qnK2sLkz7hWtdZgDfaDyIcxiOFoOeYuCMSAHNuI28jigWdSJtneA%2FdDOrl9HpaKyPujJwPJG9q3VJ325ZGYaAaLk2LR1SQf%2Bst%2Bm1ZXklZZy0yWMBY5xWwrhy81V1D3yGMXenToGhGe1ZjgOrqYDUNCHdd8u9ukFPoNKsvWS1SOu4%2B2Riv5G0wjBUf71mbGKIMQNl%2BYGMc5o8V82LTW4Ap9%2Foqa4BXvyHfZW7S%2FkUKOCXU1ZizspQ6Y8YuDPHwzyi%2Fsu6z4X6S5Rdeg3Cmcv2pefeDk8XiJFynw%2FEUjPCtbmXjckGQToATjR9%2BA5%2BX8TCvKsgGsiUksBQdIeJbrh59HQaf7NVnR4xjOXg17Dw3e8O1FxD5y0UbgBQGotcZTAW36S%2BNpKBssx0xO7X2NVZZdpow2t%2FCyiSjfp%2FRWRJKciYUktm0SM2vLQJ%2BSlpXf4JnV8PSBcyQZ1j0VotlzWICvB04Ge0demJsTuWd7tOIfd2TApy7JZYqswwZWuvwY6pgG6AwHoJyieDNUHlbGFnKn0DdpCOkq%2BmmukAz8pinpXtWWNPr4%2FcitJlTh8F4kO1u2SiW1IKF8RN%2BlnH3qvIMzHARPCkw704J4NUC5wcrqHajSSVwG71E8YDvBiEI8YPyB6XUE6BLehyRicFrjuVlPSRApvhIsBpYcGAfQRM2m5sfhhwtLHKFyUchpM1PdXpmN%2B4bVPHuTSAHJG9CCL8Nyfrx69Lmnv&X-Amz-Signature=71c758d677c945d839a66dc54c7e31394c9f0e7a5782757cca629550ec2e0d94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAHXICHQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAIp8h%2Bpn05NNugDwrzyt1A44vbpmQmYcSuWAyKqac%2FrAiEAy8yls10YhmY9Ziffl5q9irra6IXY%2BSz3bwX%2Bm0Rx%2FxUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfxNqoRxhK3isAEayrcA%2FR4k%2B41DITvveCJyvEJ5lAcWomDULkrB%2B%2FRiOwR8fumq6HAi0tCnz%2BUd7C0JYJywnlmCaTAbEvHz%2BXP2ZvYRVxVWoMGYHVENB5GPYgRJHttDvEO3fHhggg6%2Fc8aZGoUmgNqHXzeHZbsT6xgkOvoU2F%2FtN7Yeq%2BWXFTIJfKfX0JNGpEng%2FFUup2yzIUza3QKOhPcT%2FwqXyBaLmUKsbWSSU%2B9B9gE96IWJJ5gcQNJkk3gAIHqgwugpMPyecnkPfoX%2FeYw7lY15KhGuhqH7eZfsrCx%2FILbBe71jjIsJCgUXJa4S0ir%2FSblaAL3WkssKU%2BiNNOLT%2BU7kg3Wxh%2Fm6g86jw%2BtwCmL%2FC5ohrLd5PDfhLuaHDgvy%2F13k5rv2Jcn4J1xIjjM3d5of1TabYJgxMv4ap8O5QUR2B3lSYESWrziqyY%2Bp%2FHagbSTFdHlZoc7EPFtm9HkZADBoZCDmjOeNLmwKo1ILRu5FJDe2Kq4EYuZGWN3z4yxZk80NvG5AR9fumOJmm7YLVEI9UMp9aDJfqmdM06kPb%2Bhqh1VqhfPu4YPxoBBxdEslcyxMf91Dyiorf11GyXUviiWE1LiEL%2FHoY6yyjK5MmMZMbuc07AEwbS3BzHXricaihez3anstlhfMNGWrr8GOqUBysnPX0dfxWVB4OFwC2VSLswuAW1sHKiYXYeK8bB8tJZdTeH4aR4ofmUw%2BLhjywHrjzXDfljLbd%2BZ9iACbavNDx4WuU8p3bW%2FdAzGq6DgXREipbD54kJxJ%2BgESFMDceM1XcSiknicjtMqpCluZZaKBBC7EOq1OXBweTY8Rn8LXNL2UNunmebS9x6VRlDf7zjq0VrLKRVlxlLA%2FLhb4ZU5PUb3oPlp&X-Amz-Signature=6d8cdb8f3a8169f7a55a48d6847ed564af2afc9eab3c2f35cc3184c0ec25e27c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YXYFID%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDqhrPb2z1YkvJU7%2FkXjyzuN%2F1rdBgDLcF7aoIbIJoL3AIhAIIaiRoq4ZxMcKr2EKExft9efWjbzHP4rJBDVAupXcFFKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdxfJURc%2BkwCP2go4q3APwL9iRnvjRzo3wLLKawxYwHwYlT94kKaR%2FQWaCxqrm6tSIR8W7XbdEjnZURQXRMc4pNzDmw8D4lWhj68BoDPFVPJiqj2%2BPcpoFhH%2BYPboSEUIVI6XFHXthTBUC%2F2LH92W9hMNL8FLPFlHjBz6eKLgjLkoeu6CNrSYM%2BOBgi2N9V5k25oKnUUf%2Boj3j7X%2FHYOUQ7AN%2Fuf0dqmiLfm2RhNaCQj4D2fHTjoK8Dw7fx29w1xjzTkQpf27eT5nhKlHMfegM%2BhBgUPv%2B2XKXIQoLPeoQrgIXMCULC6my2ZsFpO7evfN13xj0kgefTL8%2FunfGer5BC3%2FWh%2BKk8V3FKV3jDuOD9DT3dFXisOEZh0Hbd5onzNPAwIYDswmTfqHxf8fG%2Ft%2BdJM%2FDN82XT4SXNbJNxVeQmHRk32v%2FOXSAh6OU3MC0PCYf2IxP1YZ69frkisI4aeaugdp5tnhfliyqm7%2FCBoqmDhFqjkdVEhRIXj5iJEgWADQp%2BEPPwPHaAS%2B%2BNn6PAy6JEFr4bLjIbsir11GxZELCvEQ%2FORpMfnYAsPCjHcNOesxufAJ9KMPC%2BhY3zpqh8a6V1Bv%2B9gE7S9Hb2LrPeOf3I5QL3LeESlHgGRBN24b89zkHPoU5%2B7axqhUsxzCUlq6%2FBjqkAUeLzZD3Rp8ZCNKE0IOCmEuD4eNzFpiH44PSrI5hqPQYVJ9dhDlggC1qtJFAggQ0%2BvUim4qFCOewhqBbaD6aYpMeESE1K6DdmrR4bQT%2BCXir3%2BQRF2bRB52ob8xxSuXdt%2Bg9KF3imkard1T7EiP2E0PykYbgIhXvyzRNpk%2Fgg%2FuHpAbQ%2FrgNsSY4dlJxGkV9JvrwM8ovnsF3LCrO%2FnMP%2B%2FSkvDBj&X-Amz-Signature=f01c27af91c04ec117ec319f73ead6383e746ffddbe4f4885dd9c3a7c4b39630&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
