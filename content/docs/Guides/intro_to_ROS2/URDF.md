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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAM7PZQY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh2itVUgM3dp5VuuUd1J1FZiCs6ay6%2B5OsUiGStdQ3mwIgYQUchqo3YwDxjGP%2FQJy7sWeZeSh7p4GYV4c3hzuFuk8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDUVYwG1RB20%2BqBIhircA8mc%2BCBCGb0DICcI5X2EOViI3QfMSt2351Kw1OHBTdsJOGPAzJRBRF%2Fze1rBibzdAxv8ZirSsEclsGSgoVAGkZ0kFmiZeiYkF%2FNWw6HaNFRr%2BPbhQepWnyMqf6IUb%2Bfzzu%2F0SucxDPIBeV%2BqJ2jUwgLUmuBpq6VLJC09MFAP6GpyWtzkdtbiRvMiHIK3ujakBKZ22NbDPbfEE1ESRcsXj2GnmKlV2vZWlRXFYRKHmwccXbRLtvF6ZI1TTJ7CGRUWe4EMVTyg7MWxER3%2Bs1eU5ZKaxKDdAMfmo8XHaQmFRPyFTmPvZhqW5e72WJZ%2B0tBA6s%2FSbh82KxWkdg4wI%2Fn6GpmlBRbde93IgpUe2mcOMCEymwwfKL7sNrx1BJPSdRQpaQXPHlNLZO2w6L7wXcFQpHyN%2Fy8Qa0OGHpr6TY4FtmABzw15Uaj3Ng8K6xElTAE3khXYV0mmFPL5h9vEzMX0ppWSKgEQPtrHWIpGlfDRFOLOJWXZO6Iv5jRXdC%2FvZwHnz1lEwnqIUCjNUNSgD7gRBQTS7fU039YeFWujI6CTmzjeoMQLs8WVRQ%2Ba7hnzmJGFBfGCWTTeU51FZ4kQ9%2FSTetcy2huruofE3ccGjdfdYsUwleidu%2BLYzdYoAkJsMNftkr8GOqUBgPnMsDKJXOGIViyCXNnjumYrjVhVDbBorX9v2cEvKx7vQ0j4JgolmJkdS7ic7%2BAppsJQG9HBvEtf5yVa9WYwkkR%2BoTFPlUfmtyxCP%2BLqmr2W6HsV%2BRxxr%2B290%2BVSVeUi66DKnNag3e7LWaANsqxTqaZ2ufOfnFnDrna81eNDCC2haKojKnATOj2nRoHMm%2B4NRKpvamgroaMjX0GR2FLr33LOlL%2F2&X-Amz-Signature=974c9eb97724fe163631f7d74e00b4089a86c14ff06f1d8f19748dcf27ed4e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAM7PZQY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh2itVUgM3dp5VuuUd1J1FZiCs6ay6%2B5OsUiGStdQ3mwIgYQUchqo3YwDxjGP%2FQJy7sWeZeSh7p4GYV4c3hzuFuk8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDUVYwG1RB20%2BqBIhircA8mc%2BCBCGb0DICcI5X2EOViI3QfMSt2351Kw1OHBTdsJOGPAzJRBRF%2Fze1rBibzdAxv8ZirSsEclsGSgoVAGkZ0kFmiZeiYkF%2FNWw6HaNFRr%2BPbhQepWnyMqf6IUb%2Bfzzu%2F0SucxDPIBeV%2BqJ2jUwgLUmuBpq6VLJC09MFAP6GpyWtzkdtbiRvMiHIK3ujakBKZ22NbDPbfEE1ESRcsXj2GnmKlV2vZWlRXFYRKHmwccXbRLtvF6ZI1TTJ7CGRUWe4EMVTyg7MWxER3%2Bs1eU5ZKaxKDdAMfmo8XHaQmFRPyFTmPvZhqW5e72WJZ%2B0tBA6s%2FSbh82KxWkdg4wI%2Fn6GpmlBRbde93IgpUe2mcOMCEymwwfKL7sNrx1BJPSdRQpaQXPHlNLZO2w6L7wXcFQpHyN%2Fy8Qa0OGHpr6TY4FtmABzw15Uaj3Ng8K6xElTAE3khXYV0mmFPL5h9vEzMX0ppWSKgEQPtrHWIpGlfDRFOLOJWXZO6Iv5jRXdC%2FvZwHnz1lEwnqIUCjNUNSgD7gRBQTS7fU039YeFWujI6CTmzjeoMQLs8WVRQ%2Ba7hnzmJGFBfGCWTTeU51FZ4kQ9%2FSTetcy2huruofE3ccGjdfdYsUwleidu%2BLYzdYoAkJsMNftkr8GOqUBgPnMsDKJXOGIViyCXNnjumYrjVhVDbBorX9v2cEvKx7vQ0j4JgolmJkdS7ic7%2BAppsJQG9HBvEtf5yVa9WYwkkR%2BoTFPlUfmtyxCP%2BLqmr2W6HsV%2BRxxr%2B290%2BVSVeUi66DKnNag3e7LWaANsqxTqaZ2ufOfnFnDrna81eNDCC2haKojKnATOj2nRoHMm%2B4NRKpvamgroaMjX0GR2FLr33LOlL%2F2&X-Amz-Signature=91355ea0a2f43460c2049c2602b701e2e5bf4ffdf1e0a738378f7e04d1f0c48c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
