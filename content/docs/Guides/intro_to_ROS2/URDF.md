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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52SSPOP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsOfPm3U%2BmgR0w1iQwq%2B08C936VzLFyffjxxIis6KcSQIgd%2FSGhV0Vu%2F2GcBtCouBOmjKMETUzhfseuj%2BMhptQCFYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfoBGfmJ8cdgI7j0ircA7tqAzTZ1RWUzpbOkCQcGmBZEakZ2bP36w1dBLcdeWbvZA1iWvO8U4qdVKDwq5rGNSvTHQLbyFMRTzVBFUwuGLymeYNG7qFS21W7QKgKsySkZSuTkVtvkOYJ2ZvzE4PNxkRt0oPIrFpG4CozPPbmiiuOE%2Fd2byP8iSuZm5buNOccfGDcaoHcLK7%2BzLv2oxPfzsZ5Rqm%2B%2BNgvQjKYkYRkfQPsJ%2B%2FL%2B2ERCsM3%2BxjyIejsNx5%2By60UZLEvqgPVyXrWTujNmnasGlLSk%2F25m2%2F1EtsMkJ0oeG08V7S9T7THV2xL5qZCVMlZGiu2MSDhWoxx8iiHfu7bZtNe2neBw7tW%2F1LPYELO630a1a5ZAdzZF1vj1Jff5b8sWxZbr3g73waAeoGbH37Cqe6nZgaO7ivoHmQ8y5j9qJpdJiWNlAHruoZhZbiZiJrFKQ9Ov9EBGolhMVK89HLbvJViteUPAktHwQqM7cYkggw9lATUSCKUEXX9dNNjBKkDNURPBYnzYVZJkGeQNSvvUpoEjRrYpzO6ELV4CE7oT4W%2B4pub9P4A5Zr858TDHaiaUFkQjTRj8E2iIuKDR1sEBpudYh%2F%2BbDMIP7wtXXVw%2BmVeMtGC1pRQdvKZGVPpoxMS6%2Bwkjxj4MLzw3b0GOqUBCjNChuc7zDz5FXg5LZviAPpSy2VOxXVAhtDrTP%2FnBHEDAjjsvbJqV%2BKJxT6zc0LICZ0EEjFwDAgn3MlGoM2GDQ3sJieNrhCFhrPLl9IVQwWhUT7E9392raqyQNml9jK8Ik8kB5R9XM2Z0w3wFW4qNSNfVEYe2aGM3Qby%2FzSJWzvk%2Bp7ymIKkjpFloN3P1uXwoM0UPnWWrZmHq5qexiP%2B2umbmU8r&X-Amz-Signature=1d5082723795fdd91197a0d921e8e00439c4eef5e6e00c701ef44353bcf8e9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52SSPOP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsOfPm3U%2BmgR0w1iQwq%2B08C936VzLFyffjxxIis6KcSQIgd%2FSGhV0Vu%2F2GcBtCouBOmjKMETUzhfseuj%2BMhptQCFYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfoBGfmJ8cdgI7j0ircA7tqAzTZ1RWUzpbOkCQcGmBZEakZ2bP36w1dBLcdeWbvZA1iWvO8U4qdVKDwq5rGNSvTHQLbyFMRTzVBFUwuGLymeYNG7qFS21W7QKgKsySkZSuTkVtvkOYJ2ZvzE4PNxkRt0oPIrFpG4CozPPbmiiuOE%2Fd2byP8iSuZm5buNOccfGDcaoHcLK7%2BzLv2oxPfzsZ5Rqm%2B%2BNgvQjKYkYRkfQPsJ%2B%2FL%2B2ERCsM3%2BxjyIejsNx5%2By60UZLEvqgPVyXrWTujNmnasGlLSk%2F25m2%2F1EtsMkJ0oeG08V7S9T7THV2xL5qZCVMlZGiu2MSDhWoxx8iiHfu7bZtNe2neBw7tW%2F1LPYELO630a1a5ZAdzZF1vj1Jff5b8sWxZbr3g73waAeoGbH37Cqe6nZgaO7ivoHmQ8y5j9qJpdJiWNlAHruoZhZbiZiJrFKQ9Ov9EBGolhMVK89HLbvJViteUPAktHwQqM7cYkggw9lATUSCKUEXX9dNNjBKkDNURPBYnzYVZJkGeQNSvvUpoEjRrYpzO6ELV4CE7oT4W%2B4pub9P4A5Zr858TDHaiaUFkQjTRj8E2iIuKDR1sEBpudYh%2F%2BbDMIP7wtXXVw%2BmVeMtGC1pRQdvKZGVPpoxMS6%2Bwkjxj4MLzw3b0GOqUBCjNChuc7zDz5FXg5LZviAPpSy2VOxXVAhtDrTP%2FnBHEDAjjsvbJqV%2BKJxT6zc0LICZ0EEjFwDAgn3MlGoM2GDQ3sJieNrhCFhrPLl9IVQwWhUT7E9392raqyQNml9jK8Ik8kB5R9XM2Z0w3wFW4qNSNfVEYe2aGM3Qby%2FzSJWzvk%2Bp7ymIKkjpFloN3P1uXwoM0UPnWWrZmHq5qexiP%2B2umbmU8r&X-Amz-Signature=ac2a2f2c8a2b333edf809390603ecdd0553621747c7c21e491ab7064fb6cffa3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
