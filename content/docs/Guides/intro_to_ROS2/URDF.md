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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXD32FNE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICSA7NImR99cfRjdKLvwLS4um4PYzsBcrQj9JpzL2rQLAiEAqOelIFQnsg3UPHRSLEdDduSQFtt8dZlGm1E%2Bm9lBhwUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOGY3GMRvFf6qvGS6CrcA0R%2FxxfiFfhT0Pla0Q%2B3pyzKC%2BufVhL4cJ3OxuR5ru%2FXcLEsOQ9Vn%2FzeCzZBVqo1usaLGrQmG%2FIJ5Da%2BbrqCN4sgXt8dx5tpsi0sxgA0xZo%2BP53fNpPtJt6wGbL1p7t4vnpLXX8ARAZ6CtxhQJ0D3tZWaU%2Fb%2FVAB4esE8%2BtloAQYVlSJ5w6NDIo0Lk8%2B74rK66%2FrGACT8m0yDe7kCR%2FVOVhyFICqWt0Z2Rznp1vyHdwWBOgCxFYr7BaCAcW7tvivrfQoFzGILfAWjWq0MwiJGH%2FCtL7SqQVQHE8yzww6NFqlLaBIKO2%2BElUJ0AITvBqA8JsKz6WgRXBUExngGDHMcoRGxpOLg19%2BUVPBNDzoMY39uR15vrWav3ULuGPxJ1B%2BK87Vyl6Z5ec2K4Wq4BpYX0B6ZKsAu63v%2FsJ32OvIXs7gd1d6ttdgRKqa4l1peTeZT5tZ7FajXcqPnI75JIVimXGq6lD1iLR3%2BQpSYzKn0tVK37bGcfCpvAy5XAXnbmXXMFaXU1y%2FzGWshtSozE87TPn860LdFYqYjEf%2FL4GBEbJKCXFGpvhxsA%2F0yhM70JcIZQfAJDYKjuK%2Foz%2Fnqvj2Xsvr5LnjGOpOgWJk1MeXgT7xci8jrsiVDCt%2FnESzMJC3rcMGOqUBpSKaEde9GrWSCpFTOCz2zV6RvBblmBytTc6%2FFQgq%2FTmsHCStSibLU4qUxl87u%2FvfyN0BLo%2F5VyYufgth9CBVd%2FIKF5ctH%2FyVCzdCmJf0XYwst2qTtPnH3WKnxiA8yy9rq73UBSttmSve81tt0w7Uc09jlOSyVl4HJMnadMi8AEMN1zJKHTG3A325dYayVt8VQtCyZcOjzMA3itKYo2wBF6Qi3kix&X-Amz-Signature=b1d9ee24eda52a5654de0363937a565fa5196c9914fba851b037e624ed9d603e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXD32FNE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICSA7NImR99cfRjdKLvwLS4um4PYzsBcrQj9JpzL2rQLAiEAqOelIFQnsg3UPHRSLEdDduSQFtt8dZlGm1E%2Bm9lBhwUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOGY3GMRvFf6qvGS6CrcA0R%2FxxfiFfhT0Pla0Q%2B3pyzKC%2BufVhL4cJ3OxuR5ru%2FXcLEsOQ9Vn%2FzeCzZBVqo1usaLGrQmG%2FIJ5Da%2BbrqCN4sgXt8dx5tpsi0sxgA0xZo%2BP53fNpPtJt6wGbL1p7t4vnpLXX8ARAZ6CtxhQJ0D3tZWaU%2Fb%2FVAB4esE8%2BtloAQYVlSJ5w6NDIo0Lk8%2B74rK66%2FrGACT8m0yDe7kCR%2FVOVhyFICqWt0Z2Rznp1vyHdwWBOgCxFYr7BaCAcW7tvivrfQoFzGILfAWjWq0MwiJGH%2FCtL7SqQVQHE8yzww6NFqlLaBIKO2%2BElUJ0AITvBqA8JsKz6WgRXBUExngGDHMcoRGxpOLg19%2BUVPBNDzoMY39uR15vrWav3ULuGPxJ1B%2BK87Vyl6Z5ec2K4Wq4BpYX0B6ZKsAu63v%2FsJ32OvIXs7gd1d6ttdgRKqa4l1peTeZT5tZ7FajXcqPnI75JIVimXGq6lD1iLR3%2BQpSYzKn0tVK37bGcfCpvAy5XAXnbmXXMFaXU1y%2FzGWshtSozE87TPn860LdFYqYjEf%2FL4GBEbJKCXFGpvhxsA%2F0yhM70JcIZQfAJDYKjuK%2Foz%2Fnqvj2Xsvr5LnjGOpOgWJk1MeXgT7xci8jrsiVDCt%2FnESzMJC3rcMGOqUBpSKaEde9GrWSCpFTOCz2zV6RvBblmBytTc6%2FFQgq%2FTmsHCStSibLU4qUxl87u%2FvfyN0BLo%2F5VyYufgth9CBVd%2FIKF5ctH%2FyVCzdCmJf0XYwst2qTtPnH3WKnxiA8yy9rq73UBSttmSve81tt0w7Uc09jlOSyVl4HJMnadMi8AEMN1zJKHTG3A325dYayVt8VQtCyZcOjzMA3itKYo2wBF6Qi3kix&X-Amz-Signature=469fe11b086986225a7549f3f471e10a7ea2246af16bf9ac809d87c8d1e7a106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
