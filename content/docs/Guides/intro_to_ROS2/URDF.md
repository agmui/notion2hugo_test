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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H6FMRJI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGUbHCoBqPFuIpmF9IaDnymJxcTm1g060eGjCi0efv7rAiEAncsWVcD%2Fhg%2FGsxk2wXIYquwQm1Ke0pKYLd8oCGWMyzQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPM8%2BYgqm5tEePkHEircA40byJ00LzTvcle38us%2F0ZeO7X27nusZ9z1rS%2FtQdMarRuGx%2B%2BNw%2FaydJyT6CgEXZuHS93Ephoe28v3FQh4mZnEUleZ6nRFdDYG9b2OwP1kbb8KxIbB9y6cFcuMGixs2q7CYIfuOyDYBfnCITBpLlXiF1uuk586%2BEMz10c54BmLe40ghPeLl3bgkHpaRIlr9xiIyI093vQabJ9B35Jj06tUj8zbqFeMjFie2leWjAME47uTpsHN94x6iPJE2ptvq4okU8wpJQmPTX3s0dF45556YQNqDR2nU5MjyqB61vmt8dfDkBoUMh%2BF6k7ur7H8%2Bzxwa0IZ31CpOQJJB1zd8LliVW2kQRp0c03qtDR6DjnwnFnVvovb0X79zzsDlZOEAe6GCOnphztfJ4rsMLoxyDREfsS5%2FuoMzlxCbcQO%2FltHsxUO4F65lIA37YzUZ1CYN%2Bit3N1dj8TzzIa5k0R0%2F3VE3Ih4la7lMYnGTiJGD0icWIzrhiHoMbxcYif2YIrAMz6%2BGAKeDvpec35r%2FjtDeB%2F7fTEFVOB9uF3nQ%2FH7KNFcH7EY30d%2F5cLYYu3eTBMyYEQx8lRZkGZvkQNRSb9EQbbMYTbwTn8j9ZtFRRbRrrVyQregfab5L82Ioyy0OMImH1sAGOqUBI37QBO1UIEYKBMNtsieVkgHr%2B8qRV5DCIy%2FE2eID7DtwajolzQgFGwgDm70npSj%2Bw6bY6tzqwj6UhgQQYSnI7rAfhmSji5p%2FDPD05pR34ubyJAcxyxa3PzeSM%2B7zlKgkqKatXLHH92t4jjzwdfYvN%2Bae9HK9ONyQrgkFfC9u4S1McYBeXfXzwS0UJrNrtvLjknz83HTcqXaLY1qrORG9ZAefqjv5&X-Amz-Signature=d88a0ac311c58797dc2488fd707dbd8d3587ba126bead69a7ed922cee22b69f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H6FMRJI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIGUbHCoBqPFuIpmF9IaDnymJxcTm1g060eGjCi0efv7rAiEAncsWVcD%2Fhg%2FGsxk2wXIYquwQm1Ke0pKYLd8oCGWMyzQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPM8%2BYgqm5tEePkHEircA40byJ00LzTvcle38us%2F0ZeO7X27nusZ9z1rS%2FtQdMarRuGx%2B%2BNw%2FaydJyT6CgEXZuHS93Ephoe28v3FQh4mZnEUleZ6nRFdDYG9b2OwP1kbb8KxIbB9y6cFcuMGixs2q7CYIfuOyDYBfnCITBpLlXiF1uuk586%2BEMz10c54BmLe40ghPeLl3bgkHpaRIlr9xiIyI093vQabJ9B35Jj06tUj8zbqFeMjFie2leWjAME47uTpsHN94x6iPJE2ptvq4okU8wpJQmPTX3s0dF45556YQNqDR2nU5MjyqB61vmt8dfDkBoUMh%2BF6k7ur7H8%2Bzxwa0IZ31CpOQJJB1zd8LliVW2kQRp0c03qtDR6DjnwnFnVvovb0X79zzsDlZOEAe6GCOnphztfJ4rsMLoxyDREfsS5%2FuoMzlxCbcQO%2FltHsxUO4F65lIA37YzUZ1CYN%2Bit3N1dj8TzzIa5k0R0%2F3VE3Ih4la7lMYnGTiJGD0icWIzrhiHoMbxcYif2YIrAMz6%2BGAKeDvpec35r%2FjtDeB%2F7fTEFVOB9uF3nQ%2FH7KNFcH7EY30d%2F5cLYYu3eTBMyYEQx8lRZkGZvkQNRSb9EQbbMYTbwTn8j9ZtFRRbRrrVyQregfab5L82Ioyy0OMImH1sAGOqUBI37QBO1UIEYKBMNtsieVkgHr%2B8qRV5DCIy%2FE2eID7DtwajolzQgFGwgDm70npSj%2Bw6bY6tzqwj6UhgQQYSnI7rAfhmSji5p%2FDPD05pR34ubyJAcxyxa3PzeSM%2B7zlKgkqKatXLHH92t4jjzwdfYvN%2Bae9HK9ONyQrgkFfC9u4S1McYBeXfXzwS0UJrNrtvLjknz83HTcqXaLY1qrORG9ZAefqjv5&X-Amz-Signature=adb40b8f3fbe6eb8ecfebfa46b162d169920b95a351f02f99b6abe528152198a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
