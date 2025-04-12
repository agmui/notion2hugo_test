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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGL5VNI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD%2BNyGK0BPq9sOv0%2FFtjXkXVVkCAEBjfNyYIqxGw686fgIgMwoTL%2BzrWulrm62M123wtpwkT5IE4Hq50TXIzn58PzQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnDXG%2BbRliwyibZaircA9ToOJydRHeBCkBGeWkj2HMsFepEE2MZep%2BLHp28Ac7yFiclnj8zJY%2FTSmoTgm2QBkVLK4KNLuWa2d0n88V%2ByxLxCDR26uLLVOZXabTwqrr5W%2BzXTyPu4YmUvPUkkur0qe%2FSO7PtHFsd21z1Q%2FxiXNZK6jRJyLK31%2B%2BRCgi8Bw2MAC7D9Wo810cDhVhLK2QYIJhCNbciESL9wCwMS7RHGqhJYMNnHdy5AetwF7qNOibuVHH6xwek1QTQF5WxvcwvNhvOkqbqf55EZQenLKf0U%2F1dArR%2FyS7b9Aw5nN57gVgjkvUJQjpJrsmMFpfVFBs8zEEaSBPiQzWKXgzkeaR9hz5truz6Vl7g9Y3FY2068cyC47dyt02E%2Fzh0h4V2H9%2BzBXjYIQQ4OaG6dgtdnDhCy87wk%2FTMiTXdxLa7obGUXDzxy6yT5sig47vy2Tb6K4nN6RctCyypBZfMvHSyva3Bqiz8MIClXtkA98Ajyl%2BG%2BRqENycT%2FaJHL52xEA0ncIXGDAS%2BpI%2BcFwvzHKYbMK9P6Vqtup%2FfozjVXAkKHUL6l%2F6MXfY1nkRqeOOmq0ATTCqlF9gTGDcuV42qz8BVmol3CLCIS89lLlFCODb2J4uERRQ18ZsIXX%2BB%2Fc%2FFb3aBMOen6L8GOqUB9%2FcQWHOaaXFzXKDomZELslHiyOf2Ji32TB4HdpIOIylNioyG2x6k8ZqUsDACSdEPtGv348bPfAj3V91cN2pUfxWHxyp5%2FDRZfEbReLmuKtvqg6GkZ06rBiYsfOVz58Zxc4JNyRBfcDgQiPBZbSsZ37pDAXAjT4QbjKgCfVZkJTHtbFVa49v3J2jOJFSdu1Z1MZNiGEKaiBvheFZX0ON5rfldSNhj&X-Amz-Signature=0053f27930afbff520fb47a71e7c882e18126114cbf206a1a793d3d6150409cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGL5VNI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD%2BNyGK0BPq9sOv0%2FFtjXkXVVkCAEBjfNyYIqxGw686fgIgMwoTL%2BzrWulrm62M123wtpwkT5IE4Hq50TXIzn58PzQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnDXG%2BbRliwyibZaircA9ToOJydRHeBCkBGeWkj2HMsFepEE2MZep%2BLHp28Ac7yFiclnj8zJY%2FTSmoTgm2QBkVLK4KNLuWa2d0n88V%2ByxLxCDR26uLLVOZXabTwqrr5W%2BzXTyPu4YmUvPUkkur0qe%2FSO7PtHFsd21z1Q%2FxiXNZK6jRJyLK31%2B%2BRCgi8Bw2MAC7D9Wo810cDhVhLK2QYIJhCNbciESL9wCwMS7RHGqhJYMNnHdy5AetwF7qNOibuVHH6xwek1QTQF5WxvcwvNhvOkqbqf55EZQenLKf0U%2F1dArR%2FyS7b9Aw5nN57gVgjkvUJQjpJrsmMFpfVFBs8zEEaSBPiQzWKXgzkeaR9hz5truz6Vl7g9Y3FY2068cyC47dyt02E%2Fzh0h4V2H9%2BzBXjYIQQ4OaG6dgtdnDhCy87wk%2FTMiTXdxLa7obGUXDzxy6yT5sig47vy2Tb6K4nN6RctCyypBZfMvHSyva3Bqiz8MIClXtkA98Ajyl%2BG%2BRqENycT%2FaJHL52xEA0ncIXGDAS%2BpI%2BcFwvzHKYbMK9P6Vqtup%2FfozjVXAkKHUL6l%2F6MXfY1nkRqeOOmq0ATTCqlF9gTGDcuV42qz8BVmol3CLCIS89lLlFCODb2J4uERRQ18ZsIXX%2BB%2Fc%2FFb3aBMOen6L8GOqUB9%2FcQWHOaaXFzXKDomZELslHiyOf2Ji32TB4HdpIOIylNioyG2x6k8ZqUsDACSdEPtGv348bPfAj3V91cN2pUfxWHxyp5%2FDRZfEbReLmuKtvqg6GkZ06rBiYsfOVz58Zxc4JNyRBfcDgQiPBZbSsZ37pDAXAjT4QbjKgCfVZkJTHtbFVa49v3J2jOJFSdu1Z1MZNiGEKaiBvheFZX0ON5rfldSNhj&X-Amz-Signature=6cccacdb1dc8d2e07e892a008acb6e0bf447b8560e6ea294f8bc16170616e26b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
