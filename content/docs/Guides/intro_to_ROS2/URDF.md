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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UYAFVQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICcBkTo3VoRZtzLn7P78Yw7tBvXQC2nP9cBeVT%2BHPL2eAiBlHl03JGHXdXRHYLpJoPTdptIyHPsAeI76jn6sNpwfwiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDufjDELDoRrEqfvnKtwDrl2lfyFL4%2BUcEk3PcADWRHJHah6yHBubvohXebgcZIQ0cevodgfTbz10Uy3p5TfWJQ3oNaG8HAR9%2BhpC2Lzo19mcRO9ihrm73jnLRUE2D%2FZ%2FCN2dOpeLDLbD7%2FXn2Bhh6C4h8iKSGHnqnTAFAJU5oDXsor2RMxVQKsbu%2Bb%2BDuf3%2FX1Aa6LV%2BxZygV5Vp4NFp0OKSs%2FeJaUF%2BJylqYfytycJI3l1%2BPbpVEaonBuae6c0eoKn44G4UoEoQ8Kwf05na4bc%2FGA9t444CU8T%2F%2FkMADtG0xOt%2FhXQmWUAtzK9IZeER92pytVnSS1FYH9coHhNIwM%2FQr5vP4Phf9K9fNc%2F%2FYzmsWso32ky2p7iwKmvr%2FcbLyElCHsRajoFeLbc7b5FnDiggpsKnl90Nke6nMmTA4T47qWpNrkbuSzsjrIGfjAYsLs2qukS6oHGvQNtWIh7oUl36%2FlEpHHUCLxFUuxHGmmc5%2FCg6g442WD935qVYtXj8yD4HvDelrJcJJeyo6HWPYB3lCg5Q374SCWZA6x6qzG2J%2B2WpJvA1JoTgap4GyQw6ks4IIhPLfYk2uKGmhhwA5BlWod%2FYkb8jTuimYvvnjYd4eMsZvSa7piMpkLI7uCfqBaVdXIsGKhe%2FQxcw6rirvwY6pgEKaH6K3WAuLqbJE03%2FZVTWxrMBBsUoZR3x663z6MguKb1OWsSsyECk7rLru%2F0wapfnQAQdDl7iBbypRli7UMkjlIGmI2KpqDqUM1Qa8LaMwYWEYpvuTcmpBq83Asbecvb3rlYDwS0IdyRO%2BVf8i5AjQRlaDuyN99qdEKbfj%2B4aM2UW7VhJqKTnqYpkDPbp%2BGiCPb%2BKZaThzxnzvYP6u8wOcVlFLrTa&X-Amz-Signature=0a071797a33aa507cbff0d1844c7a3851cf5fd40bf1eda25ee04742419c4ea08&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UYAFVQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICcBkTo3VoRZtzLn7P78Yw7tBvXQC2nP9cBeVT%2BHPL2eAiBlHl03JGHXdXRHYLpJoPTdptIyHPsAeI76jn6sNpwfwiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDufjDELDoRrEqfvnKtwDrl2lfyFL4%2BUcEk3PcADWRHJHah6yHBubvohXebgcZIQ0cevodgfTbz10Uy3p5TfWJQ3oNaG8HAR9%2BhpC2Lzo19mcRO9ihrm73jnLRUE2D%2FZ%2FCN2dOpeLDLbD7%2FXn2Bhh6C4h8iKSGHnqnTAFAJU5oDXsor2RMxVQKsbu%2Bb%2BDuf3%2FX1Aa6LV%2BxZygV5Vp4NFp0OKSs%2FeJaUF%2BJylqYfytycJI3l1%2BPbpVEaonBuae6c0eoKn44G4UoEoQ8Kwf05na4bc%2FGA9t444CU8T%2F%2FkMADtG0xOt%2FhXQmWUAtzK9IZeER92pytVnSS1FYH9coHhNIwM%2FQr5vP4Phf9K9fNc%2F%2FYzmsWso32ky2p7iwKmvr%2FcbLyElCHsRajoFeLbc7b5FnDiggpsKnl90Nke6nMmTA4T47qWpNrkbuSzsjrIGfjAYsLs2qukS6oHGvQNtWIh7oUl36%2FlEpHHUCLxFUuxHGmmc5%2FCg6g442WD935qVYtXj8yD4HvDelrJcJJeyo6HWPYB3lCg5Q374SCWZA6x6qzG2J%2B2WpJvA1JoTgap4GyQw6ks4IIhPLfYk2uKGmhhwA5BlWod%2FYkb8jTuimYvvnjYd4eMsZvSa7piMpkLI7uCfqBaVdXIsGKhe%2FQxcw6rirvwY6pgEKaH6K3WAuLqbJE03%2FZVTWxrMBBsUoZR3x663z6MguKb1OWsSsyECk7rLru%2F0wapfnQAQdDl7iBbypRli7UMkjlIGmI2KpqDqUM1Qa8LaMwYWEYpvuTcmpBq83Asbecvb3rlYDwS0IdyRO%2BVf8i5AjQRlaDuyN99qdEKbfj%2B4aM2UW7VhJqKTnqYpkDPbp%2BGiCPb%2BKZaThzxnzvYP6u8wOcVlFLrTa&X-Amz-Signature=1689af2927eb0cb778b581d8da8da7f1d35ef3b6c849a21f84711120f5e188dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
