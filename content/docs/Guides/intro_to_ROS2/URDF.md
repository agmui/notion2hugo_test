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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZFRJ4X%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkwn4%2BYRjqngrI1VWRNb2C7MkO559r1c9eD6YgwR0q3AiEA%2BBPOywvilGy38VQzzqAJrNgLguC2uj9xDCyfBLF2XxIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGSAMAgaHSlnPRVuSrcA706tfGd594FT3KxbkF7hxu86KGgk93I23uyeYqxR3NcEMewCOSYn10KHj9iW0cileTQcjQHJUxrHQtRM03SVu4nbcxaB%2Bci77ZssuI9LIx6zcVSXH4YZ7CEy2PddEQBvnGzaizS2U1C%2By1wf5ar0ReO9i6%2BItW5bcZH76Tw4AhG%2BDy%2FbNdt0aINxctXTSgn4uKE%2F%2Ft9gOGPETU8pwHGcg9wBiGat%2B3buai3cjqpuxUrWB2YvxCT7AaTTu46WjFKJLrrrFZKKsUm%2BojYcqM9Z1MNZz2K%2Bim85rtA%2FOI6XB5Dw0YuNz20nyVE6RU2UlwYv7ftAcPPVE6OQj7H9EgiQJ5uHpF20puOA3y9Jin7%2BCjO1MgfyNsF%2FACYEDGCu5dlJgipDah%2F1yk5Wi4%2BOhobmNgcZ9LgPMs88i1L82S%2FFbEPyMEg3J%2FPDbsgjt6cWfE%2BKXVvZVIqYiGt4ObXbw4feDeTPVweA5wPe9WdW57BQpozk134urjkGa7JYDsbBXY%2BbTSpYJp%2BINfcHjRc6emSjDQwbDjUgnKELdy0tgUJG4HOXhPPK9TF%2BJGXWEW4iYyVl5ZnMGUuNwdzGhKrwT42dHh%2Bz0dJKgtEi04Bmf0LKkWWfEoDsdla67f4%2FPqfMIOsvb8GOqUBqvdpOi67%2FxBEtdQYYEL4Gclv72op6qHpwkexa1eUZo0b9hR8UYBf5%2Fc0FlZPZkVUxevtgXM71AgdmNDMyDdVnRQCidd39LmudyoUfqjL%2BSwEj2jLCiangR9B7bTYcxa98PPmYnLChsef0hmCUtkgPO9oHxUyZ6lGlj8XYRf6XegE%2FY%2FaSFpNSre3vjsW4spyNc7KgsqF2PVwHBlgu56jtr8aU4z4&X-Amz-Signature=76f38e4e236f3eba56155948f5dc7e52f98bd45b078987388c67e4bac1743097&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZFRJ4X%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkwn4%2BYRjqngrI1VWRNb2C7MkO559r1c9eD6YgwR0q3AiEA%2BBPOywvilGy38VQzzqAJrNgLguC2uj9xDCyfBLF2XxIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGSAMAgaHSlnPRVuSrcA706tfGd594FT3KxbkF7hxu86KGgk93I23uyeYqxR3NcEMewCOSYn10KHj9iW0cileTQcjQHJUxrHQtRM03SVu4nbcxaB%2Bci77ZssuI9LIx6zcVSXH4YZ7CEy2PddEQBvnGzaizS2U1C%2By1wf5ar0ReO9i6%2BItW5bcZH76Tw4AhG%2BDy%2FbNdt0aINxctXTSgn4uKE%2F%2Ft9gOGPETU8pwHGcg9wBiGat%2B3buai3cjqpuxUrWB2YvxCT7AaTTu46WjFKJLrrrFZKKsUm%2BojYcqM9Z1MNZz2K%2Bim85rtA%2FOI6XB5Dw0YuNz20nyVE6RU2UlwYv7ftAcPPVE6OQj7H9EgiQJ5uHpF20puOA3y9Jin7%2BCjO1MgfyNsF%2FACYEDGCu5dlJgipDah%2F1yk5Wi4%2BOhobmNgcZ9LgPMs88i1L82S%2FFbEPyMEg3J%2FPDbsgjt6cWfE%2BKXVvZVIqYiGt4ObXbw4feDeTPVweA5wPe9WdW57BQpozk134urjkGa7JYDsbBXY%2BbTSpYJp%2BINfcHjRc6emSjDQwbDjUgnKELdy0tgUJG4HOXhPPK9TF%2BJGXWEW4iYyVl5ZnMGUuNwdzGhKrwT42dHh%2Bz0dJKgtEi04Bmf0LKkWWfEoDsdla67f4%2FPqfMIOsvb8GOqUBqvdpOi67%2FxBEtdQYYEL4Gclv72op6qHpwkexa1eUZo0b9hR8UYBf5%2Fc0FlZPZkVUxevtgXM71AgdmNDMyDdVnRQCidd39LmudyoUfqjL%2BSwEj2jLCiangR9B7bTYcxa98PPmYnLChsef0hmCUtkgPO9oHxUyZ6lGlj8XYRf6XegE%2FY%2FaSFpNSre3vjsW4spyNc7KgsqF2PVwHBlgu56jtr8aU4z4&X-Amz-Signature=07fb608df684265a271cad6d0ef0b0a51bf3ee78daafb449a939bdab3af892f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
