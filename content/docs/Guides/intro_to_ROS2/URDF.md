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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUZGMSE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDSdFePYtI4Omewf8FeX42tp80WnkNO6wiO2yOoLHY%2FAiB1O9WsKZpUAW703HvpmP1Xe8PelsJlpEea0WvO6FyqRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtu6vkocaSY5eOqRKtwD8GDjBmGuECbwVT5dSZgwwnrW12p48dek%2BW8rPiUb7PyDC0Zmf5gZNcx5guI0xMn2vfqdBY7IN5R22%2FkSORNo%2FM8sEbn7yc1F1cHqabeXR5U03WQr4TGAVbY8rbUm%2BF%2FOsKNSH3IukPB4hGaz5jpJaWa4FGf1d0Hkkm9PsNTcci%2BZQoiL9NXSsk7fj0GwS92iGn1jOHH0PfNTwjSBb8DNOpz9Y0Wv1Fc9FAv3NCloTti6qzI2pqeg%2BrAo3l%2BWcO6dT1KwL7s6acoup%2FVzmbGk7l252Y7bCAPMgZx%2FcpbeuFeYSDVn1epQUhfhl7BHQMbs6JYFtXs60QMNCMqNCkdAaoO%2BrPOGmLQvrDG6xks7qdkDuFZ6aedjgn7Y%2Fsh77CMJrNhejzIOWB6r%2BMg3Hdmy0FfPu%2FSqqM7saaSuiHeCNFLXK5qH1HIwhQUlm2ePCDSuJbP6vxwTYrl8mXtRfLkIFwTIeLgkG2OQrg3A96llGw2LBNNIfSwmIZysZ0PxQhspf2b8yEyW7PoRXycCh3SO%2Fc%2BxFM5iN6zbJ1UG6xxMpg4s6%2Fv2FyfbjnfFG%2BJYUG768ptRbY%2Fg8w7msJkdW5YNiZ2nx4xyRP%2BdKBKTytUGLfSnU0bG4GvZAAYXIg4wqsT5wAY6pgFdfgdyt2DYmrvdBLHCjbKAt39yRDgoqQUCWIHrKeaAmtvRWzA11qiL7uRucehssDq1FpNZXsxXAi6jfW4F6y34qowSxKfTBj4A2c%2BDsSHRGEzT4NoypsILzFjupQnKRS9QaKDavcnYIlvcS5%2FyQVrM1gihnqPjzpfmPX8GntSGwDxeaiCvPlTyute5JE6Zeyi%2FSEWnGAwdpIxhSD%2FDwC87nzdMZmBh&X-Amz-Signature=6f1ca97fcac2e7d8178d3367f468d9da2a80f66f3047ccec8b91609d852c40ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUZGMSE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDSdFePYtI4Omewf8FeX42tp80WnkNO6wiO2yOoLHY%2FAiB1O9WsKZpUAW703HvpmP1Xe8PelsJlpEea0WvO6FyqRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtu6vkocaSY5eOqRKtwD8GDjBmGuECbwVT5dSZgwwnrW12p48dek%2BW8rPiUb7PyDC0Zmf5gZNcx5guI0xMn2vfqdBY7IN5R22%2FkSORNo%2FM8sEbn7yc1F1cHqabeXR5U03WQr4TGAVbY8rbUm%2BF%2FOsKNSH3IukPB4hGaz5jpJaWa4FGf1d0Hkkm9PsNTcci%2BZQoiL9NXSsk7fj0GwS92iGn1jOHH0PfNTwjSBb8DNOpz9Y0Wv1Fc9FAv3NCloTti6qzI2pqeg%2BrAo3l%2BWcO6dT1KwL7s6acoup%2FVzmbGk7l252Y7bCAPMgZx%2FcpbeuFeYSDVn1epQUhfhl7BHQMbs6JYFtXs60QMNCMqNCkdAaoO%2BrPOGmLQvrDG6xks7qdkDuFZ6aedjgn7Y%2Fsh77CMJrNhejzIOWB6r%2BMg3Hdmy0FfPu%2FSqqM7saaSuiHeCNFLXK5qH1HIwhQUlm2ePCDSuJbP6vxwTYrl8mXtRfLkIFwTIeLgkG2OQrg3A96llGw2LBNNIfSwmIZysZ0PxQhspf2b8yEyW7PoRXycCh3SO%2Fc%2BxFM5iN6zbJ1UG6xxMpg4s6%2Fv2FyfbjnfFG%2BJYUG768ptRbY%2Fg8w7msJkdW5YNiZ2nx4xyRP%2BdKBKTytUGLfSnU0bG4GvZAAYXIg4wqsT5wAY6pgFdfgdyt2DYmrvdBLHCjbKAt39yRDgoqQUCWIHrKeaAmtvRWzA11qiL7uRucehssDq1FpNZXsxXAi6jfW4F6y34qowSxKfTBj4A2c%2BDsSHRGEzT4NoypsILzFjupQnKRS9QaKDavcnYIlvcS5%2FyQVrM1gihnqPjzpfmPX8GntSGwDxeaiCvPlTyute5JE6Zeyi%2FSEWnGAwdpIxhSD%2FDwC87nzdMZmBh&X-Amz-Signature=80b6f3426f0cda9c6dfea8205a71166af65fe9dc5d16a4661331ea600e6030a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
