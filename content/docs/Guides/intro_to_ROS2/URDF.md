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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYYXXXK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaW6Ips0LxmhT2LEI3PDnw5Nf%2BRu%2Bcmf4QR907T01PgIgbkKpTxD7qa%2BDG9pSAhYBrBm24P33V0MWr33Hxa8MZx4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQzI8%2Fg9RRpuDbeHCrcAziHeRSKg7i7P2BYvNgBps4ZGsBEkOKaANSfgnVJsCknbS9bmKrYlXlTwepbPj%2BIYICe2IfG5%2B2uSmXavo%2B%2B4szKFW1QOn89Mxlr77SM5DrvmqFh0Llq1XrBqe9CHfmQqcgcmHjjDfFSEvs%2FTudCj0r4Ot4m0g3wUm%2BNu2c0%2FFeB%2F18o7GGsMyExlJqGXT06zen7O68QhnfV0jrjTLe%2BMYlrsgMkdN7NUqH10%2BJcmBMapMOo9MBimRVF2l1vDHP6lQH0gUD9ELdiGeyqDSysRNgzuGjWcOSdLZGcNDmOBVinqMu7bZLzMFf0EIVs%2FQPF22yflosHzYocTZTvCEL%2FddQKQdwv0b3FfpAU%2FUR9vJaGxaM6Lw28qFfqamXzhwEfRwjIDw%2FLDDSJKsaUCjx7LTN0IEeZQJqSj9qFbC7LRdghO%2BQmVGRJxcPE51WDrMxCikN56K7XAO2WGEFonjEJeo3EceS%2FdRHvyYoQsloYNi3ZnT4O3lYVqkw6oxEgUsH0gvzzTybDvlFMNRXsCFjBnShrBEEBq62OpyvfDgw8MVYyTAuNzWNYBJn2ZMm4RNzm7WjRMQSkagy%2Bboniq3H2nRnAUKWdllfcPUvfeZzDNHvqpUujPUcK1B%2Bd7OEeMMmy1sIGOqUB1O2GIOXmdI1BU2Ull5bzmuEo8UPrlYPbYl4NQbyf7yycwyaCNiJXllt%2Bp5rIcP2w%2BQQKK9Nf55rh5pUZe8NhOQKCansc71dVYz2lQHGc6%2BFHrdU%2FRdt9MqPfbCNjunUelBDXSU8Jm4O7L8G6cI5nVKGc4ALEF2Wwbowmhc5U6vNh8sux3LfcAcHn4L8ZybgMpNfCQ6%2FdLrEjtd%2BonEx4I0OFkOuT&X-Amz-Signature=ffd233da30aabc81ac4977ff463db851e507b8fa3c6c40444f6d66475f3c41ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYYXXXK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaW6Ips0LxmhT2LEI3PDnw5Nf%2BRu%2Bcmf4QR907T01PgIgbkKpTxD7qa%2BDG9pSAhYBrBm24P33V0MWr33Hxa8MZx4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQzI8%2Fg9RRpuDbeHCrcAziHeRSKg7i7P2BYvNgBps4ZGsBEkOKaANSfgnVJsCknbS9bmKrYlXlTwepbPj%2BIYICe2IfG5%2B2uSmXavo%2B%2B4szKFW1QOn89Mxlr77SM5DrvmqFh0Llq1XrBqe9CHfmQqcgcmHjjDfFSEvs%2FTudCj0r4Ot4m0g3wUm%2BNu2c0%2FFeB%2F18o7GGsMyExlJqGXT06zen7O68QhnfV0jrjTLe%2BMYlrsgMkdN7NUqH10%2BJcmBMapMOo9MBimRVF2l1vDHP6lQH0gUD9ELdiGeyqDSysRNgzuGjWcOSdLZGcNDmOBVinqMu7bZLzMFf0EIVs%2FQPF22yflosHzYocTZTvCEL%2FddQKQdwv0b3FfpAU%2FUR9vJaGxaM6Lw28qFfqamXzhwEfRwjIDw%2FLDDSJKsaUCjx7LTN0IEeZQJqSj9qFbC7LRdghO%2BQmVGRJxcPE51WDrMxCikN56K7XAO2WGEFonjEJeo3EceS%2FdRHvyYoQsloYNi3ZnT4O3lYVqkw6oxEgUsH0gvzzTybDvlFMNRXsCFjBnShrBEEBq62OpyvfDgw8MVYyTAuNzWNYBJn2ZMm4RNzm7WjRMQSkagy%2Bboniq3H2nRnAUKWdllfcPUvfeZzDNHvqpUujPUcK1B%2Bd7OEeMMmy1sIGOqUB1O2GIOXmdI1BU2Ull5bzmuEo8UPrlYPbYl4NQbyf7yycwyaCNiJXllt%2Bp5rIcP2w%2BQQKK9Nf55rh5pUZe8NhOQKCansc71dVYz2lQHGc6%2BFHrdU%2FRdt9MqPfbCNjunUelBDXSU8Jm4O7L8G6cI5nVKGc4ALEF2Wwbowmhc5U6vNh8sux3LfcAcHn4L8ZybgMpNfCQ6%2FdLrEjtd%2BonEx4I0OFkOuT&X-Amz-Signature=4ee30d895d521f88711ef3ffaec5083a3a264ade79274c8109aa516da6c42194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
