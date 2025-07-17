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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVM63N3J%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC%2B16WTw6WrohyfTu26kJmDvnlfS%2Bf1OQYE7u99PaU1jwIhAI9zsgx9ywS7RtKg87VCzt3zSbBcudmfqb9X7zXK21bLKv8DCHMQABoMNjM3NDIzMTgzODA1IgwjSaAjDwlvA7TJRygq3APsQIK0bFgF8pVfRkeFg0JhwCTDGjbk%2BIO9vm8UWUbg7ud%2BL0%2FmvWMjOUct982bGNWlRNlD%2FWCw882qGRUu4R5g4HvugwbF%2FKyje%2BgDCcw4llz0qGEENVWkxp%2BG%2F41IUJuH2SQoOkFbiD4rov0Ho%2FF8OjEW9iW0f86F1Bkb3mzFQcjg4WZJrDmS2Xw3nk67nVzJiiptgjEVnomlHe97RBDvFQpA5S8E3XREcdc4cCMRoi7ROJd0ob2kchTkW8MpP3Stup2dJ9cIpU5%2BH31EUoHuqmCZlQS966%2Fhbt05FZql7jU8SP1jRsq%2FsaWFn4qlYLHivS5tnMagEOyPstd34S%2FNkHS76%2BeDbS1mF00zhpnXIlPG470njdpF5f0j7RbZg3MGNu0PMFJwfM0Rvaxx1CSppkZh2LaChZ5OCezfK8nGKoaRNZ8FN7XgDyzjUv0MlkRqiLkS55LpwP%2BMfc%2FEd8GzKKlzmpFOgTO1VRud4PEcRhPO9bfdO2kzZGEV%2FT63l9alnsHxZfR3QZnFtjhrNrYiUYCLhhqJozHqPyCubmI8IUcJxcmTc3xrMcrjGRKpHh04iyj4r64rWFfuX5iDU1yN4gZLuY4YHgEBg21gn8VLp8rV8x3%2BLF5u5V2NHDD1kePDBjqkAfz0Qnr2nru5wr4JBzxfwPWZfILPM3k39L2BqHMiSRq%2BXsk0D5v2lzKcs37WBhO8g4epmcBLALUTEaUcbPIc4VyxW4KImLKSJpXXLudTOxOFfvw%2FmEZp8KIwLv8o4z9rwysYy6Ps9jQY0ockUyOlPuaVs%2FVs39p2jRlwugbwDgqK%2BIaE7cm%2FXEHqD3SwnIbArmfvz9feyQy6Z86ZRc%2Bri9hgjGeT&X-Amz-Signature=56af9314697f357bf0c3eda7a1e31b5f6c649f15ece0bdee237cdd2eac20a79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVM63N3J%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC%2B16WTw6WrohyfTu26kJmDvnlfS%2Bf1OQYE7u99PaU1jwIhAI9zsgx9ywS7RtKg87VCzt3zSbBcudmfqb9X7zXK21bLKv8DCHMQABoMNjM3NDIzMTgzODA1IgwjSaAjDwlvA7TJRygq3APsQIK0bFgF8pVfRkeFg0JhwCTDGjbk%2BIO9vm8UWUbg7ud%2BL0%2FmvWMjOUct982bGNWlRNlD%2FWCw882qGRUu4R5g4HvugwbF%2FKyje%2BgDCcw4llz0qGEENVWkxp%2BG%2F41IUJuH2SQoOkFbiD4rov0Ho%2FF8OjEW9iW0f86F1Bkb3mzFQcjg4WZJrDmS2Xw3nk67nVzJiiptgjEVnomlHe97RBDvFQpA5S8E3XREcdc4cCMRoi7ROJd0ob2kchTkW8MpP3Stup2dJ9cIpU5%2BH31EUoHuqmCZlQS966%2Fhbt05FZql7jU8SP1jRsq%2FsaWFn4qlYLHivS5tnMagEOyPstd34S%2FNkHS76%2BeDbS1mF00zhpnXIlPG470njdpF5f0j7RbZg3MGNu0PMFJwfM0Rvaxx1CSppkZh2LaChZ5OCezfK8nGKoaRNZ8FN7XgDyzjUv0MlkRqiLkS55LpwP%2BMfc%2FEd8GzKKlzmpFOgTO1VRud4PEcRhPO9bfdO2kzZGEV%2FT63l9alnsHxZfR3QZnFtjhrNrYiUYCLhhqJozHqPyCubmI8IUcJxcmTc3xrMcrjGRKpHh04iyj4r64rWFfuX5iDU1yN4gZLuY4YHgEBg21gn8VLp8rV8x3%2BLF5u5V2NHDD1kePDBjqkAfz0Qnr2nru5wr4JBzxfwPWZfILPM3k39L2BqHMiSRq%2BXsk0D5v2lzKcs37WBhO8g4epmcBLALUTEaUcbPIc4VyxW4KImLKSJpXXLudTOxOFfvw%2FmEZp8KIwLv8o4z9rwysYy6Ps9jQY0ockUyOlPuaVs%2FVs39p2jRlwugbwDgqK%2BIaE7cm%2FXEHqD3SwnIbArmfvz9feyQy6Z86ZRc%2Bri9hgjGeT&X-Amz-Signature=c6ff743dbf6d716bdb2c9560aae7d4449b4aa95939e21b59f5ea10c3f302c77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
