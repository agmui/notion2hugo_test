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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDV4JF7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiUJhqpxDLhFROwI57Gdd2NIMjZS84MxHDxE3ZXk343AiAzyAjLOOqbozHqaxz7WClnKFHnmz4CJddCUIRJAhjouSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMgTxW4bEmXfa%2F%2FVoMKtwDozle%2Bb22Z5QAMnZt3dzsv9WvCAPPt%2BG7r6lbonzngUqP9Z2TLTeRVToE4%2B98lDSELiFqsATsjA98eNWk5d18xNG8HcBoblsJVzLJD4efOAXx1rUlLhByH54ucdJQpp9XtH9XUnzlAXNEJWV1XeZi%2B6rMx%2BdtzNu5hU0JaT1jxlEGHlUZUcOZmwopZHR9odtLvePhMUFsptKSdVUebm4jXkVuO17384rOXolPoOdFwf74UmSb2HoNWSz9mgmcDC5EKBZglCqHEfvFwepPYr50gNfFLvED%2B8YnMvrKiYo83T7AcO39NcKGvFRXVO5wchJvWorPCvlm1xSRb0ZqBrJGjt5eB7S1VcxeegjAToajZt00bE5LNm4IEYIXQwoQ3x1Im58eAyXgrFz%2BPx42Dpcobfu%2F5TJ6r2QG%2FWXSL2R%2FDUglOh4HkJCgRW40%2FtMOuvG1Wn3w06GO4D%2FlP45QCDfjJDP5C96Rsrw1Lo8z8fPRogyg5mFgWQzHdu%2BRZ67IlVZfsHKdLLnU75UN%2Bs8%2FMuja%2BQTpKs%2BhAYe3bp15zvtV%2FDgPPpr340Lc0JregOo7VELFw%2BKHoP33dDU3VJpIvp9GyQyd4qs26zA6gIfczmIN8elwISwfpWcu8UZk7kcw5sajvgY6pgHDh0LfaTdHNnZoMs9GhrwXW1AVul3xTAItQQMHgvpqGI5uY52w5cL6wSWsriznDvVLktcgMXdGWRgV5%2F8ORgFUTU%2FuFGLDFuD5ijZEmB%2FdfFWl9UnyT%2BckW3%2FuVHophHy37cibHdhuX5N2KqgMqKgwd8c7niY3d6I9vJ4Xct5SuXcu8b%2B3F89YnlP14l3PmLnAerQCqxYxujaIY03RJlxU%2FesjicyB&X-Amz-Signature=512100bb562cf833eec3cd99f02614974335a2ea0324b043f3d35c6ba2f2ebe3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDV4JF7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiUJhqpxDLhFROwI57Gdd2NIMjZS84MxHDxE3ZXk343AiAzyAjLOOqbozHqaxz7WClnKFHnmz4CJddCUIRJAhjouSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMgTxW4bEmXfa%2F%2FVoMKtwDozle%2Bb22Z5QAMnZt3dzsv9WvCAPPt%2BG7r6lbonzngUqP9Z2TLTeRVToE4%2B98lDSELiFqsATsjA98eNWk5d18xNG8HcBoblsJVzLJD4efOAXx1rUlLhByH54ucdJQpp9XtH9XUnzlAXNEJWV1XeZi%2B6rMx%2BdtzNu5hU0JaT1jxlEGHlUZUcOZmwopZHR9odtLvePhMUFsptKSdVUebm4jXkVuO17384rOXolPoOdFwf74UmSb2HoNWSz9mgmcDC5EKBZglCqHEfvFwepPYr50gNfFLvED%2B8YnMvrKiYo83T7AcO39NcKGvFRXVO5wchJvWorPCvlm1xSRb0ZqBrJGjt5eB7S1VcxeegjAToajZt00bE5LNm4IEYIXQwoQ3x1Im58eAyXgrFz%2BPx42Dpcobfu%2F5TJ6r2QG%2FWXSL2R%2FDUglOh4HkJCgRW40%2FtMOuvG1Wn3w06GO4D%2FlP45QCDfjJDP5C96Rsrw1Lo8z8fPRogyg5mFgWQzHdu%2BRZ67IlVZfsHKdLLnU75UN%2Bs8%2FMuja%2BQTpKs%2BhAYe3bp15zvtV%2FDgPPpr340Lc0JregOo7VELFw%2BKHoP33dDU3VJpIvp9GyQyd4qs26zA6gIfczmIN8elwISwfpWcu8UZk7kcw5sajvgY6pgHDh0LfaTdHNnZoMs9GhrwXW1AVul3xTAItQQMHgvpqGI5uY52w5cL6wSWsriznDvVLktcgMXdGWRgV5%2F8ORgFUTU%2FuFGLDFuD5ijZEmB%2FdfFWl9UnyT%2BckW3%2FuVHophHy37cibHdhuX5N2KqgMqKgwd8c7niY3d6I9vJ4Xct5SuXcu8b%2B3F89YnlP14l3PmLnAerQCqxYxujaIY03RJlxU%2FesjicyB&X-Amz-Signature=e73bcface1b0f961652de17eed340c426fc98bea8186dcfb5960115cdf1d60e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
