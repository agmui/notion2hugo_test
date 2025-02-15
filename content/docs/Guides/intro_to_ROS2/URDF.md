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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJBZS36%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICGxRfBcZlyCsBo7FJBk1r3ZDW6%2BHc5hhQy5zGoOb%2BAxAiEA0xryEaapAF7JqlGvtv082V7We0OR23A9HsRUmmEAitAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDF0%2Br8sN2zw3UnLGFCrcA2rBTbO9A80NAofDJFpuzMr9%2BqjDqE0xkyuQByywCvaga0vwQxkcsZ7%2B4RcOCmLvYwRT7fWcvA9hPRrZ79hH%2BWlBPhGb%2Bb8CzncO242gqSYASdnqRrLZad1oUO8xA73iIfK1CNDtGG7Aq8Q7ZP9H1wHwq0ZHIh8djmkVBhMoSgsemXapJlxBOnzwRB3pDmVHgF8zNDcoil40bqIq7mlw8dh6M5%2F5dHYNocTLEyMER5aDpb4n8f5PMZNyMR2uke9QuddSS6N3CjjxzWY%2F6MeT2PBHwlfEaxv0QPMR61jBL%2FxpzaoBHFiUIpxHM8hf9ichfGxEdd%2BE%2Famaxa8X5yn7kbGwuZByABC8SxEhvvBnkXONDzTIU5L09BnQSSHbNbGmIS0HjOPtgsnaXLO%2BZRVKVZ37KDgAU5zp0OwFJVfewyR7x6%2BiKBFTqi08UmSbBret3cUeNV4jh5bwkm0L3SJtNcX1%2BQ94Y%2FZ5877dMkhyMc6oFgjMuKO3rP%2BHaN5Iaq4QF7F4emJPuHLeT91tyZGoGix1Jfxt3wEfq7V0JJNMUKQUIwgf1%2Bg2WIpz6wNNgcKmo3ZPwnvSisDrpK9E2hzTi7tYUHvuOBGanxcWABgXaLrmhUjAD7wKW8wufE7cMOTGwr0GOqUBOZ69%2BQgPfEDCt4%2B9ZZc3Jf8hDydy%2F8ysJR1zBCascoE0qcNeeYuYsHrburKgCGqrxXeaxJv%2BsXzMFpCXiOPi65pfDWzic2N7H8zqQo6dYr%2BuSxpuzZYjBNIc6a3scv%2FICl5eTPByOPDrPofORzhd967Y9WlnFrLUjUw9lhTQkvvwEJXzL7YIi2BxHgpfxQ8sWohD5%2F99tEBOvzqVN70ZLRR7ELY5&X-Amz-Signature=b098c8931e6d77c46fe096b0da441482c17df8e5761ceee00e6fdbebd4d481e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJBZS36%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICGxRfBcZlyCsBo7FJBk1r3ZDW6%2BHc5hhQy5zGoOb%2BAxAiEA0xryEaapAF7JqlGvtv082V7We0OR23A9HsRUmmEAitAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDF0%2Br8sN2zw3UnLGFCrcA2rBTbO9A80NAofDJFpuzMr9%2BqjDqE0xkyuQByywCvaga0vwQxkcsZ7%2B4RcOCmLvYwRT7fWcvA9hPRrZ79hH%2BWlBPhGb%2Bb8CzncO242gqSYASdnqRrLZad1oUO8xA73iIfK1CNDtGG7Aq8Q7ZP9H1wHwq0ZHIh8djmkVBhMoSgsemXapJlxBOnzwRB3pDmVHgF8zNDcoil40bqIq7mlw8dh6M5%2F5dHYNocTLEyMER5aDpb4n8f5PMZNyMR2uke9QuddSS6N3CjjxzWY%2F6MeT2PBHwlfEaxv0QPMR61jBL%2FxpzaoBHFiUIpxHM8hf9ichfGxEdd%2BE%2Famaxa8X5yn7kbGwuZByABC8SxEhvvBnkXONDzTIU5L09BnQSSHbNbGmIS0HjOPtgsnaXLO%2BZRVKVZ37KDgAU5zp0OwFJVfewyR7x6%2BiKBFTqi08UmSbBret3cUeNV4jh5bwkm0L3SJtNcX1%2BQ94Y%2FZ5877dMkhyMc6oFgjMuKO3rP%2BHaN5Iaq4QF7F4emJPuHLeT91tyZGoGix1Jfxt3wEfq7V0JJNMUKQUIwgf1%2Bg2WIpz6wNNgcKmo3ZPwnvSisDrpK9E2hzTi7tYUHvuOBGanxcWABgXaLrmhUjAD7wKW8wufE7cMOTGwr0GOqUBOZ69%2BQgPfEDCt4%2B9ZZc3Jf8hDydy%2F8ysJR1zBCascoE0qcNeeYuYsHrburKgCGqrxXeaxJv%2BsXzMFpCXiOPi65pfDWzic2N7H8zqQo6dYr%2BuSxpuzZYjBNIc6a3scv%2FICl5eTPByOPDrPofORzhd967Y9WlnFrLUjUw9lhTQkvvwEJXzL7YIi2BxHgpfxQ8sWohD5%2F99tEBOvzqVN70ZLRR7ELY5&X-Amz-Signature=44914f6d4b2b36557ae98f025025ffc1fd3c17704385a188ad60330bf4b4a1d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
