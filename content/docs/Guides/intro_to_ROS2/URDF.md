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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GTVQNJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjv8We5XpnsO7PwnBLr99qT%2BB1th25ua9z2Dz7xL9F2AiBvwAbtB2KWH0jXWy00baYJ7WtkDAxZMld7kiLOMNvXnyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPZ3lfE9UaNgBBxxKtwDnKW76w8PEHSc4LYMslC71k26oJuNoqdQ96JtzpKMdUEmFO68HfMrx1aICjkFUzAsA3lCTmUnJIh8bqcQ9AtgouDb147uCcwjP4NaMryNOC7t%2Fl%2B3trizVBkyBacJ2aqbBAftH2k7S%2Fb4Vnrtq543MjJQqtft%2F%2F%2B1Km9OEZn%2FPKA%2BNjYKFTQIocorR6fjWS1C6MVI0C3FkOm%2F6dtuIePI5MxDlxzDhoKpiM7vN%2FQNBnIANulQqQolaDpuUTzhmStPYt17YRWIZ3zHxi%2BIbAmYVqc3SZIREVvFsi%2FlA3hI3ArvmBGWvBR4a87s4ccn%2FSXWOhRK7aO4WG7IrWew5Am2GB6UOrtyPkSeWWuo3WjJAIWqexDcKA2cZEC0GXVa8Fx7tRBkAMiUeD1SW%2F3emDdueYPl9aI%2BbjPhlyGvEYXB3jSc3PIxdbIjp1zVCnSikNp%2FTgtz4ZkNPnc04YByY%2B1%2Fo3LakokWzwCWHo%2BWp0skXDHDq0Qw2LJyjQz01mqPkgKCkmf7Ploobe00OvONGyJKuKrR2QPJombkPTlPcNEi9Q03oo14P6HqET8WaMytQl%2B4cG1IdgOMt1jlg0HdeKTEvABM%2B22neQNRFbPBH8xOdbqVABJ2FL%2FGR%2F5fbUIw9K21wwY6pgG0t4LOyid8DmooIz1l%2B2hot6vLS1lURc1UGtMuPwDgLWO5zyA3txtSV3S7SCFePiY8TkBvn89QuxUMmFKRt3Zr49sfJcyESLIiVIjmvC%2BqZuDzrMgsX129SRnnU%2BfUD7eNtq85Ljan7Ohl9BGn7d%2BsDAgWTVHuIuhDSK741g0Q7U3InNwNm1ZLkpYFr14C5Pv0Vw3MTum2qWs64O6QZ1a3eMw28QCL&X-Amz-Signature=7099909918f36046da629090874f194f723f688226bafe9a8b87a950821193a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GTVQNJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjv8We5XpnsO7PwnBLr99qT%2BB1th25ua9z2Dz7xL9F2AiBvwAbtB2KWH0jXWy00baYJ7WtkDAxZMld7kiLOMNvXnyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPZ3lfE9UaNgBBxxKtwDnKW76w8PEHSc4LYMslC71k26oJuNoqdQ96JtzpKMdUEmFO68HfMrx1aICjkFUzAsA3lCTmUnJIh8bqcQ9AtgouDb147uCcwjP4NaMryNOC7t%2Fl%2B3trizVBkyBacJ2aqbBAftH2k7S%2Fb4Vnrtq543MjJQqtft%2F%2F%2B1Km9OEZn%2FPKA%2BNjYKFTQIocorR6fjWS1C6MVI0C3FkOm%2F6dtuIePI5MxDlxzDhoKpiM7vN%2FQNBnIANulQqQolaDpuUTzhmStPYt17YRWIZ3zHxi%2BIbAmYVqc3SZIREVvFsi%2FlA3hI3ArvmBGWvBR4a87s4ccn%2FSXWOhRK7aO4WG7IrWew5Am2GB6UOrtyPkSeWWuo3WjJAIWqexDcKA2cZEC0GXVa8Fx7tRBkAMiUeD1SW%2F3emDdueYPl9aI%2BbjPhlyGvEYXB3jSc3PIxdbIjp1zVCnSikNp%2FTgtz4ZkNPnc04YByY%2B1%2Fo3LakokWzwCWHo%2BWp0skXDHDq0Qw2LJyjQz01mqPkgKCkmf7Ploobe00OvONGyJKuKrR2QPJombkPTlPcNEi9Q03oo14P6HqET8WaMytQl%2B4cG1IdgOMt1jlg0HdeKTEvABM%2B22neQNRFbPBH8xOdbqVABJ2FL%2FGR%2F5fbUIw9K21wwY6pgG0t4LOyid8DmooIz1l%2B2hot6vLS1lURc1UGtMuPwDgLWO5zyA3txtSV3S7SCFePiY8TkBvn89QuxUMmFKRt3Zr49sfJcyESLIiVIjmvC%2BqZuDzrMgsX129SRnnU%2BfUD7eNtq85Ljan7Ohl9BGn7d%2BsDAgWTVHuIuhDSK741g0Q7U3InNwNm1ZLkpYFr14C5Pv0Vw3MTum2qWs64O6QZ1a3eMw28QCL&X-Amz-Signature=c8956dafbc16b5e6cebe78104752987ca38499edb2b239e5ec89623c7b56732d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
