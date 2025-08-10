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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWZORWD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy%2BQCEvvfP7%2BhFZtHzNvLS82rCyNlXi6Hrvf2ag1ZrHQIhAOo8NxEEvgRVx9sjIM24MuqmepW2WHwq2cHc0VH%2FPwGnKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4vJQdMTQgi6xCyF8q3AO%2BmBx8G%2Br%2Bnw%2FSs5cPz8FLTZIzEN04IRR5aQYvppmV2xlnem0sCTc1SJ7O4%2FIkfPZf8cyD3DFhRc7qvs%2BdE9BYR06rNy24mZy%2BvNy8qJRmvf5EmkKK6ieKvviNMlmOG7gvKPwLrN2PgtGySW%2FJkOy3HhBWsWxg4deIRZCQAdWNtc5nBwYae%2FObpdsf26LZaYl7BA%2FviHaHrMgD2onnSDAy78eEm%2B0JYejGGtcP2wFZjGLcR3CpnpvD47Fl3VzmZIHVE3zY3FoNZ80ysb187gv%2BNozLZl3qnphpoAcQMhp7tTofASmcSxoCZSZAurcdS0FWUAuEdS%2FDsKK4fR4dq9z6w1YOoj4yNZnonBQlJrwH%2Fu0SCYp%2Fevf07HUi6Jqr6j8DOevZV%2BRsskUif2wt4%2BIIJ5cyBWJo4YItTeLwXUFfg6cqpHCER%2BOz5AV4jWP1XXtccGil7VkWLA9M0aMSea8Sg7PtLZ1MXI2VIFpU39eAganaxgtYA5OLZIylflbDUp8Yb6UzntYsl1XRRkuJ%2BStRq9aDWggdk0aR1fX1Zu15hCv95tfMUKgPpH3caab71jRzSxXfYHOVP%2FSdyReWvsfpLTRTaGzKYKEkwm2xc99MAw78E6xDqtTem78D5DC30eDEBjqkATimrMVYZRIHyrvmZzbIwIaenoo0Y%2BBh%2BrEzUpBJCHh3fiX3QCL5J3diljVZW1VusjSbX8snenk698wXOfsRQlQRNNDCZ%2FO4uxmhX6DZ60NqkJZcjCo%2BKjFPye0NAC1lPaCmuBjIjaoHDKjK7CKOE9rufs2i0%2FG7sFwOZ8%2FR1Sf%2B8G%2FL%2F8DsD9UU%2Fq%2BUkD9CU0eRqk6XMx8c%2FlnR4ER32p5ojF35&X-Amz-Signature=c0f969c05fe39ac2136670a991cc457189dc85a1b69836c1c7462b9e199707c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWZORWD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy%2BQCEvvfP7%2BhFZtHzNvLS82rCyNlXi6Hrvf2ag1ZrHQIhAOo8NxEEvgRVx9sjIM24MuqmepW2WHwq2cHc0VH%2FPwGnKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4vJQdMTQgi6xCyF8q3AO%2BmBx8G%2Br%2Bnw%2FSs5cPz8FLTZIzEN04IRR5aQYvppmV2xlnem0sCTc1SJ7O4%2FIkfPZf8cyD3DFhRc7qvs%2BdE9BYR06rNy24mZy%2BvNy8qJRmvf5EmkKK6ieKvviNMlmOG7gvKPwLrN2PgtGySW%2FJkOy3HhBWsWxg4deIRZCQAdWNtc5nBwYae%2FObpdsf26LZaYl7BA%2FviHaHrMgD2onnSDAy78eEm%2B0JYejGGtcP2wFZjGLcR3CpnpvD47Fl3VzmZIHVE3zY3FoNZ80ysb187gv%2BNozLZl3qnphpoAcQMhp7tTofASmcSxoCZSZAurcdS0FWUAuEdS%2FDsKK4fR4dq9z6w1YOoj4yNZnonBQlJrwH%2Fu0SCYp%2Fevf07HUi6Jqr6j8DOevZV%2BRsskUif2wt4%2BIIJ5cyBWJo4YItTeLwXUFfg6cqpHCER%2BOz5AV4jWP1XXtccGil7VkWLA9M0aMSea8Sg7PtLZ1MXI2VIFpU39eAganaxgtYA5OLZIylflbDUp8Yb6UzntYsl1XRRkuJ%2BStRq9aDWggdk0aR1fX1Zu15hCv95tfMUKgPpH3caab71jRzSxXfYHOVP%2FSdyReWvsfpLTRTaGzKYKEkwm2xc99MAw78E6xDqtTem78D5DC30eDEBjqkATimrMVYZRIHyrvmZzbIwIaenoo0Y%2BBh%2BrEzUpBJCHh3fiX3QCL5J3diljVZW1VusjSbX8snenk698wXOfsRQlQRNNDCZ%2FO4uxmhX6DZ60NqkJZcjCo%2BKjFPye0NAC1lPaCmuBjIjaoHDKjK7CKOE9rufs2i0%2FG7sFwOZ8%2FR1Sf%2B8G%2FL%2F8DsD9UU%2Fq%2BUkD9CU0eRqk6XMx8c%2FlnR4ER32p5ojF35&X-Amz-Signature=0ecff12d0e5adb190bd601932c3c51f025749fd58e7f5677b31553e2560ad6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
