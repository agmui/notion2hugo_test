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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFCTRS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvqVUw5VMGpDU055h4ygyiXyW88bGxEuBODVZ0ITgRwIgWNg31x3bGqDcIcZXstpeVtYyrxU4jcnuhifZonAetbcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7QNGTB2lvSCVY71yrcAxcW5M4FRmfw9WYi8QG3jOuYjz%2FYF2zskB%2Fyd9yzZsD%2FnipteAIH2xvbu0Oscdp%2FrGPMEhfqLhACW0lVQDVO0y9zngCkbOLwKpfeS7uyuJGTG5Gxbf8MWSxCp35ESKyO7ALIQLAJZc6Bvsl5V3om26Y8DH2dLuCmC%2FyXAQMDHuZRcLRfHGrP%2F5AAgOlxrAStuzQZmqwKu1i9Hl2aU1FiF7%2FpWhSfXkXile9iN%2BnwzGHrSh1unNGQpbqsanEr8ckyWrO1eoJX15kXO7XsDNj3QU3hoqtMCy5R987T1PXErE8cXFKSrl6dmlgzW07Ol%2BOpNNTrwtpePZGwa0AYXJN0sPLa5BBDSNekacFzilmWoVKr%2FwC9xzdOM0gwRuO53KfgHi4NyWOjKYmk%2FYJhx2Q7Dcv5Ooup2ApTkOnbpPaA6akOsSpUsluF6To5Qe59QPetIiqPxo5P0sO4Jc8s56YWd54SyiAmSw2E2od35IVP2d9vHrSzsr1VEjrgaFeC6bebzy5LrNUgVjpy8qZNXRJjgmDelMy74%2FLhauUI1FtOV%2FxMik2DxXNpGoDf1xrp5yqx%2BzwykqKs5JNV1HD6D6QYY%2F0kgzryYxz5QUfZS9nSJGJSL7qbRV69WKlnxvA%2FMIST0r4GOqUBdbxnUV93qJXsU9NLNXIvtepf2uPlhW2CWwbkNH%2BDeLxCVSfGZySK7phjNbtVfigj6XhDcE%2Focff2Wo85S99mk194r6esmVWxB1Who9wQHbpz3w54rMOqCARYbj%2FWoaHIJGD82h55arqCDE4KGrW9gL2zdi85JUNG18I7RZOp7hVOexKDcj3eVjNSyOeb5nZbpS30niueab7TqTpw5O9yxc2QUfeE&X-Amz-Signature=364b3c2e0925c85701c99cea1c5182fdcff0409adb6e020241f5404bb4d9eb93&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFCTRS6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIvqVUw5VMGpDU055h4ygyiXyW88bGxEuBODVZ0ITgRwIgWNg31x3bGqDcIcZXstpeVtYyrxU4jcnuhifZonAetbcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7QNGTB2lvSCVY71yrcAxcW5M4FRmfw9WYi8QG3jOuYjz%2FYF2zskB%2Fyd9yzZsD%2FnipteAIH2xvbu0Oscdp%2FrGPMEhfqLhACW0lVQDVO0y9zngCkbOLwKpfeS7uyuJGTG5Gxbf8MWSxCp35ESKyO7ALIQLAJZc6Bvsl5V3om26Y8DH2dLuCmC%2FyXAQMDHuZRcLRfHGrP%2F5AAgOlxrAStuzQZmqwKu1i9Hl2aU1FiF7%2FpWhSfXkXile9iN%2BnwzGHrSh1unNGQpbqsanEr8ckyWrO1eoJX15kXO7XsDNj3QU3hoqtMCy5R987T1PXErE8cXFKSrl6dmlgzW07Ol%2BOpNNTrwtpePZGwa0AYXJN0sPLa5BBDSNekacFzilmWoVKr%2FwC9xzdOM0gwRuO53KfgHi4NyWOjKYmk%2FYJhx2Q7Dcv5Ooup2ApTkOnbpPaA6akOsSpUsluF6To5Qe59QPetIiqPxo5P0sO4Jc8s56YWd54SyiAmSw2E2od35IVP2d9vHrSzsr1VEjrgaFeC6bebzy5LrNUgVjpy8qZNXRJjgmDelMy74%2FLhauUI1FtOV%2FxMik2DxXNpGoDf1xrp5yqx%2BzwykqKs5JNV1HD6D6QYY%2F0kgzryYxz5QUfZS9nSJGJSL7qbRV69WKlnxvA%2FMIST0r4GOqUBdbxnUV93qJXsU9NLNXIvtepf2uPlhW2CWwbkNH%2BDeLxCVSfGZySK7phjNbtVfigj6XhDcE%2Focff2Wo85S99mk194r6esmVWxB1Who9wQHbpz3w54rMOqCARYbj%2FWoaHIJGD82h55arqCDE4KGrW9gL2zdi85JUNG18I7RZOp7hVOexKDcj3eVjNSyOeb5nZbpS30niueab7TqTpw5O9yxc2QUfeE&X-Amz-Signature=20ca8d3b50ee9e776395760604233d12c907c9b8e38fe6eeedc651056133beea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
