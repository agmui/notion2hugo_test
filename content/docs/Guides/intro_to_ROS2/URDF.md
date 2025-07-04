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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG3GJGD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIARBYGbdcP%2FXYuLxPUC3VYFwo9sDLG5IeCNEkJEgGChHAiAGIyTNRvke4hpyRwZtSu3LVdNnonZPPonqu9q18FddCSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMANiql%2BnRtDbPkqgiKtwDblBH5ou8x3wVBJEQLtwa%2F29zQj4ogZhPXwzVvdEyyMGTVpFHfR%2FqzsE4icGEbOKV1wI8M3C7Z8l6m9MRaxHXNzv0QNL0EZe6%2FVBfbfN7bhSYS9nrAgNAU8bCriOeEa0fFxsMHkbW6HSB5Cf%2B4HjsoN%2FtkRRqDGgLcbrwjcirjiG0bYYh1El%2Bvnl3qtFZiXwurJI9FkKxjXpGJQACcTKOtmApqkvcdhXMiEP19vs%2FytfTz%2BZFFHkQ0sWdUQ2q6UScKQmIENRaOeLSkbiBOMGYjGyKHWsi9hbOxJ68Mtj7yinjyaMU0I%2BDX3fSukRQsewvy2%2Br%2FLZkpMUBIX9TIb%2F6KI0gMX2%2Fp8jPih8t0Z4wIxlFyTPZI8Rh007%2FfZiQPSNC8ObsJtbgdviGfE%2Bt1x7THHBB6MN0SFjBl96QJSIpDyWG0humwwt7FkbRPzyZ6CMz598nEchlh9kop5kzExqqqbE6WHK5dvCMvLHYt3A%2Blof8oYRguYDW6XU6kSndHamTPcTkWsloRcO3GR6Sfbh1lExJo0V4RDCx08YekTnLaBHuYvEu04Lg8BFyMmFPm51r9zPyQK9AtHPnOy43Icw68fKH%2F11qHBEEl3PH8hKGBpF9P9tRxdihCFbIE2EwnZyfwwY6pgH3wbW0x0kyAnkRA4wfPCEnvMUm0hQ9d4nHktJ1GO0hNSUeVME7Owb10fsJjgjVKxGHOjknQZ5smh0bmNdvz6qBbOowd%2B4zwuYjqmiVqhEhGl4bya7WPImfbR9AjJk%2FwOEaA%2BEX49Kc2ckXIO8gmyUbWEDT5XLtWSDln9lfROaCJd3328W0XEywqAUYFXNvbfoxk6iwuoWDf892m2qGDLQq3Rl67oL1&X-Amz-Signature=aed6374efe5cadbeca3ac3253586d600f695a420b62d9d74272be0cf141b1e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG3GJGD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIARBYGbdcP%2FXYuLxPUC3VYFwo9sDLG5IeCNEkJEgGChHAiAGIyTNRvke4hpyRwZtSu3LVdNnonZPPonqu9q18FddCSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMANiql%2BnRtDbPkqgiKtwDblBH5ou8x3wVBJEQLtwa%2F29zQj4ogZhPXwzVvdEyyMGTVpFHfR%2FqzsE4icGEbOKV1wI8M3C7Z8l6m9MRaxHXNzv0QNL0EZe6%2FVBfbfN7bhSYS9nrAgNAU8bCriOeEa0fFxsMHkbW6HSB5Cf%2B4HjsoN%2FtkRRqDGgLcbrwjcirjiG0bYYh1El%2Bvnl3qtFZiXwurJI9FkKxjXpGJQACcTKOtmApqkvcdhXMiEP19vs%2FytfTz%2BZFFHkQ0sWdUQ2q6UScKQmIENRaOeLSkbiBOMGYjGyKHWsi9hbOxJ68Mtj7yinjyaMU0I%2BDX3fSukRQsewvy2%2Br%2FLZkpMUBIX9TIb%2F6KI0gMX2%2Fp8jPih8t0Z4wIxlFyTPZI8Rh007%2FfZiQPSNC8ObsJtbgdviGfE%2Bt1x7THHBB6MN0SFjBl96QJSIpDyWG0humwwt7FkbRPzyZ6CMz598nEchlh9kop5kzExqqqbE6WHK5dvCMvLHYt3A%2Blof8oYRguYDW6XU6kSndHamTPcTkWsloRcO3GR6Sfbh1lExJo0V4RDCx08YekTnLaBHuYvEu04Lg8BFyMmFPm51r9zPyQK9AtHPnOy43Icw68fKH%2F11qHBEEl3PH8hKGBpF9P9tRxdihCFbIE2EwnZyfwwY6pgH3wbW0x0kyAnkRA4wfPCEnvMUm0hQ9d4nHktJ1GO0hNSUeVME7Owb10fsJjgjVKxGHOjknQZ5smh0bmNdvz6qBbOowd%2B4zwuYjqmiVqhEhGl4bya7WPImfbR9AjJk%2FwOEaA%2BEX49Kc2ckXIO8gmyUbWEDT5XLtWSDln9lfROaCJd3328W0XEywqAUYFXNvbfoxk6iwuoWDf892m2qGDLQq3Rl67oL1&X-Amz-Signature=13c09f4d3391ba3dda953fbef471e17c80b34924daa6a230525b37e20e0e52bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
