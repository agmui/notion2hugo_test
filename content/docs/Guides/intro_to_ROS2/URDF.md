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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOVYKJY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICELASadoprwOntKsxm6qfg8XKGKE%2FZ1R3PV0NzXMSG8AiAURHvupvXYPMFN%2F%2FjP4xJcZJCNgoinEjGLJ3%2BxAj%2BjdSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiDw8rOgICpl2TowYKtwDO13whQoA%2BGDqCJ4ofnYYPR98ChtX%2FSVf%2B%2FvJpjHUqZEo9tRi%2B2vPMEFdBelJu6hPuWYH2yGJvN5qgQyo0LT8schAOg2y7fuFLoHjBfHNOmSjfWhcWeXo5mtQvp40mB7OQnZnAyxH5Lrng%2FgmCrlVErW%2B%2FbjROQ7zUfleW%2FkeK6aiZvp82ouwbJ1bq0PZZbeBeQ3sm%2FROqy4FFZ7wxzJ3qC9T1gZuMu6drVEC9zoiJZgS4d%2Fl4PlpQ4g03mulyDJidnQp6gSaRp0IsCLRvOYSrZI6qWH3JGb6KRJlgx4ERTHZRUDjlCVVeAYRgHRqr5mwLq1WnRal%2Fok2bzEBw0aseE43lqLDg89FEqQlvf%2Fq4Uy0iInbDkJVrmlkLqTN6zh3hTXso03XqGGN9SuUkfCVcN5HFs0qgOWp7F5VWBPs5dby1hgeYsQua6xTkBZXUVpZT0jzGi0EB4SoTu6%2BVAZu6%2Fi3h8RuUkX2X85hbPaWUoeS9N4Bzneb5EzQLBXnpS8hLJN6Ii7kTU7%2BVrl%2F1%2B5KprroYu3Yu4irhv4S8CgTuLDJ%2BZVRupuiuHIq4YM2J1kj47smDi5X0Va%2BgIoCYN8x%2FztHy10JqrFojCHY4QVDqS5nf%2Bgfl2b5cBS8UXsw05WMvgY6pgENn6%2BrH0fG6ptu8sXyltkkhHC48MwcMNH80yNxFWvJVwIkHhLjUVK8ITrhkPDW%2FU0E%2BGQyEPbrwkRHZ%2BhPB1re7w8ckrDK4OyEwPWhEKM1m6lvq4P8pAwWhbmlhB%2FSPfwnnx7ORREcRO0rwZr0Rrplztlfq0YqAnNWBIswQ3pZJ3ApA7V%2BpKMuCIbsI%2FpV8brx0TO5QHbKYqN24fd7LpJcAl9n9jbc&X-Amz-Signature=cd96883d6158c090b8b4cc8077221479d77e2a24fb48ed727060cb18ac5381b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOVYKJY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICELASadoprwOntKsxm6qfg8XKGKE%2FZ1R3PV0NzXMSG8AiAURHvupvXYPMFN%2F%2FjP4xJcZJCNgoinEjGLJ3%2BxAj%2BjdSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiDw8rOgICpl2TowYKtwDO13whQoA%2BGDqCJ4ofnYYPR98ChtX%2FSVf%2B%2FvJpjHUqZEo9tRi%2B2vPMEFdBelJu6hPuWYH2yGJvN5qgQyo0LT8schAOg2y7fuFLoHjBfHNOmSjfWhcWeXo5mtQvp40mB7OQnZnAyxH5Lrng%2FgmCrlVErW%2B%2FbjROQ7zUfleW%2FkeK6aiZvp82ouwbJ1bq0PZZbeBeQ3sm%2FROqy4FFZ7wxzJ3qC9T1gZuMu6drVEC9zoiJZgS4d%2Fl4PlpQ4g03mulyDJidnQp6gSaRp0IsCLRvOYSrZI6qWH3JGb6KRJlgx4ERTHZRUDjlCVVeAYRgHRqr5mwLq1WnRal%2Fok2bzEBw0aseE43lqLDg89FEqQlvf%2Fq4Uy0iInbDkJVrmlkLqTN6zh3hTXso03XqGGN9SuUkfCVcN5HFs0qgOWp7F5VWBPs5dby1hgeYsQua6xTkBZXUVpZT0jzGi0EB4SoTu6%2BVAZu6%2Fi3h8RuUkX2X85hbPaWUoeS9N4Bzneb5EzQLBXnpS8hLJN6Ii7kTU7%2BVrl%2F1%2B5KprroYu3Yu4irhv4S8CgTuLDJ%2BZVRupuiuHIq4YM2J1kj47smDi5X0Va%2BgIoCYN8x%2FztHy10JqrFojCHY4QVDqS5nf%2Bgfl2b5cBS8UXsw05WMvgY6pgENn6%2BrH0fG6ptu8sXyltkkhHC48MwcMNH80yNxFWvJVwIkHhLjUVK8ITrhkPDW%2FU0E%2BGQyEPbrwkRHZ%2BhPB1re7w8ckrDK4OyEwPWhEKM1m6lvq4P8pAwWhbmlhB%2FSPfwnnx7ORREcRO0rwZr0Rrplztlfq0YqAnNWBIswQ3pZJ3ApA7V%2BpKMuCIbsI%2FpV8brx0TO5QHbKYqN24fd7LpJcAl9n9jbc&X-Amz-Signature=7583386303bb3603ddf16b8f0e903865b2a19c7afa267725a7e1f56519dcec55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
