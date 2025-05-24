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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHTLRHD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICxtE43JsrXRiiFF2u38KeuDWAuezCqRzsPv4ypFF5PHAiEAhoKtwChy3KSYjBzpbCMwL2i4rPbDe4yCSE9JUJo9HJ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOQe9TKxqO3sHEn6LSrcA8toPoaD2fmaLtZNKelZJ8RVooMfX69SVeIUwzeWg%2BadYjRhlJjb4l%2BDhM5p86gABNpbvFpe73lCvBpeFtu92jul6yXFCNR4nkPAKD0Qb41HjfAUu32lQnaZWQcG6003t0R31t48wctueBQi5xHnxHxaVvdg2LabtlTiEkacNPuWPLw8K7VlEg95JKjcfWY8szY0ghaqTNGXkl6CJGkQrPrLT%2F2r1wI9F4qX%2Bw%2Fl8FvydfiBeVp4psNAwg3z2QB%2BvtagRSzCe1nlqxkztmoJXa6cb9GjCkwGlL34s8W0rQnuukwusoFhCPLz%2BEtL2RDLautImOes0z2dtN0Lc4mfsrXBfemSLpJGVEA7LKIklMzNrIFdqNpLMOh%2Fcal60biMTpVAmNIPXHYF%2BN0Z9jwi7K6ngmIe92CxGqpjn0bDAuU1DyoHOrz7OzT%2B4CytM4PWApWLb6L7rOpdBoXGUWBptELDQbMoqQbm0sChdFQSCRRgo2ux%2FNFLqxkbb5OwZwRkf%2BebM3thpzoAeuuYU9c9TVxNOlkRBZeEGbBlm54qxgWgFPN0jlPWez%2BTXFs%2FcyOZjlXS%2B2gYr5RAalwjIRF20a66d%2BPGU2w2ULl1wdeZSbWgT%2BmIUKIKrH6HD3%2B5MK6AxsEGOqUBzX8h%2FopcQC9FcCsg8HksFfJgChfVcuzmTp67ZzMHHl4ssCd7vK6R4%2ByBJwTjzLnpOTa0mv649Qe%2BeQMfw5CnnA3oja%2Fky8325e92PdFThXESro3OOdOltbefw%2B2M2djhyd%2BD8R9qktfkAXCEW1EktOgiEXXpBtKADO7AOvF%2B%2FKTboDuKhnJOVeX9VoMcxotGK3LMhXLIN%2FuS%2BAANTKd46GZ36lPj&X-Amz-Signature=6d2d6b9c958a8cc44bae87d768ac41449fd30028123141fbcead2dee8dcf98aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHTLRHD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICxtE43JsrXRiiFF2u38KeuDWAuezCqRzsPv4ypFF5PHAiEAhoKtwChy3KSYjBzpbCMwL2i4rPbDe4yCSE9JUJo9HJ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOQe9TKxqO3sHEn6LSrcA8toPoaD2fmaLtZNKelZJ8RVooMfX69SVeIUwzeWg%2BadYjRhlJjb4l%2BDhM5p86gABNpbvFpe73lCvBpeFtu92jul6yXFCNR4nkPAKD0Qb41HjfAUu32lQnaZWQcG6003t0R31t48wctueBQi5xHnxHxaVvdg2LabtlTiEkacNPuWPLw8K7VlEg95JKjcfWY8szY0ghaqTNGXkl6CJGkQrPrLT%2F2r1wI9F4qX%2Bw%2Fl8FvydfiBeVp4psNAwg3z2QB%2BvtagRSzCe1nlqxkztmoJXa6cb9GjCkwGlL34s8W0rQnuukwusoFhCPLz%2BEtL2RDLautImOes0z2dtN0Lc4mfsrXBfemSLpJGVEA7LKIklMzNrIFdqNpLMOh%2Fcal60biMTpVAmNIPXHYF%2BN0Z9jwi7K6ngmIe92CxGqpjn0bDAuU1DyoHOrz7OzT%2B4CytM4PWApWLb6L7rOpdBoXGUWBptELDQbMoqQbm0sChdFQSCRRgo2ux%2FNFLqxkbb5OwZwRkf%2BebM3thpzoAeuuYU9c9TVxNOlkRBZeEGbBlm54qxgWgFPN0jlPWez%2BTXFs%2FcyOZjlXS%2B2gYr5RAalwjIRF20a66d%2BPGU2w2ULl1wdeZSbWgT%2BmIUKIKrH6HD3%2B5MK6AxsEGOqUBzX8h%2FopcQC9FcCsg8HksFfJgChfVcuzmTp67ZzMHHl4ssCd7vK6R4%2ByBJwTjzLnpOTa0mv649Qe%2BeQMfw5CnnA3oja%2Fky8325e92PdFThXESro3OOdOltbefw%2B2M2djhyd%2BD8R9qktfkAXCEW1EktOgiEXXpBtKADO7AOvF%2B%2FKTboDuKhnJOVeX9VoMcxotGK3LMhXLIN%2FuS%2BAANTKd46GZ36lPj&X-Amz-Signature=ca5d0564585e2d0a064aa3f7b3bf70260e2d8bc5c669654119416939c4d40aed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
