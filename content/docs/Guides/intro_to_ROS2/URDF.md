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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZMXN2V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEQ06ptom3FiLtz84IRYUpHphrZnjl65sLmQ51a92K0AiEA37ze03ChJUUpOBREsAVZjtizRrW31zHCnuBYhqVwBhAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FIo4OLfJrnvOln%2FSrcA1yH7IAsXhbWrY6Zfc4F8tTIUMearNbB661mq8MFKHEJrowNvJq1q93TifyCB9phXv6zcxCNNIBjAfUy%2BZXnofvp6%2FPwrBmYSXvgrfOi2oe%2BhBVkThhMGWrhzVzeNvUUvebO8d%2FHaURpXTHZ8V3IkS6%2FUMUEYY%2FRrzKxa7mqM7nBLDRbD6cyJlRUmjVw7c1qaUJfRLe3x9ipPlPlcaB7wEcnKvy9baio0K2FV2MfaF1S1Yt%2BdW4OKxpUpZ%2FDsznr6nOvz%2F1uOviDpdwsGWLu2i1jjvzUqjs7RybTqVF5NYezyvHkXCnEaHmuMEXzUdxf9Xkp73iyCV5K79U1%2FrYzcOPTFj68UeZ5QNhfFDKgcPG0AqibcW4s2y7WPDvfjcVHdNQTqjxE3zS9etu9yOe0baCT8bepFYjxXRWm1CfgYzICOkHlDjyt5Iz08rJv7sljnXjxPvOOpFn2460Z57YbD05vHtsNmQcLn1a8YT4Ad%2FI2GoR23QMad1JmwbWR0hnXkw%2B9Uw3Nefn%2BEVIZIRKWVHS64W2yQoZlwwllygJ%2FYZerjkShsWJtE5KxbtaV1EMVBi86WLHjuSKFUAgxn91pAFXE5IG1WufYSaA%2FPF4U1f5gfvOZigQOKVeYzlY2MOX9rMEGOqUBxyXMCR0E8KT9sL4ia0wNSXh4Pihf5%2B9H59WAJd%2BoR%2FWZDn%2BVnAFPM3xuIWdxrLxq%2BxsyqG1BzXMYe67BJbBoswQvFh1ow%2B%2FhpO5A%2FlFTxk1b9Ma90SGynLPnuEfaLOlAi8jF13z9LrgQUhBebS0rnOVrrMw72AV5ebDaqf885YtrZSAR6IO%2FXKCSXgWRhn2M3SwvXqQuu%2FllM0zCmft47fTWwj4o&X-Amz-Signature=3d808f64d6a30872a1371a0ff7d9b1d4c267e51c94f921201cb704ae114c0619&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZMXN2V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEQ06ptom3FiLtz84IRYUpHphrZnjl65sLmQ51a92K0AiEA37ze03ChJUUpOBREsAVZjtizRrW31zHCnuBYhqVwBhAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FIo4OLfJrnvOln%2FSrcA1yH7IAsXhbWrY6Zfc4F8tTIUMearNbB661mq8MFKHEJrowNvJq1q93TifyCB9phXv6zcxCNNIBjAfUy%2BZXnofvp6%2FPwrBmYSXvgrfOi2oe%2BhBVkThhMGWrhzVzeNvUUvebO8d%2FHaURpXTHZ8V3IkS6%2FUMUEYY%2FRrzKxa7mqM7nBLDRbD6cyJlRUmjVw7c1qaUJfRLe3x9ipPlPlcaB7wEcnKvy9baio0K2FV2MfaF1S1Yt%2BdW4OKxpUpZ%2FDsznr6nOvz%2F1uOviDpdwsGWLu2i1jjvzUqjs7RybTqVF5NYezyvHkXCnEaHmuMEXzUdxf9Xkp73iyCV5K79U1%2FrYzcOPTFj68UeZ5QNhfFDKgcPG0AqibcW4s2y7WPDvfjcVHdNQTqjxE3zS9etu9yOe0baCT8bepFYjxXRWm1CfgYzICOkHlDjyt5Iz08rJv7sljnXjxPvOOpFn2460Z57YbD05vHtsNmQcLn1a8YT4Ad%2FI2GoR23QMad1JmwbWR0hnXkw%2B9Uw3Nefn%2BEVIZIRKWVHS64W2yQoZlwwllygJ%2FYZerjkShsWJtE5KxbtaV1EMVBi86WLHjuSKFUAgxn91pAFXE5IG1WufYSaA%2FPF4U1f5gfvOZigQOKVeYzlY2MOX9rMEGOqUBxyXMCR0E8KT9sL4ia0wNSXh4Pihf5%2B9H59WAJd%2BoR%2FWZDn%2BVnAFPM3xuIWdxrLxq%2BxsyqG1BzXMYe67BJbBoswQvFh1ow%2B%2FhpO5A%2FlFTxk1b9Ma90SGynLPnuEfaLOlAi8jF13z9LrgQUhBebS0rnOVrrMw72AV5ebDaqf885YtrZSAR6IO%2FXKCSXgWRhn2M3SwvXqQuu%2FllM0zCmft47fTWwj4o&X-Amz-Signature=12dda049dc68228bbe5087a2152446fc1381ec2ad65922570b200886ded4a7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
