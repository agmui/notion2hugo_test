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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3A4FTRB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD%2BNUAS3KYc4hZgyBUZJl%2FW9oD7ozJHIlK0jwsjcoV7CQIhAJp2SBi1ibfgkAwL72zoG4EFjthFtOAiERuIrnsTmqIPKv8DCD8QABoMNjM3NDIzMTgzODA1Igxj%2Bze247WQxPy22xgq3AO15i7y3XiUggAQZKprIJuWYqv%2B0dy30RQHnhr2RlCUWDlh%2BxqYfVCr0PKNBZff7mGoCispLwKhAeJAd8MHR2E6haaXD5nOL9g%2F37YzCdDrhH4zWsFNHAyeQaaJilGnIAvlp9m%2FhGIwzOXcH2XBZQPclXAYR8gTAG8Y65ihdvmaB9xwypT9hshHTFywXr5AwySkyFEQrfF0uqeDpEoBxKZEcUP8kUYwkKIPTqG355JiHhOtTB3lteidmREVegwaNMK4yrTcOHbYzrFHTD3ZBHCS7LDtjtmKwKTBZ%2FpZEJXm%2B1%2Fy8Zu1fjFCVawpq5ygxAL5LGRHGr8gvss6zxvlTw%2BT807Xl2v4hzY5HuUjzXuQTkdmwvD5nq5YJNpovlOjT%2BJ3smWDeIbe99z06vOmeElLpiMdsH6qgYPy70uTO9fZz%2F8GPsBu0y8i7ELF%2FHYHfEHw7Vkd88OBGC5pkrEyXW3KQr5N5uTrvb2XPIMtXx%2Fr2NMeZPS1Q9SRc5BA3cyCHvosJpiFu0HXAl%2BZOAeBHxEarr3RfFH1%2B299vTNGqy0woclVbAyqplUurLNwBnpeqMuaj2musMNYS9HRsvym1daDSmsWjq0u66M3BWkG2Z6gAwY0Y%2Fg4092SZW0MPTCA5YTCBjqkAa4%2Bl5HvylPi%2BW8Nf5GNshjQfgplM1P6nWCgzNIarSCqs9%2Fg%2BUowIpleBKmJMl7ngpbox1Jqd%2BJCgA8hLDp3oEwAh4W6LeIrMZeHogjWA3OQwo6Ef4WG8%2FT9AgrSXcIpzCYKI2nto99IDPNQFfwq7pHefAzF7aaC0ppMhaLKq46DD3kyK8ycKhSmJzG5pXs8YJAJnZUDU3isMJwozJ3QRkNxEnC6&X-Amz-Signature=f95a74b3250d2f9af30706c0531cad23de8790f215a9e981c3e843f4ed0f9db0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3A4FTRB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD%2BNUAS3KYc4hZgyBUZJl%2FW9oD7ozJHIlK0jwsjcoV7CQIhAJp2SBi1ibfgkAwL72zoG4EFjthFtOAiERuIrnsTmqIPKv8DCD8QABoMNjM3NDIzMTgzODA1Igxj%2Bze247WQxPy22xgq3AO15i7y3XiUggAQZKprIJuWYqv%2B0dy30RQHnhr2RlCUWDlh%2BxqYfVCr0PKNBZff7mGoCispLwKhAeJAd8MHR2E6haaXD5nOL9g%2F37YzCdDrhH4zWsFNHAyeQaaJilGnIAvlp9m%2FhGIwzOXcH2XBZQPclXAYR8gTAG8Y65ihdvmaB9xwypT9hshHTFywXr5AwySkyFEQrfF0uqeDpEoBxKZEcUP8kUYwkKIPTqG355JiHhOtTB3lteidmREVegwaNMK4yrTcOHbYzrFHTD3ZBHCS7LDtjtmKwKTBZ%2FpZEJXm%2B1%2Fy8Zu1fjFCVawpq5ygxAL5LGRHGr8gvss6zxvlTw%2BT807Xl2v4hzY5HuUjzXuQTkdmwvD5nq5YJNpovlOjT%2BJ3smWDeIbe99z06vOmeElLpiMdsH6qgYPy70uTO9fZz%2F8GPsBu0y8i7ELF%2FHYHfEHw7Vkd88OBGC5pkrEyXW3KQr5N5uTrvb2XPIMtXx%2Fr2NMeZPS1Q9SRc5BA3cyCHvosJpiFu0HXAl%2BZOAeBHxEarr3RfFH1%2B299vTNGqy0woclVbAyqplUurLNwBnpeqMuaj2musMNYS9HRsvym1daDSmsWjq0u66M3BWkG2Z6gAwY0Y%2Fg4092SZW0MPTCA5YTCBjqkAa4%2Bl5HvylPi%2BW8Nf5GNshjQfgplM1P6nWCgzNIarSCqs9%2Fg%2BUowIpleBKmJMl7ngpbox1Jqd%2BJCgA8hLDp3oEwAh4W6LeIrMZeHogjWA3OQwo6Ef4WG8%2FT9AgrSXcIpzCYKI2nto99IDPNQFfwq7pHefAzF7aaC0ppMhaLKq46DD3kyK8ycKhSmJzG5pXs8YJAJnZUDU3isMJwozJ3QRkNxEnC6&X-Amz-Signature=c455c4b5c62aa4f03583a7ad2fb2b4539df75a3c83db231dca05cbdcd74d380b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
