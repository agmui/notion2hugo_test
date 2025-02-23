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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L3U2663%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcrRbKlWiCjCjkIhR50HwdrSimAUtiMhjEyKEt1cVv2wIgS%2BAbYEHFEpy3CorSisi4R0R%2BTdJOir61e%2FeFZZx%2BW3gq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDCO5GMtFi29n8qC7wircA%2BtU%2BoVPThdkNYJk4AeuSbnZ7sLL7W%2FdcwiL%2FMenQojagdzssA42%2Bhl7CMelD8nF7GqDbeoCasAqU9IEusLLIWeYN9Kv4psOUMoFENmDSGhTPVnWd5MUBXSnM6avy4%2B%2FywiRTMGMAA5uyML0kUy%2Fw5lJHgQOvFuBx0nwZpeO4%2FT9ISdOwQ9vZoEY1U1cWKO%2BAAQWG2rxoLlK0mOSE5APlISs4Am8E8PVAy0pPYNFQdciFxcqltn24j%2F1NsS403rr%2B0GhtX0HW00GMXcpW1uXc4r2G0%2Fu6WOG9CmbVhKiquoktw%2BZ3nlweCYlxEHGZLuBRrHHWbsIn%2B2XfXzR9f2%2F86eObmTpWVLoliPCdONciUsipoWn106VHch3pqImpXuXyI7aetRKlHpGd04TapQR4raKMjPoWLdT2b9ldGCFsDJfYc3hYk62HPpUH5jPmGcGhwP7D6z6aprbASv7uyjDK0UovfYW8Wlai5IMz1WEcL4Cl2XSUj18rYz3P8lrFMU4BDctMaSiIXrKLUz9C1O3oPtqLB7u%2FUFpoY4T0PZDeSbtt%2B1Y4tZvrjKRSgMz0g16ApjR3KMfDdsP618i1Pq8j1Ic2OEv%2BdHJcSBcAr7sklzPgn244kJiUdjfsOD1MJTn670GOqUBco7TYO03Mv81g7POMbvna1qaZ0yQnGvQRAzEzAAJtGIDSFINqL03EUJ0wSKfw4JshgPrWZy2qhpU6UDeG4S4vUsaWI9HS924EY2CHDiJlZ2Snq11rBA%2FFLKXPerVNqSrWFQa4UtV%2Fb9uLb3GWN7mcY%2F%2Bf63yLgVORi2B9uB55rUhCkncDldp9DkWWWKgbNLT0%2FehwqKpLpcN8ATK4HHXEi%2Foxxt3&X-Amz-Signature=2ebaaf9a9de30f85ea490fdeb9147d388ab616a06799b93058cd1985c563cc9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L3U2663%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcrRbKlWiCjCjkIhR50HwdrSimAUtiMhjEyKEt1cVv2wIgS%2BAbYEHFEpy3CorSisi4R0R%2BTdJOir61e%2FeFZZx%2BW3gq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDCO5GMtFi29n8qC7wircA%2BtU%2BoVPThdkNYJk4AeuSbnZ7sLL7W%2FdcwiL%2FMenQojagdzssA42%2Bhl7CMelD8nF7GqDbeoCasAqU9IEusLLIWeYN9Kv4psOUMoFENmDSGhTPVnWd5MUBXSnM6avy4%2B%2FywiRTMGMAA5uyML0kUy%2Fw5lJHgQOvFuBx0nwZpeO4%2FT9ISdOwQ9vZoEY1U1cWKO%2BAAQWG2rxoLlK0mOSE5APlISs4Am8E8PVAy0pPYNFQdciFxcqltn24j%2F1NsS403rr%2B0GhtX0HW00GMXcpW1uXc4r2G0%2Fu6WOG9CmbVhKiquoktw%2BZ3nlweCYlxEHGZLuBRrHHWbsIn%2B2XfXzR9f2%2F86eObmTpWVLoliPCdONciUsipoWn106VHch3pqImpXuXyI7aetRKlHpGd04TapQR4raKMjPoWLdT2b9ldGCFsDJfYc3hYk62HPpUH5jPmGcGhwP7D6z6aprbASv7uyjDK0UovfYW8Wlai5IMz1WEcL4Cl2XSUj18rYz3P8lrFMU4BDctMaSiIXrKLUz9C1O3oPtqLB7u%2FUFpoY4T0PZDeSbtt%2B1Y4tZvrjKRSgMz0g16ApjR3KMfDdsP618i1Pq8j1Ic2OEv%2BdHJcSBcAr7sklzPgn244kJiUdjfsOD1MJTn670GOqUBco7TYO03Mv81g7POMbvna1qaZ0yQnGvQRAzEzAAJtGIDSFINqL03EUJ0wSKfw4JshgPrWZy2qhpU6UDeG4S4vUsaWI9HS924EY2CHDiJlZ2Snq11rBA%2FFLKXPerVNqSrWFQa4UtV%2Fb9uLb3GWN7mcY%2F%2Bf63yLgVORi2B9uB55rUhCkncDldp9DkWWWKgbNLT0%2FehwqKpLpcN8ATK4HHXEi%2Foxxt3&X-Amz-Signature=ac94faa431d19297ceef9f29b8fb9828145ae0bd08e1402819444c5a9eddafcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
