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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQMJYHV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3SpMnuKOwYSDM3TIq%2Bq3uqZMk1JjnCryC88AQWFBEmgIhAOQEG154fFiT%2Futaxh%2BY%2F6qiqN3Wq3JlIIpLDFDil%2FyiKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAC00RnDkFAniVL%2Bsq3ANwvxSTgJAhbY8kFg7bskb0LrECVGv7pL%2BvrWSLvMd%2BaOeoJk%2BZuTdxSV051tc6GXXdC86%2FYiCMhTN21WV9Z7z3HVq%2FznvpomWGzwrMtgwcxIgbBSbqocCR%2BJCCvUxz2eiIp1vUVjGpckjNYEUOZ9%2FLANoLSOEAfXhJhvJZqPgsLOVSbY7dSQa6FTjxM7%2BlGKBPwQWewE0rl9cdfM33jxrxwOT8Gmy6r%2BaCpZrNYXFv5vJb%2Bmf1D3kxaj72ow5vat91PdSx2Ldy4shVSezgcLerQI%2F8YvkUbGECpKpEIyH9yHHiJf7R4sHKhV%2BrZ7zuEvIXLnNHKFCxYWGNhPClXzzIBd08TBp5CRTYM89j%2B6J0l4Y9Y3%2FM%2F8iZ7QyQ8roG0ETIpXKaur7cPVdg7JtDqZNEFmIAT3omLowoYwDi%2B63E%2F10jl4Dip1tdUXgcvr%2FPWL7nkqz%2BKOH0YX83vxG1kwL3hjDdWPDvXTgDuHMCV7u1lox%2Bn4j5JsTy%2B1e1%2Flymn7vgxxQ9Z%2BdAk1bY2sQ9YkRvbSm01OP1VkEo7aX1jwwrzL4Tnc3JkHrD2wz9o3JhNbEFzp45ONJz5CMfMDby2%2B%2BzrlpkbHgsFW5sd17JpetEjPplzCk6TttF0zOcgjCk25LDBjqkAXv7hNu5SbpDB9dZ5meftInVI88M8sqPJBdmCrkaKlfBOlTbuIj0zPoR2pTOzkyGME6bLuJ1qje1r7Vb7XB0SA47RmX8ajhrXcE4cdUapSNvRJyBIfWKunbjzA%2BOTie5MNetFC2tkvPQTMHOAh9u%2BO6hJSDoN5BvRlno7SgPPtI3lOeLnKWd1U1PIAKoWRn79UsEz5e3EZY2pd5%2FLwlRE3a8M3Xt&X-Amz-Signature=d5132da1691eb2f0605a7e051fb8dfce8c493834a01cd7b7b8f80661dc787f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQMJYHV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3SpMnuKOwYSDM3TIq%2Bq3uqZMk1JjnCryC88AQWFBEmgIhAOQEG154fFiT%2Futaxh%2BY%2F6qiqN3Wq3JlIIpLDFDil%2FyiKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAC00RnDkFAniVL%2Bsq3ANwvxSTgJAhbY8kFg7bskb0LrECVGv7pL%2BvrWSLvMd%2BaOeoJk%2BZuTdxSV051tc6GXXdC86%2FYiCMhTN21WV9Z7z3HVq%2FznvpomWGzwrMtgwcxIgbBSbqocCR%2BJCCvUxz2eiIp1vUVjGpckjNYEUOZ9%2FLANoLSOEAfXhJhvJZqPgsLOVSbY7dSQa6FTjxM7%2BlGKBPwQWewE0rl9cdfM33jxrxwOT8Gmy6r%2BaCpZrNYXFv5vJb%2Bmf1D3kxaj72ow5vat91PdSx2Ldy4shVSezgcLerQI%2F8YvkUbGECpKpEIyH9yHHiJf7R4sHKhV%2BrZ7zuEvIXLnNHKFCxYWGNhPClXzzIBd08TBp5CRTYM89j%2B6J0l4Y9Y3%2FM%2F8iZ7QyQ8roG0ETIpXKaur7cPVdg7JtDqZNEFmIAT3omLowoYwDi%2B63E%2F10jl4Dip1tdUXgcvr%2FPWL7nkqz%2BKOH0YX83vxG1kwL3hjDdWPDvXTgDuHMCV7u1lox%2Bn4j5JsTy%2B1e1%2Flymn7vgxxQ9Z%2BdAk1bY2sQ9YkRvbSm01OP1VkEo7aX1jwwrzL4Tnc3JkHrD2wz9o3JhNbEFzp45ONJz5CMfMDby2%2B%2BzrlpkbHgsFW5sd17JpetEjPplzCk6TttF0zOcgjCk25LDBjqkAXv7hNu5SbpDB9dZ5meftInVI88M8sqPJBdmCrkaKlfBOlTbuIj0zPoR2pTOzkyGME6bLuJ1qje1r7Vb7XB0SA47RmX8ajhrXcE4cdUapSNvRJyBIfWKunbjzA%2BOTie5MNetFC2tkvPQTMHOAh9u%2BO6hJSDoN5BvRlno7SgPPtI3lOeLnKWd1U1PIAKoWRn79UsEz5e3EZY2pd5%2FLwlRE3a8M3Xt&X-Amz-Signature=c4002d2b1d74bce9c7fabb3c74e43179b212dd03f9f4072444f21614f8d58b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
