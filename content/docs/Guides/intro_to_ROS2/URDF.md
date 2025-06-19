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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2FOTFF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU5lb1NgYAxWBByDTAa4yLplcQNEQFmaUX6VIey4DY5AiEA%2B8r%2F9J36WS8bz3hIS6wOSmNTGqtRInNU4kLz8odSvBcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNfWMa2eYGSX8naXircAyDvDjOr%2BhwCmC08W4FmfzPgkk5dRu6YeZgvD3sW7bZdiaAc%2FclqWcdyKhWHUZrAQvKVBAm8j5Ej%2BQt2n8PmsxzhBT7xufyioc7XF6VvZmdv%2B1rGPKPEiHU%2BY61AxNBcbvzaEJrjiUIkdJ6cQPVP0x7vqQQYDy5epQQtSvW6nUpmSh3mRfaKErS1ZHqR2pawFU1n6QigT%2FUoeulp8EHlhP4z%2BRneWCXuDoMExX02LFHmEm2v89UTUdk%2FekuNQr0rDnhvK4zxn4DJV1OCFSehzzlBqC92wYcqMw0fXgPJSW6YQciUzZGr1Te9dcNNRidcSLnxIOB5psTAmQbhrA5mb%2FsSCifIuy33GnkLW4Ejl25mjlMsyJak2dFf7jBwTvj5lgk4PEJDupDTaHvhDmg0P1MaXPifngV8w0zAXON9A1GoEwJoeSmFt%2FTqXVvQdAOgBxZ1OL9s%2BzTuh1uqYU%2BGUrtZg9EhCpX14G7m5AxTMhaWZC1BXwZ3EgtIml%2BQ1TSTEaVS8%2FFKHCoxeQ8aLq6LubcjnlcQV3uzHRx9IImLpuvWveI8Dh45vFdf1zULdWm%2BrxUhigXVT5UKBhln6AvLbbn7m%2BGpWy7i5dzDbG7byDiPQDd6VsR%2BY3ZcoNveMMaRz8IGOqUBAIIQ%2B6uCurKjP8i%2BX%2FjftpGwlc%2F2EnnlHE3A%2BfyV4jy6moi6WLVE%2BbQkWo3J8HnlenmTV1gty5V3G0XDh3zY38D%2BHyy18Hch7VyGvI9nms3S1tBveVgUd9lpH1d6mt9ajqTJ0GeKov6gs4TJMbJDh1ueRUUSWSqTuPZC7q1awZJELrAxQC2vIaiTFXhQQJlypVSBZShDffuRatPwrPnKHyCBQH2W&X-Amz-Signature=fe6495addad112e30db6a815f39c07e147be9893a3ce0c1ece93171e9da609f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2FOTFF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU5lb1NgYAxWBByDTAa4yLplcQNEQFmaUX6VIey4DY5AiEA%2B8r%2F9J36WS8bz3hIS6wOSmNTGqtRInNU4kLz8odSvBcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNfWMa2eYGSX8naXircAyDvDjOr%2BhwCmC08W4FmfzPgkk5dRu6YeZgvD3sW7bZdiaAc%2FclqWcdyKhWHUZrAQvKVBAm8j5Ej%2BQt2n8PmsxzhBT7xufyioc7XF6VvZmdv%2B1rGPKPEiHU%2BY61AxNBcbvzaEJrjiUIkdJ6cQPVP0x7vqQQYDy5epQQtSvW6nUpmSh3mRfaKErS1ZHqR2pawFU1n6QigT%2FUoeulp8EHlhP4z%2BRneWCXuDoMExX02LFHmEm2v89UTUdk%2FekuNQr0rDnhvK4zxn4DJV1OCFSehzzlBqC92wYcqMw0fXgPJSW6YQciUzZGr1Te9dcNNRidcSLnxIOB5psTAmQbhrA5mb%2FsSCifIuy33GnkLW4Ejl25mjlMsyJak2dFf7jBwTvj5lgk4PEJDupDTaHvhDmg0P1MaXPifngV8w0zAXON9A1GoEwJoeSmFt%2FTqXVvQdAOgBxZ1OL9s%2BzTuh1uqYU%2BGUrtZg9EhCpX14G7m5AxTMhaWZC1BXwZ3EgtIml%2BQ1TSTEaVS8%2FFKHCoxeQ8aLq6LubcjnlcQV3uzHRx9IImLpuvWveI8Dh45vFdf1zULdWm%2BrxUhigXVT5UKBhln6AvLbbn7m%2BGpWy7i5dzDbG7byDiPQDd6VsR%2BY3ZcoNveMMaRz8IGOqUBAIIQ%2B6uCurKjP8i%2BX%2FjftpGwlc%2F2EnnlHE3A%2BfyV4jy6moi6WLVE%2BbQkWo3J8HnlenmTV1gty5V3G0XDh3zY38D%2BHyy18Hch7VyGvI9nms3S1tBveVgUd9lpH1d6mt9ajqTJ0GeKov6gs4TJMbJDh1ueRUUSWSqTuPZC7q1awZJELrAxQC2vIaiTFXhQQJlypVSBZShDffuRatPwrPnKHyCBQH2W&X-Amz-Signature=56002271678228084e395e78787b22a07bbe32d3c52b05a00a91ce92208a5eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
