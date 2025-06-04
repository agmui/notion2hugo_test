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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQDF32P%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC716wp9NQ4k4V64QDD%2FbzpbV5H7meeXcF4xGxp%2B7FgzAIgeOxctT94XN9bLfj4gK2dsmxcfPbsW5BOSie9hcArZLUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDArvuPXQhnWJg90iSircA7rHeemNfBcCRDBljoIM5JZ8msUX6i79rHFpN%2FMOmQONpIQicQTNGGrrLaSNcUYMRJ1wQkZjcEZTEjLN25km2BCmvqe%2Fa5klfzruHKBc4vgKa2Ef5dxMD%2B4ppaMFs6qSTdtsMb%2BNLzGL2dio2nn9vaHigUJ9xO7gO3qaoMVyu4zmZug%2F3%2FSIDjgKnQ7lChmtTs1uIxNHXS4o4SNz8O41FluBENFh4ZepV6eOQp76NVRSLwvzS43RxZIZLElkRbWqS26w9DP10NIvYAS%2Bd9Aj5IgaWqVUGTFcvT%2BCzmIN%2FioOjTxKYxpvZH3GCw%2Ff47sFu%2B5sUlKV1llc2M3axtZ%2F0nV2WytL8Za0%2FPr1QH4RWRgEH0fI12NxDNGeB%2FcHfALkqKEwJwRhYmz1Oi6JXeBZ0W9nfHVZIiZSHKyhoPr3IHLqqhw7CJ1wQ%2FMj8YFoKI9qgdXgaFamEQlz2yF3kG6Ch8RgkvpIdjOC2gp%2BSi5%2BkaBprKROJq1hTaa6xj6vWG2d4%2FAUouFg5UJ09j03fv1RNTWVP8M2zLrIbt4EkQpdAFhz9WiHKTrXEIDis%2FmDS8ahRvCZh4rckfcG360jNEfV5FVwCg9kxwHUp5fheLuH0uv%2FSOm5PffnGYC%2BuJh%2BMKng%2FsEGOqUBg%2BbdpOlsTBcFRAp3ZimR4CDVSz9QqS2BHPHi5ZMazXES4JUOs6hqMvMQB145lO8e%2BcLWL1%2FN0Q2PCO6B8Ec4HZxhKU5kiSkfJ0Wocn%2BbWciMQpjlSLNmn4XUixVXAkcf1CDggeITIAPAEbVdVppiJ7t6wBObGBJEY7hkUV9fUSNmAwczoMJlgPOalRypo%2FRv6DOMdKXpxAs2VPGEuZ6DdZRQ810p&X-Amz-Signature=fe32f3a20c236a4d5bee955f58f80e0cf1391bc084aed10c1739aeb24d946fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQDF32P%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC716wp9NQ4k4V64QDD%2FbzpbV5H7meeXcF4xGxp%2B7FgzAIgeOxctT94XN9bLfj4gK2dsmxcfPbsW5BOSie9hcArZLUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDArvuPXQhnWJg90iSircA7rHeemNfBcCRDBljoIM5JZ8msUX6i79rHFpN%2FMOmQONpIQicQTNGGrrLaSNcUYMRJ1wQkZjcEZTEjLN25km2BCmvqe%2Fa5klfzruHKBc4vgKa2Ef5dxMD%2B4ppaMFs6qSTdtsMb%2BNLzGL2dio2nn9vaHigUJ9xO7gO3qaoMVyu4zmZug%2F3%2FSIDjgKnQ7lChmtTs1uIxNHXS4o4SNz8O41FluBENFh4ZepV6eOQp76NVRSLwvzS43RxZIZLElkRbWqS26w9DP10NIvYAS%2Bd9Aj5IgaWqVUGTFcvT%2BCzmIN%2FioOjTxKYxpvZH3GCw%2Ff47sFu%2B5sUlKV1llc2M3axtZ%2F0nV2WytL8Za0%2FPr1QH4RWRgEH0fI12NxDNGeB%2FcHfALkqKEwJwRhYmz1Oi6JXeBZ0W9nfHVZIiZSHKyhoPr3IHLqqhw7CJ1wQ%2FMj8YFoKI9qgdXgaFamEQlz2yF3kG6Ch8RgkvpIdjOC2gp%2BSi5%2BkaBprKROJq1hTaa6xj6vWG2d4%2FAUouFg5UJ09j03fv1RNTWVP8M2zLrIbt4EkQpdAFhz9WiHKTrXEIDis%2FmDS8ahRvCZh4rckfcG360jNEfV5FVwCg9kxwHUp5fheLuH0uv%2FSOm5PffnGYC%2BuJh%2BMKng%2FsEGOqUBg%2BbdpOlsTBcFRAp3ZimR4CDVSz9QqS2BHPHi5ZMazXES4JUOs6hqMvMQB145lO8e%2BcLWL1%2FN0Q2PCO6B8Ec4HZxhKU5kiSkfJ0Wocn%2BbWciMQpjlSLNmn4XUixVXAkcf1CDggeITIAPAEbVdVppiJ7t6wBObGBJEY7hkUV9fUSNmAwczoMJlgPOalRypo%2FRv6DOMdKXpxAs2VPGEuZ6DdZRQ810p&X-Amz-Signature=8178b624e5d3db26020a345964713a4766fa849f5133dcae08fb15c65da99640&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
