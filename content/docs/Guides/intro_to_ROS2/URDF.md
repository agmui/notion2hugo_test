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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIA3NH6X%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrlO2L19xFHSZGbUV579YpX2oNzVRNEQa%2BajTF1AFjFAIhAMba8MKYhWJSYnk0zbH6O7330w%2Bw8GeaSUEcW%2Fn6Q6UqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypco5r3y9F7U6GvRYq3APHz%2Fo51muSF1KdAEgamuw5KtGVWwHzRcKFQyG0CFnVPXzNBaFAoEuQqFDAJwzgjWoBlaly3R%2BFafg%2BNiGaZJZZsK2QJmx96YCbNPVSb3WTAMLHIBPDXDWDr4Nl3dlJoWX%2BTr2KuRkshYjiRQ1KeU5a%2BLC8JaXH3mVT70hh%2BxMYv0cJHUy2FEOT3o1yYFkAQaPcH6jaqCxx3dVFWG5UWcPp0XyvgneJef6E%2Bcd7L%2FxoFxtf%2BhYYCFUZ%2FLDJzZdatpoFlZ1MOJVHswva%2BYhH4D5Fx%2BJMjG6Og1AWXZQ2EYvFnagwt6w2Ef%2BqR0nHrTfAdHEmOjBBvPlUAGTn4Emf3HHOxOmdGqN7Q7i3NWyvcc6bRBoJ0SmxaF6HYZnU%2FjM2Q%2FUTl6FtOOa45qgfdQxKDHYXj7H43XO%2BzVS%2BayTacJYn8iLGIBUmx1GL1Qd8gu%2B1svjSBmltysy0OyGH6LLm9g09vT1HNznWv7FSTTGSNI%2Bq1hyYWSKSizjf5tQPRu2JuI7hTuJ0mQ%2BjVCtCRyY3HGM%2FF2usy%2FiiVh29d391AeY4O%2F8K%2BaSA4r%2FWTIf%2FFdrgletMr%2FaC%2B6dA31L54gtfs3IjiUVY%2F7djjhkgNA0WnJNgCkr7%2FFP2GFkmOHn4ijD%2B%2BfjDBjqkAUF%2FWq3nvkn8t2axPayqX%2BxZ9BPVwtkarxEYRL5MOxvtSqG3NR2VSHbWNpnz%2F0TjWe1SSpDtR%2BwvAUgyl6ki4O5hSWuZ4P16XmAmx6wCXc01NgLdJWmZbeKTJmPEeBNMFUZJKhjiUKQiUUJCssYr%2Bc9MoTVqOhyMcVqv5lwXNEb8QZY6yGV8NO15TL%2F1bhe7v3vJC3Tw2tcDa7TQ3SHbxa0TrLAx&X-Amz-Signature=a8ab20b7797e75f342fb42a6b209fe66a518372d83c17d6b59aa8da26e1457ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIA3NH6X%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrlO2L19xFHSZGbUV579YpX2oNzVRNEQa%2BajTF1AFjFAIhAMba8MKYhWJSYnk0zbH6O7330w%2Bw8GeaSUEcW%2Fn6Q6UqKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypco5r3y9F7U6GvRYq3APHz%2Fo51muSF1KdAEgamuw5KtGVWwHzRcKFQyG0CFnVPXzNBaFAoEuQqFDAJwzgjWoBlaly3R%2BFafg%2BNiGaZJZZsK2QJmx96YCbNPVSb3WTAMLHIBPDXDWDr4Nl3dlJoWX%2BTr2KuRkshYjiRQ1KeU5a%2BLC8JaXH3mVT70hh%2BxMYv0cJHUy2FEOT3o1yYFkAQaPcH6jaqCxx3dVFWG5UWcPp0XyvgneJef6E%2Bcd7L%2FxoFxtf%2BhYYCFUZ%2FLDJzZdatpoFlZ1MOJVHswva%2BYhH4D5Fx%2BJMjG6Og1AWXZQ2EYvFnagwt6w2Ef%2BqR0nHrTfAdHEmOjBBvPlUAGTn4Emf3HHOxOmdGqN7Q7i3NWyvcc6bRBoJ0SmxaF6HYZnU%2FjM2Q%2FUTl6FtOOa45qgfdQxKDHYXj7H43XO%2BzVS%2BayTacJYn8iLGIBUmx1GL1Qd8gu%2B1svjSBmltysy0OyGH6LLm9g09vT1HNznWv7FSTTGSNI%2Bq1hyYWSKSizjf5tQPRu2JuI7hTuJ0mQ%2BjVCtCRyY3HGM%2FF2usy%2FiiVh29d391AeY4O%2F8K%2BaSA4r%2FWTIf%2FFdrgletMr%2FaC%2B6dA31L54gtfs3IjiUVY%2F7djjhkgNA0WnJNgCkr7%2FFP2GFkmOHn4ijD%2B%2BfjDBjqkAUF%2FWq3nvkn8t2axPayqX%2BxZ9BPVwtkarxEYRL5MOxvtSqG3NR2VSHbWNpnz%2F0TjWe1SSpDtR%2BwvAUgyl6ki4O5hSWuZ4P16XmAmx6wCXc01NgLdJWmZbeKTJmPEeBNMFUZJKhjiUKQiUUJCssYr%2Bc9MoTVqOhyMcVqv5lwXNEb8QZY6yGV8NO15TL%2F1bhe7v3vJC3Tw2tcDa7TQ3SHbxa0TrLAx&X-Amz-Signature=f179f098cdd06b18502ce183d828601a46826ea329fa00c7fbe692ec800c6f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
