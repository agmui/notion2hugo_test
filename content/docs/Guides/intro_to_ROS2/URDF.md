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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO6GKOD%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDjye20uycn5TVnvconnwYtzccFfJ8gIeo%2BBgrO3AS2tAIhAP89Ofmafn44A5u1WtSIYMue6njXdOFinPCQS0UK5CbiKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7t7ZaT6leSeQ%2BS5Mq3APpMqY%2BiUdLOfbgYPvMhD6%2FOAv7SPKuqpjw1vq0MLuI%2BFGOhacHRBlE26%2FcTrf43UzxGFcHn9cOkVDky9F4UKoIiQqUIw%2BpkCfoQrSbzVtmfqgVxlAZZraf4X30d5Hs%2BkPDdGOr78IvjZhtwAyHdpuATBSNV%2BjVpf%2FVKrc9boBB5ABNjWYP%2FQLnim9F4LER7%2B%2B0MJI92a%2BpXcU9yIgmQT26d52IS%2F6MZoSbwbRLgMYcz9Z%2FDrEamwtUWhxWwaM3LBD9JhXHbWhyFBqShIiyaFdM814%2FzXT%2FjSg3SARHjcO32msg%2FZl4pqll1xlcRjB9MR9MJgnyq%2BJyJEaoqhbGOcuqUHt3b3B27TP8jOvkXAq9Z%2FvxTYe3G%2BW5kzF3avsvSyvXwprQa17Lff3S48M0%2B50rr597a7VjyGcPloWKCIVoWiEp8wAJDK4gY6F7RfxWjs97zkahskpNFf7G0qJMkwt1bf7wIS%2BLJFC4huNmJ%2Bqgao53cxG3I7eAx22cR4HsPqoIE9umalb6FGxI3uhrkdofmC2%2BLoEfpTbKT2zqlv4rdr7XeuxxdcTOhw5UyEs5T79cFw6dWJAqnLN0KDaQtBHgYgWTjuEo1EWrqPOp4OE2xNoEzLr7pBXiorxSVjDCx8%2FABjqkATTKfVNBNprYR8acqE3xZ%2Bcg9X6dtPrInFxLL8DmP5Tn0RabqOaV0RvhwBlU%2Bds1ezwyCJhRrQaW4OYSXC4ybtB1F6FfGtfQEyMiVnSx24XE3SxpUffUy%2F%2FU9PTV8KUP58SR45p3iLSDljcHyiJIeLd9MbIFVnVitSxM0vzEtzhRN3JSJqAo0%2Bf%2FMbmgWhRmYzgXhs38YGasJv6Mk1YEBwV37v4u&X-Amz-Signature=89bf89d957e5e9f86718256da5419d1e1784e6801cfe53627571bd01bbea69ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RO6GKOD%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDjye20uycn5TVnvconnwYtzccFfJ8gIeo%2BBgrO3AS2tAIhAP89Ofmafn44A5u1WtSIYMue6njXdOFinPCQS0UK5CbiKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7t7ZaT6leSeQ%2BS5Mq3APpMqY%2BiUdLOfbgYPvMhD6%2FOAv7SPKuqpjw1vq0MLuI%2BFGOhacHRBlE26%2FcTrf43UzxGFcHn9cOkVDky9F4UKoIiQqUIw%2BpkCfoQrSbzVtmfqgVxlAZZraf4X30d5Hs%2BkPDdGOr78IvjZhtwAyHdpuATBSNV%2BjVpf%2FVKrc9boBB5ABNjWYP%2FQLnim9F4LER7%2B%2B0MJI92a%2BpXcU9yIgmQT26d52IS%2F6MZoSbwbRLgMYcz9Z%2FDrEamwtUWhxWwaM3LBD9JhXHbWhyFBqShIiyaFdM814%2FzXT%2FjSg3SARHjcO32msg%2FZl4pqll1xlcRjB9MR9MJgnyq%2BJyJEaoqhbGOcuqUHt3b3B27TP8jOvkXAq9Z%2FvxTYe3G%2BW5kzF3avsvSyvXwprQa17Lff3S48M0%2B50rr597a7VjyGcPloWKCIVoWiEp8wAJDK4gY6F7RfxWjs97zkahskpNFf7G0qJMkwt1bf7wIS%2BLJFC4huNmJ%2Bqgao53cxG3I7eAx22cR4HsPqoIE9umalb6FGxI3uhrkdofmC2%2BLoEfpTbKT2zqlv4rdr7XeuxxdcTOhw5UyEs5T79cFw6dWJAqnLN0KDaQtBHgYgWTjuEo1EWrqPOp4OE2xNoEzLr7pBXiorxSVjDCx8%2FABjqkATTKfVNBNprYR8acqE3xZ%2Bcg9X6dtPrInFxLL8DmP5Tn0RabqOaV0RvhwBlU%2Bds1ezwyCJhRrQaW4OYSXC4ybtB1F6FfGtfQEyMiVnSx24XE3SxpUffUy%2F%2FU9PTV8KUP58SR45p3iLSDljcHyiJIeLd9MbIFVnVitSxM0vzEtzhRN3JSJqAo0%2Bf%2FMbmgWhRmYzgXhs38YGasJv6Mk1YEBwV37v4u&X-Amz-Signature=e7ba93b315543d4f67f13e47895b5e1b68bb42faeb94319d60875ed6e6cc5933&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
