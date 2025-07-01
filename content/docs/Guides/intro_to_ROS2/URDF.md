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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THS57WWQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4qx7HQihy1EMkTH7UjdceR2pRFU6z2x7x43F5t7XrMAiEAv5QayE9PTnuQJQndq0tM4oz7eN4C%2Fz4HaoAmOpRb1%2F4qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzGExH5tLrNy8YXgCrcA%2FnuI4leiomxSAqTwx4VdyezJ2XQfi%2BvvlEqoc5zY95ETkJbW%2B3LDOpefGtHO%2BxkbqTKbz6kjHNuQsO3FwdWAOvDcJ%2BnLlmKxqad6LfBhCZ5la3D0qoxYo0VEBfET2Md05c9ap0u3u8ElOV49oWjHk5vHZPc7fhvPm1lIFvaa52s0IxU4j3F56HahsI4gJZUK6saiguSPZl0dhyLRPOrGNFTG10EiydZhpXCn30MT%2BMZF25FKtF6mKgmE5RrYsQPrbDOI%2FB1QzDR9hqrqLyW%2BsIFERRPrhorh%2FzHyyKBkqyn2ElwqZKAOygY4a%2FnheFvxbzeUeuRX%2FOxuacvJIlVlNvRjuTFr8ue%2BpMXRrHeGVOF16IBFRfwwgCISatAF2hVcz8N77%2FbmxJM5%2BKxNeJrfNmEUbEnQ0GHh0C4VNA1f23l0x9bzg833OxfScYsh61vHhF3ju%2B8PDfiIVinNVDWTEX41YyvznYExX1BJ0RLOpvwAy3%2F%2BjCwbmYBSE3L5CweC1xB9Wofeozn1avQXVwm2gmtEyRDqytU419ETXVP3SdfUz7usdcyK%2BKlzHVZriU8jhIdXtP3hEi9HYRsvsby4Wz38l7m%2F6Ijs0ZOyX3aDjGS%2FFbv5PGdNQtpocYvMIiHkMMGOqUBJ9TNDxrHLq8N%2B6M14Lh0hlqa7CZDIe8706lqYuEvSx6qm9pinsMA7Odz5%2FtCjsAKXw%2FhEGrK5tLpse3VsP3Z1Ne4OordI2QZb74Yb1L%2BgqzFtAWK1%2BsVZh16mQ9MV6TQZINX6vHd14kNa3D%2F3oRI6czBdyWrzSdSs8F1UHFmz9o%2Fh8gvdMWZUMts4zQjQtXM3GXLn9jFqF%2BKqORxzJLekVl6ltuQ&X-Amz-Signature=df5e13b383fef88acfbb7eb83a36c414335fd121fe0a1763056eb5c2dfcef4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THS57WWQ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4qx7HQihy1EMkTH7UjdceR2pRFU6z2x7x43F5t7XrMAiEAv5QayE9PTnuQJQndq0tM4oz7eN4C%2Fz4HaoAmOpRb1%2F4qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzGExH5tLrNy8YXgCrcA%2FnuI4leiomxSAqTwx4VdyezJ2XQfi%2BvvlEqoc5zY95ETkJbW%2B3LDOpefGtHO%2BxkbqTKbz6kjHNuQsO3FwdWAOvDcJ%2BnLlmKxqad6LfBhCZ5la3D0qoxYo0VEBfET2Md05c9ap0u3u8ElOV49oWjHk5vHZPc7fhvPm1lIFvaa52s0IxU4j3F56HahsI4gJZUK6saiguSPZl0dhyLRPOrGNFTG10EiydZhpXCn30MT%2BMZF25FKtF6mKgmE5RrYsQPrbDOI%2FB1QzDR9hqrqLyW%2BsIFERRPrhorh%2FzHyyKBkqyn2ElwqZKAOygY4a%2FnheFvxbzeUeuRX%2FOxuacvJIlVlNvRjuTFr8ue%2BpMXRrHeGVOF16IBFRfwwgCISatAF2hVcz8N77%2FbmxJM5%2BKxNeJrfNmEUbEnQ0GHh0C4VNA1f23l0x9bzg833OxfScYsh61vHhF3ju%2B8PDfiIVinNVDWTEX41YyvznYExX1BJ0RLOpvwAy3%2F%2BjCwbmYBSE3L5CweC1xB9Wofeozn1avQXVwm2gmtEyRDqytU419ETXVP3SdfUz7usdcyK%2BKlzHVZriU8jhIdXtP3hEi9HYRsvsby4Wz38l7m%2F6Ijs0ZOyX3aDjGS%2FFbv5PGdNQtpocYvMIiHkMMGOqUBJ9TNDxrHLq8N%2B6M14Lh0hlqa7CZDIe8706lqYuEvSx6qm9pinsMA7Odz5%2FtCjsAKXw%2FhEGrK5tLpse3VsP3Z1Ne4OordI2QZb74Yb1L%2BgqzFtAWK1%2BsVZh16mQ9MV6TQZINX6vHd14kNa3D%2F3oRI6czBdyWrzSdSs8F1UHFmz9o%2Fh8gvdMWZUMts4zQjQtXM3GXLn9jFqF%2BKqORxzJLekVl6ltuQ&X-Amz-Signature=a1945cdb7e96632ac033ae0f0764df8375605226686b17b7514686a941ec8d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
