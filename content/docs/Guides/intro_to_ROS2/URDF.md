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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R2TAXEM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7QaWGXtWrA3IfctKErzUKYW11VJqH1X42oHpp2IlG8AIgcri2%2BMYXBp6Ui9uV3DY7YwnWZZYPkw7ZYe8iHb3DcLsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPart5eSPBAj5wbpQircA%2FezFlZxCuQc4LxgQzdBuilBrxGbN14fKBCyo7I%2BKljaimHXqhCjR8Ubot5tSzzcvfl0Uf4mAIib3VLlmW2h%2FDTBNz%2FDaGQg8N99al0pQqBNASLPGfmQ1efr2cQeGkHmh%2BzH%2BLP%2FAqm2GNgzU2nycCluRPA2xc12995ffoDLbGZlgbQ3AM9UXBQd8K9js%2BlpzdyTXChmUXTw8YkMRJcgrzHwybBDYv7oI4RUeEorEYZ%2BoU1UhcoOau795zCEtzZljfKbId%2FsZtMK1Jz6vLNcmipwDLklCMZYZeLOtu61ra%2Bcl7OI9zHkR7mTE9C9c%2Bt%2BOlxmytjVHxLI7I%2Bp6xEvFWaeZLvD5aykAGFu4e9m0pJRBmvt8ZEm2AQuRDVF8nx1H5CaKkenwgfbdh64fUP4AwTslzC%2FXSU942Sa3wM14fvolpSAS5DbwLaC08Rp4M8qg8Qf7M87GpJrQckmetliZOt3JIlQpdTL59hxlgoQw9fahARVl9WjpIHIF6Pt5wwshAq7bWFm1Zc%2F%2FuIaShOUw%2B9AZMSb5KDd27idYJjjdFyzZz7q0Tz0yYanPPqrLnenaKGLrapLp0P7jHiiFN3IN5Lj5SAaP0nYV7J7jncLtYkdp2fJ%2Fa0ttmP%2BvRWzMOfikcQGOqUBwH12xacJl62Boy5jg0h5eUNbrndhn2Yu1w4k5gKX%2Fv8jSW%2Fwi%2FwcR09GJzO9zNxWLp27jsFr0wMcEkA5GuYdhaEedwIWsQWGtnveMSa5GpApouYFBIGnnPWVImxARPUODallFCzu2hVMNcK%2BWMqYXRBVCnYz8ys%2BuZt64jXTA0jiWFaMJfe80ynJflcA3HU6gbDuiE7c7pcxaJDrMKBalTwvuVfI&X-Amz-Signature=c02b83d8ebbd4b7e04ca22d4ed93ea6331262b43f9ed08e7620048b85dd90d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R2TAXEM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7QaWGXtWrA3IfctKErzUKYW11VJqH1X42oHpp2IlG8AIgcri2%2BMYXBp6Ui9uV3DY7YwnWZZYPkw7ZYe8iHb3DcLsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPart5eSPBAj5wbpQircA%2FezFlZxCuQc4LxgQzdBuilBrxGbN14fKBCyo7I%2BKljaimHXqhCjR8Ubot5tSzzcvfl0Uf4mAIib3VLlmW2h%2FDTBNz%2FDaGQg8N99al0pQqBNASLPGfmQ1efr2cQeGkHmh%2BzH%2BLP%2FAqm2GNgzU2nycCluRPA2xc12995ffoDLbGZlgbQ3AM9UXBQd8K9js%2BlpzdyTXChmUXTw8YkMRJcgrzHwybBDYv7oI4RUeEorEYZ%2BoU1UhcoOau795zCEtzZljfKbId%2FsZtMK1Jz6vLNcmipwDLklCMZYZeLOtu61ra%2Bcl7OI9zHkR7mTE9C9c%2Bt%2BOlxmytjVHxLI7I%2Bp6xEvFWaeZLvD5aykAGFu4e9m0pJRBmvt8ZEm2AQuRDVF8nx1H5CaKkenwgfbdh64fUP4AwTslzC%2FXSU942Sa3wM14fvolpSAS5DbwLaC08Rp4M8qg8Qf7M87GpJrQckmetliZOt3JIlQpdTL59hxlgoQw9fahARVl9WjpIHIF6Pt5wwshAq7bWFm1Zc%2F%2FuIaShOUw%2B9AZMSb5KDd27idYJjjdFyzZz7q0Tz0yYanPPqrLnenaKGLrapLp0P7jHiiFN3IN5Lj5SAaP0nYV7J7jncLtYkdp2fJ%2Fa0ttmP%2BvRWzMOfikcQGOqUBwH12xacJl62Boy5jg0h5eUNbrndhn2Yu1w4k5gKX%2Fv8jSW%2Fwi%2FwcR09GJzO9zNxWLp27jsFr0wMcEkA5GuYdhaEedwIWsQWGtnveMSa5GpApouYFBIGnnPWVImxARPUODallFCzu2hVMNcK%2BWMqYXRBVCnYz8ys%2BuZt64jXTA0jiWFaMJfe80ynJflcA3HU6gbDuiE7c7pcxaJDrMKBalTwvuVfI&X-Amz-Signature=2d388b1a3dcd00010b3bbb7337d9025dd961cdebca26eaa68438d0943b7f269e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
