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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664372UGEJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCIVtj38rLwaIyhsygWAzCKxhOX0GYUGo5XvJxdIacsKAIgXdoQfZEUAJpsh9NVwf%2FjV1x2sRLpjOwNGCFg6r2nLV0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFb5AVh%2FePdS7IYTsCrcA5BK%2FN%2FuM2%2BSzL3lD48GUnrFnj3A%2F2ec5DHQk0pjOtnIvCcZlvnfyuzVnyHagLRl%2Fymzf22v%2FAxvvBV54IfI1n2Aj0p%2FNYCLQB%2F%2FgBDOsvHmNYoSgQXzg7%2FFczgWkPzRvoE%2B4iuDeDliEOyf4twQcYIbrWH%2Fr367EL%2BFa5QVtGVabf3hbN7MdUU6EjlsPwImmjbBoe0oAYCMfCiC26EvEUwBYYFna9gQ8harkPRwNuFm73vgYLsQQz48Gjs7gzGrP%2BxroKZYSaJVdmFcKZe7d2qI2Q4Aq6lGDRgpllYBrKvSQwfyWdIuRoprBFztht4Ro6X2ts4F16YwtYO7yLiaVuSHoVBzkvhIXcfOjzNOwqHMzo3AWYh9VNUf0AWWG%2BOLQuCpnnpcgE4oQNb24YfF%2F4bNU4BZkG4NliWl4W8sSoQx2PhVTCgXkA9Rn37sOtrrRk82SozMJlcQwH9uwUQN%2BBOluoBJcGdrn5PdKAktY7hxh5tI5EMts1zkKCnFnTYF%2BXfA1azxt0OCS6284aB3FqVKAB3DK5lWZXSi8%2Fs76vhckqRdZnen48Eu%2B%2FGrJULFw%2FB74znIw4sGVWzBQgvvLBqtknm%2BC17qqGDhAYBHDu36Z9aJjStUuFmUPDNRMKHy0sAGOqUB%2BHmE4dhnm7gP6mlOa4Dr7pQ1fE1UWYTWLbVdqX9QsKLkSLoBcn7LwIliT0m20Qz2zWPFADvbzxYksHxCykNPVNuRxJAP6Po1lNp%2B0q1iW4rC3755x5TLA2hD3b6wBy%2B5WjE6C6wsCLgsQ5U15Gl%2FO56wNW%2FohzADyuOvwTCGg5CFE0KplHoFBZp4k1D6Rj%2BTjOJKplXx%2BXgNJAbMtbNBIeFLcoe7&X-Amz-Signature=6d5038a11d8aec86340e07246c0a82425f559d1e42b920c5de407a1fc4e599f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664372UGEJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCIVtj38rLwaIyhsygWAzCKxhOX0GYUGo5XvJxdIacsKAIgXdoQfZEUAJpsh9NVwf%2FjV1x2sRLpjOwNGCFg6r2nLV0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFb5AVh%2FePdS7IYTsCrcA5BK%2FN%2FuM2%2BSzL3lD48GUnrFnj3A%2F2ec5DHQk0pjOtnIvCcZlvnfyuzVnyHagLRl%2Fymzf22v%2FAxvvBV54IfI1n2Aj0p%2FNYCLQB%2F%2FgBDOsvHmNYoSgQXzg7%2FFczgWkPzRvoE%2B4iuDeDliEOyf4twQcYIbrWH%2Fr367EL%2BFa5QVtGVabf3hbN7MdUU6EjlsPwImmjbBoe0oAYCMfCiC26EvEUwBYYFna9gQ8harkPRwNuFm73vgYLsQQz48Gjs7gzGrP%2BxroKZYSaJVdmFcKZe7d2qI2Q4Aq6lGDRgpllYBrKvSQwfyWdIuRoprBFztht4Ro6X2ts4F16YwtYO7yLiaVuSHoVBzkvhIXcfOjzNOwqHMzo3AWYh9VNUf0AWWG%2BOLQuCpnnpcgE4oQNb24YfF%2F4bNU4BZkG4NliWl4W8sSoQx2PhVTCgXkA9Rn37sOtrrRk82SozMJlcQwH9uwUQN%2BBOluoBJcGdrn5PdKAktY7hxh5tI5EMts1zkKCnFnTYF%2BXfA1azxt0OCS6284aB3FqVKAB3DK5lWZXSi8%2Fs76vhckqRdZnen48Eu%2B%2FGrJULFw%2FB74znIw4sGVWzBQgvvLBqtknm%2BC17qqGDhAYBHDu36Z9aJjStUuFmUPDNRMKHy0sAGOqUB%2BHmE4dhnm7gP6mlOa4Dr7pQ1fE1UWYTWLbVdqX9QsKLkSLoBcn7LwIliT0m20Qz2zWPFADvbzxYksHxCykNPVNuRxJAP6Po1lNp%2B0q1iW4rC3755x5TLA2hD3b6wBy%2B5WjE6C6wsCLgsQ5U15Gl%2FO56wNW%2FohzADyuOvwTCGg5CFE0KplHoFBZp4k1D6Rj%2BTjOJKplXx%2BXgNJAbMtbNBIeFLcoe7&X-Amz-Signature=527928a5afacdb5e321d9dd17c710825f4cdbfef398c5e668deae4fb3f7c08e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
