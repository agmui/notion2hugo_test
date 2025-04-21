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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOVQCFP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD0Bs70H5zgv8ccK%2FYUqNbFQKR9TvRVmnT4GD06OhD6RwIgaGXDNWNq0lSotzeFBFOuFomZwJTAcDGFMjDmSeOXZSYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BACwzeGUKXqNyf9yrcA4bVlrwBPbjtWhLFkKZ6Mv0LbrZPm1j74sW1%2Bwigf%2Fg27HBlH0rXST%2F%2FmHGkKFjMJQrpYHpGKZzZGA1cLdmtJ6gVWANDsSkJgH4Cb99DpXHUsFEE%2B8dByFgGkMOf4TfP67T%2FfAfHunf0eOamilcGERbCl%2BtLuFFXpckEou8phxyIxqeajolN2Cvs%2BCjqJ%2BuMXNGtPiG6A4DGFYUrgsoOH6VWb3wTQXI9JNtI%2BbacA7Y1GP9yqFk0qFvBv28rzIY%2FRJlQTjgqgPfPdgjuDbsXXc9PstK%2BUR0I8Q8dWC76MlGjfhkkY%2F5DlPYavR1RGGg7RPUDTCc5QFK68IWbzGcwhYW8L1LCBkfdKvKOCpB1bbm90R4nzxn8dTbFVDCW6DSQo1bkEmIx4omJeVqbck8TFQir33Up%2BXzW6IChPQUwb%2FGUHxgQjeb%2FYw7jMlpPwCssasW51I5IVKj3wLyxkXr53CMPT9cuJxKQ7jhmDsjlE3aabpjML65B3a7vC9asFcDG6OwyZZjOO6x%2B0L3E7j%2FPpxtSi390uyvYAH1qq8RiwERDzrrmfbXov3Hl8crHRxA6taztaSifbvmlTzOoS7UjcSPgAjaVQQsQg1vRO3K3Tmo2%2FDUCpGfB39WcyCQWMNy5msAGOqUBflF4HGC4EeLZ1egmAc1eYBgwWHAb00CegCpBKbZjZ7KInZLjxWz1HOuhYjhN%2F278Vkb7sqn6s7DXgm26GqddKnGpgw6H%2F2p4Honi8fRDvZ9uKnqJ65NcuJZxjkosIGnCxU53ej94SLy4ArOwYb%2FMycIzGHhFsYs6Y7m5h57KrKfdZJtfx6xWHvNqJryX62oqzU2gdzcbPDVfnxdCySRddn%2ByOn7o&X-Amz-Signature=d564f7fe910764d463103c496f4d607b5ccf55805ddf8c32d9865ba65ae6ffad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOVQCFP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD0Bs70H5zgv8ccK%2FYUqNbFQKR9TvRVmnT4GD06OhD6RwIgaGXDNWNq0lSotzeFBFOuFomZwJTAcDGFMjDmSeOXZSYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BACwzeGUKXqNyf9yrcA4bVlrwBPbjtWhLFkKZ6Mv0LbrZPm1j74sW1%2Bwigf%2Fg27HBlH0rXST%2F%2FmHGkKFjMJQrpYHpGKZzZGA1cLdmtJ6gVWANDsSkJgH4Cb99DpXHUsFEE%2B8dByFgGkMOf4TfP67T%2FfAfHunf0eOamilcGERbCl%2BtLuFFXpckEou8phxyIxqeajolN2Cvs%2BCjqJ%2BuMXNGtPiG6A4DGFYUrgsoOH6VWb3wTQXI9JNtI%2BbacA7Y1GP9yqFk0qFvBv28rzIY%2FRJlQTjgqgPfPdgjuDbsXXc9PstK%2BUR0I8Q8dWC76MlGjfhkkY%2F5DlPYavR1RGGg7RPUDTCc5QFK68IWbzGcwhYW8L1LCBkfdKvKOCpB1bbm90R4nzxn8dTbFVDCW6DSQo1bkEmIx4omJeVqbck8TFQir33Up%2BXzW6IChPQUwb%2FGUHxgQjeb%2FYw7jMlpPwCssasW51I5IVKj3wLyxkXr53CMPT9cuJxKQ7jhmDsjlE3aabpjML65B3a7vC9asFcDG6OwyZZjOO6x%2B0L3E7j%2FPpxtSi390uyvYAH1qq8RiwERDzrrmfbXov3Hl8crHRxA6taztaSifbvmlTzOoS7UjcSPgAjaVQQsQg1vRO3K3Tmo2%2FDUCpGfB39WcyCQWMNy5msAGOqUBflF4HGC4EeLZ1egmAc1eYBgwWHAb00CegCpBKbZjZ7KInZLjxWz1HOuhYjhN%2F278Vkb7sqn6s7DXgm26GqddKnGpgw6H%2F2p4Honi8fRDvZ9uKnqJ65NcuJZxjkosIGnCxU53ej94SLy4ArOwYb%2FMycIzGHhFsYs6Y7m5h57KrKfdZJtfx6xWHvNqJryX62oqzU2gdzcbPDVfnxdCySRddn%2ByOn7o&X-Amz-Signature=42d112f6526f99f7befe265f86a125ea647dea354fa5e79f6017d581536aa640&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
