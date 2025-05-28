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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6Y6Y2Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKk8Q1JtDoYk99RJ5wtQZ4qcYmaPkKvAP19cqHYC4pwIgDxxk3U5G%2Fr0dcbqo5qkDHq444L03Mch9I766WkpLzrwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLmiZCreVksOJK9MSSrcA0AgWXcVjvpRuolRAU0hTLSW%2FOhrDoLalQCLxJ96DB%2FNnhUGxUQKFShfWXiWO8PTOHMMLFoNpHQXm%2BQVXzHPZ1x0VBj%2F8%2BQbD4PGgdqXAHeubVsko5zN8DruH8SHkvox6HQn71Oa%2F6wZF8S1F8qxgBnkc%2FxxArsDcn5c0JrBVkrojInIR6ujjynLhr3fDB5ThQta7f8ZuZp12CIC%2Fqs2G3ye7%2FiqDvpVCaMN%2FP2kntPHORQgrklCItpsxikg%2BZjTa8Leuh0NkBwBLzFwlALC353oCG0LIh6VnYy0Fn3XvQeP8IPgjQj7ZfPL80WFSI0P%2Bnfbgf%2F71F9WgYTsDFn70GKFtrE%2FWWWoMUxsCE2IzUaA%2FLgHz%2BSQ9g%2FmuTzFOP%2FtXpuSWud1RB5EP3dgmMMHojwuHEpw1m5y0qwg2Ju5AvBVDYFEjB8ascepcN0uYbDxNBQ%2FQQP0RHGarVMqvko5W94v2RRM1%2BEKPQhX9c3q2x73effB6xnzua6xg20P%2FDO9kI3HrB10B5Vob25ba0ayWDv71FgJWeJdiMZEUOOYRAijCDQyVshpnUgQZx0asl%2F9skywhlbAkqHJIRjXuV5I8knY%2BXtiR1mizCxZk32FCG1%2FxpSk3usA13LFShiLMOuQ3sEGOqUBMqgXASsslwBvv%2FmEet8gMnyx9hJFAjoDxEXRIRqj5zj30DmyLd2myDmCzc1egCIQXrlcvp2j7CzNqQOSzDuqXj8nPyLFh2HBYVeMhPcYzlv723nkNUKOk%2FP%2F5CSrQoIcsLnnaoUS6IxdMdSMkwjyVpZRkB6lJe8Eo2Wb1KxIv7gJX6uB%2Fduypdf1hTgG7dE9zVZe%2FUThsJkJr%2BaTDNkFkrWvT2jR&X-Amz-Signature=e5213554c2ca3de5e41588cb87133386b652454a4261e52e9fd22f65ff84b289&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6Y6Y2Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKk8Q1JtDoYk99RJ5wtQZ4qcYmaPkKvAP19cqHYC4pwIgDxxk3U5G%2Fr0dcbqo5qkDHq444L03Mch9I766WkpLzrwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLmiZCreVksOJK9MSSrcA0AgWXcVjvpRuolRAU0hTLSW%2FOhrDoLalQCLxJ96DB%2FNnhUGxUQKFShfWXiWO8PTOHMMLFoNpHQXm%2BQVXzHPZ1x0VBj%2F8%2BQbD4PGgdqXAHeubVsko5zN8DruH8SHkvox6HQn71Oa%2F6wZF8S1F8qxgBnkc%2FxxArsDcn5c0JrBVkrojInIR6ujjynLhr3fDB5ThQta7f8ZuZp12CIC%2Fqs2G3ye7%2FiqDvpVCaMN%2FP2kntPHORQgrklCItpsxikg%2BZjTa8Leuh0NkBwBLzFwlALC353oCG0LIh6VnYy0Fn3XvQeP8IPgjQj7ZfPL80WFSI0P%2Bnfbgf%2F71F9WgYTsDFn70GKFtrE%2FWWWoMUxsCE2IzUaA%2FLgHz%2BSQ9g%2FmuTzFOP%2FtXpuSWud1RB5EP3dgmMMHojwuHEpw1m5y0qwg2Ju5AvBVDYFEjB8ascepcN0uYbDxNBQ%2FQQP0RHGarVMqvko5W94v2RRM1%2BEKPQhX9c3q2x73effB6xnzua6xg20P%2FDO9kI3HrB10B5Vob25ba0ayWDv71FgJWeJdiMZEUOOYRAijCDQyVshpnUgQZx0asl%2F9skywhlbAkqHJIRjXuV5I8knY%2BXtiR1mizCxZk32FCG1%2FxpSk3usA13LFShiLMOuQ3sEGOqUBMqgXASsslwBvv%2FmEet8gMnyx9hJFAjoDxEXRIRqj5zj30DmyLd2myDmCzc1egCIQXrlcvp2j7CzNqQOSzDuqXj8nPyLFh2HBYVeMhPcYzlv723nkNUKOk%2FP%2F5CSrQoIcsLnnaoUS6IxdMdSMkwjyVpZRkB6lJe8Eo2Wb1KxIv7gJX6uB%2Fduypdf1hTgG7dE9zVZe%2FUThsJkJr%2BaTDNkFkrWvT2jR&X-Amz-Signature=727dd8a90e57fd30d038f9f34f8867548d44e6451f28ee381ec6917f29ac7b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
