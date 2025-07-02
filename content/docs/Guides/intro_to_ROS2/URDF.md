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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MJBXZ3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjTJ8DovegKhjBJErITTPRtOFSPawwBdiSODSF6%2Ba7LAiBuhUJijFx8XjjOx0ANzpCraqyx8PlyQ%2BsdQyhIZkZFpSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjCUztRQe3UBXYILnKtwDIIoTISukR94mbcTmJeTsMuMXuaHhXihUbXGX492fq1RptH9eA9C7PkXx0MAuwFCVc%2FhCwb%2B0bt0yvJ3b4rKQDk5XrwdwmwN%2BnjHAlE5a%2ByHo4dpICoHOpQm4tfVp%2FJ2Vd7p2p670qY34ibTyJAK6MgAHAKbmrN%2BPHse26f6g2W3ILiY2gq0zZEhlrZO%2FhueiitraDyVEh1CFs5WdAD1H8zwNTQMe4q53sPTdTZ75I3nx0IMF4WNYtKnU2gvlLJXvVm9IqslSzGKhOIXotnVJhB27cXXh85jWhxOx4tiJDIBz4cAlNGACfUGG2j1Ogjd81eyGYE33bzWvLxqTB0cTHIIC9JEb8gQ%2BobUHBLmfhxtkuricqkjnFhRhELyzuuiOAxx3oLyKxxkQysASFdFV768BgnRoA6%2BLHaYR27cyiMnKXXLyoHV0BMKPqpfNw9QGjhAe3js1UaQVNmtfxkCt9R2WiIRtpFUW6xPC2xTKccax7SJQZPiqmdV%2BkkrIRIr%2BlnfMnqT0DplrlGPKhcsKtlnhF3G4mmUEqlx%2Fq0bYtVKz2e%2FRGEs4f%2FDzsCe8FtiRd2HDhcaQGmHDCjc4puZ7P%2BWr5Sy2M7f7%2FNbpGDVpQ37qE49TzHw%2BSeAs9zUwgJ6SwwY6pgEaqKirfRbhZLLCoBmw6p3vaNH1hPXSTGkc9dNtU832WjDad3HCc%2BrE7ZPJymh6U%2BDSaJKMri2b5YdpXJckNUYUWT599GlUABtcz6UWuPFQRNanH8zEaEvfAqWll7kgusesl60ncFe6J5OqebNRVRp8b4Q0CFjZMeWoScGbJszS6GVnqkL02dO%2BncqZ96o4o32%2F%2BYreuWJIB2k9uzmaZ4c%2FHp4ea9sJ&X-Amz-Signature=718a7a2b5f47a1602fa86193864cc12ae52adbd7d3d948a32c755e9ff0673048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MJBXZ3%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjTJ8DovegKhjBJErITTPRtOFSPawwBdiSODSF6%2Ba7LAiBuhUJijFx8XjjOx0ANzpCraqyx8PlyQ%2BsdQyhIZkZFpSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjCUztRQe3UBXYILnKtwDIIoTISukR94mbcTmJeTsMuMXuaHhXihUbXGX492fq1RptH9eA9C7PkXx0MAuwFCVc%2FhCwb%2B0bt0yvJ3b4rKQDk5XrwdwmwN%2BnjHAlE5a%2ByHo4dpICoHOpQm4tfVp%2FJ2Vd7p2p670qY34ibTyJAK6MgAHAKbmrN%2BPHse26f6g2W3ILiY2gq0zZEhlrZO%2FhueiitraDyVEh1CFs5WdAD1H8zwNTQMe4q53sPTdTZ75I3nx0IMF4WNYtKnU2gvlLJXvVm9IqslSzGKhOIXotnVJhB27cXXh85jWhxOx4tiJDIBz4cAlNGACfUGG2j1Ogjd81eyGYE33bzWvLxqTB0cTHIIC9JEb8gQ%2BobUHBLmfhxtkuricqkjnFhRhELyzuuiOAxx3oLyKxxkQysASFdFV768BgnRoA6%2BLHaYR27cyiMnKXXLyoHV0BMKPqpfNw9QGjhAe3js1UaQVNmtfxkCt9R2WiIRtpFUW6xPC2xTKccax7SJQZPiqmdV%2BkkrIRIr%2BlnfMnqT0DplrlGPKhcsKtlnhF3G4mmUEqlx%2Fq0bYtVKz2e%2FRGEs4f%2FDzsCe8FtiRd2HDhcaQGmHDCjc4puZ7P%2BWr5Sy2M7f7%2FNbpGDVpQ37qE49TzHw%2BSeAs9zUwgJ6SwwY6pgEaqKirfRbhZLLCoBmw6p3vaNH1hPXSTGkc9dNtU832WjDad3HCc%2BrE7ZPJymh6U%2BDSaJKMri2b5YdpXJckNUYUWT599GlUABtcz6UWuPFQRNanH8zEaEvfAqWll7kgusesl60ncFe6J5OqebNRVRp8b4Q0CFjZMeWoScGbJszS6GVnqkL02dO%2BncqZ96o4o32%2F%2BYreuWJIB2k9uzmaZ4c%2FHp4ea9sJ&X-Amz-Signature=275634f83f3ccdb309f8e374b424da304b306f6d8a1d6fc5e352759c955fc010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
