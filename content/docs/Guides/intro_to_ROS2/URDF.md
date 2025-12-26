---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7FVSGY%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFk7S6V3qYMv4CDu%2F77QdYOf0%2FmPy1Q0krt4yvqlyDeyAiEA6jO9Ceu%2BYqMcidpTPLO5HCpLVCTZ9lbUNYvjWMG0hZsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDC5cPtwYv%2BIma4He0SrcA233lGGSJRpvkxbfZlbW6FyoKPWhBK4N1XTSwrLa%2FptRQ38fmiXn3TUIW6EgzE34J2nn8M%2BQv2FKzJB6X9Fbap6%2B7eLyY5%2FPMqvwMVnWWJWoCyFw%2B8qpY8EGND4zoqptjgS1On9io7tbFCrkNdkphVz4e%2Fa3hWc2uZoIF6orUBAlX97W1bhWTBaTxS6HvfjdcnlZBllCb9lUR3IRsHYFArQilCtDDyHw9KVWMcQYJRYnNf1JHrCZmNhE6HFkuNfjcMYuAUhjG94thT%2BQPU0OhwO%2BS3dd7pkcFeGuDfG5VxUeUy19Sf1U5L1KQ3RCYvLgh%2Fpz4D%2Bqb%2FrlcMlQ1POZK1axZo7s0GJEZ%2Bvug58ENOSJ59%2BALrnKiU0hJhQLRCLQzCCO%2FKoCQb45bQIC7K6dnfA3qjPCoMvlsD9bdmdR7m%2B9ZSSuaFP11ocVQBIib66V9wEWmoEVN4R%2F3qc4QWzdKS5g6kHv9VfhfAPfrhKSTwrAcMlXDEs5yd9h%2BaAClAt6R0Pagh06gWZ18t%2Bw5iok6kJG6blQeudNZN5Vmk1xQsdYRrCwS61WI2LQmp6xukUGLuRnpzMLdESYXe8b14T%2F%2Bw8yhHs7p%2BLVPQ%2B9duiKNHmt7ZWlkFp08YzcMgdIMOSqtsoGOqUBJ7U8MWhycMiuZ%2FAvhDv8SZS8spkRQTHXQyDt4BnL2SDlexwEBWx8cGhiV5WAwzEa3%2FOkPtvqDExua%2FMI0cPRhgfDbpS7wnRQmx%2BToFMBPHrzHyPKWK5atYa1CAW7q0BAQ7W5PRk9A6N5md1uujFMbnWWmbL%2Fc0N3P4uVvorke8o12RrpB8OvLqDyB6GPer2NYsn1HA%2FotM5nzJv475BFUs5LEn4k&X-Amz-Signature=3c805f509f6c194ed80db032bfd4ef92a214e873d3dbfe6cb1bc84dddaa83aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7FVSGY%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFk7S6V3qYMv4CDu%2F77QdYOf0%2FmPy1Q0krt4yvqlyDeyAiEA6jO9Ceu%2BYqMcidpTPLO5HCpLVCTZ9lbUNYvjWMG0hZsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDC5cPtwYv%2BIma4He0SrcA233lGGSJRpvkxbfZlbW6FyoKPWhBK4N1XTSwrLa%2FptRQ38fmiXn3TUIW6EgzE34J2nn8M%2BQv2FKzJB6X9Fbap6%2B7eLyY5%2FPMqvwMVnWWJWoCyFw%2B8qpY8EGND4zoqptjgS1On9io7tbFCrkNdkphVz4e%2Fa3hWc2uZoIF6orUBAlX97W1bhWTBaTxS6HvfjdcnlZBllCb9lUR3IRsHYFArQilCtDDyHw9KVWMcQYJRYnNf1JHrCZmNhE6HFkuNfjcMYuAUhjG94thT%2BQPU0OhwO%2BS3dd7pkcFeGuDfG5VxUeUy19Sf1U5L1KQ3RCYvLgh%2Fpz4D%2Bqb%2FrlcMlQ1POZK1axZo7s0GJEZ%2Bvug58ENOSJ59%2BALrnKiU0hJhQLRCLQzCCO%2FKoCQb45bQIC7K6dnfA3qjPCoMvlsD9bdmdR7m%2B9ZSSuaFP11ocVQBIib66V9wEWmoEVN4R%2F3qc4QWzdKS5g6kHv9VfhfAPfrhKSTwrAcMlXDEs5yd9h%2BaAClAt6R0Pagh06gWZ18t%2Bw5iok6kJG6blQeudNZN5Vmk1xQsdYRrCwS61WI2LQmp6xukUGLuRnpzMLdESYXe8b14T%2F%2Bw8yhHs7p%2BLVPQ%2B9duiKNHmt7ZWlkFp08YzcMgdIMOSqtsoGOqUBJ7U8MWhycMiuZ%2FAvhDv8SZS8spkRQTHXQyDt4BnL2SDlexwEBWx8cGhiV5WAwzEa3%2FOkPtvqDExua%2FMI0cPRhgfDbpS7wnRQmx%2BToFMBPHrzHyPKWK5atYa1CAW7q0BAQ7W5PRk9A6N5md1uujFMbnWWmbL%2Fc0N3P4uVvorke8o12RrpB8OvLqDyB6GPer2NYsn1HA%2FotM5nzJv475BFUs5LEn4k&X-Amz-Signature=850fc1c6018a7c3a4c60faa889f3e2daea60a29e48ca65b035e09346f09ba8df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
