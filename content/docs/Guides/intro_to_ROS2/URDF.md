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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4USOHJP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiyg9UaiqP2Lavx0TV43%2FKR5OEC5RUlr6ig4fk6QAcVQIgYWGMQUlFxBE9Tr0dhpSw%2BG0drndD6g7%2F5xCYDKgef1AqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj5WlCUjKtdF91bESrcAxU%2BJAP1YyVElseqgdskEb777uXTkEswZxqy7skAuKCMuHkj5ZTdB69l0uBJdN3HtB2C7H%2BhneUTusJHYrdgsD6N2C%2F4c9128mkaVPgTHYRBJW%2Fyoacu%2B2fAN8sRjQhPFYVsOx7vlsf7IXfQOJhkWGyKo%2FSjZlIUVd1x7yb9cHhtvdPnZ5HnDob7QeiTyiNQfSJ8jQe2Ivy0QTkl2VvarqY6XysiwiVYYT%2FXSyieWbudVydgzA%2BHE40sqYvrafqC0mOTsm4hMUB2%2FWy5uiYk36JjQ6gZlEl7uNXo26f4pLffhlcE3C1sV5H6s1myaabmEEJ5Jan2wKr5FOE5SvfXGYBvqafFsM069bkUzow%2B7J7cBCplKkbpJ21AbAXdXd0pneDz5y1pqd66apMc7D8PU4BpGAVowa8j23X3ne6fwZG0VFcUcpL9jWHndPeTCJRZgd%2FpXG4HuZlkcGWuP6qPSgwecqE%2BcZT6dxhhiowrHSB8NuPR%2FfzpV2Pm9%2Fheky%2Bd32hVSUIkytsm7E9cURbKU5miNbL%2BLCXd8KflUFklMq9laj7piKEB38zcJgxBkyHudFnKVtywRvVAjykUfjlDxefv92BBIime3V4EaQOetdmfVidnT8o4Q5Dmw0C2MPHqlcMGOqUBbLgyG7gsJuM3u%2B47RySJ0gOJaFrZjOYwtPIohNE4wpjKLayJvLtzJi8jsFFjt3uFTx1aU8s%2BIqEHBLNW3VYtmXNmoLcCwppXPn2wG1F00Kb8P2IrzJeSPIc%2Fc9%2FiLN78Re4tVArFrkUUn6lkLFBEeD4Fee487l7GRzHGFARugQjV7VK1PBxmNWDtgEjWEEmtIhQJMWb9iKvJW%2B4mqn6RolqCUc4p&X-Amz-Signature=895f43560b66646d70de4d9a628007bd14c4bcee64908b0deaaeb034a334a48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4USOHJP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiyg9UaiqP2Lavx0TV43%2FKR5OEC5RUlr6ig4fk6QAcVQIgYWGMQUlFxBE9Tr0dhpSw%2BG0drndD6g7%2F5xCYDKgef1AqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj5WlCUjKtdF91bESrcAxU%2BJAP1YyVElseqgdskEb777uXTkEswZxqy7skAuKCMuHkj5ZTdB69l0uBJdN3HtB2C7H%2BhneUTusJHYrdgsD6N2C%2F4c9128mkaVPgTHYRBJW%2Fyoacu%2B2fAN8sRjQhPFYVsOx7vlsf7IXfQOJhkWGyKo%2FSjZlIUVd1x7yb9cHhtvdPnZ5HnDob7QeiTyiNQfSJ8jQe2Ivy0QTkl2VvarqY6XysiwiVYYT%2FXSyieWbudVydgzA%2BHE40sqYvrafqC0mOTsm4hMUB2%2FWy5uiYk36JjQ6gZlEl7uNXo26f4pLffhlcE3C1sV5H6s1myaabmEEJ5Jan2wKr5FOE5SvfXGYBvqafFsM069bkUzow%2B7J7cBCplKkbpJ21AbAXdXd0pneDz5y1pqd66apMc7D8PU4BpGAVowa8j23X3ne6fwZG0VFcUcpL9jWHndPeTCJRZgd%2FpXG4HuZlkcGWuP6qPSgwecqE%2BcZT6dxhhiowrHSB8NuPR%2FfzpV2Pm9%2Fheky%2Bd32hVSUIkytsm7E9cURbKU5miNbL%2BLCXd8KflUFklMq9laj7piKEB38zcJgxBkyHudFnKVtywRvVAjykUfjlDxefv92BBIime3V4EaQOetdmfVidnT8o4Q5Dmw0C2MPHqlcMGOqUBbLgyG7gsJuM3u%2B47RySJ0gOJaFrZjOYwtPIohNE4wpjKLayJvLtzJi8jsFFjt3uFTx1aU8s%2BIqEHBLNW3VYtmXNmoLcCwppXPn2wG1F00Kb8P2IrzJeSPIc%2Fc9%2FiLN78Re4tVArFrkUUn6lkLFBEeD4Fee487l7GRzHGFARugQjV7VK1PBxmNWDtgEjWEEmtIhQJMWb9iKvJW%2B4mqn6RolqCUc4p&X-Amz-Signature=b4a0c8503064ad49be2bf6e5e617d1c9176ad3903c7f8729dd7423cfc5077f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
