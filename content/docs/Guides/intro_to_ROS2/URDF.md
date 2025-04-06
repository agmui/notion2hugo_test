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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBDFE4K%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Fi%2F8v2OefqDTImtRYZyAykmmSTcYVEUcqRyzWIk9QAIhAMVvKgdIh%2FMZFpBrxAkKrY91L3lIoKagYlsaIRgXL%2FJDKv8DCE8QABoMNjM3NDIzMTgzODA1Igzl%2BYQqAWA041n0tn0q3AM%2Fr%2FfGjITcWLyiVthB2%2BFdyZ6rAFfM76%2B7MXAQJyPakvjBkgguqePJuohnQ2FCjwr1IJ4Y9ILqbkqGN%2FGk1BDg%2FzlgB3MFkTk%2FDgJg%2Be1TMdSzxX4bkpf%2BgOG9PVLOwB01zLqUvRrKE29uIJZZ9twjAtqyN63s7sYzrX5dPKriAEH7UKRiYB8JJobU3jGNDKL73SAPoOWQ3SFgVFMNnyF58tdye2dVhpRODAbYDasnEzETunKEJQ3R40hrsAU%2BSWoWcx4eRoAtkbGbvAccT8bcKjuOUTEIg%2FbTu2IgoYiw6GZ9nMG%2BsO499RCAF7WDXVggrLJvqqSMG8una6fkL4XquNRTVnj08ukBQmLd4sanjh9sm5IcdjK8z3z98sIFZMLUpLlPZ2mjRjC05FBMPVs6FifHqJLboYFgylo9KwZovzuLwBL%2FwIppSX2UKh3ZebpiieQbMTLpu53GpK9aMG9qoqPswB%2FNpxZjg1fuAO9%2BtxVmlPUA4NWKPSsRg4sAotafImXVIgawfiXHMZGBj%2BjRHmW%2BMAKII9gLDsxhVQ7TGtHThx1D5hjKlvzh7fwBC9szPTlNz9g3ZwDFWFBWZUmCsyMe10CFTIzBQPqgaZAOitRpQeOqfYb%2F86WnrzDX9Mu%2FBjqkAZjN0sfT7DndiHvEvGUv1NtGnWt%2B7lwHB1Ig7xL2GaymJ46y%2Fo5QFm3KfjgsjJipE7E3Iygxg7y%2BE19uPCaJL3UjBTOlX37xy3dQxW67KX8zk1OZq8c4lXN5d%2FnQN9wWntTbRkYLB%2ByX4KnuOsfvDE3TnR%2FkVQ58PjCgR79x68FmhLU%2BUYJ568amjCEYZl1mG7HQnhXcoVCdiNY0nzMNNHT%2F4fyY&X-Amz-Signature=6a43e6c8181badd79182ef6a3e6cf95839cc47f5cf49bfb9300d324f2ec978ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBDFE4K%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Fi%2F8v2OefqDTImtRYZyAykmmSTcYVEUcqRyzWIk9QAIhAMVvKgdIh%2FMZFpBrxAkKrY91L3lIoKagYlsaIRgXL%2FJDKv8DCE8QABoMNjM3NDIzMTgzODA1Igzl%2BYQqAWA041n0tn0q3AM%2Fr%2FfGjITcWLyiVthB2%2BFdyZ6rAFfM76%2B7MXAQJyPakvjBkgguqePJuohnQ2FCjwr1IJ4Y9ILqbkqGN%2FGk1BDg%2FzlgB3MFkTk%2FDgJg%2Be1TMdSzxX4bkpf%2BgOG9PVLOwB01zLqUvRrKE29uIJZZ9twjAtqyN63s7sYzrX5dPKriAEH7UKRiYB8JJobU3jGNDKL73SAPoOWQ3SFgVFMNnyF58tdye2dVhpRODAbYDasnEzETunKEJQ3R40hrsAU%2BSWoWcx4eRoAtkbGbvAccT8bcKjuOUTEIg%2FbTu2IgoYiw6GZ9nMG%2BsO499RCAF7WDXVggrLJvqqSMG8una6fkL4XquNRTVnj08ukBQmLd4sanjh9sm5IcdjK8z3z98sIFZMLUpLlPZ2mjRjC05FBMPVs6FifHqJLboYFgylo9KwZovzuLwBL%2FwIppSX2UKh3ZebpiieQbMTLpu53GpK9aMG9qoqPswB%2FNpxZjg1fuAO9%2BtxVmlPUA4NWKPSsRg4sAotafImXVIgawfiXHMZGBj%2BjRHmW%2BMAKII9gLDsxhVQ7TGtHThx1D5hjKlvzh7fwBC9szPTlNz9g3ZwDFWFBWZUmCsyMe10CFTIzBQPqgaZAOitRpQeOqfYb%2F86WnrzDX9Mu%2FBjqkAZjN0sfT7DndiHvEvGUv1NtGnWt%2B7lwHB1Ig7xL2GaymJ46y%2Fo5QFm3KfjgsjJipE7E3Iygxg7y%2BE19uPCaJL3UjBTOlX37xy3dQxW67KX8zk1OZq8c4lXN5d%2FnQN9wWntTbRkYLB%2ByX4KnuOsfvDE3TnR%2FkVQ58PjCgR79x68FmhLU%2BUYJ568amjCEYZl1mG7HQnhXcoVCdiNY0nzMNNHT%2F4fyY&X-Amz-Signature=2c204eccf8d721d55b2ca8e0e344af9379a8fdb5e2286e8c80b434450918aea9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
