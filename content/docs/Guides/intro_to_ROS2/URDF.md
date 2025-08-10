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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIHH34G%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwdDJ96s8bT3EKhORhZN5j7Dipb4I363ehudYS6HPBOgIgdGs4tHVce4y5m1wZi8Gb04TGpWkfpiIBCEaYf6Ch5i0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg9ebyV3Ts%2FDUsQqSrcA6l8w0MjwZfaD9eZTo3il1WaGImC%2BDPBJ8F7qqBO5TkgmbTLR8qazhBFv%2FqeBH5lCGTObxeDERAIDLq%2F7Za13VZ9KLEZOjYkXKwprA2okVGTYAC6uISu6K5lfB0uIpipCU0Uk3ZfW20YmRq9gayHDXRf%2FCSRzfzog0fRvidfGii0Yl%2BkD7l0WKDdXxDDsVBleJ%2BYhxSPpDGQ%2Fug%2BM9%2FlRTnngiVK3V2qSEHTCLe9v%2FxC88HoOm5F3hYz0AUFYapQJclq86neWkmAxYeO39EL5YwwMPG1pUuB6ZdJd0euAYo6dygHKTs3NUBEYtxfRPlzcH%2FD75sPi%2F8dFZcy0BQhjHthuyHlqjlK43EkAMI2wat2HvoUkCft0OxWeIGKLp8iwNPG8JFqLMqk55jezczJhDbNrkSDcebquoPYtw0B2a%2B28Q2urbUzmlmpiGAXfzNEop7limqF9hDc9jdwcUBXn3bhga55D7XH8fcp2GqfvgIb%2FL7S%2F0EMoa%2F8LGXkV5pL6sPVvBya00MfkfnzHvGcyd7w8u9E7A3GF%2FcZqptkC9iniyKwitXq9seaAk0W%2BaZ5cd6F6C8YVhocfoMChucdesf%2BAfEdau60SvL2UaAnXH2Tjtajr0PtPMFrLL1UMP2648QGOqUByMg6yZs5RU0KjwtsXRsfy%2FS4UtAzBC5x2cyRG7I%2BYTonUeunDUFgAENoilSyMqRFZzRpa2gw9obvURKntzyiBp080pS3BZq4rf9GAYI3uuvyC5XjUVM31xs5JtTyJ3k9pyMQNhgcbKogiLWU1TntdTiv9c4YPpRLziQvc%2B1r%2FLZbkVCfzATUjjKWdHzKS3YWCj%2F6KbUOhpnhh6Pe9CSlWHcLzgPP&X-Amz-Signature=e393f5cc98ca5611746698397b006abe21ad6b478ed9646e44d70279dfb873f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIHH34G%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwdDJ96s8bT3EKhORhZN5j7Dipb4I363ehudYS6HPBOgIgdGs4tHVce4y5m1wZi8Gb04TGpWkfpiIBCEaYf6Ch5i0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIg9ebyV3Ts%2FDUsQqSrcA6l8w0MjwZfaD9eZTo3il1WaGImC%2BDPBJ8F7qqBO5TkgmbTLR8qazhBFv%2FqeBH5lCGTObxeDERAIDLq%2F7Za13VZ9KLEZOjYkXKwprA2okVGTYAC6uISu6K5lfB0uIpipCU0Uk3ZfW20YmRq9gayHDXRf%2FCSRzfzog0fRvidfGii0Yl%2BkD7l0WKDdXxDDsVBleJ%2BYhxSPpDGQ%2Fug%2BM9%2FlRTnngiVK3V2qSEHTCLe9v%2FxC88HoOm5F3hYz0AUFYapQJclq86neWkmAxYeO39EL5YwwMPG1pUuB6ZdJd0euAYo6dygHKTs3NUBEYtxfRPlzcH%2FD75sPi%2F8dFZcy0BQhjHthuyHlqjlK43EkAMI2wat2HvoUkCft0OxWeIGKLp8iwNPG8JFqLMqk55jezczJhDbNrkSDcebquoPYtw0B2a%2B28Q2urbUzmlmpiGAXfzNEop7limqF9hDc9jdwcUBXn3bhga55D7XH8fcp2GqfvgIb%2FL7S%2F0EMoa%2F8LGXkV5pL6sPVvBya00MfkfnzHvGcyd7w8u9E7A3GF%2FcZqptkC9iniyKwitXq9seaAk0W%2BaZ5cd6F6C8YVhocfoMChucdesf%2BAfEdau60SvL2UaAnXH2Tjtajr0PtPMFrLL1UMP2648QGOqUByMg6yZs5RU0KjwtsXRsfy%2FS4UtAzBC5x2cyRG7I%2BYTonUeunDUFgAENoilSyMqRFZzRpa2gw9obvURKntzyiBp080pS3BZq4rf9GAYI3uuvyC5XjUVM31xs5JtTyJ3k9pyMQNhgcbKogiLWU1TntdTiv9c4YPpRLziQvc%2B1r%2FLZbkVCfzATUjjKWdHzKS3YWCj%2F6KbUOhpnhh6Pe9CSlWHcLzgPP&X-Amz-Signature=af013e7ae331696a180be47bc490844c5e2f1b7cb424007bf07f726cf058cc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
