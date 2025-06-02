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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=fc1b2b148bf3fce05ca52d34a88ce3ec2c9c52fc16f61463ea350532b224eefc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=c6fa16225cdf515592ceec16fa94fe41a355e7c403608a1de8e6472ca0dd0ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
