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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4URUAB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIE3xpvdZpycmW%2Bh24FNnaEZIjZE%2BTWxTFUBvXvv6%2BEQ1AiBILpyDDQ4eqT1F82DQMDuUjBpPHSqfTIbS0KsCZRqKKyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM3WiEcNt8YGkFSIheKtwDuEey0GfYdqhg26joFpplFkFfJb5u9MW%2BmwKRiifApHGdY6AftRrNhheyn5UZBN7rXYcDFXX7jOd8YzroUKc2T3dnUTZmMWxOrVSXsyK1pQyT52ef2UGGjiJn%2F1ztxbxqYzLFDRfQPQBqHYyDZBCY%2Bl%2F2iqmuR26Zjc4ntg0mtzvCeJH9oTH7xkWBwgOXz17uAWR2FzemC4z53mXtPOFlnfn1EdTypoROHAepVjKOULkx4xLjr5skRIfRjf8xNsTJDWTHK5vB8tC85L8Qnzw%2BrqDu33Tw3tKA9ZZ48ZOkPWNFzYbzf%2F6%2FZZNcSybYb7dctYM2AGWdVYHQaThz6S8aPABJdoo6Ev4X5%2BNjlibUDxM7A0fHRIECC7QQ3UqqqMRG54sbytx4%2F%2BxQtnaYwdz7800E6VD4nRe3mXaZHFax67HBjCdKEM0J3X4Jww9q8ARvdPnll6iF0ZEeM%2BmS96uQpi%2BG9yb5dqcJtV3QxlmUFkQqAedelOOXO9pn7Rp4mE2Gtpkc5r6c%2Fu7Pemn%2FUsyiIAV%2F%2F0XeQ1pv7h%2FnKGZnV2f9PoWzi77zDpjY9tODY8jCYtE%2BJvi90Fwky5p1dcocxzKfn2vYuxvFTpNqG4Y33u4nL6kthRQwc0589uEwseigwwY6pgHgIfGlHQkIqHWvOWq0qS0Nd%2BTm9knwME0Z%2FE0jmXv4MhY%2FAvhigF4CjROEp4uS80zOZB5k7e1SWzvfCMnf9m3hwJXzuR578x7t8fuBCsJWWJXvJbRy4e1OKWoFr59vjlklxHT%2BQrrVvVm3AE7w63iitxvhatPeD9cFimokvqXSOHIwqJpMWZAS%2B8fYVMqeS86OuwEcy8IZjaB6mAOznOxscaPgFSaQ&X-Amz-Signature=1b9e3cfadad353f4d6e92973802c3420c0ced2f20edda11cb5285e33c3039014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4URUAB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIE3xpvdZpycmW%2Bh24FNnaEZIjZE%2BTWxTFUBvXvv6%2BEQ1AiBILpyDDQ4eqT1F82DQMDuUjBpPHSqfTIbS0KsCZRqKKyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM3WiEcNt8YGkFSIheKtwDuEey0GfYdqhg26joFpplFkFfJb5u9MW%2BmwKRiifApHGdY6AftRrNhheyn5UZBN7rXYcDFXX7jOd8YzroUKc2T3dnUTZmMWxOrVSXsyK1pQyT52ef2UGGjiJn%2F1ztxbxqYzLFDRfQPQBqHYyDZBCY%2Bl%2F2iqmuR26Zjc4ntg0mtzvCeJH9oTH7xkWBwgOXz17uAWR2FzemC4z53mXtPOFlnfn1EdTypoROHAepVjKOULkx4xLjr5skRIfRjf8xNsTJDWTHK5vB8tC85L8Qnzw%2BrqDu33Tw3tKA9ZZ48ZOkPWNFzYbzf%2F6%2FZZNcSybYb7dctYM2AGWdVYHQaThz6S8aPABJdoo6Ev4X5%2BNjlibUDxM7A0fHRIECC7QQ3UqqqMRG54sbytx4%2F%2BxQtnaYwdz7800E6VD4nRe3mXaZHFax67HBjCdKEM0J3X4Jww9q8ARvdPnll6iF0ZEeM%2BmS96uQpi%2BG9yb5dqcJtV3QxlmUFkQqAedelOOXO9pn7Rp4mE2Gtpkc5r6c%2Fu7Pemn%2FUsyiIAV%2F%2F0XeQ1pv7h%2FnKGZnV2f9PoWzi77zDpjY9tODY8jCYtE%2BJvi90Fwky5p1dcocxzKfn2vYuxvFTpNqG4Y33u4nL6kthRQwc0589uEwseigwwY6pgHgIfGlHQkIqHWvOWq0qS0Nd%2BTm9knwME0Z%2FE0jmXv4MhY%2FAvhigF4CjROEp4uS80zOZB5k7e1SWzvfCMnf9m3hwJXzuR578x7t8fuBCsJWWJXvJbRy4e1OKWoFr59vjlklxHT%2BQrrVvVm3AE7w63iitxvhatPeD9cFimokvqXSOHIwqJpMWZAS%2B8fYVMqeS86OuwEcy8IZjaB6mAOznOxscaPgFSaQ&X-Amz-Signature=9ee7b458b5921da9b1bb3bf735bdf0621c2b11f09196dc7069d13f37ae63e25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
