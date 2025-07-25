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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GEICGC6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCOEO2kpp1OnKRdoVWyrFLZdZv9Nw2NfmnXDeG9oRH%2FdQIhAIH55IhkLQYvnO4Y7XTuTgAK2JDviTEZunBQ%2F0B%2F%2FxgCKv8DCEUQABoMNjM3NDIzMTgzODA1IgxYRE6tDTkLCDRyR6Uq3AOG844TtEIrTc6H6vIL03KCPkfn9Cn7%2BDZ%2Brz4L3NoShOjmqtHhi2AdPpC%2BPm%2FNRjAONx%2FXA5F82UoGyfbJQX%2BkRTSXWkRqPeEzbHAkZQBv8C5hmMuoVngpAl%2BBLYAUInBHA9Timrv0BnGVwEYFB7g%2BPJKLUAbymKR9eAaN9Ek91jj2wBpBBUXel0%2FBkd5h7fEnifCz9ZgNesjzn0x%2FcCxvyk5twnJ6fgGCz4Nw6bdrTuM3nVZzwhgml2U9XGwmlvL1H6HFDx4bLKzfc33DnjbOsWvFTHV1aFULDT50k9b%2BDMif1myh9Xz3WBRjHtXYxRJFsAVWMRy4y3MikZPQz6%2B0Fi8Qeh%2FCZ2krFORsi%2F9mKx0ZWqeqIizy10QPxeCMPxOWdEsQfZcplVsK5kI2hBlrFfCDWhR3ZK4SOk%2Be6nmCrJFo%2Bt3yIEg%2FPL9d%2F%2BAclOpZ8NwoguGPA1vB4dqzAUUt%2BkJvKHR%2FXKcZ2nv%2FpTzGWLLXoBcwzykTiIzuITyXHKmBSKJ4EZzatn%2B2D7csJFGX5RotULIa9LIoeWOdd0X2ccZHxtovVCVXuABVges5srJvx0go8qEo8kWCRgkEA9M5vhdiGn%2Fkbvnkhf9AieOit2iJYOiTLvs5AvO9DjD%2B4Y3EBjqkAQ5cRCakdUe4ZUiFV6RZro1qAehQA0wpLzgOEncQ%2FAubJUgpHwOdFXHEknv74Tr8RWII7NfKf%2F353BYQ8sx9%2FcAYhtQXg1lp3JxWjuteS2vUOC9pp%2BEh85FDRmP0jgobeqcdTEwe7PNYYqe3EuoNMaEjL3wf7tnwwmCyPbA6bmegb%2FTUcmwPoozREnfdMozcKMIqIDFL1B934spxGRXfcZhAmhvm&X-Amz-Signature=c7dc4118c8ec44f23caf35d3f488e8328d62bd44cc8b546d629749e43b458524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GEICGC6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCOEO2kpp1OnKRdoVWyrFLZdZv9Nw2NfmnXDeG9oRH%2FdQIhAIH55IhkLQYvnO4Y7XTuTgAK2JDviTEZunBQ%2F0B%2F%2FxgCKv8DCEUQABoMNjM3NDIzMTgzODA1IgxYRE6tDTkLCDRyR6Uq3AOG844TtEIrTc6H6vIL03KCPkfn9Cn7%2BDZ%2Brz4L3NoShOjmqtHhi2AdPpC%2BPm%2FNRjAONx%2FXA5F82UoGyfbJQX%2BkRTSXWkRqPeEzbHAkZQBv8C5hmMuoVngpAl%2BBLYAUInBHA9Timrv0BnGVwEYFB7g%2BPJKLUAbymKR9eAaN9Ek91jj2wBpBBUXel0%2FBkd5h7fEnifCz9ZgNesjzn0x%2FcCxvyk5twnJ6fgGCz4Nw6bdrTuM3nVZzwhgml2U9XGwmlvL1H6HFDx4bLKzfc33DnjbOsWvFTHV1aFULDT50k9b%2BDMif1myh9Xz3WBRjHtXYxRJFsAVWMRy4y3MikZPQz6%2B0Fi8Qeh%2FCZ2krFORsi%2F9mKx0ZWqeqIizy10QPxeCMPxOWdEsQfZcplVsK5kI2hBlrFfCDWhR3ZK4SOk%2Be6nmCrJFo%2Bt3yIEg%2FPL9d%2F%2BAclOpZ8NwoguGPA1vB4dqzAUUt%2BkJvKHR%2FXKcZ2nv%2FpTzGWLLXoBcwzykTiIzuITyXHKmBSKJ4EZzatn%2B2D7csJFGX5RotULIa9LIoeWOdd0X2ccZHxtovVCVXuABVges5srJvx0go8qEo8kWCRgkEA9M5vhdiGn%2Fkbvnkhf9AieOit2iJYOiTLvs5AvO9DjD%2B4Y3EBjqkAQ5cRCakdUe4ZUiFV6RZro1qAehQA0wpLzgOEncQ%2FAubJUgpHwOdFXHEknv74Tr8RWII7NfKf%2F353BYQ8sx9%2FcAYhtQXg1lp3JxWjuteS2vUOC9pp%2BEh85FDRmP0jgobeqcdTEwe7PNYYqe3EuoNMaEjL3wf7tnwwmCyPbA6bmegb%2FTUcmwPoozREnfdMozcKMIqIDFL1B934spxGRXfcZhAmhvm&X-Amz-Signature=8b3c414d720623a65929ee2594dca7ab974b60214411c17b01307a6bcacbe543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
