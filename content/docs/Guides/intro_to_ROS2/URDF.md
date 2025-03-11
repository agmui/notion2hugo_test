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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6CBS22%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCQhdjdScr1cKIvT9OgXm1WCVLoMX5pe6k0AzZzdxvclgIgVgBdT1s%2Fb1T0KQomjAu80HNF4fXbWePmRWQwveOkuTIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkH5A1nuLve8lWmzyrcA5vLHJlfA2ImPsTaJh6SX3RAmbFhiDLj9Ir1cW0kdJrh4vV1vVUC2R0KOwXVGNoeIw%2BYT%2BvxYe8cJ4bEwZadve0s7M82ZFU43wLJpQhsz0yzO8UGwM%2BH7hW7IYJ2tgtVylK%2B0L3TgoGMpP61ixGxXVYHZ4cjOZ0QBHMEQ1X6TZu4gX0NClZ3TIe8kPHcqc7xbF%2B%2B0941trS3oQlWLLHaG7jTN%2B26c%2Bwu7mHxOckUe8igVyCWJsLA33CHK2V9y6UvoWvKphz0s0rTXsvxpP9lxtLrnwhfPqx%2F19ZpTS4%2FmZYJJgDC6MM1Cg%2Fa0Rm3o%2BgFiBxCazSeYlicHfQm6HIbVN962fZreZFTRjSO%2F5FnH17IClBSnTvlt8Drg%2FS4cb1pXl35QmfxU1%2Biktjr%2BJ0yvC%2B65sDO8Q1fIzLkHk4%2BGXX1Su2ePMrQpDi%2Fd87Nv3ZKOiqOq2eWL3F0cBd0qUWXyVUm5huYx0vh50GnzDkMP3YKw34HNKHswxiv5KIuujW89DYMlTcxuWLTs3zEpF8EB5z9xigb%2FramgRudNpQQMCKCac8PwaIPK3st7C%2Bu66JqkAB%2FKs8fEBQrqgpmGOwrHYOzL%2F6qiD%2F17IBJarWN2oq67wsnzKp0eaejkw0HMOGPv74GOqUB4M7gpIXq14%2B38xj%2Fn5G%2BKm2uVSt0Ivz%2B4PPZv3n66UdEVH5mH16WkS7TxlYl1Z4irCS%2BtPnkCEkKKLJSoh1nl6gciq2JpNQWLJFIV4rnx7ecX1qVP3RQXVrcNz%2Brgugd7qJayBR8QaIpi5W%2BOIV9FEGi62ofsozZlm5kZ%2Bc0rCHUaKfcTb8nKmFHlr5jrRpjr08wmf8W1QA7gVZZqPt54a1GHTqc&X-Amz-Signature=f7cb5a200154789aa21f7de4ee36e42da0ae18cb9acf40908294bdfa19592d17&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6CBS22%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCQhdjdScr1cKIvT9OgXm1WCVLoMX5pe6k0AzZzdxvclgIgVgBdT1s%2Fb1T0KQomjAu80HNF4fXbWePmRWQwveOkuTIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkH5A1nuLve8lWmzyrcA5vLHJlfA2ImPsTaJh6SX3RAmbFhiDLj9Ir1cW0kdJrh4vV1vVUC2R0KOwXVGNoeIw%2BYT%2BvxYe8cJ4bEwZadve0s7M82ZFU43wLJpQhsz0yzO8UGwM%2BH7hW7IYJ2tgtVylK%2B0L3TgoGMpP61ixGxXVYHZ4cjOZ0QBHMEQ1X6TZu4gX0NClZ3TIe8kPHcqc7xbF%2B%2B0941trS3oQlWLLHaG7jTN%2B26c%2Bwu7mHxOckUe8igVyCWJsLA33CHK2V9y6UvoWvKphz0s0rTXsvxpP9lxtLrnwhfPqx%2F19ZpTS4%2FmZYJJgDC6MM1Cg%2Fa0Rm3o%2BgFiBxCazSeYlicHfQm6HIbVN962fZreZFTRjSO%2F5FnH17IClBSnTvlt8Drg%2FS4cb1pXl35QmfxU1%2Biktjr%2BJ0yvC%2B65sDO8Q1fIzLkHk4%2BGXX1Su2ePMrQpDi%2Fd87Nv3ZKOiqOq2eWL3F0cBd0qUWXyVUm5huYx0vh50GnzDkMP3YKw34HNKHswxiv5KIuujW89DYMlTcxuWLTs3zEpF8EB5z9xigb%2FramgRudNpQQMCKCac8PwaIPK3st7C%2Bu66JqkAB%2FKs8fEBQrqgpmGOwrHYOzL%2F6qiD%2F17IBJarWN2oq67wsnzKp0eaejkw0HMOGPv74GOqUB4M7gpIXq14%2B38xj%2Fn5G%2BKm2uVSt0Ivz%2B4PPZv3n66UdEVH5mH16WkS7TxlYl1Z4irCS%2BtPnkCEkKKLJSoh1nl6gciq2JpNQWLJFIV4rnx7ecX1qVP3RQXVrcNz%2Brgugd7qJayBR8QaIpi5W%2BOIV9FEGi62ofsozZlm5kZ%2Bc0rCHUaKfcTb8nKmFHlr5jrRpjr08wmf8W1QA7gVZZqPt54a1GHTqc&X-Amz-Signature=85c05c0b62432151c43ce512fb383b44ca669e67708b3a171f08a6cd25cc32ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
