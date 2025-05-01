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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I72APII%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDGgjbcex3I1t1xxyl5JIVol6N3dDaF6kNZaL%2FTu9zqhAIhAJbzVi3id6bMEzdNRrWEsj7R50ek9WhhVZY2EzfqauZlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEbXDFDEff%2FZOjmxIq3AOtOrd5J5sHxQ0WMQQTbSXGhZomxxwYo47Xzg0zLpOO0C3bsbJ%2F7fxGw8xgr8Vx4NlmGl1WHxmnayamROFHL95ckBj6Uq0PS%2B2Q1VhzJcQFEx0H4A%2Fgi2Tjn54qPx%2Fef7EHEhgVxsL4NBdZqqBQ1pmZ4VFwXWBC566MK8uRbg108Ub09HhsLfHCSyCqLGovjTvcd44y4s4ex8uMqf6%2BlkNVmMla8Jxt8I%2BeF0FrbYFk5gK5E8DNTbesBVtIRsFQT%2FKpmr0S4KeSBo4GlnMGKaKHbHx0B6XBe3dRGPWPtNRr9FZ%2F2kVWWgusybRG7wnVUtSEm1eqLI6%2BrEAUdyWe6DR9spySDS%2BMnNhkoJEjyIGemWlmIWiIEyFx4214I2KVs7ALLhZlEbUeqHNwFeACKWwfitS0V8163ahnBh5%2F%2FFHzJ%2FtbYkNIs4u1frLZAZ7nmk%2Fok5ZhvD1CcXlNay3xn7rvJAEpWGslR1NV%2F4Flsw%2FrlJxn4IYfewgT3jQR83HTSS1WLv0uY13At51FDJoj2iW32LpY6RtKzXCLXYpACb0Jo5TB9BaZ3RdRhcyBiRIqn9%2Br%2BL6uQqvw9wFeQTFje1EdDD9PalcBkYgKv4lF2GEMh3VOCOXui5Iyh8N0izD9q8%2FABjqkASCj%2BgEmzx09Zsg1Zyy6LaFNuCiFm0bP8U8ZjuQ%2B5D9tSS4gY3sdcZ8RtkFzMQXq14QX%2BJeNzxbWiGtS8rMOnrHpXgA5hzdIE%2F0Nr27QNGAgvZOEEJONbQRu1D0nnkz3pDf6cPlXDtw6jwpdah1eqHUdW4xMr2NLn0DgxEyFz3lLF5edLve7UrhScIF%2BxR%2FPtQPOSnP6Y5fytcqM1xCaY6ZZyXV1&X-Amz-Signature=fe6cbe092335d7572b41622ac8138583636bea521a95e028d59693eb77269a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I72APII%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDGgjbcex3I1t1xxyl5JIVol6N3dDaF6kNZaL%2FTu9zqhAIhAJbzVi3id6bMEzdNRrWEsj7R50ek9WhhVZY2EzfqauZlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEbXDFDEff%2FZOjmxIq3AOtOrd5J5sHxQ0WMQQTbSXGhZomxxwYo47Xzg0zLpOO0C3bsbJ%2F7fxGw8xgr8Vx4NlmGl1WHxmnayamROFHL95ckBj6Uq0PS%2B2Q1VhzJcQFEx0H4A%2Fgi2Tjn54qPx%2Fef7EHEhgVxsL4NBdZqqBQ1pmZ4VFwXWBC566MK8uRbg108Ub09HhsLfHCSyCqLGovjTvcd44y4s4ex8uMqf6%2BlkNVmMla8Jxt8I%2BeF0FrbYFk5gK5E8DNTbesBVtIRsFQT%2FKpmr0S4KeSBo4GlnMGKaKHbHx0B6XBe3dRGPWPtNRr9FZ%2F2kVWWgusybRG7wnVUtSEm1eqLI6%2BrEAUdyWe6DR9spySDS%2BMnNhkoJEjyIGemWlmIWiIEyFx4214I2KVs7ALLhZlEbUeqHNwFeACKWwfitS0V8163ahnBh5%2F%2FFHzJ%2FtbYkNIs4u1frLZAZ7nmk%2Fok5ZhvD1CcXlNay3xn7rvJAEpWGslR1NV%2F4Flsw%2FrlJxn4IYfewgT3jQR83HTSS1WLv0uY13At51FDJoj2iW32LpY6RtKzXCLXYpACb0Jo5TB9BaZ3RdRhcyBiRIqn9%2Br%2BL6uQqvw9wFeQTFje1EdDD9PalcBkYgKv4lF2GEMh3VOCOXui5Iyh8N0izD9q8%2FABjqkASCj%2BgEmzx09Zsg1Zyy6LaFNuCiFm0bP8U8ZjuQ%2B5D9tSS4gY3sdcZ8RtkFzMQXq14QX%2BJeNzxbWiGtS8rMOnrHpXgA5hzdIE%2F0Nr27QNGAgvZOEEJONbQRu1D0nnkz3pDf6cPlXDtw6jwpdah1eqHUdW4xMr2NLn0DgxEyFz3lLF5edLve7UrhScIF%2BxR%2FPtQPOSnP6Y5fytcqM1xCaY6ZZyXV1&X-Amz-Signature=96f0f1f4afeb14e627aaf0b6ddaa3274cbe1ea280c6deea02504494b0d1df7b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
