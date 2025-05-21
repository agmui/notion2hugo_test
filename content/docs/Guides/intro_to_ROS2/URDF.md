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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRQXP4F%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWQHwqc64abKkNJhg2%2FANmoX3P%2F91QlaVzKTYvWoshPAIgCwp%2FtULHe88vO5E9HXOzn7KtffR1OLNN0Jzl8EIq0S8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbwAz%2Fa7LaZHnQmIyrcAzBsLLiUzQh70s2s7UihfemMZ3%2BPftDhIdwG30oItrmWe6UwOV2JmrKM7NN14tE9jqQ53GFTYu1Pa4WEjWZl5jHHdn0gF7TTd3mMn%2FGyQHrKsZ9WabKiKtBKZSN%2FKT9tQSUDeqTNbd8OPs%2BS5X7BBoPGroLTQDDnRqZ7%2BgFafClHk%2FFqYrumOrm1iLyhZKpeVBClVFvx68u1gWBDHH%2BBjDFB4lJrwFtyOr5Nq9hY4w9J6ZQZa4c6MXVTpk8DLM5oXNTfV6vfZZ4Nqz9T7dfYZAxvzjWuLNC1hR4%2FSyJvQYo%2BpIVFjFCmt64FjXGyzA99fkt1qDO%2B8MqcMFLrkojaONKgUML5ro0TC4I3rtkJyKaF9HewyPHonuG1SHXib9w4rnZ5v0g4vBfw%2BE2819DExTNYskWJdXkvp%2BaO%2FAQnBhDaxY2R%2BgxmabElOSKMP4bvzKnRvTvN5pfYlq6s%2BoXZvecrZ1yi7909kb5d4cZbu6rqNCuj%2BMEWXb2mXPPXG0%2BTsz5dm7BEoC3gUCNoQyQH%2F%2BJ84Qdrrap11yVLoOstYCaYlkkx6hfCAonBd%2BeulikXaGlAimYQt5BHTpMASqH0oEuO6gteE8dVdxp4%2FALBa3VolHjx6Wtoqud59J05MK%2BvtMEGOqUB%2FpIkgqy3b7l055OLk2m6f0D%2Fc4LItfHLpZbtoao5ArxpP93wF6EDyqVEPWmpYjETwTwLxccKuOvcArIAy1o2MM8hz5mn5Ex9EKLDLme03sNrMXI1SRWWVaGjEDiBTgFiKISfCd%2BlZP2xYTdCEURzXgWLJb49t9qL2hYlmMEt2Ejzbo7ZSP1DcDE2eZwpki%2FZb35FTO4B2hL7jaR52Kytqq62B4yQ&X-Amz-Signature=e0b458c2fd51f952fcc20c67b73c1cfa55a6b6f64ecbd4407abf667489ea6986&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRQXP4F%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWQHwqc64abKkNJhg2%2FANmoX3P%2F91QlaVzKTYvWoshPAIgCwp%2FtULHe88vO5E9HXOzn7KtffR1OLNN0Jzl8EIq0S8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbwAz%2Fa7LaZHnQmIyrcAzBsLLiUzQh70s2s7UihfemMZ3%2BPftDhIdwG30oItrmWe6UwOV2JmrKM7NN14tE9jqQ53GFTYu1Pa4WEjWZl5jHHdn0gF7TTd3mMn%2FGyQHrKsZ9WabKiKtBKZSN%2FKT9tQSUDeqTNbd8OPs%2BS5X7BBoPGroLTQDDnRqZ7%2BgFafClHk%2FFqYrumOrm1iLyhZKpeVBClVFvx68u1gWBDHH%2BBjDFB4lJrwFtyOr5Nq9hY4w9J6ZQZa4c6MXVTpk8DLM5oXNTfV6vfZZ4Nqz9T7dfYZAxvzjWuLNC1hR4%2FSyJvQYo%2BpIVFjFCmt64FjXGyzA99fkt1qDO%2B8MqcMFLrkojaONKgUML5ro0TC4I3rtkJyKaF9HewyPHonuG1SHXib9w4rnZ5v0g4vBfw%2BE2819DExTNYskWJdXkvp%2BaO%2FAQnBhDaxY2R%2BgxmabElOSKMP4bvzKnRvTvN5pfYlq6s%2BoXZvecrZ1yi7909kb5d4cZbu6rqNCuj%2BMEWXb2mXPPXG0%2BTsz5dm7BEoC3gUCNoQyQH%2F%2BJ84Qdrrap11yVLoOstYCaYlkkx6hfCAonBd%2BeulikXaGlAimYQt5BHTpMASqH0oEuO6gteE8dVdxp4%2FALBa3VolHjx6Wtoqud59J05MK%2BvtMEGOqUB%2FpIkgqy3b7l055OLk2m6f0D%2Fc4LItfHLpZbtoao5ArxpP93wF6EDyqVEPWmpYjETwTwLxccKuOvcArIAy1o2MM8hz5mn5Ex9EKLDLme03sNrMXI1SRWWVaGjEDiBTgFiKISfCd%2BlZP2xYTdCEURzXgWLJb49t9qL2hYlmMEt2Ejzbo7ZSP1DcDE2eZwpki%2FZb35FTO4B2hL7jaR52Kytqq62B4yQ&X-Amz-Signature=03e09a8f163023edda828ee682d65e0747818e06a7b06ccbcbb90ade4aa29304&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
