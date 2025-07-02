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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYUF4JB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnIkwYDdKMmFkf4SMj6yNgrQhjEDszqkhjQSSjuaNCdAIgCPKr0D%2F9KeXUfpHlUNShrWBfU5vLvQGZDOVrr3C6YzIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOs9pHd8EpCOImZY9SrcA3fLDZmBTVZGe2%2FK%2FGtljVAqWAAuR53aULa%2FOcFzSYooIl41yLpeKNIlw8KvLN96n27ekSXKHrLe1Pci95eCjQIQ2NrC7%2BBDN69GXK2FL%2BhAzjB4FZXRUnwwCtpVnTM2yiH3uMi5rf9bPLa3ccWLwZny8UNf5BWVKma4wyo8OXROMiB4bVcXmt48dWO1U%2Fs7nwWMiEMzoD2JChsUwc1WGE8y7X8D8oz45vEaqz4TKX0XSL3Xyb2bRUkZpB9B3oKBwDaQhNR5qGRBr42dUyO60FDoGbVvJeU6J%2F4P0cELKdLPf1YwGGmsV%2Fm462tcG%2F46JXrzp2YHZM998y77tp7ERuXD89F%2F6sAsJBDs5ItXuW0h9dCV9JoB3mjaj48icizlpG%2FSF5Ps65VknMMyrKqBXXCK0nvsLgh1CwgbsT6FABBGZDncy7Pk3P7wgJ5eeR%2BzKaaO%2BZgqGkxA31D%2F8ExR%2BL3punW3mLJUam05ukscm0UQ90a6LlCx86B4AgBM%2BsFX10tjLSE4v676J%2FgDsq1XImlh8npL25i1ydICf2eVHXUep%2BBwzsJ6UMn3pLKmBlIrOcbQ7upiexO3A%2B%2BFE%2Fv3sQkKwbKvEm%2FrbKN5sLPdEJ569bN1OKp3Hyr%2FkqHaMMzBlcMGOqUB5j%2BcFBO2rTxq5xxrDUNF%2FflDU0tutdOQ9velyDY5%2BBt2SoSxCqmN2iPWnaR0eLknprK9LGH8PAHl5BvnEGW9dFwA2mNsMi%2FQBgN4F4iwrwoY%2BWFQlFeuzfOaCwzJVA9hOb1%2Bh5xyQE7b2Lu0%2F3qRXuvFR%2BI%2FDRXDS%2Bfz0jpBwxwHL4tiYU6uf8r3744minNp8B%2BYpfMS00O9h1nQDrgDbpRRDen9&X-Amz-Signature=77a7d3bd9daeecf726c7e994bfaddf1f9324deb69639ba25993882e88719ad3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYUF4JB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnIkwYDdKMmFkf4SMj6yNgrQhjEDszqkhjQSSjuaNCdAIgCPKr0D%2F9KeXUfpHlUNShrWBfU5vLvQGZDOVrr3C6YzIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOs9pHd8EpCOImZY9SrcA3fLDZmBTVZGe2%2FK%2FGtljVAqWAAuR53aULa%2FOcFzSYooIl41yLpeKNIlw8KvLN96n27ekSXKHrLe1Pci95eCjQIQ2NrC7%2BBDN69GXK2FL%2BhAzjB4FZXRUnwwCtpVnTM2yiH3uMi5rf9bPLa3ccWLwZny8UNf5BWVKma4wyo8OXROMiB4bVcXmt48dWO1U%2Fs7nwWMiEMzoD2JChsUwc1WGE8y7X8D8oz45vEaqz4TKX0XSL3Xyb2bRUkZpB9B3oKBwDaQhNR5qGRBr42dUyO60FDoGbVvJeU6J%2F4P0cELKdLPf1YwGGmsV%2Fm462tcG%2F46JXrzp2YHZM998y77tp7ERuXD89F%2F6sAsJBDs5ItXuW0h9dCV9JoB3mjaj48icizlpG%2FSF5Ps65VknMMyrKqBXXCK0nvsLgh1CwgbsT6FABBGZDncy7Pk3P7wgJ5eeR%2BzKaaO%2BZgqGkxA31D%2F8ExR%2BL3punW3mLJUam05ukscm0UQ90a6LlCx86B4AgBM%2BsFX10tjLSE4v676J%2FgDsq1XImlh8npL25i1ydICf2eVHXUep%2BBwzsJ6UMn3pLKmBlIrOcbQ7upiexO3A%2B%2BFE%2Fv3sQkKwbKvEm%2FrbKN5sLPdEJ569bN1OKp3Hyr%2FkqHaMMzBlcMGOqUB5j%2BcFBO2rTxq5xxrDUNF%2FflDU0tutdOQ9velyDY5%2BBt2SoSxCqmN2iPWnaR0eLknprK9LGH8PAHl5BvnEGW9dFwA2mNsMi%2FQBgN4F4iwrwoY%2BWFQlFeuzfOaCwzJVA9hOb1%2Bh5xyQE7b2Lu0%2F3qRXuvFR%2BI%2FDRXDS%2Bfz0jpBwxwHL4tiYU6uf8r3744minNp8B%2BYpfMS00O9h1nQDrgDbpRRDen9&X-Amz-Signature=b02001fe32308b59db6d3999cd7275fb62625726fac2da51be27934888b2f7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
