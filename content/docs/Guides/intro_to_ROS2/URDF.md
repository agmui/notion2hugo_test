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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3M5SR2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFuUXAJz1m%2F%2FPBKj4L%2BJ2PVdwnPIZZJCwPQRjuboVDerAiAJtA1f0%2BWlApEIC45ZqFMV1rdkdH97wTvmn7v1ElO4Iir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMpe272MOILaPtlB9%2FKtwDCxevPnDm%2BwkYFKvDhObDT1ar%2FoA6aHqfvjhk3hMF%2FCVMAGVjiu2I8m0kEhrRiNINQiB1ESs3irZdkL5zv4xVTgkfaqzO1TuvlJ3QNtTSQuMtnFF%2BFqKzEuudnXh0PKsgzSe3nCWdidi%2BkBYmIuB08J3umwVmXWFQ3aQ4wM4ZtKtxNorzZGb5ntVJxiDnxqAIy3HutrAasDV3GnGAFdfkf09pNy%2BJQKvRPEN3cUmw2%2FQTOEtwKU%2FXa3QfUgsoKSJcwbzw2UCBlSKBEhXrVNL8N9w0ebOXWkQgWEhAGThkq3lYwb%2Ben7VTL8W1wmSIbo%2BEhSge%2FUSp%2FCGhhlTFs%2FwYwSOEGDbEPS4tyXv4B8w%2FPcb4qmpyX0UXTD3vqKoXA8t8gFMR7man05kqoXvlsOmUHFZwL%2FJ%2BfhyWSzMGlZf%2B1PWsL5m9a%2F4UfgtO8IUMPxTb10yt4AWXWIrfGaZJoENHg9EDZ2MwGeFMHjGr02wP9THrFLhFzFP2CjaAxQV03KmN6iZa0%2BevQd0f25a2tro9WQXpqZD0NvXwtuOspZkJQO9YazwbolYOuKnMUUurbYYuKo33f%2FLB%2FrYxReY1e4%2BixADatcIPsuy985vboKUecIq7UybsYxyYFW5OF0swko2GwgY6pgGh1KClmlYGiJxiYCnq4GNP5eZzXTQCnF2wSnRWVzZgQerDR9vLcxPldXKOle5G6El5XF0HimwqdAwScWZ47PiXA41lNU3mnUkIjAY1V2M2SnaovZlOkbbv9VDwAER6WHF1SEJB3%2FNfMxE9VNl%2F41IEZ6T9pIIaTkDdQw%2BJ08cw%2FEB2MpnH%2Bzea9sCNtWTvDSYqaxGtDNgA%2F3j4zFvH%2FwjwwzeV%2BI8p&X-Amz-Signature=733acf05cefbf33522a8ef562d0b2cfe6a0bb723f6079aa64c537a538260c08c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3M5SR2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFuUXAJz1m%2F%2FPBKj4L%2BJ2PVdwnPIZZJCwPQRjuboVDerAiAJtA1f0%2BWlApEIC45ZqFMV1rdkdH97wTvmn7v1ElO4Iir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMpe272MOILaPtlB9%2FKtwDCxevPnDm%2BwkYFKvDhObDT1ar%2FoA6aHqfvjhk3hMF%2FCVMAGVjiu2I8m0kEhrRiNINQiB1ESs3irZdkL5zv4xVTgkfaqzO1TuvlJ3QNtTSQuMtnFF%2BFqKzEuudnXh0PKsgzSe3nCWdidi%2BkBYmIuB08J3umwVmXWFQ3aQ4wM4ZtKtxNorzZGb5ntVJxiDnxqAIy3HutrAasDV3GnGAFdfkf09pNy%2BJQKvRPEN3cUmw2%2FQTOEtwKU%2FXa3QfUgsoKSJcwbzw2UCBlSKBEhXrVNL8N9w0ebOXWkQgWEhAGThkq3lYwb%2Ben7VTL8W1wmSIbo%2BEhSge%2FUSp%2FCGhhlTFs%2FwYwSOEGDbEPS4tyXv4B8w%2FPcb4qmpyX0UXTD3vqKoXA8t8gFMR7man05kqoXvlsOmUHFZwL%2FJ%2BfhyWSzMGlZf%2B1PWsL5m9a%2F4UfgtO8IUMPxTb10yt4AWXWIrfGaZJoENHg9EDZ2MwGeFMHjGr02wP9THrFLhFzFP2CjaAxQV03KmN6iZa0%2BevQd0f25a2tro9WQXpqZD0NvXwtuOspZkJQO9YazwbolYOuKnMUUurbYYuKo33f%2FLB%2FrYxReY1e4%2BixADatcIPsuy985vboKUecIq7UybsYxyYFW5OF0swko2GwgY6pgGh1KClmlYGiJxiYCnq4GNP5eZzXTQCnF2wSnRWVzZgQerDR9vLcxPldXKOle5G6El5XF0HimwqdAwScWZ47PiXA41lNU3mnUkIjAY1V2M2SnaovZlOkbbv9VDwAER6WHF1SEJB3%2FNfMxE9VNl%2F41IEZ6T9pIIaTkDdQw%2BJ08cw%2FEB2MpnH%2Bzea9sCNtWTvDSYqaxGtDNgA%2F3j4zFvH%2FwjwwzeV%2BI8p&X-Amz-Signature=6119a05b37e3c7d98c4b5e7714f91ce67bcf51a806664be72e460d074a4047e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
