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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAOS243C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC%2BsTR9Ron0EZPL9gw60cWlyilt78bcTDATC5gjpsOUNgIhAMrn4T5gTOxjWppql8eNFLhMPLK%2FcREAmIoGy0xq9hdyKv8DCFgQABoMNjM3NDIzMTgzODA1IgypRK2dzIIxuX9HVIIq3ANWfIZy1EzoT7gCkW7bwF%2FJZarud5TODUB1q3gSxFQbd6MdcApQBkXH9YEmtk9IDNXn3SMr7ui4me3Q1FwOq%2F%2FNI468WN3Ms949mkZ5MGAVp7nfKikFLOfhpeKL4qupC3Z1nGWAPDIqaP3MJ%2BEZiDBkzfMevO65r%2BU8nd%2B7QKVZc6Ix9%2BlNY2dNvTo%2FGYjtV8PZayU6RZebaDIz7szIMkXuBNOOIpupvNyOOrWJrca5mCNXPQ4Nw10KzZtrr%2BnN6l4CzBSDXChigTglRRFyCnwLxGXsHIakgK6TAOV6gof886Ysh3NFb9Jp7Pg4mn9p%2F9m7IWUK6OJOgjklL%2FMC2NignLADRV5ZqdnttrKI00CzRVU1OVICfrcEUAbbDTxYWlkdZO5BDANTaKGhsYGMyeXOQSQfAYAVnphdySI7UWnPb3wIjCj%2FKLkhnKSlrkP8hHeFBWpvI8Af5UZHz2IPGO6aYIMf%2BoPwD00ClWmUusQ9fGt%2B%2BxYkHJwDAPuddfmeo2dEoFmPg1bK3j%2FuK2cQLKs2yE2D4u5nFhpZvau%2FfnQ6stmEw3NxPUKeD7vaOCuGp%2F0GVhtvjG2maGdL9Z7zulTWuKsSsK5vOyVLYre5qkudy3GCv5hhnBFk76R8SjDpoYrCBjqkAUi1gTKZn8%2Fsl5u4CUH%2F9jSO3JuCn5LuNGoSblu%2FchLz%2FXIBrzD0zv9snrKE4gSMDutTOd8GKZGds3IidBWb9hW%2BHAzqlFegY6ooz9q2fNbZVk0KZzP9U9jA%2B3QKASFL4OC0pJu41V3GvCKYaTnJChRk3cppV7XMeSRpwptHK22zaGXt9prt%2BIe536%2BOcgUK56FqVhhDzSrBw491LO9RM%2FkGUKPW&X-Amz-Signature=ec14d33fe3d4468bd451c0f16ed7c1d99d0e9b9d1af925764253488b33e2dda3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAOS243C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC%2BsTR9Ron0EZPL9gw60cWlyilt78bcTDATC5gjpsOUNgIhAMrn4T5gTOxjWppql8eNFLhMPLK%2FcREAmIoGy0xq9hdyKv8DCFgQABoMNjM3NDIzMTgzODA1IgypRK2dzIIxuX9HVIIq3ANWfIZy1EzoT7gCkW7bwF%2FJZarud5TODUB1q3gSxFQbd6MdcApQBkXH9YEmtk9IDNXn3SMr7ui4me3Q1FwOq%2F%2FNI468WN3Ms949mkZ5MGAVp7nfKikFLOfhpeKL4qupC3Z1nGWAPDIqaP3MJ%2BEZiDBkzfMevO65r%2BU8nd%2B7QKVZc6Ix9%2BlNY2dNvTo%2FGYjtV8PZayU6RZebaDIz7szIMkXuBNOOIpupvNyOOrWJrca5mCNXPQ4Nw10KzZtrr%2BnN6l4CzBSDXChigTglRRFyCnwLxGXsHIakgK6TAOV6gof886Ysh3NFb9Jp7Pg4mn9p%2F9m7IWUK6OJOgjklL%2FMC2NignLADRV5ZqdnttrKI00CzRVU1OVICfrcEUAbbDTxYWlkdZO5BDANTaKGhsYGMyeXOQSQfAYAVnphdySI7UWnPb3wIjCj%2FKLkhnKSlrkP8hHeFBWpvI8Af5UZHz2IPGO6aYIMf%2BoPwD00ClWmUusQ9fGt%2B%2BxYkHJwDAPuddfmeo2dEoFmPg1bK3j%2FuK2cQLKs2yE2D4u5nFhpZvau%2FfnQ6stmEw3NxPUKeD7vaOCuGp%2F0GVhtvjG2maGdL9Z7zulTWuKsSsK5vOyVLYre5qkudy3GCv5hhnBFk76R8SjDpoYrCBjqkAUi1gTKZn8%2Fsl5u4CUH%2F9jSO3JuCn5LuNGoSblu%2FchLz%2FXIBrzD0zv9snrKE4gSMDutTOd8GKZGds3IidBWb9hW%2BHAzqlFegY6ooz9q2fNbZVk0KZzP9U9jA%2B3QKASFL4OC0pJu41V3GvCKYaTnJChRk3cppV7XMeSRpwptHK22zaGXt9prt%2BIe536%2BOcgUK56FqVhhDzSrBw491LO9RM%2FkGUKPW&X-Amz-Signature=48b0144e5298cae49e89a13b2eab83be212acad1a013cff2893e34e65ad909f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
