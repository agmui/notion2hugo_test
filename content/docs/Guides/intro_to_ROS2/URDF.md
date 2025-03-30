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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYIWXCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIG67i2SAeZcndqa4KQTTvzwq0x3ayswrLsWmezJAmEx3AiA3Cv20s6f3B6sEbkMbpdlw2rI2WYZA0SHmkTcIOVR%2BXSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnnLiUpkqkp6uUM60KtwDz3RWwyoydOaiDGHLD%2ByVsEbZ1yrj1LBuz1vsjUOUpJzvW6irTY5XHy89vAgiaVovxq0FX11AOTR62LMY5gVVazN%2F6snPakE%2Fz7I7bithTO%2BIa5yRnxs0h9f0lID3K%2BLm1PrDRavC5pS7sWb0wdy407eNdermN0tIVU0s4yrvp2sK6vvwR%2BSRHl%2B2p8OM1hHtfoSblB%2Fwc8pLVuPLIKUBWNg%2F9saUjfrPYbJzjKffEo5%2BJ1rSTbxIhhoQFK3bgDaLl4fS0X2G1hWORotHNChjiib0FXflGyPZHRMNZZLKOkdT1D2qE9qtre2WdZSuG8RqoTBkcGsSXTkiCnrHpR3ISYMop215wzh2JZ122J%2FX%2F7CApKTah15q9ZuYqtT7hE0EvsQpJ%2Beew5geC4XA0c8%2FdNLnMfK%2FQpXJ%2FSFFwo2FrYz4h0Y%2Bi905%2Bvge8%2BxrV5Zo%2FLM6JhdhszbPxmC2vQPcTYlaTRHj%2FCf6fURZZzwoHwlPsJZvhJL0G56SliYp8lm1b9UIvFvfMEDh6fLaLhBYRn6U9MAif3z6dMyEIhm9IGens7%2FCYKg93gaf9OP5fxxQVcCvjbqi0Eq%2BxukDbQPAq5WrltaBDgXwazbyNbI07Gor%2BBrhwJWNM7TnRqIwgfCjvwY6pgHqZOy985O4hNddeutEaElt%2FwlSQ2x3H2i%2Fan4FJ%2Ba6zP3IM3HTs17Qj4tr%2FWwqracudSceBKl2XyQcF3ry%2BeBTTRNZxLsno6sJNpdRZpNHO4fyYchPLei4Q%2BRwiQ2STlC1IsQq7N8gHq3RHWCE51TSTf6pD%2Fhd0do8EbOYTStIwL9aQN1SNA3M7AuEqgrACel9%2BD9tua4lVfzbmx879SnqDzw2PSy6&X-Amz-Signature=ac8c4e5304fb81df50e55f6b3c12e0dbecfa64e106caf6546089377e7441c363&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYIWXCW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIG67i2SAeZcndqa4KQTTvzwq0x3ayswrLsWmezJAmEx3AiA3Cv20s6f3B6sEbkMbpdlw2rI2WYZA0SHmkTcIOVR%2BXSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnnLiUpkqkp6uUM60KtwDz3RWwyoydOaiDGHLD%2ByVsEbZ1yrj1LBuz1vsjUOUpJzvW6irTY5XHy89vAgiaVovxq0FX11AOTR62LMY5gVVazN%2F6snPakE%2Fz7I7bithTO%2BIa5yRnxs0h9f0lID3K%2BLm1PrDRavC5pS7sWb0wdy407eNdermN0tIVU0s4yrvp2sK6vvwR%2BSRHl%2B2p8OM1hHtfoSblB%2Fwc8pLVuPLIKUBWNg%2F9saUjfrPYbJzjKffEo5%2BJ1rSTbxIhhoQFK3bgDaLl4fS0X2G1hWORotHNChjiib0FXflGyPZHRMNZZLKOkdT1D2qE9qtre2WdZSuG8RqoTBkcGsSXTkiCnrHpR3ISYMop215wzh2JZ122J%2FX%2F7CApKTah15q9ZuYqtT7hE0EvsQpJ%2Beew5geC4XA0c8%2FdNLnMfK%2FQpXJ%2FSFFwo2FrYz4h0Y%2Bi905%2Bvge8%2BxrV5Zo%2FLM6JhdhszbPxmC2vQPcTYlaTRHj%2FCf6fURZZzwoHwlPsJZvhJL0G56SliYp8lm1b9UIvFvfMEDh6fLaLhBYRn6U9MAif3z6dMyEIhm9IGens7%2FCYKg93gaf9OP5fxxQVcCvjbqi0Eq%2BxukDbQPAq5WrltaBDgXwazbyNbI07Gor%2BBrhwJWNM7TnRqIwgfCjvwY6pgHqZOy985O4hNddeutEaElt%2FwlSQ2x3H2i%2Fan4FJ%2Ba6zP3IM3HTs17Qj4tr%2FWwqracudSceBKl2XyQcF3ry%2BeBTTRNZxLsno6sJNpdRZpNHO4fyYchPLei4Q%2BRwiQ2STlC1IsQq7N8gHq3RHWCE51TSTf6pD%2Fhd0do8EbOYTStIwL9aQN1SNA3M7AuEqgrACel9%2BD9tua4lVfzbmx879SnqDzw2PSy6&X-Amz-Signature=a6cd5be31351f097e10e948b91ad9d6042e1d2cbe5ca7a2e10872fc819b59d91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
