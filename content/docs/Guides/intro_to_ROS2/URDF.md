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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAKYOG4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDXa2NfSM8GffyILDwmRrWv2DWUMdSFkDIQM3c4AfsugAIhAJtFwNfj7h1N5NUX2CQs8GXu2etXRH2bDa5Ae5%2BbShiQKv8DCHEQABoMNjM3NDIzMTgzODA1Igwn4ZnAXtWyh%2BqcxWwq3AOf3oo7WzjfUPKU1mKathz5KN9lK%2Fuj6VPqDDoYPN6p9pV67kMzIvy%2BqeQhG87aR04Q%2BNr2RMVNH%2FbVE9TVybunXMRVXw%2FDeTekbQ%2BdqqTH2O08sPQXSqfcQpBzTjAOuLdgpIU20kW%2BLN9n8FV3OwAFEs4QRiXTQ%2B6htwAPwHV%2BqwyqaMb36JepMLj0lcz1QuB36mPvcmloJId6ngI4TCU%2BntoAEKntW4I8ASmKjRDxPFQYxEndBNYIsKL2YhQDUb%2FCAsDhwqtQatOMPIYIVkqqNn41KLdl7q5IMwCl8whZp%2FeLS673vhEzo4vxCyWLqEEjBSxFQJibShBqJEirGzpEAfaoBULzslRMJXCC8uOdJs801MppydKZ8PZaPs58f1tb8cfOy3%2FmCa3wHNn%2BcmLML5jCop83%2B9t3ggbd4Ccf05qcFTJV6P7K1sOpc9l%2FkxDnTDEr%2FbgQgPfI%2FpzPMEp7y1RY%2BsbEC1UbQ0yJhWgkqeXXGzGK6%2B6zMa9OO06K0yXqJV11s96cg8lvTl9wm%2BjcSuveA6TZGtSF1qiJNvEhOfuF%2B9IqOhmczXoXJcVWfeTZNJI8OgCSxcnLZKi0f9x4wVAZWRzEr17PLtvvRbBn1lB6MESHPA3chtuuwjCE%2B5a9BjqkASHpKjGXtSilD1PHiiDvFef7S8Wx1nt75AvT6pr8FcMrJgnvGjXTetOkSS0h5YlMyXy798Yo1cHP%2BRymm6DlMiN1Z0Fkrr1EI6uLvhIn8cEdWEgzg508TDWdYiuO26hnCadoJ4xf2Wadf1VjEuHrpiVTcU6yiwQ61fPOo9i9GCry9R2JexULwFCQ2Yv%2FMXXx3yOMPzapwEl25%2FdWbWfXo7%2Fv2%2BiQ&X-Amz-Signature=589e1e91aee8a5919f2d488bfa2de2a8667109a8da622478a888078ff352e6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAKYOG4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDXa2NfSM8GffyILDwmRrWv2DWUMdSFkDIQM3c4AfsugAIhAJtFwNfj7h1N5NUX2CQs8GXu2etXRH2bDa5Ae5%2BbShiQKv8DCHEQABoMNjM3NDIzMTgzODA1Igwn4ZnAXtWyh%2BqcxWwq3AOf3oo7WzjfUPKU1mKathz5KN9lK%2Fuj6VPqDDoYPN6p9pV67kMzIvy%2BqeQhG87aR04Q%2BNr2RMVNH%2FbVE9TVybunXMRVXw%2FDeTekbQ%2BdqqTH2O08sPQXSqfcQpBzTjAOuLdgpIU20kW%2BLN9n8FV3OwAFEs4QRiXTQ%2B6htwAPwHV%2BqwyqaMb36JepMLj0lcz1QuB36mPvcmloJId6ngI4TCU%2BntoAEKntW4I8ASmKjRDxPFQYxEndBNYIsKL2YhQDUb%2FCAsDhwqtQatOMPIYIVkqqNn41KLdl7q5IMwCl8whZp%2FeLS673vhEzo4vxCyWLqEEjBSxFQJibShBqJEirGzpEAfaoBULzslRMJXCC8uOdJs801MppydKZ8PZaPs58f1tb8cfOy3%2FmCa3wHNn%2BcmLML5jCop83%2B9t3ggbd4Ccf05qcFTJV6P7K1sOpc9l%2FkxDnTDEr%2FbgQgPfI%2FpzPMEp7y1RY%2BsbEC1UbQ0yJhWgkqeXXGzGK6%2B6zMa9OO06K0yXqJV11s96cg8lvTl9wm%2BjcSuveA6TZGtSF1qiJNvEhOfuF%2B9IqOhmczXoXJcVWfeTZNJI8OgCSxcnLZKi0f9x4wVAZWRzEr17PLtvvRbBn1lB6MESHPA3chtuuwjCE%2B5a9BjqkASHpKjGXtSilD1PHiiDvFef7S8Wx1nt75AvT6pr8FcMrJgnvGjXTetOkSS0h5YlMyXy798Yo1cHP%2BRymm6DlMiN1Z0Fkrr1EI6uLvhIn8cEdWEgzg508TDWdYiuO26hnCadoJ4xf2Wadf1VjEuHrpiVTcU6yiwQ61fPOo9i9GCry9R2JexULwFCQ2Yv%2FMXXx3yOMPzapwEl25%2FdWbWfXo7%2Fv2%2BiQ&X-Amz-Signature=0ba930fb58c84892d1f8256273a5e733ed2af1b9d537435c0243f68b4d6e1b72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
