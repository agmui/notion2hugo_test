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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEKYO7A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDzuU%2FOZp%2B%2B3o9P1sarBKeXZeIHwKKtOXUYDRT8bnEPrwIhAMiBIk8YxgzHIeQu%2FCe44696jpyQvKiEGQJIfdbJf2I6Kv8DCDwQABoMNjM3NDIzMTgzODA1IgxT8JiJhzhsIuO%2BBwMq3AMv8281G8NoUx7SSd4VVFJTaqq4x9cPox4q2Bi0o4MCNM87Heg8PmmhilZJSs29ichnM9JUs1ItYJGu3G5fzDi7x2wg5ddjEFLFY40Ohvg%2BFrgIz%2BuE%2Fhfb5RgPGZZJPT3m4hCCojT4C8VU3f7axO61U49VxUl1%2BgQ6CURX%2BweqFikTU4tCqSNPhIwmhKEOtdQ8hnCJWz8JGuebimJx9lYMo1RIOVBIajVtYUu5SKtXBjg0oqDGcIa%2B8%2B8Dw3Laoc5bFshzuOqXyBAgdk5RcGm6g293Dx1nPc0UVRWk9%2F%2Bq6A%2BYC%2FP%2BmnhoVEJ5FLczSA%2BaVeWAACOPdFTX%2FeA8AK%2Bn93lvKfWvucvqKXPrrhgAWC%2BlGSYSaW0v41jNVEnHu3s1DzKCunZ4Kiqz4SrLGBdRWBkV%2FG2jkvIctwwALNBRgiN8X%2BzcTp4j4vGrypwxbxA8yuRVsKt6JZZd8d62FEp9BMZ1wSaNGnwZ1LMSMwjjJLV8U2SHOrJyi9ppV9NBKkh%2BScpIO0maRgJqc37hgF9JHVw1rylqgrGWmM4JgnB5Mt%2FudNp8pqv4BzA057c7zITI%2Fk42M7B8el9ADuCc%2FWV8MHRw%2F%2BQdVydN%2BgsPf7WvudRAQLjOAFJ250cVMjD5wu3CBjqkAbqlR99fCNkmcGBjQwgR4mWi2UMGWDFjuAIQifyVDxpoXJBtGB1LxsECLGtCe6heAceZWFUrQHmsoDxI%2BwSTEgu56Ljoij1CO0FXq%2FVdwK0k64qErM%2BXU1yQWSmysgxSJtKhAgBpQ02dIt5tjoUpXFj1kFhlSZWZSkIj%2FJEaFEtZo0I9U%2FAfuzdXLa2pIbFum%2BC8M%2BXaqzxyuLgITl%2FuCmoy%2Bu%2B4&X-Amz-Signature=4cdbfbe3964715f3a271dbaa4d27cb0d61483a27d092e26ffccb2af8206c086f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEKYO7A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDzuU%2FOZp%2B%2B3o9P1sarBKeXZeIHwKKtOXUYDRT8bnEPrwIhAMiBIk8YxgzHIeQu%2FCe44696jpyQvKiEGQJIfdbJf2I6Kv8DCDwQABoMNjM3NDIzMTgzODA1IgxT8JiJhzhsIuO%2BBwMq3AMv8281G8NoUx7SSd4VVFJTaqq4x9cPox4q2Bi0o4MCNM87Heg8PmmhilZJSs29ichnM9JUs1ItYJGu3G5fzDi7x2wg5ddjEFLFY40Ohvg%2BFrgIz%2BuE%2Fhfb5RgPGZZJPT3m4hCCojT4C8VU3f7axO61U49VxUl1%2BgQ6CURX%2BweqFikTU4tCqSNPhIwmhKEOtdQ8hnCJWz8JGuebimJx9lYMo1RIOVBIajVtYUu5SKtXBjg0oqDGcIa%2B8%2B8Dw3Laoc5bFshzuOqXyBAgdk5RcGm6g293Dx1nPc0UVRWk9%2F%2Bq6A%2BYC%2FP%2BmnhoVEJ5FLczSA%2BaVeWAACOPdFTX%2FeA8AK%2Bn93lvKfWvucvqKXPrrhgAWC%2BlGSYSaW0v41jNVEnHu3s1DzKCunZ4Kiqz4SrLGBdRWBkV%2FG2jkvIctwwALNBRgiN8X%2BzcTp4j4vGrypwxbxA8yuRVsKt6JZZd8d62FEp9BMZ1wSaNGnwZ1LMSMwjjJLV8U2SHOrJyi9ppV9NBKkh%2BScpIO0maRgJqc37hgF9JHVw1rylqgrGWmM4JgnB5Mt%2FudNp8pqv4BzA057c7zITI%2Fk42M7B8el9ADuCc%2FWV8MHRw%2F%2BQdVydN%2BgsPf7WvudRAQLjOAFJ250cVMjD5wu3CBjqkAbqlR99fCNkmcGBjQwgR4mWi2UMGWDFjuAIQifyVDxpoXJBtGB1LxsECLGtCe6heAceZWFUrQHmsoDxI%2BwSTEgu56Ljoij1CO0FXq%2FVdwK0k64qErM%2BXU1yQWSmysgxSJtKhAgBpQ02dIt5tjoUpXFj1kFhlSZWZSkIj%2FJEaFEtZo0I9U%2FAfuzdXLa2pIbFum%2BC8M%2BXaqzxyuLgITl%2FuCmoy%2Bu%2B4&X-Amz-Signature=58021dfea54bb2aa0b0459f1b9fc0d668ff55104f0170ef1039bce7853811e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
