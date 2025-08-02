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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJ3QP6S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn7PR6Ljsksbk%2FTx9H5IgadFHI7f6K8Jus0wGJNlDpeAiEA8VrUu6%2Fy9blyhduHoiFppkAVU%2FZrMmJ352Pbynyr9Ysq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEfzJhc8%2BUivJt1zaircA4JJJ%2FgFekoiYZAfaBDeXl28LvbxH6PoL2rKdSAgSQ8jpVoWu7xOrnQBu34n3FBzUmN%2F7oACUWG0bppZJ72ypTrXwmpOzyIZACrPmLZQXJPZivrHJXX6FDPdQNb0j1S6j3AOGwHW98yhg9o6Rn%2BhMz6f8eYauqR1vjlrLJavhiepa8j5n5EN6viDIoX8nZgAx3a6qywGg3e8jliUd7A8RuMClpwCQFWlmKzKRSZTf4M%2FK1DN8GI9gQQccpVphw7rHLkYnUWqTAJl3TDyV4%2F32MKq9HAt6u8%2BdX3acIzEhey06nJrLoT%2B8Mj%2F0WDqSPqgK%2Fa%2BQ4uOi4qg70r2OVu6Q1HCq07nAmrx%2Ft0OdBoQB93eio%2FVFZeHvtwB%2F2qcOYmMNBbxcz27ylXLz5C0iUDyAFDqrvGerfFn4SwYIXjIOvqPNPP3yspBKtrVVblMHqHJDShG6CvLuJzcvRuzI%2Ffuehr0Vh1ldndPrh6SRn6TJKa6ZwIW9gS1fX5zygDCUXlXcnogO58bd%2FqAdKLGfw4zANIQccdBXX3t%2BoobBTDoqbUL4syQvUHngxCyrTXJjdys%2Fkmlk%2FfT%2Bs3d%2FW2Iyr%2BoySzL7%2FQW462RfEv%2BldaHbBfSMc5PUMwkYUcHaOhUMN%2BPuMQGOqUBSw7GXsUakLEh1O2As%2FL8j%2BVAgYYyVPoOKyiEDBV0CnUmk7odycSjWcfkn2OVaMQL3HCysOeAukvVIisXZak1xYKMD5qc8u%2FonDsMURWH2hrl%2BF3%2FcbcsGw33U82ovD1cHL1bK0PymmCrZ%2Bnv1VEQdpOwDK05U3Qxxuwqtcc32bJr%2BQY6yGBqZq2OqrX3A1%2BZPIAQxwv8544ELdwOCpziqk2q%2FBu3&X-Amz-Signature=06b6fdc570e9019565892581a9c2a3af349f12dac622414622af7871c258fc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJ3QP6S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn7PR6Ljsksbk%2FTx9H5IgadFHI7f6K8Jus0wGJNlDpeAiEA8VrUu6%2Fy9blyhduHoiFppkAVU%2FZrMmJ352Pbynyr9Ysq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEfzJhc8%2BUivJt1zaircA4JJJ%2FgFekoiYZAfaBDeXl28LvbxH6PoL2rKdSAgSQ8jpVoWu7xOrnQBu34n3FBzUmN%2F7oACUWG0bppZJ72ypTrXwmpOzyIZACrPmLZQXJPZivrHJXX6FDPdQNb0j1S6j3AOGwHW98yhg9o6Rn%2BhMz6f8eYauqR1vjlrLJavhiepa8j5n5EN6viDIoX8nZgAx3a6qywGg3e8jliUd7A8RuMClpwCQFWlmKzKRSZTf4M%2FK1DN8GI9gQQccpVphw7rHLkYnUWqTAJl3TDyV4%2F32MKq9HAt6u8%2BdX3acIzEhey06nJrLoT%2B8Mj%2F0WDqSPqgK%2Fa%2BQ4uOi4qg70r2OVu6Q1HCq07nAmrx%2Ft0OdBoQB93eio%2FVFZeHvtwB%2F2qcOYmMNBbxcz27ylXLz5C0iUDyAFDqrvGerfFn4SwYIXjIOvqPNPP3yspBKtrVVblMHqHJDShG6CvLuJzcvRuzI%2Ffuehr0Vh1ldndPrh6SRn6TJKa6ZwIW9gS1fX5zygDCUXlXcnogO58bd%2FqAdKLGfw4zANIQccdBXX3t%2BoobBTDoqbUL4syQvUHngxCyrTXJjdys%2Fkmlk%2FfT%2Bs3d%2FW2Iyr%2BoySzL7%2FQW462RfEv%2BldaHbBfSMc5PUMwkYUcHaOhUMN%2BPuMQGOqUBSw7GXsUakLEh1O2As%2FL8j%2BVAgYYyVPoOKyiEDBV0CnUmk7odycSjWcfkn2OVaMQL3HCysOeAukvVIisXZak1xYKMD5qc8u%2FonDsMURWH2hrl%2BF3%2FcbcsGw33U82ovD1cHL1bK0PymmCrZ%2Bnv1VEQdpOwDK05U3Qxxuwqtcc32bJr%2BQY6yGBqZq2OqrX3A1%2BZPIAQxwv8544ELdwOCpziqk2q%2FBu3&X-Amz-Signature=65df24cffe4877ac970a99b15deec63a9d5b22afd270a7dd1e322d687d2c195d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJ3QP6S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn7PR6Ljsksbk%2FTx9H5IgadFHI7f6K8Jus0wGJNlDpeAiEA8VrUu6%2Fy9blyhduHoiFppkAVU%2FZrMmJ352Pbynyr9Ysq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEfzJhc8%2BUivJt1zaircA4JJJ%2FgFekoiYZAfaBDeXl28LvbxH6PoL2rKdSAgSQ8jpVoWu7xOrnQBu34n3FBzUmN%2F7oACUWG0bppZJ72ypTrXwmpOzyIZACrPmLZQXJPZivrHJXX6FDPdQNb0j1S6j3AOGwHW98yhg9o6Rn%2BhMz6f8eYauqR1vjlrLJavhiepa8j5n5EN6viDIoX8nZgAx3a6qywGg3e8jliUd7A8RuMClpwCQFWlmKzKRSZTf4M%2FK1DN8GI9gQQccpVphw7rHLkYnUWqTAJl3TDyV4%2F32MKq9HAt6u8%2BdX3acIzEhey06nJrLoT%2B8Mj%2F0WDqSPqgK%2Fa%2BQ4uOi4qg70r2OVu6Q1HCq07nAmrx%2Ft0OdBoQB93eio%2FVFZeHvtwB%2F2qcOYmMNBbxcz27ylXLz5C0iUDyAFDqrvGerfFn4SwYIXjIOvqPNPP3yspBKtrVVblMHqHJDShG6CvLuJzcvRuzI%2Ffuehr0Vh1ldndPrh6SRn6TJKa6ZwIW9gS1fX5zygDCUXlXcnogO58bd%2FqAdKLGfw4zANIQccdBXX3t%2BoobBTDoqbUL4syQvUHngxCyrTXJjdys%2Fkmlk%2FfT%2Bs3d%2FW2Iyr%2BoySzL7%2FQW462RfEv%2BldaHbBfSMc5PUMwkYUcHaOhUMN%2BPuMQGOqUBSw7GXsUakLEh1O2As%2FL8j%2BVAgYYyVPoOKyiEDBV0CnUmk7odycSjWcfkn2OVaMQL3HCysOeAukvVIisXZak1xYKMD5qc8u%2FonDsMURWH2hrl%2BF3%2FcbcsGw33U82ovD1cHL1bK0PymmCrZ%2Bnv1VEQdpOwDK05U3Qxxuwqtcc32bJr%2BQY6yGBqZq2OqrX3A1%2BZPIAQxwv8544ELdwOCpziqk2q%2FBu3&X-Amz-Signature=d56a4d51416a0ff2f674b74b6cfca90f89458923c3ffce83ea728730064f89d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NQHCVY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVnkvR0Ibo9ZiGcWKChOEtaNVVADwrsM2bfTuPlFN56AiEAtT9dr2%2BglmJcaonta%2Bht5pEO%2FuncAz0V468FTQG3%2FoUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNFyh9Hd9y%2BPTWh0IircAyJQEcjpKBj82bH16M5gXFLDz9JmpZBx%2FijQG6HETjYm7AUxV6sjHxeveRKNWkGM8%2BXTsjd0Crx0aBtek2E%2BnNGcB6ab5%2B08Z1aSjyyEuV4v4AhxvxgnEXNm7pvYR8z2VaXEVNQi88EH4Zhs%2BKzEuhAt%2FZRrEAPHZVVvUyCpP%2FU%2BbIQaULY8M5KNzShyEifM4Ljyvb35uaHthuIWCxDkO5vrMLwPZCXvJ3yaTAuY3pVCt0E3ppwzjBZbm0XJiyo5h%2F4qsRYQM3JpbCeITbEx1BPJOBwzKCNFQQPE8cVLtQwhkFPZMMtNvKESruzoGOatqS5KOwojvfB5vebb8Q4kGpZvmDNxth23zNCsYNYvYIy%2FHgmrVB3oTZWO9oCVBeSm1FszWFUJM0pet3l8eiSIop%2BUd795TfJqIIrSWnj5BVCT77WdT91aOdUgfLR58rFuWWMGMpP%2F6PGWFDd%2Fxw4qmfP4csx%2F0nNn%2BzyCZaxZXI3Y97ALmp%2B%2FDu2z5dysoT6g5lSKXctOgRhTdSxO5cYY0T%2F%2BHgIyegxKSX3FK44k%2BSEgSnffCvklclbO68BzmLAuACmB1VHDIYQIUuPer16jTt68knoa%2FUufjvwq52TgHUAIifDvOhI2CBlJGdNjMJ2RuMQGOqUBnItBmq96Aum8fiB2JyjeYPlhn6BfchRkPtuaj9zQpjTipLHjLMAwucNoVOW3USMcu3Ylf51iiYK7%2B0CnvP4TCImj%2Bos9gNI%2F3s34HlyelfjFBtnbg3P0%2Bs7iTJ94mUYHr5%2FL9I5IRRpewqIvGbNOLVGfB6EBea%2BOBRc4BIiS2xdY88T3ZxMjsLwV1z9z7GWby8Bvwjtpsip4fheUwjPA5SNiHGJm&X-Amz-Signature=f5c2314ffb2f97d910170de3c4a78dc55ed7c95fefb8c4d21c62bee61e286f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHGFL2T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8F6ZMiMthHOEqAG0T8KMlsVOFbKTJ8UhU%2Bmxpr5ZULAiAGEb1m9uMmOj6UVnVsm%2BPfrZuAwDIBsDUPR9S6PxVfvSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMax6fU1R%2FqooVb9dHKtwD6myrtH4z6%2FPQYqYa6J58%2Fr2W53ZomBFAIbpHkMaDwUAu35O%2FNNWKv6ajPp6B0mNfgAWhJU8g2iwEFunvLeFYTFxICb2LQzqnngdFaHdcfRBsYI%2FEqyjDO8keh5NBciHpZu98WYLaFMBF2P%2Bht%2B%2Bgy8N4xWwgzYOVpFeRuYiRWUEpDotAb%2Bg7rJL43CxASKtbchOWqMyivDhwHLdEKOa7O%2B70sUCDx%2F%2FFmeQ6NlDrHSWjL5tMdaRsq6pDltoSwomHAWSOnlWZbhboo4N4PZ9OXajSW1pq7acpaLRO%2FhBn9LF8aB5mq8crSra0QIPzKjDOPZhPUNjDft07RXYGt6QVH0AcLaIlIwU%2BrPs7q9dzOfalbIbELmK4Mhh3I8wYBJAayFO5nheqqzMqCwg1M2GR6pOQdQ4Cc2hsgvPCc898giiJZFBrltfaMqzQ22NNvnuzB%2FzM8wKW%2F%2BimAIKtx4LplDeFAp44sZJjSKdakXHAD0z8CcDbm5Tzu2Qyo6HDRModp93oFfKrJceYdLvBfl2UeK3upQZWebRr6j3tKxGSXSCQWfIhS6m1BA3Si84JLx0fCiM7uDoFgb7%2FnutV4NxcdCt23gR3T19eZwGiu9ARLHcRJKAKVGw5MMDJKAEw8ZS4xAY6pgG%2BqgQiV1QTz2Of8kWW%2BDa%2Fdx6qVHB8Pk3BTGEPB3l10W6sMhjhzBrP4BIBAOk7Or%2BkDL0O0cO6BwQzfhn%2FkxJGTcrx8li7ECPcnYDwzgqeNAjWC2fc70ICU4FBhe6pb%2FSDQ3XrJvaZ7A2cSv3lbDPqVgsXwN0gYX7mdz2SSEmfJ37q%2FbLj7PXXefxzZKAU%2B7nnX6GCMbFOB692iBPpLXv8JmxSrMQP&X-Amz-Signature=0ae235fa7f9c8079f0178d8b1087c8112376082557195216d30b8588ad32791e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJ3QP6S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn7PR6Ljsksbk%2FTx9H5IgadFHI7f6K8Jus0wGJNlDpeAiEA8VrUu6%2Fy9blyhduHoiFppkAVU%2FZrMmJ352Pbynyr9Ysq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEfzJhc8%2BUivJt1zaircA4JJJ%2FgFekoiYZAfaBDeXl28LvbxH6PoL2rKdSAgSQ8jpVoWu7xOrnQBu34n3FBzUmN%2F7oACUWG0bppZJ72ypTrXwmpOzyIZACrPmLZQXJPZivrHJXX6FDPdQNb0j1S6j3AOGwHW98yhg9o6Rn%2BhMz6f8eYauqR1vjlrLJavhiepa8j5n5EN6viDIoX8nZgAx3a6qywGg3e8jliUd7A8RuMClpwCQFWlmKzKRSZTf4M%2FK1DN8GI9gQQccpVphw7rHLkYnUWqTAJl3TDyV4%2F32MKq9HAt6u8%2BdX3acIzEhey06nJrLoT%2B8Mj%2F0WDqSPqgK%2Fa%2BQ4uOi4qg70r2OVu6Q1HCq07nAmrx%2Ft0OdBoQB93eio%2FVFZeHvtwB%2F2qcOYmMNBbxcz27ylXLz5C0iUDyAFDqrvGerfFn4SwYIXjIOvqPNPP3yspBKtrVVblMHqHJDShG6CvLuJzcvRuzI%2Ffuehr0Vh1ldndPrh6SRn6TJKa6ZwIW9gS1fX5zygDCUXlXcnogO58bd%2FqAdKLGfw4zANIQccdBXX3t%2BoobBTDoqbUL4syQvUHngxCyrTXJjdys%2Fkmlk%2FfT%2Bs3d%2FW2Iyr%2BoySzL7%2FQW462RfEv%2BldaHbBfSMc5PUMwkYUcHaOhUMN%2BPuMQGOqUBSw7GXsUakLEh1O2As%2FL8j%2BVAgYYyVPoOKyiEDBV0CnUmk7odycSjWcfkn2OVaMQL3HCysOeAukvVIisXZak1xYKMD5qc8u%2FonDsMURWH2hrl%2BF3%2FcbcsGw33U82ovD1cHL1bK0PymmCrZ%2Bnv1VEQdpOwDK05U3Qxxuwqtcc32bJr%2BQY6yGBqZq2OqrX3A1%2BZPIAQxwv8544ELdwOCpziqk2q%2FBu3&X-Amz-Signature=0573b53c04011529abd925c9a129ce693b40aaf01bc1703c1ce31b62f1b7f424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
