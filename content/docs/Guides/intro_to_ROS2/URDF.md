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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CGDCGNV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAlE9nx%2Bf269lphOesQOQQzu9f5Xj6Yzs%2BNg4IB4MAacAiEA%2BSkXw3byYflX%2BrSVFKIaD2gCBQi3I6e9mcG3dkiVcV0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgzf5hMmYF5ddfiCCrcA51KXL1LMGZpFWRuC%2BEQhxw%2FoxYxx26dU2L1AslGOm4DTUi9upJtP9oo0iqnp0dKuUJL9cOnVbGxT%2FujTz9ZhFnrY%2Fe%2Ba71xujqYtPkwftZGWYzb1GbND8SZVqxebIZyZXxR7iYIt3ZM00BogN7%2BL3Dv6N6lRLpqZD2R1ZPlBysW5N1RAx0iUepgO1e1SwUAa2aAgGkRVw8e3tU9XRrMtbVbFhqCRtHOSW1bUYe4IajotHa0VDCXT99wg7UW00DfOHgmVDFaLjq7zBQBofztTR4NgZyGPauhl9HEEtCM8aesJpu2r2TmCMgznD7IXmBg8Z19IKRd%2ByjVJEvQN%2FvNUjMRPFZxLItQY01jmxeIBdkae2iT2lKSi%2FvDocGasHUk3s9zOdQc%2Fnp5KD47LaMuh9JCRo9xgN3BxGdXcPI%2BzH49rZdnqIPfXIvGEb0PPLg0WqnHGB4LOumOYhxNe7NB4a4chdFbkSQOksCVS1ymB1m0Bl%2B7ksSYVw%2Bl0euLPuRNiHz5PC4x5Am%2FXW0vy9W%2FrVZe%2BNcrbzS77VN%2Bk2ZI%2BrPsbujpSg0AmccHq6ExwR44TbIKcp%2BRal2xy6fAVGm10Z8h9bxJjbng128bQfosGTTk28nRWvJe7aIYiFhUMKKDy8AGOqUB8GD5CvwoCHj0i0r%2BaAY2JU5IZG5flf%2BBm3%2FekZO%2FOrnLjB7P%2BE8fwLFnCEd9EMFzo8AhEVRu8sF7CzRTQUFRdICYU21%2BOSXmK8fHZ7SqfgRRhTehBvynT3G%2BP9we%2FBgZuxQA9A3NlFpd3xwzZTuAF1C%2Bqia30stxm3ZN8JxbVwqmbmzgTjVaA%2FRlueSLwjRfSu2%2B4nZYFukQHL5XExylkhFzsDfG&X-Amz-Signature=653a0009197fd56d83abcbd06b572adfa7e0c07266bc702cd866cc431e00fcc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CGDCGNV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAlE9nx%2Bf269lphOesQOQQzu9f5Xj6Yzs%2BNg4IB4MAacAiEA%2BSkXw3byYflX%2BrSVFKIaD2gCBQi3I6e9mcG3dkiVcV0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgzf5hMmYF5ddfiCCrcA51KXL1LMGZpFWRuC%2BEQhxw%2FoxYxx26dU2L1AslGOm4DTUi9upJtP9oo0iqnp0dKuUJL9cOnVbGxT%2FujTz9ZhFnrY%2Fe%2Ba71xujqYtPkwftZGWYzb1GbND8SZVqxebIZyZXxR7iYIt3ZM00BogN7%2BL3Dv6N6lRLpqZD2R1ZPlBysW5N1RAx0iUepgO1e1SwUAa2aAgGkRVw8e3tU9XRrMtbVbFhqCRtHOSW1bUYe4IajotHa0VDCXT99wg7UW00DfOHgmVDFaLjq7zBQBofztTR4NgZyGPauhl9HEEtCM8aesJpu2r2TmCMgznD7IXmBg8Z19IKRd%2ByjVJEvQN%2FvNUjMRPFZxLItQY01jmxeIBdkae2iT2lKSi%2FvDocGasHUk3s9zOdQc%2Fnp5KD47LaMuh9JCRo9xgN3BxGdXcPI%2BzH49rZdnqIPfXIvGEb0PPLg0WqnHGB4LOumOYhxNe7NB4a4chdFbkSQOksCVS1ymB1m0Bl%2B7ksSYVw%2Bl0euLPuRNiHz5PC4x5Am%2FXW0vy9W%2FrVZe%2BNcrbzS77VN%2Bk2ZI%2BrPsbujpSg0AmccHq6ExwR44TbIKcp%2BRal2xy6fAVGm10Z8h9bxJjbng128bQfosGTTk28nRWvJe7aIYiFhUMKKDy8AGOqUB8GD5CvwoCHj0i0r%2BaAY2JU5IZG5flf%2BBm3%2FekZO%2FOrnLjB7P%2BE8fwLFnCEd9EMFzo8AhEVRu8sF7CzRTQUFRdICYU21%2BOSXmK8fHZ7SqfgRRhTehBvynT3G%2BP9we%2FBgZuxQA9A3NlFpd3xwzZTuAF1C%2Bqia30stxm3ZN8JxbVwqmbmzgTjVaA%2FRlueSLwjRfSu2%2B4nZYFukQHL5XExylkhFzsDfG&X-Amz-Signature=e671d8fadfc2322cefcb5c280a460f1b14bb8ab42c87902d022c5498c1eecf1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
