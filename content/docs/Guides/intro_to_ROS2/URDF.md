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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSJLDQ4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlzR3CIIfm9oeSrBOVmBuyim4rbdyjuRVjwRDxRmHxeAiAtMLOmOYtYk2YcpX1wrYrEIPzh8ibxfY%2ByckShfznfeiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyM1kcYi%2FySUB8wdcKtwDGiQQ1wk1xOt8UOvhUWUG0LfwXcX5WH%2F%2Bcanedj%2BCOOgNSff8wdSB3c3oBcubuucJWk4W5jAvQmikcaf4BSZypmMR7VhiePhTteRUBgyHO4slcXzjD018r9KKipEGHMm43Qrk3NvcfeVkw3r2HGcHe0lqekQ3zwnFcjltCD1VVAOrsEdDWzyOu7k0pXjE4QFL11bALjMtGF%2B9pUlmMG3aTRIWfz3diMIvA7eodVYStXJJahCkc7vuKDgRpIcauUCWPnRW%2F%2FuCP%2F559kXafVRrY%2Fxx3l7huJqwLoZq7Narpsj8XxLNN2%2BhvOcOzre8bv9MQOJKPuGf25seHY%2BwhfIJMh6jfdVY%2BrpekpTyQa0ddqOvkvDIDXQXKMBwodn6LOwKRHkawCjIekxYL7QDScISuMpa3uHpV0lYAl90WxQm1T5M%2FnyUn3ezbwMB2BluQNDsvzUuN36wg9KKmLag%2B26ksywjDJKfNGjvHoN3HlWYLbNhEysegsJ6%2BGxcAqfb1go%2B3EeetqyAgWbHBnzQCg54eUMMpBGv57njUrh%2BMaEKkUUVPuUPiXTGuWTRXTzVtYqafuZyExbHKMSQjSl%2FNhSmNB%2B4W4ghPQUhC%2BtcdUtGvTpuMLZyGnGmiC60W0Aw1LLhwQY6pgEAW7IcbNZ5vcZaWUTjmpWEhiZNgg%2FO3diB3NbgPxz76Kr4cQeGbILUxdBTQpFySe%2FTCHhlb%2FGLzqTzKcw%2FwUEySe0PfEdgzqoyaRSSKjfi%2ByVqdglC5quMWYBqlIVkBKjcBWDZ5C%2BWy5z9o%2B2%2FBlaMpuBUixsksaFSTMrQcF3mjhYd5eNGcIMNUaufUgGTjwqpXBVlUg%2F0tffOjJG%2F991olhq1uSir&X-Amz-Signature=29c0036b761a70bdb6502e2f66e2e9d5aa56138e32830c4121ad0b3907297f05&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSJLDQ4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlzR3CIIfm9oeSrBOVmBuyim4rbdyjuRVjwRDxRmHxeAiAtMLOmOYtYk2YcpX1wrYrEIPzh8ibxfY%2ByckShfznfeiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyM1kcYi%2FySUB8wdcKtwDGiQQ1wk1xOt8UOvhUWUG0LfwXcX5WH%2F%2Bcanedj%2BCOOgNSff8wdSB3c3oBcubuucJWk4W5jAvQmikcaf4BSZypmMR7VhiePhTteRUBgyHO4slcXzjD018r9KKipEGHMm43Qrk3NvcfeVkw3r2HGcHe0lqekQ3zwnFcjltCD1VVAOrsEdDWzyOu7k0pXjE4QFL11bALjMtGF%2B9pUlmMG3aTRIWfz3diMIvA7eodVYStXJJahCkc7vuKDgRpIcauUCWPnRW%2F%2FuCP%2F559kXafVRrY%2Fxx3l7huJqwLoZq7Narpsj8XxLNN2%2BhvOcOzre8bv9MQOJKPuGf25seHY%2BwhfIJMh6jfdVY%2BrpekpTyQa0ddqOvkvDIDXQXKMBwodn6LOwKRHkawCjIekxYL7QDScISuMpa3uHpV0lYAl90WxQm1T5M%2FnyUn3ezbwMB2BluQNDsvzUuN36wg9KKmLag%2B26ksywjDJKfNGjvHoN3HlWYLbNhEysegsJ6%2BGxcAqfb1go%2B3EeetqyAgWbHBnzQCg54eUMMpBGv57njUrh%2BMaEKkUUVPuUPiXTGuWTRXTzVtYqafuZyExbHKMSQjSl%2FNhSmNB%2B4W4ghPQUhC%2BtcdUtGvTpuMLZyGnGmiC60W0Aw1LLhwQY6pgEAW7IcbNZ5vcZaWUTjmpWEhiZNgg%2FO3diB3NbgPxz76Kr4cQeGbILUxdBTQpFySe%2FTCHhlb%2FGLzqTzKcw%2FwUEySe0PfEdgzqoyaRSSKjfi%2ByVqdglC5quMWYBqlIVkBKjcBWDZ5C%2BWy5z9o%2B2%2FBlaMpuBUixsksaFSTMrQcF3mjhYd5eNGcIMNUaufUgGTjwqpXBVlUg%2F0tffOjJG%2F991olhq1uSir&X-Amz-Signature=fb21a29497cc1b2f4199ebaf53b1f4e4f8cc45792042f8ca84a28d318be65658&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
