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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIOFCAX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJd6y42HkkjmoEKpn1qddPbRFK%2B5gL5QMTXnyLjDuzrQIhAKyL3tnke9umTYtEqP6SZoAG8Mplr1HW2bZjvbkBaKr4Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwMlVVjrQB%2FttqYIHYq3ANT%2Fyy%2F4NPM%2FuZPIelLi8hRclknsHuh2VkX7ESktKRKq9QWAGrxB9LEz4WjAJoPoV%2BFkm5kXdDPCh%2FVDrT2bipbOBWGRF%2FHzHZj3FVlLXesZGxzqVdRpSR86ATEcU%2B17lKxTohwo6wRfrzp%2FEp5tbVLR2FaBecX6sk9BgGVvmsJgkq523C%2BMLkm5ykHx5XpfA1a7zKc96No6xk3kYl5GsbZ4wHF4Eb9bzhy5pwTGClDlYFJhziSLo4s25MCH7HXHB19gr36%2BU0djQ3U7NkDkayRxo20slJ5suSOMnGXywFhha9Kt0An65Jmhn2A36GfrPLrNHVyL9TJAOSHq7k241R86TGsFkNAZV3212ltGIu4Jo4H41Z%2Fi%2FfNmDJ4PV%2F8w8k5pgnnIHqOgvcBQbVDvNYsWbVmin%2FVelSHUPOZU31dzXyMFDpSRIFlYVXP%2BKOWyGuVn65QDu0bq4pECIhOBz7AfAg5e5uEAbH4A7pHz%2Bb51dW%2BDPJsN6eFYohpNbcLBq4vJPXdeyF9DAXkhc8sTA2DG%2Bteah%2FN3lcqVtIQD914cSTX%2BVIDkexDnpc36SefUZAddXCi0h2iym3OMoKHC%2FeykiwZlPnNwL%2FdQZBUNtnvEFNQq4B1BTAQ%2B%2Fnr0jC%2Bq%2BC%2BBjqkAT7UXSe1Pw1tWuCWPKqL%2BO2l831jHAnZ8WVAtY63s1sTHuiAGNSL8MoRAuyskK5DJWDYaJbeNu1zp3vNCDk%2BeR1kmo5JJ4CTvZQumgqwL9ki0aMZKbrNMUE9JoDzooAANoXMH6SGEGhu4FuaemqcIShLy7%2Bj3S3sEwy13ixtKzJ0K1SlmJZwu46N6hhsO0BsGIMIWLVbbCbo1oayUJ2qq7kl%2BygH&X-Amz-Signature=a0edc3778e22ee89ca5fadf8c0c9f6cb2db2e2f0d3fe6ba633fe0b61cdd240be&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIOFCAX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJd6y42HkkjmoEKpn1qddPbRFK%2B5gL5QMTXnyLjDuzrQIhAKyL3tnke9umTYtEqP6SZoAG8Mplr1HW2bZjvbkBaKr4Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwMlVVjrQB%2FttqYIHYq3ANT%2Fyy%2F4NPM%2FuZPIelLi8hRclknsHuh2VkX7ESktKRKq9QWAGrxB9LEz4WjAJoPoV%2BFkm5kXdDPCh%2FVDrT2bipbOBWGRF%2FHzHZj3FVlLXesZGxzqVdRpSR86ATEcU%2B17lKxTohwo6wRfrzp%2FEp5tbVLR2FaBecX6sk9BgGVvmsJgkq523C%2BMLkm5ykHx5XpfA1a7zKc96No6xk3kYl5GsbZ4wHF4Eb9bzhy5pwTGClDlYFJhziSLo4s25MCH7HXHB19gr36%2BU0djQ3U7NkDkayRxo20slJ5suSOMnGXywFhha9Kt0An65Jmhn2A36GfrPLrNHVyL9TJAOSHq7k241R86TGsFkNAZV3212ltGIu4Jo4H41Z%2Fi%2FfNmDJ4PV%2F8w8k5pgnnIHqOgvcBQbVDvNYsWbVmin%2FVelSHUPOZU31dzXyMFDpSRIFlYVXP%2BKOWyGuVn65QDu0bq4pECIhOBz7AfAg5e5uEAbH4A7pHz%2Bb51dW%2BDPJsN6eFYohpNbcLBq4vJPXdeyF9DAXkhc8sTA2DG%2Bteah%2FN3lcqVtIQD914cSTX%2BVIDkexDnpc36SefUZAddXCi0h2iym3OMoKHC%2FeykiwZlPnNwL%2FdQZBUNtnvEFNQq4B1BTAQ%2B%2Fnr0jC%2Bq%2BC%2BBjqkAT7UXSe1Pw1tWuCWPKqL%2BO2l831jHAnZ8WVAtY63s1sTHuiAGNSL8MoRAuyskK5DJWDYaJbeNu1zp3vNCDk%2BeR1kmo5JJ4CTvZQumgqwL9ki0aMZKbrNMUE9JoDzooAANoXMH6SGEGhu4FuaemqcIShLy7%2Bj3S3sEwy13ixtKzJ0K1SlmJZwu46N6hhsO0BsGIMIWLVbbCbo1oayUJ2qq7kl%2BygH&X-Amz-Signature=6fdc72339325a2defe397deaa0ed4c350d58c2383ac9f86862197ab65c5b258a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
