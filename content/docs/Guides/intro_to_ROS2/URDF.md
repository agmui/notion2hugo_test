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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7ASSLZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCeuh%2Fw6eZExpZqdB9dyPgxKxe3yd1t8xadh%2FZ4NLfdxgIhAO60ihP5qFwDGChkMiNFzQN7HF%2FUkGDlEMN1mNrA%2FepeKv8DCE4QABoMNjM3NDIzMTgzODA1Igy9ccd%2FXgnbDQm%2F1JMq3AP9zp5YCQhmByUo6IHCmFm4ZY%2BiTa5U%2FyPChoIbmCYf%2BU%2Bcp0kj%2F4Yq2mHGqlH9dvSsyrJIGQu2rmlQC7ZQcMRDPJ7jLireGdd1SbsnyMxPDxU1voS90VTTKNt9eo7N%2BdnyeGJ2BDKn%2BAeNXLqRJ1SCqcHyzM6pQZDHQceTWRFwkyo539Fd%2FOzl7dqObMm%2FO34uQn90UI2hP57J3%2FnkOKLvyo5HkEutkWu8KKIsQY7IhrhOiAmHo97Fqr9GUA8E8B9zKlmKPr5I5Tk58ybxqqdi8baYyG8R4e3DpI1g%2BA5fgiiCf3%2BdcTrajmT8aElqeOMzBu%2FcdoK2OGT%2B944D79E4Uy2RWVzbXThj092HKRU5p1GyUMdaPDxFu2eFNupCOVVOJLxXCri20nqf7AVhFmfYWxev%2BvXWgFkvv3LYqpLOOiXlpTUk0MtrSb6ZYqnuNbsjX0otN6J1Bo2YAOd%2Btw0zn24l2zOx7fR5sOYN3rJrV38FgkkfH5NlC5mtzDQUeFAwTOyQWuaYbeoY9FFPoVfhyp3cnALdyCyOkKOmhNh7vbUxR%2BEA%2BY538nS2nzaASTU8RG8y1naro5P5w0sJVdlSubvdc0sXRlIlDsQY4mJMr2IVk64ZvB3yTX3qQzC6uvHCBjqkAVJqSd%2B3M6URHnRVo7HXmOLadESJZ%2BbvVp8so%2F%2FOuMdgFhqqsGBlKO3Uo5WPQvEOTxbfNRu1lM1BC8O37U35MMGBF0DEDnmpvsIoR6pqccyBVsW292tyuJg1iOwAL8%2FxFlmoQw4Huyq%2B3IAhqjqxjhWQ7NYas6AkPUBXV0pobxpEF%2FUCYVAsiywWrU%2B8achSPa%2FlZfgCxa%2F1htIrx%2FKnaMLDDCVy&X-Amz-Signature=b87b77b8021ade0e43e362e1f428d9746f67e2c22b3a7755cfbf1d916f6301a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7ASSLZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCeuh%2Fw6eZExpZqdB9dyPgxKxe3yd1t8xadh%2FZ4NLfdxgIhAO60ihP5qFwDGChkMiNFzQN7HF%2FUkGDlEMN1mNrA%2FepeKv8DCE4QABoMNjM3NDIzMTgzODA1Igy9ccd%2FXgnbDQm%2F1JMq3AP9zp5YCQhmByUo6IHCmFm4ZY%2BiTa5U%2FyPChoIbmCYf%2BU%2Bcp0kj%2F4Yq2mHGqlH9dvSsyrJIGQu2rmlQC7ZQcMRDPJ7jLireGdd1SbsnyMxPDxU1voS90VTTKNt9eo7N%2BdnyeGJ2BDKn%2BAeNXLqRJ1SCqcHyzM6pQZDHQceTWRFwkyo539Fd%2FOzl7dqObMm%2FO34uQn90UI2hP57J3%2FnkOKLvyo5HkEutkWu8KKIsQY7IhrhOiAmHo97Fqr9GUA8E8B9zKlmKPr5I5Tk58ybxqqdi8baYyG8R4e3DpI1g%2BA5fgiiCf3%2BdcTrajmT8aElqeOMzBu%2FcdoK2OGT%2B944D79E4Uy2RWVzbXThj092HKRU5p1GyUMdaPDxFu2eFNupCOVVOJLxXCri20nqf7AVhFmfYWxev%2BvXWgFkvv3LYqpLOOiXlpTUk0MtrSb6ZYqnuNbsjX0otN6J1Bo2YAOd%2Btw0zn24l2zOx7fR5sOYN3rJrV38FgkkfH5NlC5mtzDQUeFAwTOyQWuaYbeoY9FFPoVfhyp3cnALdyCyOkKOmhNh7vbUxR%2BEA%2BY538nS2nzaASTU8RG8y1naro5P5w0sJVdlSubvdc0sXRlIlDsQY4mJMr2IVk64ZvB3yTX3qQzC6uvHCBjqkAVJqSd%2B3M6URHnRVo7HXmOLadESJZ%2BbvVp8so%2F%2FOuMdgFhqqsGBlKO3Uo5WPQvEOTxbfNRu1lM1BC8O37U35MMGBF0DEDnmpvsIoR6pqccyBVsW292tyuJg1iOwAL8%2FxFlmoQw4Huyq%2B3IAhqjqxjhWQ7NYas6AkPUBXV0pobxpEF%2FUCYVAsiywWrU%2B8achSPa%2FlZfgCxa%2F1htIrx%2FKnaMLDDCVy&X-Amz-Signature=b6ea456cf890c1002e9137bf7ba4673a53c5d139dc26089dfeec0e19960fef45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
