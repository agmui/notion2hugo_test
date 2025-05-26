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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOPO33J2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqtZEuSjAi3122vzjZTfMSQkrTSqxIpNhHyzWu4k6PNAIgefc2aF03smwiTF%2FFbCtmtDAIlSVSQyYc%2BDT7Z3J9H28q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHsXKhexGgE5%2F5WeUSrcA3xqiUjjLNTHKCBRlL1OCZL%2F5aD5fNpFvlXYVNaln9tJalJ0hXs4Rn4UarTbl9yhm05%2BE5RELkQEDU%2B%2B1fOMxYuNOCzQkvJOEvlxRFyjDXyJBuxi%2BuYyGwe5soPleSiJqc5%2FEuvQ5xEBUoKz3ibH6lFQUw7LuwGk02W7%2FnjQ3xuCPNStbFrPchuourM7DyqBK4YiuqjPs%2BTbB2HTA86lnWVGkGTSqnfSN%2BGpkg2ZSbRAGZYcB84VrxWUs37I4nw5SsTX4h9BSA2UetnlxaCH8k8ms%2FF5JdEe4uX4BWLoTt7xywMd%2B%2BZiU0a8Nc0lrM3WjPSrU%2F2Rw9eaKPz6YJzp48KCv2ufkDIRV4TCeErV5FpVcqIpmErGY9h7sgmRi9yZbRBIhZh4MVXhQjNqoFGdTSLdxoAlbntrxWNZ%2BMmN5x0UByHEnRujUiwgpdlcV2OPjEwX1U%2FBkDsbPAFxe5MJuPLQl9p%2Fbym3U5xJQ%2B7UsnCHlXiyn9ah%2BADYTAn%2FwZzLmLy2YEXc6I3u7KiTm%2BgcdVFL92JrOsq%2FWOT0DUfVEqBITlFcEZmy1ITrTRq4mfs8K9iWmU%2FBOmyQEdkh%2B6Ky45JKtt44RhP08lwN%2Fvk1C0HJ4N7v%2B9TLtg2gP4INMJ6T0sEGOqUBsr6jZzJBAlj6o9L8ERrcnJFgqFvQIVVKZA0rhZXMncGyjO2UcJQcpcKozpdEp6hfhjl8LxxUbET3GM8hiYoJg%2FjQKzIssbYFyrJOCTetLPJ4K5aad9czhC1rRoObUF8i6ElOlnTQrzm0t5Q3gRSIWRBJZXI8xy2gLtQ83SbG7sOf6MirnZVfDs8tsXQ%2Bduo8h62LdXrDtrrPmEjV71MaeIjmMt%2Bu&X-Amz-Signature=de56658a64fde633ab1a96b7e19fc63f0f09da22debf0b1e72a5ce294a27b03c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
