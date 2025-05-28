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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSO7IR7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxBbsx2J80aNvKEEYLTl60%2BXjNt9GtVM9xxN%2Fa0EyYiwIgXeemmGk4w55ATI0F58DOesuX6kv3OSi3oHhC9R6E8LEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGPPN4X3m3%2FtC4NikCrcAyXEHjuo4Ciq4J8gnYhMgm3b%2B5vYiYfzTXV85kURcgJn6aphYq2ZjhPV96a1aOb3VRukQc8z%2FX8WIb8o18DJMoEWp8RA2jJ2KUkV8utVNO%2B6QFyIq2VBUBwlxBN%2Fk2qsE9zfwxYXaNLv%2FkAUcZfExNSBoouupR753V10ZQvU8VJg299%2B96G0Bw2wLXQqqq9yfpfOUQf6%2FXUf8n1V8El0fdEouw3N3IAPSbGJO0GpsstCzeNZrkJ1lUCA4TsFBOQHyGIk8K6mfYWlex0eyQcgr2SlRH5BEaNHOciAC0n%2BADtyxH4WmO0XIJdkrFga2qauG2VxWJIq9j0984sRNh4W1fpt9%2FydtKyiiOfPDz9Hbn1fCWcPFC63d6zSN%2BUgO9zxQ9jaTsMjwxeVFlaLU2ZeoOFOvc1xrzrtiQB3aPyf4YQSuKwWQ7gS%2FBPr5LUeWjUJoGJ0DvPfXWHFxAR6KVpVFXVJGJjOy%2BD1jJbRdpCvELd5FcdYzxi4izNSoT1z5UmW1BA6qpdnuU%2BsAaDiZnTm0xsoTFPx9zaUp1eQLhitQzGuOmZpX9Bql7qHUpbv%2Bmq1KPrQlOP0zK1kZrGNwGkv3kEecjufY50KnO9YAiCWkx2AOfYN9WQTKHbkkHOlMOz02sEGOqUBWveNYJx9wx28KgdCx17aa32EQO1oy7U9eAWAeJWxyx14SbSWjL8XWO535qFEbzg1SI0PvhOd6mIhp%2Fn%2FrT8Fo5hyOitjBGAbZWy%2FCo2NFzIOvNDjFg6DQIHaoFiZmoHdnIz9Qdx8TZxVSv9hQSc5fMsg0eqljXmotVvL4TQcoMryXEsHvCO%2Ffzy874pGvKwcJXofdgGFDE5egyKiFdB2w1Wgz3Sz&X-Amz-Signature=2a5cf3e7afc8388f2966952a881219c8fb7e810a1b3ca74a83b534274ace6cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSO7IR7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxBbsx2J80aNvKEEYLTl60%2BXjNt9GtVM9xxN%2Fa0EyYiwIgXeemmGk4w55ATI0F58DOesuX6kv3OSi3oHhC9R6E8LEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGPPN4X3m3%2FtC4NikCrcAyXEHjuo4Ciq4J8gnYhMgm3b%2B5vYiYfzTXV85kURcgJn6aphYq2ZjhPV96a1aOb3VRukQc8z%2FX8WIb8o18DJMoEWp8RA2jJ2KUkV8utVNO%2B6QFyIq2VBUBwlxBN%2Fk2qsE9zfwxYXaNLv%2FkAUcZfExNSBoouupR753V10ZQvU8VJg299%2B96G0Bw2wLXQqqq9yfpfOUQf6%2FXUf8n1V8El0fdEouw3N3IAPSbGJO0GpsstCzeNZrkJ1lUCA4TsFBOQHyGIk8K6mfYWlex0eyQcgr2SlRH5BEaNHOciAC0n%2BADtyxH4WmO0XIJdkrFga2qauG2VxWJIq9j0984sRNh4W1fpt9%2FydtKyiiOfPDz9Hbn1fCWcPFC63d6zSN%2BUgO9zxQ9jaTsMjwxeVFlaLU2ZeoOFOvc1xrzrtiQB3aPyf4YQSuKwWQ7gS%2FBPr5LUeWjUJoGJ0DvPfXWHFxAR6KVpVFXVJGJjOy%2BD1jJbRdpCvELd5FcdYzxi4izNSoT1z5UmW1BA6qpdnuU%2BsAaDiZnTm0xsoTFPx9zaUp1eQLhitQzGuOmZpX9Bql7qHUpbv%2Bmq1KPrQlOP0zK1kZrGNwGkv3kEecjufY50KnO9YAiCWkx2AOfYN9WQTKHbkkHOlMOz02sEGOqUBWveNYJx9wx28KgdCx17aa32EQO1oy7U9eAWAeJWxyx14SbSWjL8XWO535qFEbzg1SI0PvhOd6mIhp%2Fn%2FrT8Fo5hyOitjBGAbZWy%2FCo2NFzIOvNDjFg6DQIHaoFiZmoHdnIz9Qdx8TZxVSv9hQSc5fMsg0eqljXmotVvL4TQcoMryXEsHvCO%2Ffzy874pGvKwcJXofdgGFDE5egyKiFdB2w1Wgz3Sz&X-Amz-Signature=828ac53d71ca5cafd17f511f907176c61a9010165545bbee6366edbd32b28c81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
