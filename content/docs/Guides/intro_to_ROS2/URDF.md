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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSAXQEZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFQzJM%2Bs7S6qLlsGA5c3zVbZqTd2AZX4s%2Bq1rHmDtSncAiEA8dL5S8Ho9MVZCWlxoeagSadkUzU9sr3McHPc2u3eKnIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN5mRoFf9Cic8tb9IyrcA6Qn%2BiUVp0HATUIIexkoOqYRYRjUxJ5mPgeW641sl1RMK8bcasjjtz9vvAZZsK4LC6tcQVHCffTiBw8GBXgGo1vrJWIIviWd2XY23Dv%2BZWPmt7%2F6JDYmqqPwH9unDQT9ioizvO2BP8SiK%2F9JNNLcCbGSkn17yfOurwD8SHH%2Fq87myIigkKmGEHKJlr5OIpLvVCWHYg4kPRhsx6Xre80%2FTpjso3JmgYg93I%2BppfsX9tEvhB3fCtwZX8ezEwgGnbfFZHf01ZiZKmntu44zawRNITw%2Fh2fYl%2F6sciyDEMW2XXPL0R8gTe%2F0um4kTuHJyto6UOl73B8h2odi1zEWu%2F55Ddxwr5%2FBeDXEmZRpO%2FG%2Bif%2FqnwJbqKR9LPbiv3GcGV%2FJ0Ai04r4RHe5UmIIum%2BcdNl%2BdQl5ZPgBcep2NHz0p%2B%2FWVcECO3I7TVbiTUyQCXBLC3B3oQOu43zR3%2FB2979JIeTANnibRI%2FJK2VGJY05L5YZ8vngnwiGBVQgfnfRWP0hG2qaN0TPbKv66IF%2BSAM95zZMKnSRZVIpk779eS%2F8GApHpAjXtOivDd9V2UVeMcivauSb8Nf0o1dywe4iElZSGNzsgODxdJ5U5E12lZysEYE4FGOSIptrB1YvWxGrdMLm0v8IGOqUB9ozh1MQa%2BUbKsXl1BWs4EptZhAALuUqusPtrF8yh916k5v3GPZgtqdYaT%2FdRNbrY36JcxyFpAI%2Ffn92s7iJChGdhEKilsaObJIEeqoU%2B9U26V9VhYTEHX2vH8QKsr%2FvEJZ870OstOajf4QfQslotlk%2B2ilW50zlAnzenYaVQHZRbW1OY%2FMve5FopRQD8WPmiDCXEjW%2F1a2ytE%2FYrA%2FTWK2Q5CEOf&X-Amz-Signature=e0dd090fac37cbc7f2fa8e6611ac9ba74b2ef5b4f307cadcab445f649ff41bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSAXQEZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFQzJM%2Bs7S6qLlsGA5c3zVbZqTd2AZX4s%2Bq1rHmDtSncAiEA8dL5S8Ho9MVZCWlxoeagSadkUzU9sr3McHPc2u3eKnIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN5mRoFf9Cic8tb9IyrcA6Qn%2BiUVp0HATUIIexkoOqYRYRjUxJ5mPgeW641sl1RMK8bcasjjtz9vvAZZsK4LC6tcQVHCffTiBw8GBXgGo1vrJWIIviWd2XY23Dv%2BZWPmt7%2F6JDYmqqPwH9unDQT9ioizvO2BP8SiK%2F9JNNLcCbGSkn17yfOurwD8SHH%2Fq87myIigkKmGEHKJlr5OIpLvVCWHYg4kPRhsx6Xre80%2FTpjso3JmgYg93I%2BppfsX9tEvhB3fCtwZX8ezEwgGnbfFZHf01ZiZKmntu44zawRNITw%2Fh2fYl%2F6sciyDEMW2XXPL0R8gTe%2F0um4kTuHJyto6UOl73B8h2odi1zEWu%2F55Ddxwr5%2FBeDXEmZRpO%2FG%2Bif%2FqnwJbqKR9LPbiv3GcGV%2FJ0Ai04r4RHe5UmIIum%2BcdNl%2BdQl5ZPgBcep2NHz0p%2B%2FWVcECO3I7TVbiTUyQCXBLC3B3oQOu43zR3%2FB2979JIeTANnibRI%2FJK2VGJY05L5YZ8vngnwiGBVQgfnfRWP0hG2qaN0TPbKv66IF%2BSAM95zZMKnSRZVIpk779eS%2F8GApHpAjXtOivDd9V2UVeMcivauSb8Nf0o1dywe4iElZSGNzsgODxdJ5U5E12lZysEYE4FGOSIptrB1YvWxGrdMLm0v8IGOqUB9ozh1MQa%2BUbKsXl1BWs4EptZhAALuUqusPtrF8yh916k5v3GPZgtqdYaT%2FdRNbrY36JcxyFpAI%2Ffn92s7iJChGdhEKilsaObJIEeqoU%2B9U26V9VhYTEHX2vH8QKsr%2FvEJZ870OstOajf4QfQslotlk%2B2ilW50zlAnzenYaVQHZRbW1OY%2FMve5FopRQD8WPmiDCXEjW%2F1a2ytE%2FYrA%2FTWK2Q5CEOf&X-Amz-Signature=72f1563bf948cbebf28d4ea6638b88237bbfb21f9d360ef3e61329c9b77bc9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
