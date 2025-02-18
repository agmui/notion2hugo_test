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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZ6RLRB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCc52DLUMf5XlqkWNEOUY5ZOa2%2BX1aCjlejH7r9b1djpAIhAJaeSi7LA50jEd5hkQNlOLJbsMxM9gXsjbVIvaY1J0pvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNMXSW87BZiMwELcIq3AN9o8mMmbOIeC7706pr7uXi%2BKTcFSYirdKYTXutNRvGfUjfylRCfAx0SCMoENbQE%2FD%2B%2BPd%2BGp7TQ5bH9DRA7qzHdDpalSww5IpiUZqRLGUIn48GPigwV2FaaNC8JIXiuCoPkpV9En7sZcPSSI4FrVZIaUlZhvOrMq3cucskwua7FZY2z7UmNG%2FO49UayqDfM9iqN3Q7yNyRmYWx2kgcr7gM70wWptx2uw3X61MHSS4T1tSCviu6cDNtLAzXSVygJItjUTutTEc9SKzfrZ9JQNGz6y1EMgcg7%2FV0D%2BIS8AhjDHlAyQ0ep7%2F%2BT%2BueMtqG0S%2B%2F6mHj9wlB%2BllMTyZRMpax%2FnPde2RxII8uJdXbpZaq6ZBUgzOGltp5a7uRJxtan2JgYHpHusI8KWEPLhQealwtCJyRl0KJXPeAst3zUnk6FEQmLOF9aliZilREAu9nL2gpeOhd2G0Sg5jGJRC92Y9l%2F%2B4Twl5htFlT%2B32gAwOjHJpULpt7w06jYLEqR0aEoFA%2ByjEOy3dcKQALXksFnU87%2FnVoRv6%2FNf5gtiBwpGNd6yx2Q4uejM97CoAFOvNJsKad9nxPO5KlJ4Is5loP16JobRknsRR%2FeFV5q%2FFBt7AbAJUW5wuw4bguVDAckDDr5NG9BjqkAUx4yXs2dQGRsQeHreZtlzpQVTMcpj7BHgnk3YXqfU9unltu8Opv2vAOOIZ%2FEiYcje%2FcuCFzZF6TurGgm60wjwBMqQnQW3tYs8LUSYKCMPdQYE8xzoYDQJIyXPiYk9988MCr6fykCU8PgX7t5V4v59iu1J6xg%2FddDfLXoGofmZchTWEFfGeYD82flsFTN3Fo6lUedEtwKsald03jY8tKMfe%2B4XE6&X-Amz-Signature=3e8ee6e9c76d357448ef45bc228ff7fa57411995296d019855b30a982d0cdbc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZ6RLRB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCc52DLUMf5XlqkWNEOUY5ZOa2%2BX1aCjlejH7r9b1djpAIhAJaeSi7LA50jEd5hkQNlOLJbsMxM9gXsjbVIvaY1J0pvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNMXSW87BZiMwELcIq3AN9o8mMmbOIeC7706pr7uXi%2BKTcFSYirdKYTXutNRvGfUjfylRCfAx0SCMoENbQE%2FD%2B%2BPd%2BGp7TQ5bH9DRA7qzHdDpalSww5IpiUZqRLGUIn48GPigwV2FaaNC8JIXiuCoPkpV9En7sZcPSSI4FrVZIaUlZhvOrMq3cucskwua7FZY2z7UmNG%2FO49UayqDfM9iqN3Q7yNyRmYWx2kgcr7gM70wWptx2uw3X61MHSS4T1tSCviu6cDNtLAzXSVygJItjUTutTEc9SKzfrZ9JQNGz6y1EMgcg7%2FV0D%2BIS8AhjDHlAyQ0ep7%2F%2BT%2BueMtqG0S%2B%2F6mHj9wlB%2BllMTyZRMpax%2FnPde2RxII8uJdXbpZaq6ZBUgzOGltp5a7uRJxtan2JgYHpHusI8KWEPLhQealwtCJyRl0KJXPeAst3zUnk6FEQmLOF9aliZilREAu9nL2gpeOhd2G0Sg5jGJRC92Y9l%2F%2B4Twl5htFlT%2B32gAwOjHJpULpt7w06jYLEqR0aEoFA%2ByjEOy3dcKQALXksFnU87%2FnVoRv6%2FNf5gtiBwpGNd6yx2Q4uejM97CoAFOvNJsKad9nxPO5KlJ4Is5loP16JobRknsRR%2FeFV5q%2FFBt7AbAJUW5wuw4bguVDAckDDr5NG9BjqkAUx4yXs2dQGRsQeHreZtlzpQVTMcpj7BHgnk3YXqfU9unltu8Opv2vAOOIZ%2FEiYcje%2FcuCFzZF6TurGgm60wjwBMqQnQW3tYs8LUSYKCMPdQYE8xzoYDQJIyXPiYk9988MCr6fykCU8PgX7t5V4v59iu1J6xg%2FddDfLXoGofmZchTWEFfGeYD82flsFTN3Fo6lUedEtwKsald03jY8tKMfe%2B4XE6&X-Amz-Signature=12b7f5bde3c4fa01f847c8be3976cb78004166f4dff28f00274fb4e744a4ae2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
