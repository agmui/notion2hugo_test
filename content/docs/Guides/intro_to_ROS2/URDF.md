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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKOMBBR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDwquagM0%2FeZ7moU3zhRrqcbHm9mp0%2FG4Z5fEc%2BGdyJkAIhAPkF4y0PW898%2BG7zLcbcTp4dnwN%2Bsnz1GLZqqzhr4Ea4Kv8DCBsQABoMNjM3NDIzMTgzODA1IgzyECD%2BCe%2BBv15mDmIq3APX8PoG5se2yizimKGaoUxK1G4VHe9O1oA4JW6ikg4zZ97iF3RThBY4ajr4DdE%2BFSKLr4iLdjZR728QiZbr%2FalIv9FUwhnF%2Fq0W4LBpDwwsRrkRpL9pYrlNGcHWXNnFNY4feYKCvArTQ6CcDD7UF613IxuVUFkpW1pKJNf%2FWTyeM923y9xLYwHw7yJQ6YNSAg1vaY2BvQziLtVh4XWURZGglrnq2PxSFig1BZhXJhaq%2BAsoIA7V4Zk7JEKked7EtXAH1cvxcnXj%2Bw456W7mSX%2FH5zXGhHeBwzvSUBUZGbdjRLfJHRiyOVLMbFFfZQAAQrofZYaoY%2FPNrMO92C9MIcbwRE70je7wp3pym9MiRK9S%2FRydmkJ8PJZuEJ5xcX9LvEarnj1iE8nPcUV7xk0IgvMyI%2Fv2AvP0pcT5qnZ%2FNADJ7WQWAFelouayeVnQ9X4ui93fBjcGkJmyjwkyL62KrEYHnj0op7CojBw%2F1AOKLEREl4zjwdSHEMukdg6OMMvArYExHc7H0AaP3vAAMGO0jL9aEa1Re2XaPEAjyumj1gO4dVq5wFS9h%2BoochyTrTXtpjoZKpaO5ZnULBqQ%2BEODkszamJjncXD6q63L4T5uQ1EHOkwG6KjnyRi8B1InZjDq5s%2FDBjqkAYJgHTMmCMOGp5iXHoEJ4tjYwuoz%2Bc%2FLzJe9SKKdqAfVGalD5JYM6HTAih%2F7uVk6fBWCSho5R2Ns8RhDcLG2SX7v2KSP0HcU8RmWWEer1%2BIwZtJzkR5Bkl%2FPiS6EYZ9tRjQ1MLPNTzW47wNA0kHrzwje80rs0Or7NrgQlNvqmqmln802DMdhuULLISooC6sCsccv79n15ejNi9U3BUotWCXQVWg0&X-Amz-Signature=19844d0590f4ff55d68866282f620d319dc0209c3ce8783734d16ed4b30dfbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKOMBBR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDwquagM0%2FeZ7moU3zhRrqcbHm9mp0%2FG4Z5fEc%2BGdyJkAIhAPkF4y0PW898%2BG7zLcbcTp4dnwN%2Bsnz1GLZqqzhr4Ea4Kv8DCBsQABoMNjM3NDIzMTgzODA1IgzyECD%2BCe%2BBv15mDmIq3APX8PoG5se2yizimKGaoUxK1G4VHe9O1oA4JW6ikg4zZ97iF3RThBY4ajr4DdE%2BFSKLr4iLdjZR728QiZbr%2FalIv9FUwhnF%2Fq0W4LBpDwwsRrkRpL9pYrlNGcHWXNnFNY4feYKCvArTQ6CcDD7UF613IxuVUFkpW1pKJNf%2FWTyeM923y9xLYwHw7yJQ6YNSAg1vaY2BvQziLtVh4XWURZGglrnq2PxSFig1BZhXJhaq%2BAsoIA7V4Zk7JEKked7EtXAH1cvxcnXj%2Bw456W7mSX%2FH5zXGhHeBwzvSUBUZGbdjRLfJHRiyOVLMbFFfZQAAQrofZYaoY%2FPNrMO92C9MIcbwRE70je7wp3pym9MiRK9S%2FRydmkJ8PJZuEJ5xcX9LvEarnj1iE8nPcUV7xk0IgvMyI%2Fv2AvP0pcT5qnZ%2FNADJ7WQWAFelouayeVnQ9X4ui93fBjcGkJmyjwkyL62KrEYHnj0op7CojBw%2F1AOKLEREl4zjwdSHEMukdg6OMMvArYExHc7H0AaP3vAAMGO0jL9aEa1Re2XaPEAjyumj1gO4dVq5wFS9h%2BoochyTrTXtpjoZKpaO5ZnULBqQ%2BEODkszamJjncXD6q63L4T5uQ1EHOkwG6KjnyRi8B1InZjDq5s%2FDBjqkAYJgHTMmCMOGp5iXHoEJ4tjYwuoz%2Bc%2FLzJe9SKKdqAfVGalD5JYM6HTAih%2F7uVk6fBWCSho5R2Ns8RhDcLG2SX7v2KSP0HcU8RmWWEer1%2BIwZtJzkR5Bkl%2FPiS6EYZ9tRjQ1MLPNTzW47wNA0kHrzwje80rs0Or7NrgQlNvqmqmln802DMdhuULLISooC6sCsccv79n15ejNi9U3BUotWCXQVWg0&X-Amz-Signature=145444d616522539850db415d1dbac2dcc3ffdfa997d275c27a8fd5a5ac0c7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
