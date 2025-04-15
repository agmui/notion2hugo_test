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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSRCBDD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2SzZtLe6HaEGRO75SLl8QM7KZXLLEAdS0ckCDZsXVywIhAM8JFf7kaZ8t65qp3Y%2B8phG379GM6nOSX2WOW50XTFl6Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyZU9%2BwK7ODx5ap2FEq3AMt1i%2BU5jWDTRjsNx2fbTzs3akoQ7nOZB1OJVynnQYnaebJPGgTqfZ4jwGiyTLxgnHuZatJYN%2B4WEGJk9ipLwKtQ%2BenG%2BSiGguPtnYFPWO76OW7TAYRwagCZsvP9piTQXmpz9CPidpi4yAMn0ygYIzGn14qW8cCsIUuWCmS8HJZVBhLjZ9bHICysBy62nZiYAJGwx54AwEZsN74%2Bl7hUbaliNBkgXJ%2BXG%2BfHp37iwFwaCOJERgLy0c3G%2B0MSq1g4QrbplWU%2FfbQkGi2tMBe8kbULmM0l1rndD92FEJu2pod9QE%2FrnvksngHxiCLGTP318Fxu%2FRSi0yqQna0VkmVZWSgJGlUbaDArnReTuqtiPqbDwq1v0vmQ17asvVgh9mtYx34E7f444%2FnrXyR4XiE4jSLj0A0jHyb%2ByayFpxFi%2FfZEm0OeKh2FC8dhuRdRB3Q4Ve%2F9n2V6pxiPYAAKkue1WxInsY0xHpDu76cc%2F1el4plSlyOFbG2kD1JiDUe2SR2j7%2FkEQpq3o7MOwqp5GMSKYFOGoyBTP3IZqS9sutK7Q9OK4C0y5EfdH65A%2FhIlRyKFQIAxu6eOGJTU6pZdljIT7%2FS7BueJGA2XUK8tbXWrXyO8sQJ%2BJIQq2TM%2B8bmljDFtfi%2FBjqkAeRh4gm3lKPNsschlvraAWaziBDC0N0ujwKJldouwI2NIjhO7bru14kLw3aP16lk4uxv%2F1pdnzK1Rvv6OSgEUZlRGhCIEQ5qjUQRCE6QPi9OzaOmEj4pifJfcY59zKcRQ8SYdBbPHh3cHY0ck%2BAFne6nlC8EcQ49E072q3TclBEhxCpNnvsLl%2BYzljHbkPLlMxKBVug7gUQHO95yrHFINK2vRjAW&X-Amz-Signature=fa47dacce1bc834562c5bd915ae420850be419035bb202977b57f1fd956b99db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSRCBDD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2SzZtLe6HaEGRO75SLl8QM7KZXLLEAdS0ckCDZsXVywIhAM8JFf7kaZ8t65qp3Y%2B8phG379GM6nOSX2WOW50XTFl6Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyZU9%2BwK7ODx5ap2FEq3AMt1i%2BU5jWDTRjsNx2fbTzs3akoQ7nOZB1OJVynnQYnaebJPGgTqfZ4jwGiyTLxgnHuZatJYN%2B4WEGJk9ipLwKtQ%2BenG%2BSiGguPtnYFPWO76OW7TAYRwagCZsvP9piTQXmpz9CPidpi4yAMn0ygYIzGn14qW8cCsIUuWCmS8HJZVBhLjZ9bHICysBy62nZiYAJGwx54AwEZsN74%2Bl7hUbaliNBkgXJ%2BXG%2BfHp37iwFwaCOJERgLy0c3G%2B0MSq1g4QrbplWU%2FfbQkGi2tMBe8kbULmM0l1rndD92FEJu2pod9QE%2FrnvksngHxiCLGTP318Fxu%2FRSi0yqQna0VkmVZWSgJGlUbaDArnReTuqtiPqbDwq1v0vmQ17asvVgh9mtYx34E7f444%2FnrXyR4XiE4jSLj0A0jHyb%2ByayFpxFi%2FfZEm0OeKh2FC8dhuRdRB3Q4Ve%2F9n2V6pxiPYAAKkue1WxInsY0xHpDu76cc%2F1el4plSlyOFbG2kD1JiDUe2SR2j7%2FkEQpq3o7MOwqp5GMSKYFOGoyBTP3IZqS9sutK7Q9OK4C0y5EfdH65A%2FhIlRyKFQIAxu6eOGJTU6pZdljIT7%2FS7BueJGA2XUK8tbXWrXyO8sQJ%2BJIQq2TM%2B8bmljDFtfi%2FBjqkAeRh4gm3lKPNsschlvraAWaziBDC0N0ujwKJldouwI2NIjhO7bru14kLw3aP16lk4uxv%2F1pdnzK1Rvv6OSgEUZlRGhCIEQ5qjUQRCE6QPi9OzaOmEj4pifJfcY59zKcRQ8SYdBbPHh3cHY0ck%2BAFne6nlC8EcQ49E072q3TclBEhxCpNnvsLl%2BYzljHbkPLlMxKBVug7gUQHO95yrHFINK2vRjAW&X-Amz-Signature=40881acea5b0b208b273733e6189ab11c0fd9d71ad9aede280ab0c22e2f26e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
