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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXRPQCQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD58H5t4JzjGToN3pcYPv4Dia0moScxJHYc212zsSsO5gIhAMMOPZcoe9QuwiuQq9pqrWLpofvrD12ZtOUk2sXYPx8mKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS64%2BpYc%2FN3d08YCsq3AOa5tlG9zQxdWQgLKgU5pDJveiFhsmiwZaNhd%2ByyxD43dQ%2BNcORbHbQiama0DtAlc%2BUWiswHMj3twXX6x5eUteEl%2FGTjQz3AbC2zeRY0PbQB7vstfLp3sV7gws%2BOB5ujgBm7lGOGlGlGfGCONPFjJyMgWI1z4P8O7hA2s0UG8fJu3Fni%2FopwytZBxf1mdW2wLYBoq7FhxS5fgDMkhkStAFh4Y5Nkmw3cMOhL79ORAzaqaPQ4ZW%2BbXv%2FKeRDD%2B%2BoTbm4K2P2rmnIPliFM90T1%2BFplAybIg80ZqQ%2BZ6x0R7qtWt14uK9cI7qnhBc9CSXN5V3JrO7I58D8R9A4mT%2FGsa7IE%2BCzk7OmRrBOz3bFfqPlrJCcVtgGMiFKj1lj48LebnBggttjp3wXBzGLs%2BVfUpU0WcCB4MKOBjeOQI6th3ZKOnJxSCRalv90PHJjVi6AHx3n30llG2LIQgwjd6LYseQ%2Fgd10nFTXflEVyb2sKfD26nXXKVExpa6hYJpn8vmdLs4uZrWlT39OiSTaa3g8jgZjJ8iom9FNer5kU44FHOeGRDxlrkILGAwPR3ccpDcVOreZUKRF28CtVzU2bCRTEIScj5WqbxJjQWmBImZSBHscHoSFgeZb%2ByJazxWb%2BTD0x%2BHCBjqkAe2vbuxZ6o83orC58qQpnSoMIWBfNsUoy7z46jIuc4eJvecVurckmjrIOpJTGJWY7P0vA5Ig5v8yL3W3D7oaEihthUOx9O7RaZzKcx2dnJ7N2OisLwm7iJAgQ1QNiftfRLpjD4Ub1jiQ74k2Cp3jCoSVDPk%2BSpW0K%2BZeE4E4WetlleV3SE3zx6WjV7TVZNvQW1MOylpIQGoJ3uq4FooiKBdgXGwl&X-Amz-Signature=ea47da76a0222b17dee456c88fc66fa3b82925edb7889b34735f692005e0b0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXRPQCQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD58H5t4JzjGToN3pcYPv4Dia0moScxJHYc212zsSsO5gIhAMMOPZcoe9QuwiuQq9pqrWLpofvrD12ZtOUk2sXYPx8mKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS64%2BpYc%2FN3d08YCsq3AOa5tlG9zQxdWQgLKgU5pDJveiFhsmiwZaNhd%2ByyxD43dQ%2BNcORbHbQiama0DtAlc%2BUWiswHMj3twXX6x5eUteEl%2FGTjQz3AbC2zeRY0PbQB7vstfLp3sV7gws%2BOB5ujgBm7lGOGlGlGfGCONPFjJyMgWI1z4P8O7hA2s0UG8fJu3Fni%2FopwytZBxf1mdW2wLYBoq7FhxS5fgDMkhkStAFh4Y5Nkmw3cMOhL79ORAzaqaPQ4ZW%2BbXv%2FKeRDD%2B%2BoTbm4K2P2rmnIPliFM90T1%2BFplAybIg80ZqQ%2BZ6x0R7qtWt14uK9cI7qnhBc9CSXN5V3JrO7I58D8R9A4mT%2FGsa7IE%2BCzk7OmRrBOz3bFfqPlrJCcVtgGMiFKj1lj48LebnBggttjp3wXBzGLs%2BVfUpU0WcCB4MKOBjeOQI6th3ZKOnJxSCRalv90PHJjVi6AHx3n30llG2LIQgwjd6LYseQ%2Fgd10nFTXflEVyb2sKfD26nXXKVExpa6hYJpn8vmdLs4uZrWlT39OiSTaa3g8jgZjJ8iom9FNer5kU44FHOeGRDxlrkILGAwPR3ccpDcVOreZUKRF28CtVzU2bCRTEIScj5WqbxJjQWmBImZSBHscHoSFgeZb%2ByJazxWb%2BTD0x%2BHCBjqkAe2vbuxZ6o83orC58qQpnSoMIWBfNsUoy7z46jIuc4eJvecVurckmjrIOpJTGJWY7P0vA5Ig5v8yL3W3D7oaEihthUOx9O7RaZzKcx2dnJ7N2OisLwm7iJAgQ1QNiftfRLpjD4Ub1jiQ74k2Cp3jCoSVDPk%2BSpW0K%2BZeE4E4WetlleV3SE3zx6WjV7TVZNvQW1MOylpIQGoJ3uq4FooiKBdgXGwl&X-Amz-Signature=83d8b4255c59ab0e5fe1125252e1414ae2dfbf6980f15c742376ce4080b7ba5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
