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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4MJZ6L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBe8R6malcTX90qz9s0Atf2DVBoZMBS3ebYuKM3dYZEwIgVyOW2WT%2FDVbCe%2BEzLWivmsIliaz%2FOkJ04KFJ%2FTjrFkgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuWqBOAbIqt5%2BleircA8iLBWrkBihxwCgvYndvnjMb8gsRH%2BxcCSsbbBhwOkqGV%2BGEyQT0PgXt53jSuYyM9Yl1AMJWW9HWfLbnNgtF8ufzZOl04i1iRkeQh3qhqc1g4TDrCHEJYRinPtuwzylYS4ru9jSF8J8aBCf6xK5S2ueeVdDqVhFzpXraZ6KqDZHMZKxxNqpb0D3RhAJtOQDz7fyKxbt%2BPQkEZMDlWrztwimOSXH1HL1m%2FTYg4Vg4GU8fIGbYu9L0cl8usSgQoSE7bZJnW6rqajR7ZQenon%2Bwt7yn6PhMmjz0QuqE9pwjlGeTBgjh7AjbUUdeMSEM9S%2FUfAf1MyhZ2xxNr1RgrD3xKeke%2BD70vEamA6okl2l6gMx9iv6iK1A1Uau41xU1RQQzf%2BY6aaZl%2F6qFrdW74p0UQ33NoMU5WT%2BE2I7JntFSm%2F9zRZwhVKHU1hs%2F%2BCJ%2BJmjTZNXmb6xVBNuv00tM6dXNpCnvnjXTxMuJ58RHS4jIBBbVio4QUNVfn3R7xxmnxQHYx2dyxQN2pT%2FswyNl992xON%2BoqBY%2BthdL%2B6SEP%2FRApSJ%2BsAOFntcPQ95Vcyj3eWAfmWnpKcy0q%2FjHSOMMgVscKzHA%2F8egk%2BbRofeGJzhDyvprU6bK4Ja1gWd4VoL%2BMIfG7MMGOqUBX19JW2E5%2FtW445tw7grjgsLuJ1B%2FxUbZeZ%2BQ5MB3ysJ8LZMvh2d2UCzPlMOPLs7%2ByFKnJF3qoQ6YaWbNelKGxPFqQ8s0zVvaen8P2Pnwwe5MiMzWzZaBrNPPuMC4JeapvEkls4wHqOEr7a0kHI6zMqhkzarO4PMMgelKPDHEHLhJl38m3H%2BBU16om0yOdTBsHIlDgR7ETqjyRTxzQx4yd%2FHj3n3G&X-Amz-Signature=a783b1212b49805e03f326ab290010e4f11f26d5adcca5bb21e8a825bb5f5f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4MJZ6L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBe8R6malcTX90qz9s0Atf2DVBoZMBS3ebYuKM3dYZEwIgVyOW2WT%2FDVbCe%2BEzLWivmsIliaz%2FOkJ04KFJ%2FTjrFkgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuWqBOAbIqt5%2BleircA8iLBWrkBihxwCgvYndvnjMb8gsRH%2BxcCSsbbBhwOkqGV%2BGEyQT0PgXt53jSuYyM9Yl1AMJWW9HWfLbnNgtF8ufzZOl04i1iRkeQh3qhqc1g4TDrCHEJYRinPtuwzylYS4ru9jSF8J8aBCf6xK5S2ueeVdDqVhFzpXraZ6KqDZHMZKxxNqpb0D3RhAJtOQDz7fyKxbt%2BPQkEZMDlWrztwimOSXH1HL1m%2FTYg4Vg4GU8fIGbYu9L0cl8usSgQoSE7bZJnW6rqajR7ZQenon%2Bwt7yn6PhMmjz0QuqE9pwjlGeTBgjh7AjbUUdeMSEM9S%2FUfAf1MyhZ2xxNr1RgrD3xKeke%2BD70vEamA6okl2l6gMx9iv6iK1A1Uau41xU1RQQzf%2BY6aaZl%2F6qFrdW74p0UQ33NoMU5WT%2BE2I7JntFSm%2F9zRZwhVKHU1hs%2F%2BCJ%2BJmjTZNXmb6xVBNuv00tM6dXNpCnvnjXTxMuJ58RHS4jIBBbVio4QUNVfn3R7xxmnxQHYx2dyxQN2pT%2FswyNl992xON%2BoqBY%2BthdL%2B6SEP%2FRApSJ%2BsAOFntcPQ95Vcyj3eWAfmWnpKcy0q%2FjHSOMMgVscKzHA%2F8egk%2BbRofeGJzhDyvprU6bK4Ja1gWd4VoL%2BMIfG7MMGOqUBX19JW2E5%2FtW445tw7grjgsLuJ1B%2FxUbZeZ%2BQ5MB3ysJ8LZMvh2d2UCzPlMOPLs7%2ByFKnJF3qoQ6YaWbNelKGxPFqQ8s0zVvaen8P2Pnwwe5MiMzWzZaBrNPPuMC4JeapvEkls4wHqOEr7a0kHI6zMqhkzarO4PMMgelKPDHEHLhJl38m3H%2BBU16om0yOdTBsHIlDgR7ETqjyRTxzQx4yd%2FHj3n3G&X-Amz-Signature=1630d9ad785206832f075223dbafa732eb1b595617a113243135789ac4ffcbf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
