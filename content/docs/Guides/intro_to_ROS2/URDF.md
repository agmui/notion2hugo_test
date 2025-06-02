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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLRJ5K4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCOq%2BqwmJGSpucgEfzf%2BYtna%2FPaA2Y8QeciMcHduMjtcwIgSqtgXi1T%2BPvghOLA3tOwg4GALvbklowcUvvgNwyrkdoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa2cbJkDF3G4MjhcyrcA5Gy0QVuxCIxF66s0Ko4pUx5LaHvdDCYvXfQ8WpY0n1RL15p3J%2B85sV1%2BaGckYTjHAaoSZmQkBeaisssvK1C7nZ67YCu1%2FTECRF1Y8OXYTNo6uQE67hKyiyh1PqVxb%2FaRxLKjsShnpotBrFZrQdtZUzgk0IOIzrBfwET9jjNQO5F%2BoPH2uEWlUSSThzqk4o%2F4Ka5dHBUCU73ue13EU5SURj%2FpmyELrk%2FExBlHgMzE8fVQaL8PhWffaNqKDhBgIdOtSZq0eum%2B2Mx39F8ObiwQceKCMDGRXV2%2FcRM6NHftFa7DgVvM%2Fke%2BU2plCPyoZ5Ftd8gjQwDeEMyBvSbzeCIeIEUdfoinevSF%2BvGEAI6gcjv0WEhi%2F5spHi2N4dFkzoXunFfDgXotEMvwIADd90zpHNCR2dCbU4AS%2FZIsWdNR%2B%2BzsfAkvsAdmr7A7UExWiXiHY0CD5%2Fku3RVqRwwJme99u50%2BqiCOTRCQAgpJUWCHxvKJ8dZO3k78%2F%2FyydPFAN43WfSTtIGdiP5z7KofRU8e%2Fq%2FJiYerI26NMQOIc4FK8YdziUgwR%2FefjhPaqpXji5S2Q8ub%2BPU5b2m1SEnAGvPcZKZZ4VWEUjdSzNszmcjUy%2BYKCGSGRrEZFPoeTgZEMMvi98EGOqUBKvRbq2fBuFOXBYc81%2FuZQmr%2F%2Fv7b3BaR7iWkvvWDfd0rbe7J%2FdYeQDfIpmEViVFLgIctzVwziMgeTfNbfdwr731T5hcX3fxDK67tzNk%2F68YaRmyeWNwP6jMDxyjdSK2zicT3Tv4HSIrdorkYfxjG42m3w6PzTtMHEVrc0XrY%2Bf8liIjha7PFalUXSp03GZ0DPgMya02h%2FG3iHN6IyLP2VywTliD2&X-Amz-Signature=e7d8126f1480521a9eaff5e72e9c859d9acd599e093c5fb8e4efdb37768ee547&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLRJ5K4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCOq%2BqwmJGSpucgEfzf%2BYtna%2FPaA2Y8QeciMcHduMjtcwIgSqtgXi1T%2BPvghOLA3tOwg4GALvbklowcUvvgNwyrkdoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa2cbJkDF3G4MjhcyrcA5Gy0QVuxCIxF66s0Ko4pUx5LaHvdDCYvXfQ8WpY0n1RL15p3J%2B85sV1%2BaGckYTjHAaoSZmQkBeaisssvK1C7nZ67YCu1%2FTECRF1Y8OXYTNo6uQE67hKyiyh1PqVxb%2FaRxLKjsShnpotBrFZrQdtZUzgk0IOIzrBfwET9jjNQO5F%2BoPH2uEWlUSSThzqk4o%2F4Ka5dHBUCU73ue13EU5SURj%2FpmyELrk%2FExBlHgMzE8fVQaL8PhWffaNqKDhBgIdOtSZq0eum%2B2Mx39F8ObiwQceKCMDGRXV2%2FcRM6NHftFa7DgVvM%2Fke%2BU2plCPyoZ5Ftd8gjQwDeEMyBvSbzeCIeIEUdfoinevSF%2BvGEAI6gcjv0WEhi%2F5spHi2N4dFkzoXunFfDgXotEMvwIADd90zpHNCR2dCbU4AS%2FZIsWdNR%2B%2BzsfAkvsAdmr7A7UExWiXiHY0CD5%2Fku3RVqRwwJme99u50%2BqiCOTRCQAgpJUWCHxvKJ8dZO3k78%2F%2FyydPFAN43WfSTtIGdiP5z7KofRU8e%2Fq%2FJiYerI26NMQOIc4FK8YdziUgwR%2FefjhPaqpXji5S2Q8ub%2BPU5b2m1SEnAGvPcZKZZ4VWEUjdSzNszmcjUy%2BYKCGSGRrEZFPoeTgZEMMvi98EGOqUBKvRbq2fBuFOXBYc81%2FuZQmr%2F%2Fv7b3BaR7iWkvvWDfd0rbe7J%2FdYeQDfIpmEViVFLgIctzVwziMgeTfNbfdwr731T5hcX3fxDK67tzNk%2F68YaRmyeWNwP6jMDxyjdSK2zicT3Tv4HSIrdorkYfxjG42m3w6PzTtMHEVrc0XrY%2Bf8liIjha7PFalUXSp03GZ0DPgMya02h%2FG3iHN6IyLP2VywTliD2&X-Amz-Signature=0e2071677ce8112a21f2d6c7e5a6184b5b8851e856a099b6b84e0bb7f386dd95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
