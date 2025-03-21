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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7MPDZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDlE8xf0n9rW3V6vdLOxYir7VIo%2BjzbDnL64QR6ajBcQgIhANDcpKxjT%2FcgLN3eq6Xu8SKokC3V1efiYslT0X655s56KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMSGKV8GJ1AV17IHEq3ANvTpJUl0JyRA8nG0Z7UCJQS3qZUvDFDOvMDhdgky6qNvLb9LwaA8t%2FVbUFn82fV4HKaIa8pAHA5%2F5wGMJV1BHe1EEsDR%2BQhXXIvWsgX2Xz%2FQjB%2BisWR9l6tc5eXxM0IzJ%2F%2Fcdh2IX0ngEl%2B0PsYYQBX2joQbZdEK9J2IDJxSxvUBXDsKCQQVdVix9Y%2BQ0hp2gde4mIDTgNUOBG%2FUfCXgIWGdEF8Fb5GhrjMZoT63CCEjDPGPBb%2BVVDuRwzFdJk%2FoNoZoaoyrVomRzmu7HnA8T0m1IQkkE7bvAar%2FQ%2BmY9ikJ9qtrLUso1hCJOqT4m60%2FGUbg6rHrwwlBDHFBC93HCi1zQIPfhGEkJh0S%2FjKYouUcoiKnyZh5sa0LYOfe3gvzACwcrlxu6xnUIHX5LJelpzxRVt6GbaGKO9pd69wiPyThxr67ZaPbVIdlh3PB987PLr0KwgEBxxmc%2B%2B%2FdBhui%2BkP%2B%2B5UKcKrZckhncsW7kGrH0qAQB6GL5oceABqF8rMYXE09LCWKxfvSxwB5%2Ba5dlslkL63XrcBF657CbzWs9dD2Wq5%2F%2Fp09%2BTqzCUKGlzVIVMbK6Zz40dtImHulbFaYToGcZ3ddx8eyTlPRrniCz5IeYMjPE1Th%2BhdFjTCTCCm%2Fa%2BBjqkAXVwY5NwxQ18YvzGEKkO1S4pYlVOSfIKY5Wj2KHNqLDIvH%2F2bLUk5zQ1jxvCsv%2B4MYCx849qPAlOWd3FmXPUJcEKAuHRw2a%2BCXu3y%2F8k1wWlhPWDYWoltQ2WsXD6UWddivcU8WVCseDx1UnHQvd9iUsZ7V%2Fazo6RWvUtTLqe7nKZI4sm69ELygpeUuPHrkE6xQRVc7aO6BlsLrfS9s4we4GpGsLG&X-Amz-Signature=83cad90dd1878133b74780cc76bbe0e2f247f61414772b130d3dfa10c26cfb96&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7MPDZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDlE8xf0n9rW3V6vdLOxYir7VIo%2BjzbDnL64QR6ajBcQgIhANDcpKxjT%2FcgLN3eq6Xu8SKokC3V1efiYslT0X655s56KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMSGKV8GJ1AV17IHEq3ANvTpJUl0JyRA8nG0Z7UCJQS3qZUvDFDOvMDhdgky6qNvLb9LwaA8t%2FVbUFn82fV4HKaIa8pAHA5%2F5wGMJV1BHe1EEsDR%2BQhXXIvWsgX2Xz%2FQjB%2BisWR9l6tc5eXxM0IzJ%2F%2Fcdh2IX0ngEl%2B0PsYYQBX2joQbZdEK9J2IDJxSxvUBXDsKCQQVdVix9Y%2BQ0hp2gde4mIDTgNUOBG%2FUfCXgIWGdEF8Fb5GhrjMZoT63CCEjDPGPBb%2BVVDuRwzFdJk%2FoNoZoaoyrVomRzmu7HnA8T0m1IQkkE7bvAar%2FQ%2BmY9ikJ9qtrLUso1hCJOqT4m60%2FGUbg6rHrwwlBDHFBC93HCi1zQIPfhGEkJh0S%2FjKYouUcoiKnyZh5sa0LYOfe3gvzACwcrlxu6xnUIHX5LJelpzxRVt6GbaGKO9pd69wiPyThxr67ZaPbVIdlh3PB987PLr0KwgEBxxmc%2B%2B%2FdBhui%2BkP%2B%2B5UKcKrZckhncsW7kGrH0qAQB6GL5oceABqF8rMYXE09LCWKxfvSxwB5%2Ba5dlslkL63XrcBF657CbzWs9dD2Wq5%2F%2Fp09%2BTqzCUKGlzVIVMbK6Zz40dtImHulbFaYToGcZ3ddx8eyTlPRrniCz5IeYMjPE1Th%2BhdFjTCTCCm%2Fa%2BBjqkAXVwY5NwxQ18YvzGEKkO1S4pYlVOSfIKY5Wj2KHNqLDIvH%2F2bLUk5zQ1jxvCsv%2B4MYCx849qPAlOWd3FmXPUJcEKAuHRw2a%2BCXu3y%2F8k1wWlhPWDYWoltQ2WsXD6UWddivcU8WVCseDx1UnHQvd9iUsZ7V%2Fazo6RWvUtTLqe7nKZI4sm69ELygpeUuPHrkE6xQRVc7aO6BlsLrfS9s4we4GpGsLG&X-Amz-Signature=449165bdc6b0080938f0182cee5c265fba695675501409ec0e0329e703c074fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
