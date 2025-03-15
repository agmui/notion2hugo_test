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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BOISSP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiDSOhxOsX8G%2FPrkCYaojJkZotyQnK3%2BIvb2j3D8iEvQIga%2FnYFhrJAKSzHxoBMwqlT9bRmeLBPFuMASIXYzMTr10q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDpyGYoEfmg%2B87rEGircAxefdyAXI52ZptpkCBjEalb5%2BePWSmU17cWwrALNa1prZ4255AX9Tcdy6wWSpQ0zaacv2tU4tz1SpWib3jaKAQrH3CLE55%2BGdw%2Fzujc79d%2Bz6KPma2HmNlI%2FgbC%2Fsmf32UmwVT8EsfVyAHGGyVfPMb6bkZyDzIwRgf1bM31BGzCQFy954AEz3jORDqOE0WwtzWUMZKdFRj9OXt5c6QW8c0jdHOwJ3NSY84N2zJ%2Bp5X47eQjj4qUptxeRYEhUgmeuSb9AuXb4JUmC6bgSa5hcK%2F2PhUIGp25RZ6Q5J7fSrhyF5h2P5DuLdhit2rzPqwXjlkAan1S41sSAE62gUi%2BtwxQiEn%2BLYjFwOeraGQS%2Fq9xIKvBP7xjQVWnX9lOmKO8rWiKzW202d%2Bfi7Ujj2ItaRigJlVfKCiR6RkeFGdXYjz9vltKeDB4QsFwFkR8rWrJWdnZ4BC%2BgDbdT5RwHgVfXTK09K9ZaeKOorQnSoZbFhlK7pbEftK5%2FoYHv7D6dtaiz%2FXzmFQnAdghK5locB9kde%2FK14OHHUQTQ12jpGgrXRWq04wPiCfBX58IqGHxl8lqDIyoRcwBr6xXN7%2B8FV%2FPX%2F%2FPkJVSscwB1u6LThO%2FRDhls6N9qctPXOc1rGZQfMKjh1L4GOqUBbex7k8YLt0jS9VSw%2BrA7PeLizErDcuEWpMThlwBeH8RNFSpEzlkFi04Ir7GFUOI%2FjgsDZHQ8FsYerT0EVyTJB5sKrl88lLDJxY5VNa98OwA%2Bxb2tORdGoxJST0G1U4QDr%2BqzZE1ZxI2XOCnXCW2MsAYBCW2gTLlpaC%2BAhIpX69b1ve9yUua9vJyRnTsvhcDqymCxR%2BlSL0L7j1oBObMcxvgYucjl&X-Amz-Signature=060c282de2d1641c37b6e44a533da68e3bdd62697b6c334a7d8c9bfbc374fa06&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BOISSP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiDSOhxOsX8G%2FPrkCYaojJkZotyQnK3%2BIvb2j3D8iEvQIga%2FnYFhrJAKSzHxoBMwqlT9bRmeLBPFuMASIXYzMTr10q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDpyGYoEfmg%2B87rEGircAxefdyAXI52ZptpkCBjEalb5%2BePWSmU17cWwrALNa1prZ4255AX9Tcdy6wWSpQ0zaacv2tU4tz1SpWib3jaKAQrH3CLE55%2BGdw%2Fzujc79d%2Bz6KPma2HmNlI%2FgbC%2Fsmf32UmwVT8EsfVyAHGGyVfPMb6bkZyDzIwRgf1bM31BGzCQFy954AEz3jORDqOE0WwtzWUMZKdFRj9OXt5c6QW8c0jdHOwJ3NSY84N2zJ%2Bp5X47eQjj4qUptxeRYEhUgmeuSb9AuXb4JUmC6bgSa5hcK%2F2PhUIGp25RZ6Q5J7fSrhyF5h2P5DuLdhit2rzPqwXjlkAan1S41sSAE62gUi%2BtwxQiEn%2BLYjFwOeraGQS%2Fq9xIKvBP7xjQVWnX9lOmKO8rWiKzW202d%2Bfi7Ujj2ItaRigJlVfKCiR6RkeFGdXYjz9vltKeDB4QsFwFkR8rWrJWdnZ4BC%2BgDbdT5RwHgVfXTK09K9ZaeKOorQnSoZbFhlK7pbEftK5%2FoYHv7D6dtaiz%2FXzmFQnAdghK5locB9kde%2FK14OHHUQTQ12jpGgrXRWq04wPiCfBX58IqGHxl8lqDIyoRcwBr6xXN7%2B8FV%2FPX%2F%2FPkJVSscwB1u6LThO%2FRDhls6N9qctPXOc1rGZQfMKjh1L4GOqUBbex7k8YLt0jS9VSw%2BrA7PeLizErDcuEWpMThlwBeH8RNFSpEzlkFi04Ir7GFUOI%2FjgsDZHQ8FsYerT0EVyTJB5sKrl88lLDJxY5VNa98OwA%2Bxb2tORdGoxJST0G1U4QDr%2BqzZE1ZxI2XOCnXCW2MsAYBCW2gTLlpaC%2BAhIpX69b1ve9yUua9vJyRnTsvhcDqymCxR%2BlSL0L7j1oBObMcxvgYucjl&X-Amz-Signature=112f09a5cd5eed21789de3df2dd7f084593e52780a5a4ef10fda9e92fa3cf877&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
