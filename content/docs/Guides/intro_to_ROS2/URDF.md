---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXFMZIM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDrn8CV8%2FLD28Cq%2BkvP1sXC48Vy7BP1lnXDHCur%2F8IOPgIgBJ1zSHNEUZAVzl%2BToQ8%2Brz%2FG98bdmP9EHGeNDHbomhIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BJRStmZcG91k8c5CrcA0i16rYjoXT4c8WOR1rgFTDQKtNzIuzWKGgW2PX%2BnQK4eWcQXSWr1drTCq1Z14tRZGFnS3tIHklMiwoCUuXrT2hH%2FkGLWQsXzjl3weyPE7QIUmVPrQTO8OySCE6iedYII6lugedScsiBgOwa4L7zxSJrX8TXoZrh%2FR8MDcBmwxc5fLdsPf6i5cUJSALu0Fidb6QRPfHgvqCh91Nc41yOcPuV09mWmbwnVLnTQjy8bf2rGkNXmkZ2bk3eHCJoTDYu8Pi9URhaWFMj4c3T3qieieNHetaumh%2FAlSpN29CU1VOkIJy0mJZZ5oIuxyuhFw7QtWLmdv%2FwFG9GR%2Ba8ZHXFTX37zpYjF%2F5vQCRbFC54rPfsq0ZMqbe36EUIB9Xhjl0aetM21oLZZ6gxjxQdj7KjHvyErOXjZdCJ%2Fh%2F7pvhTzMNF6jO98Y0QU5votUq9dHeXVBGmynzXqNzJqelAjYJen01VGnNU55G6lDxIIDsjDb%2FCLpW2lNcPpjojpDem96M4A0Z4nl53CGiebXGRiaFM4hErL5TS2XLZ6QMbdo%2BHUWm08r8dhqC%2B8DPwZj5l8SpwwH9PLQT7hl1lpcl8HMFIJ8UVFojUO9Wnqbt%2FlM8jFW2mX%2FODvK5sXjsf7EqoMJSr2sQGOqUBVLsbr5krX2HgDvJWSbA2J5ehKPqwVqD7gZB%2FkLk9z7PepQBzZ6oZkHJRMPI8XVXDrZhESz7qzK2gHClRsvvEy4VlapcXdQlQd%2B7o5eIt7BhU%2FjF3BrzhLOykZpqlJvQu806LJorSRc03NZGisi%2B7Z3fdCpCjVGuDMf4w8WNcQA%2Bg8Q1e4HLTvRnV6tGbVNdlOzsTEPz5R1UIkuuIQg7b7U7pkTgF&X-Amz-Signature=e5f7baeac8b68a781abd54e3504cc35b022e1baf66754654846adf92fd406c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXFMZIM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDrn8CV8%2FLD28Cq%2BkvP1sXC48Vy7BP1lnXDHCur%2F8IOPgIgBJ1zSHNEUZAVzl%2BToQ8%2Brz%2FG98bdmP9EHGeNDHbomhIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BJRStmZcG91k8c5CrcA0i16rYjoXT4c8WOR1rgFTDQKtNzIuzWKGgW2PX%2BnQK4eWcQXSWr1drTCq1Z14tRZGFnS3tIHklMiwoCUuXrT2hH%2FkGLWQsXzjl3weyPE7QIUmVPrQTO8OySCE6iedYII6lugedScsiBgOwa4L7zxSJrX8TXoZrh%2FR8MDcBmwxc5fLdsPf6i5cUJSALu0Fidb6QRPfHgvqCh91Nc41yOcPuV09mWmbwnVLnTQjy8bf2rGkNXmkZ2bk3eHCJoTDYu8Pi9URhaWFMj4c3T3qieieNHetaumh%2FAlSpN29CU1VOkIJy0mJZZ5oIuxyuhFw7QtWLmdv%2FwFG9GR%2Ba8ZHXFTX37zpYjF%2F5vQCRbFC54rPfsq0ZMqbe36EUIB9Xhjl0aetM21oLZZ6gxjxQdj7KjHvyErOXjZdCJ%2Fh%2F7pvhTzMNF6jO98Y0QU5votUq9dHeXVBGmynzXqNzJqelAjYJen01VGnNU55G6lDxIIDsjDb%2FCLpW2lNcPpjojpDem96M4A0Z4nl53CGiebXGRiaFM4hErL5TS2XLZ6QMbdo%2BHUWm08r8dhqC%2B8DPwZj5l8SpwwH9PLQT7hl1lpcl8HMFIJ8UVFojUO9Wnqbt%2FlM8jFW2mX%2FODvK5sXjsf7EqoMJSr2sQGOqUBVLsbr5krX2HgDvJWSbA2J5ehKPqwVqD7gZB%2FkLk9z7PepQBzZ6oZkHJRMPI8XVXDrZhESz7qzK2gHClRsvvEy4VlapcXdQlQd%2B7o5eIt7BhU%2FjF3BrzhLOykZpqlJvQu806LJorSRc03NZGisi%2B7Z3fdCpCjVGuDMf4w8WNcQA%2Bg8Q1e4HLTvRnV6tGbVNdlOzsTEPz5R1UIkuuIQg7b7U7pkTgF&X-Amz-Signature=640e190c853c45dd1a744bc31b5c6b77ded7f0358d5955c4187af3ff40b4bdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
