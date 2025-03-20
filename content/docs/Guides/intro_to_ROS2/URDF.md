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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5FJNFB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIELHAPIWaVbzTgbzEUOxv3U4n109RAgDWcwQQclmsWeZAiA9nUzgDLQrydY8S6enYUj7B%2FeiWJ0L1EIXHpPVdn73OSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMHDCKmKcBfjxkq%2Fg9KtwDs%2FP99NT0s2tSUWP2Poz68blZV4uXrqTgD%2FFka81mzp29ppSuOwLKrU6vmso9uDu1asGeY8HWd8rbcZpWJwq1AYFf4KSnOtjRtJMyDIdO0gC7SuFV1qdo61aquy5IKxHdrDRYLyGzJOF7xJh2E4kIvu1dfPO%2FQLHDNGU%2BIXU5sf41Um8L3nE02B8gVGNp8EmwnH1%2F44nCEtNhLvRD2mpCwbRzp6DW93Xasb3YKhlCQzuAsqz1dTHXrI%2BzED9hfVS%2F8iBjTULqWWaiQDWHkSnM6N%2BIqsKAOXovfkUKNlZjbXhqTWUjGJatWhE3gZYmBJj03mObfD86jT%2F8%2BtpM32KLZwoIbj4XtsP0snI82Jn6dsE12Ho9Jq4e7h72oNxRHFAxAC74ZJ3uXOw8PqXO4z2eiTQzdCaFNU1%2Fv8myZfgAJCHkhMVtvMmsvPaGZ3%2FNP%2F%2FWQXj5FolEM11Qb03%2FFEc3AJ1A7tK9avMqfUe3p8fxl0oDiXicRrJLYMZkj46uu1y0y9IQSgIxmnyGfgi0qXxECAmcr78i1sIQ1yqFVCDHRnrXcHsVpb4VpPYfnUc3J8JiVZm6C7rNUB895uSq0pkxW4brUv5cjn9Di4HQUnusXaQiIcE1%2F3iiHAOOBbEw7NjsvgY6pgEFV0k6i318jWG3InBQ3o5z3IKO%2F2MCqWMaz9R3mzWmYNkfJ6FkbvHX53vXPUKED1SoTc3glar9htMxrE85uFgEdMRGs4F0azO%2FfNdEOQ80BjaJ1e51tM09b5oKVm6lJg9oPpJQgRYMDyHtB%2FAdKas%2Fr1hibH6dfRsInUqjcxDpP2JR%2B5CwD7oPeM6dVnerfE9tAGgdugure03YrtEL2rBMTBfcOyau&X-Amz-Signature=5e2e8e94cd95c17407fc87ee42167a23925ffef106161f626eb7fef23a4daaae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5FJNFB%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIELHAPIWaVbzTgbzEUOxv3U4n109RAgDWcwQQclmsWeZAiA9nUzgDLQrydY8S6enYUj7B%2FeiWJ0L1EIXHpPVdn73OSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMHDCKmKcBfjxkq%2Fg9KtwDs%2FP99NT0s2tSUWP2Poz68blZV4uXrqTgD%2FFka81mzp29ppSuOwLKrU6vmso9uDu1asGeY8HWd8rbcZpWJwq1AYFf4KSnOtjRtJMyDIdO0gC7SuFV1qdo61aquy5IKxHdrDRYLyGzJOF7xJh2E4kIvu1dfPO%2FQLHDNGU%2BIXU5sf41Um8L3nE02B8gVGNp8EmwnH1%2F44nCEtNhLvRD2mpCwbRzp6DW93Xasb3YKhlCQzuAsqz1dTHXrI%2BzED9hfVS%2F8iBjTULqWWaiQDWHkSnM6N%2BIqsKAOXovfkUKNlZjbXhqTWUjGJatWhE3gZYmBJj03mObfD86jT%2F8%2BtpM32KLZwoIbj4XtsP0snI82Jn6dsE12Ho9Jq4e7h72oNxRHFAxAC74ZJ3uXOw8PqXO4z2eiTQzdCaFNU1%2Fv8myZfgAJCHkhMVtvMmsvPaGZ3%2FNP%2F%2FWQXj5FolEM11Qb03%2FFEc3AJ1A7tK9avMqfUe3p8fxl0oDiXicRrJLYMZkj46uu1y0y9IQSgIxmnyGfgi0qXxECAmcr78i1sIQ1yqFVCDHRnrXcHsVpb4VpPYfnUc3J8JiVZm6C7rNUB895uSq0pkxW4brUv5cjn9Di4HQUnusXaQiIcE1%2F3iiHAOOBbEw7NjsvgY6pgEFV0k6i318jWG3InBQ3o5z3IKO%2F2MCqWMaz9R3mzWmYNkfJ6FkbvHX53vXPUKED1SoTc3glar9htMxrE85uFgEdMRGs4F0azO%2FfNdEOQ80BjaJ1e51tM09b5oKVm6lJg9oPpJQgRYMDyHtB%2FAdKas%2Fr1hibH6dfRsInUqjcxDpP2JR%2B5CwD7oPeM6dVnerfE9tAGgdugure03YrtEL2rBMTBfcOyau&X-Amz-Signature=9fc42f295a69b840cf0a7a383baa6f285544006d0cb2fee9aafefcb7b3398938&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
