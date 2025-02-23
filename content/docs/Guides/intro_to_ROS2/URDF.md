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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T46SBOX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FLGOoh461yK9w56%2BLnP5EJIy1HKtgi5wl6Fyo0V%2BDOAiBLmS3dSucE4vQrNTIz2EcptrUfgy8CSi8Sv4sGsyhJryr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN2%2BtrOe5057uq3XjKtwD%2F6vqtV%2Fgu9dL4T%2BHHmZvKRVU7OZKd5QATg4k1vCmeRF7PTsnGib%2FMIdMVS1PqtO9yxyNk37q%2FsgoPYn3l%2FymMIi64mWrHlcFDYsiVuqr4V1RPs2hIPm9RYMOMgpP%2F9GDj%2BBtQK9uwvDPvw%2Fp%2FTo%2FXRT2xsxXXWvwZ%2F0necGSmaJt%2FeKWJvJZGEGV7Kgawt%2FaKEfSl3od5NoXwvkllq9PBQvvzVKJCOX8cEABDNr86BKqZcbJButg1Dw%2F%2BqO9sLgdfdzIBrskrBZmkysCrFJClmsIQZmK7uwAmigkBIJj9T2opiN8x%2FsjBAeiX0IWxxLKqpuca2l10AHdcZkLxfx5jGsWJT0qyjldy6igMwvZDAAwRJK9lbA1g3jNcSVTFQbcBnhdwuPoGnsDipgzw5s40zCGkwtmQI9R1jU12nrXbl9xelWXdXOPXCgW7HuFNRXL10DCD1PaLosQ1ign3zQHUhKo4QgA2Kxlw3kFsBqvnqeW92sMQAMBD3d8UiyShlyMsx5HhxG0g01FOMFDpon%2FZFOVDC3K0RsmAIcha%2FzzFXBX5pK%2FkRqhs60FNZWG1pI2AVIs4CG94X6VjxDM5TQQbD%2B0nuTKGgwkGOgv6vMmHjRtaoorcMcQug3lojMw8IjuvQY6pgGVuAHVIQnECqKp8I%2BDwEm4W3ttpAhXfKUFb%2BhJC6WKiWwE1y7fD5wnwPGmCWpXwwvENxTaCVYCJrbLopF%2FWd9MxoJ%2FbOLjbs97qOztaGVJf%2B7AG9sZte5rQvJTHAOvM%2BfQMWRXlwFK7tqnD%2BSM0QolbvVYnYT42HAParz%2B%2FMfH8E48DcyOxGJJC8r6VGjQMKcYvlAQ%2FfqyXXNMMCI3Y66xVoYlI4Ey&X-Amz-Signature=414d641e1f9b4d6982149dc4e0648a12233955c5c24b1b09ae62e332465cb3de&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T46SBOX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FLGOoh461yK9w56%2BLnP5EJIy1HKtgi5wl6Fyo0V%2BDOAiBLmS3dSucE4vQrNTIz2EcptrUfgy8CSi8Sv4sGsyhJryr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN2%2BtrOe5057uq3XjKtwD%2F6vqtV%2Fgu9dL4T%2BHHmZvKRVU7OZKd5QATg4k1vCmeRF7PTsnGib%2FMIdMVS1PqtO9yxyNk37q%2FsgoPYn3l%2FymMIi64mWrHlcFDYsiVuqr4V1RPs2hIPm9RYMOMgpP%2F9GDj%2BBtQK9uwvDPvw%2Fp%2FTo%2FXRT2xsxXXWvwZ%2F0necGSmaJt%2FeKWJvJZGEGV7Kgawt%2FaKEfSl3od5NoXwvkllq9PBQvvzVKJCOX8cEABDNr86BKqZcbJButg1Dw%2F%2BqO9sLgdfdzIBrskrBZmkysCrFJClmsIQZmK7uwAmigkBIJj9T2opiN8x%2FsjBAeiX0IWxxLKqpuca2l10AHdcZkLxfx5jGsWJT0qyjldy6igMwvZDAAwRJK9lbA1g3jNcSVTFQbcBnhdwuPoGnsDipgzw5s40zCGkwtmQI9R1jU12nrXbl9xelWXdXOPXCgW7HuFNRXL10DCD1PaLosQ1ign3zQHUhKo4QgA2Kxlw3kFsBqvnqeW92sMQAMBD3d8UiyShlyMsx5HhxG0g01FOMFDpon%2FZFOVDC3K0RsmAIcha%2FzzFXBX5pK%2FkRqhs60FNZWG1pI2AVIs4CG94X6VjxDM5TQQbD%2B0nuTKGgwkGOgv6vMmHjRtaoorcMcQug3lojMw8IjuvQY6pgGVuAHVIQnECqKp8I%2BDwEm4W3ttpAhXfKUFb%2BhJC6WKiWwE1y7fD5wnwPGmCWpXwwvENxTaCVYCJrbLopF%2FWd9MxoJ%2FbOLjbs97qOztaGVJf%2B7AG9sZte5rQvJTHAOvM%2BfQMWRXlwFK7tqnD%2BSM0QolbvVYnYT42HAParz%2B%2FMfH8E48DcyOxGJJC8r6VGjQMKcYvlAQ%2FfqyXXNMMCI3Y66xVoYlI4Ey&X-Amz-Signature=bbd2eaa222c02b17c033aee163c9bc69c4d6da2f6841f27eae472539aa6131dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
