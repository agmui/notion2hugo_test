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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPOLCAT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsi3o1BHx8Mw6Wc1rfeMMeOhgLPEnhEnq4siLu%2FAISkQIgEq2IIlU14xbnxq2SlGHIQsPyzuP95GXZjzHYm%2B%2Bz1W4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsnLptcGb4jaMaT9ircA2gBrGzHmVjdHChij%2Fu1ArfZgyCv6KHoKHN65jFpORrYYdlkz6aQUqHoksZlNgu8rc%2FXv%2BZQVkYfHGaNgsNwy7yn%2Fhy%2FzQF5b5a%2Bi5QAwejoKh8s24u2rFQ9RrksPFRSNGDIL%2BOddlIMC2pbiO7EHi1AJgPSdfsv3GPMJebMGfX4HnaWQE9O2iKeMsOTqAa0fu797J7h5WI%2FM%2BRTHd3ujn45DK%2FxGlcZ7ls0aqZhYOk63j9dX6DHMpLI3eFnC7roFjrDTyxTxFM8PTTQCdZ5DIeFwOvWv0bvzUEMUINI4f677JGbJ074HREy6zgFHqcEf8mUiLmd%2FDM27kP0Da3sZZuOIAazuKaZhvPT9ebwCUSFv5tzzDn8AJrfdRZxbuukKGcWSmUfduzkmAHiRpV3giF%2F1bJB67Tm3eX1Pe14yJzi9S6%2Bat7mpYvD3Tp8sd4DR372UvdexgY%2BMuCl9PgUPQz4c0LBUssNwiSZLdKm9x4fXur7FEyAI4gCbAj4PFIa%2FUM4aqsFdPaigK96quaQyLDYocT0ip7PKbOt0OX%2B65%2BEdLcfvOxjOtZ03x14s1hcbtupPh5JD0BL4Js1bN6e6gTMN7%2BN9gnw8dSEwM%2FhafMiRnZbeboYg4P7faPaMKuG0L4GOqUBQu4vCrQiftDnM9dMmsBMb50hY4uAUdhvzJ3SaEY9hnVsbBcIeGme0mVqVyLfqOf%2BMn01%2BcPtG8T9HAvmGKN7DWFNChugj4do3yXDaujcNdKNQsUdpx3IRLaRiOazyeSnaasoxNnQM3FzlrF%2BYFjZCrzDKLSkEueSGsXCYu2afszZ0lTC3CnnKQYtnl6Uzh1b%2F88GOBPTLNjJ5dC5A4Wcrz3rzO9%2B&X-Amz-Signature=25fd0ed31c0269fb7e7b73663775479495143de5f91d7037916168b1dd0d0d99&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPOLCAT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsi3o1BHx8Mw6Wc1rfeMMeOhgLPEnhEnq4siLu%2FAISkQIgEq2IIlU14xbnxq2SlGHIQsPyzuP95GXZjzHYm%2B%2Bz1W4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsnLptcGb4jaMaT9ircA2gBrGzHmVjdHChij%2Fu1ArfZgyCv6KHoKHN65jFpORrYYdlkz6aQUqHoksZlNgu8rc%2FXv%2BZQVkYfHGaNgsNwy7yn%2Fhy%2FzQF5b5a%2Bi5QAwejoKh8s24u2rFQ9RrksPFRSNGDIL%2BOddlIMC2pbiO7EHi1AJgPSdfsv3GPMJebMGfX4HnaWQE9O2iKeMsOTqAa0fu797J7h5WI%2FM%2BRTHd3ujn45DK%2FxGlcZ7ls0aqZhYOk63j9dX6DHMpLI3eFnC7roFjrDTyxTxFM8PTTQCdZ5DIeFwOvWv0bvzUEMUINI4f677JGbJ074HREy6zgFHqcEf8mUiLmd%2FDM27kP0Da3sZZuOIAazuKaZhvPT9ebwCUSFv5tzzDn8AJrfdRZxbuukKGcWSmUfduzkmAHiRpV3giF%2F1bJB67Tm3eX1Pe14yJzi9S6%2Bat7mpYvD3Tp8sd4DR372UvdexgY%2BMuCl9PgUPQz4c0LBUssNwiSZLdKm9x4fXur7FEyAI4gCbAj4PFIa%2FUM4aqsFdPaigK96quaQyLDYocT0ip7PKbOt0OX%2B65%2BEdLcfvOxjOtZ03x14s1hcbtupPh5JD0BL4Js1bN6e6gTMN7%2BN9gnw8dSEwM%2FhafMiRnZbeboYg4P7faPaMKuG0L4GOqUBQu4vCrQiftDnM9dMmsBMb50hY4uAUdhvzJ3SaEY9hnVsbBcIeGme0mVqVyLfqOf%2BMn01%2BcPtG8T9HAvmGKN7DWFNChugj4do3yXDaujcNdKNQsUdpx3IRLaRiOazyeSnaasoxNnQM3FzlrF%2BYFjZCrzDKLSkEueSGsXCYu2afszZ0lTC3CnnKQYtnl6Uzh1b%2F88GOBPTLNjJ5dC5A4Wcrz3rzO9%2B&X-Amz-Signature=2e723be18f197995acdc955a5125603702d0d03cb9fd61e33784aec3d12348c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
