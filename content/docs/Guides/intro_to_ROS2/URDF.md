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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XIQKT7S%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDPPatgmInPEWsYU8g9kuVG2uH%2FiBp%2BNq9%2B7IYOiIIqVAIhAK3EXoJVkfpehKpnCTR9LpAyRXQgFlwqmK%2FeIH6gvwwgKv8DCGQQABoMNjM3NDIzMTgzODA1IgxwSuSSBpXYWw8kzYYq3AN83in2pc5ZYk2u%2BQzuMcU0Id7eXG4C%2FQqUu8%2F%2BE1sAJGqFmV1pUpZ0iEVQsXistOBS%2FcJveXhGSwB8fS9oH5R3PzYccUajYcxd7UzMPtoXbuNX1EvpOUlQpfvY4SP5H4WrE9uJdh09OX8d7TM2lBNLppxknHzmLfysXaK2%2F4MPlWJaUzX7Zl92yc6O828HQozJf7i0qHhVG8MzUwv3rWFUc2V%2Bpzn1TmiHK4noxpXAUkOqBkl0aIY3asDWMfnHA%2Bl5ObeqwD8%2FYY%2FUlz6jnVw8B1HLoSRAhSHeMzmQkxG91oiITDkUbcViHuCW5bwWRrzRxa6YpwFYMS%2B7MN%2FCtaah74J8HmUE3d2Q8fwvrBb%2BDmPGZ0p%2F5SNzhFIvCNWJVEI5dIDIIiSR4HutZ%2BdNRMZizwaaBXlSRqnsFR6pWR80G9%2FTkYwvRFa1INnECsPzh%2FsuqzYmnhz4a%2BIIRhkKbvKUD81wIFdlg%2BVEbgVQ%2BIM%2BRaYIvbKjlR9v%2FdgwsOycVuHwjcjAIRtejVPQbtAVkjzkFvPT99u0rAZnqH4inheEYhntiXU97OrH8zWXsQo4xo17eDVMseoBUHdjnNkt0rYV9n8uA8xcz0s9kOTPQ3DZaTkgYLb1MGh6Thq4wjCY%2FZO9BjqkAZerlwYuAMiT96Hge93Fv46mxJpxjYHaNrA2HRf%2FS3LIpsZ5Ikv0KRAIn3%2FDPcuYiUEFwgPX6SOve%2FiOocsPlmAyFQG%2B%2BtIOdaKQ4Je7YNY4QccHXLvRsUUCJrvg84aUU4VIzujCsP05y8APXCh2%2B20RYfQGOjLYnlfszxbQQrKAaLJaWeQU%2FHringrk%2BfIyYmva7RiVRTgsUoEbUeGCrBG7Lru0&X-Amz-Signature=98819a6cddebf04b1045cd3611d41f109791dc8dd7a2f7e444d2894d7bf5f546&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XIQKT7S%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDPPatgmInPEWsYU8g9kuVG2uH%2FiBp%2BNq9%2B7IYOiIIqVAIhAK3EXoJVkfpehKpnCTR9LpAyRXQgFlwqmK%2FeIH6gvwwgKv8DCGQQABoMNjM3NDIzMTgzODA1IgxwSuSSBpXYWw8kzYYq3AN83in2pc5ZYk2u%2BQzuMcU0Id7eXG4C%2FQqUu8%2F%2BE1sAJGqFmV1pUpZ0iEVQsXistOBS%2FcJveXhGSwB8fS9oH5R3PzYccUajYcxd7UzMPtoXbuNX1EvpOUlQpfvY4SP5H4WrE9uJdh09OX8d7TM2lBNLppxknHzmLfysXaK2%2F4MPlWJaUzX7Zl92yc6O828HQozJf7i0qHhVG8MzUwv3rWFUc2V%2Bpzn1TmiHK4noxpXAUkOqBkl0aIY3asDWMfnHA%2Bl5ObeqwD8%2FYY%2FUlz6jnVw8B1HLoSRAhSHeMzmQkxG91oiITDkUbcViHuCW5bwWRrzRxa6YpwFYMS%2B7MN%2FCtaah74J8HmUE3d2Q8fwvrBb%2BDmPGZ0p%2F5SNzhFIvCNWJVEI5dIDIIiSR4HutZ%2BdNRMZizwaaBXlSRqnsFR6pWR80G9%2FTkYwvRFa1INnECsPzh%2FsuqzYmnhz4a%2BIIRhkKbvKUD81wIFdlg%2BVEbgVQ%2BIM%2BRaYIvbKjlR9v%2FdgwsOycVuHwjcjAIRtejVPQbtAVkjzkFvPT99u0rAZnqH4inheEYhntiXU97OrH8zWXsQo4xo17eDVMseoBUHdjnNkt0rYV9n8uA8xcz0s9kOTPQ3DZaTkgYLb1MGh6Thq4wjCY%2FZO9BjqkAZerlwYuAMiT96Hge93Fv46mxJpxjYHaNrA2HRf%2FS3LIpsZ5Ikv0KRAIn3%2FDPcuYiUEFwgPX6SOve%2FiOocsPlmAyFQG%2B%2BtIOdaKQ4Je7YNY4QccHXLvRsUUCJrvg84aUU4VIzujCsP05y8APXCh2%2B20RYfQGOjLYnlfszxbQQrKAaLJaWeQU%2FHringrk%2BfIyYmva7RiVRTgsUoEbUeGCrBG7Lru0&X-Amz-Signature=76addf92673abc0599d511ba2ecedbad82eb679237c38d35366990b4d1dcc16b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
