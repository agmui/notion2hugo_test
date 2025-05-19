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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI6SGBMH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BFtrJk%2FoJE2Lb%2Fp%2BBYDmFair%2BPXpOHLtg5s2Q5EUOvgIhAJturBJkt9X%2B65g4%2BJZTHz1eZsYGAVtCvdvFXyjZSL54KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1si%2FTMWfyQiDj8PMq3AOYrmUu7JXINq3P9Z%2FsL4uJ2q%2BzpWRk9XWHeuq%2F7eGCNjyWe%2FK7mzxEi7Nw5wSE6JIyVwJpycFk8KVWGf57NjcuAvKWnQDILbe1z7HIMvvTUBPiLGZeP7KwadHMYWaAUD6g7tGxERK8aSsG8dZaxg7kuDCT0jG8SCfUK17RQQNdMoMC9meNUHIp7XpGPpujjV0Wn3gdJopbXqtzxbnI2DfIvKSalWAgWGsU%2BQXxUX3xlCKmV6uYVPiP6ENOZRxFOE%2BwolnsWZggnAgCRQkWxH1AAMedpWFBMq%2FlFl8p3B9rh6vGOqwMMcnylGaVaR%2Fuo8HeGymf6oOlnWV39ia1lxekyp2%2BPW0glCz6ZdOV9QKNkBeYCEMeH6Rtny5UJ7iZSK9NOxnwuJ0P2hS9753FZL6PTIJ2X5JqDHJLbEjT%2FXa1SPMg8%2BoXJ%2BC7vknEPkx4Dm%2FkIQ0blS9D2QAVCNa%2BJRsCW1UFYwN7cFe8OS3%2BM8JYlbhbt3qjgA0kR9WLa8fbDgu07i%2BUnlw9gFeLuUzZOizWvZwfvcLCBLUxG2kz4wTrntFi2hoBa4n%2FNJwvVam%2FCUahir%2BNxNa7v3eBPOTMAMp3tDplNqeZMCzDfZeKPchP6rJjH6f1p1xZPgngAzDKsazBBjqkAUzVqWjcnGWrtSive8sU08NI1UhxI1YP75WrjgwNuJl9GfzaNmn%2Baby52gn22N%2FrnUBm2e0a19besmDeMaoNBTrTQlcI3TOFmoBAWp0JHWJJlqIEAQGNzv8BnNLXBdRD71LiScIoUbPh1scw0imdPYxG0wcXJZbPbXsu1tTeqeoEtzIq2Vsk7bydbFYGwLMj7N3ClWbQ0feVVqWVfbKxlf3lqcWm&X-Amz-Signature=3ec31e2e6e2ce066b53420ef024b5810ae2e12f1ce81a6ca6daa4e22075aeeba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI6SGBMH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BFtrJk%2FoJE2Lb%2Fp%2BBYDmFair%2BPXpOHLtg5s2Q5EUOvgIhAJturBJkt9X%2B65g4%2BJZTHz1eZsYGAVtCvdvFXyjZSL54KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1si%2FTMWfyQiDj8PMq3AOYrmUu7JXINq3P9Z%2FsL4uJ2q%2BzpWRk9XWHeuq%2F7eGCNjyWe%2FK7mzxEi7Nw5wSE6JIyVwJpycFk8KVWGf57NjcuAvKWnQDILbe1z7HIMvvTUBPiLGZeP7KwadHMYWaAUD6g7tGxERK8aSsG8dZaxg7kuDCT0jG8SCfUK17RQQNdMoMC9meNUHIp7XpGPpujjV0Wn3gdJopbXqtzxbnI2DfIvKSalWAgWGsU%2BQXxUX3xlCKmV6uYVPiP6ENOZRxFOE%2BwolnsWZggnAgCRQkWxH1AAMedpWFBMq%2FlFl8p3B9rh6vGOqwMMcnylGaVaR%2Fuo8HeGymf6oOlnWV39ia1lxekyp2%2BPW0glCz6ZdOV9QKNkBeYCEMeH6Rtny5UJ7iZSK9NOxnwuJ0P2hS9753FZL6PTIJ2X5JqDHJLbEjT%2FXa1SPMg8%2BoXJ%2BC7vknEPkx4Dm%2FkIQ0blS9D2QAVCNa%2BJRsCW1UFYwN7cFe8OS3%2BM8JYlbhbt3qjgA0kR9WLa8fbDgu07i%2BUnlw9gFeLuUzZOizWvZwfvcLCBLUxG2kz4wTrntFi2hoBa4n%2FNJwvVam%2FCUahir%2BNxNa7v3eBPOTMAMp3tDplNqeZMCzDfZeKPchP6rJjH6f1p1xZPgngAzDKsazBBjqkAUzVqWjcnGWrtSive8sU08NI1UhxI1YP75WrjgwNuJl9GfzaNmn%2Baby52gn22N%2FrnUBm2e0a19besmDeMaoNBTrTQlcI3TOFmoBAWp0JHWJJlqIEAQGNzv8BnNLXBdRD71LiScIoUbPh1scw0imdPYxG0wcXJZbPbXsu1tTeqeoEtzIq2Vsk7bydbFYGwLMj7N3ClWbQ0feVVqWVfbKxlf3lqcWm&X-Amz-Signature=e60500c0a9e781cd3a4b867a961f5776ac06e9e84df978d243e2069db48346e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
