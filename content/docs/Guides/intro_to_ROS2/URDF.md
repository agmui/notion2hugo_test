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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAM4SOY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIA99uTzNXZXmIaCG0Grg0bCEopSh7VfocVrOW369VhNEAiEAhO4eWhL006Nad0gPJ5arVZxcoIaiw2RomzskpwY%2BJrwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKAeykc8DF8wGx85circAxwK1%2BnIMTdv7w978Lce0QBcnp25IiRw3yYolMvWEmSaM7Jqv4S%2Fp8S%2Fw09KZI0lfV17yemXtqORMgrFw6hG1PwfMaLwW7UxS94aBH7nSEfR7d6eQC4lPOhchzaRPJFTFGexFfFHwIJmv%2FrQ%2FerQgmqBSO0%2BKynGq4Xw8GWJfIdEswe%2Bb5r5uFZs1HwkuuGReOlS5Ye5R%2FzlD8Hdb1BnSn59gyPzjt%2BW2yCBOH%2FxtPVjA%2BXCmgkOXlwfpuK0dlheB%2BfR6pHXtLlCPey%2FzNk6Gt6GbPQNNRpPaauZG6xXShZgWPIPdSeANwg9GUP99TrYcaTFDAOvDB0YwR7h0vxiWazXGMJVXvOZ69zWGQELBLlV5ndKfKm7QVD%2BS9EtSd4clbGByzS2HYvlWbAhl63liFaTo%2BAsM5SEUKad7Ep2wICLRypPl7lXHc4lYDsnrHn%2FmFIfgCLnm%2FuVD5eLzASXB0ZvJLLe6mZeNIhU8zf6QxTC3KGeLW7r3t2gahx8h14gQIs2Q1jjPVrEjkstKHhj%2BS1BxVvoITvG1CbA3EvggW%2BSexYTsJettJmgUX%2BngsSOwymoZ%2BUSMkJQot45s3UjQqEK2HDWiOu8jzLMW6u4K6GtcF59GdnKjsBdyuPJMNO038MGOqUBtbQgvuiHFmLs%2BB1UY%2F5aD%2FRuAAa%2BqLCIEIYA79GzBij30V4Jd3UgqoLMifRhhF4Za8P%2BQpYdBBbOm3laS43KEZh8ylwBUEBZ65Arbj54pKu2ybCP162SoLO5AHzbYky1nT8WjBuTH6KKwwqNC2%2BH%2B%2B%2BYe46eDdbp7lb40MPWQYjwMmL8OKXm98jcylRVvu8ZPwQTmSSD9IWt%2FRyFwkZBkLHOn9g0&X-Amz-Signature=c1849e7d12768eba2fee0274b96aeaa25034c107cbb73bb01f085f57f822d332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAM4SOY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIA99uTzNXZXmIaCG0Grg0bCEopSh7VfocVrOW369VhNEAiEAhO4eWhL006Nad0gPJ5arVZxcoIaiw2RomzskpwY%2BJrwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKAeykc8DF8wGx85circAxwK1%2BnIMTdv7w978Lce0QBcnp25IiRw3yYolMvWEmSaM7Jqv4S%2Fp8S%2Fw09KZI0lfV17yemXtqORMgrFw6hG1PwfMaLwW7UxS94aBH7nSEfR7d6eQC4lPOhchzaRPJFTFGexFfFHwIJmv%2FrQ%2FerQgmqBSO0%2BKynGq4Xw8GWJfIdEswe%2Bb5r5uFZs1HwkuuGReOlS5Ye5R%2FzlD8Hdb1BnSn59gyPzjt%2BW2yCBOH%2FxtPVjA%2BXCmgkOXlwfpuK0dlheB%2BfR6pHXtLlCPey%2FzNk6Gt6GbPQNNRpPaauZG6xXShZgWPIPdSeANwg9GUP99TrYcaTFDAOvDB0YwR7h0vxiWazXGMJVXvOZ69zWGQELBLlV5ndKfKm7QVD%2BS9EtSd4clbGByzS2HYvlWbAhl63liFaTo%2BAsM5SEUKad7Ep2wICLRypPl7lXHc4lYDsnrHn%2FmFIfgCLnm%2FuVD5eLzASXB0ZvJLLe6mZeNIhU8zf6QxTC3KGeLW7r3t2gahx8h14gQIs2Q1jjPVrEjkstKHhj%2BS1BxVvoITvG1CbA3EvggW%2BSexYTsJettJmgUX%2BngsSOwymoZ%2BUSMkJQot45s3UjQqEK2HDWiOu8jzLMW6u4K6GtcF59GdnKjsBdyuPJMNO038MGOqUBtbQgvuiHFmLs%2BB1UY%2F5aD%2FRuAAa%2BqLCIEIYA79GzBij30V4Jd3UgqoLMifRhhF4Za8P%2BQpYdBBbOm3laS43KEZh8ylwBUEBZ65Arbj54pKu2ybCP162SoLO5AHzbYky1nT8WjBuTH6KKwwqNC2%2BH%2B%2B%2BYe46eDdbp7lb40MPWQYjwMmL8OKXm98jcylRVvu8ZPwQTmSSD9IWt%2FRyFwkZBkLHOn9g0&X-Amz-Signature=f5fe625c3c18ea3d944aa2f772d6ef00770d5571ae9b11f4e0889f7b5a34703a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
