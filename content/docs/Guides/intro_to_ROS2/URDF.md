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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5STN6PP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDL7fZqKHCbsCEZZpygs5EuwyZiUnjS%2FpJENvPJNPwJ8wIhAMhOw4l6ObonFMVsGdcV2UtdqcuRUCor6fgXo12yxy7mKv8DCGQQABoMNjM3NDIzMTgzODA1IgwhwkLyh1Mxu%2FMktv4q3ANKl2bkW6DfN1UKqlFDMqO9nUWF8u9%2FJ9JXBvsQEryrTGojGKdGGnALwbKofqh%2BBEruvmmJa9qMCymt3LHaDCpoD4jN5zIR67x7iwVnyQfshmRVZoxUi06nivT5y9%2BElOubxr5hXormE7AYc9WNLUXxmBP86XphSpb5hJ8T%2F%2FEOLI05qJEouTqZ0%2B9GooXU2IyawJ19E0s3VwBohMjAtn34pjhV61IRFyomDUSfcft5T3teZ6JX7BdJYeqbif%2F496GA6DNBX779oNOtcnCo9y5Q4JPZizaJLLgJtblozPyfYYPZB9VtcPV2MuCXqgJPLrpD7%2FvFgsPKPAjFMNE2lJpB3TtTLZ6hGt1zMbwh2GRoypF3NiljgOr%2B8xAwcIqqM8Sd6CtGWV5INFepXlMHdQIOUXDekcOKb1y00KO5Lqa%2BGVrgoJhiPCrZ3khO2rDOvbd4t9A40OrtQyI6TmMyNTzZG5cJ1ZKgxgFrRLNEaZVW1kIxG%2Bcj0OguFD%2FdopVOtL%2F6bQWtKQ9kcew5zowO3S66JD8GI80WM8u4ffBAES5Rbl04fVoNKxTEdHEZIVZ6DDB2q%2BRNG2U4BLMP%2BkWB%2FQijDhRob7Vs5aFkk4LaY%2BV6%2BBHEOmDA8M3v5dhZJzCY4N%2FDBjqkARcbSwK5fzx6hGux7pxKMVd%2FS9OYTD%2FnQOHnEo7tCYv3eFCLkcdPL6vCqLKr2YK4oI%2BQj3xThKOIQcaLLBzQ6VaPYPaebnxYHY%2FGIPOljn%2BMH1IXjKTT%2FPKAOD99gJD8lozqC9XFiwPwanrTpAJfzizV%2BB8hZ6jftJ3u3org7XLYMKeasJ88N3H05ccXDMqq3PE2LzE8le%2FZ93mgUhRGX8MuEnCV&X-Amz-Signature=2eec2157e1c612264ee1b34332a7eb23c00597a057f86d2afacb516d8d4933e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5STN6PP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDL7fZqKHCbsCEZZpygs5EuwyZiUnjS%2FpJENvPJNPwJ8wIhAMhOw4l6ObonFMVsGdcV2UtdqcuRUCor6fgXo12yxy7mKv8DCGQQABoMNjM3NDIzMTgzODA1IgwhwkLyh1Mxu%2FMktv4q3ANKl2bkW6DfN1UKqlFDMqO9nUWF8u9%2FJ9JXBvsQEryrTGojGKdGGnALwbKofqh%2BBEruvmmJa9qMCymt3LHaDCpoD4jN5zIR67x7iwVnyQfshmRVZoxUi06nivT5y9%2BElOubxr5hXormE7AYc9WNLUXxmBP86XphSpb5hJ8T%2F%2FEOLI05qJEouTqZ0%2B9GooXU2IyawJ19E0s3VwBohMjAtn34pjhV61IRFyomDUSfcft5T3teZ6JX7BdJYeqbif%2F496GA6DNBX779oNOtcnCo9y5Q4JPZizaJLLgJtblozPyfYYPZB9VtcPV2MuCXqgJPLrpD7%2FvFgsPKPAjFMNE2lJpB3TtTLZ6hGt1zMbwh2GRoypF3NiljgOr%2B8xAwcIqqM8Sd6CtGWV5INFepXlMHdQIOUXDekcOKb1y00KO5Lqa%2BGVrgoJhiPCrZ3khO2rDOvbd4t9A40OrtQyI6TmMyNTzZG5cJ1ZKgxgFrRLNEaZVW1kIxG%2Bcj0OguFD%2FdopVOtL%2F6bQWtKQ9kcew5zowO3S66JD8GI80WM8u4ffBAES5Rbl04fVoNKxTEdHEZIVZ6DDB2q%2BRNG2U4BLMP%2BkWB%2FQijDhRob7Vs5aFkk4LaY%2BV6%2BBHEOmDA8M3v5dhZJzCY4N%2FDBjqkARcbSwK5fzx6hGux7pxKMVd%2FS9OYTD%2FnQOHnEo7tCYv3eFCLkcdPL6vCqLKr2YK4oI%2BQj3xThKOIQcaLLBzQ6VaPYPaebnxYHY%2FGIPOljn%2BMH1IXjKTT%2FPKAOD99gJD8lozqC9XFiwPwanrTpAJfzizV%2BB8hZ6jftJ3u3org7XLYMKeasJ88N3H05ccXDMqq3PE2LzE8le%2FZ93mgUhRGX8MuEnCV&X-Amz-Signature=2e2ff3522ad351a25b5a98cf3772592ce1f66445c14b07cae555e872497021d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
