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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWIHAOMW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUX3C7B%2Be4mFMBo60OE1524bvdxYtk98W0di2J%2BiS%2FWAiBOmk2i3sURTcY0M5Hpg3WQZsCYeoqA77CElbu12goxrSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdN%2FlxD6KKDjGB58KtwDrzGgHTZU4l1B1IGu6d2ogrlAbAXY6s4fpntkuwxKyk2p9mqAZkK1gghZabE1o3qkBGmexh03%2BZ%2FDSwssbed4x20KrE1HiuK%2F%2F8gGbpig1OmecQTHqC6AA8QlJsmG%2BE4Z8sjJ7waDTVuepFCwrMJgwP9rK6WO85bbaCqC%2FgF6Jm9e18duaY5oGXtrwszLtvJJkvAcy6tnlpX6pW92wNBxrklnHa85b28EJ%2BE2jNb6iiJ5kJOInlAGrBS0nEySfRPpzKIwU5Oh71yeIQiMJ2oONVypmkYMCaRBbC0rP7895OHHbE7O6fNkdEvko5Gv%2FszVP7pK6Jy9hseQsCiVlwBwkZIjwFV66wYaCAHD1%2FxNKqwYIUY70tT3sFL8liSlYZisTSrEj9YYwYCRb4OjRfTPfhW%2FxIaia1clEOZyqtyV5EUSo6gEwtdpIlXfe3oSRAUHXibahsz7uhOwV%2BId2RjdGhb8lVi%2B6PpwPB29NTb6ePUd36YHcawN7kIAXIXxdAEIUIuPHA9Qjd8MePSot1wFfB%2B0aCYmSP%2Fkj1IxdVGprp2DkPY8Hpt3yA3DiiYFM05BeEY8VA3BJKvpTy%2FsTFbdhcTJyrISCd0JegZGQUAgZXzgIXZz4RjiZ%2BCAID4wm7LhwQY6pgGElDCF%2FcNKPb6DJcKvF1he2nCQZYzDBbEDVVwkdENZsF%2BtY98gJBuPdkLUMHqGbEmKiQSxZTyKKEiFQKDMhCL%2F9gxgeUKzoBvBrXM9idacrk4baIiCzcLRw4brZpHpMASAOWMXK8Z468o3B6qeXmAJwI57W6YDXG7%2FY9yFDOz40LTHeX4arTn9XfgJeQa4fqWBnC2Nff6huW7xThdUc3sNEYe6UZMI&X-Amz-Signature=fec047feb4473f06a47ede30d9c8242a019753b61dbc743cc0ebad1a2657d022&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWIHAOMW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUX3C7B%2Be4mFMBo60OE1524bvdxYtk98W0di2J%2BiS%2FWAiBOmk2i3sURTcY0M5Hpg3WQZsCYeoqA77CElbu12goxrSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdN%2FlxD6KKDjGB58KtwDrzGgHTZU4l1B1IGu6d2ogrlAbAXY6s4fpntkuwxKyk2p9mqAZkK1gghZabE1o3qkBGmexh03%2BZ%2FDSwssbed4x20KrE1HiuK%2F%2F8gGbpig1OmecQTHqC6AA8QlJsmG%2BE4Z8sjJ7waDTVuepFCwrMJgwP9rK6WO85bbaCqC%2FgF6Jm9e18duaY5oGXtrwszLtvJJkvAcy6tnlpX6pW92wNBxrklnHa85b28EJ%2BE2jNb6iiJ5kJOInlAGrBS0nEySfRPpzKIwU5Oh71yeIQiMJ2oONVypmkYMCaRBbC0rP7895OHHbE7O6fNkdEvko5Gv%2FszVP7pK6Jy9hseQsCiVlwBwkZIjwFV66wYaCAHD1%2FxNKqwYIUY70tT3sFL8liSlYZisTSrEj9YYwYCRb4OjRfTPfhW%2FxIaia1clEOZyqtyV5EUSo6gEwtdpIlXfe3oSRAUHXibahsz7uhOwV%2BId2RjdGhb8lVi%2B6PpwPB29NTb6ePUd36YHcawN7kIAXIXxdAEIUIuPHA9Qjd8MePSot1wFfB%2B0aCYmSP%2Fkj1IxdVGprp2DkPY8Hpt3yA3DiiYFM05BeEY8VA3BJKvpTy%2FsTFbdhcTJyrISCd0JegZGQUAgZXzgIXZz4RjiZ%2BCAID4wm7LhwQY6pgGElDCF%2FcNKPb6DJcKvF1he2nCQZYzDBbEDVVwkdENZsF%2BtY98gJBuPdkLUMHqGbEmKiQSxZTyKKEiFQKDMhCL%2F9gxgeUKzoBvBrXM9idacrk4baIiCzcLRw4brZpHpMASAOWMXK8Z468o3B6qeXmAJwI57W6YDXG7%2FY9yFDOz40LTHeX4arTn9XfgJeQa4fqWBnC2Nff6huW7xThdUc3sNEYe6UZMI&X-Amz-Signature=5233cc7f1e0b9ef258b8291cf9bb2c20d20ee1bae315c5fa5881a31d4828b264&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
