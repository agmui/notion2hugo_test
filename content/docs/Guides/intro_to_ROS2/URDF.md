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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIXEAMUM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN5piL4rhDu%2BPYtTMiSDPXzp1tHITovMyERqbsJdyZiAiANUpCKfCmBMUge3iM92saDjbv4iIESN0UeLUpp4jYCiiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2xv7MvxVEFL269y2KtwDMf2IuzOvnfmraZnSL98UEsZX%2FO604%2F2FuddtawtAV2HUGkv7KLIASPm7B1wB6a%2F7LrKane3yaobYB3F6sDdnVv%2BQY%2FcOQjEVtca2slK5IwjIfSCYDpUGGrUd%2BDxHMElmjFmPWJ2RU6RElC10ASrpVtlJiKmWi635wDitcLlNNmSIpyfbaxzUKdDuoaYKd2C%2B0qNw3HcwR70G966G%2BeQcb2DGFORYo%2BCQlytcKSuMTIXR1xJWf9qKP15MMeqgC5UfO1hb48d1%2B4TRYQg7OLQckP5a7QrgesQPet2q61EMP666Y%2Fn%2BaRlqBocl0LCxmL9w7w%2FRekbCd8KBGtEiczn5Rv0GGWOafaBiQ7j8b%2B3w4DPoJnQLNf7pQDfN51JbGy7UbC0VFfgtVi%2Bo32HHT1ubYg0%2BlqiT2EiPm9V1JtHF2mEVe3MPFtUc%2F6w4bvjsLWKRzhFwd7Fxy4SR7Ig9WF7cks65yv%2BYKDb3oLMph4pZjFjwkLHTnudTf7q%2BH7NmDy5%2F%2FjCD5r93YhLobIMXhbz4B7c2R6VAAIabCeBDnR4tnALCUKGwMXDpO9Kmk1zX3FTLTMeEeCnfJPvPTXv0uP5IKK6nmL4OFnCM1sZAlYqj%2BnKnab%2F3IOqmgqKDbq4wxqrqvAY6pgGy6RLbODd47W6tA4FEqy%2BEOduIRlvhmiiLa%2BY2WDxcd034Oz9gPc4VL75j0%2BzJ%2FsHSDbwXsfPf1MvsVP%2BgxS5VoQ%2F21KLYhE98Corc1QdzBN2XfILFrl92xQYAiKh1%2FWdhcl73yvE1BYadehfu2oupuqJDXhxGhIn6tSDcV%2BokZo3yrRh%2BbK1UPO8OhahMWe6GOJb3wW86LoOKjGgURhlRxTRniQHY&X-Amz-Signature=a5bfef69870288dd3d344001e2af6ebc59ebc06678ceca1bb4c7b5b4d18c6ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIXEAMUM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN5piL4rhDu%2BPYtTMiSDPXzp1tHITovMyERqbsJdyZiAiANUpCKfCmBMUge3iM92saDjbv4iIESN0UeLUpp4jYCiiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2xv7MvxVEFL269y2KtwDMf2IuzOvnfmraZnSL98UEsZX%2FO604%2F2FuddtawtAV2HUGkv7KLIASPm7B1wB6a%2F7LrKane3yaobYB3F6sDdnVv%2BQY%2FcOQjEVtca2slK5IwjIfSCYDpUGGrUd%2BDxHMElmjFmPWJ2RU6RElC10ASrpVtlJiKmWi635wDitcLlNNmSIpyfbaxzUKdDuoaYKd2C%2B0qNw3HcwR70G966G%2BeQcb2DGFORYo%2BCQlytcKSuMTIXR1xJWf9qKP15MMeqgC5UfO1hb48d1%2B4TRYQg7OLQckP5a7QrgesQPet2q61EMP666Y%2Fn%2BaRlqBocl0LCxmL9w7w%2FRekbCd8KBGtEiczn5Rv0GGWOafaBiQ7j8b%2B3w4DPoJnQLNf7pQDfN51JbGy7UbC0VFfgtVi%2Bo32HHT1ubYg0%2BlqiT2EiPm9V1JtHF2mEVe3MPFtUc%2F6w4bvjsLWKRzhFwd7Fxy4SR7Ig9WF7cks65yv%2BYKDb3oLMph4pZjFjwkLHTnudTf7q%2BH7NmDy5%2F%2FjCD5r93YhLobIMXhbz4B7c2R6VAAIabCeBDnR4tnALCUKGwMXDpO9Kmk1zX3FTLTMeEeCnfJPvPTXv0uP5IKK6nmL4OFnCM1sZAlYqj%2BnKnab%2F3IOqmgqKDbq4wxqrqvAY6pgGy6RLbODd47W6tA4FEqy%2BEOduIRlvhmiiLa%2BY2WDxcd034Oz9gPc4VL75j0%2BzJ%2FsHSDbwXsfPf1MvsVP%2BgxS5VoQ%2F21KLYhE98Corc1QdzBN2XfILFrl92xQYAiKh1%2FWdhcl73yvE1BYadehfu2oupuqJDXhxGhIn6tSDcV%2BokZo3yrRh%2BbK1UPO8OhahMWe6GOJb3wW86LoOKjGgURhlRxTRniQHY&X-Amz-Signature=4c21a9258a5b95dd036a84e50cbe57c7fd9b7a23a2aeddaf569acbc39addc450&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
