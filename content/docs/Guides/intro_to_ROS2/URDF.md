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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BU3DDN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCEoy818EkPLg6nwYR3P5YT%2FkyRxgcP0jxHPZ5LUcG95gIhANwH08ilxP3UgSNWocyb9Qoo4lJxeq80VjR2IxCtFJ8WKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG7YnbLWU%2BHKzOpFEq3AOB1JmFpZA79RY0vSL9IRzIWYki2GJRUdzkpPQ2NmvgxZwtf22wyybHsOyY%2BWqdkJk%2F5a3K3PO%2FpsVWhl7hFh0xg2gff%2Fy1w9NXBqVt3l9gexGinRkmpn3o6pM7MgbYS2ubYhUpN0JtCi53fssrXxWJhaiNwSXOV1V6Z%2Foe3uaZn%2BtAmKmGToLGSyV4IzfzBl9LuFQ0gXJ3wCYS15mnGarHm9q%2FuF1XRwx9r9TRKdsEJU6iEFDKsOb%2BWVM3PbTAORxziS%2FEmiPGDimsS9YUFv5%2F2lDhTsIZVjh7wFXX74lyu8qVKm5SX%2F09%2Bomsmz2X1drh1ioHXJNllpgvv4oYpQ2%2FTjQdnUWOYVX4IKy1mD6kx9KnNA3x0PB5Pk1b%2B1cA%2FGxTPI3Qhy%2Fc6VZTqvstoi2KabtZnMMp6ewxuN9clcY1rAkqhls8ZpBTDj9GnLWfl8mwWjxVYkd5dUdGc%2FUYRAtY%2BhxSwKCqelBfA3it8BlRU1tno%2FlYpFYmytenlCnBGIGZEUUodWKoxB7THrVyyAnzZkg0lr9zntNi0gl4Ldi4ROq5hU5BIiT4VDsqp5d5mwvwtR46kzpPBvenc12ROirsbkaRlEGywv7Gw5RkqKwtTfy92N6kiTWHQHD6iTCUh5vABjqkARo%2BHFVmxozryzK186wYymu%2FBgZ2adBuA93VAzDK0hC5RQyoPTtnYS452JYlqNnIDbADCnpIRlEKW4Y6yp2BbGufNGD2fmPDeDKPgZfQ8DYKlmSDxAN3bbpkuamScY4ooZNH8SiAZsORG1JGvW0Sbt9B8knXv5jOfvw0AcwFLQH0DNm%2FZ6yGNI4adDrR%2B2gncFicPgGglSBLL1LQQus%2B75FEp4Ap&X-Amz-Signature=e85b62954a6f60a4c6fc5d28049b3fc719613932097858e2a55d94110a3c6c65&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BU3DDN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCEoy818EkPLg6nwYR3P5YT%2FkyRxgcP0jxHPZ5LUcG95gIhANwH08ilxP3UgSNWocyb9Qoo4lJxeq80VjR2IxCtFJ8WKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG7YnbLWU%2BHKzOpFEq3AOB1JmFpZA79RY0vSL9IRzIWYki2GJRUdzkpPQ2NmvgxZwtf22wyybHsOyY%2BWqdkJk%2F5a3K3PO%2FpsVWhl7hFh0xg2gff%2Fy1w9NXBqVt3l9gexGinRkmpn3o6pM7MgbYS2ubYhUpN0JtCi53fssrXxWJhaiNwSXOV1V6Z%2Foe3uaZn%2BtAmKmGToLGSyV4IzfzBl9LuFQ0gXJ3wCYS15mnGarHm9q%2FuF1XRwx9r9TRKdsEJU6iEFDKsOb%2BWVM3PbTAORxziS%2FEmiPGDimsS9YUFv5%2F2lDhTsIZVjh7wFXX74lyu8qVKm5SX%2F09%2Bomsmz2X1drh1ioHXJNllpgvv4oYpQ2%2FTjQdnUWOYVX4IKy1mD6kx9KnNA3x0PB5Pk1b%2B1cA%2FGxTPI3Qhy%2Fc6VZTqvstoi2KabtZnMMp6ewxuN9clcY1rAkqhls8ZpBTDj9GnLWfl8mwWjxVYkd5dUdGc%2FUYRAtY%2BhxSwKCqelBfA3it8BlRU1tno%2FlYpFYmytenlCnBGIGZEUUodWKoxB7THrVyyAnzZkg0lr9zntNi0gl4Ldi4ROq5hU5BIiT4VDsqp5d5mwvwtR46kzpPBvenc12ROirsbkaRlEGywv7Gw5RkqKwtTfy92N6kiTWHQHD6iTCUh5vABjqkARo%2BHFVmxozryzK186wYymu%2FBgZ2adBuA93VAzDK0hC5RQyoPTtnYS452JYlqNnIDbADCnpIRlEKW4Y6yp2BbGufNGD2fmPDeDKPgZfQ8DYKlmSDxAN3bbpkuamScY4ooZNH8SiAZsORG1JGvW0Sbt9B8knXv5jOfvw0AcwFLQH0DNm%2FZ6yGNI4adDrR%2B2gncFicPgGglSBLL1LQQus%2B75FEp4Ap&X-Amz-Signature=c3ef0a2896f474acc9b0a3fbd3efac8e80b4942cc1e35913e19f5823eb110ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
