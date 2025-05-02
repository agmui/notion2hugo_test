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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDB47W2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC7fI3FLbtolPfvWqNmEAoyAmPPrd9yJsQaDO9cpUGsbAIgRawmzfFVP5J9PLk9kt%2B9ciaTL%2BjtnoiI5jpd1Uc2bo0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCQLslCnlAsPFl9PyrcA27JAPJ45%2BRpLOS0BGIBGBJWOyW61mznRhTgfdAmgCSvUT6tJKWiCeb0JXaUq65qX%2BHe6qRja9ievWRxz0cKXmxB0EaO4FAo6pFZPJCkWunOvdzM5HiLmuC3Z5K4VayV%2BUNTswMinAW1MGU2jIs1UO22K6HHh7adP3rPpjJuscuppRtmLGWYFRMSLKIc2TxBV8EucAqeVcgKnAQ2i6wBjC%2BDXr61TR0E3TIrToZj13sBNJ3Aaz8uh6%2FPuDju2g2tbx855MJU4Ldq6lhfzEJN5loJtqENhnJXYiljRtk7w0snhxQHtO0Sbg8YSzFqkjqWl5ftmq49RMFmyvDvOQO5eSDSgDiqi3VcQpESzdhG6zlsdeIAjxEP1jVq1XPgvJwAoFxKEfKrIjIO4GORareJxLrl2iKnauLJ7RJVLUxuUjDcFbOqVIzbeti19EmwsQiJauzrkRW8xUzoEBfa8zL%2FghkCFqiap%2FD1GGWc9kidZ%2B6Wbk2T9WxWPtpivsJl3JxYFSwNpMGDpQuDJbgeRfc07Sjg51%2FmJDnSc%2BaM2z7kRl8P%2FAyL58%2BDsLtx43ymj0eKB4Ms%2FtuENXvw3562LwiQQaexSKdZiiZlTq7hfOfxU3%2F%2FLnHVT6WaURBTeUvcMIy90cAGOqUBVJ%2Focl74kLALI9D9%2Fr4DGURa1Fw5H6iVWl0KMtY3BdAEH%2FAWBvcLkcTp4Uyc2KgY1a3Blv1O0z9vhHSVJME1bhSZFB5iHlrxJQhtMsHZpHVTgOqwBM9NiQEYny%2BsM0claeUKC2TEz%2BNh7MdIlLPiHT4O90S9OvMJEP%2BZGSozvP6DkL9q%2FWtzearw1UadTWmCA%2FwKJYB1%2FJvs5n5UfTOa7vkAXPHF&X-Amz-Signature=b7366c1b324352249826bfa9e439d9c10f882a0833b990db72186bdefb2c598a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDB47W2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC7fI3FLbtolPfvWqNmEAoyAmPPrd9yJsQaDO9cpUGsbAIgRawmzfFVP5J9PLk9kt%2B9ciaTL%2BjtnoiI5jpd1Uc2bo0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCQLslCnlAsPFl9PyrcA27JAPJ45%2BRpLOS0BGIBGBJWOyW61mznRhTgfdAmgCSvUT6tJKWiCeb0JXaUq65qX%2BHe6qRja9ievWRxz0cKXmxB0EaO4FAo6pFZPJCkWunOvdzM5HiLmuC3Z5K4VayV%2BUNTswMinAW1MGU2jIs1UO22K6HHh7adP3rPpjJuscuppRtmLGWYFRMSLKIc2TxBV8EucAqeVcgKnAQ2i6wBjC%2BDXr61TR0E3TIrToZj13sBNJ3Aaz8uh6%2FPuDju2g2tbx855MJU4Ldq6lhfzEJN5loJtqENhnJXYiljRtk7w0snhxQHtO0Sbg8YSzFqkjqWl5ftmq49RMFmyvDvOQO5eSDSgDiqi3VcQpESzdhG6zlsdeIAjxEP1jVq1XPgvJwAoFxKEfKrIjIO4GORareJxLrl2iKnauLJ7RJVLUxuUjDcFbOqVIzbeti19EmwsQiJauzrkRW8xUzoEBfa8zL%2FghkCFqiap%2FD1GGWc9kidZ%2B6Wbk2T9WxWPtpivsJl3JxYFSwNpMGDpQuDJbgeRfc07Sjg51%2FmJDnSc%2BaM2z7kRl8P%2FAyL58%2BDsLtx43ymj0eKB4Ms%2FtuENXvw3562LwiQQaexSKdZiiZlTq7hfOfxU3%2F%2FLnHVT6WaURBTeUvcMIy90cAGOqUBVJ%2Focl74kLALI9D9%2Fr4DGURa1Fw5H6iVWl0KMtY3BdAEH%2FAWBvcLkcTp4Uyc2KgY1a3Blv1O0z9vhHSVJME1bhSZFB5iHlrxJQhtMsHZpHVTgOqwBM9NiQEYny%2BsM0claeUKC2TEz%2BNh7MdIlLPiHT4O90S9OvMJEP%2BZGSozvP6DkL9q%2FWtzearw1UadTWmCA%2FwKJYB1%2FJvs5n5UfTOa7vkAXPHF&X-Amz-Signature=2e7ea7d24e259c4c12b755ee85fcf9d7c5bd83511cb2c648ea43c5771d2c35c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
