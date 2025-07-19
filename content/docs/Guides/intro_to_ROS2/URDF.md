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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUULYI6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueGRdz%2BaYUyUwfrP1FXXiN4HFQCCE7jkaZy6iFc66MwIhAO3Mh63tWdQz67O%2FT4wgCbRsbix6r8t72a4P6R6FoTHUKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRCd6pgzA%2FWtz3LAq3ANV2XJRrcaz8%2BZHRYbH6EjJtvSdZnkjMMQDGS8xLaD4LHhSnMOehkBoiTOIEyqfMPngrsPKWt%2Bixxlw1kI6nli7jErPk1tv4VMqqVITDfh4U6fUekzZlu1nw5X2GGzx8fK6%2B6cs4JOeSZBKmhybKo5yP26eXlrdtQ3LvoEi8eizhRQZIryDqjTci1LgT8D0cliLN3Zo7ji6nR9YmhpKjmFcovnaNQpjjOeeBiaemBJlhGGNWOUNicszFZyW73sneVkwif1wPcXeMpA6hEtlJeazQLz0Mhl85OvSqk47CbWfrTBwSx3b2ZuZhg3qg8Eqo2vdTMXoFuJeXjANPgRkfZ2O%2FwXikllseWo4%2B%2BfjfjzQAR4lTxs7SGikYMLSlpBYcebwkvsRkfGBRRfw4MsY85UF9DBwJhQc1BMmRr6DGMnYW5lX6cCY4QEkncvI6KhuX4YNtTDT%2BuN%2F0HTt8XYVhfGEB4X%2BHxh730wkNNl4ZD4o9eP6QMOTtYhlJZwEeSUA4gn17UJAuk1pHGUfwd6PhvLDHXIu0WPpQVFSknGa5E6EUv7vQwyRVRZ4eR3HIibRCXImCuM%2BtrfVs5TQlTgfs1H8wpe6cjDnXybXuFziVaUBqnnFF%2F5NuJPUMkp4NjDbuO7DBjqkAU997ABjK3vVWygswhuYPwakcsHJLiIQ9jUdezAPkbZW%2BTCKGLA6IhsV9WiVKIN3SU3UblvzIb03r7taSk2AfjCcxDnBcDI9h52DOdJfHY%2Fv7vQ%2F7aKFaK1pvLrjDnRlyUeOPDv%2Fm6DeTscQlshOgoRKbrlupcgiYCVMDEQhIPWjvWjxCXCaoqbND4qWhGIt8MdQsGQqXCO3fhdDLI8Z%2FtrdUTSU&X-Amz-Signature=532c92c27f1b2d8f63bd9b5c9831ab023849d52155e7973bd95934a6b778f507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUULYI6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueGRdz%2BaYUyUwfrP1FXXiN4HFQCCE7jkaZy6iFc66MwIhAO3Mh63tWdQz67O%2FT4wgCbRsbix6r8t72a4P6R6FoTHUKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRCd6pgzA%2FWtz3LAq3ANV2XJRrcaz8%2BZHRYbH6EjJtvSdZnkjMMQDGS8xLaD4LHhSnMOehkBoiTOIEyqfMPngrsPKWt%2Bixxlw1kI6nli7jErPk1tv4VMqqVITDfh4U6fUekzZlu1nw5X2GGzx8fK6%2B6cs4JOeSZBKmhybKo5yP26eXlrdtQ3LvoEi8eizhRQZIryDqjTci1LgT8D0cliLN3Zo7ji6nR9YmhpKjmFcovnaNQpjjOeeBiaemBJlhGGNWOUNicszFZyW73sneVkwif1wPcXeMpA6hEtlJeazQLz0Mhl85OvSqk47CbWfrTBwSx3b2ZuZhg3qg8Eqo2vdTMXoFuJeXjANPgRkfZ2O%2FwXikllseWo4%2B%2BfjfjzQAR4lTxs7SGikYMLSlpBYcebwkvsRkfGBRRfw4MsY85UF9DBwJhQc1BMmRr6DGMnYW5lX6cCY4QEkncvI6KhuX4YNtTDT%2BuN%2F0HTt8XYVhfGEB4X%2BHxh730wkNNl4ZD4o9eP6QMOTtYhlJZwEeSUA4gn17UJAuk1pHGUfwd6PhvLDHXIu0WPpQVFSknGa5E6EUv7vQwyRVRZ4eR3HIibRCXImCuM%2BtrfVs5TQlTgfs1H8wpe6cjDnXybXuFziVaUBqnnFF%2F5NuJPUMkp4NjDbuO7DBjqkAU997ABjK3vVWygswhuYPwakcsHJLiIQ9jUdezAPkbZW%2BTCKGLA6IhsV9WiVKIN3SU3UblvzIb03r7taSk2AfjCcxDnBcDI9h52DOdJfHY%2Fv7vQ%2F7aKFaK1pvLrjDnRlyUeOPDv%2Fm6DeTscQlshOgoRKbrlupcgiYCVMDEQhIPWjvWjxCXCaoqbND4qWhGIt8MdQsGQqXCO3fhdDLI8Z%2FtrdUTSU&X-Amz-Signature=037bbedea689c7eaf2944d00118bb516bcdfc5905ed17cf3c052207daa658631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
