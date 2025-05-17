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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YUGBEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKoQEjgYmGg%2B6AH9lDTli88u3Xg2dff6RnlQWvpKEfeAIhAM9V3LxpUa9oEqi5DQ2ekBWTnh2raPGrWzlL3t1xB40yKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZHK9oSNjaApu4cBUq3AOr5IdZiFhzU%2Flzs5Oy7Ifh9OdO7iTRl2Fp2sGUvCHKeOH5NC78U5ZjtUy2DUXZaQJkmyuwH1IYZ4mBky%2FN7iTjGt81V8F7ORP276huOLdEKhwbe8axrtrjf7lUaU6FgxVNHCqxHF9lkoLA%2BSBWiW3VkRIS4k79c%2F7l3xpDDj3MNjY7t%2FnRu%2BiZVlTwmQxnHe5DJxd0BUzXrnlWwwtFD6xjZ9vLtKu46X0cKYd5mUDPCCDpiKjtxzDEawqpX4L2Upu1rCK0oe5gUcMWy3v52lWGuZD7uE8Dj1ZIF3db6A13ERsr5yAjBDHFfkKLhpQxJ96CVQky%2Fks7RMnCc%2FviIPHCUhpTdZt5HNUPtWmSD%2BT%2F03fufmQk5DazQICjZlwnlt%2FL1xexILmpDw48C%2F3ajWgxyq2vLtSuMMnvrV4XYZ%2Bmqc2yX%2B%2Bc4WsCXQpEz%2FllJ6antJTmqf4FdEGVHoZiRnZLN44vj4V847se3fr3UtI7j49dvwlaDePCGw7QLkzb5Savxq2CLkLi9OaBLuw9qNVezeRYq634dVs%2FRuBbwHHmqeKv1x%2FZVPzv3BpYtGjKbZShMTgwuZJuoHYWGq2KZvktAWsp43bXAoh60c40EqEk0w2XJ9XgYRMTS7afZTCq86HBBjqkAd8HpmBAEYZZPg8dg5tIvZ52NiPb8jobE6RpD77jznIGlsHfQSJXHMuv%2B%2FPllpdPWR7ZawWWCtsixp4AXbtuH%2BSuhLfREPfW%2FIReb%2F5uzsa%2FZFmtEYoaF7GZzd%2BHANl7eaTJeAtoJXlMum8ijGmvCbXJ4NZ8e98t4I5s2yzf0RTFYKlMbUO5sBSxO1F170SX2NZz0oWqSwphkjW03F%2FdwevyVWQu&X-Amz-Signature=563bd39801a0bb4e25699b203f5acd72e75702cd95f7030890a75f180e1b665a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YUGBEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKoQEjgYmGg%2B6AH9lDTli88u3Xg2dff6RnlQWvpKEfeAIhAM9V3LxpUa9oEqi5DQ2ekBWTnh2raPGrWzlL3t1xB40yKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZHK9oSNjaApu4cBUq3AOr5IdZiFhzU%2Flzs5Oy7Ifh9OdO7iTRl2Fp2sGUvCHKeOH5NC78U5ZjtUy2DUXZaQJkmyuwH1IYZ4mBky%2FN7iTjGt81V8F7ORP276huOLdEKhwbe8axrtrjf7lUaU6FgxVNHCqxHF9lkoLA%2BSBWiW3VkRIS4k79c%2F7l3xpDDj3MNjY7t%2FnRu%2BiZVlTwmQxnHe5DJxd0BUzXrnlWwwtFD6xjZ9vLtKu46X0cKYd5mUDPCCDpiKjtxzDEawqpX4L2Upu1rCK0oe5gUcMWy3v52lWGuZD7uE8Dj1ZIF3db6A13ERsr5yAjBDHFfkKLhpQxJ96CVQky%2Fks7RMnCc%2FviIPHCUhpTdZt5HNUPtWmSD%2BT%2F03fufmQk5DazQICjZlwnlt%2FL1xexILmpDw48C%2F3ajWgxyq2vLtSuMMnvrV4XYZ%2Bmqc2yX%2B%2Bc4WsCXQpEz%2FllJ6antJTmqf4FdEGVHoZiRnZLN44vj4V847se3fr3UtI7j49dvwlaDePCGw7QLkzb5Savxq2CLkLi9OaBLuw9qNVezeRYq634dVs%2FRuBbwHHmqeKv1x%2FZVPzv3BpYtGjKbZShMTgwuZJuoHYWGq2KZvktAWsp43bXAoh60c40EqEk0w2XJ9XgYRMTS7afZTCq86HBBjqkAd8HpmBAEYZZPg8dg5tIvZ52NiPb8jobE6RpD77jznIGlsHfQSJXHMuv%2B%2FPllpdPWR7ZawWWCtsixp4AXbtuH%2BSuhLfREPfW%2FIReb%2F5uzsa%2FZFmtEYoaF7GZzd%2BHANl7eaTJeAtoJXlMum8ijGmvCbXJ4NZ8e98t4I5s2yzf0RTFYKlMbUO5sBSxO1F170SX2NZz0oWqSwphkjW03F%2FdwevyVWQu&X-Amz-Signature=50d3364ae3b91d263555dda7ab3b5d985eef15da50c12953b9b026a238d05da7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
