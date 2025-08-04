---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEG5C5O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGMjBN7jAhvCxr53BLwkgrh4wctWJrbdr%2Fms%2BwAU2PMMAiB9aYiCWm5cBwx8fnkZSdePOm4DzVer00BLbObLPEHJUCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMmv4nrtwC3xSs%2FZBVKtwDgcLHMyhaAAdNJdAhEoibco%2Fr5WamlEWtd7iKagpanuSwgmIqTUtRysC9lhR6PRLyh3WXT7mkEFAzHU7YgD6cqB0ObiJ1PpWnRmJlSZKHuWnQu18PqDxXat3AIacQ8b47hGM5bdmionoJck%2FabzseMBcPWCywW08ULYgIhHpQyjANbZwtQeiNLVc2Bp0VnCwrxaDP%2FIkDGNWzoJWeGmDb2SeOMXUFb9RXEVdLj5GCl%2BCB%2FxRPtwN2RHxv1VGhNsMcON1UNu5hTTcnl0Voj1km%2FDFXB1HKckhpBMpsXMLz6EYy5pbalZM07xa09NGCNb9mK%2FiePu8HJPz7t5x9wXVVCowqh8jxANC%2FPgv3BfKyWg0V8oP4E4Ip4pFkV91ygS8lYeSJoE9%2FXJhgOUbMGUru8KEP6gZAuYw0bK00ca1xpx%2BA1iCXSi0RY2yZNvpF6RvfmbdaMkwDkgGTbFXJUgjKsaYZObEcAoCVCgIvmIwTEoH6Bmo57D9hER%2FAVTK2ZxaZzryr%2BhiPe2DW6BHbCExFru8529v7%2FNhFJ5iZX42Q%2BjeZwrLMGRFZAD7uRe0bN%2Fg1BybOYuvNy%2B8NpprlfDWD6pkkwY%2BJobJjC9u27Cvy1rQLAUirEpr0KcWL8J0wxPTExAY6pgE%2FAzlGDBM2CTg%2BdWFaOpAh4Oh6Zu0TiTflvDj31LUEZpXavB7cfU0I4s%2BcCkLYDWYDwmhOn%2FJoE6ybaCADYbbUWXaPTO11u7j%2Fw9mW5SVlrnb%2BVegUaSWeKPnsocz9ebrreT0%2BXNdJQ8xCwOeqUi94sLZE%2BNRUSoxabQgsIApmxbVBbu2mNUqdSD%2FIGGW%2FCaYFWXSCNDdRvP5VWphteTSyl5y2aw26&X-Amz-Signature=cc55ac195c7884578aba405d46acb35bffdeb5da704a9cb2e4602cd395ab6e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEG5C5O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGMjBN7jAhvCxr53BLwkgrh4wctWJrbdr%2Fms%2BwAU2PMMAiB9aYiCWm5cBwx8fnkZSdePOm4DzVer00BLbObLPEHJUCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMmv4nrtwC3xSs%2FZBVKtwDgcLHMyhaAAdNJdAhEoibco%2Fr5WamlEWtd7iKagpanuSwgmIqTUtRysC9lhR6PRLyh3WXT7mkEFAzHU7YgD6cqB0ObiJ1PpWnRmJlSZKHuWnQu18PqDxXat3AIacQ8b47hGM5bdmionoJck%2FabzseMBcPWCywW08ULYgIhHpQyjANbZwtQeiNLVc2Bp0VnCwrxaDP%2FIkDGNWzoJWeGmDb2SeOMXUFb9RXEVdLj5GCl%2BCB%2FxRPtwN2RHxv1VGhNsMcON1UNu5hTTcnl0Voj1km%2FDFXB1HKckhpBMpsXMLz6EYy5pbalZM07xa09NGCNb9mK%2FiePu8HJPz7t5x9wXVVCowqh8jxANC%2FPgv3BfKyWg0V8oP4E4Ip4pFkV91ygS8lYeSJoE9%2FXJhgOUbMGUru8KEP6gZAuYw0bK00ca1xpx%2BA1iCXSi0RY2yZNvpF6RvfmbdaMkwDkgGTbFXJUgjKsaYZObEcAoCVCgIvmIwTEoH6Bmo57D9hER%2FAVTK2ZxaZzryr%2BhiPe2DW6BHbCExFru8529v7%2FNhFJ5iZX42Q%2BjeZwrLMGRFZAD7uRe0bN%2Fg1BybOYuvNy%2B8NpprlfDWD6pkkwY%2BJobJjC9u27Cvy1rQLAUirEpr0KcWL8J0wxPTExAY6pgE%2FAzlGDBM2CTg%2BdWFaOpAh4Oh6Zu0TiTflvDj31LUEZpXavB7cfU0I4s%2BcCkLYDWYDwmhOn%2FJoE6ybaCADYbbUWXaPTO11u7j%2Fw9mW5SVlrnb%2BVegUaSWeKPnsocz9ebrreT0%2BXNdJQ8xCwOeqUi94sLZE%2BNRUSoxabQgsIApmxbVBbu2mNUqdSD%2FIGGW%2FCaYFWXSCNDdRvP5VWphteTSyl5y2aw26&X-Amz-Signature=943938aaf954d856d83c561cca4a110a5b8b591fb05048687348289d364144db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
