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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQP3PBPF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCuKMeiMQAZkPWjGjTrv4lqFAQdKsoE3e5RGXHx1OApMQIhAJVR6yDox%2FNSrpIDA1xqanhS1BAOFWymbfFgYhmrVLVbKv8DCC4QABoMNjM3NDIzMTgzODA1Igx5Ua%2FjeKbYew2YfvQq3APOVG2KrYAjOX6DR5TEqgVZvdoQLb%2B0uYxki8WyfKcaQ6R6LwceHMiO%2BGdN%2Fu%2BK9dmOxsAQPjRtVOsTdo0aDaD6vYsdtZw%2BpbRFbO2Ppr3BN2KohlWl1t3uBy1Lb78fgsGuEXkCzV0e02N4Do9ffbVVIx%2BNngRJoZesc%2Ft6Qo3Lx4IkeUn9qpdnlcFdfXtS%2Fy%2FqJAud%2BzeM8FJGHsPkkprCgzhjR%2BmNoZQSVIfukgNbB%2FeTIMod07U2j0fC2eCJWcfr09r4f1gDk%2BlkymdVKjJag0ioFvtu1X2vslYfEdo6xxjqdmTtEgf%2FNqfJiVcvySfTvHoTAF38%2B3pWstIMRH1ksyuxonhFqLHWTQBSCz9p7Z579aZaSp4aEzmHvgWCsQb9TRsJxaF3UEQZwhfEiw%2B5B195idlVttq9FjiG%2FIy5UDajTUHwsJ0aJy5QazpGWqQCqJoaayxbuIqnRAlLnVJRJarX6fGb0aTyhv4hHpgScPyis545p3GAwuJnBwd1a6JL4B%2FLAj9%2FPX%2FDYGdMmk4F1%2B2BNJstP58pcC3cdXNSFL2z%2FQoMvkVMU%2BVMqky8DVTFwfKBx5xLEtjRvtRpjEyL2chvLsVeOV9n45NmkLkBrd8ExdbdhJ%2F8zD6EPDCghNTDBjqkAdcz9U%2BKB2SJAMLxIxN0WqTWwK0oi4fROKSa9AiPhJIMBkR9iFSWqjbZ3HMDdkckmia2zm0SjCeEmYRaXrk95VJmBWnbUpgHQsLtBSkdybmM3gORy2gCD48SyFDtZDkPcpSg1v7qy8umaVYkelTdJ4NYJdrt98m%2FSJtcVmG6T5FmOfYuWy4mJ4xT7NSetVS%2FLjUv%2FvbHsLUPxIQWq5BuUKNotd3Y&X-Amz-Signature=5ad54a709f5a7547801d66859923775a2ba2a226fade16cd30781efdea5464b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQP3PBPF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCuKMeiMQAZkPWjGjTrv4lqFAQdKsoE3e5RGXHx1OApMQIhAJVR6yDox%2FNSrpIDA1xqanhS1BAOFWymbfFgYhmrVLVbKv8DCC4QABoMNjM3NDIzMTgzODA1Igx5Ua%2FjeKbYew2YfvQq3APOVG2KrYAjOX6DR5TEqgVZvdoQLb%2B0uYxki8WyfKcaQ6R6LwceHMiO%2BGdN%2Fu%2BK9dmOxsAQPjRtVOsTdo0aDaD6vYsdtZw%2BpbRFbO2Ppr3BN2KohlWl1t3uBy1Lb78fgsGuEXkCzV0e02N4Do9ffbVVIx%2BNngRJoZesc%2Ft6Qo3Lx4IkeUn9qpdnlcFdfXtS%2Fy%2FqJAud%2BzeM8FJGHsPkkprCgzhjR%2BmNoZQSVIfukgNbB%2FeTIMod07U2j0fC2eCJWcfr09r4f1gDk%2BlkymdVKjJag0ioFvtu1X2vslYfEdo6xxjqdmTtEgf%2FNqfJiVcvySfTvHoTAF38%2B3pWstIMRH1ksyuxonhFqLHWTQBSCz9p7Z579aZaSp4aEzmHvgWCsQb9TRsJxaF3UEQZwhfEiw%2B5B195idlVttq9FjiG%2FIy5UDajTUHwsJ0aJy5QazpGWqQCqJoaayxbuIqnRAlLnVJRJarX6fGb0aTyhv4hHpgScPyis545p3GAwuJnBwd1a6JL4B%2FLAj9%2FPX%2FDYGdMmk4F1%2B2BNJstP58pcC3cdXNSFL2z%2FQoMvkVMU%2BVMqky8DVTFwfKBx5xLEtjRvtRpjEyL2chvLsVeOV9n45NmkLkBrd8ExdbdhJ%2F8zD6EPDCghNTDBjqkAdcz9U%2BKB2SJAMLxIxN0WqTWwK0oi4fROKSa9AiPhJIMBkR9iFSWqjbZ3HMDdkckmia2zm0SjCeEmYRaXrk95VJmBWnbUpgHQsLtBSkdybmM3gORy2gCD48SyFDtZDkPcpSg1v7qy8umaVYkelTdJ4NYJdrt98m%2FSJtcVmG6T5FmOfYuWy4mJ4xT7NSetVS%2FLjUv%2FvbHsLUPxIQWq5BuUKNotd3Y&X-Amz-Signature=babec0df2b24ec0f12b7c4d22c8b378bcabc467943dbdd41e1dd94f305105ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
