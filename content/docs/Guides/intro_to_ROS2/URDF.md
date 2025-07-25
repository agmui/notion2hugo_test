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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPJEVAD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCITmw%2FUvNNENyqyeAKgLSCFjMK4wajpzuQo6K7WFCqzAIgGWYUbbKsCWIzFqKB0jGXXAZ8%2FHIzTdfMZhlXg42VE5Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOeukYkytPdjVM6USCrcAzfxKgjYbVAllWYFsETaUxSG16NivxZ9HkfgQdF1g349qAkVRjSoLh%2BuHtEGrhFU0Uq0CwBGPFHxGOk2L7HjB4BzeVIsRVXbW6rnMueSfzup%2B0OluUtCUwHCGUWGQ3yuAa6Ses8g5an2AAAtfTG0B4YZaGLqsrDMr3SWXDo68x3SmhoWNvfOkfNquQP%2Fib3MtqSozq0ERL2b6u5Vb6RgAwPwMt1bO0lIydX3jO%2BlGTgzrjVb8ynoqubvHL1v%2FV8BCoLo%2FbPn%2B2vQxEWIQAX5x3PStX0WeYVG1VhzSrMAf%2BLnBjMo4O%2FUZ63HbG00SwEmvSgg7oLnXdsjLHsD3rX9SHfDyiiMPxtFSVSs54QdLx0v2%2FdXHispXwFNt4fBSAnyefSP419ieDyV7B783%2Bn%2BlPuPNNO%2FZ9X0dr%2F22NYvtskNCD4ZcXfXJJ9wErxkpWub2475rClgovVLJlIVQvzJJ4lttEDUaLZz3z2Oykuzr3Uze3xtVaUleMdwEJznWAbqRhT7xgG%2FHGguNblWNqzObTXqnSGj6q%2BT77jiCLZMg9QNJslAJmOr8XG8PQfPXXeLYKryPHqRQTEps7F5EGG%2FazkZiJlwrcm1GaD8lpC7HdFsQCA8iCwyTIDU2GDpMKSHjsQGOqUBmQfGOo%2BrtKv364qJTSPW%2BUdKwQp7jlM9qfIJWlno0NPrJGYNLgiAQMu3C4Hcle70B9Iz%2Fu8NlnxCGbINNRmjQ5JXWnvB6SFg0uLJCOE9GndrHmgXYZ1UitgwSfJv6l0eRELI%2FnWyBjSqdVZCP8WJNOX%2BmaIghREFS7kpO3sKuxONXv5Up4HMnEJZkifDyPC9JKYKXZ5xWVmUhJCEZkmQpvoE6AdD&X-Amz-Signature=566d2c082cfd09896ebd82d2361f075470af8a8cebc4ba62df393744d42de601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPJEVAD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCITmw%2FUvNNENyqyeAKgLSCFjMK4wajpzuQo6K7WFCqzAIgGWYUbbKsCWIzFqKB0jGXXAZ8%2FHIzTdfMZhlXg42VE5Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOeukYkytPdjVM6USCrcAzfxKgjYbVAllWYFsETaUxSG16NivxZ9HkfgQdF1g349qAkVRjSoLh%2BuHtEGrhFU0Uq0CwBGPFHxGOk2L7HjB4BzeVIsRVXbW6rnMueSfzup%2B0OluUtCUwHCGUWGQ3yuAa6Ses8g5an2AAAtfTG0B4YZaGLqsrDMr3SWXDo68x3SmhoWNvfOkfNquQP%2Fib3MtqSozq0ERL2b6u5Vb6RgAwPwMt1bO0lIydX3jO%2BlGTgzrjVb8ynoqubvHL1v%2FV8BCoLo%2FbPn%2B2vQxEWIQAX5x3PStX0WeYVG1VhzSrMAf%2BLnBjMo4O%2FUZ63HbG00SwEmvSgg7oLnXdsjLHsD3rX9SHfDyiiMPxtFSVSs54QdLx0v2%2FdXHispXwFNt4fBSAnyefSP419ieDyV7B783%2Bn%2BlPuPNNO%2FZ9X0dr%2F22NYvtskNCD4ZcXfXJJ9wErxkpWub2475rClgovVLJlIVQvzJJ4lttEDUaLZz3z2Oykuzr3Uze3xtVaUleMdwEJznWAbqRhT7xgG%2FHGguNblWNqzObTXqnSGj6q%2BT77jiCLZMg9QNJslAJmOr8XG8PQfPXXeLYKryPHqRQTEps7F5EGG%2FazkZiJlwrcm1GaD8lpC7HdFsQCA8iCwyTIDU2GDpMKSHjsQGOqUBmQfGOo%2BrtKv364qJTSPW%2BUdKwQp7jlM9qfIJWlno0NPrJGYNLgiAQMu3C4Hcle70B9Iz%2Fu8NlnxCGbINNRmjQ5JXWnvB6SFg0uLJCOE9GndrHmgXYZ1UitgwSfJv6l0eRELI%2FnWyBjSqdVZCP8WJNOX%2BmaIghREFS7kpO3sKuxONXv5Up4HMnEJZkifDyPC9JKYKXZ5xWVmUhJCEZkmQpvoE6AdD&X-Amz-Signature=9677e949d7afa816d9003d3636c02599f06470841edcb4bbca5c8b3c24c855be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
