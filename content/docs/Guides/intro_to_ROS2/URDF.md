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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BBVMA3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4QdoknFlHAOltOMQQd3Rs8Yy%2BYYY7XfXb%2BoSTg217vAiEAhpB08TeSszNtr90XxFJn1Tgc5LDTL5ThIVSNszg13ckq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKu4itqI7WhRrPcU6ircA%2Bk4gbAVa4%2Fj8XkJis4kSwlwuxN5NqyAn%2FG7yW7hWmKurPhFjlqec39G6evH2LHd5Qx%2FdOJoJJeC%2FLag4%2BRruCe40xcc2NQDVpefeWZCfUFygrnaDMnB6eh5Miq%2FNPORR3AMSchjFIwo8xPYK0GlgO786gj9gL73htHC35ypotU99HYXYZTZMtE7jSFxHfZ1rRPbdxheIZPgjPoOUgdwBh%2Fds%2B43e%2FNL1%2BSpa8oyjU6REQX616H8KjGdR7NZZWn2HLDK%2FgXwbMEb0%2BX7SAf2BKJBZr4aw46Ty%2BZY8AegVXQjX1BQZnZUeSh7VdJcBvS7X3XTHdVSmFpgLkNbV3T9BMCZKE1zB5FcW%2B4tsvCdNZe%2BQkQWcPhryI4B%2B0hYG0Sn3eQ8RHccRuXFrl%2Bo9iOoEVTY%2BoipUK4Xecw9FyGC0KAmLnESTZt3Osq3dm6qpV8ySvyywEG%2BRALIBSioruAQWvHKQ41uSm0tuxhTJ07LKdp4YVilr1oSuy%2F%2FeWvbKHDBdMnbF3j9uKHHy3P2F2acTOojw4TNNej5ni5KHM4%2BjVnQV8j2lj6AeCkU3e8lfQDgKbv9DnOfU%2BcaZDgC1c%2FTodFjaNXiWHEGqeT5N14TyoT0%2BP97ymV37amsIxVZMIPficAGOqUBvJR7J0fKFzMdPzb7SSzXHBR567CstLZHU%2Fwibd2dC4rKZrEkhRi4%2BV7xgMp1B%2FHATPy2h2mkTGgmT5LPC6o41bk8%2FCJAxVbOkDztJNPGjqQznUcK61AnsLaFuC3SGXo0n%2BnQvwquTc2a%2FtHWNkAjMKcox5vqZgFZ4AtQztIpESNEnxDYweGeZiVabKWWzMDspt13%2Ftfio3YUQ97%2F16Xy6O5%2BbJ2T&X-Amz-Signature=4ca3d04bf8d68798ff83901422fd5dd7966001702a7464a4cd3b843e88b39032&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BBVMA3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4QdoknFlHAOltOMQQd3Rs8Yy%2BYYY7XfXb%2BoSTg217vAiEAhpB08TeSszNtr90XxFJn1Tgc5LDTL5ThIVSNszg13ckq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKu4itqI7WhRrPcU6ircA%2Bk4gbAVa4%2Fj8XkJis4kSwlwuxN5NqyAn%2FG7yW7hWmKurPhFjlqec39G6evH2LHd5Qx%2FdOJoJJeC%2FLag4%2BRruCe40xcc2NQDVpefeWZCfUFygrnaDMnB6eh5Miq%2FNPORR3AMSchjFIwo8xPYK0GlgO786gj9gL73htHC35ypotU99HYXYZTZMtE7jSFxHfZ1rRPbdxheIZPgjPoOUgdwBh%2Fds%2B43e%2FNL1%2BSpa8oyjU6REQX616H8KjGdR7NZZWn2HLDK%2FgXwbMEb0%2BX7SAf2BKJBZr4aw46Ty%2BZY8AegVXQjX1BQZnZUeSh7VdJcBvS7X3XTHdVSmFpgLkNbV3T9BMCZKE1zB5FcW%2B4tsvCdNZe%2BQkQWcPhryI4B%2B0hYG0Sn3eQ8RHccRuXFrl%2Bo9iOoEVTY%2BoipUK4Xecw9FyGC0KAmLnESTZt3Osq3dm6qpV8ySvyywEG%2BRALIBSioruAQWvHKQ41uSm0tuxhTJ07LKdp4YVilr1oSuy%2F%2FeWvbKHDBdMnbF3j9uKHHy3P2F2acTOojw4TNNej5ni5KHM4%2BjVnQV8j2lj6AeCkU3e8lfQDgKbv9DnOfU%2BcaZDgC1c%2FTodFjaNXiWHEGqeT5N14TyoT0%2BP97ymV37amsIxVZMIPficAGOqUBvJR7J0fKFzMdPzb7SSzXHBR567CstLZHU%2Fwibd2dC4rKZrEkhRi4%2BV7xgMp1B%2FHATPy2h2mkTGgmT5LPC6o41bk8%2FCJAxVbOkDztJNPGjqQznUcK61AnsLaFuC3SGXo0n%2BnQvwquTc2a%2FtHWNkAjMKcox5vqZgFZ4AtQztIpESNEnxDYweGeZiVabKWWzMDspt13%2Ftfio3YUQ97%2F16Xy6O5%2BbJ2T&X-Amz-Signature=0497f92940875769c15f89487d661a136ba5c6dbe68bdd882721b0f6e51c1265&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
