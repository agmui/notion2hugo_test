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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUDLLIR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIETzh7YWUe5XKAxThu%2FgxKhM4ghyqLes8K16vmB0%2BeK5AiAU7jLC%2BWGkVs87qAtzeGFY03dyrKDcCBCj33tl2dFtoCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcy8QXKPKSD7drNlKtwDDSVv7hjcwRhsMz8HbiMEoPtESRAUEl5rVlnD7pY%2FZjZ8Tq055tmOPAyY5M6lEwuzwvHmViLEgimng1L6RsEFfNEVVmONi9fOGGii7aMJDxzuCbda1yfG3xWISq8yubTDv61E%2BQMgBuljF%2BGIE9zmrSDSFMV6D0HynGwR6PelCXrvI9jwKgTToxHf0a8yPAgmJvZk%2F9IQkbmKUglfNjxGmVF1H1EK7Q3pTEJCQL2h1GHb20W2teeHiEODeXe0FJ9hhIkHPuqbz9E9j%2FMfGtAhAeDsIHuIIqGRIbbg%2BkoPoOBip%2Bqq3VWy73apCOgxXzwvSao8Fvto7A8xEYgvNfK%2BtlxTbregd1T2fQg%2FqK%2BeXFa20vMMf2oSGJ%2FISMJO9Fx4UPyeEfepWuQwg07EGrH7R%2F1mZsHBlw8wEIvIx6%2BZV9xmPPTJBXESjF%2BEXhpine%2FiB1GVJ9qt1%2BFED0L%2BBlkWePG3ZU3XInBobAH%2FAczORzbGT0ZTtIkCAzcVxfYXcj8vd0thRNS2wqe9hiceTIDwRX54XQvYKqm%2B3vjvvwNx%2BTZb8uq6i%2FPyMDvsYrwDhmNaStrOAoui2EeYYHg4EkK7bRA%2BXbsWDp3jV7fnoywTEZdbS%2FVOPzn09aeq51Uwxsz%2FvgY6pgGKDIZ%2Brrd3GvJMgxdgNy%2BBmdEbodMwdmq7J3HAo1dAj%2F53Os4clnaQDuXfx5FLlCiGg5pbZsphBEFpneQdJ7K3uovRhY2B4AU2Ovr0IZKwF9dat2NVdX3EqaYJVzsm53fyguRb4sQaLR4ZVVCEmoq5WMziSwz2pxvI1R4Z2u2UqUnTICnA5DChDpZJOiRssy8KJFcixkw8mtAVCQWt5bfHmMSOIDRs&X-Amz-Signature=c2cb7429c46c333efa1b23107651ff9a6832012c6629211908a391089b34d002&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUDLLIR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIETzh7YWUe5XKAxThu%2FgxKhM4ghyqLes8K16vmB0%2BeK5AiAU7jLC%2BWGkVs87qAtzeGFY03dyrKDcCBCj33tl2dFtoCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcy8QXKPKSD7drNlKtwDDSVv7hjcwRhsMz8HbiMEoPtESRAUEl5rVlnD7pY%2FZjZ8Tq055tmOPAyY5M6lEwuzwvHmViLEgimng1L6RsEFfNEVVmONi9fOGGii7aMJDxzuCbda1yfG3xWISq8yubTDv61E%2BQMgBuljF%2BGIE9zmrSDSFMV6D0HynGwR6PelCXrvI9jwKgTToxHf0a8yPAgmJvZk%2F9IQkbmKUglfNjxGmVF1H1EK7Q3pTEJCQL2h1GHb20W2teeHiEODeXe0FJ9hhIkHPuqbz9E9j%2FMfGtAhAeDsIHuIIqGRIbbg%2BkoPoOBip%2Bqq3VWy73apCOgxXzwvSao8Fvto7A8xEYgvNfK%2BtlxTbregd1T2fQg%2FqK%2BeXFa20vMMf2oSGJ%2FISMJO9Fx4UPyeEfepWuQwg07EGrH7R%2F1mZsHBlw8wEIvIx6%2BZV9xmPPTJBXESjF%2BEXhpine%2FiB1GVJ9qt1%2BFED0L%2BBlkWePG3ZU3XInBobAH%2FAczORzbGT0ZTtIkCAzcVxfYXcj8vd0thRNS2wqe9hiceTIDwRX54XQvYKqm%2B3vjvvwNx%2BTZb8uq6i%2FPyMDvsYrwDhmNaStrOAoui2EeYYHg4EkK7bRA%2BXbsWDp3jV7fnoywTEZdbS%2FVOPzn09aeq51Uwxsz%2FvgY6pgGKDIZ%2Brrd3GvJMgxdgNy%2BBmdEbodMwdmq7J3HAo1dAj%2F53Os4clnaQDuXfx5FLlCiGg5pbZsphBEFpneQdJ7K3uovRhY2B4AU2Ovr0IZKwF9dat2NVdX3EqaYJVzsm53fyguRb4sQaLR4ZVVCEmoq5WMziSwz2pxvI1R4Z2u2UqUnTICnA5DChDpZJOiRssy8KJFcixkw8mtAVCQWt5bfHmMSOIDRs&X-Amz-Signature=a626628cda435fd93bbbedd2b000ddf67291ecb3e8f169315043717219140898&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
