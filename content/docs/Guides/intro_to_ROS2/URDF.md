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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2MGHVV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4v5ULtOK5Zq9dHMDt8E78qjxgBuJlgGYoRJwYFiX4XAIgVmC68d39ltYM9VcUf%2B0eWBYM0Df9MN4Mb7sZ7f7CJ1oq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGqVnqRs%2FlYly7EJnyrcA8wMfyLEJslaMrgO1%2FKlC0Vum1ITm7SHS0N2eqh%2Bu4rm0OVgvRPNQw9nSt6oaV8IM2I1Fg3Y0IRgUje5NFMKbp7p5bhkarHx3cKKJWoVpHBTrRM%2FmrMQG8GkAHsM3hSE45fzwjGXbEsnjkoGaksPf%2BUVA5py4R99VJlkaLLnBy%2BfbG207mkCLYW5AxOb3hcxt3bUfjIWdt6%2F3B%2BJI9D4WiQe6sO%2B3pYhZas2tYx%2FJWDH6BtDvz4nlbJNoyan6R%2BZlUHrP1J2lb4tqmKLoy6nBPppzMUpowWnrQgyMxpwtmitTtwneNR8YCIt8CE9wyJnPmKKKD%2BnubwaDJ4aGMAliZfGeInByD5pibGtgZB6o3%2F6MkDnKGz%2BA0tmPCHu9YIM9aumLcxZnYOM2gJ0M2ItFulNv5PXzrSyo1h3GZCYPc3ZsD3byQFF87MQGJex2VrSjB3Uy0U2LNC15gRFl%2FDAITGyvw4507rmDxKZOLLUwiiFFBNU8sYu2AX9c3poRTzkEqHdgRmpXUA7Ul9RXT59I2KS5B4lFotmaxTIaDGu4TMvai9bohVMvCgsAV3iTNtczISE%2BnjlKNUerq8%2FHpKP%2BLtb4thWZeeoIsNfSrEXuUIoE7LMCTuDtBfjhW6uMNWC4r4GOqUB96qn606V8RPeZxwVd3VN%2BCmEoPGhVuqKoXpW4pfRlzXspLmpod9wDx4IFx%2BuLBFrPHD4rl5u%2FN7d%2FFSSizBXvOe7cEw4pQpB7xcXiTWXu5jWYW3cluav6N0rKuWuIUocr9ZfYSDUu4SIBJAvMx1bgNX0m%2Bs16A7KB%2F3dxZkRQ9uTkdzlwRTfJHdRCKo6As8yXr3nYp59xzS645xXyTp%2FwxNJ9%2BTK&X-Amz-Signature=350e0c000b08b4037b6711cb1ace34cae036329a086a5b05a4a6f4e20477bc20&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2MGHVV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4v5ULtOK5Zq9dHMDt8E78qjxgBuJlgGYoRJwYFiX4XAIgVmC68d39ltYM9VcUf%2B0eWBYM0Df9MN4Mb7sZ7f7CJ1oq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGqVnqRs%2FlYly7EJnyrcA8wMfyLEJslaMrgO1%2FKlC0Vum1ITm7SHS0N2eqh%2Bu4rm0OVgvRPNQw9nSt6oaV8IM2I1Fg3Y0IRgUje5NFMKbp7p5bhkarHx3cKKJWoVpHBTrRM%2FmrMQG8GkAHsM3hSE45fzwjGXbEsnjkoGaksPf%2BUVA5py4R99VJlkaLLnBy%2BfbG207mkCLYW5AxOb3hcxt3bUfjIWdt6%2F3B%2BJI9D4WiQe6sO%2B3pYhZas2tYx%2FJWDH6BtDvz4nlbJNoyan6R%2BZlUHrP1J2lb4tqmKLoy6nBPppzMUpowWnrQgyMxpwtmitTtwneNR8YCIt8CE9wyJnPmKKKD%2BnubwaDJ4aGMAliZfGeInByD5pibGtgZB6o3%2F6MkDnKGz%2BA0tmPCHu9YIM9aumLcxZnYOM2gJ0M2ItFulNv5PXzrSyo1h3GZCYPc3ZsD3byQFF87MQGJex2VrSjB3Uy0U2LNC15gRFl%2FDAITGyvw4507rmDxKZOLLUwiiFFBNU8sYu2AX9c3poRTzkEqHdgRmpXUA7Ul9RXT59I2KS5B4lFotmaxTIaDGu4TMvai9bohVMvCgsAV3iTNtczISE%2BnjlKNUerq8%2FHpKP%2BLtb4thWZeeoIsNfSrEXuUIoE7LMCTuDtBfjhW6uMNWC4r4GOqUB96qn606V8RPeZxwVd3VN%2BCmEoPGhVuqKoXpW4pfRlzXspLmpod9wDx4IFx%2BuLBFrPHD4rl5u%2FN7d%2FFSSizBXvOe7cEw4pQpB7xcXiTWXu5jWYW3cluav6N0rKuWuIUocr9ZfYSDUu4SIBJAvMx1bgNX0m%2Bs16A7KB%2F3dxZkRQ9uTkdzlwRTfJHdRCKo6As8yXr3nYp59xzS645xXyTp%2FwxNJ9%2BTK&X-Amz-Signature=10b274af500c1d728e32e1484fdf5bd42b9009d64efd518b7df911d26114ca5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
