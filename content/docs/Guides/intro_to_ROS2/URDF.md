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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4PHWHO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCypZzMAt5Ox%2F4PEXCaMDLfIBTrjV9k%2FWXY9ZuiuolNrQIgSyIUwlitN2wtjpwvuMJWrMklQyYTZc6zRwDTPXdhMY4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKMeN%2FAZHtFQX%2B89circA3YAHz1RtGhjI26Yyt%2FIq22yLgGKtZNnNjjESTtx1AZZN1nK5pjrNZ6X6W3otOcZgOUkOxnEdQMwqTktvjSeA6K%2FYjbTyqRwJhzrcwHbiQ2KhtlfStPC6CNpgrfysIiHsFNc8iVwqPqNsfZyDJ7v35WgDRsGKEAUERjCQpscAp84YmiFNIRvfZTDNcyKsDrtPwYE%2Fb2D8Vl1zDXgjUtOy2Hlr9VDCRjTkrkjiyE5plPU05ZV%2Bd0O%2B%2BBX7%2BZO7nn5h6K0XWAsRafWXCsOf4Dvo7QAUMNdX6OKErliEBAet9P%2FxgJLHW8Qfrkwgj9z0ltwHPf0nHkxTzWL7YIMBFltT8kLURmHEnQyiCiHeKGwGn5gvVi%2FHUE9LzfrqDO0LJS0LVNkvS11SL7rUpeQOyp2lnkXPRi5MK9Pf0a%2FSNTIHb8omKlOZMrwGpqvIWvnMPBUZr7VU9TypPgIQAbmMRyriZnXpztdiOeuNE3bXdhwmkYUGbkHeEGcTD7OgwHkOUpMBHsc5YGf2At38dfLg1npZknW1W%2BpuTs4Jxu2D9fSOaCf3G680bBzSGVtDIqjf%2BF6J5GrkXO29xABOgr3bQxGsP6y82VK2V0p3WaRDgDivrlp6WbsAqJAM%2B7bSZOHMPqb%2BL8GOqUBUjwLYyXvGiCp0BZGsf16wLGnrbKWY3pfyKXV1pTWgeRUOyMWy%2FuIqt2XLLs6PuihBEjqJqyu6mHxcb49D3IpQcnBJ45rv8QrpAyZFhNNj0CwWw8UC5hp82PIdAmIhtsF8n%2Bdw9GzA5uKBNFmwCthhNK802zs8wfd4AX9GRg14NVgo3gl1EaDKw3UL%2Fd9E8j6KqB8%2BXLqG4SySb50lJRB21smmGDQ&X-Amz-Signature=2e64dc05912834bdafa56df6b3962498c5ca3eaea705d5323f19e47bf16a7739&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4PHWHO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCypZzMAt5Ox%2F4PEXCaMDLfIBTrjV9k%2FWXY9ZuiuolNrQIgSyIUwlitN2wtjpwvuMJWrMklQyYTZc6zRwDTPXdhMY4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKMeN%2FAZHtFQX%2B89circA3YAHz1RtGhjI26Yyt%2FIq22yLgGKtZNnNjjESTtx1AZZN1nK5pjrNZ6X6W3otOcZgOUkOxnEdQMwqTktvjSeA6K%2FYjbTyqRwJhzrcwHbiQ2KhtlfStPC6CNpgrfysIiHsFNc8iVwqPqNsfZyDJ7v35WgDRsGKEAUERjCQpscAp84YmiFNIRvfZTDNcyKsDrtPwYE%2Fb2D8Vl1zDXgjUtOy2Hlr9VDCRjTkrkjiyE5plPU05ZV%2Bd0O%2B%2BBX7%2BZO7nn5h6K0XWAsRafWXCsOf4Dvo7QAUMNdX6OKErliEBAet9P%2FxgJLHW8Qfrkwgj9z0ltwHPf0nHkxTzWL7YIMBFltT8kLURmHEnQyiCiHeKGwGn5gvVi%2FHUE9LzfrqDO0LJS0LVNkvS11SL7rUpeQOyp2lnkXPRi5MK9Pf0a%2FSNTIHb8omKlOZMrwGpqvIWvnMPBUZr7VU9TypPgIQAbmMRyriZnXpztdiOeuNE3bXdhwmkYUGbkHeEGcTD7OgwHkOUpMBHsc5YGf2At38dfLg1npZknW1W%2BpuTs4Jxu2D9fSOaCf3G680bBzSGVtDIqjf%2BF6J5GrkXO29xABOgr3bQxGsP6y82VK2V0p3WaRDgDivrlp6WbsAqJAM%2B7bSZOHMPqb%2BL8GOqUBUjwLYyXvGiCp0BZGsf16wLGnrbKWY3pfyKXV1pTWgeRUOyMWy%2FuIqt2XLLs6PuihBEjqJqyu6mHxcb49D3IpQcnBJ45rv8QrpAyZFhNNj0CwWw8UC5hp82PIdAmIhtsF8n%2Bdw9GzA5uKBNFmwCthhNK802zs8wfd4AX9GRg14NVgo3gl1EaDKw3UL%2Fd9E8j6KqB8%2BXLqG4SySb50lJRB21smmGDQ&X-Amz-Signature=f2eb0a9b5babf7876784d2c10aba9ad87e1a638cfe1ffd473a8ec3582c60e08e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
