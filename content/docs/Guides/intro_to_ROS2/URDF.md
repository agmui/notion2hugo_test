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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE3EYNW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9p3a0VLOQDDYljGf6ODI9Pk3LDQpR7kP5P85DdMiswwIhAKACD5tBLzCB1IhiCqdLXA1Nx1uS%2BE6AawHNOYwjoM6kKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUtYHl0r1%2BaccJ1Eq3AP6NZHwflwjAHpZ6FFHBU34h1UTypPLPeSY8tSjWpCaCkMbuXmgxMIEACp9Z%2BSm7x7ki%2FKSyZ5cz8k8yJieBstnIxS%2F4kVgB0NuwIDgNWb%2BX1S50C73ma%2F3k2CATmmWBgdM%2ByDMVOgTvPFpEHVvHfewyVj5H7jN7f%2FyGFOmX%2ByuvyjZGFrbdCj3gvnj7nyIPSzE1oxHB1B%2F6CXHtvZaM9wlds%2B8GuvhpdzkKlgXm%2F0BmqW05lQ8dK4xAMlK60Z55yMqzCAnwWI3pExZvZQAP9vGWdOIksGMc%2FGwQgAOYoS7JSOS1BnZv63HGZ8lGmaS31HKdaolQDZfa5HEwuePvDU4cin9NQSFAXylBpdjWRvMfa8x6ohxcutrrnkVVrhikfQ7TMp7YN9yi4FzKaVAWBwDpD8oB3OEvcsPbdKG6tXr3c2X2eoxvwUsHou3Sc8tQ0NS%2By7S78f2lcIyct8xIY3nvCbm05Jik5mkNScQXPOpv6S5P4hcYLQ2KRlmBbsucPtlJ1RwNo%2BjV5CT%2Bz33xFVuysYHGU4i%2Fzscf5rnKgqAmtv%2B%2BUDXH3OIjVpE6sMCKA95fKZAk%2BTyS8JOokKDiLdzVP%2F1CC13nsmphPDMWxm%2BHTaJKWn59c9gwXzFTDCzy7fDBjqkAXpcj%2B8WFRCQiCfqJKUVjIZa9RjHE2BUbYYjba7QhKNaICqtvzke%2Fv3ZtYCcL4UlkAtMQeKwwdeN2yCPOi0rnlI0TsMw9JO0ekY3Ahw5c2IqSd3X3bLWO0K5lJH7e294hn2N7Yysug9NIx0h819HoA45FE9jMTBr8D%2BRdzD3v%2Fc%2BFTPZsuum31k8cpfNfSftApw1cEodMpOPLOcQpGvzlR69ab6V&X-Amz-Signature=43957d4df2afe2bb64ac4192e7cec322b52872d631bd861b51a8b82974c24e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UE3EYNW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9p3a0VLOQDDYljGf6ODI9Pk3LDQpR7kP5P85DdMiswwIhAKACD5tBLzCB1IhiCqdLXA1Nx1uS%2BE6AawHNOYwjoM6kKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUtYHl0r1%2BaccJ1Eq3AP6NZHwflwjAHpZ6FFHBU34h1UTypPLPeSY8tSjWpCaCkMbuXmgxMIEACp9Z%2BSm7x7ki%2FKSyZ5cz8k8yJieBstnIxS%2F4kVgB0NuwIDgNWb%2BX1S50C73ma%2F3k2CATmmWBgdM%2ByDMVOgTvPFpEHVvHfewyVj5H7jN7f%2FyGFOmX%2ByuvyjZGFrbdCj3gvnj7nyIPSzE1oxHB1B%2F6CXHtvZaM9wlds%2B8GuvhpdzkKlgXm%2F0BmqW05lQ8dK4xAMlK60Z55yMqzCAnwWI3pExZvZQAP9vGWdOIksGMc%2FGwQgAOYoS7JSOS1BnZv63HGZ8lGmaS31HKdaolQDZfa5HEwuePvDU4cin9NQSFAXylBpdjWRvMfa8x6ohxcutrrnkVVrhikfQ7TMp7YN9yi4FzKaVAWBwDpD8oB3OEvcsPbdKG6tXr3c2X2eoxvwUsHou3Sc8tQ0NS%2By7S78f2lcIyct8xIY3nvCbm05Jik5mkNScQXPOpv6S5P4hcYLQ2KRlmBbsucPtlJ1RwNo%2BjV5CT%2Bz33xFVuysYHGU4i%2Fzscf5rnKgqAmtv%2B%2BUDXH3OIjVpE6sMCKA95fKZAk%2BTyS8JOokKDiLdzVP%2F1CC13nsmphPDMWxm%2BHTaJKWn59c9gwXzFTDCzy7fDBjqkAXpcj%2B8WFRCQiCfqJKUVjIZa9RjHE2BUbYYjba7QhKNaICqtvzke%2Fv3ZtYCcL4UlkAtMQeKwwdeN2yCPOi0rnlI0TsMw9JO0ekY3Ahw5c2IqSd3X3bLWO0K5lJH7e294hn2N7Yysug9NIx0h819HoA45FE9jMTBr8D%2BRdzD3v%2Fc%2BFTPZsuum31k8cpfNfSftApw1cEodMpOPLOcQpGvzlR69ab6V&X-Amz-Signature=ea369819aea008cee8578005b0de417b32912befc91ebb77075a393cba383ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
