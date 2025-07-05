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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ATVQMMY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBk85aW8cH22GQtG%2BqHuMz5MlK4IUeANlvTY0dwMY6QcAiB9I5QqNVFU6SzNVOkXDdZnS%2Bz%2FdFitRSsMe9WKMtExEir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMnwu7odjtosqy9R35KtwDqPTxrAAbbgOt1%2FRhuNY0GpqagDwnV%2FvIQauNhqyAHYt3OhT5N0P6yx6mG7lFBjNARs3Nhhxxx45zOHgmwIHda4Kaeb%2FVvccj6EB2AvfJ0LiYes627gJKo03qeR573av2aKyhizwBHDhkWExp%2FZqR4XFclaBMyRkmlzzdZjvJ6xHyGx2jsY%2BT5J35HrSoplOzKN4OjX8fMDveKOejGJmGD%2FNy%2ByW76YZ2fjENnETjZn7SlnAlJs9ALcUBDlKEVZ5yPAYHwoumtIZ%2BtGdHL6on%2BLPip9dt87u3IfHSVEu1aV5KaGJLDY7EXgUKbWmBXdDMrkypiq741R5hR39AfGVmZ1noe%2B7SAxu3DPEt1BJ6%2FOdDkWaIhGR2UPVCLt4g%2B8%2FF54CVByuFYKqg39md5jm%2FDTP0uT01Lud4rN3lx6UMVJgBn%2BjC9GC7Lb2%2BPs%2BsS4p1r6MO%2BCoo5ZK%2FdAHrPxe%2FXPZp3I8D5KPgCQYJ7f%2B3EvBCyCsPT1ZNuh9DlMCwmwJkJoTGO0F7KH%2FHkiz%2FwLPc0gzEuskKHBjNkzubBlCokhiamdPZZzDl5s8h3wPJ%2FRQ00NjVmH0QI5EnSCEQ37evuvSMNyMKK%2FjmRtGn1PNp3bdyZOuqHiKBVgz%2BzKswsayjwwY6pgGmUVBwrtebOkMWJBtM41WkCjFbztOZpZzvWGbhuoTdYGqPG%2B8EnierWCNcfuX9R8Zw1wc7%2BBUq0ymosEvlPUvNmVFBvzD7S3W6h1EZxACbtENWbTHTSwk3BNOUvsLQcCgKxmb5if799LJ4MJOI5I9HUU20Z337l8PJAXy8pevYFpTAqWaYOgZDP6aX9BILn470C3SDHrBbcxpu1wdi0codDU7zlEe%2F&X-Amz-Signature=35265044b1c02b1e71c50d879e5548fd1909e7b43f322355b366ec5fbab9fec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ATVQMMY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBk85aW8cH22GQtG%2BqHuMz5MlK4IUeANlvTY0dwMY6QcAiB9I5QqNVFU6SzNVOkXDdZnS%2Bz%2FdFitRSsMe9WKMtExEir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMnwu7odjtosqy9R35KtwDqPTxrAAbbgOt1%2FRhuNY0GpqagDwnV%2FvIQauNhqyAHYt3OhT5N0P6yx6mG7lFBjNARs3Nhhxxx45zOHgmwIHda4Kaeb%2FVvccj6EB2AvfJ0LiYes627gJKo03qeR573av2aKyhizwBHDhkWExp%2FZqR4XFclaBMyRkmlzzdZjvJ6xHyGx2jsY%2BT5J35HrSoplOzKN4OjX8fMDveKOejGJmGD%2FNy%2ByW76YZ2fjENnETjZn7SlnAlJs9ALcUBDlKEVZ5yPAYHwoumtIZ%2BtGdHL6on%2BLPip9dt87u3IfHSVEu1aV5KaGJLDY7EXgUKbWmBXdDMrkypiq741R5hR39AfGVmZ1noe%2B7SAxu3DPEt1BJ6%2FOdDkWaIhGR2UPVCLt4g%2B8%2FF54CVByuFYKqg39md5jm%2FDTP0uT01Lud4rN3lx6UMVJgBn%2BjC9GC7Lb2%2BPs%2BsS4p1r6MO%2BCoo5ZK%2FdAHrPxe%2FXPZp3I8D5KPgCQYJ7f%2B3EvBCyCsPT1ZNuh9DlMCwmwJkJoTGO0F7KH%2FHkiz%2FwLPc0gzEuskKHBjNkzubBlCokhiamdPZZzDl5s8h3wPJ%2FRQ00NjVmH0QI5EnSCEQ37evuvSMNyMKK%2FjmRtGn1PNp3bdyZOuqHiKBVgz%2BzKswsayjwwY6pgGmUVBwrtebOkMWJBtM41WkCjFbztOZpZzvWGbhuoTdYGqPG%2B8EnierWCNcfuX9R8Zw1wc7%2BBUq0ymosEvlPUvNmVFBvzD7S3W6h1EZxACbtENWbTHTSwk3BNOUvsLQcCgKxmb5if799LJ4MJOI5I9HUU20Z337l8PJAXy8pevYFpTAqWaYOgZDP6aX9BILn470C3SDHrBbcxpu1wdi0codDU7zlEe%2F&X-Amz-Signature=cff87f149af879da8deedff21799f59522e10e6d547682777f57acee41350c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
