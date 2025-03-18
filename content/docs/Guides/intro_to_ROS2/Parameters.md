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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRTOEB5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgY6vo4WblbdMhEFYr0fcgxtwVtUN%2FXQb7oUwNxH0hYgIhAKTtsHJXgw8Htz6xmwKwRUZYSGXsG32gdbibsF4m0wzuKv8DCFQQABoMNjM3NDIzMTgzODA1Igyg7ZbcxRGKY%2BQlciEq3AMpM3HfDIkfjp8awbGyuB5l368BRok4sPJfAMPQ20wFRN6QKal4AQpOdoSL613xNU09evW%2B5U9i3QBNb9D%2FCzRVtSSiYhIKeQvcI2zKi4ISra5fXlyx1jHAbcCRmb%2FvASpdkFXu9Q7vvMpShhlm2PuIB0SIUxwW14%2BrzcGAvZURBEtoE%2FBH5NA%2BQyEqf1bTRtVgpt7GshwsboQOuw86NGOrHsBrOpCfdPBV4fXqsbkcldyIuQBOp%2BCTTqzbgMGV6R2jaRJlHKrGImU8pGoFpI5NgLF9eTysEp8p%2Fy%2FTuw6aji9czjq%2BvwmHUCSDB4vPWVvXEHKSzRtnFZy%2Br09tXB7HEoqaGJ1dsvE%2FFcwiBMyEezLgb6Ydofln9TGvPFy5RIMMvpAjNDjvwiNR75Wn8IilzIo511b%2B4sqZhYojfK%2FUhcTJ1vp2adZMGLXRrNQSFgYAhVGUh1OncnNU1AkuXVcsBA8cac83ne6JaXfH6kIAaXb%2F0ItKOq3oXbS6vhNNZId7ukNmrQ9nTPEfOdyFHhTMehGHtqE4XBGutfynMQ3IYPoSr6jnI%2Fwfw1beI0VMRDcpA4zCEkDfQoH3j%2Fu6qumhlWA7ebjnF4KdQdcMAont4EmfuJYh45tBNOYmvjCiyeO%2BBjqkATsnAK92TbZMpVZTPfoOyWt6gKyvvgc9yCv9LVNcy8KW5dNNPZdYPn1zRvBR5r%2FRq0MyM9Ad%2B7QUSkkmUcFFr%2FcHefS701o3PgM2snfoxCq0uqKdzW5YSn3nEcph70eeOjwPyZnhXHcGdHo0ctEffnDD8zy8zwHnon9FICxtJwJ00sP7PoGKRVpIAbNvxQs%2F%2Fw70PoWjxbSwbY3rLEgMJylx6P%2FG&X-Amz-Signature=8ce22c34a3d6efa0877cea2d6e0d1788bdce16192f3fb1983f6dc041139c9c96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
