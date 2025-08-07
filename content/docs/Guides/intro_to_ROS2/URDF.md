---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4SPFBJW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDOmAAE%2B0wn7fbr%2Fb%2FsTBhEaKpJ4rQ7PDZkTK0ziDapDwIhAJX3Em8QUsV7p7s3%2BbQbugy%2BmtwaRUCwyBXd8iRboYLLKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyusBqAkzAbq5d0P%2BYq3ANi%2BXeLd%2BfmPN7bR5IErKoqt1HPWHlzzgf4DlSbmiHbttuNJuG7UQGdJ5N7sKorJbeW1AHWHuQQSmqvBntcDlvNtoP%2FtOjJFNo6wBXyZBy6WzcQh%2Bnf41s8iWjO%2FwuO%2Bbw5%2F5febe3o6jAP2LdqfGqIJsxuh832dYdYgtgYMfM6wJ%2FG1KAEdH7Vet8Rv9gXSUwCgpolwd1xA4C2utXSL%2BNlL8%2BDRWQ9KH3QHHQFlSFhq57GG6wRGb5HRuCdw1a8RNmQSXeS4oo5UQ5DDRdNM9JDkLYXISSSKfa8w0c9s%2FAK3LpUFCQNAsjshYV9SHHl16w5v%2BZ6KUKhghwmg4QMqF5xNa3Jwua06izqSfplpuKzVu0gdkWIH4nIzQ%2B6xst54IhQ5iApblVzrBEXnOMHvT%2B6RuxpKD%2BwVmivr08HUSK5OA8zlvrpWbJkhL%2B6%2Bpm2YtTZAK15g5tpHsCekorX6QUY7BCzGmPiOtj1L0RVNE5EjVEZ%2FiaJLrESzjdoupsSTmz6V60%2BCrsapLO6KJNqiKGbnk%2B78Fayd0XQQC2I8pU4vdnIZbCskxmP5ErUtIsn7a8gxYA1jaTPZlVtDSAv%2BoMA4M9nROyribR%2FvishTHeqzGpaGCFPgsCQz76WmzCKttHEBjqkAan6HnbncBpD0c4hii%2Ffig92nmsLjG2xTEkaWc8dOHjmIaFqsvt05cE7eknl61AeSg%2BTLxYEbPoVo03qGG4Cu8ddRfozabgussfYgq0Nr5oy%2F%2FidzzbzBc81L99WVnKLDpjtI1czX1LEatHndZ4ePKPeg6xSjoGGVP%2BTOF%2FNTg8O0Vi7a9qsLqSd9yxN7xRauq6eXm3uxxmHibHZJuuV7Ym8QUcN&X-Amz-Signature=5544a67f99c82fe9d4edbc20d4475d7028a58c85fdf22e995c32a1b67ea15d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4SPFBJW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDOmAAE%2B0wn7fbr%2Fb%2FsTBhEaKpJ4rQ7PDZkTK0ziDapDwIhAJX3Em8QUsV7p7s3%2BbQbugy%2BmtwaRUCwyBXd8iRboYLLKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyusBqAkzAbq5d0P%2BYq3ANi%2BXeLd%2BfmPN7bR5IErKoqt1HPWHlzzgf4DlSbmiHbttuNJuG7UQGdJ5N7sKorJbeW1AHWHuQQSmqvBntcDlvNtoP%2FtOjJFNo6wBXyZBy6WzcQh%2Bnf41s8iWjO%2FwuO%2Bbw5%2F5febe3o6jAP2LdqfGqIJsxuh832dYdYgtgYMfM6wJ%2FG1KAEdH7Vet8Rv9gXSUwCgpolwd1xA4C2utXSL%2BNlL8%2BDRWQ9KH3QHHQFlSFhq57GG6wRGb5HRuCdw1a8RNmQSXeS4oo5UQ5DDRdNM9JDkLYXISSSKfa8w0c9s%2FAK3LpUFCQNAsjshYV9SHHl16w5v%2BZ6KUKhghwmg4QMqF5xNa3Jwua06izqSfplpuKzVu0gdkWIH4nIzQ%2B6xst54IhQ5iApblVzrBEXnOMHvT%2B6RuxpKD%2BwVmivr08HUSK5OA8zlvrpWbJkhL%2B6%2Bpm2YtTZAK15g5tpHsCekorX6QUY7BCzGmPiOtj1L0RVNE5EjVEZ%2FiaJLrESzjdoupsSTmz6V60%2BCrsapLO6KJNqiKGbnk%2B78Fayd0XQQC2I8pU4vdnIZbCskxmP5ErUtIsn7a8gxYA1jaTPZlVtDSAv%2BoMA4M9nROyribR%2FvishTHeqzGpaGCFPgsCQz76WmzCKttHEBjqkAan6HnbncBpD0c4hii%2Ffig92nmsLjG2xTEkaWc8dOHjmIaFqsvt05cE7eknl61AeSg%2BTLxYEbPoVo03qGG4Cu8ddRfozabgussfYgq0Nr5oy%2F%2FidzzbzBc81L99WVnKLDpjtI1czX1LEatHndZ4ePKPeg6xSjoGGVP%2BTOF%2FNTg8O0Vi7a9qsLqSd9yxN7xRauq6eXm3uxxmHibHZJuuV7Ym8QUcN&X-Amz-Signature=73584b8ae61b72daa7a454474d0f39cc75d63e56e90ae8785f06c4477ae6e374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
