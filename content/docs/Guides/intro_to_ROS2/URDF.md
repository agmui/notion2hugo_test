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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6QEE4S%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIBLoE6%2BInyx6eify1qAPzo27smsj6k2L2MNEpqBXrTnRAiAimSQaW1LcoCzRkLY99gQ9G4oY5K0dWMJpoMUYFkamMir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJadr%2FBpjxT98qFOeKtwDAQUDzma07SlpuAgLEQ6zn4I%2BsxdbSQEbUXCNMqL6p2SPVzM82dhKlzfBfN6AP1MYIWuWpJz7dwLDKNsDO4b7Xlx6863IvdIGUN08q7OM2L9akVSMHSHmFTtO3bplnHTGO4INGqdDekjBWcC67HU89%2B0Wo3GTuVe9xJWVH24pRi2mJsR1olJf043VMKZNk6QAwU6WPHg3nadmfXupnMs%2BTmdGNpwMd3CsLfYjR%2BpjnYABDHA2ne2Ujj1nwgzFFh62DOXNSxAtQn8CAeu3i6R3ZJGpKfNoNqRhPrBDnQEL%2FCuwrjRVfOHJP7ZNe3Fh2X8uaby4RxxEM1XBeg6D58Il%2F6Xlmyq%2FVslHrCdOJF5XFFUgSsyTIHyyqqg%2FOR%2FyzUXal06Kg7TErSan4T5Z6k3ykHtjuuj9%2BVRQecS3u9dWKXZpL77JZH65uoHoEi4nn%2BUNsAmUkDxady8quwKqErbV%2F6hs1A93JuauEASMa2G5nZncrTlUW0c7S8aBFyFuxQOfOvDkFqm%2B1SuKGdEO8zHHxeXt8w5dGf%2FEGd7g5gf4IEAbnZLQXc4LG2nZcB5wHpV0ZKICxmNWYWIOITzsos5KQjrT04H1z7oTME7Qm35eSXxGon4%2FPLss1CXFVMMwuI2CvgY6pgGlv%2F%2BBPazM3vegExcfEoUc3uC4ww%2FAc770hSygzz2PIQ%2FzG1vt7Lrna5QmrVqNckC5C5kuIpovzwfctdx1ObEWh4Wdg4a23gvzTQaIU600JTIReC1SErxcsYkp1SEQtdjU1ySx1hM5QccS%2FpBg2D76el4zh%2BPJhxr2K3XjlU%2Fsr6EB9cwsO2Vps9XwDC476hD3XND3V7jf9s7XA4ZqB9FeY4NEO2ij&X-Amz-Signature=01da8da3f1328ce90a1b8a62d9298941f66efe6257a2167fece8fdcf709b17f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6QEE4S%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIBLoE6%2BInyx6eify1qAPzo27smsj6k2L2MNEpqBXrTnRAiAimSQaW1LcoCzRkLY99gQ9G4oY5K0dWMJpoMUYFkamMir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJadr%2FBpjxT98qFOeKtwDAQUDzma07SlpuAgLEQ6zn4I%2BsxdbSQEbUXCNMqL6p2SPVzM82dhKlzfBfN6AP1MYIWuWpJz7dwLDKNsDO4b7Xlx6863IvdIGUN08q7OM2L9akVSMHSHmFTtO3bplnHTGO4INGqdDekjBWcC67HU89%2B0Wo3GTuVe9xJWVH24pRi2mJsR1olJf043VMKZNk6QAwU6WPHg3nadmfXupnMs%2BTmdGNpwMd3CsLfYjR%2BpjnYABDHA2ne2Ujj1nwgzFFh62DOXNSxAtQn8CAeu3i6R3ZJGpKfNoNqRhPrBDnQEL%2FCuwrjRVfOHJP7ZNe3Fh2X8uaby4RxxEM1XBeg6D58Il%2F6Xlmyq%2FVslHrCdOJF5XFFUgSsyTIHyyqqg%2FOR%2FyzUXal06Kg7TErSan4T5Z6k3ykHtjuuj9%2BVRQecS3u9dWKXZpL77JZH65uoHoEi4nn%2BUNsAmUkDxady8quwKqErbV%2F6hs1A93JuauEASMa2G5nZncrTlUW0c7S8aBFyFuxQOfOvDkFqm%2B1SuKGdEO8zHHxeXt8w5dGf%2FEGd7g5gf4IEAbnZLQXc4LG2nZcB5wHpV0ZKICxmNWYWIOITzsos5KQjrT04H1z7oTME7Qm35eSXxGon4%2FPLss1CXFVMMwuI2CvgY6pgGlv%2F%2BBPazM3vegExcfEoUc3uC4ww%2FAc770hSygzz2PIQ%2FzG1vt7Lrna5QmrVqNckC5C5kuIpovzwfctdx1ObEWh4Wdg4a23gvzTQaIU600JTIReC1SErxcsYkp1SEQtdjU1ySx1hM5QccS%2FpBg2D76el4zh%2BPJhxr2K3XjlU%2Fsr6EB9cwsO2Vps9XwDC476hD3XND3V7jf9s7XA4ZqB9FeY4NEO2ij&X-Amz-Signature=4af33b451483b2c2d2978969cdee3c665672b186107fed9406b775e9e7fbcf20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
