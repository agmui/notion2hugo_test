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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQY5DWFS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTfj8MrDtWPpRjs0eElkXeCk48mD%2FTeJa4z0IP64c4NAIhAORZXjVO6YVEHOsLUbOx%2BYrD0Tr92QKmzMhG%2B4DMpusfKv8DCDwQABoMNjM3NDIzMTgzODA1Igw12xkWJzI4CGa2AEgq3AM9BYkMyCyO6L9r3QWl8dNefDQmIgF9ht9pKjodRw8J3dXJoZQQmWI6cZulrmelzjSHQXZmMi6bSSGwWRQQwYAf8vFKCnKRiPXgVqFKEG9KS8yQ83yn7kKJ5MNpdvM7vva%2FDry5Sygxkx1%2BVQyp%2BbeeSTc%2Fa9zXwIy0%2BCJ3v5bL467hw4KjAt7DqwYyYccBhbJlLvirgfPUINh1RdgZp2DaJ1%2FsNH27ni5Iqfq1x05%2B%2FRIPjtQOtl6ZDxReTTq3tbH9w%2F5sQ2Q4l9Kes8Uj4GzJwgQMp3PtkifkMb7TINdXPkPjCs2uqVI8qxD1JBCQ37rqZcrEuNK8Zuci%2Fxun9d44YAbI6Ri%2FDdulOBItUU6Tm0hCgQ%2FDCwucZluVUH6F5j9XK58ztvqKfWAGc7szph4IgA1MuUm1OGkwszZj8ctxzChNIexks%2FoUD8DUFV3biSyXOQBdEvZabxnRyUbwPmNwL42cAMNVltgSzVJ3P8ADd5j%2BXSDiDf31cNTbyv2VsPeaIamjm5emNyx0jvKscQS777FJ5I6lkqGXJ9odZZyJx081jZ434syN8BPTZOlM8xyLOxUoPap1G0aqENJMRwG29wdx57HyKN%2BacMARXdUIe9NGspl1X9%2B9KJXDpTDGvPy%2FBjqkAShAmsSYaeht%2FSmtOWIW19%2B%2B9RfvY2g7%2BQWqzTkfJZgy1oX1ibFwxqfcAiQRQuNIdrenqFQqr2RUa%2F0XKnHKqusWiWkPEimktWPmei9emJr4mTrFVOBYyHHN1EUBJ2HdK0WvcsioWAMsAlj7bjKi3LMi3f9txoHWlnAaYxKfjZ0JrfQl1t3j%2BneNj%2FyP7l3KQAnm%2BXBq6F9Yq306bM0UaqRl5IUx&X-Amz-Signature=1297384d66093b4f99014352433b035d79990a4820bf3d6c74b44749588b0e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQY5DWFS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTfj8MrDtWPpRjs0eElkXeCk48mD%2FTeJa4z0IP64c4NAIhAORZXjVO6YVEHOsLUbOx%2BYrD0Tr92QKmzMhG%2B4DMpusfKv8DCDwQABoMNjM3NDIzMTgzODA1Igw12xkWJzI4CGa2AEgq3AM9BYkMyCyO6L9r3QWl8dNefDQmIgF9ht9pKjodRw8J3dXJoZQQmWI6cZulrmelzjSHQXZmMi6bSSGwWRQQwYAf8vFKCnKRiPXgVqFKEG9KS8yQ83yn7kKJ5MNpdvM7vva%2FDry5Sygxkx1%2BVQyp%2BbeeSTc%2Fa9zXwIy0%2BCJ3v5bL467hw4KjAt7DqwYyYccBhbJlLvirgfPUINh1RdgZp2DaJ1%2FsNH27ni5Iqfq1x05%2B%2FRIPjtQOtl6ZDxReTTq3tbH9w%2F5sQ2Q4l9Kes8Uj4GzJwgQMp3PtkifkMb7TINdXPkPjCs2uqVI8qxD1JBCQ37rqZcrEuNK8Zuci%2Fxun9d44YAbI6Ri%2FDdulOBItUU6Tm0hCgQ%2FDCwucZluVUH6F5j9XK58ztvqKfWAGc7szph4IgA1MuUm1OGkwszZj8ctxzChNIexks%2FoUD8DUFV3biSyXOQBdEvZabxnRyUbwPmNwL42cAMNVltgSzVJ3P8ADd5j%2BXSDiDf31cNTbyv2VsPeaIamjm5emNyx0jvKscQS777FJ5I6lkqGXJ9odZZyJx081jZ434syN8BPTZOlM8xyLOxUoPap1G0aqENJMRwG29wdx57HyKN%2BacMARXdUIe9NGspl1X9%2B9KJXDpTDGvPy%2FBjqkAShAmsSYaeht%2FSmtOWIW19%2B%2B9RfvY2g7%2BQWqzTkfJZgy1oX1ibFwxqfcAiQRQuNIdrenqFQqr2RUa%2F0XKnHKqusWiWkPEimktWPmei9emJr4mTrFVOBYyHHN1EUBJ2HdK0WvcsioWAMsAlj7bjKi3LMi3f9txoHWlnAaYxKfjZ0JrfQl1t3j%2BneNj%2FyP7l3KQAnm%2BXBq6F9Yq306bM0UaqRl5IUx&X-Amz-Signature=096c3ff18f9cf0c0202680b139efb6340081c0b18d105d00a296fb782acc0c78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
