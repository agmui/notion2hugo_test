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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK256MZS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCUOLD9tnSHkQXc2lDbIUO7DKXnw3jEBC5WQRw9Oc%2Bs5wIhALfoRT%2Brh6E5mJfefU5TQO51GuOCIJLGciZ8v9%2BUwcm8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgxxN7YdBtPt2P9gYjcq3AM3e%2BthXxTajnUTuDzDHUZDjz0x8I2tlBgJzvNRybl26CjCQ8X90x%2FTlqOw%2BJFKN87X1scZ3H5qcPYdrEl%2F%2B6c4dAKPh3w2kSn%2FKrh82BI%2F19ENqC3KGrrHhH4A7slkFtNnx7JTWJ%2BEIMPbqWT389CZcPMrDBqiaE6rEIzfjkh%2FGj8hFOCnjH6Z0sNtIg75Rv9KyGOEaEMRIdJz%2F4s9yru73V6oL7nRuDx55O0ZVMwTErAl8DjKSBYDBok1Y5eyL7X0z0zIw7mi6VgKH6rUqltCk46tLRhGGmDtAIzk7TeaqV3CY5hAuAD1Rodd2RRda3yECS6NtIC4Vtoa%2FkWkuNhMcRx8tZW1SprbzvnKrqjwnrue4%2F19VdAxiGz17IY6atrh5irFlxqomMDvExw9Jrq92RGUUvBojiWkNPqiMm5N9%2FcR2%2F2IX%2FBEOFWL6IlyXbbTpl3bAbvJC7ZyPFfVcmDXx5AQY8YNcPtganOqRBj2MgHcABvctiuEwPj3B4QjKiX7fkLMiY%2FjW63jYg19LirDGG9%2FPm0k0AI5LubIrMaOm75obZTDATapv9V8ZnXH%2B3rUxO3zhleRytMmUlJmH4vhT69zaURwNzN5vS1B7RFnluU2YVEx998d%2BLZLYzDm14rEBjqkAaZQmrf4UkNOI0r8%2BmP%2BWSzdEM2R5zg3srPh679T0f6QuOJRjnaut5qOj4knM2ad4xCSXIA0Q9lrU0MPN%2FG9RyUyTjwenSpv0TsLLqkl1A6Ab%2F7E%2FBGPrJnLWH%2FHAWw3%2Bv2QzeE7Mq%2Fl2MdyZeNKZZpC59ImeMBmBzFy4dONaZf1OxyYZfV8kUsa7KmOvk5%2BfKBBDzGD%2FxvyXNa8AN%2F%2FCINl1zpT&X-Amz-Signature=4e94d34537529fa4a9c0a185e43d8569f6c2f5cf4b9e252f2381b69f226e9945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK256MZS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCUOLD9tnSHkQXc2lDbIUO7DKXnw3jEBC5WQRw9Oc%2Bs5wIhALfoRT%2Brh6E5mJfefU5TQO51GuOCIJLGciZ8v9%2BUwcm8Kv8DCDcQABoMNjM3NDIzMTgzODA1IgxxN7YdBtPt2P9gYjcq3AM3e%2BthXxTajnUTuDzDHUZDjz0x8I2tlBgJzvNRybl26CjCQ8X90x%2FTlqOw%2BJFKN87X1scZ3H5qcPYdrEl%2F%2B6c4dAKPh3w2kSn%2FKrh82BI%2F19ENqC3KGrrHhH4A7slkFtNnx7JTWJ%2BEIMPbqWT389CZcPMrDBqiaE6rEIzfjkh%2FGj8hFOCnjH6Z0sNtIg75Rv9KyGOEaEMRIdJz%2F4s9yru73V6oL7nRuDx55O0ZVMwTErAl8DjKSBYDBok1Y5eyL7X0z0zIw7mi6VgKH6rUqltCk46tLRhGGmDtAIzk7TeaqV3CY5hAuAD1Rodd2RRda3yECS6NtIC4Vtoa%2FkWkuNhMcRx8tZW1SprbzvnKrqjwnrue4%2F19VdAxiGz17IY6atrh5irFlxqomMDvExw9Jrq92RGUUvBojiWkNPqiMm5N9%2FcR2%2F2IX%2FBEOFWL6IlyXbbTpl3bAbvJC7ZyPFfVcmDXx5AQY8YNcPtganOqRBj2MgHcABvctiuEwPj3B4QjKiX7fkLMiY%2FjW63jYg19LirDGG9%2FPm0k0AI5LubIrMaOm75obZTDATapv9V8ZnXH%2B3rUxO3zhleRytMmUlJmH4vhT69zaURwNzN5vS1B7RFnluU2YVEx998d%2BLZLYzDm14rEBjqkAaZQmrf4UkNOI0r8%2BmP%2BWSzdEM2R5zg3srPh679T0f6QuOJRjnaut5qOj4knM2ad4xCSXIA0Q9lrU0MPN%2FG9RyUyTjwenSpv0TsLLqkl1A6Ab%2F7E%2FBGPrJnLWH%2FHAWw3%2Bv2QzeE7Mq%2Fl2MdyZeNKZZpC59ImeMBmBzFy4dONaZf1OxyYZfV8kUsa7KmOvk5%2BfKBBDzGD%2FxvyXNa8AN%2F%2FCINl1zpT&X-Amz-Signature=b678bee74edd2f01dfbe6d1fa1a6881953614bc228929c2764364d279d0a2303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
