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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QE5EB23%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1eIhLm%2BiykXMF3vUf2ug30SKyT2%2FXImu%2FN3NG5O%2BGgAiEA%2BQttlI6dFZ%2FfP2Ae%2F3QhO9EkpOSY51yJMe13vhqI5qQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdSD0JaPo9OfwPfiyrcA3CWaMNjFnPioxZM5Fe3%2FUaEZveHd2nCGutwd4jpHYuA6Vecyx6%2FuAwaj9aq5Olo2rhV0qG1SP5UADj%2FeHMJ623X3sr%2B3wQq%2FF0v33xkALE6X02WaioAXtFqACTgFSGotZOPPOk0XpqHuRJOwoxFb%2FT%2Bvqi2VHzZyx%2B9ItewqxHBpxSz9fe6IfE7xAxVEx1ImB4%2BmkCAirKV4RhnSAl7ds30k%2BIm2kl35pm2MLqUt0KtBZ6CSnSKG1nN7UC0V266TtoGjMibndYR1DKBM1eoQcFRWm2zMmrtUD0cHWFtL%2F6I4BPiQ91Z6U45DT10GxQ9UDXbdvfH3u4uPanQQJ0lNs3eh6ZQag%2BcEXCJiPKJLHCxMqSYFSgkDG5OipWqUTNMIEFaLoBYD9%2FNR%2BFaadxghVn%2Fyr%2FGdjxMceBOeaAfHTMqL0PKOGG%2FvLtHRqSybJ%2BVySn%2Fs6svTbf8iYnPaO2lXTLA4mBbotTiRR2Nkai9%2BVWPLroKhptGgX2gMcJE0Z0Hl%2B%2FTzoptpaKomK1gfjT0esPIHZGSZBKFK7bdaBC0pN6WCw0LKN%2Fd2WssIIlmPG%2Bf6DexLmFGwBGXntjeylnrfNZ%2BQPnBn2jBTXTCjPVgb11WjqvsRaB27tencsjwMMrF7bwGOqUBivQRlYJqv6u5%2BHeazJ8%2Bt1mDALeLRyya48CE2cdJmJ5FE4j4ccK1gYtX%2FL7LSnSZl%2BPV%2BWueKQFJaXMp8zEw1htmvp5g0H0%2Ba7Q2KiOngcbk0jpRUi0VGzytZos8y%2BVQpaOY8ru0YuuAHtXdDUfPnWgKQ%2FK%2FND%2Bi6CCK7Sb4904mSlep6qRygEBy3IRstFXxymrHWhAcwrol7W2jJrj87eeE9wZI&X-Amz-Signature=3dab8ac758acbe83221e4f23961beea1ce306c4d70181eecc202bdec4713a529&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QE5EB23%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1eIhLm%2BiykXMF3vUf2ug30SKyT2%2FXImu%2FN3NG5O%2BGgAiEA%2BQttlI6dFZ%2FfP2Ae%2F3QhO9EkpOSY51yJMe13vhqI5qQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdSD0JaPo9OfwPfiyrcA3CWaMNjFnPioxZM5Fe3%2FUaEZveHd2nCGutwd4jpHYuA6Vecyx6%2FuAwaj9aq5Olo2rhV0qG1SP5UADj%2FeHMJ623X3sr%2B3wQq%2FF0v33xkALE6X02WaioAXtFqACTgFSGotZOPPOk0XpqHuRJOwoxFb%2FT%2Bvqi2VHzZyx%2B9ItewqxHBpxSz9fe6IfE7xAxVEx1ImB4%2BmkCAirKV4RhnSAl7ds30k%2BIm2kl35pm2MLqUt0KtBZ6CSnSKG1nN7UC0V266TtoGjMibndYR1DKBM1eoQcFRWm2zMmrtUD0cHWFtL%2F6I4BPiQ91Z6U45DT10GxQ9UDXbdvfH3u4uPanQQJ0lNs3eh6ZQag%2BcEXCJiPKJLHCxMqSYFSgkDG5OipWqUTNMIEFaLoBYD9%2FNR%2BFaadxghVn%2Fyr%2FGdjxMceBOeaAfHTMqL0PKOGG%2FvLtHRqSybJ%2BVySn%2Fs6svTbf8iYnPaO2lXTLA4mBbotTiRR2Nkai9%2BVWPLroKhptGgX2gMcJE0Z0Hl%2B%2FTzoptpaKomK1gfjT0esPIHZGSZBKFK7bdaBC0pN6WCw0LKN%2Fd2WssIIlmPG%2Bf6DexLmFGwBGXntjeylnrfNZ%2BQPnBn2jBTXTCjPVgb11WjqvsRaB27tencsjwMMrF7bwGOqUBivQRlYJqv6u5%2BHeazJ8%2Bt1mDALeLRyya48CE2cdJmJ5FE4j4ccK1gYtX%2FL7LSnSZl%2BPV%2BWueKQFJaXMp8zEw1htmvp5g0H0%2Ba7Q2KiOngcbk0jpRUi0VGzytZos8y%2BVQpaOY8ru0YuuAHtXdDUfPnWgKQ%2FK%2FND%2Bi6CCK7Sb4904mSlep6qRygEBy3IRstFXxymrHWhAcwrol7W2jJrj87eeE9wZI&X-Amz-Signature=ca26c879c858e2218ded7f5f2f3619a9f7908ce8142d4617149bd0c29745afbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
