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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCL5BVW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCSxhBRzYBvJ8jOLGG2Sgwamf63kf99lTMDn6PZQB42GAIhAOUHcg8InBKtyQF78FyunmcKev52wDpXAS8kGquI9zR%2BKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ%2BvaQdvGDVbOMfvAq3APr3HYTYM2ESXdr%2FOu%2Fbg6jbO7OdYGgZI2jndvUfq2c368BbggQRJ6fV45qq0LQfXe1fwuRSek%2ByOL3QaM7vE%2B1vqxIjmITrd%2BScrtjsBRIOm5nktXB3xFT7grzPwENxW3B6CyWAbtjoyF%2FOOS6ogzYMeF6WjWlLzTzR7yExCngemCZX7eevckMxnp3ggNHeCpC4YmI6KC23kB0Gzjhd15lQvFKVLPrHGKCdihrkiol1MNrXI%2Baq43lS3BPywPwO%2BtwW7lMzjOwpV0UlbAHXXe2jPLGlxBJU%2BZHvbkg1T3hDw8zyYpV6LfWLHyMeEGyEL2KbzWLzZBxIK6j9MOBnIN2DpSd6CQRpkBmmv68y6Q%2Fggz1tEzfSP9pQeWRfjVDbkv3RsyCbDfb4rP%2F53qa6CueWrvgnqIqr9Vvhf6nMyNcxj6ZpckwOsbD8xtb7SP%2BAtss4pldrwSTnWwYeaARxTXqqx%2F4BySK8dlbAzrzSjO1z3rQ7tdYJWa%2B1CqDjgGCrL5OCBQd9ieepWGYiw4vtTy6eQ1wdJo9cilXLbQVA6pu%2BRWNNQ8Fbaelw1aNtJkl4F8iKqUhOTZXJNsE3QPAX7By%2FnmUTguA4Ythufu%2Bie5E0IhoGl%2Bf%2FLHneTz6RzDAqcHBBjqkAS3oKcmSjg1lK7a74axzMOPETRbpV45L09iFQv6pmhxskTwMmdgXmMVeyPAEAwMRbFHYKGjSslB4EkwY341A5lfgB8AhnFHek8rVEopqWeBn0pA0d0tfHja%2Bw2AfYq2Xs1IsnTFnZpsWvMTlZhyKTcZoLr%2FeR6Wbkg81AD5wm%2BEceGJTGRWQwQxoCv%2FSn3OUuNUUGrGCoPdWPxzMxHp0PAw2gpe7&X-Amz-Signature=f8f88e3a233317daf812fc4eb7568409032a2178fb19f65603ddfb694f1bacb1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCL5BVW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCSxhBRzYBvJ8jOLGG2Sgwamf63kf99lTMDn6PZQB42GAIhAOUHcg8InBKtyQF78FyunmcKev52wDpXAS8kGquI9zR%2BKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ%2BvaQdvGDVbOMfvAq3APr3HYTYM2ESXdr%2FOu%2Fbg6jbO7OdYGgZI2jndvUfq2c368BbggQRJ6fV45qq0LQfXe1fwuRSek%2ByOL3QaM7vE%2B1vqxIjmITrd%2BScrtjsBRIOm5nktXB3xFT7grzPwENxW3B6CyWAbtjoyF%2FOOS6ogzYMeF6WjWlLzTzR7yExCngemCZX7eevckMxnp3ggNHeCpC4YmI6KC23kB0Gzjhd15lQvFKVLPrHGKCdihrkiol1MNrXI%2Baq43lS3BPywPwO%2BtwW7lMzjOwpV0UlbAHXXe2jPLGlxBJU%2BZHvbkg1T3hDw8zyYpV6LfWLHyMeEGyEL2KbzWLzZBxIK6j9MOBnIN2DpSd6CQRpkBmmv68y6Q%2Fggz1tEzfSP9pQeWRfjVDbkv3RsyCbDfb4rP%2F53qa6CueWrvgnqIqr9Vvhf6nMyNcxj6ZpckwOsbD8xtb7SP%2BAtss4pldrwSTnWwYeaARxTXqqx%2F4BySK8dlbAzrzSjO1z3rQ7tdYJWa%2B1CqDjgGCrL5OCBQd9ieepWGYiw4vtTy6eQ1wdJo9cilXLbQVA6pu%2BRWNNQ8Fbaelw1aNtJkl4F8iKqUhOTZXJNsE3QPAX7By%2FnmUTguA4Ythufu%2Bie5E0IhoGl%2Bf%2FLHneTz6RzDAqcHBBjqkAS3oKcmSjg1lK7a74axzMOPETRbpV45L09iFQv6pmhxskTwMmdgXmMVeyPAEAwMRbFHYKGjSslB4EkwY341A5lfgB8AhnFHek8rVEopqWeBn0pA0d0tfHja%2Bw2AfYq2Xs1IsnTFnZpsWvMTlZhyKTcZoLr%2FeR6Wbkg81AD5wm%2BEceGJTGRWQwQxoCv%2FSn3OUuNUUGrGCoPdWPxzMxHp0PAw2gpe7&X-Amz-Signature=550f770120b0c2efa3b186338318b88446e57f23fff95a7c83eafb63c7df03ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
