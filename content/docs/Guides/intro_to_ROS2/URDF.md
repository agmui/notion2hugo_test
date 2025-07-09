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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FBZMOA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQc536PaTaDOzcc2agckNVT8JZJmbgPtd%2FUkT7LXN25wIgI1cPNfGb4ZQIK5vbNNH7Q8YAWb%2BRCy3btAQ3qFSEG0EqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND1pwq6ws6lap5qZyrcA%2FsAsZ0jyJk3GwDv%2FdQserbUYjnsHZIxazyBHwZljM66jiq6qwgrwpFzWdGOT%2B9GCWC9rbD%2BdPDAjHSmYOmHAYreJrABb7RQhZ0iGP%2FgJ%2FVU2Vm77rkCMTmOjVCTipxvEKn%2BlWlwGMwj%2FNzAlJWdX2yR27B0jPRpbLQBrxPf6fNzPN1fuhzirMLMlCvb%2BsECIL2ZYxploxFgcblX%2B3lVaBL15%2BbG2fZKzfbG%2F0Z4jlsh6GVnN%2B6w%2F27ODV0vbPQb44vF9fEnTBp6wIMzUpHn9Zq5jdiQwaaxWaUgY8YCr%2BoMQVMG9D0QWQEZhlHgRqIop6L5f9vTr9mb2AyCDdz7mg%2FoxcoV2Do7hSoP7%2BEEr6wSzEWt6qLd7U0QLvDMNwOChwVoVtaoR%2FUGVRiAp7o3M3AeDRBrL5bar04xA6%2Fkz6R%2Bg7zBf14e6tiTQspR4AAr7Ty5MfxehIABWTnSOt05V1pfBi59cTJf5gv87iyIlNufpVLdyN4zTDUrWVGH0rOGNsghbAeyF4oCTDZGcEAiQSKsgV%2Feq5Jk9hazazlMJWlB8P%2FJKBcFqSrgfxjAbeqYjUkL0pCD6Ha8SmqilMxKEG8j8%2BDScyXYF%2FjEu6lyioBrMHfIiOUljcUcwcqtMIqbu8MGOqUBdSOg3ilYs5HT2TFhaziGc5j%2BkoM3i1fOXuhg40SizHkLYt3x4XIn7XW7isXRTTqBIdM7%2BOfOO4KmuW9OVUyvDK9rVVGl0QT8Kko8Meho2%2FW58QYd5KiLdvG9lPe1xscfuykK%2BdeoxAeMq0jLXjAauHQX3fiuk%2B6BTDIFOFsQeTvsFsOmfSaQXFBP2owJyNnEFtng3dS40tAdPvBN7JfGrV52nUYu&X-Amz-Signature=d8dee38d6c0ebfc5803f9568d0e6a4a0edad683a5f7b9d8b49c937e295edd966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FBZMOA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQc536PaTaDOzcc2agckNVT8JZJmbgPtd%2FUkT7LXN25wIgI1cPNfGb4ZQIK5vbNNH7Q8YAWb%2BRCy3btAQ3qFSEG0EqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND1pwq6ws6lap5qZyrcA%2FsAsZ0jyJk3GwDv%2FdQserbUYjnsHZIxazyBHwZljM66jiq6qwgrwpFzWdGOT%2B9GCWC9rbD%2BdPDAjHSmYOmHAYreJrABb7RQhZ0iGP%2FgJ%2FVU2Vm77rkCMTmOjVCTipxvEKn%2BlWlwGMwj%2FNzAlJWdX2yR27B0jPRpbLQBrxPf6fNzPN1fuhzirMLMlCvb%2BsECIL2ZYxploxFgcblX%2B3lVaBL15%2BbG2fZKzfbG%2F0Z4jlsh6GVnN%2B6w%2F27ODV0vbPQb44vF9fEnTBp6wIMzUpHn9Zq5jdiQwaaxWaUgY8YCr%2BoMQVMG9D0QWQEZhlHgRqIop6L5f9vTr9mb2AyCDdz7mg%2FoxcoV2Do7hSoP7%2BEEr6wSzEWt6qLd7U0QLvDMNwOChwVoVtaoR%2FUGVRiAp7o3M3AeDRBrL5bar04xA6%2Fkz6R%2Bg7zBf14e6tiTQspR4AAr7Ty5MfxehIABWTnSOt05V1pfBi59cTJf5gv87iyIlNufpVLdyN4zTDUrWVGH0rOGNsghbAeyF4oCTDZGcEAiQSKsgV%2Feq5Jk9hazazlMJWlB8P%2FJKBcFqSrgfxjAbeqYjUkL0pCD6Ha8SmqilMxKEG8j8%2BDScyXYF%2FjEu6lyioBrMHfIiOUljcUcwcqtMIqbu8MGOqUBdSOg3ilYs5HT2TFhaziGc5j%2BkoM3i1fOXuhg40SizHkLYt3x4XIn7XW7isXRTTqBIdM7%2BOfOO4KmuW9OVUyvDK9rVVGl0QT8Kko8Meho2%2FW58QYd5KiLdvG9lPe1xscfuykK%2BdeoxAeMq0jLXjAauHQX3fiuk%2B6BTDIFOFsQeTvsFsOmfSaQXFBP2owJyNnEFtng3dS40tAdPvBN7JfGrV52nUYu&X-Amz-Signature=76b331f68c8ceb06e31a3405d9f49b9869e81b75dad2fe117b97a395600c29c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
