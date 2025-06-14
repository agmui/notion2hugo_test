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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZCBSZ4H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDU3sVsqOV3XCHDJnG50tvUavyqqH5QX0XgtORGznbshgIgVYwnCPx05veZISC135WXXLCxCl8%2BGLtVZm2BBM5EpJsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKGycZiGQ5Y8CzgUcSrcAzFkTedpzCbh7F2gv2Q3DyXTLvwuIml8W3v9QXgZOyYzxkdgyKBHzDhvgxFDg2JEHol473M4JXan%2BLcKxPF0iCMqd4ZxYcxGUKekM8d5rF12qE9LxheqW55smYOS%2B0HlOsZohz%2FLHIBI7QXL07BrvJKOQELMLZFdhjc6CaANYSFcLWM4MqM3MMucXq%2Bb1zF50td4eSevUKA8JzQWm1Qp4U6S6JuUSee46mMw9pKOXgnneQ7NedbGsU67OxWK7jiXWpirzFIowpF2uoJh5WLCyOJGbFy0gQIfwk%2F0rOFOeDmtl8WA06jdyaMU6502dw%2Bs1OA85YZVAeHoxqzgS3sSlI9jiP4Ha3Wk5WumGKFPb9Nu%2BSQWlm%2FNKFBJxL8mSFUNFy9XcZxJd8ienHlQiidvES1J%2BNAYXR%2Fhe22nzA6RgKIosyGaa4zy4l77gI0j40MYRT5lu2pCbiX0H5TIaQeMS8eaXWkWyUE14Gx2XoTdkAZLwX6Zh7BhBe178keOu9IrSyAkw9tsMfY1OHheDSruD1CNBLrCyn1qKZOuyobMGttDkXMVtkbUEpmlDvsbM9xsQc8dvqbf3thJwvF6uZgaRoxVeOWLciy4i%2BD1hNYfwxvrc5sfJUyyExJxjFEMMJq7tsIGOqUB9VCtinr2DISRsqkCjau2HvYu5VY%2FTtPywck4oZ8mAUxxRQoKAIUBEZnx%2Bxfx4KbUUVTbJ7ydKpP%2BDP18zjckfh1tLqaRSGbLLEFE7JNFuH%2BUwE4nzCohonqCK30aif0U2gAWtxIjR9jd%2FEOw9jUr689YM%2F9tU2IU%2FAxjSDJwCj1mVey3grJKGy9sKxSSodE%2FYwclISHJW7tzJgj5z%2B4RmNoE0NCV&X-Amz-Signature=1384d6cb79418e530393edd0158504fd0372822bd6c1709d0c6117ae8dbd9ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZCBSZ4H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDU3sVsqOV3XCHDJnG50tvUavyqqH5QX0XgtORGznbshgIgVYwnCPx05veZISC135WXXLCxCl8%2BGLtVZm2BBM5EpJsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKGycZiGQ5Y8CzgUcSrcAzFkTedpzCbh7F2gv2Q3DyXTLvwuIml8W3v9QXgZOyYzxkdgyKBHzDhvgxFDg2JEHol473M4JXan%2BLcKxPF0iCMqd4ZxYcxGUKekM8d5rF12qE9LxheqW55smYOS%2B0HlOsZohz%2FLHIBI7QXL07BrvJKOQELMLZFdhjc6CaANYSFcLWM4MqM3MMucXq%2Bb1zF50td4eSevUKA8JzQWm1Qp4U6S6JuUSee46mMw9pKOXgnneQ7NedbGsU67OxWK7jiXWpirzFIowpF2uoJh5WLCyOJGbFy0gQIfwk%2F0rOFOeDmtl8WA06jdyaMU6502dw%2Bs1OA85YZVAeHoxqzgS3sSlI9jiP4Ha3Wk5WumGKFPb9Nu%2BSQWlm%2FNKFBJxL8mSFUNFy9XcZxJd8ienHlQiidvES1J%2BNAYXR%2Fhe22nzA6RgKIosyGaa4zy4l77gI0j40MYRT5lu2pCbiX0H5TIaQeMS8eaXWkWyUE14Gx2XoTdkAZLwX6Zh7BhBe178keOu9IrSyAkw9tsMfY1OHheDSruD1CNBLrCyn1qKZOuyobMGttDkXMVtkbUEpmlDvsbM9xsQc8dvqbf3thJwvF6uZgaRoxVeOWLciy4i%2BD1hNYfwxvrc5sfJUyyExJxjFEMMJq7tsIGOqUB9VCtinr2DISRsqkCjau2HvYu5VY%2FTtPywck4oZ8mAUxxRQoKAIUBEZnx%2Bxfx4KbUUVTbJ7ydKpP%2BDP18zjckfh1tLqaRSGbLLEFE7JNFuH%2BUwE4nzCohonqCK30aif0U2gAWtxIjR9jd%2FEOw9jUr689YM%2F9tU2IU%2FAxjSDJwCj1mVey3grJKGy9sKxSSodE%2FYwclISHJW7tzJgj5z%2B4RmNoE0NCV&X-Amz-Signature=7a12773ade77feca42db4aab6ee57f3e9166257212d8647800a19ee861e2d467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
