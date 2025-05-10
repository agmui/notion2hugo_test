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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGGWDPR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWHqcfeFv8kB%2Besg%2BdCBZ13bl6NJd2e28hzLqbUOKbVAiEAgU0OiKeBbMvbMOHCK18CzbOrXdcUgB1qJ5fUTL4I858qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkGFHkO56oLkOQIAircA0bfZte9AjLuxzgBmenWHQsZ1UszENV6ebpxly5IqydB3vUQzzI2ePsXvNIUz1V1kGY7OcHZIajssHdsm403pkvH1Sx8z9zKpSGDdiNMIr4YtJBQfcCIRSSV8kCcXR0vrz0sCLv3pZboMI3tOC6BOiv6mbtgHEUOHI1QRBgPGqOrZZmlZnOArY0zMpSOo%2Fy3uD%2FGwnVrBTTjb1Wgv9w0N1t484HlWAUp7wTapOwZ2Hs1Y4Ct9S7y7bOPgvvhZaT0rTO3oSRrKG5PgHsaxO%2FxTLuOkES4bXL3babIofkgzNPurJ1QHWXRSUKsCto6TqGI2OQmfi5FzJF73VpouQ1LYCIEDl8gzKybgGxOAwDulQttT9TTF0uL%2FXntzVRIMf6iEZ2zFV8Be19IylDMOEmhfHbHkq3mlQpdtsvv31GasZbQKhGe3I%2BVbGzrHaumq5oLf3KOP9raaPsb%2B7U%2FN%2FYfu0x4avt4k9L9By7NBAaZ5aTwKFHXGjpY0nnGSzJxxU4nsBYr0ElW%2FexadfxeEWI2r2rRz9O6dGsWl0yzAl%2FA%2BVfRltWebnO4hVBrtyJhgSpI7evdQI6OoUbbuPZWfcAuS84ATSLB%2BT%2BaexX61NudzSmP88JjmQ%2FchiSsMHLpMOKP%2FMAGOqUBAmzcvgQg6jdaa%2FU6SLpb%2FthJDDIHQVwNDUpE2rhR6VdWLxI0LsS%2FpqmbUmRsfeAcVxkMhnQp4KBZ%2Bj%2FVR1RItfvCXZWi3TcRs8prd4Tl%2FGaq%2F4LkMr5t%2FwltqgVVdLNwziJLiKOCn9Xi1LDgVx28Ast51vTeyWMtPC%2FzLoMnXTXh3KcecGF9MNKIzAsTaJ3ke%2FAj2QdG8aIm%2Bi1N%2BdbXwedvXhYT&X-Amz-Signature=4723e04a80f75204823b054e6adadbdcae36d86cd3776c4bfd3183500011eef3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGGWDPR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWHqcfeFv8kB%2Besg%2BdCBZ13bl6NJd2e28hzLqbUOKbVAiEAgU0OiKeBbMvbMOHCK18CzbOrXdcUgB1qJ5fUTL4I858qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkGFHkO56oLkOQIAircA0bfZte9AjLuxzgBmenWHQsZ1UszENV6ebpxly5IqydB3vUQzzI2ePsXvNIUz1V1kGY7OcHZIajssHdsm403pkvH1Sx8z9zKpSGDdiNMIr4YtJBQfcCIRSSV8kCcXR0vrz0sCLv3pZboMI3tOC6BOiv6mbtgHEUOHI1QRBgPGqOrZZmlZnOArY0zMpSOo%2Fy3uD%2FGwnVrBTTjb1Wgv9w0N1t484HlWAUp7wTapOwZ2Hs1Y4Ct9S7y7bOPgvvhZaT0rTO3oSRrKG5PgHsaxO%2FxTLuOkES4bXL3babIofkgzNPurJ1QHWXRSUKsCto6TqGI2OQmfi5FzJF73VpouQ1LYCIEDl8gzKybgGxOAwDulQttT9TTF0uL%2FXntzVRIMf6iEZ2zFV8Be19IylDMOEmhfHbHkq3mlQpdtsvv31GasZbQKhGe3I%2BVbGzrHaumq5oLf3KOP9raaPsb%2B7U%2FN%2FYfu0x4avt4k9L9By7NBAaZ5aTwKFHXGjpY0nnGSzJxxU4nsBYr0ElW%2FexadfxeEWI2r2rRz9O6dGsWl0yzAl%2FA%2BVfRltWebnO4hVBrtyJhgSpI7evdQI6OoUbbuPZWfcAuS84ATSLB%2BT%2BaexX61NudzSmP88JjmQ%2FchiSsMHLpMOKP%2FMAGOqUBAmzcvgQg6jdaa%2FU6SLpb%2FthJDDIHQVwNDUpE2rhR6VdWLxI0LsS%2FpqmbUmRsfeAcVxkMhnQp4KBZ%2Bj%2FVR1RItfvCXZWi3TcRs8prd4Tl%2FGaq%2F4LkMr5t%2FwltqgVVdLNwziJLiKOCn9Xi1LDgVx28Ast51vTeyWMtPC%2FzLoMnXTXh3KcecGF9MNKIzAsTaJ3ke%2FAj2QdG8aIm%2Bi1N%2BdbXwedvXhYT&X-Amz-Signature=790cdcfa66ad81f4471f41e817e915bd753c5ae24ed6767b4869e07e0cd3d621&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
