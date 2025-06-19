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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGDQTSP%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQJoSEMcCLQblRK0me%2F3li5PpopIEQ0Zz1PLi39bYPxAiEAo%2F4y6ZXvuO8e9WZfuAvVzj%2Fj38FlRd9rlQ8Qmuo5BmUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNn8pX13xCO%2BtvDSrcA6xCaw22I%2FtjJs6bcGakF80LzBwdmiGeSqD%2BZtacMnV6Tft0OglQ1MIki69QmlCcZL3049CRMxqyDxwRFPYjuFC3%2FNhCamYIJPCU1ePERJQiXd69sV6CJacr0cWeYFlTN1VPr3VprQM7gQTjC8cgUlotRnsCWAb9dUYyntt4YCt0wfTWACJlrChRWmw9lqgyHNQ9AJAFc9ZbjYPwXrxZ432x6QBIXnfeAEiPAzX2TfUgPrrWVWL%2BBUWN%2B3xR6ysg42xbr%2BLrp1B3qTbrHYKjEt%2BOlX4aGDsQ0z7eQX8YJjBbyV0PCIDP27EJGUG5jWfkCksbSTxtZzSEYBLV9%2B2HfazysVVI9CEghHqlAqLndMbIGMKywSD9%2FOMSLStY5tW19sdFhNRUOBFhC8JpfYQkmf4OTbohapE54K1aG3VbdWJ%2FwyR4Ra%2B3Oad%2BqEt8iIpbUiXYF5utKvxYKeUyZhEVtCccqLh9zPsnViwkEAoJ6zSCvnH8KQEhdwf4kSM%2B6hjNax7uiQk3N8WB0bKJJdo12aWW%2Bhbf4nHgaj4MmR4FA5cTDDYreCxOrqJr%2BMZam279DwkdQo3VV97rW3HnENpI61w%2Brqja03%2FCYFI5HSm5MT6efOjB55PndPVZbMvlMNy10cIGOqUB2u29iiLJQnL%2FgSi8jzmSDzgAirofYA9uqCgiC9W6tf0xEj23EI3x9S7cJu4pss%2BzaHq2cJmLxnQEU8FwECeD4qmaegAxvKlpETZEASGwU1P%2FC9KtWQp%2B19XFouwfQ6g4sYnuopFFhElqmGJBZvoMtAJqY8LC6QaOM9VI7YCI4uH7CsvZ04rD3spm5WFxHrxkaYEzTmhgpkAxCz%2FdIqW6%2Fw8IOQ7t&X-Amz-Signature=9d0c6724d9a21f4fb35a164fcedd4cd8fb8b8cf50aa3f36921d0f2d31c66f117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGDQTSP%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQJoSEMcCLQblRK0me%2F3li5PpopIEQ0Zz1PLi39bYPxAiEAo%2F4y6ZXvuO8e9WZfuAvVzj%2Fj38FlRd9rlQ8Qmuo5BmUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNn8pX13xCO%2BtvDSrcA6xCaw22I%2FtjJs6bcGakF80LzBwdmiGeSqD%2BZtacMnV6Tft0OglQ1MIki69QmlCcZL3049CRMxqyDxwRFPYjuFC3%2FNhCamYIJPCU1ePERJQiXd69sV6CJacr0cWeYFlTN1VPr3VprQM7gQTjC8cgUlotRnsCWAb9dUYyntt4YCt0wfTWACJlrChRWmw9lqgyHNQ9AJAFc9ZbjYPwXrxZ432x6QBIXnfeAEiPAzX2TfUgPrrWVWL%2BBUWN%2B3xR6ysg42xbr%2BLrp1B3qTbrHYKjEt%2BOlX4aGDsQ0z7eQX8YJjBbyV0PCIDP27EJGUG5jWfkCksbSTxtZzSEYBLV9%2B2HfazysVVI9CEghHqlAqLndMbIGMKywSD9%2FOMSLStY5tW19sdFhNRUOBFhC8JpfYQkmf4OTbohapE54K1aG3VbdWJ%2FwyR4Ra%2B3Oad%2BqEt8iIpbUiXYF5utKvxYKeUyZhEVtCccqLh9zPsnViwkEAoJ6zSCvnH8KQEhdwf4kSM%2B6hjNax7uiQk3N8WB0bKJJdo12aWW%2Bhbf4nHgaj4MmR4FA5cTDDYreCxOrqJr%2BMZam279DwkdQo3VV97rW3HnENpI61w%2Brqja03%2FCYFI5HSm5MT6efOjB55PndPVZbMvlMNy10cIGOqUB2u29iiLJQnL%2FgSi8jzmSDzgAirofYA9uqCgiC9W6tf0xEj23EI3x9S7cJu4pss%2BzaHq2cJmLxnQEU8FwECeD4qmaegAxvKlpETZEASGwU1P%2FC9KtWQp%2B19XFouwfQ6g4sYnuopFFhElqmGJBZvoMtAJqY8LC6QaOM9VI7YCI4uH7CsvZ04rD3spm5WFxHrxkaYEzTmhgpkAxCz%2FdIqW6%2Fw8IOQ7t&X-Amz-Signature=f80bf98dd274e185d6072828136a8fe0c8d146bc79c1fcf253b78991d76cec33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
