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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGCYFXD2%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAbsumBjiCK7wnlftM2TVnjMsrcLnNFNPNMASQWIPn0KAiAnEMD0ezOZ%2B3AX8twaPbJwMV4JfHSJTyHVSz57M0nFoCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMkzM0LUrftV18IZpKKtwDL1EU%2BVkhIaXTkZvPHMr9Zn%2BHiLpPm5H4s8934H9YJFzKFEZ0eIOiPGwZTRyTQ%2B8DvifkQHE545PHgcJeU5ZERVmYyS6L5CFeRjEmGOSkS%2FFd9FYJpWv2BzHVOQSTRL%2BdNa6HeH8nY1ugJOMElZpBpuyFfJzpL9eHcQ3Q3Vmvd4yUGTI1oaUzyEOkXk89gC%2BP0VbfnJ6VGEkpoWuA07%2Bgu3Zkg%2FbuvJ69pk5nTXgK7Qvbq%2Fo7x%2Fi6mc6lITFpiK5hC2s7ang30aIH%2FcxPvh67Ern3bm31qYX0ScO3txHeHGrXlyiv%2FGBS%2BZv8IZsxeit4QEKpSPz9yv2qNVwbRA84CjlMxlgkgchI5EooBjkatdNcYncatiWwfYOHypUNjsW8sBSk5%2F8885kSdDHRoqAOi0Qdqnm12itDDDWzWZI818DB91204VoJfHrpEuWQHf3WCtsyc0UHbh9DBLzMk%2F6Vf3BtKyVkeYaZmCKY1g1S0iZfC0ojLlKMClA6pS4GVJd5bHvDqK9w5j3T1xf8NJSEUKY0phTx7P25%2FH%2FVYcuuQ%2BEaQhLWd43f1vfU83bgEOY0WZ%2B1HjVVlkMSysyTFTKI6xkp%2FBPQqUZ%2FSrsYzOvwegGxYJIW5eDbmmf39I4wge2D1AY6pgEHdgFYgoFi0rjtZAICPp%2BpKucD%2FM8uP3t9%2Fey0nqMStahE5zSFzLJ7rucX5lm8aTjkbnGL2a3T6VchJhx%2FiPgfwDkmyvZuMAWscoUDBFL8R6VwDOgXL0w2ttTnqnwKBn1gXFf%2FMrIOo9I8W0PZLXhiwPp7mEwz891k46yUaTvnojxZsv7qDclr50zXoCuFhIFFko2h0GmWfEQnKeRTTtN9aV0p%2Fx%2Bb&X-Amz-Signature=06b3e63703220fa2ef6e4c764c0cc9b06ef0f20f5c88e5082475cea5a7f9133d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGCYFXD2%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAbsumBjiCK7wnlftM2TVnjMsrcLnNFNPNMASQWIPn0KAiAnEMD0ezOZ%2B3AX8twaPbJwMV4JfHSJTyHVSz57M0nFoCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMkzM0LUrftV18IZpKKtwDL1EU%2BVkhIaXTkZvPHMr9Zn%2BHiLpPm5H4s8934H9YJFzKFEZ0eIOiPGwZTRyTQ%2B8DvifkQHE545PHgcJeU5ZERVmYyS6L5CFeRjEmGOSkS%2FFd9FYJpWv2BzHVOQSTRL%2BdNa6HeH8nY1ugJOMElZpBpuyFfJzpL9eHcQ3Q3Vmvd4yUGTI1oaUzyEOkXk89gC%2BP0VbfnJ6VGEkpoWuA07%2Bgu3Zkg%2FbuvJ69pk5nTXgK7Qvbq%2Fo7x%2Fi6mc6lITFpiK5hC2s7ang30aIH%2FcxPvh67Ern3bm31qYX0ScO3txHeHGrXlyiv%2FGBS%2BZv8IZsxeit4QEKpSPz9yv2qNVwbRA84CjlMxlgkgchI5EooBjkatdNcYncatiWwfYOHypUNjsW8sBSk5%2F8885kSdDHRoqAOi0Qdqnm12itDDDWzWZI818DB91204VoJfHrpEuWQHf3WCtsyc0UHbh9DBLzMk%2F6Vf3BtKyVkeYaZmCKY1g1S0iZfC0ojLlKMClA6pS4GVJd5bHvDqK9w5j3T1xf8NJSEUKY0phTx7P25%2FH%2FVYcuuQ%2BEaQhLWd43f1vfU83bgEOY0WZ%2B1HjVVlkMSysyTFTKI6xkp%2FBPQqUZ%2FSrsYzOvwegGxYJIW5eDbmmf39I4wge2D1AY6pgEHdgFYgoFi0rjtZAICPp%2BpKucD%2FM8uP3t9%2Fey0nqMStahE5zSFzLJ7rucX5lm8aTjkbnGL2a3T6VchJhx%2FiPgfwDkmyvZuMAWscoUDBFL8R6VwDOgXL0w2ttTnqnwKBn1gXFf%2FMrIOo9I8W0PZLXhiwPp7mEwz891k46yUaTvnojxZsv7qDclr50zXoCuFhIFFko2h0GmWfEQnKeRTTtN9aV0p%2Fx%2Bb&X-Amz-Signature=0db881008fb6f30944cdcd6e54cefae0e20ff43a5127ed28a637f1336ee94293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
