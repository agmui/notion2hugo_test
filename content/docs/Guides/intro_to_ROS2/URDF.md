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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REZ2KPIP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCacZrZW44C%2Blg2IAuZIGa0x2UHHqZFfmi%2BrT4c0K6JzwIfO2NFThvA0pNrxcaMvWZGbS7qohppg4PHHFjYnxhZ8yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9EqICMZg2rRCsF0KtwD1pPytZCGlf1cizQmK5hcWaciucc%2BLFg8bohGEMK%2BMYw5c59ZlVJgjsFezsy4yYR7D3aZxhceM7tjh22w2XK2s%2F5y5AVNG5lGuJwzSUwixCQTPtS3IxEGRxucOBaBCeUafnePbjGAa9g7ZaYHB9hZoWg6k%2FocucRi6V1o2Tj5pVnkgMTVLs34t5o9o4yowlaHwf7pNTEcqcoLrx9cPCng1tKITFFwVbbGRxrjwgZ%2BXpgRzIJ4%2FUDkvbt%2BKDxdeXI7zK9QzBGPZ7wlNODGCsqj7GCjHfjd89cfHQnKcdZRT%2FQxj0S05xKAm6onWu4jBrM5U2CQNnjCY%2B%2BgIPX45tfQNOjcwlzJo%2BpoNAGXczBNDE7DBbIA1DiQi5Y2CsBYxanpy8ZXpjLOL274YoE5hLLgi8lWbbfJSf4E2fSlBjKxRbddc8du8yJ2G%2B222UIS3y6pp04RIzxlLJEdLp5mOekJT7xCYhjiLp9i6r0voBaemGW0iL2JdL68lC52GrJbbM8WNcswJ1%2FaoF1%2FR2aZ4FObSfEFzypZZZRDagC4wt7vkuHTAeOjL2x4j%2B%2FFkDpha4SerbrYLiV%2FoAf632kbChRjW3lx9z4CEud8Vmx0uhYT5ZIK2XUvdpzjTioFi9kw%2FvP0wwY6pgHhwWQob5qOyaRdo%2B1RPnd6k%2FyW7QtjZudATjP%2BcCfARDhHfFJeku2FDcVNp8vIU6qF9LXHYndoATodJDTJ9V5FbW2n8xOPJB6LRCelTCby7oSeZGih4ao%2FIJG4VHN%2BaqQdJzsQI7PFqx71lb0KXWn1D2IioUFrDitzfDYsNiCPKqBPfbU5k19AxQqntt5Em9imTELlR8lja%2BqCqpLOOjMz1OwUM%2BCo&X-Amz-Signature=8f511a3cf04af59201180496ab353779e12655467c6545d2bb80fc5be9c3f88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REZ2KPIP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCacZrZW44C%2Blg2IAuZIGa0x2UHHqZFfmi%2BrT4c0K6JzwIfO2NFThvA0pNrxcaMvWZGbS7qohppg4PHHFjYnxhZ8yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9EqICMZg2rRCsF0KtwD1pPytZCGlf1cizQmK5hcWaciucc%2BLFg8bohGEMK%2BMYw5c59ZlVJgjsFezsy4yYR7D3aZxhceM7tjh22w2XK2s%2F5y5AVNG5lGuJwzSUwixCQTPtS3IxEGRxucOBaBCeUafnePbjGAa9g7ZaYHB9hZoWg6k%2FocucRi6V1o2Tj5pVnkgMTVLs34t5o9o4yowlaHwf7pNTEcqcoLrx9cPCng1tKITFFwVbbGRxrjwgZ%2BXpgRzIJ4%2FUDkvbt%2BKDxdeXI7zK9QzBGPZ7wlNODGCsqj7GCjHfjd89cfHQnKcdZRT%2FQxj0S05xKAm6onWu4jBrM5U2CQNnjCY%2B%2BgIPX45tfQNOjcwlzJo%2BpoNAGXczBNDE7DBbIA1DiQi5Y2CsBYxanpy8ZXpjLOL274YoE5hLLgi8lWbbfJSf4E2fSlBjKxRbddc8du8yJ2G%2B222UIS3y6pp04RIzxlLJEdLp5mOekJT7xCYhjiLp9i6r0voBaemGW0iL2JdL68lC52GrJbbM8WNcswJ1%2FaoF1%2FR2aZ4FObSfEFzypZZZRDagC4wt7vkuHTAeOjL2x4j%2B%2FFkDpha4SerbrYLiV%2FoAf632kbChRjW3lx9z4CEud8Vmx0uhYT5ZIK2XUvdpzjTioFi9kw%2FvP0wwY6pgHhwWQob5qOyaRdo%2B1RPnd6k%2FyW7QtjZudATjP%2BcCfARDhHfFJeku2FDcVNp8vIU6qF9LXHYndoATodJDTJ9V5FbW2n8xOPJB6LRCelTCby7oSeZGih4ao%2FIJG4VHN%2BaqQdJzsQI7PFqx71lb0KXWn1D2IioUFrDitzfDYsNiCPKqBPfbU5k19AxQqntt5Em9imTELlR8lja%2BqCqpLOOjMz1OwUM%2BCo&X-Amz-Signature=2d13efc4eb1068c32ac55627320213aff0ce960aef65fe76329f0379dfebb477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
