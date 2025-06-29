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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYLWJRCE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hFbyhe2CzbPbPc%2FX%2FNC1llLjdUxvmQ1h%2FOM0fJSkYgIhAK1GXXodm%2BIz8GWjI6APLzyDkLLebL9fKocP9AHvBmZEKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI9fTVHTcp3FV2f8cq3AMPa70Zf1%2BJtFJqBNE36n0gpVskKww2bYe3A1EJ89iRYMXC1nJndna8N8LhajiiFtmpQWCHgU2Bs4M5MvEayLE0%2Bi1Fkj05ZDfs0yhSA8kCxZtAmIoWSczj6Hmubu%2BErkMj2R7Nf%2F6BUpc%2FJEHLF4KlLw0vCrjJtbNabcPJcIOwlE0nFxw2d5Tyi4BfaB79R2MHqbvNzNljdcw95K5kW%2B6g2sjL1uqDhm%2FAil%2BJW1Zmcrf5cHK2%2BwFSE37%2BqDEYbK%2F2AjXfd4eckgqbNAJaNjN2uZ82FyZj6LpLFKVYIrUfvhR1GymtXA0ZsqkL2YLATWSmaAXK0w1cJbfrcD6x2%2FZC4fTlqByrh7CMzFVr9WVEpbWiUr%2BZ896Jd%2BV8dtWF2EuQBp%2FKVzeclvPrh6tx9nsvh0MH6a%2Br7Q%2BE1%2FyJNw2oH3bE3%2Bh6DZ9eB6e2h%2BgVKdaZjrU2BKsvqCdSYEVIpP4hdaZd3SVoSeVYkQ85rkcVVYJN7gpR0OLqk7cr7SCuD5KmM%2BsAELqBQyS5Z9KapdN%2BKk6gROQv8Ya%2F%2FD6lX8uFlbC2uIoPUbypNrqTMkM2Y2pLVXTb9aUPX1blkzepvF7g6VdU8qqdOZnWpXamQUbs3xVL4BTG5i0iapxRJTDFtYPDBjqkAWWTJlvZ9Ip1uPUK6yTgTQ2KZCrwYfP6dlmeYEGzxnM3x3Z0evwS9Vzk6Aptl8B%2FKHsCxe6rrVmSuIAba8IlykY7OWbyLWOfFVv%2BYcgPCc9N93S1rQw%2F1eukSDfMOzTSb%2F0ut89Z%2FlZxUrLo1zmpb3osbDi5rRKAb8woHEEz%2F4Ex6Bi%2BR%2Brfw6fL60W4oWYqYLjYE%2BwPQosq5oGZaBPXkkCTx%2F5%2B&X-Amz-Signature=a1b6bf2da2caf10a6755b1f8bde0dbfd1854460b43b61feb4f7061e47b593a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
