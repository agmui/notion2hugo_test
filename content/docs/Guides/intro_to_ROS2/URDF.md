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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBG423BK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSiF8GniRVY4bu2TT8qMTbmCOuPQA8iqWPmUxGEMlaswIgLKuQG3gz42X9WIdcGRTDfzXwFCaoMzRSUHVp1bcQwoQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKbJC7uj%2BfymrO%2FnxCrcA8HVLNVhMZwm%2BiU7%2FQAmpV5KcTgB3sPth%2Bva166z3MzXOpzvvNVAs7PXuHF5AJsCaUgHJR7lA7DcLVzZQTET%2FFJ0ljT6Do4iRCkz%2BhaPMpu%2F1TeiKbXgTgmZY7eizIVIc%2BFoCmNvjAf1k2DAoPjrsBQMZmSpuLhkyW%2BsIjoWPqGR%2B1FoQAI%2BP9RrWQWxfdYbjNlzEYhcX2wQvheYBaFJgSCWLb3CzjD03ukLGP5vtdtx1pzTaw4aJJYG6UypnM4kRe21psI%2B%2BJ9gEmZkA7EUtmOAK8rs%2BA8NYsqPCKn6HgXhvs8vStJ4%2BE3lCbMVSiJJrvBpnlyln4C1TRUrCKnYUXBQvFVqlxSCQShpU5Z6zToxFJ0DDZmvTMEQ9aNZocf24CCsp1Up%2BDM%2BkFPmBThLa34NGr8khJfPsFeytWOSBJLrYua5GGHbFPBCDyoy2aQn%2FHDSLJjw5ZLtQD9TzKBIrtEQBwZ9dIyzGxDITTjgCIM2sw0akqoKbHy%2FnPfOcC6SUUCiilwbxC2d3BHLhXpbRfImYXssA3uCHlopsRF9Q%2FX7RvuAMNyrsURbTALT6Ir7vKa%2FHYQi5QFin22VrIqBtClw8LhO5MqNCKBnnFbMoOFNNimJibUGfvRP2RsxMIjn0cEGOqUB1xcfTwT11bgQya1pvjdnQFe62nQB51zyJ2xbuj1VbUmyRjun%2FHEOPksxI4n9SOMTiIe8LPasmjYf%2BNFUg24QtAxJ3Fa8iyG4GS9YRZlR68O9M3EoHknIkh%2Bwe4dz2y03JmDB2OvknZO%2FPFPhvKhMthk3eQ2Hrh2Vfo0Cv4cBh%2FmxR4DLeEf2WtwXZkAIMjdGeMt0KOSPdRqP0t01KBEw5t8tvxKo&X-Amz-Signature=bf0751fffcfa9b7d89b5aea9ae9e86aad1df54b632fdafa3462f164881fee2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBG423BK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCSiF8GniRVY4bu2TT8qMTbmCOuPQA8iqWPmUxGEMlaswIgLKuQG3gz42X9WIdcGRTDfzXwFCaoMzRSUHVp1bcQwoQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKbJC7uj%2BfymrO%2FnxCrcA8HVLNVhMZwm%2BiU7%2FQAmpV5KcTgB3sPth%2Bva166z3MzXOpzvvNVAs7PXuHF5AJsCaUgHJR7lA7DcLVzZQTET%2FFJ0ljT6Do4iRCkz%2BhaPMpu%2F1TeiKbXgTgmZY7eizIVIc%2BFoCmNvjAf1k2DAoPjrsBQMZmSpuLhkyW%2BsIjoWPqGR%2B1FoQAI%2BP9RrWQWxfdYbjNlzEYhcX2wQvheYBaFJgSCWLb3CzjD03ukLGP5vtdtx1pzTaw4aJJYG6UypnM4kRe21psI%2B%2BJ9gEmZkA7EUtmOAK8rs%2BA8NYsqPCKn6HgXhvs8vStJ4%2BE3lCbMVSiJJrvBpnlyln4C1TRUrCKnYUXBQvFVqlxSCQShpU5Z6zToxFJ0DDZmvTMEQ9aNZocf24CCsp1Up%2BDM%2BkFPmBThLa34NGr8khJfPsFeytWOSBJLrYua5GGHbFPBCDyoy2aQn%2FHDSLJjw5ZLtQD9TzKBIrtEQBwZ9dIyzGxDITTjgCIM2sw0akqoKbHy%2FnPfOcC6SUUCiilwbxC2d3BHLhXpbRfImYXssA3uCHlopsRF9Q%2FX7RvuAMNyrsURbTALT6Ir7vKa%2FHYQi5QFin22VrIqBtClw8LhO5MqNCKBnnFbMoOFNNimJibUGfvRP2RsxMIjn0cEGOqUB1xcfTwT11bgQya1pvjdnQFe62nQB51zyJ2xbuj1VbUmyRjun%2FHEOPksxI4n9SOMTiIe8LPasmjYf%2BNFUg24QtAxJ3Fa8iyG4GS9YRZlR68O9M3EoHknIkh%2Bwe4dz2y03JmDB2OvknZO%2FPFPhvKhMthk3eQ2Hrh2Vfo0Cv4cBh%2FmxR4DLeEf2WtwXZkAIMjdGeMt0KOSPdRqP0t01KBEw5t8tvxKo&X-Amz-Signature=6c1a3e8e62cae7d279f3720900bee1869fd20e34b27b128039e676ddec312a61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
