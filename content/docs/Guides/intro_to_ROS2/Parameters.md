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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPZXZM5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGxOYg9RWt%2FERzgYAAM9f4Wy4oXyXQcAJuSeqgWqoKzjAiB0wUnqJOVfv7yfrqNK%2BN96JntWQxRNf8KxZY1t8XgrMiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc5s%2B0YeU6Idyuzb7KtwDth7tHr35pmZ9m426MzJX%2FAwTdf9EdybgeeBBhds34sl%2F0YTn9rWfjUwtuhLDc%2F9LVRC1PSXsB3uQ3FFb7g%2Bhb0DBs%2BhBMoNWNODfz2aC%2BBLWweW7hCV4lafgspS%2BNEtnomYu3vN5Dw%2BsG84S6dj3xyPH7BFWOSkYKRaFwsQWug%2BLjtJSmcI3095D%2FsXKz%2B6UdejPntQasrfR2WWSAdLYKEKiM5DdukpNw%2BTwCVD0NunnbwkdbxGB%2BysLrME4EURi2CSzpqQlGuRm11JGDL16qIPo%2FDhvnA9dn%2BdJKn64Px3lOD6UYXEJvP2dXH8q0nkmaY3tg7qEWMH5XkrxsZ%2FQysllNfkZ0wLGJ0Kwh7hBDs50LONqT4Pv6mTFRlvGrZ%2BEb7zed%2BtIluECb%2Bu84wIiu4O107UHXbC2%2BeGFCnjRptjEaOsMfnOUANtXmCqjZiyaUSUzlo0WQGWl%2FIWYOBvEcS34j%2BmMeVhP7nCw%2BKVrP0BVfIUdPhPc9%2FDRNLKwAGjWTVCxzy2UBMefPW3%2Ft4%2BfaBQZ1vW2ApwefY6JDsopTVbhuxZWmLHsPGeCVdOjDuFksg3lILq5MUnVI2n1IzkgHJcA9nkj10s%2FI8F8Vj0rVlsjNX9ft1QJ4lvt6d8w3p%2BfwAY6pgEXKa%2B3RFdddm%2FY2eji7sGcQ2t6Oy2iL6TthDt%2Fj1nCkHbswwRrnCkVjbyyD0zhSYYbWeMKp8bg6EyZjMRoCqXQ502XoowUQI%2BGRUPeX%2F%2F2rvmhnNL3JDY2R7FV4tjxFD6GEydvTczgntynuYVn92Fx8Q97YKl%2FiP4%2B2ey15bkEdkiiilDA1wr%2FNCsLIQwHB%2F0y5vJLKCHpgYTgoSrnJjt2sF8HwZJE&X-Amz-Signature=a079e8919c1dcd49bd7cc389e283141c63f02a8c696425d13dd042989dc9b3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
