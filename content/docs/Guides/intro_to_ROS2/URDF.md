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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRXYJFZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDM9S7QuiRhC4suhWJ3ozI6V0CCaQZKrcRhbZpYzofAlAiBhuBWY%2BSdF3RbMgmgZTD4vypV4adh9HRd%2BR%2BB0JmYYcyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIML0wMq1T6A8MLHTWdKtwDd7NaTO%2B%2FJtaRUiZGXARjSTfsKtf9evFXSy%2BQZUNBoHNOuP6aiZ4EtJGJVjrIx0q065%2B6BkbvqpuHpDgG%2BwHykq%2FLZBOvl1G%2FORXHNbKb3z%2B9iOcXKNX5mu9ToB%2BrolPe3hoG5sNd%2FnfgD0ld9nlRxrUtSevuQmNa1FvzaW9skluF7aYAm%2FenUFSalYFwi7pVt7lsZiw%2F16s0GF5Hv8JKbXCX8sgaQ0Wol2U9nwne12BNbCCHxQB8bG4vxK%2FOCInNhn5D3fpGiQWy2b%2BkKiwCq3aVXmkGUuvlikk%2B8XvJYS1n3FtGV6lHhj%2B8VQXakrb4LWxahpQYwfJFiQuszLX6ueBUGY6JFSv2R1phU0TTGrtkRJSSTEvynLIiRaoSJJit%2FUo4BED5qTOWUc1cg1VGOQPamYgFmWXlxG51HpLAG10UH41yltwTq6nqZeJfrIx3WSj56eQDoSETuEdLFpCIc%2B5zFzh67TV3gj3aFAp6Y6jxpZMpAkj4qcxk%2FyJgds%2FGPbfXfII6FA%2BCdsDl331G0qersk8TmGqkbi5Z7vHPzc98ZemxaI7UhC4qpdFt6F%2FVlBiARDOZgAylMLlPmpQGk0w4CDqDfysY3B1yH314Mi1gjriGxUPh6ZRG4VgwpsCGvQY6pgG0bdla3cmx785xzUo75wd6zXP7YJhYgAN4wHGidGLPp%2BRqLaSEOxHgSsHskz39vkZyknVMXSrjCIsCEV76wZCaiEQdojxGRC3Wd8YeLHaTAXjg95UWiJ%2FTBH4RBt%2BtuucgzaMJ%2Frh5ifV1kcd2CkztpLHYVsW9vODVSc0PajUW2MFRhsLyzxhf%2Bkww6wNK8RjR6QS3sJc6bS8Q0SzYt48sPaDwFFpN&X-Amz-Signature=f12cd262f74d207b45924b0c65d5d46eef8217aa7364e3d1d445b3ad4fa3aeb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRXYJFZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDM9S7QuiRhC4suhWJ3ozI6V0CCaQZKrcRhbZpYzofAlAiBhuBWY%2BSdF3RbMgmgZTD4vypV4adh9HRd%2BR%2BB0JmYYcyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIML0wMq1T6A8MLHTWdKtwDd7NaTO%2B%2FJtaRUiZGXARjSTfsKtf9evFXSy%2BQZUNBoHNOuP6aiZ4EtJGJVjrIx0q065%2B6BkbvqpuHpDgG%2BwHykq%2FLZBOvl1G%2FORXHNbKb3z%2B9iOcXKNX5mu9ToB%2BrolPe3hoG5sNd%2FnfgD0ld9nlRxrUtSevuQmNa1FvzaW9skluF7aYAm%2FenUFSalYFwi7pVt7lsZiw%2F16s0GF5Hv8JKbXCX8sgaQ0Wol2U9nwne12BNbCCHxQB8bG4vxK%2FOCInNhn5D3fpGiQWy2b%2BkKiwCq3aVXmkGUuvlikk%2B8XvJYS1n3FtGV6lHhj%2B8VQXakrb4LWxahpQYwfJFiQuszLX6ueBUGY6JFSv2R1phU0TTGrtkRJSSTEvynLIiRaoSJJit%2FUo4BED5qTOWUc1cg1VGOQPamYgFmWXlxG51HpLAG10UH41yltwTq6nqZeJfrIx3WSj56eQDoSETuEdLFpCIc%2B5zFzh67TV3gj3aFAp6Y6jxpZMpAkj4qcxk%2FyJgds%2FGPbfXfII6FA%2BCdsDl331G0qersk8TmGqkbi5Z7vHPzc98ZemxaI7UhC4qpdFt6F%2FVlBiARDOZgAylMLlPmpQGk0w4CDqDfysY3B1yH314Mi1gjriGxUPh6ZRG4VgwpsCGvQY6pgG0bdla3cmx785xzUo75wd6zXP7YJhYgAN4wHGidGLPp%2BRqLaSEOxHgSsHskz39vkZyknVMXSrjCIsCEV76wZCaiEQdojxGRC3Wd8YeLHaTAXjg95UWiJ%2FTBH4RBt%2BtuucgzaMJ%2Frh5ifV1kcd2CkztpLHYVsW9vODVSc0PajUW2MFRhsLyzxhf%2Bkww6wNK8RjR6QS3sJc6bS8Q0SzYt48sPaDwFFpN&X-Amz-Signature=e08af115230b77e8db19001c54a48a3e66b30ad704f1ff5ecb7c18cc1eae1d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
