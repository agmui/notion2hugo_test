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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQ6B4VE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAEqYc3%2FKLhKgeTObdG2JbKFOKspL6QqjtcyW35sXKOwIhAMLsY94hOVpPVQFJ2xqBiVLuZUABBB6Y08PPDbzmWtX1KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiSSEhRaAOJLjCS7kq3ANDycwldiWd4Tn%2FGggOL2n1%2FmFbVLoedtur3u7BzXj03I61UvQFZO6itgvehXWUM32b61T5w1jOJIpWiHVVpV26dlLMVyVcdTbgjJ60S7CQDr7g6piGUXAg%2BXXMS7x%2BeXrCRT8HSTn%2FG063zviZd3Yx9j7i4P58z3TQFtroKlV3fD7%2BBcnoN1KpIDKjZm907e6hhnpF1bSjliycq8HTDEImUzHRVnvKU0rtgrsNwU7CpKw8Cw1LDZRYX8HH%2F2cMEm%2Ff8uHF1MaD35Hjvh6s%2FjYpjmsf3hYII63eyN4VgQgTSMmE9NwPb0OND7t0fE8NH8W%2Bhs3wb%2FZ6mhK4qYYDEJSJE1VE2mbOflQoovK2%2Bh4blWogCHsb5HPZGrpeGjRU1YCrPb5hJNQfoxtqu5rOZxOW3p8%2BB%2B3j1aZYqqC%2BNl2OB5ruRAW1D4IPz3b8x%2BnmfpHRUwXQScwLDwmJIK04o1aC1Ki0dOc4FevzIc5Tm0M5Z8sI%2F6J15df8p338oSoyl2Y2X2Etj2EPWCEiFG1sRmtwQ3agwJQvJ2h%2Bd3OFoe2xT11bpb%2BmgR%2Fue1pKE3zmEOvjNtEHSCc9jLY0REMKM7N%2FBJ9fLNA0O3YwWGQk1YbsiM3x%2FrNMJsGYjUf97TD9o8nCBjqkAZuoDi4yfWUROWd3slEVmU%2FcOLDxHOhjzUqTwh3TqrfDwfCVDMKUC7Ca1Vp7LP4H6SQAdT3pyC%2ByT4995gmqPBm%2BQL%2Bmv%2BqpfqUlMvHruiyzzavxukPSzhcDChUJUps9U24JtiFTN0OydnmnUmWqKQTN%2FmhIDkZFVXPdE%2FmmvkB5%2BuIB1tnBmneFZsl65uMbMu19TmPLtDCG8LgGi8r7ADvQpBsE&X-Amz-Signature=23e8fe4a309ab30b7a5bc971fef392c39d564928a0e0a2b26a0a027afe94f6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQ6B4VE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAEqYc3%2FKLhKgeTObdG2JbKFOKspL6QqjtcyW35sXKOwIhAMLsY94hOVpPVQFJ2xqBiVLuZUABBB6Y08PPDbzmWtX1KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiSSEhRaAOJLjCS7kq3ANDycwldiWd4Tn%2FGggOL2n1%2FmFbVLoedtur3u7BzXj03I61UvQFZO6itgvehXWUM32b61T5w1jOJIpWiHVVpV26dlLMVyVcdTbgjJ60S7CQDr7g6piGUXAg%2BXXMS7x%2BeXrCRT8HSTn%2FG063zviZd3Yx9j7i4P58z3TQFtroKlV3fD7%2BBcnoN1KpIDKjZm907e6hhnpF1bSjliycq8HTDEImUzHRVnvKU0rtgrsNwU7CpKw8Cw1LDZRYX8HH%2F2cMEm%2Ff8uHF1MaD35Hjvh6s%2FjYpjmsf3hYII63eyN4VgQgTSMmE9NwPb0OND7t0fE8NH8W%2Bhs3wb%2FZ6mhK4qYYDEJSJE1VE2mbOflQoovK2%2Bh4blWogCHsb5HPZGrpeGjRU1YCrPb5hJNQfoxtqu5rOZxOW3p8%2BB%2B3j1aZYqqC%2BNl2OB5ruRAW1D4IPz3b8x%2BnmfpHRUwXQScwLDwmJIK04o1aC1Ki0dOc4FevzIc5Tm0M5Z8sI%2F6J15df8p338oSoyl2Y2X2Etj2EPWCEiFG1sRmtwQ3agwJQvJ2h%2Bd3OFoe2xT11bpb%2BmgR%2Fue1pKE3zmEOvjNtEHSCc9jLY0REMKM7N%2FBJ9fLNA0O3YwWGQk1YbsiM3x%2FrNMJsGYjUf97TD9o8nCBjqkAZuoDi4yfWUROWd3slEVmU%2FcOLDxHOhjzUqTwh3TqrfDwfCVDMKUC7Ca1Vp7LP4H6SQAdT3pyC%2ByT4995gmqPBm%2BQL%2Bmv%2BqpfqUlMvHruiyzzavxukPSzhcDChUJUps9U24JtiFTN0OydnmnUmWqKQTN%2FmhIDkZFVXPdE%2FmmvkB5%2BuIB1tnBmneFZsl65uMbMu19TmPLtDCG8LgGi8r7ADvQpBsE&X-Amz-Signature=575f97500c398ed128a3cfdf9d19d59abb9cd0bde930c7c34906abeee38413b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
