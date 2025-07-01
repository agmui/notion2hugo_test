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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDRDMTX%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdfn5YilXvFRY9avrlBStOi7KsLvhJvOfeOmb9cHG1%2BgIgEfoq3xaY3yIqA8Iznr98RERNTStwndxY2iO2kX1HShMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF91eT8tQtyRnDKSSrcA6Zcsy8C18ZK%2FIUmyhA5v7qi6mE75DEL4cLTZdcFQSqiG%2By1jd70WuiRGFO%2FoA5slkdIBm2fxEJA2WD80QGdY9eG%2FR9ARtIF4aXbgzeVe4cbDKaH4YK9hJRr6tWkUrP%2FR%2FWwErMDJ%2FvI1jxCMORwXf507Mv%2BgWOmn5J3%2FQBvGJUkCFYkpM%2BoHT5isjd3xqrfaZ4UPVMwGPRjZvhNOQjZs9c5XAdI6UWNIQ2v4zoN0X91A8xo4KKTChJj4omg3z0ZO1bIJDt%2BguOa8tFL04pCgHVqqW8TYS%2FTeBKOiwRMcXihVWEBe0ItVO6pLQ0S28yP179GVzuAs4mKHovSKE%2FJhnW3Gf5cMC1ZXyuVL6Sy4g7pRsCdW5dYo3e003E6FsjGA3GZjT2JpkXfE2kzOq3%2BLYZfKOs%2B%2FLN9uUCuZzZnB7CxRrEINeoaOMdx7V%2Fw%2BS2%2BttSLzsB3s7gzhyDiTicpROsfMoh5bUJy5mzBUBK5%2Fy%2Bg2tV60vRf4r7MD3CAeWTZEvZJZzkYHUMXFINpo6BBF3s%2FnaR3EjxHFbzQIWUxlW21HVoQUhoIuH8qLKMf8zn4Q0b6nGWnzQyPyaBIGPNoQFsxVMuK%2FUuBQ2Rwsf5YuhIWS9gb8Uz9vHO5FEfKMPzHkcMGOqUBIO4Q4e7BQGr7Lzh3r4JWFTFxH7StSlPx2BYb8ZzafSd%2Fvg%2FBT%2BBcXJxk6XWRWkXWDpRfHy5SYPlzgYwDDElv6tNTiwYjY65pDPx%2BdO4HKXdogOr6WTt2hL3oyQKGOLg%2BJeVX0B6vJiIai3dnghvof4hFa%2BGJmO7F51EX%2FjKnG3MFaqAxoOIDDC6V8qkHW1Vjp%2FwxnfERuN9%2FhdKbV%2F1GGqjo42tc&X-Amz-Signature=9c64509beadd605a8bf6d375209e789f6153d25f9667063f16bc4e10cd0c96eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDRDMTX%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdfn5YilXvFRY9avrlBStOi7KsLvhJvOfeOmb9cHG1%2BgIgEfoq3xaY3yIqA8Iznr98RERNTStwndxY2iO2kX1HShMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF91eT8tQtyRnDKSSrcA6Zcsy8C18ZK%2FIUmyhA5v7qi6mE75DEL4cLTZdcFQSqiG%2By1jd70WuiRGFO%2FoA5slkdIBm2fxEJA2WD80QGdY9eG%2FR9ARtIF4aXbgzeVe4cbDKaH4YK9hJRr6tWkUrP%2FR%2FWwErMDJ%2FvI1jxCMORwXf507Mv%2BgWOmn5J3%2FQBvGJUkCFYkpM%2BoHT5isjd3xqrfaZ4UPVMwGPRjZvhNOQjZs9c5XAdI6UWNIQ2v4zoN0X91A8xo4KKTChJj4omg3z0ZO1bIJDt%2BguOa8tFL04pCgHVqqW8TYS%2FTeBKOiwRMcXihVWEBe0ItVO6pLQ0S28yP179GVzuAs4mKHovSKE%2FJhnW3Gf5cMC1ZXyuVL6Sy4g7pRsCdW5dYo3e003E6FsjGA3GZjT2JpkXfE2kzOq3%2BLYZfKOs%2B%2FLN9uUCuZzZnB7CxRrEINeoaOMdx7V%2Fw%2BS2%2BttSLzsB3s7gzhyDiTicpROsfMoh5bUJy5mzBUBK5%2Fy%2Bg2tV60vRf4r7MD3CAeWTZEvZJZzkYHUMXFINpo6BBF3s%2FnaR3EjxHFbzQIWUxlW21HVoQUhoIuH8qLKMf8zn4Q0b6nGWnzQyPyaBIGPNoQFsxVMuK%2FUuBQ2Rwsf5YuhIWS9gb8Uz9vHO5FEfKMPzHkcMGOqUBIO4Q4e7BQGr7Lzh3r4JWFTFxH7StSlPx2BYb8ZzafSd%2Fvg%2FBT%2BBcXJxk6XWRWkXWDpRfHy5SYPlzgYwDDElv6tNTiwYjY65pDPx%2BdO4HKXdogOr6WTt2hL3oyQKGOLg%2BJeVX0B6vJiIai3dnghvof4hFa%2BGJmO7F51EX%2FjKnG3MFaqAxoOIDDC6V8qkHW1Vjp%2FwxnfERuN9%2FhdKbV%2F1GGqjo42tc&X-Amz-Signature=5c7a28ab52218bf50cc8c863a3587e5229d7a3f43d06514c6b458c7c54183869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
