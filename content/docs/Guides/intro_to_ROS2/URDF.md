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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74U4QYZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCJ2rnSLS2kVp3pW8wX9%2BPSKhUpf8aeBKkuZQlerDLtzgIhAKY31soOMVj0sf%2B1Rc3ReyQe5iavQbiYJcko%2BSNGxTZsKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeZH6ZPMiN1cYREuMq3ANMegGvgH7uD0NgCPAYG5fqYgUSODTY3dNlA7LMbw41FRx5rgES8C%2BrGlmkuJ6KA8UNvH%2BT0BM1QpuY7t%2F%2Fnta8cxZrk%2F7X7kvkLzfLzk02bEm7%2FwNOR9v4vP0FiCyS93COfDoDW8ttRZSRQ6vIHtB8I2CejT%2FLzMZsMJQvnH5brO3aZt7j7YrZFXYk1WGkAIF%2FJGiSDypHuDlYAYrUb5EZN4fqWPtsjehZFlGgODSZQ1PWtN2SEwj%2BmyFUWH3xKpzl%2FN0IThLDhVuIzU34CJEVTUc%2Bs2IIAfLCNrHVbdnVs0lOceCLajDqjPHCVxGy0rsS0m%2B5JCu2gMyd%2Bg8Awwz%2Fuerk5y5Mb6zMThor7sYsAmBPbfhe9imNTY1Pd%2F0hmONeq%2BErvXLEeqiZZiX1Ikcz618PSJe85JtxplfyOJX0nZu9BVJVKi5YyFNfZcl6SP%2FNdIYi4tYa1nENoQotrIWCwvsOWsIhOQNTO4BRnl2nUeHBsAj1jIVGv9%2BOAEZl86HxvddKhlo8W96BncH2NlpErFU%2BmXNdgYDDPNp1v9djVYORAHyrsgQTq0I91WjJGVtXyPUaLDKthTP7ljX4f%2BKMuB9aI4hkvc6EYNqJZ5Mv%2Fy5YQUfQJ19Vi0rKITDb3oDBBjqkAT7u3vHq94G41lkNiXUYkaA3fcoy62s4B81k6G4bBpU47sSqum9%2BCZD%2BKmwzUUGFfIuwwW4vX7YunZpwUfN1tgyK2E628l0a8jUWmF4CG86CdxK%2FzGfPRzxKnDOsWKPG482vRorcB95yXXPrZlMn0CVQXi7F0a4Eg3yoSoQjvA1IzRa5%2Fw%2BhyWR0zSNOOKgJFMnawkHRapMzKm9NwA2jiwBwb40r&X-Amz-Signature=ee4be668957b67b36b3dcbcc1f91b1dc4963998c7fba02f8356377c4254e7af5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74U4QYZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCJ2rnSLS2kVp3pW8wX9%2BPSKhUpf8aeBKkuZQlerDLtzgIhAKY31soOMVj0sf%2B1Rc3ReyQe5iavQbiYJcko%2BSNGxTZsKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeZH6ZPMiN1cYREuMq3ANMegGvgH7uD0NgCPAYG5fqYgUSODTY3dNlA7LMbw41FRx5rgES8C%2BrGlmkuJ6KA8UNvH%2BT0BM1QpuY7t%2F%2Fnta8cxZrk%2F7X7kvkLzfLzk02bEm7%2FwNOR9v4vP0FiCyS93COfDoDW8ttRZSRQ6vIHtB8I2CejT%2FLzMZsMJQvnH5brO3aZt7j7YrZFXYk1WGkAIF%2FJGiSDypHuDlYAYrUb5EZN4fqWPtsjehZFlGgODSZQ1PWtN2SEwj%2BmyFUWH3xKpzl%2FN0IThLDhVuIzU34CJEVTUc%2Bs2IIAfLCNrHVbdnVs0lOceCLajDqjPHCVxGy0rsS0m%2B5JCu2gMyd%2Bg8Awwz%2Fuerk5y5Mb6zMThor7sYsAmBPbfhe9imNTY1Pd%2F0hmONeq%2BErvXLEeqiZZiX1Ikcz618PSJe85JtxplfyOJX0nZu9BVJVKi5YyFNfZcl6SP%2FNdIYi4tYa1nENoQotrIWCwvsOWsIhOQNTO4BRnl2nUeHBsAj1jIVGv9%2BOAEZl86HxvddKhlo8W96BncH2NlpErFU%2BmXNdgYDDPNp1v9djVYORAHyrsgQTq0I91WjJGVtXyPUaLDKthTP7ljX4f%2BKMuB9aI4hkvc6EYNqJZ5Mv%2Fy5YQUfQJ19Vi0rKITDb3oDBBjqkAT7u3vHq94G41lkNiXUYkaA3fcoy62s4B81k6G4bBpU47sSqum9%2BCZD%2BKmwzUUGFfIuwwW4vX7YunZpwUfN1tgyK2E628l0a8jUWmF4CG86CdxK%2FzGfPRzxKnDOsWKPG482vRorcB95yXXPrZlMn0CVQXi7F0a4Eg3yoSoQjvA1IzRa5%2Fw%2BhyWR0zSNOOKgJFMnawkHRapMzKm9NwA2jiwBwb40r&X-Amz-Signature=aa248843c6960cb632f0562c33f99501aaaaadbbf231f8eac12bd733491ac790&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
