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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WB52FP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjHynNk0fr3noJ5YDe4IJ02DYGcU1M%2FReQ94VW01kkwAiEA2xwqGjStgc0Ahwm2yOELLQz4iXGRRTiX%2F4ymaDCLanMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH5COlsW%2FaRplJ9llCrcA%2FNOQwf3P6jFKQtuHsS08bzqdbjTFI6hArsKMIlAbL%2FrQJCkWJvzAuyTJ%2BbdrJTA8Yh%2BMMegOb%2BSSDeSEGnpnUwVOJqu7LjT4cbMmsojU7CEJ6LR5LhPnkeYnRlu5U96SRrTXD7zylvmyNlOMnouKxEUXAJnaeJvKiAhYv84ZoKJ8QHSi%2F7A6vasmU6nqVdq8BUFBH8Jp4AMnu0wcXEAJXAdxzgDCU%2F2TGhy8fKYOt2eBxe96sQjeR8uC6WYzpRGpoxBTuJvngiUkvYXFFTCC9Uzo5s1TZhABKIaYt28i2sAGypoUQ1bbwwxSu0TxtxiXfWTUHWop4i6516Qj9iags5oAxJxhh%2BSfTtMdlo27HNgkKSRqtQwDAvz65d%2FgcBjPArS8KWmJBuKvesRH5DSPI7vTqZbjTBas4C942HvVbdNp1qH2Qd6MwmbM79pXrmrFjT%2B7xbh9QPVNy4qs%2Fg7UiWmFBxVY6Uy4ESxidJBaqE65zy2ZrwW1OwJX6zEH3587rsQvIffesmxgkyPWcZHlz%2BM6yjc72tRDZ6gTnTwjg6Mi5a8e30tFKfJHD8eM%2F1Vq%2BErYSwT5qxC%2B6wsZX1kn0F04u8IS%2FtM%2FrE1oK11KKM4D36KUi8%2BuBEhzgKnMKyT3MEGOqUBoI2AOxrymeeiukrWBVk%2BXtVmFJOPG7RqVdJsTywYbItOiwMLbM2RAMQNmp5d2jaKwBRyXJplbhXPE%2F0eZ2d2hkj5fBNt3tdAzhEJtKFISEgn2JjNxmymuDbeFLGB3CpOz%2F1TEzI9TwJYk1QHajN8j8PPDoX9qv3nViXft%2FgngdgknqLj%2FnzKb3fH7N3%2F89Vo1ruioT5%2BxhC0rMAnVCuu8RVCBFij&X-Amz-Signature=157fe45ee7ea3c300c11cf24e0af87864a723bd0d6309fcb7c4ed0efb7eb883f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WB52FP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjHynNk0fr3noJ5YDe4IJ02DYGcU1M%2FReQ94VW01kkwAiEA2xwqGjStgc0Ahwm2yOELLQz4iXGRRTiX%2F4ymaDCLanMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH5COlsW%2FaRplJ9llCrcA%2FNOQwf3P6jFKQtuHsS08bzqdbjTFI6hArsKMIlAbL%2FrQJCkWJvzAuyTJ%2BbdrJTA8Yh%2BMMegOb%2BSSDeSEGnpnUwVOJqu7LjT4cbMmsojU7CEJ6LR5LhPnkeYnRlu5U96SRrTXD7zylvmyNlOMnouKxEUXAJnaeJvKiAhYv84ZoKJ8QHSi%2F7A6vasmU6nqVdq8BUFBH8Jp4AMnu0wcXEAJXAdxzgDCU%2F2TGhy8fKYOt2eBxe96sQjeR8uC6WYzpRGpoxBTuJvngiUkvYXFFTCC9Uzo5s1TZhABKIaYt28i2sAGypoUQ1bbwwxSu0TxtxiXfWTUHWop4i6516Qj9iags5oAxJxhh%2BSfTtMdlo27HNgkKSRqtQwDAvz65d%2FgcBjPArS8KWmJBuKvesRH5DSPI7vTqZbjTBas4C942HvVbdNp1qH2Qd6MwmbM79pXrmrFjT%2B7xbh9QPVNy4qs%2Fg7UiWmFBxVY6Uy4ESxidJBaqE65zy2ZrwW1OwJX6zEH3587rsQvIffesmxgkyPWcZHlz%2BM6yjc72tRDZ6gTnTwjg6Mi5a8e30tFKfJHD8eM%2F1Vq%2BErYSwT5qxC%2B6wsZX1kn0F04u8IS%2FtM%2FrE1oK11KKM4D36KUi8%2BuBEhzgKnMKyT3MEGOqUBoI2AOxrymeeiukrWBVk%2BXtVmFJOPG7RqVdJsTywYbItOiwMLbM2RAMQNmp5d2jaKwBRyXJplbhXPE%2F0eZ2d2hkj5fBNt3tdAzhEJtKFISEgn2JjNxmymuDbeFLGB3CpOz%2F1TEzI9TwJYk1QHajN8j8PPDoX9qv3nViXft%2FgngdgknqLj%2FnzKb3fH7N3%2F89Vo1ruioT5%2BxhC0rMAnVCuu8RVCBFij&X-Amz-Signature=ae333be43d00e5076f7336c0e4fa26cba8082e60a6dfe27896569c83a35226e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
