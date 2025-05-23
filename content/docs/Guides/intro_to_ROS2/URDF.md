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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWOYIWR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBbuBCRhrItJPx3yOFvIsNnEDrL3Iy6yj47wAgbS7zj3AiEA7J41t92p%2FCdRk3%2BptI%2BQRH1%2B6uoyyorUleYf7T4MI7UqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzpV46HZGWn%2Fk4pwSrcA3Bhc8iJ8WSg1QlG5UEhTxFQA5LeIQDuP888WViBldQhU2dUdj55YBxeC0wlYCb31HsWTPNn86O0DPcbbGToMcgoTFs3As%2FIR8yqsFM62dBwV0AH%2BJOJgrJDVjAZHknJO1QFIYJH3Lxe6Xx3km0qEQ8vmqQosvUrWGzSmKOnhnclG%2BJPrUhgXo02AWoHRcEZOgRoAawU0jP2KRJ5iNGTIGN7XPKyDFjWmLeVx1wV%2FQzJcb6GGMEL5jngXrU5Ou2LLIZKeGTpGHZwVuJZCp2LpyO5RNTVE4m%2FYI%2BSrWaM%2FRSq59jRrOykXZRRRA2LE7qO3DU7R9I32v%2FWj5eVcqSKFH1lPTYtnm7s4kBAERJzJASVG1HHdk9gWhZ1A8GyTGitB1eNiMOY3iEn%2F%2BPGY4IU9EL13UNvcPQ4DzCvqTduIh0eTXx%2F9SZUEZbireGpcT18f%2FANYkLvnSJeIhgBN68BLXdQQIgfByYf5v4nYWgvLCsbXoFTGQKzPaZntgAejiEo3h%2BaMjqlSJf697AgVi41uDvNegx9lhh%2Bhxbwpx5B39prh3eI4KO2AV93CncabsvWTiQMFfznmGQqqggjuyWpy3p170c21qCopMbGGuNrSo%2BQkQTBCa4DypDGPwrwMJaNwcEGOqUBtPDnqzsvak2o%2FqEagX7eHEVKxq0pobWcUyMrdvuGJFjxwQYSnPBsiuS1zSuRSZuKGXbCEoTQJdWMpU5LhcOJXEzFlsVkffjh2ewUgNuz%2FsJMfJSweDY98nYLUoJDYJAr8djkUzpxzEOP18KOFrbLHdowe1naGUPkrSnXQ7PC1D7IUilSuEmXGuJqK%2BfuoH%2Brr81Yht2hmEM4Xd1Lf5Nu%2BUyNYVQJ&X-Amz-Signature=5daeb5b112ea8bdeb06318e3f64d69f46e8a67661a2e943332192ea8d92f8cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWOYIWR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBbuBCRhrItJPx3yOFvIsNnEDrL3Iy6yj47wAgbS7zj3AiEA7J41t92p%2FCdRk3%2BptI%2BQRH1%2B6uoyyorUleYf7T4MI7UqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzpV46HZGWn%2Fk4pwSrcA3Bhc8iJ8WSg1QlG5UEhTxFQA5LeIQDuP888WViBldQhU2dUdj55YBxeC0wlYCb31HsWTPNn86O0DPcbbGToMcgoTFs3As%2FIR8yqsFM62dBwV0AH%2BJOJgrJDVjAZHknJO1QFIYJH3Lxe6Xx3km0qEQ8vmqQosvUrWGzSmKOnhnclG%2BJPrUhgXo02AWoHRcEZOgRoAawU0jP2KRJ5iNGTIGN7XPKyDFjWmLeVx1wV%2FQzJcb6GGMEL5jngXrU5Ou2LLIZKeGTpGHZwVuJZCp2LpyO5RNTVE4m%2FYI%2BSrWaM%2FRSq59jRrOykXZRRRA2LE7qO3DU7R9I32v%2FWj5eVcqSKFH1lPTYtnm7s4kBAERJzJASVG1HHdk9gWhZ1A8GyTGitB1eNiMOY3iEn%2F%2BPGY4IU9EL13UNvcPQ4DzCvqTduIh0eTXx%2F9SZUEZbireGpcT18f%2FANYkLvnSJeIhgBN68BLXdQQIgfByYf5v4nYWgvLCsbXoFTGQKzPaZntgAejiEo3h%2BaMjqlSJf697AgVi41uDvNegx9lhh%2Bhxbwpx5B39prh3eI4KO2AV93CncabsvWTiQMFfznmGQqqggjuyWpy3p170c21qCopMbGGuNrSo%2BQkQTBCa4DypDGPwrwMJaNwcEGOqUBtPDnqzsvak2o%2FqEagX7eHEVKxq0pobWcUyMrdvuGJFjxwQYSnPBsiuS1zSuRSZuKGXbCEoTQJdWMpU5LhcOJXEzFlsVkffjh2ewUgNuz%2FsJMfJSweDY98nYLUoJDYJAr8djkUzpxzEOP18KOFrbLHdowe1naGUPkrSnXQ7PC1D7IUilSuEmXGuJqK%2BfuoH%2Brr81Yht2hmEM4Xd1Lf5Nu%2BUyNYVQJ&X-Amz-Signature=f14de2de18140b177ed78f9332e0a44b3fde4503ebb87f6f2666aed15431cf97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
