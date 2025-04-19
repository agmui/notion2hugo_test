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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636X7FPFA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8bNsM1LFlahZsA5jxe4xzgGRV0%2F0BW7Glm6ovn%2BGJjAiEAv5j2X2j9FXO556U5DMJZ6u55cHEVpn%2FQ44lA0LasKY0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5O5Qi3h6FeZnIefyrcA1ViF21Fb1yBr6x3k%2FrBCPeUrciXYsrdoPW3lKC3Dp6RQNEZP32erFWFZB2tlWyW5LB20AELtoh%2FyN1smn0Qe0GIk%2BIe%2BKSWprBY6qXt0QWSaLikI7kvceEYZH5YC1zF690DVJ3iJOr2LEc%2Fwhh%2BZF0uBaqri%2B%2FjvdU9TT7nlBQbsjw4%2FALPsVcu9uH5JhMxTqgE%2BaLjEI%2BxXlsv0myWB5rnzihXHoSJDXVKVn8PAaopyKxvZDTLuFuw2FmaNS1qhiiaR7%2BcIhGpzw8vYo13DvzmEjh26E11oG4isPlR%2BlrSJzhrbKZyhuAej%2Bzr52YmMA%2Fxrx38YVqfaWg9UhaHZUoz8jny9Z4FVolfFxID6skd6KJPZELBn9HCyebrQmYNK5s%2BQSzEOrs%2FC%2BdOuSP8fefQbEdbdMP6Sbdw3eVzzaMyr9wr5qO%2BRDxyqUZOdxUhP2WPTTEOS4VqhpwYLQBmBVD6Na8%2BeBFHdxcdLCpekqRVcGu2wY951qigjRuwh7TZJC9qETIihAa2WKxfdz7IKYIcR19ExGEAT1NAozNX2KElofKYPuwdioPR7WtTcyrW30opClRBe1lrF6gqhUrz3Z1OGCFHVtjQulN6P7qyqmAvaq%2FQmQ1CSnWMYIUqMPv7jMAGOqUBMpUa1R4eC%2B108z4DBXg%2B1%2FwdPmUi82I%2BbxHBzTi4pu3p%2BPdfaWQ4qp1bEgBu%2BNKUKGMhlmBfQpXDnfB9VQtHb28ImYyOFgi0YczgggYTkScEU%2BVdmw%2FYyvNK8J7rts21w6156JyEZVEcnQYncdh1Z2Qi%2BwQ9nqEHaV4SGKiYNfBGYyTgp3E%2BRhT0Uc%2BcmZg2v7ELhM20sxY56M1LMlJQBOXPnpvN&X-Amz-Signature=6ff74dc793026efce9a6fcd60f5e06f6e55fce187a25a17d3c3b61e0d8c446c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636X7FPFA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8bNsM1LFlahZsA5jxe4xzgGRV0%2F0BW7Glm6ovn%2BGJjAiEAv5j2X2j9FXO556U5DMJZ6u55cHEVpn%2FQ44lA0LasKY0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5O5Qi3h6FeZnIefyrcA1ViF21Fb1yBr6x3k%2FrBCPeUrciXYsrdoPW3lKC3Dp6RQNEZP32erFWFZB2tlWyW5LB20AELtoh%2FyN1smn0Qe0GIk%2BIe%2BKSWprBY6qXt0QWSaLikI7kvceEYZH5YC1zF690DVJ3iJOr2LEc%2Fwhh%2BZF0uBaqri%2B%2FjvdU9TT7nlBQbsjw4%2FALPsVcu9uH5JhMxTqgE%2BaLjEI%2BxXlsv0myWB5rnzihXHoSJDXVKVn8PAaopyKxvZDTLuFuw2FmaNS1qhiiaR7%2BcIhGpzw8vYo13DvzmEjh26E11oG4isPlR%2BlrSJzhrbKZyhuAej%2Bzr52YmMA%2Fxrx38YVqfaWg9UhaHZUoz8jny9Z4FVolfFxID6skd6KJPZELBn9HCyebrQmYNK5s%2BQSzEOrs%2FC%2BdOuSP8fefQbEdbdMP6Sbdw3eVzzaMyr9wr5qO%2BRDxyqUZOdxUhP2WPTTEOS4VqhpwYLQBmBVD6Na8%2BeBFHdxcdLCpekqRVcGu2wY951qigjRuwh7TZJC9qETIihAa2WKxfdz7IKYIcR19ExGEAT1NAozNX2KElofKYPuwdioPR7WtTcyrW30opClRBe1lrF6gqhUrz3Z1OGCFHVtjQulN6P7qyqmAvaq%2FQmQ1CSnWMYIUqMPv7jMAGOqUBMpUa1R4eC%2B108z4DBXg%2B1%2FwdPmUi82I%2BbxHBzTi4pu3p%2BPdfaWQ4qp1bEgBu%2BNKUKGMhlmBfQpXDnfB9VQtHb28ImYyOFgi0YczgggYTkScEU%2BVdmw%2FYyvNK8J7rts21w6156JyEZVEcnQYncdh1Z2Qi%2BwQ9nqEHaV4SGKiYNfBGYyTgp3E%2BRhT0Uc%2BcmZg2v7ELhM20sxY56M1LMlJQBOXPnpvN&X-Amz-Signature=407a2b47fda860e3b3f0b3c91aa04a841877c8914162b8e638fb390be400eca1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZNKCIY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaYU%2BiLYu5jf1pp4OjFBNA1u5k%2Bzoe0nxSCJK3Xw4xgIgcJKKDFJ9mdWNLbVZaK3dMVDvxBNbQbagBCoyge3HaVgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL25OUsnqpoA%2FRrLGSrcAx%2Bzjvy3rrbz0xkuZhN57Og0ijFWuwdZOuKIISh5BWw4RQD1SsmVgq2wY07cJt2l6Mmh7xHh6U2EtAQ6UhR0h9RQ147trlojZICOvSSqg77HMKZ2qfxGi1YvPtMOtajcaZiwaN9Jh%2F%2FJJcDoRdFdBvY8Zss8gl%2BBXor6SxrjsVDuBzj8ZHbtRgRnBLfHjvRFfN%2FqNsk%2Fu5hnjk7FEXQKkdWRhoet%2BVl88ZPCgH0I3%2BP07fPXSNPbckCqxKZ7G43Fxt7l7RqxNPnldk38PTRyeKgTUL2jjbhQRUL8J26HwLhRMSy8uZj5VWbUi2We3SpdYq03myLMGSvH7cAHm8bHyjqOlU0J%2FeFtsSD8qMTPYRoZEi8ua5%2FL12VyilUr9W7TiFATnu86QuEX5WmTzCZQtSs5YAEUovhkxzwKt2JOcqf%2BR8mRAroW8y1gj4ZjSNWTlzZ1SSyl0PnFP1s6b3fz1CAnWsp4OMJbeSIxms%2FWuoz7c5qmcfA5eSvkBcur8RwcXDh5PoYHXlMmXsnjZt2sV5ZZlxIfC5ZMPjbhfMecIcyqLBaelFmydCqhxsVbFodJpJ7zRLDqMEjb8qkVSDAzKDMM4xW%2FVUmOMgrx2agfMIE%2Bq%2BM5w8ijgAg6M9erMNn8jMAGOqUBoFzdPMRberkcCyNyi%2F2W5fYTCMl4kkMpbTB3uwrE%2F%2B54p0YmXfA848AzXfDpoiEpVfA7XOfUbfKWqvpM2EI%2FxCyeFg9YyPDv00J4yiQnfgRtxRp8j5h%2FEyTae7ezpfVJT9XyAezhkmT5bkJK48rKagN9e0OsqGFMJrWGgFqSC9D6RNvNYWwGZCxfenFLbFInpcX6ZtH%2FFebd8vpjRxut8w69uW9s&X-Amz-Signature=7a7ad0f75e23b70c665328b758d4486d75410237495db2b71609e9f200192e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCCJOTL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6WHRNC48uAFXPwN5ixIkAs1T8clmxSDyAN9Tu786crgIhAMs6Qt%2Fvmo7KxE2fn3SQsR3EEcIH8ePEAGCin4AYN3N1KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMdZQOl9YKPFWmMNkq3APtI2rNJ0y3kg7WFWBN8m4QWvU%2BR4m2Q8CAvhjGHpL%2Fn5wf57l48PUaF8QVCo7PJknufxaERsEzgJklNKokSGKF9JuYw3S55Lr1pGgGkSuMMPrvo91m1toj5kaPOMhhUF3l8iJlMHLCO0ZmreJqsZPwrRZV9NJFu%2BCCjoo6VBUDUSdZhQ9ISCcG%2FgbkbSgaWjAPvdab1Ug30XE9b2kBtcKHILWi6IaJkHW%2FiTceRczrI9Wk0U0JCvvFizKP3oG6cxo01Y7hlbdjqO4HMD5ofCNEoIZ%2BkXP74Zzw7KVOh1zmnYmfI5KNbHuxoEcpLn%2BaHtrkQfR%2F8fsta%2FCj7ozW6PKHCVwU64PlASoc7u4c%2BVcQzecxK0lvhIgjMkOSCqnlz%2FoM5mosDHLSdBUMu81zQN29vGE3khDKkz93YXNmzc%2F8yljWaYutod%2BhIwMJ%2F58YJH14%2BoGZ7IdkYDHSWB%2BMIxHqNDOJevFu813MH4f2EKfUda%2BEICvjfv7J8%2BT7f91l6tVMv6bAWqwQtcbdXVTAAgPpOXIhyXcuQcrNBZSq5dZM5Olp0fgz8YGp4WdHkRulbFJGhWZdJWr2R99GDlzWq4fKahkRWuBe6MnUXuEqQoprT3CHGRC6GJW4Q5tjbjDH%2FIzABjqkARcnqBxUP%2BjNHuHBcs%2F9mAVIUO7GmF%2BV%2FIWy26cL5CU9L0I2OGomyDpb%2FKbb4A80iXluM61p%2BRXFlvumVC5%2FjcwvB7f7WCwe9d7LgehvyHWfYOoTmTwNJtlCfAJJ0E2FuCLe1MPhp%2Bo2BgzeRDk2%2BQphf%2BcDiMatgywjA5STdE1YwINOjXHrchpZMpFzADIFEqAaM1a0i1%2B3dhNEUNUl1%2BLNuABl&X-Amz-Signature=a0d4c5515df1d505281bd5fcdeb1c903f066377643b9abbca8954a7d0ac503a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636X7FPFA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8bNsM1LFlahZsA5jxe4xzgGRV0%2F0BW7Glm6ovn%2BGJjAiEAv5j2X2j9FXO556U5DMJZ6u55cHEVpn%2FQ44lA0LasKY0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5O5Qi3h6FeZnIefyrcA1ViF21Fb1yBr6x3k%2FrBCPeUrciXYsrdoPW3lKC3Dp6RQNEZP32erFWFZB2tlWyW5LB20AELtoh%2FyN1smn0Qe0GIk%2BIe%2BKSWprBY6qXt0QWSaLikI7kvceEYZH5YC1zF690DVJ3iJOr2LEc%2Fwhh%2BZF0uBaqri%2B%2FjvdU9TT7nlBQbsjw4%2FALPsVcu9uH5JhMxTqgE%2BaLjEI%2BxXlsv0myWB5rnzihXHoSJDXVKVn8PAaopyKxvZDTLuFuw2FmaNS1qhiiaR7%2BcIhGpzw8vYo13DvzmEjh26E11oG4isPlR%2BlrSJzhrbKZyhuAej%2Bzr52YmMA%2Fxrx38YVqfaWg9UhaHZUoz8jny9Z4FVolfFxID6skd6KJPZELBn9HCyebrQmYNK5s%2BQSzEOrs%2FC%2BdOuSP8fefQbEdbdMP6Sbdw3eVzzaMyr9wr5qO%2BRDxyqUZOdxUhP2WPTTEOS4VqhpwYLQBmBVD6Na8%2BeBFHdxcdLCpekqRVcGu2wY951qigjRuwh7TZJC9qETIihAa2WKxfdz7IKYIcR19ExGEAT1NAozNX2KElofKYPuwdioPR7WtTcyrW30opClRBe1lrF6gqhUrz3Z1OGCFHVtjQulN6P7qyqmAvaq%2FQmQ1CSnWMYIUqMPv7jMAGOqUBMpUa1R4eC%2B108z4DBXg%2B1%2FwdPmUi82I%2BbxHBzTi4pu3p%2BPdfaWQ4qp1bEgBu%2BNKUKGMhlmBfQpXDnfB9VQtHb28ImYyOFgi0YczgggYTkScEU%2BVdmw%2FYyvNK8J7rts21w6156JyEZVEcnQYncdh1Z2Qi%2BwQ9nqEHaV4SGKiYNfBGYyTgp3E%2BRhT0Uc%2BcmZg2v7ELhM20sxY56M1LMlJQBOXPnpvN&X-Amz-Signature=c5472352cfb4002f4443c936dded5b07ad1621cc03c555a24e4df90951b61e40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
