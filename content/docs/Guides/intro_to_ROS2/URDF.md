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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZOMW7L%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5ewSQGM%2BC4WcxYAmylrqVcwMvrny%2FsmI3jYi1OwmtsAiEAvd5r%2FDAz7jwAncQmyWQtp3XoGGbsy2dUsXpHL6XTk9QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5H3IuaFQ1fBDz%2FTCrcA71pfz8mLFoeURT%2FH6ApeLON0GfbuLgaBYqg%2Fr12oDyuLetCHyQdfK2cYhvmoNSlRwDRdwJkY3Z2tFdTp2GOC2wihXgZg85etcrhdNH9rLiEEWL2LlpCBqDn6jzl7VVkHuaL43GMqrQxx%2BPdE4E%2F0wgJD%2BE7xfHc9xUQMiu9rjfW2cH3TGn4xbguTvkUOZJEzX7FeMt6fKQpIBjnEn%2FcAU%2BqOvnrxTfeTdlYYJt5d8KM%2BhEEih5b8B4gr9CLDBwTMP%2Bfsjo1FZg3LLV1VxY2l9feU0ao9t2ig6j6maSlAYcYg1yUBAH8wGCvaBFXimnaV2PqnCnKGUtYWv0U354%2BpUUvH%2BwX289tWD%2BHdfrUa3w3Wm%2B1FiMQsB%2Bws1H%2FYvlx2vRMd3miDOPPA%2F4oqOMJAzHjPjyd0bRK3DRnfUuOjSno03WDwA8WaRl1eMTSfmCAC6CIphVXH5vtdK5sVal0Nc9xmD%2Bshy4Jcg15yXeUrezk%2F2KLea4oNMKYgRoZakkmPnAde7e1QI%2BXy%2FGyaweSU2MK8JLOHW7qbKO%2BpF9LTqDTEGkBz90x0oIIcpFSIs9S1iTKtR%2F3asZCJ6iICWf3ZX5sO2YGdxEd%2BCyTL%2Fx5SmviIic6DEhYjnWwCotlMOKBrMEGOqUBBRuS2%2BXyKeiE0QoBRI9w5YdmQ4FzsrocciqRR51bk0g10mp5P7z%2FWxiQKKGyIbPrrfwmvdErlB0rNVtiBX9y8QSEeBRFjHfHUdtq1YzOQrq733XAEE3ihO5Rmdt3Hb8PkNGJfY1jAYusR27kD0k3QpZZ6cU1aOA7mhzM%2BiFlBERJrEmaSUEfA%2BsYGeI7TDDW2uI%2B%2FwZ0fy1yicAy4%2Fd%2Fe9CreQnN&X-Amz-Signature=768889001fb087679fe662554485245dfe857777c8f184219399ca6f7becaac5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZOMW7L%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5ewSQGM%2BC4WcxYAmylrqVcwMvrny%2FsmI3jYi1OwmtsAiEAvd5r%2FDAz7jwAncQmyWQtp3XoGGbsy2dUsXpHL6XTk9QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5H3IuaFQ1fBDz%2FTCrcA71pfz8mLFoeURT%2FH6ApeLON0GfbuLgaBYqg%2Fr12oDyuLetCHyQdfK2cYhvmoNSlRwDRdwJkY3Z2tFdTp2GOC2wihXgZg85etcrhdNH9rLiEEWL2LlpCBqDn6jzl7VVkHuaL43GMqrQxx%2BPdE4E%2F0wgJD%2BE7xfHc9xUQMiu9rjfW2cH3TGn4xbguTvkUOZJEzX7FeMt6fKQpIBjnEn%2FcAU%2BqOvnrxTfeTdlYYJt5d8KM%2BhEEih5b8B4gr9CLDBwTMP%2Bfsjo1FZg3LLV1VxY2l9feU0ao9t2ig6j6maSlAYcYg1yUBAH8wGCvaBFXimnaV2PqnCnKGUtYWv0U354%2BpUUvH%2BwX289tWD%2BHdfrUa3w3Wm%2B1FiMQsB%2Bws1H%2FYvlx2vRMd3miDOPPA%2F4oqOMJAzHjPjyd0bRK3DRnfUuOjSno03WDwA8WaRl1eMTSfmCAC6CIphVXH5vtdK5sVal0Nc9xmD%2Bshy4Jcg15yXeUrezk%2F2KLea4oNMKYgRoZakkmPnAde7e1QI%2BXy%2FGyaweSU2MK8JLOHW7qbKO%2BpF9LTqDTEGkBz90x0oIIcpFSIs9S1iTKtR%2F3asZCJ6iICWf3ZX5sO2YGdxEd%2BCyTL%2Fx5SmviIic6DEhYjnWwCotlMOKBrMEGOqUBBRuS2%2BXyKeiE0QoBRI9w5YdmQ4FzsrocciqRR51bk0g10mp5P7z%2FWxiQKKGyIbPrrfwmvdErlB0rNVtiBX9y8QSEeBRFjHfHUdtq1YzOQrq733XAEE3ihO5Rmdt3Hb8PkNGJfY1jAYusR27kD0k3QpZZ6cU1aOA7mhzM%2BiFlBERJrEmaSUEfA%2BsYGeI7TDDW2uI%2B%2FwZ0fy1yicAy4%2Fd%2Fe9CreQnN&X-Amz-Signature=280652c57a11eae6119c808b9fae48b3fcad6b692485e93c3ece19bd55626ace&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
