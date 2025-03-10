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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHUIWSS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQC9i0Kmf02a7uhEypc0anV1r0E%2FONTROrw%2BWIPbZem0YAIhANCvzEr4xb5exiQgiKHfs9eWdbSiaYfY4FMkUiC6Z6DtKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuYteRqKaB72HSHZgq3APGkLYvpelnGJlHPJCdScZmeZGSKIEPYewVmPSC5LQveZSTceLj3aTOpYiProccK1qknC22UkKlvo9vpiq8RdBOhd4uRQrEcRHaBTixilzYkbpDOT6fRxTisAW5WfblBThdhMFQ%2BZQCDU4WTrQMpWse22a0KR8bXI7kd0Jekad0pUGI6wqfX2MpM5Vt9TeUrJU1Jbo1MrvAs3enysYbDbH6GuPU95jbNMZTnj7WNPOEDGU5reTUF7foPKEBifm885wojvG2En%2BaSv2v1mAfWVUExvK2dnCulEP5V74Brs1PwV%2BY%2Fi3yol%2B8ehmnkYCBX9JpoyJNMlV2sYESWmY1fJ6y9cAxTlN2h4edyiQZHHJVH8o%2Bj70qBlcrgqqA6qCItedz6jLDTEAJ25VbzqIe%2BxI0fRATcVhbcRhJjWFcQjLrFJnrojnC9KKZmY0bhPaKp4b%2BWxvfT57%2F%2FBap7EXfAyL4zag%2FIM9QM%2FgCe07uvdrIEszPu7b41mtK1kQWTb6KOvfgonINPXl4Do2Km1VSgDJpFYFn4qdUsaGsSdlEGfnRW6RzQlQKc4WxzK4VUy7BFspkE%2F5dHzUsv1UBI%2FJgg1UEif1chZN3gKn5K8LtFI98Sj98UD1Q20RYBnn2ITCXy7u%2BBjqkAXa9dItypAjD7OxK2w3U3Oa34ftk3OQyGKy6cgONFrHQtPTVvl%2BtEizARoCzE94QUyFqXGSpVEFyjEypH6Ax6N61K2B9MC8KWFo6yhKXawRmh1RK3EWUi%2F0ddDvPGMxZi44GjbuQNruTDZ1wKF6ay0FfjB44cmTHTNWCBnL2xUTfDtTEFddIOe5jOObZHm4Zg7egpTFMvFqrnZW4BmPD06RSTn2V&X-Amz-Signature=cc8ee3f046faab165e3c8da514c8f80fc8e1f2b6463cbaa76c20145f154dac5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHUIWSS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQC9i0Kmf02a7uhEypc0anV1r0E%2FONTROrw%2BWIPbZem0YAIhANCvzEr4xb5exiQgiKHfs9eWdbSiaYfY4FMkUiC6Z6DtKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuYteRqKaB72HSHZgq3APGkLYvpelnGJlHPJCdScZmeZGSKIEPYewVmPSC5LQveZSTceLj3aTOpYiProccK1qknC22UkKlvo9vpiq8RdBOhd4uRQrEcRHaBTixilzYkbpDOT6fRxTisAW5WfblBThdhMFQ%2BZQCDU4WTrQMpWse22a0KR8bXI7kd0Jekad0pUGI6wqfX2MpM5Vt9TeUrJU1Jbo1MrvAs3enysYbDbH6GuPU95jbNMZTnj7WNPOEDGU5reTUF7foPKEBifm885wojvG2En%2BaSv2v1mAfWVUExvK2dnCulEP5V74Brs1PwV%2BY%2Fi3yol%2B8ehmnkYCBX9JpoyJNMlV2sYESWmY1fJ6y9cAxTlN2h4edyiQZHHJVH8o%2Bj70qBlcrgqqA6qCItedz6jLDTEAJ25VbzqIe%2BxI0fRATcVhbcRhJjWFcQjLrFJnrojnC9KKZmY0bhPaKp4b%2BWxvfT57%2F%2FBap7EXfAyL4zag%2FIM9QM%2FgCe07uvdrIEszPu7b41mtK1kQWTb6KOvfgonINPXl4Do2Km1VSgDJpFYFn4qdUsaGsSdlEGfnRW6RzQlQKc4WxzK4VUy7BFspkE%2F5dHzUsv1UBI%2FJgg1UEif1chZN3gKn5K8LtFI98Sj98UD1Q20RYBnn2ITCXy7u%2BBjqkAXa9dItypAjD7OxK2w3U3Oa34ftk3OQyGKy6cgONFrHQtPTVvl%2BtEizARoCzE94QUyFqXGSpVEFyjEypH6Ax6N61K2B9MC8KWFo6yhKXawRmh1RK3EWUi%2F0ddDvPGMxZi44GjbuQNruTDZ1wKF6ay0FfjB44cmTHTNWCBnL2xUTfDtTEFddIOe5jOObZHm4Zg7egpTFMvFqrnZW4BmPD06RSTn2V&X-Amz-Signature=de297aa21a5df35c05b066aa4ca92d189312546ec99114f38ce8b9b1bafeb9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
