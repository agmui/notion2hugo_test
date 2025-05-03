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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSGXRE5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDoSDeSNkIHIJVdXpKlfB0qs67322gvlC7zgYpPfY9VJQIgIFOk2tEFB4mR%2Bn1tOh85cD0YXvChE4bdUhkD8VkDh7EqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCnAzEszO4nwqdn1ircA%2B5e%2F%2Fdq%2F2z3eUjvWh4xTfvNGS1GHSuG9BV7Mc8l7Um8KoguNrkX2fTkZN9PSoN89lqVBCg%2FBk7%2BwwBAPCVE7CYI3Ia%2BR916zYHR4STL6ZYWpl3cSAfljQBqCCVHVV0punUcuSnmeToMFNBejqMsQW67SojUSCFsmqr2w7ykVaFR8kmQlys64FIfVCRvreSBOcFozPmyIFDU%2B1d9ZWlcvecLtfkrY0SKU%2FqobJByS11IerkTCjFvpDxc1uroOY2Fr9gFM47xbW%2BRhIvh7YVjO4JP4v3PhmsGZSN7T0mncT3l31Si9s8ZSEag%2BrI2C9DDMtk6mY1B9WORfaGEUEcnq3VuBPhyXRb6akgik1Bt3pgf4V6bq6GNNRdoiTJsEBkvtOM5tgZ8X3zMAmkG1bfPXf%2BXQVpTavEkSZmji8yTYn%2Bv%2FIU%2BhKvEhBNdo%2F1LN3hxbMZXFu%2F0Zg0ZAZj7Tf3TICUCVFRNqoqFWTtp%2FiPLu1%2B8JbIRQfc22tgprQyq65YoACmv83GoWvvZX2QHZ3dZlrFDcatgLBQT8so%2FrX8XMNyavRYD0ZBo32%2BzTOP3eLto%2BaUexdfnLCd1BNheTVkF5RGn5VT2yPXdM6F91kvHYwDSuN58xu5RaDABh2YtMOPe18AGOqUB2%2FlGyg5DNdPQZU2IOEAb7aJxUx8reVGxhcRG5nPvT3IK4YiJzL1hFQIOsZXqOGKDyKWnY3kYtQfKIw%2FDGE%2F9VmwX3mNoCJ1nfaZ2%2B57%2B%2BOxPrULCjN4ODamvYou5dHnYtt1Y%2FvzCCvWYyzdij8fJeObiyJi2lp9iiNkUawETAYgUhjOAOH9aQfSe7%2FIh%2FXsDIyVY9I6fk7R%2F8s0HNytib2SZS5CG&X-Amz-Signature=5753e815f3bad1753a739cc6d40f9e6bdc4cf0112c0c7d3223d38ed39995363a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSGXRE5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDoSDeSNkIHIJVdXpKlfB0qs67322gvlC7zgYpPfY9VJQIgIFOk2tEFB4mR%2Bn1tOh85cD0YXvChE4bdUhkD8VkDh7EqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCnAzEszO4nwqdn1ircA%2B5e%2F%2Fdq%2F2z3eUjvWh4xTfvNGS1GHSuG9BV7Mc8l7Um8KoguNrkX2fTkZN9PSoN89lqVBCg%2FBk7%2BwwBAPCVE7CYI3Ia%2BR916zYHR4STL6ZYWpl3cSAfljQBqCCVHVV0punUcuSnmeToMFNBejqMsQW67SojUSCFsmqr2w7ykVaFR8kmQlys64FIfVCRvreSBOcFozPmyIFDU%2B1d9ZWlcvecLtfkrY0SKU%2FqobJByS11IerkTCjFvpDxc1uroOY2Fr9gFM47xbW%2BRhIvh7YVjO4JP4v3PhmsGZSN7T0mncT3l31Si9s8ZSEag%2BrI2C9DDMtk6mY1B9WORfaGEUEcnq3VuBPhyXRb6akgik1Bt3pgf4V6bq6GNNRdoiTJsEBkvtOM5tgZ8X3zMAmkG1bfPXf%2BXQVpTavEkSZmji8yTYn%2Bv%2FIU%2BhKvEhBNdo%2F1LN3hxbMZXFu%2F0Zg0ZAZj7Tf3TICUCVFRNqoqFWTtp%2FiPLu1%2B8JbIRQfc22tgprQyq65YoACmv83GoWvvZX2QHZ3dZlrFDcatgLBQT8so%2FrX8XMNyavRYD0ZBo32%2BzTOP3eLto%2BaUexdfnLCd1BNheTVkF5RGn5VT2yPXdM6F91kvHYwDSuN58xu5RaDABh2YtMOPe18AGOqUB2%2FlGyg5DNdPQZU2IOEAb7aJxUx8reVGxhcRG5nPvT3IK4YiJzL1hFQIOsZXqOGKDyKWnY3kYtQfKIw%2FDGE%2F9VmwX3mNoCJ1nfaZ2%2B57%2B%2BOxPrULCjN4ODamvYou5dHnYtt1Y%2FvzCCvWYyzdij8fJeObiyJi2lp9iiNkUawETAYgUhjOAOH9aQfSe7%2FIh%2FXsDIyVY9I6fk7R%2F8s0HNytib2SZS5CG&X-Amz-Signature=0427b479fbd1b03b8c6c757cbb54e651616cf4cf8ae6aa7e679c4696f5f6052b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
