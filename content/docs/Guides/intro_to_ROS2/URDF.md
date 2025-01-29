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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGMQWKX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUkXFbFZmgssqZEWY9hxlYNzkNDrXhvIhHrEXG3sbe8AiEA9dCf5GcPV1xEwhsYCeXxaAZElsFw5%2BlwQMKMFChWBmQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0HUai7AX2OA9kJvSrcA36oXiYYcffoNHc2o72l4xecRqBs8AFgmEwPZFOZ%2Fmyn9BrqnCzB23sriJBAzDssupekKGncOFHgvtZBqWOAhu9%2BbNC7DI9UUSMCzzGIOvUu3gui50ZI%2B8lz4rqcHteAI%2F%2BwzULYK9Dxas%2Fu9%2B58ktrsaWLaAjmpcvPch0N16sz7pKNQbC04mwbG%2BCdPriIc%2BbigTTDadoILy0SpwEVRN%2BBJF0857bqshoycaIB%2FBA6maAQ0oUTKzxyUqPHDqSdKKgrqlVDQyn4INg3pOkavJjKdToqfjWTpQiW9NroaYqgBB4EYLiutTDY9BQjRWk0E7qtOQ3diAhYaUqZVKq3RvJXoCvtds2ePSVMs9ozIWpn8TGy0C4sAOmyk8TbZBlsYphTjUd3ezQrCU4JbbYr5FgadSXUuRD8oErmul0vCPKKl0m2VHx2gR8TJ7UEVoRghKJgiU1n4e7Cp553134Lvvg84wXwlSvFIR9RyS%2FSpSQFaUgYvtG387mTh79r%2Fo1j63AwAcCCp5dN%2FryVt7G5iJ5XD6530rnISp%2BtPsGBB%2Bx%2BW3buKMxRh%2BZ%2BLU6KJlQqUIvQik01wkwhjkkeUe7%2Fm2scp7e90pLoIwza3wwFD7k7jblX34bEfcrEHe5j3MI6x6LwGOqUBNUOPmPWQaBPgY5oS4kwWekr65wMO42TbV9u3t%2Fpa3CXT%2BBPfiDYjQP86nclNLl1wSbYJ4Gzs9EBOIM%2FTkP9ufrvHrpIPAIZX5%2FqQ8kTu9wVDhfCTgZh6tfWZGtF8EbLL6ZwaxaaCTSuTzNj%2BF%2FJ6M34stL5wZQt4E7wCv%2BsOAtyRW65aC5mT%2B%2BmYtikJ3ySVRV0BtiWPeYoP%2FSyT1oQynRnTY70z&X-Amz-Signature=2ddf729bf008d73ac84809bea516ce06229cbfc615d4f22379ee03f8dfe18656&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGMQWKX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUkXFbFZmgssqZEWY9hxlYNzkNDrXhvIhHrEXG3sbe8AiEA9dCf5GcPV1xEwhsYCeXxaAZElsFw5%2BlwQMKMFChWBmQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0HUai7AX2OA9kJvSrcA36oXiYYcffoNHc2o72l4xecRqBs8AFgmEwPZFOZ%2Fmyn9BrqnCzB23sriJBAzDssupekKGncOFHgvtZBqWOAhu9%2BbNC7DI9UUSMCzzGIOvUu3gui50ZI%2B8lz4rqcHteAI%2F%2BwzULYK9Dxas%2Fu9%2B58ktrsaWLaAjmpcvPch0N16sz7pKNQbC04mwbG%2BCdPriIc%2BbigTTDadoILy0SpwEVRN%2BBJF0857bqshoycaIB%2FBA6maAQ0oUTKzxyUqPHDqSdKKgrqlVDQyn4INg3pOkavJjKdToqfjWTpQiW9NroaYqgBB4EYLiutTDY9BQjRWk0E7qtOQ3diAhYaUqZVKq3RvJXoCvtds2ePSVMs9ozIWpn8TGy0C4sAOmyk8TbZBlsYphTjUd3ezQrCU4JbbYr5FgadSXUuRD8oErmul0vCPKKl0m2VHx2gR8TJ7UEVoRghKJgiU1n4e7Cp553134Lvvg84wXwlSvFIR9RyS%2FSpSQFaUgYvtG387mTh79r%2Fo1j63AwAcCCp5dN%2FryVt7G5iJ5XD6530rnISp%2BtPsGBB%2Bx%2BW3buKMxRh%2BZ%2BLU6KJlQqUIvQik01wkwhjkkeUe7%2Fm2scp7e90pLoIwza3wwFD7k7jblX34bEfcrEHe5j3MI6x6LwGOqUBNUOPmPWQaBPgY5oS4kwWekr65wMO42TbV9u3t%2Fpa3CXT%2BBPfiDYjQP86nclNLl1wSbYJ4Gzs9EBOIM%2FTkP9ufrvHrpIPAIZX5%2FqQ8kTu9wVDhfCTgZh6tfWZGtF8EbLL6ZwaxaaCTSuTzNj%2BF%2FJ6M34stL5wZQt4E7wCv%2BsOAtyRW65aC5mT%2B%2BmYtikJ3ySVRV0BtiWPeYoP%2FSyT1oQynRnTY70z&X-Amz-Signature=05c95cb1bfa71db58fb4912d9d30a5a70706c16c2c326c43efe4e55cbedd7c84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
