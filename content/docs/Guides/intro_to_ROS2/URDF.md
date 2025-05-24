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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUWPFDB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC4%2FKeNKNdOH8%2BS9lYksInwzXGkhrkMrs48zkOGI4wUfgIhAKHz%2B8ivPCWk9jQdDa3DPQMrG1qgEsXHyiDZXZNaZvYiKv8DCB0QABoMNjM3NDIzMTgzODA1Igy3qB2cO1panHEQRssq3AOo8gHyrK02Df5995NMEwvjUm56Ry9%2FdwPTdpGrJe3S%2BGZGbZowjZiCUeiqvsXi93N%2Bsr%2FejYcglpsOQ8RLHF6lodpdDcvx2tBusH5OQlgQmYl1XjTaN7y1%2FW0rtrQ9f9TuyXyuXuBB78ep35jcCHnl%2FyUat8VNfmtzKONR8%2FWMmnjsvWH%2BrePTiIVyrC7JxEaQyYUhqu%2FNE%2Fshyr9vpDM3jdqIqlMFDBDZDWcoSJVVZy99l%2FjL1Z7VuSTCuDR9853ordqCs%2FjNktIjeHbM5z3GZdwzQlMd8%2FrsZVkYXfZM7%2BxgcSf18DphPH37uNJHbLb7vBrGStjlCoazzreXzjM3nx7KKMZUjTtuoVNjWDbnfGCmxEyjdsPiU8MLG9Zczg97bjs8IKrXAOeqUWZx%2FFr4DgsWGN8M2jIwnKrbsLLsMeZ7WhlczwOkkr3OkBOkH0Pm8cGT%2Bi%2Fg42z9nzl%2BIRUYAJUxVlm888yt05zXvy%2FSj80Io5ZlnzXj0p7MR1OHMANYudpeaNiAlUZaKPi%2BehT9Sh957OeA4329IgWz3P6Vyw0dC5zuJPoyQx8MPLZB7b2%2F16TE9puIj1Bfb3WOKfOVBmcNxz4B%2BfYbNcEtdZNFcF5mBbiroHvGLdhYMzDSy8jBBjqkAZNfJQhRxRjTXo97WyzMxnZPuzgQVxwAVzU%2B9nnOs8eUXTZ4KxOdf6MkCCdK4uQw9lv%2FtOxV1MXVT9qsUSRkHxhqzR5hgfWr%2Fhv50W10BTzs5iKfHWfNy8SOp9FdyH%2FGjnWe0bjBtQ%2F9ZLySLHuYjc90OzLbYsh8sjzNxpcuyPLlHJqrvdaIAjmzNtMmsZn4Ah1byKOotj9HDlZ3Vnqcq5kZqk9X&X-Amz-Signature=b48bbf9d402af584f29cd505081eb8c674951b02c0487a777d48962084fffbe1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUWPFDB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC4%2FKeNKNdOH8%2BS9lYksInwzXGkhrkMrs48zkOGI4wUfgIhAKHz%2B8ivPCWk9jQdDa3DPQMrG1qgEsXHyiDZXZNaZvYiKv8DCB0QABoMNjM3NDIzMTgzODA1Igy3qB2cO1panHEQRssq3AOo8gHyrK02Df5995NMEwvjUm56Ry9%2FdwPTdpGrJe3S%2BGZGbZowjZiCUeiqvsXi93N%2Bsr%2FejYcglpsOQ8RLHF6lodpdDcvx2tBusH5OQlgQmYl1XjTaN7y1%2FW0rtrQ9f9TuyXyuXuBB78ep35jcCHnl%2FyUat8VNfmtzKONR8%2FWMmnjsvWH%2BrePTiIVyrC7JxEaQyYUhqu%2FNE%2Fshyr9vpDM3jdqIqlMFDBDZDWcoSJVVZy99l%2FjL1Z7VuSTCuDR9853ordqCs%2FjNktIjeHbM5z3GZdwzQlMd8%2FrsZVkYXfZM7%2BxgcSf18DphPH37uNJHbLb7vBrGStjlCoazzreXzjM3nx7KKMZUjTtuoVNjWDbnfGCmxEyjdsPiU8MLG9Zczg97bjs8IKrXAOeqUWZx%2FFr4DgsWGN8M2jIwnKrbsLLsMeZ7WhlczwOkkr3OkBOkH0Pm8cGT%2Bi%2Fg42z9nzl%2BIRUYAJUxVlm888yt05zXvy%2FSj80Io5ZlnzXj0p7MR1OHMANYudpeaNiAlUZaKPi%2BehT9Sh957OeA4329IgWz3P6Vyw0dC5zuJPoyQx8MPLZB7b2%2F16TE9puIj1Bfb3WOKfOVBmcNxz4B%2BfYbNcEtdZNFcF5mBbiroHvGLdhYMzDSy8jBBjqkAZNfJQhRxRjTXo97WyzMxnZPuzgQVxwAVzU%2B9nnOs8eUXTZ4KxOdf6MkCCdK4uQw9lv%2FtOxV1MXVT9qsUSRkHxhqzR5hgfWr%2Fhv50W10BTzs5iKfHWfNy8SOp9FdyH%2FGjnWe0bjBtQ%2F9ZLySLHuYjc90OzLbYsh8sjzNxpcuyPLlHJqrvdaIAjmzNtMmsZn4Ah1byKOotj9HDlZ3Vnqcq5kZqk9X&X-Amz-Signature=784cd763822844cf87cb427c889cbed4d7c649869e8bad03082c02928993266e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
