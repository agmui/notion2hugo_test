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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QRPEHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB95iW2iqflQtkRC6k0aZbtlawa57faf%2Ba4FCp9SO50xAiBnuN4iEw6Hnl4i9jjcsSkwj%2FJktbO2xRcwPlhHJu6toiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1c9E0nGDM7CLPOfKtwDUIJAlGLNhbQeB8VQzXihO7AfSaYg8jm%2F6ct4IBtjUH0u9WZC84IjBxVdABWiXm3cG2MnnS8NiC5sggNInbpWGJ7L%2FgUgN6JClY%2FJniC%2B4c%2FbNyQloXRBgPuVOJkxkGsxHp2uHU5HX9kILTZuIzCTxXVHEW%2BvR0k%2FezWc6TXB6S9NRZ8BQEA0P8DsesEWhB8xt1HA2HPHQwnBQh5ynCs9V9uHQ03Hyk18C3ubVG1hceiC2KH%2B7j%2BMh6MlGQQCPQhDFnasN2rlxrHay9%2B2a2TJfrI1x8q9f7TSGrKnpGmVUrRJ3BAPEfumS5kE62KGXtKZJZPTvQhNB%2BM7J%2BKPtwSWQOSI8sVJBPMpqkVfHHjWsFgSCWAGXC6jV9VhdJ9mCWv03lSkUs4WiVaYJdYebr9b9PabJYsLDnlZ6DYXlSACRvdX5yW%2Bxai5PDntVu0LvTfORj8ze94rpFmVqBG4flmiZvQkdvE1ZWq14nZMsx8mBVl1ZsMqjfYnKk1Fzjn36JGnup3%2FCXxirloPURu3ELkjo3bbwMuVKZNo3QOIclIwY0l0XbBP%2BP81q7x2TKoDY1OiurI9LvMZnEeFtNDB1kIBcY9LxLOres1tmaWHeNOYrcz%2BCOtLY3Jrj5Ni4e4wqJ2txAY6pgGr3gBAvZFFyybySMncsOChn1zIbYl9rnZHKhCTjKdpHvsGRQwuXZaQAZip0DxCquO2jjoNY8xokESe69ir%2BNXhimlYkzm1JfT2YXkNzrngUOzuU%2FGFJoMCginulCW%2FDu48eUu%2BYSrlwx2FakLP4lpRGAo3jRAg41AXksmK7nBvN70pqZmXLjTYSxOXEU%2FD6N4W83SKsbTscrlC%2BtvORj9Kt%2BT3zwHS&X-Amz-Signature=dfbef4fcd02cd14f0a9f090f9f4971b7334323ed1eb2e4578aac1023551536e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QRPEHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB95iW2iqflQtkRC6k0aZbtlawa57faf%2Ba4FCp9SO50xAiBnuN4iEw6Hnl4i9jjcsSkwj%2FJktbO2xRcwPlhHJu6toiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1c9E0nGDM7CLPOfKtwDUIJAlGLNhbQeB8VQzXihO7AfSaYg8jm%2F6ct4IBtjUH0u9WZC84IjBxVdABWiXm3cG2MnnS8NiC5sggNInbpWGJ7L%2FgUgN6JClY%2FJniC%2B4c%2FbNyQloXRBgPuVOJkxkGsxHp2uHU5HX9kILTZuIzCTxXVHEW%2BvR0k%2FezWc6TXB6S9NRZ8BQEA0P8DsesEWhB8xt1HA2HPHQwnBQh5ynCs9V9uHQ03Hyk18C3ubVG1hceiC2KH%2B7j%2BMh6MlGQQCPQhDFnasN2rlxrHay9%2B2a2TJfrI1x8q9f7TSGrKnpGmVUrRJ3BAPEfumS5kE62KGXtKZJZPTvQhNB%2BM7J%2BKPtwSWQOSI8sVJBPMpqkVfHHjWsFgSCWAGXC6jV9VhdJ9mCWv03lSkUs4WiVaYJdYebr9b9PabJYsLDnlZ6DYXlSACRvdX5yW%2Bxai5PDntVu0LvTfORj8ze94rpFmVqBG4flmiZvQkdvE1ZWq14nZMsx8mBVl1ZsMqjfYnKk1Fzjn36JGnup3%2FCXxirloPURu3ELkjo3bbwMuVKZNo3QOIclIwY0l0XbBP%2BP81q7x2TKoDY1OiurI9LvMZnEeFtNDB1kIBcY9LxLOres1tmaWHeNOYrcz%2BCOtLY3Jrj5Ni4e4wqJ2txAY6pgGr3gBAvZFFyybySMncsOChn1zIbYl9rnZHKhCTjKdpHvsGRQwuXZaQAZip0DxCquO2jjoNY8xokESe69ir%2BNXhimlYkzm1JfT2YXkNzrngUOzuU%2FGFJoMCginulCW%2FDu48eUu%2BYSrlwx2FakLP4lpRGAo3jRAg41AXksmK7nBvN70pqZmXLjTYSxOXEU%2FD6N4W83SKsbTscrlC%2BtvORj9Kt%2BT3zwHS&X-Amz-Signature=5335ed71096727bc5171396e75e9d902707b53dfc7dba4c94fa458938e27c007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
