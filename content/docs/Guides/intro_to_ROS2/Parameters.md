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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWCT73KB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhvKlRKCWpZubgEAYb7LYLEBxn6qxdve5JDW9e9hgxNAiEAilbR5ammj45IvQ3G%2FuDUbbNeynDqtCDMAXjxrluEVGQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsIB8eyznnPSF7eXircA0e%2FFyMJBCU69TJDzZaLmgQWXSpenvoFtNfKE2X6KFGp5VXx1xVRsM9z3IEdUOb4I8pWyuFJjzTDUJOT7DBOhvLXbGGBf4lN1%2FdW2%2FtzjXIjthg3iCZhBEibnJRq3ZjlgwA2teBREVWUFN5ea0fKn2tWqm4BmJEj%2BpP4XCiKpnJd%2BzyW9Rp%2BpWLNe5GTPcsIuZHyONmTBHiNGDK5%2FnyzioPWVJ51Nrzy5eTxyz%2BwL6Q%2BGiJSuAb3GKG8iQLVHo1em9f0TKi%2FDjZOW0Q74bqiTxzBQtgB%2FLv0Zx7qDsuGA93pe2%2BXefFjK%2FkD16hV45ISru8f9DtXqLfVhF069awMi%2FiPvsujBEzU1lTop0ji7dbi91FPdQxfOMov%2B75KS%2FasJKrkdFdUCWvw5s8jdf2LK1xu1hZa3IjrKTpdO%2FoM9Qn%2BMNRxCddeFS2yYwAKSnu%2FdhEFsnATw6duhD2KiIem1qjn1g9Zhd97o0RFl%2FgwX4ALUauq5BExrotEALDr6A954VwkVoCvjuwFo76NmWB5X5ro6ekjHgfVpMCjVwxqSezZrH2mmNnU8mF42uga2RfpYlAgnz0g2P9Xu16WyJtSQHu9gyHFlHsfiaANm8f1eGe9xANstkBLFUVxCbiWMO6b7sAGOqUBnDNK3IyoWwpdcPF%2BOroFPDwopBYEUCrYlfG8xN%2FdH3QKhIJFVOmgEXzq5u5RJkxf2iPZSPFHBSKcfHHeIPjvIzYaKVWqKQ8XxWAoEplkp9XGgDRbAHtgvgVCHR4exDLc2tLQHWcSVsuRPCoiFNYJ3%2FpF%2B6DS7fO5J5RxgRDwF4cKOOIETMio10gUBeo1%2B7UBx9YlPSsoFaTEz9gu%2BzmKLqcIxdQ%2F&X-Amz-Signature=51b7aed8cb686bb9a6deb52a78e575519a69d9022d7afeeb48a1f6f1103fe7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
