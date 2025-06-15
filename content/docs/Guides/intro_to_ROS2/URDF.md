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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCRVBSIF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCMFLmcuFVDMnPepOTohiIqQPz6STuQdTWfbZjRPFT5HgIgCCVbOL1yOmye7GMPf%2F13L%2F39wEQ0%2BEI0u%2F4ufoKQJlIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKPl93tueGKKtyIgwyrcAyCxzUzpdtYMLx2VIf5rEDtNw9NlRVY0xI6B5oQgXJnFXyxL68xwmQz0IdLs4m9ZnBvxa7roIc%2F79neeo7kKEJJC9lc8R4CMN3fw5tXq1yJsXpQbZ4kzIe1oc%2Fn2E2YWTaW4yR293EyzvkcMfEOd2u14bmXvVZw8i%2F7A3iO1G5rzCkqLeDv7SrbtUA16sAsLeEAjvQaJsj0jpuJPuraES1bZ%2FEghAL9%2FD%2FuH82yv8rth5WZpahy3DAPmsmdqQSwmDcXbbb2HbIAH6vYGZcvTeSQWIuUjiUitMj88oRQBe%2F7YLVBjdmPK16xEJGboR1%2FeVaCwKGebKPrLs3HjzywTqBlUufJI0QQmrdRP23KyVLuiHP0vc9CPw831Kwq8odV32XGDildDh3HX%2F%2BB%2BL%2FZ7K9tlR%2FO7Aj56Kf1yEJPhY7jOIpfpjr8MesFim0SzXVqSKu51AJkn98xGdjS9HxpRnICv6UT%2BpAINsks6%2B%2B9ZxIFCnL8c%2FOTOv5jS8Rf%2B3trGOaGL6GFztHBJUtekQVXPeZrRokP5ohHyHGqRrdK4%2B2RhZ4TtXwsE6Vy3FNiNwnAIGdlx0gkfPHKFT6ihVFe2VYi9k1313COMaEiHtEDc4VK5x2YvVfRuwZ7hofejMJ%2BsucIGOqUBn6OgNuDSNF2KseB0B%2BOAuxpmCUE9XP%2Bkf66XlSMMjNYm3jAClVAarF0L6Fuh6u4SoqPu1pIOS%2FmEn91M4cIRiE81hRM2DoUpoD8FOC03fB6GJp%2F4hKs8%2Fz%2FiJeeNPrfl93GSM%2BQxzmmK3qpDgETvp5lu7N4yhAqaMh3PNTKaM%2FG4cP0NKpYuXDhoCOL5rQORqnh9H7pWQNxwr5eRn%2BWEgl6HrXoT&X-Amz-Signature=091b3224a9d0eb41413987d6e937c02592b75c844fd61d1d9bf6dd73397e91e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCRVBSIF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCMFLmcuFVDMnPepOTohiIqQPz6STuQdTWfbZjRPFT5HgIgCCVbOL1yOmye7GMPf%2F13L%2F39wEQ0%2BEI0u%2F4ufoKQJlIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKPl93tueGKKtyIgwyrcAyCxzUzpdtYMLx2VIf5rEDtNw9NlRVY0xI6B5oQgXJnFXyxL68xwmQz0IdLs4m9ZnBvxa7roIc%2F79neeo7kKEJJC9lc8R4CMN3fw5tXq1yJsXpQbZ4kzIe1oc%2Fn2E2YWTaW4yR293EyzvkcMfEOd2u14bmXvVZw8i%2F7A3iO1G5rzCkqLeDv7SrbtUA16sAsLeEAjvQaJsj0jpuJPuraES1bZ%2FEghAL9%2FD%2FuH82yv8rth5WZpahy3DAPmsmdqQSwmDcXbbb2HbIAH6vYGZcvTeSQWIuUjiUitMj88oRQBe%2F7YLVBjdmPK16xEJGboR1%2FeVaCwKGebKPrLs3HjzywTqBlUufJI0QQmrdRP23KyVLuiHP0vc9CPw831Kwq8odV32XGDildDh3HX%2F%2BB%2BL%2FZ7K9tlR%2FO7Aj56Kf1yEJPhY7jOIpfpjr8MesFim0SzXVqSKu51AJkn98xGdjS9HxpRnICv6UT%2BpAINsks6%2B%2B9ZxIFCnL8c%2FOTOv5jS8Rf%2B3trGOaGL6GFztHBJUtekQVXPeZrRokP5ohHyHGqRrdK4%2B2RhZ4TtXwsE6Vy3FNiNwnAIGdlx0gkfPHKFT6ihVFe2VYi9k1313COMaEiHtEDc4VK5x2YvVfRuwZ7hofejMJ%2BsucIGOqUBn6OgNuDSNF2KseB0B%2BOAuxpmCUE9XP%2Bkf66XlSMMjNYm3jAClVAarF0L6Fuh6u4SoqPu1pIOS%2FmEn91M4cIRiE81hRM2DoUpoD8FOC03fB6GJp%2F4hKs8%2Fz%2FiJeeNPrfl93GSM%2BQxzmmK3qpDgETvp5lu7N4yhAqaMh3PNTKaM%2FG4cP0NKpYuXDhoCOL5rQORqnh9H7pWQNxwr5eRn%2BWEgl6HrXoT&X-Amz-Signature=3bc70137cbe0322ed5c17d64d16d70541deb85fca6a99aff324e8e5605397c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
