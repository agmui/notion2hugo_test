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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCEUBP2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0y%2FedLJwtlJUesSizUMWs%2FQBJW1nlHJT4U5ueRnb2bAiEAhLSPoYC%2FeeH93SfZm15rbmdzItFYRHQnXbL9PHEf%2FmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKfYYy%2Bl%2Fh4%2BHEyt2yrcAwmWh5lByuUIMG1mpa805RRKzUSCjn20O3wi4al6vVcXrSKUSXkUM7oHRjOpGRrdaTCxX%2FkNo5dxc4ww0u2jmeRKx9s%2FRHeTwbIMeAkE5daV2QVkgKIs%2B8NOOyi6fHrfvnzftSbjLUayARqWQNAD%2BXjjLQIZjJhKaTOBTLn5ntIhPfwXge%2B8uktr1jVBJZv8PKUZWOMlh%2FTMNnaL82PAeMClHjUGUO7puvTAN09bl6QNJyAtUNR%2B6V1PPX2cf7cg8izcnpFeS92OzDMCUp%2BTn68v1SqGRvcz1PuF1XDfwOfF76TYIFM%2BmkQdmEuaMpXwH6E4cny3fu3bzKOslM0m%2FmuV1P4pVyrY0BSmu9kfQLe5R7euW3DmodAJBqnGlAcCxoouaHaGI8USAVamsmec4sUkv%2FmYZOrKPOhCYdSUh37s9fNYEGbCmTDeac3x2GzNvx3VdS5MeWV6bgpwEsp7N9X5J2y77oWPwsHEp1t0v2NjWLLh7vVDEEOFzPKRTNJqua8D6svhvwDMWrQpVPbM%2BM4Bik%2FjcYJEdnAT%2F24QVEgP8mBEYJU0sV849cjytBeTuxJN4LoIQqQYUtsnMoWW3DTxVKu%2B%2BI0ww4lzP%2F1eT2eNwVlp7ZlnlulpTjPLMJyy5MAGOqUBoB%2Bf%2BD50A%2FhxPWymth5oK9fmi4fYFti32sBRB3XdPEijsLneVAuDU9erzsKrYTqaVCJc2BHNjOiXQ4T7dBzGjEABdXeMRqldeaU%2BFvLezj7Uxwk1I%2BPAV2XeY7A1QH89fkinN%2FpGCvN0kxxSYqm%2FJHHHNR1kiMUr5yIvl9orR9zpAEnRWooYjja58OmwhtBrOhtD415QCPZvfoPH62aKMhufxwm5&X-Amz-Signature=6c85b1536c3a5b183d0a52e10848abacca697927776b3820681066b19779e29f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCEUBP2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0y%2FedLJwtlJUesSizUMWs%2FQBJW1nlHJT4U5ueRnb2bAiEAhLSPoYC%2FeeH93SfZm15rbmdzItFYRHQnXbL9PHEf%2FmIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKfYYy%2Bl%2Fh4%2BHEyt2yrcAwmWh5lByuUIMG1mpa805RRKzUSCjn20O3wi4al6vVcXrSKUSXkUM7oHRjOpGRrdaTCxX%2FkNo5dxc4ww0u2jmeRKx9s%2FRHeTwbIMeAkE5daV2QVkgKIs%2B8NOOyi6fHrfvnzftSbjLUayARqWQNAD%2BXjjLQIZjJhKaTOBTLn5ntIhPfwXge%2B8uktr1jVBJZv8PKUZWOMlh%2FTMNnaL82PAeMClHjUGUO7puvTAN09bl6QNJyAtUNR%2B6V1PPX2cf7cg8izcnpFeS92OzDMCUp%2BTn68v1SqGRvcz1PuF1XDfwOfF76TYIFM%2BmkQdmEuaMpXwH6E4cny3fu3bzKOslM0m%2FmuV1P4pVyrY0BSmu9kfQLe5R7euW3DmodAJBqnGlAcCxoouaHaGI8USAVamsmec4sUkv%2FmYZOrKPOhCYdSUh37s9fNYEGbCmTDeac3x2GzNvx3VdS5MeWV6bgpwEsp7N9X5J2y77oWPwsHEp1t0v2NjWLLh7vVDEEOFzPKRTNJqua8D6svhvwDMWrQpVPbM%2BM4Bik%2FjcYJEdnAT%2F24QVEgP8mBEYJU0sV849cjytBeTuxJN4LoIQqQYUtsnMoWW3DTxVKu%2B%2BI0ww4lzP%2F1eT2eNwVlp7ZlnlulpTjPLMJyy5MAGOqUBoB%2Bf%2BD50A%2FhxPWymth5oK9fmi4fYFti32sBRB3XdPEijsLneVAuDU9erzsKrYTqaVCJc2BHNjOiXQ4T7dBzGjEABdXeMRqldeaU%2BFvLezj7Uxwk1I%2BPAV2XeY7A1QH89fkinN%2FpGCvN0kxxSYqm%2FJHHHNR1kiMUr5yIvl9orR9zpAEnRWooYjja58OmwhtBrOhtD415QCPZvfoPH62aKMhufxwm5&X-Amz-Signature=dbb42e5a0081d8a6900af8f2aec644c5bc36a68c519ede9a323e16ac6d9dddd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
