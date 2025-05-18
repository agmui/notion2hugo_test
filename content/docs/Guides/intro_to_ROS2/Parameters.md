---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQMWEHC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9chjYC2bq3In7Sy6bFQCO8g32GoUgajmqpBTPBIrBuAiEAvUkrCaTB1Zbuk9PZh4xH1xf1f%2B81HFPD0lNl8JpZiLYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDChNRhpgEK2vJidI9SrcA1o7S7qGdjkj7Mys6x2ZCt57NKigqa4L%2Frux6vu2m5xQt6kPFcTfEjSPTowiC00LsZezJzWvr7BM03RtKG7yvwfsYTQaXm4wtvfmp3oapXssodP72DdLBUGJcPDl5De1vyfLowZNJ%2BYz1OkSWWp7rTksOabtUR0Zkyi8477lNLkuzCivJ7Zx4hGiCYGlF5jopeFw%2FFc%2BzPOIT6SizR6BBnDVX7nkjNovLq4mhwsNO8cnTwTBorGf61SApeXo7gDzf1aUXHKP5AkcYnsNf3L8bEZ7lZ5jGgSLNB7IElYijpg7nZlOvpN3u4ZnrZt7etr8SNtPT02rbQ3vKLXhsqrUzHiRgUJTjdL9wK2AD8MdR6oHp9HxiB4fN%2FSzaOP5rLEgGbA3i8PvM1VsADnMxiEUhWPnkG61peImuKPMISr%2FFHh9b68Hyq6JwZfaXr08FLYHcsDWe604sx3RmtBMQvd7Ci5G3Rme6%2F9MJ5NXEiBQIikCw5n%2FftP8eWBL2e1cgQusNZ7yKpxLShR%2FKigrfsMOcqD94PvJbjuJAyM3aGyj%2FtORTMsymDPVmOEeoO9vSjFQF%2FgeopXYMQUkX7sgAfQ5IihirLXF2ITYbTVQzWQJLA50qlDA9Yz8hpncDVUcMOvBqMEGOqUBWM0RKp%2Bjh79xg2uHn6tJOlAYjblaND%2B6OGHk595tfxf6btd9JmNlehKMLr5h7ovx2Cl3NubU%2Bl0Y2F0tLjbhIeaYM6smgfNB6heB9UWKJyDLdapDVUTt%2BRiDDD0qBYDO6praf5epBvqwKMqT%2BHBiS%2Fa9UTf5QagzCfl3ksW9v3b9%2FFdZ1oXG%2FdFhOVqDRAm7tsOLCxLNvBdUUTaz5HbSN9PYy0Zu&X-Amz-Signature=f4ddf4c81cc799e6577c7b23b806d249c6d65861ddd77de0e0756484a9dedb48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
