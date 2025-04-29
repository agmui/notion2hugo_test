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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BEMPSUE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSewofyJ0KHUI7hFs5mhMjDsVirU6jYelLPYkeLkDfEAIhAJSV7xc9rGxOp%2FAI5ITZuqx2sYPgk12TOCxyFBu5RWNOKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5u5GnB0YSgCj3Qc4q3AOGeeqMNvNAvfoOLdpMaQ2vRmXYiqp8wdQxhQGiZOnhG1NlTVmWU4d6KHiOQi5BVI3zNLtWDltUiAOAOxcsJmJkxR6bmzicNxjqdXRSHtLOkmtDSgxkTPwoEjZXk2HVoAFzF2%2FpaGa84UVwYmjKCbHrG4COQLYtYfkInK93jwizZGHIPnFdR7vzudxZgjtD7G%2FNBFOnKUR1caISNTuCZ%2BLtN1GGmGoPtQSyy72fwYRLObnT3Hy0Az335sbH93COMLGUdmiyqIL9Gibrhl2VE4qd02qSXK7rZeCMsSP0kXBfUvQ7E6k%2BP6x4Br2e%2B2qvNzsyDKOREK5na0vO2gDUqzdJP1%2FezK5PzC58aw7iwwFhDg4n9hc5S8EfdaLtRU%2B%2Brqvc%2Bn2YtEnWHAWn%2FGatI07Ko%2BC2qHFg%2BgqeY1SSAWtkRtKKOU4CKqxIcM8rCgGltjcfsmzLv0ibQVSAtYSje0faveMzX52R9JryF4DgJn6UV1DWI%2BfuV9Tu7lsmxIY%2FOnoOiftfRjnFaayVhRO1SpKF4oLfevGiI1MTGlaIanWZx3K3sUy%2FA8astuQbCLpVMSwXj%2B15VVvHfP7y4VMkjuN8EGtK3pwxG8ao%2FA0Mv7CVP00AJ6MCmvN9janOCDCkv8DABjqkAWghcm1oPEsx7qZa2hKUMe%2FLXIGBb1mlw9vcwenskpUS%2BbeONZJ%2FnOv5g7KrPBN9lqbO5FfhgViQG5HckfUvPZUPIEm%2F7Gogi3RU0C%2FQVkvkPUxtC2nQfBDin5YBuo6nczDfAJaSU8Ft4kEQIFJ5V7qQi%2Fcpv%2FJ7HGnlz9UEQVz%2FjO3ZAH1doZTCNBMHoAMd%2B9WIhy6WNeYpw%2BIEJYRVDh327xGf&X-Amz-Signature=9facf6ce1a231c81a816754bb1b8fed332f3e15aeb59bf0e71f5e59db4978866&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BEMPSUE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSewofyJ0KHUI7hFs5mhMjDsVirU6jYelLPYkeLkDfEAIhAJSV7xc9rGxOp%2FAI5ITZuqx2sYPgk12TOCxyFBu5RWNOKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5u5GnB0YSgCj3Qc4q3AOGeeqMNvNAvfoOLdpMaQ2vRmXYiqp8wdQxhQGiZOnhG1NlTVmWU4d6KHiOQi5BVI3zNLtWDltUiAOAOxcsJmJkxR6bmzicNxjqdXRSHtLOkmtDSgxkTPwoEjZXk2HVoAFzF2%2FpaGa84UVwYmjKCbHrG4COQLYtYfkInK93jwizZGHIPnFdR7vzudxZgjtD7G%2FNBFOnKUR1caISNTuCZ%2BLtN1GGmGoPtQSyy72fwYRLObnT3Hy0Az335sbH93COMLGUdmiyqIL9Gibrhl2VE4qd02qSXK7rZeCMsSP0kXBfUvQ7E6k%2BP6x4Br2e%2B2qvNzsyDKOREK5na0vO2gDUqzdJP1%2FezK5PzC58aw7iwwFhDg4n9hc5S8EfdaLtRU%2B%2Brqvc%2Bn2YtEnWHAWn%2FGatI07Ko%2BC2qHFg%2BgqeY1SSAWtkRtKKOU4CKqxIcM8rCgGltjcfsmzLv0ibQVSAtYSje0faveMzX52R9JryF4DgJn6UV1DWI%2BfuV9Tu7lsmxIY%2FOnoOiftfRjnFaayVhRO1SpKF4oLfevGiI1MTGlaIanWZx3K3sUy%2FA8astuQbCLpVMSwXj%2B15VVvHfP7y4VMkjuN8EGtK3pwxG8ao%2FA0Mv7CVP00AJ6MCmvN9janOCDCkv8DABjqkAWghcm1oPEsx7qZa2hKUMe%2FLXIGBb1mlw9vcwenskpUS%2BbeONZJ%2FnOv5g7KrPBN9lqbO5FfhgViQG5HckfUvPZUPIEm%2F7Gogi3RU0C%2FQVkvkPUxtC2nQfBDin5YBuo6nczDfAJaSU8Ft4kEQIFJ5V7qQi%2Fcpv%2FJ7HGnlz9UEQVz%2FjO3ZAH1doZTCNBMHoAMd%2B9WIhy6WNeYpw%2BIEJYRVDh327xGf&X-Amz-Signature=26adc38c5215bb87261409d80e4581e200edbc3003066e79fbf307df0b467a13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
