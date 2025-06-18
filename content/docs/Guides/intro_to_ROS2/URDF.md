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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMS337AL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK%2BvI9MDiOKMS09afJ3sq%2FXbNxTNK4wszQWTxRg2IPwAIhANW%2F7tTlhJZ%2BTXJtnjaWS3Wt8878v7f4Hassdw26QligKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0G9DnWaiyffnr5EMq3AP9XOdbwifZCVL2o3qXHzL8pucEB5etOw2jrHqRpKpVejJU4W0PexE76V3dE%2F2pvWzWSjFLLm%2FIVivzd7MyKwRv8t0HsCWRMFUC4vtdH5xkMLM6JVRcFedPWUnHAANBFrKIt9O37DHCSa8D%2BDWijXJv5j2CleNqMi4voCQ2%2FHTMPIUL1xpo8u5%2F4eqMW6Sw1%2FECi5XxvpfustiKlqbmImoUwrJjsDPRdYAtBghVJASP%2FcTGp1F8FdQWCjKOvh80j5xOyWfyravL7%2Fl8xcw%2B57BSTG1sWBXTJKT3H7Qyw5O%2Bxp5ALn78gUvEK0f30hqKgnN7tQIDDUfjFTkJsLnIGfGg0D%2BZHJLYLq3XvilycPPkmJScXwrxsdO7J0QgHUNojPqiRCEGnOnxDLx%2BqKmpwXCItA4BL4GTz0X30RPlmSjpL5BqaySr7avubZPS2TggzT7xRAcif%2B%2FQIy%2Fq0%2BOQ45jigyzyXJK6I4NfjMn4ojPXcfiseLxG2MXUeM0gowjAASTWz4NpVdxtRuJNqAX9i5rzO43VulHDL6B3ueTLlsl7r1Z8ZIAuHAPk%2F%2BIFpUOVYumHZXKtovGq4j7Mf%2FLlcwJxkRUY4rUfzO%2Fi3s3HuzPOllZpWBqGjh38X%2F1FTjDo%2B8vCBjqkARBc2hVs6HNTUaWOKtUu%2B0M4rU3ydiU3zFYhBhoEVgo%2BeV%2F7Yl8qCNcKW%2FdyPFZK8rf2w4H3qSlAOYSexQoKEZ4jo8pv9KBBwU1FviM7NIRqBENHJ%2B%2BkBIAl20u3tSRgIi62UK1r6TOVbmey6zHSQ4NlnQRRECJgy8%2FMzbRqldpLCaRZ5goWFxD8P4ObRVwaRJVcMBorj4TAWxstwk0Vo0x%2FTCl2&X-Amz-Signature=1c748868b407e339f8c38729ea42790010332544e23f9ef0c61e7fc47c177738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMS337AL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK%2BvI9MDiOKMS09afJ3sq%2FXbNxTNK4wszQWTxRg2IPwAIhANW%2F7tTlhJZ%2BTXJtnjaWS3Wt8878v7f4Hassdw26QligKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0G9DnWaiyffnr5EMq3AP9XOdbwifZCVL2o3qXHzL8pucEB5etOw2jrHqRpKpVejJU4W0PexE76V3dE%2F2pvWzWSjFLLm%2FIVivzd7MyKwRv8t0HsCWRMFUC4vtdH5xkMLM6JVRcFedPWUnHAANBFrKIt9O37DHCSa8D%2BDWijXJv5j2CleNqMi4voCQ2%2FHTMPIUL1xpo8u5%2F4eqMW6Sw1%2FECi5XxvpfustiKlqbmImoUwrJjsDPRdYAtBghVJASP%2FcTGp1F8FdQWCjKOvh80j5xOyWfyravL7%2Fl8xcw%2B57BSTG1sWBXTJKT3H7Qyw5O%2Bxp5ALn78gUvEK0f30hqKgnN7tQIDDUfjFTkJsLnIGfGg0D%2BZHJLYLq3XvilycPPkmJScXwrxsdO7J0QgHUNojPqiRCEGnOnxDLx%2BqKmpwXCItA4BL4GTz0X30RPlmSjpL5BqaySr7avubZPS2TggzT7xRAcif%2B%2FQIy%2Fq0%2BOQ45jigyzyXJK6I4NfjMn4ojPXcfiseLxG2MXUeM0gowjAASTWz4NpVdxtRuJNqAX9i5rzO43VulHDL6B3ueTLlsl7r1Z8ZIAuHAPk%2F%2BIFpUOVYumHZXKtovGq4j7Mf%2FLlcwJxkRUY4rUfzO%2Fi3s3HuzPOllZpWBqGjh38X%2F1FTjDo%2B8vCBjqkARBc2hVs6HNTUaWOKtUu%2B0M4rU3ydiU3zFYhBhoEVgo%2BeV%2F7Yl8qCNcKW%2FdyPFZK8rf2w4H3qSlAOYSexQoKEZ4jo8pv9KBBwU1FviM7NIRqBENHJ%2B%2BkBIAl20u3tSRgIi62UK1r6TOVbmey6zHSQ4NlnQRRECJgy8%2FMzbRqldpLCaRZ5goWFxD8P4ObRVwaRJVcMBorj4TAWxstwk0Vo0x%2FTCl2&X-Amz-Signature=4d01c251747490a144da8672f669835e402e8927eb10b71fb997407d82bafc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
