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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDJURGW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhEKMQ57NE7w1MxWUuLCfN3gfGnYFZOUly3G33M%2Bx6mAiA4K9lNucCak3PnOoqoQzix%2B3RmAOcOM8V3FhWdz%2FoogyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr6eC2XlNE7jajwGEKtwDpP0kxii%2Fpfm7UdFRYqdgjIVHI7f2Q6zdb4kLBWPYO5yfHzAcLyzTeZHOvBPlJ%2FhR7ztFy3Jts%2F7YMHvgM8vgks5X63zLWgfVs6D8GDq0YxJ%2BWjE9wKjlKmMmCwqH9s5ZiIafaremHzf08tDvaJl%2BthN7Z0OeliNB5lhmn7JpUh%2B%2Bu1fUcuA7dqosmIgbtYTNYPg13%2FxB8ITINBBANIbJ1UedPN1bFLkwnF8X%2B5I4cSwLokKKH8pPvgRsp0arQPSdHubniAhujkaMjDVpeQ1gsLKNmx%2FsP8pWaImaT2qehd3IxzUwIhUFFkixR%2FmB3gaWFPmcCjkMmFpe5MDaFCC4oXlLRmevL5RFjmzgF4Pt08s6vGE2dw3zOzu%2Bn%2FQGqKBFao4iIVWl62kBouH2UsnLN6J7AFe5ZoI%2BZBG9nqbrmGzaUlTm2%2FcGFPwnU6YuZnwtMjMmRVfWjCIPe9EbM%2BVTit1Oof8kL9MVBXKNRuAGJfjWw4WIkUrfW75MhLMsuM5FYl7z0wrh52Sbmyk25%2BilnElIRNGe6YgQbyh%2F3I9tuZwwG6vb8VzZlGtKuDbOrguX4mtLIOXBaebk0fLo1HNe9y00ynaTsKbSeXloJGOkZFGGbImY4uUxIex7R%2BAw5NTMvgY6pgGdMrvJ4wPqZ3WgnBLTlUkGQX3uuhOJ0dgHmMGOZpIuKAAXlqt8JckmJ9KbfsM6r2jRRG2JPd1cBAqfyvKmxhG9DnxSwhyANxgOEgcMtbHkUo4av9R78ymCKG3eJH2erp9Wu67e11yAhykMgQj3fwoa9p%2FB8F%2BT3%2BPJWrESPVGcBrleInrcpfyDTIf4ub0lR%2BEhFaKLjdxRT09snpQ0A2QlC7woxOIG&X-Amz-Signature=ca4aec342b7a906446beb8ac1447d4a8960057eb280189ff5cf3eac57961d97a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDJURGW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhEKMQ57NE7w1MxWUuLCfN3gfGnYFZOUly3G33M%2Bx6mAiA4K9lNucCak3PnOoqoQzix%2B3RmAOcOM8V3FhWdz%2FoogyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr6eC2XlNE7jajwGEKtwDpP0kxii%2Fpfm7UdFRYqdgjIVHI7f2Q6zdb4kLBWPYO5yfHzAcLyzTeZHOvBPlJ%2FhR7ztFy3Jts%2F7YMHvgM8vgks5X63zLWgfVs6D8GDq0YxJ%2BWjE9wKjlKmMmCwqH9s5ZiIafaremHzf08tDvaJl%2BthN7Z0OeliNB5lhmn7JpUh%2B%2Bu1fUcuA7dqosmIgbtYTNYPg13%2FxB8ITINBBANIbJ1UedPN1bFLkwnF8X%2B5I4cSwLokKKH8pPvgRsp0arQPSdHubniAhujkaMjDVpeQ1gsLKNmx%2FsP8pWaImaT2qehd3IxzUwIhUFFkixR%2FmB3gaWFPmcCjkMmFpe5MDaFCC4oXlLRmevL5RFjmzgF4Pt08s6vGE2dw3zOzu%2Bn%2FQGqKBFao4iIVWl62kBouH2UsnLN6J7AFe5ZoI%2BZBG9nqbrmGzaUlTm2%2FcGFPwnU6YuZnwtMjMmRVfWjCIPe9EbM%2BVTit1Oof8kL9MVBXKNRuAGJfjWw4WIkUrfW75MhLMsuM5FYl7z0wrh52Sbmyk25%2BilnElIRNGe6YgQbyh%2F3I9tuZwwG6vb8VzZlGtKuDbOrguX4mtLIOXBaebk0fLo1HNe9y00ynaTsKbSeXloJGOkZFGGbImY4uUxIex7R%2BAw5NTMvgY6pgGdMrvJ4wPqZ3WgnBLTlUkGQX3uuhOJ0dgHmMGOZpIuKAAXlqt8JckmJ9KbfsM6r2jRRG2JPd1cBAqfyvKmxhG9DnxSwhyANxgOEgcMtbHkUo4av9R78ymCKG3eJH2erp9Wu67e11yAhykMgQj3fwoa9p%2FB8F%2BT3%2BPJWrESPVGcBrleInrcpfyDTIf4ub0lR%2BEhFaKLjdxRT09snpQ0A2QlC7woxOIG&X-Amz-Signature=ceba33516b7af0a74c94e1c7ec521d3a8aa0fb1a24b5529473884015dd6f33d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
