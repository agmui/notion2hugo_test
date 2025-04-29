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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565YCK6X%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqMqQkwMlpTR2HvvhId8%2FlR6xu6B3EDWlvIO3HZzhFcAiEA99i2ZULwvIJmPiK%2Bloq45W15%2BQruHZtMs0%2B7u1ghqkEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7gBjbWw0b4up4p%2BSrcA8ygFXJ3NlBECT91WE2TRA3dogEFidJem%2B1uaFodt7xFS0oTXbhgF4vIvOyKnjb25jork29coBhcRlrnh%2B0kydNI9glmdQeomx3%2BPssF0eFSQ2uVVtRxvh3gWKsyIkMXLHryRDyP6%2Foj1cNqa9WV40zxQ6OYlcULHYkSNrkfUqEG%2BDTrHUo%2B%2B3GT%2BkXbxY23FxAJA3EZfyoVXFZ4JXTgiI9tHOKvmd%2FMjtdV46penMQGkYEzmU8ds6tc7Xqh6RtkwS%2FkGH0Ksk2GkhIiaKYV6ui3gmDraQ3QiuBp%2FdED9wJ7ADYbFnPQ7PcV4ASuvCaoLfbfHQ94dCaAFZvCmJeiaqdtpYzwUw9JcILvQq4yjXAITEn1u4u5QiS3msxgGuz1gRi2Cz4y3XpkDuI8wgIUY%2FA0HPj1fZu9ShEWn7ulxOacTRINu%2Bl7bqAfqVWMLtLFGza6KHJVoDvT0QwH8NQp2jSZOtcryYdankR8qaq8Qe%2BbIbuGgLe6Xs6flp1vbuoFJMY5vVJC076nKLGtqDqHxT4C3U3Em2unOt28tgU9dRr7m93P0hu9RNcsd3RqFid1dKNIAUqK6zGaSLewcLH7HnhLuLGR85HEXjgU%2BORxUfmCzXLqOei6ow5DLR6KMNqnwsAGOqUBS2%2BiFtvJ725hrcWX1K3zNrBdoDVyWleEYGFvbgHuakFdxnn6uB3eUgrcOSLh1tH3gWhuykzWzM1l2LlT%2Bxa9XnJWQPeYOqCxM9RKuZQuD9i5gU49YdQi8vNWEYr2185%2FWbK2ixARORMBuBPaNrrEKYHjsBdCgoGMaHr3MSrzCEcVaBqw6R6Jmz4%2Bmwr2szuU3P3W540TSzSoYBmLVSc2TmYmgEc9&X-Amz-Signature=a6c616a62a9dae2e4d9d0dad82ffde4a4f75028126689ad220c60b86671d3481&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565YCK6X%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqMqQkwMlpTR2HvvhId8%2FlR6xu6B3EDWlvIO3HZzhFcAiEA99i2ZULwvIJmPiK%2Bloq45W15%2BQruHZtMs0%2B7u1ghqkEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7gBjbWw0b4up4p%2BSrcA8ygFXJ3NlBECT91WE2TRA3dogEFidJem%2B1uaFodt7xFS0oTXbhgF4vIvOyKnjb25jork29coBhcRlrnh%2B0kydNI9glmdQeomx3%2BPssF0eFSQ2uVVtRxvh3gWKsyIkMXLHryRDyP6%2Foj1cNqa9WV40zxQ6OYlcULHYkSNrkfUqEG%2BDTrHUo%2B%2B3GT%2BkXbxY23FxAJA3EZfyoVXFZ4JXTgiI9tHOKvmd%2FMjtdV46penMQGkYEzmU8ds6tc7Xqh6RtkwS%2FkGH0Ksk2GkhIiaKYV6ui3gmDraQ3QiuBp%2FdED9wJ7ADYbFnPQ7PcV4ASuvCaoLfbfHQ94dCaAFZvCmJeiaqdtpYzwUw9JcILvQq4yjXAITEn1u4u5QiS3msxgGuz1gRi2Cz4y3XpkDuI8wgIUY%2FA0HPj1fZu9ShEWn7ulxOacTRINu%2Bl7bqAfqVWMLtLFGza6KHJVoDvT0QwH8NQp2jSZOtcryYdankR8qaq8Qe%2BbIbuGgLe6Xs6flp1vbuoFJMY5vVJC076nKLGtqDqHxT4C3U3Em2unOt28tgU9dRr7m93P0hu9RNcsd3RqFid1dKNIAUqK6zGaSLewcLH7HnhLuLGR85HEXjgU%2BORxUfmCzXLqOei6ow5DLR6KMNqnwsAGOqUBS2%2BiFtvJ725hrcWX1K3zNrBdoDVyWleEYGFvbgHuakFdxnn6uB3eUgrcOSLh1tH3gWhuykzWzM1l2LlT%2Bxa9XnJWQPeYOqCxM9RKuZQuD9i5gU49YdQi8vNWEYr2185%2FWbK2ixARORMBuBPaNrrEKYHjsBdCgoGMaHr3MSrzCEcVaBqw6R6Jmz4%2Bmwr2szuU3P3W540TSzSoYBmLVSc2TmYmgEc9&X-Amz-Signature=75fdb39c865e344bfd2fdae03853fabbfb62d2707d88eecb71429143b8ac42fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
