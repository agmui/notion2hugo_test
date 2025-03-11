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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JUQ3J2Y%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDzXX070zJ24AK4kTZ9VVJ3h93ozpU3HrBNGUcoq8nvFwIgGGY%2BMiMfedLCcwMeDombSI3Oo3R%2FhBBGx3ZrccpkHFkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF78M5PC77DCtz3ByCrcA1uG%2BOVrEIJuv4UidLt9Sk0vul4%2Fql8aDaH89sBaut7D67UYMhas4Mchg6k2Sc5AwG3e5u71W%2Fp9fytqu7DwKDxnHZEipX8Je8qEN2gEYNMO4gYKfPql2adLVgLJguwIWip%2BXhaIjlAVmLP4HFsu54MVY%2F%2F4tts3zCjFnUx%2BnUNSP86nsDm8CyQlBQkhZA%2FZaf7JVdRP%2FhXy%2Fv6IHIgTvAa10RJABS7urZhp6P7o2nRE9Kl1roLAhtaS%2FaotBjGL1XGUt4JiFUtdZE2BoiL91ncz%2F%2FwtbGTeXxcwKpnUEgr5Yu1AWmVcOLYbwzyZ4iM4Mcn9X%2FlXu97jQH4LKSJmKpfRWUzNILiiWiwzt99wE3BfuBUHAMf2JLEdRY1w818BUG4u1SHRku%2FNvnocZuyjZrfEuE%2B%2FI4QTFho1E7ZLABE2tO4ZUxYtYhLXZlK%2FWZLd260CncejWbnsAsZLvdut5a32rHk4KTpFodXwVWosnWzWpb%2BP4kUiHsukxqtdYV6KCF%2BtgCgYobigEYbT4wW4tbaqYrpxbFXFH0m0Qgd6zGXWKoRTgIbBFF24m46MNZGxHc4eJAeAxvSlxuGa1QR2FxPkvqwmOhMkz38KiwyM68Gp4yV8HhqVMgE5DkCmMKrxv74GOqUB%2BuszR9%2BoLE4ReXrEYI8%2BbXCnBsTIWy1hIh5zkC1rrzUqurKOo%2BZO4zhTFqXZxgPKmKPHAEoDJSh7dmMFd3cvK03E5s7oZsm74L2jmh2d74W7ZCxy5c1i68Tn4YtOYxHOcbZIfh69huB6I1VavzAFDcLmYqHBNe8zqBAP%2FkRAeGAoc1QYQX0YfeKvjlAzM1Nj7Je2hpm9T%2BelIjQ6if41LKZ5NgVw&X-Amz-Signature=d832fad510b82098547acf0bb19935562a66e8c03e1dc3afc80a019613a99e59&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JUQ3J2Y%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDzXX070zJ24AK4kTZ9VVJ3h93ozpU3HrBNGUcoq8nvFwIgGGY%2BMiMfedLCcwMeDombSI3Oo3R%2FhBBGx3ZrccpkHFkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF78M5PC77DCtz3ByCrcA1uG%2BOVrEIJuv4UidLt9Sk0vul4%2Fql8aDaH89sBaut7D67UYMhas4Mchg6k2Sc5AwG3e5u71W%2Fp9fytqu7DwKDxnHZEipX8Je8qEN2gEYNMO4gYKfPql2adLVgLJguwIWip%2BXhaIjlAVmLP4HFsu54MVY%2F%2F4tts3zCjFnUx%2BnUNSP86nsDm8CyQlBQkhZA%2FZaf7JVdRP%2FhXy%2Fv6IHIgTvAa10RJABS7urZhp6P7o2nRE9Kl1roLAhtaS%2FaotBjGL1XGUt4JiFUtdZE2BoiL91ncz%2F%2FwtbGTeXxcwKpnUEgr5Yu1AWmVcOLYbwzyZ4iM4Mcn9X%2FlXu97jQH4LKSJmKpfRWUzNILiiWiwzt99wE3BfuBUHAMf2JLEdRY1w818BUG4u1SHRku%2FNvnocZuyjZrfEuE%2B%2FI4QTFho1E7ZLABE2tO4ZUxYtYhLXZlK%2FWZLd260CncejWbnsAsZLvdut5a32rHk4KTpFodXwVWosnWzWpb%2BP4kUiHsukxqtdYV6KCF%2BtgCgYobigEYbT4wW4tbaqYrpxbFXFH0m0Qgd6zGXWKoRTgIbBFF24m46MNZGxHc4eJAeAxvSlxuGa1QR2FxPkvqwmOhMkz38KiwyM68Gp4yV8HhqVMgE5DkCmMKrxv74GOqUB%2BuszR9%2BoLE4ReXrEYI8%2BbXCnBsTIWy1hIh5zkC1rrzUqurKOo%2BZO4zhTFqXZxgPKmKPHAEoDJSh7dmMFd3cvK03E5s7oZsm74L2jmh2d74W7ZCxy5c1i68Tn4YtOYxHOcbZIfh69huB6I1VavzAFDcLmYqHBNe8zqBAP%2FkRAeGAoc1QYQX0YfeKvjlAzM1Nj7Je2hpm9T%2BelIjQ6if41LKZ5NgVw&X-Amz-Signature=2d64fac0145bb2561427e7cf535aa157e79e025abe2729a25d18e672b16871d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
