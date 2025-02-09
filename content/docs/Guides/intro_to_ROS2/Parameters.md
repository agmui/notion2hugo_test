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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672FMFEVE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjEfyH4JdCx6bracpYpRDjqBmxtO6LcLAcEm3oGEnjLAiEAmC0TCS9U08ZI5BulKTe%2Fy6fFKBnBlYc%2BIlloPTWdYq0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaQ%2FKVHq8tmZV6t7CrcAz8mna4%2FWCTYtmi%2FQTzFAw2wH%2BYFtxv12vgf1mw2KVBnPQdSdHxmTIEjDiiOoPtv0gZCNQAMOpnhIbSYg4faGpOE9uyY8ikJv1UXo9%2Ftw7gCnfQy33SGEP%2BqJ5rhci1r4Pg7AA%2F8N2yWxX1me2AwpmYGZ9rHCHL0bfd5eUEKixnDEzgzCJSr7Kp6HlqxITqQH0kELq5GAI%2BsAO%2FwsroOX6%2FkLuucss245SxuQvDGAyL%2F%2Bnq%2B5fLdj9bjwvqrjgQyQniafwOZeIo1frCHy8QEwP3U%2Be3nczl4SgIA4uolZPkWdTCebWeyP9ZbCI7SvePituLhUr9qdD%2B61b120mLjI3%2FQo2j67QkFagkK8ZXu2KtTYf%2BV%2FLB6JeQZiNNr48gKsqelRiyYzGAYdzwxzWA7ovs5m0D5dheuoyebtTUZvd4K37bTBffdnBm1wNDdss3kkc1C4NhNDY32HFe1b2M4bNRwXzeRC5HCO1o5dRVlwALMtZlhAvCm%2F5GmdcrXDdow%2FF3Y4Mv%2BLaKI%2FvQKVjM6geNHx7x59mf7INE3X3hlu3kLeYvR3GJs9h8UmJMujFokLq8jSuH0tRZorobAeH%2Fr0w5ddoTZHob3TE9WhlTWs0XTlwUvc7ij6knzQZMSMK2ioL0GOqUBT%2BavRgwCNcFLiLDpztRamDIDhfMFhQeHDXJ5xSWqQgNqyqtiqjR7%2F5iuba2i5Q%2FV0bMFxSXB1l9NgT61i18Zjbs0PT3FFp6I7lWs79RccP8YQ4DjNN%2FjuH1%2FcK5j9D9QS4%2FQiQ5Qwt%2BfO7StCQRNGsO7icwtauuTLE4yS5En9q%2B1CK8sm2Dl2aKVsdzAKirca4DJdLHFh4SC3T1%2BEBwQA15wg8sS&X-Amz-Signature=f2a91b0d35fe6c7f5379f872f2a38196b3690e96b7de62d817da80e05d88aa08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
