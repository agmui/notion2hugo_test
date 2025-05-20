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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZH2CKL%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF48jVQvyvEpfPjlok%2F4cpBzZPegiR8pO1UtqdLWU2rDAiEAjBen1697o4QbFCYQ6L8wxbpoA4UBHDo89TFcmoUPCgkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHi%2BpaOL97nI0ls1CrcA3n%2F%2BUvE1zcRUt%2BaB1VHkI6L6fNyba0Go7L4SbpL1S3%2BmDu0m9yWDylaDiUHFxBaomqI4B3NLtLP0Djt%2BLPU2kfVHeRbwJJV4Bhkix8LtvvmdxjQ1RkXqom0jA8ZnjxUpWX%2FTa6vuOlcg4oS0tI1eBvt1wdPk0ofPtzoDGCqdkM%2BpifO0e8sQ929S7f4kSwFwMgG1hbl1qgirKFprZLzHU6y4l5ZfLBl2RuEPrSMDTebJRueTKKzS2W9JAx1m9xuxCKJaWP%2BA%2FDoDB3M5%2BG2wYxH9EhHDb22OXRJOQPy48KKPsxxf%2F6bIBQThA44jHW2GqB3HmYp0u5ULgnN%2FcCbS8l0iJYyrpd39cu5XQG3ENjoR8IqYsLo6Q4ABQ5XSAcOugYeA6mZ0F5C0jBPjdFmUtccwCMiqQ9JNIOgTudg16o4VyIgLLYFs0UoWtDyaEX0jwqf8iZY2K2db0JXpMG6K7Zau1Wa7ptuet70fH%2BsM8xWffmvzPcVeR3dZQOsasJQqgI7wxf%2FsdQ5Wp6%2FnDD7wBjJifGpZ5KBDI0WTWOYBOORAizU8ECr3%2FmzlKZcCYQIafvvW80ALJwHyD2W2W9viebYSKRngUNtvcKxFGKV6s9XITMYuySESGYAnSPGMIa%2Bs8EGOqUBF4x6oAlHemvWKFH2PCtbmdGjYqsGFX7LMxk%2Fh1uR3cRyEcUcmMeCnOaterTCDNBd9kEmN6EeS9y30AjjjzkcZz4b%2BboEj7oM4WaUDax%2BVPgbzf1jPixIH3mxaqZySvBXHvZnN89yEAYyjR%2BDQzOZcjXPJBdfDbRSei4VvJQvpBvucxBDXNPN9D0zEYIgyoDCda17YVki9NgoV1PJwfgdHFyzXtcl&X-Amz-Signature=637f08a6b782d935eabd96e775b2ab7ed99a5717aa9fb701ae63d59b97f2c105&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZH2CKL%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF48jVQvyvEpfPjlok%2F4cpBzZPegiR8pO1UtqdLWU2rDAiEAjBen1697o4QbFCYQ6L8wxbpoA4UBHDo89TFcmoUPCgkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHi%2BpaOL97nI0ls1CrcA3n%2F%2BUvE1zcRUt%2BaB1VHkI6L6fNyba0Go7L4SbpL1S3%2BmDu0m9yWDylaDiUHFxBaomqI4B3NLtLP0Djt%2BLPU2kfVHeRbwJJV4Bhkix8LtvvmdxjQ1RkXqom0jA8ZnjxUpWX%2FTa6vuOlcg4oS0tI1eBvt1wdPk0ofPtzoDGCqdkM%2BpifO0e8sQ929S7f4kSwFwMgG1hbl1qgirKFprZLzHU6y4l5ZfLBl2RuEPrSMDTebJRueTKKzS2W9JAx1m9xuxCKJaWP%2BA%2FDoDB3M5%2BG2wYxH9EhHDb22OXRJOQPy48KKPsxxf%2F6bIBQThA44jHW2GqB3HmYp0u5ULgnN%2FcCbS8l0iJYyrpd39cu5XQG3ENjoR8IqYsLo6Q4ABQ5XSAcOugYeA6mZ0F5C0jBPjdFmUtccwCMiqQ9JNIOgTudg16o4VyIgLLYFs0UoWtDyaEX0jwqf8iZY2K2db0JXpMG6K7Zau1Wa7ptuet70fH%2BsM8xWffmvzPcVeR3dZQOsasJQqgI7wxf%2FsdQ5Wp6%2FnDD7wBjJifGpZ5KBDI0WTWOYBOORAizU8ECr3%2FmzlKZcCYQIafvvW80ALJwHyD2W2W9viebYSKRngUNtvcKxFGKV6s9XITMYuySESGYAnSPGMIa%2Bs8EGOqUBF4x6oAlHemvWKFH2PCtbmdGjYqsGFX7LMxk%2Fh1uR3cRyEcUcmMeCnOaterTCDNBd9kEmN6EeS9y30AjjjzkcZz4b%2BboEj7oM4WaUDax%2BVPgbzf1jPixIH3mxaqZySvBXHvZnN89yEAYyjR%2BDQzOZcjXPJBdfDbRSei4VvJQvpBvucxBDXNPN9D0zEYIgyoDCda17YVki9NgoV1PJwfgdHFyzXtcl&X-Amz-Signature=b5d9a37be2c8f80ba945bf219d9b6f5f1aaff0419aae8002d9c4085bb2d5d5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZH2CKL%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF48jVQvyvEpfPjlok%2F4cpBzZPegiR8pO1UtqdLWU2rDAiEAjBen1697o4QbFCYQ6L8wxbpoA4UBHDo89TFcmoUPCgkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHi%2BpaOL97nI0ls1CrcA3n%2F%2BUvE1zcRUt%2BaB1VHkI6L6fNyba0Go7L4SbpL1S3%2BmDu0m9yWDylaDiUHFxBaomqI4B3NLtLP0Djt%2BLPU2kfVHeRbwJJV4Bhkix8LtvvmdxjQ1RkXqom0jA8ZnjxUpWX%2FTa6vuOlcg4oS0tI1eBvt1wdPk0ofPtzoDGCqdkM%2BpifO0e8sQ929S7f4kSwFwMgG1hbl1qgirKFprZLzHU6y4l5ZfLBl2RuEPrSMDTebJRueTKKzS2W9JAx1m9xuxCKJaWP%2BA%2FDoDB3M5%2BG2wYxH9EhHDb22OXRJOQPy48KKPsxxf%2F6bIBQThA44jHW2GqB3HmYp0u5ULgnN%2FcCbS8l0iJYyrpd39cu5XQG3ENjoR8IqYsLo6Q4ABQ5XSAcOugYeA6mZ0F5C0jBPjdFmUtccwCMiqQ9JNIOgTudg16o4VyIgLLYFs0UoWtDyaEX0jwqf8iZY2K2db0JXpMG6K7Zau1Wa7ptuet70fH%2BsM8xWffmvzPcVeR3dZQOsasJQqgI7wxf%2FsdQ5Wp6%2FnDD7wBjJifGpZ5KBDI0WTWOYBOORAizU8ECr3%2FmzlKZcCYQIafvvW80ALJwHyD2W2W9viebYSKRngUNtvcKxFGKV6s9XITMYuySESGYAnSPGMIa%2Bs8EGOqUBF4x6oAlHemvWKFH2PCtbmdGjYqsGFX7LMxk%2Fh1uR3cRyEcUcmMeCnOaterTCDNBd9kEmN6EeS9y30AjjjzkcZz4b%2BboEj7oM4WaUDax%2BVPgbzf1jPixIH3mxaqZySvBXHvZnN89yEAYyjR%2BDQzOZcjXPJBdfDbRSei4VvJQvpBvucxBDXNPN9D0zEYIgyoDCda17YVki9NgoV1PJwfgdHFyzXtcl&X-Amz-Signature=2da959c5d2f4c93e14c74f7e88274b6158cf41b31ef526c850f7d6488e1029ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJX73HB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKveVxyk9p5eTaBKZ8JXuktlx6pt1oFHaCZVr6b5OL%2BQIgOE6YWrv42WPnc9ltswFGOmU0vU2%2BQPM%2FeESZFYSrqWMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbc03K4N9fiexEv4yrcAzR658tcUNi4MXrgG1e%2FRmnmkuS8tDiP6byrV5oit0exctWcCnO8zQ0VIRrDKbaJRlxNfFk4yf%2BD8VFv9w6Qpno3VuvCmJH1FzRhWFJRc4piCVQyAGSu4%2F9NxznruE4ZmKCth8obbjF16HzcxKls1I8YVy42iL6DANQvDRyrexq02fiIQpjAepWZFCCqB7HM4uz8rJa2gXGrX1exbr4Ap3pAeV6i%2Fj1IlQLVrOpBN8Qxjq5%2B7tBYu%2Bdn%2BzArzqP02Wm%2BvukFOwMPCavMC8RB30jQV66KPT7Rw1JUnojVJ%2BUyoYYyy5nQ0PplmygjP0bYTVUOdS%2FZ2%2Flib79ynv1PiRsR4%2BVxZk9iGmafceFRWKiH69oWZcVajD%2BLjJmH2VTGi%2FR3qSVDHXut2okv6ddHYw62Dyg7OtO%2BDAjqT28VmqOjk9S3sl3LBJw1SQhfXL65UQiVvR%2FeWqSOqn3cDoCeSud5%2FqSAMeBVvdbaDaVsprxpWMcl8or2DY3b8rrwGcNRs5LLa8onKdWtOdu0R4T42xzTNOZgElt4jGqQ7%2FYFQDpZVTD2cekId2Ry%2FfpTvBixZaa7JX3k%2FrbfOSlMtRZtmId6tYhdaosDXKNregcwnzuB755gBOAXZCnrqc5LMNWxs8EGOqUBS0E5b1d4zQq1I0d82qoGRoDuyhdn7roTZPKZWNxhTvoF0oA4jAJkoAlyRBEDwmfADYf0%2BFpJIalDTcE2P6TiEdUqPmAD996nMxRyDVPIyDHYZcMsKUGuWpMhP%2FkCXW%2Fowg3rDNmhtV1gWaMHqi3nvbgMFAJqk3B3pseCCBzYePwn32SAMWtfuGPJZk2%2BR%2BSRYJjcKTpj2dE5yf8saRMAhuVamPki&X-Amz-Signature=b187c3d56fc91c3f32b8d405401f95de57304c1205af519bc9aaa1ab4f13810e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXG4DEV6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYaycZjnQIDbnyEU%2Bifwu8cMKHesB2bpbe8evq21xz4AiA2vnRIl0F5aSC5jdfEechBW75mc8t%2BlhSvgmtuswZN7SqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2FliQGYBrD4E2rtfKtwDeuMC1ZWXe3qr881q6Yj4vcplRETkVyL%2BI5BRGeCCNFLixmiEE76miSzTLDtsipTHrweklwUA2%2B62Qa%2BLQJpzeRoQlNVSlWU%2B2Og6WxfIw9ztsh8WnOey41W38wA56%2FA5EnT4Xva%2F4qc%2Fc4Hqj%2BuaJIaRSwZvShRGuVD77T7TvUCpPbS5%2BIF388qu50VDIuMcziQq%2B%2BCC8LL4cLGBmKmAks%2FzfwrGK2j9Ll30t%2BaIseeKfgB06VclU2yCsomwJdC5SI%2BtB4wycK5QRE0Ton%2FOQOawHgtSeUOMLgtjixdq5pMcRtFVmzTaa0QrLsdQ%2BumCFcTiBmvCoIjBOtJVg5ZP2D47StbAb%2FjXFO9jYiwt28uXr45jcil9RlwHBCtom6mm2DBiKuheW9Wzt%2BHB4ogSexzxZEdq7m4OHCoe8FITpenxFMJt6Qt31Kb6xY1pk%2BUnh4D6d9UN8pQ9oteqOfZlXr3SCJX%2B2f2kNmrBCm05V9ZrRvkUMjAtPHlxZsKnpG7qkLAFEyXA%2BALYNDqmmd4qp%2BS9Z2sVGSZxH3%2FXYF17hPWbgQxnik9mTxT7T5Pu%2B473Yu3BPkYupL1Kj6lvxS%2BfBKak0kAhuV5xMkNWWrFVVpSuBqocIIF9%2FQHk%2F0ow5rGzwQY6pgHoRR8J68fnERluoLrINQITqV3yiRHfE5VDpUJaLMqyCZVWSPiX4cQg3SDR0Dlt2h1Ci4DEOgV7t50FQtk2FU35%2BCG9Moxzl%2B%2FsfnPpp0f7ZzuMg9NEwuCoUWKVX3N5tTP0tIlbqw9swp6XPhJPKfd%2BTdJFyQXhwJ1ccWIyENIXg6pYZYdOzorKTlux%2B%2BezI%2FjJT4KuVCHrRKPBGE%2FdhXRTfCZAJd2p&X-Amz-Signature=f3ef6aaa1bf962efde210606879a1c259ba1bd1a33cc0bf47c608cb2c3d2662c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZH2CKL%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF48jVQvyvEpfPjlok%2F4cpBzZPegiR8pO1UtqdLWU2rDAiEAjBen1697o4QbFCYQ6L8wxbpoA4UBHDo89TFcmoUPCgkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHi%2BpaOL97nI0ls1CrcA3n%2F%2BUvE1zcRUt%2BaB1VHkI6L6fNyba0Go7L4SbpL1S3%2BmDu0m9yWDylaDiUHFxBaomqI4B3NLtLP0Djt%2BLPU2kfVHeRbwJJV4Bhkix8LtvvmdxjQ1RkXqom0jA8ZnjxUpWX%2FTa6vuOlcg4oS0tI1eBvt1wdPk0ofPtzoDGCqdkM%2BpifO0e8sQ929S7f4kSwFwMgG1hbl1qgirKFprZLzHU6y4l5ZfLBl2RuEPrSMDTebJRueTKKzS2W9JAx1m9xuxCKJaWP%2BA%2FDoDB3M5%2BG2wYxH9EhHDb22OXRJOQPy48KKPsxxf%2F6bIBQThA44jHW2GqB3HmYp0u5ULgnN%2FcCbS8l0iJYyrpd39cu5XQG3ENjoR8IqYsLo6Q4ABQ5XSAcOugYeA6mZ0F5C0jBPjdFmUtccwCMiqQ9JNIOgTudg16o4VyIgLLYFs0UoWtDyaEX0jwqf8iZY2K2db0JXpMG6K7Zau1Wa7ptuet70fH%2BsM8xWffmvzPcVeR3dZQOsasJQqgI7wxf%2FsdQ5Wp6%2FnDD7wBjJifGpZ5KBDI0WTWOYBOORAizU8ECr3%2FmzlKZcCYQIafvvW80ALJwHyD2W2W9viebYSKRngUNtvcKxFGKV6s9XITMYuySESGYAnSPGMIa%2Bs8EGOqUBF4x6oAlHemvWKFH2PCtbmdGjYqsGFX7LMxk%2Fh1uR3cRyEcUcmMeCnOaterTCDNBd9kEmN6EeS9y30AjjjzkcZz4b%2BboEj7oM4WaUDax%2BVPgbzf1jPixIH3mxaqZySvBXHvZnN89yEAYyjR%2BDQzOZcjXPJBdfDbRSei4VvJQvpBvucxBDXNPN9D0zEYIgyoDCda17YVki9NgoV1PJwfgdHFyzXtcl&X-Amz-Signature=a929b5ddb394a10f4993ccf0b5695aad507a2ee505e4f15ba5ed974f125535a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
