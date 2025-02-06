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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZFYSOW5%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAHlfJECfM5nOL0EEs6cJIc2Usl3LkixsmyObpvZ%2BQrNAiEA2gzPWAqtgyZD9CVhaTsooWeDIar486a9QEoHGOJbOaMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDICedr3Chi43ELHxZircA%2F9KwffrEx%2FxLynvZec8VC%2FpCk67UHrz2bsNXqrivl%2FHfvO8gVluV7%2F%2BTechOnFv8kaCs2Oy3c4JLHFcn2sb4wLAQyNP8%2FBwqQd3%2BGcJ1KkD%2B4ms5crUDBq8KyWndmcoSZFjeBjoR2aMSITQeAy5Gb0ZKuhmSsCCi23kNOwj4tl9CZYY9fIX3Hsg8Kn43zDcoMPVconJfi%2BOKe9vfDSvcaogbnzVG2rfXcuFVqiFi%2FSBN%2B6rXacQq1T5Murviz1%2FmpbnRIgY%2BA9Kxh1L8R3lAXr3nYZuTkg9OHwjDclAi736hL%2BbjbqNlE6lWasijvT93vk3v%2BQnN4gmofKCSf83vcFfQA%2B%2BKoHW9CUz8leRvKfIbjztcStvf5AsnNo05TKoo83usvTRE0ILj5yxJp6qSe1GcBPvrfpZiqXumCvjYh0JryhCgfm1TSd82mwCwiglxPWqiM8wPXOqC5Mbgu26nIXw3B5xQdSwQAu4AGkSQX6GAhSqaDXPY7BCfqOIun6BdjPOBML8a7lnzVON2Rqwx%2Bu69Gq17PIJj%2BuBDxsiEoP%2FuzLCgcf4jNvwSbKRRo%2FYcB47EmPttNzYle6WinwAOUTdWhWAOJCanZFjNO5dBosLeg%2BpznAq7JKS2kNAMNTEkr0GOqUB5ZxteuFmQsmFp8gbl8gofR9nardBFYJ7XTvqyHulHyo2F3Pnt%2BtmNdJR0MwLhGTxsnwvzRahDeMx5%2F26vRc0HHuEdayzty%2FH%2FEqsuTmJF1XuAUyy16WIH841TchngAkLpDqgnEHb%2F8TBSoya2Iv00NcYawbYEl9nqGxUXstuS9T31k7t9W6ZNRjQh%2F7uYP16iDyuwLyM8PE862CaX9PAo7TvMNlU&X-Amz-Signature=c6c812dfebdb1fcb158d11f2361f1b6ebee515be6fa603ef78c5d364fbbbea4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZFYSOW5%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAHlfJECfM5nOL0EEs6cJIc2Usl3LkixsmyObpvZ%2BQrNAiEA2gzPWAqtgyZD9CVhaTsooWeDIar486a9QEoHGOJbOaMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDICedr3Chi43ELHxZircA%2F9KwffrEx%2FxLynvZec8VC%2FpCk67UHrz2bsNXqrivl%2FHfvO8gVluV7%2F%2BTechOnFv8kaCs2Oy3c4JLHFcn2sb4wLAQyNP8%2FBwqQd3%2BGcJ1KkD%2B4ms5crUDBq8KyWndmcoSZFjeBjoR2aMSITQeAy5Gb0ZKuhmSsCCi23kNOwj4tl9CZYY9fIX3Hsg8Kn43zDcoMPVconJfi%2BOKe9vfDSvcaogbnzVG2rfXcuFVqiFi%2FSBN%2B6rXacQq1T5Murviz1%2FmpbnRIgY%2BA9Kxh1L8R3lAXr3nYZuTkg9OHwjDclAi736hL%2BbjbqNlE6lWasijvT93vk3v%2BQnN4gmofKCSf83vcFfQA%2B%2BKoHW9CUz8leRvKfIbjztcStvf5AsnNo05TKoo83usvTRE0ILj5yxJp6qSe1GcBPvrfpZiqXumCvjYh0JryhCgfm1TSd82mwCwiglxPWqiM8wPXOqC5Mbgu26nIXw3B5xQdSwQAu4AGkSQX6GAhSqaDXPY7BCfqOIun6BdjPOBML8a7lnzVON2Rqwx%2Bu69Gq17PIJj%2BuBDxsiEoP%2FuzLCgcf4jNvwSbKRRo%2FYcB47EmPttNzYle6WinwAOUTdWhWAOJCanZFjNO5dBosLeg%2BpznAq7JKS2kNAMNTEkr0GOqUB5ZxteuFmQsmFp8gbl8gofR9nardBFYJ7XTvqyHulHyo2F3Pnt%2BtmNdJR0MwLhGTxsnwvzRahDeMx5%2F26vRc0HHuEdayzty%2FH%2FEqsuTmJF1XuAUyy16WIH841TchngAkLpDqgnEHb%2F8TBSoya2Iv00NcYawbYEl9nqGxUXstuS9T31k7t9W6ZNRjQh%2F7uYP16iDyuwLyM8PE862CaX9PAo7TvMNlU&X-Amz-Signature=f908cec54af79100797959982c54971eb2caf0d1e63a7d385cff7b12b4e8c442&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
