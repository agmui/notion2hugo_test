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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB2H2HC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDn12ra0Rr8Is%2FYwjd2Yw4iWNl00pMOy410XwJnszsOXgIgCjQu3Tu%2FOouk2r6SnefkepKCq%2B492bkyAxKndvc1jlwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO6i4zp9%2BiydbRyaJyrcAyYobyzA%2BtanV0q0JLJCCM7uNrVZrJTPqB9FLDJE%2BP51%2BobTXRfhSy4kSVhfgLKcV2C69uwrZmH4MP0395N9pvMIyS988Ju4P1AkpACiYKs3bfoJ0Vv5ABai%2FjlT%2B%2Fb0GGylHVvOo7UP5LF0M7%2Fw7yaAaEa1mFGoWBN7NI%2B3vXgDF6s7JrWI7i6zb9awryA1bIq8BlhSclwpsmMcTe4uRQ6rsJv0PY0aikUD%2BahbPN6fIO4%2BhfgtwM4OdhhHpItX83YDtqQ3Kg9wo9OsP4Vja9Z%2BgJyNzndCQblVjKK53RYlHpkarEdUp%2FMh84LUf6zahi1CkbtvnPok1FnaT8SpmSerIwgxmZc%2BuUJ%2B%2Fnbb8EtiBDXBD%2FYZ%2BWl2hVSLydeT5CyTDRMUhVQFPkian05mIuua9%2BcE5rcRlxYMQjEmInA%2Fdo%2FxUsPIaXq9C%2BXdbIa0i49Xn47eQVCsTq4a7SI%2B3LqfzBZbKR0Ww%2FwYK%2FbGuCcNMHRvweqTzzr0jpfSGS7Jo9r13XzQ8qaV2pVOoizPxVHbtGebV2injsxRyVvNuAfZ1ARYhznG4laqP%2BR58PVLUmyU7DlJS0MPrXwEYt1kReJ0YsNCfW%2BzsSlHOBK0SY%2FkH%2BpVufPhYhGcxXINMJjpy70GOqUB9EX07%2FdX0%2BHBecHuwXaDKcsbKKsxhiN3ZURVCLTesQQJPWAr684NMe1ZYBNM5LwATe%2B4DLLBNXObvMetpaUJxVafyEbaVkfXuXGbLoV32m74SddMOsCwZkdCvInj%2Ficksj%2BWjeGOlBurUJk%2BHyDHxhT0qsXfQiqQprjtkzrpdQteFEykZKDn%2BPFl%2FXPyTSxGhBk45IHo3SK%2FpZ9PUXVOzOJVkfIT&X-Amz-Signature=a4d1759cf18afda2733f8ecc733c730c0c9b0eb5f45bc1e7bfc529bc50a92092&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB2H2HC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDn12ra0Rr8Is%2FYwjd2Yw4iWNl00pMOy410XwJnszsOXgIgCjQu3Tu%2FOouk2r6SnefkepKCq%2B492bkyAxKndvc1jlwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO6i4zp9%2BiydbRyaJyrcAyYobyzA%2BtanV0q0JLJCCM7uNrVZrJTPqB9FLDJE%2BP51%2BobTXRfhSy4kSVhfgLKcV2C69uwrZmH4MP0395N9pvMIyS988Ju4P1AkpACiYKs3bfoJ0Vv5ABai%2FjlT%2B%2Fb0GGylHVvOo7UP5LF0M7%2Fw7yaAaEa1mFGoWBN7NI%2B3vXgDF6s7JrWI7i6zb9awryA1bIq8BlhSclwpsmMcTe4uRQ6rsJv0PY0aikUD%2BahbPN6fIO4%2BhfgtwM4OdhhHpItX83YDtqQ3Kg9wo9OsP4Vja9Z%2BgJyNzndCQblVjKK53RYlHpkarEdUp%2FMh84LUf6zahi1CkbtvnPok1FnaT8SpmSerIwgxmZc%2BuUJ%2B%2Fnbb8EtiBDXBD%2FYZ%2BWl2hVSLydeT5CyTDRMUhVQFPkian05mIuua9%2BcE5rcRlxYMQjEmInA%2Fdo%2FxUsPIaXq9C%2BXdbIa0i49Xn47eQVCsTq4a7SI%2B3LqfzBZbKR0Ww%2FwYK%2FbGuCcNMHRvweqTzzr0jpfSGS7Jo9r13XzQ8qaV2pVOoizPxVHbtGebV2injsxRyVvNuAfZ1ARYhznG4laqP%2BR58PVLUmyU7DlJS0MPrXwEYt1kReJ0YsNCfW%2BzsSlHOBK0SY%2FkH%2BpVufPhYhGcxXINMJjpy70GOqUB9EX07%2FdX0%2BHBecHuwXaDKcsbKKsxhiN3ZURVCLTesQQJPWAr684NMe1ZYBNM5LwATe%2B4DLLBNXObvMetpaUJxVafyEbaVkfXuXGbLoV32m74SddMOsCwZkdCvInj%2Ficksj%2BWjeGOlBurUJk%2BHyDHxhT0qsXfQiqQprjtkzrpdQteFEykZKDn%2BPFl%2FXPyTSxGhBk45IHo3SK%2FpZ9PUXVOzOJVkfIT&X-Amz-Signature=965ad6ab3e8332e67c7ab6758bea4acc20b263e338f6b352aeae7acc2af9fbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
