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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VULVCFOW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG2MuL%2BmPL2IguUuucud%2F9qVusA0W6rbxghzP454B3mgAiBnHO3VPZ4myAB%2FFFUoDHzAFus1kvNHYFgNrDEbVT4cWSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDChM5mpYeX7d0Gg1KtwDZjBr2vajKRCjni3Z%2B4A81s34vkPtO8RuO53nTbWcRuJvSZ3QVhr%2FedIfTInglnfLN6BC3Lc5BkEz8t5fCve0a91jJwEtXUakk08JPaDf63AFRuwIoe9kIj%2F6T3UoAvsHwSwogdZZpqojhjqdN5XUS6Z0ooYIe6BbPlNEBXOCZ1j6Qpkhv6A1G9IRAN7ElO4ORljrsnWryDnpKBWw63u%2BY%2B4AJlSZ3WRditSJbEHZY0JmWZh1nEamr2wDCh84cN4JgYgp%2B%2BouE9H2o%2BvhFH0Q7BAzhZiQsZcTMnApm6TjfMmaTV4m%2BYyG6sZ9eqAFxD33amPPyHrj2sQdoG6PnfdXWtWdvibbpEUuAgFvs7kcwUFbKAFnp1V1ognHffEAIopXqADH%2FXpwwOgwLOvRx%2B7WbIWX%2FxsaobuaZX7BoI5M1jVBCXdGAwA2UXQApP9mY%2FpVaWKWBbWPMr96bNhlxvVMjsfHVDRyoDjzDRQ7RtHR6ndJT0zr%2BWz0gEDpLTQDF09GTLAKXNcGVvI6qNtKbBsAX22QudBMTgdVqr%2FEZBmAT5xAx65tcFFeqzLFnzrcZkGWKoh1l8apz3lnuPtgW4obZT8a2sJrNEoQzmc6ZoansM9tfzibNMB1pbXydhAw4fylwAY6pgH6nNIemo7dmcsC26q%2FVs2d5rfNmXS5B1%2B5ts2MSo7Hx0exN7q%2FLG56A9vqB%2FZ0GKCsRUPbV5aqasGVMoyDdYK2J2vFw7XYJwl1ygZxhnRv8M0aETc%2BQEEdbTvalWeBfe6Hs4Imx5GNqKDVhQOyY3x22lnKEn%2Be3zrAmytZHYHRrSc3%2FPPUjcBlrfSNwIFp8swpP4%2Fu6DgE0rxgs%2BazKz97RWiEss3Y&X-Amz-Signature=808a436d1a4f193f6423b245594ca0cc54bb464363ea2564cf75666fd740479b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VULVCFOW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG2MuL%2BmPL2IguUuucud%2F9qVusA0W6rbxghzP454B3mgAiBnHO3VPZ4myAB%2FFFUoDHzAFus1kvNHYFgNrDEbVT4cWSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDChM5mpYeX7d0Gg1KtwDZjBr2vajKRCjni3Z%2B4A81s34vkPtO8RuO53nTbWcRuJvSZ3QVhr%2FedIfTInglnfLN6BC3Lc5BkEz8t5fCve0a91jJwEtXUakk08JPaDf63AFRuwIoe9kIj%2F6T3UoAvsHwSwogdZZpqojhjqdN5XUS6Z0ooYIe6BbPlNEBXOCZ1j6Qpkhv6A1G9IRAN7ElO4ORljrsnWryDnpKBWw63u%2BY%2B4AJlSZ3WRditSJbEHZY0JmWZh1nEamr2wDCh84cN4JgYgp%2B%2BouE9H2o%2BvhFH0Q7BAzhZiQsZcTMnApm6TjfMmaTV4m%2BYyG6sZ9eqAFxD33amPPyHrj2sQdoG6PnfdXWtWdvibbpEUuAgFvs7kcwUFbKAFnp1V1ognHffEAIopXqADH%2FXpwwOgwLOvRx%2B7WbIWX%2FxsaobuaZX7BoI5M1jVBCXdGAwA2UXQApP9mY%2FpVaWKWBbWPMr96bNhlxvVMjsfHVDRyoDjzDRQ7RtHR6ndJT0zr%2BWz0gEDpLTQDF09GTLAKXNcGVvI6qNtKbBsAX22QudBMTgdVqr%2FEZBmAT5xAx65tcFFeqzLFnzrcZkGWKoh1l8apz3lnuPtgW4obZT8a2sJrNEoQzmc6ZoansM9tfzibNMB1pbXydhAw4fylwAY6pgH6nNIemo7dmcsC26q%2FVs2d5rfNmXS5B1%2B5ts2MSo7Hx0exN7q%2FLG56A9vqB%2FZ0GKCsRUPbV5aqasGVMoyDdYK2J2vFw7XYJwl1ygZxhnRv8M0aETc%2BQEEdbTvalWeBfe6Hs4Imx5GNqKDVhQOyY3x22lnKEn%2Be3zrAmytZHYHRrSc3%2FPPUjcBlrfSNwIFp8swpP4%2Fu6DgE0rxgs%2BazKz97RWiEss3Y&X-Amz-Signature=a0392d8e87dd9f66040107e752431c09dc603d2ccdeee962b1738f7fc2f90a39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
