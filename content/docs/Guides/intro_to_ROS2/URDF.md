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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QLCFSR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCADD2VqG4zH4q%2BIkJt0HLc3e%2FZmrowMsUcwlwzt71zigIhAOAdlYI99Se2rRfV5sOeAUjNCrAbBOdWpGd0N%2FZS2vp6Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx9Qcbss9%2FtSGk%2BTy4q3AOXRGy0nK%2FfPdjDBlGSA28kdqRooI4lf3CA7Y2DwUHHHHg7IQeExnrvDT%2B6WELQ2McI661nndmz2%2FciEp6M09zxdF5yp%2FKJWFR19IrzDGXyw5QosPU2JKf7OqLMC0VYTSQ4V1sKn%2FlErISjuf6BYMSewjsC50uEYPTMaRGeaRUvEFbGNg6F4%2BQWXZxzoKQvd3oqm9tIBVabQzHpT3SCSbe%2F1mpUN2ILmynKHr5kOeVyBXR2j7RStEWXzDOqyRwvmYrzu8yJpPoxpBPM%2B7QoWXt0QRKOxBxFKaDPZxckygmk2QESryLGjexruhEbMbUN%2FdcHcFTGi5vxAyd%2BDj6YT3F1s2hsZMtoVkp3PiVUFAeaUSOw89Y4GTrCgU641D74P17BRNSVkyer%2FWVaLtdqoWhHNXk7vM30319QpDkTysgR1%2BfrgP78EAQAJslPz58UTbQTpi4P22CJjpkVPZrEVTp0oUITHWnhBfmpBtBtt0N1IqQqjhOa1XNwxWq6M0Xm0sJNm%2B4sLNHBn1k2fO%2Bf9E7l95bXcU8MGCduwKep84TrrVh%2BQM9Gbvq4RJ4QLCSfKlgDAY6F%2BLXo1LLyGPmG7MD355MFuAvoiFB%2FS0R55edDLDV6FmJE3AyeR6dBdzCR7avDBjqkAeg8N72%2Fy9Tpmtjl%2B0WmILkJ%2BsekPb1Dd0f4WS4BJZXGavSKzd22AhR4sg2yrP8l0i21vCd3nZ5mSElclR95nkP3jF3NCOBTlL7Qv6anp8vkoE3DRXRjkgKcfZOvMcR02bGHOqSvyej85eYcekH7Xw7xD6%2FZ2IQ%2BZq41G5S32P0c2pZIsriMOeFt7fYjV6nLHI1xi4bJeDgEjrQW8E2T8CQyt%2F%2FD&X-Amz-Signature=96ac3f32865e4521f4a50809e4705ac9c1958e43f66a0e7907e343ec127ba616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QLCFSR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCADD2VqG4zH4q%2BIkJt0HLc3e%2FZmrowMsUcwlwzt71zigIhAOAdlYI99Se2rRfV5sOeAUjNCrAbBOdWpGd0N%2FZS2vp6Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx9Qcbss9%2FtSGk%2BTy4q3AOXRGy0nK%2FfPdjDBlGSA28kdqRooI4lf3CA7Y2DwUHHHHg7IQeExnrvDT%2B6WELQ2McI661nndmz2%2FciEp6M09zxdF5yp%2FKJWFR19IrzDGXyw5QosPU2JKf7OqLMC0VYTSQ4V1sKn%2FlErISjuf6BYMSewjsC50uEYPTMaRGeaRUvEFbGNg6F4%2BQWXZxzoKQvd3oqm9tIBVabQzHpT3SCSbe%2F1mpUN2ILmynKHr5kOeVyBXR2j7RStEWXzDOqyRwvmYrzu8yJpPoxpBPM%2B7QoWXt0QRKOxBxFKaDPZxckygmk2QESryLGjexruhEbMbUN%2FdcHcFTGi5vxAyd%2BDj6YT3F1s2hsZMtoVkp3PiVUFAeaUSOw89Y4GTrCgU641D74P17BRNSVkyer%2FWVaLtdqoWhHNXk7vM30319QpDkTysgR1%2BfrgP78EAQAJslPz58UTbQTpi4P22CJjpkVPZrEVTp0oUITHWnhBfmpBtBtt0N1IqQqjhOa1XNwxWq6M0Xm0sJNm%2B4sLNHBn1k2fO%2Bf9E7l95bXcU8MGCduwKep84TrrVh%2BQM9Gbvq4RJ4QLCSfKlgDAY6F%2BLXo1LLyGPmG7MD355MFuAvoiFB%2FS0R55edDLDV6FmJE3AyeR6dBdzCR7avDBjqkAeg8N72%2Fy9Tpmtjl%2B0WmILkJ%2BsekPb1Dd0f4WS4BJZXGavSKzd22AhR4sg2yrP8l0i21vCd3nZ5mSElclR95nkP3jF3NCOBTlL7Qv6anp8vkoE3DRXRjkgKcfZOvMcR02bGHOqSvyej85eYcekH7Xw7xD6%2FZ2IQ%2BZq41G5S32P0c2pZIsriMOeFt7fYjV6nLHI1xi4bJeDgEjrQW8E2T8CQyt%2F%2FD&X-Amz-Signature=801168fc25f7714cff26b5da75258b4b3662521d16a87e8763c14b6ac43653b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
