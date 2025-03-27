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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FD7OTP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqNPDeNeDKTuMa8Q1Qz3RcPaxSkOlWmXSaRJei825a8AiEAu04h4jDJEC8dkO6AFMqreCZi7%2BTkUAsWceW8Lns1Zokq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOGHMnA7cYIxc7TYGCrcAzhFgfu10PWAvUU69h%2FMyldY8bObUgCtkywWaG7BIfaJf%2Fol2by2G5WDK83C4nLDuU7%2FLUpaYlZxz4HTgP%2FmHRQTNqLNsqJ%2FuwrI0qVGls82zOJsUMOqqG%2Fs4a0TKNwsiUymyHE123lWopJZyw57tPin33eJdp0G90UwxioTk7u73dHn%2BM082VHrfq4xgHqNqJ1rZUP4w8NsRCcqB%2BYeG5qAeCKRGl3C0PIbDM5lvodn6wm1LMhkEm%2F1C1NBki0CDrB4Tr9kEVGf5WcfAVEDKPeSqzMtLpFBrv%2FGwoEiv3rNjH81B1TPG2X3BPtvUhMT5OpzBtnIkEH5EaSu9Ct9mD3Taa9EMr%2BXDi7Dn5E6jmihTB7IVMe9wzzrTibIN5pnS5zgIzuGWvhI6GIq%2FMkDXj2lcnpeoI%2FaCS%2BygKTjBFxTKCq8gUsnEjuC1ImMuHovmcCrgT3N6lPt9WZKlZlcfdLAfBpzFYwogTH637rSmRLqoLjLhQCX36Ep9EeuCMy5oa5YyHS8pJVaRAfAtCbi4r8RKpZAt9y9b0nvSaJGU9%2BwzhBFHPcEk8powSQRgkt%2BBg6WrQcBZ5UYsEdr87mUtz9vn9JJSvzXPU6SLk%2Fnx%2BmyA96g70P7Ey%2BWMsbwMKn3lL8GOqUBjxjcnGXBcAB9m6LbXQfxesKznbRPoZcl6Q%2FgW1s6Io0QnDFsonrlPtni9psp3yYs68eeFZI8lsG2JFpDAW3uF4zTC2v27uPKjqZwoemQPK9%2B9UFcy83%2BjXNm1%2BIkjaYbRT3JupV19vYHo4OA5zvAYtZDsm%2FuB0W01rDSeBJQYV%2FYHwxuj0GE6MzpndYmzxh0LZH7xLea7UomgOOVwG5ET5J3mcPB&X-Amz-Signature=6b59c53b1ce33454f86a7151f2255fc179063a3be61c995ba742aaa8e73b5c23&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FD7OTP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqNPDeNeDKTuMa8Q1Qz3RcPaxSkOlWmXSaRJei825a8AiEAu04h4jDJEC8dkO6AFMqreCZi7%2BTkUAsWceW8Lns1Zokq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOGHMnA7cYIxc7TYGCrcAzhFgfu10PWAvUU69h%2FMyldY8bObUgCtkywWaG7BIfaJf%2Fol2by2G5WDK83C4nLDuU7%2FLUpaYlZxz4HTgP%2FmHRQTNqLNsqJ%2FuwrI0qVGls82zOJsUMOqqG%2Fs4a0TKNwsiUymyHE123lWopJZyw57tPin33eJdp0G90UwxioTk7u73dHn%2BM082VHrfq4xgHqNqJ1rZUP4w8NsRCcqB%2BYeG5qAeCKRGl3C0PIbDM5lvodn6wm1LMhkEm%2F1C1NBki0CDrB4Tr9kEVGf5WcfAVEDKPeSqzMtLpFBrv%2FGwoEiv3rNjH81B1TPG2X3BPtvUhMT5OpzBtnIkEH5EaSu9Ct9mD3Taa9EMr%2BXDi7Dn5E6jmihTB7IVMe9wzzrTibIN5pnS5zgIzuGWvhI6GIq%2FMkDXj2lcnpeoI%2FaCS%2BygKTjBFxTKCq8gUsnEjuC1ImMuHovmcCrgT3N6lPt9WZKlZlcfdLAfBpzFYwogTH637rSmRLqoLjLhQCX36Ep9EeuCMy5oa5YyHS8pJVaRAfAtCbi4r8RKpZAt9y9b0nvSaJGU9%2BwzhBFHPcEk8powSQRgkt%2BBg6WrQcBZ5UYsEdr87mUtz9vn9JJSvzXPU6SLk%2Fnx%2BmyA96g70P7Ey%2BWMsbwMKn3lL8GOqUBjxjcnGXBcAB9m6LbXQfxesKznbRPoZcl6Q%2FgW1s6Io0QnDFsonrlPtni9psp3yYs68eeFZI8lsG2JFpDAW3uF4zTC2v27uPKjqZwoemQPK9%2B9UFcy83%2BjXNm1%2BIkjaYbRT3JupV19vYHo4OA5zvAYtZDsm%2FuB0W01rDSeBJQYV%2FYHwxuj0GE6MzpndYmzxh0LZH7xLea7UomgOOVwG5ET5J3mcPB&X-Amz-Signature=36c28d364ce844b112a5b62de040077e5e5294649d50714b9a383742fcef8b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
