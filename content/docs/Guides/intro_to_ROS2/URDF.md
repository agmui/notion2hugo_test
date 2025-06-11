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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JB2S4MO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCEvDwWx%2FYZPIyxrDCBxid4tfDMBAozEMhw7xrBjkIHYAIgDDhtnR7atq8fX6WintJ%2B%2B12ozBLD08pYW1RTpTzIDikqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzhATsa9ja3ffgsvCrcA0P8oio1IkSyhAn5NKkPK%2BvmFN0mvUVA1KXeCjtjuyyKzCleNn0qoFNEJtaBB12EtNbIJ74wsT97URgMz%2Fpd7MBQt6ebDz7YqGVnzLkHOQ%2B0gYStnw5Ae343zcjhjtNjuDRbnglOxoDL8XdG7MDkWQWq3jeBSHV95RC1Z4%2Fd9dZrY27txUlrytjLBcPzKDPME2t2Ali7CX2KTlXb%2Fw2fQOa1vIW0PGGNmNpa1z8DdYdnQfjoguyvQzJKGOuhRvfsLTJRkxSFTrOQPgD9aNYk2nGPXy6EaAFchukPutoPmLFVXqqnluUyGpLvBIWic6uFpldvigGeeDIJPiowYpKKgnqhqs7Dk6Qgpb6DMB7mRS89JnYt0rPH8UWFDTtjx1IZJNs5r%2FmO8ID5iYoRoHF%2FspnbxtJN5YSFuazfYOp7%2Fh%2B1wK2J%2Fm0dBEejHiHg3bZgf9uK%2FItTvaWi7AfUT0crxN8dwvEWSgtVdEk2BjY8bGGd%2FH%2BKMzRGOUbpi6DAzrvhuizJr3bci4p7BUU3cxSh9Z6V0J6NYN%2BRZaUt1l9ADdEht6RgaTC9r8ZbzYcafidBJ5tZGGk5f%2B7u%2BVM0nHgyz4K8FxNQFkdZVHhvoUb8eOxhrlZ2eZ8kZPumo%2FX%2FMLWap8IGOqUBUh2JLRiGwbVzhe8rEwjJA3pwECBseEtapNKhvFVMV1uVrHo7yIO0QvBoIpAEwCRFkU%2BKu0nxJiyCLpUutMAFLeGj0AJkMkbjYjZ3cqIP2HipnexvTSHTea7wHtTgvPbcSfWoSBiliZobWYtpW3%2FolDUd33khxztfaixIaxiQujViIfDvfyKThh90ojOvs5BOPhaBMAIUtTx8EduGPBNm5AUKKU4x&X-Amz-Signature=21c7fd3caf973d4b922c6887be7d28d1b681ebbea74ecdefd4e2e9406003b5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JB2S4MO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCEvDwWx%2FYZPIyxrDCBxid4tfDMBAozEMhw7xrBjkIHYAIgDDhtnR7atq8fX6WintJ%2B%2B12ozBLD08pYW1RTpTzIDikqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzhATsa9ja3ffgsvCrcA0P8oio1IkSyhAn5NKkPK%2BvmFN0mvUVA1KXeCjtjuyyKzCleNn0qoFNEJtaBB12EtNbIJ74wsT97URgMz%2Fpd7MBQt6ebDz7YqGVnzLkHOQ%2B0gYStnw5Ae343zcjhjtNjuDRbnglOxoDL8XdG7MDkWQWq3jeBSHV95RC1Z4%2Fd9dZrY27txUlrytjLBcPzKDPME2t2Ali7CX2KTlXb%2Fw2fQOa1vIW0PGGNmNpa1z8DdYdnQfjoguyvQzJKGOuhRvfsLTJRkxSFTrOQPgD9aNYk2nGPXy6EaAFchukPutoPmLFVXqqnluUyGpLvBIWic6uFpldvigGeeDIJPiowYpKKgnqhqs7Dk6Qgpb6DMB7mRS89JnYt0rPH8UWFDTtjx1IZJNs5r%2FmO8ID5iYoRoHF%2FspnbxtJN5YSFuazfYOp7%2Fh%2B1wK2J%2Fm0dBEejHiHg3bZgf9uK%2FItTvaWi7AfUT0crxN8dwvEWSgtVdEk2BjY8bGGd%2FH%2BKMzRGOUbpi6DAzrvhuizJr3bci4p7BUU3cxSh9Z6V0J6NYN%2BRZaUt1l9ADdEht6RgaTC9r8ZbzYcafidBJ5tZGGk5f%2B7u%2BVM0nHgyz4K8FxNQFkdZVHhvoUb8eOxhrlZ2eZ8kZPumo%2FX%2FMLWap8IGOqUBUh2JLRiGwbVzhe8rEwjJA3pwECBseEtapNKhvFVMV1uVrHo7yIO0QvBoIpAEwCRFkU%2BKu0nxJiyCLpUutMAFLeGj0AJkMkbjYjZ3cqIP2HipnexvTSHTea7wHtTgvPbcSfWoSBiliZobWYtpW3%2FolDUd33khxztfaixIaxiQujViIfDvfyKThh90ojOvs5BOPhaBMAIUtTx8EduGPBNm5AUKKU4x&X-Amz-Signature=be0211b92630e96832fe8153b01360142da676999876b4c363151b2d9a627278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
