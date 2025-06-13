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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBV3KFGU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIErPWg9VK99jnNIaDF3LfzpjU7yx0wc90O8CdiNpdLvAAiEA36lxbkVvTZizVXzSddVoyNdo59vGzUroY8DLdeZF2vIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBk7UESfweJiZGnDaSrcA1AaaIcyyALvSf2E1rTyUmYhDPfUsFc6sTl4wKdkjCoeJEN%2F%2FgzEBxVgP7LoFRpWjchafUAPrAQ8nzraAKWgBNn%2FwNKjxO2TGqsfjhXQ%2BiP5gk%2F6MvxwYMG0v0%2BhZVdgEYl%2B5crrG4gGowFWTJQ6eJt1bP1Q30G%2BllUHESPbWa81HLlGoS787hm6Ub6f3qZwQ47eAI4GMl5%2B7aV%2FXinXMcBUgQWB5bJv%2FhL%2FFNN%2BQzktuZBkmO9K%2Bvl%2Bhxc%2F2oEO0RheaFfFAAj%2BRl%2Fgnr%2BiaOHOfc21kY3vz94MNvEGOZAdtHfDUgzKgHPdUIJXeV6Gs9EQXPYLV6VvfwwpxFfHPdHoM4%2FGNgI4pApP09x6LAnW66wj5vM4Pt6JvWUFEIKZXtQpuE9o6bq40lFkpRNc%2FoGUn%2BL1kHRldzwFO%2FzHjA1zih6I4so3albwmwpuPijOFXi4qbAKC%2FwlTWPAsatTa8%2F%2F8PDeXEodzSAfPTrvPQwuf%2FqYkT6uEaePGtlTOs0L8BFrb%2FbxL0S6qIzR6K9NzEsC%2Bf8jF28ecRXE451vX%2FXlc%2B%2FIax1EEpLASV6Cxw%2BjJLNMhtzkwA6af0H3dHbqMkOi6slCiQiNK%2BRKdi8I1mRQDfI98s0V5inkTlHpMN%2FSscIGOqUBYVmmaPL%2FCcCtpb2SdYyAGvbW3BvEK5Yu3fv3FBhtV%2BmNpUPJUUhlJk2Rkk0jzk17ktlEgtH08MNxPv8Bt6Vd3tpTxIJ0Lv1q0jXAY6ZGt8fPC1d8LcLQIRGDjbHNhXJptTHWAfY%2B8uhElGpj2e8FzF25b4E9fVzvUoccWKnaf1HbAqb2VEgQ4WBZu3jqtokdDgk%2BGzG4UwOtPBGh8q49Xp8JbYel&X-Amz-Signature=31f35c9b57fd26a842566d9cb1010467829941fd201f288e1b19b543819d900b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBV3KFGU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIErPWg9VK99jnNIaDF3LfzpjU7yx0wc90O8CdiNpdLvAAiEA36lxbkVvTZizVXzSddVoyNdo59vGzUroY8DLdeZF2vIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBk7UESfweJiZGnDaSrcA1AaaIcyyALvSf2E1rTyUmYhDPfUsFc6sTl4wKdkjCoeJEN%2F%2FgzEBxVgP7LoFRpWjchafUAPrAQ8nzraAKWgBNn%2FwNKjxO2TGqsfjhXQ%2BiP5gk%2F6MvxwYMG0v0%2BhZVdgEYl%2B5crrG4gGowFWTJQ6eJt1bP1Q30G%2BllUHESPbWa81HLlGoS787hm6Ub6f3qZwQ47eAI4GMl5%2B7aV%2FXinXMcBUgQWB5bJv%2FhL%2FFNN%2BQzktuZBkmO9K%2Bvl%2Bhxc%2F2oEO0RheaFfFAAj%2BRl%2Fgnr%2BiaOHOfc21kY3vz94MNvEGOZAdtHfDUgzKgHPdUIJXeV6Gs9EQXPYLV6VvfwwpxFfHPdHoM4%2FGNgI4pApP09x6LAnW66wj5vM4Pt6JvWUFEIKZXtQpuE9o6bq40lFkpRNc%2FoGUn%2BL1kHRldzwFO%2FzHjA1zih6I4so3albwmwpuPijOFXi4qbAKC%2FwlTWPAsatTa8%2F%2F8PDeXEodzSAfPTrvPQwuf%2FqYkT6uEaePGtlTOs0L8BFrb%2FbxL0S6qIzR6K9NzEsC%2Bf8jF28ecRXE451vX%2FXlc%2B%2FIax1EEpLASV6Cxw%2BjJLNMhtzkwA6af0H3dHbqMkOi6slCiQiNK%2BRKdi8I1mRQDfI98s0V5inkTlHpMN%2FSscIGOqUBYVmmaPL%2FCcCtpb2SdYyAGvbW3BvEK5Yu3fv3FBhtV%2BmNpUPJUUhlJk2Rkk0jzk17ktlEgtH08MNxPv8Bt6Vd3tpTxIJ0Lv1q0jXAY6ZGt8fPC1d8LcLQIRGDjbHNhXJptTHWAfY%2B8uhElGpj2e8FzF25b4E9fVzvUoccWKnaf1HbAqb2VEgQ4WBZu3jqtokdDgk%2BGzG4UwOtPBGh8q49Xp8JbYel&X-Amz-Signature=8e504840658a56dddc4c025fbe0adf60957de3ff3938d5fbd2e27f9c6a4a7abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
