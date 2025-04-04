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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIC7CY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUUmMObTL1iA4qblAs1vnW09gKKFvazWnftNIcwXhC8AiAPidaYWmb6UY98tPZyGqGM5wKCMiruRf2oHROamkViESr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMk7giHHY0TQaONzyVKtwDoKyhtnlPd7N79%2FRUx0waW51ouIiupDtgNk3lXZydKmB3Z3xazkmfO5uBueIJeeYSFgqagkSAuK59pYN4VF2GxbkenhRVwyde%2FoBLhxnrhRTSsCaHHo66s8LCWIwhSHtGSSgKgy8sBDswt5eid0zWJvnClchZyZz5xVzn80%2FMrQPF%2Fh4rgLuumFF8VPEwVxmPPuXi3i%2BcgbZm%2B17Yc4oBlyROv6%2Fe6A9QgnWKVW5vRQf6WTlqtVrdUms3YQ4HihJV33l4hVtQwA9MBrdmsPg0muDFG8rvJXX3fq788YpksiHtfTak812GhYW30BYPJoEJJ0q%2F%2B3hYjBsrE7yAh2%2F0UORUoMHUMAyzA4O0uS44FsnVQmnlITb6G7SlqsrQ%2Bi6eyCt3IrgJ%2BjI7kFA%2B3CE2Da7qg4w9rKWaMSLdBW85jDnda6AgJhaU%2BYCq7VH4JPLpYRxml14ez0ddLxBRajxqfPmi0pU%2Bpez1MA3nPjc%2BZZUdGkPPKghV5XPIKipXczzsVmFAOnrji9JO3VWy9aopQdOX51Y63Y3jHmjGojXRYCDGuXQavsxTcGnM%2BwQKIscLjLCZib1J%2BamHwXvo8Bt6PCllxvEW1orFgWanY2NGDuvsejAHDaqhkhW3dRQwr62%2BvwY6pgG9yYtkUi616b60%2Fc%2FsIcQ%2BOQWp946J9bextklUCFErFnTCkGZfSTQGF%2FXPlxHk0sEw0soLu7GYN6m7AK4YZlvHjcYyZwnDOam07TLTq%2BPmZ774tk24ZgsWFPNwoGov9uxQ4PKky4FaxGJ2xXX6vwSPBvOYrupnmKvyS8fYguJNidaEb%2BYlXZ382yOvtXwna4e%2B1IO3oJ20aPFhAkpzZneOobMRwm%2BX&X-Amz-Signature=650eb63a4b0a0df63309faa2ec81896576396241d74c5b226f7b6d5474dd9eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
