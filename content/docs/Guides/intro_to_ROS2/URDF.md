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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6XJW4K%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt9%2BF98Cjh9e6VVH%2BCFa6pARRolynXBFUiLtwxALbkUQIgYwdmgBf8v7YsZM7nKr8I8lPd0ynOR6RMgiS1zrd%2FofwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL12Vrw61QyicVnVvyrcA6Flyqu9agofrbWThwk8nzwD9xAnecIMWyHe6I8IckV9GYxoe9thYgwY2x2lZVZxr%2FyWCfJ%2BbMwlKleSMr%2FymrFmxnqJFKD%2BqE4XbcPH34jZGaQPxfFSTbmOAtr78lAmxB1sSRqd1HG1BaEVtSo%2F60z2tOg4DIV34DqxrpC%2BO76jIjuSZM%2BBPEvwagACk76I8gO25r%2FLd6fpFW9zqU5nb37pW5tpCIJc7bpWdy6cM1%2BDtp8cvXZofYOIKL%2Fby2sLXVXnGzRyEzG%2BhdfNKywUG6Jz%2FlgI6tQZ5jL5Ly2HOMQ0TQOro9J73IbmxtNTx7QW2CIPY%2BaaHKOqWEboZ0JvISh%2FckzYoHPZCaqadsKOcDKYnmgewdEUV5eabCTyLbx2drgYFlE0uq022QGYXQb%2FnQbsDHmkJA74iagVWnpQpfInIS%2BTvtG5WOpRVhNEHJhIXFJhTDXcwXpb6WLbp431abbgczshDT6PzbJxvycru7k%2FiQ9jz2V7ZSTPjH3%2FWkSjOQ6Q0u1qJx35XUyK33C1IgKbmZZSWUJxu2eHAOP2aMJ9MbbBbygdVESUTQTbJ0FQWX6HlLForm%2BJd8a%2BP1eUTWPjOIJnIprBLaopHQCkmMjKrWm4H6jB4MbyuMvCMOSitMEGOqUB7YxM%2BupXMOFzbdakM3NiPbR9YbkEYB9pxBWD3kXqtzpBzRDWKnfT7D7wLeWmWXB7CiFD2GR9KqLlbkBQZFM3o0SNu1%2FaxOhxvKpHe5P8ALv2YGPCqcPkC79towapUpJ7uqIlMYiwL%2FYQaMDwhUBgYEvZb0pxQkP9Qqhh1l2CjhTkAdB3NGsPbGxiUWN0XCuor%2B2Hpx8EkJoRcAsH8PC%2Bu3yOmlJ%2F&X-Amz-Signature=68a417f5511517d912b344d2b5311d8b8b68eba7035536229fe739ea57be57af&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6XJW4K%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt9%2BF98Cjh9e6VVH%2BCFa6pARRolynXBFUiLtwxALbkUQIgYwdmgBf8v7YsZM7nKr8I8lPd0ynOR6RMgiS1zrd%2FofwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL12Vrw61QyicVnVvyrcA6Flyqu9agofrbWThwk8nzwD9xAnecIMWyHe6I8IckV9GYxoe9thYgwY2x2lZVZxr%2FyWCfJ%2BbMwlKleSMr%2FymrFmxnqJFKD%2BqE4XbcPH34jZGaQPxfFSTbmOAtr78lAmxB1sSRqd1HG1BaEVtSo%2F60z2tOg4DIV34DqxrpC%2BO76jIjuSZM%2BBPEvwagACk76I8gO25r%2FLd6fpFW9zqU5nb37pW5tpCIJc7bpWdy6cM1%2BDtp8cvXZofYOIKL%2Fby2sLXVXnGzRyEzG%2BhdfNKywUG6Jz%2FlgI6tQZ5jL5Ly2HOMQ0TQOro9J73IbmxtNTx7QW2CIPY%2BaaHKOqWEboZ0JvISh%2FckzYoHPZCaqadsKOcDKYnmgewdEUV5eabCTyLbx2drgYFlE0uq022QGYXQb%2FnQbsDHmkJA74iagVWnpQpfInIS%2BTvtG5WOpRVhNEHJhIXFJhTDXcwXpb6WLbp431abbgczshDT6PzbJxvycru7k%2FiQ9jz2V7ZSTPjH3%2FWkSjOQ6Q0u1qJx35XUyK33C1IgKbmZZSWUJxu2eHAOP2aMJ9MbbBbygdVESUTQTbJ0FQWX6HlLForm%2BJd8a%2BP1eUTWPjOIJnIprBLaopHQCkmMjKrWm4H6jB4MbyuMvCMOSitMEGOqUB7YxM%2BupXMOFzbdakM3NiPbR9YbkEYB9pxBWD3kXqtzpBzRDWKnfT7D7wLeWmWXB7CiFD2GR9KqLlbkBQZFM3o0SNu1%2FaxOhxvKpHe5P8ALv2YGPCqcPkC79towapUpJ7uqIlMYiwL%2FYQaMDwhUBgYEvZb0pxQkP9Qqhh1l2CjhTkAdB3NGsPbGxiUWN0XCuor%2B2Hpx8EkJoRcAsH8PC%2Bu3yOmlJ%2F&X-Amz-Signature=3b62095571e377ed9adad2e7a3a8bbf16a9ee9086c20869569c6ea9cd3252e75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
