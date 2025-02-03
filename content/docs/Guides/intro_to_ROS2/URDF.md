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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5GWQW4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXLZCgxytk8tE5DTrTywkn4rfbyfAG3mcgux5LrWVoWAiBSZ4QILOBq%2BQ6sbFb%2BStwLq37%2FmwRuKXwHD5qGk%2FPk2SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RNqQDyFajRHNYotKtwDznKUdqqE5BiwvIC%2FX8mj4Z4utsfFvU4rVk4jck0zQEgUl1SaXR1fOcxCa1MBwQ22DVecfkYt84rhu7YfM7EawlbhWRFgNxrAVy9oxpAnfrgAqjWXqpxOdzrVMqi5uTVmw3pQrNyVV5iiut1pKomjeXxUy2vbO4wq72zvG4V2649Y%2BvUTs79dF7sWI%2BGMCmY5OEV9ublx%2FqnWcHsPdpNL1pvkqbU4iFxI6U%2FEGvBrY5R4yEhAyfD2JALIs210mfofOCktIZa2wluciZHypy4ixIs9%2FN7y3vncomHlOkrNKSJ6A2s5m5mL6n10wntV7UkCwjOIqOVPMe5nWy%2BJh1IGaSbu%2BoNfQ1AANyfxKNz%2BhgFupB2yx%2FLdn12%2F4n2hvwuj%2FrsJCt7q%2BOsc6t0hg2ui6tROFMo3oVYDmaHME%2FRIgpSiq2pgkw84tbrEOqG%2BBZAzw2WAA1EAH15uMO2Hrqho9JMyc2oqkLCaEVhs9UPo0aITSNvZN8pIYxdOKzDJbXL%2Fd7ntt8Gl%2B3Bn1StLvdZeo4WtS9ajhKfXjuhCfPbSorvAa%2F7n6ZoqNflLII990GHOVDx85lAKHI0jfMle6zLylV5sNNJCbHRMwzn7K2QFKphlx1TXMOeN9HNJ%2FGowwcCAvQY6pgFdOxv6gJ21M8kFJUQEbSJDzkf0mucJUqMThMCbHFlegS5QXvAdLredRiG0Z%2FE5a9wnV0g9Bzp%2Ffb6hsrKB1onZbkwVUwmEIG2ASE2xPAFGBvlgN%2Bzyao%2BNzm%2B9PEsX9KmWuquo0gOXYDX40%2BhX4efSmSwu3zPX%2FjUjL9GuhKt5jbZlUM9pSeX%2B4%2BsGqkf3VL2Gm1aQPBAh7oNNo%2F6YQaLuO3rmXZaq&X-Amz-Signature=254b2522f801a13bd8ecfc65aaecdbd4cc193cf7c672126633e33d463145ad4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5GWQW4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXLZCgxytk8tE5DTrTywkn4rfbyfAG3mcgux5LrWVoWAiBSZ4QILOBq%2BQ6sbFb%2BStwLq37%2FmwRuKXwHD5qGk%2FPk2SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RNqQDyFajRHNYotKtwDznKUdqqE5BiwvIC%2FX8mj4Z4utsfFvU4rVk4jck0zQEgUl1SaXR1fOcxCa1MBwQ22DVecfkYt84rhu7YfM7EawlbhWRFgNxrAVy9oxpAnfrgAqjWXqpxOdzrVMqi5uTVmw3pQrNyVV5iiut1pKomjeXxUy2vbO4wq72zvG4V2649Y%2BvUTs79dF7sWI%2BGMCmY5OEV9ublx%2FqnWcHsPdpNL1pvkqbU4iFxI6U%2FEGvBrY5R4yEhAyfD2JALIs210mfofOCktIZa2wluciZHypy4ixIs9%2FN7y3vncomHlOkrNKSJ6A2s5m5mL6n10wntV7UkCwjOIqOVPMe5nWy%2BJh1IGaSbu%2BoNfQ1AANyfxKNz%2BhgFupB2yx%2FLdn12%2F4n2hvwuj%2FrsJCt7q%2BOsc6t0hg2ui6tROFMo3oVYDmaHME%2FRIgpSiq2pgkw84tbrEOqG%2BBZAzw2WAA1EAH15uMO2Hrqho9JMyc2oqkLCaEVhs9UPo0aITSNvZN8pIYxdOKzDJbXL%2Fd7ntt8Gl%2B3Bn1StLvdZeo4WtS9ajhKfXjuhCfPbSorvAa%2F7n6ZoqNflLII990GHOVDx85lAKHI0jfMle6zLylV5sNNJCbHRMwzn7K2QFKphlx1TXMOeN9HNJ%2FGowwcCAvQY6pgFdOxv6gJ21M8kFJUQEbSJDzkf0mucJUqMThMCbHFlegS5QXvAdLredRiG0Z%2FE5a9wnV0g9Bzp%2Ffb6hsrKB1onZbkwVUwmEIG2ASE2xPAFGBvlgN%2Bzyao%2BNzm%2B9PEsX9KmWuquo0gOXYDX40%2BhX4efSmSwu3zPX%2FjUjL9GuhKt5jbZlUM9pSeX%2B4%2BsGqkf3VL2Gm1aQPBAh7oNNo%2F6YQaLuO3rmXZaq&X-Amz-Signature=66199e368053a581af7a1b92e7b0df61eb5c8885e27c90d3d6588581d4fd4316&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
