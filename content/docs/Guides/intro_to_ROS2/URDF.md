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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZFRDFF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyYdDQC3wPcoP0urUVEX5eW89yiDe0oGlhGTUfeIM8YAiAjU6%2FsHVfJNT1x%2FIaFOTjhTk2i5EFdU85pSIaAs5qgWir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMR84vZtNlaxV6khCNKtwDMyCgBUMQ5s5NmYrJoIhUoevWOjkDFyZGqeoXvrC7cfjfQzaEdkoKtyksyLrMAUd41qXJLdrwxbZWKbYfUHXhnI7kKh9vsiFYHhSXnjx9iPx18e7C0KrOTX1P9bKSGWXURLNYD0nN%2FIU%2FozrRJN31Ly0c52sJ4iAndC9s9XBWt5EATWMWFkhwMeZpIxWwxxlD3qnjx8wDU1rBhX4ojE4OnqQrKuc%2FJuq%2BT4%2BCodNKYWaYXbjiLqE64smn%2FTHnCjS5tl%2B4EMS7hAiOVGGwUsGT7%2FC2I%2BMj%2FNQJF4XDoCFLTBUF36lW8NJunFxvXah2vYz360bvK4B4XR%2FogyNbaAQvrSiEWl1m6rf2fQ9uY8b52Qq%2BaRoqEVA7BejZrNS2dSYyZLDbenLbiP0fpV26owRqbi7r5Gl%2B6pyGwETxu6%2BxrXGynVai3Xw4F%2FrE2dGnHoTDdYDCZ%2Fd0uvpj0blrdlhjnNRby27yQvg%2BclYZcoTfzGAMIvf0Y2%2Fz2jE00eDvPSOmTVvuxi%2FCVDTdeWGMl00IDaFsNspDBwiIaprHYrbXrWI7sDnmzFof5x4bpL%2Bmr5Zg%2F5DC1hTC90qej5Xh4C7nwnAIdVU4Hn74ej9y3BNwZF9g57nt9cLYdowQgq0wy9SSwgY6pgF1Etnot0ZQkMYsb0xK1%2Bo24yLv9n5CVkt1icFu6xCQXefBgT1DrPZohotbVsil9INyIsDnK96%2FHzvxb3sD168riah0sqHI42btDoZDBZlsGD8yn3LTm5%2FCHdhBnbg5w%2FsMWf17nh5d8zUaCD2Dg4%2FHVHGNdGLtQUItTCd9yCtV9H2q382wUz0Qu5WzrVWa5Qo0VfQqg1iEhEi5eVfVbPO4zl5Speu5&X-Amz-Signature=865a7bfcafa882d3fc57a10d9312106369e90c7aec540d09a45681c5d8ba656c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZFRDFF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyYdDQC3wPcoP0urUVEX5eW89yiDe0oGlhGTUfeIM8YAiAjU6%2FsHVfJNT1x%2FIaFOTjhTk2i5EFdU85pSIaAs5qgWir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMR84vZtNlaxV6khCNKtwDMyCgBUMQ5s5NmYrJoIhUoevWOjkDFyZGqeoXvrC7cfjfQzaEdkoKtyksyLrMAUd41qXJLdrwxbZWKbYfUHXhnI7kKh9vsiFYHhSXnjx9iPx18e7C0KrOTX1P9bKSGWXURLNYD0nN%2FIU%2FozrRJN31Ly0c52sJ4iAndC9s9XBWt5EATWMWFkhwMeZpIxWwxxlD3qnjx8wDU1rBhX4ojE4OnqQrKuc%2FJuq%2BT4%2BCodNKYWaYXbjiLqE64smn%2FTHnCjS5tl%2B4EMS7hAiOVGGwUsGT7%2FC2I%2BMj%2FNQJF4XDoCFLTBUF36lW8NJunFxvXah2vYz360bvK4B4XR%2FogyNbaAQvrSiEWl1m6rf2fQ9uY8b52Qq%2BaRoqEVA7BejZrNS2dSYyZLDbenLbiP0fpV26owRqbi7r5Gl%2B6pyGwETxu6%2BxrXGynVai3Xw4F%2FrE2dGnHoTDdYDCZ%2Fd0uvpj0blrdlhjnNRby27yQvg%2BclYZcoTfzGAMIvf0Y2%2Fz2jE00eDvPSOmTVvuxi%2FCVDTdeWGMl00IDaFsNspDBwiIaprHYrbXrWI7sDnmzFof5x4bpL%2Bmr5Zg%2F5DC1hTC90qej5Xh4C7nwnAIdVU4Hn74ej9y3BNwZF9g57nt9cLYdowQgq0wy9SSwgY6pgF1Etnot0ZQkMYsb0xK1%2Bo24yLv9n5CVkt1icFu6xCQXefBgT1DrPZohotbVsil9INyIsDnK96%2FHzvxb3sD168riah0sqHI42btDoZDBZlsGD8yn3LTm5%2FCHdhBnbg5w%2FsMWf17nh5d8zUaCD2Dg4%2FHVHGNdGLtQUItTCd9yCtV9H2q382wUz0Qu5WzrVWa5Qo0VfQqg1iEhEi5eVfVbPO4zl5Speu5&X-Amz-Signature=cec411baafe5fe6d1b59dc33248fb457c868cced42c8c187cf6e2ceaca75cbb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
