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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AY4KL4A%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDMZ8vbMkkDdSlfbflt6Cnd8wuJ9rxneAzuzHiZBqE8wwIgOhtRe2WPnqWMS%2FchuIG%2B6fxkZlVwRRDeB3n6z%2BwHhhUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDComN7zFHuLRSdkt%2FSrcA877eyT5y46LxQFsc%2BP5JnfxD3N4dme%2FgVPRWFXPT%2BTsU0k7hyDQNitjiksjYZF28cAPX%2BeD%2F%2FdKSM9aPflBGhRU4fM2lMIYhifZ%2BiWn330iLXZO1d9As0hYkTlNWeew%2BwWef%2FfU2E6ebOHBlfS29EERS7aONORq%2BN013IAs5CRXc3bjXW95EbYGt9Y5O7LU3UX5GTEopeP%2F3Fn3%2F8XT8x5xAswIQs0l4QPzCYnmkcFme78V%2BndBVF%2Fuxrmw%2F0Nk54xSy9UTxpTUvalczHn1ZdmbOU18r8JDjNoY5xBkdkvE2%2BiaQXmLUlTYbeuso25lIPjcoPr16HoaKDDQ0e%2Ffbtmtv7RXXMQCks1cTylPw7mx8X8ObuP16%2BYTg1oT1MMJckBfEo846Si%2FISZN2SRUbENmhNT7wHDCrUr0EZ3Wsa0tedtyjhQqDEp37CUjG2Fh2wkcsX3ZWgENV5sG%2F7a4irDpRQ0%2BZkzB4lK2i00i%2BrtMDCMGBGjhOd%2FWSZM%2FYVPEAmuZXAdzdi3v45P5B1lsvp%2BaFz9edMpp7pkchtMHkzIgXWhhLMgnSkcMPUpU%2F9Jto8i%2FeH6GDqI1uaDY4OR3vxXCv2rWKhcCNtXmvpBU3jeq1kOCjKPErn1bY3dgMNvn%2B8EGOqUBmsNieDSodeo500EQ%2FFYvXGxYc1KECiVh3bkns3qKzGyCw3u34N0dt6saXQ15haUib9gThskWlgUZq5f%2Bf0ZwwUaG%2BqMPe%2BEV0GCKElMruptxvpXpCMDWT3KJg8Vip4s2kAueX0gnd%2FtH3akJHzcarARdgpbXeedalX5ruq8DomVPCMSCDWYyUAzHnHsyMslm1eqVLTSRSWYURi0cDGsg7vSkmIpc&X-Amz-Signature=e32cb47d8fbd4862ec7c5bc39e6b9a69e883a82aba7787bc5c6def970338923f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AY4KL4A%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDMZ8vbMkkDdSlfbflt6Cnd8wuJ9rxneAzuzHiZBqE8wwIgOhtRe2WPnqWMS%2FchuIG%2B6fxkZlVwRRDeB3n6z%2BwHhhUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDComN7zFHuLRSdkt%2FSrcA877eyT5y46LxQFsc%2BP5JnfxD3N4dme%2FgVPRWFXPT%2BTsU0k7hyDQNitjiksjYZF28cAPX%2BeD%2F%2FdKSM9aPflBGhRU4fM2lMIYhifZ%2BiWn330iLXZO1d9As0hYkTlNWeew%2BwWef%2FfU2E6ebOHBlfS29EERS7aONORq%2BN013IAs5CRXc3bjXW95EbYGt9Y5O7LU3UX5GTEopeP%2F3Fn3%2F8XT8x5xAswIQs0l4QPzCYnmkcFme78V%2BndBVF%2Fuxrmw%2F0Nk54xSy9UTxpTUvalczHn1ZdmbOU18r8JDjNoY5xBkdkvE2%2BiaQXmLUlTYbeuso25lIPjcoPr16HoaKDDQ0e%2Ffbtmtv7RXXMQCks1cTylPw7mx8X8ObuP16%2BYTg1oT1MMJckBfEo846Si%2FISZN2SRUbENmhNT7wHDCrUr0EZ3Wsa0tedtyjhQqDEp37CUjG2Fh2wkcsX3ZWgENV5sG%2F7a4irDpRQ0%2BZkzB4lK2i00i%2BrtMDCMGBGjhOd%2FWSZM%2FYVPEAmuZXAdzdi3v45P5B1lsvp%2BaFz9edMpp7pkchtMHkzIgXWhhLMgnSkcMPUpU%2F9Jto8i%2FeH6GDqI1uaDY4OR3vxXCv2rWKhcCNtXmvpBU3jeq1kOCjKPErn1bY3dgMNvn%2B8EGOqUBmsNieDSodeo500EQ%2FFYvXGxYc1KECiVh3bkns3qKzGyCw3u34N0dt6saXQ15haUib9gThskWlgUZq5f%2Bf0ZwwUaG%2BqMPe%2BEV0GCKElMruptxvpXpCMDWT3KJg8Vip4s2kAueX0gnd%2FtH3akJHzcarARdgpbXeedalX5ruq8DomVPCMSCDWYyUAzHnHsyMslm1eqVLTSRSWYURi0cDGsg7vSkmIpc&X-Amz-Signature=441aaf6db95939fc69a661e193576320a5a76f65d422c80f150ebc5a23cb4d21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
