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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVU7DZEZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4REO7F8W4FFUGUtDrp6EOVj1rI5fkYSO%2BypwUIVRnDwIgCbxaJtbi4h1TYtS%2F%2Fr4fKMv2FsuDDkSwAGsYqM7NeVEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY83uUnVEgp%2FaaVHSrcA25ExnxXXchF3M1JNa69KEJnMfJ4FAkKS6M9aWXFyY%2BISDWjBLiX8B94nX47uDcDV1QPdncmBqxiFeaXAVEBFhe8sZWp8FnVVNQHDF%2FWXv798lT1I58BQjeLcr8VUGova%2B%2BNwWwiJI4GfucwctJpEU24EF4NTeIXwBB%2BOb6h2YTBf5ErIdq4MQ%2FRLiLWmR20JLEOb3rGvt6Lna8vQ%2FpRW7OwSD5Gx9p9Sqk8vkK8rOrDyM%2BKfC7pwhHV1pQ1WqKSEB5jBL6waysVbv7GnJr57uzz5bErv2jQjtUT3jhm7oVaZsGT2XCd5FNX7PvSfIVlvHEt9fmWSjWcmITzKI13yQWDE0hVbA1%2FEMLdev52TdixoL%2FLNgGBiq%2FJL2CeOaHJh%2FAnX30vAVCH5KfG60W8zBC%2FXSUHHJW3J4gdkX7%2BFUyWuN0Xc1TotyB1hKwCyht9P5%2ByEShUfBd4%2FF9VLyOL2y3Y3oVLV3XfjiedzBe0Rd7HDiRTcmD9ARsywiygyNf2rBz6ye%2BAIOfMtIO5l03cDQlysHZTcCpEYUokTKSbqjQPAxdo5CAMfOKw3slr20lOUjo3IvhJGie84dcFFlHA%2F0Z1Vda%2BngJCeoqe7kupqWOTlBbpQkdO%2F7Gq3hdqMOvjob0GOqUBGK1PlhVA4JWGyFJrOmDTiWpEi%2Bx6n%2F5Bl1HF%2FHWZIO95r%2FJMBAyvHQvjyxD92auRgNyVHlpVI9lcPcg92OVjEOW14VPEGlnADywAJs%2Fwzym2WSaVjVVKEDcYo2GEQ39bfzP2xBStuqcqJ263daRop71mgmTZ1reyOc8sHjGHOm4rODIwBsn52Et0IKucO%2FF6UiSdEmUMWke3D5HkUTvNpQsQHcSl&X-Amz-Signature=2dfa72ae74f869fb4d6ae520ab8242c4cc846d13cc7ae34d2da3c896d94f5ced&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVU7DZEZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4REO7F8W4FFUGUtDrp6EOVj1rI5fkYSO%2BypwUIVRnDwIgCbxaJtbi4h1TYtS%2F%2Fr4fKMv2FsuDDkSwAGsYqM7NeVEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY83uUnVEgp%2FaaVHSrcA25ExnxXXchF3M1JNa69KEJnMfJ4FAkKS6M9aWXFyY%2BISDWjBLiX8B94nX47uDcDV1QPdncmBqxiFeaXAVEBFhe8sZWp8FnVVNQHDF%2FWXv798lT1I58BQjeLcr8VUGova%2B%2BNwWwiJI4GfucwctJpEU24EF4NTeIXwBB%2BOb6h2YTBf5ErIdq4MQ%2FRLiLWmR20JLEOb3rGvt6Lna8vQ%2FpRW7OwSD5Gx9p9Sqk8vkK8rOrDyM%2BKfC7pwhHV1pQ1WqKSEB5jBL6waysVbv7GnJr57uzz5bErv2jQjtUT3jhm7oVaZsGT2XCd5FNX7PvSfIVlvHEt9fmWSjWcmITzKI13yQWDE0hVbA1%2FEMLdev52TdixoL%2FLNgGBiq%2FJL2CeOaHJh%2FAnX30vAVCH5KfG60W8zBC%2FXSUHHJW3J4gdkX7%2BFUyWuN0Xc1TotyB1hKwCyht9P5%2ByEShUfBd4%2FF9VLyOL2y3Y3oVLV3XfjiedzBe0Rd7HDiRTcmD9ARsywiygyNf2rBz6ye%2BAIOfMtIO5l03cDQlysHZTcCpEYUokTKSbqjQPAxdo5CAMfOKw3slr20lOUjo3IvhJGie84dcFFlHA%2F0Z1Vda%2BngJCeoqe7kupqWOTlBbpQkdO%2F7Gq3hdqMOvjob0GOqUBGK1PlhVA4JWGyFJrOmDTiWpEi%2Bx6n%2F5Bl1HF%2FHWZIO95r%2FJMBAyvHQvjyxD92auRgNyVHlpVI9lcPcg92OVjEOW14VPEGlnADywAJs%2Fwzym2WSaVjVVKEDcYo2GEQ39bfzP2xBStuqcqJ263daRop71mgmTZ1reyOc8sHjGHOm4rODIwBsn52Et0IKucO%2FF6UiSdEmUMWke3D5HkUTvNpQsQHcSl&X-Amz-Signature=9c69859b7efb361717ca64550b61bf916f5555e4ee607c21303fef47c8ff810e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHDXQUK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnSD7jwkt%2BXAzwA4AY3KMP9Hx3oZBA%2BxwaDKvpQV1HEAIhAPkES3BOIx2WPjHsebP5TtpPDqXS%2Fan2Eezjad5pIHLOKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVtBcTCmsjMbxuAQIq3APwGh7IEVQkGIPWnVg6tvZ1R55AdtVK6HBVxrWweQaet39dQKkmpgASAxzlTqvqXJi6act9lLuVWRXiYDbYOoeysouMbtKg9qJqQnllShJK0DoFX%2FNH9BeqNctJYehD3lpVfDZfHx7MDnKAgvJs%2BujiyCKSgWnUHOvb1nCFCq6mJiUa6x2ed2GUnVcdkhqUmPSCkLaLF1rNMvuSJCrDnZOPg6U7knvi%2BKie4K2yRddI%2Fo%2B5z7RuAk23yJn7eS4pXE67Tb2nzXTxgXQGtiZ6UXrwLvhFuTgeJ4gy%2F1Gra8HJuBUmqPm8P15USoaO9Th1bQEHgjEgJngODz%2Fo22iXupzUQDZB1QSv3RbCQFeGereJLAQmhAuL3WlCx%2BQcCrY5ZDiS%2FVHNpBpiZpezZg9qwabG5Dk7bIGgp%2FWYvGjwLwMCv%2FUBBLaKEWdJX5tSuqadpGZihLD68bVi8VbAVs%2FR26rubkHjILNL8Dp%2BHn%2FjSobdtDtYLj78L02rMVbJ%2FmLlXjBzTfNkteYxxh5b%2FhOIomspMKAhPVPIQ4X5geAzjhexmVuXupFCTCn7n2Suy39izLBTyC5KAbuUyCx5lcqfz%2F0pP6r%2F3ptPi6Kc4vSZLDh5fn38us5JJL5Y%2F74CgTDq46G9BjqkAVBAfihVhBrj530uJZfC4e9sScsy5d%2F%2FDHAWr0EpB9bShzfhWJGP8qBnBBmRlV89LxJmBRNNhbcP6Z0CJmo7qQaAe3%2FeAbfMKpNiHZySOTspD2%2BA1KdMz9Jp5heAgnVDz%2BbVn1%2FQkOtVQx7LHvWOvHyK0LiWxJYszVS3AEUyiwZNVzL8aBP%2FXM14ac4HaqzDwy5piwctRHQEM7qb1S7HihelJaRX&X-Amz-Signature=848758e75e2069bf342aaa75a6d8fda276ae39a50d6c69ba0125d5cbcd74f269&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YB6AMP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDYC2XQiDPMRb542FGiGLMTzzLr5%2BgBm5%2BOJaKkep5TQIgRQLjocLhrL6f71WWMEBlCQt%2BxRVlikv3%2B%2FMTZBQMzIQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3Oo0cryKuqjCcg7ircAzBTDBjVgNZAkhM1KlbkqwAKbO9Izc%2BCpfoAVCG%2FEjbRuNJzbG%2BjODWeTuO6ArGZsHufRTkdp2r6Cqn83Ys56VTl7BiVa4eiZ%2B2wCDDTUdykJ820xys%2B1iSlbni%2FTx0lx%2ByV82gd8TRyKf2BriCK9hg0CoI09C6cz2ch%2BZCEh6fja9G8KfEyNA8omvl%2FrcOUJiVM6JEbe3QnyaKrSCkRTKFeh8TvF4tt9p8UVc2GEBlP8bmd9Oa%2FsDvJvbzEOaxNLe1CIiLa3weUy84mRH7iwcTU%2FdOvLUQFUUQAyFN2GzIH9LVZwMKbKNTWHGE%2BUL3FmoJD0k5B1gY16%2B3Rmf7IDCxmYlbRxzjdzU4io6ysG3UbIUiRq4w4LpXP9mh4szCKGNzL5zjwwSLjfW0Pe8c5Gu%2FuO5bw%2F1bt1gLThczhFZ5N8EwVqV7mH1nJO%2BXwN3BpsJw2ZL1%2FhJzye%2FmL8pcFOx8Asp6Ucq5RiN9o%2FRESepSdjeccO3nSOvQEPtzX%2FOgyzPfhtW7ocpluv%2B2Udyv8nibbsjg0MGbWZYouFv6SYP7T66%2FREVKwTU2kJGVejpTNYP4CVBociSLhnHphqahpPzcue1SUaSEyLYZGiBGIJQo7Rqqc%2FjyKz6RP01tGMNHjob0GOqUBBwpP1P%2FFh1lOJqeFMaLIq63nIoMgIGwx4tN3v0GOuxiaUc1qLlDuEmnCc7gPOGNdhS2GsJ9pQoS%2B0rkYJ%2B3BzY7kkG6z%2Bfwn09KfJgIfYKkwwagYqbvXfuhDFD1fjp3DSpkcgikLjBtAkG0nHPCbq8Oeg9rkdaCymSQ8xoGhI4K%2B8vnC05FGVhDOyVTRFpZAIjLH7OHMbPySoYog%2Bsr%2FmSt6cDyk&X-Amz-Signature=76717d0f171f5a291e907676b3a67073d2509bc8de98296ac42735660479cd36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVU7DZEZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4REO7F8W4FFUGUtDrp6EOVj1rI5fkYSO%2BypwUIVRnDwIgCbxaJtbi4h1TYtS%2F%2Fr4fKMv2FsuDDkSwAGsYqM7NeVEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY83uUnVEgp%2FaaVHSrcA25ExnxXXchF3M1JNa69KEJnMfJ4FAkKS6M9aWXFyY%2BISDWjBLiX8B94nX47uDcDV1QPdncmBqxiFeaXAVEBFhe8sZWp8FnVVNQHDF%2FWXv798lT1I58BQjeLcr8VUGova%2B%2BNwWwiJI4GfucwctJpEU24EF4NTeIXwBB%2BOb6h2YTBf5ErIdq4MQ%2FRLiLWmR20JLEOb3rGvt6Lna8vQ%2FpRW7OwSD5Gx9p9Sqk8vkK8rOrDyM%2BKfC7pwhHV1pQ1WqKSEB5jBL6waysVbv7GnJr57uzz5bErv2jQjtUT3jhm7oVaZsGT2XCd5FNX7PvSfIVlvHEt9fmWSjWcmITzKI13yQWDE0hVbA1%2FEMLdev52TdixoL%2FLNgGBiq%2FJL2CeOaHJh%2FAnX30vAVCH5KfG60W8zBC%2FXSUHHJW3J4gdkX7%2BFUyWuN0Xc1TotyB1hKwCyht9P5%2ByEShUfBd4%2FF9VLyOL2y3Y3oVLV3XfjiedzBe0Rd7HDiRTcmD9ARsywiygyNf2rBz6ye%2BAIOfMtIO5l03cDQlysHZTcCpEYUokTKSbqjQPAxdo5CAMfOKw3slr20lOUjo3IvhJGie84dcFFlHA%2F0Z1Vda%2BngJCeoqe7kupqWOTlBbpQkdO%2F7Gq3hdqMOvjob0GOqUBGK1PlhVA4JWGyFJrOmDTiWpEi%2Bx6n%2F5Bl1HF%2FHWZIO95r%2FJMBAyvHQvjyxD92auRgNyVHlpVI9lcPcg92OVjEOW14VPEGlnADywAJs%2Fwzym2WSaVjVVKEDcYo2GEQ39bfzP2xBStuqcqJ263daRop71mgmTZ1reyOc8sHjGHOm4rODIwBsn52Et0IKucO%2FF6UiSdEmUMWke3D5HkUTvNpQsQHcSl&X-Amz-Signature=f1f38d20bdd9707319953d9627fcfe716a08f4c63410666ac88c59d53faf0cda&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
