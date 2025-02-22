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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4HE43OH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHRWB2FGVyhhM5pv%2FaoYSaGnn8RME97ShIxpNpZVNiBgIgLHqe7%2BwVei2%2BQlQS22HLZtwl0Bs9CkJsSh2d9CDp8NUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWJ6s9V094%2FAeuCPircA9Xp6JH61v%2FTh3TiUmwqYcVK7TyUuj1m%2FOOqPl2To7psD8lx%2FRL%2F9mrwpV0yfL9wta%2BzJKFl22ZV9J5x7yOgtFWEEAfMbE2BaiivnyJhCS7CnC8FfJJnQe90ridsZsPiX6j3074i8gK7U35kxoxw6ZVFqXUf2hIR5cyAICyAwBQv9o%2BxdLAtKo4lzaUuZ5Wm5qHmL2i9iTAXKlK7VwW9nxi0vNbS6YTuwYlB0%2F7EL9sWMdJ%2Br17w1A04SDyG5flSOUbRA1XJILJI%2Fr8D2TD8xWKnRxlfVOXLjNANyT2J215tbLXH%2BA27HAPQ%2BYl%2Bp2fMlLjtiXs7HMdgq8OxoXdDsdNsXQJET%2Frw3M%2FDZHe%2BSppfjo%2B8FXBfS2k1wPLKjpcpVsHKjsj9C236kmkFAChTfqub66ey%2BjR5PUKUQ41Dk3Vp3%2FNS2Ng14yy%2FB2KDkqg88nhW3KSPtFG10dSsuVy78sBgXKsZxLDPRlxb%2B%2BPOh7Il6Q9Gar4tF2iEE5AP2UcARUxFxwpYbcSSEyB2IVdPEMZOAUUfUyAQoy6WwZEoRp6rXO%2F8XGKJybWl5WcKyDyLfLPeuz%2BE769vwHcyYhZfz%2FbnjvpIt4K2%2B79pUrcNFvLPzfuyvWPTjUzSxLwrMJPh570GOqUBaa%2FuccIZO8sSeokcriork9uM%2F2bqe2bIncpEk2ypMwIVWvUb5kZ13byKvlpxb9mAvP2ONdT92Udi%2Bf%2FH1uj5E09fjFufFMDWkxClRGldJjkh1zOxfOU5mL7w3K1EJbRqEfA986jAsu0AFd2UqukrpDK4xWirpS4MTq4yY%2FpCCc8nE%2Fsc6wn7dWG0zVls2ou9M4%2FP2TTucBiLWHuRaHyd%2B1fxGGG7&X-Amz-Signature=0ae0a46381e6966d6549fff57b8588b8b28a0c1addbd0c361c6e7aab7b706f44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4HE43OH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHRWB2FGVyhhM5pv%2FaoYSaGnn8RME97ShIxpNpZVNiBgIgLHqe7%2BwVei2%2BQlQS22HLZtwl0Bs9CkJsSh2d9CDp8NUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWJ6s9V094%2FAeuCPircA9Xp6JH61v%2FTh3TiUmwqYcVK7TyUuj1m%2FOOqPl2To7psD8lx%2FRL%2F9mrwpV0yfL9wta%2BzJKFl22ZV9J5x7yOgtFWEEAfMbE2BaiivnyJhCS7CnC8FfJJnQe90ridsZsPiX6j3074i8gK7U35kxoxw6ZVFqXUf2hIR5cyAICyAwBQv9o%2BxdLAtKo4lzaUuZ5Wm5qHmL2i9iTAXKlK7VwW9nxi0vNbS6YTuwYlB0%2F7EL9sWMdJ%2Br17w1A04SDyG5flSOUbRA1XJILJI%2Fr8D2TD8xWKnRxlfVOXLjNANyT2J215tbLXH%2BA27HAPQ%2BYl%2Bp2fMlLjtiXs7HMdgq8OxoXdDsdNsXQJET%2Frw3M%2FDZHe%2BSppfjo%2B8FXBfS2k1wPLKjpcpVsHKjsj9C236kmkFAChTfqub66ey%2BjR5PUKUQ41Dk3Vp3%2FNS2Ng14yy%2FB2KDkqg88nhW3KSPtFG10dSsuVy78sBgXKsZxLDPRlxb%2B%2BPOh7Il6Q9Gar4tF2iEE5AP2UcARUxFxwpYbcSSEyB2IVdPEMZOAUUfUyAQoy6WwZEoRp6rXO%2F8XGKJybWl5WcKyDyLfLPeuz%2BE769vwHcyYhZfz%2FbnjvpIt4K2%2B79pUrcNFvLPzfuyvWPTjUzSxLwrMJPh570GOqUBaa%2FuccIZO8sSeokcriork9uM%2F2bqe2bIncpEk2ypMwIVWvUb5kZ13byKvlpxb9mAvP2ONdT92Udi%2Bf%2FH1uj5E09fjFufFMDWkxClRGldJjkh1zOxfOU5mL7w3K1EJbRqEfA986jAsu0AFd2UqukrpDK4xWirpS4MTq4yY%2FpCCc8nE%2Fsc6wn7dWG0zVls2ou9M4%2FP2TTucBiLWHuRaHyd%2B1fxGGG7&X-Amz-Signature=222a577497022255d9be93f6c8506d37f899e09a0cddb57496ba21ac7bd6f8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
