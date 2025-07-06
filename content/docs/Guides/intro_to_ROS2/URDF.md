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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBQEBFL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDtwq1lmdRAmctorBsbEPiuB2d%2FqBEwBOhLCQgt%2Fj5a7AiAnMFeBasnc6H%2Bulywq6hmvasa8wfUsNRZr2z9sfrvwGyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM4JT7xNbsRK8nu7aLKtwD41Ed%2FESG0qzDzaqtrKPmt696rzNAY%2FUQnmYA%2BfnwDbyGgh8umbRsmBsvtlPSfBctvhqheud3D%2FAwFR%2BKpJNsdE7yOCUfitf7m37imLs9yDwkIlZc1xtAf%2FPJEzmoiZRlYKFyK66IeJWOUCfAtahkrPO5hWVI9ciKVWCvjBxj8dkM2f8WUmjwZ99ke0uzUt%2BpHPBXuYvw4ndelDPY%2BRm%2FP2KOBWXkzMpSGzh7UEMFB%2FJ9tKtMzNoONVTK66U4enBzsl2FhsOret9%2FC%2BPxv4MbvAZV9PSrKrnfufAvnx9b8Y7%2BhzyIoTApHysOlq%2BEL4kU0PVXyU62BCZZDrgQw4iHT3NxDDWvGxVmfCZ8ovVHqTs%2BWcgznfEctW%2BJh2yaac5Zrz3%2FdQdMRnt8Vy%2FwXRjdliq8nsz5TuS5Wph0U%2BbZsx%2F4r%2BbT6tEHh7Z0wq2cYQaAMVqdX7Vkkj7HOGfcTEHKA9iRQCpaQ2iVNZ4oaRpeiVToI11wdHbdXcRUzXtpdkJ09pmkP45aXuZHSV9Xjri81ldda48U7br5Nfs2oUk5O4nlbYAK7LmAYcRe5Cd8CP%2FnBshE802p%2FT2aA%2FGqiw9S2WqDx7s1w202hlN%2FQj%2BRyv77DsF3ZoJVaGAKLl0wopinwwY6pgE1uGYR5QfeshNQzTWRQSLY%2BsK7RWeIZRkKouTAbiLAEl4V0LdyZUbnJ1HAyKVeoQcw6dPOyWGTacDnAmilAU2dOHZmuca99%2BScedr85rZqLUWFG6pITNEf0eoC18%2FiZd5hAs1mie7sMQJrQTg%2B8udxzs2MXhAy2DUju2t8t9jNvPhUXjUNStscQhe8pAnY5qOaEtfUvz7f2igZczwAkmnWx8wkYWzb&X-Amz-Signature=5de265cbe8707a6c823050f646f944d53af5736062b6057f0491e770e1343b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBQEBFL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDtwq1lmdRAmctorBsbEPiuB2d%2FqBEwBOhLCQgt%2Fj5a7AiAnMFeBasnc6H%2Bulywq6hmvasa8wfUsNRZr2z9sfrvwGyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM4JT7xNbsRK8nu7aLKtwD41Ed%2FESG0qzDzaqtrKPmt696rzNAY%2FUQnmYA%2BfnwDbyGgh8umbRsmBsvtlPSfBctvhqheud3D%2FAwFR%2BKpJNsdE7yOCUfitf7m37imLs9yDwkIlZc1xtAf%2FPJEzmoiZRlYKFyK66IeJWOUCfAtahkrPO5hWVI9ciKVWCvjBxj8dkM2f8WUmjwZ99ke0uzUt%2BpHPBXuYvw4ndelDPY%2BRm%2FP2KOBWXkzMpSGzh7UEMFB%2FJ9tKtMzNoONVTK66U4enBzsl2FhsOret9%2FC%2BPxv4MbvAZV9PSrKrnfufAvnx9b8Y7%2BhzyIoTApHysOlq%2BEL4kU0PVXyU62BCZZDrgQw4iHT3NxDDWvGxVmfCZ8ovVHqTs%2BWcgznfEctW%2BJh2yaac5Zrz3%2FdQdMRnt8Vy%2FwXRjdliq8nsz5TuS5Wph0U%2BbZsx%2F4r%2BbT6tEHh7Z0wq2cYQaAMVqdX7Vkkj7HOGfcTEHKA9iRQCpaQ2iVNZ4oaRpeiVToI11wdHbdXcRUzXtpdkJ09pmkP45aXuZHSV9Xjri81ldda48U7br5Nfs2oUk5O4nlbYAK7LmAYcRe5Cd8CP%2FnBshE802p%2FT2aA%2FGqiw9S2WqDx7s1w202hlN%2FQj%2BRyv77DsF3ZoJVaGAKLl0wopinwwY6pgE1uGYR5QfeshNQzTWRQSLY%2BsK7RWeIZRkKouTAbiLAEl4V0LdyZUbnJ1HAyKVeoQcw6dPOyWGTacDnAmilAU2dOHZmuca99%2BScedr85rZqLUWFG6pITNEf0eoC18%2FiZd5hAs1mie7sMQJrQTg%2B8udxzs2MXhAy2DUju2t8t9jNvPhUXjUNStscQhe8pAnY5qOaEtfUvz7f2igZczwAkmnWx8wkYWzb&X-Amz-Signature=ab8449ea0ae928d7cc32004259403dfb009dddf99a1a437e5fd4bf501d90200e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
