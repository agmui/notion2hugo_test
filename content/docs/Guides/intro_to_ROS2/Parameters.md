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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I2ZXX6S%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFvgSQAR5EqcuwPMe66x7RPOj01O9sZNWgblGH5KG41mAiBUEazR0XriBPNmxGPEtkvH%2BJeiNwrDxi2uLx8sLFgT1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMm%2BUtlZNnf7gG8fv7KtwDh59zAtn33dzzjptM9ijhj3jLnrBObsSTlxWCnaRpXijzb5lFtxE8mAw%2FgyN3BKvdgpzPbOoPTpldyrZS6zBdiVGp3VHj6%2FIO2Wc5460Ys9%2BWDz2s2KTiVx3R6hmga%2FfKPtFvpo6hgS2z9TScE7exWvRtZ4Ic1eoVEBNupOuRapAUdgGIlgu3lG6YECfTARWVuOrLrUgHHaxE%2FIaK5OqWE0jbtqqZfYZ6fWo7UPIIDk8aievwZcQKR0QDWdE5Zxhhrg4fegeUlM82K5VrRVte9SyE6IXfDIU3pcvTEnZ7tNHtDr1CUM5Z0mQm9UGInzZ9KZruqRci4bQxaFPN8xOes5kCkJPkGW6sY27dAe%2FfCUXnE4QKc9j7hHsq1lQeSidQfLoOAU3bqHMjM3HQlhbZ1Pc1EiunNgteW7JThW9mMxEQDZ7F1gljvR%2Br9FnFq%2BejazfsX%2FZ7blgvvBIAeA1dHZN%2Fvl6hDAM%2F304FnLWQ9Yypznq%2FXCtWaBNlDtX6K6c0iARqy5685oHJXI5EO%2BAtlGGiTAHZGx%2FdkIJGvcVQpm2nakx41eU%2Bpfb78WgJ8UnDjdVxlZf3U7HkC%2F4IKq5q71V1eQ%2B9Zp7Z2Yth4doqGbr%2Bq9z4VQwR4cWqrq0wuMLtwgY6pgGv%2F5oa3yzzmml0WVjejTsF76GaLZn%2B27p8BNiILhLsHwSgAgcPKFjIS6D8FwcJ5aJiYNEPrjGIYT%2BbUjoOHH3rFq7w6s4CaUR6BoC3SFhoe7F3DSl7Qtl0yhA2RNheZpjOzuCgl5Qe1B77vzOEWVs3I6Rf2YQZ1b2HTYUjZlgUSei7BzR411aBMxKmar%2B%2BZi2Fu5%2FcV3LEXW1P068YvxFIE%2B%2BY%2Fjle&X-Amz-Signature=fab2e3c18d91534ade1052a595e9b87105a6e4c6ea5ce8e46390c76a1333a44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
