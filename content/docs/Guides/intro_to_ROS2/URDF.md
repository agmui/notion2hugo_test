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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4TFEB4Z%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwlC%2Br1u9iBW9rsMSFwTGFUCIrTgNpmcnUM1j%2FVbawQIgTNX9B9VfUAFkI59T2XnJxy3PnOO4xr1AiptfzZ3dc6Mq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOgs13SivdMFwvK39CrcA5pGLBNpIWWcYDa8Cu0Kuuo3VYC9UFBP14K9FWOc%2By0RrfXQGVnulaWfa1xMUqPy5Ap1oF4uvLeF0gewCURk54Xk5WfCceyyyZcccSCVhl7%2Bhn2dk6TLw0XGl%2BlLfGiRQOtmWxz%2Fa1NLaEfNC1KzcKJ779nU4XpM6eckGmXWgkibAUq1hWJSbro%2FtRF%2BeQSZMb3CzVCtmi7kGsm%2BIGYGP2KDxguMJrb0Ve7xngWlNpT%2BYnbXu7MCTSBP9KL2ey%2FCmPG%2B79H1H3FxfL6x6uo%2B7pA%2BSDi9Ds108JP22Ef9iEaHviZxG3BVtSzFJ7bqA3VEgNBYYHHuTE77vcKpaU3O9KKy8WUQ6nDTuyAH1Pax4RHQkjeJZSVR8mz%2FEywnWnHfHDesNo%2FZUN852GtWK7VJkZD%2FoLOvzJpLJu4MWTLgDDkONPeL4hbS4LuNpVXp0ke2VfXB5tczxCMn%2FOUb5112seGl4JVOjw5nZvD%2FVi8ltmMGx3qCtpqrVRonJC4YvMSkWpVKlPMKu5ih%2Bv8bzaltSXw6yDf3ChApPbtG8Kxcc9Wo6mebfMcq6BmDGKlzabcllkDzgZ8wlpdqvVo0wULaq0S3IjUnIlZ0DUao1DwA3gegg9SGTHLGgYWwNnP7ML%2F%2B5cAGOqUBTR%2FWJZc7iyKTnkFnBbzC9qmlYRirx2z9m6PCGxE50m5vlT1tZhOpLIVoIxjB6Lpl1cMNORK6ojZGvy6og3swq7RPPMD%2BiFtB0V2UztPiogq9LiAezcRsqNza4FdZHAUkFPlhyZy%2FAMLwe2MiWNULnYuja%2B5u3cY7GX27Cauw06OGZQJRM8Dc2%2BzVlpHlWuOB4EsmXiefgayfIGAJrAblKiYW%2B4Jx&X-Amz-Signature=93b29bcfd5e7a072f851b01c48732d59cb14d8532342c0f390376f0654d81685&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4TFEB4Z%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwlC%2Br1u9iBW9rsMSFwTGFUCIrTgNpmcnUM1j%2FVbawQIgTNX9B9VfUAFkI59T2XnJxy3PnOO4xr1AiptfzZ3dc6Mq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOgs13SivdMFwvK39CrcA5pGLBNpIWWcYDa8Cu0Kuuo3VYC9UFBP14K9FWOc%2By0RrfXQGVnulaWfa1xMUqPy5Ap1oF4uvLeF0gewCURk54Xk5WfCceyyyZcccSCVhl7%2Bhn2dk6TLw0XGl%2BlLfGiRQOtmWxz%2Fa1NLaEfNC1KzcKJ779nU4XpM6eckGmXWgkibAUq1hWJSbro%2FtRF%2BeQSZMb3CzVCtmi7kGsm%2BIGYGP2KDxguMJrb0Ve7xngWlNpT%2BYnbXu7MCTSBP9KL2ey%2FCmPG%2B79H1H3FxfL6x6uo%2B7pA%2BSDi9Ds108JP22Ef9iEaHviZxG3BVtSzFJ7bqA3VEgNBYYHHuTE77vcKpaU3O9KKy8WUQ6nDTuyAH1Pax4RHQkjeJZSVR8mz%2FEywnWnHfHDesNo%2FZUN852GtWK7VJkZD%2FoLOvzJpLJu4MWTLgDDkONPeL4hbS4LuNpVXp0ke2VfXB5tczxCMn%2FOUb5112seGl4JVOjw5nZvD%2FVi8ltmMGx3qCtpqrVRonJC4YvMSkWpVKlPMKu5ih%2Bv8bzaltSXw6yDf3ChApPbtG8Kxcc9Wo6mebfMcq6BmDGKlzabcllkDzgZ8wlpdqvVo0wULaq0S3IjUnIlZ0DUao1DwA3gegg9SGTHLGgYWwNnP7ML%2F%2B5cAGOqUBTR%2FWJZc7iyKTnkFnBbzC9qmlYRirx2z9m6PCGxE50m5vlT1tZhOpLIVoIxjB6Lpl1cMNORK6ojZGvy6og3swq7RPPMD%2BiFtB0V2UztPiogq9LiAezcRsqNza4FdZHAUkFPlhyZy%2FAMLwe2MiWNULnYuja%2B5u3cY7GX27Cauw06OGZQJRM8Dc2%2BzVlpHlWuOB4EsmXiefgayfIGAJrAblKiYW%2B4Jx&X-Amz-Signature=758b5826d6a0897a9ff4ce3a21cc7054ddba7694fe7924b0651685e3898156b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
