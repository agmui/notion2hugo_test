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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4UUESY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2m6NVCp%2Bhfo5O%2BsLaj5G7ttzAsP8p1sir37CmU%2BZApwIgDLuqum3ey8rC%2BdTWQJhp9yEwTkCDWM65TSvMKaESxxkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC35H91gV53dIbjPLircA2xL%2F%2Fa%2B%2BD5l1AYW6hkXXL96WPGM7TDiHTN1ZxFdptoeeKEpjgD7zDdIyl6gYix4%2FPmLO5qg4SgITNsqCpem9e77qpB6i6fgurPjgKuUWdYLHhEG1OVU6X5PgJMvUO6ZI%2FLfDnv6VGJHGxA472Thfp5jQDy5jmfisKZvJSmrQ%2FovcKAO0lwXeTDGkCRIJc1gkbN3kB4MG8c7DNlXbA3d%2FCs5eXwqHuJYZ3EBG2mzni31AztyjrWPpe4OhWbbHfjzjJiht6W9TSMGgKSTiCiYkUq4iJ14JbGyLVKA8x8QOsCiyRFfrbNyhWg1IaoTdBBruaEO9vLFh1L7SkiDDZ32e2YLkVIeHW7Qss0iOawlEUaaH4dU3z31ovIeL3kuJtaXa6Bl2iWeKOplrwELiAnNfyeHVvFf4lp4rkBPElWumbHKRGqpJyATWnUI1kuBQ3%2B9JfuUNe3VRGfv8D5g6%2BgZxbukDnh6mGiYAzxLrBL6NdGOgvq2ct0G7%2FOFDprszbeRfg9qdc%2BW8w46uf3vwAE4Uuq%2BG%2FdsHlXEmbP1iQnPfvMIZJekcoXeM7UgSm17lvk3ifcjgYCPRly%2F5RGl2JsOG7s3VtuMn4pguRDQe8IqetLcROVKldgfOi3pstfrMJGE68EGOqUBbN374nIVlzFlxIF6hA0qjfK8FEWpKzadcxDcp0Y%2FS4%2FWOgZG4LTITIVrc7%2B69uy9iMPiM%2BlMY0VcW3RyZqm%2FZTv9xxWXORV9rQhARwUA53r8x81%2BQ9qsOAIMKB0Gsjpnink1jjoQrU1vzcko7cje0Vm7bwgDKaiOdM6sxAlWENEK6Inz4JzqBeq9hcRdCfCKn9%2Bu4lm5iGkPm%2Fr2FKYbNaMgWJxv&X-Amz-Signature=24b43b17436e92fbd6f1c8b01eb3f89d876aa537538bac4c44b5afa38770e1ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4UUESY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2m6NVCp%2Bhfo5O%2BsLaj5G7ttzAsP8p1sir37CmU%2BZApwIgDLuqum3ey8rC%2BdTWQJhp9yEwTkCDWM65TSvMKaESxxkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC35H91gV53dIbjPLircA2xL%2F%2Fa%2B%2BD5l1AYW6hkXXL96WPGM7TDiHTN1ZxFdptoeeKEpjgD7zDdIyl6gYix4%2FPmLO5qg4SgITNsqCpem9e77qpB6i6fgurPjgKuUWdYLHhEG1OVU6X5PgJMvUO6ZI%2FLfDnv6VGJHGxA472Thfp5jQDy5jmfisKZvJSmrQ%2FovcKAO0lwXeTDGkCRIJc1gkbN3kB4MG8c7DNlXbA3d%2FCs5eXwqHuJYZ3EBG2mzni31AztyjrWPpe4OhWbbHfjzjJiht6W9TSMGgKSTiCiYkUq4iJ14JbGyLVKA8x8QOsCiyRFfrbNyhWg1IaoTdBBruaEO9vLFh1L7SkiDDZ32e2YLkVIeHW7Qss0iOawlEUaaH4dU3z31ovIeL3kuJtaXa6Bl2iWeKOplrwELiAnNfyeHVvFf4lp4rkBPElWumbHKRGqpJyATWnUI1kuBQ3%2B9JfuUNe3VRGfv8D5g6%2BgZxbukDnh6mGiYAzxLrBL6NdGOgvq2ct0G7%2FOFDprszbeRfg9qdc%2BW8w46uf3vwAE4Uuq%2BG%2FdsHlXEmbP1iQnPfvMIZJekcoXeM7UgSm17lvk3ifcjgYCPRly%2F5RGl2JsOG7s3VtuMn4pguRDQe8IqetLcROVKldgfOi3pstfrMJGE68EGOqUBbN374nIVlzFlxIF6hA0qjfK8FEWpKzadcxDcp0Y%2FS4%2FWOgZG4LTITIVrc7%2B69uy9iMPiM%2BlMY0VcW3RyZqm%2FZTv9xxWXORV9rQhARwUA53r8x81%2BQ9qsOAIMKB0Gsjpnink1jjoQrU1vzcko7cje0Vm7bwgDKaiOdM6sxAlWENEK6Inz4JzqBeq9hcRdCfCKn9%2Bu4lm5iGkPm%2Fr2FKYbNaMgWJxv&X-Amz-Signature=efaf7f4a764042d9b0d4c283b32ec582eca5892d7c446eaa9e65291cbc6cb908&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
