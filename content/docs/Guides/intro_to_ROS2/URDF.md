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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXH3S5K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCdPc9CYWA22gwE10EhGGc%2Fj41uKU5mFQsmuGJXqcA5RQIhAO6gofLUuiiM2rMnR%2BbW6iYD9v1bmdPhiEEpWlb4MPi%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsCdA%2BPaCyjbcpEeQq3AO6HfZjHPsmvHn%2Bbs%2FfJV7F0e05HLRkqQZtwWFWzNfivIFfrDCtrOEhAOx3SyXtT315gK6%2FH2%2BYvt4IqiTFah%2BmaFA738VxsjRORN6bIm5rBczOv%2Fs9Xqg44%2Bhsh544tGq6es%2FYKvDBz7YsKu6ktL6HicKdcJS3CplUHLIiB7eA5%2FVfBITtLgNvbbW5BTILVRDXcwA7x%2BeWnnX%2BI%2BaSYoPG1aiyBhdbO%2BElKc%2BgY8HsFqJcwh5%2FbKqGQnd%2BOxHXjo9Z6IyfzWVTmjmW8%2BavtujmFb15OvC9l61DbISZriWz5wtXY0Bpeoq47k0LzdhL0p5HpZ2E0ZVZtS05xKqbstZXZ0BF6aensp0wca34Tse9edjMdNlpkz4psZF4ZdadMsyNHecT12cKb5CXurdji8ACOxQv0tywPHvPs7GLTVqzYPIVTrSoXmZWMo5DA4fDLCt7QnU2Dks3v4y6CqR46bWW8yZC%2BRRRc0%2BujJJu5pZZuhzzZlS9cW%2FUn%2BOK8y0RCtpbtXqTXEqh%2FlsH68EujZ8vqQBFOEzxWz7YQ5L%2Bpw6cisfmqaBW6aNogzHyKHTLuOlrcNkoJXzsZjR%2BR3ExI2zeqNu%2BCCevlu8p69UA0n78tkmwebwg7PXhGjVG%2BDClz%2FPBBjqkARwiO2xKMjVTnZsiTJTLJE4H1IJ8z3ioTHAebcrHL3%2BnVNP0b5zscby4QNvaCD%2FZt0Acf88Tq8mRcDRFCUXFgCy7rUwSKVi4DcEXQEWkiGunco2jWJOvD85C3l7myOTxCgGQYLJCbh7RBS8mIhh6ucQ8DQU41mOFNqARnj5D1G%2BHg6148O7vt1zjEzyF1Koyd1P9dVdwx0JDATii6qSlL%2BBOgkMv&X-Amz-Signature=a2ab6ccabc8f5970f63fe660fa24d613abe385d9f78ed7758173f02d1bd2c084&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXH3S5K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCdPc9CYWA22gwE10EhGGc%2Fj41uKU5mFQsmuGJXqcA5RQIhAO6gofLUuiiM2rMnR%2BbW6iYD9v1bmdPhiEEpWlb4MPi%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsCdA%2BPaCyjbcpEeQq3AO6HfZjHPsmvHn%2Bbs%2FfJV7F0e05HLRkqQZtwWFWzNfivIFfrDCtrOEhAOx3SyXtT315gK6%2FH2%2BYvt4IqiTFah%2BmaFA738VxsjRORN6bIm5rBczOv%2Fs9Xqg44%2Bhsh544tGq6es%2FYKvDBz7YsKu6ktL6HicKdcJS3CplUHLIiB7eA5%2FVfBITtLgNvbbW5BTILVRDXcwA7x%2BeWnnX%2BI%2BaSYoPG1aiyBhdbO%2BElKc%2BgY8HsFqJcwh5%2FbKqGQnd%2BOxHXjo9Z6IyfzWVTmjmW8%2BavtujmFb15OvC9l61DbISZriWz5wtXY0Bpeoq47k0LzdhL0p5HpZ2E0ZVZtS05xKqbstZXZ0BF6aensp0wca34Tse9edjMdNlpkz4psZF4ZdadMsyNHecT12cKb5CXurdji8ACOxQv0tywPHvPs7GLTVqzYPIVTrSoXmZWMo5DA4fDLCt7QnU2Dks3v4y6CqR46bWW8yZC%2BRRRc0%2BujJJu5pZZuhzzZlS9cW%2FUn%2BOK8y0RCtpbtXqTXEqh%2FlsH68EujZ8vqQBFOEzxWz7YQ5L%2Bpw6cisfmqaBW6aNogzHyKHTLuOlrcNkoJXzsZjR%2BR3ExI2zeqNu%2BCCevlu8p69UA0n78tkmwebwg7PXhGjVG%2BDClz%2FPBBjqkARwiO2xKMjVTnZsiTJTLJE4H1IJ8z3ioTHAebcrHL3%2BnVNP0b5zscby4QNvaCD%2FZt0Acf88Tq8mRcDRFCUXFgCy7rUwSKVi4DcEXQEWkiGunco2jWJOvD85C3l7myOTxCgGQYLJCbh7RBS8mIhh6ucQ8DQU41mOFNqARnj5D1G%2BHg6148O7vt1zjEzyF1Koyd1P9dVdwx0JDATii6qSlL%2BBOgkMv&X-Amz-Signature=d8cf62b6a0f069a319ec0cb050bd8c13a88fe4702e35213967d8d708575fccc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
