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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCT4XUQ7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjR1A9IAlC1XlAQqpBVTbm4ExTrMLXuniP15WskOjMOAIhAJOiqlJVkdCym8JMMLtjiLvq%2FCbJ60hKp7abJrWoO2JOKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu%2FRX81pfP7jjB8RYq3ANNd6sCjEBMwAtqs2M7c7vSCqbCG8FHQNgXQdpfmB6lWHP4EPzxQg6XKyK1Ki5AXu2YbysxiXL0Vgf9RJ5j5hMmgUu13ey%2BGcUWAsqHGC1UDaK1%2FaDtPc4CMi8kA0hk1givCAo7oxaxnXEE8x0HFTWqxj%2BrDgQAGphtag8VBRxf35oeFh31Rxhm2%2Fr0YDRwxn7EESMT4Lr9pPDZuvvZu7voeBgs%2FJb8r8U6xVij712hWclaplbrjBQpxR582Yge4JXqcR%2FeYl17k8TNbEdmqU3LUozbTuv0mQDyE9nK7nkn%2B%2FcbDgyb1HSM0BA8llR0oWnSP%2Bc8HKE2A7m6G%2FROK70XkYQAPezZXPSpL1nf8uKtN47%2FM9rBA2V8KYdMeF7aeFYovopsTa%2B4oTnZaxjqvN2wge2MRG8t%2Bzr1iYP%2BNObTx%2BcFNuJRdPr224a9epNu9i5vV9TgLhTJPkMDz2dBdyt91oLr%2FE03ZBLSObxgG9NaOwTU7aAG0ddgsxOYfxokdzKBDAlYeltmZvXlqzo9l8TxQFi343jIQAueOT7KWvBoA3L6PpGSQWlPo%2FdD62W7WVrN84K7svLOyOXEngOwrpZ%2B%2FnpaeuCJ%2Bqkl8dRfm1WcCaDAthNIP6uxHpgITjC5jd69BjqkAXMsrsvrdCbCRNF1yXJpj5dTK9P3OOvTxC8SU819H77J%2B%2B5Of10LVojfDCcfJ39wsOvYPG3qAObSZkXKZHN0oeu6pOaYJROAJeW4k48SBD0PQ6Ex4wCL2b7EDakdIQxk2HzubR3fC9c%2FCvGKauQDRq%2FDt7qBa69d6JoRGqU4OfXaWM0O6t1uvr0y0JcX6WvIp1cg6Ko4CeWgFd07Tyjx%2BFZk%2FgIi&X-Amz-Signature=32e8a2b57ff45fb97abedb27f2e5e088d765034e208f8282f8b4eb300a5d4d68&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCT4XUQ7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjR1A9IAlC1XlAQqpBVTbm4ExTrMLXuniP15WskOjMOAIhAJOiqlJVkdCym8JMMLtjiLvq%2FCbJ60hKp7abJrWoO2JOKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu%2FRX81pfP7jjB8RYq3ANNd6sCjEBMwAtqs2M7c7vSCqbCG8FHQNgXQdpfmB6lWHP4EPzxQg6XKyK1Ki5AXu2YbysxiXL0Vgf9RJ5j5hMmgUu13ey%2BGcUWAsqHGC1UDaK1%2FaDtPc4CMi8kA0hk1givCAo7oxaxnXEE8x0HFTWqxj%2BrDgQAGphtag8VBRxf35oeFh31Rxhm2%2Fr0YDRwxn7EESMT4Lr9pPDZuvvZu7voeBgs%2FJb8r8U6xVij712hWclaplbrjBQpxR582Yge4JXqcR%2FeYl17k8TNbEdmqU3LUozbTuv0mQDyE9nK7nkn%2B%2FcbDgyb1HSM0BA8llR0oWnSP%2Bc8HKE2A7m6G%2FROK70XkYQAPezZXPSpL1nf8uKtN47%2FM9rBA2V8KYdMeF7aeFYovopsTa%2B4oTnZaxjqvN2wge2MRG8t%2Bzr1iYP%2BNObTx%2BcFNuJRdPr224a9epNu9i5vV9TgLhTJPkMDz2dBdyt91oLr%2FE03ZBLSObxgG9NaOwTU7aAG0ddgsxOYfxokdzKBDAlYeltmZvXlqzo9l8TxQFi343jIQAueOT7KWvBoA3L6PpGSQWlPo%2FdD62W7WVrN84K7svLOyOXEngOwrpZ%2B%2FnpaeuCJ%2Bqkl8dRfm1WcCaDAthNIP6uxHpgITjC5jd69BjqkAXMsrsvrdCbCRNF1yXJpj5dTK9P3OOvTxC8SU819H77J%2B%2B5Of10LVojfDCcfJ39wsOvYPG3qAObSZkXKZHN0oeu6pOaYJROAJeW4k48SBD0PQ6Ex4wCL2b7EDakdIQxk2HzubR3fC9c%2FCvGKauQDRq%2FDt7qBa69d6JoRGqU4OfXaWM0O6t1uvr0y0JcX6WvIp1cg6Ko4CeWgFd07Tyjx%2BFZk%2FgIi&X-Amz-Signature=3483b9ef62c9096675759a227ee15e334d4225860f4ebf206920d9bb967cb8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
