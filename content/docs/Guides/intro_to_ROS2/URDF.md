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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W3YEIOW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSsjWAAyW6QXxAcYECxeFUUkVrP2w8p4b%2FS6pOB3MnpAiEAwryI1BdoGEg1MQkimxRjWx0CM6w11%2BX37WFWoDXfSgIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKIbNXlqOx6gwp%2FkPCrcA0JKCBFX0xIKqCN%2Bj%2FYUlZhlqX%2FogUOgE9jX%2F2%2B0lVCqnFY66FNHYSvYdAZ7YFObc1KZvm%2F%2FWCOx%2Fh6NnhJqSUSvGuuVjZCkWqTbjWT%2BDR7aEgDjtAqHwlMLcps%2BJDB%2BePdxeYECIgDd5bIfF5LDsVgJiHZG8OZ%2FYyfVBL8S6KQ4w1CSqSjjtpo2T9v7kHjaNPMllTEO8VjPwO%2FhPxZ3oKhCwHGTF9Qg5gRdoc8nE68vVnKfQDR9Db%2BXgWrQRygCj4O%2FGCuNl3F7FsREkWdABF%2FMngqW9%2F8TU%2FnBcywtlO9UFtFjvi3JD9%2Fi7gsSSv%2BRzL2Su3G4AcEqPLfJQHbyL9Kadr8JQq0OHbyxDqA8v3dGDBiGq7FwhFnfVnPYiAWQDUHLGSpEX4L25HqWFcIWtKWlyv2VW3g%2B0AE5a2xAlstJH8eFoUsttfQ9Gso20kiJ4pJy4eca0Ba5Pc91L%2BECXbYbHLW24f3WLQZIii5HB07m3l1s6q4tfQ4kIWVBzCr2s3FZURpV9rmOVucurerNVkM4L4ZcmH3O%2BTigprOw84w6m39BFY7JUZr0bgFB%2Bs7d5OrdYFKeW8tr83%2FDrVpSra5NTfRBuUnbcdK3T3iyhbkF8GJ6a3I1PXlRG18xMJax5sAGOqUBtrMuc8OlKkVlckVb4Mmn7VcpVZuDs0rYbo5qwskCWjUoX1dDxXbYCkd7%2BMl0o2h58GYT1ClJO5otmBW%2BP%2FpVCygf6tJ98m7c9N%2B0VTdUyJ2WVXIdp1isUOGSa4SgLTohqdgg98t%2F%2FKAHbbWgxfRD7Co%2FEkue8CYjXO9YxCWSsCbGg37aaQEGuyPCfW1t3Ov8f0afxRXbVZwm0C01Qtad0mN48o3G&X-Amz-Signature=a89169ec02cbefbb163e8f730bfc952d6c082c176a25c946590734099698b219&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W3YEIOW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSsjWAAyW6QXxAcYECxeFUUkVrP2w8p4b%2FS6pOB3MnpAiEAwryI1BdoGEg1MQkimxRjWx0CM6w11%2BX37WFWoDXfSgIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKIbNXlqOx6gwp%2FkPCrcA0JKCBFX0xIKqCN%2Bj%2FYUlZhlqX%2FogUOgE9jX%2F2%2B0lVCqnFY66FNHYSvYdAZ7YFObc1KZvm%2F%2FWCOx%2Fh6NnhJqSUSvGuuVjZCkWqTbjWT%2BDR7aEgDjtAqHwlMLcps%2BJDB%2BePdxeYECIgDd5bIfF5LDsVgJiHZG8OZ%2FYyfVBL8S6KQ4w1CSqSjjtpo2T9v7kHjaNPMllTEO8VjPwO%2FhPxZ3oKhCwHGTF9Qg5gRdoc8nE68vVnKfQDR9Db%2BXgWrQRygCj4O%2FGCuNl3F7FsREkWdABF%2FMngqW9%2F8TU%2FnBcywtlO9UFtFjvi3JD9%2Fi7gsSSv%2BRzL2Su3G4AcEqPLfJQHbyL9Kadr8JQq0OHbyxDqA8v3dGDBiGq7FwhFnfVnPYiAWQDUHLGSpEX4L25HqWFcIWtKWlyv2VW3g%2B0AE5a2xAlstJH8eFoUsttfQ9Gso20kiJ4pJy4eca0Ba5Pc91L%2BECXbYbHLW24f3WLQZIii5HB07m3l1s6q4tfQ4kIWVBzCr2s3FZURpV9rmOVucurerNVkM4L4ZcmH3O%2BTigprOw84w6m39BFY7JUZr0bgFB%2Bs7d5OrdYFKeW8tr83%2FDrVpSra5NTfRBuUnbcdK3T3iyhbkF8GJ6a3I1PXlRG18xMJax5sAGOqUBtrMuc8OlKkVlckVb4Mmn7VcpVZuDs0rYbo5qwskCWjUoX1dDxXbYCkd7%2BMl0o2h58GYT1ClJO5otmBW%2BP%2FpVCygf6tJ98m7c9N%2B0VTdUyJ2WVXIdp1isUOGSa4SgLTohqdgg98t%2F%2FKAHbbWgxfRD7Co%2FEkue8CYjXO9YxCWSsCbGg37aaQEGuyPCfW1t3Ov8f0afxRXbVZwm0C01Qtad0mN48o3G&X-Amz-Signature=b365a3cb6db3bc7c40cfe96ed22056574d7e7a6b4fa28d1ca9c4b28a86333702&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
