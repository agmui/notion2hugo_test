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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QN6DTB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCqes%2BMSw8aCvkWpQyuyajWYu2q%2F5%2BliGSW0a4qvbko%2BAIgWWnU2cQDloI1AEWm8HmAsxmSjqtJKElhQrHwcyjK%2B5cq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOugPjFEbnuN9A2b0yrcA%2B8WwEZF%2Beo5n6NX4JCTic%2BG55UiLAjFR4M%2FnufFRMze1ohjTmqIap0CtXDxfS%2BKEnsQTYufidTAOcnFW%2F%2FglRIT2RGC2PfKNUuAbOk80gTzV4UByBXR8UTvxQCncdYl0bww%2B9PdzGHTNTLmfhWLjwYLFahM5lfGv8RNgRObV%2BCpNFma9oH%2F8F7w%2F8RFECb8PANoHz%2BojJsblbsYBdjGVs4h18XT0jNDCXK%2BdcN7PpGzsWqATw3UUBHCvq20gdT1%2BEzBBnIHM7%2B8L74173w7q0Yk7g7sL0xTDfPv%2BMOmNHaMzf2YcbL81NUZbiy%2BACJJw4XTZPQXs95zl0h0dtE7rCw%2FoUIbYZbwtXhrxX5gxtAuhEsgFpMstSXBzJqlxX3TxnDOcGrOByNMEwSC%2F7aUlwSC7jtiHeqlesiLZOnPfavWYaQqA2CUWIen%2FFOXeG9ptza%2FhPN7yMnrFonbUyfFHp0yCdBXVJWj%2BCOb4EtyiPRo%2FuViDU7l%2FzjO7%2BHMkd47fycHX4%2Fe%2BuR2OdetkGQuLi%2FU1Bf2MVJwD8BBNCYcxr0gc0UcNnCBDGbMyL%2F7fCoo59T5N2AIkCPfO7mpHUwVFGWApbyj4yNv7zXSyyjehT%2BnZPi1dmXOJd9g%2B20VMKG9674GOqUBlguTSIHz2zv9WKMlDZAQduQ9JRwHl7YWKGfb6RQ7GT7Di4x7pUEbgZw4NpnfOU7Fu%2BANFNuaSKGfBCQKfyVijMXEl68eiJdH1NLA1bx8RU4zy1M1yFiTAUDRo0YPiALLxRMuZfbro42zaGsPXDC1z8SKX5MUf5cXR%2F6tqclpelCLGumY%2FOVNZgy7NpSlczlG%2Be66rGDasrGbkwLOYjQ%2FR3tx%2BnZm&X-Amz-Signature=fc2ffff89884217bdc4ea617f3a59b0b11a747a3d26ed506cab529344e18ec87&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QN6DTB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCqes%2BMSw8aCvkWpQyuyajWYu2q%2F5%2BliGSW0a4qvbko%2BAIgWWnU2cQDloI1AEWm8HmAsxmSjqtJKElhQrHwcyjK%2B5cq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOugPjFEbnuN9A2b0yrcA%2B8WwEZF%2Beo5n6NX4JCTic%2BG55UiLAjFR4M%2FnufFRMze1ohjTmqIap0CtXDxfS%2BKEnsQTYufidTAOcnFW%2F%2FglRIT2RGC2PfKNUuAbOk80gTzV4UByBXR8UTvxQCncdYl0bww%2B9PdzGHTNTLmfhWLjwYLFahM5lfGv8RNgRObV%2BCpNFma9oH%2F8F7w%2F8RFECb8PANoHz%2BojJsblbsYBdjGVs4h18XT0jNDCXK%2BdcN7PpGzsWqATw3UUBHCvq20gdT1%2BEzBBnIHM7%2B8L74173w7q0Yk7g7sL0xTDfPv%2BMOmNHaMzf2YcbL81NUZbiy%2BACJJw4XTZPQXs95zl0h0dtE7rCw%2FoUIbYZbwtXhrxX5gxtAuhEsgFpMstSXBzJqlxX3TxnDOcGrOByNMEwSC%2F7aUlwSC7jtiHeqlesiLZOnPfavWYaQqA2CUWIen%2FFOXeG9ptza%2FhPN7yMnrFonbUyfFHp0yCdBXVJWj%2BCOb4EtyiPRo%2FuViDU7l%2FzjO7%2BHMkd47fycHX4%2Fe%2BuR2OdetkGQuLi%2FU1Bf2MVJwD8BBNCYcxr0gc0UcNnCBDGbMyL%2F7fCoo59T5N2AIkCPfO7mpHUwVFGWApbyj4yNv7zXSyyjehT%2BnZPi1dmXOJd9g%2B20VMKG9674GOqUBlguTSIHz2zv9WKMlDZAQduQ9JRwHl7YWKGfb6RQ7GT7Di4x7pUEbgZw4NpnfOU7Fu%2BANFNuaSKGfBCQKfyVijMXEl68eiJdH1NLA1bx8RU4zy1M1yFiTAUDRo0YPiALLxRMuZfbro42zaGsPXDC1z8SKX5MUf5cXR%2F6tqclpelCLGumY%2FOVNZgy7NpSlczlG%2Be66rGDasrGbkwLOYjQ%2FR3tx%2BnZm&X-Amz-Signature=259164a57c59b37cc99044334327ce70a51c1dfcb0d02d4fe0ec3cb98e01ecc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
