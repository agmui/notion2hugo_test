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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OP6T5X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFyHerfi4208cat8T%2FB07fCLMJh7irXYWM9bH0zdCVofAiBNmlgm%2FY1M6YRPBQb92LUILycLTvnmHP8BTX5bO%2FWfgyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsokFuJiQEL6Vh%2F4qKtwDRy5GVIeHaYpS8JbB5%2B5XEpn8%2BFL7V15dQEm8fn%2BMk7wQacCjzn9T9c6aiKvtG9n%2BpyVaHallZDL06R1m27n1GphBrJZNyqhrblg8vM0TU5HjX%2BryTB%2BzbaForR4bmAyPlds4ZKIdG%2BcwmUcCxjapY%2BW2F5uLuMHqXtiQBbi020K7e%2BRM1LF2uew2z1Y5CYmxJa1sE7bEB417AO0n%2F2C3568MtxR71qf%2BP9lh3lowMg1sYLc81ukvnWHcvsy2SJ%2FyRwSjzwFV7lwGTALqrsXEbMSXkW%2FdFuYx7Ga0L5AcAdrtsQMgs47aMt54dghmTP6weA3kHDv9yso2MQaIJkFwhYpEzyrn8E8L%2B%2F7ge%2FrKDEFTfrN7XhGruq8lq%2Bxe1VDiW%2FoyHmOJn%2BhfhGvkDNCtUtQmve9B9CdowRbQk8HVZ%2Biy9VWrGu58rYsJRyzmk3Xev70ViD004RKFRgvW7IYdvZgTUIziGkjfDg2RzBotudFnxuQEWMk6tZS05U9HJ0QGuu5mEJqferOuTFXlYbxYMvrNkwJlJPr72Jczn2jH84Y368JbnIJdQdByXOQUWgrLakkWXjgEVn%2BorUNf5XXQ6N3b1TNsuF4sL3oL%2BLIoxWZ%2BdQF3Q5aI743CDG8wlM7MwAY6pgEcLbPxcCsjA6aNLqUj43o%2F6uK%2FaoCN3rO4NMb6Z4fj6APUKKL5%2FVrTy6nb4DXLICC3bJt3gP58luz6ffNhXWoAueEZNdpliipVAUV6AWBhS74oIPqaUHCMzvyutdNhjACW2QZRXAGnkRSLvPf4Jpn9MwWg%2FKnGBxue2%2Belt8AGwJwi553KGxhFO44q%2B%2BVqzNR6FVMC3lldyP4DzH9dixtK6IqRd%2B38&X-Amz-Signature=5ba37d134bc750f6198826ace78ea751e20e5fa24a7eca6223f899ebcf01296e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
