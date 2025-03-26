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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBO2S73%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGrAibR8EX%2F%2FVkSx1%2Fi2Vc1rAke47Wgacw5RzTDFncBQIgRnGMH0Ig0dekF6OqG1pnJcE2Y0IMMTVxHDrYjoyDxEAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIC0cBTx7tOcAoF2yyrcA3caHZhWBQkiKr3n4OyPMWJlrdtnXNaqTHT1G6ivHd%2FYLrFghLmIfR1KRq%2FYkO38g3%2Fie8JWcf0o5fdROXa66AcgFwC3SlW4l%2FtqPrfH9YmD0T1kmVJIH4mVZNBfHmgiLaIQxZxKot%2BhHX0SNSecdpqSLxIHuykc49InFcqrT6GFOHNc2%2BlndatbuemqEtd7TfQGsl9yZjrg5s%2By4ypzVHvLYN3ay5M65Rvu8R7%2BTw1VmuQ9PWdBgj8CPX3Yasov4C49LGX%2B%2FSNPOkyvlzqAj98uPPuaNgyChddi5V6egN2qqCj6RX525D5GVv4fpVU4CBWg%2F35XJ448Awj2Y3GrMoPz8POWd7kYgtCbSmPD897o1fC22G2pGeSG%2BPrf1xEZBLJuDtFBq44emIHwXpyntQyewl82II%2FB8p6E8WoNa52yVTGIeNxzgqHLPGsETp9A9GQiYdZiTrdR1Ps083VyOskL9wZZKDLmwpR3ScbnhE40Y5seZNQG4FZ899KL1IfYG9%2BiY4S7AYrExWJCFwtYHF%2FykPh80r7wuH6m39oVCIF1P2aMpTyv%2Fi4b7xNzhkF02j8wwPc%2BohfzsW0viarFYMhv4Zlsi2KtLyc9zMHFZjbl70s7q%2FLBsAnuU3q3MIXbj78GOqUB0YI4NJ63H1KcrOtniVG4EJuvEzFiUj42kZCwumR%2BSI6hsgocOJQ23n72VgCnE77Wjze%2FTqhHYTXof1RARdKLDlygK99QIHEQVM7rCyq33FtYKeJSdbQDMqJkIxhlpXdvfPXWuihzrnj4%2Fvz5BUiJSMW1mi6GX0Lo7LZ3bCsUv8Ie%2F9CRn85bVuARwShF6ZsnceyQeyWzQPi8C7FpzlrPbQz6SMlX&X-Amz-Signature=84f90fe82dd5596c2d1316c609bacf6dac526baf7b7c0358a9729e75c9c6bcec&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBO2S73%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGrAibR8EX%2F%2FVkSx1%2Fi2Vc1rAke47Wgacw5RzTDFncBQIgRnGMH0Ig0dekF6OqG1pnJcE2Y0IMMTVxHDrYjoyDxEAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIC0cBTx7tOcAoF2yyrcA3caHZhWBQkiKr3n4OyPMWJlrdtnXNaqTHT1G6ivHd%2FYLrFghLmIfR1KRq%2FYkO38g3%2Fie8JWcf0o5fdROXa66AcgFwC3SlW4l%2FtqPrfH9YmD0T1kmVJIH4mVZNBfHmgiLaIQxZxKot%2BhHX0SNSecdpqSLxIHuykc49InFcqrT6GFOHNc2%2BlndatbuemqEtd7TfQGsl9yZjrg5s%2By4ypzVHvLYN3ay5M65Rvu8R7%2BTw1VmuQ9PWdBgj8CPX3Yasov4C49LGX%2B%2FSNPOkyvlzqAj98uPPuaNgyChddi5V6egN2qqCj6RX525D5GVv4fpVU4CBWg%2F35XJ448Awj2Y3GrMoPz8POWd7kYgtCbSmPD897o1fC22G2pGeSG%2BPrf1xEZBLJuDtFBq44emIHwXpyntQyewl82II%2FB8p6E8WoNa52yVTGIeNxzgqHLPGsETp9A9GQiYdZiTrdR1Ps083VyOskL9wZZKDLmwpR3ScbnhE40Y5seZNQG4FZ899KL1IfYG9%2BiY4S7AYrExWJCFwtYHF%2FykPh80r7wuH6m39oVCIF1P2aMpTyv%2Fi4b7xNzhkF02j8wwPc%2BohfzsW0viarFYMhv4Zlsi2KtLyc9zMHFZjbl70s7q%2FLBsAnuU3q3MIXbj78GOqUB0YI4NJ63H1KcrOtniVG4EJuvEzFiUj42kZCwumR%2BSI6hsgocOJQ23n72VgCnE77Wjze%2FTqhHYTXof1RARdKLDlygK99QIHEQVM7rCyq33FtYKeJSdbQDMqJkIxhlpXdvfPXWuihzrnj4%2Fvz5BUiJSMW1mi6GX0Lo7LZ3bCsUv8Ie%2F9CRn85bVuARwShF6ZsnceyQeyWzQPi8C7FpzlrPbQz6SMlX&X-Amz-Signature=1d26989596d07d30fd776398b3b988703fb92834aab6f992c32798fa399d6d95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZDII54S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7XhLhf16Icv4tTniqMrhRlRSgge%2B2F0FFxBMo3lqMsAiEAs%2F%2B6mrwn5v4tsMwBHvRnzgyuT%2BObyZZHWF9WfCD%2BBXwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDN0kOW2%2F4gHvI1v0gircA%2FbXoMuW1aS%2B9odiKxEw5oNfB7vHFOsWkEmkbZZvkTZi1J6mMw16S5e3oTCRuttlx%2FDiLcpiPkGlSndFOuKM8Bl5CpRU6Jq7ZGU0%2FRKGLpBXNcIuBv23uVDf6O3HQUnZ%2B%2Bc1u%2FlH3vnFbCYByuF6kchd4XTQhb1beTS0MEey5xwRvrQa4VXdO%2BJwfnGMNMAwTsLIzG7iJSt2y%2FTP7iG20Nv%2FGo9t4aFcvJc3n%2BljSoDrZezjMqziX7jXBROFVbumskE36vKVU5gEwh8Wj0Q6hqcir4akopfsb5DkrsJpH5j1XUyHt%2BYLPE5tLuXNLOCDR9z6CoRyGVaruBxak5oSGigkHX1sw2vKY48Lms3VHE7ZuexrCHafVNI%2FpyQUs2SU9XnVVWiB6pkpEq0mu3LqBGl0m3gmUpZMFJbno1YsL%2BhykT1RC6bQD7LhNdw4MA2tUBCGzhtA6xE8m9Zu67BRoAfTC1CpnV3TaY7LqDPOGqe0wGjt3jQTnK9XXIDkzD0nlEvHJJoAF5WfmElHWSkJTasUQNfOVvxwPQs%2Funmphkse6kCETxiGWHlIsFldIUp%2BXzVc%2FXFicvG09esqa4xJCHXHmcU3DkYMdMYItRFknUJxvFSXlnc3GvmzhlzDMKTbj78GOqUBwTRW%2Bx60XoUbIog6LHng7tjVYz%2BfuPxM%2FuDMHW%2BZGXQ%2BkwfJtnXczZedwks%2FYQ5m3RI%2FlV4H6Au%2BrajYovjhZAWM0OhQrco361diytUDDPkA3JRownZCkp540mcWTCUZmyy34Zx%2BmQzSMmvvvqVxmUk9%2FhqVcNmwlH1FqJP914S0Fwm5Fh9nKILR5CuppO7bnmrHG9dNFMGIocbxD2Bug2Ygz9S%2F&X-Amz-Signature=1824e5278fa44c4b6a8726d539ae359d5d89a3c907962b0458586cb3b773d922&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUF5K5Q%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC83jx4Z4AF1UBGsK0QspZom%2BCHsIrAs3I8Enw1WkrskwIgTM%2BVBByi%2BKJeVSSvu%2BpnzdMPvIUb3RpQqYnXeZrHyYQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDASA0TeZPiaGwZXW1CrcAxrB5U%2ByVsadnDUqGVbmdTkm4fgQlaNf1%2FR2f2oNCJPesnQ%2BdXollbe9ZjADt0brlPIudzyKjsA1hDdjoVdumhxYMoD4%2Fa8zeJ1MNJEwrZMwe9nEIb5yjdg7bVyvFAOCbt6vOXYh67kt2nCwQpNkjNF%2B3XRZQE2ioH4W1ota1vWDcH5KYLOPsxd73sC0plOFOM1S83Bj0Q7nb2xo3xqAu%2F9Ue%2FkQWlVSpjAV1WouszcjCTzs74ZB5prah%2BqkE%2BUxRmi2QzL98WzstkOnj5fybBFaNB6a%2FSggDWl02nmXqQn6%2FpOAbiIUGoUZVXFu9olBJODCqKgW%2Bu2GBrV%2F253ni3ebkXHgmPobcTNL7AAir7qNg%2BeeeFCzEq1D57%2FDmEtusDemFvDpAwaPc0GK%2BO7jVglFMVF%2BvVetb%2F%2B2fL0ZGHFcnLQL6X5kwbygZkEs01aWc9TksAxjETqM9Jm53oneznDf%2BVlbttv47UrQN7mCVoO0PELlWiEqdCYnc1znnRJ4EFpvy9HjAtM87Rzsje2Ztw7GdmFWW9XehYVhgR6ystXxFuyFQNErP9oafAuWIZaFvEbqX5azeeMN%2FiQYuxBbNIbs4myhTdp4O37x5rXuwC5a6e6QwIZfkANdy2AnMIXbj78GOqUB2AJjt8olHfLSJME0JCAulQBSyQtd5rhu0fNKIkdUCjx62KdewZce39lm%2B0C%2BjNcOYLlaR3dzYIBAwY6MXswbuCf1Qnn0UETWklUm8T%2BJyilDahniMc%2FOrTyv9rDSbUbOH1O4tBqD0vAZY%2FQKz1IQt2HvjhSfCyRmg%2BLKABCbkBGlsibaDUxzzS7VAMpi%2FvAZTFwBoMg4U3cVWSm%2Bw1sRNudhwNnX&X-Amz-Signature=34a4a0eec8df8d2ad2d9314d97292951729489e8276029a0f9c72aca37072f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBO2S73%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGrAibR8EX%2F%2FVkSx1%2Fi2Vc1rAke47Wgacw5RzTDFncBQIgRnGMH0Ig0dekF6OqG1pnJcE2Y0IMMTVxHDrYjoyDxEAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIC0cBTx7tOcAoF2yyrcA3caHZhWBQkiKr3n4OyPMWJlrdtnXNaqTHT1G6ivHd%2FYLrFghLmIfR1KRq%2FYkO38g3%2Fie8JWcf0o5fdROXa66AcgFwC3SlW4l%2FtqPrfH9YmD0T1kmVJIH4mVZNBfHmgiLaIQxZxKot%2BhHX0SNSecdpqSLxIHuykc49InFcqrT6GFOHNc2%2BlndatbuemqEtd7TfQGsl9yZjrg5s%2By4ypzVHvLYN3ay5M65Rvu8R7%2BTw1VmuQ9PWdBgj8CPX3Yasov4C49LGX%2B%2FSNPOkyvlzqAj98uPPuaNgyChddi5V6egN2qqCj6RX525D5GVv4fpVU4CBWg%2F35XJ448Awj2Y3GrMoPz8POWd7kYgtCbSmPD897o1fC22G2pGeSG%2BPrf1xEZBLJuDtFBq44emIHwXpyntQyewl82II%2FB8p6E8WoNa52yVTGIeNxzgqHLPGsETp9A9GQiYdZiTrdR1Ps083VyOskL9wZZKDLmwpR3ScbnhE40Y5seZNQG4FZ899KL1IfYG9%2BiY4S7AYrExWJCFwtYHF%2FykPh80r7wuH6m39oVCIF1P2aMpTyv%2Fi4b7xNzhkF02j8wwPc%2BohfzsW0viarFYMhv4Zlsi2KtLyc9zMHFZjbl70s7q%2FLBsAnuU3q3MIXbj78GOqUB0YI4NJ63H1KcrOtniVG4EJuvEzFiUj42kZCwumR%2BSI6hsgocOJQ23n72VgCnE77Wjze%2FTqhHYTXof1RARdKLDlygK99QIHEQVM7rCyq33FtYKeJSdbQDMqJkIxhlpXdvfPXWuihzrnj4%2Fvz5BUiJSMW1mi6GX0Lo7LZ3bCsUv8Ie%2F9CRn85bVuARwShF6ZsnceyQeyWzQPi8C7FpzlrPbQz6SMlX&X-Amz-Signature=91bcf97a552964ac63ac83ccda8de5705d7d500f7edfeb4a744b7bc76c199de1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
