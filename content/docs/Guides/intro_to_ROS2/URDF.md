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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLEPKWFN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuWcMyyNzya%2BJm93IrAxSPeUkvARJFazIfM80%2Fwil83gIhAPwbaaAzNmQytWtvLqzVrM781AI1qlAFwbvLgCP98YJfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPSyEt7RFYFPEEeBUq3ANxCbzprqZgh5QJfqJACetG8YZ05ptyUg1PP8mULPGu8YR4cf8mNrhTx9NHn9vw25qWy0vOqwSFchzeRqzwZfEdy9b23vFCjRzGJyb2iNU8JbvVZf0SiAcNtx9hQWKULiVf0AoqUrcxbuw744Ltig4ZUGHNMaNfwrI4dnEGgEIFq%2BMI81LXkmH1D3KPuDsj27LHr8l%2BmFDfJUfzMVlMTE%2BN3s6zZIrRqd%2FRDjBKCVrFGbhvveV73AzBcnGi9U4EwID6IM14RRGcAH2powyZd12Ku5hS2SyrzUe9UekZ4DSTQjSVYTiW1MkjZFPOhf%2FPdInYKyUT0NpNtCmWvG3mOG6Q5%2B%2FeoUtzgYybLqnzjxwUTYFOyOyp9qvB7q6DPpdAyEhUPd6xp1ikwyAHQR3KGKttSi6bZTDBTHVYS6ysYfrUhj0I4pyNvNudCAPYsKfM3N6FstWJo40kZKs8GDi3g3GrLRymIlqPZMEUGPSiuislvcjdrvvYoXKKZvWp%2FTPa%2FisMNXlQQLz3yg16%2BX73Vw7nqUJ76z5W%2FsuIjakeFL%2FWyxo97gtiR92M6nP7AX%2BORZ%2Bi%2FcatQ3nVfOli%2FaNcc82WTps3eZd8MHtHiJ5UjWc7yslsdhodpy8sHRYh2zCkxJDDBjqkAd3giZpkxcDlP81faB5h3FsaY62o9xR9JVGjBmjsabg23dtsXFkmcGy2MLYesXE%2BxgI3zdbLH5yiv4R1%2BaNKa2HaYPS1t57p41LrAKj1UEB0ZReZAl6NwK0oBlzzc1NfiJzDzFc1%2BthtHCi%2FXgAbe0JD%2FzWHMdmBjLE8%2B0lYC6XbyLTcdJ6X8Ac91KXw8ppirznT9zklzMehxt1cjbnFakSbqfmu&X-Amz-Signature=2ba33c736543fec5059672ee71e0015c4297bcf831a9ccf5f911e442f8365a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLEPKWFN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuWcMyyNzya%2BJm93IrAxSPeUkvARJFazIfM80%2Fwil83gIhAPwbaaAzNmQytWtvLqzVrM781AI1qlAFwbvLgCP98YJfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPSyEt7RFYFPEEeBUq3ANxCbzprqZgh5QJfqJACetG8YZ05ptyUg1PP8mULPGu8YR4cf8mNrhTx9NHn9vw25qWy0vOqwSFchzeRqzwZfEdy9b23vFCjRzGJyb2iNU8JbvVZf0SiAcNtx9hQWKULiVf0AoqUrcxbuw744Ltig4ZUGHNMaNfwrI4dnEGgEIFq%2BMI81LXkmH1D3KPuDsj27LHr8l%2BmFDfJUfzMVlMTE%2BN3s6zZIrRqd%2FRDjBKCVrFGbhvveV73AzBcnGi9U4EwID6IM14RRGcAH2powyZd12Ku5hS2SyrzUe9UekZ4DSTQjSVYTiW1MkjZFPOhf%2FPdInYKyUT0NpNtCmWvG3mOG6Q5%2B%2FeoUtzgYybLqnzjxwUTYFOyOyp9qvB7q6DPpdAyEhUPd6xp1ikwyAHQR3KGKttSi6bZTDBTHVYS6ysYfrUhj0I4pyNvNudCAPYsKfM3N6FstWJo40kZKs8GDi3g3GrLRymIlqPZMEUGPSiuislvcjdrvvYoXKKZvWp%2FTPa%2FisMNXlQQLz3yg16%2BX73Vw7nqUJ76z5W%2FsuIjakeFL%2FWyxo97gtiR92M6nP7AX%2BORZ%2Bi%2FcatQ3nVfOli%2FaNcc82WTps3eZd8MHtHiJ5UjWc7yslsdhodpy8sHRYh2zCkxJDDBjqkAd3giZpkxcDlP81faB5h3FsaY62o9xR9JVGjBmjsabg23dtsXFkmcGy2MLYesXE%2BxgI3zdbLH5yiv4R1%2BaNKa2HaYPS1t57p41LrAKj1UEB0ZReZAl6NwK0oBlzzc1NfiJzDzFc1%2BthtHCi%2FXgAbe0JD%2FzWHMdmBjLE8%2B0lYC6XbyLTcdJ6X8Ac91KXw8ppirznT9zklzMehxt1cjbnFakSbqfmu&X-Amz-Signature=5d622ce3487b56699080b8f9d72c206402b6d08772e87a7f36adcd5dccb7935f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
