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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ55BNLO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIB0CdC1sOvNmr8adpLdaqWl0XdW8bPDPILouIBNN3IslAiEApH8Owj%2FXv16ApzaZvVg8ThvP6uRgvKpIvFLptzEUMyAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPQZVpKN9fxzLPb0gSrcA%2F7uroOuG4iybk11SdXk0qpjY8PFoPNgpydxK8S%2Fc8YOIhobB%2BoRpIGoLx%2BSyNgzVY97y8sqCFeDU393ziRLHyKlslwJ5jL0VsfW0F4tH0vXBlNjEn914FKoc%2FaClqk9v%2BiuPojRfRaOFK1JgKPjPYlWOE8%2BnuGb42kJj7jISqTTRYPdjCC5MG%2Ff3UPWpF6B%2BwAmhNqQrZpJ0QYaymhMCdu6Y7eYKWqEaXihjM2osVoNdZH%2BnGAjvZcZw3%2BqUrH1Dze6aQYLdfFBpKhczbU4y0SLbyFsM4lvx3chaOhLDl3cTu29fBzpV0oDPqxxBIzxe79ak8OQsveuujBGRiLl4QjtQTBA7e7YK2h8gd95NXDeLaMerelGZTiQBp78CmuHzFQgS4sSZFW13oRWgxhnN2DwsEi9fcZOLmHV86YoXSh4sFHE%2FYuOKvSJeYWpActMpDJ%2FXrfDV3g5eFAMbYbGvF4EPpBzW1xK%2FXt3hfiv52fKA7SJb7ZeNWd8hFU913OaHRSyYyvEmzcHVPOi3j%2FbaQVtJKHIjextXcd1yziPt%2F4O7YCL7RQtFc2QMqoACrtJPac%2FM6YHQ2WL3obSNDHnA%2FOXJoWzzgzDwUa52yezA4h%2BwbmVibucfgNENbwsMMrsycEGOqUBmO9Vvn5k9qycctIa7MAxgTisxl5TMpi%2Bp3SLAwAJCJa8hFjboNi6%2Fm9s%2BeFBG9lrDHRRQYWVVNQf2HSmBNoOfP7BeRMzY%2BN5F4LI8Yw5co%2Fy3sUtvuZE%2BiAp%2FmM0gGJRZeyKM4tfTqG5iZokkv3fALif2RiXQFeelcKJmTKoF%2FkV8R10ZCi34G6ITlgbaE52ILFAR4Spr4hvCbFwsMLfCAy9%2FJ6T&X-Amz-Signature=eb9c2fd52e98b2e886ce1fa42cf7cd54980c5dab0a1dd9f349e19dd0403fd1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ55BNLO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIB0CdC1sOvNmr8adpLdaqWl0XdW8bPDPILouIBNN3IslAiEApH8Owj%2FXv16ApzaZvVg8ThvP6uRgvKpIvFLptzEUMyAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPQZVpKN9fxzLPb0gSrcA%2F7uroOuG4iybk11SdXk0qpjY8PFoPNgpydxK8S%2Fc8YOIhobB%2BoRpIGoLx%2BSyNgzVY97y8sqCFeDU393ziRLHyKlslwJ5jL0VsfW0F4tH0vXBlNjEn914FKoc%2FaClqk9v%2BiuPojRfRaOFK1JgKPjPYlWOE8%2BnuGb42kJj7jISqTTRYPdjCC5MG%2Ff3UPWpF6B%2BwAmhNqQrZpJ0QYaymhMCdu6Y7eYKWqEaXihjM2osVoNdZH%2BnGAjvZcZw3%2BqUrH1Dze6aQYLdfFBpKhczbU4y0SLbyFsM4lvx3chaOhLDl3cTu29fBzpV0oDPqxxBIzxe79ak8OQsveuujBGRiLl4QjtQTBA7e7YK2h8gd95NXDeLaMerelGZTiQBp78CmuHzFQgS4sSZFW13oRWgxhnN2DwsEi9fcZOLmHV86YoXSh4sFHE%2FYuOKvSJeYWpActMpDJ%2FXrfDV3g5eFAMbYbGvF4EPpBzW1xK%2FXt3hfiv52fKA7SJb7ZeNWd8hFU913OaHRSyYyvEmzcHVPOi3j%2FbaQVtJKHIjextXcd1yziPt%2F4O7YCL7RQtFc2QMqoACrtJPac%2FM6YHQ2WL3obSNDHnA%2FOXJoWzzgzDwUa52yezA4h%2BwbmVibucfgNENbwsMMrsycEGOqUBmO9Vvn5k9qycctIa7MAxgTisxl5TMpi%2Bp3SLAwAJCJa8hFjboNi6%2Fm9s%2BeFBG9lrDHRRQYWVVNQf2HSmBNoOfP7BeRMzY%2BN5F4LI8Yw5co%2Fy3sUtvuZE%2BiAp%2FmM0gGJRZeyKM4tfTqG5iZokkv3fALif2RiXQFeelcKJmTKoF%2FkV8R10ZCi34G6ITlgbaE52ILFAR4Spr4hvCbFwsMLfCAy9%2FJ6T&X-Amz-Signature=932846184e24b9e38a3cbbd84731293f2bcd7bdfb852c04ab6a93cfdd9011a89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
