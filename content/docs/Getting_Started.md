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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JY5WFSS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDARn0bK9Eo2kWD7snIQDbYm6MZUHZsNH8DJVmF6neWqwIhAMybgB8hKD6JEHy4w3rZYEDUwzqi9ymbASkT6UPt20%2BGKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVmKOzIRRLIAoTPLcq3AO993uWSZjhefWdXPfXSc%2BiwDN%2F%2BLfaRkRgM4Uh%2BxAPu%2B4ss7pXXnVa%2BuovkdBKAJh%2FOw7j974cyi3bbClj7DxmZmhZnEX70pWNMRYuHnXQ9%2FTBerqVzCzduKeBw7qpNaoRyEOVSLxUlryZ9WOvDHrDhTzbgXcPMJKy1YxFmgt4bTMtr1IDqnceMPXqhZnvPImMPVPECYsNRbECLwuIgKpkrDesoQdXUqbHDaekXjY2mUs0LjhcnrFLS8tlX708sNEwedUKon25z8s%2FW1s9IClqUoCgCtOHhuF4f4ZlyoKoOPjPEOKywdbv8TxkRwE4dL52Fn2YjEvBg7YV5k%2F37TDcO2uoUMOubTzOuDZD6ps8ySMyfqLuWfVMfWytzH3m9yosCqBTzxrRgqLoFJ%2Fjrro5C%2FpPDOOZQA2akvZSDQD%2Fl5ZGatvBIM8O1sa66MGh3NcRqrTWtcyvnVOeyf7wsGMpmCEJ7evvMAtD3ArOg2os1DU6j8biJ2Xx2N9yOkS7GP%2BWm4zyFO8Q8bZkGSGkPg1IiQ%2Fk2xiJpXNem9L95dECqg8izsJbHRGeZzN0%2BkjdhBLJece5%2BkXOhCJFP%2FrhCRR1aGqzV0jIswEOhFLyCZ5oWj146Qgpr%2FIlAxnzhTCM3cW%2BBjqkATgUNtVkucImBIeU34D5tfH6AAV6wv1yFRdOAK1xJPFfVMJE7V9tg468FClaW1wZcssRxQUqEFzVG0HKoJyb5d97Bn5xSeMr8yGFOe5XRuSPUBQ0%2Bm%2FkMRbn0oEFnGSNebH501Dj7sE3VRhW%2BGsVVb7FGDjCpavnFzTaiwtLEOYPMIwJIJ40Jb%2BpqR4fDajUBRnjjLQxnvh3xnnYtqmdxaoB3z%2FO&X-Amz-Signature=f7e02f471e490eb4197f96f83a218f132b6a94bbf783a1e00fec4ffce2ca9cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JY5WFSS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDARn0bK9Eo2kWD7snIQDbYm6MZUHZsNH8DJVmF6neWqwIhAMybgB8hKD6JEHy4w3rZYEDUwzqi9ymbASkT6UPt20%2BGKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVmKOzIRRLIAoTPLcq3AO993uWSZjhefWdXPfXSc%2BiwDN%2F%2BLfaRkRgM4Uh%2BxAPu%2B4ss7pXXnVa%2BuovkdBKAJh%2FOw7j974cyi3bbClj7DxmZmhZnEX70pWNMRYuHnXQ9%2FTBerqVzCzduKeBw7qpNaoRyEOVSLxUlryZ9WOvDHrDhTzbgXcPMJKy1YxFmgt4bTMtr1IDqnceMPXqhZnvPImMPVPECYsNRbECLwuIgKpkrDesoQdXUqbHDaekXjY2mUs0LjhcnrFLS8tlX708sNEwedUKon25z8s%2FW1s9IClqUoCgCtOHhuF4f4ZlyoKoOPjPEOKywdbv8TxkRwE4dL52Fn2YjEvBg7YV5k%2F37TDcO2uoUMOubTzOuDZD6ps8ySMyfqLuWfVMfWytzH3m9yosCqBTzxrRgqLoFJ%2Fjrro5C%2FpPDOOZQA2akvZSDQD%2Fl5ZGatvBIM8O1sa66MGh3NcRqrTWtcyvnVOeyf7wsGMpmCEJ7evvMAtD3ArOg2os1DU6j8biJ2Xx2N9yOkS7GP%2BWm4zyFO8Q8bZkGSGkPg1IiQ%2Fk2xiJpXNem9L95dECqg8izsJbHRGeZzN0%2BkjdhBLJece5%2BkXOhCJFP%2FrhCRR1aGqzV0jIswEOhFLyCZ5oWj146Qgpr%2FIlAxnzhTCM3cW%2BBjqkATgUNtVkucImBIeU34D5tfH6AAV6wv1yFRdOAK1xJPFfVMJE7V9tg468FClaW1wZcssRxQUqEFzVG0HKoJyb5d97Bn5xSeMr8yGFOe5XRuSPUBQ0%2Bm%2FkMRbn0oEFnGSNebH501Dj7sE3VRhW%2BGsVVb7FGDjCpavnFzTaiwtLEOYPMIwJIJ40Jb%2BpqR4fDajUBRnjjLQxnvh3xnnYtqmdxaoB3z%2FO&X-Amz-Signature=e44d27c912c920196b7da6a7b7ab32cd6d0b8f863ab002713c765b3d7fb32c60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6INDLON%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID%2F5vR9TbCroTCjlby6VqoAf3na5Yp5CkTcF0mVN13WjAiAw7HwexucRCeJy1UTG8WcTtg5wsewLNMKotL9AzujNPiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz3%2B9jR7wMR1wWuW2KtwDI%2BNxo7U8RywwfCzQA9bhMCukaZJ2IIywg%2BchgdvXOKvd6G%2Bfdyvz9yEn9tAK%2FIQXV8JBgMuL7lawzs2hgTOjRKqr5t%2BxGw%2BYYeM4%2BaLXotvTpYjUt944k7x09PQK5gfBxj3rxCANJC5mgm%2BQljEd%2Fhg5XsY37oCk3VzmyoP%2FFlKfAMX2usEtgvPkwwXxn0nZiE9kLfnjJuWd6kPmRB41MsFTF%2FeA2GU2v50jov4BjVz6iM9HOsyqdBgUXVCKiTcgKvMUSGM8GZ3NTMC5Kn55N%2FrvAbsqQUbYBCgW6bC%2FixWy9oMyRE2Fxku2TQDE0HLVQBtfMa5l6BJ77IAi1EydHMPVvWZmwNxJby1l0E1ba57CmXN4pAJtGB3MCJ1DS5A2oWDXXaZaOE%2BfuvdI1vtB23Lus7OpYsOS7JvNTR6qrncd4L7CcyH%2FCyVYTyhBZAxspzVrawpfmLOeZwaiJsVmjEz7JlOcY%2Bf%2BUqJ%2FAifo7q5tZa1yFo1IaZLfXwPikoHr9BMwK4P%2FBszcW%2B9m2BgRBEsURCnOI5v9mPGxus4DnmtvczD4YHHUFBQ10ntt5kwCDgc%2BHGqgPOrM88a6JkO8Zv1h7y8el%2FX8A%2FPU6Oqc4R%2FerWTxRGngAWZDdyEwtd3FvgY6pgHJjPsCuHnkOeFS4a6wprtQAENtrI5lWcgtol1aWQuiEWo3%2BjwfrIRsXOme%2BQ%2FqGc5TM%2BjDE95d4Qsl75c4QW8IdtP7M95Zx1d3zYKMNjcAWGtwj%2BXc2bN0GAuINL0h0cUBWsL9T2bWLD1CWEg%2BTGyPt4Vk2fQzIx8oremxGqUGcIopdO7MYIYJuEo3K14Pw4Qrzpxc1Rd5DMcKiWIsOZBPdZYm9h0m&X-Amz-Signature=865d4f29fcff0ced2a7fdc1a1d9d576453c892554d89969b86149b86e23625bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMYPI7D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCT9lR2VZtdRT8OBH5zCZ%2BowhPMCaLJ4Sq3AJ%2Fa9uJyAwIhAK51uQ96amGzLkUA6iteYK5rBL6%2B2G%2B7OiFwPK4TTBpRKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZXcdLjGOAr95o%2FIq3AP5mdLfMgUf8aeYSnqFo7jkFH8ztFNwfuHBYR8Ub1QcFxrNiNm08M58UugNlN7ZT%2Bl2cmv%2F7VhRxgBTQcXVT6cL1Fu5eDsfKdSynGQ4sIC8aEoGJA4HfsJ9DLfdokfZW%2BHLtBBBzesz%2BnnjPbgdzvKsA1hoXNeo6yysuUsVdSJCz%2FKuBHxdjZPlSjd1jf9R%2FqjNAZPsnDI%2FBARdO4YjxJXbKDmuHrqxAIrq3dHqKBT9pDfNwYZxye2vH5WyjcU4MV%2BfHEPwUgcLfbW5QC5MhQ5QW8030weHjEHaol3izUE%2FM97R%2BC%2Fq1YMI75vK9VmzcYvywMckA%2FEMpdnCF0AWON%2FHsD5tP0CEAwGYjjkHYIolapIqI3BQG4Vbfot2Ai4WAwNPxVtJa25xhsBuCNOhirvitDeKYLjwhlSRt3xOERoFBlKEes26QSuRox2BHp1IqFvWr3oUbfFyK54D3HTJVPUPfef%2FvbegmHzADoFZcWoO%2FlvcYyuJ5BFAftUll0Qq6k90Y%2B82D1VoRv27eHKpLuAVRXMKweGLvqTrrFwVgBPkbRcASEAKGPZijr72nhjJTFFMrPiA%2BQArQaMTaoJ8MmXSkO4ZUt7PObkZ10kHsGdoXeG5Gadfy4udSTSLzDCQ3cW%2BBjqkAd40buJS3iF2%2FaMZuVukKrnaNLxktJrvWxg4RRBKSifWQ6dWDjKudsdgdKb6XZgLVDbgL0XiYTY3%2FAly1qaIiB%2BxzQ%2FAaDgZSeNYjXzsJGFuoupm1ucTSGRrAypdz92n3sZTZxXT%2FCfKyXXuF%2FGPjLVjWn8FsqE4mODD1ZR%2BtEZMVDEkjFbJsBCWdB%2BT21%2BAR647dgCidCdhKyFVlKDV4kKquawQ&X-Amz-Signature=468596f959feb294f1b84d50963466b64aaa55e378a7f91389af10ecb3428912&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JY5WFSS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDARn0bK9Eo2kWD7snIQDbYm6MZUHZsNH8DJVmF6neWqwIhAMybgB8hKD6JEHy4w3rZYEDUwzqi9ymbASkT6UPt20%2BGKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVmKOzIRRLIAoTPLcq3AO993uWSZjhefWdXPfXSc%2BiwDN%2F%2BLfaRkRgM4Uh%2BxAPu%2B4ss7pXXnVa%2BuovkdBKAJh%2FOw7j974cyi3bbClj7DxmZmhZnEX70pWNMRYuHnXQ9%2FTBerqVzCzduKeBw7qpNaoRyEOVSLxUlryZ9WOvDHrDhTzbgXcPMJKy1YxFmgt4bTMtr1IDqnceMPXqhZnvPImMPVPECYsNRbECLwuIgKpkrDesoQdXUqbHDaekXjY2mUs0LjhcnrFLS8tlX708sNEwedUKon25z8s%2FW1s9IClqUoCgCtOHhuF4f4ZlyoKoOPjPEOKywdbv8TxkRwE4dL52Fn2YjEvBg7YV5k%2F37TDcO2uoUMOubTzOuDZD6ps8ySMyfqLuWfVMfWytzH3m9yosCqBTzxrRgqLoFJ%2Fjrro5C%2FpPDOOZQA2akvZSDQD%2Fl5ZGatvBIM8O1sa66MGh3NcRqrTWtcyvnVOeyf7wsGMpmCEJ7evvMAtD3ArOg2os1DU6j8biJ2Xx2N9yOkS7GP%2BWm4zyFO8Q8bZkGSGkPg1IiQ%2Fk2xiJpXNem9L95dECqg8izsJbHRGeZzN0%2BkjdhBLJece5%2BkXOhCJFP%2FrhCRR1aGqzV0jIswEOhFLyCZ5oWj146Qgpr%2FIlAxnzhTCM3cW%2BBjqkATgUNtVkucImBIeU34D5tfH6AAV6wv1yFRdOAK1xJPFfVMJE7V9tg468FClaW1wZcssRxQUqEFzVG0HKoJyb5d97Bn5xSeMr8yGFOe5XRuSPUBQ0%2Bm%2FkMRbn0oEFnGSNebH501Dj7sE3VRhW%2BGsVVb7FGDjCpavnFzTaiwtLEOYPMIwJIJ40Jb%2BpqR4fDajUBRnjjLQxnvh3xnnYtqmdxaoB3z%2FO&X-Amz-Signature=f255038b4aea55ee9eeb1c73de54d211b9d0ffca6fe5acf93a973dbd3a01bb41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
