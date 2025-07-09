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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUELTIOX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNlOCk%2BRZn%2FZJV1ajgpU8mAO8RX8H%2Fu5f52hPFNLGyAiAGia2uVSrXme9uDGjbS69ewjDMpbTuSEWghB7uvM3DOSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvz3jJmKblAMASM9YKtwD0UwqrQOVEr3QrsOeKSuNQY5ukBAeX5ob8nYKjRIH%2Bs4VP89k%2FN3ivK62D9dxL8coHimkmAIgR5okZHyOetBN%2FZyNoEtxpxNqdECb1q%2F%2Fx9AO4wV4lIBj4ZLlcMscWvK4%2B6OhEsVbA6RYhiJtv1n0EWvC2CUF%2Fl77N4bHCAlV8aoEmpOknA8o845XgMXBm%2FlWm15TWbJdYcA84hhhIIUYwBh1UQQ8a9liPmzZPM2QTqs9Ar%2FtDRphxp8IOpKjir9XdUuRSwaAQdf7FGr2OVx0hvPzsTewSHR9gG4Ub1f78lOBjI54dXd4skrWhSYTGjA69%2FudrH2IhEIQBLja8N6YtkKybgSGI0Lv95YVSgSfZSYi4JEBm0YfLn5%2BK6EtxSYRTnF4Ui0PFkHqUr%2FLtJzDqQt1nxD7lG6ftW7nnZgX6hLgY0dNvS%2Fb6yl9ngFCHFgHUmphiom84DKncZhyX69hh8Ql8%2FCeMhAa2k%2FblytZdnVirQxe5dlBcIvy7ANLJQQUOYMukftBW6y%2FOX%2FoYLUWoxxjuYyTtx%2F4t%2FjkcRtqA6s3izSUSsLwwBMtWvy%2Bp7Xc0CqHLZUVm9%2FMizuvqKR8xPRv586Xq45plCPTPRWo2oDbQ2WuzCVVfBmHqUsw%2FbO2wwY6pgGjsMn48scRKjqPddb0T%2F1me0h9%2BO9SbxiNwppKyKIMUq5xGuKBSPNgtEFRbpHtvHpMdx9UuaUFhk4%2FmEXQqEx2cKUcFfS5Z3K2ZLWe8IiUpXkgp1AQ%2B2lRtyQmxnicT45X96aWvKn497AaHglSXUcJ50IJG07hHvIu%2Bk7RvF8YnIBhb6I5%2FjL3gSnPyl%2BZ0Dyitr9iOzrmFM6%2Fd0WzrWI2VUqE42Ub&X-Amz-Signature=8e7c4aaa3cab82700f5fe3ef8e96b8f110ad39390b7d62048251bec725c01f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUELTIOX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNlOCk%2BRZn%2FZJV1ajgpU8mAO8RX8H%2Fu5f52hPFNLGyAiAGia2uVSrXme9uDGjbS69ewjDMpbTuSEWghB7uvM3DOSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvz3jJmKblAMASM9YKtwD0UwqrQOVEr3QrsOeKSuNQY5ukBAeX5ob8nYKjRIH%2Bs4VP89k%2FN3ivK62D9dxL8coHimkmAIgR5okZHyOetBN%2FZyNoEtxpxNqdECb1q%2F%2Fx9AO4wV4lIBj4ZLlcMscWvK4%2B6OhEsVbA6RYhiJtv1n0EWvC2CUF%2Fl77N4bHCAlV8aoEmpOknA8o845XgMXBm%2FlWm15TWbJdYcA84hhhIIUYwBh1UQQ8a9liPmzZPM2QTqs9Ar%2FtDRphxp8IOpKjir9XdUuRSwaAQdf7FGr2OVx0hvPzsTewSHR9gG4Ub1f78lOBjI54dXd4skrWhSYTGjA69%2FudrH2IhEIQBLja8N6YtkKybgSGI0Lv95YVSgSfZSYi4JEBm0YfLn5%2BK6EtxSYRTnF4Ui0PFkHqUr%2FLtJzDqQt1nxD7lG6ftW7nnZgX6hLgY0dNvS%2Fb6yl9ngFCHFgHUmphiom84DKncZhyX69hh8Ql8%2FCeMhAa2k%2FblytZdnVirQxe5dlBcIvy7ANLJQQUOYMukftBW6y%2FOX%2FoYLUWoxxjuYyTtx%2F4t%2FjkcRtqA6s3izSUSsLwwBMtWvy%2Bp7Xc0CqHLZUVm9%2FMizuvqKR8xPRv586Xq45plCPTPRWo2oDbQ2WuzCVVfBmHqUsw%2FbO2wwY6pgGjsMn48scRKjqPddb0T%2F1me0h9%2BO9SbxiNwppKyKIMUq5xGuKBSPNgtEFRbpHtvHpMdx9UuaUFhk4%2FmEXQqEx2cKUcFfS5Z3K2ZLWe8IiUpXkgp1AQ%2B2lRtyQmxnicT45X96aWvKn497AaHglSXUcJ50IJG07hHvIu%2Bk7RvF8YnIBhb6I5%2FjL3gSnPyl%2BZ0Dyitr9iOzrmFM6%2Fd0WzrWI2VUqE42Ub&X-Amz-Signature=ac19938ce4016ec74d4292f55611b1aca0372bc65c2d598ae6b4220b876d9993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
