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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57QO32X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDACX9cYhPV2QywVbhk6%2BDpGFSozVhy6PAsA%2BJEFWAzvAIgMuGZAPgkq3wphx1Hat%2B%2F1pPATxdDwPs8%2Bh%2B65Qwarm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECR1X5J93w7JDiwSCrcA6kJ2tpXRIvCO%2Bjiku2GVX0y7Mn86iPVoPgEAEuwrBXlIu5x0f6mQzYlA2QfS8jKRwNWx6AEAQVNYYJ67UHpCHDM%2FlOxBRNSgYtf%2FJHGHbffucm75ONK%2BvdVzoXB1499LnhVUnQIphHNfKtTTSjCt6gVTA0yhKRoUcYkTNz6d8iZC9U6fWydI7zyx%2BArmDarLXAmX7NXTfODNHHuAHbrAhI3JZ9rq2tIQQP6qXvEw4Nv%2BSLTRyd3z4NdRWp2bW0Etf%2Fw08oijqLF%2Bh02gYOr3GHELi2FRJ9Gu%2BghMeqxass0ALFKNq4cjvYfBGExNy4p1IqLjriZMSQ6QdAVRdiOOJ4YHygF1R%2BIQDbUZMLP84KB3PuUzX%2FJ2b328ivlcTBaL9nvshJaLZQAy3ZAXcSG7hMsLIJS3pj%2BRxvs6WwiXRFPkbo13HPB%2FvnrLR7r6LF4hpmrT41z9NAn4w%2BsLSJxq2s2HBIdX9KW4o4waSIKupHMe4DTc2uUQ3Oj%2BXgKVeIPmlLeZKtHC1kBmbMXjU964UyKrEzrXOeZllAE%2FEH7mjMvSACsKTQoZBaHOoi3xGsHs7sw4SzGBll78ryfpnQJ7KhkPe99pqbdw%2F%2Bs4jRcUKZ6PoUo6c747iflghE7MI%2FZ5b0GOqUB94o8KcBb3X1a9YJ63CMtIhTD3vEAvU01LDUlO8yMLUiek7zrPisY%2B2MA9JbhBkik3IXfjyw53EWzqcmkpyBoHiGwMegFw1LitLyQ64BLa97jknr2oqCG1X7g%2BVQuWk1%2FauEKaEZ%2FW0DEF3ql5DnAdmrnnP%2F7VIn41%2BF9MYwbCzKT4%2BmA2oL6xu0R6jYRWE%2BHMRNQ4g2IOezTvX6MgXhGWZR9JXlm&X-Amz-Signature=fa22f193b5f1047ee1c287f3377b0f88d8ab6f4f2208b5b14eedebe1673b1b76&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57QO32X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDACX9cYhPV2QywVbhk6%2BDpGFSozVhy6PAsA%2BJEFWAzvAIgMuGZAPgkq3wphx1Hat%2B%2F1pPATxdDwPs8%2Bh%2B65Qwarm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECR1X5J93w7JDiwSCrcA6kJ2tpXRIvCO%2Bjiku2GVX0y7Mn86iPVoPgEAEuwrBXlIu5x0f6mQzYlA2QfS8jKRwNWx6AEAQVNYYJ67UHpCHDM%2FlOxBRNSgYtf%2FJHGHbffucm75ONK%2BvdVzoXB1499LnhVUnQIphHNfKtTTSjCt6gVTA0yhKRoUcYkTNz6d8iZC9U6fWydI7zyx%2BArmDarLXAmX7NXTfODNHHuAHbrAhI3JZ9rq2tIQQP6qXvEw4Nv%2BSLTRyd3z4NdRWp2bW0Etf%2Fw08oijqLF%2Bh02gYOr3GHELi2FRJ9Gu%2BghMeqxass0ALFKNq4cjvYfBGExNy4p1IqLjriZMSQ6QdAVRdiOOJ4YHygF1R%2BIQDbUZMLP84KB3PuUzX%2FJ2b328ivlcTBaL9nvshJaLZQAy3ZAXcSG7hMsLIJS3pj%2BRxvs6WwiXRFPkbo13HPB%2FvnrLR7r6LF4hpmrT41z9NAn4w%2BsLSJxq2s2HBIdX9KW4o4waSIKupHMe4DTc2uUQ3Oj%2BXgKVeIPmlLeZKtHC1kBmbMXjU964UyKrEzrXOeZllAE%2FEH7mjMvSACsKTQoZBaHOoi3xGsHs7sw4SzGBll78ryfpnQJ7KhkPe99pqbdw%2F%2Bs4jRcUKZ6PoUo6c747iflghE7MI%2FZ5b0GOqUB94o8KcBb3X1a9YJ63CMtIhTD3vEAvU01LDUlO8yMLUiek7zrPisY%2B2MA9JbhBkik3IXfjyw53EWzqcmkpyBoHiGwMegFw1LitLyQ64BLa97jknr2oqCG1X7g%2BVQuWk1%2FauEKaEZ%2FW0DEF3ql5DnAdmrnnP%2F7VIn41%2BF9MYwbCzKT4%2BmA2oL6xu0R6jYRWE%2BHMRNQ4g2IOezTvX6MgXhGWZR9JXlm&X-Amz-Signature=68f45faf3131712cf5621ce785425ec9b3219ab16158c150dff379d79ca28898&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
