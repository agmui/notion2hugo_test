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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZW6SM4S%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8rob3ZnEugdOcOyxfqXRP0PzVKKFKkQYkv%2Fi28pRTfAiBPC3rN2sBaWQMXRO1MBPRub3uthxSkD1351d0QkKqu%2Fyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMMpLYutH0CQxuvrReKtwD2l8W6TpIspcbmPfdViY9u%2BJnreSqDqLUTY1Spahq1dBHnC7kKfDvEX1jnZRbMVvoL1HyYF%2BnV8xvW5oi%2B7TWq%2BqvWNpmxSaOUF%2BzB5DatQVdLV1cxNxsf%2FUnCJGdTQKZlAXJtQMCgJGLRvA4a5GMkMb%2BdcknwoWRIWzI2%2BIzFFm2jYwKhTsdpGj59pzcGAtQQTv%2F2quKSeOs1sXBBMz%2F6Axo%2B0xhBLo1UhdbfxRlCXi%2BUY1Lv%2F7X%2FLQSfAq73MqT6J1TvL2jqRYkrYjwK1syaePEJswKaOXlNtclHx9KZV2lk0JPrrnMfm9jNmI0Pj4YNVQQkBxpEaOKTYOl6zOilUg3p9dYqppwb0%2Bdr92a%2FimOQpk3IMnoTXj9VoXStRLr0MMvYhcAx1WKZYKD%2F%2Be%2FfkIMGi2fpRAkOCRqfYSwSANKMiefgPTAPJuqQ%2B0qJdmTJgAMxUb4NnOKQjV0WIZbarVCHxr5kAz%2BU%2BVhPPrjIxS1bLqIKBkoFdsb9jBDwzD%2FlYe%2FRAylSHcsv%2FLhmIJxi08dws2MxUcT5FmjaI57jw3zb1XB0pk9%2F5RAvltjaH9YUJepdWTJZ5M7PiKNHXePSPQhtXwsOiKPo2iE2ms%2FqYUzadVXOH2zjLHWPEEwmI2SvwY6pgEzM%2B%2FqJL2IKha5cc4qy3ee3dQRc%2BSXXvatCVV1UUYPErFH%2Fxx8PlSgdEKyxfhcT9OxQa9iaAyCPQGpAUzjWwG%2BgSRKKDzxrX7genFpGh%2BT1v8DbeTD0zQWKpArfTvEhhumIIwismtTJuL%2BVeDgX2rwfA3EGLhLuc9YP%2F5C0ffkucXzgJGaIBecpXMS74%2Bicy01drGcsjmNXpTATg4mFOIZh36Dx2KU&X-Amz-Signature=55b46f405036ae754eaa991399eb6a78ecf2458410330f63356311c56bef789a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZW6SM4S%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8rob3ZnEugdOcOyxfqXRP0PzVKKFKkQYkv%2Fi28pRTfAiBPC3rN2sBaWQMXRO1MBPRub3uthxSkD1351d0QkKqu%2Fyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMMpLYutH0CQxuvrReKtwD2l8W6TpIspcbmPfdViY9u%2BJnreSqDqLUTY1Spahq1dBHnC7kKfDvEX1jnZRbMVvoL1HyYF%2BnV8xvW5oi%2B7TWq%2BqvWNpmxSaOUF%2BzB5DatQVdLV1cxNxsf%2FUnCJGdTQKZlAXJtQMCgJGLRvA4a5GMkMb%2BdcknwoWRIWzI2%2BIzFFm2jYwKhTsdpGj59pzcGAtQQTv%2F2quKSeOs1sXBBMz%2F6Axo%2B0xhBLo1UhdbfxRlCXi%2BUY1Lv%2F7X%2FLQSfAq73MqT6J1TvL2jqRYkrYjwK1syaePEJswKaOXlNtclHx9KZV2lk0JPrrnMfm9jNmI0Pj4YNVQQkBxpEaOKTYOl6zOilUg3p9dYqppwb0%2Bdr92a%2FimOQpk3IMnoTXj9VoXStRLr0MMvYhcAx1WKZYKD%2F%2Be%2FfkIMGi2fpRAkOCRqfYSwSANKMiefgPTAPJuqQ%2B0qJdmTJgAMxUb4NnOKQjV0WIZbarVCHxr5kAz%2BU%2BVhPPrjIxS1bLqIKBkoFdsb9jBDwzD%2FlYe%2FRAylSHcsv%2FLhmIJxi08dws2MxUcT5FmjaI57jw3zb1XB0pk9%2F5RAvltjaH9YUJepdWTJZ5M7PiKNHXePSPQhtXwsOiKPo2iE2ms%2FqYUzadVXOH2zjLHWPEEwmI2SvwY6pgEzM%2B%2FqJL2IKha5cc4qy3ee3dQRc%2BSXXvatCVV1UUYPErFH%2Fxx8PlSgdEKyxfhcT9OxQa9iaAyCPQGpAUzjWwG%2BgSRKKDzxrX7genFpGh%2BT1v8DbeTD0zQWKpArfTvEhhumIIwismtTJuL%2BVeDgX2rwfA3EGLhLuc9YP%2F5C0ffkucXzgJGaIBecpXMS74%2Bicy01drGcsjmNXpTATg4mFOIZh36Dx2KU&X-Amz-Signature=8a2e86b3d782dd04fd616901e6dd11c1f036a8883ff010c95537e4dd2ac17bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
