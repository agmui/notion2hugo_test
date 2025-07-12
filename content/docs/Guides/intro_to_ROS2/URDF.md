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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GUATSI6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyy8oYpPB1zPe1GNYXBNGKMJeN1ubg62l0rSmrYszNygIgf2HybQh8VY%2Bsui8uFblljutFan1WMLUB7YpGLNXmJ%2FsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN4%2F5g1kep%2FPYWVRSrcA0ZK5HaeJNUvtfHZJSlFmc2YmyRIlpaeK3zsTyuodS%2FOnsZlsiuRWezBLaQ%2FpJbnqD%2BAr0kyU3B2uPitm2P7kZDWExddDkLMR1kGBlJd9eNosZzWf3ntFDFK823w3QBaaunSFyXxI%2BLKPxvoU1k0pcV10taP9diTncU1zkFm%2FDGdBtcfEHykTR6gkOVQbV%2Bf9T3wxI8reHpLOmmHKLoK7hfQdJkpMcP71iqAsKNr1j9waVJJ86SD%2FXD%2FlQ%2F7MOfidLW3gPHNnwbO5P1HpQ6VNyiQbJU7YblUe6U9VieDQXpK3GV9rD8km90xJeIbP1YwpkPiMFO3ueVBdMHnpTy%2BP2gm%2B0ai%2FtWYPRMz2gMwhJaJuzJMg%2Fii95kPFDDfUuOQ9fv1SLG%2FMYKIRPT3FoKIEpJeLeHy1uexA1kVP%2FMrm%2BCO7po2yE1WT%2FK4XwJYFTXVlyJy4Jv2Q6rwWKJ1WyrPv%2FcMbcrA9aPCSMJLBWuBH3icvfti6yxtmOUcfcZB9gWRQ1SYiNRrTz2EAqaRhRbosvDJPFya22%2Fbw%2FULK6hQXRbBh5jXYJJt9h3i%2BQQrC5Jm9cwH4Bg5FAp5ed9Xdzcv17J5C3qaHQp3uFCdahYv9n%2F1jMiigQ8wMhvYrDjOMPv8yMMGOqUBznEANAPtNcobybH77YEAQOX4IsAKF2V2N%2FgXZtBNKQBhfc%2FDg3AIk1tleogRdOlV3O9OU7kVu85bD2g5NMPVRq72GKUb7e7t7YKqkhEbIMYZ7GB299kJKIVVpmwJjgujT1ah8yGsFCSyKx5kRKnGvw3VxbW9FomlxaXYi8%2FMFKlgoi2rJapdwOQDedX3tUamnIIUDQ2uTUTyYF03JJScqIDbO%2BO1&X-Amz-Signature=259b16ec8c5e854e48d2b06b20b09042369bdb13f57424083f7a40e30a2b8dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GUATSI6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyy8oYpPB1zPe1GNYXBNGKMJeN1ubg62l0rSmrYszNygIgf2HybQh8VY%2Bsui8uFblljutFan1WMLUB7YpGLNXmJ%2FsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN4%2F5g1kep%2FPYWVRSrcA0ZK5HaeJNUvtfHZJSlFmc2YmyRIlpaeK3zsTyuodS%2FOnsZlsiuRWezBLaQ%2FpJbnqD%2BAr0kyU3B2uPitm2P7kZDWExddDkLMR1kGBlJd9eNosZzWf3ntFDFK823w3QBaaunSFyXxI%2BLKPxvoU1k0pcV10taP9diTncU1zkFm%2FDGdBtcfEHykTR6gkOVQbV%2Bf9T3wxI8reHpLOmmHKLoK7hfQdJkpMcP71iqAsKNr1j9waVJJ86SD%2FXD%2FlQ%2F7MOfidLW3gPHNnwbO5P1HpQ6VNyiQbJU7YblUe6U9VieDQXpK3GV9rD8km90xJeIbP1YwpkPiMFO3ueVBdMHnpTy%2BP2gm%2B0ai%2FtWYPRMz2gMwhJaJuzJMg%2Fii95kPFDDfUuOQ9fv1SLG%2FMYKIRPT3FoKIEpJeLeHy1uexA1kVP%2FMrm%2BCO7po2yE1WT%2FK4XwJYFTXVlyJy4Jv2Q6rwWKJ1WyrPv%2FcMbcrA9aPCSMJLBWuBH3icvfti6yxtmOUcfcZB9gWRQ1SYiNRrTz2EAqaRhRbosvDJPFya22%2Fbw%2FULK6hQXRbBh5jXYJJt9h3i%2BQQrC5Jm9cwH4Bg5FAp5ed9Xdzcv17J5C3qaHQp3uFCdahYv9n%2F1jMiigQ8wMhvYrDjOMPv8yMMGOqUBznEANAPtNcobybH77YEAQOX4IsAKF2V2N%2FgXZtBNKQBhfc%2FDg3AIk1tleogRdOlV3O9OU7kVu85bD2g5NMPVRq72GKUb7e7t7YKqkhEbIMYZ7GB299kJKIVVpmwJjgujT1ah8yGsFCSyKx5kRKnGvw3VxbW9FomlxaXYi8%2FMFKlgoi2rJapdwOQDedX3tUamnIIUDQ2uTUTyYF03JJScqIDbO%2BO1&X-Amz-Signature=6be8a4651de2645afa6e55f46252fbaee93715fa32fd5a6447f487084f626943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
