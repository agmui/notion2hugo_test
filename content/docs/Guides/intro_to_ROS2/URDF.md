---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZIHQHR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHj3qg0iItG5gTSvztalAALt5WzagvJsbVdRwnZm7QeQAiEA2BkS%2BXaLyVhK7QUlekgT4azbi%2Fs%2FZ30OV70PrK3Pai4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA%2BLTekA2LmHpA10MircA%2Fafwx2vQQeElsQSfQCI7wXvVyGWBBALPEuLFdP3YFCJYvbKwKBj0nkfMeUB7WPMnT1rOS219BYSW4vC%2BblusEkjBc6P%2FrdP5eyFoBRfvAAViysc8hEO63oojVBTZHrZLRX%2FmhLhB3IkeTjLDiUWpv0OYHLuRSlqM6TxoizvKHjK09nKLHI4v1bSQxDkCEm3VyDWwfCrTlFqgGdKicANYH0%2BMu4oCaB1tzYYtqUS5atVRC1eeUAXgG4BSUJbLk8n0drOJV3h54Af0tH0jaCmEURbXI5nosGgwhIjeFolQorEM0GAFooTqKLQ7SNlyZTiibcuSRwNyhGY5f98OmehqRc1qd42Fb9HMLy7zy5WMQPKzCUhR85GfJHZ4IG9%2BKtzD0M3MlV85QeJHz3L3aAZp4uOGR%2BzlDsmv%2FvbfBN8VbZYhA%2Fst6J9qoZ42PffJi%2B8enWKRL1KBsdYoA%2ByUKlF%2B621wR1yKN3U5U5HtRdlqKJCMuBUqb%2BZmyGCi122aAImh10z9X41fAfsbN4QOzOF3%2BwRgaKpPGt8rIkML4qAvKgnU3cXWVXA42mKGVOh3hoxcuLK%2FTRC%2B7iNloQIoMz1mncHmGcdFcb3p%2FQyxe92WiOWA8FMgbqPcftVOpS%2BMPOKgMUGOqUBg0u3uDCeXyHK%2BTnDM1nzzgT%2BnuDORlbFZ4N2nWmdhpOMRi2dMjVMGAukRulhevwpIiReYp2JxELNurHhgcWggpc%2BqboFnE%2BFFxqY0dzyi5I7rp2BsnM5hs0sahU1cR%2BmrvTavjwsul3TlG8CyHd1wdnk2eFSnSF4aI564TJSOrpFBdlz7WbRc1xKbGL46Z4LgHdbbrYgyZiDQCMqQPRo2764m30H&X-Amz-Signature=ceeb5728d1573ca4feefeeedad904117035f889d581a2b620ad97a3b50f59c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZIHQHR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHj3qg0iItG5gTSvztalAALt5WzagvJsbVdRwnZm7QeQAiEA2BkS%2BXaLyVhK7QUlekgT4azbi%2Fs%2FZ30OV70PrK3Pai4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA%2BLTekA2LmHpA10MircA%2Fafwx2vQQeElsQSfQCI7wXvVyGWBBALPEuLFdP3YFCJYvbKwKBj0nkfMeUB7WPMnT1rOS219BYSW4vC%2BblusEkjBc6P%2FrdP5eyFoBRfvAAViysc8hEO63oojVBTZHrZLRX%2FmhLhB3IkeTjLDiUWpv0OYHLuRSlqM6TxoizvKHjK09nKLHI4v1bSQxDkCEm3VyDWwfCrTlFqgGdKicANYH0%2BMu4oCaB1tzYYtqUS5atVRC1eeUAXgG4BSUJbLk8n0drOJV3h54Af0tH0jaCmEURbXI5nosGgwhIjeFolQorEM0GAFooTqKLQ7SNlyZTiibcuSRwNyhGY5f98OmehqRc1qd42Fb9HMLy7zy5WMQPKzCUhR85GfJHZ4IG9%2BKtzD0M3MlV85QeJHz3L3aAZp4uOGR%2BzlDsmv%2FvbfBN8VbZYhA%2Fst6J9qoZ42PffJi%2B8enWKRL1KBsdYoA%2ByUKlF%2B621wR1yKN3U5U5HtRdlqKJCMuBUqb%2BZmyGCi122aAImh10z9X41fAfsbN4QOzOF3%2BwRgaKpPGt8rIkML4qAvKgnU3cXWVXA42mKGVOh3hoxcuLK%2FTRC%2B7iNloQIoMz1mncHmGcdFcb3p%2FQyxe92WiOWA8FMgbqPcftVOpS%2BMPOKgMUGOqUBg0u3uDCeXyHK%2BTnDM1nzzgT%2BnuDORlbFZ4N2nWmdhpOMRi2dMjVMGAukRulhevwpIiReYp2JxELNurHhgcWggpc%2BqboFnE%2BFFxqY0dzyi5I7rp2BsnM5hs0sahU1cR%2BmrvTavjwsul3TlG8CyHd1wdnk2eFSnSF4aI564TJSOrpFBdlz7WbRc1xKbGL46Z4LgHdbbrYgyZiDQCMqQPRo2764m30H&X-Amz-Signature=a902a05dc6aa1a66d721a5246d4ac825f85d1d9b94de2cfd602e8e048fc388e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
