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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXSZVSA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCID0znaupPd%2BQCQrSTub3MX0mCpb4HLgskuCjfrPiNLpdAiEAxJZQNxKUv6I8ur7aLziA5fUTL8XivCcbhlqDLYrSCYoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLw7fo1oNz3VJVCtHCrcA73ZXdSHoyAqn2bFp%2B3tcUxRxf9BApiLSQhdjBLuhoFjXHRgYEvPKPNkup%2BIhc%2BqkD3G8Skqa%2Fqyev05nHHd%2FRiSNAMI8gMTXD%2FyHOQwvDICa5pS2oFCAe6%2FRI4KYhqngRGbky%2BhZ6m%2FlV8QCYFY3%2BKUSzQ8f6mKdeHOwx78dkK2%2BlJ3SGFRH7rcWJRpxp3K9gorXdI5W6fOxrIuylm2RIL07BWRkE50h5tSEVijIaX5duNQvOsk2cHGnTNboyZ6mU%2F1zgmZxV%2BIoVL38SeRZuUVC%2BVUfkJFKzhK2qewdL4MHWThuUqfl5Q21upYk84svVHW9vX%2F2mHRQMQ4y9J%2FhIc%2FvI3SnFxcWLXrPPHtl0k6MA57e1rfLW2N9P02v40B2u8vAwTh6vavVYAE8HXMQfcNHtXT%2FBwqxcKdSnG87mIF5kcpN5Y8rkFiz2mtuSOdeAizxFMEDMLIUWbnuKXHAI13cq9KJ5%2F0ZQbf%2BTeWwMI476OPUDKlm3ePEYiWqZrnnLg8fpmMVB0qliw0IwngMuDvK2emkp%2FL5wAiaznxFKLLLJyPRsauBREHKu0y1PPIyrfT25MZL2QNKVikWe2XpdYr20dMqQVO%2F%2BjnBXqBt7984%2FtitJwEGfDEhiYSMKaGksEGOqUBPwJyFmNZj8evHoSXLcuauz3LaJzh0t9hLK%2B7ueUWMcKrTlQhrvAF64rquFTZZHWHHswqF62aHvKsjjIZy4uapNmHt1sntHtqx%2BSsZ0VclmkT91DeKjQ0SpisFffVHJVdTxi5OFXFLnhNmL9M5zmr7WmbcPgQOrxKQWG8oC1RvNWJqDpDcML0lKdMIL8WZm3nm5VOLYPsoqPpmUAIttRjHoV5Sh%2Bs&X-Amz-Signature=e172b2041f31633eca73f371aa275d2cfd5460dff9ec146485cdb65263df61e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXSZVSA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCID0znaupPd%2BQCQrSTub3MX0mCpb4HLgskuCjfrPiNLpdAiEAxJZQNxKUv6I8ur7aLziA5fUTL8XivCcbhlqDLYrSCYoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLw7fo1oNz3VJVCtHCrcA73ZXdSHoyAqn2bFp%2B3tcUxRxf9BApiLSQhdjBLuhoFjXHRgYEvPKPNkup%2BIhc%2BqkD3G8Skqa%2Fqyev05nHHd%2FRiSNAMI8gMTXD%2FyHOQwvDICa5pS2oFCAe6%2FRI4KYhqngRGbky%2BhZ6m%2FlV8QCYFY3%2BKUSzQ8f6mKdeHOwx78dkK2%2BlJ3SGFRH7rcWJRpxp3K9gorXdI5W6fOxrIuylm2RIL07BWRkE50h5tSEVijIaX5duNQvOsk2cHGnTNboyZ6mU%2F1zgmZxV%2BIoVL38SeRZuUVC%2BVUfkJFKzhK2qewdL4MHWThuUqfl5Q21upYk84svVHW9vX%2F2mHRQMQ4y9J%2FhIc%2FvI3SnFxcWLXrPPHtl0k6MA57e1rfLW2N9P02v40B2u8vAwTh6vavVYAE8HXMQfcNHtXT%2FBwqxcKdSnG87mIF5kcpN5Y8rkFiz2mtuSOdeAizxFMEDMLIUWbnuKXHAI13cq9KJ5%2F0ZQbf%2BTeWwMI476OPUDKlm3ePEYiWqZrnnLg8fpmMVB0qliw0IwngMuDvK2emkp%2FL5wAiaznxFKLLLJyPRsauBREHKu0y1PPIyrfT25MZL2QNKVikWe2XpdYr20dMqQVO%2F%2BjnBXqBt7984%2FtitJwEGfDEhiYSMKaGksEGOqUBPwJyFmNZj8evHoSXLcuauz3LaJzh0t9hLK%2B7ueUWMcKrTlQhrvAF64rquFTZZHWHHswqF62aHvKsjjIZy4uapNmHt1sntHtqx%2BSsZ0VclmkT91DeKjQ0SpisFffVHJVdTxi5OFXFLnhNmL9M5zmr7WmbcPgQOrxKQWG8oC1RvNWJqDpDcML0lKdMIL8WZm3nm5VOLYPsoqPpmUAIttRjHoV5Sh%2Bs&X-Amz-Signature=dc70c8529dcc5f7d11594a7e9acce5d620ed71add986dfb3558b37e0d9bffa54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
