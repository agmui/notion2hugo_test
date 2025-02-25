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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7RWQSZP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDrFazJ0TygpoX7QaS7qM4isg6wpsYYeU22NL7NgaDr7wIhAJeCQiVRHYkNDxcWSoBKLVsfXM4mvjcHXPYGTbjGt7uRKv8DCEcQABoMNjM3NDIzMTgzODA1Igz%2Fvinoh3NFBvvHM6wq3ANiQ4kmGO9WILBnhhj4ZdzW%2FYvGLYj9LklWQYEqKC4qPSzUjssDDh6jzTkw4uWVBow8NkBnBTDNgfiy8RFqmji0ItMxEQvdYTNAyJMreuStrUPcYCU%2Bw2kMRYcMhtmCac0tt0iOMsqnPxfNhn%2FpffD7WkYzHehUAY1Ku2ZgbrgXIlNoGWFSJJSnLouqxoeMNHht7lS7ERpwXjJfkG4d2x3imcZJR2qRpnviAy%2BWaaT%2FbcgKhbnXtzADBnJ6ymjEA%2F1IoR3YLU3F0PHwItfKSGUIhdKwn4owmoU5dVcorc2cyemZbPKQkhfyJcMU4%2F0R%2Bwk1NeUEvieFFzk5gkedg3R9%2FGkI33hFidXDFiBmzYYXHIsEBrwUHNuOYNl5KBvl9O3zkwdNgOy66StKvKIfL67BzGJWiNqZL3XujNhteehqc0MZn8R7Bj9P%2BkeNUWOTPdqCMQ3JFXtUZxyHgmcZQ57DYb53S%2BeeFKDz2ciSrypCXRnCCwAtBM6TdsSxhPSWGj4mh3cis7hhuZMZ66nIvTHcfdwjF1bND3yjjOWkb3rN2aq6KgzmAf9j9MyFig0r9YTafzNxvBFN4x1%2FhK4yyBSifcAiwDXVvF2fj7GTcHtIjaUPIwbBIwihLxmOgzCAlve9BjqkAYY%2FVO8s3pcSm3Xcqv4zXjoCWsKtJRFm5sKLwzkt9IJIHj8RYvDxRUgmgXqiwPtiKYtLBsoVk4d4h8tHNx4ftN3%2B1Gr622LbgcSjfJ7GhkvKR1FQIudbWirnZdZaUax40zyAz%2BYvDYFxKvhaijHZ30Ebtvq%2BIk19l3rD01h7MbFY%2FnwaExf7FQCR%2BHJJXrkXg2ccmQcvbNSPts48d0ddSQM1gXlI&X-Amz-Signature=74daa525dd637f3671d3ae217390b42181a60821423fc471792a47f6e9d04fad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7RWQSZP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDrFazJ0TygpoX7QaS7qM4isg6wpsYYeU22NL7NgaDr7wIhAJeCQiVRHYkNDxcWSoBKLVsfXM4mvjcHXPYGTbjGt7uRKv8DCEcQABoMNjM3NDIzMTgzODA1Igz%2Fvinoh3NFBvvHM6wq3ANiQ4kmGO9WILBnhhj4ZdzW%2FYvGLYj9LklWQYEqKC4qPSzUjssDDh6jzTkw4uWVBow8NkBnBTDNgfiy8RFqmji0ItMxEQvdYTNAyJMreuStrUPcYCU%2Bw2kMRYcMhtmCac0tt0iOMsqnPxfNhn%2FpffD7WkYzHehUAY1Ku2ZgbrgXIlNoGWFSJJSnLouqxoeMNHht7lS7ERpwXjJfkG4d2x3imcZJR2qRpnviAy%2BWaaT%2FbcgKhbnXtzADBnJ6ymjEA%2F1IoR3YLU3F0PHwItfKSGUIhdKwn4owmoU5dVcorc2cyemZbPKQkhfyJcMU4%2F0R%2Bwk1NeUEvieFFzk5gkedg3R9%2FGkI33hFidXDFiBmzYYXHIsEBrwUHNuOYNl5KBvl9O3zkwdNgOy66StKvKIfL67BzGJWiNqZL3XujNhteehqc0MZn8R7Bj9P%2BkeNUWOTPdqCMQ3JFXtUZxyHgmcZQ57DYb53S%2BeeFKDz2ciSrypCXRnCCwAtBM6TdsSxhPSWGj4mh3cis7hhuZMZ66nIvTHcfdwjF1bND3yjjOWkb3rN2aq6KgzmAf9j9MyFig0r9YTafzNxvBFN4x1%2FhK4yyBSifcAiwDXVvF2fj7GTcHtIjaUPIwbBIwihLxmOgzCAlve9BjqkAYY%2FVO8s3pcSm3Xcqv4zXjoCWsKtJRFm5sKLwzkt9IJIHj8RYvDxRUgmgXqiwPtiKYtLBsoVk4d4h8tHNx4ftN3%2B1Gr622LbgcSjfJ7GhkvKR1FQIudbWirnZdZaUax40zyAz%2BYvDYFxKvhaijHZ30Ebtvq%2BIk19l3rD01h7MbFY%2FnwaExf7FQCR%2BHJJXrkXg2ccmQcvbNSPts48d0ddSQM1gXlI&X-Amz-Signature=db63e3a0a0d0f44227b44d4add67b78280a09b9e2c50fa40a0d668c1caa1d35e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
