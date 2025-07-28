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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBXN4DE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICkitcTDmwiGbONfJYzHkmZacak236X4Fb1QajQ%2FoUrhAiEApaEwf5qGR3D9uGM0EEtEjwS0DmCOPop0dZpMVnDLotYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkeGNe6KO0mWTaOWyrcA8KUMhFgj0LIp%2BRk7LwY2nXl2b%2B1aMk8RJnO3tvFQzutbv0B6GuMcw6JR7gxApTtADVGoNDxAD9sV7d4OXjH4DWwXfio7ivmbOiBQQQFPLHr7c5Ob6iSCCGe5jaY3Hwm1e62Jb8Nrz1OpvNnahYb6GKVpn3toxfIvHCqStJW8H0%2F%2BG1BE6qtJuJr6zaN5N51d9vt6jRQzTTnbqMGq5BfJbI51aPSPeemyQenCicDB6h3J6B2aCb2e%2FEZyc6JESsWFm0%2BeHyzptAGBYmqjQ%2FTThDr5FgZ4hHD%2BaipPIPd%2FoGtyKuq6Jfl3%2Bi9bnBh84%2F3v%2B%2B%2BbgD6FIXqkwuEJe9%2F%2FCXEbSvq%2B49UV4EQn3aipTFWJsxvS34zzELeeGAklB6MW%2BxbaOd27pBtRW2t96%2BjQ%2BBrYbJWeUaMZECG62AfU9fivxB%2FsRYHfevO68ysKx31evfKL6GJEaMlo18zZa9XooR9MqK2NNFf9lupcB%2F7aCggZtGSXxzdPUfd8SBCzFwwMLNK9FF%2FYfZRwpaeyJMpIl3UVgEyNcgKWyp%2BN209Y%2F1hfwJK2QZKl4ZwO8ZUBNKSVz2kAknN9OMUCf7ihOiSn7NKsIKoV1ldOFiEXt7XvNiel8vbzpMNJd5lZ9xcMIqLn8QGOqUBF8v91%2FDPqMTbSNsd9IeE61DrhrJ%2FKnbGl3Q73RR7vXRM7EKKCHz6yO9CCjqLd1cDLLv2jaFVmebI%2FdoZjHPYmhESCTs%2FAqSDf0p2MmOd%2Bh8MNu1Ju3BdYZmIY14H4%2BoH56rfZpvscRZ2DWMl%2FKGTijfbKE1k2C%2BkzQ6LYjHtUL%2FAtUCQndD4RuebXB%2BMpyk%2F78iSHMtiFQVkLjD7ORvCMPe5LoCM&X-Amz-Signature=5421dead7d40c3c95ff99bc58094c7b9782b5771751d67e9aee16c0d751fd6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBXN4DE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICkitcTDmwiGbONfJYzHkmZacak236X4Fb1QajQ%2FoUrhAiEApaEwf5qGR3D9uGM0EEtEjwS0DmCOPop0dZpMVnDLotYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkeGNe6KO0mWTaOWyrcA8KUMhFgj0LIp%2BRk7LwY2nXl2b%2B1aMk8RJnO3tvFQzutbv0B6GuMcw6JR7gxApTtADVGoNDxAD9sV7d4OXjH4DWwXfio7ivmbOiBQQQFPLHr7c5Ob6iSCCGe5jaY3Hwm1e62Jb8Nrz1OpvNnahYb6GKVpn3toxfIvHCqStJW8H0%2F%2BG1BE6qtJuJr6zaN5N51d9vt6jRQzTTnbqMGq5BfJbI51aPSPeemyQenCicDB6h3J6B2aCb2e%2FEZyc6JESsWFm0%2BeHyzptAGBYmqjQ%2FTThDr5FgZ4hHD%2BaipPIPd%2FoGtyKuq6Jfl3%2Bi9bnBh84%2F3v%2B%2B%2BbgD6FIXqkwuEJe9%2F%2FCXEbSvq%2B49UV4EQn3aipTFWJsxvS34zzELeeGAklB6MW%2BxbaOd27pBtRW2t96%2BjQ%2BBrYbJWeUaMZECG62AfU9fivxB%2FsRYHfevO68ysKx31evfKL6GJEaMlo18zZa9XooR9MqK2NNFf9lupcB%2F7aCggZtGSXxzdPUfd8SBCzFwwMLNK9FF%2FYfZRwpaeyJMpIl3UVgEyNcgKWyp%2BN209Y%2F1hfwJK2QZKl4ZwO8ZUBNKSVz2kAknN9OMUCf7ihOiSn7NKsIKoV1ldOFiEXt7XvNiel8vbzpMNJd5lZ9xcMIqLn8QGOqUBF8v91%2FDPqMTbSNsd9IeE61DrhrJ%2FKnbGl3Q73RR7vXRM7EKKCHz6yO9CCjqLd1cDLLv2jaFVmebI%2FdoZjHPYmhESCTs%2FAqSDf0p2MmOd%2Bh8MNu1Ju3BdYZmIY14H4%2BoH56rfZpvscRZ2DWMl%2FKGTijfbKE1k2C%2BkzQ6LYjHtUL%2FAtUCQndD4RuebXB%2BMpyk%2F78iSHMtiFQVkLjD7ORvCMPe5LoCM&X-Amz-Signature=8d9abe1f124608c6f1d090314a14aa88938e7b80c94c1b963cfbc5f06f4a9e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
