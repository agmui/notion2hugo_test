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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6QV5BJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdgUCXl4rcN4dV6kfpIqpzRjZJB4Ui%2F8Tgd%2BG6IXf6dAiEApkONJlW3yvC8BzhEpLvTw7ZTCDhCY%2BKolL8N9wgozOMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJEKFCcCqyokdMdQbCrcAx%2FjMBGxo6m2948wwqWaJoF7Tx5ufoCZ38V0670L59ZLHOXHgy78kIGiw400YngUz5onpy0TYlkZIRN3SNj5cv6%2FbD2ZcF8hi6c1MUlSwQEdgzHVuhHgYL6PrrcScMFcYnltG2shEnbe1mXirFDxBDGE%2BIb5BeWO3rZh5h239xIb9l9BMfdf46Xe91jqsFj52%2BhcyQFzhvgO%2B4O%2FqLDzedV83JM8rZHOo1A5fiQESPwQH24%2FRM%2FPtDr0eA1ZxM6TXRIWm%2BBMESsllgu5XIkpO1UB7m5jeJ8ae5EJSuMcbREDqriNO%2BeqtdxOMDxKnR%2FRL5UhCc1ef21fNek948GhJTueCWkhTonVq%2FtGTJYXXviHKIPUwDX0xUU25op1IYNsd1rFNXMJtJKZBmCzSb4IVUEmI8gL4vn47IXc6xCsolMEJkSjDPoUPFXXhEqDpCH0%2BC0exIZ5bso2zZg444ZML96qytaZNaTKnWlVKz4UBCvKR%2BFK87ObtbHzlubPjMAMEGP513z%2FxlHDFthF4C1eAqNL8HaVjOT7kgaFkreR0%2BOHyiEiL4UN0M%2FKF936kBEhUueS3CEKpHSLzNVkc%2FER%2BC8o%2FjLx%2FMZ43DYFAfvHrmqfWJ2e3y0Fr1rdFa3eMKKHqr4GOqUB53iizAhnlL7EYKZPVsjPgcaW4oavBO4itgZLxdVZ%2FtIaDdScPk49iLPKGvI1ryMmc39C0m6o0Fiz27AAkaiSviWiBiDxjXbsrRUeEuhaqWpEV20ljzSLz3rFbLvQpuV58UnEgfPAcqwPM5TyScZPeE2qTKr2DqbQFsJETKmxXaYHGhyB8KdC9nFh6pPrSPjqL1dVQAy7dTkSj2n4sGnFt3DU9iiF&X-Amz-Signature=9082be5a27379bb1399eb39bd39ed07ba641dbba4a36b555116187affac798b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6QV5BJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdgUCXl4rcN4dV6kfpIqpzRjZJB4Ui%2F8Tgd%2BG6IXf6dAiEApkONJlW3yvC8BzhEpLvTw7ZTCDhCY%2BKolL8N9wgozOMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJEKFCcCqyokdMdQbCrcAx%2FjMBGxo6m2948wwqWaJoF7Tx5ufoCZ38V0670L59ZLHOXHgy78kIGiw400YngUz5onpy0TYlkZIRN3SNj5cv6%2FbD2ZcF8hi6c1MUlSwQEdgzHVuhHgYL6PrrcScMFcYnltG2shEnbe1mXirFDxBDGE%2BIb5BeWO3rZh5h239xIb9l9BMfdf46Xe91jqsFj52%2BhcyQFzhvgO%2B4O%2FqLDzedV83JM8rZHOo1A5fiQESPwQH24%2FRM%2FPtDr0eA1ZxM6TXRIWm%2BBMESsllgu5XIkpO1UB7m5jeJ8ae5EJSuMcbREDqriNO%2BeqtdxOMDxKnR%2FRL5UhCc1ef21fNek948GhJTueCWkhTonVq%2FtGTJYXXviHKIPUwDX0xUU25op1IYNsd1rFNXMJtJKZBmCzSb4IVUEmI8gL4vn47IXc6xCsolMEJkSjDPoUPFXXhEqDpCH0%2BC0exIZ5bso2zZg444ZML96qytaZNaTKnWlVKz4UBCvKR%2BFK87ObtbHzlubPjMAMEGP513z%2FxlHDFthF4C1eAqNL8HaVjOT7kgaFkreR0%2BOHyiEiL4UN0M%2FKF936kBEhUueS3CEKpHSLzNVkc%2FER%2BC8o%2FjLx%2FMZ43DYFAfvHrmqfWJ2e3y0Fr1rdFa3eMKKHqr4GOqUB53iizAhnlL7EYKZPVsjPgcaW4oavBO4itgZLxdVZ%2FtIaDdScPk49iLPKGvI1ryMmc39C0m6o0Fiz27AAkaiSviWiBiDxjXbsrRUeEuhaqWpEV20ljzSLz3rFbLvQpuV58UnEgfPAcqwPM5TyScZPeE2qTKr2DqbQFsJETKmxXaYHGhyB8KdC9nFh6pPrSPjqL1dVQAy7dTkSj2n4sGnFt3DU9iiF&X-Amz-Signature=374daf07feb44d889a31234f887f01ff4ed38fe572dc04ff6313f055b456a66e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
