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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYGILWV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9uhk%2BfItSdtv5cshsdBcTY2t1bZJg%2BxyYc7fn7pgi4QIhAP%2FPtduNsz3kkQXAV27EE7K33Os4FnqPdxIDKNjF%2BQ6dKv8DCGwQABoMNjM3NDIzMTgzODA1Igy7rHhkyEC%2BDG9j2iMq3AMBqJ9VKPdhVzJQIrypSO8HbJ7K3qoDz0h3ESiqzSwtkiyDOoKxJk85n%2Bdvc%2BjNupa8bYEq51KQuf0Phvm%2BqYBfycB4RfV68DwgHlL4OKcGTHIFseqW3O%2B9Jp9fMU1HueMVGfHiqjl0cskJngU2BFUKGSTFNdvr72ol%2FzMoTv%2Fs8inSmUDIBi3ZJK8YRinrfHQrBn2thYS1mTtWCICSR8wqdHdnk5xc4SPB8XrbHgR5WiRAwLGFW%2FWIG4sitqlsrec0pZdIhY9k%2Fb6iBBWS1904x3iEeZLyH1cbqsHWI8Y9RVRSiFpeh0QZVSmXYLHGZpT70NHgA1W4H1SQT%2B3hxQRzHgEGsRviFnvzPzHHD7e53DLZBwdg0M1G71ZY9jDXsqDDPx90Rqr4CwZqg7RXq00Uurt0cscBX%2BYqS5%2FEERoyxG9W9goUME76jvn7Iuufufq%2B5Fs%2BM8tXyhvVzPmgxl8z%2BiufauXgAdXCdNzHV533X7tHer6Isvo6HPKNu%2FLm1rf%2F9pJPI6ICGi12avqElagQKL0Ss1aFfHIl9TGGs5KIU%2BpF0bSgbNlraGP%2FaeTBhrBR5jTw3034kZaloN7qBcguu1MVnRXjUj3kDw4w3KRXbatbCw5lqUsMJRAVSzCR9YbABjqkAUQgmUOwyqcYUD0j0sxxoE499PjD4lUA2M4tXRxEv0vxCt4fB5HXpVwfaZRE482gZno6t1LNIDJdnvyealdTmzwd7F7iakoaHyG7clSMPXwL0S2%2Bw%2BI8FdSiab%2F9fIFzz6gIPFZ6zxxSrtaid5lQdiJ7x9m65UguqnIEFk9IgoEGYK%2FOSoCq8c7Qrujtj4QuIIHB7CIcep9VCtH3gvrHawdwOLOc&X-Amz-Signature=e8a7452fdfe3a4a269298b117ea4a1264fcdc5d981a5f95573d876073ce96d64&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYGILWV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9uhk%2BfItSdtv5cshsdBcTY2t1bZJg%2BxyYc7fn7pgi4QIhAP%2FPtduNsz3kkQXAV27EE7K33Os4FnqPdxIDKNjF%2BQ6dKv8DCGwQABoMNjM3NDIzMTgzODA1Igy7rHhkyEC%2BDG9j2iMq3AMBqJ9VKPdhVzJQIrypSO8HbJ7K3qoDz0h3ESiqzSwtkiyDOoKxJk85n%2Bdvc%2BjNupa8bYEq51KQuf0Phvm%2BqYBfycB4RfV68DwgHlL4OKcGTHIFseqW3O%2B9Jp9fMU1HueMVGfHiqjl0cskJngU2BFUKGSTFNdvr72ol%2FzMoTv%2Fs8inSmUDIBi3ZJK8YRinrfHQrBn2thYS1mTtWCICSR8wqdHdnk5xc4SPB8XrbHgR5WiRAwLGFW%2FWIG4sitqlsrec0pZdIhY9k%2Fb6iBBWS1904x3iEeZLyH1cbqsHWI8Y9RVRSiFpeh0QZVSmXYLHGZpT70NHgA1W4H1SQT%2B3hxQRzHgEGsRviFnvzPzHHD7e53DLZBwdg0M1G71ZY9jDXsqDDPx90Rqr4CwZqg7RXq00Uurt0cscBX%2BYqS5%2FEERoyxG9W9goUME76jvn7Iuufufq%2B5Fs%2BM8tXyhvVzPmgxl8z%2BiufauXgAdXCdNzHV533X7tHer6Isvo6HPKNu%2FLm1rf%2F9pJPI6ICGi12avqElagQKL0Ss1aFfHIl9TGGs5KIU%2BpF0bSgbNlraGP%2FaeTBhrBR5jTw3034kZaloN7qBcguu1MVnRXjUj3kDw4w3KRXbatbCw5lqUsMJRAVSzCR9YbABjqkAUQgmUOwyqcYUD0j0sxxoE499PjD4lUA2M4tXRxEv0vxCt4fB5HXpVwfaZRE482gZno6t1LNIDJdnvyealdTmzwd7F7iakoaHyG7clSMPXwL0S2%2Bw%2BI8FdSiab%2F9fIFzz6gIPFZ6zxxSrtaid5lQdiJ7x9m65UguqnIEFk9IgoEGYK%2FOSoCq8c7Qrujtj4QuIIHB7CIcep9VCtH3gvrHawdwOLOc&X-Amz-Signature=dfeb264d7f6ab5c04050326fdfd775d31b5f7160744c6d7dd536fbcf2c523454&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
