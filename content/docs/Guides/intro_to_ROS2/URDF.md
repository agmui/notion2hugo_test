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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNYDCY6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2wgn4ZxN1REjiHLHyZiJUj98TUDoZ7UM%2BB9JdZ8CHtgIgaUnwqbl%2FfiLee2S6yzNEZL6CWfoLIIgu8sQWwHrOrloq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLSx%2BlhpiB77fN1r5ircAyEkRoXAZkF79KiAutcSSqZ1zX8aI3l%2Fz15JT7lhvSY%2FOQuY2WnG45YDMd0JD3M32i6Wu1g0HqJ5nLlLCKXIwHrkwJbvGtYJwWIp0uiZPyGotIWXisMxWp3Xe5wZls3par9x4PNrQhSfZO9rO3Pp7w5gmbBiujN2hopT1qnoi1yA11lun2Ma3P4i7qPZW8IyNnJv6TFnBLo4RUphuAHgWi18D8bfILsmI5Kbs4OapLWB%2FMbbKUPCQqzwjSNKgwMMGpk7KNW7X3jAtP1s9nHfJ6hB1zvwIxjRv6dXH4R38YNcTWuU7FhB8EQjPzSFgt6CQy8TmIw6v6PqRW325dSkMwT1xnSZsjQe5KnuQhj8vMC62wWHh1aSeux74KlKLndndFLgh0dsKFNTGFpbirYo8JxlNcD%2FykGW7FogncXcDJwo2JfoXToIgsif9%2Fk%2F1T19hBA5ycKQWh0z%2BefWa3N%2FrRUFPMbNl9gu%2BgS2mL6gkSAAyCKayZwv6FQ4VjlItiigkh7EO8QSdKBV278Sqs0KKveRk3ihAMPzXuUu2KZwe5pHH2CsfmYtAgjjo0qwNiLQHXGw1ut1D0B58juJZ46cwwAI%2B4P222E%2FUBGZv4kCMTaolo8lt0JVAgEdyaOGMMOroMEGOqUBOYa8fSiNc9hClSV%2B6FJsOnFB24Q9t%2B%2BN6PnT7V6b%2BiFDsE0BmCwq2DDxn5S%2BQo83OC8GRRdP%2ByeErwxfLYS4Qef4DlFGnI3TY0ojhGwZKuII4OvQn%2BgrSJ1XdCZB7JcZm8RqQ%2BIP%2FNDC7sICvb0nJ%2FQrkhO8%2BXezNbMS6LKZmPDM7nUp9KDU4dvlGWDM%2FvZIisBy8GLsMrt01rDOlZXpqd0PFPKy&X-Amz-Signature=0766714420b3dd7d748db8ae89b90f7d97596cbceab022c2714893d9a2982512&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNYDCY6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2wgn4ZxN1REjiHLHyZiJUj98TUDoZ7UM%2BB9JdZ8CHtgIgaUnwqbl%2FfiLee2S6yzNEZL6CWfoLIIgu8sQWwHrOrloq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLSx%2BlhpiB77fN1r5ircAyEkRoXAZkF79KiAutcSSqZ1zX8aI3l%2Fz15JT7lhvSY%2FOQuY2WnG45YDMd0JD3M32i6Wu1g0HqJ5nLlLCKXIwHrkwJbvGtYJwWIp0uiZPyGotIWXisMxWp3Xe5wZls3par9x4PNrQhSfZO9rO3Pp7w5gmbBiujN2hopT1qnoi1yA11lun2Ma3P4i7qPZW8IyNnJv6TFnBLo4RUphuAHgWi18D8bfILsmI5Kbs4OapLWB%2FMbbKUPCQqzwjSNKgwMMGpk7KNW7X3jAtP1s9nHfJ6hB1zvwIxjRv6dXH4R38YNcTWuU7FhB8EQjPzSFgt6CQy8TmIw6v6PqRW325dSkMwT1xnSZsjQe5KnuQhj8vMC62wWHh1aSeux74KlKLndndFLgh0dsKFNTGFpbirYo8JxlNcD%2FykGW7FogncXcDJwo2JfoXToIgsif9%2Fk%2F1T19hBA5ycKQWh0z%2BefWa3N%2FrRUFPMbNl9gu%2BgS2mL6gkSAAyCKayZwv6FQ4VjlItiigkh7EO8QSdKBV278Sqs0KKveRk3ihAMPzXuUu2KZwe5pHH2CsfmYtAgjjo0qwNiLQHXGw1ut1D0B58juJZ46cwwAI%2B4P222E%2FUBGZv4kCMTaolo8lt0JVAgEdyaOGMMOroMEGOqUBOYa8fSiNc9hClSV%2B6FJsOnFB24Q9t%2B%2BN6PnT7V6b%2BiFDsE0BmCwq2DDxn5S%2BQo83OC8GRRdP%2ByeErwxfLYS4Qef4DlFGnI3TY0ojhGwZKuII4OvQn%2BgrSJ1XdCZB7JcZm8RqQ%2BIP%2FNDC7sICvb0nJ%2FQrkhO8%2BXezNbMS6LKZmPDM7nUp9KDU4dvlGWDM%2FvZIisBy8GLsMrt01rDOlZXpqd0PFPKy&X-Amz-Signature=f2ca1090aeeb8af6f6fc481aa745075e28cb51a7d078e8cf5b309fc5bae81bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
