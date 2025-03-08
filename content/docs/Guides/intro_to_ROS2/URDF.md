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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBE4XGXG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC7Jj5i0hR4eomTD7kHWgoju8eAzSPjQfyjgYJWAtnd7AIhANeO1v%2FzG1NpRGtx1h9DkbHSbDGx5vSy8LYUbW6MmAxhKv8DCGcQABoMNjM3NDIzMTgzODA1IgwpYDZM8gP7OjH3GbQq3AOYJ9TxgZsC154fZYC954%2BvBmXKAaZCmIBhb967H%2B%2FWLZXDmH7hPR3LDbss4fYp6K2YK63GTC%2BcYTPWhEr1PbCnWrTqlImmeCtyo3tEfI58Hx6KgZ3KPm8i%2BQbPpEmN7BldtWl10AWq3eZ3nWSvjd1Cuiip5Bu0CTGod0EU%2BvP5%2BEeS8Fs3JbxEtdWd0RgK9FhG6Qz9Yc1GgSoCj76GH68lxRp4oIb8cb1T1j9%2FvwnVHlVMPMKOA%2BZkWOMdkST8CI1BGSwniKR0WRUlrsKf5jQanmHysEUmRG2w%2F9OPt%2FovlrDs4tQa78sOuKvfl34VE2%2B9rfY%2B4GGHeGW9Pa8tyi9p6Z1zh%2B7UvHYb4xVEd%2B1vFlX4HoUOUc0Tgu7r8zprQgepKORHZDtARBvK%2F3WZUPRk2GS5SQCGRRvsM5wvFtchG5hsp82Enu39vmDH8E6aUVNqUGMyRFoLe8jdpbODjo4QoRUcw95l7rgwJNlMvWqEq6zOVSpmruTmbYTyUH5%2FYlLJvn8TcqYpNhD5j0szHK%2BJ%2Bu5y4AWzioQi6tQCcsyZb5XK7FwtZI8whJYuHxsNij4%2F96S7zxtERxfNToHYcEtaBjIbbJ52unYpxkY694GJx4arE%2FO0Vibg1vgUlDCZ87K%2BBjqkAdxq1zleL5%2BFOg4SEFNidQTDin%2BAjiRmB6UZjNOTfEWnlj1YG9zVLLe1N93wtkXmsOiphxrdCH4B%2Bs0jewXpq1jT2uTcgi1%2BhtoJLBWTNsvtIV0y9lPMx164bbiTu0esTVRS3dLBzbdPHzMVFlwCNMmHSH135eETIjV3MoDUSZgfpmBJw2%2BeHfRkgotVj13ecG0NNARQ3NcNRxtBAqDmO%2Bo5Qop8&X-Amz-Signature=4f38eb2244a6088b17fe2d7fcd80d323d740e63cd2414df57cb87b8ba297e401&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBE4XGXG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC7Jj5i0hR4eomTD7kHWgoju8eAzSPjQfyjgYJWAtnd7AIhANeO1v%2FzG1NpRGtx1h9DkbHSbDGx5vSy8LYUbW6MmAxhKv8DCGcQABoMNjM3NDIzMTgzODA1IgwpYDZM8gP7OjH3GbQq3AOYJ9TxgZsC154fZYC954%2BvBmXKAaZCmIBhb967H%2B%2FWLZXDmH7hPR3LDbss4fYp6K2YK63GTC%2BcYTPWhEr1PbCnWrTqlImmeCtyo3tEfI58Hx6KgZ3KPm8i%2BQbPpEmN7BldtWl10AWq3eZ3nWSvjd1Cuiip5Bu0CTGod0EU%2BvP5%2BEeS8Fs3JbxEtdWd0RgK9FhG6Qz9Yc1GgSoCj76GH68lxRp4oIb8cb1T1j9%2FvwnVHlVMPMKOA%2BZkWOMdkST8CI1BGSwniKR0WRUlrsKf5jQanmHysEUmRG2w%2F9OPt%2FovlrDs4tQa78sOuKvfl34VE2%2B9rfY%2B4GGHeGW9Pa8tyi9p6Z1zh%2B7UvHYb4xVEd%2B1vFlX4HoUOUc0Tgu7r8zprQgepKORHZDtARBvK%2F3WZUPRk2GS5SQCGRRvsM5wvFtchG5hsp82Enu39vmDH8E6aUVNqUGMyRFoLe8jdpbODjo4QoRUcw95l7rgwJNlMvWqEq6zOVSpmruTmbYTyUH5%2FYlLJvn8TcqYpNhD5j0szHK%2BJ%2Bu5y4AWzioQi6tQCcsyZb5XK7FwtZI8whJYuHxsNij4%2F96S7zxtERxfNToHYcEtaBjIbbJ52unYpxkY694GJx4arE%2FO0Vibg1vgUlDCZ87K%2BBjqkAdxq1zleL5%2BFOg4SEFNidQTDin%2BAjiRmB6UZjNOTfEWnlj1YG9zVLLe1N93wtkXmsOiphxrdCH4B%2Bs0jewXpq1jT2uTcgi1%2BhtoJLBWTNsvtIV0y9lPMx164bbiTu0esTVRS3dLBzbdPHzMVFlwCNMmHSH135eETIjV3MoDUSZgfpmBJw2%2BeHfRkgotVj13ecG0NNARQ3NcNRxtBAqDmO%2Bo5Qop8&X-Amz-Signature=e3a8ca1e5ee68dfca2035897e67e64bbd849f3282e9061898a8f0579c3be1ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
