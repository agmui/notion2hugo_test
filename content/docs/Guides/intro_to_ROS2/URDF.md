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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CMEP2P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCIfWIkDo2UlNV63ItwYP59xDqV5QPguWl2cloakcD6iwIhAKKXrovLV3wcHHiJhOZkaEqyOxmsvNm2UQvGQFYYYb14KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSgPN66KobAqZvYBEq3AOuJ6I9%2BWrFb%2BKjOHFkR5obxYx7jhDcmNmnqhWnRHJNMvZucQUsJHvdLuxYb8X%2B4npszUh0yKv1fbBz8ffy3VfaZe5W36Y8FVidq9RoO0hO0LcBe1zINC9TVSVXDtohrWQfYMppni7HHtwHrpW%2BoHNrEBEKcAs%2FwPU1LrbPOcWDOgJTUvNif80SdtSBAcEXI9Y%2FXbVuXnlSyMIasovQtTc2KQz1WQRP2Zzkorakdachs2y%2Fzi%2FRMVtMNP52NjGWa9P65j0TTTIEpKtJzki2DBvVhq4SysoDB9n%2B9mBLDe%2FByEwKcyIdWU9XoBt9gMn88XjMUUni78S%2BTjLFojYepnU%2FwmFBzMskd7HuL9Q6amBdPRlfM5IEKRNCQnjLjzU5pyJXTsCT3XpuWOD7uC1WL6J%2BNaPkedyTy11qngBXN1MKMMkckzGfy%2FuScA5UQN5zVzXZf9%2FPyJ%2Bl1XvpCGS1J%2F5%2Fhid98d21QDmN0qjWVuVwS52UzWmcPtPDENAozdn3XaDfM0jTNQ7lDJjeMfTY3vIjQysmS2mqJop1CXO2TwtgkEhM1%2BwsgduWdsyoXshi8Xv3B1nbiOHmk%2FYM8oTTDcmmmr4GpziFYs%2FvV7o0NiOERr%2Fbo3OaUnuKiyvMODD%2F%2FsW%2BBjqkAWLn0T5OZQRaUZ2sCZ9RvHwYAHxN4kJzuzqqvfhXBRyZHYBShBQ%2Fu79cppOiAA0JVFYvTlxcS5SQRwxOPYDMjG%2BzaAjHD%2Fhtvqa7U3gdie7Nf7hAabTc%2BNOHtwojQUBsNgYcztw0zRHhbCkR3ECwgkyPFnWAzriY2IuANHiOG9O2CupLQc388nDmGxj3FhivfRGYFXwVCBvL%2BbjnLhPm7h1HRChw&X-Amz-Signature=e1b9c38505fcb3ad89e87844611603c394398e9e05828daa89425e26d8bb694c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CMEP2P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCIfWIkDo2UlNV63ItwYP59xDqV5QPguWl2cloakcD6iwIhAKKXrovLV3wcHHiJhOZkaEqyOxmsvNm2UQvGQFYYYb14KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSgPN66KobAqZvYBEq3AOuJ6I9%2BWrFb%2BKjOHFkR5obxYx7jhDcmNmnqhWnRHJNMvZucQUsJHvdLuxYb8X%2B4npszUh0yKv1fbBz8ffy3VfaZe5W36Y8FVidq9RoO0hO0LcBe1zINC9TVSVXDtohrWQfYMppni7HHtwHrpW%2BoHNrEBEKcAs%2FwPU1LrbPOcWDOgJTUvNif80SdtSBAcEXI9Y%2FXbVuXnlSyMIasovQtTc2KQz1WQRP2Zzkorakdachs2y%2Fzi%2FRMVtMNP52NjGWa9P65j0TTTIEpKtJzki2DBvVhq4SysoDB9n%2B9mBLDe%2FByEwKcyIdWU9XoBt9gMn88XjMUUni78S%2BTjLFojYepnU%2FwmFBzMskd7HuL9Q6amBdPRlfM5IEKRNCQnjLjzU5pyJXTsCT3XpuWOD7uC1WL6J%2BNaPkedyTy11qngBXN1MKMMkckzGfy%2FuScA5UQN5zVzXZf9%2FPyJ%2Bl1XvpCGS1J%2F5%2Fhid98d21QDmN0qjWVuVwS52UzWmcPtPDENAozdn3XaDfM0jTNQ7lDJjeMfTY3vIjQysmS2mqJop1CXO2TwtgkEhM1%2BwsgduWdsyoXshi8Xv3B1nbiOHmk%2FYM8oTTDcmmmr4GpziFYs%2FvV7o0NiOERr%2Fbo3OaUnuKiyvMODD%2F%2FsW%2BBjqkAWLn0T5OZQRaUZ2sCZ9RvHwYAHxN4kJzuzqqvfhXBRyZHYBShBQ%2Fu79cppOiAA0JVFYvTlxcS5SQRwxOPYDMjG%2BzaAjHD%2Fhtvqa7U3gdie7Nf7hAabTc%2BNOHtwojQUBsNgYcztw0zRHhbCkR3ECwgkyPFnWAzriY2IuANHiOG9O2CupLQc388nDmGxj3FhivfRGYFXwVCBvL%2BbjnLhPm7h1HRChw&X-Amz-Signature=586c60319f9e191d717c2c9d2614985d9abb9774d3417ed4e485564afe1724f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
