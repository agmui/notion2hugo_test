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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEVUOUO4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgrRXdaXUOiDu%2BOYliIIiolUUnjBIN059cUHXzLoHFQAiEAyyhKf1QnyhH3r%2F4AS7%2BCdRvbspizJnuSNo2iJjC%2B58UqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXPMYjdRrmvjiIRByrcA6baSScuO7lyb8C4vtGKR%2B2%2FlBwMK%2FE8NuMfXrTVKZOgZOvZ3PuUrBW9%2FsTid%2FyBwvWdNY3py%2BwvKZ7iagqi3P5oLVJGq8Gj0qjmjXejszmYnYJUGxjFZi5e5ZKCPm6ebkGd4H61SHLbkSr8mp5LMpoZRNHR5poMIg0TaHagITJ1TPlqIpQG72o6vQzg3QUj1s9CRY5NrxPauLyGlImiIaB%2BqRS71Q%2Ff9RbOi%2BL8U3ICg736WwASdUy1zPyAw6VjtX1YZbNcGNo8dN7flGZN%2FQwcFE%2Fnoh63up1cDRbvCzc98sj5AhwIXbnN%2BNEFWP4oMmFsETMxsy8GvLmRGXgBS0EgHbn3DKJiDf9H66bWtQllWYCOV6KU3qdkJwGk7%2FcvXgDJP0gkEg%2FhhNiCxlgEm0%2BuPP%2Fm%2FsUqlQedTE13Wka0bCzNPpOvpFYXSv0KG8udROdDxoN58cSg3lARjS9O%2B4H0PnsPvA%2FN0DVJTjYj5mkDKKTmed0rDCtRTlTeRyD1vm6eDeaBtU65YhQtfNV54rKR49CV6x%2FgQPodQp8qdKf4MydWvSBE45yk9b2BJnzDeyXEr99EexcLjecBvdX7bBFS7lum2spr4SwBEmxGBpD%2FBMODTbE0scU6ofusMO6%2BoMIGOqUBBEFBpLav7UjEgYhObA5BmjvZay6tbk9XR%2BTwYfGs3jJggDj8RrmiEsRIZQ8GHtpZveHeRokgp%2BsKU0hv1eJ6jY2nt1YL%2B%2FT0y4tPcTkFnqUNOGBBhRY8LlxIOvwyxGCFifOtJHAwfZO5YudmteARjkJEzWqHN4bdDLgeUuiRVtkhYNn0nzoP%2B0hP%2FuFa6Qt%2FAcYW9aaGHEZSMAGTlHC5F6Ucz9P4&X-Amz-Signature=1cf325d44ed2253e764d0ed35583bf87f4c4063b970977d472ae1e92b844d5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEVUOUO4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgrRXdaXUOiDu%2BOYliIIiolUUnjBIN059cUHXzLoHFQAiEAyyhKf1QnyhH3r%2F4AS7%2BCdRvbspizJnuSNo2iJjC%2B58UqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXPMYjdRrmvjiIRByrcA6baSScuO7lyb8C4vtGKR%2B2%2FlBwMK%2FE8NuMfXrTVKZOgZOvZ3PuUrBW9%2FsTid%2FyBwvWdNY3py%2BwvKZ7iagqi3P5oLVJGq8Gj0qjmjXejszmYnYJUGxjFZi5e5ZKCPm6ebkGd4H61SHLbkSr8mp5LMpoZRNHR5poMIg0TaHagITJ1TPlqIpQG72o6vQzg3QUj1s9CRY5NrxPauLyGlImiIaB%2BqRS71Q%2Ff9RbOi%2BL8U3ICg736WwASdUy1zPyAw6VjtX1YZbNcGNo8dN7flGZN%2FQwcFE%2Fnoh63up1cDRbvCzc98sj5AhwIXbnN%2BNEFWP4oMmFsETMxsy8GvLmRGXgBS0EgHbn3DKJiDf9H66bWtQllWYCOV6KU3qdkJwGk7%2FcvXgDJP0gkEg%2FhhNiCxlgEm0%2BuPP%2Fm%2FsUqlQedTE13Wka0bCzNPpOvpFYXSv0KG8udROdDxoN58cSg3lARjS9O%2B4H0PnsPvA%2FN0DVJTjYj5mkDKKTmed0rDCtRTlTeRyD1vm6eDeaBtU65YhQtfNV54rKR49CV6x%2FgQPodQp8qdKf4MydWvSBE45yk9b2BJnzDeyXEr99EexcLjecBvdX7bBFS7lum2spr4SwBEmxGBpD%2FBMODTbE0scU6ofusMO6%2BoMIGOqUBBEFBpLav7UjEgYhObA5BmjvZay6tbk9XR%2BTwYfGs3jJggDj8RrmiEsRIZQ8GHtpZveHeRokgp%2BsKU0hv1eJ6jY2nt1YL%2B%2FT0y4tPcTkFnqUNOGBBhRY8LlxIOvwyxGCFifOtJHAwfZO5YudmteARjkJEzWqHN4bdDLgeUuiRVtkhYNn0nzoP%2B0hP%2FuFa6Qt%2FAcYW9aaGHEZSMAGTlHC5F6Ucz9P4&X-Amz-Signature=bcd87e791a1281674870c5b02a5396f185e8b459e1d1ae6450c0b3b19b78c34d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
