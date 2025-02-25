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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUJA2ND%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICeC8%2Bf%2FOVPZSLve4IZP72%2FIhGw5M92JxnSaiIB2Sa5tAiAUt3vXXjxMWXQ0HQlqDbKcAFTskMImw%2F1XBWUvwI6qgir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM2RvJK0DcVdypGNNzKtwDqFPmeKKhPihj8wXSRcm%2BCO%2FB%2BExuPHEmUIbxsC0Kh6BHRzDAl64CMDx8fqYCjKfZ0mH7hxwdYMw3GcMpaOyQKjJM6oDn1geBnVry4D8bL8FFEOF0cDq%2FA94chQQ7UzCZ0yGWDpmFaBzHwYjw30fWTBg4QwfjuL%2BkK7IhjKIE22xmjU7GQqPHB1bzn0Wyb9NGnfJOHTEFSbuIuOXbsO1sIV4pKGrvlDc7ysdV%2FXaz4fuhtVegaxohGTmHWT%2FBA1hvP9sVNM%2FpAst6DSI8U58M8UD5WNsGuVas48m%2BMo35PpqkBdCx05RIRxno%2F%2BKFrKN1QTJKxVOhVd04To8yeUDQaHUlYMq6%2BusnjZx%2FHjYDJ%2FvZ3Gh1W6Op90zpyYjlfHW4ugCkYAH34aH5%2FwaHVhQT0XFrXp%2FjMNdrBV7vR%2BSKUSIW5nhGO%2BezVzGSvATLUpuAqf4SCPj9cQ%2FgqlEmYZ5jf5XlClPCjgkLxB9WEtGyDhF6Q7pzB9%2F6kIjwwaIiS7cbIk6Wys9GqQf9e1bLsqYKAvQ1NXUXHtVV9%2FjZtCRGNB8Sd764EXxCOJ29%2BTePqvZEZwuk2mWxDLrpcii49UeF81QgBunQSPxz4sZLWJtwpOBcqEjbalohExAyYtow58r1vQY6pgGz8Loi5aGdZdC4vkE51Kv6KI4oxd4XahIs8wB9FOBZRbb0rYOvahBqIxwWgt3Xp1x9I5nCyXVNcr2uFPyTCk37a8tUQ6qdpo%2BgKZqtK9m5aKWtAvtdedcP4QgktbCT%2FKBQjyPNRMvr1cLZURrhV27ZJk7sOiZu47mzpSjkY0p%2FhHscPDrarDSaz3OWYPZJTwj9MT6YeNo3fIT3u84QEL7xyEKbF5VN&X-Amz-Signature=1f219cc5014960b71ff982f061e8fb6cbffbce69fabb50fcae9666037a799d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUJA2ND%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICeC8%2Bf%2FOVPZSLve4IZP72%2FIhGw5M92JxnSaiIB2Sa5tAiAUt3vXXjxMWXQ0HQlqDbKcAFTskMImw%2F1XBWUvwI6qgir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM2RvJK0DcVdypGNNzKtwDqFPmeKKhPihj8wXSRcm%2BCO%2FB%2BExuPHEmUIbxsC0Kh6BHRzDAl64CMDx8fqYCjKfZ0mH7hxwdYMw3GcMpaOyQKjJM6oDn1geBnVry4D8bL8FFEOF0cDq%2FA94chQQ7UzCZ0yGWDpmFaBzHwYjw30fWTBg4QwfjuL%2BkK7IhjKIE22xmjU7GQqPHB1bzn0Wyb9NGnfJOHTEFSbuIuOXbsO1sIV4pKGrvlDc7ysdV%2FXaz4fuhtVegaxohGTmHWT%2FBA1hvP9sVNM%2FpAst6DSI8U58M8UD5WNsGuVas48m%2BMo35PpqkBdCx05RIRxno%2F%2BKFrKN1QTJKxVOhVd04To8yeUDQaHUlYMq6%2BusnjZx%2FHjYDJ%2FvZ3Gh1W6Op90zpyYjlfHW4ugCkYAH34aH5%2FwaHVhQT0XFrXp%2FjMNdrBV7vR%2BSKUSIW5nhGO%2BezVzGSvATLUpuAqf4SCPj9cQ%2FgqlEmYZ5jf5XlClPCjgkLxB9WEtGyDhF6Q7pzB9%2F6kIjwwaIiS7cbIk6Wys9GqQf9e1bLsqYKAvQ1NXUXHtVV9%2FjZtCRGNB8Sd764EXxCOJ29%2BTePqvZEZwuk2mWxDLrpcii49UeF81QgBunQSPxz4sZLWJtwpOBcqEjbalohExAyYtow58r1vQY6pgGz8Loi5aGdZdC4vkE51Kv6KI4oxd4XahIs8wB9FOBZRbb0rYOvahBqIxwWgt3Xp1x9I5nCyXVNcr2uFPyTCk37a8tUQ6qdpo%2BgKZqtK9m5aKWtAvtdedcP4QgktbCT%2FKBQjyPNRMvr1cLZURrhV27ZJk7sOiZu47mzpSjkY0p%2FhHscPDrarDSaz3OWYPZJTwj9MT6YeNo3fIT3u84QEL7xyEKbF5VN&X-Amz-Signature=8d195e9bf36bdafce2676576e82163d1ad6ed462bb5a8bdc53921553984925bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
