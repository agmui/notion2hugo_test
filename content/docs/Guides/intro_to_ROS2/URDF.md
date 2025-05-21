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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T3LZWY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICX3HVbpUHfS3MAgOAtOz6zyPlpi1bIKMzMuWw6vxAKCAiBqiDrdNmfykL2Bln%2BuhIRXt1WAH2EWTVaxMjlHV5qeJiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIuxd68uq9vDMPyWkKtwDTYMZ71HhDqUXDRuGxo8cTtaeI3xgEmK7X%2BQJ%2BTAFVM0qLn%2Fzaygkmnj0Ex2N5jWVy5bq18094YDUkO9IrsMATFZNdeukKdp09Yb1frpdbvWzgVdKP0XHheurJakOLzGM6ZmaYnB0KOAQjNTpq%2FRiI8%2Bhvthik%2BzNxd6F8BRVM1xIjTIJHTxM8291wZtRcJV0l75txXSkcmP%2BvdPMGhUPuGHUXs5ptD3UGdfzm3X8guG1HDsSqZsPJovU4ABSYomEkZ39Wnf1pCk85bJ02p175jiaVn%2BdUQWzMEijEkpOdW7f5rX5TG16K5YX%2F2Ka3wWVqCDIV78aW5e39lWWlVcqb7T3pRcd86TzY01wXP6DML5TrmOq33K7KeshFXum7DEPby54SSYfb%2B9Q6NvtKrTOl1zIAjxlEfKcuwdx1MK%2BweHDzwlW3G5D0kIAxKyCw7hFXAbfohuRJnPkWY5C9mtEd2DRP5sfOXX0DL%2F6B7OU0cZ8dDAbsLMhrWKX2P0lohcXO%2FyZhVcYsRdG4UO7iN4eeAEp9wb5T4DANpXIE8c1bkD9OUcJRWqkGEVUgELHzVF0RcZNtx8Kc%2FiD4vSGOZ5M0dgj9czvr4BNuP7mMkZywaD5q7D5bVqoFJYC43Ywre%2B2wQY6pgEqklMijNZhVkr4EIwzr%2BnKdYopVPLF5fY%2FunWMfz%2FdJ6TiKkaha%2BAPs6J2eY54F%2BXBq1LzkL%2FkS3gHOPTRqNqxac1sbrm86158NSTOSYDay%2Fa47IxHqp1GkH5F4ySpuXxp2Rvd%2B9FEq4%2FP0jhG04YPulEjZ9w0fD8ONIhs6C7Pj6%2BYU8LbOxPXwZS%2BouaCC2Tv4QUyEH4QxlO5bTSszq8q1s0zNlmV&X-Amz-Signature=18ca18d584b43bd5e317bf959915a3d31ce71d009df158a6698ac8b3e7415820&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T3LZWY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICX3HVbpUHfS3MAgOAtOz6zyPlpi1bIKMzMuWw6vxAKCAiBqiDrdNmfykL2Bln%2BuhIRXt1WAH2EWTVaxMjlHV5qeJiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIuxd68uq9vDMPyWkKtwDTYMZ71HhDqUXDRuGxo8cTtaeI3xgEmK7X%2BQJ%2BTAFVM0qLn%2Fzaygkmnj0Ex2N5jWVy5bq18094YDUkO9IrsMATFZNdeukKdp09Yb1frpdbvWzgVdKP0XHheurJakOLzGM6ZmaYnB0KOAQjNTpq%2FRiI8%2Bhvthik%2BzNxd6F8BRVM1xIjTIJHTxM8291wZtRcJV0l75txXSkcmP%2BvdPMGhUPuGHUXs5ptD3UGdfzm3X8guG1HDsSqZsPJovU4ABSYomEkZ39Wnf1pCk85bJ02p175jiaVn%2BdUQWzMEijEkpOdW7f5rX5TG16K5YX%2F2Ka3wWVqCDIV78aW5e39lWWlVcqb7T3pRcd86TzY01wXP6DML5TrmOq33K7KeshFXum7DEPby54SSYfb%2B9Q6NvtKrTOl1zIAjxlEfKcuwdx1MK%2BweHDzwlW3G5D0kIAxKyCw7hFXAbfohuRJnPkWY5C9mtEd2DRP5sfOXX0DL%2F6B7OU0cZ8dDAbsLMhrWKX2P0lohcXO%2FyZhVcYsRdG4UO7iN4eeAEp9wb5T4DANpXIE8c1bkD9OUcJRWqkGEVUgELHzVF0RcZNtx8Kc%2FiD4vSGOZ5M0dgj9czvr4BNuP7mMkZywaD5q7D5bVqoFJYC43Ywre%2B2wQY6pgEqklMijNZhVkr4EIwzr%2BnKdYopVPLF5fY%2FunWMfz%2FdJ6TiKkaha%2BAPs6J2eY54F%2BXBq1LzkL%2FkS3gHOPTRqNqxac1sbrm86158NSTOSYDay%2Fa47IxHqp1GkH5F4ySpuXxp2Rvd%2B9FEq4%2FP0jhG04YPulEjZ9w0fD8ONIhs6C7Pj6%2BYU8LbOxPXwZS%2BouaCC2Tv4QUyEH4QxlO5bTSszq8q1s0zNlmV&X-Amz-Signature=a660ea11c3d1e62f7168b8fe4511ed5254ac7075d825ed224c362f5f26353717&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
