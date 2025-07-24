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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43MGKZT%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCZSGyFnmoDKLC3WuanLgwXtdbA%2BuiJ%2FgLJqf99MGj20AIgESiYXpoT6dic4%2FOEOPJIy28YBlyS1ZtF3QTZcPVqx3Eq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGSGsFLv7SywG45czyrcAw9iBQPRmJQSNNHlK7d5H1Y3RhlSKdGy5O4BfkfC0QSQStTt%2B%2B0aJwdkRKs6xur9qWFOUgpeAVA3G2z90rXckcNyiEt6SkuDotf1AX1NbyWSt%2FGs0Zr2fUCh9BizfqDOSdQ8JSq5bhN0GyWt9bN%2FQUfoh4N%2F5QX1TxYjQ37BIeAgl%2FUdPUJ%2FHChlkczTnkAPRfUlrXuvUQM0Lyitp8EViCz%2FdJr5bwkPLbts4HeKBiDTS2QeMq6yjMM9L%2FxeeQ1CVarOS5tksJdXhrbYn2flsL6wlVvO89Y32ONVJKUBAJsQmRRfDgF75c8Osqzx1VLyGe6sJZ2BZFUnPcDLxjf5mmZzqlxq4chum2zrMAyPlFYaHyN8YLPvcthoP0YmSggHG7c34x2G0R2ll63YcX8tcAJHKB3h5bpGstUB6MvE3p9j7YLNQ3R7cxWnra43c0kXNuM74JbgP4c4SERTjKAl1YRza7VY4ASUtm3REYuSW5ECy7Z%2FbKkQTAY5if8zXyYL3EXZP8rwZRWgSJVPckPb1BzfCR44qGmNjDJfhOr6WDzOcLZtwvic%2BUycdrBJvlnfiJnN7Xtrcww7xOOOSgmiWF9jE%2BBfIc5NFNa%2FOGtxxw%2F%2B6dHIi89tgJ7vvLIfMLzUicQGOqUBaeZvzJ%2BuFBxO9EUTHx71Zb8lJ%2BnLiHMUWwerT3uVkgSU03tuf5nY0zlrpNOQA%2FPswYpJSa9cdatIygTU8F6xmkEAF3sCRQrJRSFcRA7r9O40Z1QC5%2F11%2FbTN1216bnxvKhLyn%2F4Z6aSB5qdG1gFSyBK%2FMfRk%2BtxAira%2BSiaBGK4FJQTdY77%2BbZVo2mvRHlYTHqyLNN26a3HsZVIEth3p1U%2Fo0By8&X-Amz-Signature=d98046946ac54b16290d701e241032397f00f273c4e616bdd2663e98ea97566a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
