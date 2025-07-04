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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWYFQW7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDZIKVSsLc4Mod5rKnhHdc8mJ5cEfggtDQAuAAtEaSecgIgUPaiUFW%2Bjir6rU5Ew09Isi39jmdkG3Xe9x8VKhvZbjMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPdKLH%2BO6evtAYBwvyrcA1ZaSqvXU5IAHBEJ0ADkei27btc0SqGBYB59C47bygonw86AsgJOYIaUBk50JMJRmStboun%2BIyIQvPu8MVN9rJ5rleFHCOoCK8QBxoRHjp4k0HB0GgbFkUH3HneUVvuWEEYNx2mj3XKYvhQj6ZO3CMizR%2FnolUGnI%2FKRAgKoBB50E8zl4UacONIqkk%2FkJ70V6slxAuPfNNFxLW6QkcoWWBvho9JgwyGfOYtBQbZvVB9x8yUAK%2BmULInbwAQFRKEhrnNsr6FS47o98tBrkII0YafN%2BQiM6n5P0UiDLujF6LEPr9iJtTKptlQ9zuahgU2BONUHvTDPYCyVa5vJU9rRMP6%2FJMSn54Qen2yDjezS3%2BvARSxux3wEnu4tvxTJLkCxomcplWJOzSQpzNYT%2B55kLkp8wmrkqy8WTOtUmXMwv0n2w%2BJp2CcW12cRT5kUS4K8Frt0H%2B%2Fy5CzYWB5xiOhqMccpg07d%2FIEnBcI7Nx3iHiyL%2FZ4fiL6p0dq%2FhAzfnxW7xoYNW59xEGK8w%2FfnbHQi3oTlB4r00JFOVdm%2FAe%2BM2MLRLf6fcWjJeVJwI2ed%2FycjxzRR9p4QcDJhdCy3DOkOTnCLtwBIOgTAI%2F1vy6h7prmJpQJLjhaehyH9Nk9kMLnEn8MGOqUBZOzBQEkrL6YhZUHQ72mjgFGafD89KE39BDnMes9xiXsHmwBPagnPO2W2eqF%2BqD4cwtdHJ56AMgHQimRei%2FhXdZcDIiXBCfm5ZJ5PKIt8Z3RaJBBA766RKzNToSNB8rROdv9C8%2FjXyjYFcRz05L3g%2BlUuo39l%2BVz%2BoxUIR5%2FLw0vytcwcKQux6VRIfL91mAlPwxrDMLdBXfTQdrinLObq67eUk2td&X-Amz-Signature=a9afad2da43bb99d6106bd707dcd124eb2f49dec42cd73651cb1bb4d2fe2e020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWYFQW7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDZIKVSsLc4Mod5rKnhHdc8mJ5cEfggtDQAuAAtEaSecgIgUPaiUFW%2Bjir6rU5Ew09Isi39jmdkG3Xe9x8VKhvZbjMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPdKLH%2BO6evtAYBwvyrcA1ZaSqvXU5IAHBEJ0ADkei27btc0SqGBYB59C47bygonw86AsgJOYIaUBk50JMJRmStboun%2BIyIQvPu8MVN9rJ5rleFHCOoCK8QBxoRHjp4k0HB0GgbFkUH3HneUVvuWEEYNx2mj3XKYvhQj6ZO3CMizR%2FnolUGnI%2FKRAgKoBB50E8zl4UacONIqkk%2FkJ70V6slxAuPfNNFxLW6QkcoWWBvho9JgwyGfOYtBQbZvVB9x8yUAK%2BmULInbwAQFRKEhrnNsr6FS47o98tBrkII0YafN%2BQiM6n5P0UiDLujF6LEPr9iJtTKptlQ9zuahgU2BONUHvTDPYCyVa5vJU9rRMP6%2FJMSn54Qen2yDjezS3%2BvARSxux3wEnu4tvxTJLkCxomcplWJOzSQpzNYT%2B55kLkp8wmrkqy8WTOtUmXMwv0n2w%2BJp2CcW12cRT5kUS4K8Frt0H%2B%2Fy5CzYWB5xiOhqMccpg07d%2FIEnBcI7Nx3iHiyL%2FZ4fiL6p0dq%2FhAzfnxW7xoYNW59xEGK8w%2FfnbHQi3oTlB4r00JFOVdm%2FAe%2BM2MLRLf6fcWjJeVJwI2ed%2FycjxzRR9p4QcDJhdCy3DOkOTnCLtwBIOgTAI%2F1vy6h7prmJpQJLjhaehyH9Nk9kMLnEn8MGOqUBZOzBQEkrL6YhZUHQ72mjgFGafD89KE39BDnMes9xiXsHmwBPagnPO2W2eqF%2BqD4cwtdHJ56AMgHQimRei%2FhXdZcDIiXBCfm5ZJ5PKIt8Z3RaJBBA766RKzNToSNB8rROdv9C8%2FjXyjYFcRz05L3g%2BlUuo39l%2BVz%2BoxUIR5%2FLw0vytcwcKQux6VRIfL91mAlPwxrDMLdBXfTQdrinLObq67eUk2td&X-Amz-Signature=439d1d59e80f4e86a10fa94ee79afc32eaeeb5382ffe33ce81f8b4b14e1694cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
