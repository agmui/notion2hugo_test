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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNGRNGO%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfDO5I%2BBo0zO04fpYG%2F7DijKZVBJbQVrNbp2H1GrFY%2BAiBpHvJ1UnSwXq1YVoaVwvH91DqWUxN7eAVBrRXtDMiF0yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMzNXj00g6ojsoRaxaKtwDf8%2F0n16M6h3M%2B7A5o3HC3YzGDHO%2FZRU%2BPJK2UgXq2TrYwHpWXCZ3P%2BspFp5UZARCVcd%2BOBPVVUzzx7Ki3%2FJ3ljt1zE8UpJ%2Fn6xa0%2FtZcthc4lLsKqKlKElzgwhiB5HZWIAfKPZ9jTrW6%2Fz9HhUF%2B01l148f13iqfbyd302ASQx8YMh%2B2LqtkFeUsPwwMJMPgmTPp0U3vqmDt52ZJO3alvZCceCOjGL6%2FqyuGcyvStvNxH9Dl8qAQxiIUJEVK2lKwwdiSrz7fSw1Dft87WUbjOZL9C%2BZ0dDBfYrlP9OhFhTkZqQFkqRLIySoOv0h7VAn0KvQVfGOSfZ70Ariz9h80MeNb0xTkrEd%2FSuji2hYFYtMGCpOHCYsqaGY0QD4%2Fr9iitr4WFoBX3nuKz%2FK8IO8nUP4n91wfJyF%2FbbvNxyGWlfMvE%2BqG5xx%2FS1Aj0Jf%2B3IWWnuChn7kJxsiUx7VPm4hl1Id15H36TQxx%2BC%2BgZuduYTYeSRiPJL0w92yEJiuv1OjXf42RHi%2BsSRQHztgX%2F4tur9Q1SsdCaDfRJKHqAQ4JrZhd9vBYPWAA7cY5Z5rtTQ3J%2BU77UUhXfeUnBx0KWCNR3p5DMYanxYcDQJ3RKzJJB7q9X13CWawC%2FYJq0WMwysTxwAY6pgHWZVSQZ1V5S6kunniCWOdrqcDCYuks4MwDTb0y8gjpqFq4M2DGDIePdgqGeaJQ%2BqsLrAwzkESLS7Di82uTWSlPObgGhe5PSvtYgD%2FsZzO2MwnrVnV5agmwbZl3SL%2BEqANW9Z6Ol0T1DMq57Xz6uOHfwufVo9uRubjGw5MpkfbjPY%2B7e4jwbkLil%2FOuk%2Fp61qxM3%2BVG1LtCmr1GkA0GZqrVUwxU4mb4&X-Amz-Signature=29f1d071a0050c2e6f31ed62df0b96eb4872afc9ba062aaa542132e620832294&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNGRNGO%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfDO5I%2BBo0zO04fpYG%2F7DijKZVBJbQVrNbp2H1GrFY%2BAiBpHvJ1UnSwXq1YVoaVwvH91DqWUxN7eAVBrRXtDMiF0yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMzNXj00g6ojsoRaxaKtwDf8%2F0n16M6h3M%2B7A5o3HC3YzGDHO%2FZRU%2BPJK2UgXq2TrYwHpWXCZ3P%2BspFp5UZARCVcd%2BOBPVVUzzx7Ki3%2FJ3ljt1zE8UpJ%2Fn6xa0%2FtZcthc4lLsKqKlKElzgwhiB5HZWIAfKPZ9jTrW6%2Fz9HhUF%2B01l148f13iqfbyd302ASQx8YMh%2B2LqtkFeUsPwwMJMPgmTPp0U3vqmDt52ZJO3alvZCceCOjGL6%2FqyuGcyvStvNxH9Dl8qAQxiIUJEVK2lKwwdiSrz7fSw1Dft87WUbjOZL9C%2BZ0dDBfYrlP9OhFhTkZqQFkqRLIySoOv0h7VAn0KvQVfGOSfZ70Ariz9h80MeNb0xTkrEd%2FSuji2hYFYtMGCpOHCYsqaGY0QD4%2Fr9iitr4WFoBX3nuKz%2FK8IO8nUP4n91wfJyF%2FbbvNxyGWlfMvE%2BqG5xx%2FS1Aj0Jf%2B3IWWnuChn7kJxsiUx7VPm4hl1Id15H36TQxx%2BC%2BgZuduYTYeSRiPJL0w92yEJiuv1OjXf42RHi%2BsSRQHztgX%2F4tur9Q1SsdCaDfRJKHqAQ4JrZhd9vBYPWAA7cY5Z5rtTQ3J%2BU77UUhXfeUnBx0KWCNR3p5DMYanxYcDQJ3RKzJJB7q9X13CWawC%2FYJq0WMwysTxwAY6pgHWZVSQZ1V5S6kunniCWOdrqcDCYuks4MwDTb0y8gjpqFq4M2DGDIePdgqGeaJQ%2BqsLrAwzkESLS7Di82uTWSlPObgGhe5PSvtYgD%2FsZzO2MwnrVnV5agmwbZl3SL%2BEqANW9Z6Ol0T1DMq57Xz6uOHfwufVo9uRubjGw5MpkfbjPY%2B7e4jwbkLil%2FOuk%2Fp61qxM3%2BVG1LtCmr1GkA0GZqrVUwxU4mb4&X-Amz-Signature=31f56b659d3ce559913ea61eb0ad2e5eae5bc861705586de16a4264b8e9bc280&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
