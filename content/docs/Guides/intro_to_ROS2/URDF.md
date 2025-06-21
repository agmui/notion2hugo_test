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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJCVNLJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjcdTDuwU7I9pZb04N4TjW4rbciTqBOYHnCV67E0%2BjdgIgc9boYZVqA2ZpzUJqrEZ3Fwqa0s09fvwJAOalOHb3kCMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0j1pkTV4U4WQ146ircA7yp4V86GGZgEdca%2BUcaIJmUaz8aKQNbbuOR%2FhrmfoXWoBI5QfSSs2whzL6PjR7%2BIPOzxlIPINNmc3UowqUai6MxazkhmpR8FoHpzl8w8Eo23bgH7hq2jjjds85kaF0szqQV2d5hSrOz4SMThqQtftoSJ4gSbywFBU%2Fj%2BwvLIJwg4ohHhKa9eJIiyRkyqAJyID389MRrZc6e2290zIheRbgQGrq1kkEqW8e67vGuhk5fychTV0c%2BtkfxlFPY2fUHsW4VivrPmihv2XbLZVu0M7%2BushzFA1Rlo77mczVm1vJ2h55JeeSeE0lrFoP7eQsWkLthfSXtwdnZOBM9FIfq0Bk6HRYGPqIYlYy20AqWTmffb0EwvcB2HVRwl197Mw%2FLe94zm3vYz7m4kwEgZbiBkLxUYlHC2hbrENhEBq3C5f505920LTsd74zhyN8os%2FmVo3e5SGeL9GKcUr9mLdNy4gJbwf6HMPLCeUCF1cQSuhqQ4wWDq5uLQcRWfx3QNP1Eo1ObDWwYpm7n8pSBscl7HiNv8JpgGGK8TZsJdthoih1p9C3RAvSQ0CgGiRva87wt4E7y%2B%2B8bnPTBsjmAM2KvFGSYoB8wIuw6QF7ePtvjO65PnMSvA4L8Esm%2FnwK0MN7d3MIGOqUBAJVE6khGUEUtpJ1KLwhth9Z46azKC%2FPa8V46ExgLMBBvLQ66ZantKznEv623dJH0KvMfwzPt3jA%2FdgH2SJkppDcfW4XtgX248bFebMRPkRhwd2FasT6ildeVYz%2FcxfAXc65u7u25rySoQackNMXA2NbdDYdluPsmgMqrCz%2BYcitiBZZlTgZSATrYim9bY5r6VtmJiROfkKr2aS4SSy1RG6S1LRCS&X-Amz-Signature=ffed10b2d8579796d1c92796ae9241c015a7254f9a5706105ddb040bb75cb54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJCVNLJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjcdTDuwU7I9pZb04N4TjW4rbciTqBOYHnCV67E0%2BjdgIgc9boYZVqA2ZpzUJqrEZ3Fwqa0s09fvwJAOalOHb3kCMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0j1pkTV4U4WQ146ircA7yp4V86GGZgEdca%2BUcaIJmUaz8aKQNbbuOR%2FhrmfoXWoBI5QfSSs2whzL6PjR7%2BIPOzxlIPINNmc3UowqUai6MxazkhmpR8FoHpzl8w8Eo23bgH7hq2jjjds85kaF0szqQV2d5hSrOz4SMThqQtftoSJ4gSbywFBU%2Fj%2BwvLIJwg4ohHhKa9eJIiyRkyqAJyID389MRrZc6e2290zIheRbgQGrq1kkEqW8e67vGuhk5fychTV0c%2BtkfxlFPY2fUHsW4VivrPmihv2XbLZVu0M7%2BushzFA1Rlo77mczVm1vJ2h55JeeSeE0lrFoP7eQsWkLthfSXtwdnZOBM9FIfq0Bk6HRYGPqIYlYy20AqWTmffb0EwvcB2HVRwl197Mw%2FLe94zm3vYz7m4kwEgZbiBkLxUYlHC2hbrENhEBq3C5f505920LTsd74zhyN8os%2FmVo3e5SGeL9GKcUr9mLdNy4gJbwf6HMPLCeUCF1cQSuhqQ4wWDq5uLQcRWfx3QNP1Eo1ObDWwYpm7n8pSBscl7HiNv8JpgGGK8TZsJdthoih1p9C3RAvSQ0CgGiRva87wt4E7y%2B%2B8bnPTBsjmAM2KvFGSYoB8wIuw6QF7ePtvjO65PnMSvA4L8Esm%2FnwK0MN7d3MIGOqUBAJVE6khGUEUtpJ1KLwhth9Z46azKC%2FPa8V46ExgLMBBvLQ66ZantKznEv623dJH0KvMfwzPt3jA%2FdgH2SJkppDcfW4XtgX248bFebMRPkRhwd2FasT6ildeVYz%2FcxfAXc65u7u25rySoQackNMXA2NbdDYdluPsmgMqrCz%2BYcitiBZZlTgZSATrYim9bY5r6VtmJiROfkKr2aS4SSy1RG6S1LRCS&X-Amz-Signature=c766f654f0b6a700cda63769e3e0922f9370ebe9ca8774ceac6ea988f54e0efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
