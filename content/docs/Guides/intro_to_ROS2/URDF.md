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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIDOB6L%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwZUubVYf7TqNNQfpbophZGc%2BRI4Iz79FqSWoRXixdAIgFuzxCiClUjRAdPow8%2Fje6Hw4ETlhwpL9ZpH5NWxBJtcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKpztKfPUyz0B9JDUyrcA8hZUhxZlrMsBfoi4QEijJHsn6F3rQdnCBCS5P6k49TWiyAsPuvbrMSOOp1Ukdnvfy2IICyy%2FRkf2WrcR6Z1RC5HBnX%2BmWuhaNn5Z4CYvuHEoxEKlm%2BsnN9J1ZYGN5EeaHGVE%2Fp%2FalLXwgo9guFMiL6o6YzaIDBo29ZRG9uIgwR7%2BEtjnS%2Fu3JD7nG4XxO3YjPM6j0Yd0v72OeYN%2Fegk5XZlWtamoS4FC62QFpfFVMfeq6kwvovIfCBl3AlfI0YT2tPPy6pdrauVZ58MR7mNT2110OnulXInGA9S%2F71X6NN%2Bw2QdTz6BUnBNAOa8LGw8qg6NPumSrzuZ5SixIzZtMW99vmEBhgiy2guetgUlHxNZ6nc4s6bMposcAc9YA%2BmJhNyBcB0dlFhneWHc60v4PE5QR24tD0%2FHwol0IvMdPDGUxMcHsUxiO27bM5vdz%2FVX68xpB6ka6K1zI6mjKHaVmzgqUTqmEKP0OJCxPu%2B2Wb%2F19oV9Mz7cqmpIej9IqcpbY%2BFCWaXNg6Z8lk%2FZeXtX77G1DHWWMJfeOSbzd2DrVGbtxe2NzIXLlE7pThXnYesWWuUgiZ2rykuIJf7NLviZnOwy%2BGcu2g560i%2FI%2BPcYK%2BKztyUHRC7x4Wm0XjcaMJOlzcMGOqUBlVb53uqXpxpE0dz8fPJoCRhxiASvCYglSCkottdMzW1VAmCDo%2BGuJvib6Iha5Kw2U1uuqDI676KJ%2FYiCScAjNyBS0sgEal1ds5tGbNVroYJq5dzSRqstTnlHuKDKnwhNviaUtgEiVAhA25kQGOA4j63Ekiq1xa0u8PEX8MN6HjqDfx4Y9oOnc91sif9x3ufKjy%2BCmrl9PzNN8c%2Fine4hOHkiiDsi&X-Amz-Signature=bfa288e25404e6f8d7e011e958eec2289e373c21a959669de5d5732de179bd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIDOB6L%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwZUubVYf7TqNNQfpbophZGc%2BRI4Iz79FqSWoRXixdAIgFuzxCiClUjRAdPow8%2Fje6Hw4ETlhwpL9ZpH5NWxBJtcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKpztKfPUyz0B9JDUyrcA8hZUhxZlrMsBfoi4QEijJHsn6F3rQdnCBCS5P6k49TWiyAsPuvbrMSOOp1Ukdnvfy2IICyy%2FRkf2WrcR6Z1RC5HBnX%2BmWuhaNn5Z4CYvuHEoxEKlm%2BsnN9J1ZYGN5EeaHGVE%2Fp%2FalLXwgo9guFMiL6o6YzaIDBo29ZRG9uIgwR7%2BEtjnS%2Fu3JD7nG4XxO3YjPM6j0Yd0v72OeYN%2Fegk5XZlWtamoS4FC62QFpfFVMfeq6kwvovIfCBl3AlfI0YT2tPPy6pdrauVZ58MR7mNT2110OnulXInGA9S%2F71X6NN%2Bw2QdTz6BUnBNAOa8LGw8qg6NPumSrzuZ5SixIzZtMW99vmEBhgiy2guetgUlHxNZ6nc4s6bMposcAc9YA%2BmJhNyBcB0dlFhneWHc60v4PE5QR24tD0%2FHwol0IvMdPDGUxMcHsUxiO27bM5vdz%2FVX68xpB6ka6K1zI6mjKHaVmzgqUTqmEKP0OJCxPu%2B2Wb%2F19oV9Mz7cqmpIej9IqcpbY%2BFCWaXNg6Z8lk%2FZeXtX77G1DHWWMJfeOSbzd2DrVGbtxe2NzIXLlE7pThXnYesWWuUgiZ2rykuIJf7NLviZnOwy%2BGcu2g560i%2FI%2BPcYK%2BKztyUHRC7x4Wm0XjcaMJOlzcMGOqUBlVb53uqXpxpE0dz8fPJoCRhxiASvCYglSCkottdMzW1VAmCDo%2BGuJvib6Iha5Kw2U1uuqDI676KJ%2FYiCScAjNyBS0sgEal1ds5tGbNVroYJq5dzSRqstTnlHuKDKnwhNviaUtgEiVAhA25kQGOA4j63Ekiq1xa0u8PEX8MN6HjqDfx4Y9oOnc91sif9x3ufKjy%2BCmrl9PzNN8c%2Fine4hOHkiiDsi&X-Amz-Signature=c8902d8541bd02edb2ff1eab320f87c618e2ce8f2b87187b9286ce1f36ea38d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
