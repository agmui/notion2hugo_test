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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57BQO6O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDX7deB7dgoCnBxrzCMnOq3UTw1CaMFack5jQCSRX5Y7QIgSbSpTuTg8r2fpOrfU90NWydK6AttYpHw%2FHG4AmEYi3Aq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIVIUchxGqPnQpIhpircA%2BE0oWK8L8l4mdNwsggeqyx80TrbYYFb0xy%2F3Z8wSEBb1pOc8QEtxAZGucCgVJ5q9NESL1K0TG8IAULTSkd%2FZqO0QowJQJ7k6x4f75XXhfw4Q5KC5PMnBJ%2BcJEQiDdARidMAckbJuVZdgQDBcOMTXkvdbJ5J8yKLntUNJ2IjCtXmiyyJBh%2B29fnBlgdwMJktiFcXeOKdL0yNxmDBP6FN84%2FJ8jQwHxOP%2B88M6HKnUg16xUX1d6cQYMSvK6d%2BKH6%2BtyZ5c7Zqv31j22tbSP6onX2aJparPB8wlazZtPiej5eyaYH%2BXPLyX6GWvwucyilK3dzUypQQAlcdQT7%2BgtXXWKffkc01J2m6r9cpHs7b25UMqCEWYHE1j5paRnZZ434MuBJimhcJpEvgHrtpp%2FFiRAx4p27vr90x4bsN5Nw4Hq%2FfGfwrJ4zuf%2B2jpoOSao0TwBhxqLqbUB5goPuh0EGl7OG%2FhjWMcvuLQ9f%2FpRhlTY4nqMW2EnGBpy6YAgAxJ%2BqDV817si0u40zsqHz50dRNF9tY4zvbQ3mBmia6mNCdJFizsCGEocIfpDfx5%2B6XpxIAUimApYn2cFXJoUkHCR6xdUykmIadyN8VyNqxdIl5yilNdPQZcrnBNMGIfdDBMLbpwMQGOqUBSjRz6yZ4homcb5Cbl2ewb%2FxhHNMZ7TTsJBfaincvqgl1%2Bh8kVCXoXZl7qOZmut6DITe9MIZOjBg1r6wzgBQ3jtxIWRpviocpsaFGChwkG3cIpo4EfUlySrTxauQgHUIiPpZlOFyVX65lqwDE0hoSVoUIPgwVSpoj8OQkFcQUaNWiOpx%2BWYqcMwdAFU15jUqTS3BPRHRaE0R731SoumQBzZHWCaeT&X-Amz-Signature=7e976b4b0d2abe89f70ab49c0dc8831b370923e39c19c1d289c3ac9a379e590e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57BQO6O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDX7deB7dgoCnBxrzCMnOq3UTw1CaMFack5jQCSRX5Y7QIgSbSpTuTg8r2fpOrfU90NWydK6AttYpHw%2FHG4AmEYi3Aq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIVIUchxGqPnQpIhpircA%2BE0oWK8L8l4mdNwsggeqyx80TrbYYFb0xy%2F3Z8wSEBb1pOc8QEtxAZGucCgVJ5q9NESL1K0TG8IAULTSkd%2FZqO0QowJQJ7k6x4f75XXhfw4Q5KC5PMnBJ%2BcJEQiDdARidMAckbJuVZdgQDBcOMTXkvdbJ5J8yKLntUNJ2IjCtXmiyyJBh%2B29fnBlgdwMJktiFcXeOKdL0yNxmDBP6FN84%2FJ8jQwHxOP%2B88M6HKnUg16xUX1d6cQYMSvK6d%2BKH6%2BtyZ5c7Zqv31j22tbSP6onX2aJparPB8wlazZtPiej5eyaYH%2BXPLyX6GWvwucyilK3dzUypQQAlcdQT7%2BgtXXWKffkc01J2m6r9cpHs7b25UMqCEWYHE1j5paRnZZ434MuBJimhcJpEvgHrtpp%2FFiRAx4p27vr90x4bsN5Nw4Hq%2FfGfwrJ4zuf%2B2jpoOSao0TwBhxqLqbUB5goPuh0EGl7OG%2FhjWMcvuLQ9f%2FpRhlTY4nqMW2EnGBpy6YAgAxJ%2BqDV817si0u40zsqHz50dRNF9tY4zvbQ3mBmia6mNCdJFizsCGEocIfpDfx5%2B6XpxIAUimApYn2cFXJoUkHCR6xdUykmIadyN8VyNqxdIl5yilNdPQZcrnBNMGIfdDBMLbpwMQGOqUBSjRz6yZ4homcb5Cbl2ewb%2FxhHNMZ7TTsJBfaincvqgl1%2Bh8kVCXoXZl7qOZmut6DITe9MIZOjBg1r6wzgBQ3jtxIWRpviocpsaFGChwkG3cIpo4EfUlySrTxauQgHUIiPpZlOFyVX65lqwDE0hoSVoUIPgwVSpoj8OQkFcQUaNWiOpx%2BWYqcMwdAFU15jUqTS3BPRHRaE0R731SoumQBzZHWCaeT&X-Amz-Signature=e788d59de0730f47d4c6df3d8ac139b1f0308089619241161c1cebf1bc9ebbe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
