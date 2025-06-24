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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KN565C%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDahrkEPUnCxaF5ts4BqCEZRAhw5nRZmtY7ulOMXUB6uAIgU56Ny4qdheGtoyuRYb5JgPMF8AAEmgOAkNYwF4e0bWsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIZ9ijzwXdyoxvSbdircA4r%2FYhO7IxG1l2HSezIiwZXuUU5f00%2FtVQDk1TMU66Ky7%2BRNiApqYVPgLnljuvyglFhXKeFOEQ3uBsw12PGQ8XCsggGBhcZbkONz%2FTrVnqWeLnVy%2BxykpR5PCNA3pNzdM1fxfsCn0JjxBlZa%2BMjhey4nR9Xa5h37RIxIcJJE46v%2FyG6hCpWmGEl4UhEgk%2BDHv1P07rvlgjvCZwqmDKIVrjHuIt89aeEWoY1D2ih%2Fpty90ydAjfjKemfEVCaWUtvUVy1wMm%2BQqtLZ66Wi5M1EnpPOmq7aC2GS8dFgbGsP6%2F34Q42HUmce0TmGa7kUk5OEsWQCchjHGIZH4b7tkre9wbbN1qxQOqWjOHZ42G%2FTWKeyKq4J8if%2FB19okNgTPg%2FPEASEO8aj1UplEoP5BDwlFHINiAyheQXRO8LoKIDJNZNorzH1q%2FezFGcu1c6OyYqP9gNOkGks9OR3TWcqbBGujMCerMiZO2vt7%2BFRY9bV7Z0FwZWlNk9Xw%2BNSeTMh7%2B5DVNEOPTGK6k76chY1zin4%2FsGoCqqL5xIaYMfLs91iUCpneXEJKOP2z6pSgyhsgVeBOyQyfzgwuWIBJuuHzrBsdtIt5LPgDcKkspo%2BXwFdYuxskb1emuz3Jk3a6hvEMOKy6cIGOqUBMl1lVWu6kr9AfK29v2u40IE3r5prHQpi0256Zs3wi7QGLWPWbPWHD4lChZmpXVyEHyx6DSTJ3TejySIrGsWPGz4zbj5g9%2BLppYbNHl5X%2Bz7Py37mdjft7WTkeacZE2pMs4KGnRuFQp6W%2B9rrUq31Jg1PJZwUUwww7lLQJ1ndeKvIylFOtcsdpwp5qzN%2FEhsRnKvS%2BFP27CkjtmHmvDOUz%2FtYZEcj&X-Amz-Signature=9e4ee51b2e90ec469a5fd6ad2cd6059208fdc2e9c98f494e968353b965aa89cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KN565C%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDahrkEPUnCxaF5ts4BqCEZRAhw5nRZmtY7ulOMXUB6uAIgU56Ny4qdheGtoyuRYb5JgPMF8AAEmgOAkNYwF4e0bWsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIZ9ijzwXdyoxvSbdircA4r%2FYhO7IxG1l2HSezIiwZXuUU5f00%2FtVQDk1TMU66Ky7%2BRNiApqYVPgLnljuvyglFhXKeFOEQ3uBsw12PGQ8XCsggGBhcZbkONz%2FTrVnqWeLnVy%2BxykpR5PCNA3pNzdM1fxfsCn0JjxBlZa%2BMjhey4nR9Xa5h37RIxIcJJE46v%2FyG6hCpWmGEl4UhEgk%2BDHv1P07rvlgjvCZwqmDKIVrjHuIt89aeEWoY1D2ih%2Fpty90ydAjfjKemfEVCaWUtvUVy1wMm%2BQqtLZ66Wi5M1EnpPOmq7aC2GS8dFgbGsP6%2F34Q42HUmce0TmGa7kUk5OEsWQCchjHGIZH4b7tkre9wbbN1qxQOqWjOHZ42G%2FTWKeyKq4J8if%2FB19okNgTPg%2FPEASEO8aj1UplEoP5BDwlFHINiAyheQXRO8LoKIDJNZNorzH1q%2FezFGcu1c6OyYqP9gNOkGks9OR3TWcqbBGujMCerMiZO2vt7%2BFRY9bV7Z0FwZWlNk9Xw%2BNSeTMh7%2B5DVNEOPTGK6k76chY1zin4%2FsGoCqqL5xIaYMfLs91iUCpneXEJKOP2z6pSgyhsgVeBOyQyfzgwuWIBJuuHzrBsdtIt5LPgDcKkspo%2BXwFdYuxskb1emuz3Jk3a6hvEMOKy6cIGOqUBMl1lVWu6kr9AfK29v2u40IE3r5prHQpi0256Zs3wi7QGLWPWbPWHD4lChZmpXVyEHyx6DSTJ3TejySIrGsWPGz4zbj5g9%2BLppYbNHl5X%2Bz7Py37mdjft7WTkeacZE2pMs4KGnRuFQp6W%2B9rrUq31Jg1PJZwUUwww7lLQJ1ndeKvIylFOtcsdpwp5qzN%2FEhsRnKvS%2BFP27CkjtmHmvDOUz%2FtYZEcj&X-Amz-Signature=2ceae660248c8bdeb1ff09a61f69d19e8b001d791b7e51a2f152591386facbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
