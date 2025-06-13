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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO27YAED%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDz2KwPQZXwwqWp%2BpkVd0Nan9v7LjaWfk464m6Lp%2FklvAiB%2Fvqm5X57BTSQKCmfI1jCBdsHUefjWnWK0W3mAFx95ESr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMnFEyl4gBCSPN8RaLKtwDO5JEPF9B5RNV0FDLzo7lfB0VLJr2qhjInlhz98%2BgPkIGOho0HY4SgoSDrQqBpfjcfAL4ZYvrjcvRVLawSeievt8nzxg%2BZEX6tEgseI3pYFEbtZa2PgY4naGHu8guFoAMVJ9Rc%2F%2BATJaQTddtG2u1j9jvLtwl29e6FEpw%2FrOxg6eS9FQjEOpRMayY91AGOahbTgd9torZSI1CdnBvgm8rSlSu22TL1OfDVPk5VMexDuKWDeBPT8IFs%2BKtFo%2B207dhyN9N3bfE7oOq6I%2B8OIUiCGBWwwTA19Yar9zstzh%2F0F0FBtq%2B19Ko4x%2FT%2FEE%2FY0n9bg7bo8nnqvgp%2BXVlAKnPyeK00nC6ZIORo7KRgLX6e9Re4ICpTWzcZri7bgaA48r48ZdD4vwi91dsiZn4pAm73aiykxzJWGb%2F%2B0sgaSKj%2B3%2FU0UTIo%2Bntw6GnRDdovy3NyjFP9mJc02GX0tX5r%2BrxVWwH1TOesgJByzdEjNqbITn%2FUbM0ZYYE3iXJ1Yv5zDB%2BDNJt6ZWGHzVVray%2BBNerGee7tONHTOc%2BDfiDaKWIy%2FvtAs3mTIzYNVDR36o%2BFXDfdVVokmrK0MIar7jd1EkMWtyUZVtBqnI%2BW0ZKYis8rMdh2QG6UkPZ6knHPc0w8pKywgY6pgGn0e75vpD7vRmvAT1uTTHS%2BbJGHnTJx6ZITpIJghFYQ%2FG3QGsZ%2FNO%2Bw%2BJlzHxTbh1IGe%2BeX4156t%2FCN2M07SXg0rjCkP%2BRm5IDZy4CDL%2Fde7cEcXuXRihXO7wvQUu3RqciLiIXlEG7k9Uf21hzGOb2HNqLwUh5o1TclJDDNRKh7f7bjFRbZtXj8KznAcE3a%2BLCqwZpkLs8ESDoTBhes37HWPSQEVRS&X-Amz-Signature=877baa48c7dacac634180aa8f58931c8e8e57e0edecc221ffc1797636473ea97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO27YAED%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDz2KwPQZXwwqWp%2BpkVd0Nan9v7LjaWfk464m6Lp%2FklvAiB%2Fvqm5X57BTSQKCmfI1jCBdsHUefjWnWK0W3mAFx95ESr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMnFEyl4gBCSPN8RaLKtwDO5JEPF9B5RNV0FDLzo7lfB0VLJr2qhjInlhz98%2BgPkIGOho0HY4SgoSDrQqBpfjcfAL4ZYvrjcvRVLawSeievt8nzxg%2BZEX6tEgseI3pYFEbtZa2PgY4naGHu8guFoAMVJ9Rc%2F%2BATJaQTddtG2u1j9jvLtwl29e6FEpw%2FrOxg6eS9FQjEOpRMayY91AGOahbTgd9torZSI1CdnBvgm8rSlSu22TL1OfDVPk5VMexDuKWDeBPT8IFs%2BKtFo%2B207dhyN9N3bfE7oOq6I%2B8OIUiCGBWwwTA19Yar9zstzh%2F0F0FBtq%2B19Ko4x%2FT%2FEE%2FY0n9bg7bo8nnqvgp%2BXVlAKnPyeK00nC6ZIORo7KRgLX6e9Re4ICpTWzcZri7bgaA48r48ZdD4vwi91dsiZn4pAm73aiykxzJWGb%2F%2B0sgaSKj%2B3%2FU0UTIo%2Bntw6GnRDdovy3NyjFP9mJc02GX0tX5r%2BrxVWwH1TOesgJByzdEjNqbITn%2FUbM0ZYYE3iXJ1Yv5zDB%2BDNJt6ZWGHzVVray%2BBNerGee7tONHTOc%2BDfiDaKWIy%2FvtAs3mTIzYNVDR36o%2BFXDfdVVokmrK0MIar7jd1EkMWtyUZVtBqnI%2BW0ZKYis8rMdh2QG6UkPZ6knHPc0w8pKywgY6pgGn0e75vpD7vRmvAT1uTTHS%2BbJGHnTJx6ZITpIJghFYQ%2FG3QGsZ%2FNO%2Bw%2BJlzHxTbh1IGe%2BeX4156t%2FCN2M07SXg0rjCkP%2BRm5IDZy4CDL%2Fde7cEcXuXRihXO7wvQUu3RqciLiIXlEG7k9Uf21hzGOb2HNqLwUh5o1TclJDDNRKh7f7bjFRbZtXj8KznAcE3a%2BLCqwZpkLs8ESDoTBhes37HWPSQEVRS&X-Amz-Signature=e1ada2f6ed344f812e9405455eaef3c966a7d6bf7a2ff538186ddab0b8a9cf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
