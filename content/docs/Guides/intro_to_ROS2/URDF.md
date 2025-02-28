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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOMVGAQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDV5Rg%2BKaFsSnjAqV%2BuofrzSocpDwg24mNaN7E0qpOzeQIhAJTuSOostFd8B%2F11qwENybGLyXDVT%2Bw8S%2BPwRzgdTU4qKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmUej7E66Cd6Cgyxcq3ANvP3ahY242dz5n4A%2FFnPRdPDl28EYKJ2cwvXa7N1SA1b%2BHDaqY7qeI7FC7iGrGWOgm9M2dXp%2FWsbH2XqbH9ZM3Ikg3zL4Oc3QlCO6EvhhxyqWX6byHL1gu0VADIazwfYoHe6CAaWSYgtpaIdCmghZAS8OvULzViD2zreefrn9FkfHqzflObjkdt6As4nytIJbTLjwPavP6qSzfjI%2FrunWBf2LbDHNgxV26ktHWlm31VkzQQcdNm3yi2%2FD29oBMCqCghrRvF5ReOppgwNhUaibqLPfnJHEjrNBed3nQvnX%2BOnyCg4U%2Bsa11kl4RDi6j43jclIvGL5%2BzrHNaVTjRDNxVfyLoZW3pQww3nOfGST9F2EyKhV7zTZCxacKJb%2BEDDVBfmdlo8xv1HE4Odt3fogTbjEf7vZJSwbrVy7xvncQS1J0ADI2%2F4ij1mIHBUcNPVGNtXieeqHyE7X9rPIYzgn1hXV4df6RfoO2nvG%2BUR9vwGGxFTBBWWIVxjzE3jGuLGvhMJe2OZyAWc4twavWcFmF%2F2d4V8y4yEqpOQsQaN2coV%2FTo5IN6wE3kClQ%2Bf16NGGSya9uRbErjyP%2FJfmlUIcmWOahZ1JhHg0Axtm05UsQk9Z5r3UxVV%2By5CTdZOTDm64e%2BBjqkAd8b9NC8wG02%2FkPPvR59c6LVZFhYkmJnLL%2FMaOgo6lgeUnSXGuZiXhV5LUAguWZCzjW4KFf8qi0Nyf6Cw0bH6sHW2COsqXsjuwMOB1ZYqRB6Fdb4%2B4BmRpSEi3rQWbew1173KBjoJXixIMgXCahcTPaJ8ubc3TD%2F9e0z8%2F96DPw3PThgVq4HN3Ug5xUSdLeVIPft%2BPsCAW4q9F1BhN0IRmJumL4n&X-Amz-Signature=c1df8add40e290f6dfb4827383f9724ae38790f330ae6038cb8939060e0923c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOMVGAQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDV5Rg%2BKaFsSnjAqV%2BuofrzSocpDwg24mNaN7E0qpOzeQIhAJTuSOostFd8B%2F11qwENybGLyXDVT%2Bw8S%2BPwRzgdTU4qKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmUej7E66Cd6Cgyxcq3ANvP3ahY242dz5n4A%2FFnPRdPDl28EYKJ2cwvXa7N1SA1b%2BHDaqY7qeI7FC7iGrGWOgm9M2dXp%2FWsbH2XqbH9ZM3Ikg3zL4Oc3QlCO6EvhhxyqWX6byHL1gu0VADIazwfYoHe6CAaWSYgtpaIdCmghZAS8OvULzViD2zreefrn9FkfHqzflObjkdt6As4nytIJbTLjwPavP6qSzfjI%2FrunWBf2LbDHNgxV26ktHWlm31VkzQQcdNm3yi2%2FD29oBMCqCghrRvF5ReOppgwNhUaibqLPfnJHEjrNBed3nQvnX%2BOnyCg4U%2Bsa11kl4RDi6j43jclIvGL5%2BzrHNaVTjRDNxVfyLoZW3pQww3nOfGST9F2EyKhV7zTZCxacKJb%2BEDDVBfmdlo8xv1HE4Odt3fogTbjEf7vZJSwbrVy7xvncQS1J0ADI2%2F4ij1mIHBUcNPVGNtXieeqHyE7X9rPIYzgn1hXV4df6RfoO2nvG%2BUR9vwGGxFTBBWWIVxjzE3jGuLGvhMJe2OZyAWc4twavWcFmF%2F2d4V8y4yEqpOQsQaN2coV%2FTo5IN6wE3kClQ%2Bf16NGGSya9uRbErjyP%2FJfmlUIcmWOahZ1JhHg0Axtm05UsQk9Z5r3UxVV%2By5CTdZOTDm64e%2BBjqkAd8b9NC8wG02%2FkPPvR59c6LVZFhYkmJnLL%2FMaOgo6lgeUnSXGuZiXhV5LUAguWZCzjW4KFf8qi0Nyf6Cw0bH6sHW2COsqXsjuwMOB1ZYqRB6Fdb4%2B4BmRpSEi3rQWbew1173KBjoJXixIMgXCahcTPaJ8ubc3TD%2F9e0z8%2F96DPw3PThgVq4HN3Ug5xUSdLeVIPft%2BPsCAW4q9F1BhN0IRmJumL4n&X-Amz-Signature=6471b81287dd93b4f0b48904cfcde8a32388235c751198f8c85e6834898519b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
