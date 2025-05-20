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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWRLAWR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADa8mINLYoZUQ2755NvGlEJT3BzMk4aSKv%2By6GSNDRiAiAtc58IK4C%2BpnYaaR2fBHvakGFGqriABvbLuaJTnWDYOiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5yMagGr52k2C%2FzXKtwDVt6QFIJa8tmnNFQZR7pd7WP7i%2BQk1xPopgHMdPTaD71WWIiEJRUYJe6FT4NftJXt8Tfx7BggWLVzaVi%2Fi6r8p6sTVTn5IeJ3fBFA5MeBPkxHVH0N%2FP53Ifvgj6qltpdR8hpjj7JAujDL2EaKQywgnYX9opAjqOBDhuT90kfzo3isj19V9IIUMavub15bcKT%2FlyvDMHkTzv4A3L%2F227joWH9cy1REbHpk9SZm780VCvp07Fn9N88hG01c60xbIoOiJAF2a6fpPH7G0ubH5wnPuKgtkWV1ArGgxruTkNc3yYr97yy8hlrq1%2Fdvt4I%2BEgSllmhTLqmWvLxivYOHG6410naaMXLwNnhkSjByQznS2CM3Ncd6Pz%2F9es67Q1MfUqcfXAUHk8DbsZWpvcsZ0HIbO368XdSj0yFfYA9kllmvy2cVGWZU5NGWF4b6sXEGmzrF9M2Hy01qsvdEn9%2BKqV9oTSK0qAIugEKhbYk0uJowy8zvPMwKXHYElS9u2nLOlm9GlBCaIPcGBeQo740QmOZWDSfQvPF0pFQ718EYH0Rlrh%2BHsdgXCu%2B30fRAs7z3ihQuCW%2F%2B4ekH3D3PAuX0oCG%2BU4JPZvafTYkXGsp79YpWfzVN2MHjx%2Fy8LYgoaeUwj62xwQY6pgEPIQbAz8bJdgBFQaCdmzdLBt8uxGDldc1sIou9XN5VCbe7Y3PNBLzhyzFLdkB5LN0YLggBoVw%2FwDplXif3kFJ6UhTvpmbzY12V%2F%2FnttKjqU5ClQd8%2FyvqZF5Xyr2RVsRtZGX702vsNM3%2BCqnGwT8azzAZhScYpF%2F0Af24%2BpIfMnTxU475fXJSZ6ADyaT8JTmDdSRJ%2BbsN6USS%2FxJ3uodNeYusvgsab&X-Amz-Signature=40c3990cc7112f557910dbfb0a97082e7f51f54b4a467bafb08de24edb08b1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWRLAWR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADa8mINLYoZUQ2755NvGlEJT3BzMk4aSKv%2By6GSNDRiAiAtc58IK4C%2BpnYaaR2fBHvakGFGqriABvbLuaJTnWDYOiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5yMagGr52k2C%2FzXKtwDVt6QFIJa8tmnNFQZR7pd7WP7i%2BQk1xPopgHMdPTaD71WWIiEJRUYJe6FT4NftJXt8Tfx7BggWLVzaVi%2Fi6r8p6sTVTn5IeJ3fBFA5MeBPkxHVH0N%2FP53Ifvgj6qltpdR8hpjj7JAujDL2EaKQywgnYX9opAjqOBDhuT90kfzo3isj19V9IIUMavub15bcKT%2FlyvDMHkTzv4A3L%2F227joWH9cy1REbHpk9SZm780VCvp07Fn9N88hG01c60xbIoOiJAF2a6fpPH7G0ubH5wnPuKgtkWV1ArGgxruTkNc3yYr97yy8hlrq1%2Fdvt4I%2BEgSllmhTLqmWvLxivYOHG6410naaMXLwNnhkSjByQznS2CM3Ncd6Pz%2F9es67Q1MfUqcfXAUHk8DbsZWpvcsZ0HIbO368XdSj0yFfYA9kllmvy2cVGWZU5NGWF4b6sXEGmzrF9M2Hy01qsvdEn9%2BKqV9oTSK0qAIugEKhbYk0uJowy8zvPMwKXHYElS9u2nLOlm9GlBCaIPcGBeQo740QmOZWDSfQvPF0pFQ718EYH0Rlrh%2BHsdgXCu%2B30fRAs7z3ihQuCW%2F%2B4ekH3D3PAuX0oCG%2BU4JPZvafTYkXGsp79YpWfzVN2MHjx%2Fy8LYgoaeUwj62xwQY6pgEPIQbAz8bJdgBFQaCdmzdLBt8uxGDldc1sIou9XN5VCbe7Y3PNBLzhyzFLdkB5LN0YLggBoVw%2FwDplXif3kFJ6UhTvpmbzY12V%2F%2FnttKjqU5ClQd8%2FyvqZF5Xyr2RVsRtZGX702vsNM3%2BCqnGwT8azzAZhScYpF%2F0Af24%2BpIfMnTxU475fXJSZ6ADyaT8JTmDdSRJ%2BbsN6USS%2FxJ3uodNeYusvgsab&X-Amz-Signature=a6dc2ea40cedb658277e6c359acff280267134dfe2f4b45deb26b4ccd724557c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
