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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657IIFDXW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1gg7cDQmoKHqP%2BHJ14mB0dVqkyAAPskrI4eikqe5sLAiBCPW9imUB9VDoDSPF%2Bv7vW%2Bxb1hd7qF4jlZHaJDhJ6FCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsHgvBUl5T6B5AyvKtwDgY5uqcSy%2FTCq%2FU9nhEXFzLAmj%2BIuZ55viJ6JURqsYU%2BMzoVsO31RnO%2BLODRB5vvnfSqZqo00tzmbgSvTScyGFRiESBhmQ%2B1%2FDPV7eg0L7cRvIiwJFFLqqkSPL83%2FA8S0WIidWQM7wxWWaFXx6lieLvbRRW9nMGgYprPS%2FlhxgDOuwKsGmtETRgZkY06K9BuI3sWMQTSWff9E4yU9WzuTipf0G1AHeyE9QpH5%2BTDgXIWTMXcX5I3vLtNNw7askU2uensxKe0swmg7op1Wl%2Fg%2B98%2FVm9fr9jNm22sZXMid9Bkruh4cu1O3CFWN6%2FZuMXagm6qG4eZ3jPS2oQkTL8HdItzvJnGVBMV288psakNGS7eoYiBS3vy4G3Ba7hNRECTNTobcOnFDDT5edjhVBQf3wBma68wRhE3xYCXrKaAeanijEPSr%2BJeqOQ%2FkJXhe%2BNOGDdKeDva%2BJs8eYwQVszp48jQ9fhtFsHvwmofYm%2FCZR%2BK8%2BNiUXldqbpV4%2FD%2FTHtg31L4rVtkV3V1Wx7G56cVbECOaPk0UH2PwbU1xcDfXzv%2F81v%2BKMVb8efjCQ6e2at8J6v8uiTdUxnMI%2B0mvaPP1w0CjOlLyklIMI820biQuQSTdTigiazbA70%2F%2F8%2B8w2Z%2BewgY6pgECtUwvAcq54ukRZB2OC8xGnKqolJi6un%2BxPF0lOAIWIeNZLE0hun56n4F0pMJM4cdFTH10ialb5bj7KOHvAIQpBFIUFqNcvDgDC1vS5epB0Q5w2fGou9JHd%2FdwJgTFIYV2lTUDGUu%2FFxyxzKLYjWQQ1V5qWPzHRemboIPv5NcBlbzUw14NmIcgFupxMIHGcXJaqDOuNWHACDU8aJBQyqV1FkvV%2FdUN&X-Amz-Signature=45829cc2544656198d71a8a3fe36ac2187a97714ddcde40ce0327debf170374d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657IIFDXW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1gg7cDQmoKHqP%2BHJ14mB0dVqkyAAPskrI4eikqe5sLAiBCPW9imUB9VDoDSPF%2Bv7vW%2Bxb1hd7qF4jlZHaJDhJ6FCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsHgvBUl5T6B5AyvKtwDgY5uqcSy%2FTCq%2FU9nhEXFzLAmj%2BIuZ55viJ6JURqsYU%2BMzoVsO31RnO%2BLODRB5vvnfSqZqo00tzmbgSvTScyGFRiESBhmQ%2B1%2FDPV7eg0L7cRvIiwJFFLqqkSPL83%2FA8S0WIidWQM7wxWWaFXx6lieLvbRRW9nMGgYprPS%2FlhxgDOuwKsGmtETRgZkY06K9BuI3sWMQTSWff9E4yU9WzuTipf0G1AHeyE9QpH5%2BTDgXIWTMXcX5I3vLtNNw7askU2uensxKe0swmg7op1Wl%2Fg%2B98%2FVm9fr9jNm22sZXMid9Bkruh4cu1O3CFWN6%2FZuMXagm6qG4eZ3jPS2oQkTL8HdItzvJnGVBMV288psakNGS7eoYiBS3vy4G3Ba7hNRECTNTobcOnFDDT5edjhVBQf3wBma68wRhE3xYCXrKaAeanijEPSr%2BJeqOQ%2FkJXhe%2BNOGDdKeDva%2BJs8eYwQVszp48jQ9fhtFsHvwmofYm%2FCZR%2BK8%2BNiUXldqbpV4%2FD%2FTHtg31L4rVtkV3V1Wx7G56cVbECOaPk0UH2PwbU1xcDfXzv%2F81v%2BKMVb8efjCQ6e2at8J6v8uiTdUxnMI%2B0mvaPP1w0CjOlLyklIMI820biQuQSTdTigiazbA70%2F%2F8%2B8w2Z%2BewgY6pgECtUwvAcq54ukRZB2OC8xGnKqolJi6un%2BxPF0lOAIWIeNZLE0hun56n4F0pMJM4cdFTH10ialb5bj7KOHvAIQpBFIUFqNcvDgDC1vS5epB0Q5w2fGou9JHd%2FdwJgTFIYV2lTUDGUu%2FFxyxzKLYjWQQ1V5qWPzHRemboIPv5NcBlbzUw14NmIcgFupxMIHGcXJaqDOuNWHACDU8aJBQyqV1FkvV%2FdUN&X-Amz-Signature=b484fd8708b8d74a39607ddd6c8f627507dfcd1f8efee2fada953e00d64cec3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
