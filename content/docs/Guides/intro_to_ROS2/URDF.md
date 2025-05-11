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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQJ5JUTS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICAsIFScpV8EpsiQ30cwtNxUSs8AI3mY%2B6r58ECvWmuLAiEA6rZum2ZGcwakqXLC2U3E%2B%2Bl9j1vyFMlwoj160k4nupgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyS70l2LiOlpE3s5CrcA4XmM1PGTOlssMj5VTASSiInO4h7nLvdQO6Q1By%2BqXm6tvYDPFjPsknxULK99qoTHD9JpnZsBeeEd8FZDV5TtXPWZOogQ5H02lQF7bcuK9fy4XyP%2BNI8LxnqnMaR7He1KcjGvr%2FXm0q9pvWMvNErZlgrw0CIEjab6NoGRkFTVN%2F59%2BqHbbkzKF7Pqu5ycRKv%2BGpuTuW2mNgfKBHMh04z9ObwQfpXHVFCQqpwxpHlb1zTf1vppFG8xWGZyyxsVdWJRmcScuCve%2B1LQ8cjoSigN4BnBenaTsXNgRkU6ajywR98g4UPeMs5BSmYz4eCsoE42hGG7HMnoeNIDFA2FbP6UemvNBJkjIVXnwPEUmDDIUmmSibwj%2BTi64AV7ehV6VLfi23afyTeftCYMz%2BqU%2BibRzlgpk64nRnFXhKmoemc9ROpvIxZg1xzha2NtcNQns6uwIHNrO1MzT8ZCrBKbUROHIG%2Bmi0xBfWRXnzS5Ky4JY9qxN8vY1GiOcV%2FAQKO4WVNjqqEKfXfa9buw%2Bt8PjgrVqPlFi%2BjIZqyeKcXQklA28sT43%2B4d%2FnYckzO%2FclO5vY79WbFjNWbpzhrrfH8FWljwgAVo9hIeMXeEN67V%2FGFz3I8MBMTXNgOGqCwctWwMInZgcEGOqUBJKbeN1u5pavf6XrkNRPYxbXiiAdiHOdlfjzTKna%2BKdGhehtzri2%2FfdORwSGMxQhOsWCAcsnK5iAxD%2FqXmKerzOCc0is0a6onRE21eMQNtiYEBoZMgfdklQhJqEAlCEncyo%2BvyvC15xDz1TchBdhmP3tqphEl5tqs1Zb4lUFHjup33EzOmAU9KGOo5AEYJbaBC1oWsqp245abdvtdY6v%2BpG9lLhyD&X-Amz-Signature=2877864094c5178b141ad741d7cd8c730515799bdcc1ecbcf5bfd571fee66c92&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQJ5JUTS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICAsIFScpV8EpsiQ30cwtNxUSs8AI3mY%2B6r58ECvWmuLAiEA6rZum2ZGcwakqXLC2U3E%2B%2Bl9j1vyFMlwoj160k4nupgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyS70l2LiOlpE3s5CrcA4XmM1PGTOlssMj5VTASSiInO4h7nLvdQO6Q1By%2BqXm6tvYDPFjPsknxULK99qoTHD9JpnZsBeeEd8FZDV5TtXPWZOogQ5H02lQF7bcuK9fy4XyP%2BNI8LxnqnMaR7He1KcjGvr%2FXm0q9pvWMvNErZlgrw0CIEjab6NoGRkFTVN%2F59%2BqHbbkzKF7Pqu5ycRKv%2BGpuTuW2mNgfKBHMh04z9ObwQfpXHVFCQqpwxpHlb1zTf1vppFG8xWGZyyxsVdWJRmcScuCve%2B1LQ8cjoSigN4BnBenaTsXNgRkU6ajywR98g4UPeMs5BSmYz4eCsoE42hGG7HMnoeNIDFA2FbP6UemvNBJkjIVXnwPEUmDDIUmmSibwj%2BTi64AV7ehV6VLfi23afyTeftCYMz%2BqU%2BibRzlgpk64nRnFXhKmoemc9ROpvIxZg1xzha2NtcNQns6uwIHNrO1MzT8ZCrBKbUROHIG%2Bmi0xBfWRXnzS5Ky4JY9qxN8vY1GiOcV%2FAQKO4WVNjqqEKfXfa9buw%2Bt8PjgrVqPlFi%2BjIZqyeKcXQklA28sT43%2B4d%2FnYckzO%2FclO5vY79WbFjNWbpzhrrfH8FWljwgAVo9hIeMXeEN67V%2FGFz3I8MBMTXNgOGqCwctWwMInZgcEGOqUBJKbeN1u5pavf6XrkNRPYxbXiiAdiHOdlfjzTKna%2BKdGhehtzri2%2FfdORwSGMxQhOsWCAcsnK5iAxD%2FqXmKerzOCc0is0a6onRE21eMQNtiYEBoZMgfdklQhJqEAlCEncyo%2BvyvC15xDz1TchBdhmP3tqphEl5tqs1Zb4lUFHjup33EzOmAU9KGOo5AEYJbaBC1oWsqp245abdvtdY6v%2BpG9lLhyD&X-Amz-Signature=7a640e5adcd85624588f9ac16d3e6beaff06b5e4d583760314622444a37bd39c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
