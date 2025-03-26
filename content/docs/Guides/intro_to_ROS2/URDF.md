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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6QX2ZP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3hPCOOPPaNVkXTlw8SgdJX6nO97X0PXZwJxrJdovMKAIgGCK%2Fv6V0ZFJXfXdBEWUPDGM1m5b3hbM5i%2FwCtzFYNskq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDNYU3RMfo9iJkJRZqircA4Egz7Mbk1qWJ4xz7hd%2Bo8h9ffX55j85ahbVWsLBoMH5ofspAlxmtYWy%2BzrLM8nGxJO1yH7oeoDUiiKnks0RxyVlxKXyXnKROoIGiLZ4w0xLXnEJfp5NLrueDpDd5LjDl8%2Bba4U%2B2nFQotUKDiQJYZJD7FPkyD7RLBITrtrndvZNubpVARDIOPmEH26dreTwJArCNaM4htuF0jYO50%2B2utIw%2B17eB2XHpmVcpVv5zz5TC01UVu9JOiZG1Kc6XpNFAmSUQt%2FfSw70FSDMnrpC%2F409AeYCGSyLILxBrCOzQ3VO%2BAYfZrdoXWh9kfbQQEHkwHge8YwHdfk7lpP8jbJXREvskQD%2FodznW9BI5ZjlNaO6V%2Fp2XOUCO3F%2B2p2SKkhBuDJrnkTgz6qi45dFas7Js4BPkeN2wUwz0%2BMUSlLbovHNdy3UBGg1Jg%2Fc04TWvZ9cbGVF%2FM1juTHJ31d2r%2BJy3oAMXiZZnBHIZAm4W%2FAD6kATilSplfnBSF8iIw8fwVgk7SmPgWoPD6gkBQuVQlPN67yoiQOkrUd9eX2V0a6b%2B%2FfYp9S7dmtjzJPjE%2BCYBHx4yaxoPr8Ibce97KM8D67gE8eeEM7rklYpPyF968PhMAeQhqzj4k07dlLOGBjMMJLLjb8GOqUBQHRPfT7GJ49Dd%2FbABf3Cyf%2BDOP7AC4dNJK7fZqjLlC%2BddnLh8kmdOjHBPAUSdYyJakhfdqEQDvaoFqnRh57R9daycSjssConjA2Lzj5U%2BpHsn4Z7gmoZ2z3itMg0CrW94WoQ2PIUaGL839ZU0qRU%2B2MMdUpyYtAeFJ%2Bkd6yJXGhdbFwo1gtXt83GRFNwFTJ6es%2FLZjgunWLPSagKv6wJLIA9Ec5O&X-Amz-Signature=37cafe1a69203783db70bcab68befeb6fed97f8d7fb24e697e161dcfe4695169&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6QX2ZP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3hPCOOPPaNVkXTlw8SgdJX6nO97X0PXZwJxrJdovMKAIgGCK%2Fv6V0ZFJXfXdBEWUPDGM1m5b3hbM5i%2FwCtzFYNskq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDNYU3RMfo9iJkJRZqircA4Egz7Mbk1qWJ4xz7hd%2Bo8h9ffX55j85ahbVWsLBoMH5ofspAlxmtYWy%2BzrLM8nGxJO1yH7oeoDUiiKnks0RxyVlxKXyXnKROoIGiLZ4w0xLXnEJfp5NLrueDpDd5LjDl8%2Bba4U%2B2nFQotUKDiQJYZJD7FPkyD7RLBITrtrndvZNubpVARDIOPmEH26dreTwJArCNaM4htuF0jYO50%2B2utIw%2B17eB2XHpmVcpVv5zz5TC01UVu9JOiZG1Kc6XpNFAmSUQt%2FfSw70FSDMnrpC%2F409AeYCGSyLILxBrCOzQ3VO%2BAYfZrdoXWh9kfbQQEHkwHge8YwHdfk7lpP8jbJXREvskQD%2FodznW9BI5ZjlNaO6V%2Fp2XOUCO3F%2B2p2SKkhBuDJrnkTgz6qi45dFas7Js4BPkeN2wUwz0%2BMUSlLbovHNdy3UBGg1Jg%2Fc04TWvZ9cbGVF%2FM1juTHJ31d2r%2BJy3oAMXiZZnBHIZAm4W%2FAD6kATilSplfnBSF8iIw8fwVgk7SmPgWoPD6gkBQuVQlPN67yoiQOkrUd9eX2V0a6b%2B%2FfYp9S7dmtjzJPjE%2BCYBHx4yaxoPr8Ibce97KM8D67gE8eeEM7rklYpPyF968PhMAeQhqzj4k07dlLOGBjMMJLLjb8GOqUBQHRPfT7GJ49Dd%2FbABf3Cyf%2BDOP7AC4dNJK7fZqjLlC%2BddnLh8kmdOjHBPAUSdYyJakhfdqEQDvaoFqnRh57R9daycSjssConjA2Lzj5U%2BpHsn4Z7gmoZ2z3itMg0CrW94WoQ2PIUaGL839ZU0qRU%2B2MMdUpyYtAeFJ%2Bkd6yJXGhdbFwo1gtXt83GRFNwFTJ6es%2FLZjgunWLPSagKv6wJLIA9Ec5O&X-Amz-Signature=a306210774c95d11c8a12552feddd6ed1d185c5c1310bf7c6c94bcf56d8f2a47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
