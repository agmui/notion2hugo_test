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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUOVYAG6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC5jnzX8scbCc2zljBeGJx9t005lw2Y8ljqmlA96LInhwIhANJGAiFC2gljqelWq9M2ACRgCHHfksUffcQtYvO3hxBoKv8DCD4QABoMNjM3NDIzMTgzODA1IgzPvIpbpIevJUQWqwUq3APk8xzr03go%2FlzwKnpLTBEyKQaCX0BWaGnfTzxH7LHEJAoMobrITBWBMF6Fif8hikdZS%2BLJdrSgF0f0%2FFOpgnbx6HMKd4723YQ4V4iscZNQx%2F9L50bMKm%2FgkvKCMuPQjDZcA80K%2Bwsm9a574NAaztlQQ7Wxh8kxPi4pbeZZlAZmKYhIkDsG1RrcK5FPMC4yzh8VbyF9o5dOdvDwr2koirukzQkU2sfBQ60FwbKloPWdZB2QnWsm4BLKV4UBGSpa6vTdmu4O5fSo003urEaK6txJPELeWBaYzrk5JbXQydtYYZpWhzRoUEhzKqPuNh0MFBNSZ0a9KsSviJGNcJ0fAfJZ7qHZB9TN9irn5mTq86As%2BUYPfVRFgJtzAMssHpV98HLffQ16QsU0wY88CpxPkIH3OQNs54F1IuW8xFLIVeCNVi5h%2FHJfrFV7s0pLlZhuF4lFyDZFoIMhXadid%2FZXkV0TND4aJ%2Buf6b7yVOCKIh%2B14I2veSQZqPz7frnQKf0Li0HmvfQ9K9jWK5QsGZ3Xg2eYT1uona0AtvUCCbSK2lAkOJcspIPKTyhxevbZF4fj9kTNrYsXhfGJhjKTNyfBC7UwF7onR5LTtEnSMD%2F8QvOa4Jbf8%2BkyKM%2FtwDM8kDDBnIzEBjqkATeMm2NsGhvK4r2lMiX1nzzAezQnqnWEN1%2FpWs90ezCwRVwDGY1%2Fl4IKYk4sOWdOnIA%2BrOcvdo0VEpPXwjfegqBQfRebZgWORvR4C6SJDCN9h%2Bi3f2BbpgAzSs1YOYDemuEuBVZD1BPwwjWVP%2BCkP94ag6goABjhJZDrD5NZWqADPuCCJa3rXqewRSIdlQJg3IztePCf1MR9uACvJU%2Bw1Edhx3Ij&X-Amz-Signature=ea01c0379d0c20acc884da3a3b79b1d4629dc97ef74edce126797b28ff22648a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUOVYAG6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC5jnzX8scbCc2zljBeGJx9t005lw2Y8ljqmlA96LInhwIhANJGAiFC2gljqelWq9M2ACRgCHHfksUffcQtYvO3hxBoKv8DCD4QABoMNjM3NDIzMTgzODA1IgzPvIpbpIevJUQWqwUq3APk8xzr03go%2FlzwKnpLTBEyKQaCX0BWaGnfTzxH7LHEJAoMobrITBWBMF6Fif8hikdZS%2BLJdrSgF0f0%2FFOpgnbx6HMKd4723YQ4V4iscZNQx%2F9L50bMKm%2FgkvKCMuPQjDZcA80K%2Bwsm9a574NAaztlQQ7Wxh8kxPi4pbeZZlAZmKYhIkDsG1RrcK5FPMC4yzh8VbyF9o5dOdvDwr2koirukzQkU2sfBQ60FwbKloPWdZB2QnWsm4BLKV4UBGSpa6vTdmu4O5fSo003urEaK6txJPELeWBaYzrk5JbXQydtYYZpWhzRoUEhzKqPuNh0MFBNSZ0a9KsSviJGNcJ0fAfJZ7qHZB9TN9irn5mTq86As%2BUYPfVRFgJtzAMssHpV98HLffQ16QsU0wY88CpxPkIH3OQNs54F1IuW8xFLIVeCNVi5h%2FHJfrFV7s0pLlZhuF4lFyDZFoIMhXadid%2FZXkV0TND4aJ%2Buf6b7yVOCKIh%2B14I2veSQZqPz7frnQKf0Li0HmvfQ9K9jWK5QsGZ3Xg2eYT1uona0AtvUCCbSK2lAkOJcspIPKTyhxevbZF4fj9kTNrYsXhfGJhjKTNyfBC7UwF7onR5LTtEnSMD%2F8QvOa4Jbf8%2BkyKM%2FtwDM8kDDBnIzEBjqkATeMm2NsGhvK4r2lMiX1nzzAezQnqnWEN1%2FpWs90ezCwRVwDGY1%2Fl4IKYk4sOWdOnIA%2BrOcvdo0VEpPXwjfegqBQfRebZgWORvR4C6SJDCN9h%2Bi3f2BbpgAzSs1YOYDemuEuBVZD1BPwwjWVP%2BCkP94ag6goABjhJZDrD5NZWqADPuCCJa3rXqewRSIdlQJg3IztePCf1MR9uACvJU%2Bw1Edhx3Ij&X-Amz-Signature=1e46d10b89864543fc619a9fbea4b38145e6e08b18c69000e25a8d29b75d7a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
