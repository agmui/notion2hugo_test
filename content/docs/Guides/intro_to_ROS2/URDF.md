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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMMW6Q6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIE8%2BAdvuNZ4nvrwdj8Kw3XyH016apO0KRysjcrpvz8lgAiEAqXezCZpgDBx5ggRA3dgjaLR%2BKo8%2Bwprl80OrwBNk%2BzEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIFGgZNT3NUi2lqNircA1lqtGrqW%2FLJmvZET0K9W0YQyvUmQcHBoo0y%2BSwVBOz9NlJhGjK7wjb0acSm42e5iuwtqVXrWsRexaOWv25Q2JiyH91AMdeZ3crbbkVhoDIeQN8E6TfEkfGMG58Qe4%2BVJCLjVlo1cb6%2F3mCZ4XCa39us5CkwcXjxFimJdoITnHZtpbRbX099NiHsU8El0oIxVoOFNZv6mM5yDHvc0QaNOCxUh4zwvTNZ%2FEaMoAeZP6zzaJBSmurCz33ZjaCPRIi9GJb2M04ZopKZ6Uvi7Y%2FTVeGzNUnQHXLpk4FC9GMsKd%2F0wbFlppIndw5mbw9Flht2mKWzI%2FSRxATz8TVaKwDUEjKVC9zwetlwu04%2B%2B%2BhyioKj6xS0hsp2d7LHHRNtk34Z8R%2BrADXr33PkJwB4KMja8R3dYKPjI%2BdOtzEt4ZuaMoR11G8z8%2BmakwQA0R9OzQc3pc5OSPwVMFksAUy7ChH6TKeCoiCewzSIDGc3TQ7%2BM6B080PSkFAm%2FgGe1nyXTnIaLXE6L4FBUEXsC2CGQAKqjwI3Fh4GYw8I1yNVMlBa1oshnvjfIf%2BrKKu8NDZDLps7R%2F%2FfP9%2BHafdKBHF7qFJxNfY%2FQ%2FQ9LeRp%2BBkU4ct1PkjPGr5wCE%2B155vwfMxIMKqEgMEGOqUBeJBhKuWPLCEZ6OeNf0nipbBvAV8CKoSfORtjigrBxvRixnZD85dQ355NGVxos5Jneue0uJfL8J5%2FxZLzhoJ07Leab0MttNefbVtsg9NzK6y0iZtq0HUQefrmmvxerovbey01%2FeLDNqYamToEJjzsWg0IC7iLRcMFnxYCqs%2BJnPOfFJx0l6KtDYc8cjSqchm8RJKqN%2F1K%2Bp2FcDzJe1hXrVztdkIn&X-Amz-Signature=7bd3410f511f9460ffac9638c0b8df3dc6310f89837da7f830b17c0d10c85e33&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMMW6Q6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIE8%2BAdvuNZ4nvrwdj8Kw3XyH016apO0KRysjcrpvz8lgAiEAqXezCZpgDBx5ggRA3dgjaLR%2BKo8%2Bwprl80OrwBNk%2BzEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIFGgZNT3NUi2lqNircA1lqtGrqW%2FLJmvZET0K9W0YQyvUmQcHBoo0y%2BSwVBOz9NlJhGjK7wjb0acSm42e5iuwtqVXrWsRexaOWv25Q2JiyH91AMdeZ3crbbkVhoDIeQN8E6TfEkfGMG58Qe4%2BVJCLjVlo1cb6%2F3mCZ4XCa39us5CkwcXjxFimJdoITnHZtpbRbX099NiHsU8El0oIxVoOFNZv6mM5yDHvc0QaNOCxUh4zwvTNZ%2FEaMoAeZP6zzaJBSmurCz33ZjaCPRIi9GJb2M04ZopKZ6Uvi7Y%2FTVeGzNUnQHXLpk4FC9GMsKd%2F0wbFlppIndw5mbw9Flht2mKWzI%2FSRxATz8TVaKwDUEjKVC9zwetlwu04%2B%2B%2BhyioKj6xS0hsp2d7LHHRNtk34Z8R%2BrADXr33PkJwB4KMja8R3dYKPjI%2BdOtzEt4ZuaMoR11G8z8%2BmakwQA0R9OzQc3pc5OSPwVMFksAUy7ChH6TKeCoiCewzSIDGc3TQ7%2BM6B080PSkFAm%2FgGe1nyXTnIaLXE6L4FBUEXsC2CGQAKqjwI3Fh4GYw8I1yNVMlBa1oshnvjfIf%2BrKKu8NDZDLps7R%2F%2FfP9%2BHafdKBHF7qFJxNfY%2FQ%2FQ9LeRp%2BBkU4ct1PkjPGr5wCE%2B155vwfMxIMKqEgMEGOqUBeJBhKuWPLCEZ6OeNf0nipbBvAV8CKoSfORtjigrBxvRixnZD85dQ355NGVxos5Jneue0uJfL8J5%2FxZLzhoJ07Leab0MttNefbVtsg9NzK6y0iZtq0HUQefrmmvxerovbey01%2FeLDNqYamToEJjzsWg0IC7iLRcMFnxYCqs%2BJnPOfFJx0l6KtDYc8cjSqchm8RJKqN%2F1K%2Bp2FcDzJe1hXrVztdkIn&X-Amz-Signature=e9853f66047bb7b87f2baa61db451f3d0267712b084226b040c85dd128836f13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
