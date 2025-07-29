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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGZXQT3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCwGNkX4MSKHgD2%2BwtdFnYgzz5znloPIq2Xpnn89NbPlwIhAMEPgFOwSpQTV01HSakxqN9nLTt51lPXqQDs5tS8uKY5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2B5kBaA9ZlUQ8E%2FMq3AMEz0V1G9cSE1vtZs69MoMd%2F%2B9%2BspauB%2BepZASitY%2B3XTKNWE3ni%2FyrVHkM8fZnSSiC8wQ4HV%2FjxdQsHhtSTXu1lK3BU7aGaow5cuRSpFVp4RZhfgugor%2F%2F8p%2Bs0ZtdKZtlZn8XRe8wtmDzmUFVBn4pdA23zj0KwCrJHJNJS%2BGU5oQmNinqFe3z84lhEWzVEvtv3qOaoPpofKsp5cgWIzvfWxWFZZSbyxTqjcWZ%2BoNtvLhnP3s4pH9NQVDoGb68poPk2jdffSM8VotanpBV1Zj1dFiDmP1bNYQBR%2BFLWPuRYG3EgAccRbCVbAQHiuARMSbcwtn%2BcEtLQAtr3XwaTr%2FOfLu8AIA5imx4CXzpv%2BUp4ktEDCfsJolCuE%2FdkROinZ5TWJEqEcfeKrJzV2eXUAYmFciEs2hmR%2BYHz%2FUDO0BGbzGrVYWc%2Ff2SlJc00z1yXUpOS67Kibyjac9jXlt8eDPFYy8mvUdi%2BiTPPO52xzws22wRh5QwsL%2FuxMMqYbFPdIGW4xunGM1cqiOIjcYKvVR1sbMhhWJTaxehZakigapfmD3v5R61uZoGPyYHW4EJKoNty55j79ekZTYLduiwU5XOIxapT%2FH7RraA9yGtdGyeUeV3fal4kzX8orhMbzCUtKHEBjqkATHRHFvPbzp%2B87kozG4MCtW1u4XAPaESQVYLq35EV8vcoJtPxrvGalx9GO5akGoDNkR4Ry36K7Q1TjSB%2FnoxQPsuAeKHkfX5Q%2BtjqLWz5HQ5NYzwsFmBEpEZO1tqD3RtB0fc6y8ue0kDAjaCmC2XJjOtjX22o6WnDfgFkLUJRzNS3MMGoVf6EJDpcF8JVGUkRmBRGhwyAZqVlxfJRE2aD7Yf9%2BQt&X-Amz-Signature=402bde59377d919038e907f5f503689c6705c6e1de3342c7f34b69ec4c443814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGZXQT3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCwGNkX4MSKHgD2%2BwtdFnYgzz5znloPIq2Xpnn89NbPlwIhAMEPgFOwSpQTV01HSakxqN9nLTt51lPXqQDs5tS8uKY5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2B5kBaA9ZlUQ8E%2FMq3AMEz0V1G9cSE1vtZs69MoMd%2F%2B9%2BspauB%2BepZASitY%2B3XTKNWE3ni%2FyrVHkM8fZnSSiC8wQ4HV%2FjxdQsHhtSTXu1lK3BU7aGaow5cuRSpFVp4RZhfgugor%2F%2F8p%2Bs0ZtdKZtlZn8XRe8wtmDzmUFVBn4pdA23zj0KwCrJHJNJS%2BGU5oQmNinqFe3z84lhEWzVEvtv3qOaoPpofKsp5cgWIzvfWxWFZZSbyxTqjcWZ%2BoNtvLhnP3s4pH9NQVDoGb68poPk2jdffSM8VotanpBV1Zj1dFiDmP1bNYQBR%2BFLWPuRYG3EgAccRbCVbAQHiuARMSbcwtn%2BcEtLQAtr3XwaTr%2FOfLu8AIA5imx4CXzpv%2BUp4ktEDCfsJolCuE%2FdkROinZ5TWJEqEcfeKrJzV2eXUAYmFciEs2hmR%2BYHz%2FUDO0BGbzGrVYWc%2Ff2SlJc00z1yXUpOS67Kibyjac9jXlt8eDPFYy8mvUdi%2BiTPPO52xzws22wRh5QwsL%2FuxMMqYbFPdIGW4xunGM1cqiOIjcYKvVR1sbMhhWJTaxehZakigapfmD3v5R61uZoGPyYHW4EJKoNty55j79ekZTYLduiwU5XOIxapT%2FH7RraA9yGtdGyeUeV3fal4kzX8orhMbzCUtKHEBjqkATHRHFvPbzp%2B87kozG4MCtW1u4XAPaESQVYLq35EV8vcoJtPxrvGalx9GO5akGoDNkR4Ry36K7Q1TjSB%2FnoxQPsuAeKHkfX5Q%2BtjqLWz5HQ5NYzwsFmBEpEZO1tqD3RtB0fc6y8ue0kDAjaCmC2XJjOtjX22o6WnDfgFkLUJRzNS3MMGoVf6EJDpcF8JVGUkRmBRGhwyAZqVlxfJRE2aD7Yf9%2BQt&X-Amz-Signature=81b4f47533703148d96990b4458f1bec5f0b86c0ffa8b02ee93e6e8b46e2b9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
