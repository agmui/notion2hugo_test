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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZ6HMAH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFtn9KTTzvRmeQ%2BKzeuF6H3egc0YJs%2FHXalqHpcFGudYAiEA6bIGT2Td7Cuprr2wGSFpeT4klN7L6YHcgfFORZM4fcEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPTbO6FF29CgINJl8SrcAyRI4ZXzmNvs3deGhYNvRG4en%2BChVwia4WE1VFhE3MfuB71wJRT6RtSAo3rJShcpqy9EuUwVdgScbnbk30cJ%2BLXHTEb9QpLlXDur%2FkIqeMcSQj%2FLUMfXtW6cS586bn0SPjbDf2QIRdRj9lTVFZqt%2B29qID7051BHQPwhm2nUfb%2BZLyEP0YDQcnt%2FB8e8j0eV%2FvyV09kJGnW0SprnEXPZlqb2fDzZzeI4xbe1t2uVe3YouNtKfl6Fw5iEtc3KXgPPYeHiIrhSs%2BIp%2FUiYN9FGr7MBmcVAGf1hL56JZ%2BTfJ75IpS%2F9h%2Bv7ykO6CxT5guzq9f4YREW2EzsAdwgHUz%2F5MRDh8Xq0Hl3858DgNc9M6JFnve%2BKp%2FpSEz63RO5W7JdnjolEr2MYPUaGZ1iLlRChQ2X4ziyCJ2sc80bdP3mY7Ji4EXpOHlbB9hGhm7D%2BB4DQovsVgRhStWYqwUjWLfDY5CG9%2FWCuExZTPC3CTaZFqCSPwsuxf1RAHdFt83TG1u3gPkJ4%2BRyVwXSTBSK2VoAezst9weNQkz6fCyhhHk%2Fqc0jJVOgVb9ctkSTiTOfVaXpE2bEvtjFfNNJd0XhpZbokLQuW%2BGvSkrwYM1l%2FVNm26SxgUQp6gpLO8%2BA6zrcTMMXTicQGOqUBaZg%2Fx7v9RB%2BJMlfe4eaH4gPhK3AG9pC87NBIT58ICLUYzIzK8irT9%2F1zW%2BD38UoYn5P%2BZasSlH6RfNUNj6AuJyTGEDudXWE%2BDpsWjUfyMaVLRXb1lOuPt8UnIM2d7v1Aiwja1f6RfTWdG2HzObEWH1Sq1AJDBCUH5Z9nk1nzgoauAVxJtMY5IFQHmj7H3DqBInnsXnfwnKII2TxL4Z2wB2lVNJLR&X-Amz-Signature=77cd02d2bf56be67a8d5c696fcc096ee32c85dbbd4f62688d5a0308d7df169a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZ6HMAH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFtn9KTTzvRmeQ%2BKzeuF6H3egc0YJs%2FHXalqHpcFGudYAiEA6bIGT2Td7Cuprr2wGSFpeT4klN7L6YHcgfFORZM4fcEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPTbO6FF29CgINJl8SrcAyRI4ZXzmNvs3deGhYNvRG4en%2BChVwia4WE1VFhE3MfuB71wJRT6RtSAo3rJShcpqy9EuUwVdgScbnbk30cJ%2BLXHTEb9QpLlXDur%2FkIqeMcSQj%2FLUMfXtW6cS586bn0SPjbDf2QIRdRj9lTVFZqt%2B29qID7051BHQPwhm2nUfb%2BZLyEP0YDQcnt%2FB8e8j0eV%2FvyV09kJGnW0SprnEXPZlqb2fDzZzeI4xbe1t2uVe3YouNtKfl6Fw5iEtc3KXgPPYeHiIrhSs%2BIp%2FUiYN9FGr7MBmcVAGf1hL56JZ%2BTfJ75IpS%2F9h%2Bv7ykO6CxT5guzq9f4YREW2EzsAdwgHUz%2F5MRDh8Xq0Hl3858DgNc9M6JFnve%2BKp%2FpSEz63RO5W7JdnjolEr2MYPUaGZ1iLlRChQ2X4ziyCJ2sc80bdP3mY7Ji4EXpOHlbB9hGhm7D%2BB4DQovsVgRhStWYqwUjWLfDY5CG9%2FWCuExZTPC3CTaZFqCSPwsuxf1RAHdFt83TG1u3gPkJ4%2BRyVwXSTBSK2VoAezst9weNQkz6fCyhhHk%2Fqc0jJVOgVb9ctkSTiTOfVaXpE2bEvtjFfNNJd0XhpZbokLQuW%2BGvSkrwYM1l%2FVNm26SxgUQp6gpLO8%2BA6zrcTMMXTicQGOqUBaZg%2Fx7v9RB%2BJMlfe4eaH4gPhK3AG9pC87NBIT58ICLUYzIzK8irT9%2F1zW%2BD38UoYn5P%2BZasSlH6RfNUNj6AuJyTGEDudXWE%2BDpsWjUfyMaVLRXb1lOuPt8UnIM2d7v1Aiwja1f6RfTWdG2HzObEWH1Sq1AJDBCUH5Z9nk1nzgoauAVxJtMY5IFQHmj7H3DqBInnsXnfwnKII2TxL4Z2wB2lVNJLR&X-Amz-Signature=b7bcac01de98e37f5976e69e22ce0bd7af2569d3393c8b377a3471ca1cba3258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
