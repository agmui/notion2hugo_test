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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKEDO5U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzldGW6G7RQX%2Bex%2Fnzfl%2B0B7X6CEVnGB3afBvgUwVEAAIhAM6W2yOS4y2YxAsn3%2B5Fd16BlZZOm7ZcxXjdcW3m3XIuKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuYVwZUGBvgYVFzroq3AN7FEuNwMHyxHoIHDhnUDE5KkXbbxjC4D%2F6vtCY8u49Whvj1Sbl0129e%2BXquiapy99rFglmJ52FB%2BJf4zPC5DBgXJUr5UZMk4PhBkHih2K%2F2wQk4jtS%2B%2FHcscnKJheuz4ig6cbmwUg3IQ7Rq2gtPNB4jVFl%2BLNknVlT1wY1EhaEgeZbajPsThKlv4Yk6QgzdBA%2FpfCV1t7ERAtaY0uFBW9sKHOrF6I7jtkPbR4JtAwjoX6%2BTO6uhaECbAv%2BiFIsnFjNNwerAuVQzdX4lltF0XI47mr1jmcIHnkX%2BXLj5nTKifEmT3%2B8DHlfmf17j7a%2BzPMThmois2L%2FJGehv%2BSM19oTvstd%2BX9p1jUyWNjEr6ZOFS5qA%2B5BVTqL9dVKw45q0nwM8W4xxELRsCD6%2FTxWhT4qjGIdwr6819bD1jV5NqUApEZ6L%2FCLKuXZyfG3U29%2F9xwH%2BEoPi8DOgpZt1VS2lVeWZeW4HEckq1X4wYkvOh0%2BBKxdx0RAkS1z%2FMUcHXvk7b4E6QdSHFVkWULzSwPR0MD%2BG44Pyyasq6NcSX2qcmdjXRFfUpfP%2Bu5jI5TWHG9a%2BcmP6Otq25PXI7OhEaJ7Ld8uY0Ghk7niJhsTY7dPuYhjEUT4PVrlldG978TC7zD2yt%2B9BjqkAcqL4e3W%2BynCDS0pNSif5grI8nQoXiUpKFJsq1g5lw4v1y5wvG7isndeRoyPoxbmPaMV6RAfyGhGR5Ku4ILgFa9gwGpoUTLB8A9%2FmJ35q%2BET4V9EyKTG98mxkuWbKzs64%2BjbhYfBDZJPMm8WfEC5kBvYTMttb2J5LF9hdrPk4Gdr3yVN%2B1JUysBoi%2FqLn%2FUTQcTNIoTfmBkhjpN3T6Wt6hB5HQ3w&X-Amz-Signature=c6b9a928289757f6ddca21cfd475c491d63147d2e01f67b689c6d288cea2e550&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKEDO5U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzldGW6G7RQX%2Bex%2Fnzfl%2B0B7X6CEVnGB3afBvgUwVEAAIhAM6W2yOS4y2YxAsn3%2B5Fd16BlZZOm7ZcxXjdcW3m3XIuKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuYVwZUGBvgYVFzroq3AN7FEuNwMHyxHoIHDhnUDE5KkXbbxjC4D%2F6vtCY8u49Whvj1Sbl0129e%2BXquiapy99rFglmJ52FB%2BJf4zPC5DBgXJUr5UZMk4PhBkHih2K%2F2wQk4jtS%2B%2FHcscnKJheuz4ig6cbmwUg3IQ7Rq2gtPNB4jVFl%2BLNknVlT1wY1EhaEgeZbajPsThKlv4Yk6QgzdBA%2FpfCV1t7ERAtaY0uFBW9sKHOrF6I7jtkPbR4JtAwjoX6%2BTO6uhaECbAv%2BiFIsnFjNNwerAuVQzdX4lltF0XI47mr1jmcIHnkX%2BXLj5nTKifEmT3%2B8DHlfmf17j7a%2BzPMThmois2L%2FJGehv%2BSM19oTvstd%2BX9p1jUyWNjEr6ZOFS5qA%2B5BVTqL9dVKw45q0nwM8W4xxELRsCD6%2FTxWhT4qjGIdwr6819bD1jV5NqUApEZ6L%2FCLKuXZyfG3U29%2F9xwH%2BEoPi8DOgpZt1VS2lVeWZeW4HEckq1X4wYkvOh0%2BBKxdx0RAkS1z%2FMUcHXvk7b4E6QdSHFVkWULzSwPR0MD%2BG44Pyyasq6NcSX2qcmdjXRFfUpfP%2Bu5jI5TWHG9a%2BcmP6Otq25PXI7OhEaJ7Ld8uY0Ghk7niJhsTY7dPuYhjEUT4PVrlldG978TC7zD2yt%2B9BjqkAcqL4e3W%2BynCDS0pNSif5grI8nQoXiUpKFJsq1g5lw4v1y5wvG7isndeRoyPoxbmPaMV6RAfyGhGR5Ku4ILgFa9gwGpoUTLB8A9%2FmJ35q%2BET4V9EyKTG98mxkuWbKzs64%2BjbhYfBDZJPMm8WfEC5kBvYTMttb2J5LF9hdrPk4Gdr3yVN%2B1JUysBoi%2FqLn%2FUTQcTNIoTfmBkhjpN3T6Wt6hB5HQ3w&X-Amz-Signature=69a4b6ec55657407479097df2ce071e709d0397b4e3b9dceccf3aed84997b70f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
