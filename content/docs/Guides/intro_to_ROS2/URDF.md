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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSGMWGL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwbGGsrK1C4qhqqhSpVj9L68ZIc6yrsUhMRRs%2BoN7NfwIhAIPmM803b0ZJ181KReq%2BKfnUefKY%2FSYXevMHvWE0uj9rKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk2%2B9Uh7iVeFGQYm4q3AMRRAU9h5A%2B1llK5Y9LuufBdS2eU3IvxXQlzbuxBuFnDm3lkT1iXciD2LtBQ5tcVfyASUyFquIlQRonkodwU2Q1BdG7oSueUTv6v2jKBobl0yg8O2Ok1NbLFsEVT%2F%2B0iHMFh2%2FMl8GiAWPRlAtU67vbU6HCulxDD7%2BxeVFTbP0UEluqkAtFfEN36GE84n%2BIC9LA1V53sucwQ4NvD4QegfsfV2jOJAWOmaIR47S3bAE3yJ42fRgN3sc2x8oX8KxHBYUtQKbn7aGw7rxZFax7FNrsg%2FgeNaDWnrVQJo%2B84TqhytrOsfctyToxooRbh%2FZUJUAJiHX%2Fu0lFiNm0ha5PsJ8RW8Pphxmir%2F3fLXQe%2FZKFC3zDzfSy1318QLgU5Vbi1g5LrF%2BdhBPQip9mZi5Zdu1DI8TTr5G4y272tw2VA%2BcST0vDKvs05kC%2Bo2oF%2FlptzayWZJw%2FWSw5G7k84RbMTum2cRjMTBAlfetxP0j0o7RtnSbIPR02E1BT%2FkQx0X51FbqzL%2FvymAIrDjBM1qL%2FGy0REOqLY%2FshYHPNqNlvhiNGWE5MVdsZIeD9uXW8H8yBj5UcRUrh5qzEI9lx7ruvnNHDuFrNjEUngFiuh0n1YTVPZyWA%2FYX%2F3S30TplaZzD2iuq9BjqkAU9u8c2E2MU6tMT7eIidrALc1IItdvXDMvm6DaklJQZMW5ZEvrfZlDR36l3GI5nIHvyiN9HT5JkXX82Mu%2BuJdcpE%2FSrrkH4J9DvXkkh0TT0Qs2nVMxm0KjgLLIqYfhESq3m5MX6Y9g5y27N0ZkoeHEAnY%2BE9HIXWyiDX%2FegFsIFFYMKyrSVPOjmpEpNFYMd28zAnXILW0UHroTYSxVtPWOS0WTo7&X-Amz-Signature=4323d18f9e591d82d5ae1a512afa453d6f2e1d01a1338fafbfdec0718733ab3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSGMWGL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwbGGsrK1C4qhqqhSpVj9L68ZIc6yrsUhMRRs%2BoN7NfwIhAIPmM803b0ZJ181KReq%2BKfnUefKY%2FSYXevMHvWE0uj9rKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk2%2B9Uh7iVeFGQYm4q3AMRRAU9h5A%2B1llK5Y9LuufBdS2eU3IvxXQlzbuxBuFnDm3lkT1iXciD2LtBQ5tcVfyASUyFquIlQRonkodwU2Q1BdG7oSueUTv6v2jKBobl0yg8O2Ok1NbLFsEVT%2F%2B0iHMFh2%2FMl8GiAWPRlAtU67vbU6HCulxDD7%2BxeVFTbP0UEluqkAtFfEN36GE84n%2BIC9LA1V53sucwQ4NvD4QegfsfV2jOJAWOmaIR47S3bAE3yJ42fRgN3sc2x8oX8KxHBYUtQKbn7aGw7rxZFax7FNrsg%2FgeNaDWnrVQJo%2B84TqhytrOsfctyToxooRbh%2FZUJUAJiHX%2Fu0lFiNm0ha5PsJ8RW8Pphxmir%2F3fLXQe%2FZKFC3zDzfSy1318QLgU5Vbi1g5LrF%2BdhBPQip9mZi5Zdu1DI8TTr5G4y272tw2VA%2BcST0vDKvs05kC%2Bo2oF%2FlptzayWZJw%2FWSw5G7k84RbMTum2cRjMTBAlfetxP0j0o7RtnSbIPR02E1BT%2FkQx0X51FbqzL%2FvymAIrDjBM1qL%2FGy0REOqLY%2FshYHPNqNlvhiNGWE5MVdsZIeD9uXW8H8yBj5UcRUrh5qzEI9lx7ruvnNHDuFrNjEUngFiuh0n1YTVPZyWA%2FYX%2F3S30TplaZzD2iuq9BjqkAU9u8c2E2MU6tMT7eIidrALc1IItdvXDMvm6DaklJQZMW5ZEvrfZlDR36l3GI5nIHvyiN9HT5JkXX82Mu%2BuJdcpE%2FSrrkH4J9DvXkkh0TT0Qs2nVMxm0KjgLLIqYfhESq3m5MX6Y9g5y27N0ZkoeHEAnY%2BE9HIXWyiDX%2FegFsIFFYMKyrSVPOjmpEpNFYMd28zAnXILW0UHroTYSxVtPWOS0WTo7&X-Amz-Signature=ccd835e475e3aa70ff33bd9d0128fc2f0cc9c702f42f0db087e04775f5098c30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
