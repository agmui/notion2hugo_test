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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJVFBRI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICMDgRipWbc3LJ2t3KG0nIAQszZy%2BCT4qcksmOL6pqOYAiEAwED%2BcRIG1wogBkUIXxsn4jEUeO8g6%2BWiQ%2FINeOm%2BsO4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoGju2w1u6K%2FfaQfyrcAwXq35kBx1Qeu9BUA9kLrgniSvH%2F27WTsL%2BntK8FyRdZK3hVoFCpbUyESBppJTBGXXlNMofZi2e66%2BPDopRyURjNPjuoE27bedsW5TPZmpHY2wt9BxmDyAAQ%2B7KUnowODfNaL478DphyMzRfXF7Yc9qpi9VBLmcP9%2F48VWumtg7kBD26BH9PilfN%2FOsN5sddPl8duK7XL%2FpSfPtO3u%2B6dfb%2FY0G7xzSbw%2B8TgHc9x6Gjl7uroRm5bwOtAS1DZvKxVVSw5oq3n2sG1ApTk7Q8%2BCor%2FeGdNoBwlVDYT5WpxkQg9BY2R7G%2B3Ju5zQPl4AK9ofRSUdFID%2B3xo9IwuyuNNTpKNBURGCQQUsf7HZVcgOGbITdwaqNyZcc6dd%2BNNfO1dX5OoIF9j9eDUrW12MH1tjnr%2BYIM0QJjU0GThQRhODk5gGT8CInrAaWhjzXGE%2FiHfwzDhl5ZpOWmD%2FSRMLMUdL5X3MLpuVmuY8vtiJHAKnHchLL7A6fvlhDkvagkMDGf1SkFWyh8LwpW6HaouRlU%2Ff8SiqUgAD2Lj7qK4ZyT4RGTBq5jiWsZZCVHLWMSu8P%2Fo%2FkkZwlXhmpASvNAKcd1u390aVmZMgJM%2BR28O47XzArykg5tljuQOADQPEqFMJP71r0GOqUBpd%2B43n5IKQFqgsfh3%2Fz1Yg0SJrblIVxlrE6S2lPYlFqA5gNH5nGwVLCXZCFEsD%2F%2Fz0Z%2BmRPacI2MkNv7pGyM81a3kbUfKtYRVh5I31tY36%2Fka%2FrTnTmUzzBV%2BR5i%2B5ZKpbtEB4lLzDls0nBtiP3IrRKTG5CMKkgNbZwn1MvgyLqNahTGahWKGAgQ0wdrAxvWPFJaYgSrGNiCAFnx4DVnRXo9ggg6&X-Amz-Signature=b380c51dfda0ec62882f146fd4240b6e8196edf54156a6009c5775c590a345f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJVFBRI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICMDgRipWbc3LJ2t3KG0nIAQszZy%2BCT4qcksmOL6pqOYAiEAwED%2BcRIG1wogBkUIXxsn4jEUeO8g6%2BWiQ%2FINeOm%2BsO4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoGju2w1u6K%2FfaQfyrcAwXq35kBx1Qeu9BUA9kLrgniSvH%2F27WTsL%2BntK8FyRdZK3hVoFCpbUyESBppJTBGXXlNMofZi2e66%2BPDopRyURjNPjuoE27bedsW5TPZmpHY2wt9BxmDyAAQ%2B7KUnowODfNaL478DphyMzRfXF7Yc9qpi9VBLmcP9%2F48VWumtg7kBD26BH9PilfN%2FOsN5sddPl8duK7XL%2FpSfPtO3u%2B6dfb%2FY0G7xzSbw%2B8TgHc9x6Gjl7uroRm5bwOtAS1DZvKxVVSw5oq3n2sG1ApTk7Q8%2BCor%2FeGdNoBwlVDYT5WpxkQg9BY2R7G%2B3Ju5zQPl4AK9ofRSUdFID%2B3xo9IwuyuNNTpKNBURGCQQUsf7HZVcgOGbITdwaqNyZcc6dd%2BNNfO1dX5OoIF9j9eDUrW12MH1tjnr%2BYIM0QJjU0GThQRhODk5gGT8CInrAaWhjzXGE%2FiHfwzDhl5ZpOWmD%2FSRMLMUdL5X3MLpuVmuY8vtiJHAKnHchLL7A6fvlhDkvagkMDGf1SkFWyh8LwpW6HaouRlU%2Ff8SiqUgAD2Lj7qK4ZyT4RGTBq5jiWsZZCVHLWMSu8P%2Fo%2FkkZwlXhmpASvNAKcd1u390aVmZMgJM%2BR28O47XzArykg5tljuQOADQPEqFMJP71r0GOqUBpd%2B43n5IKQFqgsfh3%2Fz1Yg0SJrblIVxlrE6S2lPYlFqA5gNH5nGwVLCXZCFEsD%2F%2Fz0Z%2BmRPacI2MkNv7pGyM81a3kbUfKtYRVh5I31tY36%2Fka%2FrTnTmUzzBV%2BR5i%2B5ZKpbtEB4lLzDls0nBtiP3IrRKTG5CMKkgNbZwn1MvgyLqNahTGahWKGAgQ0wdrAxvWPFJaYgSrGNiCAFnx4DVnRXo9ggg6&X-Amz-Signature=bdc22c865872a4f1ddb4a6abc63c2eee58efc0355b2a4879bb30aa66dd472d97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
