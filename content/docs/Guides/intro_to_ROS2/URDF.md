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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDGU25Z%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDtDhMoOt0LY9%2Fo8L9wqc4RxXgV%2FsywVKcHNp1NXjRr0AiA6ZorLlGQDtFrhkKjoXfQAF9bw21N0Um6x6d2%2BNBKuXyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMr2nSIQq%2FiY27HpiDKtwD5SIwh099EYW05Oh%2Bect4XCiCFqFJnxk%2B60BhMFJpQba4G48wsy5i3ZbNJ%2FwZddmS%2FgaP8dIfHJ84K7AL7flCmgU32M1iqJCw%2BLt9XGQjI8bYb5dwhYW61KQDqTeokj1cVS0alDUwYaYmQCdAXtKq0R3BfvIN2uYuoq7X8vQetwM5EDb6XH3fb6FCrxZXT5XxnaOQ3rJUBq6hdDc9Jxh4GT6LzwHtF%2F6dB%2BMiHEi%2FPMAt%2F5AZfKmCa2WFCiBnHZY11QF49ixMFr%2BJZ611pfQh%2F%2B3u78QDSjQSbW6cY0Om1RDw1g2bCjmMIPYI3%2B16yZIGzWN8NTmHcXS69azEWOM7QK5pHYVIup%2BV5MLZAlSH4hcsdKrge6wxdBzg9nLwMd0UpZaoL4T7f%2FAEFzigJNBVliAL7T6NqDIx7fTkQqrIANJrN%2BvjdpxCrvS7rCdwjlfEdPVCUJLzoXdvSUogyweMdgddITax512d67RMzyMJ0S5Yc0Vh2kWcz1NTN11O4OiUE8qtk9P3pfWbiASfarpoG7%2FQrnLNzhh5pJemCes%2F4UOzHbZ3gN%2FGY07OBdgNaGYZPyAGL1FK%2BdjHTAMmo6YI785YvYK%2BjI5NrheMp5SHwvEP%2B8EmPo4HRxThEQMw97nKwQY6pgE2QKta2HAnsi%2FhYKr7UqgHsAr%2BXzFgbaY7GHjHsfDvnsRcy9ylkMmf42Tmg4gKgtA5rDOSe%2BGZ6B8hYv58n%2FiZ7kP43Zoazah8jpTzhggU2hnFF9CB92BAYZqNhFu1PhmpOIaxvoCO4XRXKdUqJbgq%2Fkn%2B9EhxKghMJGgSf7eTzOlUd1yt9xgfcEkGuIOBwBm77s%2Bdwf5JGuTXOnhOrWwRc9IRbPfL&X-Amz-Signature=574dce59d8e284ee0a159791dd19a33842f45b2a27b3276a58a034bf39097199&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDGU25Z%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDtDhMoOt0LY9%2Fo8L9wqc4RxXgV%2FsywVKcHNp1NXjRr0AiA6ZorLlGQDtFrhkKjoXfQAF9bw21N0Um6x6d2%2BNBKuXyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMr2nSIQq%2FiY27HpiDKtwD5SIwh099EYW05Oh%2Bect4XCiCFqFJnxk%2B60BhMFJpQba4G48wsy5i3ZbNJ%2FwZddmS%2FgaP8dIfHJ84K7AL7flCmgU32M1iqJCw%2BLt9XGQjI8bYb5dwhYW61KQDqTeokj1cVS0alDUwYaYmQCdAXtKq0R3BfvIN2uYuoq7X8vQetwM5EDb6XH3fb6FCrxZXT5XxnaOQ3rJUBq6hdDc9Jxh4GT6LzwHtF%2F6dB%2BMiHEi%2FPMAt%2F5AZfKmCa2WFCiBnHZY11QF49ixMFr%2BJZ611pfQh%2F%2B3u78QDSjQSbW6cY0Om1RDw1g2bCjmMIPYI3%2B16yZIGzWN8NTmHcXS69azEWOM7QK5pHYVIup%2BV5MLZAlSH4hcsdKrge6wxdBzg9nLwMd0UpZaoL4T7f%2FAEFzigJNBVliAL7T6NqDIx7fTkQqrIANJrN%2BvjdpxCrvS7rCdwjlfEdPVCUJLzoXdvSUogyweMdgddITax512d67RMzyMJ0S5Yc0Vh2kWcz1NTN11O4OiUE8qtk9P3pfWbiASfarpoG7%2FQrnLNzhh5pJemCes%2F4UOzHbZ3gN%2FGY07OBdgNaGYZPyAGL1FK%2BdjHTAMmo6YI785YvYK%2BjI5NrheMp5SHwvEP%2B8EmPo4HRxThEQMw97nKwQY6pgE2QKta2HAnsi%2FhYKr7UqgHsAr%2BXzFgbaY7GHjHsfDvnsRcy9ylkMmf42Tmg4gKgtA5rDOSe%2BGZ6B8hYv58n%2FiZ7kP43Zoazah8jpTzhggU2hnFF9CB92BAYZqNhFu1PhmpOIaxvoCO4XRXKdUqJbgq%2Fkn%2B9EhxKghMJGgSf7eTzOlUd1yt9xgfcEkGuIOBwBm77s%2Bdwf5JGuTXOnhOrWwRc9IRbPfL&X-Amz-Signature=a64af6774725d414295e7d57fd43eb39abd30a09762f35257aeefa404d7f652d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
