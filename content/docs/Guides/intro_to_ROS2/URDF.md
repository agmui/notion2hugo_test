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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIQTUNI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDlXl8Xfw%2BMcvJrA1qRU7wBV0hPlmrFkEgrXqrW%2BiI8XwIhANmMUrHEW%2FynfsvF2DjN6Looo0fZd6yWVHQ1Se5BS8LuKv8DCF0QABoMNjM3NDIzMTgzODA1IgyvmFPVsWFLQvC10X8q3AOiM5k%2FcKfRGgXW3K3U08o17%2BH3fWYwnHYUCQQuZcIlW2yfiZsAU0wvs%2F%2FD1LuX9SibkaaNhr9%2B%2Bsp8Ts11zTnJs0v1SKjrEekepsyVMP5%2BlbNKKi6as61dzYLs2k1gL4A1bFIS5vz9OKo9KYQkrRFV27fr1pzVJ6iXmVmisAx4vMlzmhO5fhrp%2ByU59Y2YE9fONHw5hNBFO9L22U5LFqIMio0khdzGWEZcJLOGoG5EUQa9PSwJvbkfCTEwCV4DPBRFXHgis9g3Qog7BhvAVomx6WV1Wo9vhO4%2BLAFt%2BkdFQwiz3d6DnYEXF5mbjpro8ehnWwUR%2FTFdC5CRtetkNfr75S01yNZJhN8kQTlCfJstSVbubGOab0YuszLw9%2FA9IgbROGj4QVVpkBiVGstwcqNrysD%2FJ8kXBKpR%2BpHQE8IhRDVjMjEkDYYzy02gqdaB8O2NqjYH1ihYYF68Om33V%2FHlq%2BLlyEkSjnIrecJPo%2Fq6cCxEF7z7lVl%2B05PUcNOjkI7ZQ6Po0%2BuRVpW4tVwyPASkteuguYuNS3h3K6PhYEcqqG1oKIQltBlG4UHZj46tTDbYp7yRpJyuz2A6%2B2juTuuGlhYI75MhYzJwHyTJn9tZICAqxitHlBSHwbqhNTD5h%2Fy9BjqkAbUM5Fp78t6qghpHq85LZSkn3vKZhskY3KmJWk5Qbo7QhShqcrxsVprf3sqbwmxh8kkZLngt9MDjszOoOfDyCpciO7wMZCbbv4eeOIyYUWcJSw8JiKur%2Bx7IylgudTUP6lHZWk2fvl4gUT5ttYQzEByAf8ye3S2mIhn5Zr5%2BZAOyTyjmbjHPZvZrnsFfC00kTTNFd0dP9fnNyFD8miblzR27XHHT&X-Amz-Signature=819059c7d0348a82470c53410faafd369fa5351ca0d9078cbe1d2bc9b537f8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIQTUNI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDlXl8Xfw%2BMcvJrA1qRU7wBV0hPlmrFkEgrXqrW%2BiI8XwIhANmMUrHEW%2FynfsvF2DjN6Looo0fZd6yWVHQ1Se5BS8LuKv8DCF0QABoMNjM3NDIzMTgzODA1IgyvmFPVsWFLQvC10X8q3AOiM5k%2FcKfRGgXW3K3U08o17%2BH3fWYwnHYUCQQuZcIlW2yfiZsAU0wvs%2F%2FD1LuX9SibkaaNhr9%2B%2Bsp8Ts11zTnJs0v1SKjrEekepsyVMP5%2BlbNKKi6as61dzYLs2k1gL4A1bFIS5vz9OKo9KYQkrRFV27fr1pzVJ6iXmVmisAx4vMlzmhO5fhrp%2ByU59Y2YE9fONHw5hNBFO9L22U5LFqIMio0khdzGWEZcJLOGoG5EUQa9PSwJvbkfCTEwCV4DPBRFXHgis9g3Qog7BhvAVomx6WV1Wo9vhO4%2BLAFt%2BkdFQwiz3d6DnYEXF5mbjpro8ehnWwUR%2FTFdC5CRtetkNfr75S01yNZJhN8kQTlCfJstSVbubGOab0YuszLw9%2FA9IgbROGj4QVVpkBiVGstwcqNrysD%2FJ8kXBKpR%2BpHQE8IhRDVjMjEkDYYzy02gqdaB8O2NqjYH1ihYYF68Om33V%2FHlq%2BLlyEkSjnIrecJPo%2Fq6cCxEF7z7lVl%2B05PUcNOjkI7ZQ6Po0%2BuRVpW4tVwyPASkteuguYuNS3h3K6PhYEcqqG1oKIQltBlG4UHZj46tTDbYp7yRpJyuz2A6%2B2juTuuGlhYI75MhYzJwHyTJn9tZICAqxitHlBSHwbqhNTD5h%2Fy9BjqkAbUM5Fp78t6qghpHq85LZSkn3vKZhskY3KmJWk5Qbo7QhShqcrxsVprf3sqbwmxh8kkZLngt9MDjszOoOfDyCpciO7wMZCbbv4eeOIyYUWcJSw8JiKur%2Bx7IylgudTUP6lHZWk2fvl4gUT5ttYQzEByAf8ye3S2mIhn5Zr5%2BZAOyTyjmbjHPZvZrnsFfC00kTTNFd0dP9fnNyFD8miblzR27XHHT&X-Amz-Signature=1f9d3564496382b32d5dd5ed4a62916be853ba3ea75dd39fb7ef759fd01c9389&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
