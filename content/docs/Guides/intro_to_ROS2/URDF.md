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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UW2AKAN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCWH0joN5glVuTGn9mcLO%2BvHQkt3ckFor2ICkRDlgjXWgIhAMSeDN4qtqXi7VdxkuWTY6NPRPlGa2RciKnT%2FHmqxfgLKv8DCCsQABoMNjM3NDIzMTgzODA1IgxhRFTJ7fyYh89bNmIq3AMQ5ZmzbY3mdgDw1odysceide%2Fw8Fpdes9Z5coSoTnZ9bglccqU2WbZX0qUgTiyAi6wkZ4DC6lDgc4MsrxWNCW%2FGOaBbiVuOxUG6iOR5X3fZ2gOiWPlwui8fZlMt0HDFOrmHZuem%2FwloCe2Kr%2BdMSDRu48OZXZC0bp%2FYQA7XUtAB59voC9yLn7qeND9nKLL1v3NAAFmNV1zjn2EGmMI4NyWcTH1svJsnx1ketqnCDrN5Xbo%2BdjKJxdBJ0djhZYhXwMsljsoHKVE10swKgDQhzfeO50tylnH1IZp%2FInoHRJRUhmdmW5QRf15Pu%2B6G9VKec0OJDw4tcLQ0btCtgX7AKUCW0VvHuz71dDGMjzSn9bsoe8hPJbo69jLM9m6JLwibI0San7ZUIqoLhr5LlUWtXoRUp5TQSXCA%2Fiw9cGuE5tM%2FbhtVb%2FWgzZXpGsoaBcnzOsxY38ZT76j2NayclSvMuq9meOVJQi5v0ycmmJDZ8HwK%2BLX5UHPN9KQwnK%2FbtLBemduLj8Dl6XKVAhk9sGWDdREC7va4L4avP6aSVomqY%2F9zvbKZihv9my50ASU5RAYRrShQa3KpBhVzW1q%2BUQ8vy1NiLkZdBbrYcAHIdQ2fPkhSlYLo1CZ0XpW14JdBTDm%2BOnCBjqkAQMAnMi41i9hE0nzkFtUJovLGMF%2FIIFhLOWoJ3WGGegYM08c8g6eb0W2MyEVAxWyJUAyZhkd0cCzYTsuYjut2pvYGTC8RNmC2Y2DACVm%2BHEpMkpRzppYVWirBz9B27U7OYLa95HpHHaSqZCAsvcvD2AOfVQzUUJzKNccMWSIzVu7wZC3NRb6Kyut19oaMsg2DiUMuGn%2F9m8QkzPN2JgvgE18PtGR&X-Amz-Signature=0de0dce372e1e2fedd7c96c39569886a86eef8c4b4a2d346f4d4697b472ff0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UW2AKAN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCWH0joN5glVuTGn9mcLO%2BvHQkt3ckFor2ICkRDlgjXWgIhAMSeDN4qtqXi7VdxkuWTY6NPRPlGa2RciKnT%2FHmqxfgLKv8DCCsQABoMNjM3NDIzMTgzODA1IgxhRFTJ7fyYh89bNmIq3AMQ5ZmzbY3mdgDw1odysceide%2Fw8Fpdes9Z5coSoTnZ9bglccqU2WbZX0qUgTiyAi6wkZ4DC6lDgc4MsrxWNCW%2FGOaBbiVuOxUG6iOR5X3fZ2gOiWPlwui8fZlMt0HDFOrmHZuem%2FwloCe2Kr%2BdMSDRu48OZXZC0bp%2FYQA7XUtAB59voC9yLn7qeND9nKLL1v3NAAFmNV1zjn2EGmMI4NyWcTH1svJsnx1ketqnCDrN5Xbo%2BdjKJxdBJ0djhZYhXwMsljsoHKVE10swKgDQhzfeO50tylnH1IZp%2FInoHRJRUhmdmW5QRf15Pu%2B6G9VKec0OJDw4tcLQ0btCtgX7AKUCW0VvHuz71dDGMjzSn9bsoe8hPJbo69jLM9m6JLwibI0San7ZUIqoLhr5LlUWtXoRUp5TQSXCA%2Fiw9cGuE5tM%2FbhtVb%2FWgzZXpGsoaBcnzOsxY38ZT76j2NayclSvMuq9meOVJQi5v0ycmmJDZ8HwK%2BLX5UHPN9KQwnK%2FbtLBemduLj8Dl6XKVAhk9sGWDdREC7va4L4avP6aSVomqY%2F9zvbKZihv9my50ASU5RAYRrShQa3KpBhVzW1q%2BUQ8vy1NiLkZdBbrYcAHIdQ2fPkhSlYLo1CZ0XpW14JdBTDm%2BOnCBjqkAQMAnMi41i9hE0nzkFtUJovLGMF%2FIIFhLOWoJ3WGGegYM08c8g6eb0W2MyEVAxWyJUAyZhkd0cCzYTsuYjut2pvYGTC8RNmC2Y2DACVm%2BHEpMkpRzppYVWirBz9B27U7OYLa95HpHHaSqZCAsvcvD2AOfVQzUUJzKNccMWSIzVu7wZC3NRb6Kyut19oaMsg2DiUMuGn%2F9m8QkzPN2JgvgE18PtGR&X-Amz-Signature=3a5a98699bec7b42fd9e7df1d5430cbbfee808f397044b0912751e9b40d38ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
