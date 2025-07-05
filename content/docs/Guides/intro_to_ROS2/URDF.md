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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFHCRIR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCFHnzPiHMAfHInWhR6KZb%2FZtW5cn9%2F%2BG%2FpJx6f7nvozgIgQ1%2Fyf61ScspwOwfkEqf2tz%2F2j2C7cCBYNFxhdEEgkG0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKgBln2xJHmRpZuHQSrcAyB7mP%2FcB4EWZ0PjjSAyVjuoxsyTC2ZzlfOobFW4S6JK%2B2QKKa5YRU932Km2mbg%2FZR0TC1cUhEbS%2B%2Fd41Ykii1EO1uikcgUku6x89zPDggcuG%2BwQBOOgMzrbgGNZeBXVlbtXEeoQZ83HCODP7TW8Cyg6Qai1DYSIomTTaatW4Gt5A6Igr077c8EN58KCLAdiucs0zewqnQOTNH0uBRsbOLI1Gp0L7hMDQsn9OJ8mjDXccaVqObHDxKXkSjlzPl1wYQuLFMhIa%2FReucb2txEOw8j%2BEJctdyHURxRiWwskTBq1YtBbw16jnu4uJywrdvXfOvQp4iPDTnBXAmPvr4D9yv86l8Ya1uBo8nN6XhEQl%2FVpmN%2BXPI38NysdCbADAZwXBfIGG0I0gqLUFekntdCRQMCct4p8mM3P%2BCRJtuBOrRbc6L6lIJYXKiDIXgt%2BNhdfLon9rbzGGzmiNoBGXFPWDk7KARQCIAs%2FVNFTg5l1sz9%2BKclz8I4C61SXjQ7K3lO3GcaOcxmq9PSOL%2FHlZEy9oqFdVIKIMjo5VXF4TpYp35h5KQcNi31VfmRHsxweyq7H0dNWfuWONOp9fmIzft2XgzoGI%2F154PVLQBYiYscl1tlXgdPOO0cA47AtJfgHMLC%2FpMMGOqUBZ%2BxdZhQsafeYKaarJsF25XLe4RqNFGmZoT%2BEvBrBn8a5%2BVkKWoP%2BtqURe%2BztE5F7%2Bd%2FuItknDqU22SJMafNINkZpIWDjXQOXHoPMSJYoCPTIucOCjdXxQMFD2rv%2FhpZUvjIkFTWWcOlnT8v6tzTmJlUJmZHeFAXWdyTP8H82qwq9KNvNLRynwGqrJBgrmZlIH6OcgeTVLkWdiOfp2Rg6S9Pvumbn&X-Amz-Signature=d38ebc1ad45460df9ff43ee9f0a9c1fc9092535907e1cb6be5421356846775df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFHCRIR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCFHnzPiHMAfHInWhR6KZb%2FZtW5cn9%2F%2BG%2FpJx6f7nvozgIgQ1%2Fyf61ScspwOwfkEqf2tz%2F2j2C7cCBYNFxhdEEgkG0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKgBln2xJHmRpZuHQSrcAyB7mP%2FcB4EWZ0PjjSAyVjuoxsyTC2ZzlfOobFW4S6JK%2B2QKKa5YRU932Km2mbg%2FZR0TC1cUhEbS%2B%2Fd41Ykii1EO1uikcgUku6x89zPDggcuG%2BwQBOOgMzrbgGNZeBXVlbtXEeoQZ83HCODP7TW8Cyg6Qai1DYSIomTTaatW4Gt5A6Igr077c8EN58KCLAdiucs0zewqnQOTNH0uBRsbOLI1Gp0L7hMDQsn9OJ8mjDXccaVqObHDxKXkSjlzPl1wYQuLFMhIa%2FReucb2txEOw8j%2BEJctdyHURxRiWwskTBq1YtBbw16jnu4uJywrdvXfOvQp4iPDTnBXAmPvr4D9yv86l8Ya1uBo8nN6XhEQl%2FVpmN%2BXPI38NysdCbADAZwXBfIGG0I0gqLUFekntdCRQMCct4p8mM3P%2BCRJtuBOrRbc6L6lIJYXKiDIXgt%2BNhdfLon9rbzGGzmiNoBGXFPWDk7KARQCIAs%2FVNFTg5l1sz9%2BKclz8I4C61SXjQ7K3lO3GcaOcxmq9PSOL%2FHlZEy9oqFdVIKIMjo5VXF4TpYp35h5KQcNi31VfmRHsxweyq7H0dNWfuWONOp9fmIzft2XgzoGI%2F154PVLQBYiYscl1tlXgdPOO0cA47AtJfgHMLC%2FpMMGOqUBZ%2BxdZhQsafeYKaarJsF25XLe4RqNFGmZoT%2BEvBrBn8a5%2BVkKWoP%2BtqURe%2BztE5F7%2Bd%2FuItknDqU22SJMafNINkZpIWDjXQOXHoPMSJYoCPTIucOCjdXxQMFD2rv%2FhpZUvjIkFTWWcOlnT8v6tzTmJlUJmZHeFAXWdyTP8H82qwq9KNvNLRynwGqrJBgrmZlIH6OcgeTVLkWdiOfp2Rg6S9Pvumbn&X-Amz-Signature=2e638ed8ecc167942f7f129878be414788a365554e6d14ff5f2a1626ed3f98ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
