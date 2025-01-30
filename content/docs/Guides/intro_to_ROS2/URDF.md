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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAIAWNL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVAxDZs%2FfrDAYCy3LlNC7V1fLZ9MuVJr7Ixl4rcjevzgIhAK4iDOTMma31Kpsu%2BJ6ENtPKzzg4QEiQ8IzdbcTDHbNEKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn31zlEw9t5y%2BL5Z4q3ANKzRfYVghDQY6e9TcPga%2FFxB9Qhftsb1Q%2BxI7CIl7Z091Q88BsxOVcM542rj5wPrrQXP5E4P0KZBxfCNJrZReFEYEBedRDBUHKaEdHWXn2M3gGyD0wZlibpOqo6vE8PVLzPLUIYgFIeY0B7Fr%2F5jeOn58c3esOErrPMq%2BTswj8t5BUbH2gpbUuyB44%2BCK6GPbyRGkS8fBx%2BxmOdRNW1MXO1D2jyLIjdEGWp6aRTxpwgMuquSAW%2FG46L27c21YnUORq0%2BeSSeP%2B%2BeCAc0vbIBMOya%2Fc5Y2Po21M30GwkvUz6JnB0lOrceGtL4TGL8kJLoDm3scSIWePBLeGrVp3rq%2BI7K6EBOmRgufQ%2Fq6X%2F9a97tyeIxb5A4CG23S7Y3RLTF1xli6AYbnnreZetYjQ68Rvk%2FGe3eXd%2BDajC7ChO00QI4pM%2FWcoawwAYkOM3VDHSk%2FkSqNG8TSVIfaak4AP0Ul2GkLME2By0S3p6pdlWJVKLoUJcRsr4VO4UYI%2B8jNHRRAhA35CCjlxzENJn9WkWC8VAq1YbNwTBjPIsgiibMQqed7TZ3bR7V587d3BAJlRdqNrnqog7VVSu7Ux3sFzb6nx8U0RVSYBniL5jzYvVeQVLds5rRsDTPwpowQuNTDqqu%2B8BjqkAcsByMq0RwEADUbL%2F%2B1EBNhIj%2FJcWBs4D8a3%2FjMnn9lnN0S9c7G4O1FGOdLR1CznvKOa6NALTx8yOfksNbSAZdZseBWDRRYPBt83E9ROC9YSNMUfwSISKEG%2BYwnYPmHDydPg3aCgO8js3nk5iOvT3IJ3LpbDZnooXcQ28upzxMSBAi81wT0W9nQVPfSTh%2Bob1oY8kiJXGR6I8IxyMRHCkuxr68B0&X-Amz-Signature=053320dea8393ad37837dd3c9761d1b14e5d4dfca0dfc36a16770368f0b096d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAIAWNL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVAxDZs%2FfrDAYCy3LlNC7V1fLZ9MuVJr7Ixl4rcjevzgIhAK4iDOTMma31Kpsu%2BJ6ENtPKzzg4QEiQ8IzdbcTDHbNEKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn31zlEw9t5y%2BL5Z4q3ANKzRfYVghDQY6e9TcPga%2FFxB9Qhftsb1Q%2BxI7CIl7Z091Q88BsxOVcM542rj5wPrrQXP5E4P0KZBxfCNJrZReFEYEBedRDBUHKaEdHWXn2M3gGyD0wZlibpOqo6vE8PVLzPLUIYgFIeY0B7Fr%2F5jeOn58c3esOErrPMq%2BTswj8t5BUbH2gpbUuyB44%2BCK6GPbyRGkS8fBx%2BxmOdRNW1MXO1D2jyLIjdEGWp6aRTxpwgMuquSAW%2FG46L27c21YnUORq0%2BeSSeP%2B%2BeCAc0vbIBMOya%2Fc5Y2Po21M30GwkvUz6JnB0lOrceGtL4TGL8kJLoDm3scSIWePBLeGrVp3rq%2BI7K6EBOmRgufQ%2Fq6X%2F9a97tyeIxb5A4CG23S7Y3RLTF1xli6AYbnnreZetYjQ68Rvk%2FGe3eXd%2BDajC7ChO00QI4pM%2FWcoawwAYkOM3VDHSk%2FkSqNG8TSVIfaak4AP0Ul2GkLME2By0S3p6pdlWJVKLoUJcRsr4VO4UYI%2B8jNHRRAhA35CCjlxzENJn9WkWC8VAq1YbNwTBjPIsgiibMQqed7TZ3bR7V587d3BAJlRdqNrnqog7VVSu7Ux3sFzb6nx8U0RVSYBniL5jzYvVeQVLds5rRsDTPwpowQuNTDqqu%2B8BjqkAcsByMq0RwEADUbL%2F%2B1EBNhIj%2FJcWBs4D8a3%2FjMnn9lnN0S9c7G4O1FGOdLR1CznvKOa6NALTx8yOfksNbSAZdZseBWDRRYPBt83E9ROC9YSNMUfwSISKEG%2BYwnYPmHDydPg3aCgO8js3nk5iOvT3IJ3LpbDZnooXcQ28upzxMSBAi81wT0W9nQVPfSTh%2Bob1oY8kiJXGR6I8IxyMRHCkuxr68B0&X-Amz-Signature=445465ccacc79e221ada604b5832038c0f10dc4294ddf7f979ecc782eb02ac00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
