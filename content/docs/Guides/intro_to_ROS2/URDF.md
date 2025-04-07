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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQEBZ73%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClDI5ZkrUBY%2BwkWBIb2JqAXFKa1fpf30LOkqNlp3OO%2BAiEA4VKSOuIGILFGToKd8cI08XDWuP76D9W8pIAAhN6GQ68q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDG3CAW3ebUxr05On9yrcAzA1tBtTOJA1u%2FRqeXIrKmaUHlKlWO%2FpqvHPmKS7Y3dFvaTuEDFuIX77EloTf0kC4CZo0VOlohKmXzjhkBqz4Pb%2FOOJF3I3O95MQm%2B8TYYrD5ufMe3mlsBediSozSPlNZHbbYKwUqI0vY7GvbgM0jF44FY1G%2BY0p20XBqmZzdw%2BNS%2BMLp8UfSEvI1avKKrGlkQKZuff7gILAqi2SIPA71529mf97qTXAI8O0ZLmUR55h7UovZXWza6G3TmZqKQJzLuFWzkWTU5djEq94Kj7zr83SHnsZqu6ZpYcOGtQO6FnFwqeXgtHT3i06D0ucLoBq0sJJrTFyAxNV0nf9OKicugVTsKT1OwM6AxlGit3e8xJksYSEb%2BrTCviixe%2Fq3isH5XoEdvrkHxPfwkpDQKKwOGDAPADenCoj53HvKyeDOcYD7kdVvmbm2CIoN6XKTfYFDoqISI7sg0yhf1xKpq%2FA61henGFcxnC7tGI%2B5PGMiP94L2huqJ0Mdl0bG7zX5hNRSBSmcfKm04MQvyocWYqKfObnVvo%2FQR34Z8jNPOH6dILxy0Vl8oCQoDKZPnNB4g8OEDCN%2FqWQc2iF%2B%2B78LOY4g8yG73aCGU%2Fp%2BIjy8XUWpBtF%2BnIHDBWL%2FLtj%2FMElMKfRz78GOqUBLJWN%2Bq1GneyGbYtyNHYpD5PKXrtcghM9sK5CgPCstCwZRFWvDVZzsMrInD5T8H6oaPxZD%2Fj4SB5juwnDJRt%2FBD2gR7qUwtYcYiz1KpGdELUhjlroAEqsSCVVKdAczAWTeF9pl%2FDnAI8VqqH%2B3aOXBrcaifNjTvawwIVPtZ%2FVPvSmG6dxpkvtBTJM6BDo%2BHxfN0yw1Lzd%2BXUNde9i%2Fa9x0z5jyJmf&X-Amz-Signature=0d4f61cf4ba1841deba864ccc635be623c192b817f7edba892e2fec95d112d74&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQEBZ73%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClDI5ZkrUBY%2BwkWBIb2JqAXFKa1fpf30LOkqNlp3OO%2BAiEA4VKSOuIGILFGToKd8cI08XDWuP76D9W8pIAAhN6GQ68q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDG3CAW3ebUxr05On9yrcAzA1tBtTOJA1u%2FRqeXIrKmaUHlKlWO%2FpqvHPmKS7Y3dFvaTuEDFuIX77EloTf0kC4CZo0VOlohKmXzjhkBqz4Pb%2FOOJF3I3O95MQm%2B8TYYrD5ufMe3mlsBediSozSPlNZHbbYKwUqI0vY7GvbgM0jF44FY1G%2BY0p20XBqmZzdw%2BNS%2BMLp8UfSEvI1avKKrGlkQKZuff7gILAqi2SIPA71529mf97qTXAI8O0ZLmUR55h7UovZXWza6G3TmZqKQJzLuFWzkWTU5djEq94Kj7zr83SHnsZqu6ZpYcOGtQO6FnFwqeXgtHT3i06D0ucLoBq0sJJrTFyAxNV0nf9OKicugVTsKT1OwM6AxlGit3e8xJksYSEb%2BrTCviixe%2Fq3isH5XoEdvrkHxPfwkpDQKKwOGDAPADenCoj53HvKyeDOcYD7kdVvmbm2CIoN6XKTfYFDoqISI7sg0yhf1xKpq%2FA61henGFcxnC7tGI%2B5PGMiP94L2huqJ0Mdl0bG7zX5hNRSBSmcfKm04MQvyocWYqKfObnVvo%2FQR34Z8jNPOH6dILxy0Vl8oCQoDKZPnNB4g8OEDCN%2FqWQc2iF%2B%2B78LOY4g8yG73aCGU%2Fp%2BIjy8XUWpBtF%2BnIHDBWL%2FLtj%2FMElMKfRz78GOqUBLJWN%2Bq1GneyGbYtyNHYpD5PKXrtcghM9sK5CgPCstCwZRFWvDVZzsMrInD5T8H6oaPxZD%2Fj4SB5juwnDJRt%2FBD2gR7qUwtYcYiz1KpGdELUhjlroAEqsSCVVKdAczAWTeF9pl%2FDnAI8VqqH%2B3aOXBrcaifNjTvawwIVPtZ%2FVPvSmG6dxpkvtBTJM6BDo%2BHxfN0yw1Lzd%2BXUNde9i%2Fa9x0z5jyJmf&X-Amz-Signature=5502157ea7ac8a4c36b620ec7db14b4bcf1774f60e2f96e9e7ef748432edd735&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
