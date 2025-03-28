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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMX4S7MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQq9gDR4WZTO54xn3QtCVa%2FwefNPfGwJFjH2nVYlr%2FVAIgekyxFuhycBs17U31%2FphtjXT0wmvh342W8BjH7QU2AS0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFPYs2H9kcm2llsRkSrcA0v1R93U7d6Y0nu8SLQHyqAc%2BLVn472kPiV8OAPIALaqR95TbpLlU7dMpyayWIPpYdFfhTglO4qovxU476yv%2Bo833OJzurKCpGgY2L8ybs1mEYGMyINX41LIZHOZhfAOcYUQqVSzXGVGWKloyzV%2Fd4sPPY%2BbJMBbfAdppPMQpZX9BDrwPYuJpmE50t4cLx6y6rNOwXYS%2BwG3YPHr2pnaWhmf7s9iUhUBayE15bjRgsrfl%2FS6xOE%2BY16I%2Fhhv%2F5COHZY6kqTBB2Ddlr%2BG2iv1dqB8WU6fe94lhXSQefhuQupF%2BPCcZ01mjrXuDASYSSqcfBuCrK8D11izKLWcsgdpkA%2Bc8rnQBiK8b48umICWpscWi2VDOlSXSzGke2vO52dSn1SSssku7O6UgpsybBZ0fIVeKOFxj%2BmyD5KV9aih%2BNsa9wlL2r6V2q3pYZUUjm%2FeCBNj6wsLHAPYi7qzgpl%2B0xoLUXN%2FUflVLxojM%2FNItZX8SGSvr0BxYdDN30471Yiv85JgbnWEUrIOYMppoDVEixV1UQF%2B4hIiTYF83cDxxkIqVCucB%2BxOlMgG%2BEg1QsXZq87zTaLfBZ0pO3EL6tsF%2BZ5%2BLberyXRxNq18BNgBoFRBZFEDu2Aj1Dgrbz82MMXMmL8GOqUB0BVXAIHrb41d4hhusgiLaE%2FQTe3WqT8W39tMJ9RvwwZKtJY300MjMLDWA%2FPsymP7JfamS2swjGxn3hhl9290iJVBCzonCT9nw%2BpugpKqq3IgU80TMRfFJM9%2BXHHpIQIadqnh8k2cMQBDG8M6CX0hmJQP8Jr3Eiw1SU4Q4nKRxhel7foRZxlFTXLNFeYLIOZWUFIXNFvcuDpaAtzlg%2Br0uQxYVcXS&X-Amz-Signature=222a036f16ffb98d92d7589f6e655d30b07067426abd529d34fd8a8f59ea604b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMX4S7MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQq9gDR4WZTO54xn3QtCVa%2FwefNPfGwJFjH2nVYlr%2FVAIgekyxFuhycBs17U31%2FphtjXT0wmvh342W8BjH7QU2AS0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFPYs2H9kcm2llsRkSrcA0v1R93U7d6Y0nu8SLQHyqAc%2BLVn472kPiV8OAPIALaqR95TbpLlU7dMpyayWIPpYdFfhTglO4qovxU476yv%2Bo833OJzurKCpGgY2L8ybs1mEYGMyINX41LIZHOZhfAOcYUQqVSzXGVGWKloyzV%2Fd4sPPY%2BbJMBbfAdppPMQpZX9BDrwPYuJpmE50t4cLx6y6rNOwXYS%2BwG3YPHr2pnaWhmf7s9iUhUBayE15bjRgsrfl%2FS6xOE%2BY16I%2Fhhv%2F5COHZY6kqTBB2Ddlr%2BG2iv1dqB8WU6fe94lhXSQefhuQupF%2BPCcZ01mjrXuDASYSSqcfBuCrK8D11izKLWcsgdpkA%2Bc8rnQBiK8b48umICWpscWi2VDOlSXSzGke2vO52dSn1SSssku7O6UgpsybBZ0fIVeKOFxj%2BmyD5KV9aih%2BNsa9wlL2r6V2q3pYZUUjm%2FeCBNj6wsLHAPYi7qzgpl%2B0xoLUXN%2FUflVLxojM%2FNItZX8SGSvr0BxYdDN30471Yiv85JgbnWEUrIOYMppoDVEixV1UQF%2B4hIiTYF83cDxxkIqVCucB%2BxOlMgG%2BEg1QsXZq87zTaLfBZ0pO3EL6tsF%2BZ5%2BLberyXRxNq18BNgBoFRBZFEDu2Aj1Dgrbz82MMXMmL8GOqUB0BVXAIHrb41d4hhusgiLaE%2FQTe3WqT8W39tMJ9RvwwZKtJY300MjMLDWA%2FPsymP7JfamS2swjGxn3hhl9290iJVBCzonCT9nw%2BpugpKqq3IgU80TMRfFJM9%2BXHHpIQIadqnh8k2cMQBDG8M6CX0hmJQP8Jr3Eiw1SU4Q4nKRxhel7foRZxlFTXLNFeYLIOZWUFIXNFvcuDpaAtzlg%2Br0uQxYVcXS&X-Amz-Signature=9047b38b1fd36d43b3e4984eaac3029f6a8ba0fcd4dcfc63d85ddb9beec8b0c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
