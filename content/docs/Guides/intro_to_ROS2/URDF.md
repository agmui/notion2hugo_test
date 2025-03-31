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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VHZY52Q%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHoeIT5XOd64Pcoyh7mcm3RnsggiKMsZtEA%2BrshS4I4vAiAaCUq36tZp%2FcwzCNRjOH6CAbiPjuVUlporzS2IQj0L7CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRQa1aL4llJvK3CCKtwDw24XbqrJV3nRFjJjNC4AVGjpiDe%2Bv1PtiZDr8NFt4ve7Y7RBisk0JnwQvzgO%2Blet%2FXPC3rqdoVr%2FQOlgRL6ZU0NKM1E8ZP4uRDnPku%2BndHHc7qFYLzW1os%2Fho9ijgSeBK1aVtW4l%2B512ofFM%2B27TlKP0WjzNgE33PSpStbP%2BBREH9alAYbO6HuQVR3uouF8P5kh53zCPH0pjL0kw7%2Fo11FZPwinG3CAkUOCybZBntRJmz8mpAcTby4%2Fd5%2B5Yr1t9Bss9IP5wEsmLNmlq57uJDQwoJyy9URxMJckAngQ4EmWGl%2FPEA3ztHsGWdFfIYhdnyT2qz6hNEokmcZvGf%2F3D95q20BXUREDdIbWW5fDIxgwmo30mCmZ0wofQdv5SK2j1vIxiHdeBsVKZTGkqfc9XskiDZXZGTv3MT8eUiBx0R0kDFn1QB8sN6zFRhdsV69dURqJ6PBnT1pEnbVXq5othbICMoVTK2mmfE2IcMVDv2ssmu6uP1B1uVEFDf4t%2Br%2BupTgEkIYYAALxklSlf4h2%2Fq7PliOMYncVoc%2BOwUgeCs6575fGVOFqR80N0WAbwUfN1O5wA%2BvvGh6TOgrc4cwDV2JWViW1iumz3DEWd7sdqI%2B3YXPj%2B7ei6Se7fGXEwssyqvwY6pgEPWdVsFNNDA0UI7VWFbBY9wk682Qprinw4zvF0XUXQIDLkmP14zvW%2BPxyWhkUjdODosuAzKmbd9CbjfFHA%2BPJesnFassdeUhiygifKjX7Bd%2FZGbSAGUjPQb85pGwYX%2BxCOvzZ1XUUhEe4IYbgbUo19GZAzduEbQe7vwuF1ZZnBtwh16ka5mKQ1oxoJfIWzRgaEsozPmHZA9cIOoHCi2U%2BTsj4feVIi&X-Amz-Signature=875c1322dd4d435190666d6596c8e0458d2620545284a13412a66a15a3e1a253&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VHZY52Q%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHoeIT5XOd64Pcoyh7mcm3RnsggiKMsZtEA%2BrshS4I4vAiAaCUq36tZp%2FcwzCNRjOH6CAbiPjuVUlporzS2IQj0L7CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdRQa1aL4llJvK3CCKtwDw24XbqrJV3nRFjJjNC4AVGjpiDe%2Bv1PtiZDr8NFt4ve7Y7RBisk0JnwQvzgO%2Blet%2FXPC3rqdoVr%2FQOlgRL6ZU0NKM1E8ZP4uRDnPku%2BndHHc7qFYLzW1os%2Fho9ijgSeBK1aVtW4l%2B512ofFM%2B27TlKP0WjzNgE33PSpStbP%2BBREH9alAYbO6HuQVR3uouF8P5kh53zCPH0pjL0kw7%2Fo11FZPwinG3CAkUOCybZBntRJmz8mpAcTby4%2Fd5%2B5Yr1t9Bss9IP5wEsmLNmlq57uJDQwoJyy9URxMJckAngQ4EmWGl%2FPEA3ztHsGWdFfIYhdnyT2qz6hNEokmcZvGf%2F3D95q20BXUREDdIbWW5fDIxgwmo30mCmZ0wofQdv5SK2j1vIxiHdeBsVKZTGkqfc9XskiDZXZGTv3MT8eUiBx0R0kDFn1QB8sN6zFRhdsV69dURqJ6PBnT1pEnbVXq5othbICMoVTK2mmfE2IcMVDv2ssmu6uP1B1uVEFDf4t%2Br%2BupTgEkIYYAALxklSlf4h2%2Fq7PliOMYncVoc%2BOwUgeCs6575fGVOFqR80N0WAbwUfN1O5wA%2BvvGh6TOgrc4cwDV2JWViW1iumz3DEWd7sdqI%2B3YXPj%2B7ei6Se7fGXEwssyqvwY6pgEPWdVsFNNDA0UI7VWFbBY9wk682Qprinw4zvF0XUXQIDLkmP14zvW%2BPxyWhkUjdODosuAzKmbd9CbjfFHA%2BPJesnFassdeUhiygifKjX7Bd%2FZGbSAGUjPQb85pGwYX%2BxCOvzZ1XUUhEe4IYbgbUo19GZAzduEbQe7vwuF1ZZnBtwh16ka5mKQ1oxoJfIWzRgaEsozPmHZA9cIOoHCi2U%2BTsj4feVIi&X-Amz-Signature=6e4357360d952c2991a8c3b2fb8e46693a293415a62005b2377fe587da72d746&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
