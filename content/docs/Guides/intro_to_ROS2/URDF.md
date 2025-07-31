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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDEVKIKD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIM9B%2BZG2J9NiB5ZeOM2GuvgvzritnwbazsoMFrL0S5wIgdMVl4L%2FGf%2BffXaY4h3003q3kPerkY8NMhgLGS8ge57QqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSf1OzDQ0tbfAppGircA0sZEo%2BNFJhOFWj4YuhYh4mw%2Fxw4AaaGYqH98HgJLmq2%2B8CaTQMu2hNoNMTFQjDvXoNNQQ5ocFjulHU8e%2BXxfnEvHLy6iJJ9byddf3f5pfib2r4ENRwHYblVY8rVGIy7Yesmu43%2Bo41SEqpQ0lDHFdJFTLMYMS8AuNfbs%2FbC2DR6%2F79CjhRJyHHPFea1R2F4atdTTGjpGzNesf6q24VSg3tpM5GSopwh05tV6k2RU9GSHGMFy8fozgHG7w7OD5PXdFCR8Q7SH0XGQej%2B51WVJXXHQ8x7QaFbDGJ1HJwzlWf30bcMC0D8XMQR2x9x4snhKUm0MAyLd9VVv8KmL8aZV%2Bbi%2B%2BOPhx6ITQEKAcqMRHm2Jh9%2BHc9%2FwA7Gychw%2FT3GduJYkNuGsLLfvGmkAILnvLbwH68prO5W9Ik0rm2SQMEWG60DNGr4no5fkz6mJ6K%2Bm%2BwkSLdNoyfWfg3BCR4mk63bCEtRoqNLvUfPUexqwbxCNMrEEVN9vAS4eXPV00%2Fa68Lj48KkK8SSijFQk0S2kSvoY5G7CJxjxUL8mOPE%2Bwf2iMxzSY5uQh%2BSbOLH6UAVxQe%2BDAKSaW1MRsH0qWRpkarEuJMGNd4tOvi63gVEJzIgtXoDBicjuLyEHb6aMJqBr8QGOqUB%2FR3tLpWvRckYM7Se26GufXBzXn1uXX%2FWwZ73qfiYjv3K9apSv0pIRF6YdXaVYuTNlIV%2BTdITwSctMZoopDgCki2oTK4iNf3iG7TemmYBl2nu4P5ud6gGWoDgWBLPQd6WByNKNl1LDoIPLXwM4TQvZxMlP8ajz622AQw2dWv0zq%2BYzHZBqeh3eDwFHL4cZ3Cllj%2B34ys0WF6GWnPLBJwY%2Fu8fKFPi&X-Amz-Signature=640d0c7141e48f1b312e067315d16665d19f15474dc25f475052044a30f354d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDEVKIKD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIM9B%2BZG2J9NiB5ZeOM2GuvgvzritnwbazsoMFrL0S5wIgdMVl4L%2FGf%2BffXaY4h3003q3kPerkY8NMhgLGS8ge57QqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSf1OzDQ0tbfAppGircA0sZEo%2BNFJhOFWj4YuhYh4mw%2Fxw4AaaGYqH98HgJLmq2%2B8CaTQMu2hNoNMTFQjDvXoNNQQ5ocFjulHU8e%2BXxfnEvHLy6iJJ9byddf3f5pfib2r4ENRwHYblVY8rVGIy7Yesmu43%2Bo41SEqpQ0lDHFdJFTLMYMS8AuNfbs%2FbC2DR6%2F79CjhRJyHHPFea1R2F4atdTTGjpGzNesf6q24VSg3tpM5GSopwh05tV6k2RU9GSHGMFy8fozgHG7w7OD5PXdFCR8Q7SH0XGQej%2B51WVJXXHQ8x7QaFbDGJ1HJwzlWf30bcMC0D8XMQR2x9x4snhKUm0MAyLd9VVv8KmL8aZV%2Bbi%2B%2BOPhx6ITQEKAcqMRHm2Jh9%2BHc9%2FwA7Gychw%2FT3GduJYkNuGsLLfvGmkAILnvLbwH68prO5W9Ik0rm2SQMEWG60DNGr4no5fkz6mJ6K%2Bm%2BwkSLdNoyfWfg3BCR4mk63bCEtRoqNLvUfPUexqwbxCNMrEEVN9vAS4eXPV00%2Fa68Lj48KkK8SSijFQk0S2kSvoY5G7CJxjxUL8mOPE%2Bwf2iMxzSY5uQh%2BSbOLH6UAVxQe%2BDAKSaW1MRsH0qWRpkarEuJMGNd4tOvi63gVEJzIgtXoDBicjuLyEHb6aMJqBr8QGOqUB%2FR3tLpWvRckYM7Se26GufXBzXn1uXX%2FWwZ73qfiYjv3K9apSv0pIRF6YdXaVYuTNlIV%2BTdITwSctMZoopDgCki2oTK4iNf3iG7TemmYBl2nu4P5ud6gGWoDgWBLPQd6WByNKNl1LDoIPLXwM4TQvZxMlP8ajz622AQw2dWv0zq%2BYzHZBqeh3eDwFHL4cZ3Cllj%2B34ys0WF6GWnPLBJwY%2Fu8fKFPi&X-Amz-Signature=01ce0ea4d5ea22fb2b1020d44b177ed37b75b12186100c2183fcd8e102d9beb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
