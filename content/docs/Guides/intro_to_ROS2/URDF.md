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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2WRZTC%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuKPHtRBBofHN%2Ffe4wJJcsPYIT65EpEZKTqeQJrFYDWgIhAPdDjhsjPSlYDDWz7YgbRMxIHql0LynzuUtowgDp1xNiKv8DCBoQABoMNjM3NDIzMTgzODA1Igyp3Qt1894oK%2BMtCSMq3AMphsiPgLOqnsNPWBEnwmSl%2FuUqisnl0Qloti%2F9RVLPkbiwdQRZVk6mXH%2BoBtXBqZ22zJyrkw1C7RbY7x2NIqJVaHVmqPP4Gh2L2Pi0UPuYh4ztjQc8AH8bmWPKkuAUecivrAy0n9Pt37Wvb3Nk026uRIivHPOED%2B%2B47dQk3lBCc4B1YlOrUXH9kyVifiuRrQr2fXO2VsAfOOHmayc53fmke%2B7bgFxDhyL4TwIsVfe%2BGB4jmT5ju487%2FsCNaSUjkE1EXUg9vH0H3M9dUIsPbeF33Ug%2BHme5pLs%2FQE6FpEfuY62BZvgQp72uReWKuAmKeSoyeSsdWncC8tcSutxZBaB7tFB9rKEm3DKtrvNYYzYNBRXLBgRg%2F7TXR5AdR2ScNfwME%2BLhKRXutDO%2B2pdKviG2bkeqrz2g89lV8zCfCKFFY6ZoJo4GsxRu6EUN8WcIDywbGq%2BEL5pyyTb%2FlS3ALLph1oWxEjnid7OFv2jc4VFjUrRdoLl4SbEegQscoGwrU%2FYxmE47AJYZ6VC%2BzCxnu35CimKLjqgx2%2FX1rdXm3a%2FHHTREyNjkkTrpysxRO0YIO5%2F9NDe8Pj6UpAj8Enb9%2FyDo%2F0R9LOrqPR8o%2BKBtmHz8DpdNNBNpjMgmQa935jCIlMrTBjqkAen5SjHTj3tuqtHrcfx8q2JRCoB9SxU%2BNPyH8sU0dxECE5n9EiNPFzGpuMWQucjgefXKJwyDzxuttVSLxU6AVtVSgjIHOWroNLF3yjMhM7j7Z2gPXD2Jqb%2FVZDK1eKQa5OYQWnwW59nEJIbCT79pUb6Tw4WrD3bRyFqU1vvjD%2BJbrLPQG4l5U6m347GKiOyG%2F30tBfVyee6IGki6p1oE4PX78PHQ&X-Amz-Signature=f2e9e1da6c00f11d37a0ef2f0de569336786d6ef7c754bc890ad612431be92ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2WRZTC%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuKPHtRBBofHN%2Ffe4wJJcsPYIT65EpEZKTqeQJrFYDWgIhAPdDjhsjPSlYDDWz7YgbRMxIHql0LynzuUtowgDp1xNiKv8DCBoQABoMNjM3NDIzMTgzODA1Igyp3Qt1894oK%2BMtCSMq3AMphsiPgLOqnsNPWBEnwmSl%2FuUqisnl0Qloti%2F9RVLPkbiwdQRZVk6mXH%2BoBtXBqZ22zJyrkw1C7RbY7x2NIqJVaHVmqPP4Gh2L2Pi0UPuYh4ztjQc8AH8bmWPKkuAUecivrAy0n9Pt37Wvb3Nk026uRIivHPOED%2B%2B47dQk3lBCc4B1YlOrUXH9kyVifiuRrQr2fXO2VsAfOOHmayc53fmke%2B7bgFxDhyL4TwIsVfe%2BGB4jmT5ju487%2FsCNaSUjkE1EXUg9vH0H3M9dUIsPbeF33Ug%2BHme5pLs%2FQE6FpEfuY62BZvgQp72uReWKuAmKeSoyeSsdWncC8tcSutxZBaB7tFB9rKEm3DKtrvNYYzYNBRXLBgRg%2F7TXR5AdR2ScNfwME%2BLhKRXutDO%2B2pdKviG2bkeqrz2g89lV8zCfCKFFY6ZoJo4GsxRu6EUN8WcIDywbGq%2BEL5pyyTb%2FlS3ALLph1oWxEjnid7OFv2jc4VFjUrRdoLl4SbEegQscoGwrU%2FYxmE47AJYZ6VC%2BzCxnu35CimKLjqgx2%2FX1rdXm3a%2FHHTREyNjkkTrpysxRO0YIO5%2F9NDe8Pj6UpAj8Enb9%2FyDo%2F0R9LOrqPR8o%2BKBtmHz8DpdNNBNpjMgmQa935jCIlMrTBjqkAen5SjHTj3tuqtHrcfx8q2JRCoB9SxU%2BNPyH8sU0dxECE5n9EiNPFzGpuMWQucjgefXKJwyDzxuttVSLxU6AVtVSgjIHOWroNLF3yjMhM7j7Z2gPXD2Jqb%2FVZDK1eKQa5OYQWnwW59nEJIbCT79pUb6Tw4WrD3bRyFqU1vvjD%2BJbrLPQG4l5U6m347GKiOyG%2F30tBfVyee6IGki6p1oE4PX78PHQ&X-Amz-Signature=ed13d68a1f49c63a509f76dbe1cde28e0a018251497c680be78849d2d46df502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
