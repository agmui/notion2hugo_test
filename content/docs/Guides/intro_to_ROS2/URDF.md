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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEEQNJQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSanOOT1s9I5pKn7uDK3zW37UzHOPkORw6DNK%2FTEVuTAiBDb1eblzxIr%2BIQzaix3JnPw4vD1HhIwfPGgdE6%2B8zl0Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM6AQqetpsvAliqFaPKtwD4GwRck%2FX5DNWImY0rThCD0vGo8IN7CpAYHFC3RMjBwx15xxpAwfpJ9Q0wjodBBirbWLiujWSLKfRf9a2mlJRFVCJUGgWqniypeyGpMTEnEnQtvxzblYZdHWu6s%2BE1Ziy6U0Z4QF7nhssHMZp1OHs7yh6zRUMjZSt0DWnhCo76CfOiVjivJbr%2FQRT%2FKyYLqHVM3HFljy1vlvixiSQMoc6OA%2F7JxFFBvBvzEuKQ75xW%2ByMmOTQpGCypABMwx5zONSTjet9Pr3CxYa3Dajdc4rkH1Cf3Ig7RKJ08UGVWSvSE%2BY%2BpdPkwy1ln131MAwxobOOOXNZE5Bei6loRpcls3NPZGWIeoi5K8rPj4VK9ovb8sIkGNvoLuNipkf0qN6cvbJ6eS65IQKarVU%2Ba7bs462QAtRiyonRUtA%2BIYyqqU9uAorLCWOBtdICfI5Bfg6%2FfoqRJj4ILpAS7tIrafsJATzXJLVEDWGcWuI5gy0tuQQdHZmS05iZ3DMrMi9xTGPsXntZIM6xBTVjimM%2Fj8HZTDhFHh2A6r9vo9eMrkP2GNc0wn7KHBoD7V0uSOWXpeJbn5Iib0awmhhVC8DYT5FTtVP6MWT%2BazCjc76CzVAbHSrH9aUpWVj%2Bf0kHWj%2FNUSgwv4%2F%2BvwY6pgFmoWRwnQ327VPhUXBG0RDPSsPrAlKAFfGmzwvHg%2FDNoj3%2BVscKcz0pp1JbZhsZampd%2BnElzUGL8TTGEsAq1QCTMa9AWc%2F74evRbrQYlz%2B3If15XySO9l6jZbZ9tAz11bw0BfZ7pX3LXeZUl%2FbifH9Kd358vZhjWzUkANpIIOAOzx5bVlQLAlN2C5JYNXvpCx6kOTqFAR0lSoOYz5zGGSYDt4CEvrM0&X-Amz-Signature=784fa9b3191c6b07d714822fca876c613b514819b290c93773cb4698cda59330&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEEQNJQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSanOOT1s9I5pKn7uDK3zW37UzHOPkORw6DNK%2FTEVuTAiBDb1eblzxIr%2BIQzaix3JnPw4vD1HhIwfPGgdE6%2B8zl0Sr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM6AQqetpsvAliqFaPKtwD4GwRck%2FX5DNWImY0rThCD0vGo8IN7CpAYHFC3RMjBwx15xxpAwfpJ9Q0wjodBBirbWLiujWSLKfRf9a2mlJRFVCJUGgWqniypeyGpMTEnEnQtvxzblYZdHWu6s%2BE1Ziy6U0Z4QF7nhssHMZp1OHs7yh6zRUMjZSt0DWnhCo76CfOiVjivJbr%2FQRT%2FKyYLqHVM3HFljy1vlvixiSQMoc6OA%2F7JxFFBvBvzEuKQ75xW%2ByMmOTQpGCypABMwx5zONSTjet9Pr3CxYa3Dajdc4rkH1Cf3Ig7RKJ08UGVWSvSE%2BY%2BpdPkwy1ln131MAwxobOOOXNZE5Bei6loRpcls3NPZGWIeoi5K8rPj4VK9ovb8sIkGNvoLuNipkf0qN6cvbJ6eS65IQKarVU%2Ba7bs462QAtRiyonRUtA%2BIYyqqU9uAorLCWOBtdICfI5Bfg6%2FfoqRJj4ILpAS7tIrafsJATzXJLVEDWGcWuI5gy0tuQQdHZmS05iZ3DMrMi9xTGPsXntZIM6xBTVjimM%2Fj8HZTDhFHh2A6r9vo9eMrkP2GNc0wn7KHBoD7V0uSOWXpeJbn5Iib0awmhhVC8DYT5FTtVP6MWT%2BazCjc76CzVAbHSrH9aUpWVj%2Bf0kHWj%2FNUSgwv4%2F%2BvwY6pgFmoWRwnQ327VPhUXBG0RDPSsPrAlKAFfGmzwvHg%2FDNoj3%2BVscKcz0pp1JbZhsZampd%2BnElzUGL8TTGEsAq1QCTMa9AWc%2F74evRbrQYlz%2B3If15XySO9l6jZbZ9tAz11bw0BfZ7pX3LXeZUl%2FbifH9Kd358vZhjWzUkANpIIOAOzx5bVlQLAlN2C5JYNXvpCx6kOTqFAR0lSoOYz5zGGSYDt4CEvrM0&X-Amz-Signature=d8ecf6ff03131532a05e00b7b6df7a4e89624ff8db26816b8a675da56ea12007&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
