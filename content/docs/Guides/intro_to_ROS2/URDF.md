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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4R4WAU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfqlNcAGWGRdPIgZsJQ16uDA%2BJ6nat5ZsTDeq839YTeAiEAxniDKg9HWyjEr5hsnDZe3IBWeOWoMjSv5J3hwMwDy3UqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4AgrY8MiJKCRsuNCrcA580FENctf2gMpQYqF0N31%2Bpn8PFKDWHUJv6TX6mS%2BjEuL3MkQtW%2B6DerzqgEYSGbJ8wB5HlYlSkcMeDGvCwpZFr1rAfU5t%2FzTo1X8vTeyHv1wd7sgblFCnjJT5lyG6s1UDSfMMGBRjp%2FAy%2B3Hx2MT3h4xzwjBgJMh1Y0RK01CTyec%2BOVZz3ZNRWzq8UxFLP6GtfwcaFr1jHWFQc2hbT9AwBLH8JWoDyCAX1vSrapExJwh8EP%2BFIuHZdfHzHjyhWaLrw6LGpjzva5d6kbVPeC9ZF%2F69O5BhM4W%2Bzfq1WCE7hFEYtkRy6cdzfSpxO4tcKSkIh1ZoOO0UWeZyNa7jHMu9TYEfoBhEp9tBaFnWdi3E7J8sH2%2F%2BpucnXsw56yK%2FifwMu2%2Bg2EJ%2Bw2rvqGnqA9umygzyrr1N%2Bds1Mb6CDVcg6RwVS7aV5YAabHfPimmx4LSg3M0eDHk%2F77Pu1%2B8CmLuzw1fy%2FrLNfDiqRRHGsGkKtV9f41jOrco559WpCa6NpFT9qCV6v8YogChJIAjDn8y7iVFKn%2BbceqTVupYCB5%2BUt%2B9OBEnIdAVYDYG3WxbG3SowJlLSWIi59ZX%2B4cVhH%2BphpHBPVdZsRdytfhqgFSLrXm5%2FeWoxaC2P3DseAMLKSh78GOqUBpi6yoL8DNKRDa%2BMjN80ELMsn1ZC3kmQobtBEIZAQ9htKZFI%2BpjLAubx3BWbxGHtMxyTpzKVd20c6aY%2Bq%2FJkTaBkhbYFJhc9ybjHCPkElwG8AEjYyeTPDL%2BUzUoMxfn7wc9zg2FNgOsCjUj%2B8CeJGwClMn0SZRhl4VsUmHwN6f%2FRt1wJRit4oFgYk9b19FZT7r%2Biv4XprNTNh4p0cLfV2CVL3WvZS&X-Amz-Signature=dc94cc71a9fd9118c5ca65459384e2b8f5adb0d5cbc729165cdaefacb91e73e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4R4WAU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfqlNcAGWGRdPIgZsJQ16uDA%2BJ6nat5ZsTDeq839YTeAiEAxniDKg9HWyjEr5hsnDZe3IBWeOWoMjSv5J3hwMwDy3UqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4AgrY8MiJKCRsuNCrcA580FENctf2gMpQYqF0N31%2Bpn8PFKDWHUJv6TX6mS%2BjEuL3MkQtW%2B6DerzqgEYSGbJ8wB5HlYlSkcMeDGvCwpZFr1rAfU5t%2FzTo1X8vTeyHv1wd7sgblFCnjJT5lyG6s1UDSfMMGBRjp%2FAy%2B3Hx2MT3h4xzwjBgJMh1Y0RK01CTyec%2BOVZz3ZNRWzq8UxFLP6GtfwcaFr1jHWFQc2hbT9AwBLH8JWoDyCAX1vSrapExJwh8EP%2BFIuHZdfHzHjyhWaLrw6LGpjzva5d6kbVPeC9ZF%2F69O5BhM4W%2Bzfq1WCE7hFEYtkRy6cdzfSpxO4tcKSkIh1ZoOO0UWeZyNa7jHMu9TYEfoBhEp9tBaFnWdi3E7J8sH2%2F%2BpucnXsw56yK%2FifwMu2%2Bg2EJ%2Bw2rvqGnqA9umygzyrr1N%2Bds1Mb6CDVcg6RwVS7aV5YAabHfPimmx4LSg3M0eDHk%2F77Pu1%2B8CmLuzw1fy%2FrLNfDiqRRHGsGkKtV9f41jOrco559WpCa6NpFT9qCV6v8YogChJIAjDn8y7iVFKn%2BbceqTVupYCB5%2BUt%2B9OBEnIdAVYDYG3WxbG3SowJlLSWIi59ZX%2B4cVhH%2BphpHBPVdZsRdytfhqgFSLrXm5%2FeWoxaC2P3DseAMLKSh78GOqUBpi6yoL8DNKRDa%2BMjN80ELMsn1ZC3kmQobtBEIZAQ9htKZFI%2BpjLAubx3BWbxGHtMxyTpzKVd20c6aY%2Bq%2FJkTaBkhbYFJhc9ybjHCPkElwG8AEjYyeTPDL%2BUzUoMxfn7wc9zg2FNgOsCjUj%2B8CeJGwClMn0SZRhl4VsUmHwN6f%2FRt1wJRit4oFgYk9b19FZT7r%2Biv4XprNTNh4p0cLfV2CVL3WvZS&X-Amz-Signature=3d65b8e483cc2d87119158d0fb0b8a4dbcb887d85a09548587dec30b5adecfb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
