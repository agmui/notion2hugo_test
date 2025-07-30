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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DJIT42%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLywTwN3mHGK6SZR4mwUvg5PLzrrvIsdEO47%2F6KAZN5AIhALNJtgjEGSQJGwBoRsGOJA6xW4Vs1LTFsz16OQsk8Sq4KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEZ6QQt%2FdXnoLnpj4q3ANGD7dZhgsyEHEPlvfn8o4f%2FNeGQn0R3wealbzpPUcjDnV3RcBqE3plo%2BYgxCDhJ0ZYmgQYKMoSeLQb5Al6UargQs%2FfaMbLDpLQSA6lZE0jw%2F8hk%2FkY3tdwophnOFOfiqtNWvO6jksHXPgYLfTzTBz2sc6W4J%2F0GEKQKS7GLWUtof7i7jfz9yEjRtZxWIZrQpLGyFzh8JfyWRc7DJA6bDt4Ar19tRg8XM8gC%2FgvVZIVCOIpAFDj5jAlxDR2sBF7X4jJebi6aCf0Evvh%2BMMqhqqvGLsuidawqG7%2BqoTExjw5di86td%2BMayenaWJC2ABfnosrDKoh3Y7TftmNevrI0Ca2%2BJHtn69KgZ6jCttnc1RqPfXjLpZ6jpFu3Pz1rhdQPzQzcBn0yJi%2FXh4ts6gMpfaSbmzmP7dbrCuiXExut2eKuS6IlQ0yAhRcphKMgueMiqkdNqWfZB2FwO2g2azBFqMvpdsc5k5svpQUPw5R9uj672%2Bkn1qPr5NT6pcEEDsUAR9daoE4jK8EkBtCyr%2F7DpcnLLZ6FY30OBoQ2N%2BPgATGkFU7uffBhO3SSd3Zp%2FYOy4nk0%2FeAZS%2FyXykaiUVLrmoPxcPUDRqMRXbsBaD2svDrMfmPp18hqa97INBvWjD2wafEBjqkAT%2FjVYtH18fmTDCDwIdcB3g8Nom85vclbOF%2BqoK8TYq6j8s3CqcgYLilgyZ%2BJq1oJzHNmrTqgDGQWUoOwRUKOEa3kceUGJVVCZICIMSB3s9yFsxFilhvcW69kunYkGdORFoM3aLVifqERDCh%2Fw52O44PgC76gxbbTsiyoGhSYAAwA8Djy04NNmdNd%2F0usbpMAaDj%2BkOOKLNxszw%2F3cOPsZC8YBb7&X-Amz-Signature=e6c0dc5f027678c3f6280afb1b756b12a639df10d4226a67b7dbc8463e5989d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DJIT42%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLywTwN3mHGK6SZR4mwUvg5PLzrrvIsdEO47%2F6KAZN5AIhALNJtgjEGSQJGwBoRsGOJA6xW4Vs1LTFsz16OQsk8Sq4KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEZ6QQt%2FdXnoLnpj4q3ANGD7dZhgsyEHEPlvfn8o4f%2FNeGQn0R3wealbzpPUcjDnV3RcBqE3plo%2BYgxCDhJ0ZYmgQYKMoSeLQb5Al6UargQs%2FfaMbLDpLQSA6lZE0jw%2F8hk%2FkY3tdwophnOFOfiqtNWvO6jksHXPgYLfTzTBz2sc6W4J%2F0GEKQKS7GLWUtof7i7jfz9yEjRtZxWIZrQpLGyFzh8JfyWRc7DJA6bDt4Ar19tRg8XM8gC%2FgvVZIVCOIpAFDj5jAlxDR2sBF7X4jJebi6aCf0Evvh%2BMMqhqqvGLsuidawqG7%2BqoTExjw5di86td%2BMayenaWJC2ABfnosrDKoh3Y7TftmNevrI0Ca2%2BJHtn69KgZ6jCttnc1RqPfXjLpZ6jpFu3Pz1rhdQPzQzcBn0yJi%2FXh4ts6gMpfaSbmzmP7dbrCuiXExut2eKuS6IlQ0yAhRcphKMgueMiqkdNqWfZB2FwO2g2azBFqMvpdsc5k5svpQUPw5R9uj672%2Bkn1qPr5NT6pcEEDsUAR9daoE4jK8EkBtCyr%2F7DpcnLLZ6FY30OBoQ2N%2BPgATGkFU7uffBhO3SSd3Zp%2FYOy4nk0%2FeAZS%2FyXykaiUVLrmoPxcPUDRqMRXbsBaD2svDrMfmPp18hqa97INBvWjD2wafEBjqkAT%2FjVYtH18fmTDCDwIdcB3g8Nom85vclbOF%2BqoK8TYq6j8s3CqcgYLilgyZ%2BJq1oJzHNmrTqgDGQWUoOwRUKOEa3kceUGJVVCZICIMSB3s9yFsxFilhvcW69kunYkGdORFoM3aLVifqERDCh%2Fw52O44PgC76gxbbTsiyoGhSYAAwA8Djy04NNmdNd%2F0usbpMAaDj%2BkOOKLNxszw%2F3cOPsZC8YBb7&X-Amz-Signature=b3b9624bfd8e11f93b95bdca7c5a7ed44ee9b8eb027dfaada1b5a6fd778816aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
