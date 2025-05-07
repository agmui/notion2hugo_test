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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AWRP2F%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkUJuEJJNp42xaieRF7W2tx50CbjB4T9ZjIYBKyTnqmgIhAMuvJODz02PrLcMtLD4X3r0pqveh7SFP1qwQeJ2hnsBWKv8DCFcQABoMNjM3NDIzMTgzODA1IgxYc3Wz3klBWNl3M4sq3APkyL5jeno4MCh0SCR7yLe3nmbasSpX8Yu3Pjdq8dub%2B2PJH24CtKF2eYlrV0raumnGuyjKqcEqoc82oDBxU8FFz6MIYDFOHjZpDoU8TeVZ9iOVi1sEqsR7B1t6yayr6Ue%2BHrFsAOZ%2Fmq8StyX3U4Af3FlM81%2BaHv5%2BPiiiTFS9N%2Bg5gaLyO3hQB0ZfvI%2BR84GwfMTGFuQIqMLi9Gm299%2FqfHaEhow0LWu0LSJOesSCvjD5VecR1Z3h0bFzizq8P%2FaHgBDKuoxbtxBkeMjXG02PybqaZDbbyCb8CnWLSWLkmJwQB53pIxT3YmO5ee1JI7nX5SjONiJ95yJVPi7UR7EFgGhnsLRd0zkCHNBwGYqk8r%2Bd%2BGiqIq8oOgPb7d0yJgJGpw1iG2RNQz8P2ribwCK82iOggpALdMrE0e7cZgKpUc62oVwbhvzlrHA0EF8OJmrBE4vrmLW7Q2R%2B%2Fs79%2B4G6l5GcLfsOutBJNc%2B0QPzTD6PrluFcC1Xaucv1Ykn7JY7drr6O2vmvi%2FoA%2FYmAaW6k4On6VnO%2FKWoRKMH3%2ByY6tmkR03%2FPO0lvZck6U9dqKlqoyKIFmj6AReRTOFs5uSU8rXFCD0Yap7kxvcNO0vYKxhZxmf4dZ7Y3MikJ5DC98OvABjqkARPjPMdj658CWL37Srv1xUaUuXlvS0yfr1cL499jrMOUptdLdWM8sQbd2Blkdvwji669%2F0w6p0hLjdKQMn9ulkePeVrzudzYCBl5WaAR93xWvpdtmD4KBJntvtcdzw53UWSDm7sVIWJYwq3LkrV8plr5XYikr40ad8SMfHKpeTyw8NNlLNSTb1aOyBC4xHHlyTvaaDbdddWbcqBNwdFnV2C0Wfn4&X-Amz-Signature=fc11187277a7521e8f2614200b78cc1bcc408045cc358d701b4b983a81683b22&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AWRP2F%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkUJuEJJNp42xaieRF7W2tx50CbjB4T9ZjIYBKyTnqmgIhAMuvJODz02PrLcMtLD4X3r0pqveh7SFP1qwQeJ2hnsBWKv8DCFcQABoMNjM3NDIzMTgzODA1IgxYc3Wz3klBWNl3M4sq3APkyL5jeno4MCh0SCR7yLe3nmbasSpX8Yu3Pjdq8dub%2B2PJH24CtKF2eYlrV0raumnGuyjKqcEqoc82oDBxU8FFz6MIYDFOHjZpDoU8TeVZ9iOVi1sEqsR7B1t6yayr6Ue%2BHrFsAOZ%2Fmq8StyX3U4Af3FlM81%2BaHv5%2BPiiiTFS9N%2Bg5gaLyO3hQB0ZfvI%2BR84GwfMTGFuQIqMLi9Gm299%2FqfHaEhow0LWu0LSJOesSCvjD5VecR1Z3h0bFzizq8P%2FaHgBDKuoxbtxBkeMjXG02PybqaZDbbyCb8CnWLSWLkmJwQB53pIxT3YmO5ee1JI7nX5SjONiJ95yJVPi7UR7EFgGhnsLRd0zkCHNBwGYqk8r%2Bd%2BGiqIq8oOgPb7d0yJgJGpw1iG2RNQz8P2ribwCK82iOggpALdMrE0e7cZgKpUc62oVwbhvzlrHA0EF8OJmrBE4vrmLW7Q2R%2B%2Fs79%2B4G6l5GcLfsOutBJNc%2B0QPzTD6PrluFcC1Xaucv1Ykn7JY7drr6O2vmvi%2FoA%2FYmAaW6k4On6VnO%2FKWoRKMH3%2ByY6tmkR03%2FPO0lvZck6U9dqKlqoyKIFmj6AReRTOFs5uSU8rXFCD0Yap7kxvcNO0vYKxhZxmf4dZ7Y3MikJ5DC98OvABjqkARPjPMdj658CWL37Srv1xUaUuXlvS0yfr1cL499jrMOUptdLdWM8sQbd2Blkdvwji669%2F0w6p0hLjdKQMn9ulkePeVrzudzYCBl5WaAR93xWvpdtmD4KBJntvtcdzw53UWSDm7sVIWJYwq3LkrV8plr5XYikr40ad8SMfHKpeTyw8NNlLNSTb1aOyBC4xHHlyTvaaDbdddWbcqBNwdFnV2C0Wfn4&X-Amz-Signature=aac8e096d9f6e3b72d1c9d3217a0bb88b728ec154966536407396293d9bf4ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
