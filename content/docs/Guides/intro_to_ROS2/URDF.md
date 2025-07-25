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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OS5Q34V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCxgjSdOFjtLp7Wc7x8jCt5e4IMcjGhSflsivAg9qSzxAIgewzm7dgJdhDn1%2BqM9g%2BH%2FIH4sq%2FSmbkd7y7JMpyfh0Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDB3pW%2BAxHf%2F5n2od3SrcA1OBc%2FibZglaCZZxyD5MRCYJQH0n1PB6oLkUnmoYkdLJShm1qBrafPutXSusWveUAtUx4cJIzgCM0b9a7Q7MiylcSlhBpwr3%2BppwMs4dShZ%2FDf6IcAXWV6Ku8QAiuDT8XbTLbd5TUJ2Et8EmCBVeljshMy%2FfN8%2Fj20FVZTuDjXwKSP5pxkvCqA9MJ4RyDnV0CS3eq%2B5ws0yz4AK5vMFNowcpYkWj7wiBTSotil2ZgNFyZc%2FjUhDAVYbvUpiFT1Yfv92%2B39jszgsJZwgbBHq%2FOh6hyfLVYuz7VgjECOtwf0E%2Bo50pe3iOWBEZmJ2SySwiiVdl712aB0cKqxzzwV79Xg7fEEfLLNFWROr53m3rcW%2B9COPbPSQqtsovUO%2By3WGm7dREWNsq9oTEExc0TQ2N1yeX%2F0OJP4DqOW0XhPN8%2FDZ2gUg3r7PsBFn87YC2ZardQNLx%2FWfg3gfSFZvceziHuj%2Bqjeetx30QqUAhVpNr7tTAKzyHDhBdEsZARxQwFmk%2FNzX1Jww3u2yJxpbj3PBRcT%2F%2Be8YmJylhkd3%2BfrFRHs3myGqPXoFdOosmWLeyt9lPFomrZjxp90GvE%2F%2Fj999sFFDgZubLD3L1JOlisQDcSS0KnTBpsfjwesBWEq%2BtMICHjsQGOqUBZYd0zOpUAzr2wn%2BsrqnVKLN%2F0kEiQ1YBlD%2BTxA6iOxDMPEc1%2BDJ%2B1XR7l3O4klbMPuNR50rY6dqlks8w14%2BCOW%2BVlMMpUJ%2B7YIBgm1DnWw3sm7HyJvX%2FRMHzj7hxYrBwFSKZGQmX%2FSQ4PpuTM%2FoUqsJ%2Bd2kMcQbRlIgv%2FhnjopwCEGXAjLvuvWBVK4G%2Frcb%2FruhQ3j72FvLn538x9Dee%2FdgG2j07&X-Amz-Signature=ef1dfe4d96096e000d29a8fb79d732056c009a108816ba0468903de8453c031c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OS5Q34V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCxgjSdOFjtLp7Wc7x8jCt5e4IMcjGhSflsivAg9qSzxAIgewzm7dgJdhDn1%2BqM9g%2BH%2FIH4sq%2FSmbkd7y7JMpyfh0Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDB3pW%2BAxHf%2F5n2od3SrcA1OBc%2FibZglaCZZxyD5MRCYJQH0n1PB6oLkUnmoYkdLJShm1qBrafPutXSusWveUAtUx4cJIzgCM0b9a7Q7MiylcSlhBpwr3%2BppwMs4dShZ%2FDf6IcAXWV6Ku8QAiuDT8XbTLbd5TUJ2Et8EmCBVeljshMy%2FfN8%2Fj20FVZTuDjXwKSP5pxkvCqA9MJ4RyDnV0CS3eq%2B5ws0yz4AK5vMFNowcpYkWj7wiBTSotil2ZgNFyZc%2FjUhDAVYbvUpiFT1Yfv92%2B39jszgsJZwgbBHq%2FOh6hyfLVYuz7VgjECOtwf0E%2Bo50pe3iOWBEZmJ2SySwiiVdl712aB0cKqxzzwV79Xg7fEEfLLNFWROr53m3rcW%2B9COPbPSQqtsovUO%2By3WGm7dREWNsq9oTEExc0TQ2N1yeX%2F0OJP4DqOW0XhPN8%2FDZ2gUg3r7PsBFn87YC2ZardQNLx%2FWfg3gfSFZvceziHuj%2Bqjeetx30QqUAhVpNr7tTAKzyHDhBdEsZARxQwFmk%2FNzX1Jww3u2yJxpbj3PBRcT%2F%2Be8YmJylhkd3%2BfrFRHs3myGqPXoFdOosmWLeyt9lPFomrZjxp90GvE%2F%2Fj999sFFDgZubLD3L1JOlisQDcSS0KnTBpsfjwesBWEq%2BtMICHjsQGOqUBZYd0zOpUAzr2wn%2BsrqnVKLN%2F0kEiQ1YBlD%2BTxA6iOxDMPEc1%2BDJ%2B1XR7l3O4klbMPuNR50rY6dqlks8w14%2BCOW%2BVlMMpUJ%2B7YIBgm1DnWw3sm7HyJvX%2FRMHzj7hxYrBwFSKZGQmX%2FSQ4PpuTM%2FoUqsJ%2Bd2kMcQbRlIgv%2FhnjopwCEGXAjLvuvWBVK4G%2Frcb%2FruhQ3j72FvLn538x9Dee%2FdgG2j07&X-Amz-Signature=3b49ddb5659f464a3375771230db68195c048d593081bf708b39d3b8c04182ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
