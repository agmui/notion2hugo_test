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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBVDDHN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHu25e2BVIy%2Bfczpu1rLFFhmaPCZg8J9YCVLTo5irmfMAiABntyuN6s5GJsChTFRNoSIgMbnxqEDSTZcpy63eqQ7ICr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMi8CZqHU8bX1qXuWuKtwDdYL0LXpekmUD5551X16mTaEl2CvaRzk9RS9yKOkfiTo3ZJh0%2Fv4DeUBFOaZPfUS8MxsR9UtsNejYaw6T0Velp2HVEf%2BCd3HwUCTJTKyAYShJ4e45NbKLBa7PTiVMHoiw8ZQR8SaRm2Y8FbAzYxqmeXE6URhmViZWuDKxrWIVG630qapdT1Z4qNSSBWLbu6SBCP3lvn54eAstHSlGxULODBh2gdqLu%2BRt3ONJkOnlGl5LmzjkE6A93HRGqiJMkrBUfLhld88zPsqGMU2ExqWgu1ihacIOOttwbzp7tfwb%2FbZxwj%2F7hCHnVVw2Y7aFZRncU8N4qH8B4wD%2BdGC80aBaJS474slMgeUODhC4xiMqRY96aS7%2BV%2BP9e4WWOe6NOTGkbomx82ijsDL0toUw9H5hTKM86M84ST6oHt7vKqlSOYOz76uJS%2FvB2sGseKefZF%2FDiU%2F%2BTEJJlnAwqy%2FIvJcJL6PSewfYFbkjy5xFFSVZyukDPfHfMv0w0YsoCkN8UcjVZ4wbERQmrOF4JJwKed5GMFlYMHcsgModT7%2Boxfv%2Bk%2F9fcn4Xyr7EzyHIOCiXzKzMay4P5DzzL4XJw2QMAcUmdpfMl9d6mtpxrIDMYuwaMCG5mY6SqXRGMvT3oZswt625wgY6pgEYBTY1t4W9G40lSXzs%2BVN9mY%2F8u%2FvOi34yWBL2zOP5wDYjzrJWD3ECbD3fmO%2Bh71%2Be%2FT%2F1d5RDu0re0Bs%2F%2FwYGygFbdbCJKAeMn4TgJrMrccbRaHz%2F6t8dxSmlWqyVmrepQLzCqtp4K%2BEJEBx5YG2iVbtyAycuBoDFCYi9pRfXlAWt%2B%2BcMVJjpJe7WPA6F0Q8SqercnJGtOuosjNCHqGIGgLGY7ujP&X-Amz-Signature=0002ec45978c29adc4ae58f5010bbd33f9510170d79fdb78c2748e68f16e8d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBVDDHN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHu25e2BVIy%2Bfczpu1rLFFhmaPCZg8J9YCVLTo5irmfMAiABntyuN6s5GJsChTFRNoSIgMbnxqEDSTZcpy63eqQ7ICr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMi8CZqHU8bX1qXuWuKtwDdYL0LXpekmUD5551X16mTaEl2CvaRzk9RS9yKOkfiTo3ZJh0%2Fv4DeUBFOaZPfUS8MxsR9UtsNejYaw6T0Velp2HVEf%2BCd3HwUCTJTKyAYShJ4e45NbKLBa7PTiVMHoiw8ZQR8SaRm2Y8FbAzYxqmeXE6URhmViZWuDKxrWIVG630qapdT1Z4qNSSBWLbu6SBCP3lvn54eAstHSlGxULODBh2gdqLu%2BRt3ONJkOnlGl5LmzjkE6A93HRGqiJMkrBUfLhld88zPsqGMU2ExqWgu1ihacIOOttwbzp7tfwb%2FbZxwj%2F7hCHnVVw2Y7aFZRncU8N4qH8B4wD%2BdGC80aBaJS474slMgeUODhC4xiMqRY96aS7%2BV%2BP9e4WWOe6NOTGkbomx82ijsDL0toUw9H5hTKM86M84ST6oHt7vKqlSOYOz76uJS%2FvB2sGseKefZF%2FDiU%2F%2BTEJJlnAwqy%2FIvJcJL6PSewfYFbkjy5xFFSVZyukDPfHfMv0w0YsoCkN8UcjVZ4wbERQmrOF4JJwKed5GMFlYMHcsgModT7%2Boxfv%2Bk%2F9fcn4Xyr7EzyHIOCiXzKzMay4P5DzzL4XJw2QMAcUmdpfMl9d6mtpxrIDMYuwaMCG5mY6SqXRGMvT3oZswt625wgY6pgEYBTY1t4W9G40lSXzs%2BVN9mY%2F8u%2FvOi34yWBL2zOP5wDYjzrJWD3ECbD3fmO%2Bh71%2Be%2FT%2F1d5RDu0re0Bs%2F%2FwYGygFbdbCJKAeMn4TgJrMrccbRaHz%2F6t8dxSmlWqyVmrepQLzCqtp4K%2BEJEBx5YG2iVbtyAycuBoDFCYi9pRfXlAWt%2B%2BcMVJjpJe7WPA6F0Q8SqercnJGtOuosjNCHqGIGgLGY7ujP&X-Amz-Signature=dfe7e134c34e5726a08f2f8c1804691fc4bbc36252fbbcdb4d7f80fc80f13b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
