---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAUKDVGW%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrC27ww1m9F2W6gHlgjjbqMgIiBt2mMZ8W2nEZyVlHJwIgDoPFO09zBYdcovfggXNlkLvV%2Bnjhrcx1ulXbrHm3UFsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWENeoDPT3EaMKa%2FyrcA4aSRsL%2Fz8bZX%2FfA7zOwgOCNE%2BfJFWbvP%2FsSuiMbSnu4shhRp%2BYdINlPMa1IkzY55gdhjqRok5%2FAvpMNqkRVUWo%2FHvNbyj1P%2FAE4qxRyD8P3Ug7RQHHnciSii6CNeowJUGE6S0C%2FN%2FSUxjUTnfy8WX9j4456fvSRfnWPl%2Blt11TiSYnxB%2FKo3bP6lMTw%2FCsTWh8Nq0fDuEEylK29KFkXkawG8aFk8vt7ruwZ8LakC4otTh%2BRybHOdqeg0Hh6ihagHCaWVIiNeEHbFz5UQwtT%2BBKZU8bpAZJS1InlECTJNVO9r%2B1L7X4XFRbO%2FeVkYKR%2BPZaOlPARKoeeXf9QnH4oQtYYEQSU8LsRyEJX8FmoC07sw4AAoX0Yf3MmQIgCDmTbbmNme53HjG1bodkRXhxmzy%2BrYXPOMhptf%2Bl7nLHSjUE3ShemtIMkleQ4h9zJu7SrIUi4FMS6eZ%2BrZgzPyB4EmZ0v9a%2BWvkgM2iQ5lXdPHdNaZM3wyKNWB4QeUD5zLr0R6EDu8uKsICp9jdS%2BydGw9hJJmjcqxjKX1ugkMw86UYwHjSv9ClJtZHfpE0bQtPaXw%2F%2FmZpDU9hfxrxEYqxtj3j6CEpKqJeF%2BqMVWKKcmUk3%2BTvlDxrMeLGLfRCpIMOrSk9EGOqUB6AmtI4WmWlENjhsTytb%2BMbGLAMNnaWLWvu4wRErBMdFee%2Fv8TLjecnmRW584vWDSkcVCZxUTeoR33reSqUR%2F%2B5g3C36lAToJ7t%2BuNC%2Bu%2Fh%2BvTLfVYRANUaUt607P9%2FUABhagc0C9TfpWibeVxuPa4E%2FicJkLf2JfmsnRGZqexXMVyEfbhWEolIDKWBuez84Mz%2BsXTvKZiUX0WW3%2FKXwwYKy8n656&X-Amz-Signature=e8ec9e693904dfa920ef9bad49c4a3b9612b4be2514d59787a17a736d4bf295f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAUKDVGW%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrC27ww1m9F2W6gHlgjjbqMgIiBt2mMZ8W2nEZyVlHJwIgDoPFO09zBYdcovfggXNlkLvV%2Bnjhrcx1ulXbrHm3UFsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWENeoDPT3EaMKa%2FyrcA4aSRsL%2Fz8bZX%2FfA7zOwgOCNE%2BfJFWbvP%2FsSuiMbSnu4shhRp%2BYdINlPMa1IkzY55gdhjqRok5%2FAvpMNqkRVUWo%2FHvNbyj1P%2FAE4qxRyD8P3Ug7RQHHnciSii6CNeowJUGE6S0C%2FN%2FSUxjUTnfy8WX9j4456fvSRfnWPl%2Blt11TiSYnxB%2FKo3bP6lMTw%2FCsTWh8Nq0fDuEEylK29KFkXkawG8aFk8vt7ruwZ8LakC4otTh%2BRybHOdqeg0Hh6ihagHCaWVIiNeEHbFz5UQwtT%2BBKZU8bpAZJS1InlECTJNVO9r%2B1L7X4XFRbO%2FeVkYKR%2BPZaOlPARKoeeXf9QnH4oQtYYEQSU8LsRyEJX8FmoC07sw4AAoX0Yf3MmQIgCDmTbbmNme53HjG1bodkRXhxmzy%2BrYXPOMhptf%2Bl7nLHSjUE3ShemtIMkleQ4h9zJu7SrIUi4FMS6eZ%2BrZgzPyB4EmZ0v9a%2BWvkgM2iQ5lXdPHdNaZM3wyKNWB4QeUD5zLr0R6EDu8uKsICp9jdS%2BydGw9hJJmjcqxjKX1ugkMw86UYwHjSv9ClJtZHfpE0bQtPaXw%2F%2FmZpDU9hfxrxEYqxtj3j6CEpKqJeF%2BqMVWKKcmUk3%2BTvlDxrMeLGLfRCpIMOrSk9EGOqUB6AmtI4WmWlENjhsTytb%2BMbGLAMNnaWLWvu4wRErBMdFee%2Fv8TLjecnmRW584vWDSkcVCZxUTeoR33reSqUR%2F%2B5g3C36lAToJ7t%2BuNC%2Bu%2Fh%2BvTLfVYRANUaUt607P9%2FUABhagc0C9TfpWibeVxuPa4E%2FicJkLf2JfmsnRGZqexXMVyEfbhWEolIDKWBuez84Mz%2BsXTvKZiUX0WW3%2FKXwwYKy8n656&X-Amz-Signature=a911e890abf4916350bc02291b71e01c69f661efbe24af531cfa3ef596df6302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
