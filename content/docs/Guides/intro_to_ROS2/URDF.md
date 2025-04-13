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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKBNTW77%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCDdxUVJFTg1bp%2BXmkIhafdx%2BjvOyhDwBJY8vggv6Mk7gIgGtxF3Zq%2BY3wli30D6PB5sUBh2H%2FGApn9tkPWLAwX2p0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx7r1UnDgdRVsMerCrcA0kuBP%2FNYXEtu7OTQUfXqXb20ZzyPlJ9Li%2FcK6JW5FVeu3FfSfUriWbCRrafPmmBTjSPjbq4TTb6TJ8cHEfbI7LVXjFLiHG5ylvFABQ2geJMIM6MgMAQgTxir1rb1Jc50gDqnosbkeWRNlMC7Fd0D5SPXt2JOJKS0gavDI3PmV2C1Oaa9AoQolKEU5XTeTEjeY4DDL9g3f%2FirwuyjoGYXbZu28kErmL8sT5%2BrQMKQdSt3bf9FssUe30X9kZu3dgn2U%2BwP%2BVtDPKmAQnwwtOL1kR69cAPkYZk9un2ue2wMc46EntWdB2EKWVAUx7mHdWkWyZ3SZaQhLwm1%2BF3jILzdoXC2ffgSpSFbmFj8Ox1CYTW4vce6xuoPm4sTibxP5EMskK5BkAGShZG6YIupZTlXNDzGPRqsAAzZ%2BkaN%2F1WQbJgkb%2FFuOW25%2Bbcq7%2Bue061fmcCrn3WPPScdTeMXSf137LfEFO2UGPax5fQgBPQwnGA9Twy3K7fhoDG3ZvVTeMdJPDi9Zjcrnt07kuff67wZ7dcMvAW0u2s6CW%2FQcKVxvH7HbwDsTYF1z47CHMDeeNl%2BVimQ8eDN9cxi4uJG%2BI%2Fe40UWC28kV5JhLjbicg9aqccImOsd7JKndU1%2F7edMNnh7b8GOqUBVIv%2BFAspDPJlhv9P4cewb1RLZKG6xHDIuUsJyplweOuEiewH8jxKd6bxv1aAXtOhjEtbVdhmPkym0LHycLIf%2F%2FeB4Iwsoj%2BIslDWK9rwPCY7r9SHmIxbgRUTXQePy0erVCCVURKA29S%2FjUPFJtXKW9vXfDevPlXvS7wFLTrlZEX8rODpM9AvvbUtLpRTLZaEBUxSLJuV%2F5ws%2Bd3LF%2Bm%2F8py7W7EE&X-Amz-Signature=60ddcd70ead17c8d0580c7cfe7ad6d4f7c100cc54ce0145e58360827b281c7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKBNTW77%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCDdxUVJFTg1bp%2BXmkIhafdx%2BjvOyhDwBJY8vggv6Mk7gIgGtxF3Zq%2BY3wli30D6PB5sUBh2H%2FGApn9tkPWLAwX2p0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx7r1UnDgdRVsMerCrcA0kuBP%2FNYXEtu7OTQUfXqXb20ZzyPlJ9Li%2FcK6JW5FVeu3FfSfUriWbCRrafPmmBTjSPjbq4TTb6TJ8cHEfbI7LVXjFLiHG5ylvFABQ2geJMIM6MgMAQgTxir1rb1Jc50gDqnosbkeWRNlMC7Fd0D5SPXt2JOJKS0gavDI3PmV2C1Oaa9AoQolKEU5XTeTEjeY4DDL9g3f%2FirwuyjoGYXbZu28kErmL8sT5%2BrQMKQdSt3bf9FssUe30X9kZu3dgn2U%2BwP%2BVtDPKmAQnwwtOL1kR69cAPkYZk9un2ue2wMc46EntWdB2EKWVAUx7mHdWkWyZ3SZaQhLwm1%2BF3jILzdoXC2ffgSpSFbmFj8Ox1CYTW4vce6xuoPm4sTibxP5EMskK5BkAGShZG6YIupZTlXNDzGPRqsAAzZ%2BkaN%2F1WQbJgkb%2FFuOW25%2Bbcq7%2Bue061fmcCrn3WPPScdTeMXSf137LfEFO2UGPax5fQgBPQwnGA9Twy3K7fhoDG3ZvVTeMdJPDi9Zjcrnt07kuff67wZ7dcMvAW0u2s6CW%2FQcKVxvH7HbwDsTYF1z47CHMDeeNl%2BVimQ8eDN9cxi4uJG%2BI%2Fe40UWC28kV5JhLjbicg9aqccImOsd7JKndU1%2F7edMNnh7b8GOqUBVIv%2BFAspDPJlhv9P4cewb1RLZKG6xHDIuUsJyplweOuEiewH8jxKd6bxv1aAXtOhjEtbVdhmPkym0LHycLIf%2F%2FeB4Iwsoj%2BIslDWK9rwPCY7r9SHmIxbgRUTXQePy0erVCCVURKA29S%2FjUPFJtXKW9vXfDevPlXvS7wFLTrlZEX8rODpM9AvvbUtLpRTLZaEBUxSLJuV%2F5ws%2Bd3LF%2Bm%2F8py7W7EE&X-Amz-Signature=3c90503e37a4e774693720e19db327f71ad97bbe6ff427aae111df6a70a4068b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
