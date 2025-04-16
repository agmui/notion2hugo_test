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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMPTYPRF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFhQytqNXdTyJ662o5w6GF5yRBZWBRKRe%2BRUfaKSuOGAiAigYMCPFU5uMcHR%2BWy8MdhIRjkrm04hDdLyUqciOD%2BDSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMfcqVLR5x3qhSoeiMKtwDLwQ43z6%2FhU6yoK%2BBU8c0ub%2BVvwWjA7Ef4miIZ3467FWfpT94HExukzXIaoAaExbWXyUAPcH9MRrEJ0o0XBTW6Pbee5pGhH8FN2JuZ9036MmlJSX6lWy639utd%2BeLoXdqSYF1G7%2FW2hagROcigWfMHizqIbyWt5VayWRvo0EkPh3wYArgBL3ssbYhC8uEyGe2wdipY%2FqQqRRZ%2BzKI2%2FbCVzSlS1BYZCPs%2BtrnWAqN1iL0gLkR%2B7sQ9O9ImsFT6To5pbMH665jnUJxA81WgyaMgT06BJn%2BNXHFlXGKyHzCh3InbgWRjEzfP5o%2BRC%2BPTh5AdF5up0%2F8UV6glW58AjTR%2B7iKoj%2FIsnJ5yD0PnLQQ2EvAzBnJjgDMvthCP6n9hwEnHyzOo7U45pdwQnxikC8t6p%2FJNCwRawrVD08uTbOV4wX1o3JVVvR2yQLvzKTGd4Ti%2BE4uCdL0dkvH99orSJW6EyTq1Lg31UEjB6vY35orqkj3u%2BGRy4C0WG3j5LmaPNYmVYoEoOglN6BqZP%2FZB%2BsFobWwIbGOaRaw29C8Cv%2BJ6dayLKemrmT2bXSMxwhjDP%2Bag%2FH7Ig7HHKg%2BRT8K%2F5ECaBYG%2BJqaSoie1OmRMskjidTKW6jVI%2Fu3vgkUEQ8w1%2Fj%2BvwY6pgETH1JJzr%2BRg0OFgHg28N4k6oJEIu6cTb0jueL6zBMrQAi8kDUhu4RwqO%2B4P5E0krfbj6EEugtNitDtoVYY71w1eJxBekYb%2BDTA0uzPht0uNQ%2F%2FTSGkvhgj4SN%2FqjsXPfz%2B%2FSDJlS82JDycX9P9bP6S5V33A3SSZy3WNCsspSsvhYM5bFlvfaWA9ThNi6jNo5NWz4Fqwr9kPo69vDlQS%2BNoSThhHVs4&X-Amz-Signature=26ed901fbf9ebe839bcf5acf169bb6f3c5c7bd66531b456380a0bb317f2aa689&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
