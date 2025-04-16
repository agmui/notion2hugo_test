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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBU6MBP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD02xwtWEcQA0MD6QzgjH6Q9SEuLa3Rjm%2Bla01dsK5ZkQIhAIVz8csYW5Wo5b2UUGSPJDUTSup22B2Eeck66YxMrklyKv8DCEcQABoMNjM3NDIzMTgzODA1Igwprgcmy4%2BQQ164oMEq3ANNsoKUncLEZVIjDCFjWDmZmdSz2dR86lI6YIU0PerwXHRjpywGa3lg2IHBrONUAvrzqSdHVYG1aawm8GUKxe3uHi6Ojrnbg5yPjrXKOijRk2aZEkR%2BbK0mjkM02dK6CvGuExKvFfSgH%2Fe09HziQUH9pKgT%2FbbWyTqjV0nkIQDQzW3Qr9pTsaGborar81l%2Fom1FZh0bKkhRnRZrwqpm2u5XeviqoDbtEfxtWIofK53m0Ch%2BcoByskCOi1w4nMBw%2FiYSGLw5hPR1f%2FSmQE4prtIY8wr7FQup4Rvqi5LnnxNBS6sd272dGAv4uZ787A0Ygq36ub88o0Xg%2FIVhj2AyawKmAPzWEG5cf%2B2OVnFtuT77StSYw334gt8LXNesY7nib5732smFLp2r4DUMLQul98Tc%2F1wxuDCqHPdCGlLjH%2F24CKW1sJ6I%2BdUmHmJnc%2F%2B7pdElLZ9Xd%2BbdgGCXvfH%2FmK4YFZVnhlVStgkjqGnIUUEI9rLllbkPkuirQvsfJFxXfgQ9faBs6c8LxpiUGTNzOdtz5TCgmRtpdBoNKQ2KHXxT%2FjYpaTLNqMsB8fbjgqwN29U%2BBylqq%2FituymNOuXEQlvsYKTzT2D2sC1VW6ERny5dUDlP3H1GIso%2BpB40%2BjCB%2Bf6%2FBjqkAQsGapOP8hGHuD4zIviWCeug1%2BIRt6Dxb4XA0PmEVmVSmV%2F0lyizCP8uX6vrOGHpDEsUX7KbULAiwqJv1OI%2FSE5LcQU41dQhYkEni6TvLdALR7DyGTjjEV29JPoCqjOeswY3TWC33X3AxpGdtikdlkZac7fp9Dm6fVNqJVo5Pvb273sKEuxq%2F9sUo4WAfOs3mp6Q24a8Vf5DPZeMM0pud6iiYnC8&X-Amz-Signature=ef00aa827e0d8987fba26d67c2bb6c08949477607429b1aabb9c58b456cc9087&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBU6MBP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD02xwtWEcQA0MD6QzgjH6Q9SEuLa3Rjm%2Bla01dsK5ZkQIhAIVz8csYW5Wo5b2UUGSPJDUTSup22B2Eeck66YxMrklyKv8DCEcQABoMNjM3NDIzMTgzODA1Igwprgcmy4%2BQQ164oMEq3ANNsoKUncLEZVIjDCFjWDmZmdSz2dR86lI6YIU0PerwXHRjpywGa3lg2IHBrONUAvrzqSdHVYG1aawm8GUKxe3uHi6Ojrnbg5yPjrXKOijRk2aZEkR%2BbK0mjkM02dK6CvGuExKvFfSgH%2Fe09HziQUH9pKgT%2FbbWyTqjV0nkIQDQzW3Qr9pTsaGborar81l%2Fom1FZh0bKkhRnRZrwqpm2u5XeviqoDbtEfxtWIofK53m0Ch%2BcoByskCOi1w4nMBw%2FiYSGLw5hPR1f%2FSmQE4prtIY8wr7FQup4Rvqi5LnnxNBS6sd272dGAv4uZ787A0Ygq36ub88o0Xg%2FIVhj2AyawKmAPzWEG5cf%2B2OVnFtuT77StSYw334gt8LXNesY7nib5732smFLp2r4DUMLQul98Tc%2F1wxuDCqHPdCGlLjH%2F24CKW1sJ6I%2BdUmHmJnc%2F%2B7pdElLZ9Xd%2BbdgGCXvfH%2FmK4YFZVnhlVStgkjqGnIUUEI9rLllbkPkuirQvsfJFxXfgQ9faBs6c8LxpiUGTNzOdtz5TCgmRtpdBoNKQ2KHXxT%2FjYpaTLNqMsB8fbjgqwN29U%2BBylqq%2FituymNOuXEQlvsYKTzT2D2sC1VW6ERny5dUDlP3H1GIso%2BpB40%2BjCB%2Bf6%2FBjqkAQsGapOP8hGHuD4zIviWCeug1%2BIRt6Dxb4XA0PmEVmVSmV%2F0lyizCP8uX6vrOGHpDEsUX7KbULAiwqJv1OI%2FSE5LcQU41dQhYkEni6TvLdALR7DyGTjjEV29JPoCqjOeswY3TWC33X3AxpGdtikdlkZac7fp9Dm6fVNqJVo5Pvb273sKEuxq%2F9sUo4WAfOs3mp6Q24a8Vf5DPZeMM0pud6iiYnC8&X-Amz-Signature=1585a4398ddea831416670a3700c92f6869554a91e735cd769dfafc29f5c98b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDKIHDM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiuYnJc39G2URBm4vJBsoep0th12U4BI%2BhOAgrRlmoNAiBt9hY1FoOH%2BdtIBsKZ76i8LWLRw0zUQWGSn56jRcC2Qyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMMpR%2BbO0k1H6li7tdKtwDcMRzPZBWD2JM%2FES56LddAQxIz3POKf8fmmp%2BZ5kJEo%2FsIi7GvPyrxcGVL2wsGUGXLu4UHFbw96383Dk%2F04N5XrY3M%2Fo0Kr3%2FiFW%2BD2SgygXwjXnXQziUMJtfiFGcjeo%2FThXGTJ2O2wg1eEoVD%2F2IuW5urKxWgQ9wt2BtmfCWMu%2FlD%2BaowBRRq484T6z9KewuhTQPBA6oIuPxH6Ez5Y3e6Ir%2BzQzOFRYk%2FfHZk7%2BuXt9PV2bfeEWasr4TBWKrNydFpKiPQFKJiKNsBsjJp%2BRY5sNYVdSSueYtRb%2FhtMIy%2FAHgBDkmCQ4FQ6NyE%2B7drgfS0D7j8i3UPgnpStYNtYlS65fAviYyAgcv571bJWSEywWMp%2BPZEHBPwaTmvdg5yFqZ1jZLMdVWXT3vdBSIKxveo6vTLGE%2Fxk0BHXRxEqLWHuVAvHsdFXIF8baSvwQj%2BSDf%2FDvvvnqMfQ4W7%2F%2FKf%2FrXMZbjxCtTMfm8uG%2FZ8pozHQ8HogZvuWvKExB2ivXptHq5erJUJcRKb3L2BqzG08wa6ARTk%2B3rnz0wsxA%2F9eeoUr45ydN4JUBPt23BrsDzJqVV%2BBRVISt9Hf8B1aZxlVWUq3nK1HNHfe2MgNyPUD8YGrG%2BDQ45fLPvEJJvaUUwvfj%2BvwY6pgH1NczwNJLuSAUVnzOp%2FyXdSsLObGcMePd8mUuLUz0bdUVsliyNOK5XgvoEwt10JtPOxw5Lji%2BsMfvu5tjuqWBrtbJ4ysFU0qQKGV472Qsd3WoRRB0Ng7ciBRQ%2BTuAjWJbkluueM9nmpzpGbjU6fK7fAQXm2HV2cJJi1vF6NDzA4RrEqDe9J0v0tma31%2Fql0UZXxAWg7jYaSS3sTgUtBwr%2F2Plp4ALR&X-Amz-Signature=2aa6890d4227c0852ceeba6df2724cc89e64910d60b6c3a18eb23fc73b1df71f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67WXP34%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq0syQtPg6f1gBpV1EQAYBCQOgpYEb%2FY2mKO32idCpcAiEA2K2%2BCI1iB79Lk2HLdgtwZL3lsiIGEnMwnqCGTug%2FwC4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEWWiPCFyNYEVX8fJSrcA9f9pojna2u4oz1Y7IB1duJmE5Qc117IgJKxLaXcqO32gRRRb106r4494Jdo0QkBKaBGNmeOYbm95GYB5JrjkOf5GV%2FFuFhnMYCcT56qEjjkwEuW3Dq39z2PBz5pxVO5M4NQWGLax2FWuUmGdaZq7jcepoiN6qPEO1JyFBGVnKKUDUONlPcDrQtVAIUuvRHeBwK31xbRiPEnJwLxKM7v3xjjQNRMKt1sZvHe5gC7uMgMuIOfcnSvID7rskdPVANsgRfXW%2B8HpLNmRY8Y%2Fvd42sNbkF2y7VgmnjHWh0au9YQ792z8fygkC%2FdgvOkmoe7dT8cBWTv6NquKsbGXoW8NJWLCKSP6%2BmhLEkM2zpVwz%2BJ4GeXEv9sg2z299iklwAJfCO%2BYiRxSh7cTB4DwfoM3XQ49JBgLLCJqpycwukB%2FCHjICDLsssfKPJ6wXgVlN42fldxjJ7E79ReC%2FItAhq1RCzOrV8gQBoXQ64CBmiQfbr3skl5IjvdwsB0VmcrDrJKMWXXi1QiKZWtWT5MdVYy3HvoAeR%2Fb1B%2BnfgnXeMIPqbnaButdex844%2Fz90FmQe6ZFw08RyDWNKnx9oN7AP%2B6WS2DkFvkF1MGYUXqWt4WpECSvhy2b1pp6tKgZ80%2FMMMT4%2Fr8GOqUB6jPIQTh5%2BI5%2FDsIgR7AVNLkSUbYMs5GaOeuSXHHHZCxJdO7Zx8Woi8OW5Ih7F6jB4crhgIHe8hGiHhkb2fpOmdTtDwxQEfhVA6cfd%2Bq2XXer10x5wRUSyz7tAPSuc3YRVIdMkTz4mHsOC%2FHfhs0pJpWdrBLadk1gcjPaERETHD3I3iybyktOp40aDHQTg0m7nuPlqcb2thUJCqm32Dd4j1kdXkEa&X-Amz-Signature=17067d5da9373c3f2f065f4f57c1a1ffd7705f41d834b3b2e76a9aa13a3ad136&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBU6MBP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD02xwtWEcQA0MD6QzgjH6Q9SEuLa3Rjm%2Bla01dsK5ZkQIhAIVz8csYW5Wo5b2UUGSPJDUTSup22B2Eeck66YxMrklyKv8DCEcQABoMNjM3NDIzMTgzODA1Igwprgcmy4%2BQQ164oMEq3ANNsoKUncLEZVIjDCFjWDmZmdSz2dR86lI6YIU0PerwXHRjpywGa3lg2IHBrONUAvrzqSdHVYG1aawm8GUKxe3uHi6Ojrnbg5yPjrXKOijRk2aZEkR%2BbK0mjkM02dK6CvGuExKvFfSgH%2Fe09HziQUH9pKgT%2FbbWyTqjV0nkIQDQzW3Qr9pTsaGborar81l%2Fom1FZh0bKkhRnRZrwqpm2u5XeviqoDbtEfxtWIofK53m0Ch%2BcoByskCOi1w4nMBw%2FiYSGLw5hPR1f%2FSmQE4prtIY8wr7FQup4Rvqi5LnnxNBS6sd272dGAv4uZ787A0Ygq36ub88o0Xg%2FIVhj2AyawKmAPzWEG5cf%2B2OVnFtuT77StSYw334gt8LXNesY7nib5732smFLp2r4DUMLQul98Tc%2F1wxuDCqHPdCGlLjH%2F24CKW1sJ6I%2BdUmHmJnc%2F%2B7pdElLZ9Xd%2BbdgGCXvfH%2FmK4YFZVnhlVStgkjqGnIUUEI9rLllbkPkuirQvsfJFxXfgQ9faBs6c8LxpiUGTNzOdtz5TCgmRtpdBoNKQ2KHXxT%2FjYpaTLNqMsB8fbjgqwN29U%2BBylqq%2FituymNOuXEQlvsYKTzT2D2sC1VW6ERny5dUDlP3H1GIso%2BpB40%2BjCB%2Bf6%2FBjqkAQsGapOP8hGHuD4zIviWCeug1%2BIRt6Dxb4XA0PmEVmVSmV%2F0lyizCP8uX6vrOGHpDEsUX7KbULAiwqJv1OI%2FSE5LcQU41dQhYkEni6TvLdALR7DyGTjjEV29JPoCqjOeswY3TWC33X3AxpGdtikdlkZac7fp9Dm6fVNqJVo5Pvb273sKEuxq%2F9sUo4WAfOs3mp6Q24a8Vf5DPZeMM0pud6iiYnC8&X-Amz-Signature=7cd027fea512fb2b0328c22c99685802b03157e6eda860d218c16b42dc854d28&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
