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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPMRJDV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCs7Pt8oFMVbEXvuuhb71%2BFG1CfQerB8VivMMmD6xKoYAIgU%2FbkllnM2c52YwKjPCC146i9%2Bo2h4ygXqxljM5ctehwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFkSa6y1Rn6giCA%2BircAwcfdAQ7fPGT6orBOLt6axc80041tAkLgBBQf%2BJqMrF3FPJRmoqZCHnBjWMbVIfEHCOg4PKabpLqoJZTa1ZU1M7a2iaM3KsX1q9CaVx1EHD2%2FENWeGHhLHJbAuy0911K08FY4g3GB0386qSWgYC4%2BjJiweURWXS3vOvDnqqXQ1fdvB19RcGpWUiBI47mMxqF0Sald2%2FLcsYLX4Uy2WjlTsgwQMLMbHtlwMBgJ4iM9LzP7nBV%2BteDiRbN4fbBV7l0%2BVKdSBdxJPe4nxNZLKNaaf6pqUh2ei9IQq1wpXGHj1PCUK3sRlbkprlaNR42vZWCsjoW9MHV7w%2BjgC9XdDt4h3Hn1mgXj0NCze%2FdrV9dCvdoHpoA5IHdQ51dK47ceQvdkc5k3conkM3adg%2FnmRF%2BuGHrNoY1QWhW9AZ%2B2dx7mEvYHh6xp97Jh7t6a8ZoRzFMIf0aUnrL8ioQI2Hll02y7HJ0zj2yCBh3QXBeJKYx2tDJjwhw%2FYz%2FI1YMeEeQqTa597ykiIrFzPAgsiF%2B1NrkJ72pUTz%2Bll4k1Vq%2F0r5lxVvGZOy6ijZ8C0rc9fBig67KKROem%2FoC6f5QGuah3VtTOhNZzf%2F1t21T0scY3tNNLFiCxUMESSm7Rzcl8%2BZCMLKVjL4GOqUBj4kKwC%2Ftb%2BerZzIZxYyeJmyCr0Ty5PNEx5%2B0KQ5oN5shomaS74IV%2Fr2a%2BBNPrHQism9UZX%2FUWRqIAcCpUTa%2FoNzMvgozWJskPgY9mgOwQt9sy%2FndFjg63ZdSrVO4OQvRwbA57EIc0gHO7KEOIkbKkZG17zdzW8ONLNS2dBwZumwkK%2FjQVpcW7S1izkR%2BH7SWnmd2CiQiyqxFktgH6y2yp9xBYhAI&X-Amz-Signature=531c18890765dbc9de9090933abee3adbe06e29b5bd71605f2cad71fbd312669&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
