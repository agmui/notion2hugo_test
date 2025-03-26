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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5P24ZW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeqmuQ9n2Jeu0VmaOfJtIOzmX7aXprn5VEDZK65nVqAIgMuM2kWcYswUxWktPbqT%2BJvkZVQsfzki0qJRNEGUcFQIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDvBSSfRlAeSFQXMzCrcA87ZTPyjgz%2Bj65iTHYVhibY16nnJDIgzPSoES3eFH21kNFlnxUMTZVorzIcVtLlNmh1dEOncMihiQQdS5JlVGWptWCbB55COCVw1tYo6Urg8ENKM12NdiJltn9MSULdNKdkUPHDWWw41iTNd7YLmu6BgI6vmpM8UG4wnjfAK5zot3axrW84NEvL%2BTfJWwpME8qgyPKym7zJ0KrSFeQd1sUQP7AdYEDTHBafOxNB139pkAFmNYkVSgE2aQreB58C3oybglg6a0vwfIBbDqRRF5xABausTIv3XQU43V2fvSLelyc4W%2FlIiLgQ6Las%2BUGC5rnKBpBPAe41REKRMf5mKn11JNWOer8nd2zKbXJGSfcbXNoQlidtJmO6lDjEIs%2B7%2FLW3R83gUgX4mUg64p4KBt9fWL1ew8baBChG1sDnAkTkaJSqiJ%2F5B9QDp60Hl%2BA7EtUch6qw2Ej7WI9lcbfFPfREuvAttWtofcDJAObHdYdZAYvIi6ZFxX2IQ51nhBYi3ZGypfd7sVcjxcuTaZpZzHQGv5F5iBZ5WkPr2%2FhZoEe23b8BGKDgJW10K6B01SCJwNZhgnnCOVmogW8z7Rk6X8d2aWxe0aOWlK1bqcsX00ObKY3vk%2Bu2YRx4wlYoUMKTrjr8GOqUBMN3HaEE3YeZvFtVBFv4yUj4H29MVw7D35m62FRp6imJVc3JixvRNBagkiQ9Kt4SVHkV4tJKFi5odNL0QNaGQb7evaqw%2FhYFirxyNwrdmrKy9JarzU8nRFUXxnE0JQbzzMpS5Km0sqmJZ84AFdRBBkygyHp8lyo6zkC9GEiGjdLpZHkaUMJaLNS0azWAjEZky%2B8hqpHu0REu27XOvHlwD6rY0vDiY&X-Amz-Signature=6b90c837453e5e8c7206849e81685aa2219e468a92f28ef9433cb35c2818d537&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5P24ZW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeqmuQ9n2Jeu0VmaOfJtIOzmX7aXprn5VEDZK65nVqAIgMuM2kWcYswUxWktPbqT%2BJvkZVQsfzki0qJRNEGUcFQIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDvBSSfRlAeSFQXMzCrcA87ZTPyjgz%2Bj65iTHYVhibY16nnJDIgzPSoES3eFH21kNFlnxUMTZVorzIcVtLlNmh1dEOncMihiQQdS5JlVGWptWCbB55COCVw1tYo6Urg8ENKM12NdiJltn9MSULdNKdkUPHDWWw41iTNd7YLmu6BgI6vmpM8UG4wnjfAK5zot3axrW84NEvL%2BTfJWwpME8qgyPKym7zJ0KrSFeQd1sUQP7AdYEDTHBafOxNB139pkAFmNYkVSgE2aQreB58C3oybglg6a0vwfIBbDqRRF5xABausTIv3XQU43V2fvSLelyc4W%2FlIiLgQ6Las%2BUGC5rnKBpBPAe41REKRMf5mKn11JNWOer8nd2zKbXJGSfcbXNoQlidtJmO6lDjEIs%2B7%2FLW3R83gUgX4mUg64p4KBt9fWL1ew8baBChG1sDnAkTkaJSqiJ%2F5B9QDp60Hl%2BA7EtUch6qw2Ej7WI9lcbfFPfREuvAttWtofcDJAObHdYdZAYvIi6ZFxX2IQ51nhBYi3ZGypfd7sVcjxcuTaZpZzHQGv5F5iBZ5WkPr2%2FhZoEe23b8BGKDgJW10K6B01SCJwNZhgnnCOVmogW8z7Rk6X8d2aWxe0aOWlK1bqcsX00ObKY3vk%2Bu2YRx4wlYoUMKTrjr8GOqUBMN3HaEE3YeZvFtVBFv4yUj4H29MVw7D35m62FRp6imJVc3JixvRNBagkiQ9Kt4SVHkV4tJKFi5odNL0QNaGQb7evaqw%2FhYFirxyNwrdmrKy9JarzU8nRFUXxnE0JQbzzMpS5Km0sqmJZ84AFdRBBkygyHp8lyo6zkC9GEiGjdLpZHkaUMJaLNS0azWAjEZky%2B8hqpHu0REu27XOvHlwD6rY0vDiY&X-Amz-Signature=1119343c9e53b68dc2d7dc336f066e748f0a7be0207a50f26699dd9645c62d29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
