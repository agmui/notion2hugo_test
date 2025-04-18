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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644TEBS75%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArocYiYZB14djDxBFOEZRztkVaHINrWsCYZuDgFcmjNAiEA30PweVtg%2BFen4%2B4OP%2B9qqqeWK9x%2F5U7KtZcOqEMC4FYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPE9ak5guTiL40G3ZyrcA3NDDBPXuUh13sF6fOCevFGLRKmN2tOgGvKbf2QFsqq1deqtqRbG3Fzd98KwmqkWRlEzdeh4EvPk0fitWDGNv5qHduNMwDSRk6EGfsMteZa7P2gwNpT1TFzc1qIz5jo8NZ5VQ50wyEUezYdjEKsKGlHnydVruBTRMBSJ%2FhWXaN61Nb9EiILblZOxUdbd5MdmMT3Isq7IG2pAIB%2F2r%2BQzQuGtDKZv3O%2FLejskd14O9zPp4XBUSiArpA4qRpXkFmM4bSmb3tgf6ATnLWep84D8T0piUkrY88Qpzpo39QuWZGzC2tHIdNWFqJUuVg0q5W2ZJSkutc5fYIXpaAfXzCISWHSHXV%2FqqxPCnKgBAxq7hzhOXU4qjHAzi3xjyvPDOF4mI3tlvFBsfa8dzry24XaoecaYHFo5wPNCHlE1TDAaIYjG1Rtno49f05Vw6WXsGHnb7geH3%2B9Yf5AA69BfI7ziMukEkMyFjYRZnSFX39iBsAJSyHyKNKUp3lRGj8zlrF0QdoGrfjtbLeDkIfbFpyviz3EwK571WlWGvMITUABedeXLvETy8IvcjldyztGIE76rR5BL7fK%2B7no7X%2Fs7NUvlf9bgHWAGZ1BYnqJ2s9S1aHPmvgrELbjGbIh4HFUfMPSNicAGOqUBqHfkeHLwAhO4M9CIyP7D6nonclV2UJ4HGKtMZOitwWahkvEeu0GJ39RN%2Bg1kfVvU1072v2g6yYxO8ud53CvxyRrU88%2FRXcc2%2FhhfS4nexu3awJXdc0pWCvtW9oR31QOxnzAwL1S1RmQbUy84dLTVO4U0DOXozCKdfvTyinp29IA6LIgmIfgLXS3UuV56%2BSZ5vfCa%2Fw7Dz85DAzR3NkuSPbetl2Be&X-Amz-Signature=93cb7b93c7aacb3f52b88ef9bbd81db575cacde194a7d90f978c835ba4e545cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644TEBS75%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArocYiYZB14djDxBFOEZRztkVaHINrWsCYZuDgFcmjNAiEA30PweVtg%2BFen4%2B4OP%2B9qqqeWK9x%2F5U7KtZcOqEMC4FYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPE9ak5guTiL40G3ZyrcA3NDDBPXuUh13sF6fOCevFGLRKmN2tOgGvKbf2QFsqq1deqtqRbG3Fzd98KwmqkWRlEzdeh4EvPk0fitWDGNv5qHduNMwDSRk6EGfsMteZa7P2gwNpT1TFzc1qIz5jo8NZ5VQ50wyEUezYdjEKsKGlHnydVruBTRMBSJ%2FhWXaN61Nb9EiILblZOxUdbd5MdmMT3Isq7IG2pAIB%2F2r%2BQzQuGtDKZv3O%2FLejskd14O9zPp4XBUSiArpA4qRpXkFmM4bSmb3tgf6ATnLWep84D8T0piUkrY88Qpzpo39QuWZGzC2tHIdNWFqJUuVg0q5W2ZJSkutc5fYIXpaAfXzCISWHSHXV%2FqqxPCnKgBAxq7hzhOXU4qjHAzi3xjyvPDOF4mI3tlvFBsfa8dzry24XaoecaYHFo5wPNCHlE1TDAaIYjG1Rtno49f05Vw6WXsGHnb7geH3%2B9Yf5AA69BfI7ziMukEkMyFjYRZnSFX39iBsAJSyHyKNKUp3lRGj8zlrF0QdoGrfjtbLeDkIfbFpyviz3EwK571WlWGvMITUABedeXLvETy8IvcjldyztGIE76rR5BL7fK%2B7no7X%2Fs7NUvlf9bgHWAGZ1BYnqJ2s9S1aHPmvgrELbjGbIh4HFUfMPSNicAGOqUBqHfkeHLwAhO4M9CIyP7D6nonclV2UJ4HGKtMZOitwWahkvEeu0GJ39RN%2Bg1kfVvU1072v2g6yYxO8ud53CvxyRrU88%2FRXcc2%2FhhfS4nexu3awJXdc0pWCvtW9oR31QOxnzAwL1S1RmQbUy84dLTVO4U0DOXozCKdfvTyinp29IA6LIgmIfgLXS3UuV56%2BSZ5vfCa%2Fw7Dz85DAzR3NkuSPbetl2Be&X-Amz-Signature=ec0546f1d938162fbb2c85a9cbabe686dcd5b30688fc0312af8a8082ab56ae9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
