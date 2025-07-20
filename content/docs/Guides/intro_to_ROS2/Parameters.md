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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAWLIPT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy4WIf08pbeAv6a4dE8sPpx2VjVQf5Mf4BfnVoJWIcpAiBDNLqHTgVwNMY9PS1SaBMdoLKfw46p0DbFNOb67Z6iriqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM24yGZB7HH46GB7RbKtwDJ5%2Bt%2BLdTFC6HLbFFCJ7vGU0T3uYMDZOZ12Aw%2B7LXX%2Bl7uhDphMxe7ESeRHKubhzq4LRtg6qb6QKXAMNwmjJjZJZlZ%2BS4BlVz7uGe9WKREETA1gVLYtvAiPswS0VoPBV7Zces0gIPxwUZr3JckGOEZuTtHgRZ4P0Lj8kDKq2SOON6VJUQ2yga8gBYiCTL5HQ7LEHPmb721G1sGeQz1sqYQ2I%2Fwhxs40BFSCq5xXmt5ll5dX9ZM%2Fir84Z3gzk3y3yFs2B03oK3n2RvWDoRO7D0AgLFhmz2ZCy6ksocU8ZHoM5aZkmNKi2cKSSl1G8Xw9fSjhqADJakAQ6yvIotNRjXI%2FnGKXTIRmqJter3DHy14sXXvT1QjAbXkvPP3RTPWbWhrN5etX%2BPJdedXjIAiEKmwmu3ayhoEsdaLxj1F9SvtVqelniNZUu8gz9cHMc9hIBmieAwCeqZPhGerMLEyTkN4v0QT061A2QMwEMScgFb0f1lTOjc2tNod5L2fE4fBRcfaVSCoHvf6%2FmG6mkw%2BvsDnqj3DMgG%2BjMgyKzHkCsS4T9jby7a7p0VnDXrLRsAXvve3hUMbVHss2w2erCtcf0p9JC%2Byf9erP2D85jY%2BtDSoL%2FgiTkSiwgnIKCqJaowzfv0wwY6pgGbEDDPYzGQ%2FF7uxQwuyEZ3NLf0lZ7QRLXp5By2TJ8pEu1AajvWQnCY5%2BltLtC31LPYq28MKGc1krvUwIYsBAw5iOfjHNXGsyImXq9qAC6KgApAiiIwDNCLeXtoxNlFnAAjSC43y6D2aQ82HKmrG1x6vMSHBwltgDkWKYXwILb7F8jD1oxsH4V4GQG%2FPy33cjvPrWPpYsThp7yp4%2F057GGlxiBwponK&X-Amz-Signature=629d6999bba212decf338edc80d699d1c763f375d5df05f9ada16cbc4ec468dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
