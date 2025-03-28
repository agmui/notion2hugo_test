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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LO54B4K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnYxOC1wWLp7tFSoBIN9VQ8mYNlcXyLEfZs4YBOyDGgAIgNraVtXaObMHcCqi0hWlMPV6lt8nyCSNpww%2BYRM1J4DAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIomjPYY9dQuwBI1jCrcA0KZ7s5nWr5cSe3nWhy%2F7QHCBB9wMEtjg3hRuCM%2FGDDfzVJwj1bW7hnyhwRFL%2FW2SNMLDKH4x2Z7aNXp4RnTa7N4r3%2BQfscfrhkiFzfEaElrC5Xcr1QntacFSpseYXR0poU9znaVk7qk1zmdcSRSrybUxGF9F5kgXlKNeXbrzF97AJwE094OQZHSGYH0TofJwNvJDWCX3HflfjqqLXO87u6wdt%2BwJSIaQscGRTTlPLMw7XqKESO1gJNT52mAjRJKpkdKBik67171kxUaEvzKcWwHrOPfyHcHVkq8cpC6nVehY8pilzFY7S7ZJDWm%2FadDVf%2BLlVemTzw%2BKH77PFx5EJS1vtXx10zDBtTSCLw680PwD1o2JRsfYVGuBVEveaTjNORCXNTXUxfXXNGdIZjeLUIbWcJMdM7TVIC6%2BBkdXTtrSEgjhMQLHy3Y1ABwTz4Pd5%2FQ9pN9%2BkfLLlPZmiViMs%2Fd1VdmWxET0lS8JFFAGca2qkVJG4XpUsab93N13gzQn55m6lbF3HqywbnvYjS3JenPXlDFfUZ4sQ21j%2BdQ93JmwsS2IuEc49hGfF1qdMd4qjFACZ%2BGZAe0pTZC%2B8PyAV3dKvpxoKGpEeweGt%2BkloaX28f3z0bO%2BVNu7yaBMOnbmb8GOqUBA0sfVpWn6lsriC6Dby8IHUYrZafi9kxd4vnMKzXI%2BdK0yZQsua81fKAQx0Bqloy4567MfIzodLPk%2BzBSl9IrXdHciFwgvPMgIDz2dYJTJur2%2FkO9JuOtVbOSsc7QZPaCIinaT8V0lIYrPUA4J1kQZiMBJwRoiFBjliX2qNR5NwWAuZ6oL3sP7u61x%2FBH3LUrmc%2FJvXUrYQaMMAeNrSWquzwrZeq%2B&X-Amz-Signature=760cde0590669325f8df24cd4bc413d3bec240c0b5637c8fc7debd22eb0495ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LO54B4K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnYxOC1wWLp7tFSoBIN9VQ8mYNlcXyLEfZs4YBOyDGgAIgNraVtXaObMHcCqi0hWlMPV6lt8nyCSNpww%2BYRM1J4DAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIomjPYY9dQuwBI1jCrcA0KZ7s5nWr5cSe3nWhy%2F7QHCBB9wMEtjg3hRuCM%2FGDDfzVJwj1bW7hnyhwRFL%2FW2SNMLDKH4x2Z7aNXp4RnTa7N4r3%2BQfscfrhkiFzfEaElrC5Xcr1QntacFSpseYXR0poU9znaVk7qk1zmdcSRSrybUxGF9F5kgXlKNeXbrzF97AJwE094OQZHSGYH0TofJwNvJDWCX3HflfjqqLXO87u6wdt%2BwJSIaQscGRTTlPLMw7XqKESO1gJNT52mAjRJKpkdKBik67171kxUaEvzKcWwHrOPfyHcHVkq8cpC6nVehY8pilzFY7S7ZJDWm%2FadDVf%2BLlVemTzw%2BKH77PFx5EJS1vtXx10zDBtTSCLw680PwD1o2JRsfYVGuBVEveaTjNORCXNTXUxfXXNGdIZjeLUIbWcJMdM7TVIC6%2BBkdXTtrSEgjhMQLHy3Y1ABwTz4Pd5%2FQ9pN9%2BkfLLlPZmiViMs%2Fd1VdmWxET0lS8JFFAGca2qkVJG4XpUsab93N13gzQn55m6lbF3HqywbnvYjS3JenPXlDFfUZ4sQ21j%2BdQ93JmwsS2IuEc49hGfF1qdMd4qjFACZ%2BGZAe0pTZC%2B8PyAV3dKvpxoKGpEeweGt%2BkloaX28f3z0bO%2BVNu7yaBMOnbmb8GOqUBA0sfVpWn6lsriC6Dby8IHUYrZafi9kxd4vnMKzXI%2BdK0yZQsua81fKAQx0Bqloy4567MfIzodLPk%2BzBSl9IrXdHciFwgvPMgIDz2dYJTJur2%2FkO9JuOtVbOSsc7QZPaCIinaT8V0lIYrPUA4J1kQZiMBJwRoiFBjliX2qNR5NwWAuZ6oL3sP7u61x%2FBH3LUrmc%2FJvXUrYQaMMAeNrSWquzwrZeq%2B&X-Amz-Signature=f99c62770ba05653aacc5737f67ec63e87dcb7d3eb33a57baf2f9c42e643c13a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
