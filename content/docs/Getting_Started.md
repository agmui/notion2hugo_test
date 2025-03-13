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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKFD3WY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ%2Ba2%2FzFKx%2BK%2B2zGwz1WAID725E4jD2sREjlc8w%2BK3dAiEApjnHuV10d5gtHIkFnE2wdzORHz%2FUM0y5C3cCd4bDqSYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1%2B7CmFO9ObuyTv9yrcA%2FTNM7tNlifLn8uFy81kTZq2nslQGMcxBkgkY2hO8Ap7DDAn6Xg3bjQLwqLpVJsoJZVq9qeDmmmt%2Fk7kAgzyBqFenbWdBmiquj%2BaDTry4jcrffUMxnS96jxVkgS6DZO2%2B8LLxFNRYuLGvR2XQDyHigQ5%2FpTU1z76YhPDefcovbCUabcZS79RyqdwZSwPIP%2B3UZ%2F7RwSBqN5bPd3Dnb4QamdRj4pjGNMQtqT1TtyEXFMO4DJTq%2BH2VA72O42muzw99A2ORcEpImjlwqHYbj0u76qyzZI%2BYyy2IHpA5rdgAK%2BVfY0lX1eoxq0Ku1%2Ffm4i1EaWlXefuzydy8NEFk9St2TTWse2%2Bux2hm3fxnsN%2B%2BaqqRiNDa%2BOfP%2F%2FS8UCeMNLLGhI127az852jgomXw%2FJQSKMzhbbhWnOsXRFOg8Q3uMpkMkqA4WmicVDErhBleAUSWTzRz%2BSIaT2DaZtX6tYAqYaTsPeht2ox%2FXhyMit9RdXCZaMRdg59f%2FyfT2YVdj4aJ2gGMLz5dFdMYEB6oCqZg4ZBIskH0uNJ1XIR80kn2qfFBNiTJfDNBTwBf5HjlqP6ANjBlfDkukxWEwjfo9CXSjjX0PKjLOVlXSydoNwOBHEzEz%2BI8thLCbB3vaCTMLi7y74GOqUBwM1BJszZYyubiwf3aTGQDUrqtcprYR%2F0SSyCuvO%2FlI3rwJXg3Q1YZ%2BR%2B7byiOq4yRJB4ncPTBnZX1q5YzlQqxLQbGuByAz%2BqDizrLeHYPStdeXHBBoz4YaRGXELyY4BBuQLgJR7q5qvsLA1e66NEZrkBRGINbLxikkNsVVolhNUD0Uo5qpXXvASfCq1ze9r1x4wcbo8Ndj2rY82tgSdUyZI4LySj&X-Amz-Signature=44ecb896e4430d9abe96b8a5584f2e878527ae9d5023a6bed5bdc6ee61c10d52&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKFD3WY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ%2Ba2%2FzFKx%2BK%2B2zGwz1WAID725E4jD2sREjlc8w%2BK3dAiEApjnHuV10d5gtHIkFnE2wdzORHz%2FUM0y5C3cCd4bDqSYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1%2B7CmFO9ObuyTv9yrcA%2FTNM7tNlifLn8uFy81kTZq2nslQGMcxBkgkY2hO8Ap7DDAn6Xg3bjQLwqLpVJsoJZVq9qeDmmmt%2Fk7kAgzyBqFenbWdBmiquj%2BaDTry4jcrffUMxnS96jxVkgS6DZO2%2B8LLxFNRYuLGvR2XQDyHigQ5%2FpTU1z76YhPDefcovbCUabcZS79RyqdwZSwPIP%2B3UZ%2F7RwSBqN5bPd3Dnb4QamdRj4pjGNMQtqT1TtyEXFMO4DJTq%2BH2VA72O42muzw99A2ORcEpImjlwqHYbj0u76qyzZI%2BYyy2IHpA5rdgAK%2BVfY0lX1eoxq0Ku1%2Ffm4i1EaWlXefuzydy8NEFk9St2TTWse2%2Bux2hm3fxnsN%2B%2BaqqRiNDa%2BOfP%2F%2FS8UCeMNLLGhI127az852jgomXw%2FJQSKMzhbbhWnOsXRFOg8Q3uMpkMkqA4WmicVDErhBleAUSWTzRz%2BSIaT2DaZtX6tYAqYaTsPeht2ox%2FXhyMit9RdXCZaMRdg59f%2FyfT2YVdj4aJ2gGMLz5dFdMYEB6oCqZg4ZBIskH0uNJ1XIR80kn2qfFBNiTJfDNBTwBf5HjlqP6ANjBlfDkukxWEwjfo9CXSjjX0PKjLOVlXSydoNwOBHEzEz%2BI8thLCbB3vaCTMLi7y74GOqUBwM1BJszZYyubiwf3aTGQDUrqtcprYR%2F0SSyCuvO%2FlI3rwJXg3Q1YZ%2BR%2B7byiOq4yRJB4ncPTBnZX1q5YzlQqxLQbGuByAz%2BqDizrLeHYPStdeXHBBoz4YaRGXELyY4BBuQLgJR7q5qvsLA1e66NEZrkBRGINbLxikkNsVVolhNUD0Uo5qpXXvASfCq1ze9r1x4wcbo8Ndj2rY82tgSdUyZI4LySj&X-Amz-Signature=4cf82205d5c5774798260e129b8e50744e9ece92eb273c167cf5f230fb3df0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFZDJNF3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLcp32Hragae0Kl2XzPPwwGSE9iweCebFI%2FSgFVIumPAIhALL7m143zvhZm%2BmvTIATHkgDs8%2BBe4aJvh2jRvzlIDs0KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVSVIxrOibA5Obd3Qq3AOuoVEq2ilyNMLhM3oDs%2FuopI5TTi%2BFxGUgg3aqRwTwG0jAXl%2BA5Ew8tw3F%2BSqPHjfMimw2dFvZsH1OV%2BLZaXTw1t7pisNG%2BKWahUvMLGwR8GlEbczil9djj0jIM1tlRoGV36ZtHINUPQfVhw0Osa4gBqLPoYwIT%2BRtpEpraWmZZc0tFPsMfY58Nl6L911fRsONr0PzMsjCD4jbP2UExisWqq2yAGt%2FJE4iEocbjL%2BubADR2C4Ln078JGALJy48E%2B5MkslyICSH2yN7bgB%2BFIgrulP40HTLwh1%2BDfOrLK4plbhHyGK2nJSdGAnFv6BVLiah8vRm1Mp5aNuURIcWrRjKK6Q2rTTjJN98CxzP2Tm95ofB01mrCWZKKsaBfBWnoEM58XCQ8nKd%2BJtlKW5j2ueI%2Fn%2F6URaqBDs2LNxJYGJhGkpIe7FjKWTE4sSvZPbW4d3hJ1itIMLw81oTfZnGnhAY26k55g4cdb61ziD4Y29Q%2BsByXZ10W0LG4oZOLhxgs1MmjKlptVLqZ8W4UtU0gdRpxC8Rg%2FkoRQ02YqQdhFwaITPDLtAitlYVI4WSLo8mIRQUwq%2FvHbS2AGCWbDFb9XY6G3jSjJe0kQsdpjsN2%2Fy3CI7dfXdlwy7zp3rsqjDGu8u%2BBjqkARxNBiThJX1uAArz9mYiRlxVKppJwh40Wysm8qDhLa%2B5SQxCNK3C1ANOJZq%2BGFDzBtdjsX%2BhnnvZ6h0dChSeeLZOKy4WaivqPxCsBwD%2FT6TQvCRkTQ39NoibpAx4FNtKINKY3UQhbYUCrA1TwQUt2%2FK%2F4rOULWDy%2FLmmf9lXzGxMGs4K8M21%2FrKbt%2B%2B%2BM4bQ8dhVaQm6zPL0GqMRlVKr6mGVPh3C&X-Amz-Signature=3db8d7d63640336273033667388d1092f0163f17a9dad60313c3fc990b36eba6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDRATF2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzmnPLgrn%2FdIlxXR3x1CmQo7mpJuPZiGfZrN9xjITgwAiEA6nAJQCnvkdL3%2FDe0WMzpDFoyAKQl6w%2BqFTkP2BpY%2BFsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Fbt%2FTKixHiqkXXKSrcA%2FIFw3woWk2aV1MLXBsZo8OjDf6CKPdFu2ZaT3OszlGqgAz3M5YhugR9UXRo2m4KaI%2F5pS%2BubCeEwzW12eXBkQ%2F2c%2FbyTZjhEpQqtrkgXO6Y%2B5nYK7%2BX%2F%2Fmi88WfD2QvK%2BS0HqmDkg%2Fo8WWz0ZZZ7qKMnizj%2B%2BxRi%2FtpsG%2FCKJwU0w0CrFKLQYDM2QfcN97NwXkfyNJzDkfX8Sd%2FIFMUljOvouQ2r3EDSJg5JND9wp%2F%2BKmOQIOryZIAd2hdeTHTgWnIz79J3%2BmdhlRV5TsqHwZY4zxtSCtnN3itVNC2FfH5GADouKc2%2FhLx10L3173552IuDWSOuVAiAzCtni3pcwC6LeUKeC5CX6myFCiNe9bitQJJRXg53zyYkskbUSJenx6iIHwW4Bl2FUCmMWM72Ybp4WXjJc1Sqm4uQb4fRfDpl7%2FAhfZcCGcjiC4UWw8Q2YgfyhZEE%2BoWUlVt0HEd7yyHBXLS10lo%2F20I22mXwOBN4vs2sEtBMZiqjOdfYQRFyfTVVJaEttn%2BY%2B0%2BRNZnDpPmIUWOQsR1r9RdThgdlkWrro9d662raa0L8n5Tj4ePHqRZ8Cp5O4SLYSPugw0pNK0cTb%2F7F34wopZU9eKxwZLAPz5dX8digkoG7EhK0MMa7y74GOqUBoWpGA8udbtr3HAG70ABKHSbJdCJvLD94lYUaZx7clwW1Stv18dRNLTlV0PEdqxYO8Cibp7%2B5QDEuiiMBCrZIscJKaGhRhZHD2coAT4UvJOEGYF0fUxlHq0HiIm17VhnIXqGOUs8PVPti3JBcWcfMt6muDg3av%2FYqm7C9S6mIfKctFjvfJK68LqjmoWwQIK2MldHWxXD4ByMlO5Gwh4CW9qsgxswV&X-Amz-Signature=097e46af1ceeb12d48a49fc29c469cae65c0955b0400cca42f794139802d7a35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKFD3WY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ%2Ba2%2FzFKx%2BK%2B2zGwz1WAID725E4jD2sREjlc8w%2BK3dAiEApjnHuV10d5gtHIkFnE2wdzORHz%2FUM0y5C3cCd4bDqSYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1%2B7CmFO9ObuyTv9yrcA%2FTNM7tNlifLn8uFy81kTZq2nslQGMcxBkgkY2hO8Ap7DDAn6Xg3bjQLwqLpVJsoJZVq9qeDmmmt%2Fk7kAgzyBqFenbWdBmiquj%2BaDTry4jcrffUMxnS96jxVkgS6DZO2%2B8LLxFNRYuLGvR2XQDyHigQ5%2FpTU1z76YhPDefcovbCUabcZS79RyqdwZSwPIP%2B3UZ%2F7RwSBqN5bPd3Dnb4QamdRj4pjGNMQtqT1TtyEXFMO4DJTq%2BH2VA72O42muzw99A2ORcEpImjlwqHYbj0u76qyzZI%2BYyy2IHpA5rdgAK%2BVfY0lX1eoxq0Ku1%2Ffm4i1EaWlXefuzydy8NEFk9St2TTWse2%2Bux2hm3fxnsN%2B%2BaqqRiNDa%2BOfP%2F%2FS8UCeMNLLGhI127az852jgomXw%2FJQSKMzhbbhWnOsXRFOg8Q3uMpkMkqA4WmicVDErhBleAUSWTzRz%2BSIaT2DaZtX6tYAqYaTsPeht2ox%2FXhyMit9RdXCZaMRdg59f%2FyfT2YVdj4aJ2gGMLz5dFdMYEB6oCqZg4ZBIskH0uNJ1XIR80kn2qfFBNiTJfDNBTwBf5HjlqP6ANjBlfDkukxWEwjfo9CXSjjX0PKjLOVlXSydoNwOBHEzEz%2BI8thLCbB3vaCTMLi7y74GOqUBwM1BJszZYyubiwf3aTGQDUrqtcprYR%2F0SSyCuvO%2FlI3rwJXg3Q1YZ%2BR%2B7byiOq4yRJB4ncPTBnZX1q5YzlQqxLQbGuByAz%2BqDizrLeHYPStdeXHBBoz4YaRGXELyY4BBuQLgJR7q5qvsLA1e66NEZrkBRGINbLxikkNsVVolhNUD0Uo5qpXXvASfCq1ze9r1x4wcbo8Ndj2rY82tgSdUyZI4LySj&X-Amz-Signature=782c2c060183f2a6e3c2d71a79329e1d6bcffa9ad89eb799c4fda6ee09d61198&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
