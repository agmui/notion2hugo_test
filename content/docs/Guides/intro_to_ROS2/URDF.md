---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2QSQ7H%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvjiMIqibWKEosXGt29xB0LAp5bqZB8zAtauby9HbI3gIgPOODjh2ZBMSysQCbqd8E1EHTwHp9LQPz6qqriLV2bD0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCSFhmwaRBXOVIpSoyrcA0JS3WBXYlkDblQdcuYBIPtXB2hAcYKLM3zdpaK7QOQs%2BdpMWUoD1E53XKznt5BlUxc%2B3mPJ5db8DDIJsmyxGiJ4kgy1EACjsnDmByN4rIVosMva86%2BL%2FlnVqAxds5ZWK1X13u2rwhVUaoS449tiwe6l3l%2Bhoy10yGRxwwZeLkOPGvbM%2Bv6Mvn0GBTEEaRhd3Vahhr%2FFBFCQ42s3%2B7OvdwLVXbBVtlnTBGu2Qa2BEE08tuju3P6M1I%2BrlBztX31oUu6Tb2nuRKuHKWgb6hoRKSc7BJRUOZwvSsQZMoDMoaieltuVu8yqcy3mAzylPqm3UdWb7alJqAIPTKbWTzqL%2FvE6Ycnv20XhwQDOBaxHuofSHbfyRJWaS2gu1pmFX4ePrc0Uh1d9Noy1WN4BNZPtY3zUJuqW8MQheCKDSibXsjZISWV8Fe8XuvHJpSM4ni%2BorVDOgGd0I9Q5jNHoPqB8x4ZCu4SYJGEnIcA%2BXmCn8w4YmuaEPZwR5DMkrdxxGfPurPpC5Jd9Y7TMhJwFfa0X%2BJmAd0GepzESEtE4nGi%2Fg4%2Bihwk5E9ZfIP4RgMcNX%2FHjdlpWoe%2F6Ms5gnW4VyUsOJA2kicNyTVwyx54nWK9TbQqk9cKFBAIZikzyn7KbMJOLuMQGOqUBAHpLXI17ED6L%2Bq10tSkuUj%2BdJdMVFoFbBMmRzF5gr%2B%2F8GJLHADz0DHQA%2FOfvJ6hM4%2B0fvQhnN28LYz6axlbpxBThbOha7Ii9FqpCwFCAYlbr%2FITdYrVsVdTmHY7K4DT1X1wEoeYic0gGU2Aq2P1Z7UEXzZBOpawflsxbrtW%2B9HeGlchtzMio6jkJ9ZgbfNRJeqOsU0t3Dv1RuOvFhK4T2D6HALdW&X-Amz-Signature=eba40fae4cf8beefd7d3789c03b3ac219b2153ef7600e8a4d30c582835bcbd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2QSQ7H%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvjiMIqibWKEosXGt29xB0LAp5bqZB8zAtauby9HbI3gIgPOODjh2ZBMSysQCbqd8E1EHTwHp9LQPz6qqriLV2bD0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCSFhmwaRBXOVIpSoyrcA0JS3WBXYlkDblQdcuYBIPtXB2hAcYKLM3zdpaK7QOQs%2BdpMWUoD1E53XKznt5BlUxc%2B3mPJ5db8DDIJsmyxGiJ4kgy1EACjsnDmByN4rIVosMva86%2BL%2FlnVqAxds5ZWK1X13u2rwhVUaoS449tiwe6l3l%2Bhoy10yGRxwwZeLkOPGvbM%2Bv6Mvn0GBTEEaRhd3Vahhr%2FFBFCQ42s3%2B7OvdwLVXbBVtlnTBGu2Qa2BEE08tuju3P6M1I%2BrlBztX31oUu6Tb2nuRKuHKWgb6hoRKSc7BJRUOZwvSsQZMoDMoaieltuVu8yqcy3mAzylPqm3UdWb7alJqAIPTKbWTzqL%2FvE6Ycnv20XhwQDOBaxHuofSHbfyRJWaS2gu1pmFX4ePrc0Uh1d9Noy1WN4BNZPtY3zUJuqW8MQheCKDSibXsjZISWV8Fe8XuvHJpSM4ni%2BorVDOgGd0I9Q5jNHoPqB8x4ZCu4SYJGEnIcA%2BXmCn8w4YmuaEPZwR5DMkrdxxGfPurPpC5Jd9Y7TMhJwFfa0X%2BJmAd0GepzESEtE4nGi%2Fg4%2Bihwk5E9ZfIP4RgMcNX%2FHjdlpWoe%2F6Ms5gnW4VyUsOJA2kicNyTVwyx54nWK9TbQqk9cKFBAIZikzyn7KbMJOLuMQGOqUBAHpLXI17ED6L%2Bq10tSkuUj%2BdJdMVFoFbBMmRzF5gr%2B%2F8GJLHADz0DHQA%2FOfvJ6hM4%2B0fvQhnN28LYz6axlbpxBThbOha7Ii9FqpCwFCAYlbr%2FITdYrVsVdTmHY7K4DT1X1wEoeYic0gGU2Aq2P1Z7UEXzZBOpawflsxbrtW%2B9HeGlchtzMio6jkJ9ZgbfNRJeqOsU0t3Dv1RuOvFhK4T2D6HALdW&X-Amz-Signature=7fe93a3053d55046b6364edc0f625af9af883cad00f52e609bf1c8657d0048e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
