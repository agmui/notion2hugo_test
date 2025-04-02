---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ4CIMM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEmXxSIwo2V7b4hcfMkWhqfzfI7I%2F6KDUPz0tN6Fcy9KAiAXpOa3EeN7I9PLsMimJgENK6%2BRymx2G6RW7ohd3R7R9CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06OFltVSefFQ1dAvKtwDE5qC10oJe48bW1Hj%2BOKdEwTRbtBHrVQNVRXH%2BRzc0bib9WiuWI54E0TtKFJ1wnwMy5xLYpjGKCjs%2BQkMudKZEG4clcQhy200%2BlRoj%2FZWVP0Zan0FfiqWj3sWW5v4QWWA9rFk5u4KIF%2F7w6e4GnlSlJ7gDSurgjMdJTFAglZtkgHzp%2B%2FtKcil64Gm%2BP2pHNCpwsf4bgwwXIXJepKqKRx8WSNXB%2BeQbDdGL97qmz0f2tTGWBw95MDMxKjEvua5sSYJfjyxrxwc7W9UH61UV6SUPt2kbpWYdmtSkraAc0QRCjuX0WCP79HLNRUyTJoEGk9HnnlaI6RJEQm3ZKEwaoGEsRY1jF216Rn5RcIPImMFzqCW9Wm2iRvzdSOBqz0epomcRXtXJZQ%2BTuVvOPu5rrdj4%2BoqeJKvy%2Bu7VMP%2FMYO6VOMYdulQqLfL6DJogWaHmWxKl8xE9pmWzXGTqoB%2FerpYSxlGlI8%2BufttuNa5dNm8F9m082KTQPfzTJ6eh57ynoJM2mbvebZD9z2W1fonaq8B%2FQM9casx%2BxG0t5%2FeTlUf68CKH350nSLWn6KY7OA3kqy2CbqScOIhKCdmfDyu4anlvg0wOiO8uaKwrHODbaypg8jOe5GW8D05JNEOIpIw76ixvwY6pgHXLBvGmsnbixA9kafj2%2FeRuLh%2F31oCD%2BxqONYSGHMHmWKsFm505jXDnn4iqIS6ol%2F93zqRnyL2PTa80lQ7gtfaKtBnJeHOI5Mi0idMtHNEUwUopcKZGlTUjyNviQb2p%2FPr9kekgYp8AxMTkmufCXqoP2EeGDreEtMjGIHRVgcjM6loo6j1p9zPH61g026CLcSRLa9apeZGrrQW1aeL8yvzYyevdEyV&X-Amz-Signature=7ea3836d3bd23550cac01e423c80329f94eafce34f5bc62d02526175ed6602b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJ4CIMM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEmXxSIwo2V7b4hcfMkWhqfzfI7I%2F6KDUPz0tN6Fcy9KAiAXpOa3EeN7I9PLsMimJgENK6%2BRymx2G6RW7ohd3R7R9CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06OFltVSefFQ1dAvKtwDE5qC10oJe48bW1Hj%2BOKdEwTRbtBHrVQNVRXH%2BRzc0bib9WiuWI54E0TtKFJ1wnwMy5xLYpjGKCjs%2BQkMudKZEG4clcQhy200%2BlRoj%2FZWVP0Zan0FfiqWj3sWW5v4QWWA9rFk5u4KIF%2F7w6e4GnlSlJ7gDSurgjMdJTFAglZtkgHzp%2B%2FtKcil64Gm%2BP2pHNCpwsf4bgwwXIXJepKqKRx8WSNXB%2BeQbDdGL97qmz0f2tTGWBw95MDMxKjEvua5sSYJfjyxrxwc7W9UH61UV6SUPt2kbpWYdmtSkraAc0QRCjuX0WCP79HLNRUyTJoEGk9HnnlaI6RJEQm3ZKEwaoGEsRY1jF216Rn5RcIPImMFzqCW9Wm2iRvzdSOBqz0epomcRXtXJZQ%2BTuVvOPu5rrdj4%2BoqeJKvy%2Bu7VMP%2FMYO6VOMYdulQqLfL6DJogWaHmWxKl8xE9pmWzXGTqoB%2FerpYSxlGlI8%2BufttuNa5dNm8F9m082KTQPfzTJ6eh57ynoJM2mbvebZD9z2W1fonaq8B%2FQM9casx%2BxG0t5%2FeTlUf68CKH350nSLWn6KY7OA3kqy2CbqScOIhKCdmfDyu4anlvg0wOiO8uaKwrHODbaypg8jOe5GW8D05JNEOIpIw76ixvwY6pgHXLBvGmsnbixA9kafj2%2FeRuLh%2F31oCD%2BxqONYSGHMHmWKsFm505jXDnn4iqIS6ol%2F93zqRnyL2PTa80lQ7gtfaKtBnJeHOI5Mi0idMtHNEUwUopcKZGlTUjyNviQb2p%2FPr9kekgYp8AxMTkmufCXqoP2EeGDreEtMjGIHRVgcjM6loo6j1p9zPH61g026CLcSRLa9apeZGrrQW1aeL8yvzYyevdEyV&X-Amz-Signature=42d4ab7cc8b1853348e77d47b8de4a1d07f6dbe339590b57c0d90d664fc55154&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
