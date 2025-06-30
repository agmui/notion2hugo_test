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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUXX562Y%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnbc6odY1IL0V%2Bni0g2sBbTEF%2BgfxbX3lMa%2F2vqgVm8QIgfQjBhpi3CbP2SHITAmMoVSGzLviwT9qcdT%2FOEVplQmUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3zRXpVRZWvBbZfFCrcA17nWgqIIK%2FywRcjQoUMFPu1JTID0GoM9emNSmnIAVFD6%2B1vwQCTZ445vDrXEn8ydTpTsGGyjiKZ7ZqU1AZUolYN6x9zDpgNNoeh5G6SVdyOeeAr5GrZuzHE7QdtwSENEzYqXg9%2B9SnucgRMTxChigJh27sSdOnS0PnuhR4gH9Hf8%2BH792IPYCGLcrG4sXf3OUbQ3QVVCRjQQEp3Wt0K5mJ5dW%2BxDhvh0312RaYmnzuYQ91IahVg29iKXmUvN08RtdKwkLyQ5ryK3a2ICVy3%2BEa%2F02ypnyEuKntFgrQdHyywQlM5kb0etkALjk8%2BorwZiqAKsvxvNHlHnykHQf3kQU8potXTULu0is8V6bwgRqA98HDLD3%2F4asxMCBW4dz%2FersDOhziCPErBFf1t4GhVQHCWNhg%2FtUPzUzBjyrwYoyMyViYO6tgPt4BGWCTnXjt1hjKzkrVFrLjWBd4qXHc9rUgWPDBQe8F3eaf8VvYhZNHHUGCTk0iBWUhf9FT0JGa6gczC9tVWGuo9pM0Z126LvcLZtot217ZuuZmgtHYlYBgTrudrFsBOdjDZOo%2BRZp6e3suASsbffbQLbZC761%2BJ7UzRKEVUoKDczdg5u5O9r%2FRw7eDfQT09E4V61IY7MITmh8MGOqUBj7XAnKxx6zxQ0YmVbP51yMx7FZz%2BMlxT33zN0uihphVxzvTd94JCfwRyI8G4%2B%2Frvg7xvZy9q3U%2BOjvlqRuyVxO%2FFTKHpkPFZSP1Xwwc3IgP2H%2Bx3p%2Bys%2B8k5YjQxWyzR6w3Ym9gGJJXAO2H3W07514LFMbuBondOgGCuzis8BaqaZrOeSvAzujBweZLSM8yGTnvcxH23WFASW%2ByMvLARA%2BxYJWSS&X-Amz-Signature=5f3669cee83182dcbd131f7f991795c60e6fd8fcc14228c529a7282631a43e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUXX562Y%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnbc6odY1IL0V%2Bni0g2sBbTEF%2BgfxbX3lMa%2F2vqgVm8QIgfQjBhpi3CbP2SHITAmMoVSGzLviwT9qcdT%2FOEVplQmUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3zRXpVRZWvBbZfFCrcA17nWgqIIK%2FywRcjQoUMFPu1JTID0GoM9emNSmnIAVFD6%2B1vwQCTZ445vDrXEn8ydTpTsGGyjiKZ7ZqU1AZUolYN6x9zDpgNNoeh5G6SVdyOeeAr5GrZuzHE7QdtwSENEzYqXg9%2B9SnucgRMTxChigJh27sSdOnS0PnuhR4gH9Hf8%2BH792IPYCGLcrG4sXf3OUbQ3QVVCRjQQEp3Wt0K5mJ5dW%2BxDhvh0312RaYmnzuYQ91IahVg29iKXmUvN08RtdKwkLyQ5ryK3a2ICVy3%2BEa%2F02ypnyEuKntFgrQdHyywQlM5kb0etkALjk8%2BorwZiqAKsvxvNHlHnykHQf3kQU8potXTULu0is8V6bwgRqA98HDLD3%2F4asxMCBW4dz%2FersDOhziCPErBFf1t4GhVQHCWNhg%2FtUPzUzBjyrwYoyMyViYO6tgPt4BGWCTnXjt1hjKzkrVFrLjWBd4qXHc9rUgWPDBQe8F3eaf8VvYhZNHHUGCTk0iBWUhf9FT0JGa6gczC9tVWGuo9pM0Z126LvcLZtot217ZuuZmgtHYlYBgTrudrFsBOdjDZOo%2BRZp6e3suASsbffbQLbZC761%2BJ7UzRKEVUoKDczdg5u5O9r%2FRw7eDfQT09E4V61IY7MITmh8MGOqUBj7XAnKxx6zxQ0YmVbP51yMx7FZz%2BMlxT33zN0uihphVxzvTd94JCfwRyI8G4%2B%2Frvg7xvZy9q3U%2BOjvlqRuyVxO%2FFTKHpkPFZSP1Xwwc3IgP2H%2Bx3p%2Bys%2B8k5YjQxWyzR6w3Ym9gGJJXAO2H3W07514LFMbuBondOgGCuzis8BaqaZrOeSvAzujBweZLSM8yGTnvcxH23WFASW%2ByMvLARA%2BxYJWSS&X-Amz-Signature=aba97418fee08d4e98e621bf2ef9224f43f22a2fd9369d0aa6ef429bf43a120f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
