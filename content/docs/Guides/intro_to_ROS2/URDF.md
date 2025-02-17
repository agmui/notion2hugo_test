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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSPL6R2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDw5TRKtk85W61jcsw5upakos8xeZuIQ83lSSJph1q7WgIhALI%2B0%2Bty3DapL%2BaxndQNuMZIS0wLxFKvgOOc0%2BX38mAfKv8DCHgQABoMNjM3NDIzMTgzODA1IgyAv8ttjo0FvEG9F40q3AMhuThRbTtgW7%2BMoy26BlRvWXGoMUC6vdRNPkhM%2FUAHrD315EDJ8f2oCLHlXknKMTkhzSARab1shcf6a6irMb6GHmydecN0yuRREY%2BLDpkGl0wH4fXwj5%2FrcPVAVdBJNeE%2Fns4mxbZK6yUzCJH4DBiKdvsR6EIY1NZ5BKvimUl4B5W6YM27Trz%2FzXbLb5uhx98ixVYQ0ylHfbpOH37%2Bc0H1cO4UQ7qV%2FaRDkxmDkLOCU%2FO2Z4m6S1cmImfN%2B4fhuREyzZT3vUfDMtI5LObeXvFkuGdlwAQab3l%2FxNed5ka4R%2BQ1C%2BIvXUZLeX6MISh9BDZPBGROhEceZkTDgiY2JCXRsr3BQ2N3Nl1xhhWu1mqMcHMiUMmWoOSY4RU%2F0bHcpQQAzcyrqrF7brF9nHKlFPQdQw1bRSi%2F%2BJSIWLEDt4TNAmxtLXHTqz%2BgEc2iRwxJcIXN99hcuxpIijI5bczs05ngTHS7D%2B%2FsXQhidBc1e3zXMBebBEkBn8bvN%2Bx7lhn2fr1eP7OIdQbfg1U%2FCk1OwT0bOnf2UAxdLUi9uKxvZpiwNl9pEANnAZJXrIvlnia0PjsDiuxIPw%2FgnmqSNlEG%2Far3E3elby9mgpZY%2Bh84pd1Evt8e3s3VJem4p9rxajD3lc29BjqkAYi5BLi1xcMwhHZyMSSeVdo3rJE%2BLgbAf6Dj0VHtNz1kQQvX1Ss2wCjVgl7NqGyWvOY99OS6hK0uYCXQT31pmcJaqxGN33RAdzLv7h0nE8Rs06KeiA3MHJTDo3gh4%2F6q3BS2GzveCDkLOunenXibPVNlCW89%2BysEU1zHlNF62oYckKtIN%2FQEhVYbn12hEAl1MnlK1es1eA8eYAhTSGG8nAkfbyxM&X-Amz-Signature=589e1284a6067fa5cfbf14ebf8cc37c31513d19f7e50d2cf4be25e4a9e3958b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSPL6R2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDw5TRKtk85W61jcsw5upakos8xeZuIQ83lSSJph1q7WgIhALI%2B0%2Bty3DapL%2BaxndQNuMZIS0wLxFKvgOOc0%2BX38mAfKv8DCHgQABoMNjM3NDIzMTgzODA1IgyAv8ttjo0FvEG9F40q3AMhuThRbTtgW7%2BMoy26BlRvWXGoMUC6vdRNPkhM%2FUAHrD315EDJ8f2oCLHlXknKMTkhzSARab1shcf6a6irMb6GHmydecN0yuRREY%2BLDpkGl0wH4fXwj5%2FrcPVAVdBJNeE%2Fns4mxbZK6yUzCJH4DBiKdvsR6EIY1NZ5BKvimUl4B5W6YM27Trz%2FzXbLb5uhx98ixVYQ0ylHfbpOH37%2Bc0H1cO4UQ7qV%2FaRDkxmDkLOCU%2FO2Z4m6S1cmImfN%2B4fhuREyzZT3vUfDMtI5LObeXvFkuGdlwAQab3l%2FxNed5ka4R%2BQ1C%2BIvXUZLeX6MISh9BDZPBGROhEceZkTDgiY2JCXRsr3BQ2N3Nl1xhhWu1mqMcHMiUMmWoOSY4RU%2F0bHcpQQAzcyrqrF7brF9nHKlFPQdQw1bRSi%2F%2BJSIWLEDt4TNAmxtLXHTqz%2BgEc2iRwxJcIXN99hcuxpIijI5bczs05ngTHS7D%2B%2FsXQhidBc1e3zXMBebBEkBn8bvN%2Bx7lhn2fr1eP7OIdQbfg1U%2FCk1OwT0bOnf2UAxdLUi9uKxvZpiwNl9pEANnAZJXrIvlnia0PjsDiuxIPw%2FgnmqSNlEG%2Far3E3elby9mgpZY%2Bh84pd1Evt8e3s3VJem4p9rxajD3lc29BjqkAYi5BLi1xcMwhHZyMSSeVdo3rJE%2BLgbAf6Dj0VHtNz1kQQvX1Ss2wCjVgl7NqGyWvOY99OS6hK0uYCXQT31pmcJaqxGN33RAdzLv7h0nE8Rs06KeiA3MHJTDo3gh4%2F6q3BS2GzveCDkLOunenXibPVNlCW89%2BysEU1zHlNF62oYckKtIN%2FQEhVYbn12hEAl1MnlK1es1eA8eYAhTSGG8nAkfbyxM&X-Amz-Signature=d68514df3151620024d7cc41b8605b01747ff0c97aac0f24cbe8da979becfcac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
