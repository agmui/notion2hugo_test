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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OINRRH4%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwIpNcroQ7xFVfenVbflXDRu8ZWMjau2Iz2ZkXnNG3RAIhAKq9gMT3De%2FOfDzHVj8r3MEEk2Q9irCm9T%2FYjNaowOIwKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPmcm%2Bh5ax6R62bgEq3AOP4MCq4sNXp0Vq0%2FCtuw3Xvbf87tGziubc%2Fcjvo%2BvdK9utOW2MFChZ%2Bm97Pacli%2ByQekTXRs%2Fg%2BraGPiHuLtClodDjbf8iWNK%2FZdlFUeJUNhhQ9k8rhYmiOnQsVv%2Ff3N%2BysvvLTEbdKfy6ALSfDDI3mciQa9PTag67Cg5Uma7SVPbpIktQVRAaWxjSG9SmQGaWDslBMFQ7B9jbkNEyixf%2BCORJ0aPFFf42%2FLX3mBcuAX1z3%2FgITFZ1manr8aDh50dWFixBndT43ozIkBF7%2FvlUvjmAXJKhCe7CITG2mhayHHpOaouaLuwACIVG4LluUgG1uG4f76ifxzruiVOOHvtlsISoMKnq7Pzhq%2B5j%2BvEUsoRQ0xUOsm8RwFo9Th9X4FiuoRr5zriQl1l%2Bg0sTtLyZlA5R7FL8bf2r441B0yF5sNm0hPVrMciLIdvGeQtigP17KzmcZ%2FU7wxP1bkte%2BFiToygIU4mYgN6%2BgIvfogOuvKJOvdLw9KtKk9Soc6cVQOJYUGoP7bpQgYAXvHgcC09iKTzsHQpoUiqSPDAiPrQzuay0xuYESr309SePDnY9bFHqfMpjnR81%2B7AamIsy5iMpDHHe7nFdWdijU9nsbtOGgA3Ki5ZSeDGrHcpNtTCnparEBjqkAeUmi5XQwtSeMNysRsjB1PYS1GRSAhPmPQd9i4tSattp5Lkc09rJz680GNh7o6ZjY3BgM43MVGhuAdkqgY3OPJJKtHvdBUVLAO1ScSNbIuk906f%2BZAPkwFA%2F%2BgckCJcbEkNHlYGuM1DjFzGNBchPuEh7ihPdZELp%2BhangHkZat%2F5cmcqaRZffp%2BfFx2TtbdXPL7IPipN6xBhDBuzNLlcPY4oecMX&X-Amz-Signature=70f2ecb60bb3b01305eeb50cf6b590a32aa2bd267acdbacc2c440a60d9c5f430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OINRRH4%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwIpNcroQ7xFVfenVbflXDRu8ZWMjau2Iz2ZkXnNG3RAIhAKq9gMT3De%2FOfDzHVj8r3MEEk2Q9irCm9T%2FYjNaowOIwKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPmcm%2Bh5ax6R62bgEq3AOP4MCq4sNXp0Vq0%2FCtuw3Xvbf87tGziubc%2Fcjvo%2BvdK9utOW2MFChZ%2Bm97Pacli%2ByQekTXRs%2Fg%2BraGPiHuLtClodDjbf8iWNK%2FZdlFUeJUNhhQ9k8rhYmiOnQsVv%2Ff3N%2BysvvLTEbdKfy6ALSfDDI3mciQa9PTag67Cg5Uma7SVPbpIktQVRAaWxjSG9SmQGaWDslBMFQ7B9jbkNEyixf%2BCORJ0aPFFf42%2FLX3mBcuAX1z3%2FgITFZ1manr8aDh50dWFixBndT43ozIkBF7%2FvlUvjmAXJKhCe7CITG2mhayHHpOaouaLuwACIVG4LluUgG1uG4f76ifxzruiVOOHvtlsISoMKnq7Pzhq%2B5j%2BvEUsoRQ0xUOsm8RwFo9Th9X4FiuoRr5zriQl1l%2Bg0sTtLyZlA5R7FL8bf2r441B0yF5sNm0hPVrMciLIdvGeQtigP17KzmcZ%2FU7wxP1bkte%2BFiToygIU4mYgN6%2BgIvfogOuvKJOvdLw9KtKk9Soc6cVQOJYUGoP7bpQgYAXvHgcC09iKTzsHQpoUiqSPDAiPrQzuay0xuYESr309SePDnY9bFHqfMpjnR81%2B7AamIsy5iMpDHHe7nFdWdijU9nsbtOGgA3Ki5ZSeDGrHcpNtTCnparEBjqkAeUmi5XQwtSeMNysRsjB1PYS1GRSAhPmPQd9i4tSattp5Lkc09rJz680GNh7o6ZjY3BgM43MVGhuAdkqgY3OPJJKtHvdBUVLAO1ScSNbIuk906f%2BZAPkwFA%2F%2BgckCJcbEkNHlYGuM1DjFzGNBchPuEh7ihPdZELp%2BhangHkZat%2F5cmcqaRZffp%2BfFx2TtbdXPL7IPipN6xBhDBuzNLlcPY4oecMX&X-Amz-Signature=c0ddc834af7cc49e04b715114d1a69fdbe576ff5565a2b21a21db90384b2026c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
