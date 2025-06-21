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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4CJ25G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bn2PA%2B9icJqrwz6qitaGIku6wrHRU7N3nBvFz4vSVDwIhAODVvUgVdM730O%2B%2FftuNgYmq9rYeqR10GIYBh%2FjdBnuDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7%2FNCD0rC1Rf3bB40q3AOBmaoYFZFr73PO0gN%2Fhd0QWP71V0Gel19JQMp8FilTAnvjp%2BLKUp0iuIeDikUTyOPyA94cfLG7uocYkUVareXpNOHVF7B%2BQLEmJRXrMUIWtYHSxyv1aZtdN%2BQfOMG3FJJAp9yPjwasESUT%2BAomZX6k%2BmygZp4jHWZgo0OnQosRVFF%2F5jHxxS84nQ5n%2FC1vgyQlQ0dzwKCqj76yUyZ2BNX9BERlRI5FvXZFm%2B1SWo79CCCNpnieeMcTg9Z%2F14F%2B2GWbRhswg4Bwz%2BnpRjvvxaKarR7TX1fWLjUSeNKSIwlpzPNd%2BbZFYjDDtN12xf1bRRFd1%2BITprQO6XUImp1R4Rngr6uAYHYnNnucBSRU3FhmUkMgCf1EEDK5f2BmcAWObo8yO0Lnceozc5O8MrOtGTCqnbhcSFd%2BnAVVQfzaySpJr6lmddiizFz0%2BTb%2FeNWX5v4jHiQLN8MCY3VCfiLttodEpqn15l6QxtdGMEbQ3vr73Ei8%2FA1bCeLkRBEywiIvMpmp6UivnsODfdLccei%2FImwYvaHpWvXuV7cBvZVfis0PhSLVglLw7nXfeznPeN1GcdJwyV78Pu5Z8qvlFTeOp7gtDVdsZ3EBCA4HrfjK2rcMBksOpwjcHaueNHm%2FuzC41dnCBjqkAX%2FwCPiTFOle0c2EwCFEwcIb7X4h0Ueu4zuRJq1%2BDyyVCXYBK53kZlOqA5O9Rh0IXb6sy3674vt6ARwSUaegxgZU3AVymzW0C6fNnfk4kDrh9UP5tjcpTguRBvXFlzCpMt5WRr%2BtxBPRFzGgy2j4CKrYXm6etlgWgD9all7M%2Bm3anDm4YkLq17StVORMWrPCVaqRX34Yb%2BaErdjivcU8SQ27EiKD&X-Amz-Signature=8573144016b96975c3bef1921c5a4e9bc0d5702b51753a66ece02048603fd911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4CJ25G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bn2PA%2B9icJqrwz6qitaGIku6wrHRU7N3nBvFz4vSVDwIhAODVvUgVdM730O%2B%2FftuNgYmq9rYeqR10GIYBh%2FjdBnuDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7%2FNCD0rC1Rf3bB40q3AOBmaoYFZFr73PO0gN%2Fhd0QWP71V0Gel19JQMp8FilTAnvjp%2BLKUp0iuIeDikUTyOPyA94cfLG7uocYkUVareXpNOHVF7B%2BQLEmJRXrMUIWtYHSxyv1aZtdN%2BQfOMG3FJJAp9yPjwasESUT%2BAomZX6k%2BmygZp4jHWZgo0OnQosRVFF%2F5jHxxS84nQ5n%2FC1vgyQlQ0dzwKCqj76yUyZ2BNX9BERlRI5FvXZFm%2B1SWo79CCCNpnieeMcTg9Z%2F14F%2B2GWbRhswg4Bwz%2BnpRjvvxaKarR7TX1fWLjUSeNKSIwlpzPNd%2BbZFYjDDtN12xf1bRRFd1%2BITprQO6XUImp1R4Rngr6uAYHYnNnucBSRU3FhmUkMgCf1EEDK5f2BmcAWObo8yO0Lnceozc5O8MrOtGTCqnbhcSFd%2BnAVVQfzaySpJr6lmddiizFz0%2BTb%2FeNWX5v4jHiQLN8MCY3VCfiLttodEpqn15l6QxtdGMEbQ3vr73Ei8%2FA1bCeLkRBEywiIvMpmp6UivnsODfdLccei%2FImwYvaHpWvXuV7cBvZVfis0PhSLVglLw7nXfeznPeN1GcdJwyV78Pu5Z8qvlFTeOp7gtDVdsZ3EBCA4HrfjK2rcMBksOpwjcHaueNHm%2FuzC41dnCBjqkAX%2FwCPiTFOle0c2EwCFEwcIb7X4h0Ueu4zuRJq1%2BDyyVCXYBK53kZlOqA5O9Rh0IXb6sy3674vt6ARwSUaegxgZU3AVymzW0C6fNnfk4kDrh9UP5tjcpTguRBvXFlzCpMt5WRr%2BtxBPRFzGgy2j4CKrYXm6etlgWgD9all7M%2Bm3anDm4YkLq17StVORMWrPCVaqRX34Yb%2BaErdjivcU8SQ27EiKD&X-Amz-Signature=42ae7c7e8d511685d581095b1714e0016b062c4a2896f5180fab35fdffa6906e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
