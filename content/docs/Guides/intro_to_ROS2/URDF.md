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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRAF5QG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDz8n7djv2mjsN%2BigDAPUzZIOaFxjYpe0Iu9zVScEwjOAiAoZp%2F6H1IFHiOToZlrH9ZWpLgvFI3C1ypnw%2BdqMWgdRCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJEENIai%2BV96cVSuyKtwDWvEj%2FTn6QBVu4xgqg3Dg5O630gORmV3gHgh8gtKIAdnH4QJ%2FPXLUPgb5i3%2BlcG7JFd5hAScWwL5wepwzVkDtljqSHWv1Z8EWTYt28HPkVU0K3QtxUVBYn4UKztSoZDHqalD1mR3LLJMg5ccCca%2BmKnGWDeiyrqmraE86NwhL7Ze30ot8tXPXHsLCJ1S7cZ1NFHUPF7ubB4v4l1%2BTixLHsWVoJtfwSqYA2e52l%2FnpGeyRSs8vj%2F0hSEbwfMb%2FjLDVLvw5t5moAL%2F5xK80S62uIH1vVRd16E7BFokZjo2%2BbdNQLnixbHkXAHBtsIrm1JCpeN6X5tp63GalsUBIeWpmffwLnIJMXAmEu4E1EHxO9%2F9pHqVN2U3yqzPmNMCHkbm7tjYVcbJMtlRB%2FouU0bqxhZV4lBMdZtmaMoe%2BnPa8V1z4GKkm16KjE8Ah0vNi7Gthi3JxhMVrIN2C3wa1lzNHXnHx6biQcSK0PS%2FgXh3Ao001uJiJUmnDlC0LK41I40pslBL%2Finh16tiUqUY%2BIVbsrU7VkgLPNlUNw9GBtr8PA3cH10RgM0C4cUFPSN%2BRith5cfnY%2BpjEjasDAKg9r7B74VaYK9ihhCmL29XfGPjHkM884JjFZwAHEMiC1kUwl5ClwAY6pgGHq5lTs3XvbZN%2BbPkftp%2Bm8HQl6zimw54jhbUGjoCVgNQLdgF21fC23MfOjH4KETphgzS6L7HYXVrHY5d%2FmM2kwFqrkfA2VAw8e5%2BXz%2B1vz2T0BJvuB8bLo2L3AfD6OC1D591F6ZfdDcRF70l8ycTZuU2cBXtWqxngFR%2FhD9YWkTPzD5kLE49XVMWdtrk5%2F3KDHMXkFrvZ40v1ltf1%2Fq6W5VvOtyTp&X-Amz-Signature=0109344c54536b55f01823fd57ef5fc67ef7460243e1d7406e473d3d5d42fda1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRAF5QG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDz8n7djv2mjsN%2BigDAPUzZIOaFxjYpe0Iu9zVScEwjOAiAoZp%2F6H1IFHiOToZlrH9ZWpLgvFI3C1ypnw%2BdqMWgdRCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJEENIai%2BV96cVSuyKtwDWvEj%2FTn6QBVu4xgqg3Dg5O630gORmV3gHgh8gtKIAdnH4QJ%2FPXLUPgb5i3%2BlcG7JFd5hAScWwL5wepwzVkDtljqSHWv1Z8EWTYt28HPkVU0K3QtxUVBYn4UKztSoZDHqalD1mR3LLJMg5ccCca%2BmKnGWDeiyrqmraE86NwhL7Ze30ot8tXPXHsLCJ1S7cZ1NFHUPF7ubB4v4l1%2BTixLHsWVoJtfwSqYA2e52l%2FnpGeyRSs8vj%2F0hSEbwfMb%2FjLDVLvw5t5moAL%2F5xK80S62uIH1vVRd16E7BFokZjo2%2BbdNQLnixbHkXAHBtsIrm1JCpeN6X5tp63GalsUBIeWpmffwLnIJMXAmEu4E1EHxO9%2F9pHqVN2U3yqzPmNMCHkbm7tjYVcbJMtlRB%2FouU0bqxhZV4lBMdZtmaMoe%2BnPa8V1z4GKkm16KjE8Ah0vNi7Gthi3JxhMVrIN2C3wa1lzNHXnHx6biQcSK0PS%2FgXh3Ao001uJiJUmnDlC0LK41I40pslBL%2Finh16tiUqUY%2BIVbsrU7VkgLPNlUNw9GBtr8PA3cH10RgM0C4cUFPSN%2BRith5cfnY%2BpjEjasDAKg9r7B74VaYK9ihhCmL29XfGPjHkM884JjFZwAHEMiC1kUwl5ClwAY6pgGHq5lTs3XvbZN%2BbPkftp%2Bm8HQl6zimw54jhbUGjoCVgNQLdgF21fC23MfOjH4KETphgzS6L7HYXVrHY5d%2FmM2kwFqrkfA2VAw8e5%2BXz%2B1vz2T0BJvuB8bLo2L3AfD6OC1D591F6ZfdDcRF70l8ycTZuU2cBXtWqxngFR%2FhD9YWkTPzD5kLE49XVMWdtrk5%2F3KDHMXkFrvZ40v1ltf1%2Fq6W5VvOtyTp&X-Amz-Signature=9b65c94f50f6f749f00b90c32b13f40373cb6ebb58bab322dfe8177548bb74f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
