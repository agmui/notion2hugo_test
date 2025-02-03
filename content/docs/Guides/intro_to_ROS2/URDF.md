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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3T32L7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDeHqtIXRrUnKt%2BmEqMf%2B9%2Bh8Pds%2FwEnWTCUc%2FLJBRacAiEAvd9vVS8ezRICh1KqYamVcmFL%2FoHBuI7RJVDSrdgEteMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGc9uFuI9ZV0pEsvVircAxz1wyozOynqZ%2B26jJfxFe5ibR2nBynei%2FGnuHMZHuznc7FW166tzpsL%2FZs3Huy%2FDThL75xeRzUzxHT60UYe7gGLJbBgWvqeR4A9RxP980I1J5Txb5ZlYnIbh1NY1yQyWKFttxAxmP2wok3OXdMuDt4HUaZahQ1mSg9%2Bk%2B4s40dKzGOhNwZeUArTm%2B%2Bb%2B3bQ1AXgxh%2FMwPo%2FsDXMWaptK9W6tKYi6IrsvsQZg79qblvzJbFt%2B4PAqEfEyyyczd7ac%2BSjWlo5%2FaIUhvQPqM3iKUJRh4CVSEUaatTSrpQP3a%2BKQFgYXojOlBenEdsSU%2BIohGzMxnWXsAeOVIvrhyOQarN91w7pD5kBkXKGw1iuGGT6cgKCGhlBXEjnwV3SbjrYA6R3cpqPy%2FZXFgqbl%2BKas0U6A4F1C2amIbe4ELRgfMov19lViLd7R67RY9jnqIOVI5AC5FvFn%2F8BDqebkju3yFff9vl5zX7o%2Ft0o09Bqm%2BSQKFbP0k%2F7%2FkvHDCheEcA0kJjqPr6%2BGOsTJFIt5Rb3r6eq1R51i0EDfp9UhmXBiQWwNk4fORIXouuCV8fAMAixeErevS7Rogke%2Fj7T1AL59BhWr1Megdp3NquYYG5xMggq0kgz0xl8r6%2Bw91r6MKCihL0GOqUBEdVwqxoz%2F9deS6AY39bVsx9WMAdzR5KFqtGe1TJ%2FC9E96ITY9tnCfto7XxobXWZWIYSX8i38sqh7VOpR%2FMwIJlzMrJRvVX02BBvasFmXOWrrkCVyBF8AHuBojh6TnV10ST0rg4b7QCb7j1tCwJHGHCGBe3PPY4p4V04U%2B6y1waVMCoNH3KC%2FRJLwykNwiWCe38Si8nWDF9EkpaTWpLqLSAe23WE%2F&X-Amz-Signature=1b563c0c404c82ead4218341566bf6e2444d7f403112fe85a5c4b240bf0fdd01&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3T32L7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDeHqtIXRrUnKt%2BmEqMf%2B9%2Bh8Pds%2FwEnWTCUc%2FLJBRacAiEAvd9vVS8ezRICh1KqYamVcmFL%2FoHBuI7RJVDSrdgEteMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGc9uFuI9ZV0pEsvVircAxz1wyozOynqZ%2B26jJfxFe5ibR2nBynei%2FGnuHMZHuznc7FW166tzpsL%2FZs3Huy%2FDThL75xeRzUzxHT60UYe7gGLJbBgWvqeR4A9RxP980I1J5Txb5ZlYnIbh1NY1yQyWKFttxAxmP2wok3OXdMuDt4HUaZahQ1mSg9%2Bk%2B4s40dKzGOhNwZeUArTm%2B%2Bb%2B3bQ1AXgxh%2FMwPo%2FsDXMWaptK9W6tKYi6IrsvsQZg79qblvzJbFt%2B4PAqEfEyyyczd7ac%2BSjWlo5%2FaIUhvQPqM3iKUJRh4CVSEUaatTSrpQP3a%2BKQFgYXojOlBenEdsSU%2BIohGzMxnWXsAeOVIvrhyOQarN91w7pD5kBkXKGw1iuGGT6cgKCGhlBXEjnwV3SbjrYA6R3cpqPy%2FZXFgqbl%2BKas0U6A4F1C2amIbe4ELRgfMov19lViLd7R67RY9jnqIOVI5AC5FvFn%2F8BDqebkju3yFff9vl5zX7o%2Ft0o09Bqm%2BSQKFbP0k%2F7%2FkvHDCheEcA0kJjqPr6%2BGOsTJFIt5Rb3r6eq1R51i0EDfp9UhmXBiQWwNk4fORIXouuCV8fAMAixeErevS7Rogke%2Fj7T1AL59BhWr1Megdp3NquYYG5xMggq0kgz0xl8r6%2Bw91r6MKCihL0GOqUBEdVwqxoz%2F9deS6AY39bVsx9WMAdzR5KFqtGe1TJ%2FC9E96ITY9tnCfto7XxobXWZWIYSX8i38sqh7VOpR%2FMwIJlzMrJRvVX02BBvasFmXOWrrkCVyBF8AHuBojh6TnV10ST0rg4b7QCb7j1tCwJHGHCGBe3PPY4p4V04U%2B6y1waVMCoNH3KC%2FRJLwykNwiWCe38Si8nWDF9EkpaTWpLqLSAe23WE%2F&X-Amz-Signature=85413c6634b6657715cd5f4261fbe309313e1308431989f3b52a7b75d1d66fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
