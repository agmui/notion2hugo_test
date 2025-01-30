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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJ7QV2T%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPAo3jA%2FlPDG4HutwlBZ6tIfYPMzsduo5yz7SWB659gAiEAyr6bNnfckGeheQPvYjp30YUtBXAsMV%2FvmXVTBQGPq7UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpPRVRxeHF0RhE1VSrcA0n3GZFS0oRGPvnUZO74ySIImd4ACMRe2dmJ4omU5a9VWKsvr%2FWc5ZbcWrqPEJpAgC6%2BNgQLA2IvkGtNfOm1LrDvioPfgovJMJPb5fkOTHLWwX5GTTGitTuv5HGRL9JbJcJvzetBJUkrjYnzj5MZfEPVM03DgYgZl1DbCYLfUUxHM8pIG8hBAuF9AQfWRvnIT3KkhpmXPxNQUzCGF231B3l9d1wGnWlsQwnqo4TnvOdywFJ6kopC3NjfXr%2FMOTXlNhsde9N%2BVjlGOokIPwJMlQvDCYWZflc41iIAGpY7aR6j3y5mVgLnEu1m%2F0kveJhjPeiVqqHtUTqsvfOcmprodKb1z35K99mykimP864op7IebEPB7H5ytzVHPpO%2F3aUi7b4MgDv0FodMoNAYnDy1MoW2JMFBm23g3k0m0Ysm0vNbRMj8gUj2yg1Y0vk59fBk1i2JXzEsmab7fljOvJZxzvsdjhtqInIwbrxqxm1CuUuHDLaSR%2FiK0sUderbjL6T1RRh3EH2fzCgXLeve0dwu2hm0Syw3EEXwhYfqZ2Rf%2Boo9lWJIt3hVQvmNA5XQEbSA%2FNrzissiDHYzSf%2FOzfQkKHXLtgq8UBYELZ%2BvDq15kBQKtNXi5133s3GBrqYyMMak7LwGOqUBPSzZamBj3ObbN7NIzLre6DJAHpZc8EqF3X7%2FGz0K4fPxV9Z5wqMshU3e%2FVFw9%2BWxL568A%2FNwjbxosO5VuSqlKu8svknQ5ZElG9wRWMeTi0GH70QzD0ECN1OcIady385fNyinXG8%2FyTmc486mnZZMl49c6%2F6k5aHa0%2FVB5pXT4cykse6jk5DejdrlY%2Bzu2smzoeXnndBWIplrRHizcyIZcQE3QTYx&X-Amz-Signature=2c47dcb28c8a864bfa02795c36e48827a603f0809671af0af29241c1eff4c1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJ7QV2T%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPAo3jA%2FlPDG4HutwlBZ6tIfYPMzsduo5yz7SWB659gAiEAyr6bNnfckGeheQPvYjp30YUtBXAsMV%2FvmXVTBQGPq7UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpPRVRxeHF0RhE1VSrcA0n3GZFS0oRGPvnUZO74ySIImd4ACMRe2dmJ4omU5a9VWKsvr%2FWc5ZbcWrqPEJpAgC6%2BNgQLA2IvkGtNfOm1LrDvioPfgovJMJPb5fkOTHLWwX5GTTGitTuv5HGRL9JbJcJvzetBJUkrjYnzj5MZfEPVM03DgYgZl1DbCYLfUUxHM8pIG8hBAuF9AQfWRvnIT3KkhpmXPxNQUzCGF231B3l9d1wGnWlsQwnqo4TnvOdywFJ6kopC3NjfXr%2FMOTXlNhsde9N%2BVjlGOokIPwJMlQvDCYWZflc41iIAGpY7aR6j3y5mVgLnEu1m%2F0kveJhjPeiVqqHtUTqsvfOcmprodKb1z35K99mykimP864op7IebEPB7H5ytzVHPpO%2F3aUi7b4MgDv0FodMoNAYnDy1MoW2JMFBm23g3k0m0Ysm0vNbRMj8gUj2yg1Y0vk59fBk1i2JXzEsmab7fljOvJZxzvsdjhtqInIwbrxqxm1CuUuHDLaSR%2FiK0sUderbjL6T1RRh3EH2fzCgXLeve0dwu2hm0Syw3EEXwhYfqZ2Rf%2Boo9lWJIt3hVQvmNA5XQEbSA%2FNrzissiDHYzSf%2FOzfQkKHXLtgq8UBYELZ%2BvDq15kBQKtNXi5133s3GBrqYyMMak7LwGOqUBPSzZamBj3ObbN7NIzLre6DJAHpZc8EqF3X7%2FGz0K4fPxV9Z5wqMshU3e%2FVFw9%2BWxL568A%2FNwjbxosO5VuSqlKu8svknQ5ZElG9wRWMeTi0GH70QzD0ECN1OcIady385fNyinXG8%2FyTmc486mnZZMl49c6%2F6k5aHa0%2FVB5pXT4cykse6jk5DejdrlY%2Bzu2smzoeXnndBWIplrRHizcyIZcQE3QTYx&X-Amz-Signature=cf0c71177b8e917389856ae0e5eb713a31467fcf459b5148023eb18fc3415ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
