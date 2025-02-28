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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSYHL3V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUv1QRghJDynOVNxpztuWPrK8wfjHKV7mOIq110ECM%2FQIgF1ueHYIm1Ju5lLijTZVDF9BpYVA%2Bp0lrFd%2FFmOw3v3sqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmgHkh3dxUVbf%2FGeyrcA4436yljZnUU6cEp7SXnWChYBaamph8ItmAsy8A3HNM2dAC%2FDDrZFi%2BCgdfKHCPy5QzlQzcAyqU4RLfyhzjRDyTt8rEz7wYrLrH4gU5qIUZHDnnrxe4HeNHiiC5vhjxmGN05Vmd%2FL1ZNzVsCWGVTi1tVST99ibApLCGDiBzG2eGeFSpd2q5zVJgBJU9tRQbA2fv0%2BsY%2B4GKI%2FUrcXaRk5auwjU1MqRg%2BFOgXT%2FIbRjHyTJe6Rm%2FqODJP4Y4%2BR1evn21rhVqq68DYSW1GfrLerAl3ERVPfn44h3lWd80Rx58vQ1Tl36EoyABxjGGO%2BmrAMKhD2CPX06gKqvrhfAFUR0NpYETfWRstm1TqmtmnOPzgoPO3iSpzPIBbxfET3aQqTD49RLpzm%2BriMRigW33ElE082RcIdKexOOIToUPdRM8iUE7AStah4cOq1XpZyW8duOnxeeBIOnFFX83CgeFOInO%2F67uuftnTgXtLEvPODZy4XgD2qwF%2B7TCiosOheLSGsoPWEagv%2BmuycQDSRA8dvh2gkZ%2BQFWKSZRda8kRbpYqUJfYSvIPzJQ6aPhZe%2B6GOpDW8RHEWNuaEswSODz2Mxmle6eEpETQmO6ggpwrNc%2FwMYLhiTeknJOpRb%2BgMMN2vhb4GOqUBaUB9qbReIpFq6LQ5pDzqjvWBa78LIsIJEr7Jju2MshmFbLBhR4ghx5sDgNFSW00mdJ%2BM1yu1kVa10cnijKMPIk1Ufqyv%2FeiTtu5NUcDwtURhioMOTaYECiDkIztSD5RHzafLjaoAqARKsKA%2BXIEq%2FUlJK%2Fj%2FbZT2RafwwN9dEYuM%2FZiM%2BGGNQMbobHAwxYt%2BifWzfgDmFaKoxJiKZqKZHjjOT7TS&X-Amz-Signature=edc52fd0669b5237de6c35e199b1bf8dc1d72d867a5b055d20b11656387839ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSYHL3V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCUv1QRghJDynOVNxpztuWPrK8wfjHKV7mOIq110ECM%2FQIgF1ueHYIm1Ju5lLijTZVDF9BpYVA%2Bp0lrFd%2FFmOw3v3sqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmgHkh3dxUVbf%2FGeyrcA4436yljZnUU6cEp7SXnWChYBaamph8ItmAsy8A3HNM2dAC%2FDDrZFi%2BCgdfKHCPy5QzlQzcAyqU4RLfyhzjRDyTt8rEz7wYrLrH4gU5qIUZHDnnrxe4HeNHiiC5vhjxmGN05Vmd%2FL1ZNzVsCWGVTi1tVST99ibApLCGDiBzG2eGeFSpd2q5zVJgBJU9tRQbA2fv0%2BsY%2B4GKI%2FUrcXaRk5auwjU1MqRg%2BFOgXT%2FIbRjHyTJe6Rm%2FqODJP4Y4%2BR1evn21rhVqq68DYSW1GfrLerAl3ERVPfn44h3lWd80Rx58vQ1Tl36EoyABxjGGO%2BmrAMKhD2CPX06gKqvrhfAFUR0NpYETfWRstm1TqmtmnOPzgoPO3iSpzPIBbxfET3aQqTD49RLpzm%2BriMRigW33ElE082RcIdKexOOIToUPdRM8iUE7AStah4cOq1XpZyW8duOnxeeBIOnFFX83CgeFOInO%2F67uuftnTgXtLEvPODZy4XgD2qwF%2B7TCiosOheLSGsoPWEagv%2BmuycQDSRA8dvh2gkZ%2BQFWKSZRda8kRbpYqUJfYSvIPzJQ6aPhZe%2B6GOpDW8RHEWNuaEswSODz2Mxmle6eEpETQmO6ggpwrNc%2FwMYLhiTeknJOpRb%2BgMMN2vhb4GOqUBaUB9qbReIpFq6LQ5pDzqjvWBa78LIsIJEr7Jju2MshmFbLBhR4ghx5sDgNFSW00mdJ%2BM1yu1kVa10cnijKMPIk1Ufqyv%2FeiTtu5NUcDwtURhioMOTaYECiDkIztSD5RHzafLjaoAqARKsKA%2BXIEq%2FUlJK%2Fj%2FbZT2RafwwN9dEYuM%2FZiM%2BGGNQMbobHAwxYt%2BifWzfgDmFaKoxJiKZqKZHjjOT7TS&X-Amz-Signature=6011af41d3f255e06e10e4f71eacdd94617ee7dab9a140622b7f5af81b10ac3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
