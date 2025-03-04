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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXK3BAV3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRy7nnp113d83%2FxVbcpHgfXLzj0Z928tr%2Fs%2FP1hTP5kgIgBGkQ6lL3hgQ8rtZQc2G3E%2FPbOYBtCiJXJQw1eLXQ9UIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYZFXDu3FRBlWPaPircA3nAZbKNy9WZ1l8u90LIqCt9KxmZ8Vz4MLpdwtFAOlqiX9YSd3Kp8nDMnEpZxZol33wRUY44sBtKNGbLOum%2FtiIb00EOnQk%2ByrhuQlYmHV2K1s7v5ouwvh3%2FF9EPcJ0KehgvLLjJmk1etNTtpH8cvm3Qq9Kh5a%2Bq%2By2XGuhRE2EHTuHrPfvtCCOCWSUf6qIWUkdM5EwRIppEQz3T6CK7%2FGM7Tm9Yr28uRZbRdpUzp%2BXIGxVcIcL3zzwNLIVjPKCLyfFYFE6p1PUi4ZEpi4J7s%2BWcLYXAcZU1XQPJyTJ4eEbi2WzymVS7sPu2fe0JOii6Zaxs46Wm1SDOZ1gpY%2F%2Bl%2FvG6xwUFjA1zeJssThA6xcEr7h5bNjza5qHvhJTAKhJaFTQHI18mBEY7JhcGEXzfe9SbDjnWg5NQSKytupvUslT0DYIYzXyHP7UMXkT4iDz3GDBO6CpUsXlftWJKVFZvVib%2BE1Gh4Adrl%2Fj77RKoxPxhcbU3lCHpL2%2F%2FyXbs%2BTZXDRjLPzKnQCRTJvzcuqJvAn%2FL5lwfTdFQ5aDztrg2lxbmwq%2FNr%2FySTEPiWTyki9F9XmkKyF%2BrmwSRYsuVte6R6oWY8Rcqqee4oAvwrqWVQstmf8H3KAtsTOP3ysJyMOKdmr4GOqUBHQzJWulasGowVJhUDDKa3z3JT98K5ufU4zdmDcUggE9lmPmZhHoF%2BYGaE8PLd6ftsVF3H3NAVLkZylU5D4YuGMj%2Bm6D9xTgUjETYZs6qrywakaWQLlLCfI9WiQv77kJJF4YDYakWRAyoSdhVYVMd4jKCddMGdMuE2cKQtdcVrGwDxGewW0yWOwkC9%2FeZ0bY%2FmgFx9z3H7zDmbSqCEgFUmpWTR7q6&X-Amz-Signature=0ce88e758eb9c11e31a123d3358e731979de13c7276f567800a6d4b9351f6761&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXK3BAV3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRy7nnp113d83%2FxVbcpHgfXLzj0Z928tr%2Fs%2FP1hTP5kgIgBGkQ6lL3hgQ8rtZQc2G3E%2FPbOYBtCiJXJQw1eLXQ9UIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYZFXDu3FRBlWPaPircA3nAZbKNy9WZ1l8u90LIqCt9KxmZ8Vz4MLpdwtFAOlqiX9YSd3Kp8nDMnEpZxZol33wRUY44sBtKNGbLOum%2FtiIb00EOnQk%2ByrhuQlYmHV2K1s7v5ouwvh3%2FF9EPcJ0KehgvLLjJmk1etNTtpH8cvm3Qq9Kh5a%2Bq%2By2XGuhRE2EHTuHrPfvtCCOCWSUf6qIWUkdM5EwRIppEQz3T6CK7%2FGM7Tm9Yr28uRZbRdpUzp%2BXIGxVcIcL3zzwNLIVjPKCLyfFYFE6p1PUi4ZEpi4J7s%2BWcLYXAcZU1XQPJyTJ4eEbi2WzymVS7sPu2fe0JOii6Zaxs46Wm1SDOZ1gpY%2F%2Bl%2FvG6xwUFjA1zeJssThA6xcEr7h5bNjza5qHvhJTAKhJaFTQHI18mBEY7JhcGEXzfe9SbDjnWg5NQSKytupvUslT0DYIYzXyHP7UMXkT4iDz3GDBO6CpUsXlftWJKVFZvVib%2BE1Gh4Adrl%2Fj77RKoxPxhcbU3lCHpL2%2F%2FyXbs%2BTZXDRjLPzKnQCRTJvzcuqJvAn%2FL5lwfTdFQ5aDztrg2lxbmwq%2FNr%2FySTEPiWTyki9F9XmkKyF%2BrmwSRYsuVte6R6oWY8Rcqqee4oAvwrqWVQstmf8H3KAtsTOP3ysJyMOKdmr4GOqUBHQzJWulasGowVJhUDDKa3z3JT98K5ufU4zdmDcUggE9lmPmZhHoF%2BYGaE8PLd6ftsVF3H3NAVLkZylU5D4YuGMj%2Bm6D9xTgUjETYZs6qrywakaWQLlLCfI9WiQv77kJJF4YDYakWRAyoSdhVYVMd4jKCddMGdMuE2cKQtdcVrGwDxGewW0yWOwkC9%2FeZ0bY%2FmgFx9z3H7zDmbSqCEgFUmpWTR7q6&X-Amz-Signature=db9d067f109d389bb18c539e6ff8334eb89aeb337c8bd93d050400afe83183b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
