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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZIUIR6R%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCDRuynuLykzaQpskzuJZSHKYRpnY%2BezhAt8IvejYXVngIgX49H0WGfB6QdND%2Bm3Qjoc40z1vabDlyCE5BezCFwxEoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsYXUlSRTxafs43dircAxUHWSDOaoBqaowNF7WkKHtgvXOmoYpHWGA7K1znKWGp%2BvdqJFgyQRAqBUtuNvGlqifKMKFweRiGSjsKCzMUzrvde3E96GOApsXyx7VduSmsHxKFtx%2BjNK7E7QEVBlixWnkScnh7YeHvGVeMl57uyzBnEsxJMdT7Zayc3%2FKxiQHIaQNtdixAoj5onU7Zy2giyFqgw0ky%2FedxpCz5gEkylcfxBfKK5bO5s6eYRBZfp9yJiO4ad3rLTIcLl5U9kN4N%2BjVgyL%2BnQCDxPZfvHVjUmjQA88qNF6tF5WtPoqCD02bTgVlG%2FarGS65Ff04BY70Y0J14E%2FWTRuGsYLgm5B3Zu%2BuDISYHPKEkRt0kzJ88hVwbw3%2FusPNTyUVLpkAf%2BmCvCbdhDAc%2BLc45Ou8W5YxJvV%2FYP3Fypzby97LKnnwnHfKxQsKlCTx7bUMU%2FRVMspQmC3qGdGtZP9uuWh1dgzRsHSU%2Fy5hqQkm4AIcMhm6LtRRINSZbnKH4er71u4tFxkthOew%2F1d%2Fu75poQDuM7jHYr96nlBHmHvda1wa91pbDbOaFmES9IW2kFi0%2FVPyxxxuJnrPGsKP8%2BUHNzXz0sgU2c8ijvK1wRLDmQdGSXgJyGhCCdYG4%2Fu0Yp2x4kafEMJ%2BvysAGOqUB9V0t90gAs8i846TEEccV%2BG5Ik4XZRwa9CTz5uELzBNab7179MT510cYK%2BYbkG8nyxWyvY0O0Qn1YiOM4SuonCC88AFbHi4mrImwurc99jbs1xgX9zc0tl7dWW1LtjMnXYkTypXiJpX8XGgBMe%2FqWDzMbLko96TNvA6q46sIR5ZDwjKZHplxtiy1IpT79ufvy0lywqMquGdvw7wH99m1dagJ81SqG&X-Amz-Signature=03fe1e70c770fcd069f9403fc047bcfa8b1c49a483f427a90cd203bca58b26f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZIUIR6R%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCDRuynuLykzaQpskzuJZSHKYRpnY%2BezhAt8IvejYXVngIgX49H0WGfB6QdND%2Bm3Qjoc40z1vabDlyCE5BezCFwxEoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsYXUlSRTxafs43dircAxUHWSDOaoBqaowNF7WkKHtgvXOmoYpHWGA7K1znKWGp%2BvdqJFgyQRAqBUtuNvGlqifKMKFweRiGSjsKCzMUzrvde3E96GOApsXyx7VduSmsHxKFtx%2BjNK7E7QEVBlixWnkScnh7YeHvGVeMl57uyzBnEsxJMdT7Zayc3%2FKxiQHIaQNtdixAoj5onU7Zy2giyFqgw0ky%2FedxpCz5gEkylcfxBfKK5bO5s6eYRBZfp9yJiO4ad3rLTIcLl5U9kN4N%2BjVgyL%2BnQCDxPZfvHVjUmjQA88qNF6tF5WtPoqCD02bTgVlG%2FarGS65Ff04BY70Y0J14E%2FWTRuGsYLgm5B3Zu%2BuDISYHPKEkRt0kzJ88hVwbw3%2FusPNTyUVLpkAf%2BmCvCbdhDAc%2BLc45Ou8W5YxJvV%2FYP3Fypzby97LKnnwnHfKxQsKlCTx7bUMU%2FRVMspQmC3qGdGtZP9uuWh1dgzRsHSU%2Fy5hqQkm4AIcMhm6LtRRINSZbnKH4er71u4tFxkthOew%2F1d%2Fu75poQDuM7jHYr96nlBHmHvda1wa91pbDbOaFmES9IW2kFi0%2FVPyxxxuJnrPGsKP8%2BUHNzXz0sgU2c8ijvK1wRLDmQdGSXgJyGhCCdYG4%2Fu0Yp2x4kafEMJ%2BvysAGOqUB9V0t90gAs8i846TEEccV%2BG5Ik4XZRwa9CTz5uELzBNab7179MT510cYK%2BYbkG8nyxWyvY0O0Qn1YiOM4SuonCC88AFbHi4mrImwurc99jbs1xgX9zc0tl7dWW1LtjMnXYkTypXiJpX8XGgBMe%2FqWDzMbLko96TNvA6q46sIR5ZDwjKZHplxtiy1IpT79ufvy0lywqMquGdvw7wH99m1dagJ81SqG&X-Amz-Signature=8f9e38c65bedfef4113894c3a25404c7be9000fd0dbf7e19c002ddb724b8c6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
