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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2INTJT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIA3n6I0A5cmPlGtP40mourWakhW214E8F0583Qofbq72AiEAma%2BrHyVLOGGIAUfY%2Fys%2Fe5ReQ0ymPV6hZFh%2FPLK6rJAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNhmtvYYB9viTnl1ZCrcA1%2BUJIJTWdWCHrJ8pcNrv4tsUsCymecEpglaui%2B%2BdCScsBIzOmU47frcG7629PdmqmWMU%2FIqWUhssObRt%2BCOHLAOmanWVL1K4mpV34k5rs8WG5X8vUlFvSUf6oMZdhyg31M19YOxRnNXQvICOjT4u9emNpYpv85Vr6Bjzc2JyVGZeO7pUD5%2BdAwMmbsPe1ZbLdrwdgRB4aKoatE4pxyBOHLn24tTV07634S6USEC%2Bh5KdC2DbqD4toPldOqsXE%2FR4diE3RFGLSr4D%2B6MX71Aq9YVqtYz5c5li8rzzEp88o2dgcK45VjzyN%2BMsU%2FinsfeLHNFpjBOTBMGiub7htWr3ddMtKRYeK2VHmU3b8CTuLzAbnvsnouAQgGro2kq3u87Ba8YnTJIytYwE6w1YJdDFCaEnZwfBPKePScLIzKvKilEpUs%2BkdYhYiHMBUTxOrVvjy%2F%2B%2FwGleQwte%2FDaN0O%2FmCNtCekiPs6%2FNOSlKlMUSSt4tBgUc4FSwhe7FIsX7asZJY9stN%2FM3bIeXPKFVV5orQzvVd5BWf7g7jTx0YrOGt6Xz9X%2Fn6KevlnTKz236ajAGhF%2FnkaS62uqq%2FZU2gdRp8DhkkeZ7%2BCx1q%2ByOtsUw14G4Ew9wtU%2F2iASdAqvMIm15b4GOqUB2Uwk2rAEA%2F6jQSznHvbrasiwGfAUMm2Y8ds%2Bll3%2FZdThL2cbj8YkvRfzT5qy51%2FPmQ11GHfPYwHv6kZkg0luR8BBdgI4TZ3aom8Nabz4tkXNz89WVksheurKs62M41MbjuXsMPycR5CZ9JPxLEVwyiqyVroK2X1NxwWRiEaCEDSTEtXZ9tO915Ix67uc8lUDZa0xJhYI0UU6LRvgSul1L6vFO%2BKG&X-Amz-Signature=34f4c58d8e1852920ac82f3e99eb5c8f80b45eb8cb97b7a25ec28c7983c6ed19&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2INTJT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIA3n6I0A5cmPlGtP40mourWakhW214E8F0583Qofbq72AiEAma%2BrHyVLOGGIAUfY%2Fys%2Fe5ReQ0ymPV6hZFh%2FPLK6rJAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNhmtvYYB9viTnl1ZCrcA1%2BUJIJTWdWCHrJ8pcNrv4tsUsCymecEpglaui%2B%2BdCScsBIzOmU47frcG7629PdmqmWMU%2FIqWUhssObRt%2BCOHLAOmanWVL1K4mpV34k5rs8WG5X8vUlFvSUf6oMZdhyg31M19YOxRnNXQvICOjT4u9emNpYpv85Vr6Bjzc2JyVGZeO7pUD5%2BdAwMmbsPe1ZbLdrwdgRB4aKoatE4pxyBOHLn24tTV07634S6USEC%2Bh5KdC2DbqD4toPldOqsXE%2FR4diE3RFGLSr4D%2B6MX71Aq9YVqtYz5c5li8rzzEp88o2dgcK45VjzyN%2BMsU%2FinsfeLHNFpjBOTBMGiub7htWr3ddMtKRYeK2VHmU3b8CTuLzAbnvsnouAQgGro2kq3u87Ba8YnTJIytYwE6w1YJdDFCaEnZwfBPKePScLIzKvKilEpUs%2BkdYhYiHMBUTxOrVvjy%2F%2B%2FwGleQwte%2FDaN0O%2FmCNtCekiPs6%2FNOSlKlMUSSt4tBgUc4FSwhe7FIsX7asZJY9stN%2FM3bIeXPKFVV5orQzvVd5BWf7g7jTx0YrOGt6Xz9X%2Fn6KevlnTKz236ajAGhF%2FnkaS62uqq%2FZU2gdRp8DhkkeZ7%2BCx1q%2ByOtsUw14G4Ew9wtU%2F2iASdAqvMIm15b4GOqUB2Uwk2rAEA%2F6jQSznHvbrasiwGfAUMm2Y8ds%2Bll3%2FZdThL2cbj8YkvRfzT5qy51%2FPmQ11GHfPYwHv6kZkg0luR8BBdgI4TZ3aom8Nabz4tkXNz89WVksheurKs62M41MbjuXsMPycR5CZ9JPxLEVwyiqyVroK2X1NxwWRiEaCEDSTEtXZ9tO915Ix67uc8lUDZa0xJhYI0UU6LRvgSul1L6vFO%2BKG&X-Amz-Signature=12cb5eb3c69623f132e85f3c2dee14710164626d7a6ea6327b281431c127ad1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
