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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TF3EZNF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAEEHbJM291dxH%2BU8xUSxv8X%2FT9uLDmss4%2F6LXEiPJOYAiEAwcKcrw%2FmQxZW86WNNVWXyOuGqcGhEp6Wnzxrx3Vq8O8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiXP4VRALi1SsgZDCrcAzQfZGZoZvQQwKFfpdSKKh2%2BOPrvTMfZ8Ka0yA6hNuAUXy2ItJGyesaJ8mgtdmL34A%2F%2Be8TWBOxBtx89hyimyQGUPyDUfaHY6ePCpnGkMZsG%2BpFXvHNp3v15pJymQV9Om4n74sUCcEGZCkvEZU1QYHADP3qxugn%2BphWV47JvcyOTaiZqXEr%2BFuXv%2F2hmULTRTjAfoXAhFsNm2gDg0pV7%2FUB2ixQWUZHzBikXcjDI3fbaCuqHP5TBK3dZGpGfW9u9jgtsth4CQA0v3%2BPiA29en7UShvovWmKTS%2B0f%2FrU8PXL7BGvtedJ%2Fs7EaKshjZub7uRNJxRfUwdB8lc8aghoQMnebf%2Fo3aoh9GWghyBeQJEN6mqyZSDOAMTXmQOHw1SgIWMbIx6kfY5HpTYJ2faNZOkHTkkzulK1QVyGe1zmWi9KqQsqhPvlcCYkAgoshTL5XFQLUbGSAt%2B%2FkpKG4%2BwO%2BXLTMbVYIA69auS1fARkxVQa6arx%2F9ktEW1%2B4bkdxLAFbT3hIMRjVV%2FMz0jBWCeCt2WI8fDIcnV5dpN3Qeb0Hyj6t2OdEjRZ7Sf4Af7TPGqJqKGcCgLNvZEswGZqqQLSCvE5OkC76D%2FEJOfVBtxCXAsf3WgdE457tKko9EOGfMLHh1r8GOqUBc5axpav4skcFHk7fHpmvkS%2BV9XU%2BWwA%2Fk6gplSdreJl4Ixrw7uFw8T%2FJ0A4BGejnLNGboHjn%2B6uttZJ3fqYF3Kgn1StG%2Fs6etZj9%2FmuMkroAh80q9ag%2F57eG%2BNOKrE0lXmN9Ieu%2F%2FhNErwWgMBup4hes%2Bqe9sd23thJp9yMcR0ckNyS5Mu3ta19TzruadkRLU3oAgNzdb2JFwBQENOKoGk2dBrZR&X-Amz-Signature=2092ff3f15ffb97ce1474035c3a533780da9457f5ebd7ea1887d276715663e46&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TF3EZNF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAEEHbJM291dxH%2BU8xUSxv8X%2FT9uLDmss4%2F6LXEiPJOYAiEAwcKcrw%2FmQxZW86WNNVWXyOuGqcGhEp6Wnzxrx3Vq8O8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiXP4VRALi1SsgZDCrcAzQfZGZoZvQQwKFfpdSKKh2%2BOPrvTMfZ8Ka0yA6hNuAUXy2ItJGyesaJ8mgtdmL34A%2F%2Be8TWBOxBtx89hyimyQGUPyDUfaHY6ePCpnGkMZsG%2BpFXvHNp3v15pJymQV9Om4n74sUCcEGZCkvEZU1QYHADP3qxugn%2BphWV47JvcyOTaiZqXEr%2BFuXv%2F2hmULTRTjAfoXAhFsNm2gDg0pV7%2FUB2ixQWUZHzBikXcjDI3fbaCuqHP5TBK3dZGpGfW9u9jgtsth4CQA0v3%2BPiA29en7UShvovWmKTS%2B0f%2FrU8PXL7BGvtedJ%2Fs7EaKshjZub7uRNJxRfUwdB8lc8aghoQMnebf%2Fo3aoh9GWghyBeQJEN6mqyZSDOAMTXmQOHw1SgIWMbIx6kfY5HpTYJ2faNZOkHTkkzulK1QVyGe1zmWi9KqQsqhPvlcCYkAgoshTL5XFQLUbGSAt%2B%2FkpKG4%2BwO%2BXLTMbVYIA69auS1fARkxVQa6arx%2F9ktEW1%2B4bkdxLAFbT3hIMRjVV%2FMz0jBWCeCt2WI8fDIcnV5dpN3Qeb0Hyj6t2OdEjRZ7Sf4Af7TPGqJqKGcCgLNvZEswGZqqQLSCvE5OkC76D%2FEJOfVBtxCXAsf3WgdE457tKko9EOGfMLHh1r8GOqUBc5axpav4skcFHk7fHpmvkS%2BV9XU%2BWwA%2Fk6gplSdreJl4Ixrw7uFw8T%2FJ0A4BGejnLNGboHjn%2B6uttZJ3fqYF3Kgn1StG%2Fs6etZj9%2FmuMkroAh80q9ag%2F57eG%2BNOKrE0lXmN9Ieu%2F%2FhNErwWgMBup4hes%2Bqe9sd23thJp9yMcR0ckNyS5Mu3ta19TzruadkRLU3oAgNzdb2JFwBQENOKoGk2dBrZR&X-Amz-Signature=a3e53e6cda6382718c52fb6c21fbc8e9ebb411af31325998b5cd34674388852d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
