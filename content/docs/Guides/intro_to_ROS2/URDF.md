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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW7LKQA7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZuF98SNQ1vZIbbH0gfn0DE0TaY%2FM4cSYQULyoYBbi2wIhAOAbYLCsAN28iAFbowmdGNbZu31jKd662CyPnen%2BA2ORKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJj%2Bd8muT2%2BS5lNJoq3APFCC%2F2En1z4XMoyUgB%2B%2FetbFio%2BfdJomZw%2B2Eq0QKxH56sRcze9L%2BchgoNTVTemKwALeiW67ngtfOr8XbW7QmTgxUi88MtNOU2HI%2FUzqqG5xPBWyZH8MkVJsS5CkuWECsc3YjpqQvt%2BtWE0s3bQVTp15i7%2FMubY2AxcdioQR2wyIS25LIph18wS4rvOWyAd381pT%2BwsjqmCISDcP6pB2RrZJlszvqA7jxOCg46jlaPPoGFB2HgHC60jaSQbFQSUiIlCXZT1fQoS7E2IhNVJjCI%2Bag%2BBi00GdWo%2B6Ze%2FKMiNlM3%2BXQbvvNOZgpdXWrtHz9V5Hl5TwoSydTuHZo9eXvL6lHBqp22dx63ZUaMneFsGkNjVae708LJJcKnirPR25vP3cEx%2FveVny0JPYfq%2FwAAKfIDFoZT0y3ACKrJNFR5WdS39MVQjxb%2B9CPdyh5tQ%2F8YxZNsHZ4Y68buhk3Nc2AHj12nrz7O9A8c%2BiZhrxLYdR0I7elh%2BwdpgXbt78VyoXyJGEJ4NQ2LgZteNO6RJpHdUbN6oZx2mvtdT7ne58m8B6AysH2ERX5AcEqmyB0zJe3K11klDeWLYgwLCuGorUzr1ytZskqfLa1X%2BxoMct%2F6GxmhMzcoqgW833e%2FrDDCrcTABjqkAf%2FsKOLDzO2apAMovoP3R1luMgvCmDlUSdC33l%2FzeKA0kx3SVDNWcDoCSECCNtGrQtwoj1sB4P8G1PiFb3UPzfhMEPfo83vBmvLdYf8Kgnc4CC3%2FJz2DHvM%2FXqqMPwwHp2C7otCkC1%2F8glNyFpvJp1681s1yZNgVLiS46l2%2B4HuQT0fRcCCkUrSB3%2BBTWJqHM%2BnZfjNuoYGS6Ddl53opH0P0PkiL&X-Amz-Signature=0bdeac9f218407836e477cb5aabd5d0092be55847dbc32ca20a7047b877756da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW7LKQA7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZuF98SNQ1vZIbbH0gfn0DE0TaY%2FM4cSYQULyoYBbi2wIhAOAbYLCsAN28iAFbowmdGNbZu31jKd662CyPnen%2BA2ORKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJj%2Bd8muT2%2BS5lNJoq3APFCC%2F2En1z4XMoyUgB%2B%2FetbFio%2BfdJomZw%2B2Eq0QKxH56sRcze9L%2BchgoNTVTemKwALeiW67ngtfOr8XbW7QmTgxUi88MtNOU2HI%2FUzqqG5xPBWyZH8MkVJsS5CkuWECsc3YjpqQvt%2BtWE0s3bQVTp15i7%2FMubY2AxcdioQR2wyIS25LIph18wS4rvOWyAd381pT%2BwsjqmCISDcP6pB2RrZJlszvqA7jxOCg46jlaPPoGFB2HgHC60jaSQbFQSUiIlCXZT1fQoS7E2IhNVJjCI%2Bag%2BBi00GdWo%2B6Ze%2FKMiNlM3%2BXQbvvNOZgpdXWrtHz9V5Hl5TwoSydTuHZo9eXvL6lHBqp22dx63ZUaMneFsGkNjVae708LJJcKnirPR25vP3cEx%2FveVny0JPYfq%2FwAAKfIDFoZT0y3ACKrJNFR5WdS39MVQjxb%2B9CPdyh5tQ%2F8YxZNsHZ4Y68buhk3Nc2AHj12nrz7O9A8c%2BiZhrxLYdR0I7elh%2BwdpgXbt78VyoXyJGEJ4NQ2LgZteNO6RJpHdUbN6oZx2mvtdT7ne58m8B6AysH2ERX5AcEqmyB0zJe3K11klDeWLYgwLCuGorUzr1ytZskqfLa1X%2BxoMct%2F6GxmhMzcoqgW833e%2FrDDCrcTABjqkAf%2FsKOLDzO2apAMovoP3R1luMgvCmDlUSdC33l%2FzeKA0kx3SVDNWcDoCSECCNtGrQtwoj1sB4P8G1PiFb3UPzfhMEPfo83vBmvLdYf8Kgnc4CC3%2FJz2DHvM%2FXqqMPwwHp2C7otCkC1%2F8glNyFpvJp1681s1yZNgVLiS46l2%2B4HuQT0fRcCCkUrSB3%2BBTWJqHM%2BnZfjNuoYGS6Ddl53opH0P0PkiL&X-Amz-Signature=954a64c02f2177ab39c6ef9ceb1a900c0e10578534e6ba884be2e0b0d17bc212&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
