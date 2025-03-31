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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4NYDTW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDZEFe%2FY2nc15pU5VJ5aT6fcNsQoGFo4guTkPpjuqnmMgIhAPxQJ5RtFLddHAXz%2FsLT2oqTkNQCq6fHyyMd8Ost4efuKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrfhIOrJ%2FVTCMCFpEq3AObkZy%2BJKjzWT6xlkgVZdREO5GUPBx3ngkoOEBD2z9PlgUX8dpCRi5f%2F9L7BfkzQCrTd%2BzRyL1d1KHkSh4FKq3RHuaA6%2BNEY%2B29b2KNSAyKSuhxOmmaYRHBEfYhYHngAcBV%2FGYQmEVQnst5j70JkU6YALt88ZlC3dmAWz0%2BhP9bEHIJ6bYjp6L1bQxrT7a5qElWNYTpeXcWvFLTAMk4SqgEALo6NpPGX%2FiN%2B1hL1eWx7ERPzaNnFvNrxBaHTPyivqtJJYC5siuNIw0QBh9C4XFCbZmIpDtmmUAVzryQe1absk24BfNLA%2BFPlB2upZyyfNUJU2ZjEl2VSFpY3J7i2Co4IbNeL%2FX99ZDVVLGKYiPyXH%2F5Ra0vzuAfqxABwOUU6DWvyHrsJNLnVuUZIaEs%2BCapxIJJ948jvfReEYxF%2F5fazpedZZWE6yki4iYUI5jnQWvprdl6DXzDlJuGn170ybUbkE5LVNbP2IfV1qHk5rvDMljIs6EtYRvc7sVaHMK8hp%2Bx5Uml9bgBJTdDt9AA3lrvJ%2Fw%2F3jwoahlwN%2BZfNQAlhMvsnyzKD0omCDowKuamQvzo%2Fn15IAIEonrOF72nDQ1eCS%2BbhUu9vzdAS9OQJp6WRQWdmHJ2Kk3UkfLBIDDLuKu%2FBjqkAcW%2Bgn7yChkLrB%2F5oKBuBX3aURIN5ZeXDj%2BnRfwxx%2BEVQLfpvTHAxiBn5cs75d0HcvWIFzKpNxdBbQW6SdmBcmUJdMU%2FP8eqkrb1mofTfI7k1%2Fyhm7y0AjMg9Dfan7xdFNCJoZCGNkqoZ3uOTilocsyQqYXZVYihEaCtUEazV%2FxBdFmo8rGoKgf5BF9%2BK1xCg%2FrzZ%2BdkdCMYIMSytehWH6JpCgSO&X-Amz-Signature=f4e675f950acc3670fe097bdd0370ddc187128e619d750c7f1480244a9b0dfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4NYDTW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDZEFe%2FY2nc15pU5VJ5aT6fcNsQoGFo4guTkPpjuqnmMgIhAPxQJ5RtFLddHAXz%2FsLT2oqTkNQCq6fHyyMd8Ost4efuKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrfhIOrJ%2FVTCMCFpEq3AObkZy%2BJKjzWT6xlkgVZdREO5GUPBx3ngkoOEBD2z9PlgUX8dpCRi5f%2F9L7BfkzQCrTd%2BzRyL1d1KHkSh4FKq3RHuaA6%2BNEY%2B29b2KNSAyKSuhxOmmaYRHBEfYhYHngAcBV%2FGYQmEVQnst5j70JkU6YALt88ZlC3dmAWz0%2BhP9bEHIJ6bYjp6L1bQxrT7a5qElWNYTpeXcWvFLTAMk4SqgEALo6NpPGX%2FiN%2B1hL1eWx7ERPzaNnFvNrxBaHTPyivqtJJYC5siuNIw0QBh9C4XFCbZmIpDtmmUAVzryQe1absk24BfNLA%2BFPlB2upZyyfNUJU2ZjEl2VSFpY3J7i2Co4IbNeL%2FX99ZDVVLGKYiPyXH%2F5Ra0vzuAfqxABwOUU6DWvyHrsJNLnVuUZIaEs%2BCapxIJJ948jvfReEYxF%2F5fazpedZZWE6yki4iYUI5jnQWvprdl6DXzDlJuGn170ybUbkE5LVNbP2IfV1qHk5rvDMljIs6EtYRvc7sVaHMK8hp%2Bx5Uml9bgBJTdDt9AA3lrvJ%2Fw%2F3jwoahlwN%2BZfNQAlhMvsnyzKD0omCDowKuamQvzo%2Fn15IAIEonrOF72nDQ1eCS%2BbhUu9vzdAS9OQJp6WRQWdmHJ2Kk3UkfLBIDDLuKu%2FBjqkAcW%2Bgn7yChkLrB%2F5oKBuBX3aURIN5ZeXDj%2BnRfwxx%2BEVQLfpvTHAxiBn5cs75d0HcvWIFzKpNxdBbQW6SdmBcmUJdMU%2FP8eqkrb1mofTfI7k1%2Fyhm7y0AjMg9Dfan7xdFNCJoZCGNkqoZ3uOTilocsyQqYXZVYihEaCtUEazV%2FxBdFmo8rGoKgf5BF9%2BK1xCg%2FrzZ%2BdkdCMYIMSytehWH6JpCgSO&X-Amz-Signature=cfbddf0e5e70121e72e6ed3a45c79f8164eb2d6ee8b4a6a064eb941254fc7415&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
