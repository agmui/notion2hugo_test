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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GKTXMF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGYrzow4nhCPBViOqmDfDkP7ZQB0Kdvrykz8iL5sIKGZAiApUD1%2B3tSIQzoXxFzlcMuZ5MRSCW23LkSmPo8EzJF1jCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME2pZ%2F7QaP2cqJ3NbKtwD5pe7Wh464UORV%2Fygh65N9OBsMlps82EnDHD%2FmZLIdYopc9lLUcxkCEd5F1vx4UTP3Xyjgmhp2nj3DdaeRNmoRIQLtQOEuymboqYoJwMoGadwMjA2N4BngfWv3BZu0zk2Uq4heWNy7dOYoN3NFQDPwJ79JmojFEJgvloscx1y6aLM4RIkixHC7sZqbLXEq0xQBdEf2ImuqHBFvBHDodGOu8MEHfMS7N%2BKl7LIW%2FV24i3NcreXInxrvTtgc%2BgjCs6Qrt2kINYCi7LIxzFFpu2%2Fr8nuTl%2FzdrzklnItr7n5at5ByrowXKsdUTYZuiCVGL9ZFWaQ8Gwm1c2OlV1LBc6maceoQOxplrW9zGuoTudziyTTxCTpHrwQoq4RzTMXYCC0YjFz3PmEiLkiGSQswZVFgQKClU54AXZJQda7bo91cos3HLEplK%2Brj9NKreGchdetFfVzkdCeaHbNvFRSSfW%2Bov%2BPMeSmY%2FF0QPMWp3n%2F7RcdmoHyIqVHTkfA644eCM4GIM6un7aAZb4IqX%2FeJasrXLYbLtOMQcIN7LNjCTlB1sBUhM8t05INXwZenJn0DB7CXjYp4EjWMPXzgYX1QqrB4WdDfBvFtokGzoSLelydsAi%2FDoWUQYUK%2BX1zgpcw9oiqvwY6pgG8B9XHgS%2FThbn8TK3OuW6fqQba4rn7eLHZPJwRBf%2B9AF1z82OZAPXerAGFdqy1uyGaLJZwB2aedePI9KlUTAla3yoBL4M8A%2F64ovvx8uHJ2gu0PEvH1SA%2F9saSB4HtTjgReC5yF6NyJgiuAimJ9mxwd%2B%2FES1nxQOYaF9%2FL2r03UGp4M1nYWsUoKdY99nHdjwl1wvGvSYtegh4aN2k5aS1t8JoiC5M2&X-Amz-Signature=ed4aa5becce313f9ef461cfc1d5fefcfea9713e8138b95d36f403c3ddb522651&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GKTXMF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGYrzow4nhCPBViOqmDfDkP7ZQB0Kdvrykz8iL5sIKGZAiApUD1%2B3tSIQzoXxFzlcMuZ5MRSCW23LkSmPo8EzJF1jCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME2pZ%2F7QaP2cqJ3NbKtwD5pe7Wh464UORV%2Fygh65N9OBsMlps82EnDHD%2FmZLIdYopc9lLUcxkCEd5F1vx4UTP3Xyjgmhp2nj3DdaeRNmoRIQLtQOEuymboqYoJwMoGadwMjA2N4BngfWv3BZu0zk2Uq4heWNy7dOYoN3NFQDPwJ79JmojFEJgvloscx1y6aLM4RIkixHC7sZqbLXEq0xQBdEf2ImuqHBFvBHDodGOu8MEHfMS7N%2BKl7LIW%2FV24i3NcreXInxrvTtgc%2BgjCs6Qrt2kINYCi7LIxzFFpu2%2Fr8nuTl%2FzdrzklnItr7n5at5ByrowXKsdUTYZuiCVGL9ZFWaQ8Gwm1c2OlV1LBc6maceoQOxplrW9zGuoTudziyTTxCTpHrwQoq4RzTMXYCC0YjFz3PmEiLkiGSQswZVFgQKClU54AXZJQda7bo91cos3HLEplK%2Brj9NKreGchdetFfVzkdCeaHbNvFRSSfW%2Bov%2BPMeSmY%2FF0QPMWp3n%2F7RcdmoHyIqVHTkfA644eCM4GIM6un7aAZb4IqX%2FeJasrXLYbLtOMQcIN7LNjCTlB1sBUhM8t05INXwZenJn0DB7CXjYp4EjWMPXzgYX1QqrB4WdDfBvFtokGzoSLelydsAi%2FDoWUQYUK%2BX1zgpcw9oiqvwY6pgG8B9XHgS%2FThbn8TK3OuW6fqQba4rn7eLHZPJwRBf%2B9AF1z82OZAPXerAGFdqy1uyGaLJZwB2aedePI9KlUTAla3yoBL4M8A%2F64ovvx8uHJ2gu0PEvH1SA%2F9saSB4HtTjgReC5yF6NyJgiuAimJ9mxwd%2B%2FES1nxQOYaF9%2FL2r03UGp4M1nYWsUoKdY99nHdjwl1wvGvSYtegh4aN2k5aS1t8JoiC5M2&X-Amz-Signature=6a791c40442c72bc4d2257315559eb41388c305d6dce226177e6d15d71f74471&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
