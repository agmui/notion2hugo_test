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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3FC7NYA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Uk399aiKMqMhOxlSJ1vW%2FjJBc63sdsxua0E2adBzMQIgR1HEi2fb%2By3po4DVt8p6PTfxL5NV5Giszs11JztVlSoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOVwUz2gQfSWyBM5KyrcA%2FLjX8RAiro%2B5CsOdXnzuWNoIT1QlQncq7lCjD2ji8TTPqDBl0FUswTAh1vXkb1K%2F8lze%2BF3vP4f59bYY71z7dJVKvF84BCCKUSAi0278FZfYD5RIvjRfu4h90DN0uBCGyvrPXrax9ItrGr%2Fz3EqDNj75ORwnIo7Z7gkLJJYG8R7jL2yU2KLiunFu9wKBrz3q8JZXGq4xz3e39sR3j7J8JZDsQtdajmVC7U3NaTve%2B1I02voFLIDYw3YxcSyxlAho6ZRWPrFcQebPkogT%2BSYSLZtrmZPeySqY%2B0JMZxkUUu15nbl2eqiIt5NJjDxQT08iv9pvrY5jXpkSNbKoh9Q6U%2Fw%2F03hqF4CcFnrXtEO8MP%2FOml3Jy%2Blcu9xyuBoTaCS%2F28%2F4tv4vWJ%2BLv2Y%2B8fhNxplTLoLKD0VbBSmikCuxPBemyEA41joNdkoTA3AZa4klwHHDx12PRYSsXkuj4gNOnIb4CYSQooutj9en4GUVqt6j246mdExRmDnOwKP8nQi%2FCwmunJapsOMsfpe9Zz0vgtN8CsJxBRNPyUEghsV2fk39p3PKKkeF1Pdd3BFB%2Fnr%2FJV3Hwv2FZLRQ%2FujOXMiM%2FD4zpZnNuf0VVOFCu4ZlbpX0sPZ6BAO%2BcIYbFP0MOzSksIGOqUBAtUnEgm2RrDofr96yEbR0MSH83W3klCntAy%2BHbCEIyjL73yhX3csVAhGfzxp6pm1UIli%2F1KteL78Dq76sv81R0ESFFxQ3eU3CKEMwXjQuJefjfsDqZUNoFx54wXbeca41sCsbYJ6T4CsGQ%2BfH8I4z%2BSwCXM0WNFZarvq%2F8SGzP6Ln7LeeR7BC82GCsumi%2FOw%2BnMlCOCJJ%2FPTaGFQJjEGoRKWbA4S&X-Amz-Signature=f9e901bd79a369e8574a3618c8172541d678cc6ee8af3dde8320e637e1b58e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3FC7NYA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Uk399aiKMqMhOxlSJ1vW%2FjJBc63sdsxua0E2adBzMQIgR1HEi2fb%2By3po4DVt8p6PTfxL5NV5Giszs11JztVlSoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOVwUz2gQfSWyBM5KyrcA%2FLjX8RAiro%2B5CsOdXnzuWNoIT1QlQncq7lCjD2ji8TTPqDBl0FUswTAh1vXkb1K%2F8lze%2BF3vP4f59bYY71z7dJVKvF84BCCKUSAi0278FZfYD5RIvjRfu4h90DN0uBCGyvrPXrax9ItrGr%2Fz3EqDNj75ORwnIo7Z7gkLJJYG8R7jL2yU2KLiunFu9wKBrz3q8JZXGq4xz3e39sR3j7J8JZDsQtdajmVC7U3NaTve%2B1I02voFLIDYw3YxcSyxlAho6ZRWPrFcQebPkogT%2BSYSLZtrmZPeySqY%2B0JMZxkUUu15nbl2eqiIt5NJjDxQT08iv9pvrY5jXpkSNbKoh9Q6U%2Fw%2F03hqF4CcFnrXtEO8MP%2FOml3Jy%2Blcu9xyuBoTaCS%2F28%2F4tv4vWJ%2BLv2Y%2B8fhNxplTLoLKD0VbBSmikCuxPBemyEA41joNdkoTA3AZa4klwHHDx12PRYSsXkuj4gNOnIb4CYSQooutj9en4GUVqt6j246mdExRmDnOwKP8nQi%2FCwmunJapsOMsfpe9Zz0vgtN8CsJxBRNPyUEghsV2fk39p3PKKkeF1Pdd3BFB%2Fnr%2FJV3Hwv2FZLRQ%2FujOXMiM%2FD4zpZnNuf0VVOFCu4ZlbpX0sPZ6BAO%2BcIYbFP0MOzSksIGOqUBAtUnEgm2RrDofr96yEbR0MSH83W3klCntAy%2BHbCEIyjL73yhX3csVAhGfzxp6pm1UIli%2F1KteL78Dq76sv81R0ESFFxQ3eU3CKEMwXjQuJefjfsDqZUNoFx54wXbeca41sCsbYJ6T4CsGQ%2BfH8I4z%2BSwCXM0WNFZarvq%2F8SGzP6Ln7LeeR7BC82GCsumi%2FOw%2BnMlCOCJJ%2FPTaGFQJjEGoRKWbA4S&X-Amz-Signature=90acf51866c029103dff20a881f274429478953bde9062e0f0e8c7221c18d177&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
