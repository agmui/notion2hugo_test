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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4D6ATB%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDNzi8LJm0nYQ4hFLUF7RUl669CxzCTJDwKiGHVFx90pAIhAMMTmUGatvt3o3duWigKeqnADuUK%2BSnZWIqmdehnxogfKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPx%2FyOkcVJNZA3KSwq3AP4Hukb%2Fqej0JSpWvLbeJ6lnHWcObNQzRQiZazXn9CcvXNLKCZ%2FbYsOKyKNFgsL6D4Vz2CS23VbYF9019SUM80Pr2AxtrdVGpzOiNsl2IhEs5uoxhp4VvxevEXTy3q4u2eBl2%2FOGPv47tx37CMbVBDRZpu599OkITUEwyyabQkws%2Fm8MRvcdNC79NBCADAQKC1jqFcVKJTsOT6lEywxMYaB2Pq9GlY0SZLlZEnG48xFOF8frRzMWxbmHlCkp0zS9vTb1uJn60NonsdDPer%2Ba17%2BSOYfhkTBwv7eMGjf%2BuUM9y9g%2BF9SPQOblIlRih9HYUdQUlDW77jRpu44GlqHfqMI876vWziMfuIrrn0hEyMH1jVZ1UHNdtalpe3o2hEjrXAzAotDsbwS5LCbKtm8TQo4gdxg6Xv2KY%2BPsfb27gptvMm2WO%2BE%2BZCiVDzXaZKcMArMu2BtKghwyxmgf5gnyZel5JSOomprZ13oZ53g%2F1I6YYJevzBm52TMuBlZF346cuFuBAHh0UUlThAqSUBYQzNyiFTXBoPCm1%2BVuI%2FT5ja7A%2Bjp1NYyZNSo9wmdMeBAJanNrxtl%2FNw6%2BJuLDbmsLnzHYqWzVr6bGI7oOhQSBDBeI5A2jF7elNad32GaajDEtfbBBjqkAdPmkrsid%2B3LEuOlOJPl4jfdvtkJ0V5cJ89ddJ1HFPgQC8BBpw4UKoGhSgk6v8EocxjyGgirS0Wuwx%2Bg9pc%2FPv9Pb72kcF91kYbOZQc8tdjt%2FzQR9Lb%2BTTPNpkP52a4EzJau1%2BlioNwsa2Z9K6Io2yEhBVucXnCPWeUlQstYhu2bJtNeRnI3NRaKf4OBLkEn41YroTQR6Hrs9p0XKb29%2Fjj6tkcG&X-Amz-Signature=3a8a87724af5d38b21dfefc311143c94e9d9e49c1f4f8d4f8c5566d9721c59c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4D6ATB%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDNzi8LJm0nYQ4hFLUF7RUl669CxzCTJDwKiGHVFx90pAIhAMMTmUGatvt3o3duWigKeqnADuUK%2BSnZWIqmdehnxogfKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPx%2FyOkcVJNZA3KSwq3AP4Hukb%2Fqej0JSpWvLbeJ6lnHWcObNQzRQiZazXn9CcvXNLKCZ%2FbYsOKyKNFgsL6D4Vz2CS23VbYF9019SUM80Pr2AxtrdVGpzOiNsl2IhEs5uoxhp4VvxevEXTy3q4u2eBl2%2FOGPv47tx37CMbVBDRZpu599OkITUEwyyabQkws%2Fm8MRvcdNC79NBCADAQKC1jqFcVKJTsOT6lEywxMYaB2Pq9GlY0SZLlZEnG48xFOF8frRzMWxbmHlCkp0zS9vTb1uJn60NonsdDPer%2Ba17%2BSOYfhkTBwv7eMGjf%2BuUM9y9g%2BF9SPQOblIlRih9HYUdQUlDW77jRpu44GlqHfqMI876vWziMfuIrrn0hEyMH1jVZ1UHNdtalpe3o2hEjrXAzAotDsbwS5LCbKtm8TQo4gdxg6Xv2KY%2BPsfb27gptvMm2WO%2BE%2BZCiVDzXaZKcMArMu2BtKghwyxmgf5gnyZel5JSOomprZ13oZ53g%2F1I6YYJevzBm52TMuBlZF346cuFuBAHh0UUlThAqSUBYQzNyiFTXBoPCm1%2BVuI%2FT5ja7A%2Bjp1NYyZNSo9wmdMeBAJanNrxtl%2FNw6%2BJuLDbmsLnzHYqWzVr6bGI7oOhQSBDBeI5A2jF7elNad32GaajDEtfbBBjqkAdPmkrsid%2B3LEuOlOJPl4jfdvtkJ0V5cJ89ddJ1HFPgQC8BBpw4UKoGhSgk6v8EocxjyGgirS0Wuwx%2Bg9pc%2FPv9Pb72kcF91kYbOZQc8tdjt%2FzQR9Lb%2BTTPNpkP52a4EzJau1%2BlioNwsa2Z9K6Io2yEhBVucXnCPWeUlQstYhu2bJtNeRnI3NRaKf4OBLkEn41YroTQR6Hrs9p0XKb29%2Fjj6tkcG&X-Amz-Signature=9ea39292d4e8aa318c8fb3793e93957ecf9defd0606b359b8014541de4e88323&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
