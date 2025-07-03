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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DK2CCS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCOwpwrCd4Jejnc0ubFt1oCt8%2Fneqoq6NamAuhccBDiMAIgD0kEE0xLno7gwzChblRp9a28E5DMt5ZWbaf3Zb9AgCoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDP%2Fh4tS7Fy8E%2F946oCrcA2h1%2BvKDVMQmxc2rtMYLQLFKe6nw%2BZH%2BjeIXJbbueyvVQ0V%2B3xoTGU8UKcSfAB37v0zBqcu413o4sqZl2mLjIkf6r6CvLGW8hUciDgc7irRsfFmbJtzQOKASpMBx62jydrcXfHP6A23lEp3QEuK37Oqz56rNFcRHtxzwAN88qqTcomvEXI5W0EHIf4l0veFv1x4qB8wwbHeXWeXSMxrFuws%2FXagnEbdbDk7zWHL7K0T956qB5ELq%2BPJosADyi46psT0falKR5cae8syf4dLuydaEV0IttbWjT3EGCKKAFwf2yYNSEkxWEjy07KjJbikIfgYaJKGYm4WEksPRdXQ7a6oMfBu2Z0abfAy87TU3NydzLgnsYAtm4JdG%2FKLRMQgM1evj87LIfXrRgnHieLChh7oRA%2F8uXTkq23ZpfV9c7neNwwKZKEMiARUgqUiaSAka8BiXC9g6XZnVWTBXuD%2BxPjBtQ6cc%2B%2F4nBEUuUMoHZ5S0KjR%2F2qKkyf6yAiJJRJQIvoCcMxKDEwDV2kgpz%2BEmm8OPpx%2FyU7HthsresxEMUSNSlu4%2BMxvYDjJJhzWI98zsDFPLL4dlxhDemWCph6aqTAXYotYFm8sCg%2F8LUDzCAujP%2FRH1ul7g0lCk%2BuzcMOTlmsMGOqUBp%2FLHyaqpQ5oWsEV8JIMvHf7kykRoVYKrzJ0WugRoY7p29VdvoAeKd5Ktbzyyud1WlpUj%2FLLrFTMtzsu1aWN3SaG9Tnj9GOipjXhCP5HeRQEXhjFhXN59ztSSwnMNDsgvH%2BMfgreFIi7nBs7VFsUk66df4n%2F5kHZkSWwXDSjYhCyGACI3RzmT8ZYTBPtR4IcHfBvj5NBz9nH2evGeOsg8esUdFd41&X-Amz-Signature=a4975542c32e2f323e41f8eb509abb75828f76071aa612cca1c5ddf82b78a1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DK2CCS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCOwpwrCd4Jejnc0ubFt1oCt8%2Fneqoq6NamAuhccBDiMAIgD0kEE0xLno7gwzChblRp9a28E5DMt5ZWbaf3Zb9AgCoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDP%2Fh4tS7Fy8E%2F946oCrcA2h1%2BvKDVMQmxc2rtMYLQLFKe6nw%2BZH%2BjeIXJbbueyvVQ0V%2B3xoTGU8UKcSfAB37v0zBqcu413o4sqZl2mLjIkf6r6CvLGW8hUciDgc7irRsfFmbJtzQOKASpMBx62jydrcXfHP6A23lEp3QEuK37Oqz56rNFcRHtxzwAN88qqTcomvEXI5W0EHIf4l0veFv1x4qB8wwbHeXWeXSMxrFuws%2FXagnEbdbDk7zWHL7K0T956qB5ELq%2BPJosADyi46psT0falKR5cae8syf4dLuydaEV0IttbWjT3EGCKKAFwf2yYNSEkxWEjy07KjJbikIfgYaJKGYm4WEksPRdXQ7a6oMfBu2Z0abfAy87TU3NydzLgnsYAtm4JdG%2FKLRMQgM1evj87LIfXrRgnHieLChh7oRA%2F8uXTkq23ZpfV9c7neNwwKZKEMiARUgqUiaSAka8BiXC9g6XZnVWTBXuD%2BxPjBtQ6cc%2B%2F4nBEUuUMoHZ5S0KjR%2F2qKkyf6yAiJJRJQIvoCcMxKDEwDV2kgpz%2BEmm8OPpx%2FyU7HthsresxEMUSNSlu4%2BMxvYDjJJhzWI98zsDFPLL4dlxhDemWCph6aqTAXYotYFm8sCg%2F8LUDzCAujP%2FRH1ul7g0lCk%2BuzcMOTlmsMGOqUBp%2FLHyaqpQ5oWsEV8JIMvHf7kykRoVYKrzJ0WugRoY7p29VdvoAeKd5Ktbzyyud1WlpUj%2FLLrFTMtzsu1aWN3SaG9Tnj9GOipjXhCP5HeRQEXhjFhXN59ztSSwnMNDsgvH%2BMfgreFIi7nBs7VFsUk66df4n%2F5kHZkSWwXDSjYhCyGACI3RzmT8ZYTBPtR4IcHfBvj5NBz9nH2evGeOsg8esUdFd41&X-Amz-Signature=9355d4f7be203371464fa0c5135245e6697cfce4719516f3665971f6d337f7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
