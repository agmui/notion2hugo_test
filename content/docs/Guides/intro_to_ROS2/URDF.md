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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73ZDWKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDx9fdT3VV4kHay4SJnxWRJJPG2pI9Z71LUtzTsBhs6AiEA8g0sh%2FH0ukihitts9RyClIoxOrxa2VqbMk5U9Mj6AZMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPwc%2FTDvcqaNzHmrIyrcAz9qrU8o%2FD7Z8HK9Wb2JNoAVPHV5njKnl8A1oFBOpkrsKH1CDU0l0JJ4dNG4RInRSwhKcJXgmiDY1Op03ETKSdkqLVKK1qBDVgkgQv7mKSdf8QHtKT0INLcFRh2sDIbtBPN5cZWsFoF7zSj%2FZM3AQ9LyMrOEs44kKJGQLnWRQNzitFqaBsmbGiX%2BXQGVXW1K6R1vBFRZQMeR1wlknhs6ZOc%2B0%2Fpe1Z1VkQL0pi37x8ui7hLeci0uu%2FN0kS43wSUjzongWfSWY59T0nk4Pm%2B6%2FHtwtqLY6ZNo1CxC1%2BjQP08FzPGg8hVywFVWI7EvvTtMK%2Bl7ofJ9Y7wFjWATU6REoMRf%2BvEdzh%2Fbn7SOnqIwDSPtYcaZWic4ECyJuciAR0eTwvL%2B6fmRdfad2B6qmrVi%2Fr11Z58lxgrmMjuEhZWkPskptThgD3yQSVSGJC7Ufo3fYU5SqTi613XANuDrbiw%2FEwvRoHDw0GEn5G2n58XUvew40qbN%2FE%2BmD2XY7NiuTtg4FRxA%2BeN8XNFx3YVJusW2CJ4p5Zz6XW3F6sNamFErxELiKtx6rJcLwkBLPuaRmjsSMcm78UJOX0Wi6HK2x9zT6YAeGqiT811qm1Ft7CJkm1PSWrkRpFbIeVsv6QOFMO6nqr4GOqUB4oIa9UK0eK%2B%2FwgAz13cKkBy%2FAIUsl6C2O16Y8cyO8kA08MhxfpBu5UOau2FKL0Aen7rOML7K9qNfbRppipnSlJEWHWeCywtWjCUSykBmI1bnIwHGIV2zaur6HAhkarZH7KzjFVo8wic3Be5zJwEd1wwMPHEf7EXPXp0EdzLWimnKZWRYw3e2P7FRlhsQsfJWDJagYtkW21TdQwDpPfhFfDdR0qc1&X-Amz-Signature=067ec5a589af5e93687073886d82577b77eb8ebe95e2fac2f6507beb6f5a8a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73ZDWKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDx9fdT3VV4kHay4SJnxWRJJPG2pI9Z71LUtzTsBhs6AiEA8g0sh%2FH0ukihitts9RyClIoxOrxa2VqbMk5U9Mj6AZMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPwc%2FTDvcqaNzHmrIyrcAz9qrU8o%2FD7Z8HK9Wb2JNoAVPHV5njKnl8A1oFBOpkrsKH1CDU0l0JJ4dNG4RInRSwhKcJXgmiDY1Op03ETKSdkqLVKK1qBDVgkgQv7mKSdf8QHtKT0INLcFRh2sDIbtBPN5cZWsFoF7zSj%2FZM3AQ9LyMrOEs44kKJGQLnWRQNzitFqaBsmbGiX%2BXQGVXW1K6R1vBFRZQMeR1wlknhs6ZOc%2B0%2Fpe1Z1VkQL0pi37x8ui7hLeci0uu%2FN0kS43wSUjzongWfSWY59T0nk4Pm%2B6%2FHtwtqLY6ZNo1CxC1%2BjQP08FzPGg8hVywFVWI7EvvTtMK%2Bl7ofJ9Y7wFjWATU6REoMRf%2BvEdzh%2Fbn7SOnqIwDSPtYcaZWic4ECyJuciAR0eTwvL%2B6fmRdfad2B6qmrVi%2Fr11Z58lxgrmMjuEhZWkPskptThgD3yQSVSGJC7Ufo3fYU5SqTi613XANuDrbiw%2FEwvRoHDw0GEn5G2n58XUvew40qbN%2FE%2BmD2XY7NiuTtg4FRxA%2BeN8XNFx3YVJusW2CJ4p5Zz6XW3F6sNamFErxELiKtx6rJcLwkBLPuaRmjsSMcm78UJOX0Wi6HK2x9zT6YAeGqiT811qm1Ft7CJkm1PSWrkRpFbIeVsv6QOFMO6nqr4GOqUB4oIa9UK0eK%2B%2FwgAz13cKkBy%2FAIUsl6C2O16Y8cyO8kA08MhxfpBu5UOau2FKL0Aen7rOML7K9qNfbRppipnSlJEWHWeCywtWjCUSykBmI1bnIwHGIV2zaur6HAhkarZH7KzjFVo8wic3Be5zJwEd1wwMPHEf7EXPXp0EdzLWimnKZWRYw3e2P7FRlhsQsfJWDJagYtkW21TdQwDpPfhFfDdR0qc1&X-Amz-Signature=45399f4c10450a61ac371518b56a339552d257c9002993d2994eb867b0dccf30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
