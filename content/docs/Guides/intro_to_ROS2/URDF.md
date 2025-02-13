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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6KVJ36%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0GpSaP7uUka4aZbDPj07F2JkJKGfFVQB6j0wULpCSsAiBzmnrCxetHwaFtq4lSApDfdRoZvsIeX8kjnFj15XlQZCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmdFpoGrC341ixoQZKtwD1d51MyrvDd3t6UEhfnXSPFBmL6oJvXGWwOSYhpBYqTSQH1aeSH3gh0tDpm0fpcXDxipYwIyVEwwfNG0UAHbFP6NEeELWACPmQxVkWtvEmO2WEaXSeS8F2mEvzCvjSUOJudzMgdgDNxTASkmtXlvK96%2FDN%2FmRq%2BycadCg7mJhftDBL7QTN98p4HI1dSvkzswWMsqxnU2N7sFUubgHOW%2Fe1gOq4%2FBi9YR1XPZAT68NJnerQHH%2BBZcHjd3awLKs%2BWs0CO3%2FWEPBHxFji1cwgFZD00f9sq8F%2F8ysoH9w13FXlIi4MfgStzm8tTK6WDlNHucvka67MP%2F1LnxbSKUWrj0NWQZrxmoxyV%2Bx7c%2Fk9siXyUaLzWUdut3cVsOQ0Hexwkvi1SBRyBcd4gSDyavcFOCjX7CQAocu2zPFZlFpz1ub0t%2BgJVsQNtb%2BFQCMzRiSSP0dLuiDoas9cgEWvpCdmp90nracDOQg5%2FOYSdxFMPZq4oQfhXa8%2BVj6VxnWtTHA%2B0EbS4tnRz9dQnCLQV1FYBlU7U9yi05oSG%2BAEgew%2FaOSdsJpxhfc%2FZjBBa%2BwXdkUvOR5FpRynNm%2BVE4wzBiDq%2Bym83nyntbq%2F%2B9Y3VFK36L41FMtFpDgLk6AzJ%2FnoJEwxuG0vQY6pgF71bVr1vu4R7Qicf0DNjACfUQqvS6mSclY9Cd%2FoomyhJ4nqoz9wcolSMsoPEgXUethTf%2Fr3%2FVL803H%2B%2FJP6fpccyiyP3%2B0OFt2dA3h8nJYxwce3x13c64QAwd2JKLpDYLh78FAQQVfwVI1anUuZluNBOHhQ4BznKIsc6DV5vj4AWVfcdBCS3nL87PXWcD137OKy7PRWKcmkIf8cDZPoJoXVr0HXSmy&X-Amz-Signature=2aa8af8628d9dd4bce0c9a3d797882837341fb30138a65a5af3f5f08fea38473&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6KVJ36%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0GpSaP7uUka4aZbDPj07F2JkJKGfFVQB6j0wULpCSsAiBzmnrCxetHwaFtq4lSApDfdRoZvsIeX8kjnFj15XlQZCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmdFpoGrC341ixoQZKtwD1d51MyrvDd3t6UEhfnXSPFBmL6oJvXGWwOSYhpBYqTSQH1aeSH3gh0tDpm0fpcXDxipYwIyVEwwfNG0UAHbFP6NEeELWACPmQxVkWtvEmO2WEaXSeS8F2mEvzCvjSUOJudzMgdgDNxTASkmtXlvK96%2FDN%2FmRq%2BycadCg7mJhftDBL7QTN98p4HI1dSvkzswWMsqxnU2N7sFUubgHOW%2Fe1gOq4%2FBi9YR1XPZAT68NJnerQHH%2BBZcHjd3awLKs%2BWs0CO3%2FWEPBHxFji1cwgFZD00f9sq8F%2F8ysoH9w13FXlIi4MfgStzm8tTK6WDlNHucvka67MP%2F1LnxbSKUWrj0NWQZrxmoxyV%2Bx7c%2Fk9siXyUaLzWUdut3cVsOQ0Hexwkvi1SBRyBcd4gSDyavcFOCjX7CQAocu2zPFZlFpz1ub0t%2BgJVsQNtb%2BFQCMzRiSSP0dLuiDoas9cgEWvpCdmp90nracDOQg5%2FOYSdxFMPZq4oQfhXa8%2BVj6VxnWtTHA%2B0EbS4tnRz9dQnCLQV1FYBlU7U9yi05oSG%2BAEgew%2FaOSdsJpxhfc%2FZjBBa%2BwXdkUvOR5FpRynNm%2BVE4wzBiDq%2Bym83nyntbq%2F%2B9Y3VFK36L41FMtFpDgLk6AzJ%2FnoJEwxuG0vQY6pgF71bVr1vu4R7Qicf0DNjACfUQqvS6mSclY9Cd%2FoomyhJ4nqoz9wcolSMsoPEgXUethTf%2Fr3%2FVL803H%2B%2FJP6fpccyiyP3%2B0OFt2dA3h8nJYxwce3x13c64QAwd2JKLpDYLh78FAQQVfwVI1anUuZluNBOHhQ4BznKIsc6DV5vj4AWVfcdBCS3nL87PXWcD137OKy7PRWKcmkIf8cDZPoJoXVr0HXSmy&X-Amz-Signature=18ee141f1e0f7009246103d237fc6810a7a94d7ea09d6fe2501e1a4568a2319b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
