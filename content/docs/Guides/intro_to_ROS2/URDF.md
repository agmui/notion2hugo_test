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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETCKTJD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIExlv2a57WQdPR2kvd4QbrJInxVXMOLl9HWyGjVKuXHqAiEAz38CN9ZeJdwBR0Sp3a0Kiub4jDnQNurWjoHBBPerHVoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIy9MTOSYvafXt6CircAxd0m8g%2FmgqOl3Y5%2F7tNG4eCKEwIsO30Auvc9RPPKMzhG1OMWeEoN4TqqEnhRmVqJCPb5tJZs0AJ0UtBXnHxbsQqJyt0HRAFPI8OYPvkBUGedDYBPcbRXgo4l81kx6a9vc1EK2J6aW291C5uVgs4eAyyfMHAORwu1ImRwh%2B%2FYzYWU7PdeqIXaG%2F6sCfGm8XrG6SNdSABuRewwjrflqcNLSgVsiKeOjgG7H%2BRdi5Ncv7p2T73LM2nyUNJT3N17HtwyzXZVMsHWDp0%2BXjXzUh6CchqLvDu2T%2Fk2hzThxrK2MndaBIqQmjv7RNwGYCPWwkr73Htue5KhId4eNkWRTJvbjOhw1ejKanHYxuB3aCZhxQVo0bIUea78Gs3z7ben572xmwwi953CQL1BqawV8os%2FP2NgdiPZ9HuNHSvi1SV2dhfq%2FQ3d6HSNmTafbGjHLUJUNFnmIQfCiTlZTzfviVDduQte3QeaJWm%2B1wKySxTrQUKne%2FqeAgNmjSX9TGR%2BB8b6QysIu5CEiMJDcJuskmr0iyTwpb0BPlvm4u7EngEigZuDPHS2Y1SMnkayKk3UEiaozirojSYzBXlwEXxDEyDSQ35SVeV8jGWyWb6s4RUZj8MYARO9Wn3KtDinRNnMLjCgsEGOqUBxr2q8wav5gQs630VQGBIvqRNOx1biSE5KfQlkEa2GbTOJY4SN4BaMtRgvep1doV3IRDV21RVKh8fsDbPMWrYmP1ezOzdGJPB8d15B1M%2BgrxBOPP%2BBxrYjecv92UfdsL9%2Bia5orKLduAq%2F%2B8E8DNlTeCiB8Q03mDw2CBFwE5KrzRCF%2Fi5rBSLFufHm7Mp1zZeWf4%2FwUE0c4Mpo%2Flmu%2BlfS1Po8VUC&X-Amz-Signature=20113d17d7b6694e3ccf6b60f06dd63f5c2e31759c2c75f5b738561e34c62d91&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETCKTJD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIExlv2a57WQdPR2kvd4QbrJInxVXMOLl9HWyGjVKuXHqAiEAz38CN9ZeJdwBR0Sp3a0Kiub4jDnQNurWjoHBBPerHVoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIy9MTOSYvafXt6CircAxd0m8g%2FmgqOl3Y5%2F7tNG4eCKEwIsO30Auvc9RPPKMzhG1OMWeEoN4TqqEnhRmVqJCPb5tJZs0AJ0UtBXnHxbsQqJyt0HRAFPI8OYPvkBUGedDYBPcbRXgo4l81kx6a9vc1EK2J6aW291C5uVgs4eAyyfMHAORwu1ImRwh%2B%2FYzYWU7PdeqIXaG%2F6sCfGm8XrG6SNdSABuRewwjrflqcNLSgVsiKeOjgG7H%2BRdi5Ncv7p2T73LM2nyUNJT3N17HtwyzXZVMsHWDp0%2BXjXzUh6CchqLvDu2T%2Fk2hzThxrK2MndaBIqQmjv7RNwGYCPWwkr73Htue5KhId4eNkWRTJvbjOhw1ejKanHYxuB3aCZhxQVo0bIUea78Gs3z7ben572xmwwi953CQL1BqawV8os%2FP2NgdiPZ9HuNHSvi1SV2dhfq%2FQ3d6HSNmTafbGjHLUJUNFnmIQfCiTlZTzfviVDduQte3QeaJWm%2B1wKySxTrQUKne%2FqeAgNmjSX9TGR%2BB8b6QysIu5CEiMJDcJuskmr0iyTwpb0BPlvm4u7EngEigZuDPHS2Y1SMnkayKk3UEiaozirojSYzBXlwEXxDEyDSQ35SVeV8jGWyWb6s4RUZj8MYARO9Wn3KtDinRNnMLjCgsEGOqUBxr2q8wav5gQs630VQGBIvqRNOx1biSE5KfQlkEa2GbTOJY4SN4BaMtRgvep1doV3IRDV21RVKh8fsDbPMWrYmP1ezOzdGJPB8d15B1M%2BgrxBOPP%2BBxrYjecv92UfdsL9%2Bia5orKLduAq%2F%2B8E8DNlTeCiB8Q03mDw2CBFwE5KrzRCF%2Fi5rBSLFufHm7Mp1zZeWf4%2FwUE0c4Mpo%2Flmu%2BlfS1Po8VUC&X-Amz-Signature=3cca2eec3621d8221fa1b68d95fe5b23bfc3be4b0c2147adee24eb911b5a8185&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
