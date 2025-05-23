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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3WZP6U%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDCi4wEBpN1gr6XBHzIMpgYc7fm1FWlmPmH4EgGYLlzOgIgMwAVrzXIFdWNysRQqvc3l1f57ktWYkJ1%2FeoMLWI9jkgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsek0rry8vtVzUPDCrcA605x7eQz%2BvMS5IsOsiHLikoDzsrycw2Pcvy%2BKX7A3bMwc3%2FGelHrcY71Gvre4fEp87rFE0nztTXJyyLkt%2FCUiEjBH7DS%2F9CLcZM8VWI1IfNPSDKdEKfwkrHcRa3zAloQ1FwdNoJwMxXDUihyYFFsvbqXqbUCB90Px2z8U4AR5Ttuhz0IDADHMAylTKoR%2F85VILlZypi67NH51PmhgharGF9NYk8gk3xebM7rnYad31Lsam4zKNZRp8QjORIQaPr46JpBjnE1Yn%2BsT%2FkJXRLzp2Z72veFz5WQ%2FzOD1DW6kYqs3pbFSI%2B8%2FsYBHFR7NqCYbALogMALQJ6cBCRZTDI4EPQ42cxUwrtpe486seBw2UtJ6%2BzpjBgAQk6V%2FAk6kTJcQ9EoF9HQFLu%2FpA6BBOn10KzaVQ9LsUED163Iso%2BiQEUBjYQqCB4f5erfKjRoSrtcyD2oXLPtXTD%2FWQxluqEkQUk8mUs9tl6qjVWG%2F0Ko%2Fu4kIlCmQ0Fjfm5RNsyVNPgGK%2FHjIrOOCLL5jDM9CXxGFEP%2FlhZR7f5%2FIuPE4wfL2%2F2nCux7GA4z8ZdICKsZeAv%2FbZqUybyjfDQYmKLOXSWXxCKRseCLRNRBd7VihWRrq%2Fj2Nz9BbF5y%2F8XRO4gMPChw8EGOqUBpRMH1JD4ny6a9EcU1QJH1M%2Fx8k7Mgj2GUSEXDGGWuK5eQaRdDRq3JLozi9Mnu6MzjVnV%2Bd1s8%2FSMnfqthpxXBiqq1bGfq28ruSGwfqgkOO9esujzeiXoLMU0BSSgyiGJZq%2BQ%2B3s56wD1fmask0MGZZHtPN4SwLt25QvjzbAt08FBX5ZNjvBVcxk9W8QIxS7qth4%2BeX1XzFmIOrgVbH7t1XQQFLEF&X-Amz-Signature=a298b904913d08aff271852b378a2e8d4cafd15461a65005cc4a2daa09999173&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3WZP6U%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDCi4wEBpN1gr6XBHzIMpgYc7fm1FWlmPmH4EgGYLlzOgIgMwAVrzXIFdWNysRQqvc3l1f57ktWYkJ1%2FeoMLWI9jkgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsek0rry8vtVzUPDCrcA605x7eQz%2BvMS5IsOsiHLikoDzsrycw2Pcvy%2BKX7A3bMwc3%2FGelHrcY71Gvre4fEp87rFE0nztTXJyyLkt%2FCUiEjBH7DS%2F9CLcZM8VWI1IfNPSDKdEKfwkrHcRa3zAloQ1FwdNoJwMxXDUihyYFFsvbqXqbUCB90Px2z8U4AR5Ttuhz0IDADHMAylTKoR%2F85VILlZypi67NH51PmhgharGF9NYk8gk3xebM7rnYad31Lsam4zKNZRp8QjORIQaPr46JpBjnE1Yn%2BsT%2FkJXRLzp2Z72veFz5WQ%2FzOD1DW6kYqs3pbFSI%2B8%2FsYBHFR7NqCYbALogMALQJ6cBCRZTDI4EPQ42cxUwrtpe486seBw2UtJ6%2BzpjBgAQk6V%2FAk6kTJcQ9EoF9HQFLu%2FpA6BBOn10KzaVQ9LsUED163Iso%2BiQEUBjYQqCB4f5erfKjRoSrtcyD2oXLPtXTD%2FWQxluqEkQUk8mUs9tl6qjVWG%2F0Ko%2Fu4kIlCmQ0Fjfm5RNsyVNPgGK%2FHjIrOOCLL5jDM9CXxGFEP%2FlhZR7f5%2FIuPE4wfL2%2F2nCux7GA4z8ZdICKsZeAv%2FbZqUybyjfDQYmKLOXSWXxCKRseCLRNRBd7VihWRrq%2Fj2Nz9BbF5y%2F8XRO4gMPChw8EGOqUBpRMH1JD4ny6a9EcU1QJH1M%2Fx8k7Mgj2GUSEXDGGWuK5eQaRdDRq3JLozi9Mnu6MzjVnV%2Bd1s8%2FSMnfqthpxXBiqq1bGfq28ruSGwfqgkOO9esujzeiXoLMU0BSSgyiGJZq%2BQ%2B3s56wD1fmask0MGZZHtPN4SwLt25QvjzbAt08FBX5ZNjvBVcxk9W8QIxS7qth4%2BeX1XzFmIOrgVbH7t1XQQFLEF&X-Amz-Signature=2e15103ba5c94a9f5ac996fb55d4367f6401731d14e8a762f215865e421f1a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
