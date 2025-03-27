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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLNEARIM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIPNjpZSmWF4YanXQuI6iP6IzGrr0oROQFgbzFLhPDOAiBUGYkcnJ5obGtl3KNoFZ7%2B8tvSohL3%2FnB7LEyaLbLE2ir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaqaAnsZ13OE1KPMcKtwDApNrINSB3js2hgIZd2SychRAFUGSxwRHloPUZIcettP4h9zeFeDIudF%2BDx4TE1clrMaB8w5GT5POY%2B8U3Wywwn50cLCpK67j0nlTW6v%2FM8Y3VHdMl9hELNuCOKw9BDhHzBh4m6ANV3FsEJ1tmgazY2HQxB72%2BvfseM0PWHnWmr2GzuIdQUnq%2Fa0mtNowrB7HEcfBon3lvVBMukm6fxj0bFl9K9qTBCYdeLP4I1LzrsDEgb9kYCuhDuHl%2FIZlgkeCPVEXSfN%2BNqMiQzbyO%2FLObHxzemKDb3f5esFDqd3Qj%2Bns0kLVYtzMn2irAo%2FQTwi7kyl6a8rulpMeugBx7Fa8c0CHkLHGQ5kRzdqAdueSYwen69auXo3KgNesjZUvNTYiumDthKYIgRohUC9iUn7buVNfgDuBCjTRFS7hGLQA2mzmF2%2FM4YZXU2VORrcru1LBErQ%2Bef4KQZKtAKg635Pj%2BCbmRuQmYfOZxULv0lQd4yv3hdeiCsbKYpctKgPMPHMO6OF90ehCBFDzFO9Km2B8Gh%2FftHgbIzFnZ4lF5ukRPAd0Fics%2FDvtPg5NT6etxeMpbKr%2FoecmV8tgo2rDJyrtxWYXWFWH6aY1x5mJAL9WXhK%2BEdCuf9msuaXKY58w7aKWvwY6pgG01hzMKdaXhW3jLgBsFoLLS5oC9KIPytAfTF0t%2B1MMTKmMYxPcSTIc2cx59QPOTisNP%2FH4OTqVoAF82klyDEeHdih1t9IJ1uoAIi0uXpwMKMT1gcL%2Br82eek7qcfM3JjTlLEjaP5CtiqkNAecBbfhOEnVRw7%2FPsmSkMfjI5pHkYksBzW930H3DgEBXayrORiTW3aRdfx81AffOaTOOmlKTnRqaOiYA&X-Amz-Signature=82f314df8c2cf59377b3ce9cd84de8c77ffcb4a0bf2fa094fca48160c5c236b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLNEARIM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIPNjpZSmWF4YanXQuI6iP6IzGrr0oROQFgbzFLhPDOAiBUGYkcnJ5obGtl3KNoFZ7%2B8tvSohL3%2FnB7LEyaLbLE2ir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaqaAnsZ13OE1KPMcKtwDApNrINSB3js2hgIZd2SychRAFUGSxwRHloPUZIcettP4h9zeFeDIudF%2BDx4TE1clrMaB8w5GT5POY%2B8U3Wywwn50cLCpK67j0nlTW6v%2FM8Y3VHdMl9hELNuCOKw9BDhHzBh4m6ANV3FsEJ1tmgazY2HQxB72%2BvfseM0PWHnWmr2GzuIdQUnq%2Fa0mtNowrB7HEcfBon3lvVBMukm6fxj0bFl9K9qTBCYdeLP4I1LzrsDEgb9kYCuhDuHl%2FIZlgkeCPVEXSfN%2BNqMiQzbyO%2FLObHxzemKDb3f5esFDqd3Qj%2Bns0kLVYtzMn2irAo%2FQTwi7kyl6a8rulpMeugBx7Fa8c0CHkLHGQ5kRzdqAdueSYwen69auXo3KgNesjZUvNTYiumDthKYIgRohUC9iUn7buVNfgDuBCjTRFS7hGLQA2mzmF2%2FM4YZXU2VORrcru1LBErQ%2Bef4KQZKtAKg635Pj%2BCbmRuQmYfOZxULv0lQd4yv3hdeiCsbKYpctKgPMPHMO6OF90ehCBFDzFO9Km2B8Gh%2FftHgbIzFnZ4lF5ukRPAd0Fics%2FDvtPg5NT6etxeMpbKr%2FoecmV8tgo2rDJyrtxWYXWFWH6aY1x5mJAL9WXhK%2BEdCuf9msuaXKY58w7aKWvwY6pgG01hzMKdaXhW3jLgBsFoLLS5oC9KIPytAfTF0t%2B1MMTKmMYxPcSTIc2cx59QPOTisNP%2FH4OTqVoAF82klyDEeHdih1t9IJ1uoAIi0uXpwMKMT1gcL%2Br82eek7qcfM3JjTlLEjaP5CtiqkNAecBbfhOEnVRw7%2FPsmSkMfjI5pHkYksBzW930H3DgEBXayrORiTW3aRdfx81AffOaTOOmlKTnRqaOiYA&X-Amz-Signature=820e3f996edf4fea2680f65e27b8d6c29095f83e55278ef09d623a8ef083831c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
