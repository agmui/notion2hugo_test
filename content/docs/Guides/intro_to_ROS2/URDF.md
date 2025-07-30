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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6XFIYO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZfCFGelsC2fXPbLAgt6Jpmf%2B3o29rudU3UEbywl7uVAiBEF3ePv9F42UiXOQnFeKisH9nd6NNghwUAEqano61r8yqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0iurKtb%2BDg5WjdlKtwDCDJzlhShYMFbV3%2Bw4K0XUcetwMyDgl83nUJkDO8Rh93bHh9eafZY7htoipU7U3jYSby%2F3bDzDLcGwsuso0ZUamDdjY2ipjBcIYdWBB9OYrCnGpUVw3Vun1N2e5%2BAvKSA%2BXTjufuoNPlNU7iEoM1ABKtD%2FXXYDE2brfrz8PeSnjyS6D4Dhg5pexIIf%2FMBoSfnIGQ5KuBMXSthTYfcOSMu%2B%2FVuKHw%2FEYekL3PqQtUEIUTNrbw2sdjjFSjWCxRE4SHmc33jtuX0MP2Zmjz2a3O3rkNXA7vJQ%2B7Z18DMcR9pjbgcHhrdmM8vZNh3jmz5eKdjGURW1G62bb6lD3Ouo5wGhwWCkXNIB%2BLFA8IjhPOC1X77dT9DNgzeaZPXkG%2BznRNiDAL4C2nuAQTrKaRuqdMTAaElvH9vZvCAC3pUsDvIE5355AGAliO0wnT3zrivcEJPV2iekSVgXRAPqv4eWjQK3g9EErSCMXKEOGuNR5YPY4aSmKd44aRJhyuaAqI2suSPC35LXjM9rRc6FWtVdXSVfyNA389Za2IYw45PRfsJymUfjb7xGsCiQhkrzA5RhtYrVw82ckO2kRdm0YxzgT45UtMqBxzwPTGg2DdQkKbkugkM0hKzoLK6dbATtlwwmaWqxAY6pgGAHc%2F8v5YZPSIFWVnmNHSiYnpaB%2FnXDZG6b0CNgXiU0c5THnkxtMCER613o9Ppas1m6nuiUmR7dFFXa6n9fH5FgNK43KA7PfDzVYjTiPvap5agw4qGFJrV4rZnSyGxLJJp3EjIJOXOZ274EWIHpUOQH8BV9bfw2H8fhIV0PeatX45pafZsDPHUfHQMV4yagCkb7leX271NhizcnLeQmr1tfhr4WWm5&X-Amz-Signature=8a999afe78eaf2174c6e0a5de17070d666e32134036401e8bfe8a62a7ef21fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6XFIYO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZfCFGelsC2fXPbLAgt6Jpmf%2B3o29rudU3UEbywl7uVAiBEF3ePv9F42UiXOQnFeKisH9nd6NNghwUAEqano61r8yqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0iurKtb%2BDg5WjdlKtwDCDJzlhShYMFbV3%2Bw4K0XUcetwMyDgl83nUJkDO8Rh93bHh9eafZY7htoipU7U3jYSby%2F3bDzDLcGwsuso0ZUamDdjY2ipjBcIYdWBB9OYrCnGpUVw3Vun1N2e5%2BAvKSA%2BXTjufuoNPlNU7iEoM1ABKtD%2FXXYDE2brfrz8PeSnjyS6D4Dhg5pexIIf%2FMBoSfnIGQ5KuBMXSthTYfcOSMu%2B%2FVuKHw%2FEYekL3PqQtUEIUTNrbw2sdjjFSjWCxRE4SHmc33jtuX0MP2Zmjz2a3O3rkNXA7vJQ%2B7Z18DMcR9pjbgcHhrdmM8vZNh3jmz5eKdjGURW1G62bb6lD3Ouo5wGhwWCkXNIB%2BLFA8IjhPOC1X77dT9DNgzeaZPXkG%2BznRNiDAL4C2nuAQTrKaRuqdMTAaElvH9vZvCAC3pUsDvIE5355AGAliO0wnT3zrivcEJPV2iekSVgXRAPqv4eWjQK3g9EErSCMXKEOGuNR5YPY4aSmKd44aRJhyuaAqI2suSPC35LXjM9rRc6FWtVdXSVfyNA389Za2IYw45PRfsJymUfjb7xGsCiQhkrzA5RhtYrVw82ckO2kRdm0YxzgT45UtMqBxzwPTGg2DdQkKbkugkM0hKzoLK6dbATtlwwmaWqxAY6pgGAHc%2F8v5YZPSIFWVnmNHSiYnpaB%2FnXDZG6b0CNgXiU0c5THnkxtMCER613o9Ppas1m6nuiUmR7dFFXa6n9fH5FgNK43KA7PfDzVYjTiPvap5agw4qGFJrV4rZnSyGxLJJp3EjIJOXOZ274EWIHpUOQH8BV9bfw2H8fhIV0PeatX45pafZsDPHUfHQMV4yagCkb7leX271NhizcnLeQmr1tfhr4WWm5&X-Amz-Signature=6210334d5b34e87cdfaa111462a99f85e1bc2c6702adc940085ce32d58f3e60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
