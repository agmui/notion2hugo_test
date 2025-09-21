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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEZRPYQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BeBuJbwBPS1KBKzIN4BkjEkCTQyO9BEwqNN0p1HmioAiEAi9Ae41%2FXFJyCGXCNxR3mrN5B2gy%2Ba6thmR7NCejrn8sqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzx1ls8tAuHqClKGircAyJIyB2d4WQYzDYnwgtst%2FnVn7nDbEwPur23YIKzduSLxxA6vNm2awbnOq6oJMHXwjlGWOu%2Bf%2BP0IomBSLqxA1aihNHHuy1AYLk3p14q56o0DDnGhF5VrKbhs%2BjPD6nIqNZNuurTmFFAo4UKWfXoWcQ1jo%2FL51gaH6aS%2BlL0R4rlMzZI6ideQArjZIv2I6txwndPS%2Ban%2BEPO8mY6fYp33DM7VhAbyFjKx4hwnUl3xcOF2%2BdN34k6q2HZzOe%2BJ36yGbHgvMT0DlMvNgvgvK%2FtQ57xC1laPZ1xw6sD%2FbpgdfnH0ZxR8eHU90zR6LENWKGGw93LtqD%2BS9AoKnmZxtPKDbE7X9p9JJ7J2gIuJ06IkLLCvQD6xkVhoq1vDYvpLhiW48GjQg4IaphXiDxGFZjNY0MHNpiQ3arTOiPjqQ7fCKlzfKcKTZ8krEiv6vKzCh%2ByFUEUKKQD5Qi1rGtobdiELvvuXiv5%2BVqWK%2F0gHFB%2F5BuW9%2FUbR6noTg8nBzQO8QYap5H412VOhferCbqlE90r2402pGrrCjWUU%2BESLYdIsH%2Fcr%2F5xuelLLDn8KIP0WjyptyQCejTEwMn1%2BTHaQiUv1UWO8BqaDjilmBabWwzZf00dRvoWKtPumHNinOU6MKievcYGOqUBUtktauhXBRORIQ5YyKqtCLKjYSdoKtvV2I3lWlFQ9odNEpt%2F1xNsKd99X%2BQ47y7XVg62aH4WfSbNMlv9TLbpFsrtQyQB2cgliI8jp2BTRqwO71MDZhxh8UkHzXr1%2BEJNSzzpwAq2o5iVvyw1rB1%2BBK9Ud7iwe5ezOrgrnrR5ybpcJD456zWOdiyuM432iYUQc6rm%2BepbprVVDNtAIvEplvBOd3sq&X-Amz-Signature=5d4b563da8de1587b081f9c0a7860521413a31978eef661889392c42b1f5de66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEZRPYQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BeBuJbwBPS1KBKzIN4BkjEkCTQyO9BEwqNN0p1HmioAiEAi9Ae41%2FXFJyCGXCNxR3mrN5B2gy%2Ba6thmR7NCejrn8sqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzx1ls8tAuHqClKGircAyJIyB2d4WQYzDYnwgtst%2FnVn7nDbEwPur23YIKzduSLxxA6vNm2awbnOq6oJMHXwjlGWOu%2Bf%2BP0IomBSLqxA1aihNHHuy1AYLk3p14q56o0DDnGhF5VrKbhs%2BjPD6nIqNZNuurTmFFAo4UKWfXoWcQ1jo%2FL51gaH6aS%2BlL0R4rlMzZI6ideQArjZIv2I6txwndPS%2Ban%2BEPO8mY6fYp33DM7VhAbyFjKx4hwnUl3xcOF2%2BdN34k6q2HZzOe%2BJ36yGbHgvMT0DlMvNgvgvK%2FtQ57xC1laPZ1xw6sD%2FbpgdfnH0ZxR8eHU90zR6LENWKGGw93LtqD%2BS9AoKnmZxtPKDbE7X9p9JJ7J2gIuJ06IkLLCvQD6xkVhoq1vDYvpLhiW48GjQg4IaphXiDxGFZjNY0MHNpiQ3arTOiPjqQ7fCKlzfKcKTZ8krEiv6vKzCh%2ByFUEUKKQD5Qi1rGtobdiELvvuXiv5%2BVqWK%2F0gHFB%2F5BuW9%2FUbR6noTg8nBzQO8QYap5H412VOhferCbqlE90r2402pGrrCjWUU%2BESLYdIsH%2Fcr%2F5xuelLLDn8KIP0WjyptyQCejTEwMn1%2BTHaQiUv1UWO8BqaDjilmBabWwzZf00dRvoWKtPumHNinOU6MKievcYGOqUBUtktauhXBRORIQ5YyKqtCLKjYSdoKtvV2I3lWlFQ9odNEpt%2F1xNsKd99X%2BQ47y7XVg62aH4WfSbNMlv9TLbpFsrtQyQB2cgliI8jp2BTRqwO71MDZhxh8UkHzXr1%2BEJNSzzpwAq2o5iVvyw1rB1%2BBK9Ud7iwe5ezOrgrnrR5ybpcJD456zWOdiyuM432iYUQc6rm%2BepbprVVDNtAIvEplvBOd3sq&X-Amz-Signature=ff262f8970c0277ce92ab1c7e5d9e978d7185b9cc77e664e822048222dd4d0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
