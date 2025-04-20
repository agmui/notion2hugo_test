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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Q5XU25%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEvMZ8olqmT2ll2h0ptBcwj5GcbpM2rrFIRuLmMoI0e9AiADfnrLz2sii27y0cC7BxtxsArGJCO6kSnswLcO%2FjYBqCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGjXMae%2BryDzwICj2KtwDrvZ%2FKThH4fQdtp88xbFUDlMZEqWvJHU715GOqcb9SubbjOY0qlj6dF7QIqJqIwk7KN2cpTnSyOLKE%2FytwBboJz1ENsF62fQt0zeTV8saIconsivmSP4W%2FKUvSBbtunkO7jXBZ1I6o8qxKKEzvEhdMqp0hLS13Go7pwMri4NdcSVxBqlZvRimE%2BJHcNAjhrKwaxZjRtYkVAWLnTaxpJIrcpemCB86C5xI0J%2FKWyusD%2FOTYOECsecWXR7VFfj8DJ2TO5cw98mxPAG2rZDHnHhLXXqBiwWMwdPasSI6rA3XZaGxMD6gCYyq2mqzyVD%2FzB58lEqHiMHgGT5AHkZpnfX1CFZIb7NfIe%2BOOQJdv0kxB7iXvkg9FNWgdo4tH1Z5CVC4YUxCBf8JI9AjR1cNWEsIrQFCGmzld%2BEpz6dlfKepk%2BH3wVp%2BiUd9tKWzQOH3s9Oj%2B%2BtlNmYOMSthGUTztmRyY%2Bq7%2BZXM1xfT3CuYJlPH9Aj0P7dLNqZV8cUWe2JrzpWPIzjpW8AxbLg3ohafOLgq3yX0j8dbyZcpCgDubvo%2FvDhWk%2Bs7oFtMLt51IDGoDgfcZdfAA%2FEY%2FfUa3quVzgI4X%2Bit7Vl2YDx7rMsFNyN5mDx3E%2FSjPIAQCkCx9mkwoOqUwAY6pgG0q7M46OOR7jO8WW2r1Kyg2JEMq4cU%2FB5qBMxHF1zd2QSOBeFMNBfb4WlWlDcVQiIafMzKoBC%2BUZld3fEYxwpsw7LqAQBza1Lvr%2Bgd5IV%2B2%2FjsIn20rGXkvK2FFXHHl%2BTm%2FBUSa0e0cTLL6fuNoITmSwAsqOR%2BPI0zlSwnLvtBPfrxYGEmXUsLlM8oBjf8%2FGcONgjul50MHDqwBtdc1KGFhRt0SDiL&X-Amz-Signature=b121e995398a66f603395f2f094dfc04172c2ead1752ed761185d2de0c296370&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Q5XU25%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEvMZ8olqmT2ll2h0ptBcwj5GcbpM2rrFIRuLmMoI0e9AiADfnrLz2sii27y0cC7BxtxsArGJCO6kSnswLcO%2FjYBqCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGjXMae%2BryDzwICj2KtwDrvZ%2FKThH4fQdtp88xbFUDlMZEqWvJHU715GOqcb9SubbjOY0qlj6dF7QIqJqIwk7KN2cpTnSyOLKE%2FytwBboJz1ENsF62fQt0zeTV8saIconsivmSP4W%2FKUvSBbtunkO7jXBZ1I6o8qxKKEzvEhdMqp0hLS13Go7pwMri4NdcSVxBqlZvRimE%2BJHcNAjhrKwaxZjRtYkVAWLnTaxpJIrcpemCB86C5xI0J%2FKWyusD%2FOTYOECsecWXR7VFfj8DJ2TO5cw98mxPAG2rZDHnHhLXXqBiwWMwdPasSI6rA3XZaGxMD6gCYyq2mqzyVD%2FzB58lEqHiMHgGT5AHkZpnfX1CFZIb7NfIe%2BOOQJdv0kxB7iXvkg9FNWgdo4tH1Z5CVC4YUxCBf8JI9AjR1cNWEsIrQFCGmzld%2BEpz6dlfKepk%2BH3wVp%2BiUd9tKWzQOH3s9Oj%2B%2BtlNmYOMSthGUTztmRyY%2Bq7%2BZXM1xfT3CuYJlPH9Aj0P7dLNqZV8cUWe2JrzpWPIzjpW8AxbLg3ohafOLgq3yX0j8dbyZcpCgDubvo%2FvDhWk%2Bs7oFtMLt51IDGoDgfcZdfAA%2FEY%2FfUa3quVzgI4X%2Bit7Vl2YDx7rMsFNyN5mDx3E%2FSjPIAQCkCx9mkwoOqUwAY6pgG0q7M46OOR7jO8WW2r1Kyg2JEMq4cU%2FB5qBMxHF1zd2QSOBeFMNBfb4WlWlDcVQiIafMzKoBC%2BUZld3fEYxwpsw7LqAQBza1Lvr%2Bgd5IV%2B2%2FjsIn20rGXkvK2FFXHHl%2BTm%2FBUSa0e0cTLL6fuNoITmSwAsqOR%2BPI0zlSwnLvtBPfrxYGEmXUsLlM8oBjf8%2FGcONgjul50MHDqwBtdc1KGFhRt0SDiL&X-Amz-Signature=83d2f4628cdce7888b2a2c91c6feccb8eacc1ee943345af2b266d6a0dfd9238f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
