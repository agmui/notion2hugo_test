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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTK6BQQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BQ4J%2BLQB3U0QLfVDgju904o9ALjAnoLw2AyyjPCsm5AIgfJ8879L1rrqkb%2BT%2BmsqtK3VW%2B1UkBnIv1ahgYm3o%2FVgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDF42eH24XZn0PEB7DCrcA60nlCNFx1%2FXPWounP6pj0jnWThImTd5RzUEjZc9kV5M1xPE%2BXZbA%2B0ih4PtfxQ4nAz6WgPDL2k5sgSB35CLF5jVSwe%2Fr6iQ1epfvphn9YvFg9J%2F5OYw6nnCSnT91pFM8%2BMZKmN0kua9lc4VEYXR54qWXupeaVutEBPjmEL56D089b%2Fhs7UmIsHfaezVIXHs9dZmC9aPLbGpnbd2MhZqP0oawPcM7EHCLEi87OVaOxVc9TMUTaoJoq%2BBLkeh1wJgwCCg5%2BKl%2Fw0M421kZzIMShx1IpeS%2FQzmz2Drdpbpkdi1EdJUc2nyaMLA1VZerA8K0ZTt%2B6CIn9n7dMDzvLcDcCfULWFAhShvHFcdjXinnf%2FP1i8qqQkE0uRVHVn4BGfboh%2BDIArftyYYxrfHyO7ziK%2BRwoa0vyossuP13y3ZUSHPKJNsGZ70nkEMCHUSUl9%2BFK%2F5IbDt0AuP6CmgU5%2B8JKYuEeYoBYLxKWB8HHCTjBRi5klmvYqvQBaQUuDiueD3oVAUZGoeXMmk3PEmEb7vQTOIhnwO6iPTWErGwUEDbX0XEu7ePwqV%2BeGiOwGLdNDqGzZ3ZjQYvSZr8q6AFGTWGHCEYAfCi5lPjEVtgolb%2FGzlk2A74MFBp3lxovHBMO6N174GOqUBM0lP%2BPnaiSG72ek0F4Mk2ar0c3p22ngguwj582MzSHP09runTbGUX9mmGl0umZiATUU6PHGqy%2FWtIkMNEPvyOPOPVrnqVGYXcZ27GKxz6qMI%2FO40COg7BD0Fz7UKRAPg%2Bd42p8y5rQ7mjRZX6TxOtxmrCRRtejnjwyG3y0avYU6EMvFg1udrlSspi1IDoSOT0YOqIkXS0Jo5gMnTCjEQV7M4uORo&X-Amz-Signature=6d5eddb3dda3e97483f63b7052544d449b16e5efdfa5c74b8a1bea7d8728bc37&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTK6BQQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BQ4J%2BLQB3U0QLfVDgju904o9ALjAnoLw2AyyjPCsm5AIgfJ8879L1rrqkb%2BT%2BmsqtK3VW%2B1UkBnIv1ahgYm3o%2FVgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDF42eH24XZn0PEB7DCrcA60nlCNFx1%2FXPWounP6pj0jnWThImTd5RzUEjZc9kV5M1xPE%2BXZbA%2B0ih4PtfxQ4nAz6WgPDL2k5sgSB35CLF5jVSwe%2Fr6iQ1epfvphn9YvFg9J%2F5OYw6nnCSnT91pFM8%2BMZKmN0kua9lc4VEYXR54qWXupeaVutEBPjmEL56D089b%2Fhs7UmIsHfaezVIXHs9dZmC9aPLbGpnbd2MhZqP0oawPcM7EHCLEi87OVaOxVc9TMUTaoJoq%2BBLkeh1wJgwCCg5%2BKl%2Fw0M421kZzIMShx1IpeS%2FQzmz2Drdpbpkdi1EdJUc2nyaMLA1VZerA8K0ZTt%2B6CIn9n7dMDzvLcDcCfULWFAhShvHFcdjXinnf%2FP1i8qqQkE0uRVHVn4BGfboh%2BDIArftyYYxrfHyO7ziK%2BRwoa0vyossuP13y3ZUSHPKJNsGZ70nkEMCHUSUl9%2BFK%2F5IbDt0AuP6CmgU5%2B8JKYuEeYoBYLxKWB8HHCTjBRi5klmvYqvQBaQUuDiueD3oVAUZGoeXMmk3PEmEb7vQTOIhnwO6iPTWErGwUEDbX0XEu7ePwqV%2BeGiOwGLdNDqGzZ3ZjQYvSZr8q6AFGTWGHCEYAfCi5lPjEVtgolb%2FGzlk2A74MFBp3lxovHBMO6N174GOqUBM0lP%2BPnaiSG72ek0F4Mk2ar0c3p22ngguwj582MzSHP09runTbGUX9mmGl0umZiATUU6PHGqy%2FWtIkMNEPvyOPOPVrnqVGYXcZ27GKxz6qMI%2FO40COg7BD0Fz7UKRAPg%2Bd42p8y5rQ7mjRZX6TxOtxmrCRRtejnjwyG3y0avYU6EMvFg1udrlSspi1IDoSOT0YOqIkXS0Jo5gMnTCjEQV7M4uORo&X-Amz-Signature=6e9253da91a310bc4162e3d53600f8c146342da361de4e253e680752243928f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2CBCQA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCatrtQ%2FuPWueC%2F36IMr1fQKA1uVsRT%2BbX1x63WdhzYNQIhAI1uojH57vffvLmfPfsP9XL9NZV0bnvDRws7T9Us0Mt%2FKv8DCBwQABoMNjM3NDIzMTgzODA1Igzzz02JOBZKWa4J6gIq3APyPl%2Bg8la5165NkVavEHAG89EgbhuhjWLXsBpj%2FgQaXsPgxuuNGccelGzQWW4vCcZBvDRmB8EG9Mi8%2FK0jvAZ0%2BzR9T6Js5Krrd5LetDJ4CviEr%2BSoQA8Jm54A6Fabg4n7nyJR5AXC47CzEvca%2BIkhFrtQN2XGC09EI5lT2SKaX0Q1kyakRi5sG1xR30WpvrGa89z18ICr7ybIstO%2B8dwIzVHlT1ndTb5VbOVeqCSKYvMSQ8555RW8lDhBo%2B5XSL75Q3jMixCkhw3%2FIclcvfXYQ3vZdEWSgqpODBvIjSaXViZvDIq5AQC8WBub4bULI%2FcLLHis4rrMXhbNrJ0MPzyrOg1amApTCeyy3Dr5rrcpmJYtszOWliVCYEHZET%2FyO2sVPO8A%2FsJABCU1gI4%2BmAMJ7ojhWAb9NNVAK1ahrO1WcB%2FJA0AkjwiRVkfnm9B5R1MdjK%2BdvrjlpaG%2BxNl1y%2B6Plag0FYCqcEyV11rkaoM1sjxPnke7KN%2F%2Bk5UPAR9f0ihDBwoCmE9mkLxzP8DWayaod13LSPtr9RVR%2F3mpLvhP1ykddH3QI3SfrO6%2F%2FBZGqcJQK0BXe%2FlqoqLKAMm61nJVJV4IgptfIIf%2BLg7oOtLEykKC%2Fm5Q%2FjblNmxc3TCojte%2BBjqkAWrgbHYOAv94GqgaMmI8THS4Bqu7Kf7MldQ6WZlv0DVIdVuE1zg%2F9vx4vkq2L49iSnpIQhthTsm9HddwEB2s4n2I1BWCz3pUam9AdKAMeFhdzVOcoCcTyvxcBqDO80GMFTMPSY%2F2YXmfjyve66FpKLvYxTZfFnJS3iMa5GnRH2OG6MoZ5j00EIshxcqc0RYCl1G5eYzfvye9yaCziDkU44%2FxC%2FMT&X-Amz-Signature=c93273fa347dd8a59e93143700b82b2d912c1bfe9046ebf89ac2e3337d23f5af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVM67NN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvuWOv9tZRcF6%2BkBVuF74mrKWE5PePULgrfloX9eVsiAIhAIZH6zJvq8udOFWFP0S3hq7jiVDnYpQyroolgzvmthQRKv8DCBwQABoMNjM3NDIzMTgzODA1Igxyv%2FTNNAD9jzeiJfYq3APCchESknWIEVsdCbX5igTLQYxZsDLDD90QRV8zQYi%2B6hlRS%2B4yjOeQMBwveRGI6cDCk4muBrmZbjePTDNU2L1DL4x41v3Y5igkEKwKUnNNbwB2ar%2F0JcfG5rJJ9vqP8Tj3yyoFHJ67QmkD26Gu8Ok7eCf0GLSZ4Rz6MuTkgopo4nZw0OkMPlFzMco99VHXkdl7r%2FOLZRC0tbpsI2xWhtIzuvISBHOx2Z3wx%2F6Pa1fHPEYtpzhd3uMdYoX2t4HlgJ4IwoQsY0znRm6FpwZyjgdWil50xVAmL1%2BL3Xk7CAid%2BEx839KJbZwoUrwUIPBXCH85zVtVrxnW61jObUSpsoXzy9WuLcxuR%2BE7n97Wl8rTA7YqlT5bfYJJs70AUIobAtsT4VuCGgHA7B2iLomnZMFw9MgPlY4uMZyFec4278buHVeeAoM1zC2xh%2F7tmk2%2Fvf9EEA1aK14xB%2FZ8jwcFSQL%2B90jaLCvPwMuMadV%2FvauG0MJtZT6S2jkQ3dW6dMoQFpqzpDDRiB1gFMnSYj1lR%2BtMyDRUVSuQRA2CK5xMFJrQ3wotPyrJUHlk71xS7S%2Bek7ph%2Bi9OcGuCexchm1WI7%2BTiAKGtWbcz9ch8gqdkDKn85z%2BDK0tCGX4MHFzYjjCyjte%2BBjqkAQ284RhudFAaWg%2B%2F551S1mTvnesyvY%2FM6EVVaneqPcVbyUt3or38nJSPOFgNZCtqd3XRL0COCn5ddV95B6u6rGPDSBjx6nWj6jEFFC9FHfM2vosYvhEWOROtGDwYbXGrWYhYqsvnV5M0h0ed%2BlVsSaxaZA8yZK2BNiaLfDny6ZrwjtkUpH2NXxB6hUB0iSk1R6KjyqD6nDE4mLM5BOQDHIApqUzd&X-Amz-Signature=965acc727083497aae45f0d34b9eca00ea79f59dc89e7bf13414998db39e6527&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTK6BQQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BQ4J%2BLQB3U0QLfVDgju904o9ALjAnoLw2AyyjPCsm5AIgfJ8879L1rrqkb%2BT%2BmsqtK3VW%2B1UkBnIv1ahgYm3o%2FVgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDF42eH24XZn0PEB7DCrcA60nlCNFx1%2FXPWounP6pj0jnWThImTd5RzUEjZc9kV5M1xPE%2BXZbA%2B0ih4PtfxQ4nAz6WgPDL2k5sgSB35CLF5jVSwe%2Fr6iQ1epfvphn9YvFg9J%2F5OYw6nnCSnT91pFM8%2BMZKmN0kua9lc4VEYXR54qWXupeaVutEBPjmEL56D089b%2Fhs7UmIsHfaezVIXHs9dZmC9aPLbGpnbd2MhZqP0oawPcM7EHCLEi87OVaOxVc9TMUTaoJoq%2BBLkeh1wJgwCCg5%2BKl%2Fw0M421kZzIMShx1IpeS%2FQzmz2Drdpbpkdi1EdJUc2nyaMLA1VZerA8K0ZTt%2B6CIn9n7dMDzvLcDcCfULWFAhShvHFcdjXinnf%2FP1i8qqQkE0uRVHVn4BGfboh%2BDIArftyYYxrfHyO7ziK%2BRwoa0vyossuP13y3ZUSHPKJNsGZ70nkEMCHUSUl9%2BFK%2F5IbDt0AuP6CmgU5%2B8JKYuEeYoBYLxKWB8HHCTjBRi5klmvYqvQBaQUuDiueD3oVAUZGoeXMmk3PEmEb7vQTOIhnwO6iPTWErGwUEDbX0XEu7ePwqV%2BeGiOwGLdNDqGzZ3ZjQYvSZr8q6AFGTWGHCEYAfCi5lPjEVtgolb%2FGzlk2A74MFBp3lxovHBMO6N174GOqUBM0lP%2BPnaiSG72ek0F4Mk2ar0c3p22ngguwj582MzSHP09runTbGUX9mmGl0umZiATUU6PHGqy%2FWtIkMNEPvyOPOPVrnqVGYXcZ27GKxz6qMI%2FO40COg7BD0Fz7UKRAPg%2Bd42p8y5rQ7mjRZX6TxOtxmrCRRtejnjwyG3y0avYU6EMvFg1udrlSspi1IDoSOT0YOqIkXS0Jo5gMnTCjEQV7M4uORo&X-Amz-Signature=cfb8d4a9910ea39c5da52577e0a9a80f239bdd8749aed54c4c4b7adab550f560&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
