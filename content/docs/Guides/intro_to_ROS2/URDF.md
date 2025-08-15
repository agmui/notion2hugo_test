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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRLRKIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFPXm%2BJDR3B3zY2p0M5oGJJLSFV3eON5ZhLzKhCdhjD9AiEA8Jm2XpH4oYjS%2B2z5blMcPkc7PsoUWeIUKWNWuP%2BvJlMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHDnlm4pp5OV7TZLCyrcA1augYM7NVbYCqPUdQ%2FeYnGnb%2FbLT57BspAbHlQlPuD6XF7D6J42zzXlYeBXn6x6o9jqRpfXbKPGt5HS9qScX6aKxvk4oYsWdjrBuUSpsrQgoXsl1SyOgU2Q%2FPNlLZu9fmkqVj6EyMT3oF1Hht2ISMow9RR0ORVbyadod3gCMkXSPWVdE%2BpWJ6ek%2FGSzCjZkYYVod9c09AEkqWWE%2FHTBzmsrf5xGKSAxjlol0q8sYR%2BwjV1H5zcT6ZfzIoMCOVmqT2kzgjqPc3t6VB07ixwEF%2FDLT%2Fbt%2FLX0G2WyS4Rq02c0bIzTdXQ7OqWJjX0MrjudQ4MFp5X8oIbviIisSHXWl2s06DQN%2F%2Fs86X4n5nSDwO4lm95vGrEzdRQq1UmsbN%2FbqLu6i4WGvRsSJ40wPHN4INTYj%2FmbPXBEG2qzM2gtl73%2FlNZIY2CaTL66B9EvrLUSDLZEa61TTyNxToiqOAuuQEWeVt3ZFjHXTVTj9DJe24e3x4QxuTNtkwBEL6sE8kYP4yw7ke23dY%2B4EukAG83AWCNKKF7B%2BJNqSsTPwG1Br2lJGzim%2B65Twf%2FNs1yDHyq29AgoMwRdnoy17ZlC%2F6GxNpWgMDY%2FDRI%2BAnAqs%2FffzVIdHX0XdtAJgXMUOZw6MJ%2Bj%2BsQGOqUBWjUR9CZD2GV0vwJlGnKblaBmRGbwG5p9qQjes4e6owVd61kD0kPjtvz02HOhVkwR%2BbTxSn0H0x4%2FSNIkmtliju7%2FmshB7%2BgiC9x04aD9ol%2B6LaiTLkN3LHTe2UFvXO9IshpRJNZootr3LRbSwEC8BJOersS9SG%2BtD95NyjL0%2BHXIcVDt213RphbWeTOSAUsunm0l20Vwzyxl42S3XZqbF%2F2dWSjv&X-Amz-Signature=7020f4a6f28253582eec0463fda433ea35a8104efe608f4ae55706e8feb57001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRLRKIN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFPXm%2BJDR3B3zY2p0M5oGJJLSFV3eON5ZhLzKhCdhjD9AiEA8Jm2XpH4oYjS%2B2z5blMcPkc7PsoUWeIUKWNWuP%2BvJlMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHDnlm4pp5OV7TZLCyrcA1augYM7NVbYCqPUdQ%2FeYnGnb%2FbLT57BspAbHlQlPuD6XF7D6J42zzXlYeBXn6x6o9jqRpfXbKPGt5HS9qScX6aKxvk4oYsWdjrBuUSpsrQgoXsl1SyOgU2Q%2FPNlLZu9fmkqVj6EyMT3oF1Hht2ISMow9RR0ORVbyadod3gCMkXSPWVdE%2BpWJ6ek%2FGSzCjZkYYVod9c09AEkqWWE%2FHTBzmsrf5xGKSAxjlol0q8sYR%2BwjV1H5zcT6ZfzIoMCOVmqT2kzgjqPc3t6VB07ixwEF%2FDLT%2Fbt%2FLX0G2WyS4Rq02c0bIzTdXQ7OqWJjX0MrjudQ4MFp5X8oIbviIisSHXWl2s06DQN%2F%2Fs86X4n5nSDwO4lm95vGrEzdRQq1UmsbN%2FbqLu6i4WGvRsSJ40wPHN4INTYj%2FmbPXBEG2qzM2gtl73%2FlNZIY2CaTL66B9EvrLUSDLZEa61TTyNxToiqOAuuQEWeVt3ZFjHXTVTj9DJe24e3x4QxuTNtkwBEL6sE8kYP4yw7ke23dY%2B4EukAG83AWCNKKF7B%2BJNqSsTPwG1Br2lJGzim%2B65Twf%2FNs1yDHyq29AgoMwRdnoy17ZlC%2F6GxNpWgMDY%2FDRI%2BAnAqs%2FffzVIdHX0XdtAJgXMUOZw6MJ%2Bj%2BsQGOqUBWjUR9CZD2GV0vwJlGnKblaBmRGbwG5p9qQjes4e6owVd61kD0kPjtvz02HOhVkwR%2BbTxSn0H0x4%2FSNIkmtliju7%2FmshB7%2BgiC9x04aD9ol%2B6LaiTLkN3LHTe2UFvXO9IshpRJNZootr3LRbSwEC8BJOersS9SG%2BtD95NyjL0%2BHXIcVDt213RphbWeTOSAUsunm0l20Vwzyxl42S3XZqbF%2F2dWSjv&X-Amz-Signature=fb1f404e8b7a0710a19abced5a1a81b5188a227b981331b497bb3a21a3caa951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
