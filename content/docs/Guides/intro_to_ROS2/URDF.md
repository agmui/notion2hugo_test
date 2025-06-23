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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BIKXH4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCW%2FNpJwR0irVVhaHKkkruEac%2Bt8QA%2BF9lE%2Bm9iHW3%2FgwIhAOOINienVesia4IZ4PPwY31u07nQJo0R%2Bhh9z9Fq8aEgKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiS%2FeDuZhBX5MPvMAq3AP9pZ0qeI%2BYV%2Bp1OiRGUsFFzMtd220XN%2BVO8eKPxkgkUYxrGd4BP0%2BcRZpP7BXBY8VAAd0iacaJIzCoyUGJjPrNBYpvWKKw531NdZbGAJnzqT%2BODA4kUAk7eOx4ozYEFLeIinjptUA4nAmPUHgL4rFsvhVEYhD8lPSGVfLRtedaS3nMjcsnOH2LJAjgyQ1B5Zqun9kxSezsNB2OPWp1BuM7Aw45G891Iq%2BWuZWtoyUB80LflhUeIanaRdhTXCwZrlzKzkriTb7lDfcMpCOes3pg6udbJlTwPqsDTi9M4dhlBhDStk2cbZaV4Rgdze3DAsEqaIVDf4OnolRZuTyh5IwxqNjrVYLOKV6OhRZrb7wxCtDIW%2Fu5C1tmd6E5ZRisCQxgr5cWjSXFucR3866zbl8cFzEL4cx94nCUoCHUTrxGB6ItF13qIq9%2Bs9QHX4pq9BRBh%2FdZf3JpbSnsn2A11wHMEhx%2BNMjko0Lfwsw1KX3OqeYe45RjUdKNEdfII6H1pPGvRW%2FaxxI1K9696OGSB2xn155JU3STscEP26n7fKQgMEX6%2F7j8E2%2F7T71hbjy%2BvPFr0Lkiyt9QAhFxhLUV6jMSMt95dzjwUSUBOuQEpU0i%2BeEfCxluuyADxJtbHTDFz%2BPCBjqkAa62eUUksX24IuGZ0QDavOUl5ZfxtUvdPmdFXWTZb8p%2FyTZMhzTm7LQux6f%2FYQQs4ZBEcdem7ic82ExlQrZThYrouoYkXobq1mYfLMhAWkxyEFSitwcMuJyAiOfll1p9tsk2kW6TNfFW8Of1sthtOhIBnCB%2FyCS%2F0pWhljN13lUEGVR2wOm2W0UQJQEU6%2Buv9QokMcNMCBOYYLgE3eMMF1DpXvtN&X-Amz-Signature=cae6fc4aadc6daa3c0445c8a212c25dbe3e15efc0e508e1e536650809ce20fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BIKXH4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCW%2FNpJwR0irVVhaHKkkruEac%2Bt8QA%2BF9lE%2Bm9iHW3%2FgwIhAOOINienVesia4IZ4PPwY31u07nQJo0R%2Bhh9z9Fq8aEgKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiS%2FeDuZhBX5MPvMAq3AP9pZ0qeI%2BYV%2Bp1OiRGUsFFzMtd220XN%2BVO8eKPxkgkUYxrGd4BP0%2BcRZpP7BXBY8VAAd0iacaJIzCoyUGJjPrNBYpvWKKw531NdZbGAJnzqT%2BODA4kUAk7eOx4ozYEFLeIinjptUA4nAmPUHgL4rFsvhVEYhD8lPSGVfLRtedaS3nMjcsnOH2LJAjgyQ1B5Zqun9kxSezsNB2OPWp1BuM7Aw45G891Iq%2BWuZWtoyUB80LflhUeIanaRdhTXCwZrlzKzkriTb7lDfcMpCOes3pg6udbJlTwPqsDTi9M4dhlBhDStk2cbZaV4Rgdze3DAsEqaIVDf4OnolRZuTyh5IwxqNjrVYLOKV6OhRZrb7wxCtDIW%2Fu5C1tmd6E5ZRisCQxgr5cWjSXFucR3866zbl8cFzEL4cx94nCUoCHUTrxGB6ItF13qIq9%2Bs9QHX4pq9BRBh%2FdZf3JpbSnsn2A11wHMEhx%2BNMjko0Lfwsw1KX3OqeYe45RjUdKNEdfII6H1pPGvRW%2FaxxI1K9696OGSB2xn155JU3STscEP26n7fKQgMEX6%2F7j8E2%2F7T71hbjy%2BvPFr0Lkiyt9QAhFxhLUV6jMSMt95dzjwUSUBOuQEpU0i%2BeEfCxluuyADxJtbHTDFz%2BPCBjqkAa62eUUksX24IuGZ0QDavOUl5ZfxtUvdPmdFXWTZb8p%2FyTZMhzTm7LQux6f%2FYQQs4ZBEcdem7ic82ExlQrZThYrouoYkXobq1mYfLMhAWkxyEFSitwcMuJyAiOfll1p9tsk2kW6TNfFW8Of1sthtOhIBnCB%2FyCS%2F0pWhljN13lUEGVR2wOm2W0UQJQEU6%2Buv9QokMcNMCBOYYLgE3eMMF1DpXvtN&X-Amz-Signature=4458695d19cc6d144a62e9bb0786d7301f222dae5f3e582aad89a3d833cb9d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
