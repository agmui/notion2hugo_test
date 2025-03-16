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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBEBRVP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUgT3elNOV2Qb7K5vz7FEwPBFYzaForwfEvw2U7ImAzwIgdG3OBmmdMCNSad0mF4Ck3NQeFTnNne7NTjtOpYpCgA0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE1cIPNX5tva9AyZjCrcA%2FCqDbVAiMVR0c3scRPlraTDazdnjiDN3kxGtgHOBRWT6z7SNvL%2BA0QVNt6Kahs2klxIEPkAjQbatUm0oRUb1LN4%2BE6WzNQveMAcHele4KScXlQKCh28%2F5d8p95cTYxjFz7mlmNNQbuonYltRyEkW01LjsBP35mXOtXdV9hJlupPuT%2Bs6CrPDjqpnwJJ4bBCp01lQFGxUvVLkfsPuZc20rfK9Op6%2BecStwQ26rxLmvd7uyHzT50YoXhyl61lQDIBPqEncxVJRMf0S%2BZeXXyDuEb41SHNmyCwEUVXPqgYjqv5AW3RcUN93522yPntmCqqIXpGVenY8Ul3qxb9b0NHm9LnTEP%2BeN32Zvml4214leiYfZ6zJle62a%2BfukYsiyXOnzMyIBikQfQPUiaLaCI1YuQswNPUw47IKacEZ6XqA8usEO1Fy6aCov9zhszWiH5HM4vIx7CTAvXhZTHpZg4IJWk4Yf4qu9qG7v8PN7pNG%2BqVTLVOet0GZsTOZfPPyu4mk%2B4IEPB49tleBTOJbUogmEOGY60Cr4%2FQE7c1zbRUipA%2BGrvv8BYNkeXepBKCZkWS6NFLMKRe4xnKiFWed0vQSCF2mu1ZpcYsWhlR8R6J9Y2c%2BkirAja1OraJP3DzMPWB2L4GOqUBGC8ZNS3Q8TzKsVH3sozOFBMb4Ac53I9pPsh6NQS8WmRoGU5XA%2BUVXD3JL%2FRI%2BkmuauMNdSWKvNzyTYpuzVD8vTmkPxy6ctMg5gRBt0WBZelcDqQFtLMDJi6FiwJ%2BrX5sHJ4ttmpBuXljgDe%2BVhEpN%2Bhd0BweX0LIQ6AGdc%2F1cdQmidSAO4NVBcdoHgKoF%2BAJvXnqng1tSK6Pw30%2B4UVcSASf%2Fd3e&X-Amz-Signature=c14430f9ec1764fd4f1a270e2880806763dd2bde46b85ddd786dcfcd96120efa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBEBRVP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUgT3elNOV2Qb7K5vz7FEwPBFYzaForwfEvw2U7ImAzwIgdG3OBmmdMCNSad0mF4Ck3NQeFTnNne7NTjtOpYpCgA0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE1cIPNX5tva9AyZjCrcA%2FCqDbVAiMVR0c3scRPlraTDazdnjiDN3kxGtgHOBRWT6z7SNvL%2BA0QVNt6Kahs2klxIEPkAjQbatUm0oRUb1LN4%2BE6WzNQveMAcHele4KScXlQKCh28%2F5d8p95cTYxjFz7mlmNNQbuonYltRyEkW01LjsBP35mXOtXdV9hJlupPuT%2Bs6CrPDjqpnwJJ4bBCp01lQFGxUvVLkfsPuZc20rfK9Op6%2BecStwQ26rxLmvd7uyHzT50YoXhyl61lQDIBPqEncxVJRMf0S%2BZeXXyDuEb41SHNmyCwEUVXPqgYjqv5AW3RcUN93522yPntmCqqIXpGVenY8Ul3qxb9b0NHm9LnTEP%2BeN32Zvml4214leiYfZ6zJle62a%2BfukYsiyXOnzMyIBikQfQPUiaLaCI1YuQswNPUw47IKacEZ6XqA8usEO1Fy6aCov9zhszWiH5HM4vIx7CTAvXhZTHpZg4IJWk4Yf4qu9qG7v8PN7pNG%2BqVTLVOet0GZsTOZfPPyu4mk%2B4IEPB49tleBTOJbUogmEOGY60Cr4%2FQE7c1zbRUipA%2BGrvv8BYNkeXepBKCZkWS6NFLMKRe4xnKiFWed0vQSCF2mu1ZpcYsWhlR8R6J9Y2c%2BkirAja1OraJP3DzMPWB2L4GOqUBGC8ZNS3Q8TzKsVH3sozOFBMb4Ac53I9pPsh6NQS8WmRoGU5XA%2BUVXD3JL%2FRI%2BkmuauMNdSWKvNzyTYpuzVD8vTmkPxy6ctMg5gRBt0WBZelcDqQFtLMDJi6FiwJ%2BrX5sHJ4ttmpBuXljgDe%2BVhEpN%2Bhd0BweX0LIQ6AGdc%2F1cdQmidSAO4NVBcdoHgKoF%2BAJvXnqng1tSK6Pw30%2B4UVcSASf%2Fd3e&X-Amz-Signature=92f8eb85d72fabb21d3b98ad2c638aa809ec27473358167c96e5aa6828ea6930&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
