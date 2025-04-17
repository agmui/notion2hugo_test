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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNK4CYT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu5bWHrx6iYenYvVQg0TvhDbM1bbpKBbE7J%2B4P%2BW%2BlfwIgQD1aW777Xvm8vquaFmXCGLGaJQEYSOidP%2Bm1ZvrB75Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAlZ363N6SopXL1%2BUyrcAxAG%2F8bf7xRt%2FvtsugKh5oe5Xcrt0muUfZKQZ978RmGoeRViQcfkEo3vc8vi%2F%2BiS%2FDYg%2FuiVhH1K7bHHjCC1YjYBFkuB8xgj1jqS%2BkECwOkwSyGA68v5BeIdLn1B3NC8OdAX0dKfuMoPCnqWjwXuoE2ZbnEEY5hGOj5iy2LmEHnQR1KnlVSDo6CWgPLgCq7GpW%2Ffw19bzrW59%2F0TFFPnpwvGfDwz1GEUlXn3mKpNHf81aESLGaiD5GBmWkRBj4GAJlptangm3FyLtV3eJW5crsbIpXCZCIqx877pzcuNcmSIyPI%2F%2BaR8XUv8O4FluF4PmbSurS8rxaRaZI3rVzo7UFEKvDjeWyMMXTs1%2F3XR55mEe4OZd7XC72g1NW7ujuN%2BcEl8ULJMIHaN%2FcdtiM6MkwqkLCRQI3zuWidT2VzRKghw6dltRDtuIDiovxrn6DlGoyTfZi1MlwpJU0XJlVi2wxXKMifvRBlC4Rlz1aWZcp0AEl4z9FUzKk5OiwqqsSxIIRT%2BH8NjvFzM5X6sczZv930SWSOVrV3M1pyjv9hU8e19E5Fs4rgykH01YUwWMoRjALtLG8vcyrPPbzaB25nSJyJOCEbu2wCmTqBkiLcNvRhBcuElHOqtiw3BKVBPMJrKhMAGOqUBnBGpjguAreo9KV8337mHdGk9CVF7g4jhyPo6QE3oRaMekDPyCgKcol3FO6P6VVLbrOky5gUHshOk%2BTTa9pXKKc8d2HMiqbpCK8SLqme%2BWy9OWASEeGBe2taqqobx8ZmtmqBBjnaTn8XkkLJ4zoy0CswO2hHbEetFijva7Qfn7oA1wkcbLeYtwAgWrNUUvQ0Y6YXUPCifMovHaqlSgZYu41Iku29Y&X-Amz-Signature=7c3c4a8faf31b0ed7ec68d7d37d4f5d413f89947a0cce77951400ff671ae4e35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNK4CYT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu5bWHrx6iYenYvVQg0TvhDbM1bbpKBbE7J%2B4P%2BW%2BlfwIgQD1aW777Xvm8vquaFmXCGLGaJQEYSOidP%2Bm1ZvrB75Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAlZ363N6SopXL1%2BUyrcAxAG%2F8bf7xRt%2FvtsugKh5oe5Xcrt0muUfZKQZ978RmGoeRViQcfkEo3vc8vi%2F%2BiS%2FDYg%2FuiVhH1K7bHHjCC1YjYBFkuB8xgj1jqS%2BkECwOkwSyGA68v5BeIdLn1B3NC8OdAX0dKfuMoPCnqWjwXuoE2ZbnEEY5hGOj5iy2LmEHnQR1KnlVSDo6CWgPLgCq7GpW%2Ffw19bzrW59%2F0TFFPnpwvGfDwz1GEUlXn3mKpNHf81aESLGaiD5GBmWkRBj4GAJlptangm3FyLtV3eJW5crsbIpXCZCIqx877pzcuNcmSIyPI%2F%2BaR8XUv8O4FluF4PmbSurS8rxaRaZI3rVzo7UFEKvDjeWyMMXTs1%2F3XR55mEe4OZd7XC72g1NW7ujuN%2BcEl8ULJMIHaN%2FcdtiM6MkwqkLCRQI3zuWidT2VzRKghw6dltRDtuIDiovxrn6DlGoyTfZi1MlwpJU0XJlVi2wxXKMifvRBlC4Rlz1aWZcp0AEl4z9FUzKk5OiwqqsSxIIRT%2BH8NjvFzM5X6sczZv930SWSOVrV3M1pyjv9hU8e19E5Fs4rgykH01YUwWMoRjALtLG8vcyrPPbzaB25nSJyJOCEbu2wCmTqBkiLcNvRhBcuElHOqtiw3BKVBPMJrKhMAGOqUBnBGpjguAreo9KV8337mHdGk9CVF7g4jhyPo6QE3oRaMekDPyCgKcol3FO6P6VVLbrOky5gUHshOk%2BTTa9pXKKc8d2HMiqbpCK8SLqme%2BWy9OWASEeGBe2taqqobx8ZmtmqBBjnaTn8XkkLJ4zoy0CswO2hHbEetFijva7Qfn7oA1wkcbLeYtwAgWrNUUvQ0Y6YXUPCifMovHaqlSgZYu41Iku29Y&X-Amz-Signature=82ca49ff9b35aefd022335335959d1b683c030f2e6ffc2fa837c83343eb4fa85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
