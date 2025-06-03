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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEX4I4Q%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2Bew4rpdCOFuRHXmzSXxmQe64Ur8LRuxiBInpRviO5HgIhALD8gdV3J9%2F%2BwiXFq7DNKKedxtEuheV2AsZhfzodVqLNKv8DCCAQABoMNjM3NDIzMTgzODA1Igwsu1bcfDFoCVi3bMoq3AMRndQqHKS2d2RWig2%2FL3eIbLHYQFuM4I%2FX21r6p%2BUYu3oxhfu%2BaN5nXCMpr0puHMoC7K1yzs%2FMglBriQEmUJZe6iJxTnRYx9ond3b8Dm5oWEP286IQ2aTPaS6QEM9Uwb7sdvgt5CAKdRFpq8DJzHBJJjth%2FTCWSOh9K4ARuTVOZpcziNzYYgxhd%2FTB3VmljmSzLn3SnDJjSoI75k%2BWnlUoSoqhwoNF3cMgAkF%2BdC2OLXTM779lduRHGmZsjKNAD8DRGAWg8LVkNYJ%2BOHfBuWfjZGj3anyVkke9VbUU6epiSgq%2BVEwmhx8sYylseVDvKvDxDLrh84UstDvWVXA790xVVke2awjagpQTN2VphoCiLipdoYUzaFEoLvY5xhv1pGxLtoA956ZgZShIZP4O%2BsVBf84RrNN%2F7julaDaznS6wzSMInokBlaO2uVZ0jfcu5rlgDJY7bdN%2FmtpI5dI%2BTOgXufAkmzw81ZuxiE5Kmzp3zAp1fJrjvEym81PkfH7jFwBNJQCzGx4IE78%2B1gcte%2FIcCDh9vtfulCZxGAyi0WaKC%2BOPpKt42C5rhgoaw71PRhv%2FlqZycnxVSoO3%2BVEudJo%2BRzxsq76gaTWfiewVkFobY5j2OXhTYBH7HM9vLzCZ9%2F3BBjqkAdIkaxb8%2BTaVlWc0Evp4yCVEgE9IUEyp5yVHZc7MpUoyierhgD%2Fww6GoKfT%2ByvC8khixdWBg7evr2R8OSPyA46ow5H%2FWu3%2Bb5DdSUMrsh8jIdyQV7WfXfUBQ5gByj2p2AN1QX7mFi9TnJ7u0xkfWwImK9XAnDIyc%2B46D3nAPFRXtKd0BGFDfJC02AOb7gBG5nnRtEadUpTQZs%2FU9OFLxWqMTrCne&X-Amz-Signature=42907b699fd525d8faafcde335fab67f523a0b8c8b34efe0cdf7ff8887d88f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEX4I4Q%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2Bew4rpdCOFuRHXmzSXxmQe64Ur8LRuxiBInpRviO5HgIhALD8gdV3J9%2F%2BwiXFq7DNKKedxtEuheV2AsZhfzodVqLNKv8DCCAQABoMNjM3NDIzMTgzODA1Igwsu1bcfDFoCVi3bMoq3AMRndQqHKS2d2RWig2%2FL3eIbLHYQFuM4I%2FX21r6p%2BUYu3oxhfu%2BaN5nXCMpr0puHMoC7K1yzs%2FMglBriQEmUJZe6iJxTnRYx9ond3b8Dm5oWEP286IQ2aTPaS6QEM9Uwb7sdvgt5CAKdRFpq8DJzHBJJjth%2FTCWSOh9K4ARuTVOZpcziNzYYgxhd%2FTB3VmljmSzLn3SnDJjSoI75k%2BWnlUoSoqhwoNF3cMgAkF%2BdC2OLXTM779lduRHGmZsjKNAD8DRGAWg8LVkNYJ%2BOHfBuWfjZGj3anyVkke9VbUU6epiSgq%2BVEwmhx8sYylseVDvKvDxDLrh84UstDvWVXA790xVVke2awjagpQTN2VphoCiLipdoYUzaFEoLvY5xhv1pGxLtoA956ZgZShIZP4O%2BsVBf84RrNN%2F7julaDaznS6wzSMInokBlaO2uVZ0jfcu5rlgDJY7bdN%2FmtpI5dI%2BTOgXufAkmzw81ZuxiE5Kmzp3zAp1fJrjvEym81PkfH7jFwBNJQCzGx4IE78%2B1gcte%2FIcCDh9vtfulCZxGAyi0WaKC%2BOPpKt42C5rhgoaw71PRhv%2FlqZycnxVSoO3%2BVEudJo%2BRzxsq76gaTWfiewVkFobY5j2OXhTYBH7HM9vLzCZ9%2F3BBjqkAdIkaxb8%2BTaVlWc0Evp4yCVEgE9IUEyp5yVHZc7MpUoyierhgD%2Fww6GoKfT%2ByvC8khixdWBg7evr2R8OSPyA46ow5H%2FWu3%2Bb5DdSUMrsh8jIdyQV7WfXfUBQ5gByj2p2AN1QX7mFi9TnJ7u0xkfWwImK9XAnDIyc%2B46D3nAPFRXtKd0BGFDfJC02AOb7gBG5nnRtEadUpTQZs%2FU9OFLxWqMTrCne&X-Amz-Signature=b4b92ba0a3fc9538cb6bdd27bab9bffeb76552c159087cb19247d8d357927d44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
