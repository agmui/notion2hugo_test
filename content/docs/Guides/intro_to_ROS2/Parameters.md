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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASEVLU5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwNi%2B2Spd0x4g%2F7GXJ3G1Iaa9EbAkXbHhvrHNOWLpRMAiBDyOc9vL6M4XSsJxQkSxgnXDSs5F40JYK3FSuImpHjtCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2Bvo%2BQ7iY%2BE921KgKtwDC1V5GrF2FFCQnkUWCe2F6ILQ3cBnojswFuDi9b7nZDfnbQPZb%2Bz3Lv51qgej7kRNLjMt%2BWwqnM7NDeGWkmpb6M%2FWniqae90%2F7zWNPCUsVG86Je6n2%2BbzOwTsefeFrdwfD6g0OmZapSkCOGdV1285RuMJJc823Nwn6aRfCfUoVdkNmMhCGY%2FaRducBK4io3qDSMkXL2eOIumzE94qC31FrIteqQ68YS8hWFGHEj8VJWug2M%2FVlJBJmGIdgxnYbFv5tD6qHtuKGiBuhV1SSggVpaJmv%2FHTVdSGb9aFV8loNNww5UFApkLG1hXgbj8hQAl2naKXlUUdfbpj%2Bqv4xKwSBAdAS0AnrNHyq3sKxxIST3xxLfErGFSQkuX9j4jxNwcNpX1r8qSDIe4ShYPR7GfWd%2BAxjbWHvHZKV5%2BaWkSDTby1kqDmP1TI4J7QseeMc9e1xmsg75Fxx9kg%2F4e2xlPLLLK7QG9Dnxiur%2F9K21x5xrwq%2F0TnUHfvT%2FdcjR58CPJ5ywhz34GNlhD9Vv5G1YY%2B6r3C4L6YqIjt5xsJxd4NI1lBQvW5Kd4nvyI8cUn%2FNb0Wun1iuL5jUlGhb2YUoXrPNVGw2vdCeN0JHL5E5NqZ%2BXHEfAs%2FD%2F%2BFqLzIGeUwlJDvvAY6pgHD2wu3nFLgxyZXtqDPiLgpZ2eapsKOKt92QHx9wCQNkBguOkkkRQmI3XXfthbQ08maemtXey%2BaTZfUt5mLIwGAgjTRI02OlRXhSIKMixiTb90L0mk6Nj9SG3YUmSl2K2IC0VGk6G8PROXjCEHWN3pI6UA8SnCJrBuISqKWFNHOmyGCUYsyHDiFTzPBdw4h00d%2FZt1rM9n40s34XD2c7kfZMcTUboP3&X-Amz-Signature=aa48cfa36aaa9c7c66d8107914df8a7d08d44a012d735c812ab1c8f16319f5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
