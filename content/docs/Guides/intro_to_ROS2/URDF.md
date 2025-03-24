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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSHIXUQC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCptjRB7mRXM9AaLrWRbXRvlpNHUvGwxe94wllcCJ2%2B6wIgShH%2FgfwVK4%2BuZAiwWl2u41DRynIZS1gHQ6zY7qK9JVoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTqVHu0%2BoBddY8oPircA1ApxFpBVdxc23yE5dkLj2cXEbg%2FeMAKC88LRgL1Tgo2%2BtJ8Qwh2g6JMWjT1gyAAJM5vTxCf%2BUJBXMzj7emt8WTjpVzfTzB%2BWltaEFap7yubonog4TwIH%2FcQKvxG7hKUhaBczJAKvobVHwA9%2B8xW0zFb%2BX3PLEVm%2FOLw%2FFO1w4FsSQTtyh7N3w959eSXG9Tn0SvW16UNsz6TcSOfIj5bvuWXqxnXudZw5rhTyexibq90EGtusMrMWHscWTad68yP5NbVa6eP0P2Ahac7zChh57ECirhl%2B9K763WYcNZpTmWiABWyusZKeJ7HyhPzC%2FXUjTIPHfN%2Bioza2h3Smg2i3VNnm6REKlAw%2BEUxFVKAwT1r5aooo6rd1Vv34DSayCsgDYE24NpiyUCuS7ayenp%2BbOfnKvmLtuIgwRBLKd78sUMfnjuGhSfa7iJIuWb1Gw96TZH843sVjMQCCzX9J8NdXV17NOzIiJT7W8HKphe%2FreeBk2ifvC%2FwXX%2FaVmWDVJ6U0rSe3OiQHckEEDbwRsJIJlZtZC8xykGulihQqKikb8FYFX1LQwu2n6cXrFJSi0VBfurslwWqXf9ZJO6PQcz4TKD6OSaScSihNSaA9jWpQuFUd8depMAC25sZ53haMPn%2Bhb8GOqUB5t4zEtNwYdzd0LSXXclG930RY8qyeXItwTUqShAuNH%2Bo4uke87F7O%2FehARXnoyRrXbKe7Xxh5bS6h5Ggzk4DzpgHKM%2FO63M%2BqnKKPtkmvQesRo8TPEPIoahpZOKCWjh9po10uqsaUSrdcRazBS6p%2BZUOtINyTCNoUeuC%2BkDjqoTQtQXyWNgQ9E%2BBNpB6tySZJhTM6z2O6RhKq0Qh6amiIT0cCaUo&X-Amz-Signature=eceee86e80d13200e132d7c4009928a52d48c36f88f6a3a1c517ff05c6ca20cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSHIXUQC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCptjRB7mRXM9AaLrWRbXRvlpNHUvGwxe94wllcCJ2%2B6wIgShH%2FgfwVK4%2BuZAiwWl2u41DRynIZS1gHQ6zY7qK9JVoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTqVHu0%2BoBddY8oPircA1ApxFpBVdxc23yE5dkLj2cXEbg%2FeMAKC88LRgL1Tgo2%2BtJ8Qwh2g6JMWjT1gyAAJM5vTxCf%2BUJBXMzj7emt8WTjpVzfTzB%2BWltaEFap7yubonog4TwIH%2FcQKvxG7hKUhaBczJAKvobVHwA9%2B8xW0zFb%2BX3PLEVm%2FOLw%2FFO1w4FsSQTtyh7N3w959eSXG9Tn0SvW16UNsz6TcSOfIj5bvuWXqxnXudZw5rhTyexibq90EGtusMrMWHscWTad68yP5NbVa6eP0P2Ahac7zChh57ECirhl%2B9K763WYcNZpTmWiABWyusZKeJ7HyhPzC%2FXUjTIPHfN%2Bioza2h3Smg2i3VNnm6REKlAw%2BEUxFVKAwT1r5aooo6rd1Vv34DSayCsgDYE24NpiyUCuS7ayenp%2BbOfnKvmLtuIgwRBLKd78sUMfnjuGhSfa7iJIuWb1Gw96TZH843sVjMQCCzX9J8NdXV17NOzIiJT7W8HKphe%2FreeBk2ifvC%2FwXX%2FaVmWDVJ6U0rSe3OiQHckEEDbwRsJIJlZtZC8xykGulihQqKikb8FYFX1LQwu2n6cXrFJSi0VBfurslwWqXf9ZJO6PQcz4TKD6OSaScSihNSaA9jWpQuFUd8depMAC25sZ53haMPn%2Bhb8GOqUB5t4zEtNwYdzd0LSXXclG930RY8qyeXItwTUqShAuNH%2Bo4uke87F7O%2FehARXnoyRrXbKe7Xxh5bS6h5Ggzk4DzpgHKM%2FO63M%2BqnKKPtkmvQesRo8TPEPIoahpZOKCWjh9po10uqsaUSrdcRazBS6p%2BZUOtINyTCNoUeuC%2BkDjqoTQtQXyWNgQ9E%2BBNpB6tySZJhTM6z2O6RhKq0Qh6amiIT0cCaUo&X-Amz-Signature=1b5bfc37e2375c9b0895f0f5040a0fe22e547ac5576e83d8b042d7b64034ba7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
