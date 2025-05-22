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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAB2M63%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCID%2BL9edAfh4ne%2BCekpUEtjM9laQZVpwvQO10GaD5fqlrAiBx%2B1fPRD9ybSdcUlfyv3cbASFWWPzThvBMV4OgGwrwaSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFw1eXLG%2FD3IWj3%2B6KtwDpZeTrHD1r1mumKblwsz3RwPvj84HfDFpoQvrwAeqc1IKVH11Zad8IZPmMNSpno4J6zwQWiextgTbaqW8aMH6Ini6S3mPyTYnO674KbL%2Bf23YqC3qOhet70oQrIVik2wWPDYOV6C71W2RAJGfzm8dYlD6pEN3EIHtfg%2F97ludmlTloF%2F%2FIAmfOErJyuVuqlHVl33POn1dfqos9BupqksHHcvLUKOfcHJwaLqWJgpiqhsFVqc2O5JUYHFNuHq93llra9ndzsXmT%2Fe2b3ANaN%2Fux3gKx3M85ZCqyTwu0QNbF5KyPYjxtKnf1IJoY6KF6D1DFCiqPmZltFLX%2BH0IuNqEaqMVyaidPqZPwpjCdeJ0iGIsJZu3uc4dfe6u8WFBcFNpVnin3MAXovG91KL8IV9wPOM6pmXgJLQzR5pqbMTphGi8ANqc0U0k503Mms10cJW%2FrpanOrhX6cZmlMeJq%2BA8YoYubtvibA3GThrunsboeIiRmrePDggaS7Ib69N6rXFDtbkhYrJFSwS6vW4xi6F5a4EI7HCIvwkvG45fWkByx%2BkxbvIvfgD2p2%2Fiq78e885ctupWiYZI5YfU6fDP2cSwjYsGIL0O3%2F04U2z9C%2FUoc9M6%2BswfK%2FvplrVbo6kwp967wQY6pgEDBo5fIzKYYRIHludHoz5c6czvas2Q1oNIqDIOsTuokIiu%2FbTMs6fj9oiyk6RTamTIuPzIfvEzgAHliCRh2H2TNu6ClJKXe8aE5j6SGDuc1kLvWx7CsQlkqMA6NcewqKZd6FVvL2DD0qAS4dUD7Jt1VT5TmOROyAMrN0nNnnBmvZ4%2FfOATOzM23JKkqeIo7BJjl0H8eEK9USFjtqztmufONZ0i8RZ%2F&X-Amz-Signature=311c854addf504404bc645623d59d39c64140329fe27e99ec572425b6fd21927&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAB2M63%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCID%2BL9edAfh4ne%2BCekpUEtjM9laQZVpwvQO10GaD5fqlrAiBx%2B1fPRD9ybSdcUlfyv3cbASFWWPzThvBMV4OgGwrwaSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFw1eXLG%2FD3IWj3%2B6KtwDpZeTrHD1r1mumKblwsz3RwPvj84HfDFpoQvrwAeqc1IKVH11Zad8IZPmMNSpno4J6zwQWiextgTbaqW8aMH6Ini6S3mPyTYnO674KbL%2Bf23YqC3qOhet70oQrIVik2wWPDYOV6C71W2RAJGfzm8dYlD6pEN3EIHtfg%2F97ludmlTloF%2F%2FIAmfOErJyuVuqlHVl33POn1dfqos9BupqksHHcvLUKOfcHJwaLqWJgpiqhsFVqc2O5JUYHFNuHq93llra9ndzsXmT%2Fe2b3ANaN%2Fux3gKx3M85ZCqyTwu0QNbF5KyPYjxtKnf1IJoY6KF6D1DFCiqPmZltFLX%2BH0IuNqEaqMVyaidPqZPwpjCdeJ0iGIsJZu3uc4dfe6u8WFBcFNpVnin3MAXovG91KL8IV9wPOM6pmXgJLQzR5pqbMTphGi8ANqc0U0k503Mms10cJW%2FrpanOrhX6cZmlMeJq%2BA8YoYubtvibA3GThrunsboeIiRmrePDggaS7Ib69N6rXFDtbkhYrJFSwS6vW4xi6F5a4EI7HCIvwkvG45fWkByx%2BkxbvIvfgD2p2%2Fiq78e885ctupWiYZI5YfU6fDP2cSwjYsGIL0O3%2F04U2z9C%2FUoc9M6%2BswfK%2FvplrVbo6kwp967wQY6pgEDBo5fIzKYYRIHludHoz5c6czvas2Q1oNIqDIOsTuokIiu%2FbTMs6fj9oiyk6RTamTIuPzIfvEzgAHliCRh2H2TNu6ClJKXe8aE5j6SGDuc1kLvWx7CsQlkqMA6NcewqKZd6FVvL2DD0qAS4dUD7Jt1VT5TmOROyAMrN0nNnnBmvZ4%2FfOATOzM23JKkqeIo7BJjl0H8eEK9USFjtqztmufONZ0i8RZ%2F&X-Amz-Signature=a90a8dbe908896817f488e96991b650e0035e3bc3af576d8aeae40ce599b40db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
