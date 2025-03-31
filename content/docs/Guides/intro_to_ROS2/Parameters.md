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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHBPKVQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIFWfynStyBt7BU4kvsoJd5bld2KAHSVMMTrBNi9vIqcfAiAzvyGFLY1cZROhLQkWCYZSu9k4xvkgQDBksBcR2DAi4yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHD3cYPHViElH48qKKtwDWJVXrnyMi9oX%2F25thokwp%2BcZzjX0h43upbd%2BDglzbRh3l5MM7EVrYtLMbKdmf2gg7hqrHl7pga1mKzWM%2FwbR%2F2Kt%2F22iOt7hXfshjTS6lsO%2FJeu4rbCIdN0qr5wkX4IMRiCZQ0sDA2c8yxDquR8T1J9%2BPEuPeszZJKVY9YejMzTH%2FbIg3y3jg6ykrrfrPcqJrVVdnDKDBCopSpAi0XE9333CWbf30i2xktF%2B%2BK4AmciVB5LF3Zn%2BzBPK1X0sT1qRhJ%2B2soE13ndSmg7Txdjk8vjCIaRu3UjDBnIi2OU3rgX%2F5D1NfBnB1zx6aJddkrPNdnoSUaxoVcZDoCSVgETa4vbgjBPzggAu1osYt%2F2o2vD2qgFuNwIvH1ixUPN2Yne6L8%2Bmp6lbpGBhOKGUYFSOt3Khagx5Tc2klWJYXpUIuPDcA2yYDKeUt1CYgO8JegIZfr71KH6Kwra65Q4Eh0uWOXWE%2BctWvbUqiCER4tXZudVtkM3ocWd1QT39cKxerOXaQTR3HGIcGedjb0wrEw%2Bj%2FCWxyVEJ2m65AepwQ9icde1neKd%2BG9c4bqw8h8LRV2vnnVENHklmjpooW9FOkXBv2yjZOO5E1Mt8Jg5Qo1DAMWPgMVKvvZJ3OawvNQAwgcqovwY6pgHnmolMC7sEoCfx5%2Fgi2GVWHUg8Nwio3Bhj%2FvLMEV2d1Av9%2FXNhYkbdyPPDGuYVJc%2BHYI9agJOzDAviemXB2E3OfthafIWGxMmC19bvr8T%2FSLEomRI7lUN9j0d24%2B6zrB2xSU0L9%2BvRJd4wWkudKBX2HZjJeBidAjSDSHeoejd9VKQ61%2F1xaGPt2VTzvukxyvtJqyOKrpo%2FcHNsZcM%2BjGPDWYPRl7XE&X-Amz-Signature=d6ff82d04bb8744c17e3eadac265f1ff451fdebb5bf384a6b98bd2ed04f1a9e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
