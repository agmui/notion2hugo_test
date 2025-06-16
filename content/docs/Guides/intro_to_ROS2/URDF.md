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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXX7DXE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFpj9Obs7Cq72heUP8nkeb4KXKXSsTGbBhaCz59Pi%2BihAiEA3T6SiHa10Bga%2FVYRzGemTQKqIQ1tH5sOifFn3J9j6nwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFETRuXFFMDe%2Bo5ujSrcAyFTbKmlvjT%2BFLgyDTk5LB%2BiWlcpBqClwxGpYjJEKJJ1Q2hvBUEtKhryIiylLOeZawTjdThppkb3Il3LLOKUe3vxFO4M24BfTkA7HhIDgGXxwpn82CuOYOWlxrNOOOIBeiCjd59mkvvy10dm3RAJaD1vHcLrQf5%2FMD8FVlH7PKX0kBPCAtYw0dJbzw8IlvKBzTKsfwmLcbHFpFb2Cn8rKLHtIBGBze2IaF6BmlFbN8Lf3ADopECJAx6A%2B3nY50WlR7KHcQQ18N4RBvUX6Oju6N3KMtMqTmsXQfyVtfMctz81irbFrzReWFfdYbgFTKBfatZT3%2FGQLVNNOxGevoPCqBFaofKxZtW%2BEFuocZ5x8fC5jQ3OSHefPgPWYiUP3ry%2B6DimjQOkRm%2BZSd33y%2BFa0F25CcgFk8BbyfnwEdE92mxNN9iT2bKVy54pPn%2B3a%2FkfMjj16TpqmkQ5dd%2BXDN7na5Y77PiX2UqdLYm%2BckKwuBUuL%2BZpQL55JDIK0H0%2B3wFhNybxuTE%2FiH3Y0isOe%2B7UbWq6SZ37a2KEh%2BbSJB55Vq%2BaBlcWiHI2lk21El%2FW9HukbublgqsT5dk89iW3gaFaSQgH5Mlg98kijc9MMPbETiyzovYMHf7iAXuTScGdMLPvv8IGOqUBxvoWChrxvQvze%2BGMVXhOzusf%2Ba8b11tDjfIlYYOejPYVMPlDhuUzImTibrUmtNafQUL2XkoP%2BUGz7Jzvt9rnMk8bTBD8ulWiQApUgda%2BZNH0bV7nmm3QIm%2BuEr8dOpKVI%2BqBdpci77Euz%2B0U0w40WHTh1TBQNSCt%2F01MoyrwmSLxu7ySrm2xpJAyM1GVKk7p16k9hK6tk75LYb3%2FP5Kq74520jZZ&X-Amz-Signature=9d1c500669c7eadb329fe4f14ce1c2514cbc25e6eee0a2a9323e97855b868932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXX7DXE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFpj9Obs7Cq72heUP8nkeb4KXKXSsTGbBhaCz59Pi%2BihAiEA3T6SiHa10Bga%2FVYRzGemTQKqIQ1tH5sOifFn3J9j6nwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFETRuXFFMDe%2Bo5ujSrcAyFTbKmlvjT%2BFLgyDTk5LB%2BiWlcpBqClwxGpYjJEKJJ1Q2hvBUEtKhryIiylLOeZawTjdThppkb3Il3LLOKUe3vxFO4M24BfTkA7HhIDgGXxwpn82CuOYOWlxrNOOOIBeiCjd59mkvvy10dm3RAJaD1vHcLrQf5%2FMD8FVlH7PKX0kBPCAtYw0dJbzw8IlvKBzTKsfwmLcbHFpFb2Cn8rKLHtIBGBze2IaF6BmlFbN8Lf3ADopECJAx6A%2B3nY50WlR7KHcQQ18N4RBvUX6Oju6N3KMtMqTmsXQfyVtfMctz81irbFrzReWFfdYbgFTKBfatZT3%2FGQLVNNOxGevoPCqBFaofKxZtW%2BEFuocZ5x8fC5jQ3OSHefPgPWYiUP3ry%2B6DimjQOkRm%2BZSd33y%2BFa0F25CcgFk8BbyfnwEdE92mxNN9iT2bKVy54pPn%2B3a%2FkfMjj16TpqmkQ5dd%2BXDN7na5Y77PiX2UqdLYm%2BckKwuBUuL%2BZpQL55JDIK0H0%2B3wFhNybxuTE%2FiH3Y0isOe%2B7UbWq6SZ37a2KEh%2BbSJB55Vq%2BaBlcWiHI2lk21El%2FW9HukbublgqsT5dk89iW3gaFaSQgH5Mlg98kijc9MMPbETiyzovYMHf7iAXuTScGdMLPvv8IGOqUBxvoWChrxvQvze%2BGMVXhOzusf%2Ba8b11tDjfIlYYOejPYVMPlDhuUzImTibrUmtNafQUL2XkoP%2BUGz7Jzvt9rnMk8bTBD8ulWiQApUgda%2BZNH0bV7nmm3QIm%2BuEr8dOpKVI%2BqBdpci77Euz%2B0U0w40WHTh1TBQNSCt%2F01MoyrwmSLxu7ySrm2xpJAyM1GVKk7p16k9hK6tk75LYb3%2FP5Kq74520jZZ&X-Amz-Signature=145b762bb8ee798869df82bc6096d33b110affe298cbea4cb147394aaddc6b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
