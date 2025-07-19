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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N6MI6IK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6p2EJfTVXfJflkdKjnNB317dRDkYwgFDMmEAoeiaKcAiEAhu3vcY1kfoV2qUWIUtQyDNFNDg2INzdTwmO9UX3HFi0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7HFNSMYhR5R4bLCircA5FgMszp23D0k9GrphhfGvWpKwt6wWDuL2d5i4rpmH9PYkDS8cO5qwYVHL91bXj4VKN02Ke4a5631cYhU7YgaWA5xwfPRdjQnLkN86WAd%2FS%2BKPjjRsPorwDceDH73JlEpr6tByY2COFTQIpJtET5VxGZEN3jNpiH%2F8vscd1GMkBmyu7%2BhVkU%2FBoesAmfhVmiL7%2FXR2x5Lrp1k%2FjUEbpaGvjqZ5UynSqeLbzF0fNKVEJEkoLBOV2I1Odm6agINgIAFFozQB8I0U087Pmm1Oq2l0QMHnOP3rpwyxtMi%2FjpCFdNaC3nkzvFtV01IGr3ncC%2FzJsSloJ5yMzt1O6G6FQjqqHGNtBN9ZfR7hMRtjK9QLs5chgLkLveN4ODWfkLdE7aJVLwpv7WI0I3VD1sC1J%2F6g9b8Nq%2FOP%2FzTIwjaZoVrpP0tUFbGXEcwWDeNFsGFMIOa%2BrVJkiY9r0CUCaCE29ZKl%2F%2FaWS9V1%2BdZPskc%2FnNlQAxQr9%2FAQeFgX64V2tHPk66atpPM7I0e42S06BpN4KGZhdBPOy%2BbZEWy8QkJLjkwegAaKfLJhis%2BZQXF%2BEvNlLZeEc0MqEhsBmowNjivXfcK7HYV%2BUynvTac2ZhsI2oB9LVcByeWyN%2FtWwYXJ6%2FMO3F7MMGOqUBXnaGb3n%2FDCxZ6hPJ%2F8uh0HnX7aUFeSrG2SUQUs%2FLUa8nG%2Bpn602j4q4WM1gGo2V2efru9H0lMJIn7pmgbAOs8rB8njpodBkkDuv7hPjipTXJ7bUAqNTFSnkhQp5XvWTYnsoi6nZfEJv%2BlqYHdjF2BmkwYE%2F2JP4QYb6sp0NdJRHBiXbcWyKyzbCCxIssMl1VprVwRPUUrFNdU76OO3IKp%2F4GNh9t&X-Amz-Signature=413f7ba5499ad4c6a397c7a89bc5b465ba218a74921f4593d894b387c223be19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N6MI6IK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6p2EJfTVXfJflkdKjnNB317dRDkYwgFDMmEAoeiaKcAiEAhu3vcY1kfoV2qUWIUtQyDNFNDg2INzdTwmO9UX3HFi0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7HFNSMYhR5R4bLCircA5FgMszp23D0k9GrphhfGvWpKwt6wWDuL2d5i4rpmH9PYkDS8cO5qwYVHL91bXj4VKN02Ke4a5631cYhU7YgaWA5xwfPRdjQnLkN86WAd%2FS%2BKPjjRsPorwDceDH73JlEpr6tByY2COFTQIpJtET5VxGZEN3jNpiH%2F8vscd1GMkBmyu7%2BhVkU%2FBoesAmfhVmiL7%2FXR2x5Lrp1k%2FjUEbpaGvjqZ5UynSqeLbzF0fNKVEJEkoLBOV2I1Odm6agINgIAFFozQB8I0U087Pmm1Oq2l0QMHnOP3rpwyxtMi%2FjpCFdNaC3nkzvFtV01IGr3ncC%2FzJsSloJ5yMzt1O6G6FQjqqHGNtBN9ZfR7hMRtjK9QLs5chgLkLveN4ODWfkLdE7aJVLwpv7WI0I3VD1sC1J%2F6g9b8Nq%2FOP%2FzTIwjaZoVrpP0tUFbGXEcwWDeNFsGFMIOa%2BrVJkiY9r0CUCaCE29ZKl%2F%2FaWS9V1%2BdZPskc%2FnNlQAxQr9%2FAQeFgX64V2tHPk66atpPM7I0e42S06BpN4KGZhdBPOy%2BbZEWy8QkJLjkwegAaKfLJhis%2BZQXF%2BEvNlLZeEc0MqEhsBmowNjivXfcK7HYV%2BUynvTac2ZhsI2oB9LVcByeWyN%2FtWwYXJ6%2FMO3F7MMGOqUBXnaGb3n%2FDCxZ6hPJ%2F8uh0HnX7aUFeSrG2SUQUs%2FLUa8nG%2Bpn602j4q4WM1gGo2V2efru9H0lMJIn7pmgbAOs8rB8njpodBkkDuv7hPjipTXJ7bUAqNTFSnkhQp5XvWTYnsoi6nZfEJv%2BlqYHdjF2BmkwYE%2F2JP4QYb6sp0NdJRHBiXbcWyKyzbCCxIssMl1VprVwRPUUrFNdU76OO3IKp%2F4GNh9t&X-Amz-Signature=36bf6e8baeaff3c83fb32e0f1c9a3e850aa23501643ca26c108a9353e8b7a2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
