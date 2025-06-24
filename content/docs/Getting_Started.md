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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQ6WGZA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD%2BF7qqXZZDdh9ZEYAaskhMCQVpu9saY0AEiYVwKG3SOwIgUYcPlSR0I%2BkE7qYb1NJGJEfT8Lqq04wrSvjQy6pZbwkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGVusF5fuxpt%2FBMlmircA%2FzMMl7icYOQWiq1Gt6gGk6WKRXbn7H969umz7IQ4F8jqodUWmTm9%2FTuOoLGlZgrf984SUwqTi0MVBAoavXk3V%2FuTM8d%2FXXV3WYSiVLNNeTWJY%2BzbdCkED7CMnnn8jBJnoqOVTNuNd6xwYeXuWJyX3TdRwRb1gu6n5jVOn7UJ3cBDLcezjGq3R2YbnaNbvpklv%2Fqiung7sRV5lAsFAMlDwbsWwtr5fPgU4BdC%2BvIssNOOz9INFDubCejiL77swIlsOj4HMRtBTuG4iNX0XNwyNElD1JyB%2BF7NA5BHWBqjj7kqtqdL2C7kYdQ1OAcEPqBXpjylQu88DdN7AP5I0%2FVS8GV9dMqYtYBkgHqZdDnY1o8gh%2FcKf5IRo0FjiUOZhBPybCNrChGmjMl0eYJS%2FWjr0F%2BjifcBh%2F7mExbAypQ0ZqBZnzywgxCoVAvMj8wT0MpQA5o2Avm%2F99M4PUNxH%2BUxJvKwHxF6F8REmfbj8WM6ikOOFLAKFcyPYS7inNxSejZX41kXUMh1pNsgyLYDfmsN6JqBzmUTThgS4%2FL4mEKXp8xl6x2Nh6YLqa9LHa%2FpMgDWA397jWyMfL0r4p%2BfekgmVu4GIjRjsWZ%2BK91E72B5zWXdlESMSBGleMuzA5DMJej6sIGOqUBMoZUyhJ0SGfO0u%2FTwKEeG6JJXc78o3aDNxHukX4bqE54aPxuAlY5A6D7uT4WzRmLQvJLjzuJA%2BBVPq3Rry%2BxeRF96yGImOA1xI3jYHN5rMJan69w3%2BYKTs%2FjVSWwBMdBEYstLGVXUucFszGwthmwVlmCXflQlqDLNT6syDaoTV9CJy0oZBwfyswFHnKojL%2FShWDh270ZBFK%2BDKf5Xov1my4sOUng&X-Amz-Signature=6d165fb51b198320e2ff4506f78fc0617e9ef29dd9a0bb40ebceec8bce864f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQ6WGZA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD%2BF7qqXZZDdh9ZEYAaskhMCQVpu9saY0AEiYVwKG3SOwIgUYcPlSR0I%2BkE7qYb1NJGJEfT8Lqq04wrSvjQy6pZbwkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGVusF5fuxpt%2FBMlmircA%2FzMMl7icYOQWiq1Gt6gGk6WKRXbn7H969umz7IQ4F8jqodUWmTm9%2FTuOoLGlZgrf984SUwqTi0MVBAoavXk3V%2FuTM8d%2FXXV3WYSiVLNNeTWJY%2BzbdCkED7CMnnn8jBJnoqOVTNuNd6xwYeXuWJyX3TdRwRb1gu6n5jVOn7UJ3cBDLcezjGq3R2YbnaNbvpklv%2Fqiung7sRV5lAsFAMlDwbsWwtr5fPgU4BdC%2BvIssNOOz9INFDubCejiL77swIlsOj4HMRtBTuG4iNX0XNwyNElD1JyB%2BF7NA5BHWBqjj7kqtqdL2C7kYdQ1OAcEPqBXpjylQu88DdN7AP5I0%2FVS8GV9dMqYtYBkgHqZdDnY1o8gh%2FcKf5IRo0FjiUOZhBPybCNrChGmjMl0eYJS%2FWjr0F%2BjifcBh%2F7mExbAypQ0ZqBZnzywgxCoVAvMj8wT0MpQA5o2Avm%2F99M4PUNxH%2BUxJvKwHxF6F8REmfbj8WM6ikOOFLAKFcyPYS7inNxSejZX41kXUMh1pNsgyLYDfmsN6JqBzmUTThgS4%2FL4mEKXp8xl6x2Nh6YLqa9LHa%2FpMgDWA397jWyMfL0r4p%2BfekgmVu4GIjRjsWZ%2BK91E72B5zWXdlESMSBGleMuzA5DMJej6sIGOqUBMoZUyhJ0SGfO0u%2FTwKEeG6JJXc78o3aDNxHukX4bqE54aPxuAlY5A6D7uT4WzRmLQvJLjzuJA%2BBVPq3Rry%2BxeRF96yGImOA1xI3jYHN5rMJan69w3%2BYKTs%2FjVSWwBMdBEYstLGVXUucFszGwthmwVlmCXflQlqDLNT6syDaoTV9CJy0oZBwfyswFHnKojL%2FShWDh270ZBFK%2BDKf5Xov1my4sOUng&X-Amz-Signature=aeb9fe79fbb7929348e888462ef86bfdc45c6c28f81336208619999cdf147fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQ6WGZA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD%2BF7qqXZZDdh9ZEYAaskhMCQVpu9saY0AEiYVwKG3SOwIgUYcPlSR0I%2BkE7qYb1NJGJEfT8Lqq04wrSvjQy6pZbwkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGVusF5fuxpt%2FBMlmircA%2FzMMl7icYOQWiq1Gt6gGk6WKRXbn7H969umz7IQ4F8jqodUWmTm9%2FTuOoLGlZgrf984SUwqTi0MVBAoavXk3V%2FuTM8d%2FXXV3WYSiVLNNeTWJY%2BzbdCkED7CMnnn8jBJnoqOVTNuNd6xwYeXuWJyX3TdRwRb1gu6n5jVOn7UJ3cBDLcezjGq3R2YbnaNbvpklv%2Fqiung7sRV5lAsFAMlDwbsWwtr5fPgU4BdC%2BvIssNOOz9INFDubCejiL77swIlsOj4HMRtBTuG4iNX0XNwyNElD1JyB%2BF7NA5BHWBqjj7kqtqdL2C7kYdQ1OAcEPqBXpjylQu88DdN7AP5I0%2FVS8GV9dMqYtYBkgHqZdDnY1o8gh%2FcKf5IRo0FjiUOZhBPybCNrChGmjMl0eYJS%2FWjr0F%2BjifcBh%2F7mExbAypQ0ZqBZnzywgxCoVAvMj8wT0MpQA5o2Avm%2F99M4PUNxH%2BUxJvKwHxF6F8REmfbj8WM6ikOOFLAKFcyPYS7inNxSejZX41kXUMh1pNsgyLYDfmsN6JqBzmUTThgS4%2FL4mEKXp8xl6x2Nh6YLqa9LHa%2FpMgDWA397jWyMfL0r4p%2BfekgmVu4GIjRjsWZ%2BK91E72B5zWXdlESMSBGleMuzA5DMJej6sIGOqUBMoZUyhJ0SGfO0u%2FTwKEeG6JJXc78o3aDNxHukX4bqE54aPxuAlY5A6D7uT4WzRmLQvJLjzuJA%2BBVPq3Rry%2BxeRF96yGImOA1xI3jYHN5rMJan69w3%2BYKTs%2FjVSWwBMdBEYstLGVXUucFszGwthmwVlmCXflQlqDLNT6syDaoTV9CJy0oZBwfyswFHnKojL%2FShWDh270ZBFK%2BDKf5Xov1my4sOUng&X-Amz-Signature=2f8c13f84145c2a9fa6cfc8c3c04c203d75bf665468d01698ac06536299e2344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOYULZ3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCp91rynjKek3MAqyIb5M%2Fkwsry%2FT5c16qWsQthfyqs2AIhANFOWE2If%2B%2Bw3EIpCQ4RrcMaZwciHnPOPAuXOPxHGteVKv8DCC0QABoMNjM3NDIzMTgzODA1IgylJUQfu8kM1IYA0Kkq3AMgtIic59kazER5v3oHK8D%2Bs5tTTbePinJdzYRbEWwccizfSq%2FGlyfQygVntjNHCWgPAXoAXybsQzNRCgLMJHp%2FAWIjExhtWjwG%2F14Qb6QF0ghfPtLiVKdbADrO9uopz4kjONFYwLv4TUSzJR6Ih3UVsYZOBAjp3b56RaHLRjBg6XmPnYPq%2FPIjlgDiuNJU9w8q87NIHdXHmssGyMTszIukVQ3sAE1krMF0H1EeNbkpni6dP%2F32rChoHu6Ocwe2svA5WhW%2F75W2zst2JzoMrOlxYYVb7oJnSGb8ZhRzOEvSq8%2BTD2SEJuOKVPrUjWz04LTLTNGu7H3rZaqZWND4BTSCuAYWxkPSAjRZf%2FWuP7WxvFSRcCvrnmILqODfcw3LOynuhNseEvK43V1TmU602aquvqRFnqAkExZE%2BJ%2FzlkP7CmGvF0CmV%2BsoXpILNX73qmy9oxJbLuBsWAqEswO4Gkt%2BDi78IEQza73KmwQrPmAKGmrcRTsXKpKiScziLpYN4iLaUY0yVz7Svqzz1jcnSNqy4K830wwFwGMUU%2BlmG%2BtxG4J4Lvt2xm65RewIgH4mE9TQbdZHEOyAiVDB%2F2%2FLnRR3pcYu%2BMYkZlTbrB1mT2jALMlL%2BUgZrnd6BIQNZDCBo%2BrCBjqkATgvKgmdJTsnctgz2rIQQYqVjgg%2Be%2BYbeR5ZVZXLMRdQDRGQRzw%2FpHIq9AHb5bMufwF5aCnLe0mYztzbbm8z%2B6pAtXBEKzDPJCC5i8%2Fj0QuodbU0o7NlLnm4c4FEe5NNDPWmGBgC9NWG2BRX9YuidBSptVx6Q5Q8OePxV95xE5gGkAdc5Ddh%2BtQmku08MhVaqlYoy%2Bk1srFRtJIN555p2arMf2NU&X-Amz-Signature=69dba214c8d95cfdbcdfe41d403ef93224e08cff826d02649839a0146641c8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDB53SL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDpXgVevTsgsoiF8U036kTvzSfNc%2BW%2Fb8iRKp2GGPycAAiARdEHTxxphoE8luRJFMHlWZI%2B4q5BomTTBMmYcvZYd3yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxwbznZ1X1NuIi%2BLYKtwD56iCeQqdoJf7ojUL28pRbhK2mXou7Jmvn0srxVXy6bTv2lSP1DurZwMd0UgkHebvVKwVvaaCrqxcgMmuxP9%2Fl39kp36ZwHehWZUW3WIev7Bdcj6FvceXmSbZ8ZMwhGkRi%2FP8V2wRgI9wmZu2JddtLS3ClMCysQLtpmspXDqzxhO4flKeNtIrtDcvsbJXuhv7%2FgdGEQn3sd1QJyNr6fG%2BhptiHOyaGKFiDExLcXSs83Vo8GXBAd%2BkhufqQ5WPHJi4uLBsy3FBAynw2J16K%2BUkU4ngLU7KJBre7V0o8uxYDk7%2Fgn%2FUOPTWEYJlN5670xDtpdLseutHXKAeUmb5d3cytyLYBL92xwPbImtpIG1TTm%2F84gM1MZ01oqqq0Fypn34HVIKUW2q5lR4ipLgueXtGqilaqLb4iOQPa5OTHEtmwzhJLFJB7BiMbEQKS8kXTPFZYdsJu59amrd5AV5H4zw83Wu4MpHSsTYh4RARRmmgOS040aIwGVHw3HIzPiTQQWWYF9xQpOxf7rUnaKbfnpx%2Bb6RfcAurXcXZbrxrmc7H8IGzKMlyvdz5GKWWMxbR5UC3N3bBdFZKagF8hfZ6tqDyRLbEyH0udbFrnP4erwa3yANhUaHWsDMW1%2FQFo7kwjaPqwgY6pgELkoswknqcrudc97%2FnyUOjjnX%2FWpjW7nk%2BUied2UacChEExTYdfTDhJISJM6rXGjz01p676o08yY9blAQrLw84%2FDaUHdFFldFh59fkzW5RxEFIWr%2BayrbBJ1SA587akk3pwB9mng4B98wGRJtMIWI8nfPFGtRz%2FEsVyuPb3rl4V8ol1iZKAwEt5PK0yxFBF1BmiExTb7KkMWq6yZuiGaizirTZpExL&X-Amz-Signature=7b9360d81a37771179a23ef1211ac78695f021c3f94a68e34d67ec5e819fdf66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQ6WGZA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD%2BF7qqXZZDdh9ZEYAaskhMCQVpu9saY0AEiYVwKG3SOwIgUYcPlSR0I%2BkE7qYb1NJGJEfT8Lqq04wrSvjQy6pZbwkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGVusF5fuxpt%2FBMlmircA%2FzMMl7icYOQWiq1Gt6gGk6WKRXbn7H969umz7IQ4F8jqodUWmTm9%2FTuOoLGlZgrf984SUwqTi0MVBAoavXk3V%2FuTM8d%2FXXV3WYSiVLNNeTWJY%2BzbdCkED7CMnnn8jBJnoqOVTNuNd6xwYeXuWJyX3TdRwRb1gu6n5jVOn7UJ3cBDLcezjGq3R2YbnaNbvpklv%2Fqiung7sRV5lAsFAMlDwbsWwtr5fPgU4BdC%2BvIssNOOz9INFDubCejiL77swIlsOj4HMRtBTuG4iNX0XNwyNElD1JyB%2BF7NA5BHWBqjj7kqtqdL2C7kYdQ1OAcEPqBXpjylQu88DdN7AP5I0%2FVS8GV9dMqYtYBkgHqZdDnY1o8gh%2FcKf5IRo0FjiUOZhBPybCNrChGmjMl0eYJS%2FWjr0F%2BjifcBh%2F7mExbAypQ0ZqBZnzywgxCoVAvMj8wT0MpQA5o2Avm%2F99M4PUNxH%2BUxJvKwHxF6F8REmfbj8WM6ikOOFLAKFcyPYS7inNxSejZX41kXUMh1pNsgyLYDfmsN6JqBzmUTThgS4%2FL4mEKXp8xl6x2Nh6YLqa9LHa%2FpMgDWA397jWyMfL0r4p%2BfekgmVu4GIjRjsWZ%2BK91E72B5zWXdlESMSBGleMuzA5DMJej6sIGOqUBMoZUyhJ0SGfO0u%2FTwKEeG6JJXc78o3aDNxHukX4bqE54aPxuAlY5A6D7uT4WzRmLQvJLjzuJA%2BBVPq3Rry%2BxeRF96yGImOA1xI3jYHN5rMJan69w3%2BYKTs%2FjVSWwBMdBEYstLGVXUucFszGwthmwVlmCXflQlqDLNT6syDaoTV9CJy0oZBwfyswFHnKojL%2FShWDh270ZBFK%2BDKf5Xov1my4sOUng&X-Amz-Signature=ef16bfb737ca23db86a8ac6e1a3b7492f35bf2a6c82ae544c8187827ba7d401a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
