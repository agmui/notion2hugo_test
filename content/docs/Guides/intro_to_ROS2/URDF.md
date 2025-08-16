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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTF2RI7Z%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBV08q5ZcOVR1k%2B%2FVlrYdeEEYe6SZ4cr9F2ZBi2uQVBVAiEA1NGv%2FPjjda3WDsqDJcUO2Cq%2FrRHL7ts0WFhRm59f%2Fk4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHHnL6hFAEs60DV99yrcAz7pkcMfI0P5Hg%2B%2Fwhrg%2FIMc2xW%2F6rkHOpJg%2BzedWmOvlTv7Q5j5IWFjoFErmPDHXIDld35VqKuvbbCwKcV231hijJtzvbPyJ69%2FayWADoKsSlbcfbjaUoHAbDv8bOPetXAr4ZOh%2F2UCYAbvOCUrrRNrydrpEn12RkvfKLLWE4GRAvMgOgn7U7OjvoTBFQ1yLlBfcpvPPsWXpzb%2F3xYeStBviVuAa1bGUoTi13iC22ncZxA88R20i1RS%2F5Q2CpBE9OqptHrapPtzDSNlu8ClAtJEwx0u6RFU9Qh6RiA7Oh2O56eyp5Ga9DZq9cO6kPcW4EDUpjxnTOsfirI4d0mzVDIcrwjzyFueGX2KAU933qeKc%2B%2BWhO5LMS9sL%2FgYc3R8aldjQwSCQ3s%2BkHoJCbVQZKieqjf00j0sT8Kr9cAfzLwZJe0TWLqDmXuCCNiTCAOpqhEw1nvsSSDQVYkdBD2aFWozuPTi5EFTZSEgij%2Bd5hY6lJe52l92S1w%2BOthheNXFA3f0o1LDt1dBkXLtV%2BOnwQ0%2BGzhwQB2TbselC%2Flw7RfwYpiBK2mKNLE1nKwViadA0opvYiw4zFD9TIB9hFiLDKj%2BtfjRZMWUIFWhgDdOuW5SuJoO4JnNzBLNwsGWMNKdgsUGOqUBMl5x6RPnTlh5fvQ5r9UBznM3p4RUKMdEKh%2FxA3%2BOiR8O2WQ1LVQmGzXP%2B1KSPV5CJVl4wwbyuNw%2Bvet%2BgrfcUDxlzRWp%2BXwPI4fbMrnuuuiRf0OPZvYja1fzysNp4fvqfidMQAd8RdOeHVURpxGsV%2BizYz%2FL5fCJrnrlBW4f68rXsJenEC%2FMMMW9kDwYsoq65%2F1GrKo689E3pJoSWQyvtPscAQr2&X-Amz-Signature=941e06c1c1ff195682a27d9e86ca2f30cfa1f943a303be3142a547cb9aa48423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTF2RI7Z%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBV08q5ZcOVR1k%2B%2FVlrYdeEEYe6SZ4cr9F2ZBi2uQVBVAiEA1NGv%2FPjjda3WDsqDJcUO2Cq%2FrRHL7ts0WFhRm59f%2Fk4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHHnL6hFAEs60DV99yrcAz7pkcMfI0P5Hg%2B%2Fwhrg%2FIMc2xW%2F6rkHOpJg%2BzedWmOvlTv7Q5j5IWFjoFErmPDHXIDld35VqKuvbbCwKcV231hijJtzvbPyJ69%2FayWADoKsSlbcfbjaUoHAbDv8bOPetXAr4ZOh%2F2UCYAbvOCUrrRNrydrpEn12RkvfKLLWE4GRAvMgOgn7U7OjvoTBFQ1yLlBfcpvPPsWXpzb%2F3xYeStBviVuAa1bGUoTi13iC22ncZxA88R20i1RS%2F5Q2CpBE9OqptHrapPtzDSNlu8ClAtJEwx0u6RFU9Qh6RiA7Oh2O56eyp5Ga9DZq9cO6kPcW4EDUpjxnTOsfirI4d0mzVDIcrwjzyFueGX2KAU933qeKc%2B%2BWhO5LMS9sL%2FgYc3R8aldjQwSCQ3s%2BkHoJCbVQZKieqjf00j0sT8Kr9cAfzLwZJe0TWLqDmXuCCNiTCAOpqhEw1nvsSSDQVYkdBD2aFWozuPTi5EFTZSEgij%2Bd5hY6lJe52l92S1w%2BOthheNXFA3f0o1LDt1dBkXLtV%2BOnwQ0%2BGzhwQB2TbselC%2Flw7RfwYpiBK2mKNLE1nKwViadA0opvYiw4zFD9TIB9hFiLDKj%2BtfjRZMWUIFWhgDdOuW5SuJoO4JnNzBLNwsGWMNKdgsUGOqUBMl5x6RPnTlh5fvQ5r9UBznM3p4RUKMdEKh%2FxA3%2BOiR8O2WQ1LVQmGzXP%2B1KSPV5CJVl4wwbyuNw%2Bvet%2BgrfcUDxlzRWp%2BXwPI4fbMrnuuuiRf0OPZvYja1fzysNp4fvqfidMQAd8RdOeHVURpxGsV%2BizYz%2FL5fCJrnrlBW4f68rXsJenEC%2FMMMW9kDwYsoq65%2F1GrKo689E3pJoSWQyvtPscAQr2&X-Amz-Signature=0dd2c83e41b2b86ecf25f697a92ef2cca417339a87a1eb4b125c76f76e420e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
