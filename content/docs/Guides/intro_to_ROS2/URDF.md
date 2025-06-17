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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UVA6AA2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTqHEAFgwMQJkpIWm8NMgkJ%2B2PE%2BaG4sqUgVMrK8tDiAiEA%2BcIB4AJlzc9D%2FvRx1d%2FjP1OrS6Cu%2BMJb7cBJ1O3eCWkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBJLARn%2BdTYkHX5NAyrcA3LEanQJa6%2BTEdG6tuR%2B6wT39wKE4RFvO6zVUEjNJFFZ%2F%2Brhlldq5%2FMaoGXbMd%2BQF3wfU069fT88JmjPgTOxJtA2Dybj9VpVTRABM4CmFmWK%2BzTSAgGCNS36Vi1QodOTuyCaCA4M15MNGERGWI2TcTj%2B3o2zdb8qXHtW1FDqaaswPN0IJyqf93Rx8arsKed5DZa95JY0U8O%2F%2F3Y2%2F2jEbXVgwnDHoQKaIswbemPhPuH9SfiRKEpYG9SbN8eMMDKfMnxjIOBWPY6POPvJDQVKAJ9pLrYPaAEmA7sfEkROFvaoSKCeMkoYW%2FzMu%2B4WDjWGkeMP6M0HDajXMJGlKBOHMl8h%2Bk%2BdGwqTi6W0q%2F02qakgAQ0hhTPeXLs8dfwGL3zjUJXryU9oAuITRcYXCpL453IPH6cTuN6Mkpr5xfqt30%2BvyGGPYWBH2I7M8mn4eeuKsR064MThh5o9ghRP8bXVV%2F%2FW1xuRkkLXicSenxE26%2BQafPQz2GSXG1XMfNFpd1QF2XFi5zaWjANkpicVr6x9zuPUPmJ4MObw7ErTMnoc5UHck4vluAUJfXES%2F%2BP9NN%2BPux4kKzY7BLmhvSiEVS26LWCRuBUZ83wuvVuCEtOZ8TMdT8yiEioQ8Fv8dBjjMJSTxMIGOqUBvAGTkFnFXiIYQml5rt0th3CtL2LG8iYDDD5R15CP%2FA6V0uA2lZ98Y%2Fc7hT3xbAr%2F4LQRIvuWCCxjLLF4gFHzLwMregjWa4fqtCnvpj1TalKN%2BGqRFDGGwIPAR9nFl2OVV28XYqvHCLgMs74QD3X7HKIQ2hQPjYg48JA%2FOe2j1XAvfA3Ks59xxSV0tu3fqUiCtr0BLI1WKcqv3sD80rscSun9yabm&X-Amz-Signature=311e7bd2b0fff00c0e9749cfa5e8fadb7879842837a7fff60fdc24171c778de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UVA6AA2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTqHEAFgwMQJkpIWm8NMgkJ%2B2PE%2BaG4sqUgVMrK8tDiAiEA%2BcIB4AJlzc9D%2FvRx1d%2FjP1OrS6Cu%2BMJb7cBJ1O3eCWkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBJLARn%2BdTYkHX5NAyrcA3LEanQJa6%2BTEdG6tuR%2B6wT39wKE4RFvO6zVUEjNJFFZ%2F%2Brhlldq5%2FMaoGXbMd%2BQF3wfU069fT88JmjPgTOxJtA2Dybj9VpVTRABM4CmFmWK%2BzTSAgGCNS36Vi1QodOTuyCaCA4M15MNGERGWI2TcTj%2B3o2zdb8qXHtW1FDqaaswPN0IJyqf93Rx8arsKed5DZa95JY0U8O%2F%2F3Y2%2F2jEbXVgwnDHoQKaIswbemPhPuH9SfiRKEpYG9SbN8eMMDKfMnxjIOBWPY6POPvJDQVKAJ9pLrYPaAEmA7sfEkROFvaoSKCeMkoYW%2FzMu%2B4WDjWGkeMP6M0HDajXMJGlKBOHMl8h%2Bk%2BdGwqTi6W0q%2F02qakgAQ0hhTPeXLs8dfwGL3zjUJXryU9oAuITRcYXCpL453IPH6cTuN6Mkpr5xfqt30%2BvyGGPYWBH2I7M8mn4eeuKsR064MThh5o9ghRP8bXVV%2F%2FW1xuRkkLXicSenxE26%2BQafPQz2GSXG1XMfNFpd1QF2XFi5zaWjANkpicVr6x9zuPUPmJ4MObw7ErTMnoc5UHck4vluAUJfXES%2F%2BP9NN%2BPux4kKzY7BLmhvSiEVS26LWCRuBUZ83wuvVuCEtOZ8TMdT8yiEioQ8Fv8dBjjMJSTxMIGOqUBvAGTkFnFXiIYQml5rt0th3CtL2LG8iYDDD5R15CP%2FA6V0uA2lZ98Y%2Fc7hT3xbAr%2F4LQRIvuWCCxjLLF4gFHzLwMregjWa4fqtCnvpj1TalKN%2BGqRFDGGwIPAR9nFl2OVV28XYqvHCLgMs74QD3X7HKIQ2hQPjYg48JA%2FOe2j1XAvfA3Ks59xxSV0tu3fqUiCtr0BLI1WKcqv3sD80rscSun9yabm&X-Amz-Signature=cf1a4904d2aed82ff17093610479196cb82a73631a3d4113dd46d1b9ab06b0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
