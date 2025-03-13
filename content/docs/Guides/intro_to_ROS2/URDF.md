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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGKGTUEE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEBKkoY7J19Dkql9TNQh4YGByjVZS4KPeXsKDmfXMIEQIgXQxZa6kLg5m91%2FAsyHztOvnUHYOnlQ0Pk4vyaI0RrSYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCONZIXWPUNxchKdtyrcAzCgVsDSgk8mhZj3Tjnqka8hirSmuEBtlwsBgypjMvu4y%2BePtt1EYVOkAFe9GE8Tgb74VER6%2B3jVywSAbE9nIexTAb6KJPO0X3a3PY4JI1yRvgtgg8c1UH9UnQGvVw0OrXIgPjc8JJf4jbXwFq4%2FX%2BOMq5vdIedAHoFfV%2FvZ5uVhYs8MLwN9%2BtwTMpDne0VN644hYUeVl9MIO8gMOVylxYajOpDljz7LUbPqPSvsoQ%2B1ykS938idNeP6FFJr7h3tTQmtoAjrfhW%2BRYD9E%2B0KbdXEgpjmafk7EeTzdUDB%2BSDG3c3MeUN0Nif0pfvB1aOFuNNp1unpqO%2Byv3MbuAXUIkZepIOHCaH7zmajiNuuy20pWpVeAWyO7oPuuhevhFuQBHIIiI4EX67VxJJRL7zOysmlnALCRAp8FS591DtCeJ1ZpQ509PFIz0prda3TYB2kJqja86Q5ANyOJDfr5FnZEh1gjHEqC2fKsDxYih8EcecHKock3OXsZosrjc6A68q0TT55AVpsYHBXaPh5vr9O9odGHBKb2cUFmmV44TrJnYxNY4Txnn4pGSHuJiTH4Bkf8uIghKYY2XFKOyFAW1F85vnZ7RNlCwOjYX%2BNIMI2yhDebnaGcgrPlQ1QurR2MO7Byr4GOqUBAJCj70Al7l%2FMIh6ry4a8qqMB2cWhwYFmPJSNqMWtL1GM7TJunVLs1dtHNPzLCeg182YuYJ%2B%2F5q5P32YwzQblhS5y7SJTpfWETKQ6BlXP%2Ff2tnbnvpBU57Jz0T0ugvsr3QCaftaDPkNGgM4WdXP49eNXS%2BwnG%2FjEctN5cwpfbZaX9vftXM508Bz18OhrqwjnkLfptJ54QieYSN2rzAA3H0ZhBNrVt&X-Amz-Signature=ea2deb885ac25185fbe23e0dfed8b76e65fcacfb2ab08e1a71970c271eb289eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGKGTUEE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEBKkoY7J19Dkql9TNQh4YGByjVZS4KPeXsKDmfXMIEQIgXQxZa6kLg5m91%2FAsyHztOvnUHYOnlQ0Pk4vyaI0RrSYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCONZIXWPUNxchKdtyrcAzCgVsDSgk8mhZj3Tjnqka8hirSmuEBtlwsBgypjMvu4y%2BePtt1EYVOkAFe9GE8Tgb74VER6%2B3jVywSAbE9nIexTAb6KJPO0X3a3PY4JI1yRvgtgg8c1UH9UnQGvVw0OrXIgPjc8JJf4jbXwFq4%2FX%2BOMq5vdIedAHoFfV%2FvZ5uVhYs8MLwN9%2BtwTMpDne0VN644hYUeVl9MIO8gMOVylxYajOpDljz7LUbPqPSvsoQ%2B1ykS938idNeP6FFJr7h3tTQmtoAjrfhW%2BRYD9E%2B0KbdXEgpjmafk7EeTzdUDB%2BSDG3c3MeUN0Nif0pfvB1aOFuNNp1unpqO%2Byv3MbuAXUIkZepIOHCaH7zmajiNuuy20pWpVeAWyO7oPuuhevhFuQBHIIiI4EX67VxJJRL7zOysmlnALCRAp8FS591DtCeJ1ZpQ509PFIz0prda3TYB2kJqja86Q5ANyOJDfr5FnZEh1gjHEqC2fKsDxYih8EcecHKock3OXsZosrjc6A68q0TT55AVpsYHBXaPh5vr9O9odGHBKb2cUFmmV44TrJnYxNY4Txnn4pGSHuJiTH4Bkf8uIghKYY2XFKOyFAW1F85vnZ7RNlCwOjYX%2BNIMI2yhDebnaGcgrPlQ1QurR2MO7Byr4GOqUBAJCj70Al7l%2FMIh6ry4a8qqMB2cWhwYFmPJSNqMWtL1GM7TJunVLs1dtHNPzLCeg182YuYJ%2B%2F5q5P32YwzQblhS5y7SJTpfWETKQ6BlXP%2Ff2tnbnvpBU57Jz0T0ugvsr3QCaftaDPkNGgM4WdXP49eNXS%2BwnG%2FjEctN5cwpfbZaX9vftXM508Bz18OhrqwjnkLfptJ54QieYSN2rzAA3H0ZhBNrVt&X-Amz-Signature=17ee0d651dc9c5ec9b14fb2bedd6410ec6f7544aa0178d6f17d39ba8ad40f136&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
