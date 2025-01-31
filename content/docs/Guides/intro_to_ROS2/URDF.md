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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643U7X5YC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCARi%2FImzncijK8AHLv9MRXqGqcrPtbBf0CxTZAQ2%2F5oAIgUmwOTyIlKmf%2FL%2Fron6VdLWAw3xkmUvFULvPNqYdSltgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUW2n4fmyeVzbkaSCrcAyCmTLjZBqRB1CkuYW4oUZ5hUjSGx8WTSP6XpPbNkgUvCo%2F%2FiSNi3iwLWdfKDIf9Kqga6TU9rMryU45cTHXcfO37Ik0SCwnyYBEuuaBVUiSfIt14ko8m03cbxGVxJKY8QfLhrNC1fre8AciEwWUEHau%2B7AOYzKP4QszbrqL6UhAA2QuaOWxIBU5G70strljO9VBANDTbCSTRFasNsmwpWjwK4IGjVx1CkyhhYOMeyw5wO9mwCKcHoFPEx45xSx1wQ0cJgMGMT0CMTJowE55BRNcpWVxAGklZti4OpaIbJBOszMKu84eqe0HD26%2BCmyYPhnNTivpiZEYWxIodGvBEY8PXzI1sPn1MyHphVslj1YMAhFHXkeY%2BTw5Lhk04K%2Bj0QYJxFoTllFNHF2UFfZSQNAx756vY6Yyr06C9kgoUnPYg0a9sF%2FtFgcGBmxpn8aTh2kwjjmYfZe0w0bxpexv%2Foqk9AAs4sf1f%2BvQ0vLL0xDnyyI9Yh6%2BPEeO59r%2Bn0XMKMYvRwPW1WMAvrdv24XY5dYz74AHX8mcg9m0PIeV61e5VGpdYWZ5T%2FXoQ7xjfjoFPvWaX8ZwQxeVI6Jv8OjldIu8ZOwabEqnTxEbn00m3yvQVkolBlMlz%2FC6okSP6MM3B9LwGOqUBYz6b8QVii5ce59lbD9cX7UDHSnyyV5rBIv3d%2BBorUYk%2F%2FgCP5VTj%2FFKOXpfCwcekj9xO9zWxlpalE7fFsHfhjzqg6SiEwHR2LpyJBIdELyafLuSL%2FTdxm4yq7uui7kkbvK7SN8nf5HwbSW%2F8f8FIx%2BIBmHM4tW2uc4qPcSspDW9dwK%2BSWwO1Ffs5KvJMBB%2By%2BhopJdUHARsqmUeRhaXN4eKH7Wiw&X-Amz-Signature=257393f0c40b96d00a8c30e5ea7dc690b18c904e573b50b4cd08e7e0c282f121&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643U7X5YC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCARi%2FImzncijK8AHLv9MRXqGqcrPtbBf0CxTZAQ2%2F5oAIgUmwOTyIlKmf%2FL%2Fron6VdLWAw3xkmUvFULvPNqYdSltgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUW2n4fmyeVzbkaSCrcAyCmTLjZBqRB1CkuYW4oUZ5hUjSGx8WTSP6XpPbNkgUvCo%2F%2FiSNi3iwLWdfKDIf9Kqga6TU9rMryU45cTHXcfO37Ik0SCwnyYBEuuaBVUiSfIt14ko8m03cbxGVxJKY8QfLhrNC1fre8AciEwWUEHau%2B7AOYzKP4QszbrqL6UhAA2QuaOWxIBU5G70strljO9VBANDTbCSTRFasNsmwpWjwK4IGjVx1CkyhhYOMeyw5wO9mwCKcHoFPEx45xSx1wQ0cJgMGMT0CMTJowE55BRNcpWVxAGklZti4OpaIbJBOszMKu84eqe0HD26%2BCmyYPhnNTivpiZEYWxIodGvBEY8PXzI1sPn1MyHphVslj1YMAhFHXkeY%2BTw5Lhk04K%2Bj0QYJxFoTllFNHF2UFfZSQNAx756vY6Yyr06C9kgoUnPYg0a9sF%2FtFgcGBmxpn8aTh2kwjjmYfZe0w0bxpexv%2Foqk9AAs4sf1f%2BvQ0vLL0xDnyyI9Yh6%2BPEeO59r%2Bn0XMKMYvRwPW1WMAvrdv24XY5dYz74AHX8mcg9m0PIeV61e5VGpdYWZ5T%2FXoQ7xjfjoFPvWaX8ZwQxeVI6Jv8OjldIu8ZOwabEqnTxEbn00m3yvQVkolBlMlz%2FC6okSP6MM3B9LwGOqUBYz6b8QVii5ce59lbD9cX7UDHSnyyV5rBIv3d%2BBorUYk%2F%2FgCP5VTj%2FFKOXpfCwcekj9xO9zWxlpalE7fFsHfhjzqg6SiEwHR2LpyJBIdELyafLuSL%2FTdxm4yq7uui7kkbvK7SN8nf5HwbSW%2F8f8FIx%2BIBmHM4tW2uc4qPcSspDW9dwK%2BSWwO1Ffs5KvJMBB%2By%2BhopJdUHARsqmUeRhaXN4eKH7Wiw&X-Amz-Signature=817ed0d56ebfb2d135f08261e3026c9f26ba6ab2802eb11ea9a5a0f7e3a1ce51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
