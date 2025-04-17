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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRH4CRB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBMU8w6WCYakVzyDkIePZ2ShX%2BSdpM6UKEUt4WjbZc1AIhAMUwXs49XfpCpzK1Cvgqa3wLMofa1u67IuTZgQ9QnQc2Kv8DCGgQABoMNjM3NDIzMTgzODA1IgyY5Ck8zA5y4MWVQusq3ANXUYjIdM%2FTt3U4aOJzuw2WSZDQqlJKCgOu6w29Pf0Ed2edofRCYQSrahcoJ37M8UG8tfYqMLlR1zdmntIUDf4kZkEMCD6oFwEmFkUe34CU0muEpTLZFw8m0J72%2FFR6OXSXrEihSelN2N9w%2BM4XdyLyNhYVXwaOgID3tfstDmi%2F6LfS2tB8rbJ4v8Kfa3D97L%2FjszxTL9kpkcU2AdeiSmM7%2BZERwibVNAw3E6B7JpY2g%2FaaB9rWsxGJBX7k4Jrc64V8oi%2BlC8x%2ByZiyZ1B%2F0GsO88AUmJMTiw0D6j3hbw55Nd7nyfPphjkHSHYqYjhj6Jl7RJbFZMOefUOufL4rlkK5g9dsEvQavMRcgAjUvyUhB4JGlP2T6yt53Xp8I6wV35d1fVgrQHEkfKbpAua1y0HOr7PrUqOSsp%2FyoEVAdXAMExEbxAkiGnKin9GNu0vEh07EwhgzSAPMSMDAIdJliTKQm7nGk1mzbyr8KegO0OFRtxYbki0X2ljXPRdxCCIoc2MCyXhAnnjo9JIGEGQuEQnT64n%2Fe%2FUbv3cSpqzP1JHP4F%2FwEmjyjMlN3HTUj0GPkkk640M5w96nqYtEgg%2BFNpO%2B5yuXCbvhCWzyE6Oah32G8xrM11rLaX4GvMxMAjDBh4bABjqkASO0JlKNRlYMG9jvNY5Fzz24Xg%2FcyRJTx%2FnpkkHV2e7pcrFOhh3DhSuz7vmh5%2BYzbhOf4JLltM2i%2BqFYlOCUzavrymmdinKK9sZsnOIpsRer7KPjyUN%2FyV8NvA3rC3ikoODBCf%2FvcnBXnyRP1DfostR%2Fd6n5HrcdNU9KxyCBwXel0KmStGYKPGOLc0kI5BhUqfVjD%2FzDneK61LrY3JTutduxTLMZ&X-Amz-Signature=977fcf96c308f8b9ed64ecd7c8c1ed954fc6a6b08439d01da9622f632494dfc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRH4CRB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBMU8w6WCYakVzyDkIePZ2ShX%2BSdpM6UKEUt4WjbZc1AIhAMUwXs49XfpCpzK1Cvgqa3wLMofa1u67IuTZgQ9QnQc2Kv8DCGgQABoMNjM3NDIzMTgzODA1IgyY5Ck8zA5y4MWVQusq3ANXUYjIdM%2FTt3U4aOJzuw2WSZDQqlJKCgOu6w29Pf0Ed2edofRCYQSrahcoJ37M8UG8tfYqMLlR1zdmntIUDf4kZkEMCD6oFwEmFkUe34CU0muEpTLZFw8m0J72%2FFR6OXSXrEihSelN2N9w%2BM4XdyLyNhYVXwaOgID3tfstDmi%2F6LfS2tB8rbJ4v8Kfa3D97L%2FjszxTL9kpkcU2AdeiSmM7%2BZERwibVNAw3E6B7JpY2g%2FaaB9rWsxGJBX7k4Jrc64V8oi%2BlC8x%2ByZiyZ1B%2F0GsO88AUmJMTiw0D6j3hbw55Nd7nyfPphjkHSHYqYjhj6Jl7RJbFZMOefUOufL4rlkK5g9dsEvQavMRcgAjUvyUhB4JGlP2T6yt53Xp8I6wV35d1fVgrQHEkfKbpAua1y0HOr7PrUqOSsp%2FyoEVAdXAMExEbxAkiGnKin9GNu0vEh07EwhgzSAPMSMDAIdJliTKQm7nGk1mzbyr8KegO0OFRtxYbki0X2ljXPRdxCCIoc2MCyXhAnnjo9JIGEGQuEQnT64n%2Fe%2FUbv3cSpqzP1JHP4F%2FwEmjyjMlN3HTUj0GPkkk640M5w96nqYtEgg%2BFNpO%2B5yuXCbvhCWzyE6Oah32G8xrM11rLaX4GvMxMAjDBh4bABjqkASO0JlKNRlYMG9jvNY5Fzz24Xg%2FcyRJTx%2FnpkkHV2e7pcrFOhh3DhSuz7vmh5%2BYzbhOf4JLltM2i%2BqFYlOCUzavrymmdinKK9sZsnOIpsRer7KPjyUN%2FyV8NvA3rC3ikoODBCf%2FvcnBXnyRP1DfostR%2Fd6n5HrcdNU9KxyCBwXel0KmStGYKPGOLc0kI5BhUqfVjD%2FzDneK61LrY3JTutduxTLMZ&X-Amz-Signature=e01c837e0afc7bb3d86d58ec950775b49eda0cca9a76edcce2402ad16c2f9f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
