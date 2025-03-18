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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626II4WAR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9dOjXpRdSEByfh41aPySoy1%2FEHCnKLOcJamE4PsAWvAiEAgZDkWIomgB%2FYEzMRtriI5hRXq7UPFSHrixQFWmO0h6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMO0L%2BEAgxZH1%2B22KyrcA%2Bfw7WuE2NnY1s5mJZu4uXnOhb1qCKLQhxc66LGlsX4h0lqHFz4NC4jmxbdThSJXSaiPFMYbVNTv9z1Cet4H1mnqX1xjRDOji9dEiIwlBkEoPQuAIq%2F9Z0umjXUCPSWjU8MxB4mb7QMcj9JPq%2BQC54AKngW0n1UhanDQcTJDkvSoN3qJmBgJ0UX8kZxpYt45bVjYJenenjxIG6P%2BFj8%2B7Ps%2FQMHnfblf7QlWMHYpObHmYOPB63D2J3Ra3Sa6m%2B7yUpS7CKFcmfySXSN%2Fj%2F2s7KCJE6eypZz%2FcjNYyeZokTE2xRo%2FDjSWkMXZnIwkCqYLaf2Azj1V6rZsWYJCxcgUAjTnuOssHfgaFOnmKKsSgm0DHWuOwQcDbfGJPZY1Q2rTYKPLBft9tvVn6Gegw8wuX35w2ygV3gRcJ9Uvn9E0zukBYarm%2FfLHRBkZRoOaG052mXX0%2FFbf59PvEz18VMvwSAL%2Fc0oopjPCvC2P2rKlWjUs1aP6q59aToGBbcm%2BvijMMKYtV%2BgmNCnphOrKO5jv%2Bi01iODNB%2BV9L0Dlf2TIdeQS1GeIYuCLzwyJ1XnHK%2FNCOSKL4V%2B0ZOPZ4A0CVz1RNMo4xezsk8D2LOg%2Bq7rk3SInk5E8upXE2Ynx%2FuenMK%2Br474GOqUBf1W%2FS%2FfZ6%2FW%2B5PHBAZHmGwYmAeh2bGcCel%2BaJH30MV72zbsG15ODSX6IT7AlSLGm4a1jiDkUzOs583W3xzvFqbyvvt53JB1MpSSyGKc3cW6F%2BgDmdvJPWLVrT4qmcyg1hs7sg913gLcXto2w67L2PJxc9tuzjV%2BGca0x4eofPjXDC2rwE76SkU5HrLeqEL4eIokFS8JlU6iG4mnxvG%2Fw2dGAkO%2BY&X-Amz-Signature=35a7f3a38a6e29e5e2e9f1a4a493c87928058a90110828239c1e3215e8773890&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626II4WAR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9dOjXpRdSEByfh41aPySoy1%2FEHCnKLOcJamE4PsAWvAiEAgZDkWIomgB%2FYEzMRtriI5hRXq7UPFSHrixQFWmO0h6Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMO0L%2BEAgxZH1%2B22KyrcA%2Bfw7WuE2NnY1s5mJZu4uXnOhb1qCKLQhxc66LGlsX4h0lqHFz4NC4jmxbdThSJXSaiPFMYbVNTv9z1Cet4H1mnqX1xjRDOji9dEiIwlBkEoPQuAIq%2F9Z0umjXUCPSWjU8MxB4mb7QMcj9JPq%2BQC54AKngW0n1UhanDQcTJDkvSoN3qJmBgJ0UX8kZxpYt45bVjYJenenjxIG6P%2BFj8%2B7Ps%2FQMHnfblf7QlWMHYpObHmYOPB63D2J3Ra3Sa6m%2B7yUpS7CKFcmfySXSN%2Fj%2F2s7KCJE6eypZz%2FcjNYyeZokTE2xRo%2FDjSWkMXZnIwkCqYLaf2Azj1V6rZsWYJCxcgUAjTnuOssHfgaFOnmKKsSgm0DHWuOwQcDbfGJPZY1Q2rTYKPLBft9tvVn6Gegw8wuX35w2ygV3gRcJ9Uvn9E0zukBYarm%2FfLHRBkZRoOaG052mXX0%2FFbf59PvEz18VMvwSAL%2Fc0oopjPCvC2P2rKlWjUs1aP6q59aToGBbcm%2BvijMMKYtV%2BgmNCnphOrKO5jv%2Bi01iODNB%2BV9L0Dlf2TIdeQS1GeIYuCLzwyJ1XnHK%2FNCOSKL4V%2B0ZOPZ4A0CVz1RNMo4xezsk8D2LOg%2Bq7rk3SInk5E8upXE2Ynx%2FuenMK%2Br474GOqUBf1W%2FS%2FfZ6%2FW%2B5PHBAZHmGwYmAeh2bGcCel%2BaJH30MV72zbsG15ODSX6IT7AlSLGm4a1jiDkUzOs583W3xzvFqbyvvt53JB1MpSSyGKc3cW6F%2BgDmdvJPWLVrT4qmcyg1hs7sg913gLcXto2w67L2PJxc9tuzjV%2BGca0x4eofPjXDC2rwE76SkU5HrLeqEL4eIokFS8JlU6iG4mnxvG%2Fw2dGAkO%2BY&X-Amz-Signature=20034c30cf5e7d35c9659d9f9c24f76cde18b155e20187033221a1a75d83184e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
