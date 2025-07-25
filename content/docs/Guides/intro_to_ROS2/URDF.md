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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5KOSGM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIDbe1vzR1g4XKO%2F6HkHziS9OUN850d1e1v2gAWcxrndcAiArUxX93VFRAx7elby4Il48W8hQzVbt7%2BzYx1u%2BjDQRUCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM3Uoa1T00KWuGKJ5CKtwDEj7rIzxBWEgcO%2FeQkw7sDAjAJ4EXsZ5hsHVGISq3aIRKR1fOtZuevm88OfCMeFMe%2BwcwtvzkDfHuVLvtEeDPsaLM%2B6aEZIIgv3MHRXQKB7b2JtdNmI6rVQSUmFdIBxpRkD7ijadvpDeCmsGaDm03QdCaaLqGvQMyEpl39u9reIQmJZ7Fdcwe0vUCG%2BNM5jdfwtPlMMTXRAJ3qw%2FperyvaOCV6Hta23VSSitlesWCZrJ1Gl026CO7qn%2FU9AdgdM9r3ApaxZ3D%2B6QBOmFiujH89fejIxglcf7a1p%2BbXvCdpemVfotO0subm6NL2lUyg1O2C1Ju%2Fg64H5j%2FPygvSSSMHt781XExp658NkEahsm0oHZNJCcfqKHDpBBhymGOqGvr0Vu1qFLPz2YZTTvS0WxriLCmGZ1AOIc3FS8AINL7n7q64JzY0lpaY97JV%2FbvRWEPU5J3chI2C48Z5eysP%2FZZGTnslgq7m2%2B373zUDs%2B5owZ9gKFGkWD2pJFetytLIfibUPwoNU1pm9A5hI8V%2FfFN%2B5kD1zC1K5LVTQjGLkCZnVvKoRtOHtmXaIe7mgbbab6u3hNVrmswcU3GID2FuvkMzqi53%2F1W00gch4Zf1fYpfUdUfqfx5O3o79SvQLUw%2B9OLxAY6pgGNYx2ROLRIxkYPG5xlStItpBEeYFXASTOPnKJ3gjCGM1eR5dqEzvNummXFjLwbaSd02P8VCwjUyZsklnPksq0P151gH8LDS7csL21Hw5BWkdV8tVLkin%2BCqzgLM%2FNKXPUT0UTUbEqOKti5Gf%2B%2FRTUlt7OinijRlXqdudQC3iwSNsnPu0lR%2BTPW%2BPQvwFJ8r0CrwVkxFA%2F%2BV9tdcRYlE0qXGALZZmgq&X-Amz-Signature=cd6662a14a8758b7595e4fe6a2a91d6ef89a6adc8b336c8bdcd875bdd45753c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5KOSGM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIDbe1vzR1g4XKO%2F6HkHziS9OUN850d1e1v2gAWcxrndcAiArUxX93VFRAx7elby4Il48W8hQzVbt7%2BzYx1u%2BjDQRUCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM3Uoa1T00KWuGKJ5CKtwDEj7rIzxBWEgcO%2FeQkw7sDAjAJ4EXsZ5hsHVGISq3aIRKR1fOtZuevm88OfCMeFMe%2BwcwtvzkDfHuVLvtEeDPsaLM%2B6aEZIIgv3MHRXQKB7b2JtdNmI6rVQSUmFdIBxpRkD7ijadvpDeCmsGaDm03QdCaaLqGvQMyEpl39u9reIQmJZ7Fdcwe0vUCG%2BNM5jdfwtPlMMTXRAJ3qw%2FperyvaOCV6Hta23VSSitlesWCZrJ1Gl026CO7qn%2FU9AdgdM9r3ApaxZ3D%2B6QBOmFiujH89fejIxglcf7a1p%2BbXvCdpemVfotO0subm6NL2lUyg1O2C1Ju%2Fg64H5j%2FPygvSSSMHt781XExp658NkEahsm0oHZNJCcfqKHDpBBhymGOqGvr0Vu1qFLPz2YZTTvS0WxriLCmGZ1AOIc3FS8AINL7n7q64JzY0lpaY97JV%2FbvRWEPU5J3chI2C48Z5eysP%2FZZGTnslgq7m2%2B373zUDs%2B5owZ9gKFGkWD2pJFetytLIfibUPwoNU1pm9A5hI8V%2FfFN%2B5kD1zC1K5LVTQjGLkCZnVvKoRtOHtmXaIe7mgbbab6u3hNVrmswcU3GID2FuvkMzqi53%2F1W00gch4Zf1fYpfUdUfqfx5O3o79SvQLUw%2B9OLxAY6pgGNYx2ROLRIxkYPG5xlStItpBEeYFXASTOPnKJ3gjCGM1eR5dqEzvNummXFjLwbaSd02P8VCwjUyZsklnPksq0P151gH8LDS7csL21Hw5BWkdV8tVLkin%2BCqzgLM%2FNKXPUT0UTUbEqOKti5Gf%2B%2FRTUlt7OinijRlXqdudQC3iwSNsnPu0lR%2BTPW%2BPQvwFJ8r0CrwVkxFA%2F%2BV9tdcRYlE0qXGALZZmgq&X-Amz-Signature=080e9d3ee54fcedba37358c14c60b1e52e769a573b9ab488a101cc341cdd8e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
