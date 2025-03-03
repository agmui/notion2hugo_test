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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HXVQVI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0pP83GCvHnQlZOJvGSkVTlqN7aR6rXxXlIyvgjUEttAiBsOam7TXWNUijLbunejj%2BMxQJ5PxvZgKvbuA1rxkeK8SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzcSXDJnJ290%2FnqmKtwDrtGPX%2BzEy8m0ddxBgJMOrGK1vla%2F9rXjNczDSFpAoAn%2FLJlPIolBeBdseew6GsIPWZNK%2Bh8N5cIsZ7Ml0xp0W9pEMERvGZhYSNRNNNoH5sdZ2YpNfXKQ8FjmF7ZeI%2FZ1ADECbCucZsSgLDGmGj%2Bot9Pmk8cjdgBYwz22VIxdfPf%2F%2FnaSiz4g5RjpcU2JhrBjrvz3t5JYP8VDXg8%2B7GMsNsBsWLB9sVWfSX%2FjMYzK3bhVtopa2mcNyJeNdg6uZA928jxt%2BfHkFAwZxwBLEeSL3zJ8rIQPD8D5IztjcwHenb%2B83JaxxQjt7IQ1ZSQJncUgZXEGPaSr1TxV04cnbSQ0oR3PedXygV13XPeX2fRkRfcCxaNMfvcoaub844%2FK3fm1qOKSbZHewqZQ7k21lKnt4p9EHB9ULorsFL6EhrvWLl7k7nd28CVpa8Bw1yFGeOgt%2BlJqZGAIt6qi8FK8ap4BmxLhkX2Tg9cKGDJDh2tPj7%2BhdGYcxfOhGX9r2%2FThcFzZOd0yoqtP%2BCPvkbKWcIz1uXCGISv021cvREx4%2B4fMN4UtDNs9ihIVGWJY6lJDy1ihirCXoDRHfuXJIerZ96YmKrNjiHfoAaiOer%2Btba64JWuyMqMHSzv7t79%2BZJQwvtuXvgY6pgFja4Ygw%2FDlk9Kl207PiadPgFtzIAjokQO0eIXykskKKI8SEuuh54qi%2BFNrXl12QfCUzhEJIA0eLI0b1XZJ0SYSbZDzDwMDoL739yzLUBo0ztkZD%2F8CmolSN1AKVm7CDVEki1R2eoBvN4YY96NM0gUUmNqjOHTthsGSX3qO7THRjFOuhzOspIrqBkNQawf3X1e6HWbzd0z6R2Jq%2FNM9p2ssEgjhrUCx&X-Amz-Signature=d7417524f37b9d390704d9ec14317a1950e8aeded8521625a03e650592103d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HXVQVI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0pP83GCvHnQlZOJvGSkVTlqN7aR6rXxXlIyvgjUEttAiBsOam7TXWNUijLbunejj%2BMxQJ5PxvZgKvbuA1rxkeK8SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzcSXDJnJ290%2FnqmKtwDrtGPX%2BzEy8m0ddxBgJMOrGK1vla%2F9rXjNczDSFpAoAn%2FLJlPIolBeBdseew6GsIPWZNK%2Bh8N5cIsZ7Ml0xp0W9pEMERvGZhYSNRNNNoH5sdZ2YpNfXKQ8FjmF7ZeI%2FZ1ADECbCucZsSgLDGmGj%2Bot9Pmk8cjdgBYwz22VIxdfPf%2F%2FnaSiz4g5RjpcU2JhrBjrvz3t5JYP8VDXg8%2B7GMsNsBsWLB9sVWfSX%2FjMYzK3bhVtopa2mcNyJeNdg6uZA928jxt%2BfHkFAwZxwBLEeSL3zJ8rIQPD8D5IztjcwHenb%2B83JaxxQjt7IQ1ZSQJncUgZXEGPaSr1TxV04cnbSQ0oR3PedXygV13XPeX2fRkRfcCxaNMfvcoaub844%2FK3fm1qOKSbZHewqZQ7k21lKnt4p9EHB9ULorsFL6EhrvWLl7k7nd28CVpa8Bw1yFGeOgt%2BlJqZGAIt6qi8FK8ap4BmxLhkX2Tg9cKGDJDh2tPj7%2BhdGYcxfOhGX9r2%2FThcFzZOd0yoqtP%2BCPvkbKWcIz1uXCGISv021cvREx4%2B4fMN4UtDNs9ihIVGWJY6lJDy1ihirCXoDRHfuXJIerZ96YmKrNjiHfoAaiOer%2Btba64JWuyMqMHSzv7t79%2BZJQwvtuXvgY6pgFja4Ygw%2FDlk9Kl207PiadPgFtzIAjokQO0eIXykskKKI8SEuuh54qi%2BFNrXl12QfCUzhEJIA0eLI0b1XZJ0SYSbZDzDwMDoL739yzLUBo0ztkZD%2F8CmolSN1AKVm7CDVEki1R2eoBvN4YY96NM0gUUmNqjOHTthsGSX3qO7THRjFOuhzOspIrqBkNQawf3X1e6HWbzd0z6R2Jq%2FNM9p2ssEgjhrUCx&X-Amz-Signature=50aae5bee95e626484798b0fccbe12b98f80da45021ce28898e287c71de7882d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
