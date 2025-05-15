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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECA7WM7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFCNjvLZDe7D2RCZ3cOFeOezoD7ikCN965VJV9aL9FGhAiEA5fsDelQEcxy3hw9pBBNt%2B5UjNsGIkhnt6GVGhlQbYu8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOHAV8OqIQ2Db8E3ySrcA%2Fhhc%2FIIW%2BScjBQ3O1rpH3M9GdpUT%2B3IXTvH6LTKlOn1g8opN8ka3tfKCFVyuCrAUZZ29Hw5pZGYy%2BoXh%2B0bGjZPW3FmvJx36fchMPYrHYxAOj1AUEZmgPhOPncb1uCDLi7P83nNmkKg3ncAwaxaaHzqv7%2FqzyWyiUlhDeesu4mYNOkN9Ay%2BLmIrTXFNFcuDQu4l9MqnRqBiMlK5kFnoE5rLzxwLMTSYAOTZrUMlDaBMAOEfGjpUXABnQBi2qDrubv%2FQxuYgYimZRwVFlYwaoTNLr56ghS4vFoAqGSba6s1hDgRYtuZzV1kqw63bphZrmuJH993VdIOQYqHOji6%2FpyiPs1ahh6WGA%2FZcKv%2Bcv7vizRc7bswsV4jsi1Ga4PUQ49Bf5hkJ1MecXwGyvmTSekkIRFPwBUjtpCCUZwOAgTThYnKiu%2FHn52pOLZsAlaRhV8HetKmFORzsc4lHiIB%2FoSwHpt4e7Ynd%2FyaL5puJ2dpWhCKKUhXW6WjDaDuiS9jrigbCCVXbncMAJb07QG4eKPRM6YSkkxhIm1zU8ivBAbuTFFosVPNIjV1Ppswly1s3z8RLOaSKosgbbCQ10pdk5WLk%2FEVnvyjRGTIgEc%2BgL%2FS%2FG1gHH3y1r%2BX3WPKkMKrqlcEGOqUB3jnQSBHbbdVtbR7nty4CG0UPC85D9vMAgTfWZXi7g9FldXLc1FfVwy4wAxy1kVH9QUrz4oWrDrDvYjRTCUMjysIDT46DVBL1e4gsUjUoh9AIt%2BbPcmRzPEtyE1tN4tQ9I%2Bw5a4NFyJWoouuFw%2F5m3asz8LwpCjIru4amOWPBVfCr7TVJX75hZ%2B4q%2FNc2zk%2B4arugNeWcTP2%2BLfnq8qQgQcvmeqSF&X-Amz-Signature=b4cef8fce91a19f8804117d60bf9b7be7bc00fda9008a9ed16687890f5deb9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECA7WM7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFCNjvLZDe7D2RCZ3cOFeOezoD7ikCN965VJV9aL9FGhAiEA5fsDelQEcxy3hw9pBBNt%2B5UjNsGIkhnt6GVGhlQbYu8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOHAV8OqIQ2Db8E3ySrcA%2Fhhc%2FIIW%2BScjBQ3O1rpH3M9GdpUT%2B3IXTvH6LTKlOn1g8opN8ka3tfKCFVyuCrAUZZ29Hw5pZGYy%2BoXh%2B0bGjZPW3FmvJx36fchMPYrHYxAOj1AUEZmgPhOPncb1uCDLi7P83nNmkKg3ncAwaxaaHzqv7%2FqzyWyiUlhDeesu4mYNOkN9Ay%2BLmIrTXFNFcuDQu4l9MqnRqBiMlK5kFnoE5rLzxwLMTSYAOTZrUMlDaBMAOEfGjpUXABnQBi2qDrubv%2FQxuYgYimZRwVFlYwaoTNLr56ghS4vFoAqGSba6s1hDgRYtuZzV1kqw63bphZrmuJH993VdIOQYqHOji6%2FpyiPs1ahh6WGA%2FZcKv%2Bcv7vizRc7bswsV4jsi1Ga4PUQ49Bf5hkJ1MecXwGyvmTSekkIRFPwBUjtpCCUZwOAgTThYnKiu%2FHn52pOLZsAlaRhV8HetKmFORzsc4lHiIB%2FoSwHpt4e7Ynd%2FyaL5puJ2dpWhCKKUhXW6WjDaDuiS9jrigbCCVXbncMAJb07QG4eKPRM6YSkkxhIm1zU8ivBAbuTFFosVPNIjV1Ppswly1s3z8RLOaSKosgbbCQ10pdk5WLk%2FEVnvyjRGTIgEc%2BgL%2FS%2FG1gHH3y1r%2BX3WPKkMKrqlcEGOqUB3jnQSBHbbdVtbR7nty4CG0UPC85D9vMAgTfWZXi7g9FldXLc1FfVwy4wAxy1kVH9QUrz4oWrDrDvYjRTCUMjysIDT46DVBL1e4gsUjUoh9AIt%2BbPcmRzPEtyE1tN4tQ9I%2Bw5a4NFyJWoouuFw%2F5m3asz8LwpCjIru4amOWPBVfCr7TVJX75hZ%2B4q%2FNc2zk%2B4arugNeWcTP2%2BLfnq8qQgQcvmeqSF&X-Amz-Signature=c5fd688fcd0ec978ab86f8e32973b8d412211f951ed87a1993bc9f43f03eba05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
