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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7YNRSQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxgHHAFkJkkc%2FkS9TTiRJHtwHOx9elvHftxnW%2F74togIhAP2%2B8YinLqFTKPd4vCBJrwsvxpbSeOjClbfl5gr0IgtcKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZn%2FIv%2BSwYNlMlXJYq3ANbL4BMWIpL5XJMmWq5fgCMbA%2BGTb9bFhVH7X86ajWXFhcpJ6juhX07krR5BtM1VHAIOOe5bRQoEG0MVa6lQUgNidYcn3ia426HhbLxl0K3BkvI1cdDmQ62KoH2abBGO2cYE8f0M2MhoQ5bct9KpzYubK04oOqU9JgPSf56WA5I5U79nww94DqacMqE5lcG%2FRDQpM9X%2FUrgjX8m9TyxJEiGUkA5rCAm5xwSmTGcPUQGS3ebYWlKr5ENUDZ8U%2BCwWNs3gQ6xZv8oijoYhMLa8CZkuLRLITghyjTdIeSjwJ5Q%2FEBswGhEy4VN%2FZOg%2FLyzG0vd4zglgllUTMht%2BPSZNJUgu7vMV3CNeDYak4H9xr6n9TidbNj5EuA6qQe6%2FKu2QdVGFsZpSnanfNU71n6caL7Y45CZhZrhQotska1hvHUAo4svRybnoUXc5AVur7ER8J0DdEtP0bZNye5p1OeMiF6aEqMAs%2FGGk1WBB0ZGG21R%2BmMVpyIh8B8NwLCAIY3ywOJ7H16%2BIw5vR4ZCoIu9xn50hmfHQ46mmKs7TJMBggyynUIDnzpdXxpbrBmwnGOolE8gJf2wOFSip%2Fg%2BYiHVXQuhghZOulc1NansNQIjd3OvsTBmtg3Pu4jgZkqd5zDquZi%2BBjqkAQP6PLcVgi8EgVm9Z9hTSiwaxHKFKgmOyUr4WNlNfnWNyyCrdob9uwZ1MZPsSDOcgxqnPgmbAqf7SJDU1hdV0x3WJVFi89yEtuqZavJ00jSRz6tDQrksrs9HkZ7Y%2B5e8Rd5DgXrnltAa7kXcXzhSbwfrBHVK1vkUayz4C8FXOp4ei66wAszhPem8gDNENJ1oM2JxAar905OyXgzJ%2F8D4ovFPwXgw&X-Amz-Signature=5779be1a14a81babe4e7cb0e4d61cddb23f69b2dbcee2d225578e231dcafc1df&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7YNRSQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxgHHAFkJkkc%2FkS9TTiRJHtwHOx9elvHftxnW%2F74togIhAP2%2B8YinLqFTKPd4vCBJrwsvxpbSeOjClbfl5gr0IgtcKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZn%2FIv%2BSwYNlMlXJYq3ANbL4BMWIpL5XJMmWq5fgCMbA%2BGTb9bFhVH7X86ajWXFhcpJ6juhX07krR5BtM1VHAIOOe5bRQoEG0MVa6lQUgNidYcn3ia426HhbLxl0K3BkvI1cdDmQ62KoH2abBGO2cYE8f0M2MhoQ5bct9KpzYubK04oOqU9JgPSf56WA5I5U79nww94DqacMqE5lcG%2FRDQpM9X%2FUrgjX8m9TyxJEiGUkA5rCAm5xwSmTGcPUQGS3ebYWlKr5ENUDZ8U%2BCwWNs3gQ6xZv8oijoYhMLa8CZkuLRLITghyjTdIeSjwJ5Q%2FEBswGhEy4VN%2FZOg%2FLyzG0vd4zglgllUTMht%2BPSZNJUgu7vMV3CNeDYak4H9xr6n9TidbNj5EuA6qQe6%2FKu2QdVGFsZpSnanfNU71n6caL7Y45CZhZrhQotska1hvHUAo4svRybnoUXc5AVur7ER8J0DdEtP0bZNye5p1OeMiF6aEqMAs%2FGGk1WBB0ZGG21R%2BmMVpyIh8B8NwLCAIY3ywOJ7H16%2BIw5vR4ZCoIu9xn50hmfHQ46mmKs7TJMBggyynUIDnzpdXxpbrBmwnGOolE8gJf2wOFSip%2Fg%2BYiHVXQuhghZOulc1NansNQIjd3OvsTBmtg3Pu4jgZkqd5zDquZi%2BBjqkAQP6PLcVgi8EgVm9Z9hTSiwaxHKFKgmOyUr4WNlNfnWNyyCrdob9uwZ1MZPsSDOcgxqnPgmbAqf7SJDU1hdV0x3WJVFi89yEtuqZavJ00jSRz6tDQrksrs9HkZ7Y%2B5e8Rd5DgXrnltAa7kXcXzhSbwfrBHVK1vkUayz4C8FXOp4ei66wAszhPem8gDNENJ1oM2JxAar905OyXgzJ%2F8D4ovFPwXgw&X-Amz-Signature=d19b3b8393b4ace3827accc0940c8239789f62b21fc2aec9dc190efdb46f599c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
