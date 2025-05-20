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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5L73HB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2Bpfa5drEmzptx%2BKg5%2FZCFuAUDFNiIMxJ3LcP9vlY9jAiEAiVH9IaQxIUU%2FF3%2Fm1VFkCT2bGfOJ2yKWGZ2GEFwEx9YqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOokTJAwGQnYJZsE3SrcAztYQVXOKaLIGt7mAdepMvuEz%2BOZI2aSEhy9npjBYd4Cfqmu4rbU8CQJl5ICfRgtLr0NiUEKfIa1PwaX%2B8FTJnZiMlZb3dy2YcrAeFvqh8xghcgJO7iuV8%2Bkrb0WiVVoBnNQ3CKzpmpiwhHMTqW%2F4C8Yk1k2n0QGPU3ycklCeFaXDiNDpTi5VVXIbeZggmjZ7ZMGVeX%2BJ9oV%2F8I44W89GWPE2BD8wVUaH1%2FV96l0OwLlY1bvxbOSBDziRN6iHYH7fcUOmDet%2FDqnSrsd08JfSVULwZk1G%2FuUS2gSAeARcQsmqnojbV1420X9hJCSJ3cQuudGO1vIt8m72ulAGcrcogNiPHPVuA2CBpmw7bTVmg2EyRKfsa95xVW0ELMW4ZkgtkEwYmW7Z3%2F7n2fAuyYxEZ7fn%2FpRMN9jkVqv02qzXhw4oOSD3uODUsVKPJ0c7EnFvCea6RBHRicm5TmotgroUCOMsgtCWPhtIR%2BKpaYxUIbR8b9G%2BALIlQbF%2BxGGG9BdRmmNj92KzFaRbc85Diugvo6nOjOthFPEdIwuA8R97QKItx7Yu7r%2BSmJZGsjWf2EoiJC7PRQchXca34RJPv15opzEiPZ3Sqb6dK6%2Bx%2BnuyLmQWr7bOlQVFAfmnDYhMLyXssEGOqUBbxcwQTcMImZCkwwo8tZC9WsDTBao7GJ1cgvjV97z3tG%2Bgml2KKifkUvWIi2X4DzZtBGPKKW7MBhef0nEvh438BtV8ZpXoU4jGECoRzO0iaxH5g2eAb7WyxvFm1TDgJxtbAEY88gM%2BEeNm834tpe7eqrKEGHIN02vrJNwXn%2BIKwPJi1vEcQA3m%2BBdtEfu%2BPTnTx1dNSlgq%2ByNWCzbhstaM3ua8at%2F&X-Amz-Signature=abe1cd854483dd8d5127431c0f4901d0f3e18e0f5e39581fa8076c87d9f1fa3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5L73HB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2Bpfa5drEmzptx%2BKg5%2FZCFuAUDFNiIMxJ3LcP9vlY9jAiEAiVH9IaQxIUU%2FF3%2Fm1VFkCT2bGfOJ2yKWGZ2GEFwEx9YqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOokTJAwGQnYJZsE3SrcAztYQVXOKaLIGt7mAdepMvuEz%2BOZI2aSEhy9npjBYd4Cfqmu4rbU8CQJl5ICfRgtLr0NiUEKfIa1PwaX%2B8FTJnZiMlZb3dy2YcrAeFvqh8xghcgJO7iuV8%2Bkrb0WiVVoBnNQ3CKzpmpiwhHMTqW%2F4C8Yk1k2n0QGPU3ycklCeFaXDiNDpTi5VVXIbeZggmjZ7ZMGVeX%2BJ9oV%2F8I44W89GWPE2BD8wVUaH1%2FV96l0OwLlY1bvxbOSBDziRN6iHYH7fcUOmDet%2FDqnSrsd08JfSVULwZk1G%2FuUS2gSAeARcQsmqnojbV1420X9hJCSJ3cQuudGO1vIt8m72ulAGcrcogNiPHPVuA2CBpmw7bTVmg2EyRKfsa95xVW0ELMW4ZkgtkEwYmW7Z3%2F7n2fAuyYxEZ7fn%2FpRMN9jkVqv02qzXhw4oOSD3uODUsVKPJ0c7EnFvCea6RBHRicm5TmotgroUCOMsgtCWPhtIR%2BKpaYxUIbR8b9G%2BALIlQbF%2BxGGG9BdRmmNj92KzFaRbc85Diugvo6nOjOthFPEdIwuA8R97QKItx7Yu7r%2BSmJZGsjWf2EoiJC7PRQchXca34RJPv15opzEiPZ3Sqb6dK6%2Bx%2BnuyLmQWr7bOlQVFAfmnDYhMLyXssEGOqUBbxcwQTcMImZCkwwo8tZC9WsDTBao7GJ1cgvjV97z3tG%2Bgml2KKifkUvWIi2X4DzZtBGPKKW7MBhef0nEvh438BtV8ZpXoU4jGECoRzO0iaxH5g2eAb7WyxvFm1TDgJxtbAEY88gM%2BEeNm834tpe7eqrKEGHIN02vrJNwXn%2BIKwPJi1vEcQA3m%2BBdtEfu%2BPTnTx1dNSlgq%2ByNWCzbhstaM3ua8at%2F&X-Amz-Signature=31aeabecd8f2c7910e326d3dce047dc5dbe5137573b20b5685b1e466db1e5015&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
