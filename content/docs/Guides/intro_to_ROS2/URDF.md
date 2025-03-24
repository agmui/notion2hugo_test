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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFTF2P5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYB2FISmCGiU3y0qaK3TfTFyD9TDwgU4%2BWggekIfAlqAIhAP08ebKq9aJstwjx31Hk0kJRMAy3Aa1%2B4TUXojGR9GH7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynkXmrg1OGeuik0boq3APOmMdqQTUvRS8mTbVyqxgpdwg9T%2FQbQD958WcJsR%2F%2Fcc2MvAYrbhH6dfxSnzlyM0caay9tW3JjKtYKbTaqcnCg0kG1SOVxadQlBMdyibhn9YrdMhF%2FMPgYXhDimjPzk%2BpR%2FHEajSkQYRq4wI5rE5pDbFjr7joe9IOWcecjyVMjlx5Wt5UBPfDXEl3s1Y0ZjYgzjImBGZQGnK2Fwhza%2BJv%2BNpJYIY5CMamZEQC4hi9%2FMhokWlhxPXVJFR10mlIZ1T7oX6Z3UkZYnfAVTrjNNKVqRG4h7r4wkVOv0d1Vgr3Op0bpAUp%2BMZTpFdwNEBpwcd1Qc1yB25B%2Fm8u3Dl15jpNEi%2BXYjJFa9xgn6v6WvC3lpB0fZQO47R%2BA5a26YAGyvu%2FRbmv%2BGAi6iSRV6rCVINncBE3WmQqymIgKZWraSWdsT1zRNT7CzN6tehJY%2BmrDwYDxpb6e7FAHpBBet9dxzk3j4HDMjjqnv4iWRTce0lNUev8K2p4QVgfM7q00iBJ7dF0%2Fysy3%2B4IH%2FP3CDNLdwNeHV1HJU8B8uBrQ54%2BFalZCtRmIVIKxQmJPMEhzV%2B29XJA63q5VhwsSDDmm6W4jzS5Yq0rAgtBkKIcDkfoo2gG2x5AhFa9CGn5x5OVkJDC1%2FYW%2FBjqkAQN6RRNdEUol1kJ4%2FilqEnwBmy3WR3Mwg0F6oG9kfkn22riXi%2BpfgULz6HuJW5%2BK4kUZ2McQg%2FD%2BV9v5zQ2RURI%2FybWgFKAEfxSMj0XoKxefzKofF7vshHNxq9QIFbDfENydLlG9LG5YF%2FHoHpzcf%2FJCVUibge%2FPhONNeLr3qQBirefABSUxFCtrUS%2Fz4Bsend56UAY%2F5i1ROPebE0AOJzOvXD7j&X-Amz-Signature=e9fc903b9364e2c8fde7abc3b7e17fa6624629ca70db9bd760e419f4703ee5da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFTF2P5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYB2FISmCGiU3y0qaK3TfTFyD9TDwgU4%2BWggekIfAlqAIhAP08ebKq9aJstwjx31Hk0kJRMAy3Aa1%2B4TUXojGR9GH7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynkXmrg1OGeuik0boq3APOmMdqQTUvRS8mTbVyqxgpdwg9T%2FQbQD958WcJsR%2F%2Fcc2MvAYrbhH6dfxSnzlyM0caay9tW3JjKtYKbTaqcnCg0kG1SOVxadQlBMdyibhn9YrdMhF%2FMPgYXhDimjPzk%2BpR%2FHEajSkQYRq4wI5rE5pDbFjr7joe9IOWcecjyVMjlx5Wt5UBPfDXEl3s1Y0ZjYgzjImBGZQGnK2Fwhza%2BJv%2BNpJYIY5CMamZEQC4hi9%2FMhokWlhxPXVJFR10mlIZ1T7oX6Z3UkZYnfAVTrjNNKVqRG4h7r4wkVOv0d1Vgr3Op0bpAUp%2BMZTpFdwNEBpwcd1Qc1yB25B%2Fm8u3Dl15jpNEi%2BXYjJFa9xgn6v6WvC3lpB0fZQO47R%2BA5a26YAGyvu%2FRbmv%2BGAi6iSRV6rCVINncBE3WmQqymIgKZWraSWdsT1zRNT7CzN6tehJY%2BmrDwYDxpb6e7FAHpBBet9dxzk3j4HDMjjqnv4iWRTce0lNUev8K2p4QVgfM7q00iBJ7dF0%2Fysy3%2B4IH%2FP3CDNLdwNeHV1HJU8B8uBrQ54%2BFalZCtRmIVIKxQmJPMEhzV%2B29XJA63q5VhwsSDDmm6W4jzS5Yq0rAgtBkKIcDkfoo2gG2x5AhFa9CGn5x5OVkJDC1%2FYW%2FBjqkAQN6RRNdEUol1kJ4%2FilqEnwBmy3WR3Mwg0F6oG9kfkn22riXi%2BpfgULz6HuJW5%2BK4kUZ2McQg%2FD%2BV9v5zQ2RURI%2FybWgFKAEfxSMj0XoKxefzKofF7vshHNxq9QIFbDfENydLlG9LG5YF%2FHoHpzcf%2FJCVUibge%2FPhONNeLr3qQBirefABSUxFCtrUS%2Fz4Bsend56UAY%2F5i1ROPebE0AOJzOvXD7j&X-Amz-Signature=5c2a9f6c599712a7c3e855fab35838fb75618e1168bae5b1e41966fea849a78c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
