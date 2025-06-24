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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMYPHX4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHYtQTN71639j%2BT22os3WpFN33Rs1jaqmfCLAfuBAAXLAiEAjppeKcyxiQUv5EqFyeelYrlTDniEkomltS3pr471gEsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCsnEj9u8X26xRPhnCrcA4icOGNvkmENE220o%2FLu81%2F8Qe5bEF5lKjRx%2FO%2BCTXI6lm279sxOGw9uh%2FtvhNhpYJ5QtsqNCuQ6sCoBdwIVDff%2BUQ9KPL%2FYD6PqYALKsst2m7QshbijKN93h4y39YkxJ9kYESo7x5FfvWDgebUDXbpPPHfEpIjyi0ImnM2nCpE8Nb7iF3uS8mMmyph3aoJluLNdrEWBJHLJi0ovvyK%2FlSS7rsRnnxRha7%2FY1r%2BkYwT42nqCo8zOkbQdWJr0YewcJ%2FpKY%2FKnOLSnBdIyi0bWXSJmQThZLdOoW2p4rplrSNH67H5lHCYdA3bbJOg6aK1q2HRsB%2BUm5WgG1I6HWr%2FKKIkB2X%2F50CiTKN9sqhvp%2FrDXkefXy9UHRe5lUyBoIzUKxj9t0U%2FikyZ%2FFp3cF3kOz3NkEtriqn2QrLdVUNngg8Kkd2zyH7IbVjS3qnpsPDak%2FH9gQ%2BDC6QOASmG3wvW1zK3uGqEJbEC4QiEL9l4KSjajCA%2BK8erpzc%2BQ0Pbrv23%2BoYxfyd0cmD68ISNl9AQooOSix2aJ3SyqGbxaJjNU3oqRdsx4B82RsS%2F2g9UdqFMGRXypX0YnEa%2BFJVYkSm3d6FpYNGHik3NxmYPKjLoTdpZYqqnlhbqXg6hjd%2FxGML2V68IGOqUB4FyoQ9hW9Hn9HdoNwBPehzTANlBbq3AsBHU4BKZjSCoiisjJsmbOqfw8t11SXZtVG3uS5P7xsbYsan9hRwlb26CA8b8JooyRTHQ3BmkCwuLlOkt2O8th9Dh0DaoVpdrrdvyDdY0RunaXo2OvwajI%2B016gZqh85%2BrVyOYyyrliJ%2FEjQVR64DYOXwtvVRsRqU7vUMovC4TkHgsGRkeZ7cFLbdgHKMO&X-Amz-Signature=2cf7880f436fbd13671d1a3b3f9e23787db39f2d32d60f27aa8e8a8026d3c154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMYPHX4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHYtQTN71639j%2BT22os3WpFN33Rs1jaqmfCLAfuBAAXLAiEAjppeKcyxiQUv5EqFyeelYrlTDniEkomltS3pr471gEsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCsnEj9u8X26xRPhnCrcA4icOGNvkmENE220o%2FLu81%2F8Qe5bEF5lKjRx%2FO%2BCTXI6lm279sxOGw9uh%2FtvhNhpYJ5QtsqNCuQ6sCoBdwIVDff%2BUQ9KPL%2FYD6PqYALKsst2m7QshbijKN93h4y39YkxJ9kYESo7x5FfvWDgebUDXbpPPHfEpIjyi0ImnM2nCpE8Nb7iF3uS8mMmyph3aoJluLNdrEWBJHLJi0ovvyK%2FlSS7rsRnnxRha7%2FY1r%2BkYwT42nqCo8zOkbQdWJr0YewcJ%2FpKY%2FKnOLSnBdIyi0bWXSJmQThZLdOoW2p4rplrSNH67H5lHCYdA3bbJOg6aK1q2HRsB%2BUm5WgG1I6HWr%2FKKIkB2X%2F50CiTKN9sqhvp%2FrDXkefXy9UHRe5lUyBoIzUKxj9t0U%2FikyZ%2FFp3cF3kOz3NkEtriqn2QrLdVUNngg8Kkd2zyH7IbVjS3qnpsPDak%2FH9gQ%2BDC6QOASmG3wvW1zK3uGqEJbEC4QiEL9l4KSjajCA%2BK8erpzc%2BQ0Pbrv23%2BoYxfyd0cmD68ISNl9AQooOSix2aJ3SyqGbxaJjNU3oqRdsx4B82RsS%2F2g9UdqFMGRXypX0YnEa%2BFJVYkSm3d6FpYNGHik3NxmYPKjLoTdpZYqqnlhbqXg6hjd%2FxGML2V68IGOqUB4FyoQ9hW9Hn9HdoNwBPehzTANlBbq3AsBHU4BKZjSCoiisjJsmbOqfw8t11SXZtVG3uS5P7xsbYsan9hRwlb26CA8b8JooyRTHQ3BmkCwuLlOkt2O8th9Dh0DaoVpdrrdvyDdY0RunaXo2OvwajI%2B016gZqh85%2BrVyOYyyrliJ%2FEjQVR64DYOXwtvVRsRqU7vUMovC4TkHgsGRkeZ7cFLbdgHKMO&X-Amz-Signature=df75a654a49b0ceb714c3f142093526ab7c319a17013de40df2d14eaba640a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
