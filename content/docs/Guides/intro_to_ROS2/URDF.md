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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFJKY6Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENHlXCVRetxESjFOe1Z9enZ0sRZ9is0zoPfcCMgLaDfAiEA9%2FIsiQHgEKcUdtuIXYgzTyJsT4A%2BCpNOfY%2FaQJdBsEcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlp7AphLjncnNAIDircA8OlrAhWlH2prGjYArLlrZEMygSnawlU5x2YOFTXKqREzEZs%2Bp1sz52ZH1iS0LJeDTe8Ki20ypkXk5zbcrtEKU3W%2BB5rV7yHfloYp6vs2lLOiCTVON2hop0mJDz6BF9Qt8B5NyB4ocSvqDtbfF8aLy7tzq4oUqjrNFkm4nq5lWoBN2iCIhpXJaR21LTdQdEO2%2Fc6%2BTSdTfxNVlJCDrfb9XR3WKRGOl6JFvAgaDMSu%2B5mpL3bh3skpHKIBgRR0vgkEG0ztc5ruwayFv%2BdEupFot5n%2BamizfgLtjiocZHHRU5HU2vGs4q0uTC3yPL0axezGnCsfhPpq2CcdbZEhFBpE42cJDNekROchgq0zwPhA8cgFRAXVzLe2BafWGsrfnGBLYZfp6CF2Zv3lbIRkcmzLzA1Yli3VMd%2Bmslmd%2B0QKO9DOvrI9EC1ZAJLHA1xDhRDRqK8w7nQ%2FrTr1%2B2%2BXTpmEbgAuncHJxl0mM%2FGDsnYQ2GlMIPelvV%2BWAsnnAgkgsHYpTPCNotOdUqydfbjSsRwbAliTTHGbtJ58l7q9OegXKeETnTrDCO40Cd4y9RiXYpMcfnsnJ8riTgW%2Ba%2B4yO8uFFGZiPM5CdPD0qAhRE7HoDmnUz41ZAy2PcZ5V7A8MNDH5b0GOqUBnh1U347wpwhuCbpP4IyqktP2cd7310NXz53E6jLgwe3aG7z4bEwI9eCN8qLywTmUa2gUQ5fQIpgIkpgiRB%2BYMp6n9EL%2BAj3aEoMl6YgYvjGbbeiU7sLLk63bmQkKbbFFByfU%2Bz8NKvC7xHm3qdFfLu6FHG2YOTsjcLBsT3rqIgu5wco52TAgoFP4yb5I13LoiJ4g08moUg%2F966BWll44bK1IiMeo&X-Amz-Signature=f3815e58dd0bed96080c13003eb488e6a360a85a6548ac33fe4fae6bd17b3ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFJKY6Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENHlXCVRetxESjFOe1Z9enZ0sRZ9is0zoPfcCMgLaDfAiEA9%2FIsiQHgEKcUdtuIXYgzTyJsT4A%2BCpNOfY%2FaQJdBsEcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlp7AphLjncnNAIDircA8OlrAhWlH2prGjYArLlrZEMygSnawlU5x2YOFTXKqREzEZs%2Bp1sz52ZH1iS0LJeDTe8Ki20ypkXk5zbcrtEKU3W%2BB5rV7yHfloYp6vs2lLOiCTVON2hop0mJDz6BF9Qt8B5NyB4ocSvqDtbfF8aLy7tzq4oUqjrNFkm4nq5lWoBN2iCIhpXJaR21LTdQdEO2%2Fc6%2BTSdTfxNVlJCDrfb9XR3WKRGOl6JFvAgaDMSu%2B5mpL3bh3skpHKIBgRR0vgkEG0ztc5ruwayFv%2BdEupFot5n%2BamizfgLtjiocZHHRU5HU2vGs4q0uTC3yPL0axezGnCsfhPpq2CcdbZEhFBpE42cJDNekROchgq0zwPhA8cgFRAXVzLe2BafWGsrfnGBLYZfp6CF2Zv3lbIRkcmzLzA1Yli3VMd%2Bmslmd%2B0QKO9DOvrI9EC1ZAJLHA1xDhRDRqK8w7nQ%2FrTr1%2B2%2BXTpmEbgAuncHJxl0mM%2FGDsnYQ2GlMIPelvV%2BWAsnnAgkgsHYpTPCNotOdUqydfbjSsRwbAliTTHGbtJ58l7q9OegXKeETnTrDCO40Cd4y9RiXYpMcfnsnJ8riTgW%2Ba%2B4yO8uFFGZiPM5CdPD0qAhRE7HoDmnUz41ZAy2PcZ5V7A8MNDH5b0GOqUBnh1U347wpwhuCbpP4IyqktP2cd7310NXz53E6jLgwe3aG7z4bEwI9eCN8qLywTmUa2gUQ5fQIpgIkpgiRB%2BYMp6n9EL%2BAj3aEoMl6YgYvjGbbeiU7sLLk63bmQkKbbFFByfU%2Bz8NKvC7xHm3qdFfLu6FHG2YOTsjcLBsT3rqIgu5wco52TAgoFP4yb5I13LoiJ4g08moUg%2F966BWll44bK1IiMeo&X-Amz-Signature=dcee1e2787986ac594a3ae25d3ac57c366b2056e478418907a56d1497539a6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
