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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJXGSJC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC3GGrD4fZEYsMVZ%2BB5QYNjL1FF%2Fy%2B26YQnxEYtNNsRmwIgEfEuSfV3CuAtkrdHE0Kb8FTUbXTy4%2F645G20dtmbavMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHdRy4Os%2FMYASOLVsSrcA%2B8pz19lzAXn0LSyZ1xvedcZT4qOBgWqCTedNT0AxWpLSiHgcB299tDns5%2FjOQM8TvYosYLi27o8BPdl%2BpRnBP0LfbZQqQ5xerfW7f5VRWMoAC97qTQ3qFnKQrVYzOr%2FnNKG3YQ5DbCy91LaZLMbW67h0khk7DiL1YB%2BV6VV2nbq1qNtPyYTJHZ2NbjTsFL7h3bI89iF0yBEvJNjVDocNhDU88XfWDQEZ%2FIFMxqYOlfMOm6rMWC4R4Uh0NumZiqgEaByYdavMMSAHhVLtEwGQq9c4%2Fp5NBqNSEwDk079MSIx5uV8%2Fham3090SN3QlAAia4twrxdcreTnvLV8SqYwnV4TJxGU1nUDqhEsRdnYj1NoKXHms03MPRixU4tOHsXUbAO4kdMCn%2F7mDh3xRjS2oEgn9YE%2FDCX7GLtqNa9KSit95hV%2B%2BIL3aW9Huc4Q8gvA3BiJELLThWN3lViIhn0TBVoPjhaeAZ2eHUFACoOYf9YWLf1A%2F37KMkP60XdBoWm6A2jH2eGRuT2dbsgwtm6bqp7eFtEdndFbzn3ITeKEHaMnC4E4j4Z7VFLCVlGj%2FC59NUbRDGJCYd%2FOjtzuEAsX2I5XJPWli%2BuLbrK5tNneUef0xuKw0N8oAprEEu0%2BMPTC%2BMQGOqUB2gxQZa1CpRM%2B2ul3zXh5Bdme1AeqjGL2uAl%2FKqEGI5I3LvBzGHqAYBSgC5T9WRlpHgMb1IcXnq6cuFTuA8MWhH%2BwQcOvCLHOjPGY5RDkMuA5R64Qr7sedueKPDRWLcleBhaE%2FxssRZy24%2FmztMhvGX7mwnwMQglbJXHGK0PG%2B0v4l0Mtznu6EgXvcM%2BdDy8sIy%2F2jeeZgITHimoguF3Htk6XOcHz&X-Amz-Signature=564f65a5b7d957591f07a6cf49f7dc54efc8e801b9c4234773d2c79819bd2587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJXGSJC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC3GGrD4fZEYsMVZ%2BB5QYNjL1FF%2Fy%2B26YQnxEYtNNsRmwIgEfEuSfV3CuAtkrdHE0Kb8FTUbXTy4%2F645G20dtmbavMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHdRy4Os%2FMYASOLVsSrcA%2B8pz19lzAXn0LSyZ1xvedcZT4qOBgWqCTedNT0AxWpLSiHgcB299tDns5%2FjOQM8TvYosYLi27o8BPdl%2BpRnBP0LfbZQqQ5xerfW7f5VRWMoAC97qTQ3qFnKQrVYzOr%2FnNKG3YQ5DbCy91LaZLMbW67h0khk7DiL1YB%2BV6VV2nbq1qNtPyYTJHZ2NbjTsFL7h3bI89iF0yBEvJNjVDocNhDU88XfWDQEZ%2FIFMxqYOlfMOm6rMWC4R4Uh0NumZiqgEaByYdavMMSAHhVLtEwGQq9c4%2Fp5NBqNSEwDk079MSIx5uV8%2Fham3090SN3QlAAia4twrxdcreTnvLV8SqYwnV4TJxGU1nUDqhEsRdnYj1NoKXHms03MPRixU4tOHsXUbAO4kdMCn%2F7mDh3xRjS2oEgn9YE%2FDCX7GLtqNa9KSit95hV%2B%2BIL3aW9Huc4Q8gvA3BiJELLThWN3lViIhn0TBVoPjhaeAZ2eHUFACoOYf9YWLf1A%2F37KMkP60XdBoWm6A2jH2eGRuT2dbsgwtm6bqp7eFtEdndFbzn3ITeKEHaMnC4E4j4Z7VFLCVlGj%2FC59NUbRDGJCYd%2FOjtzuEAsX2I5XJPWli%2BuLbrK5tNneUef0xuKw0N8oAprEEu0%2BMPTC%2BMQGOqUB2gxQZa1CpRM%2B2ul3zXh5Bdme1AeqjGL2uAl%2FKqEGI5I3LvBzGHqAYBSgC5T9WRlpHgMb1IcXnq6cuFTuA8MWhH%2BwQcOvCLHOjPGY5RDkMuA5R64Qr7sedueKPDRWLcleBhaE%2FxssRZy24%2FmztMhvGX7mwnwMQglbJXHGK0PG%2B0v4l0Mtznu6EgXvcM%2BdDy8sIy%2F2jeeZgITHimoguF3Htk6XOcHz&X-Amz-Signature=99d07d6379fc63e42a22711f49a972357bfb9dda71b828aaa67278f58214f0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
