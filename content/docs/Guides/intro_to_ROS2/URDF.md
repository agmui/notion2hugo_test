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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZWFVC5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDErJUqs9qNiqSRby0TeKYCFEwnAKarySzxuJxEvNlwbwIgJA%2FIUWgSVBoZjoPTu3JFlDN9f9C0nIm9YS9pfyZCojYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtnbS2Ot3uG%2FAPDlCrcAyP3nWbfUt%2FiiS17qXu8vlNCK9kXO6%2FEHz%2BsHrUCNTHJBrldQTyk5UWNfAiRc6THVbQeWk1XrmupY0UxO%2FtQU1ZQFQnHONRlfbyZsAF9MDCqzK%2BPQyv%2F653DY%2FO0aSFQtRxiynMEbMQHf1SMbPrAyLxvOmCI0fzxDTnMdG7JlaxIKYbEI3dq2KZpZHtLAGcLC0FqhWUdqLsVAyppJ9Kj1sPBc%2BSVnqSifyzFnFvgHMky6fT9h4nH2QtyGOiAOdqTUhGP5wq14qQ62%2F3Tma5OlJw3i38RTifiuAW7etvKtrrZ9oqLn7Vx1TGk2k0iL40xfK2EQ7rcPsWwde%2Bpq5Y1s6yRKxApYfPAlLYmm1W4BtY%2Bklwb8YtqS%2BOXT3IY5Y4P2ppHZ16CcUCx%2BH21ODJ6BzXTLlT%2Fsl4g%2Bd4XZGXeYJzwyhoekBRS7eYnpeBxVlVvb59XY5IgMtVb8s53kKMV8P8NyKCajHIqHYIFPVx194d0mt9wLR4RoH3nRhmQRTzrsjRsKBtIbYi7Jwg5MGJmrOQrzeD9mGn2AUISFOwZk%2BARy0lDc0k%2BP8aU%2FzqtxZej3snNNxCfA6d36x4LDiuL7zTFu1XFnnmXswpkbXSAxJaV7ZKKMf7oH4iCSr8VMO2i4MIGOqUByFVfY1%2BAhD10G1MzLL2DCAqesObrxQcWDJlH7QdATe2F0RY0Ez%2FiJl7kG0f611jWiSbiE93%2BlMqjMv%2Bd7OZaVBtJMNE7n4UV0uw3eN7Uc68JK3suL8P9rmJFQWt2T5TuByuivnnjMSYVj8609X%2FzU1QDJk%2B5gZoiC7IE5Z2gmx5KEJ8MLGTC0a06d%2FGTR%2BSHXQ%2BDS7hAP%2BDoc5uD1LRS%2BNcqEofW&X-Amz-Signature=15d0b583ef42c096a5a9d6ddd0cc8ce5cecfc1489a5eedd617c1b0eb6bb71708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZWFVC5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDErJUqs9qNiqSRby0TeKYCFEwnAKarySzxuJxEvNlwbwIgJA%2FIUWgSVBoZjoPTu3JFlDN9f9C0nIm9YS9pfyZCojYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtnbS2Ot3uG%2FAPDlCrcAyP3nWbfUt%2FiiS17qXu8vlNCK9kXO6%2FEHz%2BsHrUCNTHJBrldQTyk5UWNfAiRc6THVbQeWk1XrmupY0UxO%2FtQU1ZQFQnHONRlfbyZsAF9MDCqzK%2BPQyv%2F653DY%2FO0aSFQtRxiynMEbMQHf1SMbPrAyLxvOmCI0fzxDTnMdG7JlaxIKYbEI3dq2KZpZHtLAGcLC0FqhWUdqLsVAyppJ9Kj1sPBc%2BSVnqSifyzFnFvgHMky6fT9h4nH2QtyGOiAOdqTUhGP5wq14qQ62%2F3Tma5OlJw3i38RTifiuAW7etvKtrrZ9oqLn7Vx1TGk2k0iL40xfK2EQ7rcPsWwde%2Bpq5Y1s6yRKxApYfPAlLYmm1W4BtY%2Bklwb8YtqS%2BOXT3IY5Y4P2ppHZ16CcUCx%2BH21ODJ6BzXTLlT%2Fsl4g%2Bd4XZGXeYJzwyhoekBRS7eYnpeBxVlVvb59XY5IgMtVb8s53kKMV8P8NyKCajHIqHYIFPVx194d0mt9wLR4RoH3nRhmQRTzrsjRsKBtIbYi7Jwg5MGJmrOQrzeD9mGn2AUISFOwZk%2BARy0lDc0k%2BP8aU%2FzqtxZej3snNNxCfA6d36x4LDiuL7zTFu1XFnnmXswpkbXSAxJaV7ZKKMf7oH4iCSr8VMO2i4MIGOqUByFVfY1%2BAhD10G1MzLL2DCAqesObrxQcWDJlH7QdATe2F0RY0Ez%2FiJl7kG0f611jWiSbiE93%2BlMqjMv%2Bd7OZaVBtJMNE7n4UV0uw3eN7Uc68JK3suL8P9rmJFQWt2T5TuByuivnnjMSYVj8609X%2FzU1QDJk%2B5gZoiC7IE5Z2gmx5KEJ8MLGTC0a06d%2FGTR%2BSHXQ%2BDS7hAP%2BDoc5uD1LRS%2BNcqEofW&X-Amz-Signature=87490c0d9755f272a1e7c543a0fda20d924e0c241d108a180e0be683104607a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
