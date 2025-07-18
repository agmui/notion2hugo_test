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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKIFTPM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIB6O8K7btaZRoZI%2BvmFUYYHcNaTKk1W4IQxwZrwcpkj%2BAiEA6u3uH8TyIZrGs%2Fbm6A%2FQ7TaDYLTMB0ZaG0NuzugiodwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNh%2Ffmbtk02IoE46yrcA%2FCpgErqzWWpQ%2Fb73UnVsLl21qQccFPd1BpuUTmfEv5G7iyUOoPB2K5mr02mlnRh6RVsnVXgGC7qUZAEOAI1vt5OyrBWUhqiVcjYiN76GhqyIxACzDltHSNTKIjSvPsAljI9gxvUeahZVJ0FCqnQsD0nymWigOAAsvcQvnWT0QPsCa2Kbpa36nNnNQEpbw2AjObeuco0Du3tRKdQMV7BCpI0Hzze1aFLyf7YdbMS3iEop5M69V7OQ%2BlACMIPJ9I5sJx%2BzF%2BnawUhoTRRuMUmTx%2BFhlmRcyLCEombs2sSQKOImdFsg09Dq537glNgRTeyU3dCUXdwySLAXB9s8XeqjUKYN%2Flz%2BYsEJ33ydK%2FUluFEfCKi4%2BA7gqU4vPV9%2FqrNXQp4yBy3zG94Xz6T%2Bi7qrflD0LYreUM0JaUbZ8XwL%2Fly2qPjLv18An5pVcOvwPqE%2B9%2FaqkPll5DGvmqH1TFga1X%2BvaPNbvVrs45qN6AD%2BbboDK3zU%2FICfadto698fbMnzFGRi8LUqVjbRSSuGJ1IqPDFkNrDc%2BkITuDmyBQrTDZjSZl97Aw5wZ3PpWRM7eukkOOgsnmO7DIv0ZCZRDNauC53jdzwZKFr1VrCscfcpDvscagdG3P12%2FTrwZLKMImx58MGOqUBBpLGE4Ov6XDUfQpWYHzTwJE6xCxOaVuHV3HHF30wHs%2B8aOXJ%2F%2BqzF2VjGGSQQM3VMhbuXNrCreaHwgTRpQ35vf4VyUTiAEUp7hSjufo5E6Opk71Y8WHJQd5xXP6XCUeUJw27OZmyyt1Gve8z1Cd7dRE4u3czwYfzrkkhQ2c5VviEl853p%2FkdYshwxD37s1Lty4cRCt8A8Jks8ftBbK7LXPnB3PHe&X-Amz-Signature=ebc54611b67f5c045eac9ce18c410072396600d0fd304eba7b1dbe1907ed7c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PKIFTPM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIB6O8K7btaZRoZI%2BvmFUYYHcNaTKk1W4IQxwZrwcpkj%2BAiEA6u3uH8TyIZrGs%2Fbm6A%2FQ7TaDYLTMB0ZaG0NuzugiodwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNh%2Ffmbtk02IoE46yrcA%2FCpgErqzWWpQ%2Fb73UnVsLl21qQccFPd1BpuUTmfEv5G7iyUOoPB2K5mr02mlnRh6RVsnVXgGC7qUZAEOAI1vt5OyrBWUhqiVcjYiN76GhqyIxACzDltHSNTKIjSvPsAljI9gxvUeahZVJ0FCqnQsD0nymWigOAAsvcQvnWT0QPsCa2Kbpa36nNnNQEpbw2AjObeuco0Du3tRKdQMV7BCpI0Hzze1aFLyf7YdbMS3iEop5M69V7OQ%2BlACMIPJ9I5sJx%2BzF%2BnawUhoTRRuMUmTx%2BFhlmRcyLCEombs2sSQKOImdFsg09Dq537glNgRTeyU3dCUXdwySLAXB9s8XeqjUKYN%2Flz%2BYsEJ33ydK%2FUluFEfCKi4%2BA7gqU4vPV9%2FqrNXQp4yBy3zG94Xz6T%2Bi7qrflD0LYreUM0JaUbZ8XwL%2Fly2qPjLv18An5pVcOvwPqE%2B9%2FaqkPll5DGvmqH1TFga1X%2BvaPNbvVrs45qN6AD%2BbboDK3zU%2FICfadto698fbMnzFGRi8LUqVjbRSSuGJ1IqPDFkNrDc%2BkITuDmyBQrTDZjSZl97Aw5wZ3PpWRM7eukkOOgsnmO7DIv0ZCZRDNauC53jdzwZKFr1VrCscfcpDvscagdG3P12%2FTrwZLKMImx58MGOqUBBpLGE4Ov6XDUfQpWYHzTwJE6xCxOaVuHV3HHF30wHs%2B8aOXJ%2F%2BqzF2VjGGSQQM3VMhbuXNrCreaHwgTRpQ35vf4VyUTiAEUp7hSjufo5E6Opk71Y8WHJQd5xXP6XCUeUJw27OZmyyt1Gve8z1Cd7dRE4u3czwYfzrkkhQ2c5VviEl853p%2FkdYshwxD37s1Lty4cRCt8A8Jks8ftBbK7LXPnB3PHe&X-Amz-Signature=b37ac4a2176705be529923ba3ed00d910e2ba58e46027c5fee5ad2ac35619f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
