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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMVPTPG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHEjkjimWPQHBzLeBhVpe4wvpffhQ%2BIHgXkP3jVmdvy3AiEAxEpTy1J3nj8qVFiM8ZYPV7ok4VahkYqoXbLCSZ%2BRuIgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNbczCGtFOJ0n5P0vircA6LES3ATht4IZ%2Bn9JKlOWrNRya8v74O8w%2FLQxMPhwuvlETi1zjvUPUYQMRkAIJ%2FfHdi16apoMg4uaqL76yL91380jw1SkudYuhdwWRyCWphTUhtRIr%2BvwHP0nvctofF3XZJaGprAQ1r%2BZAUzN92AyrYbeVCAkktk%2Fq26OK%2Bdwju%2B9MimboDMdxaivUBQ5h68FtQvYiP%2F4nF4V6poO3ozvgOI9E65TA24PzamZbl1Rul0ncUkiXQWQ2dWMVBi8O9hFxV7%2Bv%2FqyetqmvZWOZyty30%2BXAEQ9rvrOTahqzbOh8ftqJn31%2BAe05qqLRJEzcr2WOjCS0xm2yRcYp8wcdfbrQ8WXGZAqLMX1rQdAosQLhw57I%2BW4zLplje3kdQsFinwwhWK%2BnRvxnkRR9Zodn7KzdXmThlFcXmkSIHQvbAELBOMnB9RzPad2wKSO%2FrM8raPHE9NHid7dAOBBDtpt95kZm4aOau%2F2EcYVDH4RLn6PgpFmaXqq8eCaqD3PWubVq03%2BfUADmyurH9iXpMLjYCLfo3o5ZyUXZSfvv1%2B4g3LWG7ZWJx35E%2Bs6iHMpG83CqbQyYvjqROyDVTLfXvGSKWS%2BUe4%2B9xBQ76jd7GbcvK8eGk1wjN7mB%2B5aV%2Bp49s1MKeWyMEGOqUBNlViO5XW1SiQzHzvg%2FviumQp%2BXbGDO3lMWhpyGD9bMELBOixdUSkf5IIR%2BLU507111L3E3vdjhZuNhJcZvQjBAu3KsZCMQYtnmYkSaKg%2BSYd2f4ByLn%2FhZoSsN%2Bs4CDwQJwdb0BWUGujx2mpVY95zzy%2BgGyQCFGOm5kGSCdgyX2Wkvk1tvIkcZ6HUbBWldvIbNWLVRUg2LcNJndLw4GIcb%2F8tr2o&X-Amz-Signature=0a77f6a5c8e469a017fdd41dc7b2780813000f2d5e1d3db2db4c7b607becfb96&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMVPTPG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHEjkjimWPQHBzLeBhVpe4wvpffhQ%2BIHgXkP3jVmdvy3AiEAxEpTy1J3nj8qVFiM8ZYPV7ok4VahkYqoXbLCSZ%2BRuIgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNbczCGtFOJ0n5P0vircA6LES3ATht4IZ%2Bn9JKlOWrNRya8v74O8w%2FLQxMPhwuvlETi1zjvUPUYQMRkAIJ%2FfHdi16apoMg4uaqL76yL91380jw1SkudYuhdwWRyCWphTUhtRIr%2BvwHP0nvctofF3XZJaGprAQ1r%2BZAUzN92AyrYbeVCAkktk%2Fq26OK%2Bdwju%2B9MimboDMdxaivUBQ5h68FtQvYiP%2F4nF4V6poO3ozvgOI9E65TA24PzamZbl1Rul0ncUkiXQWQ2dWMVBi8O9hFxV7%2Bv%2FqyetqmvZWOZyty30%2BXAEQ9rvrOTahqzbOh8ftqJn31%2BAe05qqLRJEzcr2WOjCS0xm2yRcYp8wcdfbrQ8WXGZAqLMX1rQdAosQLhw57I%2BW4zLplje3kdQsFinwwhWK%2BnRvxnkRR9Zodn7KzdXmThlFcXmkSIHQvbAELBOMnB9RzPad2wKSO%2FrM8raPHE9NHid7dAOBBDtpt95kZm4aOau%2F2EcYVDH4RLn6PgpFmaXqq8eCaqD3PWubVq03%2BfUADmyurH9iXpMLjYCLfo3o5ZyUXZSfvv1%2B4g3LWG7ZWJx35E%2Bs6iHMpG83CqbQyYvjqROyDVTLfXvGSKWS%2BUe4%2B9xBQ76jd7GbcvK8eGk1wjN7mB%2B5aV%2Bp49s1MKeWyMEGOqUBNlViO5XW1SiQzHzvg%2FviumQp%2BXbGDO3lMWhpyGD9bMELBOixdUSkf5IIR%2BLU507111L3E3vdjhZuNhJcZvQjBAu3KsZCMQYtnmYkSaKg%2BSYd2f4ByLn%2FhZoSsN%2Bs4CDwQJwdb0BWUGujx2mpVY95zzy%2BgGyQCFGOm5kGSCdgyX2Wkvk1tvIkcZ6HUbBWldvIbNWLVRUg2LcNJndLw4GIcb%2F8tr2o&X-Amz-Signature=c192e4b0edffd70de2f48d9e27ee1f269fa07bc52535a657f1301264f7253128&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
