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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXJ6BZX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZB3YjKdNxyhpwb9iRgoIEnWHWLhAjtESWCkSzqQelqAIgNShwyrMsqIAoWIAkaCKqv%2Bx3Qv3uwF6QTc9022%2FuwTgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEbe2u2o0JeSOVXJUircAy0qAnNxQn2uzUr9t4p1Z2mvzCE%2FPEceK87LZZgs2PI2tnW8fvwxtu1eQeRYdGmwmReH%2FEFjqmdlJ12VWUgz%2BQRffkdjeQbEt5DXU4nh5ZLnJGrGkcpYh62RXGN4ZM5hi777cgPU0i8Eu2DybipTQKTu0nTVkyvoPBrd14oZmR%2FE6H1digaTskiUJjtW9vVD13WwxVxW7919%2BlwwYYV99POuzks8uSjbzNC4p6JeTjYqYSBnsrt7%2BEWiMMicWTjnRRSisJjmZcVbpL9jKdRgGm8wb3dCC1Dek3a2N%2BLLhGYfzVq8aaVQTEQS5t%2BMKb1A78xmEe6y%2BvSnokYhOslj69tD17wG22HwlGkD5lsvKMlx62JoSsimcI6tt87muEXG07PfWymif2TLYy6uzt0uY2MSgaNfzaRYtfA8uS3oLFUY6mLrfrn2X%2F%2FpsmZJmADu1GUI92ePE52Af%2F8pzRC0mvPQv54XhudMxpLphxoZe7EAR%2FMhzsfHKqxv3nlW8nvnJbdWfAFpvz2Wo1%2BPaJF0X36pyR9XTB7qdeIVnqKrS%2BGGGDAzVwljsZH8YVn4K9a2bylufTvHmr8u202A43%2FFnXYuuwsJy7qN%2FMW9yDgPzIIPATfQ%2BsLCZx3gz44YMIW9%2Bb0GOqUB7YsbXCOUioV6yKLR2tWVvEM7QwE84NkX0gbY7LNAFBp1nXbsVMNgbyFGjkMxdqEILgtjUc0%2FCC1Vm86sB%2FTECfsQ%2FuVzSCSmS6KcbzONiNVQgc%2Ft1KfX2uGljsLOVF%2F1EDw1maI0qj36IK7irVDKXo1VToFJZH%2FFeGamSWWmEYfT03Bga9NFDZAp93%2FBG3kSd8V6Hv4xfedjQ%2F8Dz2BZyv1bd389&X-Amz-Signature=5bedf16b89db21073ad2e8a7df8e1220ca3c99d5a1cb80f2c8d0093f3916e652&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXJ6BZX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZB3YjKdNxyhpwb9iRgoIEnWHWLhAjtESWCkSzqQelqAIgNShwyrMsqIAoWIAkaCKqv%2Bx3Qv3uwF6QTc9022%2FuwTgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEbe2u2o0JeSOVXJUircAy0qAnNxQn2uzUr9t4p1Z2mvzCE%2FPEceK87LZZgs2PI2tnW8fvwxtu1eQeRYdGmwmReH%2FEFjqmdlJ12VWUgz%2BQRffkdjeQbEt5DXU4nh5ZLnJGrGkcpYh62RXGN4ZM5hi777cgPU0i8Eu2DybipTQKTu0nTVkyvoPBrd14oZmR%2FE6H1digaTskiUJjtW9vVD13WwxVxW7919%2BlwwYYV99POuzks8uSjbzNC4p6JeTjYqYSBnsrt7%2BEWiMMicWTjnRRSisJjmZcVbpL9jKdRgGm8wb3dCC1Dek3a2N%2BLLhGYfzVq8aaVQTEQS5t%2BMKb1A78xmEe6y%2BvSnokYhOslj69tD17wG22HwlGkD5lsvKMlx62JoSsimcI6tt87muEXG07PfWymif2TLYy6uzt0uY2MSgaNfzaRYtfA8uS3oLFUY6mLrfrn2X%2F%2FpsmZJmADu1GUI92ePE52Af%2F8pzRC0mvPQv54XhudMxpLphxoZe7EAR%2FMhzsfHKqxv3nlW8nvnJbdWfAFpvz2Wo1%2BPaJF0X36pyR9XTB7qdeIVnqKrS%2BGGGDAzVwljsZH8YVn4K9a2bylufTvHmr8u202A43%2FFnXYuuwsJy7qN%2FMW9yDgPzIIPATfQ%2BsLCZx3gz44YMIW9%2Bb0GOqUB7YsbXCOUioV6yKLR2tWVvEM7QwE84NkX0gbY7LNAFBp1nXbsVMNgbyFGjkMxdqEILgtjUc0%2FCC1Vm86sB%2FTECfsQ%2FuVzSCSmS6KcbzONiNVQgc%2Ft1KfX2uGljsLOVF%2F1EDw1maI0qj36IK7irVDKXo1VToFJZH%2FFeGamSWWmEYfT03Bga9NFDZAp93%2FBG3kSd8V6Hv4xfedjQ%2F8Dz2BZyv1bd389&X-Amz-Signature=e362f85d3117b92d4a9832148186a5495c6f1c1cac931edabba48450701ccdd6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
