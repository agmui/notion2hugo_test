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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DKHNIQF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDs5QBq%2BuxgEU8gBQrRvGy36%2BJPpXtBn6gGxtjsqbTAeAIhAM6158QfEtAwl75iGWW%2B241NtyvtQPRDfUE2eqSitUtNKv8DCHIQABoMNjM3NDIzMTgzODA1Igx8Jat8%2BhecXlIXIzkq3AM1QunerVGH5e5BuqZnbOSD9NcYwm4v5BvO0PZbXr1iKvwHNzV7eWiHr0F3MK2Q2ipZ6PsvxYmcCHpadE0CJIUKqrYU%2BVUF3ynmUNy829XlsTkuM19Nt2U1zQxPSA7LkpYFiZbVwcNMGvNRZEFqc3fkGWgnmbVX8oKBLkxd1xPBk9aJTTkhADQ7kOjRoCb5Dhy6ZpCi%2FzFzh1wX5s5OA37VInKOjs3K5zg16rt4cF2JGzXmiZINwyZ5ad%2FOTwsUZiS798aaIaE9y2r3f3XndtihhfEETurVJL25giIkJkVv7N76jO81DzNUdQUjGNIS1FcTltuQbnwJkVtdh6ipVBCCF37Po5%2Fde0P5DK6ZWw5n9NdSUfSd2h6GhVaSqvHRbAdvScSYVXQlFWv6G1u0MZ9ZTJsIejUaRVCGYYPxQEhsYyL01yHleDP0NQhm4pmdvySPku2JQC3mGqktguCsEIVF%2BscQCJVjHoA8W%2FyazHo6%2BbR54YhxUBRtDklmRCRAAnSjf%2FDYp0kouoLmz3Z%2Fppg1qKRCJv3H9HNbGvCRpvL1hI3tqvtexkPM6vRCSKIQF66lKNKwd%2FGW2RlOTKr%2B1xSf6dPTVH6%2BGjgA3rH0lEsV2AM86lI7fqXU1W%2FF1jDd4p6%2FBjqkAXH274GhJW7dB5cGxr1Vn8I6G6aY0ZcvHKnAhds5For57%2FWZ04f1jEk%2FOTbhWCOrrptrPqj%2F%2FV9CVIEVtOiYHSuAzyDhE0JcDpdLpaU4D857AAAA7HW53YnTZs2nVmFiuw%2Fce%2FjTh6whYZP8m7yqcx6ika0zvM3hLPUi03wfsefvopGntLxke%2F1Eobssqa1gzFD%2FVrzttHcyVFW9LlCOuL%2BAKA%2F3&X-Amz-Signature=c89cc30b4f1e56a778e12ccc2398059b6f39165ef05e42d3e0fc3537113a64c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DKHNIQF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDs5QBq%2BuxgEU8gBQrRvGy36%2BJPpXtBn6gGxtjsqbTAeAIhAM6158QfEtAwl75iGWW%2B241NtyvtQPRDfUE2eqSitUtNKv8DCHIQABoMNjM3NDIzMTgzODA1Igx8Jat8%2BhecXlIXIzkq3AM1QunerVGH5e5BuqZnbOSD9NcYwm4v5BvO0PZbXr1iKvwHNzV7eWiHr0F3MK2Q2ipZ6PsvxYmcCHpadE0CJIUKqrYU%2BVUF3ynmUNy829XlsTkuM19Nt2U1zQxPSA7LkpYFiZbVwcNMGvNRZEFqc3fkGWgnmbVX8oKBLkxd1xPBk9aJTTkhADQ7kOjRoCb5Dhy6ZpCi%2FzFzh1wX5s5OA37VInKOjs3K5zg16rt4cF2JGzXmiZINwyZ5ad%2FOTwsUZiS798aaIaE9y2r3f3XndtihhfEETurVJL25giIkJkVv7N76jO81DzNUdQUjGNIS1FcTltuQbnwJkVtdh6ipVBCCF37Po5%2Fde0P5DK6ZWw5n9NdSUfSd2h6GhVaSqvHRbAdvScSYVXQlFWv6G1u0MZ9ZTJsIejUaRVCGYYPxQEhsYyL01yHleDP0NQhm4pmdvySPku2JQC3mGqktguCsEIVF%2BscQCJVjHoA8W%2FyazHo6%2BbR54YhxUBRtDklmRCRAAnSjf%2FDYp0kouoLmz3Z%2Fppg1qKRCJv3H9HNbGvCRpvL1hI3tqvtexkPM6vRCSKIQF66lKNKwd%2FGW2RlOTKr%2B1xSf6dPTVH6%2BGjgA3rH0lEsV2AM86lI7fqXU1W%2FF1jDd4p6%2FBjqkAXH274GhJW7dB5cGxr1Vn8I6G6aY0ZcvHKnAhds5For57%2FWZ04f1jEk%2FOTbhWCOrrptrPqj%2F%2FV9CVIEVtOiYHSuAzyDhE0JcDpdLpaU4D857AAAA7HW53YnTZs2nVmFiuw%2Fce%2FjTh6whYZP8m7yqcx6ika0zvM3hLPUi03wfsefvopGntLxke%2F1Eobssqa1gzFD%2FVrzttHcyVFW9LlCOuL%2BAKA%2F3&X-Amz-Signature=90cb3e5f3cec7e4f75a09c9dab1b6585c4d751d8eab9a425a2f35797878c2203&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
