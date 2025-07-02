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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAA4MQFS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWhBLvvGM21c6BjqU91OI0u%2B3gKdLCR1maWEst6jM1qAiEA14LM3bj5HkpG7AAOcggwmvHZeObaMrWHW2a%2BB84lUsMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRmhX2FZ6DiLD7TKSrcA%2FZW8N3CcUpyrbsbKnPa8CrePcZLaNJjcTGdsVHD%2FAoY2Zvzx4CUf%2BjFKfIIKNft10gIWJq2yjYysI8dklLf38CAsPP5t08k0bRiMWxU68AHSa1Mkad9w%2FROvah3VUAGVUXkZVc1rsFUg8qKNKw%2FjDitSoAH%2FZfCEg8qHI1SRLWWj80r8%2BvFRC3pwfDQvhXbMQ%2FWbxinVjr25QqjJoIAKVxLWyNrq4LKmkpLNPb6miF9SjLPxbATUC3kHlznwkiZjDo%2BF12vfaTaMvhPlQJrM3tPCoC%2FZoofdc34UwoJv5AxnQJMg5INXUMnsfZaJtOB0eEtXCULpttY%2FBOsrRajmvrUjzpggGj6V2lEQIR0ohY8rj5HVyzErDgykbu%2FHPwWukAr2ULnwlWt70pnv1VYhvoFvsAN0lfERQPVQlNnJG8esXiZhqMjdnNqko9gpJLME4bdxuNVzQt%2BfWlis557myr9iUuUr1QjS892Z9eHLfAcTUZXQ6M9UmALmJF0l%2F6TQSP82LDXENEDzJYbM3R54ZYbxJplUp%2FQ8HD7dK8vN1IMIETDHSpzDcCg0szD3HBJk1UQO0%2BoJmjWs%2BcUE6TbEDfOddiCSphQtR5VUdQLlhGNWzcKVL1lLyXB7UecMMC9lsMGOqUBJYLaIQhpiOShykBlEWJs66yWO1PGR2JApoFU556lUdGXSdVZA%2FyT7wq9EXntcbIL6Forh2v47c9HOndkYNq%2BkEJ3hf4BS5d9Dwl%2BQ45Vc22sTEzIOFcGF8UknxTmMumgwTHOddBOviwqUcC7KkF6zh24swnsHvOUQbkCoEZ0bUXhANBj1fKqCrKMaNv3ZpLOeMwB%2FVzIOZDceAaZB65SLNRc%2BMD%2B&X-Amz-Signature=307f1285a71db04e2738bb35f722ef42f9297bc3d4ddd0131a38d2f3d5cf22cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAA4MQFS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWhBLvvGM21c6BjqU91OI0u%2B3gKdLCR1maWEst6jM1qAiEA14LM3bj5HkpG7AAOcggwmvHZeObaMrWHW2a%2BB84lUsMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRmhX2FZ6DiLD7TKSrcA%2FZW8N3CcUpyrbsbKnPa8CrePcZLaNJjcTGdsVHD%2FAoY2Zvzx4CUf%2BjFKfIIKNft10gIWJq2yjYysI8dklLf38CAsPP5t08k0bRiMWxU68AHSa1Mkad9w%2FROvah3VUAGVUXkZVc1rsFUg8qKNKw%2FjDitSoAH%2FZfCEg8qHI1SRLWWj80r8%2BvFRC3pwfDQvhXbMQ%2FWbxinVjr25QqjJoIAKVxLWyNrq4LKmkpLNPb6miF9SjLPxbATUC3kHlznwkiZjDo%2BF12vfaTaMvhPlQJrM3tPCoC%2FZoofdc34UwoJv5AxnQJMg5INXUMnsfZaJtOB0eEtXCULpttY%2FBOsrRajmvrUjzpggGj6V2lEQIR0ohY8rj5HVyzErDgykbu%2FHPwWukAr2ULnwlWt70pnv1VYhvoFvsAN0lfERQPVQlNnJG8esXiZhqMjdnNqko9gpJLME4bdxuNVzQt%2BfWlis557myr9iUuUr1QjS892Z9eHLfAcTUZXQ6M9UmALmJF0l%2F6TQSP82LDXENEDzJYbM3R54ZYbxJplUp%2FQ8HD7dK8vN1IMIETDHSpzDcCg0szD3HBJk1UQO0%2BoJmjWs%2BcUE6TbEDfOddiCSphQtR5VUdQLlhGNWzcKVL1lLyXB7UecMMC9lsMGOqUBJYLaIQhpiOShykBlEWJs66yWO1PGR2JApoFU556lUdGXSdVZA%2FyT7wq9EXntcbIL6Forh2v47c9HOndkYNq%2BkEJ3hf4BS5d9Dwl%2BQ45Vc22sTEzIOFcGF8UknxTmMumgwTHOddBOviwqUcC7KkF6zh24swnsHvOUQbkCoEZ0bUXhANBj1fKqCrKMaNv3ZpLOeMwB%2FVzIOZDceAaZB65SLNRc%2BMD%2B&X-Amz-Signature=988b473eea6d81d4961d52a0179a35398af3f4f632f8c0e55d4aa812fdb91c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
