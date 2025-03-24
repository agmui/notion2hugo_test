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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466772WDET7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQJguVXNYH6Xv%2F6Osh0K8Lv2h6F2n10bmfi3H%2Be%2BSfGAiBF71%2BkaOMyOmqmuHV6%2FF3pcN%2BKooN%2BSJ0j5JbXjXdvFSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3HwJQnMnJoi8VX%2FKtwDrprN6sgyqM4ThDYIU2hMf1IdY91Woz4JVQH2mvBdqzFUxvB2NN0U6Vbe4eEuvw%2BkbuKxeEw%2F0udvgCtb7exyiPEsDCoiafQbhJFZzQ3BeR1f8dhUb4%2BJb1LdnssGa2jfC7gRwq2aeIAOa68Zhe1oOThNecYTTTG%2FcCr8ygR3oBkoxKN0gwEqySZziSVfvUxfrsRHX6xPnn5VWPJDNGrr4%2F1nMVy21Dl1o%2FdRBXXDY2E4MKLq2m4cL1MOeAoYSFGJsHxQVjebUptbOPFNZtiWe1r968Ug99%2Fbn%2BUiRgfLoF5fUokk1Ej%2BIBohiV3tFUZX65%2FughFy142wc2BFpV3xVD660KmjnkReM5Z6HjvFUB0lqU7vdMQUVsR6d2N9ndl1oNL4rRkNDCcEhOfwFkuKtwvoMB7hSsz2zE9Rbuj8tIlSNe6%2BL5gWbOyuzzyqwHjdygBE0PcywFextELtP0T44QGV%2FnDcCe5WMPdnGlrydru13cEyM2MOKn9RzKTaYm6VbU6Igm1BosFJH3gMM3fAFg5ZwoZtl10ficjRGjfE4m3%2FplhqVJ2sZebAgE7c7%2FFKfV9PqYPCN%2B4Y%2FIvb%2BT7wE2koBTLzZgqGbU8y6Z4vTEv1Zaqwj2WmhqmenRIwj%2F6FvwY6pgFeOjxVBU0YH0jd83BTjg%2BKxKp25%2BJoQD6EYFgrlq20qRGCWbgQDi0AxkRp%2Bs4sYbBEy4mogFds8KH%2Bz7OfOq%2FYl4jB2F3d6qz3b98CbJwKQKUPQ7lxrXX7hFO54mQx%2FkNbfFPDAUkdBsuNJ7VP%2FfBGgL4DkpOBfEx4NK9g%2FA2OY2UO4v9Ce5kYKoidXYphcRAsqFx8Akc2pMooysHZQl0t8DG643MX&X-Amz-Signature=9337fa8c0277bac2145a6d1c375b3703a276cd55377df17a951cfdd805cd80a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
