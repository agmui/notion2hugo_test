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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWXQIJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD0fTTffcEM%2Fn1k5Y6CRwu3KO07HMlftjNakr3xqXsn1QIhAKKwj%2FzLmpLeMUxvYiW0KiUhn0wipt3%2BpxMmUiTr%2FmPYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ%2BG1s5wOnbjMhUOIq3AOX9os5Unid%2B1aJCPaQe2U5%2BuOZOgM1tM4NQGDZ2Rq06llBTsXqeTdzQUVAz2%2FvvWIcjI4setAN%2BEiNIdP%2Fto0ORAvkwPHj5n8V3liGeKSaO67pvnYKaJ9kvcsZ5i36DBOVbzB3aKvnRk3vCrK4dAOTsTGjtR5%2FYrY8TfPmSu%2F8X4ilPR8kP5qHDjbgIWF7zfMfSdMgViu09G43%2F48IzGA0oKPobkABJ5x6mQt4ohljlW4%2Fpz7CwMwUssi156CvJ9bQPmwzFjzSAKSbUkrK9iBawD9IIHDTDQKhgKDbbD2cKnhKkSS3lrfVgkNTMfoUO3hSaLEczQ6T6ZX%2BdbhP%2Bo5ldDTHaSImzMFPgk7SC1L0Nc9HnDcLvkpsl7ptQeaqmt2ieEqW1XWPwv3zjckvdU2uXJCOBSOapqmamyRShuvw8us%2Bs1cR5KXUaoPqy4QbPP7XyZHCOy0od%2FJQqY6xvBZA%2FBIc2lBpZ%2FBIzJZvT9oj9R6kcmOplqMQyjAcVsNMilTbBUR2O1v7U1X74LpEGnzLtkozFWBuR5nmumL3SN1U0buWwbigmWldiirU7xvwTEdXIMUatY3L4mfcJa0CQy%2Fwhnc8TnWCRM2YTHt1b3I45DhHvT%2BB5G1k9WA5WzCT0p7EBjqkAZbESHNEa36r8LEEQLyWyncvs%2F0V6A1qYyNgKQMs%2FfhXXsjE%2FkROKQzEyFN0qxzJOw4Gj21lB5XOZZcC2FtQSou1UZL6N2%2B94x%2BGUA%2BfumcZuYjUBxR9KYnnfBPi2YH%2FyGSbrd2h5B8NJ6nTodfRwDsyrCnMmjWzkR3SVB%2F%2BWlJE%2F8R6HwM1JilXISl9tkkFDTlStf%2BqI9ilRD7av%2FrYyU1G4DRt&X-Amz-Signature=bfac6b2213ea55b118e73eb255aadb4b8073c16179d3237c13f4e062bc4b1171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWXQIJT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD0fTTffcEM%2Fn1k5Y6CRwu3KO07HMlftjNakr3xqXsn1QIhAKKwj%2FzLmpLeMUxvYiW0KiUhn0wipt3%2BpxMmUiTr%2FmPYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ%2BG1s5wOnbjMhUOIq3AOX9os5Unid%2B1aJCPaQe2U5%2BuOZOgM1tM4NQGDZ2Rq06llBTsXqeTdzQUVAz2%2FvvWIcjI4setAN%2BEiNIdP%2Fto0ORAvkwPHj5n8V3liGeKSaO67pvnYKaJ9kvcsZ5i36DBOVbzB3aKvnRk3vCrK4dAOTsTGjtR5%2FYrY8TfPmSu%2F8X4ilPR8kP5qHDjbgIWF7zfMfSdMgViu09G43%2F48IzGA0oKPobkABJ5x6mQt4ohljlW4%2Fpz7CwMwUssi156CvJ9bQPmwzFjzSAKSbUkrK9iBawD9IIHDTDQKhgKDbbD2cKnhKkSS3lrfVgkNTMfoUO3hSaLEczQ6T6ZX%2BdbhP%2Bo5ldDTHaSImzMFPgk7SC1L0Nc9HnDcLvkpsl7ptQeaqmt2ieEqW1XWPwv3zjckvdU2uXJCOBSOapqmamyRShuvw8us%2Bs1cR5KXUaoPqy4QbPP7XyZHCOy0od%2FJQqY6xvBZA%2FBIc2lBpZ%2FBIzJZvT9oj9R6kcmOplqMQyjAcVsNMilTbBUR2O1v7U1X74LpEGnzLtkozFWBuR5nmumL3SN1U0buWwbigmWldiirU7xvwTEdXIMUatY3L4mfcJa0CQy%2Fwhnc8TnWCRM2YTHt1b3I45DhHvT%2BB5G1k9WA5WzCT0p7EBjqkAZbESHNEa36r8LEEQLyWyncvs%2F0V6A1qYyNgKQMs%2FfhXXsjE%2FkROKQzEyFN0qxzJOw4Gj21lB5XOZZcC2FtQSou1UZL6N2%2B94x%2BGUA%2BfumcZuYjUBxR9KYnnfBPi2YH%2FyGSbrd2h5B8NJ6nTodfRwDsyrCnMmjWzkR3SVB%2F%2BWlJE%2F8R6HwM1JilXISl9tkkFDTlStf%2BqI9ilRD7av%2FrYyU1G4DRt&X-Amz-Signature=152eed4173f56257ee432f8b9822a80cf5170beae1df4f4d0f88572f8cb86bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
