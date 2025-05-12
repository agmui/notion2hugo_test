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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625W2QIWF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDBDeoQdM5IxFJKQ6ECBVOECg8B%2FBGBuSc36HlvqYz9SQIgAMdjS1jASPaOLY%2BBn%2Fa%2B2NgeLyhDq1cdTv8qhTT7jg8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B%2FUxwUh3Hxi83LySrcA9ZJFbuEBxbFtpVhuV3MZzowXxkMWNqaL%2Bt0QfIAh9JD5Jl24VvDL%2FXaNYsuDkarBnM96ZIwdOAATPnlwEy8J7Se%2BZbgB0np%2BxWCWF6beMvqzQGKdTyIeW4%2B8LQJ90se2XqZGDfg45T6QLB3hAvY%2Fvz21SNFUxNgfDR2Uw4NUEoiTAEjhhEhpPzjvDDLbji6xf5jSa0e4qsledArsWJehNEcTcT7C50HaC4G8V4CaVaoieVcIxnA6AF0ATO90njmgiqFvDZJfaffwBaup9eByX2TdkkRBonB9bOCfxPjvbq5QHWAXRDWm7luFV3SmWlQNWuWB6JxwYnFvdkldfIGbVF4%2B1CZN5UpIlJrLc%2Bi%2BomXXdK7JDv3re%2FCjmm3HSx1x42Iopzd%2F2Gmd5XmhKT2TL4qF6JNutnMt4aDiC2Ii3B3AEUFS1Fwq9Heof%2BE0rfuEUF%2BQABDGziKr1mVJnrrE0JxVpO7mKU%2BCyBpe13SW5HvGQbximIfWXB7A5jB63Tt3xbXHHMMOpp93daJZfDoFItcOY%2B88F44SaFaXtlNrKWYeJBdMbFMZhPCXUCR1TcljQ%2BYROVxkv7zvcwb3LHtUvPUCO9BlDzpM1dyspVtEb5b8MVueNYFBRoqNIdOMPaFhcEGOqUBIVSGsbpfRGmi6Dp7cImFSWrPaPNixTSgHWMT4xbzQEx%2F2qWfZkKhG3AJS8jv0X1QK0Z5fXSOGkmV8I4JZyrPXlqoqbVI%2FxAsoZzjuPQn7a9yZZtoKmeaQpy38OxtaezYHTvWth2AzoU25BCDuR2mUZCHkTuYsiC2keUob%2BBIb9XuoK6IKTQZCdZKxj74JfViJx1aR7Oqy2RJ%2FPRiv9kdYIW1iDnb&X-Amz-Signature=2fbe6d56e357ac3e0ade7b83cb136d2ed6c82e62d8ed07c6dd7c64b1fded4e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625W2QIWF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDBDeoQdM5IxFJKQ6ECBVOECg8B%2FBGBuSc36HlvqYz9SQIgAMdjS1jASPaOLY%2BBn%2Fa%2B2NgeLyhDq1cdTv8qhTT7jg8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B%2FUxwUh3Hxi83LySrcA9ZJFbuEBxbFtpVhuV3MZzowXxkMWNqaL%2Bt0QfIAh9JD5Jl24VvDL%2FXaNYsuDkarBnM96ZIwdOAATPnlwEy8J7Se%2BZbgB0np%2BxWCWF6beMvqzQGKdTyIeW4%2B8LQJ90se2XqZGDfg45T6QLB3hAvY%2Fvz21SNFUxNgfDR2Uw4NUEoiTAEjhhEhpPzjvDDLbji6xf5jSa0e4qsledArsWJehNEcTcT7C50HaC4G8V4CaVaoieVcIxnA6AF0ATO90njmgiqFvDZJfaffwBaup9eByX2TdkkRBonB9bOCfxPjvbq5QHWAXRDWm7luFV3SmWlQNWuWB6JxwYnFvdkldfIGbVF4%2B1CZN5UpIlJrLc%2Bi%2BomXXdK7JDv3re%2FCjmm3HSx1x42Iopzd%2F2Gmd5XmhKT2TL4qF6JNutnMt4aDiC2Ii3B3AEUFS1Fwq9Heof%2BE0rfuEUF%2BQABDGziKr1mVJnrrE0JxVpO7mKU%2BCyBpe13SW5HvGQbximIfWXB7A5jB63Tt3xbXHHMMOpp93daJZfDoFItcOY%2B88F44SaFaXtlNrKWYeJBdMbFMZhPCXUCR1TcljQ%2BYROVxkv7zvcwb3LHtUvPUCO9BlDzpM1dyspVtEb5b8MVueNYFBRoqNIdOMPaFhcEGOqUBIVSGsbpfRGmi6Dp7cImFSWrPaPNixTSgHWMT4xbzQEx%2F2qWfZkKhG3AJS8jv0X1QK0Z5fXSOGkmV8I4JZyrPXlqoqbVI%2FxAsoZzjuPQn7a9yZZtoKmeaQpy38OxtaezYHTvWth2AzoU25BCDuR2mUZCHkTuYsiC2keUob%2BBIb9XuoK6IKTQZCdZKxj74JfViJx1aR7Oqy2RJ%2FPRiv9kdYIW1iDnb&X-Amz-Signature=d5923e91081cb1cef4eda9c1c2e4c1d3cc92607a7073677a315360de3ec8be52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
