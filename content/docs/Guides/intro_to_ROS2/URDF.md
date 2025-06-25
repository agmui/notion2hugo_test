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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3X6TRCD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEPVeJO31supGWaKMVgeen3JWDPU%2B0Hbv%2BOT9HIGDROqAiEA7CTaaZE085XEVujKb1i98I7damm7ykpMzbQOB0m3JKoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOWcqEzwHDiMg16gyCrcAzAcVJcDaEqzaxC0j5zKhZPmLJUCygz2g2Va018pGDSfdXTa0QwuihYtfWqqRN93O%2BEr6x6UO3zR3%2BPW0Yo5oUH7LIMbfk7%2B%2Fp8%2FxfY%2BMYnjUHrVSbeT1TJHIVbEE25f5iPzHAVuh3agdktFbefYSEahQERTS3FJEQ8U1iy2UIcpthcmiX2MEb5pcOkA32hrT508zT7D%2F7HL4H3ng3%2Bin6LQ%2BXY0NJ7Ho2syRtNlQfgA7KvIC6EUSX9rViy4QolcNOYxiRdZjVtDvuttZnYMQjioWbLh4zWD8jbu%2FRo42qQVbjGiWK9xPIoPAPyxM98jujRcluNrqSjl8l%2F6luTe%2BjQsz%2BdjzTsRMJnaX2%2FHFVoIAGnnt16q2o6arq3fjjDKkqYEIDQhfdSFUZ%2F6fIR2pFMLingBVbCxp5UA4e84y077iuyuswXOZtSvt9XcIlUbQ6L08oYnBVQC9MeJVKKkcgFJR88vcUaG6TYBBGkrIMOeaeKgfwnPoSbeFFw%2FDzxVrXL16UrrRnAoKeVFtPUHQNiLyJ1x3cRhUsZ29lOcy%2B20sVJ57N3XC3uq1xAngCBvEavJ5Mt97Xq9rGG8kH3Ht0Ygt3AfKVOETgrTf4wqgOHnZBu3YYFqrCby%2FCcjMNLv78IGOqUBPc3iXkP7bhkH45oiG54Vn%2FOvCDFeccLhMVzk6s1TQnbZ5WI3pAVND%2BlbO%2BYZ4LJnmgxz%2Bxai4Dmcy%2BSCS4cMIv5lgiXOgB%2F%2B8A4fSl4%2FGy%2FzY%2FH7t5%2BDk9YG6qAMvyyHhr6fGWrtlfQd512BxET7agC3tHe4F4syD4SiTyN77UtjY3E9o%2FkqP7%2F6JD4b8U%2BhAe%2FIrjpP2%2B7TeBzlUYltb2fgMuf8&X-Amz-Signature=e8cae3e3f18ca972d5de8e10aece1ba7f5c2c3fed96b2e0d6eb2d1941b641512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3X6TRCD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEPVeJO31supGWaKMVgeen3JWDPU%2B0Hbv%2BOT9HIGDROqAiEA7CTaaZE085XEVujKb1i98I7damm7ykpMzbQOB0m3JKoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOWcqEzwHDiMg16gyCrcAzAcVJcDaEqzaxC0j5zKhZPmLJUCygz2g2Va018pGDSfdXTa0QwuihYtfWqqRN93O%2BEr6x6UO3zR3%2BPW0Yo5oUH7LIMbfk7%2B%2Fp8%2FxfY%2BMYnjUHrVSbeT1TJHIVbEE25f5iPzHAVuh3agdktFbefYSEahQERTS3FJEQ8U1iy2UIcpthcmiX2MEb5pcOkA32hrT508zT7D%2F7HL4H3ng3%2Bin6LQ%2BXY0NJ7Ho2syRtNlQfgA7KvIC6EUSX9rViy4QolcNOYxiRdZjVtDvuttZnYMQjioWbLh4zWD8jbu%2FRo42qQVbjGiWK9xPIoPAPyxM98jujRcluNrqSjl8l%2F6luTe%2BjQsz%2BdjzTsRMJnaX2%2FHFVoIAGnnt16q2o6arq3fjjDKkqYEIDQhfdSFUZ%2F6fIR2pFMLingBVbCxp5UA4e84y077iuyuswXOZtSvt9XcIlUbQ6L08oYnBVQC9MeJVKKkcgFJR88vcUaG6TYBBGkrIMOeaeKgfwnPoSbeFFw%2FDzxVrXL16UrrRnAoKeVFtPUHQNiLyJ1x3cRhUsZ29lOcy%2B20sVJ57N3XC3uq1xAngCBvEavJ5Mt97Xq9rGG8kH3Ht0Ygt3AfKVOETgrTf4wqgOHnZBu3YYFqrCby%2FCcjMNLv78IGOqUBPc3iXkP7bhkH45oiG54Vn%2FOvCDFeccLhMVzk6s1TQnbZ5WI3pAVND%2BlbO%2BYZ4LJnmgxz%2Bxai4Dmcy%2BSCS4cMIv5lgiXOgB%2F%2B8A4fSl4%2FGy%2FzY%2FH7t5%2BDk9YG6qAMvyyHhr6fGWrtlfQd512BxET7agC3tHe4F4syD4SiTyN77UtjY3E9o%2FkqP7%2F6JD4b8U%2BhAe%2FIrjpP2%2B7TeBzlUYltb2fgMuf8&X-Amz-Signature=0b019788f008ba40c653ac1672ca5bccdd1cd8c1572160b0c22a791eafd90e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
