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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAFOQRI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4bP5sYVQUPTZPOek1kei0wLjYtxPpbS3EhJZo4yE52wIgYy5gsxFDgF2I4YNngJwkKSHNMZTsAvv1QB0TgWyCFecq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH9kGJacQXxumX9qKyrcA3%2F8HgpowtZaj%2FLXeJ6jlAnekS6tmcbbihOGoFJE2l9VwSvPMSt%2Fu3EkQJNZJo3MsmBP%2BYJsedAeA1WVwS4S%2B7uJX%2B9LHgA2AJLy5Kg5OXfYbETszvePQweQtDWnMr0lcKCxcuazpvGrx2oLtm72hqZJknFZo%2BgmvPn%2FWXMljk%2F1U0R1WvvKmQCkPXXQZal2ngfpF31JnOktkvLjikh42QLUIq8xe2P7etB%2F%2BTGhrFM43cicwWMq6LsT3ygzkM5uYFH4IUL4JONQhFV%2B%2Bxt895UdA4oXkUD0DNnmjk%2BY1pT0l87ztrX16ZVVXzE8dVcbloLFz28OjWTQY45JciFeYyCTr%2FF%2BkhoDNHo3gkIyhGnjTZSrJ2vorVD6WRRIIZlcXh%2B5Xp6k2wWl%2BWuYT3uubTx0Y%2Bo02fW1tF5fHXuK%2BMsen6gqxKrgm4rAAmWHnn5euf5%2Bp418caINJIrypfSphmTnNRMAuP3OI1cW9tO3KRlsO%2Bez9kfkda2Nr6wCeG%2F5CUvAp8o22vXKinCfufAsW4Lr0KooeeePsMmo6PY%2FGJZuXDm6QXLQKST8afEUUUHHK8SVGfxVg2U%2B5SUAcrshjyegtwaUXSpGJJXIgXtfTGYRxgTlCZnIHsInM3cQMPf9mcEGOqUB8AQAmCTuBjut7xpVQt8gp3H1Uiwaz2QGgQqNJGnGkq91%2FmVH2a0WgQ55JQazjpAMFLMQQ2euXtCpPTNE20BfXPsD6thMgFPkVpZgttsKBRLl79JyA%2F833ITALENbRb%2F7gVXTUXR686gJq8JkfrXwJ7rJ52bXsYpW%2FAqj3ptzdYGbKaGUs5A%2FFfWShMMHEtq164h%2BDCy1jmlfV7%2FG57Qp8ErvwKrA&X-Amz-Signature=e69f8a21a6412771e313c7b27e309df990e5be9029bc441ee95ac46cb76fa1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAFOQRI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4bP5sYVQUPTZPOek1kei0wLjYtxPpbS3EhJZo4yE52wIgYy5gsxFDgF2I4YNngJwkKSHNMZTsAvv1QB0TgWyCFecq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH9kGJacQXxumX9qKyrcA3%2F8HgpowtZaj%2FLXeJ6jlAnekS6tmcbbihOGoFJE2l9VwSvPMSt%2Fu3EkQJNZJo3MsmBP%2BYJsedAeA1WVwS4S%2B7uJX%2B9LHgA2AJLy5Kg5OXfYbETszvePQweQtDWnMr0lcKCxcuazpvGrx2oLtm72hqZJknFZo%2BgmvPn%2FWXMljk%2F1U0R1WvvKmQCkPXXQZal2ngfpF31JnOktkvLjikh42QLUIq8xe2P7etB%2F%2BTGhrFM43cicwWMq6LsT3ygzkM5uYFH4IUL4JONQhFV%2B%2Bxt895UdA4oXkUD0DNnmjk%2BY1pT0l87ztrX16ZVVXzE8dVcbloLFz28OjWTQY45JciFeYyCTr%2FF%2BkhoDNHo3gkIyhGnjTZSrJ2vorVD6WRRIIZlcXh%2B5Xp6k2wWl%2BWuYT3uubTx0Y%2Bo02fW1tF5fHXuK%2BMsen6gqxKrgm4rAAmWHnn5euf5%2Bp418caINJIrypfSphmTnNRMAuP3OI1cW9tO3KRlsO%2Bez9kfkda2Nr6wCeG%2F5CUvAp8o22vXKinCfufAsW4Lr0KooeeePsMmo6PY%2FGJZuXDm6QXLQKST8afEUUUHHK8SVGfxVg2U%2B5SUAcrshjyegtwaUXSpGJJXIgXtfTGYRxgTlCZnIHsInM3cQMPf9mcEGOqUB8AQAmCTuBjut7xpVQt8gp3H1Uiwaz2QGgQqNJGnGkq91%2FmVH2a0WgQ55JQazjpAMFLMQQ2euXtCpPTNE20BfXPsD6thMgFPkVpZgttsKBRLl79JyA%2F833ITALENbRb%2F7gVXTUXR686gJq8JkfrXwJ7rJ52bXsYpW%2FAqj3ptzdYGbKaGUs5A%2FFfWShMMHEtq164h%2BDCy1jmlfV7%2FG57Qp8ErvwKrA&X-Amz-Signature=dfd8fa7fd6781090c59756c0408d1d21c4ddd3d5db0cddef37e43b54b2587862&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
