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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46Z56UN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC%2BguSQWXS3Z4UEXbS0xFryXjhmbKa9XELjCxfw65s7yAIgXaQ7zmyd8h%2BtJ5Wg2a2%2BliNr030yliVrRV1IMWNdwQgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDzkhwY5us3tWHJXpSrcA3jTHtyG%2FVYJVT0jbGbLQxj1fBn1NRtHhdnDWf3Ia5hsgLm7ofgLNbnUnVs7mdZS0YmYndQRs13RTEJEMwdoASVnPz7HOAMbNtzerINDWL%2BnH845gwSTCSoqJOO8MV8Hhg4Z5XylBI%2BJL1nfqyd6KZiV2anc10wJsPzv%2FvOdg1jFwoZBzDaQBmQCUSF3KBvqOx099k%2Bbysp2TZEAVCQBq%2F5svqRJ1kLRE50fIxFcQgH6L9ZaWyDVPFrBpdVhO97rOEp147%2BbYIERnzaAU%2B4Ov1OBe3p0%2Br3JHLfs%2FRCq2NmKUOyNdUajoM60tb6MH1LkcWqG6mjbVWe6aEW%2B9xHkpiVpiWuXNhJtUpn9HfjFTcN9jTHJezZ5l5YXCIxxDr7A4F88gSTNUXoYUmBK2vaPuZeRq7qMpHxLPoWm4eU%2Br1i81qpDiZQGpeLfgt8jv%2FmeJcqjMrQP97apImrhxa51W80IdZJEjjiWTiasl7qqzMh%2BJqUis86frrmxVB92DFD2HSvAfhJmfLWrDGAYinjmxw1pyBUyzFIAU30XpRYaJoF3t7MM%2FgF3bEveXKoKODdflXZ8ji9bmg46YEGJtk1TXx8HNHpy50OwUUoBwBTyJ2zbT0UEGFnszs%2FzzCXKMJOdlcEGOqUBaLHJFKD%2F6d%2FLlcX7POa3CxV5nnjYWpKlT%2BOlPmJYMs31ToDcx%2FukkYJM3DWyaTuaZk%2BtxadDJZUsuk%2FXdWA9GaLQpiGGLkHUR1EEGDnu%2F8VRrsj1y%2BFDzLDO1jkJSliZaGZm3L3NKlmzlPKk1Y2jnccv9b%2FRp25jG4mLuKJ5VERff28Q9BUurJp%2BQjMnki37suDnEMxJjW7ee1OhULfxAMnmquhF&X-Amz-Signature=2367f11ab73d093c6fb965888487016b5c45a40364269c558b5ed21488c73da6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46Z56UN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC%2BguSQWXS3Z4UEXbS0xFryXjhmbKa9XELjCxfw65s7yAIgXaQ7zmyd8h%2BtJ5Wg2a2%2BliNr030yliVrRV1IMWNdwQgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDzkhwY5us3tWHJXpSrcA3jTHtyG%2FVYJVT0jbGbLQxj1fBn1NRtHhdnDWf3Ia5hsgLm7ofgLNbnUnVs7mdZS0YmYndQRs13RTEJEMwdoASVnPz7HOAMbNtzerINDWL%2BnH845gwSTCSoqJOO8MV8Hhg4Z5XylBI%2BJL1nfqyd6KZiV2anc10wJsPzv%2FvOdg1jFwoZBzDaQBmQCUSF3KBvqOx099k%2Bbysp2TZEAVCQBq%2F5svqRJ1kLRE50fIxFcQgH6L9ZaWyDVPFrBpdVhO97rOEp147%2BbYIERnzaAU%2B4Ov1OBe3p0%2Br3JHLfs%2FRCq2NmKUOyNdUajoM60tb6MH1LkcWqG6mjbVWe6aEW%2B9xHkpiVpiWuXNhJtUpn9HfjFTcN9jTHJezZ5l5YXCIxxDr7A4F88gSTNUXoYUmBK2vaPuZeRq7qMpHxLPoWm4eU%2Br1i81qpDiZQGpeLfgt8jv%2FmeJcqjMrQP97apImrhxa51W80IdZJEjjiWTiasl7qqzMh%2BJqUis86frrmxVB92DFD2HSvAfhJmfLWrDGAYinjmxw1pyBUyzFIAU30XpRYaJoF3t7MM%2FgF3bEveXKoKODdflXZ8ji9bmg46YEGJtk1TXx8HNHpy50OwUUoBwBTyJ2zbT0UEGFnszs%2FzzCXKMJOdlcEGOqUBaLHJFKD%2F6d%2FLlcX7POa3CxV5nnjYWpKlT%2BOlPmJYMs31ToDcx%2FukkYJM3DWyaTuaZk%2BtxadDJZUsuk%2FXdWA9GaLQpiGGLkHUR1EEGDnu%2F8VRrsj1y%2BFDzLDO1jkJSliZaGZm3L3NKlmzlPKk1Y2jnccv9b%2FRp25jG4mLuKJ5VERff28Q9BUurJp%2BQjMnki37suDnEMxJjW7ee1OhULfxAMnmquhF&X-Amz-Signature=1e4b100dd3edeb86f7be3b0e34717c9fc3b395b3527429f06dabb27b5bd2f63c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
