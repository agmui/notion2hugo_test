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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZ7P2Y2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd6qoO%2Fk3rv6nN00W%2B0f%2FEz6ROGpoPQf3Xnf9ddVirkAiEAsrdTTFXhZ1%2BtCktcYt489b4lSdg%2FI1cRfoxwH564s7gq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB5xAGhALE7rMKiRgyrcA9%2BkC%2BSYCkID1%2BCtONcbygBJmKyT9MSpu6b7fFVeCUrfnx%2BiqO79r5qIc1ypwHQw1iUmvQRagD0zupIsnRd0P4vFYJwlDSied1F63yoDBIc0kPZae8YHl2t9fxHnsnXmTDi26995m%2FYp384JC8A2InAtNGhPFDGjRyWuMzgMa%2FVKxbtORKWTDv2j9VPonN1127gFQ4LjscbuMZ2RUEnJdD9tcawon8EwxQX7sWjlFJfx2N476fT3yOFBYxyk%2F3%2FPrkHmj%2FL1DBJV1HwhjKlWB%2BnvfJP8VgG%2Bw4Zirc3DdUEwJiZn%2B33BEQqpdKKp7GnFVPYnNsw%2BGkNT1RALh8Fw3%2FwnuEPWHQDKDhHdi0NI2JwB3BoBcm6JV5F%2B2FevS8q5Ixz0jcKjubZoaWTCIZn4fwTY1CSoP064z09JQdlnMuESya0fNDbwic0IWLJYECRafx75qahAD9MJDLi%2B8z69YGf52w1%2B%2FF0RBOlJ2qKdhXGXhWelvYQyffSVw0nx7vZ7RoY5lHmuguhpZWoEua0shhdsfyeLap7jzfW6DrbeQ%2Bt%2FYwhbjf2ie2J6%2ByIkYdhGMQKChyczS7c%2BD5hQt5jPTe%2FxHtEAEmkWrW5rEtwGZ85P6rJqQDmCAnYRx7ecMIeMw8IGOqUBPRVK8y8ANxF29lr8d7nvCJ8zLPn9%2FeDLxrqoYpUwrYwd%2F4E%2FZGM9bLbpfJNHBotxSWC2y4yyantLC1q16m440LFBHSi10kBu2tN5BsGIsoYmCUNAxM1q33QwqjsIzH7FEsxfYLoERYWMqnJS%2BsKIQjuzEKjAsZ6u9E31lufRzdjsfXK8Y7I4674ScLyWTxAb6%2Fnnd2dMtgruDGcUQz1BFAdZ1Sbs&X-Amz-Signature=e49756e04a4b88958ca844c5373c4918f49a445503b010c58d3b47abf0111e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZ7P2Y2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd6qoO%2Fk3rv6nN00W%2B0f%2FEz6ROGpoPQf3Xnf9ddVirkAiEAsrdTTFXhZ1%2BtCktcYt489b4lSdg%2FI1cRfoxwH564s7gq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB5xAGhALE7rMKiRgyrcA9%2BkC%2BSYCkID1%2BCtONcbygBJmKyT9MSpu6b7fFVeCUrfnx%2BiqO79r5qIc1ypwHQw1iUmvQRagD0zupIsnRd0P4vFYJwlDSied1F63yoDBIc0kPZae8YHl2t9fxHnsnXmTDi26995m%2FYp384JC8A2InAtNGhPFDGjRyWuMzgMa%2FVKxbtORKWTDv2j9VPonN1127gFQ4LjscbuMZ2RUEnJdD9tcawon8EwxQX7sWjlFJfx2N476fT3yOFBYxyk%2F3%2FPrkHmj%2FL1DBJV1HwhjKlWB%2BnvfJP8VgG%2Bw4Zirc3DdUEwJiZn%2B33BEQqpdKKp7GnFVPYnNsw%2BGkNT1RALh8Fw3%2FwnuEPWHQDKDhHdi0NI2JwB3BoBcm6JV5F%2B2FevS8q5Ixz0jcKjubZoaWTCIZn4fwTY1CSoP064z09JQdlnMuESya0fNDbwic0IWLJYECRafx75qahAD9MJDLi%2B8z69YGf52w1%2B%2FF0RBOlJ2qKdhXGXhWelvYQyffSVw0nx7vZ7RoY5lHmuguhpZWoEua0shhdsfyeLap7jzfW6DrbeQ%2Bt%2FYwhbjf2ie2J6%2ByIkYdhGMQKChyczS7c%2BD5hQt5jPTe%2FxHtEAEmkWrW5rEtwGZ85P6rJqQDmCAnYRx7ecMIeMw8IGOqUBPRVK8y8ANxF29lr8d7nvCJ8zLPn9%2FeDLxrqoYpUwrYwd%2F4E%2FZGM9bLbpfJNHBotxSWC2y4yyantLC1q16m440LFBHSi10kBu2tN5BsGIsoYmCUNAxM1q33QwqjsIzH7FEsxfYLoERYWMqnJS%2BsKIQjuzEKjAsZ6u9E31lufRzdjsfXK8Y7I4674ScLyWTxAb6%2Fnnd2dMtgruDGcUQz1BFAdZ1Sbs&X-Amz-Signature=9daf12af01b0824f6a54e499ea4c1cfc352ed8f9d57a0a7c745be4f8e678b9cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
