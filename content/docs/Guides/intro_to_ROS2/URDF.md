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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZA5DWWB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCcRAkfjEavV4acn4H59JDB%2FiU6T98UqAc2izSgqH6QOwIgWXE3C1BQFkQfH3i7MqH4ZYc5gwui5sy7HQCnHn%2F3JHsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHssWEiZkkwY9VHmwSrcA0IeclJ3yJ6XYU1OhlywQmuWOIw9i4tiN5vp4vJnjBd1Vif2Q101JRrMcVPLm%2BA%2B%2FQZjSLXv%2Bsb8r5kZWcv5kq3O0FR75YlLBSs1l0rX%2FXdFzQscyJq2xpMcoWJcswH%2BiwmrJVTmdxtPyq2zJvL4o3niJ%2Bx6c1PF1soouvl1fDHmvBxO96XnxMg5924MgWYzX8WWhF4cG6g%2BGstwIQbt%2FVaOQokf%2Fd45UUh6uJmP1VgXFQ0i0wueS19o2aUk4O9E8J%2F1Qo7pPN%2Bplb1Va3aYaV4vIY7uIKRP5RbMT8EejxealBM7XdiH79JjR5BEnVOLl9a1SlTInYY9JqzKBugwvm6F6KoXGnYyH9CQzyHUxIV8qDDWSG56zs7q9Ce0Kpl97%2Bfbou8TCKqh9uuIvmfUiH0XeZc0jJNQUmBP8y5SI7I9yv1cD3PzecmnMLgOQO16R%2B%2BOzbxwKgEV6YsR1rjDvN20sfiU8984reU%2BZ0zLCB0P42O98Xq8UFn0CM%2BmfsPSnKC25SRpXF%2BKJn0ilc3m8HZaT9DWdCFAYx1yI0mxj9KCszR0VHXzkkDv3nSbzCmen71iE7HfADoB%2FYvNjVCBjiD1G7jSSbrrwtsAzfkba6phNW18tpVRj4Pjg12gMNy848MGOqUBJuepD07Mq1E8bxDQYTt8bPv00ydOlYU8XiI1yutOBZnTL6RqqoWjdtRWKFaOksqfZGyuudklJ698xnF5JEYxBv4M6nbU4G7pIe%2BxnW5OoU70WAG1Mz53NvUKAVjwKa4veShw2F5LBzkaGae0Hq2snZcqZu8wMa%2ByTFf8uO0jGoIPJKzf2%2FpGlGml6sudhztdQV%2FZ1i5RGYHRZEM8zONuf0fKpYTD&X-Amz-Signature=f6a39d0548448a88b45bc793ee21f53bc087faabdf9bb87f563e8bcc7a64b446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZA5DWWB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCcRAkfjEavV4acn4H59JDB%2FiU6T98UqAc2izSgqH6QOwIgWXE3C1BQFkQfH3i7MqH4ZYc5gwui5sy7HQCnHn%2F3JHsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHssWEiZkkwY9VHmwSrcA0IeclJ3yJ6XYU1OhlywQmuWOIw9i4tiN5vp4vJnjBd1Vif2Q101JRrMcVPLm%2BA%2B%2FQZjSLXv%2Bsb8r5kZWcv5kq3O0FR75YlLBSs1l0rX%2FXdFzQscyJq2xpMcoWJcswH%2BiwmrJVTmdxtPyq2zJvL4o3niJ%2Bx6c1PF1soouvl1fDHmvBxO96XnxMg5924MgWYzX8WWhF4cG6g%2BGstwIQbt%2FVaOQokf%2Fd45UUh6uJmP1VgXFQ0i0wueS19o2aUk4O9E8J%2F1Qo7pPN%2Bplb1Va3aYaV4vIY7uIKRP5RbMT8EejxealBM7XdiH79JjR5BEnVOLl9a1SlTInYY9JqzKBugwvm6F6KoXGnYyH9CQzyHUxIV8qDDWSG56zs7q9Ce0Kpl97%2Bfbou8TCKqh9uuIvmfUiH0XeZc0jJNQUmBP8y5SI7I9yv1cD3PzecmnMLgOQO16R%2B%2BOzbxwKgEV6YsR1rjDvN20sfiU8984reU%2BZ0zLCB0P42O98Xq8UFn0CM%2BmfsPSnKC25SRpXF%2BKJn0ilc3m8HZaT9DWdCFAYx1yI0mxj9KCszR0VHXzkkDv3nSbzCmen71iE7HfADoB%2FYvNjVCBjiD1G7jSSbrrwtsAzfkba6phNW18tpVRj4Pjg12gMNy848MGOqUBJuepD07Mq1E8bxDQYTt8bPv00ydOlYU8XiI1yutOBZnTL6RqqoWjdtRWKFaOksqfZGyuudklJ698xnF5JEYxBv4M6nbU4G7pIe%2BxnW5OoU70WAG1Mz53NvUKAVjwKa4veShw2F5LBzkaGae0Hq2snZcqZu8wMa%2ByTFf8uO0jGoIPJKzf2%2FpGlGml6sudhztdQV%2FZ1i5RGYHRZEM8zONuf0fKpYTD&X-Amz-Signature=2cb7ea9a2348fd4c0cfc78a47b55a74cf4c0022d7bcf5fa5ef983a124b530e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
