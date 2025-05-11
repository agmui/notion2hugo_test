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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A46LQGT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEVeFXW8Reg%2FEd7oF5sUGdM1lJLMY3YGWU2j8%2FWDHrW7AiEAqBpOLUl8CbEt23FI%2FJ8aUk90mBLsEU9SOYdAFAd1SHUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYd3g2A0qObADH3zircAw3AWULdINj0WVjHpF0F43Iu1XRcsQrHZrTfVFomn9cBoPy%2FVz9YmgkZhj2MLHaQwy1B305QAY280Gt2qy85ROybSp64JAREpbIdf%2Fgo5Pdz3YRdvXInB1Jk0v%2BH3m7QS1P1oxPwTx950xWfq6omqf6XEoHAi50a6sPjpWixDt%2B3WDHysdFv9jHFzlvMGFC1WtUbsdI7vS70oryebfIB6upBtd%2FieGvPgkwUoM28eB2WtwJKXCaxplUbjN2iNusGD5trz2FiP5MfIZy1bl2Rhu1pCOw2ZS0OVV3bkZptAVU9hLsbEizbsIHd2RkRlVd1%2FZpjDIYhLBG3AedKjpviR3SVQ8BN4xKLefIYyubgEd%2B%2FZCafSbMMiN4XKK6HKkScWIXeqYnjyJiwjBIWDKXQrhK%2BHiaSl5NH4D1YW8eMRrK0zFfILfEqf0FpBt3zBJKwxHyJtQqcm15Bls5kUc4utu767pZoEqiCcrq7NAGmihkLxPB9sYJIMlTazaB%2B87Yj3FXyBu8rcJdbAcdeKky4xGsPEJrIVrcZlOj64jA2ztUItRMrbrAsPCZpltScepFHVV%2FJPE%2BqHVDBjdl1zjNhxMFeKWuKaU15AtV%2F5IItXIeN%2FYyxT6uEC0gnmCYQMLKhg8EGOqUBsuqVovbZ5bDkUMJlOFpIvaBwUse%2BQLQj9ypFwcMu8YAc%2BZRVKHDKoQuOA0xnM2QVWlz%2BmP0ALqGucJJUwECIc2T5WnXIMJz%2FqROQpHQ8W2hVazu8AhXSdvp2tDfzWlWsoxUiVQxLW8%2B8%2BdPA1%2ByN%2BLVF1jw7fROU2ve6g28MUbt5OujtIh3G3xTcrX5SRDYkeHS34BysQZU11T9rmhoalqFELNjn&X-Amz-Signature=57e34953e8131dbf05882dfd8b2561d09468f4475eb4b61e218a0c591b038641&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A46LQGT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEVeFXW8Reg%2FEd7oF5sUGdM1lJLMY3YGWU2j8%2FWDHrW7AiEAqBpOLUl8CbEt23FI%2FJ8aUk90mBLsEU9SOYdAFAd1SHUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYd3g2A0qObADH3zircAw3AWULdINj0WVjHpF0F43Iu1XRcsQrHZrTfVFomn9cBoPy%2FVz9YmgkZhj2MLHaQwy1B305QAY280Gt2qy85ROybSp64JAREpbIdf%2Fgo5Pdz3YRdvXInB1Jk0v%2BH3m7QS1P1oxPwTx950xWfq6omqf6XEoHAi50a6sPjpWixDt%2B3WDHysdFv9jHFzlvMGFC1WtUbsdI7vS70oryebfIB6upBtd%2FieGvPgkwUoM28eB2WtwJKXCaxplUbjN2iNusGD5trz2FiP5MfIZy1bl2Rhu1pCOw2ZS0OVV3bkZptAVU9hLsbEizbsIHd2RkRlVd1%2FZpjDIYhLBG3AedKjpviR3SVQ8BN4xKLefIYyubgEd%2B%2FZCafSbMMiN4XKK6HKkScWIXeqYnjyJiwjBIWDKXQrhK%2BHiaSl5NH4D1YW8eMRrK0zFfILfEqf0FpBt3zBJKwxHyJtQqcm15Bls5kUc4utu767pZoEqiCcrq7NAGmihkLxPB9sYJIMlTazaB%2B87Yj3FXyBu8rcJdbAcdeKky4xGsPEJrIVrcZlOj64jA2ztUItRMrbrAsPCZpltScepFHVV%2FJPE%2BqHVDBjdl1zjNhxMFeKWuKaU15AtV%2F5IItXIeN%2FYyxT6uEC0gnmCYQMLKhg8EGOqUBsuqVovbZ5bDkUMJlOFpIvaBwUse%2BQLQj9ypFwcMu8YAc%2BZRVKHDKoQuOA0xnM2QVWlz%2BmP0ALqGucJJUwECIc2T5WnXIMJz%2FqROQpHQ8W2hVazu8AhXSdvp2tDfzWlWsoxUiVQxLW8%2B8%2BdPA1%2ByN%2BLVF1jw7fROU2ve6g28MUbt5OujtIh3G3xTcrX5SRDYkeHS34BysQZU11T9rmhoalqFELNjn&X-Amz-Signature=ac093caa917ecd04abee3bd6cb7d79057578d3b7c121817c2210ffd474c62f22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
