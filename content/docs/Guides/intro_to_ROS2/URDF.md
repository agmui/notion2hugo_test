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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5HILON%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaBiR5Za6%2FnaQISXVNtor8UII%2BfSicJ%2FaeKtZP1mo%2BXwIhALq9IEFCCVVmz7Myh0xPHopd8NwNsZD99UroCNNOL6OLKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsIIgpltMA2fEejoQq3AOw0NKVytxjRIzqOvVG7w5%2BSut7Vo73JkHzr94%2FZJNl3ajJeSmZdfadjCmTUwRKWoplnBgv9JR%2B59LzHO1oDWGdINjAO3YR3ozUrt4CDegx8LfzEMPH1IxMIhGSHC0tpJvezNaysAvwj3vza4Mq5tF0Ha%2BMq97WOIYsgHIzaVz6K2YHtJU8rB36twehg3kml8S7ABumKTTZUF2AMIwDsaN5SGhCj%2Bhg3K0C64OpUFmRj0fUcaqusDcbaKKe7jumKZh5xr3HBi317h%2F%2F3ak9pu%2FM40iutYCJBMn3cOu5xyGhxbzTymtJ0VXDkmsJ%2FayzO6MhyjKjNmXRmJFgddMUsY%2FmlL7XA%2B8fOsh%2BjVfIxPMF8Lz56GYu2tHA3NkJbL3sR6EdVRVYS8LWbgHTlADNnUKgMysdAV5dzgBX3Jo2qzzionVrn%2FYNJmOslA7ULpi0sIXedbURb9ZFOuRYD1BOLcINlOMGVjXl72T8nKIkD9jg0jYJ5uXrmIpyBOW9qd6bg9LQi6xYHk6ngka3urvhNe0DBhUSwDdLX1YkA9vhDpF4JMkfRqztVw4KYhkG5Ykszye0C09OjwAPCG4BHGorlEfEhGEy899wKOe1Wj91%2FJedF7EdlBzHIFtfUqZ9HjC9loTBBjqkAdR2cgnOxv4iRJNt3qWd7nI%2F8u03mlART4AZf6bKTri2sMYmNGjj0dzuHIeXSbgM6viVwf%2B%2Be25C8xgaEwybhmk%2FNOUjubY%2FsW3%2BjUUGln7DunOusNIN0%2FtY1OmZQASFIHv7OuJQl8cfamwHO6g5c8RJ8d334orM1ozCyJj7hthbe8u55UGIrXZfz%2Bk%2F5hX09qF3WOYz8D7iCtWZxS9EtJtpaZMp&X-Amz-Signature=7d0fc84ca4704ca1b68f5d54352577667008c322311cd6f47fbc8799acbc7294&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5HILON%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaBiR5Za6%2FnaQISXVNtor8UII%2BfSicJ%2FaeKtZP1mo%2BXwIhALq9IEFCCVVmz7Myh0xPHopd8NwNsZD99UroCNNOL6OLKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsIIgpltMA2fEejoQq3AOw0NKVytxjRIzqOvVG7w5%2BSut7Vo73JkHzr94%2FZJNl3ajJeSmZdfadjCmTUwRKWoplnBgv9JR%2B59LzHO1oDWGdINjAO3YR3ozUrt4CDegx8LfzEMPH1IxMIhGSHC0tpJvezNaysAvwj3vza4Mq5tF0Ha%2BMq97WOIYsgHIzaVz6K2YHtJU8rB36twehg3kml8S7ABumKTTZUF2AMIwDsaN5SGhCj%2Bhg3K0C64OpUFmRj0fUcaqusDcbaKKe7jumKZh5xr3HBi317h%2F%2F3ak9pu%2FM40iutYCJBMn3cOu5xyGhxbzTymtJ0VXDkmsJ%2FayzO6MhyjKjNmXRmJFgddMUsY%2FmlL7XA%2B8fOsh%2BjVfIxPMF8Lz56GYu2tHA3NkJbL3sR6EdVRVYS8LWbgHTlADNnUKgMysdAV5dzgBX3Jo2qzzionVrn%2FYNJmOslA7ULpi0sIXedbURb9ZFOuRYD1BOLcINlOMGVjXl72T8nKIkD9jg0jYJ5uXrmIpyBOW9qd6bg9LQi6xYHk6ngka3urvhNe0DBhUSwDdLX1YkA9vhDpF4JMkfRqztVw4KYhkG5Ykszye0C09OjwAPCG4BHGorlEfEhGEy899wKOe1Wj91%2FJedF7EdlBzHIFtfUqZ9HjC9loTBBjqkAdR2cgnOxv4iRJNt3qWd7nI%2F8u03mlART4AZf6bKTri2sMYmNGjj0dzuHIeXSbgM6viVwf%2B%2Be25C8xgaEwybhmk%2FNOUjubY%2FsW3%2BjUUGln7DunOusNIN0%2FtY1OmZQASFIHv7OuJQl8cfamwHO6g5c8RJ8d334orM1ozCyJj7hthbe8u55UGIrXZfz%2Bk%2F5hX09qF3WOYz8D7iCtWZxS9EtJtpaZMp&X-Amz-Signature=fb9bfb26550bff3b47b5ac379cb078a6433566efa939da676fc1d75fbd22da46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
