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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQ4UD3V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEnMv5BG0794LbQrgMYdGUzrPiDJLxt%2FPhlNN3Q10zgOAiBzXsiIdRjiodBp1yM8ALR5DQlF6oRzbBVf4glKHxwrDiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FUNgaDFo4BUQXJOKtwDm1dCEZjgnU4nMn7JHdGvAYPGQPusTz%2BqccMyYz3CIUIWEXf6SqcgUm%2BXHmMqCMDPUuxPMud3qqDkfjqjIKUMDQC%2FyVVNxjYG7BFoUw3duCGE6a6qbWbzKs4yi5roJlF0yH6T3piItxDMdQVM9Gvus3FoGJ0SWJ1D1qbJt5qG1gjTAaKavws79RRQnb174vl4HPxxfoIDryCpuWvn1pCM0SSfreMUb1epzJWBM1fJOMuG38ce4v1cwb1WKE9oHHDregZK2%2BYfuBsNshAUfNzvcj5NL9ccRq9Z3RI7rkUUAFKXzP7KyLTQQGypotx56FB7dlqZcRemQ5FuSliXAYtgBR9Io1Lx1W4cQ5jPOl%2FcB9QAJDIUt5MCAZjpRSE0ECuWV3sUBAKubXnTSADnlTR%2BDQHI3wac%2Fgy6nT0ZHbvZBO7lkG1YAKshWzwnt3WfqKG1iZEKLwy9Povw8TboKWlYsbBnuCe%2Ff2l52U651aHTeDpdHvQyJktyJ8irWoHlEyug%2BdNMwb%2F7s9UBl%2BA5A7WCL%2BqfaP6uLJGA8DHnKD3UTzaTgz7S%2BGKxbiniwUw744W4ueFZwI633e7jZyFsziFKte2vKopQCAc1W%2Fm71P%2BSZ4IcZ0kmftnepDBlatMw1frWvQY6pgECp72NSreap4qE73WxBNnLyIgYO4hXvSoNGmOOfcLjkq%2BwDz4v%2FcKM1aBytHnR0P5WfcRcA7Xq%2BylxeIm48uKnmQoPpc8sgesgEE5n7182Uxt9Fh6yjL0V%2FWrLUWH%2Bd4ey8Yj9MCxM0nqqP3KpRFoEqXCg1CoUaqBsnVTNWCEAhXIBqMw1FlQedKziWohAvMy0g5NWiKBkUy2HPsG6RytdNtrc%2F503&X-Amz-Signature=d0bea413f04fc1d2f19dee47315b6e38448a81139beb6d375a4b777cb1384e69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
