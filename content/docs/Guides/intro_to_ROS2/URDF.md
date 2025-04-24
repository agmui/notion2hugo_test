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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRA2QBX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrNv4xgfxve95T5QYlz0vSMLZGRwCfX4uuWmyNy72p%2FQIgXQ3v5PFnN9nH0NkDpFMItQZ%2FLdAxKCTLHiN2ZtO9qfoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPtdJ54vEIJTKPm8hircA4j9BOwD33EbyJdPU%2BiXiKeZlxNqevD1OaqK%2BVkLogQFQPJcohV5TKWHQX3fM8xCb8qeNt6jN3RE2GtzAGfuek52CrKeu%2BF%2FKSINyq5pd8zHUhS66cboZXsI7HGvmQvm2uqctQ1cjC%2Bw8HlVLsDeAMEh%2Fw4KZPg9titktMbvhOlDSvfcMD7LTCu9YZsS1KdgG%2FINPDtTBVnt%2BMqxiKDqVBRGtNneLS5ZnTBzT5jq%2F2w2uiG4GrE6sxeFKGI4ZUfYCbnKn0F4%2FmWnagdzZTCRjUTpIx4RLP2%2FWimkXNplw%2FmKQO10o4GySwGg5m02NO9QsD6EpXSZLQXauYaNfwsvn8IeIltTRptB6%2Bp%2FhpU2vgyxcD3HUiVguiPITI1R6WoFO2ghG6VmL6Mjj9wHfkMyaOiA%2BtjhP7fWa8xsspColQF7tAk5iZppa4ojf9OWXlTpYUUwDwh9mHn%2FSkx%2Bz36yF2lNhvOC8cJtggTrTXl%2F6wr75wYCAvxG6suRqQiVHRFnQ%2BYw6HSKyQkMJ5PEnZmvHgLjLqMQeMz25LKJSJr%2FDqrcZenF2vKSnja6C94QHsUbUqCQ3p9H9chvkeQDf8%2F0g%2FdIml5HOy5XfPeR35FlJPEVHNrt0XLPXcLg36JqMMDVqcAGOqUBdngQm%2BmZzFQo40MqohWSoO%2BwcBMet6PqtHVnRFvnxcXsEqYwC81E8lgQ8pYCHQJE%2FnnvPLxWaxH0HIo%2BpIToeR2M86QrDdRyhMP7VeBfl9gn9I5CqHDNNHE6B1ANBBXSNPLBCUMn4glRw1yEsCK2EHCX%2BCYAszjh1pV2sj0Rq5G4igbjNkW5gR%2BaJ5mkRXYbS15h3Pta1Idh%2FOfQjfUeNefpiua6&X-Amz-Signature=2bb1b0e3066f891a1f1be6c4ebcce3ec8c14436db835832c827a2b79bddbb796&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRA2QBX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrNv4xgfxve95T5QYlz0vSMLZGRwCfX4uuWmyNy72p%2FQIgXQ3v5PFnN9nH0NkDpFMItQZ%2FLdAxKCTLHiN2ZtO9qfoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPtdJ54vEIJTKPm8hircA4j9BOwD33EbyJdPU%2BiXiKeZlxNqevD1OaqK%2BVkLogQFQPJcohV5TKWHQX3fM8xCb8qeNt6jN3RE2GtzAGfuek52CrKeu%2BF%2FKSINyq5pd8zHUhS66cboZXsI7HGvmQvm2uqctQ1cjC%2Bw8HlVLsDeAMEh%2Fw4KZPg9titktMbvhOlDSvfcMD7LTCu9YZsS1KdgG%2FINPDtTBVnt%2BMqxiKDqVBRGtNneLS5ZnTBzT5jq%2F2w2uiG4GrE6sxeFKGI4ZUfYCbnKn0F4%2FmWnagdzZTCRjUTpIx4RLP2%2FWimkXNplw%2FmKQO10o4GySwGg5m02NO9QsD6EpXSZLQXauYaNfwsvn8IeIltTRptB6%2Bp%2FhpU2vgyxcD3HUiVguiPITI1R6WoFO2ghG6VmL6Mjj9wHfkMyaOiA%2BtjhP7fWa8xsspColQF7tAk5iZppa4ojf9OWXlTpYUUwDwh9mHn%2FSkx%2Bz36yF2lNhvOC8cJtggTrTXl%2F6wr75wYCAvxG6suRqQiVHRFnQ%2BYw6HSKyQkMJ5PEnZmvHgLjLqMQeMz25LKJSJr%2FDqrcZenF2vKSnja6C94QHsUbUqCQ3p9H9chvkeQDf8%2F0g%2FdIml5HOy5XfPeR35FlJPEVHNrt0XLPXcLg36JqMMDVqcAGOqUBdngQm%2BmZzFQo40MqohWSoO%2BwcBMet6PqtHVnRFvnxcXsEqYwC81E8lgQ8pYCHQJE%2FnnvPLxWaxH0HIo%2BpIToeR2M86QrDdRyhMP7VeBfl9gn9I5CqHDNNHE6B1ANBBXSNPLBCUMn4glRw1yEsCK2EHCX%2BCYAszjh1pV2sj0Rq5G4igbjNkW5gR%2BaJ5mkRXYbS15h3Pta1Idh%2FOfQjfUeNefpiua6&X-Amz-Signature=4752d606c756518825789081e48a1e301233d516de6cb5c4a74382e346baca92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
