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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOMQLH5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyztgAGj50L5zMsFKKr6JbUDcInnOlGs82fYbpDGfhwIgMogmGbR1quiMMwq%2FVVL4EJRUCt1%2BLBQN%2BibbJ5d2ja8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrldZS1RmtH7XMPoSrcA5IizOok36CzLajLjqIT5vpgkwaTgPePTd%2BWXwU8NBikNMIWWg%2FQA83Y98qHcmOrgLWYoVctxGiCRRLqNrmgTsIZKgXLvMvLnLhrRLesg5R6%2BIxuMD%2FK9NJc0pssMn5LByQM3vdSky3OhlJD3KIb8%2B1%2FQN6FQmBvECbsfKTIZgcZHN%2B9J1jpn6ZhEI%2B7HuewYIujfP588ghk9%2BmsnK0ASbRlxoh8htibmFI6OymKdLyQQF9ZUbY7ApsontkMu0hucHdPcsiK79hjTnV%2F4PF27YiEF66MnAgQg1MP9ZUuCjIq7S%2FhGvGyIlvXvZXlJ9o%2BtZlJe97hBJDuM2gk69axQAGu8OC%2B%2Fh9pzM41%2FFoGGpv%2FPTHU89tQ5d0ZWReMfL8crg9FYr1FtU%2FKAVdQU2x%2BNm3UFGX%2BzSmp3x%2Fq1Ihcuh%2FvslQwmW9wk1uOeCuijXIR0DNKur%2BDRBTHixMn1KUs10DAcnKo%2Bw7PoLrmvEfKTUVZSdXcEMIIDVoIkzXvQG3PfZat4GOCMEUbBpGD%2BZuR4NMdu%2Ff7VjF3nbsnBAHv3JDv8%2FdfEX3RI8bxtpyTLr2UnZT7kxt2u85%2B7j%2FvuInC2cSTK8iKFRpbBMe5eDrnqDXnrbdxaCzzP5qzMJs1MMmhxcAGOqUBjZB%2FHGNRWrsbHStsx1GRVEjx5VqOhS1T48OkDDg%2FskzuN2d0pcpsnnN2baHHe6BJBABgRHzLlOmDU0lhkD8yQ0Q0cSrxuA7PD1p40yKXGYcCuI3r31%2F5GzoU%2F08Y9iRMJkq5KM5jNkHUoptnQTexDFV266%2FSSfYT%2BUj9ltW2UxE4zGV%2BNOYEQ0SW8e63kdQRSqjcQq1X0nhHpsqEceTGdTxydYdv&X-Amz-Signature=d5de1424b54225998f8ea25940642bf16ea933c16319d601c58b8c0237b3a6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOMQLH5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyztgAGj50L5zMsFKKr6JbUDcInnOlGs82fYbpDGfhwIgMogmGbR1quiMMwq%2FVVL4EJRUCt1%2BLBQN%2BibbJ5d2ja8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrldZS1RmtH7XMPoSrcA5IizOok36CzLajLjqIT5vpgkwaTgPePTd%2BWXwU8NBikNMIWWg%2FQA83Y98qHcmOrgLWYoVctxGiCRRLqNrmgTsIZKgXLvMvLnLhrRLesg5R6%2BIxuMD%2FK9NJc0pssMn5LByQM3vdSky3OhlJD3KIb8%2B1%2FQN6FQmBvECbsfKTIZgcZHN%2B9J1jpn6ZhEI%2B7HuewYIujfP588ghk9%2BmsnK0ASbRlxoh8htibmFI6OymKdLyQQF9ZUbY7ApsontkMu0hucHdPcsiK79hjTnV%2F4PF27YiEF66MnAgQg1MP9ZUuCjIq7S%2FhGvGyIlvXvZXlJ9o%2BtZlJe97hBJDuM2gk69axQAGu8OC%2B%2Fh9pzM41%2FFoGGpv%2FPTHU89tQ5d0ZWReMfL8crg9FYr1FtU%2FKAVdQU2x%2BNm3UFGX%2BzSmp3x%2Fq1Ihcuh%2FvslQwmW9wk1uOeCuijXIR0DNKur%2BDRBTHixMn1KUs10DAcnKo%2Bw7PoLrmvEfKTUVZSdXcEMIIDVoIkzXvQG3PfZat4GOCMEUbBpGD%2BZuR4NMdu%2Ff7VjF3nbsnBAHv3JDv8%2FdfEX3RI8bxtpyTLr2UnZT7kxt2u85%2B7j%2FvuInC2cSTK8iKFRpbBMe5eDrnqDXnrbdxaCzzP5qzMJs1MMmhxcAGOqUBjZB%2FHGNRWrsbHStsx1GRVEjx5VqOhS1T48OkDDg%2FskzuN2d0pcpsnnN2baHHe6BJBABgRHzLlOmDU0lhkD8yQ0Q0cSrxuA7PD1p40yKXGYcCuI3r31%2F5GzoU%2F08Y9iRMJkq5KM5jNkHUoptnQTexDFV266%2FSSfYT%2BUj9ltW2UxE4zGV%2BNOYEQ0SW8e63kdQRSqjcQq1X0nhHpsqEceTGdTxydYdv&X-Amz-Signature=a83ce2627898dc19c5f8775d17a1856b7cca2ee7e8dc1374538a52a82eb62376&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
