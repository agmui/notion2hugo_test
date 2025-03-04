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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNDG2RA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7XlNCdosuhqhQxOtm6X7sJDMn1KQ8qK5QrI9CRLqC0gIgEq9MTbeOlWUNdbhNYtIPgMhThep5dNoG9mJdDBvimfQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMpkUaYdQdnJ2Gy%2FyrcA%2BTJDy3tQDeK7L3Ngi3o4lbC9sU8FJs8R3VRlfzttKTBQYsBnqJU0hqENr5Ow%2FpMk6PI9tJUekHRSUvKbseG8WZ1QFztuHF6II%2BvKmd%2BCvTQbTdIvTvxcxfB5DGyNdI1heY6%2Bss%2BKFo55xzTHbE4OGBYpuP9zoMFc7YIsdf446EDJlgXiAl0h79lGgUs9gpZRxuDMutgmdVMVHROF0UoXNPQS6YGNBuUG1Vpw2vaIykzA9NyZl8bJKdj9pShQcyHTCPLQpMoAcZSqMMnJzfTB1kzIZGkTrJiO67OGJ4D%2B%2FKip9P6nojpXLOe2yu9B4R2E8SfTbBFqyRhPwv6UNa3jX3P0Iu9eeIAlk%2FuyDSqGZEFsXICgzNImnxybRMtCtw5Bke7rQUzUMuA%2BvY5RKUcisaU8O8P34XtjSB5CKv268HmoQb%2FrqxIa1ztmMavfTV7hXIMYslypQuxGiyaP61wNHeK9K3uQqsh1Nn9awC54GMIp4PozPDOYJx%2BKysIBel3uSSRHXtw7d2Kpginqz5i%2BNPa1g6VS9oJtqUqFdsHKTODtr7LOULpVsEgAztqwFJvyYd1XYWZuRPKQBVWJxLm4xmROgwpKPX9vDT4HnWR9opln0iqp2ufeR%2BJXpz5MO25nb4GOqUB%2BWOXi1QiECkR7O8JFEOa0DwvS1LqCTDbsPEC0spqr1FP8w38JqblUQow9vCFxGIoZAwq3Radi5jO6EtF33FNcBy08kMw%2FBT6qp3KiayOudPgeMra0EdU7MVlWWG99JHE%2FuowSQM3GIXceJC8L5g10Gcp3psItv4USPXkSAHcpFAF0NoRPH8uj%2FEPL%2BhpU71hlvipXRU57yWZmnjyFzuMdr5DsPcM&X-Amz-Signature=2a1a517ee116456e6b87b6483909897fae6c4a8c6f3012b0682ec4a366df8290&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNDG2RA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7XlNCdosuhqhQxOtm6X7sJDMn1KQ8qK5QrI9CRLqC0gIgEq9MTbeOlWUNdbhNYtIPgMhThep5dNoG9mJdDBvimfQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMpkUaYdQdnJ2Gy%2FyrcA%2BTJDy3tQDeK7L3Ngi3o4lbC9sU8FJs8R3VRlfzttKTBQYsBnqJU0hqENr5Ow%2FpMk6PI9tJUekHRSUvKbseG8WZ1QFztuHF6II%2BvKmd%2BCvTQbTdIvTvxcxfB5DGyNdI1heY6%2Bss%2BKFo55xzTHbE4OGBYpuP9zoMFc7YIsdf446EDJlgXiAl0h79lGgUs9gpZRxuDMutgmdVMVHROF0UoXNPQS6YGNBuUG1Vpw2vaIykzA9NyZl8bJKdj9pShQcyHTCPLQpMoAcZSqMMnJzfTB1kzIZGkTrJiO67OGJ4D%2B%2FKip9P6nojpXLOe2yu9B4R2E8SfTbBFqyRhPwv6UNa3jX3P0Iu9eeIAlk%2FuyDSqGZEFsXICgzNImnxybRMtCtw5Bke7rQUzUMuA%2BvY5RKUcisaU8O8P34XtjSB5CKv268HmoQb%2FrqxIa1ztmMavfTV7hXIMYslypQuxGiyaP61wNHeK9K3uQqsh1Nn9awC54GMIp4PozPDOYJx%2BKysIBel3uSSRHXtw7d2Kpginqz5i%2BNPa1g6VS9oJtqUqFdsHKTODtr7LOULpVsEgAztqwFJvyYd1XYWZuRPKQBVWJxLm4xmROgwpKPX9vDT4HnWR9opln0iqp2ufeR%2BJXpz5MO25nb4GOqUB%2BWOXi1QiECkR7O8JFEOa0DwvS1LqCTDbsPEC0spqr1FP8w38JqblUQow9vCFxGIoZAwq3Radi5jO6EtF33FNcBy08kMw%2FBT6qp3KiayOudPgeMra0EdU7MVlWWG99JHE%2FuowSQM3GIXceJC8L5g10Gcp3psItv4USPXkSAHcpFAF0NoRPH8uj%2FEPL%2BhpU71hlvipXRU57yWZmnjyFzuMdr5DsPcM&X-Amz-Signature=1fb16fe4f560be6cb2c5de6363041942c6979cd74cfb8852acc4cb52e8ee16ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
