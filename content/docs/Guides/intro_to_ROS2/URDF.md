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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTGXJBM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj1TQvkiWbCyarXv1OlfE0VQ2liDHevbp6ByyqlvhSfgIgJ%2B1XCiHg1TS43wex073ckRkgWrsirJugRknNGvyUBegq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCU9iPmFoWOpmXM%2BXyrcA57p%2F1YJncsHv0qHbsgIaH%2BA4212z5TGgL7CsLLahEP6H%2Bd4fGnsSGialjh20ZJ6nRcxNTLXUhZIfp5KrTqafcSAFnS%2FCnaQwc%2BtGhOXjCjOgsyv1IgiBUMo2ZCVAcmETJdsro0rBZzvbvHUAm33U%2Bgtgw%2FaF3C1fdpJDpD4KMYICnaLJjUcUypkoipT%2FKF9qHG6LmDvkhg3v6WWelxfouW%2FnST%2BZbl9VpHU%2BoRZIdvTdKlvCHSNAy%2FRiATxTHVhk9RgyoYuSLt63KBy1mDrEuL0WpJ95g4JpVYu6oJWP37NzA6GuxfH%2Bb6MLlk0aBEnoXXdiaP%2B5neokdR9062O8emPOn%2BztHQ%2BZBUcKKQtnCDHD2ADQmppfxUWR%2ByALjkHisvYddYKpQybhow9%2F8N0zKnSYUR1g%2Ff5Pdn%2F7cuEErBd5upJnNxApORPHHzyvWxHiV8QGt6Lo0p7fqq1R8nneGOpXajr7Ut%2B1kGMqN6CGx0uxS0lLMnz1xvVMSas37ckxdDwBw1aNYEHypr8uZEIxCjMZWXl%2BwfenJMdfd8tTH5LF1fOuiBX5v%2FgHN%2BnElDYB5CLd7RXlnUSt5mN9LSwED18F3A9Bq%2F1ZUysbZuQyMzp%2FhkGabjDg34W3jeBMLzC58AGOqUBTjrWyOdUG49i7iknb2v6OHcOn6r8HuCG8r5Dtg13P67DhTaeT4wvwbNHsb9qif6kNi3SEEAE7WufHB4kAVLruLKZTm%2B1Jta0ojy8m95W3WGpjqbQiTV14aS06otOkZCHeFQgUa%2FnspoDQ5wE0qwzCkTQTl%2FBORcflU7xOU1P%2F3HfS5DjBdP%2FVlfHE%2BGmyb9boLpynQlKmHiQsdpVldIfjv4EE6Y0&X-Amz-Signature=d6bd57cc0db76149a59276f84e501fc92493bc7bd266ba00620efd877fb538aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTGXJBM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj1TQvkiWbCyarXv1OlfE0VQ2liDHevbp6ByyqlvhSfgIgJ%2B1XCiHg1TS43wex073ckRkgWrsirJugRknNGvyUBegq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCU9iPmFoWOpmXM%2BXyrcA57p%2F1YJncsHv0qHbsgIaH%2BA4212z5TGgL7CsLLahEP6H%2Bd4fGnsSGialjh20ZJ6nRcxNTLXUhZIfp5KrTqafcSAFnS%2FCnaQwc%2BtGhOXjCjOgsyv1IgiBUMo2ZCVAcmETJdsro0rBZzvbvHUAm33U%2Bgtgw%2FaF3C1fdpJDpD4KMYICnaLJjUcUypkoipT%2FKF9qHG6LmDvkhg3v6WWelxfouW%2FnST%2BZbl9VpHU%2BoRZIdvTdKlvCHSNAy%2FRiATxTHVhk9RgyoYuSLt63KBy1mDrEuL0WpJ95g4JpVYu6oJWP37NzA6GuxfH%2Bb6MLlk0aBEnoXXdiaP%2B5neokdR9062O8emPOn%2BztHQ%2BZBUcKKQtnCDHD2ADQmppfxUWR%2ByALjkHisvYddYKpQybhow9%2F8N0zKnSYUR1g%2Ff5Pdn%2F7cuEErBd5upJnNxApORPHHzyvWxHiV8QGt6Lo0p7fqq1R8nneGOpXajr7Ut%2B1kGMqN6CGx0uxS0lLMnz1xvVMSas37ckxdDwBw1aNYEHypr8uZEIxCjMZWXl%2BwfenJMdfd8tTH5LF1fOuiBX5v%2FgHN%2BnElDYB5CLd7RXlnUSt5mN9LSwED18F3A9Bq%2F1ZUysbZuQyMzp%2FhkGabjDg34W3jeBMLzC58AGOqUBTjrWyOdUG49i7iknb2v6OHcOn6r8HuCG8r5Dtg13P67DhTaeT4wvwbNHsb9qif6kNi3SEEAE7WufHB4kAVLruLKZTm%2B1Jta0ojy8m95W3WGpjqbQiTV14aS06otOkZCHeFQgUa%2FnspoDQ5wE0qwzCkTQTl%2FBORcflU7xOU1P%2F3HfS5DjBdP%2FVlfHE%2BGmyb9boLpynQlKmHiQsdpVldIfjv4EE6Y0&X-Amz-Signature=072fe35911bf11d78723f38cdae50d07c4fec83c611de261eddaf6a99bd0d387&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
