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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BKIRGO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbh8YtjTKmbVT%2F2lYfVR1a7ZjxgVISI5wp1cLdSPsJMAiBJu%2FhWKpx71SeIzf9KkjvLCjh%2B1AoPA5nbLjppQMyhFiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9IZJIuOh%2FrTQ8yYKtwDHhQCiFaKcwZFdRdRVuhQQXq%2Brx9H7zHSQKJkHhiy3G3p7JQnNg6gDjun%2FF4ae6cdlfAa5XiPE5uEywMHWBN%2FG1pWliIsEYspsYHPJLUEadJ2d1VokKEDhdUytkONF0f6ky6TmGtYCTDGQNI7zxEJQ6DBIw8a9h5I1QIBzUtfnq8Ie54xG7fFpKCO7sWNd4NzcxQVT0nrGoKl1ZCtU85izEIOIBPWbmOhol8MZZrhIjPGWwnn6hsQLRFri97VA4doBi0CtHFjdDCsWbjq0hF65MysDhKbt%2FTULigX1AecDkCgBnfSXK0H1q0MCFl9zyMhwf%2BhidaNYP9KdLDX3fM5DSrprnXOsf%2F8iqDWkcz2li7ReP68ULnArorSnr%2FO6Py046XcCEXGjuIqGqFY%2Fi3ZirnrZwy14dHEKxAsjP%2BuCIjUJws9%2FzapxJ19AUL3%2Fwu1wubjVKKOm4QwbrcadiudJQzIVctOvrLy2lRO8PmNKPEbrZ49btz4mQVP2%2FyYooQVArxNsuQdZszqS25ZgSpaSao%2F3cL75gM%2Bie1do%2BbNvBBBMzXIW6LwRrhDHT5jTXt3LFc9VnvOjcjziVEKhrB%2Fk17AsGPBRJdosZcFT9Y7mbTJP86ZYO6qlXn0R%2B0wpZi1vQY6pgF0a1jarQgSHrnW9Xq3GvdDRUoIkOwXOr9W49scyt02CQPslJYCftC7P3zjr122XJdk9IPJJ25rg%2B4KZJP%2Bli68M%2FEphzHCvku2lwWC1lZULPMU%2B%2BbrrIUiqMo1iVz1H1ViEqvkHe6LHJINWbzkLLa8NtRLAAT7H1MVpp5p%2F2ZO7HMeLXxFHEThX3kRe4n4ne%2F1Yt1UpXPdNRVmQn4dve7k8T%2FmsH%2B7&X-Amz-Signature=b029d7e58f13aeced916dc9b98ad8dcdd0df9f8f0efbd5f5388a4275d9e24179&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BKIRGO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbh8YtjTKmbVT%2F2lYfVR1a7ZjxgVISI5wp1cLdSPsJMAiBJu%2FhWKpx71SeIzf9KkjvLCjh%2B1AoPA5nbLjppQMyhFiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9IZJIuOh%2FrTQ8yYKtwDHhQCiFaKcwZFdRdRVuhQQXq%2Brx9H7zHSQKJkHhiy3G3p7JQnNg6gDjun%2FF4ae6cdlfAa5XiPE5uEywMHWBN%2FG1pWliIsEYspsYHPJLUEadJ2d1VokKEDhdUytkONF0f6ky6TmGtYCTDGQNI7zxEJQ6DBIw8a9h5I1QIBzUtfnq8Ie54xG7fFpKCO7sWNd4NzcxQVT0nrGoKl1ZCtU85izEIOIBPWbmOhol8MZZrhIjPGWwnn6hsQLRFri97VA4doBi0CtHFjdDCsWbjq0hF65MysDhKbt%2FTULigX1AecDkCgBnfSXK0H1q0MCFl9zyMhwf%2BhidaNYP9KdLDX3fM5DSrprnXOsf%2F8iqDWkcz2li7ReP68ULnArorSnr%2FO6Py046XcCEXGjuIqGqFY%2Fi3ZirnrZwy14dHEKxAsjP%2BuCIjUJws9%2FzapxJ19AUL3%2Fwu1wubjVKKOm4QwbrcadiudJQzIVctOvrLy2lRO8PmNKPEbrZ49btz4mQVP2%2FyYooQVArxNsuQdZszqS25ZgSpaSao%2F3cL75gM%2Bie1do%2BbNvBBBMzXIW6LwRrhDHT5jTXt3LFc9VnvOjcjziVEKhrB%2Fk17AsGPBRJdosZcFT9Y7mbTJP86ZYO6qlXn0R%2B0wpZi1vQY6pgF0a1jarQgSHrnW9Xq3GvdDRUoIkOwXOr9W49scyt02CQPslJYCftC7P3zjr122XJdk9IPJJ25rg%2B4KZJP%2Bli68M%2FEphzHCvku2lwWC1lZULPMU%2B%2BbrrIUiqMo1iVz1H1ViEqvkHe6LHJINWbzkLLa8NtRLAAT7H1MVpp5p%2F2ZO7HMeLXxFHEThX3kRe4n4ne%2F1Yt1UpXPdNRVmQn4dve7k8T%2FmsH%2B7&X-Amz-Signature=d7ced12ddc066145f04422d6f26f00ecb39251540a7d7ee8ee1730748f22f481&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
