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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRVN6Z6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAamPOu6YWpa1Y9%2BOvDOU8gCftYuxQquSu2P8aUTrpE5AiBT7eROvfATCtLv7xJGbPLdU3LuDdgaAC2xw5IkAez0MiqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhouTV45LzYLLigVNKtwD%2B29KeEeR3m30udxlfY4gGPi7TXcSJl006J1c20igyFSGsXa2di%2Bdr5SqcJ3KE92k%2FhWF%2B5QoeBOPtZCyzhiVf3Tvdf%2BxQ9RcELLSbKR8Tso91KKE5ZcV2jYFYmmi%2BGUXEY7aQs8yzb%2FuFN%2F%2BRuTo6QTEhpQnK13fG3HN7AEBO15C8pwT76XmQ7JjMBf3wBoYStxLqxXlseV6rMy5ZG2Nil7cbjwJ3wTMb1yCcMFFDzyyilxhzUw7HGxh77qyWinqbKF%2FDN01SRWJ2qdA7dsP1xXrUawN8%2BBkOWa4bz532Vz4lIf0Uic0Sa%2B8KqXvPz1xARr%2BvSmy6dBdpsMAVfWtg1UUGYwrL6LtwJCYoqWP3wiiv2qPVNB9bbeER8kfrzhijPHph1cgTzK4PqxvRJ6AAO1CDrCX548RkNzJpBnN5UnyzoCA0QS4bz%2FNH%2FmjujLwnCOca32XRob%2Fc%2BHrnngJmg2lsi5fIaiyEQrKfHnWU1jnPZLZMEktBU%2BPPnWXR6Ze0NLsRW5Os0HUYubDEIPg643FEShSxvnYmI9M44IN%2BpQkAEvSmSKKpxQA7OoOmh3UKPBJgUe88XdXABtJXsVD0ou6S%2FZgg6IsxoCqUwFJJkrhSlwZR4ObguIxBFUwxLCzxAY6pgF77abcl3f%2Bjm5VcpntM7KjS5CSWu8soS5e6ZhMlReuzDkcquaguY0Cd1vLhRaDCpg5IN9Vb6%2Bp0W1hd%2B9zK%2Br%2FBJ4d1NVdQn8msqzSDHjbKWobX3FQD5PuExp8cr7AwMzqGZjHT1uKi%2Fl27SMdW6KuZXwmwKhrgWelAnAaB2u90XQ0iMMrxjhiVPeitrPc3nJAJREgmlUr86r5sP1irj%2FycRJJfjGs&X-Amz-Signature=5be09b8a9a08e3c688c18c226681b25aa6c577ab191f91d4f4ea4a6904171a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRVN6Z6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAamPOu6YWpa1Y9%2BOvDOU8gCftYuxQquSu2P8aUTrpE5AiBT7eROvfATCtLv7xJGbPLdU3LuDdgaAC2xw5IkAez0MiqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhouTV45LzYLLigVNKtwD%2B29KeEeR3m30udxlfY4gGPi7TXcSJl006J1c20igyFSGsXa2di%2Bdr5SqcJ3KE92k%2FhWF%2B5QoeBOPtZCyzhiVf3Tvdf%2BxQ9RcELLSbKR8Tso91KKE5ZcV2jYFYmmi%2BGUXEY7aQs8yzb%2FuFN%2F%2BRuTo6QTEhpQnK13fG3HN7AEBO15C8pwT76XmQ7JjMBf3wBoYStxLqxXlseV6rMy5ZG2Nil7cbjwJ3wTMb1yCcMFFDzyyilxhzUw7HGxh77qyWinqbKF%2FDN01SRWJ2qdA7dsP1xXrUawN8%2BBkOWa4bz532Vz4lIf0Uic0Sa%2B8KqXvPz1xARr%2BvSmy6dBdpsMAVfWtg1UUGYwrL6LtwJCYoqWP3wiiv2qPVNB9bbeER8kfrzhijPHph1cgTzK4PqxvRJ6AAO1CDrCX548RkNzJpBnN5UnyzoCA0QS4bz%2FNH%2FmjujLwnCOca32XRob%2Fc%2BHrnngJmg2lsi5fIaiyEQrKfHnWU1jnPZLZMEktBU%2BPPnWXR6Ze0NLsRW5Os0HUYubDEIPg643FEShSxvnYmI9M44IN%2BpQkAEvSmSKKpxQA7OoOmh3UKPBJgUe88XdXABtJXsVD0ou6S%2FZgg6IsxoCqUwFJJkrhSlwZR4ObguIxBFUwxLCzxAY6pgF77abcl3f%2Bjm5VcpntM7KjS5CSWu8soS5e6ZhMlReuzDkcquaguY0Cd1vLhRaDCpg5IN9Vb6%2Bp0W1hd%2B9zK%2Br%2FBJ4d1NVdQn8msqzSDHjbKWobX3FQD5PuExp8cr7AwMzqGZjHT1uKi%2Fl27SMdW6KuZXwmwKhrgWelAnAaB2u90XQ0iMMrxjhiVPeitrPc3nJAJREgmlUr86r5sP1irj%2FycRJJfjGs&X-Amz-Signature=c657f12327d2811786e00a587c0c6798400dcdf35305203e49d61d426d0962b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
