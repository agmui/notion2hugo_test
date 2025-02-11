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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWMXE7K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B1qktYMoBi5sKdQYqto2PUYGY%2BaaWCahItTdQKXQE9AiA%2F%2BcPQ9DAGdWMwsVU7JQCBL1vqsQtpXMM4g8ttccpakyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQ8bP6h07M8Sb3zFKtwD22IdOUz8RvrdNXwxFlziI9f03LchO%2FkbRwiUkX%2FJ8eUGD74gvF28vKjtFofhhyhMkI5k55pgVaolWB2sSD3sIpLTR9jEB4r1XuRleB4tnUGvf4tNJfk8SC5%2FCv4hGCJDJIjcBXPRXaPVJQxUEymMtLDRjqE3BCSaw%2Fizuvec2P1b8S92rKX7TyMXXUiLGTbmXtuRN1LJRG19HuwdaTe19eFrFCUj6OifBQF%2FZ7pFvKlB1w09EWlopofEnAcG3pnXiTGF4jTrYBelRCdpqfG0srFvZBP81PL0crcVDQYkOoBf72Acz6zXgWnZ2gi%2FK0e5X%2BU0a12i7ljbgypkDGtDNQAOmhyxN%2FH8GZaslCkbtGzqgEvPEC8DqrnH%2Bz6wGKClxHMXrmJ6OsgGbEv6IXdNxuvy76EV9zgTqpvhE%2FnUHkqQyWsjN5IBzpWO8i9TGYyA5eYGs12VXdFuLwZKeDmWaOPsHxYV6WNgL7Ojnie%2FIFcCo5QH0aqkb6SkWyVRzxL93czrkJDo35OkoU12SFZDydOuhvjWtu5Ob%2FlKdTG1Yj5paG171c9fdRP9Y6jTJxCEothDVZPSs1RYizhAd3S7jBv9sPAYiU27kh6NYmph0UJX8KZTkooY2wHrNf0w6a2uvQY6pgGxp7lHZO7VMT17ET91BJar%2Fd14Ms5mmE2CRLUoJ1ZaUzutq3s4kktGi3YrrbuSOl1zBM3OuqOVh2eLfcWskzSV1UPh0LzAtQWx1QfAyltphYRRdEz6TcuqgFhNcZJM72U6aC86JGoOZlcG3PC3afuvG4G1o54LXyTaX4x6kdNxwuwYLg9dvx27ACyFL6kCg0C3v6frkgiVmH5hQl2Q9yGWfHlV5a9I&X-Amz-Signature=dac4ae59867f387e9274eb77ac4059623b6e425d4985d1cdf79193c1f1d45f78&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWMXE7K%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B1qktYMoBi5sKdQYqto2PUYGY%2BaaWCahItTdQKXQE9AiA%2F%2BcPQ9DAGdWMwsVU7JQCBL1vqsQtpXMM4g8ttccpakyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQ8bP6h07M8Sb3zFKtwD22IdOUz8RvrdNXwxFlziI9f03LchO%2FkbRwiUkX%2FJ8eUGD74gvF28vKjtFofhhyhMkI5k55pgVaolWB2sSD3sIpLTR9jEB4r1XuRleB4tnUGvf4tNJfk8SC5%2FCv4hGCJDJIjcBXPRXaPVJQxUEymMtLDRjqE3BCSaw%2Fizuvec2P1b8S92rKX7TyMXXUiLGTbmXtuRN1LJRG19HuwdaTe19eFrFCUj6OifBQF%2FZ7pFvKlB1w09EWlopofEnAcG3pnXiTGF4jTrYBelRCdpqfG0srFvZBP81PL0crcVDQYkOoBf72Acz6zXgWnZ2gi%2FK0e5X%2BU0a12i7ljbgypkDGtDNQAOmhyxN%2FH8GZaslCkbtGzqgEvPEC8DqrnH%2Bz6wGKClxHMXrmJ6OsgGbEv6IXdNxuvy76EV9zgTqpvhE%2FnUHkqQyWsjN5IBzpWO8i9TGYyA5eYGs12VXdFuLwZKeDmWaOPsHxYV6WNgL7Ojnie%2FIFcCo5QH0aqkb6SkWyVRzxL93czrkJDo35OkoU12SFZDydOuhvjWtu5Ob%2FlKdTG1Yj5paG171c9fdRP9Y6jTJxCEothDVZPSs1RYizhAd3S7jBv9sPAYiU27kh6NYmph0UJX8KZTkooY2wHrNf0w6a2uvQY6pgGxp7lHZO7VMT17ET91BJar%2Fd14Ms5mmE2CRLUoJ1ZaUzutq3s4kktGi3YrrbuSOl1zBM3OuqOVh2eLfcWskzSV1UPh0LzAtQWx1QfAyltphYRRdEz6TcuqgFhNcZJM72U6aC86JGoOZlcG3PC3afuvG4G1o54LXyTaX4x6kdNxwuwYLg9dvx27ACyFL6kCg0C3v6frkgiVmH5hQl2Q9yGWfHlV5a9I&X-Amz-Signature=825ba4dd07357d41bb4bc773b6c4f32a5a60416661161ab50b8159ec734ec04b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
