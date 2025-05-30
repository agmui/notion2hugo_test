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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBUF6FRQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIBTxmjY0zUhjIgqiL4F94S7ny4xfYP4hsN3%2Br4YEwNAiEAsJWaiz7PbqdeKswYEA%2B6sLcBi7%2B7SWeERoPiQjGuKI4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLFQ5QTqBxLgO0TyyrcA3hqQEeu2WMZf%2FF9fvUTC9Hzyl1KTL9Phg5RGShzEOLEf%2BHOY%2FJpSKjpiHnSQKb1E1791snMP6IP894SZ3d27GpA%2BpnQNugTLYnATY9MrhZnBUqi9%2Bbv9Huzf0ekvWTH7RswnAG6R%2FU3%2BqSvNVT9a5ZZtV03drOcpblhM1okUZS9tAu2G%2FXWaPtp08Oz4V4FX6YkyXCYbcNKDB9r0Z0Oo0SaA2BBJZgcjGdQp49p%2FEj0%2FGldyD59AHAeWdeL4COmEXmWG0IihcfcxQrOo08jXdSe8%2BcVW9%2B7QlMZ2jjMeBjAqj58yM7QJwSR4lWWkgX1HfuIwaqgIvOnTpTggysSg45OGdV5zjjhPDD6skafOSMzRe94%2FL5h4LMm8ZYZKjNdi%2B%2FQOGqhLAVteirfTQ1fj2bvskoe8rkFo00CD4SBmYAgTIeWWqggYKLVXeyjE8kl46i9GEjpC16JBqHJhyvMBAlDekljsd%2FZIqeL2Bwjlgy5pzPjtxldvag3jxorpo5kJPyXwBfTjO23JDL%2ByS0DoIoKpHNsg9JYiSi4aQaZ%2FnKw094AS2NcwGpzcyF1pYeYoHClqSGQgKNoFkZXB9lwkWh1OhJtuprMccjgf6e2uMiQNpKYgmJAclAdTn9PMJve5MEGOqUBYruhk6FKbfevSU9xuWKuXqK%2B1PyB%2BL%2FGWojYOTTzihg8cTkJGQw92BkmlTg%2F0a2di%2BHt3K3bDYV0kpiyovdHL77gWsILFhsQTFHvQlv0pAcV0hPmVSo7bvmkTl9tIgnAR53aAGv3NPa1hjTEFokJ4IZKPuYSr6PaUXM2ECnbZ7SXq%2BclnDaGVMlxMXN9X2fRrTHr%2BYSM53BIj6Ld3NUadW%2BpCWVH&X-Amz-Signature=36ba92e976b23d4d7b35ae8d7d2f327a744d2428dd38921dbb31e67e4bd5c0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
