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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEIX6SYG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDo8CCUAj9RI9CnRqcaS%2B5RysOHIIc3nL4Y73kZBuUtgIhAPkIoaqoblEFFDaHGEs3FGzHOHWAhC7eeL37W22p7hVgKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUATL2hQ2oNKKzkHEq3AN%2FsEZ08%2BIegpP1oul%2BxMMFpuEI%2FdXyf4AkR2TTPkCKE3YpcYoLY2s1NG5Z3VdJ2phEJHKhQJX9Yao%2BIHcSTO2I25WcxRXDc3Q9LGRt50evYnK1M1IlH2Vk1Z0RdAvn8b4W0T%2FUTN3VZjai%2BjSL0sKjt8XXiiNzSA6hyw9BO5N7IvOGVHWDW6%2BFGyi6Fl%2B11ckcFD7FN3wYAnKkUOWTY9%2Fbk110cfUKA4yMy3UlzGsbp%2Fp5yUxfi96GRhjE68xjrmAd%2BdbKqMachV52KZ8lSzv%2FHt51t%2FONH0lxT%2BA49y0ZEECi52bEtM4x%2Fh8HM%2FFxqfFhEfK6Gdm8EMOdmepdGB5KzXCje9EyyEwXtM6%2B9c5f5p1oMd0NtI40G9Rs9qhPtj2Z%2Fw%2BcCMwkdgHfc6Eq6pRXaRgFXs42KSeZX37ilKhkXrDbOOaWwAwQwK96c%2BBrmrSeKSZJ%2FDnyFgD41A8lFU2NYAnML4xDrbqnPpH1DP5llxvHgwM7ojk5%2Fx8a5oVKsVtaFN7YCJ9zUR5rfKNJKUpCq3MgaeTt5p4KLTr1glyg6P41sspyrA7vZNHtG13QjT%2F5o9hbQ%2B4MCzpOc17SszBCRclgprL26RiYFjo0GXntkEai9VTMxedlqr%2F%2F3DDck%2FfABjqkAcVKQ3PTNQaJ8SqrEjtN7wYmb%2BBFdzuzUoluYlopM3TQ5109R73RPnkuj88uwZcFmrDfj7HdnN0uBp0zGuRcsNO9Oq6BWiurjIZ7dSfZTjpQqk8xo8uwRdpMt0Mk24Z%2FiYnv%2BSC94hOdN02zZ71CM5bstH30PbNUWKmJo8%2FprQYdxJPAZn7EKAQt0nO0Tyxc56PU2W7eIuq%2Bba0XbRndgWAfZn52&X-Amz-Signature=6959c3c0ca68f6a218f365127a5f6565ec9d5396267239366dcc17140c323580&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEIX6SYG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDo8CCUAj9RI9CnRqcaS%2B5RysOHIIc3nL4Y73kZBuUtgIhAPkIoaqoblEFFDaHGEs3FGzHOHWAhC7eeL37W22p7hVgKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUATL2hQ2oNKKzkHEq3AN%2FsEZ08%2BIegpP1oul%2BxMMFpuEI%2FdXyf4AkR2TTPkCKE3YpcYoLY2s1NG5Z3VdJ2phEJHKhQJX9Yao%2BIHcSTO2I25WcxRXDc3Q9LGRt50evYnK1M1IlH2Vk1Z0RdAvn8b4W0T%2FUTN3VZjai%2BjSL0sKjt8XXiiNzSA6hyw9BO5N7IvOGVHWDW6%2BFGyi6Fl%2B11ckcFD7FN3wYAnKkUOWTY9%2Fbk110cfUKA4yMy3UlzGsbp%2Fp5yUxfi96GRhjE68xjrmAd%2BdbKqMachV52KZ8lSzv%2FHt51t%2FONH0lxT%2BA49y0ZEECi52bEtM4x%2Fh8HM%2FFxqfFhEfK6Gdm8EMOdmepdGB5KzXCje9EyyEwXtM6%2B9c5f5p1oMd0NtI40G9Rs9qhPtj2Z%2Fw%2BcCMwkdgHfc6Eq6pRXaRgFXs42KSeZX37ilKhkXrDbOOaWwAwQwK96c%2BBrmrSeKSZJ%2FDnyFgD41A8lFU2NYAnML4xDrbqnPpH1DP5llxvHgwM7ojk5%2Fx8a5oVKsVtaFN7YCJ9zUR5rfKNJKUpCq3MgaeTt5p4KLTr1glyg6P41sspyrA7vZNHtG13QjT%2F5o9hbQ%2B4MCzpOc17SszBCRclgprL26RiYFjo0GXntkEai9VTMxedlqr%2F%2F3DDck%2FfABjqkAcVKQ3PTNQaJ8SqrEjtN7wYmb%2BBFdzuzUoluYlopM3TQ5109R73RPnkuj88uwZcFmrDfj7HdnN0uBp0zGuRcsNO9Oq6BWiurjIZ7dSfZTjpQqk8xo8uwRdpMt0Mk24Z%2FiYnv%2BSC94hOdN02zZ71CM5bstH30PbNUWKmJo8%2FprQYdxJPAZn7EKAQt0nO0Tyxc56PU2W7eIuq%2Bba0XbRndgWAfZn52&X-Amz-Signature=c0e209c86b02ca745039ad710bb68e985beaffc09e8e47bf4ee169f19cf95b06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
