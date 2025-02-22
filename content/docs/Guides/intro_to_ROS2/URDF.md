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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGIWOIP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhKImlIbNiEajJsFjAfiVStHz%2B9Cr0xOyZis5QJc%2FKYAiEAsoTdTBRccskwgVDDtkcGU8OcMDS4lap23q4dXRjKAusqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfQOB1uuqtdAPWnSSrcA7f%2BpXkN7ZQOgy7FmPlUHTlzKA8Q7Crrt485Q4VLcveg0MpsmkvLi6BTY%2FG9nfwoFvSU7iFsSLIRPYAsUBfiNwAgHHGwM5beRiXW4ZT2%2FB8bAQ5VPnDReNldlEjs%2FEq2wQ%2FDf1ZDpQXERSBEzT7hmmM2v68O3PzaeXcZnMwT4s3rAVhidG%2BWbpmJpnD7lc1BH%2FHjDJXFDG6Y38yYt3Z4ATa6oywB16Qs1bUT5kz0daNEP6gOb4uLwQdrbJNZr8M5imt32Dn2EaHZcNxJBk7yeycmaRpSPveLBjWNYbc2NUncxRJRfhn3IZefDVYtHmKA1eFAydowjqSiwS5pBu%2Bcee43psvWlQyGrx35ak9MQA0EsQsz01i6%2Ff8DnMcxu9RNiKqZhfb7vvow34q8CppYYTdUbu23EAjSTmQArCyEKTWXc983SNP6O5ngV1mRYE%2FAZFzCu9kU1%2BZNS48xgqdDF2M1KXgYin5uQSoMJU0i1BZ9wN7dS7OFM2xdnN2s02yl2rHBnPMN1K0APfYiZUflFhGtlvFOuv6bBxmLwtDQHYX1PFqDP%2F7bh199xc0A9McxXAC4r%2F2FrY2lsDH6wU%2B9WTU2H1VWZhZT2DKwcM8CPrZMOFNkvNEuhX3snod3MPTp5r0GOqUBatPbCwT70B6NdKY7jQ4Y4KRv%2FUeEzleFLLnU52UKsNCx12zB4LUk5H55hMLyXtJJc1kflRwQmyWIR4g3I68xTG8b7aiLDt%2BmPqcuKfVfPfJsDXkVKbRfsx3SDPjn%2F53zrP4lLnA%2FJcC4zcTqGF%2FVpJH%2BwfP2Tx1vGaRycrgIDFwYWSME1uC90WT0RyAsAhxzM2lB6uqFL2F1NKxrvQYQXpN%2FIgGF&X-Amz-Signature=fa736bf4c68c14ddbbaac44bb0fc9e9a030b396388a3b7b771a2f9f8faccf33a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGIWOIP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhKImlIbNiEajJsFjAfiVStHz%2B9Cr0xOyZis5QJc%2FKYAiEAsoTdTBRccskwgVDDtkcGU8OcMDS4lap23q4dXRjKAusqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfQOB1uuqtdAPWnSSrcA7f%2BpXkN7ZQOgy7FmPlUHTlzKA8Q7Crrt485Q4VLcveg0MpsmkvLi6BTY%2FG9nfwoFvSU7iFsSLIRPYAsUBfiNwAgHHGwM5beRiXW4ZT2%2FB8bAQ5VPnDReNldlEjs%2FEq2wQ%2FDf1ZDpQXERSBEzT7hmmM2v68O3PzaeXcZnMwT4s3rAVhidG%2BWbpmJpnD7lc1BH%2FHjDJXFDG6Y38yYt3Z4ATa6oywB16Qs1bUT5kz0daNEP6gOb4uLwQdrbJNZr8M5imt32Dn2EaHZcNxJBk7yeycmaRpSPveLBjWNYbc2NUncxRJRfhn3IZefDVYtHmKA1eFAydowjqSiwS5pBu%2Bcee43psvWlQyGrx35ak9MQA0EsQsz01i6%2Ff8DnMcxu9RNiKqZhfb7vvow34q8CppYYTdUbu23EAjSTmQArCyEKTWXc983SNP6O5ngV1mRYE%2FAZFzCu9kU1%2BZNS48xgqdDF2M1KXgYin5uQSoMJU0i1BZ9wN7dS7OFM2xdnN2s02yl2rHBnPMN1K0APfYiZUflFhGtlvFOuv6bBxmLwtDQHYX1PFqDP%2F7bh199xc0A9McxXAC4r%2F2FrY2lsDH6wU%2B9WTU2H1VWZhZT2DKwcM8CPrZMOFNkvNEuhX3snod3MPTp5r0GOqUBatPbCwT70B6NdKY7jQ4Y4KRv%2FUeEzleFLLnU52UKsNCx12zB4LUk5H55hMLyXtJJc1kflRwQmyWIR4g3I68xTG8b7aiLDt%2BmPqcuKfVfPfJsDXkVKbRfsx3SDPjn%2F53zrP4lLnA%2FJcC4zcTqGF%2FVpJH%2BwfP2Tx1vGaRycrgIDFwYWSME1uC90WT0RyAsAhxzM2lB6uqFL2F1NKxrvQYQXpN%2FIgGF&X-Amz-Signature=deef925d75eb45b319f96e0d8d6073a05137d22351531927e7f8a427b6a9a99a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
