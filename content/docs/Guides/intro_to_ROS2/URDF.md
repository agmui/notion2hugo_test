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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ53BNM4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCBoR%2BTbWqCEPAX6cpe768WOyWlv46JyAhox%2BF4WmmvWgIgES5b9fU%2BIuyujORWnLXP5mhM3sG71d%2FfAXvcqxFX%2FrUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCcC2Y4C865xB7kEnSrcA1esdyHPTtP5zf4Et7eeE6BA7e0nPlhXhhHuYVutQ6Vmv1QYPQYihUQaF8DpeEIEQw2IZ8WuX%2FKP%2BYtQ0sAOuSKamxJH%2BQ8U82bRw5Ge8cokDXctdQlGAz3Ty9Z3bMfvuc7aMazU8XZOTc%2Bd6hiGfMAnnGa%2FsYxT1XUubPxqCSqp2hoO6O5dMYh2JQl55k0e9jBfotgSja38lBIqNAf9r8iAM0LHsTgQzrCgw6QefSO67KpcMIGceOrzpibQK0rxkHpK7lDtcsIpMhaUou7x0xvdwqYY0o1xtW5kcnpr8U8m%2B3808lkQXQu5wGE2IsBMI8KLxA7MqC38hjjPlzzvaJqikck8JCkDsXJgX%2FU4Fr%2FZBgjoBgKfZXmP8UUIcHQwPDrQspnTY9SmpHD%2F3jg6Uvs2cHUYbPWtdNWiJ6qLK6%2F7UGplbiyIN8gw%2FTW8%2F1zdYvGEK0OL1710RdzKs7CXJOFquVV874hRi%2FIVnCUecYWvhBpMiszsFXBSk8TWp63XpTS0dUQDNjiFuIPDwwjazwLSKAzEsQhB3qoFVtD5dydISCNCib4wm9XLymoKBce4ArZ37XLvOTdhnOt1LpEF%2BKM3CKID%2FrAzbEDM9hGqhUOyW5lMtgporY1Al8VsMI%2FSgL4GOqUBEq6dBLjBfsglqZuPAtfaXF3SAaYlxP82UIPUO7CR11Tepf9QuwIs%2Fi00PlYucTG7GqkqRb0cQ1U%2Fen9oy%2BvzPgX8HWFQfXj6ATOEQ1g2t72Z8OngMhgHfmvi6meipZslWoG3hQ2%2BnZz2pSd7WAtTc4bBXmMQ0un17gMxm9tYZLUz3nZ%2FNruNSwqKvv8JqSLX5ngKgEP%2FILxRxS4jhkFIWda82cb3&X-Amz-Signature=97a4f096ced957167fc0d1d81834d4db96f945e17db6d6f1a878cbbe04f180bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ53BNM4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCBoR%2BTbWqCEPAX6cpe768WOyWlv46JyAhox%2BF4WmmvWgIgES5b9fU%2BIuyujORWnLXP5mhM3sG71d%2FfAXvcqxFX%2FrUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCcC2Y4C865xB7kEnSrcA1esdyHPTtP5zf4Et7eeE6BA7e0nPlhXhhHuYVutQ6Vmv1QYPQYihUQaF8DpeEIEQw2IZ8WuX%2FKP%2BYtQ0sAOuSKamxJH%2BQ8U82bRw5Ge8cokDXctdQlGAz3Ty9Z3bMfvuc7aMazU8XZOTc%2Bd6hiGfMAnnGa%2FsYxT1XUubPxqCSqp2hoO6O5dMYh2JQl55k0e9jBfotgSja38lBIqNAf9r8iAM0LHsTgQzrCgw6QefSO67KpcMIGceOrzpibQK0rxkHpK7lDtcsIpMhaUou7x0xvdwqYY0o1xtW5kcnpr8U8m%2B3808lkQXQu5wGE2IsBMI8KLxA7MqC38hjjPlzzvaJqikck8JCkDsXJgX%2FU4Fr%2FZBgjoBgKfZXmP8UUIcHQwPDrQspnTY9SmpHD%2F3jg6Uvs2cHUYbPWtdNWiJ6qLK6%2F7UGplbiyIN8gw%2FTW8%2F1zdYvGEK0OL1710RdzKs7CXJOFquVV874hRi%2FIVnCUecYWvhBpMiszsFXBSk8TWp63XpTS0dUQDNjiFuIPDwwjazwLSKAzEsQhB3qoFVtD5dydISCNCib4wm9XLymoKBce4ArZ37XLvOTdhnOt1LpEF%2BKM3CKID%2FrAzbEDM9hGqhUOyW5lMtgporY1Al8VsMI%2FSgL4GOqUBEq6dBLjBfsglqZuPAtfaXF3SAaYlxP82UIPUO7CR11Tepf9QuwIs%2Fi00PlYucTG7GqkqRb0cQ1U%2Fen9oy%2BvzPgX8HWFQfXj6ATOEQ1g2t72Z8OngMhgHfmvi6meipZslWoG3hQ2%2BnZz2pSd7WAtTc4bBXmMQ0un17gMxm9tYZLUz3nZ%2FNruNSwqKvv8JqSLX5ngKgEP%2FILxRxS4jhkFIWda82cb3&X-Amz-Signature=e9f80dc507a41665b0a48d78dd4b48d1e99680842c5e252bc9de091e8e0e7b72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
