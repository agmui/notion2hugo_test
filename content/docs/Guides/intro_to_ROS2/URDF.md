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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDWDCSF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL8Q5bQuuycan5kHrbDD5zDU6PjMTBYIpL%2BaQQ4HQXFAIgTaqa9hcjlre2ZUlba5pTfS3mop7%2B8EXcNzWYIlGMRe8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxuijt66VGiQnqPircA2vR8wP4JXF1xdU6q8FjUCxWezjRrsocmeamZo1hChKuYWAi1DQc4p7W6wt6aYb7Mjoo%2ByRd4ajgDf4OkhnZAZDbUrI8vcFwR13mA8hRbcwYmQjGANsl%2BsuoTX4wzGJKs7Yq6nBCxf2HHdPBKJ3UL2wuf7zNEzWArPB9oGxgUSuqGMgymHxGAalDgGG6nb6T%2FiQbRmdCqFHRxkyWkD60Sbxt0Fz6tsP8CVFMT8GLSgzFNg7hcsmmuCwvJIVJKCi3y1mbeB2iZEh6SWGQ5rHjaxDLAmsRCr1HNqMsy8W8jckfwvHejvkuefXnmJwSRz%2FjUVSwZf9y7ZoXMBF9HUsca%2BXftRMaxLCQPl1WJbN06WPokpWNzdZKKyL0HRDt2pJ9n9sV43cJO00JYqp315pSfjYu7Nwp2sZe%2FAefz04Fo1EvzQziNWkBl6OUlKJmhqtiVfX0rcbJ52%2Bi5ccolppVyNQmSxjGuhhsSmq%2Bvyg3DPjib3VLR4VGyqeiNwO3OqwmJh95%2BI3i%2B6aNxmVEg73RSFlW8xvER4B8GTt1FiQuKRZdt%2B5KXtFeUMu67bBuABlSCrAveICKWWHANbayP479jcsfwVbASWWmIFRe8MnESEcqSp%2B7EI6yloaQmBNhMIHR2cIGOqUB7%2FZ07%2B8corKfWiWe6Szy9s0HnC86JmeEht2UA1WDUwwuHaU1fm8hHEIc9UZGIMeEN4pswdfUcCm0jW3puZPAX5UqUXo12Gwl2L7RTurA3IkytP2Xu7TRduLQ0gWHe31Pi80fZa%2FcUs1WagHgRaNMHdw5MNdxhEQd1sSa0tD4oufkoTjkP2nKLoWOnyTZvmFoOdjKpLE5VJqk3dal3q2OukTwC7XK&X-Amz-Signature=25d54b65860d39eb4bbe87eae0be33a5428166f5ffc70769814eaae66323995c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDWDCSF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL8Q5bQuuycan5kHrbDD5zDU6PjMTBYIpL%2BaQQ4HQXFAIgTaqa9hcjlre2ZUlba5pTfS3mop7%2B8EXcNzWYIlGMRe8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxuijt66VGiQnqPircA2vR8wP4JXF1xdU6q8FjUCxWezjRrsocmeamZo1hChKuYWAi1DQc4p7W6wt6aYb7Mjoo%2ByRd4ajgDf4OkhnZAZDbUrI8vcFwR13mA8hRbcwYmQjGANsl%2BsuoTX4wzGJKs7Yq6nBCxf2HHdPBKJ3UL2wuf7zNEzWArPB9oGxgUSuqGMgymHxGAalDgGG6nb6T%2FiQbRmdCqFHRxkyWkD60Sbxt0Fz6tsP8CVFMT8GLSgzFNg7hcsmmuCwvJIVJKCi3y1mbeB2iZEh6SWGQ5rHjaxDLAmsRCr1HNqMsy8W8jckfwvHejvkuefXnmJwSRz%2FjUVSwZf9y7ZoXMBF9HUsca%2BXftRMaxLCQPl1WJbN06WPokpWNzdZKKyL0HRDt2pJ9n9sV43cJO00JYqp315pSfjYu7Nwp2sZe%2FAefz04Fo1EvzQziNWkBl6OUlKJmhqtiVfX0rcbJ52%2Bi5ccolppVyNQmSxjGuhhsSmq%2Bvyg3DPjib3VLR4VGyqeiNwO3OqwmJh95%2BI3i%2B6aNxmVEg73RSFlW8xvER4B8GTt1FiQuKRZdt%2B5KXtFeUMu67bBuABlSCrAveICKWWHANbayP479jcsfwVbASWWmIFRe8MnESEcqSp%2B7EI6yloaQmBNhMIHR2cIGOqUB7%2FZ07%2B8corKfWiWe6Szy9s0HnC86JmeEht2UA1WDUwwuHaU1fm8hHEIc9UZGIMeEN4pswdfUcCm0jW3puZPAX5UqUXo12Gwl2L7RTurA3IkytP2Xu7TRduLQ0gWHe31Pi80fZa%2FcUs1WagHgRaNMHdw5MNdxhEQd1sSa0tD4oufkoTjkP2nKLoWOnyTZvmFoOdjKpLE5VJqk3dal3q2OukTwC7XK&X-Amz-Signature=ff56ef23932e52801d2ebdbd3b9880eff4b250af80b7f078a0bec825a29d771e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
