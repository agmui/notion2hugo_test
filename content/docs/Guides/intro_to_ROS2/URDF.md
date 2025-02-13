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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LHKZ4YP%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApLloyvSApLQO6kysssH4oeA4qYP2Eic6X2HoO1d8sKAiEAvvzGSdWntcCP7QRZM7oOVZW2PGys5yGmO0hwezaLrrcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFr9nanQwVpcvwa6XSrcA7IJKCHtRn0yRN2BW%2BoAjCS7jQOyq%2BBrdrrFNCBa%2BUGWtCBIHAYAhokO6aOMnzaGw6zdP8U1M0dq5CcHHHOLCyLnhSsKqZTo6wetwnXZOQjPNkfXj1g4Gi5vzt%2BuIaJGD79WylhGkFesQ%2BZFuMcgy%2BykgccxRQhc%2Fuw4DdvGRwNDbHblJ8el29%2BfXBP%2FlRARIksYZfX0U8pGQXyE6DCtP4bvos0unfsW0OAl4kVC2vyZUhj9WTPfYVtkyUoeBZ9DUnquWhHbkyhrmlcgw15IffT3G7qGAb7oSiyvDejSlv59K1jqS09ZK5XrTJRWuZ7hZd%2Bq%2F0kvEOAGzJQhyPMC9SM0C6vs7vo4FYATLnSSX2p3vgyJYvO8JHySyZMvxY4PjtbBJz9zgenYlQ04%2FGccKcgcbOe7RIATDTaGFuc7tgZAeqxUiydWYKABJBikA5Xa8srOleS4E2p7nnLjhdOsHl%2BvNhf%2F5AgOE1huie3ukz1HQCoPHlcwanEMxVO6p97vT1nVSXLuguQ1dJaNbVTzVbATGcbSEvrUakGiCgksUKBD69YfaualM74Mdnwcb8k4bMraoW1UhlcZYf1AdSWNdLfuGyumRmXXm%2BiBcLlo0b58G4s%2BZZ7a26VKtffQMKfet70GOqUBrLMO5m%2BzJax%2FrVV3RddA6%2BIV2mo6Etu7vZHTprqHK9uJmpeVl%2Bx%2FYpzkZxo3IV%2FZje9lD%2FWPF%2FZAYcgV9yRkH53MtGVoFonFcp1gN2DZ53YwcEofqMl22Lt6G8XxsnNHwgI64%2BEojiSCexNdgeriqSzZx%2F7ke3536wxu8qml26gl2dT8QOnabj0%2BysLQeWqOf9JKePhFEw6GLFr6gbcycxv6E6Ih&X-Amz-Signature=d7cbc96b0807579959fd9c606a145a66a1e99dae846084bb72b261b76e218427&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LHKZ4YP%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApLloyvSApLQO6kysssH4oeA4qYP2Eic6X2HoO1d8sKAiEAvvzGSdWntcCP7QRZM7oOVZW2PGys5yGmO0hwezaLrrcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFr9nanQwVpcvwa6XSrcA7IJKCHtRn0yRN2BW%2BoAjCS7jQOyq%2BBrdrrFNCBa%2BUGWtCBIHAYAhokO6aOMnzaGw6zdP8U1M0dq5CcHHHOLCyLnhSsKqZTo6wetwnXZOQjPNkfXj1g4Gi5vzt%2BuIaJGD79WylhGkFesQ%2BZFuMcgy%2BykgccxRQhc%2Fuw4DdvGRwNDbHblJ8el29%2BfXBP%2FlRARIksYZfX0U8pGQXyE6DCtP4bvos0unfsW0OAl4kVC2vyZUhj9WTPfYVtkyUoeBZ9DUnquWhHbkyhrmlcgw15IffT3G7qGAb7oSiyvDejSlv59K1jqS09ZK5XrTJRWuZ7hZd%2Bq%2F0kvEOAGzJQhyPMC9SM0C6vs7vo4FYATLnSSX2p3vgyJYvO8JHySyZMvxY4PjtbBJz9zgenYlQ04%2FGccKcgcbOe7RIATDTaGFuc7tgZAeqxUiydWYKABJBikA5Xa8srOleS4E2p7nnLjhdOsHl%2BvNhf%2F5AgOE1huie3ukz1HQCoPHlcwanEMxVO6p97vT1nVSXLuguQ1dJaNbVTzVbATGcbSEvrUakGiCgksUKBD69YfaualM74Mdnwcb8k4bMraoW1UhlcZYf1AdSWNdLfuGyumRmXXm%2BiBcLlo0b58G4s%2BZZ7a26VKtffQMKfet70GOqUBrLMO5m%2BzJax%2FrVV3RddA6%2BIV2mo6Etu7vZHTprqHK9uJmpeVl%2Bx%2FYpzkZxo3IV%2FZje9lD%2FWPF%2FZAYcgV9yRkH53MtGVoFonFcp1gN2DZ53YwcEofqMl22Lt6G8XxsnNHwgI64%2BEojiSCexNdgeriqSzZx%2F7ke3536wxu8qml26gl2dT8QOnabj0%2BysLQeWqOf9JKePhFEw6GLFr6gbcycxv6E6Ih&X-Amz-Signature=a37beb17e74f298c25b248abf352ee304f573ef9112fd4387783d86bc0bcd453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
