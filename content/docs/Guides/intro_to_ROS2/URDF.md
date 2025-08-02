---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGP5IHKH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf3hGmCA%2FlbGCFVr7pk3p%2B0ngJL40Pt0bZUXz%2BxRaB2QIhAJuCsnfQVwzfvDVU4qnIZK9w4juZ4hE933QJ9Hrde6ivKv8DCBYQABoMNjM3NDIzMTgzODA1IgzwXyRfKh7uzJUJatYq3AM9CQTiIn9iTP%2FpCKEaZ7j5zOCuCWq2ZTY647yd41AQpilWlAqNrPJrzj%2FCmMcN3U%2Fq%2F%2Fol9b758tizfmS%2BlXlRSUt6usR4KqNnXLMeOed6xrhebOKdGNEXFW1Xe%2BI3Q928pslDzqcXA9CiQxmatofdI0IfbSZl8IC4G4qozKJBNHyI3dZDt4ip7j3xrptIdfwftyOnK0q%2Bu1XJfyvKtWQXajBZc0s%2B%2FJ%2FwJ6Lz0tIm6uvJihtMWhWGtuuGS%2FfArpmnLUFAsUn4zHIwM4og9As%2FQM41CxNuMKcPrdtJEFV3Jc9xWPdwTNK%2Flu9HykGepZR2AoZRNmIQDh3TiVPi%2Ft1GHvM%2Ftyx34L3ETIsQyoN4C8oTW9tiI7T5C4vO4IYNZaEveO%2BPLN1AyRzvQbIKUCLyOYxmwd3AG7GcfmkdL4MnIXldXHE4G31p4ZpesxvzDudDelffUmtux%2FHl2aaxUxlrKezBceXASV5YNH1jv4UYqXrF9ks1xC7kMTufpO6M4ifkzR3yhuvnKBnxLr2rBkT5kst5XHdUgFBiaRfhWVQpnZRPmBQEt79O89cYTw7y8yIWmsg%2BAM%2FxehYEpkzujWeEo9VoDTJHj78OQMvEMIFLTcUVplDL%2F1lnvoZHCTDEkrjEBjqkARVMOmaFj%2BFNEHoYPKn0R5Eh%2B1tx7ZNN7yXJeXJ4bSHRB3tlyiRq1mKNYoiCRU5HLR0FPiqj%2Fb3oZdhLnR6bwk2hDp%2BhkL10TqQGRo5rFsCLpgEFdaYXG2S7o0eKveYzj49T2u1cE652FY5yLFS9GTvuqK4dEhwcEvmeEu2%2BIva2nrUR%2F%2B8Y21OC7YiFPxwhZTcN7nEWCd5gjLmtGZkxPsX8Kz%2BL&X-Amz-Signature=ffa9b58877f87627ddd5721aa9a9bb73a604cc1bbdbc33f45f54449a74d5c84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGP5IHKH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf3hGmCA%2FlbGCFVr7pk3p%2B0ngJL40Pt0bZUXz%2BxRaB2QIhAJuCsnfQVwzfvDVU4qnIZK9w4juZ4hE933QJ9Hrde6ivKv8DCBYQABoMNjM3NDIzMTgzODA1IgzwXyRfKh7uzJUJatYq3AM9CQTiIn9iTP%2FpCKEaZ7j5zOCuCWq2ZTY647yd41AQpilWlAqNrPJrzj%2FCmMcN3U%2Fq%2F%2Fol9b758tizfmS%2BlXlRSUt6usR4KqNnXLMeOed6xrhebOKdGNEXFW1Xe%2BI3Q928pslDzqcXA9CiQxmatofdI0IfbSZl8IC4G4qozKJBNHyI3dZDt4ip7j3xrptIdfwftyOnK0q%2Bu1XJfyvKtWQXajBZc0s%2B%2FJ%2FwJ6Lz0tIm6uvJihtMWhWGtuuGS%2FfArpmnLUFAsUn4zHIwM4og9As%2FQM41CxNuMKcPrdtJEFV3Jc9xWPdwTNK%2Flu9HykGepZR2AoZRNmIQDh3TiVPi%2Ft1GHvM%2Ftyx34L3ETIsQyoN4C8oTW9tiI7T5C4vO4IYNZaEveO%2BPLN1AyRzvQbIKUCLyOYxmwd3AG7GcfmkdL4MnIXldXHE4G31p4ZpesxvzDudDelffUmtux%2FHl2aaxUxlrKezBceXASV5YNH1jv4UYqXrF9ks1xC7kMTufpO6M4ifkzR3yhuvnKBnxLr2rBkT5kst5XHdUgFBiaRfhWVQpnZRPmBQEt79O89cYTw7y8yIWmsg%2BAM%2FxehYEpkzujWeEo9VoDTJHj78OQMvEMIFLTcUVplDL%2F1lnvoZHCTDEkrjEBjqkARVMOmaFj%2BFNEHoYPKn0R5Eh%2B1tx7ZNN7yXJeXJ4bSHRB3tlyiRq1mKNYoiCRU5HLR0FPiqj%2Fb3oZdhLnR6bwk2hDp%2BhkL10TqQGRo5rFsCLpgEFdaYXG2S7o0eKveYzj49T2u1cE652FY5yLFS9GTvuqK4dEhwcEvmeEu2%2BIva2nrUR%2F%2B8Y21OC7YiFPxwhZTcN7nEWCd5gjLmtGZkxPsX8Kz%2BL&X-Amz-Signature=b8218b51eab31d527f7711aa2f555095881a611befa487522c28d7aaaf32d995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
