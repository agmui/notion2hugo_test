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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU44YUXO%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ%2B1O8GXhN4y2I1rShrzyP1lTOK2MWPnqltOkW8fecmAiAQSgWwVJ4UeIgVvGUuyq%2BmnrGV75OZik3bISF0j%2BbLbiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMazS5NCFGc%2Bx6v3chKtwDoSBUd9ixpgVKRy%2B64RcNqaT1T8eq3xXuFss%2F2x9PIZKynRTFCuFRgpEuPLm9dQmtnaPTkklekv%2BxTnprEZrSHf7KtBHA1%2FZ2vQpt8ew6dCgOgB35zzF%2Fu41N%2BVg4cAxiEw3YANpUMqnigz%2BYI5v9BHKpcGvEKm9%2Bfrlipl06O0LIFNNP5OC2bFGhmM1PeNFs%2FUZ9AgYxKlLbci5eSW8r5d%2BKvE0UYj%2BJ5tE6OEpQcYjtiE%2FXtMGfhucHKul8GJWwsJpSlRgOj%2F3MEXZmVVh9%2Bqrfw0MyLVvu4KncEjjw4Osp6x2B0H%2B9qw6GOo2jCRSkqvX7G9A%2BtoCO%2FqU1YJMC2iP6QOZBkIZgXzD%2BkuEw61u6Md0uHZOWsayTDExB4dmVGS%2FQXNqHehka3%2Fg9KkIvUd%2FmUmmgK0wSWV9XsAXY9%2F6gqHliV57qeUQ%2FeKwmWwbZ1q8VebhtX1AQO02n%2F0UV8AB5d%2BagQZKmaZkrx6pVsfd1W7z5mNgNoPOBrkjf8%2FeB5715PtXoJstwLmUpnYOqHoET0I6qDJWHG6Om3e4F9KLXcomdApzvJ2n9Bw7np5WuFcdTTFDpZpXdsyosRblwEzl0Gn5AWJtDaZY9uP6VjitsGasaTmpR4T0z6Xgwz5%2F7wwY6pgEKHiieiaeKn%2BiT%2BIVF0T0YYxtm28GuKfHJSAXTXOUcs4YAyO3yC%2BibwbEaZmCE%2BNbIi8R2TWhnQKrGgGrLPzb0h%2BbbjOdDH7xGG%2FST65%2FB0CeF2R9DUiH26MofJQvW8LoUr%2FIHbVKqsQOHBOxQTZodLw%2BfRBIw5klM6n%2FS4gHc3bMQCmibSWsnm%2BtjTErA4sb9v1yxbNGbEBmAyUG0fQV%2F0HSIlb%2F9&X-Amz-Signature=1675bf318516db2cda83f9a9f94b1028209b2289a22937f4aa962eab3d0ddb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU44YUXO%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ%2B1O8GXhN4y2I1rShrzyP1lTOK2MWPnqltOkW8fecmAiAQSgWwVJ4UeIgVvGUuyq%2BmnrGV75OZik3bISF0j%2BbLbiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMazS5NCFGc%2Bx6v3chKtwDoSBUd9ixpgVKRy%2B64RcNqaT1T8eq3xXuFss%2F2x9PIZKynRTFCuFRgpEuPLm9dQmtnaPTkklekv%2BxTnprEZrSHf7KtBHA1%2FZ2vQpt8ew6dCgOgB35zzF%2Fu41N%2BVg4cAxiEw3YANpUMqnigz%2BYI5v9BHKpcGvEKm9%2Bfrlipl06O0LIFNNP5OC2bFGhmM1PeNFs%2FUZ9AgYxKlLbci5eSW8r5d%2BKvE0UYj%2BJ5tE6OEpQcYjtiE%2FXtMGfhucHKul8GJWwsJpSlRgOj%2F3MEXZmVVh9%2Bqrfw0MyLVvu4KncEjjw4Osp6x2B0H%2B9qw6GOo2jCRSkqvX7G9A%2BtoCO%2FqU1YJMC2iP6QOZBkIZgXzD%2BkuEw61u6Md0uHZOWsayTDExB4dmVGS%2FQXNqHehka3%2Fg9KkIvUd%2FmUmmgK0wSWV9XsAXY9%2F6gqHliV57qeUQ%2FeKwmWwbZ1q8VebhtX1AQO02n%2F0UV8AB5d%2BagQZKmaZkrx6pVsfd1W7z5mNgNoPOBrkjf8%2FeB5715PtXoJstwLmUpnYOqHoET0I6qDJWHG6Om3e4F9KLXcomdApzvJ2n9Bw7np5WuFcdTTFDpZpXdsyosRblwEzl0Gn5AWJtDaZY9uP6VjitsGasaTmpR4T0z6Xgwz5%2F7wwY6pgEKHiieiaeKn%2BiT%2BIVF0T0YYxtm28GuKfHJSAXTXOUcs4YAyO3yC%2BibwbEaZmCE%2BNbIi8R2TWhnQKrGgGrLPzb0h%2BbbjOdDH7xGG%2FST65%2FB0CeF2R9DUiH26MofJQvW8LoUr%2FIHbVKqsQOHBOxQTZodLw%2BfRBIw5klM6n%2FS4gHc3bMQCmibSWsnm%2BtjTErA4sb9v1yxbNGbEBmAyUG0fQV%2F0HSIlb%2F9&X-Amz-Signature=80da4bb8d746d9c790f31e39c618be46489f91565d4b15eab971f8726368521a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
