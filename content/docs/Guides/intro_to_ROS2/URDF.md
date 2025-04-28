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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNIJJIZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B5q4F7rHAltmafpm%2FEMUNF7kbysdtm6OcQAMcnudKpAiANuzi1ymU5JzIqPlnmjwd66QdBan%2FK6PtwbiYSk41Y%2Byr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMhyLiAKxBEXLzzWLGKtwDn8AwQmrIIu46nDxFJAx%2FJkH%2FvyZjg71PRknF1vCQ3Mfs3QM5o3HWoKuLeSHcoPhwJIfesShaO%2FQgOuAtuztLvbHkBWtAb14fsTNHw8jpOrSKHWmxh%2BQChAeAQfHhw1xuRpBUprTSlcHgGJgctrqgmV8boNsOwkZ9fmCabH98E3Z7XMbr20ms2JT3rs2NX75tGmdSD2OerXMFbuJKRYeN%2B9rCnixqh8EuszEK6gvBTBHr4dQoBsX6%2BmKvyybvPUgTv%2Bm0TP8XnPJkNTmTv9TO%2FxmBx7w0qlLeQxDeI%2B4D%2FQ7LGu70vGiruunxbEFCjMrvI9bqCkSir01t09v76v2Z2wy%2B%2F8Ae3IiiRYFJcQ0NhYbJq%2BuD00QG6b5XTTT0Bz7FSa3ywYLzEwgO9IYrCAN2I18x0f%2BncgQbM3ibpifsZ3rgRvq2dkMSeTQ6Op4slDuy8Bj%2Bf6LBTEo%2BCsFRfzt%2BwjwrNtzKWrWn45l0nTFlvm2Ew7oEHpsBTsIJAYFMW4Z4Q%2BYeuy8LOU%2F1H7pM9VO5UqJJoR7lSPIf4kNmA0ZoEKRiOKI5WpdJg5wOxKk20XvMcR1R%2F%2FqoWk%2FGYV%2Fv1YWobXzFr72Lav1fBiN2%2Bel2NGOxuzL5RZc9sRCKiiIwlpS8wAY6pgHSDEQmv7UsplHJkeDuAmM6bSy4JJmhFeXa6YaGXDMhq%2Bw0PJbSFGTQSAn4saTr%2BuCELeSZljCEJMTe4QTJUNlIa8f7i8AQslmeOgjQXbHJBaFDOvb1NatRnuf12sBe3xvDoi5txjFVf0%2FVEUzxQpDRHQ3Jlbu2HaPiFMGnTrRH6YLEJgWeF0tILM%2Fm4Li6xg3TLnbNI4aJmeS8E%2Bb16UhTe6wzIZD2&X-Amz-Signature=74e8284f1776ff85e8b50c5e36d63e23dd69c0765f355843b38003259f69f031&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNIJJIZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B5q4F7rHAltmafpm%2FEMUNF7kbysdtm6OcQAMcnudKpAiANuzi1ymU5JzIqPlnmjwd66QdBan%2FK6PtwbiYSk41Y%2Byr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMhyLiAKxBEXLzzWLGKtwDn8AwQmrIIu46nDxFJAx%2FJkH%2FvyZjg71PRknF1vCQ3Mfs3QM5o3HWoKuLeSHcoPhwJIfesShaO%2FQgOuAtuztLvbHkBWtAb14fsTNHw8jpOrSKHWmxh%2BQChAeAQfHhw1xuRpBUprTSlcHgGJgctrqgmV8boNsOwkZ9fmCabH98E3Z7XMbr20ms2JT3rs2NX75tGmdSD2OerXMFbuJKRYeN%2B9rCnixqh8EuszEK6gvBTBHr4dQoBsX6%2BmKvyybvPUgTv%2Bm0TP8XnPJkNTmTv9TO%2FxmBx7w0qlLeQxDeI%2B4D%2FQ7LGu70vGiruunxbEFCjMrvI9bqCkSir01t09v76v2Z2wy%2B%2F8Ae3IiiRYFJcQ0NhYbJq%2BuD00QG6b5XTTT0Bz7FSa3ywYLzEwgO9IYrCAN2I18x0f%2BncgQbM3ibpifsZ3rgRvq2dkMSeTQ6Op4slDuy8Bj%2Bf6LBTEo%2BCsFRfzt%2BwjwrNtzKWrWn45l0nTFlvm2Ew7oEHpsBTsIJAYFMW4Z4Q%2BYeuy8LOU%2F1H7pM9VO5UqJJoR7lSPIf4kNmA0ZoEKRiOKI5WpdJg5wOxKk20XvMcR1R%2F%2FqoWk%2FGYV%2Fv1YWobXzFr72Lav1fBiN2%2Bel2NGOxuzL5RZc9sRCKiiIwlpS8wAY6pgHSDEQmv7UsplHJkeDuAmM6bSy4JJmhFeXa6YaGXDMhq%2Bw0PJbSFGTQSAn4saTr%2BuCELeSZljCEJMTe4QTJUNlIa8f7i8AQslmeOgjQXbHJBaFDOvb1NatRnuf12sBe3xvDoi5txjFVf0%2FVEUzxQpDRHQ3Jlbu2HaPiFMGnTrRH6YLEJgWeF0tILM%2Fm4Li6xg3TLnbNI4aJmeS8E%2Bb16UhTe6wzIZD2&X-Amz-Signature=8b1456d94f34e470a47c664476d658a8cf6974c3c92dcec16ec7853a03721381&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
