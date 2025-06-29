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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQAE2AB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtP5RPVSj136EYqorAfqr58%2Fwb1BuqsTk2QPGeBNQ0xAiBV%2FqT3WIoq0Vp8Y6yfJ1FMojeXIae45mr2ojx5QOa0ASqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6PQO32lGGyjbNnKEKtwDBQrUJKZGp4NODAL8U4sluT%2FJuBbpUWMmh4nwV%2F4haqpuC8QgBg4aum4sXoGYcVpHGRDXDCcsGQ1PxXoiYosqbUx2i4ymtdQD%2B%2FlpDNNs5%2B4aFY2xBs3NGA1VUGfCINa5nAr7dJPvFNKwCeX%2FI29K%2BaOBM2xGKfaXv5zs0ko0OMiCEGZVIFwRtxa7L4eI8fb1rgIkbGHQdfp6gPQ5N33TFdXsrZSda9lcPQOGqjX1C9xB8AJqt8u0CKt9iqat9XU%2Bx%2F5KowumY%2BhTkGMPn018WxPVww3YWHocuTTDc1RkhNfu5wpg6L5wW8RIC3dHRDqHoA3%2FouG85qwRl%2B6yaxOnL8ceaHowH7jDPTLxGhC4AMzlyh1DcRazTRJibgDbiDGG6No4MXxkHA9icjdxTASlCP3D82M%2FFbYgwEQTOXal59MziM%2B%2FlVd6lBwiJKaOjnhYrb5DklPb4kpCo2akiRtGeAgzwc2bEdrwkFvBVE3qxd1KqKhGxzMS0fB%2F9ckZBll50mGo%2B3P47xWqKjqOCPLiSpS3YInbDefY46h97ejQVsQWzk0INLPs%2F8Ri%2FBtSJ9TymyoAnHrl7lYGed4g5mmNrS3mBT53sW2cxli%2FPlyIRZfOWHRjev67QYFK79kw2JCFwwY6pgEI5%2F%2F3I4dbxHFZRX%2FsNlKmgQavV1ubLSn88Xav607EUtjAHzYICvlx17xkrrPwPlQcjLaKYKxOO5Z%2BgT%2BRJ9BcQLfisSkOvVk1uOQbAy9ki24VNQCt0ugjwd1AnL0Ce6b0MnMSs3to1KH9JhzfzzxcvAb9fOuoIFyxHsEvVXieO0euqZpJI2iGHyJkRLRE6PN63IggBqHmBuXtdaOgJYL20AaSemcs&X-Amz-Signature=1c2424b7b58e7efe75107b1629d531a8804e254a1ee9f340d00569c86e97893c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQAE2AB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtP5RPVSj136EYqorAfqr58%2Fwb1BuqsTk2QPGeBNQ0xAiBV%2FqT3WIoq0Vp8Y6yfJ1FMojeXIae45mr2ojx5QOa0ASqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6PQO32lGGyjbNnKEKtwDBQrUJKZGp4NODAL8U4sluT%2FJuBbpUWMmh4nwV%2F4haqpuC8QgBg4aum4sXoGYcVpHGRDXDCcsGQ1PxXoiYosqbUx2i4ymtdQD%2B%2FlpDNNs5%2B4aFY2xBs3NGA1VUGfCINa5nAr7dJPvFNKwCeX%2FI29K%2BaOBM2xGKfaXv5zs0ko0OMiCEGZVIFwRtxa7L4eI8fb1rgIkbGHQdfp6gPQ5N33TFdXsrZSda9lcPQOGqjX1C9xB8AJqt8u0CKt9iqat9XU%2Bx%2F5KowumY%2BhTkGMPn018WxPVww3YWHocuTTDc1RkhNfu5wpg6L5wW8RIC3dHRDqHoA3%2FouG85qwRl%2B6yaxOnL8ceaHowH7jDPTLxGhC4AMzlyh1DcRazTRJibgDbiDGG6No4MXxkHA9icjdxTASlCP3D82M%2FFbYgwEQTOXal59MziM%2B%2FlVd6lBwiJKaOjnhYrb5DklPb4kpCo2akiRtGeAgzwc2bEdrwkFvBVE3qxd1KqKhGxzMS0fB%2F9ckZBll50mGo%2B3P47xWqKjqOCPLiSpS3YInbDefY46h97ejQVsQWzk0INLPs%2F8Ri%2FBtSJ9TymyoAnHrl7lYGed4g5mmNrS3mBT53sW2cxli%2FPlyIRZfOWHRjev67QYFK79kw2JCFwwY6pgEI5%2F%2F3I4dbxHFZRX%2FsNlKmgQavV1ubLSn88Xav607EUtjAHzYICvlx17xkrrPwPlQcjLaKYKxOO5Z%2BgT%2BRJ9BcQLfisSkOvVk1uOQbAy9ki24VNQCt0ugjwd1AnL0Ce6b0MnMSs3to1KH9JhzfzzxcvAb9fOuoIFyxHsEvVXieO0euqZpJI2iGHyJkRLRE6PN63IggBqHmBuXtdaOgJYL20AaSemcs&X-Amz-Signature=e853e6c950266883402046104e7a3b017e9556ad3a02a4bfbfc799a13ccb3f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
