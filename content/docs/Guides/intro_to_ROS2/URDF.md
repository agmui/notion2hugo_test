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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHRTHR5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4h%2FnyXH1Vwdghu054w2yILaNFtUn9ZA4Bu%2BzxG5yxPAIhAMzYOmHw3vaI71Saop5va2FUUV5%2FjITEAuZjgpAFyTLgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5vfVI5oruKV9fxtIq3ANy2n0srzV7zJpYbSsxKyR940Wdcj5%2FltaYFuHfNvsF1tOKd9Jntsqq9GwzUqUhMUxfGZOKGHJ0kkKBXaEDvfphnT7osOMmsXioK5j6RAenJTsgA%2FVNrhAt%2Fk6UI0eX3IVLh2yYAsNs5rTfs5zTkOudVvSDGLoUGhU1k9RTjNr9jUytMeDwxK9ep8XlH9lXMixOeyArIJHwOcbhcvoSvSrd4x7pyJZSZNBSZ%2Fk%2BIi%2B1dxgHuwxKtQzy0QoPe2CjavxsLFRl%2BvRdY2yUQswpN2ovY%2FTOsZy5M8h8eXjeUN39m%2FjmQqM9Fma0O4l0fQkRASUMfkY3KJ%2FX0Klo4P1gfkbIRBUkGwF7SAl29CpEwxCdHQWpP0aztwsOYNUfrK8AOlTsZ%2B8JLY8%2FwC01AfavH0iHnWk%2BOC1v691n%2FQNc47KSM2iy%2BGungeIRSRufxjHTJZOcl%2FpZ2f6zeVl%2FTEtiKO7EAbcLlnZ3iKmp07%2Fnq1QERCEQs0FzmP05Qt8fiogN9527%2BdDML0XiYm%2BEAHVyWQAI%2BArhKMHqT4b3E2ypCMwLjuVhCwY6jQH4aDl9WQq98%2Bvs8FLTRPA5%2FwiBeRfD%2FbYBSFf7iJw%2F1C0xX64XOG17wZ88YI0Ot9MkiAsYvzCG6eC%2BBjqkAcQUwI7MeKx%2Fd%2Basnk9Auw0j1AlGTdBRR%2FU1Wd8TP7WkXUz6eegFssaHy0GclLvKoyNCt8K47WT3K7%2BWfxglEFQ1lzptyIhAg1suwa1h%2BjqIP6lQAVU%2BYoJ8rn%2Fuz31%2FuzPiO0ZOAYFQ%2FSy%2BVEIh3vYioO2eZd1oYP6wZzGgtO3qwNa7vhWIb5t4Uoz%2B3tMltqEryq%2BkBCrvj2qSADEe5j4F3txT&X-Amz-Signature=156cc85de344a6dc457249e0db307de8ea494dd19b91d3d2832a4e28289c20da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHRTHR5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4h%2FnyXH1Vwdghu054w2yILaNFtUn9ZA4Bu%2BzxG5yxPAIhAMzYOmHw3vaI71Saop5va2FUUV5%2FjITEAuZjgpAFyTLgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5vfVI5oruKV9fxtIq3ANy2n0srzV7zJpYbSsxKyR940Wdcj5%2FltaYFuHfNvsF1tOKd9Jntsqq9GwzUqUhMUxfGZOKGHJ0kkKBXaEDvfphnT7osOMmsXioK5j6RAenJTsgA%2FVNrhAt%2Fk6UI0eX3IVLh2yYAsNs5rTfs5zTkOudVvSDGLoUGhU1k9RTjNr9jUytMeDwxK9ep8XlH9lXMixOeyArIJHwOcbhcvoSvSrd4x7pyJZSZNBSZ%2Fk%2BIi%2B1dxgHuwxKtQzy0QoPe2CjavxsLFRl%2BvRdY2yUQswpN2ovY%2FTOsZy5M8h8eXjeUN39m%2FjmQqM9Fma0O4l0fQkRASUMfkY3KJ%2FX0Klo4P1gfkbIRBUkGwF7SAl29CpEwxCdHQWpP0aztwsOYNUfrK8AOlTsZ%2B8JLY8%2FwC01AfavH0iHnWk%2BOC1v691n%2FQNc47KSM2iy%2BGungeIRSRufxjHTJZOcl%2FpZ2f6zeVl%2FTEtiKO7EAbcLlnZ3iKmp07%2Fnq1QERCEQs0FzmP05Qt8fiogN9527%2BdDML0XiYm%2BEAHVyWQAI%2BArhKMHqT4b3E2ypCMwLjuVhCwY6jQH4aDl9WQq98%2Bvs8FLTRPA5%2FwiBeRfD%2FbYBSFf7iJw%2F1C0xX64XOG17wZ88YI0Ot9MkiAsYvzCG6eC%2BBjqkAcQUwI7MeKx%2Fd%2Basnk9Auw0j1AlGTdBRR%2FU1Wd8TP7WkXUz6eegFssaHy0GclLvKoyNCt8K47WT3K7%2BWfxglEFQ1lzptyIhAg1suwa1h%2BjqIP6lQAVU%2BYoJ8rn%2Fuz31%2FuzPiO0ZOAYFQ%2FSy%2BVEIh3vYioO2eZd1oYP6wZzGgtO3qwNa7vhWIb5t4Uoz%2B3tMltqEryq%2BkBCrvj2qSADEe5j4F3txT&X-Amz-Signature=27b580d49212c682881a36d1213a2345486af0e02b0080d0af6ae3e37415e991&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
