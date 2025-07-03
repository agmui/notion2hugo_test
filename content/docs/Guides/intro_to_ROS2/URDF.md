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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSGIK2W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCYm4ZS8rIHC1W8CtwodwL1TL20iTgVvuP0yFE5JvN5TQIgNxD4mVaD9GLribAb6ool3CDIpL8nDL%2BDh3iWXPZKFAcqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGdy%2BXmo%2FQIJGKuuircAycjIlNmS6ARqLh8KsvzdV3CjzATfOvJEIeY3ZgZ426BhzXXskByqStAqeiOKOKUZLVqsCScVx7iKOOsf9kOQcUKCnyV2J0lzzed5rIsuO7%2FzwQN8p7neTK%2BhQiyNdVIezuqz%2F5wk8B%2FQGM5D4kTQkTqCaW45ITvcNHaJwIJz6BivPjJ%2BmBJeRisfBe8aN9yGhQkEJ1RY%2B5LwVEdw22UdmBVKxMHMwijDkEMaNQNqCD4%2Frf%2FIwxMRWVa7iOcWK7ieCNXaCVujWaVdNxe8kMeL64dQWlj1%2BotLShJkiiOPQu5z1tWf4%2BnAHcJcGurGln%2BtNclTccv7SUQCObi7Rprotd499FwF8TlUw8jA%2Bo5K7kaux8Q%2F3HKCV9HWOhBamQB%2BTj2nwNaKaQHih6%2FO0p1sB9PFID5Vl%2ByA33j8whTaTwLvIavMBY1Jk2e3KC3sqEr12Pn0xxmZieGG4ldWxIUO4El0r%2BvackM83LeRW5ssk%2Br5XN02a8dXPsRr5gxVIkpsUFEgycDNTS1zbDy1Zjzf3Ln%2BADnJBjLd8%2BnQCAA2NYZyofBnzJC9XBDPs8YveghgoISLRz9IYJyoCr3ByXsdkj5%2BuWWhXjbB3Xk%2FyFwHeyPc7mJEtwYUhPNv6G8MMbbl8MGOqUBhbbCggZJ9zOs0QMKd0JjZ7l0fPdyKELShm3ZbeRKeHpKk4P9Tc%2Flky%2FNZV34HpLmq69Vbd7UJPB3xX0vX6sI21lNgGJc1nBRpwZe%2FPRWWEYGsQCK3qEWZgCnt%2F3jp5RgyrnIbD7dEHLq4AmgvTkAK63oaKiNxYHdAz3uOhRzNXX6Hpv5ON3CXAgr%2BIxRuxZmqSvemQmQ8gsyAhtR3NyXSUBwh5Kg&X-Amz-Signature=0d6d87585ebc8b4779d92d602257f9ac82d3857a047eb0431a0b46d54ba5ee5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSGIK2W%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCYm4ZS8rIHC1W8CtwodwL1TL20iTgVvuP0yFE5JvN5TQIgNxD4mVaD9GLribAb6ool3CDIpL8nDL%2BDh3iWXPZKFAcqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGdy%2BXmo%2FQIJGKuuircAycjIlNmS6ARqLh8KsvzdV3CjzATfOvJEIeY3ZgZ426BhzXXskByqStAqeiOKOKUZLVqsCScVx7iKOOsf9kOQcUKCnyV2J0lzzed5rIsuO7%2FzwQN8p7neTK%2BhQiyNdVIezuqz%2F5wk8B%2FQGM5D4kTQkTqCaW45ITvcNHaJwIJz6BivPjJ%2BmBJeRisfBe8aN9yGhQkEJ1RY%2B5LwVEdw22UdmBVKxMHMwijDkEMaNQNqCD4%2Frf%2FIwxMRWVa7iOcWK7ieCNXaCVujWaVdNxe8kMeL64dQWlj1%2BotLShJkiiOPQu5z1tWf4%2BnAHcJcGurGln%2BtNclTccv7SUQCObi7Rprotd499FwF8TlUw8jA%2Bo5K7kaux8Q%2F3HKCV9HWOhBamQB%2BTj2nwNaKaQHih6%2FO0p1sB9PFID5Vl%2ByA33j8whTaTwLvIavMBY1Jk2e3KC3sqEr12Pn0xxmZieGG4ldWxIUO4El0r%2BvackM83LeRW5ssk%2Br5XN02a8dXPsRr5gxVIkpsUFEgycDNTS1zbDy1Zjzf3Ln%2BADnJBjLd8%2BnQCAA2NYZyofBnzJC9XBDPs8YveghgoISLRz9IYJyoCr3ByXsdkj5%2BuWWhXjbB3Xk%2FyFwHeyPc7mJEtwYUhPNv6G8MMbbl8MGOqUBhbbCggZJ9zOs0QMKd0JjZ7l0fPdyKELShm3ZbeRKeHpKk4P9Tc%2Flky%2FNZV34HpLmq69Vbd7UJPB3xX0vX6sI21lNgGJc1nBRpwZe%2FPRWWEYGsQCK3qEWZgCnt%2F3jp5RgyrnIbD7dEHLq4AmgvTkAK63oaKiNxYHdAz3uOhRzNXX6Hpv5ON3CXAgr%2BIxRuxZmqSvemQmQ8gsyAhtR3NyXSUBwh5Kg&X-Amz-Signature=3933334a2e7c8005e93008aaab3623456cdc6267849a3816be0d97bff26a3a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
