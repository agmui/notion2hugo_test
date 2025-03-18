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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWJGGCL5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4YTJotq9boIhPOKpJgoCs6ss2IN7%2F3jb1aFTpNoGn%2FwIhALkoAeiJNCCGomScftCXG0mMTK4qNBK8lPR7567ZqOdpKv8DCFEQABoMNjM3NDIzMTgzODA1IgwqPYO3sw8oOuAqkUgq3AOiIJr2ECVbLUkYlW40VocT2YRcAeZnKMpZb%2FwoMDH8v%2BXNUfLEUn69Zr7uWgTsKQScou9rocKIPiflLf7TrXF3UD51FaxEK9jE9RVvb40Cx2wNWRrLZsdQi0GgfM4mQOy1UqbYGrNoWYwDqsXi5ivCL%2BFm8OC9urIfbCZgcT3QcoUIB3NKG3e%2BHzNmodFmKnVLIGV7%2FYYj%2BXDUb3tCUmMLm%2FCUAb4s1CQB0CsX12B%2FPD1F6qn9DFFEeWp%2BQo4o8%2ByWSNAnkur3QoXxQMOspxMQ%2FKNJ3e5j%2FjLUPiB6OUwyPF1rXsSo31kF4%2FqhpWKf4VpJO2wlPMKUcYYNT8wUr1a80XSFPDWm6E3CPFZ4197hOvVnzxDUKliekmtApcnNrZtmMCbXoNnWHqcbGz3aHHbtf0ecOx%2F%2F8%2BgRAhtk6fqaZH3Df%2BeTSn8M5AyeW5Hzv8pNmgjtaa769oCPfPaAjZtluwuxeoM0PgG46whGh5WP1kxYOO9mNNh3GKFjXpXWjU38nHMx5HvaEM6ckLb71Y6u6LH11ROVbDLxmNQFUHJ4WY2uilPrSW%2B%2FSP4caNkS2uQAA8Zfvi28jWakOdBENLXEOMEZumi5WeUHXSZqeT8KmnYUt8R%2BBFVwh7IBNDC47OK%2BBjqkAWYmn%2B4fCavVJYfdTzBiUEfPITJ44v8ijHTRhpHyEYXy95JhlfhqAKlahY%2FYVpAhaYrPUcQXpBRRWJSvmaL9fItRFEwgSTCwyWYiSquTVQFueXzWJmOF09IkwQ%2FG658je6aMH9JD79r9vAoXk2FI7hl9ljkHzgAJhb0IgJIrqvtnzeGasNo4ryiGXYmU%2BK8paAOhSFyL%2Blz1V7qIHrE5UJgOUbAH&X-Amz-Signature=fa9d73592862a954e693c825e77ee81bf72f4b071a22d6cf8d62f29c4638e451&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWJGGCL5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4YTJotq9boIhPOKpJgoCs6ss2IN7%2F3jb1aFTpNoGn%2FwIhALkoAeiJNCCGomScftCXG0mMTK4qNBK8lPR7567ZqOdpKv8DCFEQABoMNjM3NDIzMTgzODA1IgwqPYO3sw8oOuAqkUgq3AOiIJr2ECVbLUkYlW40VocT2YRcAeZnKMpZb%2FwoMDH8v%2BXNUfLEUn69Zr7uWgTsKQScou9rocKIPiflLf7TrXF3UD51FaxEK9jE9RVvb40Cx2wNWRrLZsdQi0GgfM4mQOy1UqbYGrNoWYwDqsXi5ivCL%2BFm8OC9urIfbCZgcT3QcoUIB3NKG3e%2BHzNmodFmKnVLIGV7%2FYYj%2BXDUb3tCUmMLm%2FCUAb4s1CQB0CsX12B%2FPD1F6qn9DFFEeWp%2BQo4o8%2ByWSNAnkur3QoXxQMOspxMQ%2FKNJ3e5j%2FjLUPiB6OUwyPF1rXsSo31kF4%2FqhpWKf4VpJO2wlPMKUcYYNT8wUr1a80XSFPDWm6E3CPFZ4197hOvVnzxDUKliekmtApcnNrZtmMCbXoNnWHqcbGz3aHHbtf0ecOx%2F%2F8%2BgRAhtk6fqaZH3Df%2BeTSn8M5AyeW5Hzv8pNmgjtaa769oCPfPaAjZtluwuxeoM0PgG46whGh5WP1kxYOO9mNNh3GKFjXpXWjU38nHMx5HvaEM6ckLb71Y6u6LH11ROVbDLxmNQFUHJ4WY2uilPrSW%2B%2FSP4caNkS2uQAA8Zfvi28jWakOdBENLXEOMEZumi5WeUHXSZqeT8KmnYUt8R%2BBFVwh7IBNDC47OK%2BBjqkAWYmn%2B4fCavVJYfdTzBiUEfPITJ44v8ijHTRhpHyEYXy95JhlfhqAKlahY%2FYVpAhaYrPUcQXpBRRWJSvmaL9fItRFEwgSTCwyWYiSquTVQFueXzWJmOF09IkwQ%2FG658je6aMH9JD79r9vAoXk2FI7hl9ljkHzgAJhb0IgJIrqvtnzeGasNo4ryiGXYmU%2BK8paAOhSFyL%2Blz1V7qIHrE5UJgOUbAH&X-Amz-Signature=687d405cc8302bc80c5737e6c25653ab63360d07477517cbc3232f2812650f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
