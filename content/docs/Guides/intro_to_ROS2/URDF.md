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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHMCWQP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDpVoGA9imo2h0nbhiRB%2F%2Byb0RrzuArQahpsyYVYBIieAIgZpwlUtkR841Mtut4RAcYZ50pDQkQ2IRoDLPfm0Q4mGoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATil9I5N%2Ba%2Fe%2B0mAircAwg4mYCGjJo8kOT45KIoTypLYfJ%2BElPKfFQ%2Fkb2vkKiRXo7IY3msK7Oja3D0w68zHNZG83i8sCaY4tiSJ9cNIxCFjPQWQbFxVMCQNUk6NQGz0QR8XsVbGxbqnSibxauTY4uK%2FD9rPgUBYOyyl3zfo7dsPJd8J1dO%2FxWA3HdssYqq5NXMRLP2lbw%2BWHdUzYfnrJ6cH%2BAWXCOKmgepYSnRgSxRh88dnw8fTuGw6l5Vdw9QmwYinohnvEQCcJ9FgWoAAEQ4LWjjCvFqviS0VyEUaOCS4PY13T7O%2BwPqexLzWIZJLaaknZVnBWZ%2F7AaPjBKreIZZuMNCuq2rZiJvE0QFiAcPnpLwYROASGap3KaQuz8JAoAJCgKitcBrcfF5eqhgZo2iRkkMXyZySQdY90Sq%2FAJB00njLkX%2Fm2FxyrzV87cfeb%2FUdIEcldhwQPj5JN00%2FYVdOOlYRzrGpRNC4knURU%2BQRnFPbArDeVTDtFE7mn1mqNKxq25KYwj%2BmaUph9qdOIdJcsjzFXamMiS3hx7Q4hZQsD0HgzvnZf0%2BeYGlHhm5bV6dOA0zc8qvZTZW8NFMMAu%2FgMwQpQZWZTfBr1zpc5ZCYHE2UtHJ0BXOXmj78LQwwvBHBa3yOsz29MwuMK7j%2Fb4GOqUBGTBWtkYf0Jrze1diUFo1FmGfIjqIsTqzzzLlbFJSxquq32F0nmH%2BVmnVXDWSUgwCjZYR%2BUgcmRxNx3u46tV%2B9ka8fLA%2Bu7u7z2FJlajcc2QIPC%2BqWCzlFTBGBzNezUsT1C92ii0uYnDHO0ll9ROdXHFIzBNCrk1tegrNrHy3QUw98hKhTPjIPK1F7upegG5RbwibmQZidZ%2BfjaRljKCop7HWYtw4&X-Amz-Signature=0d7d8c05f7fb37eceffcf782e02d440f8dcd52fe8170600a7f76633fb9525dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHMCWQP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDpVoGA9imo2h0nbhiRB%2F%2Byb0RrzuArQahpsyYVYBIieAIgZpwlUtkR841Mtut4RAcYZ50pDQkQ2IRoDLPfm0Q4mGoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATil9I5N%2Ba%2Fe%2B0mAircAwg4mYCGjJo8kOT45KIoTypLYfJ%2BElPKfFQ%2Fkb2vkKiRXo7IY3msK7Oja3D0w68zHNZG83i8sCaY4tiSJ9cNIxCFjPQWQbFxVMCQNUk6NQGz0QR8XsVbGxbqnSibxauTY4uK%2FD9rPgUBYOyyl3zfo7dsPJd8J1dO%2FxWA3HdssYqq5NXMRLP2lbw%2BWHdUzYfnrJ6cH%2BAWXCOKmgepYSnRgSxRh88dnw8fTuGw6l5Vdw9QmwYinohnvEQCcJ9FgWoAAEQ4LWjjCvFqviS0VyEUaOCS4PY13T7O%2BwPqexLzWIZJLaaknZVnBWZ%2F7AaPjBKreIZZuMNCuq2rZiJvE0QFiAcPnpLwYROASGap3KaQuz8JAoAJCgKitcBrcfF5eqhgZo2iRkkMXyZySQdY90Sq%2FAJB00njLkX%2Fm2FxyrzV87cfeb%2FUdIEcldhwQPj5JN00%2FYVdOOlYRzrGpRNC4knURU%2BQRnFPbArDeVTDtFE7mn1mqNKxq25KYwj%2BmaUph9qdOIdJcsjzFXamMiS3hx7Q4hZQsD0HgzvnZf0%2BeYGlHhm5bV6dOA0zc8qvZTZW8NFMMAu%2FgMwQpQZWZTfBr1zpc5ZCYHE2UtHJ0BXOXmj78LQwwvBHBa3yOsz29MwuMK7j%2Fb4GOqUBGTBWtkYf0Jrze1diUFo1FmGfIjqIsTqzzzLlbFJSxquq32F0nmH%2BVmnVXDWSUgwCjZYR%2BUgcmRxNx3u46tV%2B9ka8fLA%2Bu7u7z2FJlajcc2QIPC%2BqWCzlFTBGBzNezUsT1C92ii0uYnDHO0ll9ROdXHFIzBNCrk1tegrNrHy3QUw98hKhTPjIPK1F7upegG5RbwibmQZidZ%2BfjaRljKCop7HWYtw4&X-Amz-Signature=58b6dec24a1a2016e4995369ee1b399108b75e806ac4a5537c2aec06691be4b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
