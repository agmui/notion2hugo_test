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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VE4UMJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCzk0ARa8V3AN4W2XCsrq9IOlTkxjqYyKNgh%2B%2FD%2BOWPBQIhAOuDlPfsMpR%2BhNDbthp91TEk%2FiRZAGRnoZTD04UnUijSKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw000slYYWxixX%2FxPIq3AMjQtTqgRgohffXNVaUv%2BXyDsx2nbVbw3Gfw2ZLfuTOw6SdwrinsUM3RZhR%2FRY2TqU6Sjqig9UBsXxnAAy%2Ba%2FAYdbHVV%2FomT7rVd3%2FgEBC6rOG8W3POJQZEOSjmmo7zR%2Fm1h2q5slO%2FCkWI%2FiZ8QuWaPGewhvOEEBHrb0dkYdvhgsx2hvAbWM2xwsbdyphfsykKfoz1vuexriTrVnQqG6U9eeoIBoaql0IkeSqwfzYTvwIn6N9DavNqosu6Ce8xh%2BxcIUb%2FghgEyLYYsAshASGp1EVkbIq9HRFt0IuA%2FW%2BoSwOdYaOzVSybZwr%2BXCTKiN6V2YXK9yyuCl9emjdntdC5NWbVr4%2B6Yk72GjjHms9XKTJu%2FY5LM%2Fx1J9udInd2MkmpXZojPgO3QXlsrAOGMYgYVQaD0canFQrXRIPnBahtXg%2BsrxESsR%2BOSSXscciZpFrLKaHH9LY3avJk4NkDM7gNgQ4sVpCJ123TNhzVC1J0GAPU3GdP91ULvtX1ineSpWbvl72qUDMOVJ%2FDYikq2ziogcD3bZDn%2BXz1mznkHenM839DMlmI65S2FSNJC9xUPCGzX2%2B9tF6SGWlMYDX%2B8c1F2Ruai%2FnZCkuAbNl%2BmFHRGW%2BJYCI2MHM926CQsDCQ6unDBjqkATLnFIuLqjMvTJLFYancEw%2FD80emG%2F91x8Pro5RXAddq9IehuG%2Bfgss0r6wi0Q4BFUYCL%2FuQw9RypQIYifhNQAJdacRl890OWhlZuAwcgjzZWutRAz8ZIX%2Bdwmot9p3ZIb6l6%2FZeTult81mVaI9FeXflr0%2BUQBK3RB1wyG%2BW8C2U3yMlg2%2B6ee%2Bq6Bn%2FmiCaxQy5BK7lF8FKG65SXOSCfZtI4B6o&X-Amz-Signature=4332d1562a44b1b45ae030e75d61127f268d751b556898bc394391ebe4f115a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VE4UMJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCzk0ARa8V3AN4W2XCsrq9IOlTkxjqYyKNgh%2B%2FD%2BOWPBQIhAOuDlPfsMpR%2BhNDbthp91TEk%2FiRZAGRnoZTD04UnUijSKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw000slYYWxixX%2FxPIq3AMjQtTqgRgohffXNVaUv%2BXyDsx2nbVbw3Gfw2ZLfuTOw6SdwrinsUM3RZhR%2FRY2TqU6Sjqig9UBsXxnAAy%2Ba%2FAYdbHVV%2FomT7rVd3%2FgEBC6rOG8W3POJQZEOSjmmo7zR%2Fm1h2q5slO%2FCkWI%2FiZ8QuWaPGewhvOEEBHrb0dkYdvhgsx2hvAbWM2xwsbdyphfsykKfoz1vuexriTrVnQqG6U9eeoIBoaql0IkeSqwfzYTvwIn6N9DavNqosu6Ce8xh%2BxcIUb%2FghgEyLYYsAshASGp1EVkbIq9HRFt0IuA%2FW%2BoSwOdYaOzVSybZwr%2BXCTKiN6V2YXK9yyuCl9emjdntdC5NWbVr4%2B6Yk72GjjHms9XKTJu%2FY5LM%2Fx1J9udInd2MkmpXZojPgO3QXlsrAOGMYgYVQaD0canFQrXRIPnBahtXg%2BsrxESsR%2BOSSXscciZpFrLKaHH9LY3avJk4NkDM7gNgQ4sVpCJ123TNhzVC1J0GAPU3GdP91ULvtX1ineSpWbvl72qUDMOVJ%2FDYikq2ziogcD3bZDn%2BXz1mznkHenM839DMlmI65S2FSNJC9xUPCGzX2%2B9tF6SGWlMYDX%2B8c1F2Ruai%2FnZCkuAbNl%2BmFHRGW%2BJYCI2MHM926CQsDCQ6unDBjqkATLnFIuLqjMvTJLFYancEw%2FD80emG%2F91x8Pro5RXAddq9IehuG%2Bfgss0r6wi0Q4BFUYCL%2FuQw9RypQIYifhNQAJdacRl890OWhlZuAwcgjzZWutRAz8ZIX%2Bdwmot9p3ZIb6l6%2FZeTult81mVaI9FeXflr0%2BUQBK3RB1wyG%2BW8C2U3yMlg2%2B6ee%2Bq6Bn%2FmiCaxQy5BK7lF8FKG65SXOSCfZtI4B6o&X-Amz-Signature=ff5fec2b8e3f7912b923a34607a6b1b7bbbb9f5d4b4ca340bc6acea72227954c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
