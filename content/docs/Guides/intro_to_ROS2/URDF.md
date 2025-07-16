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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5C2AKYU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDeMfzL9pjFXCFdAL%2FlTbsSNNmWuuoNNBk7q2IYnhjAOAIgbfgP8B7W5K1auGT1x%2FxXOAwHNfLCSxKF9TAoiIm3o28q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMUKR2M6CWjisj%2Bs0CrcA2oyD%2BXJ4sKLmmMcqOpfaZZPA%2FOkPXUEl5DRjhloUB%2BOaib7JnRqQnChZdQGahA%2Fst4iIVq3AdHx3Bx8Y%2BZ%2BjsFh6ZWbYBBcggZGDs4b1gah%2BqPvJYvqsV7LQxMYfI2yuWPr7sfTDBqFoWMSQ2XrGcDGM7E0X2zFPl1e9JKOwfam%2FPgYRhL1DXp0Y4wZ3x6Xpr9qM3eU%2F3RICc0QKnEtG417WbT2w6VxrqO11JgoPUE0tMRT0ZBbo4YDwLtpVA7FS4GFe0ED5ER3W8k05%2Flo%2Fm2wDGZxNhGcegjQ%2BoyIinB6QErV4%2F6Dn6yt4L4G7kopYjRga7S7U%2FbnUAPW5ejtJsulnu7W77RK2ETmJlWJf4EDLDxMnz9Z%2Bg1H2EGgmDqkGeVeAiTRVZ1y575Erj0aD3bzGPMTH58bQ1yaV5rMTvSTXVtRGW57BbI80cKQE7pu7KSb%2B3%2BltGXsVYFIhpRzovdxEW8MTJot81cgEn2ZqBO6IURoQc%2F%2BRWGEfcUul%2BQPVDPLKx9eMUHx8cE8pUB6NNPmabg9lvLmB9UvVrZ87herXWhEx2Z88cm2WBSfS0iqGgYw2XQNd7%2FxWfwoYRbtdfTaAqvIIDn5dC5gRExhZtfo70ggVAYV2Si1y7KOMI6v3MMGOqUB0QN64bIz2JqmePac2KUWWbZBHc6Re8pXM14k3Su8Z3GvvPa7kdOCpyJRRhboa1MMYWjHhgX3bmpazKw3j4AvQQPKZ6Cq41MHW8pTE8kj1ijKZSzOTKIpg7lT9yXXHGF%2FJ8PwAvToD07Xs2t4yZU4CqoZH8NOudiSVmoHfUDono%2FjJ66ZD%2BtNXTLuChd8SUpXFqox5HeJIXmwu7tdZYn8FHd6zmPT&X-Amz-Signature=d1f95e41225b22cec3f832b0b77bb4c01dc3dc734b862688c51f5968b0100ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5C2AKYU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDeMfzL9pjFXCFdAL%2FlTbsSNNmWuuoNNBk7q2IYnhjAOAIgbfgP8B7W5K1auGT1x%2FxXOAwHNfLCSxKF9TAoiIm3o28q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMUKR2M6CWjisj%2Bs0CrcA2oyD%2BXJ4sKLmmMcqOpfaZZPA%2FOkPXUEl5DRjhloUB%2BOaib7JnRqQnChZdQGahA%2Fst4iIVq3AdHx3Bx8Y%2BZ%2BjsFh6ZWbYBBcggZGDs4b1gah%2BqPvJYvqsV7LQxMYfI2yuWPr7sfTDBqFoWMSQ2XrGcDGM7E0X2zFPl1e9JKOwfam%2FPgYRhL1DXp0Y4wZ3x6Xpr9qM3eU%2F3RICc0QKnEtG417WbT2w6VxrqO11JgoPUE0tMRT0ZBbo4YDwLtpVA7FS4GFe0ED5ER3W8k05%2Flo%2Fm2wDGZxNhGcegjQ%2BoyIinB6QErV4%2F6Dn6yt4L4G7kopYjRga7S7U%2FbnUAPW5ejtJsulnu7W77RK2ETmJlWJf4EDLDxMnz9Z%2Bg1H2EGgmDqkGeVeAiTRVZ1y575Erj0aD3bzGPMTH58bQ1yaV5rMTvSTXVtRGW57BbI80cKQE7pu7KSb%2B3%2BltGXsVYFIhpRzovdxEW8MTJot81cgEn2ZqBO6IURoQc%2F%2BRWGEfcUul%2BQPVDPLKx9eMUHx8cE8pUB6NNPmabg9lvLmB9UvVrZ87herXWhEx2Z88cm2WBSfS0iqGgYw2XQNd7%2FxWfwoYRbtdfTaAqvIIDn5dC5gRExhZtfo70ggVAYV2Si1y7KOMI6v3MMGOqUB0QN64bIz2JqmePac2KUWWbZBHc6Re8pXM14k3Su8Z3GvvPa7kdOCpyJRRhboa1MMYWjHhgX3bmpazKw3j4AvQQPKZ6Cq41MHW8pTE8kj1ijKZSzOTKIpg7lT9yXXHGF%2FJ8PwAvToD07Xs2t4yZU4CqoZH8NOudiSVmoHfUDono%2FjJ66ZD%2BtNXTLuChd8SUpXFqox5HeJIXmwu7tdZYn8FHd6zmPT&X-Amz-Signature=2a1127d4ecec63aaba2460aef6b80d6a8f87582646f76c8030a8aaa85169c4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
