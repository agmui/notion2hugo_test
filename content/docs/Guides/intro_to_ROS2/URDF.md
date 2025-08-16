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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSZJN7Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDnTplit3p0mkFEqa7eafJi8YS0%2FezhM6tpCb%2F13m48LQIhAJLE5SvKg%2BzgZS442FxZmRPoeT88%2FkGcnvKZ%2FlgcXOJDKv8DCHEQABoMNjM3NDIzMTgzODA1IgxqK9Qon82R1AoTf%2Fkq3APIssr0NSD6fwiZC6u27UVSWNgnuQaNKyvyStR%2FxumFJYICsUICb%2BqxexuQm2ya3fUOEJ%2B6b2WPDYsIihbiI6bVuDKqy%2BXrsqQob6shUt5082hDSZl10f7Qfe8WigKLOe6on1A1bdVdqI%2F6hu%2Fosrc1KDZIsHx2ds4Vxm4QEEIOii%2FcF7KrMZooX8fannDMGgm6eviU%2B8LPSVSfLlyjUXBkOv6a9hz8LkrSCMHmOa5CVX9I%2FCSg6NMMWIOSnzfwVyrSdjsdxdbBJJrruvtcLkJ5uXVGzBj1v7v0gSNu%2Bd4JsdoihlDDXFEzEZFXfG8YBmSTQLbTH0j18otbQ8BcT3ZPq4vJDsnLNC1us8v99ua8wWXU3uOETS%2BZKA%2BtckyJAkGYJE3wWxvLRQtyBnC6u7%2FyPc1lKk04ByPJTykzjUtkzLQpcmakbMBOCmbrm9JMNbvu4eu2QiRiWGgzAnWRxGPDABnsTYjD3pvdJHuVTf8vSWM4XKW5J9EhqSkjvcWuPFigm5w0hu%2F2FjzAhmCQlAauqY70IB7wNdkbTyb0up6StTwwNfWG%2FovnVsrFAJdXmDIzbKTVXsuboJ9fWh7Cmmp8z6qysdUJuwQ4v1aaE4wpKTQmVRe0X3OY2HB%2BcTCf%2BIDFBjqkAXmgqne6zvtaEyXclY0%2BfNmM1fRM91PJMwDllQSXZaFnWvIEmy%2F4l3DFTbl9n1z6mVZ97TnXDtP289KMjD81%2BLlPGDAFWUzEThFwCdQ3dByK2mKRJPL1qWJpkd9LaJH5JeWfQCv4qG5bKdtT4L8To0t47Pt2X7iXYtYmun3sqZbp%2BbuvlBHDH71x%2BLTlCu9%2Fvk0XRSlCML%2F9g%2FBdDO8n7iYeeiai&X-Amz-Signature=07e6c42cd877ca07f1e14d666d43ce5507d51862596465c13342b8b840caee2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSZJN7Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDnTplit3p0mkFEqa7eafJi8YS0%2FezhM6tpCb%2F13m48LQIhAJLE5SvKg%2BzgZS442FxZmRPoeT88%2FkGcnvKZ%2FlgcXOJDKv8DCHEQABoMNjM3NDIzMTgzODA1IgxqK9Qon82R1AoTf%2Fkq3APIssr0NSD6fwiZC6u27UVSWNgnuQaNKyvyStR%2FxumFJYICsUICb%2BqxexuQm2ya3fUOEJ%2B6b2WPDYsIihbiI6bVuDKqy%2BXrsqQob6shUt5082hDSZl10f7Qfe8WigKLOe6on1A1bdVdqI%2F6hu%2Fosrc1KDZIsHx2ds4Vxm4QEEIOii%2FcF7KrMZooX8fannDMGgm6eviU%2B8LPSVSfLlyjUXBkOv6a9hz8LkrSCMHmOa5CVX9I%2FCSg6NMMWIOSnzfwVyrSdjsdxdbBJJrruvtcLkJ5uXVGzBj1v7v0gSNu%2Bd4JsdoihlDDXFEzEZFXfG8YBmSTQLbTH0j18otbQ8BcT3ZPq4vJDsnLNC1us8v99ua8wWXU3uOETS%2BZKA%2BtckyJAkGYJE3wWxvLRQtyBnC6u7%2FyPc1lKk04ByPJTykzjUtkzLQpcmakbMBOCmbrm9JMNbvu4eu2QiRiWGgzAnWRxGPDABnsTYjD3pvdJHuVTf8vSWM4XKW5J9EhqSkjvcWuPFigm5w0hu%2F2FjzAhmCQlAauqY70IB7wNdkbTyb0up6StTwwNfWG%2FovnVsrFAJdXmDIzbKTVXsuboJ9fWh7Cmmp8z6qysdUJuwQ4v1aaE4wpKTQmVRe0X3OY2HB%2BcTCf%2BIDFBjqkAXmgqne6zvtaEyXclY0%2BfNmM1fRM91PJMwDllQSXZaFnWvIEmy%2F4l3DFTbl9n1z6mVZ97TnXDtP289KMjD81%2BLlPGDAFWUzEThFwCdQ3dByK2mKRJPL1qWJpkd9LaJH5JeWfQCv4qG5bKdtT4L8To0t47Pt2X7iXYtYmun3sqZbp%2BbuvlBHDH71x%2BLTlCu9%2Fvk0XRSlCML%2F9g%2FBdDO8n7iYeeiai&X-Amz-Signature=8c93aa9aa43e9d03e5573e2398288f0d0f4914c23d830213cfeef26bf27f81a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
