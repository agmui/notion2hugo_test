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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQXRMYI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ImK%2BnmOFwBd8B9TtrkmFdB4hhWa0MyBnbj6qEhS5ZQIgXPiaZRWsyhE8KOIjoeRDk9JhoevHvF4K5XgQCIe3gAgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEfHVrp3vVPsNYmoCrcAxX9ilKSLkAFBDOivxyIanSaJFAW3j5ELplmqlEmIf3p1GOcZfWFTok1zIEUlbr5YMjfH6OKOyP3sk6UzHrp8OHPpU8KAm8Vb8tC1YVlNgoJ8nkUR62QFqS8fLun%2B66o0gqvro0oLyXHcQVXMwY9ghrwdXgjkB3T8TkpjOFoYFKwwRHSmJbRItcR8Eg4X36O%2FEDEiyFWEvXdvfDieGnbsEjLdkQfd%2BFRyyN5dugWXe7HXpAeC6p9S7lF8%2Fw3XxRPH%2FLEc845Ux0k%2FEG19RyGeVNEQ%2Bbq0JQjfnitFfHodDFuTq5A34XISDkjpx%2F%2FHHd9UBDvIVkvtf9%2B5QDphnajQdGQQ8%2BxwWyl8zDkKffNrJZIy0nRoKOcccLWKc8g0F2oBnvzC1wyIEDE9qX7U5rODcfCo4Rb4WQJ5ZWq0wj44vNbjV1tCuDb%2B2GAJS5aRWmIMxKLdeBYS%2ByIu5BaJcdzPZOz%2BZmMG%2B1VJ7%2Bs%2BGK91xwOhQwTypnjBO6m%2BuWI3nCRZwN%2BrTMKtXkPKuCV5b3Ek7Yc2Qhh0NRAdYEA8sOtxDRE%2F2JTmMwmOxuaefZ%2FLDRO8T0GxQJqUvmQWT8w171klAm5tqak8HiyUdODCmwZfv7lkRb7GACtHHMxHOWiMI6GjsMGOqUBLDQoT7aBbx02l3OD%2FSaBGNTofD%2BiWq2DvMQMznRTAQ08EMsDGPoHK2koSFwOyDlTD4iJ5bMwnFEQP4ihiKM%2FrZZ0jLNFS9e0ogvHOoUU4dE281ZUxLjqXNZ3EyVYvlR%2BfXMx4vGUSxMNRBG%2Ba0RAvw6x8kXH17eXLqHvwDgsQRqpBf9uKlo1su0CLuiYAde3aYFNjgAzotUjb8RX0lyQscsJmkkK&X-Amz-Signature=49e01c184da8ead2ed4d949637fa5920d0099c53735e92e5f34c1f9468ab8c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQXRMYI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ImK%2BnmOFwBd8B9TtrkmFdB4hhWa0MyBnbj6qEhS5ZQIgXPiaZRWsyhE8KOIjoeRDk9JhoevHvF4K5XgQCIe3gAgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEfHVrp3vVPsNYmoCrcAxX9ilKSLkAFBDOivxyIanSaJFAW3j5ELplmqlEmIf3p1GOcZfWFTok1zIEUlbr5YMjfH6OKOyP3sk6UzHrp8OHPpU8KAm8Vb8tC1YVlNgoJ8nkUR62QFqS8fLun%2B66o0gqvro0oLyXHcQVXMwY9ghrwdXgjkB3T8TkpjOFoYFKwwRHSmJbRItcR8Eg4X36O%2FEDEiyFWEvXdvfDieGnbsEjLdkQfd%2BFRyyN5dugWXe7HXpAeC6p9S7lF8%2Fw3XxRPH%2FLEc845Ux0k%2FEG19RyGeVNEQ%2Bbq0JQjfnitFfHodDFuTq5A34XISDkjpx%2F%2FHHd9UBDvIVkvtf9%2B5QDphnajQdGQQ8%2BxwWyl8zDkKffNrJZIy0nRoKOcccLWKc8g0F2oBnvzC1wyIEDE9qX7U5rODcfCo4Rb4WQJ5ZWq0wj44vNbjV1tCuDb%2B2GAJS5aRWmIMxKLdeBYS%2ByIu5BaJcdzPZOz%2BZmMG%2B1VJ7%2Bs%2BGK91xwOhQwTypnjBO6m%2BuWI3nCRZwN%2BrTMKtXkPKuCV5b3Ek7Yc2Qhh0NRAdYEA8sOtxDRE%2F2JTmMwmOxuaefZ%2FLDRO8T0GxQJqUvmQWT8w171klAm5tqak8HiyUdODCmwZfv7lkRb7GACtHHMxHOWiMI6GjsMGOqUBLDQoT7aBbx02l3OD%2FSaBGNTofD%2BiWq2DvMQMznRTAQ08EMsDGPoHK2koSFwOyDlTD4iJ5bMwnFEQP4ihiKM%2FrZZ0jLNFS9e0ogvHOoUU4dE281ZUxLjqXNZ3EyVYvlR%2BfXMx4vGUSxMNRBG%2Ba0RAvw6x8kXH17eXLqHvwDgsQRqpBf9uKlo1su0CLuiYAde3aYFNjgAzotUjb8RX0lyQscsJmkkK&X-Amz-Signature=06f3656f1a545e1306fa9960b5555094de18502f2cb44e44225c49ec5b712142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
