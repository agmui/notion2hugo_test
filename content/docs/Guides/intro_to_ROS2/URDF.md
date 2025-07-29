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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3HKWYSX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BOn2IGbuZvFU4lZC4Eh%2Bw6SlbtnhDScbmd1CsbhbzZwIgDXflghD2auOX25hOKpmndEJovnAMHCLVkrWjwBYJL18qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm0AIhukgEhTadgiircA6IaflRYidFPWCftUqScz%2BMcxjEzkVfC2%2B2vKdlcalydjIsbzHFrWyOfgLBR9NP0SHtLdlWt2nZypngwgOuFAmZfTTkU3xawKfV0Rn9h%2FAwq6JPfG8By6CNEd159xA2ao5Trs1ukG309QgO6vtmi0JCz3q%2FUBt%2FlTVvXwQ3JHqWBqdy3wVRYglsGX1ZLcvWLTt8592Y2F5KwzrVtQykfrPRj5q7T8n9ZQkhGNJMWvKe%2FYzS8l8foFrd%2B87W1%2B3Wv5PA3OdP5gkKZ%2FJ%2FDFM3tHfBJ%2Fp1bFKP68kZomkDfKXuVVgjxlveXhaNmPRJMOkG%2BeUCmOr4o197XIAzNGABgCSP1la3BE1s5or3GB%2BNCmnm56k71wJefgk7HRqIwlYoHR3jUk1ta3a8Q4DJa3UGyU1r1tURWgpQrJxdkoz9E3AxX6tOhnokhicPBSsmcSNqSOe5z4xyQgNviIwCroO%2FZdCC0pqrSupTWNS1nknQf5W6dF8Xtcr3AMGKPjQk3gR9CPa4NawER9aFTR1CA0aNF2ow7cbZF%2FWZ2Dq6QhG6bFjSTIlAy6gdWl7FTFd3UxEJ7TfxglJLiJtTbmtCTO%2BSEjnONGWaogEi4bhgQ2dSfXBJXRTrgA7%2FvJVHySUT4ML7dpMQGOqUBRWy3hsWdaGHBuvxZsxbctmmm43J324jrdjfaKc%2FtsgwpQ1qtesjAA3a3p0h93OH2Bf%2BbMhrz35eyAdKbTwwVJ8PYWCskWH%2F5kg0rWHKPKAMhgtDQ99%2BuAp1kw6XntGqxEh5SQ389iyepzXPVvkRBpCN5iL%2BWwJWBGxmJAQQj7O8RVcFEjZiaUZ1tcJflTbtSmb2WlUrjjef0FYkoUPn8xHxLQZBn&X-Amz-Signature=7f30cb2e2de2a1f92f797ea003ff602bd082de3a16c9a4b66eb243acc5fdc735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3HKWYSX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BOn2IGbuZvFU4lZC4Eh%2Bw6SlbtnhDScbmd1CsbhbzZwIgDXflghD2auOX25hOKpmndEJovnAMHCLVkrWjwBYJL18qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm0AIhukgEhTadgiircA6IaflRYidFPWCftUqScz%2BMcxjEzkVfC2%2B2vKdlcalydjIsbzHFrWyOfgLBR9NP0SHtLdlWt2nZypngwgOuFAmZfTTkU3xawKfV0Rn9h%2FAwq6JPfG8By6CNEd159xA2ao5Trs1ukG309QgO6vtmi0JCz3q%2FUBt%2FlTVvXwQ3JHqWBqdy3wVRYglsGX1ZLcvWLTt8592Y2F5KwzrVtQykfrPRj5q7T8n9ZQkhGNJMWvKe%2FYzS8l8foFrd%2B87W1%2B3Wv5PA3OdP5gkKZ%2FJ%2FDFM3tHfBJ%2Fp1bFKP68kZomkDfKXuVVgjxlveXhaNmPRJMOkG%2BeUCmOr4o197XIAzNGABgCSP1la3BE1s5or3GB%2BNCmnm56k71wJefgk7HRqIwlYoHR3jUk1ta3a8Q4DJa3UGyU1r1tURWgpQrJxdkoz9E3AxX6tOhnokhicPBSsmcSNqSOe5z4xyQgNviIwCroO%2FZdCC0pqrSupTWNS1nknQf5W6dF8Xtcr3AMGKPjQk3gR9CPa4NawER9aFTR1CA0aNF2ow7cbZF%2FWZ2Dq6QhG6bFjSTIlAy6gdWl7FTFd3UxEJ7TfxglJLiJtTbmtCTO%2BSEjnONGWaogEi4bhgQ2dSfXBJXRTrgA7%2FvJVHySUT4ML7dpMQGOqUBRWy3hsWdaGHBuvxZsxbctmmm43J324jrdjfaKc%2FtsgwpQ1qtesjAA3a3p0h93OH2Bf%2BbMhrz35eyAdKbTwwVJ8PYWCskWH%2F5kg0rWHKPKAMhgtDQ99%2BuAp1kw6XntGqxEh5SQ389iyepzXPVvkRBpCN5iL%2BWwJWBGxmJAQQj7O8RVcFEjZiaUZ1tcJflTbtSmb2WlUrjjef0FYkoUPn8xHxLQZBn&X-Amz-Signature=f866db1ed5eb81ad7cc13f57d24f11ae4a3768b75b298c3cab4fbfbdcb1c1c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
