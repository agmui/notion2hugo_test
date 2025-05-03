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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIXZJFW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAnsE1bfL0k%2B2AoRJdKj8XYMjbf5BOSTJH0RQnIIUVyxAiAwxDki1MY%2BG%2FcPz5J4NWnXUwEJ%2Bec7b99MwA%2B9iNQQkSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMttCutiv8C9T1Z1GyKtwD7Jlegpx1Db9bL3r%2BfOtyFGperlbwnBCkhili1hilm%2BrRHs7wGD6SaZwCvRyiB%2FO7E09YEsXfAnRHRr5mTP8OXWDeyyC0gpq88Xa17%2FcY0fIDPBOhPbEEfFi8i4Bh1Sn63hhA4i1NOxxVtw50PiwNf1hJzDHWqPsUzSsXyY5I9iqSXqntuig5yj6QLX35qAC3spELHVDkvWC2QGc0bsE1rhNMqkSvdGKzyJyuqIDrLNb7Q22qiyRvl5juwS8YbABu6bRqC3WkzNEvA0OvwJyumiIfFP9WRHhATI6F%2Fb2cWCSMo%2FD8mjNo7FHVTfTuvFnDALABxCAcPrFsHkEcbkXGf9XgCrqTu%2BYhQYxQWB7Qxq3AulafeKvY5Z3BikAIEDva6dhyQf4O7mae7Q5b8CG4cyhMEFA89OnhgUSskpyTDTfCzhUQ9H8C0GCENbVtzVM0vBP9XWnX7DTLbbiJAjtGdbhV8A2%2F2XmxWJUsYsWfLmL%2BKtDxJmmLIRFW73E17OGIoc%2BEZpq7eobv%2BD2cUDrBnUi9vsCEJAUNPSlYU31yCgVe8NZMR3iILTTujEsyLnYEwd97O3ZavYa5Ouf6L%2FVfttZbGnyYCcqtlE1wKiRssG003jf3TS%2FNxVN3ch0w74bWwAY6pgETtWNyX58cUQ7pibkcZENaCt7KQkxZ6kiiEftOL212PmBnOsDyBAQaWuwWiqccNk5r92S7cktelBiMOgoyEoZelKIbtbE1cRp5%2BSZ3RwM5iDtY%2Ff%2BTcvhk%2F9OzwMfjKcb1UHzSfiOdM9nbKODF8s0sg8fro%2Fs9RgodWeihYZM0gjU%2B6N9x8UQENePo%2BxVYOHdpTvS%2Fji7w%2BWN%2BNIzfP33XGCfxzeN9&X-Amz-Signature=d985a36ebd65ecc8951115f111e7097e9fd5759956db4448880ccfeca4fe653f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIXZJFW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAnsE1bfL0k%2B2AoRJdKj8XYMjbf5BOSTJH0RQnIIUVyxAiAwxDki1MY%2BG%2FcPz5J4NWnXUwEJ%2Bec7b99MwA%2B9iNQQkSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMttCutiv8C9T1Z1GyKtwD7Jlegpx1Db9bL3r%2BfOtyFGperlbwnBCkhili1hilm%2BrRHs7wGD6SaZwCvRyiB%2FO7E09YEsXfAnRHRr5mTP8OXWDeyyC0gpq88Xa17%2FcY0fIDPBOhPbEEfFi8i4Bh1Sn63hhA4i1NOxxVtw50PiwNf1hJzDHWqPsUzSsXyY5I9iqSXqntuig5yj6QLX35qAC3spELHVDkvWC2QGc0bsE1rhNMqkSvdGKzyJyuqIDrLNb7Q22qiyRvl5juwS8YbABu6bRqC3WkzNEvA0OvwJyumiIfFP9WRHhATI6F%2Fb2cWCSMo%2FD8mjNo7FHVTfTuvFnDALABxCAcPrFsHkEcbkXGf9XgCrqTu%2BYhQYxQWB7Qxq3AulafeKvY5Z3BikAIEDva6dhyQf4O7mae7Q5b8CG4cyhMEFA89OnhgUSskpyTDTfCzhUQ9H8C0GCENbVtzVM0vBP9XWnX7DTLbbiJAjtGdbhV8A2%2F2XmxWJUsYsWfLmL%2BKtDxJmmLIRFW73E17OGIoc%2BEZpq7eobv%2BD2cUDrBnUi9vsCEJAUNPSlYU31yCgVe8NZMR3iILTTujEsyLnYEwd97O3ZavYa5Ouf6L%2FVfttZbGnyYCcqtlE1wKiRssG003jf3TS%2FNxVN3ch0w74bWwAY6pgETtWNyX58cUQ7pibkcZENaCt7KQkxZ6kiiEftOL212PmBnOsDyBAQaWuwWiqccNk5r92S7cktelBiMOgoyEoZelKIbtbE1cRp5%2BSZ3RwM5iDtY%2Ff%2BTcvhk%2F9OzwMfjKcb1UHzSfiOdM9nbKODF8s0sg8fro%2Fs9RgodWeihYZM0gjU%2B6N9x8UQENePo%2BxVYOHdpTvS%2Fji7w%2BWN%2BNIzfP33XGCfxzeN9&X-Amz-Signature=d997001a81930e3499c970870dccb32785aeb90bb8db5b4d9e7b027eef4f3040&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
