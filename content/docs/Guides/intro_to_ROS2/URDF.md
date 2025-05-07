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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBSUX37%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2szx6Yu13uG8x04TWZaWkCkXxSUT0oZDTlxV6CiNTqAiBUjYklQ7eWXqfR3tO2yTYBuY8fZVRXXcqtCY3knb1M4Cr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMJmG8WL567DUhKzliKtwD7iGZDsUHJ%2FKYq85GN9k0KWT5QIciJQSnfrF5n%2FJWfNXCsFoGLzHetUGTDLptXnUOQHrQ3RmMetRTRTZA%2BYkf9dMu9Zg68QG83XAFNDt%2B8j47U7D4kWREETzMiXKrhfZn4l9NBVAE1H%2FoqEzQDu4H827MldB9BavDlKvgo6bGq%2FBIseoWVZGf4bg30onqYUJuP5RFuHaW7LHjcHcxUdlacsdeVPYLTmJoentE59MY1UJCcaH4STAwUrzvH1PD8YwfxGKYECasJDXIZF6Fh7Ml49tR3cb2avFdyfjlvHcCN53FPwqjmzHGeCJye7vYfQoUbFjgfrm4AGvsZGak%2FJuQ%2Fc%2Bg0BgUh1%2Fct629TRmhM%2BsUyX%2BwdHY%2FaHDGUR22ilF24kvrOQ5MtwdCrek3T1sIKIc3fBWI1zC71CFj7ub1EWJir57VgPvk2LGzotJOPxgk3tQInACxTAMGP%2BWIHsSiftOZtEHdcwgB%2FmFRNiq%2BVMDwG5E5LtaDJg5OKmXDql91oEg5%2FtyJBKwCYvk20wFN4EMY6wR6ssu1mbiWWE4WLP%2FrLd%2FoQyyhB1add1R7QqiLSE3yxwbWwyFjvu2Z1kY9hMFlONVbCmxFh17GERkCJA3RnmdDrf3eYKyrE4YwibPtwAY6pgEQqI%2FnqJoHB2ViXcGIbL60z%2BLKHKxjS9USgp5WiOZRtQE5mos2B%2BxvHuqPZ7R%2FIItSvK29aEjAMAd84NaJ9%2BkenBPEiiFzBW%2Fa%2F6YoAFshqzemuD8FXGIffzOEKRpT5Wwu8wMU3EPqLiAHxQszcBQZsasPbrs6MmMYM3reClW7P99p%2BfzHfUZiTiv%2BIRUqN0JgA1mBngQa%2BQgcU1g0wCSyjwi%2Fkrxg&X-Amz-Signature=52715193afce8f102f4d1311a2758e051c2e7ddf5c80d58913c566f23d9f13e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBSUX37%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2szx6Yu13uG8x04TWZaWkCkXxSUT0oZDTlxV6CiNTqAiBUjYklQ7eWXqfR3tO2yTYBuY8fZVRXXcqtCY3knb1M4Cr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMJmG8WL567DUhKzliKtwD7iGZDsUHJ%2FKYq85GN9k0KWT5QIciJQSnfrF5n%2FJWfNXCsFoGLzHetUGTDLptXnUOQHrQ3RmMetRTRTZA%2BYkf9dMu9Zg68QG83XAFNDt%2B8j47U7D4kWREETzMiXKrhfZn4l9NBVAE1H%2FoqEzQDu4H827MldB9BavDlKvgo6bGq%2FBIseoWVZGf4bg30onqYUJuP5RFuHaW7LHjcHcxUdlacsdeVPYLTmJoentE59MY1UJCcaH4STAwUrzvH1PD8YwfxGKYECasJDXIZF6Fh7Ml49tR3cb2avFdyfjlvHcCN53FPwqjmzHGeCJye7vYfQoUbFjgfrm4AGvsZGak%2FJuQ%2Fc%2Bg0BgUh1%2Fct629TRmhM%2BsUyX%2BwdHY%2FaHDGUR22ilF24kvrOQ5MtwdCrek3T1sIKIc3fBWI1zC71CFj7ub1EWJir57VgPvk2LGzotJOPxgk3tQInACxTAMGP%2BWIHsSiftOZtEHdcwgB%2FmFRNiq%2BVMDwG5E5LtaDJg5OKmXDql91oEg5%2FtyJBKwCYvk20wFN4EMY6wR6ssu1mbiWWE4WLP%2FrLd%2FoQyyhB1add1R7QqiLSE3yxwbWwyFjvu2Z1kY9hMFlONVbCmxFh17GERkCJA3RnmdDrf3eYKyrE4YwibPtwAY6pgEQqI%2FnqJoHB2ViXcGIbL60z%2BLKHKxjS9USgp5WiOZRtQE5mos2B%2BxvHuqPZ7R%2FIItSvK29aEjAMAd84NaJ9%2BkenBPEiiFzBW%2Fa%2F6YoAFshqzemuD8FXGIffzOEKRpT5Wwu8wMU3EPqLiAHxQszcBQZsasPbrs6MmMYM3reClW7P99p%2BfzHfUZiTiv%2BIRUqN0JgA1mBngQa%2BQgcU1g0wCSyjwi%2Fkrxg&X-Amz-Signature=b21fbaf2d190eb767441bbf9b2d3f3208be520e7b3ec6578cdf915fccdaacff9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
