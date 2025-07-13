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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJUM55P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDViksz7kHY4e0t9SPkDf2ejD9bdav3IKvWFuZLw0nqSAIgT5RcCcDRI2kd6g2%2FZavat4RapebLf03icg9nG2x6L9Eq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDByxPOE7hRHGQ8mLRyrcA%2BuTJz1lMcbW4l6pw3%2FKRyn2RELIDXGAbM1Lc32Tb7c8VmofYpRzeyMBt7EeelJBEkQkVwYh6fOHqK1iE5FMVQwKlumch0YB5mMegK%2Fyh2QVfgzmxMuJKr4T2C1E87FdSjO3udVMruZ%2FvLpbaWmFKcaPbZ3JYzo0VezM4B3awfUm58Ndl24I3S97ZVA5JGyF%2BytEjePMxREH0IA5xT%2FxgrJ6RBz3UGH2X%2BZVM3%2FKKFDkbrrUKloBowhPjcy8N%2B4JJeENJaaQidCXy6wraOAqbs7zfm2QlKDUHkjp4DE2H4VrF3cgVkwXucrUZ1d1TxqQkxkrmnxAfMNh1oCTvnqTH3NoVqTtAeCLd%2B1QHMrqWKLhLb4Yt6iYgl0P3EosyUj%2F3KkmId6jngqup9RsnUDdgTiEoXFDaSTkuGqwmpyFslxHZWnY9ohhsMUqQbRVIRvmnRyxGZO2nZOnsEE6nisGAptYR%2FResTFeMV6eUpTX9TKeYXDYZvupzP33G7LiXdgwV3faP8cN2yd0edzxhM1o2WnQYd%2Ffjm9ZBE2rVb8ppIGblv8%2BaJ5nJBLL4G%2F1gb%2FTSjgCaMXDXizF5KM6p9y3xYhWo61YLYFt02c4x2T9BxCwO6h8QMNseKmp8tC%2FMLykzcMGOqUBGyMr%2Bz7fg21cOqjFUxGbvIqhAHQipji3Enty0hf0SsgUItYbt3V4%2B37QrV5ubFHtLY08XJc6GAPQ4UeAzlDI%2FaVClmTrv5mgK4FsGa0q9%2FEifCapnCmTKPO1cO4We%2FCzmJ9c1N%2Fgmxa1ressOKwFhQv1yJpvDEi93OqVsSHNBYmpALQVhVAnL23fGtQpYYPdUxhhfeGlMyPTdAOdgZB%2FoBgbzQm%2B&X-Amz-Signature=224bfd10b75dcd8286de7db7157349d563442f26018b9a085d258a91479fe30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJUM55P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDViksz7kHY4e0t9SPkDf2ejD9bdav3IKvWFuZLw0nqSAIgT5RcCcDRI2kd6g2%2FZavat4RapebLf03icg9nG2x6L9Eq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDByxPOE7hRHGQ8mLRyrcA%2BuTJz1lMcbW4l6pw3%2FKRyn2RELIDXGAbM1Lc32Tb7c8VmofYpRzeyMBt7EeelJBEkQkVwYh6fOHqK1iE5FMVQwKlumch0YB5mMegK%2Fyh2QVfgzmxMuJKr4T2C1E87FdSjO3udVMruZ%2FvLpbaWmFKcaPbZ3JYzo0VezM4B3awfUm58Ndl24I3S97ZVA5JGyF%2BytEjePMxREH0IA5xT%2FxgrJ6RBz3UGH2X%2BZVM3%2FKKFDkbrrUKloBowhPjcy8N%2B4JJeENJaaQidCXy6wraOAqbs7zfm2QlKDUHkjp4DE2H4VrF3cgVkwXucrUZ1d1TxqQkxkrmnxAfMNh1oCTvnqTH3NoVqTtAeCLd%2B1QHMrqWKLhLb4Yt6iYgl0P3EosyUj%2F3KkmId6jngqup9RsnUDdgTiEoXFDaSTkuGqwmpyFslxHZWnY9ohhsMUqQbRVIRvmnRyxGZO2nZOnsEE6nisGAptYR%2FResTFeMV6eUpTX9TKeYXDYZvupzP33G7LiXdgwV3faP8cN2yd0edzxhM1o2WnQYd%2Ffjm9ZBE2rVb8ppIGblv8%2BaJ5nJBLL4G%2F1gb%2FTSjgCaMXDXizF5KM6p9y3xYhWo61YLYFt02c4x2T9BxCwO6h8QMNseKmp8tC%2FMLykzcMGOqUBGyMr%2Bz7fg21cOqjFUxGbvIqhAHQipji3Enty0hf0SsgUItYbt3V4%2B37QrV5ubFHtLY08XJc6GAPQ4UeAzlDI%2FaVClmTrv5mgK4FsGa0q9%2FEifCapnCmTKPO1cO4We%2FCzmJ9c1N%2Fgmxa1ressOKwFhQv1yJpvDEi93OqVsSHNBYmpALQVhVAnL23fGtQpYYPdUxhhfeGlMyPTdAOdgZB%2FoBgbzQm%2B&X-Amz-Signature=66da78c56a61a0b266d72dff093e34cc2cbcc63c0bc2714d0fb08bd0a69cb0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
