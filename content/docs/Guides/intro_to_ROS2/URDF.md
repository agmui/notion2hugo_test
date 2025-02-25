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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2UGC34%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAsj4QmhXM6T7X%2B2OVoOhbEBE%2Bbk9uSAW6SQNQQoE2jAAiBXjnL8zn3G8euyPgvM5SGvnaU2gWt%2By3qb%2BaSn05iBMSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM6k9z4IUJB8W%2B9AsnKtwDDfgAa9w6rwoFv8jE%2FuZ1NS4K259pb7JKEkAkEQo30ovK02mmvUg%2BoRT%2FtuGnCKIyJn0HXkJAooGhzWiC3peMpS17A63QfRT0p0K8ZVS7e5EnuOuwk%2BRfj8piwnSOeJJHjdl8dJIYUiM0qXXSjmG86fL7i%2BODQrAv7DQRTVj8zwWy%2BdfzWivH05xxX2zrRbR68e8H1k9KU7BUmzUYMfe4KV7%2Fyp4pBw6vrgu2U3PdqdpQ4lM5Rbq4HPSKQBvr7E12lObw7oCLOBAwy5M3vBQHVCVoxoakj5M2EviJAr%2FZZ49eBSuHIgvuHXgl%2FWIqNz%2FGHTKO9oDc0RZrm3TaqesKokX6b%2Faiz6bFtbr9ZirDLqj3DhJQxGX5aobe6sEoTARkZTl%2FKzYXLrSDNkEq%2BFQaFRNzhMvY2BpqPd1EmNLAT5XewYf%2BeNTujJ2kxwU7fb54aMgJN5sqH2B5kh5Zk%2FIP7E8%2FiQdRD3CPcJ36S7QxL7kTEzMBS%2BYXl1J9cVQFX7HfBT71jCnPO6ck%2F37X0czyQ7%2FnAV1%2FUSx2RfHj0r1JOdJcsNnUzapkHgw5CvrPvLSnthXNtzcD3SCaOPAuj2x7xn6bHA%2BMnfX07ca1bue7IUK9izajtjW1kasMeoowrMf0vQY6pgHIP6aLbn2Ej3HGGRIaPLnhOMwE4VbrG4hhdvAjMh0GKPqvNbhnQCsRCcjcryuiHBtxJhUXAs5JbscltDCGzysFsAWT6OwxiT0SdG1KFQBDPykChOyIR7%2B%2Bi33d5yRRt0sudFFuueiNO99VQ5tUHF56rvbUeP22mmyLdjiis5tJrGJk%2BrPMCytDh%2Bs9yOftio05ioNjklxncKQSoVwM2vmjb7LQjKB9&X-Amz-Signature=9e09dd9828b2e24b00a665fbfdc05d330f6d96a537a2b7c0b0be0ad032d8e224&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2UGC34%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAsj4QmhXM6T7X%2B2OVoOhbEBE%2Bbk9uSAW6SQNQQoE2jAAiBXjnL8zn3G8euyPgvM5SGvnaU2gWt%2By3qb%2BaSn05iBMSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM6k9z4IUJB8W%2B9AsnKtwDDfgAa9w6rwoFv8jE%2FuZ1NS4K259pb7JKEkAkEQo30ovK02mmvUg%2BoRT%2FtuGnCKIyJn0HXkJAooGhzWiC3peMpS17A63QfRT0p0K8ZVS7e5EnuOuwk%2BRfj8piwnSOeJJHjdl8dJIYUiM0qXXSjmG86fL7i%2BODQrAv7DQRTVj8zwWy%2BdfzWivH05xxX2zrRbR68e8H1k9KU7BUmzUYMfe4KV7%2Fyp4pBw6vrgu2U3PdqdpQ4lM5Rbq4HPSKQBvr7E12lObw7oCLOBAwy5M3vBQHVCVoxoakj5M2EviJAr%2FZZ49eBSuHIgvuHXgl%2FWIqNz%2FGHTKO9oDc0RZrm3TaqesKokX6b%2Faiz6bFtbr9ZirDLqj3DhJQxGX5aobe6sEoTARkZTl%2FKzYXLrSDNkEq%2BFQaFRNzhMvY2BpqPd1EmNLAT5XewYf%2BeNTujJ2kxwU7fb54aMgJN5sqH2B5kh5Zk%2FIP7E8%2FiQdRD3CPcJ36S7QxL7kTEzMBS%2BYXl1J9cVQFX7HfBT71jCnPO6ck%2F37X0czyQ7%2FnAV1%2FUSx2RfHj0r1JOdJcsNnUzapkHgw5CvrPvLSnthXNtzcD3SCaOPAuj2x7xn6bHA%2BMnfX07ca1bue7IUK9izajtjW1kasMeoowrMf0vQY6pgHIP6aLbn2Ej3HGGRIaPLnhOMwE4VbrG4hhdvAjMh0GKPqvNbhnQCsRCcjcryuiHBtxJhUXAs5JbscltDCGzysFsAWT6OwxiT0SdG1KFQBDPykChOyIR7%2B%2Bi33d5yRRt0sudFFuueiNO99VQ5tUHF56rvbUeP22mmyLdjiis5tJrGJk%2BrPMCytDh%2Bs9yOftio05ioNjklxncKQSoVwM2vmjb7LQjKB9&X-Amz-Signature=8cdb71b4128d61389c8590154aefb99070f666d4b46fb6d23e746b5258d6d845&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
