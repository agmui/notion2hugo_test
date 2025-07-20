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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XX25ZR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFN%2FKc8r5%2BAlONxnSLSVM0Dv3FMIQPMkz7%2FS8mbYZptQIhAPo2VSLUw7iNZs7f1F3MWHnc3YbNn7oqBAWEP08BAk%2FGKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8fsrLuOH5bdDsBKQq3AMPX3xl1uxmSnpIf%2BAYjgl9ETw1jq8J2jjXMb%2F0RCs569Z0IDX8%2B6P4HLnNG2CJrzxji0B7a5oW53jlaUG8UjBhnU9Jm6lOwFGZkxtgkO7IYFj%2BPQmkdFlzS%2F6HajVelgbagJI9SY1iuVQxKifz7YajUkt1KJcPLIyEtahNjyAD084DkzRo%2FKspRsevlUEvtj78orrCoB4Xg3%2F%2FWmK1c6EOHsQBh7g52p9NtfAr7uCZdAeeI6CTRJN%2F9HF%2Fq7AaDRq5HPo4yLZDzkTmEbz57tjZU62rpsj61P19F0W%2FY90g0DAH%2B2OpnsKF6HMb%2F6yV5cY8%2BJqI%2B%2Bq6Nk3YW%2BLXhT26kgxMF8ZCWjes5ALV2G8dDVjz3kxbx7O7xW5cRXwFJGeWY354Scb96tZc2VWOsntWnyHyM1OXJPuGl4bNu0sByddVDSCeUGcEhfwUSaUH0ele1gudQa0YxdNR9%2BI6ZeK1luF2n1QQLsd7DbChLkomlwo6BNGP35DOasqdn2xJuR1Mn3FBA0rlKZ62YQECmdCSN3z%2FM4wGrGW3LoydkZFJkmBfKvY3A97XWlY4djF16Ac4IX117pjswY9BcJ86N3D3GqKFpcd7eCte4KzFJWQeV5TCDD2L03N3fpIxuDDKtvLDBjqkAdamzTuam9Laqp2dnGCCCh2UAa9SRUbSKxbAqOtkZbpk4dcy4umyztLEqLBsWhtdrRiLotfyGB8Tban8W8HBQtkpd90qy1FibjxRWynvHkqZM4N94kiAz8bUefg5Vnq9ZYxhH3Xrw6qKyAVRKqIFi5c2HWcc4l%2BmpGdNtIAsyb2uxg7w1%2B0bAoWnSVJVW49unhbzk%2FHdxvQShcqTlx7bqLKIZRZs&X-Amz-Signature=200abcaaa79fce99090487776992557a4db70b973434d0dc4a7bac5b636a5e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XX25ZR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFN%2FKc8r5%2BAlONxnSLSVM0Dv3FMIQPMkz7%2FS8mbYZptQIhAPo2VSLUw7iNZs7f1F3MWHnc3YbNn7oqBAWEP08BAk%2FGKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8fsrLuOH5bdDsBKQq3AMPX3xl1uxmSnpIf%2BAYjgl9ETw1jq8J2jjXMb%2F0RCs569Z0IDX8%2B6P4HLnNG2CJrzxji0B7a5oW53jlaUG8UjBhnU9Jm6lOwFGZkxtgkO7IYFj%2BPQmkdFlzS%2F6HajVelgbagJI9SY1iuVQxKifz7YajUkt1KJcPLIyEtahNjyAD084DkzRo%2FKspRsevlUEvtj78orrCoB4Xg3%2F%2FWmK1c6EOHsQBh7g52p9NtfAr7uCZdAeeI6CTRJN%2F9HF%2Fq7AaDRq5HPo4yLZDzkTmEbz57tjZU62rpsj61P19F0W%2FY90g0DAH%2B2OpnsKF6HMb%2F6yV5cY8%2BJqI%2B%2Bq6Nk3YW%2BLXhT26kgxMF8ZCWjes5ALV2G8dDVjz3kxbx7O7xW5cRXwFJGeWY354Scb96tZc2VWOsntWnyHyM1OXJPuGl4bNu0sByddVDSCeUGcEhfwUSaUH0ele1gudQa0YxdNR9%2BI6ZeK1luF2n1QQLsd7DbChLkomlwo6BNGP35DOasqdn2xJuR1Mn3FBA0rlKZ62YQECmdCSN3z%2FM4wGrGW3LoydkZFJkmBfKvY3A97XWlY4djF16Ac4IX117pjswY9BcJ86N3D3GqKFpcd7eCte4KzFJWQeV5TCDD2L03N3fpIxuDDKtvLDBjqkAdamzTuam9Laqp2dnGCCCh2UAa9SRUbSKxbAqOtkZbpk4dcy4umyztLEqLBsWhtdrRiLotfyGB8Tban8W8HBQtkpd90qy1FibjxRWynvHkqZM4N94kiAz8bUefg5Vnq9ZYxhH3Xrw6qKyAVRKqIFi5c2HWcc4l%2BmpGdNtIAsyb2uxg7w1%2B0bAoWnSVJVW49unhbzk%2FHdxvQShcqTlx7bqLKIZRZs&X-Amz-Signature=7fb8cf35a45a771645c33f3ebdbd07c4f7179bd78763fa85a992f45c7e31d5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
