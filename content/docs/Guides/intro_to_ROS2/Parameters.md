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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OM2AGD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbqLvN5ebjgZFIO2heP9VHn%2FRZF5RBRMM4T3GAUMRcFAiBplT26rRzX4nx1qO2ky%2FoJeCYHUz8rDn1a6vPgLTyaZir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMrfcZUCEwGhaxMkj%2FKtwDGPFbWPPho5tEUrs21CZaoPjUtbjEjsqEBHNRSoWdXjsdaCF9cZSI1%2FKrB%2Bv1BivGYxizr6AWzA5TsCwXh1t825No0n0mZnIZeYFVSKj5TaQOs6h5OlZEpWBkgV5jmjNAqQ24hy5SP89LRwhLq8BqUoepJNANsgF%2Bl9P2PgKXs8JOoXSObW%2Fs6vXdGdJq6MCGUt%2BG%2FfrKqjWlEf1wTxH0n1BQL4stmeOaDqGdhsSB16qei4L3xigXwUkXHuSBUWYTSaX5UuQg0DbEeKf4RSSpmEz5zlikDOVcLA66xicVxbHt0jKnKaDPiW3z8L2Ko0Y%2B7JYMuxWBYn3rPaZrz8QwPkUydDAOwEWnZE7g58VUDBbR7so6aj%2FVPww7t%2BAzAZc78kn%2FZEdKlCVScKSXGBgfSLAdh8dcDDX%2BykO8IPXqMROw3hNvlWaoG0rrxR%2BCq9PmJFA0TdX3%2BsBI6HBr2ni7MwJzxEMobtYkA%2FgKrF4bQpS9kuBLoSqC9nJkpAAb1VVjvh27aIExhw1VZ1BZes%2FYOUwaYkUHWzBQDADYDGMxG%2BSWefC%2B9hWS8jHe5k%2F5Ng7p9H8hM9vAhP6eVY1E6FehWZowZoExfPF51yLKgjuYUIQ44q4dqA2OyPJgTrQwh5j0wAY6pgHzv5VRJ3aFW7TdoERPBYpUmF%2BgtJHjDzRQm7DoEmG5lQpd67cyF7ENg6wI7PK2oPVoCvU8KwpoNCvdF%2Fw%2FImBMMzixme9STlSqpx%2B82KiJAdwOt8tjoXTOnEcp8qHYwvUmzP7BPLX0%2BX2GQvSWkJfFa7kD7NhIFFB8ULSKbZIbyGZrwIOECZbhYHNNWfH2dDLo6693yrVa4KJhS7b3wlBFi9sasWPz&X-Amz-Signature=4406c5463855f01188b795c2f1a25789e76b315af67bd51ea49446a16ea3fa10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
