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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2HCTOF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg76yfhyZcEc%2BFczBjUX9nAS%2FoXI1T5M2VYOdn9fCb5QIhANyOS5769C9j15w%2B%2B6JmOsi0Aep9BFl4WzyMzEQy2WlIKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FXwgfMFsmscZkxwq3ANZ64%2FZEU%2BscmnLsgWdDZbXURopdeSPlwPEgQx6Y%2FvJV1s0nLoBdS9kXExaniqzRpbwmMDb9X9%2Fn1V0d55HV7N6eijfzMd8%2F5r7T9nCwZXfrvKbk9M2xyk9%2F2KkSpoEhsdvMCIH5KCFPTfwW0mt89jbKCmvAyAEQxV9IgQZ%2FCsnhioc6Enf0KJzj9vHYAKSGTnNrKsJuEIpoSsOEcF6uIkOCgjEHD7DdL24j9GOHsrrquLMMDf%2BY0FrbQl7YyPVSdTcwfIYEDiofZGy3t9nkVdnMdOLztCC7xdRlylCFUvNRe3D2xP%2FQFPLIhno3%2FR94xMDxTf%2BSFK8rVIlaYNCzFzpgloWnMQuh8WNUOIxk1nnV%2BJoksyeeL0%2BPnjvQgw%2FzyAFstShfR0%2Bde%2Bn9xW8Y0E1WrKmPunSuR7LQ5Jnovf71lzxZ%2FlBHNsgozpFg8O14xS%2FQuelsK%2F1nUAOeyz2VB4lwgOeIQujA8ul%2FxdrtW0TvcB3gCQGw3IJAml04ILpl1P6PwOXmXb6mnIpk3s%2BREmdB1GtI1wGS2hXzG7zK0V1jLaASHUK9ikgMifuuyANRAfbMAGE6Q4Gfjx5FOpC2IDVZWHeKQMVz0lC%2B9XJonPyGNxb1u0UhvMzBSz3ZjChmqzEBjqkAazb%2F0KGsnFnN3k8brhEy4eI4S%2FdDs05L%2Bh2CnArVYfQclNhREtLl%2FBGJvCB20BHxXL%2BvKdOcmOCnxZWwPNumQ6fx2lF2wG0lLY41nvdPLbEUHfL%2BQ6pEI14JdkVidrCvY2LM2xmCE0dUU%2FSuQtKWgqh4wCooEISbjH2yPEBtd%2FPi7VvvADFVKE14Fx0LXdKV45f%2FyBraWq%2BeGie4EyzAE5fN8Rx&X-Amz-Signature=f964c2d106f9ef8a8e66c0b5dbf6a6141638ad30632e9de6dfc914700e49b203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2HCTOF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg76yfhyZcEc%2BFczBjUX9nAS%2FoXI1T5M2VYOdn9fCb5QIhANyOS5769C9j15w%2B%2B6JmOsi0Aep9BFl4WzyMzEQy2WlIKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2FXwgfMFsmscZkxwq3ANZ64%2FZEU%2BscmnLsgWdDZbXURopdeSPlwPEgQx6Y%2FvJV1s0nLoBdS9kXExaniqzRpbwmMDb9X9%2Fn1V0d55HV7N6eijfzMd8%2F5r7T9nCwZXfrvKbk9M2xyk9%2F2KkSpoEhsdvMCIH5KCFPTfwW0mt89jbKCmvAyAEQxV9IgQZ%2FCsnhioc6Enf0KJzj9vHYAKSGTnNrKsJuEIpoSsOEcF6uIkOCgjEHD7DdL24j9GOHsrrquLMMDf%2BY0FrbQl7YyPVSdTcwfIYEDiofZGy3t9nkVdnMdOLztCC7xdRlylCFUvNRe3D2xP%2FQFPLIhno3%2FR94xMDxTf%2BSFK8rVIlaYNCzFzpgloWnMQuh8WNUOIxk1nnV%2BJoksyeeL0%2BPnjvQgw%2FzyAFstShfR0%2Bde%2Bn9xW8Y0E1WrKmPunSuR7LQ5Jnovf71lzxZ%2FlBHNsgozpFg8O14xS%2FQuelsK%2F1nUAOeyz2VB4lwgOeIQujA8ul%2FxdrtW0TvcB3gCQGw3IJAml04ILpl1P6PwOXmXb6mnIpk3s%2BREmdB1GtI1wGS2hXzG7zK0V1jLaASHUK9ikgMifuuyANRAfbMAGE6Q4Gfjx5FOpC2IDVZWHeKQMVz0lC%2B9XJonPyGNxb1u0UhvMzBSz3ZjChmqzEBjqkAazb%2F0KGsnFnN3k8brhEy4eI4S%2FdDs05L%2Bh2CnArVYfQclNhREtLl%2FBGJvCB20BHxXL%2BvKdOcmOCnxZWwPNumQ6fx2lF2wG0lLY41nvdPLbEUHfL%2BQ6pEI14JdkVidrCvY2LM2xmCE0dUU%2FSuQtKWgqh4wCooEISbjH2yPEBtd%2FPi7VvvADFVKE14Fx0LXdKV45f%2FyBraWq%2BeGie4EyzAE5fN8Rx&X-Amz-Signature=25d45ef7915df71251258c9ffebb0152abdc70cbb569e3947ec80e1f8335ef2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
