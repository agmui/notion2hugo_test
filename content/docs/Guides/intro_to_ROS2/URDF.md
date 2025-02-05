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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVQEDMH%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIG6N1xPf3WjXvoD7F6g5Mg%2Bfja45HWLo2glvT6tmR5FdAiEA9bYmXLzSkRnQkmF3TTcYzZZa2eqWhc2XP3%2FwfJLBQpwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMyj24vhk1mehfcz2yrcA8h9VhO%2FX3JM34R7i0jtYgYuep2oY6Xp%2FFWbJ6sWQFmuxPwMPoBN3gNu8fYwryKkmPnehO0gDJPjvxaupzjRspzplGiK1P8o14ZXOPXi4iQZbKGHR57jVsSeuDgmqYOBvF27KpFHnn%2BswbmE3AeQySNR5vs00DE4bPyPfbiC5Wg%2Baq%2BAR6zCVI0CJLKfE758vwJZK2rKJ3%2FGcLvdKRLJKAnMFrd9jKdW0FhSSYZyeNzBw95YvM61%2BVDUwTa7juBjiFJb2hDB5pOTprsEwUwTBge7C7j1SAzAKrNO86VChLUMTTJIlITyAectDjDRNlN%2Bx0VD43kgLbDv%2FtPIq%2F67Oo6%2BeQaM%2BDPCZnM2H4FSn6gWd2ZZnpPYAUG8OnmOuZb1jtqzmsholyCPzl4AOETQ0BiqSXgF7L1DO2mcsvk7MlOzsYCWjMfT2%2Bpbb8Br%2Bt5zPuvz%2Bas4Fk359i64tjm4kaAw8qsrafZUV23g7L9UbhtBJEpDbiFIQAeEUj4rkpuJ%2Bc0cjx3eUELkNpdb5Hdt2zoyDKr4rlAJ8ZRj5ETT010Kg%2FfDdc8d5r5dIRuqTjhUU0l4WiAZ%2BT0rLqVd2Wx%2FrFRll5xeavk0d9YWAKhf%2FqDrEAfYx1jzZfxxAzr9MJPmjb0GOqUBKLVxNe2E324C4w%2FGkQcYSWSMTM1YFrfyT8J2gF6mlPGJOq9pD8LRfVj%2FuA5DBNjiOpPIAqcc5kW%2BgYuIUwF7qECuTmCU8%2BXo8vnTGp%2FKZWWHSQVIbfp5nmNhpW3y7lCDkrK7JdIifhFBIWj0sgzq%2Fiu89sJLMSVcsjf%2BK45Sq%2F3PIJ8CLRY1kMY3%2FvxMnqC%2FCSvjOMVEQPm9qPzpmpFfbRvHA7xn&X-Amz-Signature=1ae614c6c047117be9e7adf650cbab0071aa3202dc1494ad9e2b73043ee1701c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVQEDMH%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIG6N1xPf3WjXvoD7F6g5Mg%2Bfja45HWLo2glvT6tmR5FdAiEA9bYmXLzSkRnQkmF3TTcYzZZa2eqWhc2XP3%2FwfJLBQpwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMyj24vhk1mehfcz2yrcA8h9VhO%2FX3JM34R7i0jtYgYuep2oY6Xp%2FFWbJ6sWQFmuxPwMPoBN3gNu8fYwryKkmPnehO0gDJPjvxaupzjRspzplGiK1P8o14ZXOPXi4iQZbKGHR57jVsSeuDgmqYOBvF27KpFHnn%2BswbmE3AeQySNR5vs00DE4bPyPfbiC5Wg%2Baq%2BAR6zCVI0CJLKfE758vwJZK2rKJ3%2FGcLvdKRLJKAnMFrd9jKdW0FhSSYZyeNzBw95YvM61%2BVDUwTa7juBjiFJb2hDB5pOTprsEwUwTBge7C7j1SAzAKrNO86VChLUMTTJIlITyAectDjDRNlN%2Bx0VD43kgLbDv%2FtPIq%2F67Oo6%2BeQaM%2BDPCZnM2H4FSn6gWd2ZZnpPYAUG8OnmOuZb1jtqzmsholyCPzl4AOETQ0BiqSXgF7L1DO2mcsvk7MlOzsYCWjMfT2%2Bpbb8Br%2Bt5zPuvz%2Bas4Fk359i64tjm4kaAw8qsrafZUV23g7L9UbhtBJEpDbiFIQAeEUj4rkpuJ%2Bc0cjx3eUELkNpdb5Hdt2zoyDKr4rlAJ8ZRj5ETT010Kg%2FfDdc8d5r5dIRuqTjhUU0l4WiAZ%2BT0rLqVd2Wx%2FrFRll5xeavk0d9YWAKhf%2FqDrEAfYx1jzZfxxAzr9MJPmjb0GOqUBKLVxNe2E324C4w%2FGkQcYSWSMTM1YFrfyT8J2gF6mlPGJOq9pD8LRfVj%2FuA5DBNjiOpPIAqcc5kW%2BgYuIUwF7qECuTmCU8%2BXo8vnTGp%2FKZWWHSQVIbfp5nmNhpW3y7lCDkrK7JdIifhFBIWj0sgzq%2Fiu89sJLMSVcsjf%2BK45Sq%2F3PIJ8CLRY1kMY3%2FvxMnqC%2FCSvjOMVEQPm9qPzpmpFfbRvHA7xn&X-Amz-Signature=9cd24ee11876968245f365d1937ee8aa23504863d6990940ea12c51aa3eaa1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
