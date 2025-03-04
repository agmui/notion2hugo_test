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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YROWQGD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKLLE%2BJo7w2UXqXyqky07FR1lGnuwZ9fRQbvw12dsndAiBkyQDiH%2BJSddF2%2B7p%2BASIizUMoZ8jrXWvApIt25adggSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN9HPtyg7XIXGje7vKtwDR%2BY6Y2yBTLKMwr6v5Dm0SFTO1TqiTeNBDnM1P2czHFdXJWhrn30Jq%2FPemWKtKEYMis4N%2BstMJIB%2Fx0ZiBP0vhqT3RbfOrXyCOZ8q1sIcbq4%2FSZkgYbXCoGjBZmUkkcNLred7NClD0kWR%2Bujpd9YXTqAahjx%2BVTJTG%2B1eeJyL3CJTaBciux%2Bn1dmLXYW0u09UMRLuBPbIAnX8JBUUxigfApndxCPOLsXyfQfG%2F%2BLVUxhHq2w0h6SBbjFRhc9wHqgfw%2FRGVP4YgeLRHVzeZ8feEuAy%2FQR9NKXkn6%2BvTQf8jGdr%2FGMqYwXWfmB%2FDhTmPL4I6JOSZtjFVidLYZ2hs7JIL03kl%2BCsyRAI%2F71h6iOBbgmLpNcN6L37jXMj0I01fZDkTztJzeI%2Bqp%2F%2FrnfbWTaT0S%2B9X9kYYQrcbqYhVApnolj72uhT8qYVqI7NZsDp1ZEZsap%2Bi7kt7E9Z3NctjMdwcvmCeAkFXvOi1eycd0sjfmaeabl0rPCF80CGJNOjjN3ccbNie7RKRD8cj42rgv54mjy6nTIt0upDtwiZqGohDW3c8dsy%2BgHeZAp1dNwGm4QJ4KBkYGVSxIuE3zsrxWC99NX%2BPF2yBEoRnveQHp%2BieM2D1TeSVOkkJCPTUewwkISbvgY6pgHDwcVl%2BUMVdk0bwSx%2BsTj2Pfc5v11o4twr17wmBaRMfto36KzKQfcjcgugRgePctMKVQ9MHcIYxtUOMXGskdt1zi1031PlkR6GUm%2BghFbpggDWRTnGSd18%2B688%2FD7jq60WXdxj5WlOaPgk5roYVZ50C9r5mZ9Weq%2B07VNHrLareCIxQ8Yr8lXqkkUiqtwoBNGthS%2FsjZNRf%2BJVh7SGz6%2BT05iyCu24&X-Amz-Signature=daeed2d1f672c29cf770ad7739453d7204a8b757aacb20823662d281a0a78841&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YROWQGD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKLLE%2BJo7w2UXqXyqky07FR1lGnuwZ9fRQbvw12dsndAiBkyQDiH%2BJSddF2%2B7p%2BASIizUMoZ8jrXWvApIt25adggSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN9HPtyg7XIXGje7vKtwDR%2BY6Y2yBTLKMwr6v5Dm0SFTO1TqiTeNBDnM1P2czHFdXJWhrn30Jq%2FPemWKtKEYMis4N%2BstMJIB%2Fx0ZiBP0vhqT3RbfOrXyCOZ8q1sIcbq4%2FSZkgYbXCoGjBZmUkkcNLred7NClD0kWR%2Bujpd9YXTqAahjx%2BVTJTG%2B1eeJyL3CJTaBciux%2Bn1dmLXYW0u09UMRLuBPbIAnX8JBUUxigfApndxCPOLsXyfQfG%2F%2BLVUxhHq2w0h6SBbjFRhc9wHqgfw%2FRGVP4YgeLRHVzeZ8feEuAy%2FQR9NKXkn6%2BvTQf8jGdr%2FGMqYwXWfmB%2FDhTmPL4I6JOSZtjFVidLYZ2hs7JIL03kl%2BCsyRAI%2F71h6iOBbgmLpNcN6L37jXMj0I01fZDkTztJzeI%2Bqp%2F%2FrnfbWTaT0S%2B9X9kYYQrcbqYhVApnolj72uhT8qYVqI7NZsDp1ZEZsap%2Bi7kt7E9Z3NctjMdwcvmCeAkFXvOi1eycd0sjfmaeabl0rPCF80CGJNOjjN3ccbNie7RKRD8cj42rgv54mjy6nTIt0upDtwiZqGohDW3c8dsy%2BgHeZAp1dNwGm4QJ4KBkYGVSxIuE3zsrxWC99NX%2BPF2yBEoRnveQHp%2BieM2D1TeSVOkkJCPTUewwkISbvgY6pgHDwcVl%2BUMVdk0bwSx%2BsTj2Pfc5v11o4twr17wmBaRMfto36KzKQfcjcgugRgePctMKVQ9MHcIYxtUOMXGskdt1zi1031PlkR6GUm%2BghFbpggDWRTnGSd18%2B688%2FD7jq60WXdxj5WlOaPgk5roYVZ50C9r5mZ9Weq%2B07VNHrLareCIxQ8Yr8lXqkkUiqtwoBNGthS%2FsjZNRf%2BJVh7SGz6%2BT05iyCu24&X-Amz-Signature=62f0dce8dd4a89d9632310e73090eddb77f7995df102b8bcc2f27611b6f22542&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
