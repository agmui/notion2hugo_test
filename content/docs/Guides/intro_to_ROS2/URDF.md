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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GZZVVX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCfYNh6RfYSx4bX50tDsZY4rqEYICGBLz8fdkz5GQ6D%2BQIgRDeXh4UIhUApVfBIpCVYH67V0RrGVFZX5BUQNndNPKIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtxlwF8io283QeBiSrcA%2FHV4Db2T8Uu9Vd0xNPNnBYKMvvm5WqP%2FYbdbf6ZAXoHLHI87zGcWbF%2BHbLPLKJzvkDA8jvLDUF%2B9%2FkUd46cXJSHHf1XzdT9%2FNQqoQ8n2sJTZnyiPv%2BXJlOBEgCL3tiCWD0mTZO9OSOYOSwU%2BHYbzcDdv5Mwg5%2ByFX77AUD93j8mMWzmEve8uCDYn7BnbGPo9cLaqwfcfDVNsp1a%2BNc1HoTLABZoU8C7hZ3ix7VWw9pUhkjG6%2B%2FKibDJEMfxN1SV520d2w5BR%2FNwkgR8g%2BzLX01ZZylXEB6yMBuGPESUOEEHV4c3iAAjic5cNA52gusklPcS3KTi%2BJ2bV9cyEMFyxCQsxHn%2BjA%2FL%2BswO9sIn3qD%2BeHfcrb5wXZzgxTCi34wava9%2FFLYJEaqPuzZ%2BW7ZRFyOMISJhiHKDPiWdOzY%2BAPL5qMwhOsXYNex7J2ZBchZu02ZbW99wpKP0V2pFq6B7x%2Bg6ajtGzMGOIc2wEuMnGXMiR5cKQfwnIay03vRp8TJBCJhzGCgKmntxw8kifPmEMYYcFT45ZDpnHUp2SKO3KPvN8oWpwwn73Xs29ZfjpfraWpmybHEDVUCQ%2F1gGz5z0IHt1pPKFTe3BaPK0Dg9B%2Fj26cjWZEu%2BaBc8FHBSuMOLhvMEGOqUBe0xhAdD34WX9ilmZ%2FCzoqQpp%2FrmRpWlVqbzdvmpFjEXOXUgJw5wxVwoW7GHIMhZLGxha3CztAgcUX3aywkf7w6CeHJRCHN9WF1Zw86rEeIi28zd00bnF4%2FnIAHqVAoFUe6ibglKq07%2FrsbJ8tnAozewBY4vldudoe534vCjHOGfwEkh4dw9mgHtjL7XeDirf5c2vwLxCNAEQx0bHimoIa3rFTKXi&X-Amz-Signature=24f8fdc14e10863485d4c11feaa83c68e386a8ccd951f0cc63f063a2a7364e48&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GZZVVX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCfYNh6RfYSx4bX50tDsZY4rqEYICGBLz8fdkz5GQ6D%2BQIgRDeXh4UIhUApVfBIpCVYH67V0RrGVFZX5BUQNndNPKIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtxlwF8io283QeBiSrcA%2FHV4Db2T8Uu9Vd0xNPNnBYKMvvm5WqP%2FYbdbf6ZAXoHLHI87zGcWbF%2BHbLPLKJzvkDA8jvLDUF%2B9%2FkUd46cXJSHHf1XzdT9%2FNQqoQ8n2sJTZnyiPv%2BXJlOBEgCL3tiCWD0mTZO9OSOYOSwU%2BHYbzcDdv5Mwg5%2ByFX77AUD93j8mMWzmEve8uCDYn7BnbGPo9cLaqwfcfDVNsp1a%2BNc1HoTLABZoU8C7hZ3ix7VWw9pUhkjG6%2B%2FKibDJEMfxN1SV520d2w5BR%2FNwkgR8g%2BzLX01ZZylXEB6yMBuGPESUOEEHV4c3iAAjic5cNA52gusklPcS3KTi%2BJ2bV9cyEMFyxCQsxHn%2BjA%2FL%2BswO9sIn3qD%2BeHfcrb5wXZzgxTCi34wava9%2FFLYJEaqPuzZ%2BW7ZRFyOMISJhiHKDPiWdOzY%2BAPL5qMwhOsXYNex7J2ZBchZu02ZbW99wpKP0V2pFq6B7x%2Bg6ajtGzMGOIc2wEuMnGXMiR5cKQfwnIay03vRp8TJBCJhzGCgKmntxw8kifPmEMYYcFT45ZDpnHUp2SKO3KPvN8oWpwwn73Xs29ZfjpfraWpmybHEDVUCQ%2F1gGz5z0IHt1pPKFTe3BaPK0Dg9B%2Fj26cjWZEu%2BaBc8FHBSuMOLhvMEGOqUBe0xhAdD34WX9ilmZ%2FCzoqQpp%2FrmRpWlVqbzdvmpFjEXOXUgJw5wxVwoW7GHIMhZLGxha3CztAgcUX3aywkf7w6CeHJRCHN9WF1Zw86rEeIi28zd00bnF4%2FnIAHqVAoFUe6ibglKq07%2FrsbJ8tnAozewBY4vldudoe534vCjHOGfwEkh4dw9mgHtjL7XeDirf5c2vwLxCNAEQx0bHimoIa3rFTKXi&X-Amz-Signature=d30b4a8cd2f5841d7fec44ce1c63027ba2a14627f897106794a2f39c55ee5ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
