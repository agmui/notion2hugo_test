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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXNK736%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhKf30iu1ap%2BoXZ8UQFAhYgfY9iWPsPOwy8WE0RBJAygIhAKA9Wk0%2BW1VTg9q1Z1rxj62tO9SN2gO%2BR%2FIQYsNGRyPfKv8DCEAQABoMNjM3NDIzMTgzODA1IgzQQxV8Muvx%2F37o5ngq3ANKP6xiIHmHseg%2FgP1EtnRZBgS8%2Ba%2Ff7m2%2BsQJRXbQXsCMlPrPdlGzxjVqrLBd7X%2FYe7U3FSBjVW5DUnADeOnGy%2Fwrdsk3IvN7hqlRd%2FaFUaAhFK1vONbE98KxXsoUziJB8UToAMrz8BhZkOHB5uDyKWi3jTbXnYN%2Fqrq23NvApAzpDxET3%2FQqB6CyPcqb9qB25VF%2B9%2BGc%2FzMhoHoGQ%2Bmc5iQg%2BAKGXCWdxjljt07qgDNTUVW4aF7WZ1WL0qJVfAXjgoORscWL6auSoTSSg4PDJzAGnpRgUISHmJx98PI1%2BeGgVkL39q3TpbXQSoQ4X%2Bdb49wIAgABiYBKdum8YGPI%2BDGfkr1uzbRfb%2F02V8MFQBnJ4RJVVYtFg6kAvMKC%2BMAbdg3iLP7CvML3CWK3HJ9plzH%2FV4Mjpmz1DgKfPK6PfewKgqhwxy3gCITIC7H80AThyubzGGXdCbSaQQhEhwqYWBQOlvp2oVt3qz3hGaBzJqKW3miMwgCRZpZB4ptvQW3jqkvWrHtgh6G6CLG08vq7T1S3EELGzx2JsS%2BowdHkUR%2FvVe7odgZCAtWFoLirnbG1U6053%2Bs0TcC%2FHMTNLYncKC5umufZFnnOPpDTtf58BXsbpm4UF6L9IkYvFoTC4k9%2B%2BBjqkAZlvbgiMklko4MCY8LpfvQsiJnC8T4gyFh%2FGkXA81EmuSVeBL7hbFHsbdVrRaOOIAecyMyEbZmRnlhlKWjSjyFljRYNMph4oBM25SSefabrx8MyghiLBocFjq23r%2BkJQkKYYe7lF9ow4i%2Fe%2BzMAKNknwHmQ2NcP%2BxNqmecvfHh3mi9hzUs8Etbf1a6Se%2BjhGzurj4GgmPyk779rnz9fyV52v%2BEtb&X-Amz-Signature=d23ea8cf2318a326290b9ae84a7d01a66cc1ef408328cb355d233f2328f7d394&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXNK736%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhKf30iu1ap%2BoXZ8UQFAhYgfY9iWPsPOwy8WE0RBJAygIhAKA9Wk0%2BW1VTg9q1Z1rxj62tO9SN2gO%2BR%2FIQYsNGRyPfKv8DCEAQABoMNjM3NDIzMTgzODA1IgzQQxV8Muvx%2F37o5ngq3ANKP6xiIHmHseg%2FgP1EtnRZBgS8%2Ba%2Ff7m2%2BsQJRXbQXsCMlPrPdlGzxjVqrLBd7X%2FYe7U3FSBjVW5DUnADeOnGy%2Fwrdsk3IvN7hqlRd%2FaFUaAhFK1vONbE98KxXsoUziJB8UToAMrz8BhZkOHB5uDyKWi3jTbXnYN%2Fqrq23NvApAzpDxET3%2FQqB6CyPcqb9qB25VF%2B9%2BGc%2FzMhoHoGQ%2Bmc5iQg%2BAKGXCWdxjljt07qgDNTUVW4aF7WZ1WL0qJVfAXjgoORscWL6auSoTSSg4PDJzAGnpRgUISHmJx98PI1%2BeGgVkL39q3TpbXQSoQ4X%2Bdb49wIAgABiYBKdum8YGPI%2BDGfkr1uzbRfb%2F02V8MFQBnJ4RJVVYtFg6kAvMKC%2BMAbdg3iLP7CvML3CWK3HJ9plzH%2FV4Mjpmz1DgKfPK6PfewKgqhwxy3gCITIC7H80AThyubzGGXdCbSaQQhEhwqYWBQOlvp2oVt3qz3hGaBzJqKW3miMwgCRZpZB4ptvQW3jqkvWrHtgh6G6CLG08vq7T1S3EELGzx2JsS%2BowdHkUR%2FvVe7odgZCAtWFoLirnbG1U6053%2Bs0TcC%2FHMTNLYncKC5umufZFnnOPpDTtf58BXsbpm4UF6L9IkYvFoTC4k9%2B%2BBjqkAZlvbgiMklko4MCY8LpfvQsiJnC8T4gyFh%2FGkXA81EmuSVeBL7hbFHsbdVrRaOOIAecyMyEbZmRnlhlKWjSjyFljRYNMph4oBM25SSefabrx8MyghiLBocFjq23r%2BkJQkKYYe7lF9ow4i%2Fe%2BzMAKNknwHmQ2NcP%2BxNqmecvfHh3mi9hzUs8Etbf1a6Se%2BjhGzurj4GgmPyk779rnz9fyV52v%2BEtb&X-Amz-Signature=e274dd0561cc072c709bc0b632b0ab68166eac1b7d4661f9912416c5de610263&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
