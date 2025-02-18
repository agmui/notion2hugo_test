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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6W34E65%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIArrSUiZiPP9I%2F7JWeHk3iu%2FWh9igw6B%2By4dI9D3q3l2AiEAklOoBSZ6IZl0HzdxRlxHbjUOPhj9LTIuQK5CFTgnrF8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMbO%2F4GbLp2DuTAFircA8YYtGDtKAiKxY3VTfJnpYTylxA1aJmN3Ojt4eQzXtVK6QSzVzuQ2hTukQ8LKdM9Q7c3y556V%2F4pEtM7EutxUJZGUbsvpd0h9YSsxFsTtKaNzJFa6xqdSXSdRXEBx8ofWwNVR5xdnRpgMC0AyssXDZn6hU9UR%2FL4aTLpT%2FpBYsUGzfo1obZkFNJXWFOw%2BNm%2F6xuf24e4a6ACGG3%2FYuanSXTm%2BdnytqlGgXVCSFQ6LJOEUcZIGpY0fJvOOAhKeAXtrzZeEED0JWC%2FwpPN5ZL87A%2BeXWuRVZzXFGF%2FGgpylhDGOpDkEaW04Fxv%2Bsb9qUrEdjdE5rsEEzy9wJaLn1BmU36MIziwrfcjfw6ZJ1yjXvIrJXqhm1qPa5HUl0%2FzfQySdEskyye7miaKZQZQAxTQq35oi%2FhJ2fpRdr1NH8DYYmEnl1lsxcGU8mTLdtsuIRFrVLmQMQfJje8BofRwOklSwoxWoqKK9y3KZ1JwCKpRKUwpiCTwHi965ZVUO3EjMjbxJi%2F91lc6%2BV7%2BS0NWrFkbYwIIl0HMb5IBVNo8nWtN03mcun%2BDnEk%2BGNorkWNHr3LZbxERH93OxYBeBm7piL9995ILJ2J5kcT2%2FrwhXntuR%2FuhdhpvBQSeR%2FJeGBgXMMr30b0GOqUBBprn6HqIlHmveq7EJpG6WdLvx%2BVuV6KhPCI0eg2H1%2BFgc8vZM7Ns57FYgNmvS9lXlIsVLyUac7jk279fn9K4CP3SGd2Ruq4bJ0Y4ynQ%2FiJ3%2By8rfypaSio%2B473WmkSj5saql0mdxhummdUgXNwAIlC80g%2B7pqiaSAia2NS1lKwp3BTjL4XnxWwgYDZcJ8BLwATKGwjQy5yzZYCGGgmA8b%2BkiKGux&X-Amz-Signature=03ccd44f6bdb342ce85afcaa1a82c941fe3a83b74d8529f55afef928d45eb7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6W34E65%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIArrSUiZiPP9I%2F7JWeHk3iu%2FWh9igw6B%2By4dI9D3q3l2AiEAklOoBSZ6IZl0HzdxRlxHbjUOPhj9LTIuQK5CFTgnrF8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMbO%2F4GbLp2DuTAFircA8YYtGDtKAiKxY3VTfJnpYTylxA1aJmN3Ojt4eQzXtVK6QSzVzuQ2hTukQ8LKdM9Q7c3y556V%2F4pEtM7EutxUJZGUbsvpd0h9YSsxFsTtKaNzJFa6xqdSXSdRXEBx8ofWwNVR5xdnRpgMC0AyssXDZn6hU9UR%2FL4aTLpT%2FpBYsUGzfo1obZkFNJXWFOw%2BNm%2F6xuf24e4a6ACGG3%2FYuanSXTm%2BdnytqlGgXVCSFQ6LJOEUcZIGpY0fJvOOAhKeAXtrzZeEED0JWC%2FwpPN5ZL87A%2BeXWuRVZzXFGF%2FGgpylhDGOpDkEaW04Fxv%2Bsb9qUrEdjdE5rsEEzy9wJaLn1BmU36MIziwrfcjfw6ZJ1yjXvIrJXqhm1qPa5HUl0%2FzfQySdEskyye7miaKZQZQAxTQq35oi%2FhJ2fpRdr1NH8DYYmEnl1lsxcGU8mTLdtsuIRFrVLmQMQfJje8BofRwOklSwoxWoqKK9y3KZ1JwCKpRKUwpiCTwHi965ZVUO3EjMjbxJi%2F91lc6%2BV7%2BS0NWrFkbYwIIl0HMb5IBVNo8nWtN03mcun%2BDnEk%2BGNorkWNHr3LZbxERH93OxYBeBm7piL9995ILJ2J5kcT2%2FrwhXntuR%2FuhdhpvBQSeR%2FJeGBgXMMr30b0GOqUBBprn6HqIlHmveq7EJpG6WdLvx%2BVuV6KhPCI0eg2H1%2BFgc8vZM7Ns57FYgNmvS9lXlIsVLyUac7jk279fn9K4CP3SGd2Ruq4bJ0Y4ynQ%2FiJ3%2By8rfypaSio%2B473WmkSj5saql0mdxhummdUgXNwAIlC80g%2B7pqiaSAia2NS1lKwp3BTjL4XnxWwgYDZcJ8BLwATKGwjQy5yzZYCGGgmA8b%2BkiKGux&X-Amz-Signature=61020edab6213219248c42d9cb274c6674220fb748a8c5af545d85b2d46640fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
