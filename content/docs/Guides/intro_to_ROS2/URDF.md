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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LF65EKQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICzLxqoucs%2FPfQFdYSt0mISuWMEkGaWk5bmC2vZ7DEg3AiAmFiYsllT5HmqFhkBXqR9s6nnNqgUH1xzPNF8dwWY7LCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMIDa7qdqwfSnh2bIHKtwDLm9%2F51U%2F%2BmQU5oNaWgTlKDndVexZi3y9UFHhEqIliaPdPFbx5jvhqgYopZLaVGzw1c4Itn5rdE1YUkYRiMR%2BmnHAModwABPfXWTZ63xmvek9zxUp%2BZ6I3Ju1tPMNaxrAMA%2FwOSRnh85Bem0I418ztZbCiGeqAcY7S33BYcVjAqNPXqESDCrfUdGBF5QlrqbsUZmD%2Fq%2BnTXK92%2FHiPNef4aLPnE7X7DvM7oCeGaBAMzqnma6KBV%2FzPrZfdOuc8iQ3O622%2FwOk9XJeuDEfGrzoabBbQqCS9rqfr5d68OPUVSN0CxUS7vZOlXP8cFI5DNlMPL3rfPrKdu5rre8N5F8pRSCglTnv3QePviSPf%2Fjo7rSNuUiV8eZ2bDGO5e0bwgfRNTPQ%2FuVRU18XyjT8oU1Dvq72s0kf9%2FifO31dpmP8A680zFqGwr%2FuLVcl0c7yFPn73OiWRYxsEkrf3FKj9qJtuNrCb%2BPHPIug%2FlENgnMO67I7jPkp3SLR9POM49rAeEPD1LKfdHMhoEL5DTmF4mn0RPYJvnwCH%2B7LvzczxyQgU%2B7OT62TIMtownGCbWWcakKtkexi6GHgj8Hy3LXHBXpNI9F176kU4PKqlWy2xUoa04ApiU5aZ0BBYnyYDlIw0eGZwwY6pgH7U2Fi%2BizyjE4O1quQZ%2F1BN5rnlUN7gGT42YJx%2BbtM6%2FjeQqZxUQx2Xxs3AS3pNpIu7tlFLWGBz%2BfJNRlvU3s9jcgy59OXuigEGsC2GhA8c3Fm%2FhN7%2F74zCizuNJ0kNEfpvWkc1rqs1ris30qoShHL4ZgZJ%2BL42AhPJU1SZDp2eefKYUzuz9H0KHvWcWejq0D03XgHh%2FjeJ3XG1%2BOC7t3Hjn1wxTpv&X-Amz-Signature=cccdbe4baaac9d04bd1f571527b2736bc1f2912949040e03e1987643cbf18e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LF65EKQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICzLxqoucs%2FPfQFdYSt0mISuWMEkGaWk5bmC2vZ7DEg3AiAmFiYsllT5HmqFhkBXqR9s6nnNqgUH1xzPNF8dwWY7LCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMIDa7qdqwfSnh2bIHKtwDLm9%2F51U%2F%2BmQU5oNaWgTlKDndVexZi3y9UFHhEqIliaPdPFbx5jvhqgYopZLaVGzw1c4Itn5rdE1YUkYRiMR%2BmnHAModwABPfXWTZ63xmvek9zxUp%2BZ6I3Ju1tPMNaxrAMA%2FwOSRnh85Bem0I418ztZbCiGeqAcY7S33BYcVjAqNPXqESDCrfUdGBF5QlrqbsUZmD%2Fq%2BnTXK92%2FHiPNef4aLPnE7X7DvM7oCeGaBAMzqnma6KBV%2FzPrZfdOuc8iQ3O622%2FwOk9XJeuDEfGrzoabBbQqCS9rqfr5d68OPUVSN0CxUS7vZOlXP8cFI5DNlMPL3rfPrKdu5rre8N5F8pRSCglTnv3QePviSPf%2Fjo7rSNuUiV8eZ2bDGO5e0bwgfRNTPQ%2FuVRU18XyjT8oU1Dvq72s0kf9%2FifO31dpmP8A680zFqGwr%2FuLVcl0c7yFPn73OiWRYxsEkrf3FKj9qJtuNrCb%2BPHPIug%2FlENgnMO67I7jPkp3SLR9POM49rAeEPD1LKfdHMhoEL5DTmF4mn0RPYJvnwCH%2B7LvzczxyQgU%2B7OT62TIMtownGCbWWcakKtkexi6GHgj8Hy3LXHBXpNI9F176kU4PKqlWy2xUoa04ApiU5aZ0BBYnyYDlIw0eGZwwY6pgH7U2Fi%2BizyjE4O1quQZ%2F1BN5rnlUN7gGT42YJx%2BbtM6%2FjeQqZxUQx2Xxs3AS3pNpIu7tlFLWGBz%2BfJNRlvU3s9jcgy59OXuigEGsC2GhA8c3Fm%2FhN7%2F74zCizuNJ0kNEfpvWkc1rqs1ris30qoShHL4ZgZJ%2BL42AhPJU1SZDp2eefKYUzuz9H0KHvWcWejq0D03XgHh%2FjeJ3XG1%2BOC7t3Hjn1wxTpv&X-Amz-Signature=0f1d0f8547b5892a80f5e0ded18c44b53c5ca61ea0e771976980e569be2b86c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
