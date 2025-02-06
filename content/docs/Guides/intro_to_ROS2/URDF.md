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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6RZ6QX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCsU86Ty7tiVKVlxdHKyPW2oIhLXajcnOOaZkfJlIJ9%2FwIgTS7dDC3RyEQPwOHoDj0O5%2FakcWeZntLq75hsa1XyATUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIOMpmWc%2BIoud0tZMyrcAzn4Ca0Aom%2BHg%2FSSgiZeIvP3KEnYhJ0oLnk07nuaLYdTx6XEeEWO%2F3euZsL05KZUlZHNst3HJL7WB7CJiSxyCi2S9daxtf134jSpQ7T%2FORZFP1YybAW651Cf6Vwr8vkANf%2FuIJv0YSDv5a9mM820ltTOU%2B%2B4Vg3xwOGJ0WFiu0Y5XqcluHiwIGE0GIdbYH%2BWKpBgqT7ILnAKGyDs%2Bev7zlnFGxWS36Q4G93PNjoIlx8vy31jaiu6XateNbpNfKGKHK9680y2Eq%2Bs2tEzn7aaicbb3xTkYfjKl6gt3BkFUrfCJ8HCF7%2FS%2FYUeDIo0qkfEad87xy2SbJK9tsy37QsM9mx5QnDB7giSAS6kT6EVyW2QDNem9ql0iqvqO7jcuLBg0qMAMDW%2B5q%2FasjqLsATuKYrUrqHCjFbPRxf0cJmSxXwTHugVN0%2BapHL91%2BPgQLONeJuJppKAEkruvHSro8bSMEu6K5bxd011k5oUejlnJwZlUwKGWwTmW728rpzzrgC9boHQz9lncU399zVWUJl4A%2F1xd1WrSvzKP9TiU785PGCFI06Krt0%2FQS6dM%2F6vJMsYhBX%2F2TwuJ7PQwSh5Cm%2Ba8M0d416M%2F3%2FG7cCstQR0Y6CAs6MxgsErbw31IQXAMIu5lL0GOqUBWRXj0JfcJnpHCaDGMIOjHgNKq1sjOLasbSkS48SIWu7vA6f%2FXpQKhzUMs4NjdJbEWeLKRGikp9Q9gBOVTp9uxqTXqeBgbfcZAvqT8UlL0%2Bb9Uz%2FO15%2FiLDTZX4ESzuapUFsd8ctLSB6Imn6Ti3t%2B2GTYC04KhwC1gLBGhzDyCHpwMcWGv0SGF3ymccmSET%2BPhzVGWctBQLb4AGhnemUXeyYDBR50&X-Amz-Signature=1f6e74247463e7fcf6285819d2af278f7a74c73ff55417afcc0d3861342ea2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6RZ6QX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCsU86Ty7tiVKVlxdHKyPW2oIhLXajcnOOaZkfJlIJ9%2FwIgTS7dDC3RyEQPwOHoDj0O5%2FakcWeZntLq75hsa1XyATUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIOMpmWc%2BIoud0tZMyrcAzn4Ca0Aom%2BHg%2FSSgiZeIvP3KEnYhJ0oLnk07nuaLYdTx6XEeEWO%2F3euZsL05KZUlZHNst3HJL7WB7CJiSxyCi2S9daxtf134jSpQ7T%2FORZFP1YybAW651Cf6Vwr8vkANf%2FuIJv0YSDv5a9mM820ltTOU%2B%2B4Vg3xwOGJ0WFiu0Y5XqcluHiwIGE0GIdbYH%2BWKpBgqT7ILnAKGyDs%2Bev7zlnFGxWS36Q4G93PNjoIlx8vy31jaiu6XateNbpNfKGKHK9680y2Eq%2Bs2tEzn7aaicbb3xTkYfjKl6gt3BkFUrfCJ8HCF7%2FS%2FYUeDIo0qkfEad87xy2SbJK9tsy37QsM9mx5QnDB7giSAS6kT6EVyW2QDNem9ql0iqvqO7jcuLBg0qMAMDW%2B5q%2FasjqLsATuKYrUrqHCjFbPRxf0cJmSxXwTHugVN0%2BapHL91%2BPgQLONeJuJppKAEkruvHSro8bSMEu6K5bxd011k5oUejlnJwZlUwKGWwTmW728rpzzrgC9boHQz9lncU399zVWUJl4A%2F1xd1WrSvzKP9TiU785PGCFI06Krt0%2FQS6dM%2F6vJMsYhBX%2F2TwuJ7PQwSh5Cm%2Ba8M0d416M%2F3%2FG7cCstQR0Y6CAs6MxgsErbw31IQXAMIu5lL0GOqUBWRXj0JfcJnpHCaDGMIOjHgNKq1sjOLasbSkS48SIWu7vA6f%2FXpQKhzUMs4NjdJbEWeLKRGikp9Q9gBOVTp9uxqTXqeBgbfcZAvqT8UlL0%2Bb9Uz%2FO15%2FiLDTZX4ESzuapUFsd8ctLSB6Imn6Ti3t%2B2GTYC04KhwC1gLBGhzDyCHpwMcWGv0SGF3ymccmSET%2BPhzVGWctBQLb4AGhnemUXeyYDBR50&X-Amz-Signature=06126c2f49f3b9ccb44327c5a6144888ce9c591d75b3d8dd59dcbdb3efa60db2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
