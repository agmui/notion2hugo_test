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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIZPXW5D%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxPME6QEB0CBihOLIcgSRLWjTpZ8YFT2m6uqdWDuWZQCIA7U1pIWBy1PBocgCB7fiur4EfJjzrZJubepHbGINV3FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysEstQ1nK8%2BHaXgmEq3APl9ooB6uT0h0XkhRNW76gvymr1pU0W4NNy70jHAZ67sHK9ReYqw%2B2yVC%2BNL2iGJRn6NX4lTV00IXFLJ57%2BvX7BtUz%2FyV%2Bb3aixalFwrkLXsJC6dqcU6orBvMlYcQIcD7tUYO7pIrYKSmUnMJa5093Sh9Vi%2FohqdrdyMiIlThRfL5%2FlpD6hvVOY8avgHahtt4IF%2BuzWBS5nheqMrZaOc58N1xJe1kdPX2SX8B7me5HGcaQbAk2gP%2Fz9wpoV8QaoPlJlWa7Xv6QKow8QtOAOoOcqyuYt4LoPOXenJMAqQH%2BFjXdpNUIKq1mypuLTXQXq5zSHgUCDDVuPRVCPRJemAcJ%2FsfC8TtdVRl03774HBn5C57iz02VNMbFlmgGJmm04f93GeZDGrL4H6TTSy6bnlfmZNufr0AO8wFjc%2FriYNNDfCEtNIfiftmG%2BKAkVOYJ65JxOVw71D0DHjfl7ww%2Fk9Ms%2B5DAXES%2FgB8wM%2F7qmPBNhkbn1JiJKVOfyLCcLkC7Uw4sfbswjb4%2FTibTUBL0cDC0%2BLCD4GA%2FLtQKUReL%2BcC%2BHIlJfK9tXs0Ln8VbAhJvn2FaGHHIMh3MXzSDeQufG8nE%2Bak7LhqhoQ9hyZbI%2FUd%2BfDz14OuCQEuFZAac9oTCAvfu8BjqnAR7xuRlRb4sJ1kJ7%2BR%2FQdK2fsbJJy2WElWB64nBHjk3K8QKqZw1KBFWPAoHW%2B47%2BNQCQOVCKkupihmW4WnMGvvK95M5xisF2pj3a8bd3A2fnWuyO6SWclZy4MjbWCcnR6RzXT4OimKo3BS81eNNyUXXaiaD2s7nbZsen69aR%2Fi9XK%2FM51Dl5N55%2BbykGEy71Nm6gbv%2FZPvEsC0%2FBuBKFdvT9GjfSjOBt&X-Amz-Signature=1becf68151a6c8998c63041aedac5f442364271ebd544ee8bab1702ea0096149&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIZPXW5D%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxPME6QEB0CBihOLIcgSRLWjTpZ8YFT2m6uqdWDuWZQCIA7U1pIWBy1PBocgCB7fiur4EfJjzrZJubepHbGINV3FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysEstQ1nK8%2BHaXgmEq3APl9ooB6uT0h0XkhRNW76gvymr1pU0W4NNy70jHAZ67sHK9ReYqw%2B2yVC%2BNL2iGJRn6NX4lTV00IXFLJ57%2BvX7BtUz%2FyV%2Bb3aixalFwrkLXsJC6dqcU6orBvMlYcQIcD7tUYO7pIrYKSmUnMJa5093Sh9Vi%2FohqdrdyMiIlThRfL5%2FlpD6hvVOY8avgHahtt4IF%2BuzWBS5nheqMrZaOc58N1xJe1kdPX2SX8B7me5HGcaQbAk2gP%2Fz9wpoV8QaoPlJlWa7Xv6QKow8QtOAOoOcqyuYt4LoPOXenJMAqQH%2BFjXdpNUIKq1mypuLTXQXq5zSHgUCDDVuPRVCPRJemAcJ%2FsfC8TtdVRl03774HBn5C57iz02VNMbFlmgGJmm04f93GeZDGrL4H6TTSy6bnlfmZNufr0AO8wFjc%2FriYNNDfCEtNIfiftmG%2BKAkVOYJ65JxOVw71D0DHjfl7ww%2Fk9Ms%2B5DAXES%2FgB8wM%2F7qmPBNhkbn1JiJKVOfyLCcLkC7Uw4sfbswjb4%2FTibTUBL0cDC0%2BLCD4GA%2FLtQKUReL%2BcC%2BHIlJfK9tXs0Ln8VbAhJvn2FaGHHIMh3MXzSDeQufG8nE%2Bak7LhqhoQ9hyZbI%2FUd%2BfDz14OuCQEuFZAac9oTCAvfu8BjqnAR7xuRlRb4sJ1kJ7%2BR%2FQdK2fsbJJy2WElWB64nBHjk3K8QKqZw1KBFWPAoHW%2B47%2BNQCQOVCKkupihmW4WnMGvvK95M5xisF2pj3a8bd3A2fnWuyO6SWclZy4MjbWCcnR6RzXT4OimKo3BS81eNNyUXXaiaD2s7nbZsen69aR%2Fi9XK%2FM51Dl5N55%2BbykGEy71Nm6gbv%2FZPvEsC0%2FBuBKFdvT9GjfSjOBt&X-Amz-Signature=a4741204e1034d0561434ba37ccae55c1718dfb2037bedebed93887abd54f873&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
