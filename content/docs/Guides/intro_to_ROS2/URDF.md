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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6PLHOZK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CJLKh8nAp7gGzVehPDAxqib9%2BwNxhfkOI1z7xi3mMgIgeKtTj2rxnmImLHAcEIhIv2errldjbTRx9N0hiwP3h%2BYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAw5LuFMzgPxASAdCrcA%2B4qEyclTsKq%2BqTecf2yO0WvzWmwBj%2B9xUbL%2F6q0lO112co7eEZBgc%2B5y0HMZw%2F6wwgS9Fsv37UQcnFmhMrdBcnWScrLl6rVbREK2zC9Q4DfOXDQS2Q4dMCSZqyMO9AOfbFFvK38qti8BHlMkWFHISsY6gsnVW4eL1gIP6R7Wesc%2BJ6BtNx6Hbka32GNqCKGsXIuryCLdAr2OyheDssZEyREvNCFY9VUbkEmDL%2BBwoPPfqqiFTk2DOnR5%2Fj7HuEQ216wADzrplDPCr%2BrN4cOcPMBaqnyK8UKwzXHlfYQw%2FgcaPR2b2gx4b9a6d3QBFr5BmC7J3D6XoUZGexO6DEOFXeKsu5%2Box7FHo4t3q0QRmg7Omb%2BORKXXfxT8deF5uJh2UXNGRpiWFnvWq9W%2B%2FlD%2BnsDdc9QGhEP2GK2Z7PHOXEqS8S0FkfygBDmuIxM6hRudUO9B1ZX1lmHYaNFuzRMMwwfglMUSZ98eadKcYvS8yNsKDYLLzXBkY4eZj8ebrLjyuhbnVnrHwS%2FgA1KVAUOOHF5bdnKCRJuZcZurCZUDeoR1FrsxDkzNZe7nIqj%2FV9YLLCsyoY4fLHp063Ej3PJswBhMz7xx%2F84lQrnvpGmaciwxXusCiB9CJqs7GjTMP728rwGOqUB4ECQCtH98MZvZ6DAaYlM%2FSiSHDXK9mxYxnZYln7cFIcyZ0YlBJIZTnTICWh%2FKiWh0EsCbruXRZ1fUV%2FO4GHzDXmDHAavBwT5ZufJdS0K8mq1KubctKZ%2Fh3HiI7Z4uJRAdaDok26XGn3qmgt7sdNlseOsydjXXAKJrmwYwqxYtCngp7M2a3VRWAPqdCoFGU6qd29OBl6TJ%2FR6ay1hTzUlhE3YHR5M&X-Amz-Signature=4e732a798a92ca4dcb9734c80b62a7dd52dcf080278bdb7f05e74413470d1f17&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6PLHOZK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CJLKh8nAp7gGzVehPDAxqib9%2BwNxhfkOI1z7xi3mMgIgeKtTj2rxnmImLHAcEIhIv2errldjbTRx9N0hiwP3h%2BYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAw5LuFMzgPxASAdCrcA%2B4qEyclTsKq%2BqTecf2yO0WvzWmwBj%2B9xUbL%2F6q0lO112co7eEZBgc%2B5y0HMZw%2F6wwgS9Fsv37UQcnFmhMrdBcnWScrLl6rVbREK2zC9Q4DfOXDQS2Q4dMCSZqyMO9AOfbFFvK38qti8BHlMkWFHISsY6gsnVW4eL1gIP6R7Wesc%2BJ6BtNx6Hbka32GNqCKGsXIuryCLdAr2OyheDssZEyREvNCFY9VUbkEmDL%2BBwoPPfqqiFTk2DOnR5%2Fj7HuEQ216wADzrplDPCr%2BrN4cOcPMBaqnyK8UKwzXHlfYQw%2FgcaPR2b2gx4b9a6d3QBFr5BmC7J3D6XoUZGexO6DEOFXeKsu5%2Box7FHo4t3q0QRmg7Omb%2BORKXXfxT8deF5uJh2UXNGRpiWFnvWq9W%2B%2FlD%2BnsDdc9QGhEP2GK2Z7PHOXEqS8S0FkfygBDmuIxM6hRudUO9B1ZX1lmHYaNFuzRMMwwfglMUSZ98eadKcYvS8yNsKDYLLzXBkY4eZj8ebrLjyuhbnVnrHwS%2FgA1KVAUOOHF5bdnKCRJuZcZurCZUDeoR1FrsxDkzNZe7nIqj%2FV9YLLCsyoY4fLHp063Ej3PJswBhMz7xx%2F84lQrnvpGmaciwxXusCiB9CJqs7GjTMP728rwGOqUB4ECQCtH98MZvZ6DAaYlM%2FSiSHDXK9mxYxnZYln7cFIcyZ0YlBJIZTnTICWh%2FKiWh0EsCbruXRZ1fUV%2FO4GHzDXmDHAavBwT5ZufJdS0K8mq1KubctKZ%2Fh3HiI7Z4uJRAdaDok26XGn3qmgt7sdNlseOsydjXXAKJrmwYwqxYtCngp7M2a3VRWAPqdCoFGU6qd29OBl6TJ%2FR6ay1hTzUlhE3YHR5M&X-Amz-Signature=a96499dd793faaf4bb729740c20ac6a11d790be2206ba0986349efdba8ea7eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
