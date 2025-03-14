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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPL4JR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDDjEK9A1FE2CktzzaM45Bxls7M5R%2BQi9xjHVUhrZLwwIgcqxSMuy78kEybMzvbesvWTi4Cc3xjp%2Fh44eeLNWnbWoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnCKeN9pIuz1AHW1ircA4ZA7zXSSZnIqEUWk3FYlTx8D5YDbBDPid2NqI0tZj%2BWcahigQDTXHEXPmjYE0R0W%2Fr6sKtL%2FpIN3odF1eCUb0j6y%2FXv5Bs9AhXlwid7sB2AVsNhTbPuTQZUlJ0nihQgF%2B3ALgGpaWVZkvZaPRsUQDpwPNNZYUPtkJ15B6AS4FyHiBlJvfvc1ugelixfUeaOBm7kpYqnrw6%2FYlOysad8ho7AqrnbKacZuXM7%2FUj%2B1csjPPdXF3n4rl5iblwbYx79%2BBU7RZkj%2FNCn0e2Whrq4%2BBbS6DkmT71jSjRkJ2%2B1calwziLx06RnGYH8npld%2Ffw6eRruf43bJ5gRpexPeHVnnCS%2FNd1MWA0wZc3uXJ7n%2FnDYjcpPNEFPvS4SbNMTk0juR8aharAMBVmPoZ%2BAzQtGP4fjNQfHM5%2BJy1GfF94qafFfrqBMO9op6%2BmrY48ZJXJGjiOdyUSH%2BIe0RhetUNMGmsdNEpr8%2FFHq5GjoXQ9mH1mmUsR4VIcqlVvNUCbQTvcC46hhl0Nthe97Fx%2Bo3dSlER%2FGUAVGmG2G2Yqzuap1yqkgG2eaob6bYDLHOf7qnN%2FWsvdon8%2BfW4Nms9xfr%2FF9nnee2yzxtjAhsYARH7U%2FoBavzjNfGWHrY0iX9U9bMJGOzr4GOqUBbaLh%2FQhwdZDMLrt9z0u4QUD8CWN2PAj%2BcNjZaBThbIeDZ4EOxJRsMGwboDahI5424JPLqbcHqew14r5oUGhZ2ODC6KdNXjnX3l81VblSSRDoZcOkqvsfWX7M2cOVabg%2Bi%2FIBM1A9Gpmgjvhmu2oOm%2Bbvnc8xueC0uWOSMu2Jk2dxozgfa4zVqSR72uEd4pX%2BK4WE6Vfi%2FE8581mCui2Dl9g2YwVx&X-Amz-Signature=c65bbc8435acd6b9ddda3592c04ccf9779f8a408c39b92a64388e86413dda122&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPL4JR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDDjEK9A1FE2CktzzaM45Bxls7M5R%2BQi9xjHVUhrZLwwIgcqxSMuy78kEybMzvbesvWTi4Cc3xjp%2Fh44eeLNWnbWoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnCKeN9pIuz1AHW1ircA4ZA7zXSSZnIqEUWk3FYlTx8D5YDbBDPid2NqI0tZj%2BWcahigQDTXHEXPmjYE0R0W%2Fr6sKtL%2FpIN3odF1eCUb0j6y%2FXv5Bs9AhXlwid7sB2AVsNhTbPuTQZUlJ0nihQgF%2B3ALgGpaWVZkvZaPRsUQDpwPNNZYUPtkJ15B6AS4FyHiBlJvfvc1ugelixfUeaOBm7kpYqnrw6%2FYlOysad8ho7AqrnbKacZuXM7%2FUj%2B1csjPPdXF3n4rl5iblwbYx79%2BBU7RZkj%2FNCn0e2Whrq4%2BBbS6DkmT71jSjRkJ2%2B1calwziLx06RnGYH8npld%2Ffw6eRruf43bJ5gRpexPeHVnnCS%2FNd1MWA0wZc3uXJ7n%2FnDYjcpPNEFPvS4SbNMTk0juR8aharAMBVmPoZ%2BAzQtGP4fjNQfHM5%2BJy1GfF94qafFfrqBMO9op6%2BmrY48ZJXJGjiOdyUSH%2BIe0RhetUNMGmsdNEpr8%2FFHq5GjoXQ9mH1mmUsR4VIcqlVvNUCbQTvcC46hhl0Nthe97Fx%2Bo3dSlER%2FGUAVGmG2G2Yqzuap1yqkgG2eaob6bYDLHOf7qnN%2FWsvdon8%2BfW4Nms9xfr%2FF9nnee2yzxtjAhsYARH7U%2FoBavzjNfGWHrY0iX9U9bMJGOzr4GOqUBbaLh%2FQhwdZDMLrt9z0u4QUD8CWN2PAj%2BcNjZaBThbIeDZ4EOxJRsMGwboDahI5424JPLqbcHqew14r5oUGhZ2ODC6KdNXjnX3l81VblSSRDoZcOkqvsfWX7M2cOVabg%2Bi%2FIBM1A9Gpmgjvhmu2oOm%2Bbvnc8xueC0uWOSMu2Jk2dxozgfa4zVqSR72uEd4pX%2BK4WE6Vfi%2FE8581mCui2Dl9g2YwVx&X-Amz-Signature=bef8a0bceb74cbf8d33a1eeb429c1041237e9b7b9e96b5214a53705730c7acf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
