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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZIDN32%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeXRoPCQ4ujW2tQcP7NuCaRcTH1Pb6texwm49qBwVMKAiEAnAmUq7k4vpiqy9h%2B8USdJi%2FwOlYX2Wj9eRSsK%2FwyJcMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBRH%2BSTqaOYuz0coqCrcAwxhF8B7zFolbHnKlfflK16aQ4E5iD8xBenDoDNWgQztnNDD583Tm8%2FZQRIixE%2F0IztMCwdMy%2BMXBs6e6d6Eh%2Fp3X9kXC91soZPoG4M%2F6zCMaEAaTjgJZXWIHLdN3yqzMdQQwg1TPG5fRWzOX3hj7jmmN%2BNNMQbxzg1pl3pOaew%2FZhXZFVnRYW0zfsCcrSoSFAeFlgbfd5j8sMdCXIbSBwzUXCza8SG%2FWPUs595EwN7IGGJREgySQ%2BUi%2FVPgA1MXQEawHZou3up74I7QfVvd7WKRMLRa9O0Vh5cICdkHMIvpcWB2iy8x6Y9b9l8r1W7PmEYTUzwlKE3X%2Fi4wQcdfyKBkcHYhmPS3tCd6HyWMjCOxr%2BNnTwc2iY77T%2FRdLjE2PLRC9oEvTnZQvZoMKx1iK0v%2BQas7rj%2FXluP9LoC7YBumTX54im10DCfYy%2BNtDtCrvAoh2Z5vi1Elw%2B9KUH7Ni4RfEFiZAA7zTDT%2BFlm8AFW5%2BUW9XjiVFPfzthePuqcV5Ht3angUt34lfpSpjnC4kgb4Ku4Ql0s1L44GRdJTQ5rLTJCPQEqJzjLYoIA1jOpvWaUKyEgtmj%2BiWEhVJLwr%2B7U85QxNkWAdQAXZPWLqt6%2FkuARSzZehzzzXQCYoMLHUm8EGOqUBhnBQC15sk%2FSt7u2o8UQdhvhaJ47zJSWihXgCVQ7jNz8ml1hJ7wETaelbrQd%2ByUdXBpEkvLJKn57ItSrha5XZ8FzCbr9dTLZrwiQzucTGmwsPpnCh%2Bs6Wb4QDripHs%2F%2BOT1OmLnzfE4t2u2uRKXPnPakKnl8QigpKa2uQ8Zv4f1HhnPR1pdfRtf959etHNz%2BP%2BDZlZ8W1gpAF9o0KjHVErF4iQFLZ&X-Amz-Signature=3791e5fc080b6198c52088ebd7619c0159fe60709a2d2c4301eeeb407b9a8104&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZIDN32%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeXRoPCQ4ujW2tQcP7NuCaRcTH1Pb6texwm49qBwVMKAiEAnAmUq7k4vpiqy9h%2B8USdJi%2FwOlYX2Wj9eRSsK%2FwyJcMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBRH%2BSTqaOYuz0coqCrcAwxhF8B7zFolbHnKlfflK16aQ4E5iD8xBenDoDNWgQztnNDD583Tm8%2FZQRIixE%2F0IztMCwdMy%2BMXBs6e6d6Eh%2Fp3X9kXC91soZPoG4M%2F6zCMaEAaTjgJZXWIHLdN3yqzMdQQwg1TPG5fRWzOX3hj7jmmN%2BNNMQbxzg1pl3pOaew%2FZhXZFVnRYW0zfsCcrSoSFAeFlgbfd5j8sMdCXIbSBwzUXCza8SG%2FWPUs595EwN7IGGJREgySQ%2BUi%2FVPgA1MXQEawHZou3up74I7QfVvd7WKRMLRa9O0Vh5cICdkHMIvpcWB2iy8x6Y9b9l8r1W7PmEYTUzwlKE3X%2Fi4wQcdfyKBkcHYhmPS3tCd6HyWMjCOxr%2BNnTwc2iY77T%2FRdLjE2PLRC9oEvTnZQvZoMKx1iK0v%2BQas7rj%2FXluP9LoC7YBumTX54im10DCfYy%2BNtDtCrvAoh2Z5vi1Elw%2B9KUH7Ni4RfEFiZAA7zTDT%2BFlm8AFW5%2BUW9XjiVFPfzthePuqcV5Ht3angUt34lfpSpjnC4kgb4Ku4Ql0s1L44GRdJTQ5rLTJCPQEqJzjLYoIA1jOpvWaUKyEgtmj%2BiWEhVJLwr%2B7U85QxNkWAdQAXZPWLqt6%2FkuARSzZehzzzXQCYoMLHUm8EGOqUBhnBQC15sk%2FSt7u2o8UQdhvhaJ47zJSWihXgCVQ7jNz8ml1hJ7wETaelbrQd%2ByUdXBpEkvLJKn57ItSrha5XZ8FzCbr9dTLZrwiQzucTGmwsPpnCh%2Bs6Wb4QDripHs%2F%2BOT1OmLnzfE4t2u2uRKXPnPakKnl8QigpKa2uQ8Zv4f1HhnPR1pdfRtf959etHNz%2BP%2BDZlZ8W1gpAF9o0KjHVErF4iQFLZ&X-Amz-Signature=00e312a356f6b14113d1b77471ec382bde0709e78e5ca2645fc42e161e54f1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
