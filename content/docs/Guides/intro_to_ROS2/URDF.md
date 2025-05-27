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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTEZ7EB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxGIM9cwfiPRw7v0Yy1ddL2VbsqgkvsQ%2FdIbrE3yAOAIgHEF%2BlJFzlDZVb5Cg4Z3QArbrbL3bjUkG%2F18whcJCG1Mq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDECU47vJ5JVb38Gh%2FCrcA%2BjtMbXjgDr7ZZ4Uz7eOOI0dlWWCyT217wzMuctJcPbO23v%2B8VypKaBzw0vUBGORXSoEtv7OGAqXC98AWgr9%2BcJDZ182dSTnlCyPgogabIhfF0duhyFzy94C9r%2F8si8CxTv6tpPweuwXj7PL8OOpb%2B%2FuVpH3M56Qbt%2BJSmwAdlqz24VU9%2BzyiJ%2BitTXGCNX4enaDd3h9lmgOflXNuvW1PK9yNyXJW9iPATLE7xJo050Sk7LYJxAZeLwkvPU%2F5p6%2F4iB5VMWQt3jQ6PU6R15XV1iykiKPsxUQvGxILtQP7ES7nO1XbMntz9gAmWXdZC4XekyHW1bCrVpzbPScqijZTjgETMT4vGZILJFZXUVbyr6RSBez37LzD9wpptsbD8QApfuUR71gr1TCJClF5ZJ1MAJfyJI6kzBT1Ut1vGHkUXTwE1MnPfoQKFsHG2B3W6AgSojucD6UWkiyrSae6GEGPp7lDqj%2BDgDUWlZDx%2FbPzhxaCcplUsFq5O4ptbY1LqZGw5C3uJrb3ftLj38y06PnXCaqQu3UTp1nL1EQB5JCz14%2BccHmBRKWGNh5RM9LXpG6blpcNoznBcwWJQuqVy9wbFJfFhcmIG4xIpTpzcDN3HHi087Ye%2FnYC8dOXHsbMPGW1MEGOqUB326tjIeR9q4r%2Fm1qlhrqyIevIqqHj9KZxbk2ZvqRngp6iO2sm9UZzHvPZXBv5ien%2F2Qy145MAD6jpyKdo4QqPutwYnxs%2Bw8mC8M1904u863QG5Nts41i2BYLzEIklYYCSMrzfy8lssI6bBWif%2F3Xtc%2BccwKgjm5%2BrvI0tQr6iMhldtt%2FV3vtM3GaYUiWqVQHSzraoElvuQJV7E1pDctnHwaRaOGs&X-Amz-Signature=95b7294634c7ee527313ce0b660970d87cd9ec92468f5d8bf1b407318f670550&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTEZ7EB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxGIM9cwfiPRw7v0Yy1ddL2VbsqgkvsQ%2FdIbrE3yAOAIgHEF%2BlJFzlDZVb5Cg4Z3QArbrbL3bjUkG%2F18whcJCG1Mq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDECU47vJ5JVb38Gh%2FCrcA%2BjtMbXjgDr7ZZ4Uz7eOOI0dlWWCyT217wzMuctJcPbO23v%2B8VypKaBzw0vUBGORXSoEtv7OGAqXC98AWgr9%2BcJDZ182dSTnlCyPgogabIhfF0duhyFzy94C9r%2F8si8CxTv6tpPweuwXj7PL8OOpb%2B%2FuVpH3M56Qbt%2BJSmwAdlqz24VU9%2BzyiJ%2BitTXGCNX4enaDd3h9lmgOflXNuvW1PK9yNyXJW9iPATLE7xJo050Sk7LYJxAZeLwkvPU%2F5p6%2F4iB5VMWQt3jQ6PU6R15XV1iykiKPsxUQvGxILtQP7ES7nO1XbMntz9gAmWXdZC4XekyHW1bCrVpzbPScqijZTjgETMT4vGZILJFZXUVbyr6RSBez37LzD9wpptsbD8QApfuUR71gr1TCJClF5ZJ1MAJfyJI6kzBT1Ut1vGHkUXTwE1MnPfoQKFsHG2B3W6AgSojucD6UWkiyrSae6GEGPp7lDqj%2BDgDUWlZDx%2FbPzhxaCcplUsFq5O4ptbY1LqZGw5C3uJrb3ftLj38y06PnXCaqQu3UTp1nL1EQB5JCz14%2BccHmBRKWGNh5RM9LXpG6blpcNoznBcwWJQuqVy9wbFJfFhcmIG4xIpTpzcDN3HHi087Ye%2FnYC8dOXHsbMPGW1MEGOqUB326tjIeR9q4r%2Fm1qlhrqyIevIqqHj9KZxbk2ZvqRngp6iO2sm9UZzHvPZXBv5ien%2F2Qy145MAD6jpyKdo4QqPutwYnxs%2Bw8mC8M1904u863QG5Nts41i2BYLzEIklYYCSMrzfy8lssI6bBWif%2F3Xtc%2BccwKgjm5%2BrvI0tQr6iMhldtt%2FV3vtM3GaYUiWqVQHSzraoElvuQJV7E1pDctnHwaRaOGs&X-Amz-Signature=4ae937a266bf108ea7e6f3accb1f26f71df5181f2eddad0c6557a3723fd820cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
