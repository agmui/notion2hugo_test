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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSE2HIKN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmtB%2FF%2FZA32GniYHQqUwdnRFnRlOX6uCfPHupOpOCLxAiAXYaGaEMGcOrGgqJOWFGHaHKd1oyLgUaKGF9%2BGXkJqkyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMDPAGM4xfIbWC4Bv0KtwDWtSAIIswZRjHIKw612QRrc6M3FKYv30RKxu4c2pc1mjRfBpTsQZ6ecnFce2NRtNbdPNQVdPqIsmaDw2Unk%2FcehrJDQzqzrHGQorjOOP47eYy9d2nSU5iQ9rwDwo3dX5knob4LXUqLEhlB3hmrS93oFsVRwUyysRdiPsIAAP0Bkjdmr4wFf6N6w6ZvpqX8pzAEGMFjgtk%2BFhFV7ZUla5CbnU15nT6SeCXDbnr8T0SvKXTsOTk%2FLoQ1vtrhsUy2jL2OVBhvMHqUvp2U3JYR0m0OzgZdOnkQPaxWOwhTwP%2BJFmeKCiJph03AI82hE2rCD01uefTncplhFDquSLrNKtYyYSKtx9jCjIpavjlDdUlVens%2Fa%2F16%2Bk31SQejps2tBbGHSUyOM88MxUX1Tx%2F%2FsgPKRj1Nvyekwbyv9xwsuu987dqQYxVZKEhkgwXxqiJuHvDUUFtQCEeB3g7Y5iLx88cslkL6KHkOkTVKTRp2pBkFRSoGyEBNZsRrTM1IEvmN1R9S1GZKCVxt6%2B%2B2lrSYhbutNr43R%2FwdaGuhsNHb5OeuZ4e5059n6r4yJ7UMXj%2FDMHuiCc43IZl%2FVzTe4rYzRq%2FVYA5fvgtKRNMeERshTM4940%2BVbBfyQVgb1iNcHkwtdbxvQY6pgHALWgjyrRoU4RFV3LAGYfFpvT2ETfj7smxhkMCOzKQNJfj3f1hVDG0DcPlIohmc8xc9BN72%2FootiAOaLuqbO2w8VEAe9QkD6d74bo4sz2Z7r0%2F2U9%2BAkM0nMriCQXwLrSIQbtI1nH5MXUcBy4cgTpwtvB6ExvhxCAWbDRa0EYLSkQ2nkwb6yEPLEPxX3I6MN99mcDcoDE3JnUmAoaiRfC2V0vqwTUV&X-Amz-Signature=99d9de6e6ba327600d00e02ac6f202f0b7340309e0bd742260691c69d1bf6673&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSE2HIKN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmtB%2FF%2FZA32GniYHQqUwdnRFnRlOX6uCfPHupOpOCLxAiAXYaGaEMGcOrGgqJOWFGHaHKd1oyLgUaKGF9%2BGXkJqkyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMDPAGM4xfIbWC4Bv0KtwDWtSAIIswZRjHIKw612QRrc6M3FKYv30RKxu4c2pc1mjRfBpTsQZ6ecnFce2NRtNbdPNQVdPqIsmaDw2Unk%2FcehrJDQzqzrHGQorjOOP47eYy9d2nSU5iQ9rwDwo3dX5knob4LXUqLEhlB3hmrS93oFsVRwUyysRdiPsIAAP0Bkjdmr4wFf6N6w6ZvpqX8pzAEGMFjgtk%2BFhFV7ZUla5CbnU15nT6SeCXDbnr8T0SvKXTsOTk%2FLoQ1vtrhsUy2jL2OVBhvMHqUvp2U3JYR0m0OzgZdOnkQPaxWOwhTwP%2BJFmeKCiJph03AI82hE2rCD01uefTncplhFDquSLrNKtYyYSKtx9jCjIpavjlDdUlVens%2Fa%2F16%2Bk31SQejps2tBbGHSUyOM88MxUX1Tx%2F%2FsgPKRj1Nvyekwbyv9xwsuu987dqQYxVZKEhkgwXxqiJuHvDUUFtQCEeB3g7Y5iLx88cslkL6KHkOkTVKTRp2pBkFRSoGyEBNZsRrTM1IEvmN1R9S1GZKCVxt6%2B%2B2lrSYhbutNr43R%2FwdaGuhsNHb5OeuZ4e5059n6r4yJ7UMXj%2FDMHuiCc43IZl%2FVzTe4rYzRq%2FVYA5fvgtKRNMeERshTM4940%2BVbBfyQVgb1iNcHkwtdbxvQY6pgHALWgjyrRoU4RFV3LAGYfFpvT2ETfj7smxhkMCOzKQNJfj3f1hVDG0DcPlIohmc8xc9BN72%2FootiAOaLuqbO2w8VEAe9QkD6d74bo4sz2Z7r0%2F2U9%2BAkM0nMriCQXwLrSIQbtI1nH5MXUcBy4cgTpwtvB6ExvhxCAWbDRa0EYLSkQ2nkwb6yEPLEPxX3I6MN99mcDcoDE3JnUmAoaiRfC2V0vqwTUV&X-Amz-Signature=99bf7aba07483a72fd774bed868003b7917ffc2b2b3eaeaf8c38b2becc85516d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
