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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L57ICLJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCyMQ0jfuGjTgOuhARfG5%2BAWB1Omy6DZUHdiqbVo8YeZQIgHxoamaj42jg1jVuRf5f7U78nd3TtF1cCTmSfNYy7Cnoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEiGuxvlc5M0dhMgDircA2lYFJVLWH1ilUwmYViPfZNlemPuHogEeDYokZRuhrnwXgujn35%2B6aXSHjKAlBarfaf8JOzqv1oEnKIIcp%2BVm52DlORy2NGOd80xQGI0CTopXn0ByK22DHaEyG3g%2BZrPnYot%2BMKaIOuwQ2h3zVvuQZFsAP56IkSYqCSu5luk4k2PHihYQ4thfGAQLkaUCkb4oIHEgtUfgxzoksQR%2FNKkj5avaMpIba%2Fd7kIEVU%2BRjLrv%2FMpBXcfHl1QKw8LcFNNmZEPC4PZWOUeka%2FTrfLJlHdsZy0s%2BKjLQ%2FCaSsR6JeMXbuc5ZOYJJWRXgvbcoH6%2BNLkICykWOstyyJpIjMPQVOtk3gf5KwG5vg0kzvY6XyAaxGTI8UtL%2BHj3adZshsQomCg%2FVmZxLZob%2FBKctGRL90rG%2BLdadOT8nzk9CY2Ma972%2FIEHkxUgQbaRMWGa5xkXmSwlH03eR9K0Zn66vLyUhgsRrJmMKwoEvWsqK4I0o4360DZdGc5kc%2BA4Yd0bi4dicrvqddITBFdJL6Ap89VvY7BeGnUW9%2BRz87DyaMNqIhZ30r54cyite0jppfQv2Rhor4zUpSCgVudYeuijidSm2bW9N1W4MmjALmIe2YrNWYH8qeds00Vvh%2FCeN5f3%2BMLCvwcIGOqUBYBjilHDM39ojryvIcZurIo1DZA5QAFdDef173xPAK24MEzxGUZDbVMMqwDqBce%2FMCXp21IRZO85A%2FTKpTgjMw6Y9psZ59Y%2F172KfwKncBzz7NfH2eeq030JJr2tmwQWP4RiDexy9%2BLldhV3XwS2O0hZwOnVaYSxqxxvuLb%2Fwobcsb5JlLDknOQfzj07m8Uvtw7V0NykFRcSOaaykx%2BtiHpXOlNC7&X-Amz-Signature=21822db7bdc92bce633e1d489e394bc2189ca0d30ae3f05d976b524d9cd18904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L57ICLJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCyMQ0jfuGjTgOuhARfG5%2BAWB1Omy6DZUHdiqbVo8YeZQIgHxoamaj42jg1jVuRf5f7U78nd3TtF1cCTmSfNYy7Cnoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEiGuxvlc5M0dhMgDircA2lYFJVLWH1ilUwmYViPfZNlemPuHogEeDYokZRuhrnwXgujn35%2B6aXSHjKAlBarfaf8JOzqv1oEnKIIcp%2BVm52DlORy2NGOd80xQGI0CTopXn0ByK22DHaEyG3g%2BZrPnYot%2BMKaIOuwQ2h3zVvuQZFsAP56IkSYqCSu5luk4k2PHihYQ4thfGAQLkaUCkb4oIHEgtUfgxzoksQR%2FNKkj5avaMpIba%2Fd7kIEVU%2BRjLrv%2FMpBXcfHl1QKw8LcFNNmZEPC4PZWOUeka%2FTrfLJlHdsZy0s%2BKjLQ%2FCaSsR6JeMXbuc5ZOYJJWRXgvbcoH6%2BNLkICykWOstyyJpIjMPQVOtk3gf5KwG5vg0kzvY6XyAaxGTI8UtL%2BHj3adZshsQomCg%2FVmZxLZob%2FBKctGRL90rG%2BLdadOT8nzk9CY2Ma972%2FIEHkxUgQbaRMWGa5xkXmSwlH03eR9K0Zn66vLyUhgsRrJmMKwoEvWsqK4I0o4360DZdGc5kc%2BA4Yd0bi4dicrvqddITBFdJL6Ap89VvY7BeGnUW9%2BRz87DyaMNqIhZ30r54cyite0jppfQv2Rhor4zUpSCgVudYeuijidSm2bW9N1W4MmjALmIe2YrNWYH8qeds00Vvh%2FCeN5f3%2BMLCvwcIGOqUBYBjilHDM39ojryvIcZurIo1DZA5QAFdDef173xPAK24MEzxGUZDbVMMqwDqBce%2FMCXp21IRZO85A%2FTKpTgjMw6Y9psZ59Y%2F172KfwKncBzz7NfH2eeq030JJr2tmwQWP4RiDexy9%2BLldhV3XwS2O0hZwOnVaYSxqxxvuLb%2Fwobcsb5JlLDknOQfzj07m8Uvtw7V0NykFRcSOaaykx%2BtiHpXOlNC7&X-Amz-Signature=0d2a7bbb39e5dd0cd5c755b88bf4964ff954457ab7c919154b6b1f98b140dfc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
