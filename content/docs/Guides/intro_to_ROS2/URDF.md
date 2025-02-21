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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXQZWRI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV81wz9ZKCzgTU9U3J9TJ0wrvAXPowSVfCIul4pAcAPAiEA1%2Bufwtv50%2BTUWd8VwAE34jtqINXufyn0iXbKwRGsa9MqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFu6iXc7CCYDERR9SrcA1WgDN28YlwWcztDNmWmWD4SxmIwKw7ZhiM9ft8KX002Lmm51fNjkhp4233fJ4bokwUIhhQU5nf%2FXN4rEuwZvTq84ScGd8w%2FGPt%2BdR396SriYrFCMOvYbtCgZWyH%2BvvRKiYA2NiQ5GyHE6Vrv36HkBDk7haM5eara9h%2Fqla%2FJYPTSB%2FUOOwGY3PjD45Sq8Vh7y3PKpyHCNIvQY2ttlhy29rYjg0uAnFv900R4DSuneaEq0roXA0R8pSEZGnrelc4avEVRci2uTspDhl1mdFxwsgIn5LYQx1C24Aw6m2GpCzBvDjVtzv1OxGcI2nXnNfwlHxZdsZd9aV8HO3RB4of0Sp8J38pQdCQ3khX9VprwaqMEVnqlcULCXbD7tiOrQxd6tTD%2Fgz%2BokaajpnFBP1HDcSWprIIX3MXwiQGQ%2FgN46Y7De1DW%2BHJlR48u8HSDIjs5k4q2bwSzlXyx5esUN%2BGNqszNiTNIGBYIJzPE6fr%2B9sdv1CBtjvgyEZu3Yvi4IllatkR5OZ45LGFXTWnQtazqvKaYuaqbS04depjeVd2d2D3vNXwS2dnThB7VD1%2FjLPyk%2Bq9CoL1%2FeOtwdfYDYiG8KXkCjboMMoxXx70j%2FgMhx4kd6nd7Y%2BTQIgRnSO6MKfZ470GOqUBv2sXjdantZz7zUX5Y%2Fawsj9mzVTDz5poOusx3RYK%2BjveZJWHdb47hbHP2YnEpn43UQT8UYD%2FahkLXAKW1uH%2F40NCEo1t72KDaJTdSAOO0zulLWxh9%2FdovhoX5%2FytsvnYBENo9AvvWS2k8xA7RK%2FisCND0KB0fYvO7jql%2BZHoDiHyV1mr20RISMRxgXdGOEtVjDvKFQPZAhVPsi9b75T3KUPHbUOc&X-Amz-Signature=a6560e84b01cc37323d334544dbdb628f1cb467e2a77cb7c4c8fa40d479bfd8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXQZWRI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV81wz9ZKCzgTU9U3J9TJ0wrvAXPowSVfCIul4pAcAPAiEA1%2Bufwtv50%2BTUWd8VwAE34jtqINXufyn0iXbKwRGsa9MqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFu6iXc7CCYDERR9SrcA1WgDN28YlwWcztDNmWmWD4SxmIwKw7ZhiM9ft8KX002Lmm51fNjkhp4233fJ4bokwUIhhQU5nf%2FXN4rEuwZvTq84ScGd8w%2FGPt%2BdR396SriYrFCMOvYbtCgZWyH%2BvvRKiYA2NiQ5GyHE6Vrv36HkBDk7haM5eara9h%2Fqla%2FJYPTSB%2FUOOwGY3PjD45Sq8Vh7y3PKpyHCNIvQY2ttlhy29rYjg0uAnFv900R4DSuneaEq0roXA0R8pSEZGnrelc4avEVRci2uTspDhl1mdFxwsgIn5LYQx1C24Aw6m2GpCzBvDjVtzv1OxGcI2nXnNfwlHxZdsZd9aV8HO3RB4of0Sp8J38pQdCQ3khX9VprwaqMEVnqlcULCXbD7tiOrQxd6tTD%2Fgz%2BokaajpnFBP1HDcSWprIIX3MXwiQGQ%2FgN46Y7De1DW%2BHJlR48u8HSDIjs5k4q2bwSzlXyx5esUN%2BGNqszNiTNIGBYIJzPE6fr%2B9sdv1CBtjvgyEZu3Yvi4IllatkR5OZ45LGFXTWnQtazqvKaYuaqbS04depjeVd2d2D3vNXwS2dnThB7VD1%2FjLPyk%2Bq9CoL1%2FeOtwdfYDYiG8KXkCjboMMoxXx70j%2FgMhx4kd6nd7Y%2BTQIgRnSO6MKfZ470GOqUBv2sXjdantZz7zUX5Y%2Fawsj9mzVTDz5poOusx3RYK%2BjveZJWHdb47hbHP2YnEpn43UQT8UYD%2FahkLXAKW1uH%2F40NCEo1t72KDaJTdSAOO0zulLWxh9%2FdovhoX5%2FytsvnYBENo9AvvWS2k8xA7RK%2FisCND0KB0fYvO7jql%2BZHoDiHyV1mr20RISMRxgXdGOEtVjDvKFQPZAhVPsi9b75T3KUPHbUOc&X-Amz-Signature=a46b7b5eeabdd7a7c12c739d6639fe5d30dad46142d6a979cb95d1e750f9b448&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
