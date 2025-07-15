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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WT6OYIY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGJYAA1JmNPL1SinyGwvFe9q%2Fmc8i9Bc5mOLi7kTrRpVAiBIxVK0b3WFvZlj5pI%2BPtSqXhgDw%2FxGQ2dBmvrbiHJ5ISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMqoDx%2BXCU85TwVEQaKtwDL7otfwyBAKtkf%2Ba9TaKxgUqppWtHLlFijICc7XVIYiMkImtby8c7FUgDLluj6yZfnF7XAKWDOLlowpv4rrlZQVGpt%2BBeBFSMjPHk4wvnmFOiACW%2Bm3XJxSw%2BANVq81VxQUi%2FaOYP7VJ2HrHE3%2FTXLLvzufn%2FZ1eGbVTt2SAOfUoMD7F68LFodJIb1kCgYpEUqeW6Qb4EEjC3xB4g9y3QPm4358LDOs14UPxGAea8wkwmbbt0jyBjGvW88u0MjUHg1cLlm3QE5s9MJeJY9wprXBd4cQ1wyryOqB3OYDoRMxHPdjyqogZ%2B4R%2Boo0B5tDhgaompAQj8lM2ri%2F64ypYBclufSsn1qrwFTbxEL2%2Fj6Svlt%2BqyzuJ6yStCLD1bQX9WBwlAj3ELQK1JpTncD84ZT5SsGmfFK5YOKtTCggVvRdKtFdp90FJHkDzzJUOHZibTX6JjXK%2BFAHq%2BSQvKwvrv0DYTgKdzxbIOZqY1hFZGu81o2eFLCwaIwQFa%2FlCspcvYgmVXmQnJC4vHNLhbMmjwReEAbU2QhxawHh%2F6SGhZ9qsitJUfI7KWoEHjaHBjcYbQZeD3PrzL24p4wmqklfqkioViRosyojHy4h513ZWhvgex3CJYR2DpP6u7EngwwqTbwwY6pgFct0QhBrNvstgroT%2BKzmYFLZKL%2BFyWCtClCuQGkp9ZaFDAu4TVvyQdTcqznvlOvr7Blkl3oJgV8%2FunFrY6zyKwwEhnNigRDa1rXPIkuSqEzRMnpwpYD%2Bg%2FtXRBLXT%2BLSE6jc6IUWe4s1RWt1g5EeLQWlfNFIqIX6KKselnATuEKzaWChngCMWz086Osav1lCO9YiiFCE6GpZCC7efYdqVhDSakwr1M&X-Amz-Signature=12e5c2a56317e5b90f7ca0c3fe04e9df256ef57040ed884424f39a400348bacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WT6OYIY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGJYAA1JmNPL1SinyGwvFe9q%2Fmc8i9Bc5mOLi7kTrRpVAiBIxVK0b3WFvZlj5pI%2BPtSqXhgDw%2FxGQ2dBmvrbiHJ5ISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMqoDx%2BXCU85TwVEQaKtwDL7otfwyBAKtkf%2Ba9TaKxgUqppWtHLlFijICc7XVIYiMkImtby8c7FUgDLluj6yZfnF7XAKWDOLlowpv4rrlZQVGpt%2BBeBFSMjPHk4wvnmFOiACW%2Bm3XJxSw%2BANVq81VxQUi%2FaOYP7VJ2HrHE3%2FTXLLvzufn%2FZ1eGbVTt2SAOfUoMD7F68LFodJIb1kCgYpEUqeW6Qb4EEjC3xB4g9y3QPm4358LDOs14UPxGAea8wkwmbbt0jyBjGvW88u0MjUHg1cLlm3QE5s9MJeJY9wprXBd4cQ1wyryOqB3OYDoRMxHPdjyqogZ%2B4R%2Boo0B5tDhgaompAQj8lM2ri%2F64ypYBclufSsn1qrwFTbxEL2%2Fj6Svlt%2BqyzuJ6yStCLD1bQX9WBwlAj3ELQK1JpTncD84ZT5SsGmfFK5YOKtTCggVvRdKtFdp90FJHkDzzJUOHZibTX6JjXK%2BFAHq%2BSQvKwvrv0DYTgKdzxbIOZqY1hFZGu81o2eFLCwaIwQFa%2FlCspcvYgmVXmQnJC4vHNLhbMmjwReEAbU2QhxawHh%2F6SGhZ9qsitJUfI7KWoEHjaHBjcYbQZeD3PrzL24p4wmqklfqkioViRosyojHy4h513ZWhvgex3CJYR2DpP6u7EngwwqTbwwY6pgFct0QhBrNvstgroT%2BKzmYFLZKL%2BFyWCtClCuQGkp9ZaFDAu4TVvyQdTcqznvlOvr7Blkl3oJgV8%2FunFrY6zyKwwEhnNigRDa1rXPIkuSqEzRMnpwpYD%2Bg%2FtXRBLXT%2BLSE6jc6IUWe4s1RWt1g5EeLQWlfNFIqIX6KKselnATuEKzaWChngCMWz086Osav1lCO9YiiFCE6GpZCC7efYdqVhDSakwr1M&X-Amz-Signature=7e309da25a6b350fe2c47f665f517474fba1a28bf060ae33bb0ef9fb0651c84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
