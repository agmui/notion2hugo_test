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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674H472MY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCcrmAkzYOaTgTaR34Dstm9pHJV9t%2FR5b82nnHSp6lhvwIgFnBdIM9nPiu4NkOzy2OG8VPpanvZEp8x1PuNxdcOSWcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDpDoq%2Bl3YPklHwElyrcAzdSaGoE7TZZqaMHUibh9VwlLRnVSble%2F%2BcTmOt3dyiw2zJeLhtn6Ee4X8Wjk2qzNZvIIYOL7cQVqA3sMt4c3rJuRQ2amJ2zaR6v%2B3o0tXz8R%2B%2FcyZs%2Bexj2p%2FN5DysHtmHN4nhLE3t%2FVEO9RRdNhNimOf%2BmJlU%2F26x0bv9A3UKVmf%2Ftb6LD6CKYYk%2BJxUDS5b9f%2FYKm1ANM%2BKT%2F31JSan5%2F74XnDDzjhpCd3SdJbHhWr1galqF%2BU5j09UrlW%2B31GeEHqak0EcFF6wNLj5GfvT6byNNzBtE0vqGATzOwc4s4DHgjB4adYA%2BbTpRM9BKaDBF0DtrjtipRYa%2Fj0KPZdHvhL6O74TUOlFtrzlVDVMAiV5Uq2BfQazkOJ4oWuWII6LScB%2F2knp81%2Fpu4Czr5DhkL4tQU1ACDyNEB4VvUgfuZXAJU50xW4FS26zXuH5KBtztV37eatLO1XYXZcsonS4bFgcbYOa7MD1DXLltfV7%2BLJHMeal8Vyd%2FJdn0znxqV8I3kFMe8WGEmSzROiIC8%2B9GNBQZbZGSWGyZjl3D4jZUyjX%2Fl19P%2BujOagnjukuglkxVpYNSjsxgremcPPuCyJ3za9ZHC7D2uwpQZNz%2Fm8EILR5BHfRjOs%2BI1ywEmMKWD9L0GOqUBlW1aSnJBwKzRCDi6ApURuCN88SRusX0%2F%2Fk3Gk3IyBpmFjqNLVWdRK5Lw%2FLuEG32OkvUgNRs2aeTZ9snNSdRP8J1KM6yRbM3OcKv9C18u08pXQuf7%2BgISAxCtf3Wytw975gNUyKuQUaWp5GqrJLl%2Fg6nYm2vPl0G7NNO5U%2B4uB1X1ykQzW%2FG7Bjlc02%2Fn%2F8uAO%2Bka9EGTo5S5jQrL1BnEetRLb5yB&X-Amz-Signature=8faf606ab194f0527059347067422d10d78d69f82beb6345ac7af973a7d239fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674H472MY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCcrmAkzYOaTgTaR34Dstm9pHJV9t%2FR5b82nnHSp6lhvwIgFnBdIM9nPiu4NkOzy2OG8VPpanvZEp8x1PuNxdcOSWcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDpDoq%2Bl3YPklHwElyrcAzdSaGoE7TZZqaMHUibh9VwlLRnVSble%2F%2BcTmOt3dyiw2zJeLhtn6Ee4X8Wjk2qzNZvIIYOL7cQVqA3sMt4c3rJuRQ2amJ2zaR6v%2B3o0tXz8R%2B%2FcyZs%2Bexj2p%2FN5DysHtmHN4nhLE3t%2FVEO9RRdNhNimOf%2BmJlU%2F26x0bv9A3UKVmf%2Ftb6LD6CKYYk%2BJxUDS5b9f%2FYKm1ANM%2BKT%2F31JSan5%2F74XnDDzjhpCd3SdJbHhWr1galqF%2BU5j09UrlW%2B31GeEHqak0EcFF6wNLj5GfvT6byNNzBtE0vqGATzOwc4s4DHgjB4adYA%2BbTpRM9BKaDBF0DtrjtipRYa%2Fj0KPZdHvhL6O74TUOlFtrzlVDVMAiV5Uq2BfQazkOJ4oWuWII6LScB%2F2knp81%2Fpu4Czr5DhkL4tQU1ACDyNEB4VvUgfuZXAJU50xW4FS26zXuH5KBtztV37eatLO1XYXZcsonS4bFgcbYOa7MD1DXLltfV7%2BLJHMeal8Vyd%2FJdn0znxqV8I3kFMe8WGEmSzROiIC8%2B9GNBQZbZGSWGyZjl3D4jZUyjX%2Fl19P%2BujOagnjukuglkxVpYNSjsxgremcPPuCyJ3za9ZHC7D2uwpQZNz%2Fm8EILR5BHfRjOs%2BI1ywEmMKWD9L0GOqUBlW1aSnJBwKzRCDi6ApURuCN88SRusX0%2F%2Fk3Gk3IyBpmFjqNLVWdRK5Lw%2FLuEG32OkvUgNRs2aeTZ9snNSdRP8J1KM6yRbM3OcKv9C18u08pXQuf7%2BgISAxCtf3Wytw975gNUyKuQUaWp5GqrJLl%2Fg6nYm2vPl0G7NNO5U%2B4uB1X1ykQzW%2FG7Bjlc02%2Fn%2F8uAO%2Bka9EGTo5S5jQrL1BnEetRLb5yB&X-Amz-Signature=f5b8db34ff0fbcbb395db82c83011fca498c9cf57f2c268dde743ec8f7c1216c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
