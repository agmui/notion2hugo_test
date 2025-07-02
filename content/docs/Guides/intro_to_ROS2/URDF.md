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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A6Y4MFO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcD%2B7DYaMULOCACG63N7sPaRvlEspqM5ZWxdrwQX3GIwIhANYEgQW%2F%2Bff4wj3J5Zxet73pwaJ76sZhNU0%2FVwbLNUp4KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORT6hSWmkKL5lubwq3ANgifYQIACzbZ9%2B9c193lqhFtTTdYry%2Fw9djSBk0h4jaao8c1qkzPPjP66IIfoKAeIjpc3j6DiXAs8dMTX6hGTyHvUv1IOgLDRLnfT4vyausXJ7PDW19LEl8jAPzleF70C1FXlVeMu6qmSM2on0ghz2v%2BIlbZiFowZZtbo1sWGTToIfEMpyU5mt46QgjMK9DjeFQas0Xw4ZKklgt4fM5ZUW4fBeMRU0kgGgHbUmG3Ax16LkpgS%2Bx3lxcLtLT1iRvCA4jmcGNZ8DwN0Cm%2BdO12mlRAQCX789sdCgYngIJ9Rys2gFNihEdlxeV7bo1K%2B95Hh4v%2F2VAZwksLNxRs%2FeRYUdEPRTHRWQtyvVvEpwTPOqOadTO5ZTxisisK4nzx8RbnZqyDaNmBmi9oQmROqYKdm7vfqm9ZKf0lQ5pzUodQvwZ7G1eJ3DrXXttdsUv4HjwrICtOn37ig9U2xSjuLrQ4SXhISxT2ElOpf6je3ZSotxQSjsDTJdyxtt4pk%2FDqVK75Sv07dVljVrdj6rE%2BLOtS3oltvjVskngWQuvOwYbzTpk%2BtzVVZYyd4I614V7OP9wjd7eue8Sa3JPkSQvE6caWo2Lvk2ehm5Qb%2FVpdJ9BuBJmucpW1INa6jMlWKonDCRlJXDBjqkAZcTGeI32GSUek4MP5tzPbvzFGTND2PErStOw2aKwUHtQ0sk9qAeHMX3qwj2eyC4%2BNh7IEsXYln1w7DUH3MEnR9d%2Fa38ENQTpAQl7w4AsQBpkEtQ1yF756Axmucy%2FXubbIKf278%2FB9RbLIhs9aMSbUKRZw6MHTt5j3YLDp9%2FbJs%2B9pFKDQjevcP%2BeDsIV6V5dvDJMz%2F34fMS15zbBH3UnUkdLAky&X-Amz-Signature=d9b4681a374f6a163dd1b072634a0aa77deb6baf241b8a14af9e1728c4a1ebcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A6Y4MFO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcD%2B7DYaMULOCACG63N7sPaRvlEspqM5ZWxdrwQX3GIwIhANYEgQW%2F%2Bff4wj3J5Zxet73pwaJ76sZhNU0%2FVwbLNUp4KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORT6hSWmkKL5lubwq3ANgifYQIACzbZ9%2B9c193lqhFtTTdYry%2Fw9djSBk0h4jaao8c1qkzPPjP66IIfoKAeIjpc3j6DiXAs8dMTX6hGTyHvUv1IOgLDRLnfT4vyausXJ7PDW19LEl8jAPzleF70C1FXlVeMu6qmSM2on0ghz2v%2BIlbZiFowZZtbo1sWGTToIfEMpyU5mt46QgjMK9DjeFQas0Xw4ZKklgt4fM5ZUW4fBeMRU0kgGgHbUmG3Ax16LkpgS%2Bx3lxcLtLT1iRvCA4jmcGNZ8DwN0Cm%2BdO12mlRAQCX789sdCgYngIJ9Rys2gFNihEdlxeV7bo1K%2B95Hh4v%2F2VAZwksLNxRs%2FeRYUdEPRTHRWQtyvVvEpwTPOqOadTO5ZTxisisK4nzx8RbnZqyDaNmBmi9oQmROqYKdm7vfqm9ZKf0lQ5pzUodQvwZ7G1eJ3DrXXttdsUv4HjwrICtOn37ig9U2xSjuLrQ4SXhISxT2ElOpf6je3ZSotxQSjsDTJdyxtt4pk%2FDqVK75Sv07dVljVrdj6rE%2BLOtS3oltvjVskngWQuvOwYbzTpk%2BtzVVZYyd4I614V7OP9wjd7eue8Sa3JPkSQvE6caWo2Lvk2ehm5Qb%2FVpdJ9BuBJmucpW1INa6jMlWKonDCRlJXDBjqkAZcTGeI32GSUek4MP5tzPbvzFGTND2PErStOw2aKwUHtQ0sk9qAeHMX3qwj2eyC4%2BNh7IEsXYln1w7DUH3MEnR9d%2Fa38ENQTpAQl7w4AsQBpkEtQ1yF756Axmucy%2FXubbIKf278%2FB9RbLIhs9aMSbUKRZw6MHTt5j3YLDp9%2FbJs%2B9pFKDQjevcP%2BeDsIV6V5dvDJMz%2F34fMS15zbBH3UnUkdLAky&X-Amz-Signature=cd9eec1a449244256f4fecf71eb63e4acd56f0e3d7b5b294c12d3441cbc8a56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
