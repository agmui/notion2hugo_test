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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOZG3OL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCfAv0nVxylMIXK0reNObJaou3omGIEzk2b0viEt8MskAIgSIcG%2B85S3rlzh%2F2TGEOaeBfb6BxwjkVlCHNVdSUnBIsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMJxKgfa8DJo1bmzyrcA2UL%2B5jTCPhcPZD%2BrchR9Kp7EMtJdbTEM5k03%2Fo7zJqiIVUoR6mKzk50DYz2VXvGfuJTSnZay1jkkqf1NlU1ppkv1e3SOvyonWXh52UjmoCi%2FR2FjwNT2NArEdqkVZvSUs2JlPGZXZ6h1smZB0n%2BSYWU4o7urbUlLMhMRuNlng0psuGHVU%2FkqTubGNX18xiYmqLomz%2BFVG0QZdVe%2FhtAGzeMQtYott45UfoNXma6QdvaiO99OVMj5FwnSyMbtcWYj0BdcSoUtuzjLFxcC4TR0jNG74KadgIRm4UsPTwzaj8kGh7OBhAwuARatget6gWt2YXF9PR8PBE6mhW4Psl3SUry4uJDc%2FX0yPb%2FGRxoX4Z3SxL93zNWNL84EBSZdE%2FQNnXpXjz6hxSaWDjeLYmwUFGuQsmLtPRKpIKBQGioWAo%2B4JqJgemHZZilxfdiWTFYEu4VLb%2FMMrqo4C86%2Fe1qfChbK6Mc%2BvvAkX4koa8I6vtMM88Ih47LyAvKVR%2B0EJU0qvNcoNzg98IH7hGLGY6RXpPSpCLtMjd6%2Fw94nKs7uXlnCUzs7cwdYNsGYvDv2SvC59usfAPMdrNHye00QV4qbJnkKhnBFFTq3yzvZGG2M1H5kqgSwUw9naBeaLhgMJS0ocQGOqUBm%2Fa8OeD8XYhxPR5pI3WJjis3vs2rec3TmOeinARTRyhaEIu9E5B%2FwsKXsReAY04TvUreaqAfsat4nqI2qvnA%2BJSkH7rqxJgPr0aZayVeQKFH%2FLjP7SdtdiQLNkQUIEciRBI2wRfEL4f71vzIAxDxT2qxWmnIF8naU5boQn4SFYk%2FsVXI%2F9ZwRTsASVgGbTokWtrFvV4zTaxrZbjKGz6qrOQ47Ldd&X-Amz-Signature=656ee6aa0c9bd5a9f8a0fdb074ad10551e04cb53911e729c438ece5322bb2b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOZG3OL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCfAv0nVxylMIXK0reNObJaou3omGIEzk2b0viEt8MskAIgSIcG%2B85S3rlzh%2F2TGEOaeBfb6BxwjkVlCHNVdSUnBIsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMJxKgfa8DJo1bmzyrcA2UL%2B5jTCPhcPZD%2BrchR9Kp7EMtJdbTEM5k03%2Fo7zJqiIVUoR6mKzk50DYz2VXvGfuJTSnZay1jkkqf1NlU1ppkv1e3SOvyonWXh52UjmoCi%2FR2FjwNT2NArEdqkVZvSUs2JlPGZXZ6h1smZB0n%2BSYWU4o7urbUlLMhMRuNlng0psuGHVU%2FkqTubGNX18xiYmqLomz%2BFVG0QZdVe%2FhtAGzeMQtYott45UfoNXma6QdvaiO99OVMj5FwnSyMbtcWYj0BdcSoUtuzjLFxcC4TR0jNG74KadgIRm4UsPTwzaj8kGh7OBhAwuARatget6gWt2YXF9PR8PBE6mhW4Psl3SUry4uJDc%2FX0yPb%2FGRxoX4Z3SxL93zNWNL84EBSZdE%2FQNnXpXjz6hxSaWDjeLYmwUFGuQsmLtPRKpIKBQGioWAo%2B4JqJgemHZZilxfdiWTFYEu4VLb%2FMMrqo4C86%2Fe1qfChbK6Mc%2BvvAkX4koa8I6vtMM88Ih47LyAvKVR%2B0EJU0qvNcoNzg98IH7hGLGY6RXpPSpCLtMjd6%2Fw94nKs7uXlnCUzs7cwdYNsGYvDv2SvC59usfAPMdrNHye00QV4qbJnkKhnBFFTq3yzvZGG2M1H5kqgSwUw9naBeaLhgMJS0ocQGOqUBm%2Fa8OeD8XYhxPR5pI3WJjis3vs2rec3TmOeinARTRyhaEIu9E5B%2FwsKXsReAY04TvUreaqAfsat4nqI2qvnA%2BJSkH7rqxJgPr0aZayVeQKFH%2FLjP7SdtdiQLNkQUIEciRBI2wRfEL4f71vzIAxDxT2qxWmnIF8naU5boQn4SFYk%2FsVXI%2F9ZwRTsASVgGbTokWtrFvV4zTaxrZbjKGz6qrOQ47Ldd&X-Amz-Signature=f3afa0a6ad25be89efba60f7b1fed678f9cc025e456844cedc19a78fc450d6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
