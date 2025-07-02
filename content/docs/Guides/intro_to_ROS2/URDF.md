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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJ46GIP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnbjDfTKkyfUWn8dzf2dtszTKM6Zb2Nphd33uYthOHuAiBmHQI2SjxjKW2%2FJr0AOW8FpoPiP%2FGqyb0ZOzVrup%2B03yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT5zciCGtMcIUl2tWKtwD6yYIHfol%2FuCXprJ3DdXdTEfzjB1noi23siFau5NcmSUo0D0dMAGgQkhuwnbItK7tUml6FACy1WdptjRInt5qOVlF4DkQ8sQ0bzNDB6f44PBW2hO94ELNuzCVOviTpsiDMYqlQo7cV4nIoRKIJCWqEZzOXZ%2Bodl0W38lknd2GJ8nHt5oYziXRIyO3NMeZHXbUmu9Xic0umMCX9lHt4Xrk9U2DOQlvA%2FX5QnkiA%2Bh1MEbwZxUoI0%2FfqkNjTzESMxVkoN5KDj7DcCUi47YeebCszdjREM6xINxuXwGU7q0nw%2FtODxqDIOKWrMGJHPBYFAYFm8oXHvHdTWUnbg%2Bf%2B7NPXnTOVLeiBwLiWPT37ekNcpUnx64sDGypwFeHVHtk01l2Y2d5%2FUYUXXvsL48eCRgjifVhLxgV5LnmThSaa5nnPjqQayWMeZkxh%2BGxifJ2egYu%2Fk7dCkG7Q0Yi%2BFI%2F09ChYjEYWQOWewnujiWloEgBoCucareryu7EnrlqJWkYX6tHsQdVsGIweR52lLX%2F8LnxPK0a0Eru%2F42ZudVzPaV92DjoTQAcIeAbtxePii%2FGGJHeMk1ZwaVDvsqD3P2%2FBkjF9dYnsM%2FLK1YvJ2zPgkGjaPrRDTSL3LYfBYu280gw%2BZOWwwY6pgG3Y%2B%2BF7Ft%2BpipaTl2YMDtZUnL%2F81GKssZ6ttK5EzfJRsRoSn18jUkUyO8DXcKuWNIEPNoXEOqBdUfUQeSzbs%2BRsc14lU8vu9Frtff28ccApGRlDtuuZ%2F1PPPu66dbZdvit%2FxIDX2Bmtg0bEyObbaAzHAXq33QbGPrfA0u%2BYuV%2BLIm6wABLI00mbOGESQrwDs6lIjuVpugFoCw29WI9fzci5aomga9e&X-Amz-Signature=9f8840d6d3af3cdc32e945239a311c83bc51b49266a453098c1fa8e838dd64e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJ46GIP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnbjDfTKkyfUWn8dzf2dtszTKM6Zb2Nphd33uYthOHuAiBmHQI2SjxjKW2%2FJr0AOW8FpoPiP%2FGqyb0ZOzVrup%2B03yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT5zciCGtMcIUl2tWKtwD6yYIHfol%2FuCXprJ3DdXdTEfzjB1noi23siFau5NcmSUo0D0dMAGgQkhuwnbItK7tUml6FACy1WdptjRInt5qOVlF4DkQ8sQ0bzNDB6f44PBW2hO94ELNuzCVOviTpsiDMYqlQo7cV4nIoRKIJCWqEZzOXZ%2Bodl0W38lknd2GJ8nHt5oYziXRIyO3NMeZHXbUmu9Xic0umMCX9lHt4Xrk9U2DOQlvA%2FX5QnkiA%2Bh1MEbwZxUoI0%2FfqkNjTzESMxVkoN5KDj7DcCUi47YeebCszdjREM6xINxuXwGU7q0nw%2FtODxqDIOKWrMGJHPBYFAYFm8oXHvHdTWUnbg%2Bf%2B7NPXnTOVLeiBwLiWPT37ekNcpUnx64sDGypwFeHVHtk01l2Y2d5%2FUYUXXvsL48eCRgjifVhLxgV5LnmThSaa5nnPjqQayWMeZkxh%2BGxifJ2egYu%2Fk7dCkG7Q0Yi%2BFI%2F09ChYjEYWQOWewnujiWloEgBoCucareryu7EnrlqJWkYX6tHsQdVsGIweR52lLX%2F8LnxPK0a0Eru%2F42ZudVzPaV92DjoTQAcIeAbtxePii%2FGGJHeMk1ZwaVDvsqD3P2%2FBkjF9dYnsM%2FLK1YvJ2zPgkGjaPrRDTSL3LYfBYu280gw%2BZOWwwY6pgG3Y%2B%2BF7Ft%2BpipaTl2YMDtZUnL%2F81GKssZ6ttK5EzfJRsRoSn18jUkUyO8DXcKuWNIEPNoXEOqBdUfUQeSzbs%2BRsc14lU8vu9Frtff28ccApGRlDtuuZ%2F1PPPu66dbZdvit%2FxIDX2Bmtg0bEyObbaAzHAXq33QbGPrfA0u%2BYuV%2BLIm6wABLI00mbOGESQrwDs6lIjuVpugFoCw29WI9fzci5aomga9e&X-Amz-Signature=3f2f4fe278b9d1b5beaab4e257a592ae3717fb432c2a558762f277672733c282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
