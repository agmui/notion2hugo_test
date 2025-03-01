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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKEXG2JC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDu1CMawSMSiiLJ3jALaySysJME6VwcBqkk0zKhud5JPAiEAmstEvxRRKwK6xOrPCw2swuTOzwXrCndcrvPOCMR5VyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBqRSGpvqw%2BVfbVACrcA%2FX5mlevIXS9W%2BF4eU2zSuxBKTCmkCVBKN41moAi%2BMBqsACsI6NbzAHHYDSZ3KAPlFNLvOfHuUTbVFjv%2FWRKjmg6q%2BVxo1IN%2BuOcWGXq5qHCmyXdPjkzSm%2BrKTXU6v7yBBYWr5F%2FU8SOdaq4rR7gnF1qw61rRjf1VH2GttG52p3d65bhpmMonrbeoNhF3wtu%2FuRz7kB5Jwb8KuhiuAIUOLkPH2cVEoPWpVPxOvavLbFFvYDs2qQCpijdnzz4SPyXg2SYRcehdQ6cO7dtPLxYNMUctapQgXz%2F%2FUfYnuwszszqTqASAbhH0mN0VtxQ9OGVJTrFoLaZz4S3QQBoSJjH3%2FgGoGeSk7NFO2FU0nzSyBSy5b3C787J%2FbuxAnhxKL3E3t5Ey8LoTxyoSNEEYhHtJn2GdwFai8E%2FI31MO%2FmMgW9Lej7l2NeLYBTUpemRTytYh9%2Bi9%2B8M6yI%2FyjB0dtmYJ%2FC5zo8Tb2Lx8ZV74ONFfFXKoudGtEhvjA6n7d3%2BlPe09jYfQKsjImRab7c5aE4knro%2BroT6NxpOfEyDznxXuT%2FQ1j1Rft3dqxzDezpRskMCxr6pi%2BttZXBxKhfznhMfGi9NX86Q%2FcS%2BA6yLCaPhyZ5gx9tKoTbs6WGKvfmkMJq6i74GOqUBTY8mw0aXkDZ2qZozf6%2BMOJObrCPMN98EQzak6nPii2vARqVmtYbeMypuYqOrhULYXoLYGafFIDYv7qjHvvIOT3hnGb2AHZYJx%2BU573ZHDGnyvBqBqZu%2B%2BIgWfMVhBSO%2F4tdE4TDsmXsQC%2BOBk2l38YMyj5rbuybw2zTTWw5%2Bk%2FL7gaFHte5DiPssrBHU%2FFh%2F7YXIgXSYqI3jJmZsALpJlrqDBeM9&X-Amz-Signature=50dc6e964c624c9483a35a3cc7f53a7d35761db5d13d936de496bbf36b3c85b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKEXG2JC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDu1CMawSMSiiLJ3jALaySysJME6VwcBqkk0zKhud5JPAiEAmstEvxRRKwK6xOrPCw2swuTOzwXrCndcrvPOCMR5VyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBqRSGpvqw%2BVfbVACrcA%2FX5mlevIXS9W%2BF4eU2zSuxBKTCmkCVBKN41moAi%2BMBqsACsI6NbzAHHYDSZ3KAPlFNLvOfHuUTbVFjv%2FWRKjmg6q%2BVxo1IN%2BuOcWGXq5qHCmyXdPjkzSm%2BrKTXU6v7yBBYWr5F%2FU8SOdaq4rR7gnF1qw61rRjf1VH2GttG52p3d65bhpmMonrbeoNhF3wtu%2FuRz7kB5Jwb8KuhiuAIUOLkPH2cVEoPWpVPxOvavLbFFvYDs2qQCpijdnzz4SPyXg2SYRcehdQ6cO7dtPLxYNMUctapQgXz%2F%2FUfYnuwszszqTqASAbhH0mN0VtxQ9OGVJTrFoLaZz4S3QQBoSJjH3%2FgGoGeSk7NFO2FU0nzSyBSy5b3C787J%2FbuxAnhxKL3E3t5Ey8LoTxyoSNEEYhHtJn2GdwFai8E%2FI31MO%2FmMgW9Lej7l2NeLYBTUpemRTytYh9%2Bi9%2B8M6yI%2FyjB0dtmYJ%2FC5zo8Tb2Lx8ZV74ONFfFXKoudGtEhvjA6n7d3%2BlPe09jYfQKsjImRab7c5aE4knro%2BroT6NxpOfEyDznxXuT%2FQ1j1Rft3dqxzDezpRskMCxr6pi%2BttZXBxKhfznhMfGi9NX86Q%2FcS%2BA6yLCaPhyZ5gx9tKoTbs6WGKvfmkMJq6i74GOqUBTY8mw0aXkDZ2qZozf6%2BMOJObrCPMN98EQzak6nPii2vARqVmtYbeMypuYqOrhULYXoLYGafFIDYv7qjHvvIOT3hnGb2AHZYJx%2BU573ZHDGnyvBqBqZu%2B%2BIgWfMVhBSO%2F4tdE4TDsmXsQC%2BOBk2l38YMyj5rbuybw2zTTWw5%2Bk%2FL7gaFHte5DiPssrBHU%2FFh%2F7YXIgXSYqI3jJmZsALpJlrqDBeM9&X-Amz-Signature=f68619e5de8f036e5b6e8914744c9c8776fe8fc8c5e7cb23616f900181f54628&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
