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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUMB7AV7%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIB4If2glZWQJpmb64teO7dp%2BX6ltC%2FH9hZAya8e6esrJAiEA2q3QJMHiw9GigFz%2Bte5mzFOQBelMuTvu0g8KAPY36qEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2QQec5vawXq9FixyrcAw7vkj3aYEtTW9GmqW4Yh0TESR07uFbVin2ozV3vGxWrDjtCJju8O5t%2BDoufCTCY7ivFeobGOk5HYBL4T9TRgQtcvEf0afUNGXhCzcdm0c4F9gf3rpoinWg9DGeiloVnGg%2FVRrHy1bJt2fhwdiqZjbMZys0dR8OPGpct%2F0gjELJSDTJSHuEUSj86LcI%2FSC%2BIT9BAAyeHZlnUFZun%2FFol04qGssv%2BASwFACgBTBzOqdKrDfyQxHoHH67zl7%2BtCTF8fQx6fy6Ex2Oa4WJbtWmPNklfu2u8kC8crx3eh%2FjTgX0pTFzqxPbA3t3nDdj9nLIka3yjWLxPC%2BpFhVhB%2FUNzWd3jWKXESTPSIG%2BEcAasG%2BaK6IF7b2ZikAHLhXnAgZgGgi2%2Buw0aTd6KytBGjLtJnPlMtvqdCglPSATrX2awWRdhoMyDbTP2jGPB8K4ugO5JLBMVF0kjGnZBvHVfIqVsKWH1ZNlQAbn%2FuAmrCuTrg%2F37GaM%2BKxhxXLNgGmU2i%2BJ%2FKvzJXcG0EnoQ%2FqjUKLo6NgnomiLw6LOsgGi670P27R6Zpdk%2F5E8Cx8Y5%2FUn5agInlwdJ30UNqSYFNSdtFoKcJC1IWls8xUsRJD1wrsCYZkgv4%2BzOKagif8YJBUozMLSy5bwGOqUB1FCoM3U5ZovAAcvDdr9YFndErWMhynNYF8QjVEr%2FV9KkWJl17sYINU5WrGoSwIzfao81Py41IDFfC%2BQzct94WStxeR5hAnpRD60cj7ve4gpM7ryRd8R%2FL8kdUXf6NU0QkoNB0zUfYiI1ZoI2ZCMfmzwExz%2Fc8D6a1Rxn7NCwd8AzeXOhhsuNkpB0NC5YDss9MYr%2FbBEcx%2BldCOpfD58tBo9vxyoE&X-Amz-Signature=d05dab6a076095794ae3d9e9cc7bb3d2451badad208a53978f00d966ff29fc3d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUMB7AV7%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIB4If2glZWQJpmb64teO7dp%2BX6ltC%2FH9hZAya8e6esrJAiEA2q3QJMHiw9GigFz%2Bte5mzFOQBelMuTvu0g8KAPY36qEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2QQec5vawXq9FixyrcAw7vkj3aYEtTW9GmqW4Yh0TESR07uFbVin2ozV3vGxWrDjtCJju8O5t%2BDoufCTCY7ivFeobGOk5HYBL4T9TRgQtcvEf0afUNGXhCzcdm0c4F9gf3rpoinWg9DGeiloVnGg%2FVRrHy1bJt2fhwdiqZjbMZys0dR8OPGpct%2F0gjELJSDTJSHuEUSj86LcI%2FSC%2BIT9BAAyeHZlnUFZun%2FFol04qGssv%2BASwFACgBTBzOqdKrDfyQxHoHH67zl7%2BtCTF8fQx6fy6Ex2Oa4WJbtWmPNklfu2u8kC8crx3eh%2FjTgX0pTFzqxPbA3t3nDdj9nLIka3yjWLxPC%2BpFhVhB%2FUNzWd3jWKXESTPSIG%2BEcAasG%2BaK6IF7b2ZikAHLhXnAgZgGgi2%2Buw0aTd6KytBGjLtJnPlMtvqdCglPSATrX2awWRdhoMyDbTP2jGPB8K4ugO5JLBMVF0kjGnZBvHVfIqVsKWH1ZNlQAbn%2FuAmrCuTrg%2F37GaM%2BKxhxXLNgGmU2i%2BJ%2FKvzJXcG0EnoQ%2FqjUKLo6NgnomiLw6LOsgGi670P27R6Zpdk%2F5E8Cx8Y5%2FUn5agInlwdJ30UNqSYFNSdtFoKcJC1IWls8xUsRJD1wrsCYZkgv4%2BzOKagif8YJBUozMLSy5bwGOqUB1FCoM3U5ZovAAcvDdr9YFndErWMhynNYF8QjVEr%2FV9KkWJl17sYINU5WrGoSwIzfao81Py41IDFfC%2BQzct94WStxeR5hAnpRD60cj7ve4gpM7ryRd8R%2FL8kdUXf6NU0QkoNB0zUfYiI1ZoI2ZCMfmzwExz%2Fc8D6a1Rxn7NCwd8AzeXOhhsuNkpB0NC5YDss9MYr%2FbBEcx%2BldCOpfD58tBo9vxyoE&X-Amz-Signature=ccb59397d59a58580e44513703b167e2198a873f46514a88080f82e612271282&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIB5XOGL%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAHoCIdLpPoyCtH%2BcAgE1PWR878irbgsMUFniQzStiQfAiEA97gma5dpl%2BPBsQB56cOThg4yvS%2FIRc1X%2FCP4wUTrGSQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9X49sJF6itE%2FhlcircA1hMDdxnk59XHy5HW1RM%2BUv0BJXi97Tw3%2Bn7AZFtdB6Yq1O8b0SHgDtbsQzcLOOp1S3jsu2UUNTMc1tG8HwT2j2z0H5tFth3Z%2FK5psvo2Pi2h83ZXFu35crtko7qb5atBlQ%2BYikpUerS69oXVgBTXz%2F3QK5WF42yakyUDulVHuU6Qyyv%2Frn0OmyQFAP2SWGObduMakSmGH1hTCwLNQNK7gI9Wb4KkSU%2FJ9QI7k77EV6LuLQ6OyGSghWDorGGFYpCgN3FFOa7W%2BwGtKmmtRCWo%2FehDZ0UwDEiQsX4ks%2FeVh8uy2TwSrruAOHy8pSExE1ATc7R1xzMObqrFnRd4zMmJVOqjWVrDMGHm3h90lgxjDyUAjpCCGPQWheODA252u%2FOmAMWkym%2F6JYKnOICHM0WeiUblhilxI2XsVw%2FxGPZjOXMwAnWQg%2BKg2QQ1n%2F2qLQab0eees9tKJYH%2BeWhcoRiJysy0CiXKXOty%2B4EzV%2BBJC4BqKCP7dW6E0hgZ55ap4OsjDm8Q5zFjY1q%2FpaUZxQcB5LB5UIv5WGQUmT1ss7tCdUzVmafkzOKa26uW5kFUd2SHJ%2BNDktvQmsjS8f6e18FZ3F%2BQOQ2eG3Ml1sgDmV1A4MulG9lBlwCiq3OkbYLMMSy5bwGOqUBxG41mVu8Zpl6HeZ06Mb6rV4oITWoVdocg6ylxLi9UgPkBntAYaAMytFinQO2taQ%2BkMRF%2BeDsH0hF4Rh2SnqlwAIlDdiVnBiFLWMtPjRJ8ZGvi5De4yFLfe6op%2B%2BMev1G1vaG2kHshdPxZNqDsh6d8EnsdPOvgbv656dTF51CoSK%2BhNJvSoTe7No1pqVRu6zM8%2BQ4s0%2FGsnzJZ8faFNGf0pn%2FqQJo&X-Amz-Signature=8abca952206f1ee96a3e5d1aaa6e72b5cf664e301b0769c5a03d9fd37b0e79fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RNSRQ7%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEE%2F%2BH2VWv481oSugPpEc%2BALEaRJMiZv%2F%2F20AfXPeaDTAiEAqDq4LWibnNh23YVaZLFjIGt63bLrisTHVjZMDuRldWoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEy7fZqRpWhGLEGvSrcA4629F8yqDIDMnrmZ3ABAGbFvZ2nxh%2BUrnQdD06PF1%2FVT2k8sRSonABrBNv82%2BDq3ASSn1%2FTwcN7OehoHNStZX%2BYAatrWATiodPOK1MA%2F1fCarvvtVP5wI2hV%2BY%2FWVE4caQ2YXxGOJDpwpwbjqbLlkjbbshfhnS3u%2B6qOhTaqEBk2MTg%2FmUzW%2BeM6yy6%2Be8SKKGZ9MFVnUA1Qvk%2FINpNKoq6cWp1ZFUQweFraWHCpV%2F%2FRq1jTGXDzPUButzwBTE2SXTdEHVnFqXvloKWK%2FP%2FLL9iwgRbq0aKNJJ78SP9KT2sllRRvuwDekgB%2FOneZkWpVYwqXcI%2F5GIj3pfr7IodP9xZTteinB37KoEAEboHi%2FxEFbY3gfvHD4j73aowBtCcJqhhtspmZ7X2VbSDJ99OBd7UAvyGKyJ19ljmH1ECRCYxvgOKPU2iuEWAaZsVwYX1x4QGDjyQ6kzRxEZGvbhxe%2FdHaXma9FQjqBWKLG1i5UlX8QunN1Slw9NQeFFmU6OLpByXR30FSM7%2FcJxRtXIVfqAVxg9wqDUzMRxyU9II3sikys1rydUbnDr82cPPtFsqohG1hY0VEuq7Fqkndp0FaIC98i2kgCvjcYXklREvXgA913GlE38Q8EhlImXBMMGy5bwGOqUBHmfzejzU1w4E6TY3SMrYrXcjnprfmcmcS9g9Tqmni6EmKe1Rx%2F3%2BHauqBiUYaiEfR%2FTi%2BXxwppnyaGwbEDh8lkLgigqAySoP7Mo79nva3QCyx6oG%2FVqSZbaodPLXahekyEu1fyAC5rYqWzhJpzeBF4N%2FzhSaYlVanknD0leGFyatc4cudne%2B%2BUeVZs%2BW4eztkfUXQtCnFF4EJ1CsNva18wTlnRjm&X-Amz-Signature=824b673294ef63f95812ecdde5954575585cb8a87fe1dc43b7ed95e2b3b5ee69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUMB7AV7%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIB4If2glZWQJpmb64teO7dp%2BX6ltC%2FH9hZAya8e6esrJAiEA2q3QJMHiw9GigFz%2Bte5mzFOQBelMuTvu0g8KAPY36qEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2QQec5vawXq9FixyrcAw7vkj3aYEtTW9GmqW4Yh0TESR07uFbVin2ozV3vGxWrDjtCJju8O5t%2BDoufCTCY7ivFeobGOk5HYBL4T9TRgQtcvEf0afUNGXhCzcdm0c4F9gf3rpoinWg9DGeiloVnGg%2FVRrHy1bJt2fhwdiqZjbMZys0dR8OPGpct%2F0gjELJSDTJSHuEUSj86LcI%2FSC%2BIT9BAAyeHZlnUFZun%2FFol04qGssv%2BASwFACgBTBzOqdKrDfyQxHoHH67zl7%2BtCTF8fQx6fy6Ex2Oa4WJbtWmPNklfu2u8kC8crx3eh%2FjTgX0pTFzqxPbA3t3nDdj9nLIka3yjWLxPC%2BpFhVhB%2FUNzWd3jWKXESTPSIG%2BEcAasG%2BaK6IF7b2ZikAHLhXnAgZgGgi2%2Buw0aTd6KytBGjLtJnPlMtvqdCglPSATrX2awWRdhoMyDbTP2jGPB8K4ugO5JLBMVF0kjGnZBvHVfIqVsKWH1ZNlQAbn%2FuAmrCuTrg%2F37GaM%2BKxhxXLNgGmU2i%2BJ%2FKvzJXcG0EnoQ%2FqjUKLo6NgnomiLw6LOsgGi670P27R6Zpdk%2F5E8Cx8Y5%2FUn5agInlwdJ30UNqSYFNSdtFoKcJC1IWls8xUsRJD1wrsCYZkgv4%2BzOKagif8YJBUozMLSy5bwGOqUB1FCoM3U5ZovAAcvDdr9YFndErWMhynNYF8QjVEr%2FV9KkWJl17sYINU5WrGoSwIzfao81Py41IDFfC%2BQzct94WStxeR5hAnpRD60cj7ve4gpM7ryRd8R%2FL8kdUXf6NU0QkoNB0zUfYiI1ZoI2ZCMfmzwExz%2Fc8D6a1Rxn7NCwd8AzeXOhhsuNkpB0NC5YDss9MYr%2FbBEcx%2BldCOpfD58tBo9vxyoE&X-Amz-Signature=201beb866ad4010050cd64706be08634ac3e15344b98e7103d4f44d5819ee3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
