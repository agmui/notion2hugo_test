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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4GIKCV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDqLAAAUXd7DkDCH9hqJw7WwXPXZ%2B1%2BgYkzLv%2BTSDBtzQIhAKNlA3VNpDpGHDdoG7W%2Bwsq4wdXxr%2BgysI5x7tyhs5suKv8DCCsQABoMNjM3NDIzMTgzODA1IgwRkG1cO0fRlQDsY1Eq3AMdZDJ9%2Fr1UD%2FJQ3Gxmvxec48X8TbjUs9N7xHJxsLLb1jScRG3Fh05d3zbi1N9jI1jJD0BRUt07HG4%2B81ZT5S7%2F5buhkUqpM8dwIp3LDJUnknsy0Tq39XK9PfLnrcI2mX5BSHW6UCxrx0PWJzhlVe0CW3%2FAYV30IDBRw3Z8RAnLAweEmFH3Bz1VXJmj1s%2BXTKJozBvU2oKH6IYbEPDqKQVAwP5oMnxEoG%2Bo0W1MCT9tHO0jzGHumYPFDQbz4L8t%2BoaHMvj0Vjfa9Zk%2FtIVZx53JUIVAU5phHqAL0cHrB0Ms%2FcOSBbxYvVnCPfuEWBM96NJLnxb1EQIafw6m7Q1NC0rcp2zDq0wCUmA3xd7TghNWve7%2FRO231h0t0kjEs2rcDl0B746l80KkomLaouveZPEMBAjVTbcUquQGy2FUjlcT88lyCytuXhx4qS7RbEHvRUKiAPxRd13aR6KJxbLVbWwwXIGLkICPfRiE1%2BFentIYTG7x9Wwbc2ZFp%2FKCVzO0Y7iFdT3%2BldxszujIKfP58H57o9ShQBpJSTa6HK%2BPvUzM1pDvbzuBFGWR4vmeJVQRO3aR%2BFfhdpbsMWl2DGviF3uMLIV%2Br0hl3QOkiFCYpLHbgo4E3kemoiVaK0kebDDU18vBBjqkAb5aOfBE%2FyAcsLm4hA%2BmYBf7X4uPaz41wNY4rCIgx5etk3LVLS1wv5XJGjNE5kjCIs%2B8z2rHw8BsJ%2FXyXghh1sFfexxXjFxzmFrSxB%2FvBwuuOIvhFeekh%2BSubUidtMnEdZEw0MmxHB9Ag9pAwfiWvs3YxxTJRqymigBS8%2FJ%2B6HGGwvDcoSexM0XPus9q9DiYIeKrcPlE6wkdBJjR7IrZCDNE0zXi&X-Amz-Signature=f3a35cc051ec1d4c0df50a8a686e7b4b03ef33aca193d0215b1914f7e8ff32f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4GIKCV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDqLAAAUXd7DkDCH9hqJw7WwXPXZ%2B1%2BgYkzLv%2BTSDBtzQIhAKNlA3VNpDpGHDdoG7W%2Bwsq4wdXxr%2BgysI5x7tyhs5suKv8DCCsQABoMNjM3NDIzMTgzODA1IgwRkG1cO0fRlQDsY1Eq3AMdZDJ9%2Fr1UD%2FJQ3Gxmvxec48X8TbjUs9N7xHJxsLLb1jScRG3Fh05d3zbi1N9jI1jJD0BRUt07HG4%2B81ZT5S7%2F5buhkUqpM8dwIp3LDJUnknsy0Tq39XK9PfLnrcI2mX5BSHW6UCxrx0PWJzhlVe0CW3%2FAYV30IDBRw3Z8RAnLAweEmFH3Bz1VXJmj1s%2BXTKJozBvU2oKH6IYbEPDqKQVAwP5oMnxEoG%2Bo0W1MCT9tHO0jzGHumYPFDQbz4L8t%2BoaHMvj0Vjfa9Zk%2FtIVZx53JUIVAU5phHqAL0cHrB0Ms%2FcOSBbxYvVnCPfuEWBM96NJLnxb1EQIafw6m7Q1NC0rcp2zDq0wCUmA3xd7TghNWve7%2FRO231h0t0kjEs2rcDl0B746l80KkomLaouveZPEMBAjVTbcUquQGy2FUjlcT88lyCytuXhx4qS7RbEHvRUKiAPxRd13aR6KJxbLVbWwwXIGLkICPfRiE1%2BFentIYTG7x9Wwbc2ZFp%2FKCVzO0Y7iFdT3%2BldxszujIKfP58H57o9ShQBpJSTa6HK%2BPvUzM1pDvbzuBFGWR4vmeJVQRO3aR%2BFfhdpbsMWl2DGviF3uMLIV%2Br0hl3QOkiFCYpLHbgo4E3kemoiVaK0kebDDU18vBBjqkAb5aOfBE%2FyAcsLm4hA%2BmYBf7X4uPaz41wNY4rCIgx5etk3LVLS1wv5XJGjNE5kjCIs%2B8z2rHw8BsJ%2FXyXghh1sFfexxXjFxzmFrSxB%2FvBwuuOIvhFeekh%2BSubUidtMnEdZEw0MmxHB9Ag9pAwfiWvs3YxxTJRqymigBS8%2FJ%2B6HGGwvDcoSexM0XPus9q9DiYIeKrcPlE6wkdBJjR7IrZCDNE0zXi&X-Amz-Signature=deccaf1d036a2e52aae6a3b4a444ae5406057107fb51465f3c18909519871968&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
