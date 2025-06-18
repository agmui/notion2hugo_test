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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPFWD26%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIVDySyiODMBhJp7lHIKat3gv7POEiTtJvCU5IX03H1AIhAN0jZOyHYdqdSR271wjEJRr%2Bt2cAFo%2Fej%2Bp5DfUuSP56KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0YRxKliL8BsIqF08q3AN877KZbh4hCqCioI8aYtWRaY0V9Ai%2BTAjC%2BmJuVGo0wuzdxKeU8VaAJBzsxTJOkDaGye3m%2FcF6m1npjZOn4cSXYurr2JjuRcprfOVB%2BBYq1uUisKgRsnuUrWO4xpUBPrUoxsIIVI23SU1joCwH7P1QOtBpz1fkud5HMce325OI0B%2FMDHbtxvciM4o1FYWe89a2d1gISQinsLDIX8J6moFV2XV1ZDKwq9DIIRQqmf8aJxLJPAlBF6MfsjeQ35ddwo7VYCy9mUtS3P%2FJ%2BhyOyi91WjdVdevKy86L%2BCJ8WgNwCrkXsYGYcOpq9NbhaK8MnU6Vur5U2s73JVYJzFB%2BOyoKGRuY9m1Q%2Fw2h8iqLm76C%2FaSmAzN8EzV%2FpXiOdJYHqUUqt7cweEiAUL1fI0T7JX8WoWocA7qsWF0ctkT%2FrXbusMfOL1O0I%2BOlb9m9iGjH9XRVhy4B1vk58Ic5A7kQP4NP30LKKWSIIZAFN%2BW0qozU5RRr06OvxiN5J6RVzbbZReEgkvHsytKb7On0E%2FMgM71ThaFzIhxau93OHe18CQ59gBWyUTR6ELKqhCeGcYZjzHxY2zKn08DuNhR4QMv%2B5597GSLvetW4NzwmIfo%2FwPCOGqYQgSuKNTonaSrxFjD6%2B8vCBjqkASP3BCMZTJdZNeOUZFsfLc0QT91kl4S8s%2B8a7mLKNvia6JssZJNhNrP0V9FgX%2BTZpuVt0kBCETGe97MR8OdjNZpWY6hdr6q%2FYLOT9khw0Zpli%2Bcdcgc28KRzFG97F5sjFlm6ITLP1fcsovGkcLSLjtFSX9DK%2FWvU4MxK8ySLTLFGzft3MReSONDLXVwDpoeLZPELhNKZByuVeXJzgtvc2fTFWFFu&X-Amz-Signature=5c4146895385b2290bf4fa99c901325a35857816bd29ff70d64f9d8e8fb3e653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPFWD26%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIVDySyiODMBhJp7lHIKat3gv7POEiTtJvCU5IX03H1AIhAN0jZOyHYdqdSR271wjEJRr%2Bt2cAFo%2Fej%2Bp5DfUuSP56KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0YRxKliL8BsIqF08q3AN877KZbh4hCqCioI8aYtWRaY0V9Ai%2BTAjC%2BmJuVGo0wuzdxKeU8VaAJBzsxTJOkDaGye3m%2FcF6m1npjZOn4cSXYurr2JjuRcprfOVB%2BBYq1uUisKgRsnuUrWO4xpUBPrUoxsIIVI23SU1joCwH7P1QOtBpz1fkud5HMce325OI0B%2FMDHbtxvciM4o1FYWe89a2d1gISQinsLDIX8J6moFV2XV1ZDKwq9DIIRQqmf8aJxLJPAlBF6MfsjeQ35ddwo7VYCy9mUtS3P%2FJ%2BhyOyi91WjdVdevKy86L%2BCJ8WgNwCrkXsYGYcOpq9NbhaK8MnU6Vur5U2s73JVYJzFB%2BOyoKGRuY9m1Q%2Fw2h8iqLm76C%2FaSmAzN8EzV%2FpXiOdJYHqUUqt7cweEiAUL1fI0T7JX8WoWocA7qsWF0ctkT%2FrXbusMfOL1O0I%2BOlb9m9iGjH9XRVhy4B1vk58Ic5A7kQP4NP30LKKWSIIZAFN%2BW0qozU5RRr06OvxiN5J6RVzbbZReEgkvHsytKb7On0E%2FMgM71ThaFzIhxau93OHe18CQ59gBWyUTR6ELKqhCeGcYZjzHxY2zKn08DuNhR4QMv%2B5597GSLvetW4NzwmIfo%2FwPCOGqYQgSuKNTonaSrxFjD6%2B8vCBjqkASP3BCMZTJdZNeOUZFsfLc0QT91kl4S8s%2B8a7mLKNvia6JssZJNhNrP0V9FgX%2BTZpuVt0kBCETGe97MR8OdjNZpWY6hdr6q%2FYLOT9khw0Zpli%2Bcdcgc28KRzFG97F5sjFlm6ITLP1fcsovGkcLSLjtFSX9DK%2FWvU4MxK8ySLTLFGzft3MReSONDLXVwDpoeLZPELhNKZByuVeXJzgtvc2fTFWFFu&X-Amz-Signature=8d99ba57fb6d278a2510a8ddff8111d9e14d3d6b2073fb570f6cf3fd80962f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
