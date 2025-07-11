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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZCHBDK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlwTKabgo%2BIWLEHcaEyIbAD4tPsTgOApskOkgcNaNOcQIgHnepaiCHujA1OsEwoPzv%2Bd3P7xJGv4Eb42cOX40if1YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyOJNfmySQfWL4R8yrcA4PkJw95FqoQzD9W%2BjnRCRYbiLovzzi6OCbBmxlPgsEzP3t4BbBlYA485KPlssvyuW9ZJ868yyF%2FING143UkafAhayZniXB103DZGgGlJhZsl%2FZ%2FiUt8uI8qUMir%2B9Qte6KEaq%2BDieINiB4Pw07Xzn0bWp2wrBMpv01Q7hG%2FKxhwOthdYY5Y4kfYmQSmoaJU7rCx2SpcZ7ITw02GQ0bsg3qvGbvl7nXE%2FEx3ARINXXmiUN4eO7c6uHNXYNuEryFLo%2B7ESqy81qYpusTlU%2B%2BVC6FyP%2BDp3cV%2FtasGVU1KfvErQx9iBNB0ZqSGAKEjvOxgMxuov4NbNVFvaUn%2Baq%2FMYsmgedbKcZBaifafFcurJhNGvg%2F2jbJLoZySrDZoaDBSp%2FYcfW2cmiLrQ8RQYyTsiVlUCALGqjvLhSoyNARXPKsSpf4PzkAcY1Vrz6Xumpvlc6Z%2BwTbAubQ3UBELVIh809%2FlGAVMw%2BYp9RYgU9jXEUi6IUodQaIGoV8IQbHEuRRcg4a8u%2FVvH8C38vxcOpv%2Fl6GUbvpHLmXXVNiPMpjsH3LJCjaRbY%2BqWz7YHlpNesFm4unTCM1LDTEqWDnnUaM%2F0VyP0cOV3rabob2381KOWn2zZz%2FpKIvTWHDb9SADMP7Uw8MGOqUBp46%2FvgyS0qToDBSrnBmSeycBJAY4S5H%2BFOof0WTMlkao2o7DTu1IcmdXLpzYB1AjdLxQgBei3Qh340eVwwJo1jQNL1CLVaOSuYLn7rMJbvPzN2vK%2F339g1svS1alErgu64IHgudw1X1I2yekp80XrYu0RDmYxUbiv%2BQG%2BHcxwzn5m6%2BkHz%2B3vyyvAJpsLP29qtVE2OsGhkIGgisRM%2BebapKuAlV9&X-Amz-Signature=f384dc226a2ff31ae27c0acf30da37264f3c69b632da481f4e7d0188e017431d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZCHBDK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlwTKabgo%2BIWLEHcaEyIbAD4tPsTgOApskOkgcNaNOcQIgHnepaiCHujA1OsEwoPzv%2Bd3P7xJGv4Eb42cOX40if1YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyOJNfmySQfWL4R8yrcA4PkJw95FqoQzD9W%2BjnRCRYbiLovzzi6OCbBmxlPgsEzP3t4BbBlYA485KPlssvyuW9ZJ868yyF%2FING143UkafAhayZniXB103DZGgGlJhZsl%2FZ%2FiUt8uI8qUMir%2B9Qte6KEaq%2BDieINiB4Pw07Xzn0bWp2wrBMpv01Q7hG%2FKxhwOthdYY5Y4kfYmQSmoaJU7rCx2SpcZ7ITw02GQ0bsg3qvGbvl7nXE%2FEx3ARINXXmiUN4eO7c6uHNXYNuEryFLo%2B7ESqy81qYpusTlU%2B%2BVC6FyP%2BDp3cV%2FtasGVU1KfvErQx9iBNB0ZqSGAKEjvOxgMxuov4NbNVFvaUn%2Baq%2FMYsmgedbKcZBaifafFcurJhNGvg%2F2jbJLoZySrDZoaDBSp%2FYcfW2cmiLrQ8RQYyTsiVlUCALGqjvLhSoyNARXPKsSpf4PzkAcY1Vrz6Xumpvlc6Z%2BwTbAubQ3UBELVIh809%2FlGAVMw%2BYp9RYgU9jXEUi6IUodQaIGoV8IQbHEuRRcg4a8u%2FVvH8C38vxcOpv%2Fl6GUbvpHLmXXVNiPMpjsH3LJCjaRbY%2BqWz7YHlpNesFm4unTCM1LDTEqWDnnUaM%2F0VyP0cOV3rabob2381KOWn2zZz%2FpKIvTWHDb9SADMP7Uw8MGOqUBp46%2FvgyS0qToDBSrnBmSeycBJAY4S5H%2BFOof0WTMlkao2o7DTu1IcmdXLpzYB1AjdLxQgBei3Qh340eVwwJo1jQNL1CLVaOSuYLn7rMJbvPzN2vK%2F339g1svS1alErgu64IHgudw1X1I2yekp80XrYu0RDmYxUbiv%2BQG%2BHcxwzn5m6%2BkHz%2B3vyyvAJpsLP29qtVE2OsGhkIGgisRM%2BebapKuAlV9&X-Amz-Signature=e0b9ab734692b1521f483566e0b9e2c47f58d793dd1296f2fc4ebd5df3371f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
