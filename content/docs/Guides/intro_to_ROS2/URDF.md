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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NZFUOV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD90buBtvRSGZyeVoyqJ0a8OR%2FIqAjYzFHVX4YA4wCW6AIhALhoWxPS0ZkBnQ2o2H5hoUEVUIeRqNLYxusC8skS6KjWKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxywjNOdvxcC9crHMgq3AMqT3OfvtzLnp36Sle%2FnXBt6cFyE8gDf3GRPoQK1XMjFKQ8yf2tUcbN9tc4f8cJ2vgaQvPIHmLdY5PGQ3gZpxBOLZedf0q1jJ6mCzKxCPmfIpBogUhUmAUDGxm6Iju2Yli9ON9DhA5zTIp2x97tc6h1yKMK7TTQkPhX1g%2Fk%2FBGUbWI9zBTUkqK6CMQLJZs9R%2Fd6A%2BWrvFNhY66rXLZ%2BRoFZE%2Bwilk5mQcPGfSP25LJMcY8UpOgGx7Z49EnXQpkYKSCNlTHIv4hGsK9sy3UPYbb9AfE%2Fy5ETIGD6JZWAm5fg4XC7%2FvGSexk5pOKey%2Fw9bgtyhTdYuXxSGprBBg1sh%2FtblPUstBxyr%2Bdx%2FG%2BoV50hf2v%2FdrF%2BXy4FotIH0J92eEvql2P8fxF1Q4tKECcXKs677VtklzBnsmLEcAeVtaUbbZMTNNZry8csNQjSDpsG6%2BdxCibg2Ogeg7uP%2BawYjfmdRHXwXozLDnUN02zeUmWvGoox%2BgmqWrwWwrBdicno6vfWtL6lIb5hNC6VLLznVT7CX3llG%2FgUEq0E2ELtADTb7pJMHFLYmj52nF3bwTVhX9pJj33rcY7Ylt0M3iKBImLAyFa0%2FJ9h%2Bsn0sXTaO7sc7Un46XcLu2UBD%2Ba8jTCJ9MrCBjqkAcp5iLNOwA1kntr7HiLQFrtbutSOPddwpIgc24qtazXs5fa6ymV9lnS9iHeuTBJCoX3CwGkWEl30eX8cR%2FGdQIoPDDLwvo4H3VQKKxaFa%2FiK89kMKayEW5zOPw7Rvh9pqGWZGCAtoFu09kQlwJJQi5mNXEQSh3nGM7%2FgVCG%2B7hWN9sKBzHOK2VQ%2BgpJibdG45mg9tZoZ4U17MiXOZGBjOWNfcML9&X-Amz-Signature=71607ae6dae6214ee1e26c5e3bfa34854003f72c9908b75cae40ff90d47e9f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NZFUOV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD90buBtvRSGZyeVoyqJ0a8OR%2FIqAjYzFHVX4YA4wCW6AIhALhoWxPS0ZkBnQ2o2H5hoUEVUIeRqNLYxusC8skS6KjWKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxywjNOdvxcC9crHMgq3AMqT3OfvtzLnp36Sle%2FnXBt6cFyE8gDf3GRPoQK1XMjFKQ8yf2tUcbN9tc4f8cJ2vgaQvPIHmLdY5PGQ3gZpxBOLZedf0q1jJ6mCzKxCPmfIpBogUhUmAUDGxm6Iju2Yli9ON9DhA5zTIp2x97tc6h1yKMK7TTQkPhX1g%2Fk%2FBGUbWI9zBTUkqK6CMQLJZs9R%2Fd6A%2BWrvFNhY66rXLZ%2BRoFZE%2Bwilk5mQcPGfSP25LJMcY8UpOgGx7Z49EnXQpkYKSCNlTHIv4hGsK9sy3UPYbb9AfE%2Fy5ETIGD6JZWAm5fg4XC7%2FvGSexk5pOKey%2Fw9bgtyhTdYuXxSGprBBg1sh%2FtblPUstBxyr%2Bdx%2FG%2BoV50hf2v%2FdrF%2BXy4FotIH0J92eEvql2P8fxF1Q4tKECcXKs677VtklzBnsmLEcAeVtaUbbZMTNNZry8csNQjSDpsG6%2BdxCibg2Ogeg7uP%2BawYjfmdRHXwXozLDnUN02zeUmWvGoox%2BgmqWrwWwrBdicno6vfWtL6lIb5hNC6VLLznVT7CX3llG%2FgUEq0E2ELtADTb7pJMHFLYmj52nF3bwTVhX9pJj33rcY7Ylt0M3iKBImLAyFa0%2FJ9h%2Bsn0sXTaO7sc7Un46XcLu2UBD%2Ba8jTCJ9MrCBjqkAcp5iLNOwA1kntr7HiLQFrtbutSOPddwpIgc24qtazXs5fa6ymV9lnS9iHeuTBJCoX3CwGkWEl30eX8cR%2FGdQIoPDDLwvo4H3VQKKxaFa%2FiK89kMKayEW5zOPw7Rvh9pqGWZGCAtoFu09kQlwJJQi5mNXEQSh3nGM7%2FgVCG%2B7hWN9sKBzHOK2VQ%2BgpJibdG45mg9tZoZ4U17MiXOZGBjOWNfcML9&X-Amz-Signature=ac6575380e3aff01383af9603375139b8974e4033ed89b0b0acf62e1c55f9f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
