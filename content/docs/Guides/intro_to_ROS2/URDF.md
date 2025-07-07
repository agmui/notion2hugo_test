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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EL2DU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICTjmTAygtWxUECwJyFmh%2BAaqoTMsN696KAQfNJ3Afm4AiBtKJDtQREKYYR%2Fw2pdrLNfGJJOFo%2Bqi6goRC7kSJr8RCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQuaQjp3KrLW79rwRKtwD8EeofUzMJtcvQghcowk3M2qrCNlgFewNWqJUe8kQAvw70DuLaTxHbc8nE161CF69Ml4l6SzuAZHuWELWzpTRmd%2BH4NVFPd3BdqCVYClWR%2BdV4fjdZHaeamgAtTDt42Hf5RblAVExxkXGZCuvIXcHrxqy0JmhRHvHlWdl2WCEld1eu8GH1RLS77GltzkNPEGtFkJuOzSlYQn2ccoulaX6lmGAgV3%2B13klTRme5EYUONg%2Fr1SO1WpaeySE%2FSP3%2B3VZkICKyqrVcYRtA0x6QnCsrKPMKzK3rcQk3RF%2Br%2FkquRj%2FTU%2FmvZohSlCMyr6At9%2BNkbeKE68xtYsZGK6F6eaW5kS%2BdzJaaPcKdhRI2IJqlZwJF4fR0y9j9NGMwLs%2BWfrYMxWEWE%2F2PaBePEgfvMZvu49HUeulPuftT%2FauWjDirZtG%2BzUQtP5rfyQ9JcGDnMKeQtmMAUO3AJZtzVV8IvSrMimsYUK6tNGeLJFzpb9%2F3CcOOzoF7vahEWZlbNygUIM%2Be0Ow5%2BO%2FPstFk8yFTgjWkdgAxa%2BsZa9mU07eR9KxxpS8mC3eqtLR0FVmBDVUbtIAsoYUlSH8%2B7pcyBceMNRIlb8EdKb%2B4AMNVINeULPRLi%2FK%2FO1RKL4zMNPrv9Ewi4yvwwY6pgGx138rwiIqcHkzGqMo3WKWf0BjzIt%2F3TnfBs1Z%2FAsGJmgU3Fsf54T0MXz1Vvj5jy96PQR6sHRDcbsV4bs03i21Z6skxTYHiA69ZsmMeO1ub%2F0aafmQGDI6KVEYgGSkQwtXFCJIIQxnYV%2FYcFUU40lAteXBdL1%2BhWFeH4d%2BiGNTSqhp9X9%2FZLgcsTKBvFR8JBU91GMDPnaCmfAfzSNatw60XA8USRxG&X-Amz-Signature=2e74248ba80ba737cb14c8f74a3deb90fef55f3ed4a39308d8ace0c8f2770b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EL2DU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICTjmTAygtWxUECwJyFmh%2BAaqoTMsN696KAQfNJ3Afm4AiBtKJDtQREKYYR%2Fw2pdrLNfGJJOFo%2Bqi6goRC7kSJr8RCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQuaQjp3KrLW79rwRKtwD8EeofUzMJtcvQghcowk3M2qrCNlgFewNWqJUe8kQAvw70DuLaTxHbc8nE161CF69Ml4l6SzuAZHuWELWzpTRmd%2BH4NVFPd3BdqCVYClWR%2BdV4fjdZHaeamgAtTDt42Hf5RblAVExxkXGZCuvIXcHrxqy0JmhRHvHlWdl2WCEld1eu8GH1RLS77GltzkNPEGtFkJuOzSlYQn2ccoulaX6lmGAgV3%2B13klTRme5EYUONg%2Fr1SO1WpaeySE%2FSP3%2B3VZkICKyqrVcYRtA0x6QnCsrKPMKzK3rcQk3RF%2Br%2FkquRj%2FTU%2FmvZohSlCMyr6At9%2BNkbeKE68xtYsZGK6F6eaW5kS%2BdzJaaPcKdhRI2IJqlZwJF4fR0y9j9NGMwLs%2BWfrYMxWEWE%2F2PaBePEgfvMZvu49HUeulPuftT%2FauWjDirZtG%2BzUQtP5rfyQ9JcGDnMKeQtmMAUO3AJZtzVV8IvSrMimsYUK6tNGeLJFzpb9%2F3CcOOzoF7vahEWZlbNygUIM%2Be0Ow5%2BO%2FPstFk8yFTgjWkdgAxa%2BsZa9mU07eR9KxxpS8mC3eqtLR0FVmBDVUbtIAsoYUlSH8%2B7pcyBceMNRIlb8EdKb%2B4AMNVINeULPRLi%2FK%2FO1RKL4zMNPrv9Ewi4yvwwY6pgGx138rwiIqcHkzGqMo3WKWf0BjzIt%2F3TnfBs1Z%2FAsGJmgU3Fsf54T0MXz1Vvj5jy96PQR6sHRDcbsV4bs03i21Z6skxTYHiA69ZsmMeO1ub%2F0aafmQGDI6KVEYgGSkQwtXFCJIIQxnYV%2FYcFUU40lAteXBdL1%2BhWFeH4d%2BiGNTSqhp9X9%2FZLgcsTKBvFR8JBU91GMDPnaCmfAfzSNatw60XA8USRxG&X-Amz-Signature=07eabd1bca6234c94be4ca525149cf1e46a76dd6c788fb0b93f6489497db1c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
