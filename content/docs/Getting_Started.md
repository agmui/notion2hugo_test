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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QPJTMY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2m%2FZYRh9WZOnVG0rqc%2BOcDjym4LiSXhxxVrvkxRaD5AIhAOmseRAkZFSxgwupyIWR2RLeSTd15UBw2sGfqThbP08PKv8DCGwQABoMNjM3NDIzMTgzODA1Igxec4nhCqRxxNZYHM4q3AMglph35jiIxS1OP3yjxg8YfNoDekRvRIeVYr6Q553M02qJlDQ7TsUAt%2BjjHdHqWoqfjzv1NVmZqfyYczE4kK2kFE9pshh%2FH3X5b2CU6Ad%2F23rOjHkz9yzZAdKGbvDpp4qKHg3P0W4u4tVgvshqnuMiEw9sFgfF7qVJcahUkmfjKKagPdWoM%2BpfjrAnuOjJqEUZmX54vYfNjRlEsaj3Nr5ckdP42%2FokEhgDx%2BjsvWjTw%2F0CZxUcRZ0krw5UoVUlFJoG%2FsXt5GaWphnYRiyBKPsTbXuRL1esZr3Uwc%2FAFB5%2FvE0iAtC89K%2F%2BYYSC4LBtOR8zCjoGNtLJfV3%2FHkQrYBKk6Kq9tML7%2BWyq3WQ2y2P6LmUi0EQwYN0VMnlBNJP%2FyrAxZGbqf9QseAbbw7fm9gqVgMujB4SisKnl%2B8Ma%2BZwE8RVV%2FWg7U15%2BDzZ8LQQt9t0CNmPT%2BOYAdsN0l68WOeSlDCoCDhc0boMIxxajixkO5UUMOwuLYTuY3%2FkYI47m1tGr5nU8USLNY0%2BIFVLG8Lzz8vQpqaXipzzPv93l28xvofWprfIdQJJ8WceB7smIXp3NRMK31LdzJT2KtmckfdtEn8D%2Fxj8CJLPoVh6FW9%2BTCf2LowYmS44Ui8syBjD5irS%2BBjqkATYrkXyaa9ZEl0AfipDaTW1FT87qD%2FXp%2Ff3NtqgBoroB7XVp8SgUXtdPWqux5MuzugSbdpj1X5swcO5bxUcs2Y4DL%2Bl0ZUTkeyUG3iFFW%2BLP1C865b0AqUydtLwZRwRkfNuCQgFJnA4y4%2BIT6EKHKUBzt%2BtG6HEbkJr2RYjfl9dVBS%2F%2Fpw%2FzWTy470xu0ntLAN7kKaue3%2BcFZ1J0SDitAZcK4ajz&X-Amz-Signature=2a0d370909167173ab312dd9eb22d7be2dcb66d067db0de1beb76c10084b4616&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QPJTMY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2m%2FZYRh9WZOnVG0rqc%2BOcDjym4LiSXhxxVrvkxRaD5AIhAOmseRAkZFSxgwupyIWR2RLeSTd15UBw2sGfqThbP08PKv8DCGwQABoMNjM3NDIzMTgzODA1Igxec4nhCqRxxNZYHM4q3AMglph35jiIxS1OP3yjxg8YfNoDekRvRIeVYr6Q553M02qJlDQ7TsUAt%2BjjHdHqWoqfjzv1NVmZqfyYczE4kK2kFE9pshh%2FH3X5b2CU6Ad%2F23rOjHkz9yzZAdKGbvDpp4qKHg3P0W4u4tVgvshqnuMiEw9sFgfF7qVJcahUkmfjKKagPdWoM%2BpfjrAnuOjJqEUZmX54vYfNjRlEsaj3Nr5ckdP42%2FokEhgDx%2BjsvWjTw%2F0CZxUcRZ0krw5UoVUlFJoG%2FsXt5GaWphnYRiyBKPsTbXuRL1esZr3Uwc%2FAFB5%2FvE0iAtC89K%2F%2BYYSC4LBtOR8zCjoGNtLJfV3%2FHkQrYBKk6Kq9tML7%2BWyq3WQ2y2P6LmUi0EQwYN0VMnlBNJP%2FyrAxZGbqf9QseAbbw7fm9gqVgMujB4SisKnl%2B8Ma%2BZwE8RVV%2FWg7U15%2BDzZ8LQQt9t0CNmPT%2BOYAdsN0l68WOeSlDCoCDhc0boMIxxajixkO5UUMOwuLYTuY3%2FkYI47m1tGr5nU8USLNY0%2BIFVLG8Lzz8vQpqaXipzzPv93l28xvofWprfIdQJJ8WceB7smIXp3NRMK31LdzJT2KtmckfdtEn8D%2Fxj8CJLPoVh6FW9%2BTCf2LowYmS44Ui8syBjD5irS%2BBjqkATYrkXyaa9ZEl0AfipDaTW1FT87qD%2FXp%2Ff3NtqgBoroB7XVp8SgUXtdPWqux5MuzugSbdpj1X5swcO5bxUcs2Y4DL%2Bl0ZUTkeyUG3iFFW%2BLP1C865b0AqUydtLwZRwRkfNuCQgFJnA4y4%2BIT6EKHKUBzt%2BtG6HEbkJr2RYjfl9dVBS%2F%2Fpw%2FzWTy470xu0ntLAN7kKaue3%2BcFZ1J0SDitAZcK4ajz&X-Amz-Signature=23b6e015ff050829c6dab66a19d79987c3d0d9c3ea0b8f339807426071d27ace&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMWBEMG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCYvl%2F70d36kUjeYC7qv%2F%2BrRvmnMOjfHfe1QXevrJxnywIhAJtp%2BpC2HqXTdWxEHAO%2F279aT8bnNHIM4JZ8iqu1suWkKv8DCGwQABoMNjM3NDIzMTgzODA1IgyaVpvtq5DgD1MG5Bkq3AMSepX8q1TrblBosEl2wGffcmVhLxihUtzWr94mgiFBS8V2Oyfbpdd3VJP%2FJj29zsrq5r4liLDD%2FeUt4rI4vXoh3nFzsEwIz%2BfJJFGxtuk%2BzMameYGTq1oJektGk9g5QPhlHSn%2FvY14%2FHaeQI%2FhRc5ZUUgNuwDgQSl%2F%2BSxezpX8zAqW%2Bas1aYWBq8OMHE5kHL58Xdv9ZXtFPYpXPMm6nIuRHX8kjUDiT%2FMOQZV0PX4JMub%2FaRxz%2FmfE%2B%2F16pGwSqQ8cCgEfqBnkvH9gPYWbdFWIMizrVFTl9W9Vcnkzx847J8Z%2FI9iR8LmEeQMOVbBeP%2BjMlzipo0dSS5PqWbl3N%2FZiC9DNSGozqkrBDaI8wAH9Q1hf%2F741hwmvIwjKzdbuVvWvbl9isgEU%2FrTpvpDR5%2FpZu0hgybXdTHZ5vRN4RTuBbmVIQzu8EmW0t7RdOIZ2BomJHXL2jrVA6YmAL9%2FdBZUE%2F85LrT4R2OB92RlrYPE1RdIISJPwfSIlBeA%2Bo6d3LpflcxYBlcv2fafnoJECs0REaJ9uR67btqK%2BPy3pQjN8RlerQ1UNRV%2Bx9J%2Ffg8%2Fnyhvn2v0rUpFOEsU1UKKJx2rdGNo1KNVyddUWEp%2FWCsmFDRsduVFh5lVme3dVtDDBirS%2BBjqkAahkJF%2BztUqxlMDWC30baUAmhAeavnuE1YUC9hX1unW6%2FkT2VjPpou6ow%2Fo0TR1mV3OriFVdhYudHlo8gde5ihXoLn%2FixfqCGg1NGOiXIxni0IlRVamphiNTw4Z2IlZTos%2F7AJ9O2yX7zgRADUqmrWClY2e1%2FtLbiAbJoIrQaultdo3W1v4QJmP31sbjcncR5ZVldoHHVJccwMZ7eNBZHlgupfkR&X-Amz-Signature=c78761b00dd66be860b16f5d4b4bf73adb6c237c99c4befd6d76ceabdc91d203&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRBVXSF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEH5xqTCavgDj2E95Mm8kY9mDcjhGq%2BOfEobDQcJytwnAiBYwrmP7ruFZOuS2nwtTeua7V1Xc7w61Ht0Jn9rDkDd6yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMAKMUcXiB%2BoGOr%2FJIKtwDZ2aoGwoqes%2FHDeEIiJj3yZDVPEAZdIzYGAU8RNHSpWIW%2FWrrXbc8juSfcJk4eJFQL%2BJShYrmtiYcRwm8U%2FrxAoMtcfa7EqDjYXEDpz1ly%2FP8R5wD9S4LUYQtOaXyt3osRSO32EkirXL%2FXW8M8yAdVWOTSejBnqqCiM2LMewvBk9Gd0NsOAli%2Bxdx0fxO8riO4rgVBQfmKPmkoBO1q4FUxdXM9vM8HM%2F%2FN0UKZ9bdIrlR%2FBC%2FQA2BYxm2OaiMISw4Y4ewQZygm9HT1H1n48Tdq7%2F5UjhW%2BXEOLRn7UWqJGoDGxWQtKalIL2J41SnyRtMC8FOWzRmiVmIjQppCmX9%2BJar9zpP4RrnyzG54Lb3vzNVtpOrSIhbKVDkFWSWoLO3N7Es7eYIQawCMHWDKLwndjjxkzoLebvNlnyYBluSFznNl1WOLuaxdvhlQtEd2QS8HNCbnUem159Xop6uAZhOE13p8Ol2PjG98ypQTOzjhDhAI9DfCDf5s99ZvAwLq2O6na2oxd1Z5p7F5eGtxPpHa4ojGp1jl%2BjhLb8FYqMl290bVd4wyd25nJn7yyiS8cDdgWB1uTVnaQJo91EDHWFyBGdhw9NeL%2FwdwV4nxbonlrQaznbiklKnx1O%2FJbCEwjemzvgY6pgEhuZHtmXR8BTKtGevtIvaOoJbPJ1UMZgzIcb8oYSFfFnc%2Bwp%2BCF3oWaUCDP%2BP4kL0h3sh1%2FjqXorlbbTX6eOwL%2FzKY1hBXZmWoLOBiGOjJ%2FsvH75jHr%2F%2FHPvLQ1K0eKMZycoKJTIPTNwN4LVo%2FgacBCf6FEx1qrbv7tdoSi%2BJrcJ%2BDVPGBXyHSQ7dgCula4WPPwKo26oss3HdYNPuxERCe3hcJqpew&X-Amz-Signature=85d1eb4f1a53dd0c2e88185e792b5f36aee30e0b0b4add36e1020be8a2aafe6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QPJTMY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2m%2FZYRh9WZOnVG0rqc%2BOcDjym4LiSXhxxVrvkxRaD5AIhAOmseRAkZFSxgwupyIWR2RLeSTd15UBw2sGfqThbP08PKv8DCGwQABoMNjM3NDIzMTgzODA1Igxec4nhCqRxxNZYHM4q3AMglph35jiIxS1OP3yjxg8YfNoDekRvRIeVYr6Q553M02qJlDQ7TsUAt%2BjjHdHqWoqfjzv1NVmZqfyYczE4kK2kFE9pshh%2FH3X5b2CU6Ad%2F23rOjHkz9yzZAdKGbvDpp4qKHg3P0W4u4tVgvshqnuMiEw9sFgfF7qVJcahUkmfjKKagPdWoM%2BpfjrAnuOjJqEUZmX54vYfNjRlEsaj3Nr5ckdP42%2FokEhgDx%2BjsvWjTw%2F0CZxUcRZ0krw5UoVUlFJoG%2FsXt5GaWphnYRiyBKPsTbXuRL1esZr3Uwc%2FAFB5%2FvE0iAtC89K%2F%2BYYSC4LBtOR8zCjoGNtLJfV3%2FHkQrYBKk6Kq9tML7%2BWyq3WQ2y2P6LmUi0EQwYN0VMnlBNJP%2FyrAxZGbqf9QseAbbw7fm9gqVgMujB4SisKnl%2B8Ma%2BZwE8RVV%2FWg7U15%2BDzZ8LQQt9t0CNmPT%2BOYAdsN0l68WOeSlDCoCDhc0boMIxxajixkO5UUMOwuLYTuY3%2FkYI47m1tGr5nU8USLNY0%2BIFVLG8Lzz8vQpqaXipzzPv93l28xvofWprfIdQJJ8WceB7smIXp3NRMK31LdzJT2KtmckfdtEn8D%2Fxj8CJLPoVh6FW9%2BTCf2LowYmS44Ui8syBjD5irS%2BBjqkATYrkXyaa9ZEl0AfipDaTW1FT87qD%2FXp%2Ff3NtqgBoroB7XVp8SgUXtdPWqux5MuzugSbdpj1X5swcO5bxUcs2Y4DL%2Bl0ZUTkeyUG3iFFW%2BLP1C865b0AqUydtLwZRwRkfNuCQgFJnA4y4%2BIT6EKHKUBzt%2BtG6HEbkJr2RYjfl9dVBS%2F%2Fpw%2FzWTy470xu0ntLAN7kKaue3%2BcFZ1J0SDitAZcK4ajz&X-Amz-Signature=6eca14855fb063a4bd4e81606746cf0a44daf3398f4f0ad0e248387c262e7136&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
