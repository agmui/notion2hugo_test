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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HABYWK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyWUu26xckkPzjWQpTonMiWHESA8C63wrXnrFFDQMmlwIgTyRazmC272i0CvWpIMorWlY8zKgKf6%2FtkHfOL1G3%2FrwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8pbMrztr8X8z6czircA7EvmeQKhiAfM9dbAry9oaXGKFrziVYE5ZrjMXlHPFmve11REYU2S332m5HRjrh6LocsFymlUAe5hzSEIKR1lRuvtFDFdIoRlch71wCWUKgE1B4FSsjmyGssuotZSd4IdHTcH4FSgaibD0UoKmI%2F08CkBwdYFEEUSZbaG1XvNdQQJqxfNnOBlkaQB%2FOJQXtQBx9l15Y1m4fE51%2F2XVHYqHeMETkdnDILkf5ijaJCmZprf7XhalWkGi0NyXo1Wvd106CCaX8X4ydyBIgnwiAsEHwZlvvFzkwyuwTnfEDgfPjzc9tUwJ4I8yr2qnXTCDLvTUUUwAnynlpX8jMBzm%2FWKmaXipzij08CckCOjxvimIEpeq1jmU37gre8bFrDUrOLdOm%2Fe2f5d4WEoPH9haK45GvmUchLuF0zZ0BrMBpoM%2BbrI0kDb%2F5soS516Y5AsQck89W2Ku%2FwR%2BGd47byaJWcYhB%2FibZwP0uLx4joGLTBgcCJxsYeOoJOdKRmypPB0cavIiNHOW40GBC5wp0KKPMReg60kxxDdOyu8q6PB7cX8XiEp6ZgGrpoVx%2FZ5Qs4Xcv1NubaP8cjJkjMzMpXnxsO5gQODSGAXI%2B4x%2F5Ya8TF4rvxiwn4Qf8YL3mglnNVMO37uL8GOqUBbD97XNlLRbhpykcC3e1r%2Bin%2BHHNmyThKNnFeFCWxVZS27vTg0IwipSNQ0X2C%2FG6LbzuTnW9VhoSR22ETtqXOrZBs5LYN%2Bg8cq1SQIkpyPNa22ZryVgimAWmqUfij%2BDLwxjEaIkYQdNIXAgZM0QX7EsOr%2B%2BLeAD5wZAeqLpYKP2nNe2xZIxLSV3Rl13AaKYJyVNBWXVWbeqtb1R2%2BSr6P%2BKyX4je6&X-Amz-Signature=a1674f8c4ac6566b3c914e23df76e98408a507fe02c27835f0800c35165d377c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HABYWK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyWUu26xckkPzjWQpTonMiWHESA8C63wrXnrFFDQMmlwIgTyRazmC272i0CvWpIMorWlY8zKgKf6%2FtkHfOL1G3%2FrwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8pbMrztr8X8z6czircA7EvmeQKhiAfM9dbAry9oaXGKFrziVYE5ZrjMXlHPFmve11REYU2S332m5HRjrh6LocsFymlUAe5hzSEIKR1lRuvtFDFdIoRlch71wCWUKgE1B4FSsjmyGssuotZSd4IdHTcH4FSgaibD0UoKmI%2F08CkBwdYFEEUSZbaG1XvNdQQJqxfNnOBlkaQB%2FOJQXtQBx9l15Y1m4fE51%2F2XVHYqHeMETkdnDILkf5ijaJCmZprf7XhalWkGi0NyXo1Wvd106CCaX8X4ydyBIgnwiAsEHwZlvvFzkwyuwTnfEDgfPjzc9tUwJ4I8yr2qnXTCDLvTUUUwAnynlpX8jMBzm%2FWKmaXipzij08CckCOjxvimIEpeq1jmU37gre8bFrDUrOLdOm%2Fe2f5d4WEoPH9haK45GvmUchLuF0zZ0BrMBpoM%2BbrI0kDb%2F5soS516Y5AsQck89W2Ku%2FwR%2BGd47byaJWcYhB%2FibZwP0uLx4joGLTBgcCJxsYeOoJOdKRmypPB0cavIiNHOW40GBC5wp0KKPMReg60kxxDdOyu8q6PB7cX8XiEp6ZgGrpoVx%2FZ5Qs4Xcv1NubaP8cjJkjMzMpXnxsO5gQODSGAXI%2B4x%2F5Ya8TF4rvxiwn4Qf8YL3mglnNVMO37uL8GOqUBbD97XNlLRbhpykcC3e1r%2Bin%2BHHNmyThKNnFeFCWxVZS27vTg0IwipSNQ0X2C%2FG6LbzuTnW9VhoSR22ETtqXOrZBs5LYN%2Bg8cq1SQIkpyPNa22ZryVgimAWmqUfij%2BDLwxjEaIkYQdNIXAgZM0QX7EsOr%2B%2BLeAD5wZAeqLpYKP2nNe2xZIxLSV3Rl13AaKYJyVNBWXVWbeqtb1R2%2BSr6P%2BKyX4je6&X-Amz-Signature=b701f9ccab86315f05076c4d9b000b67beb059a41ddf9ec7baf2255f4346cd13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
