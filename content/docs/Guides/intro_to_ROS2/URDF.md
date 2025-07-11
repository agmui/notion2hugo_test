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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOJK6CQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGd1MPwuiKbsTQFaK65F4oPhfwSmAX9BVVtfhCJAwPHFAiEAichz%2BU2BMetmZ7UjlZ1DYtuWAaWln1EGLEyqRvq4EMYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfhDe7jFxC7rjdZNyrcA8iC%2FViCvV1pFm0Qbfrzy8gKADKT%2BINQzjifKjZaIZ%2FydIqHKGG9T3KL%2FmfEA9IykirLl99vmKIz075%2BgivJm4DTXSdCmv8W8tXMhUGqk37XY5TFV1U4AHo0zBITB22D4r%2FgbmDPEHRz7YyGAktKLC%2BU31oZCLL8XSYkbqnv3P85Wik1iK7OQcOWSsJILQhCViP3iSJF%2BKViKRLA%2FD5atwKBwv02B5WDgNlF%2Bq0ovzfDDHuwOd0jtyou2dJgwSRGXeDzxkWe4XK%2FOBWT8IfkjoQ%2Bj%2B0Mw%2FsS0qLAAl1HB2ZKZbCkCq8czjEn6vN8%2F2Oa708auiCjJe1pZ808lZs3woGpdrImpJLf7gMlSsr2S4W6AVO5LHl2M5nLbalfnMtqaKMxQ5aBZN8KxzzyPyoXFuGLeGqVx37kD0GkLIQ7utuIB0HJqVerrIvktL1qfJpyvtvowLcxCWY1fQum3zsZC4B7YDwjjEG19sUEXcz%2BcO49I%2B1gCse5PDDtGCk32OwHqaA%2F4Bwj4f9260wLa85LwsMEra8%2Bh6CyjXk%2FLxBmG3m4nPZjF8jLIW3DsVW1U79%2BZWS7utETEd6qPwwK7YTX%2FZZD%2BHbCJNommNfppAz0GzM2lmNWagCD2h2K4NvXMOfVxcMGOqUBkWMZgPPgRHQ6YYV8Jpn2XntkMZJ8mZTXLBCLbQJLa%2BjjoDT4yEnpF8u3ATYz670SpJBvq%2FtgFvr88M1Qa1Iccu4fhMObKhfgDTOillJw81foZ86XkQiCkRbymqB9he5MUQEb2W2OInqEKEPhZZ0r2YFdMaUc3rdNfdJBJFoszT89SRCfUb2lNiW1cQ2P4gWva5Aj%2BSdVs316tthKieayMZ82ddHL&X-Amz-Signature=cc366b71f853efac64c0e0acf8917d98fd14dcbdc2e57b570e33fd22fbc55116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOJK6CQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGd1MPwuiKbsTQFaK65F4oPhfwSmAX9BVVtfhCJAwPHFAiEAichz%2BU2BMetmZ7UjlZ1DYtuWAaWln1EGLEyqRvq4EMYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfhDe7jFxC7rjdZNyrcA8iC%2FViCvV1pFm0Qbfrzy8gKADKT%2BINQzjifKjZaIZ%2FydIqHKGG9T3KL%2FmfEA9IykirLl99vmKIz075%2BgivJm4DTXSdCmv8W8tXMhUGqk37XY5TFV1U4AHo0zBITB22D4r%2FgbmDPEHRz7YyGAktKLC%2BU31oZCLL8XSYkbqnv3P85Wik1iK7OQcOWSsJILQhCViP3iSJF%2BKViKRLA%2FD5atwKBwv02B5WDgNlF%2Bq0ovzfDDHuwOd0jtyou2dJgwSRGXeDzxkWe4XK%2FOBWT8IfkjoQ%2Bj%2B0Mw%2FsS0qLAAl1HB2ZKZbCkCq8czjEn6vN8%2F2Oa708auiCjJe1pZ808lZs3woGpdrImpJLf7gMlSsr2S4W6AVO5LHl2M5nLbalfnMtqaKMxQ5aBZN8KxzzyPyoXFuGLeGqVx37kD0GkLIQ7utuIB0HJqVerrIvktL1qfJpyvtvowLcxCWY1fQum3zsZC4B7YDwjjEG19sUEXcz%2BcO49I%2B1gCse5PDDtGCk32OwHqaA%2F4Bwj4f9260wLa85LwsMEra8%2Bh6CyjXk%2FLxBmG3m4nPZjF8jLIW3DsVW1U79%2BZWS7utETEd6qPwwK7YTX%2FZZD%2BHbCJNommNfppAz0GzM2lmNWagCD2h2K4NvXMOfVxcMGOqUBkWMZgPPgRHQ6YYV8Jpn2XntkMZJ8mZTXLBCLbQJLa%2BjjoDT4yEnpF8u3ATYz670SpJBvq%2FtgFvr88M1Qa1Iccu4fhMObKhfgDTOillJw81foZ86XkQiCkRbymqB9he5MUQEb2W2OInqEKEPhZZ0r2YFdMaUc3rdNfdJBJFoszT89SRCfUb2lNiW1cQ2P4gWva5Aj%2BSdVs316tthKieayMZ82ddHL&X-Amz-Signature=56af1fd9a576fdd7a798d00e68f860bdbc740408caec794c8a81d0520bdbdc1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
