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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GPG47UD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDk29WE6ziSxoyaEuDDRFDZTrX12Y1uUyKwYCBIXrna%2BAiEAoe2DZIlRAEBo3VO%2BJW070OL3lFT6gGjS6PeAhMkA3UUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaJktwRezApLwQ5oSrcAxV6ePLnNSSeSfSuiadimHmUKI3Em60N7oh4eCc%2FEzDuYWL66XMrAuFC%2F74pJuDEc3ZDDBCLpt8MwtcjDOkas9%2BmZkhZCD9MMDdAzbjgBHNWuF8xNHOxDrkPU71dQtVCaFbDpN09k%2FyuAv08h8ycNtOrMhGX%2BLB878KTZz02C4RQElRYRtbIjbJlMKyyOPtBQ92JPzLU4xFAAKSqwskzfO0sHRh59jOhuOUTdEMCPPPpW3hERWN9coQbY4vFv%2FAUPP%2B6eJjLRZ65HhMfFVbEGK0BRxLdypQGYYWFMEg%2FO8G1EBxeJAdk5buaaYVIMQrEXt6lsFnsJhas%2BhsxHsN5QeM%2BgZxDsOhd8FXHpEY8aqgR5BCLWlzOjgIxyqqSBhxnEj0VIqK3VuTSJGx1bEfIOZPh4zs4%2Bdi59TdTlC0fS8O12YNAsELp8duMfhwrZr9l%2Br24EzPQBL1u6RjL9fZhz6N402ARCkkfbpWQ7VxWmz3BBtnfFx%2FOL53djS5tG3nVJZf5ajhgdUSALVlofQ6LWdVzhHb0%2F91cy3r7TR548tzrNzeNjqjiv3%2FLAqkutp7SF8hQOJeeEVDMEzUHgAHLnkGfg1iUwlBIPkjSaA2LK0eUvSox7u8olXNErTyTMOTzqcIGOqUBEcK%2F1SxpAe5tdQFzQmq%2Fpr77y8F5ofaS6pMHHvyEf9dVlu4reW7XV5DErCS7tdr8GLloNNhwop%2FIZWqqwPsBCicU6Sdha4kk5kf6RcCFteWAlhQw43JeJCUxhwuBXQr9l7whikQkEw61h1klMS1u011iVnf1%2FE5S4Cm36JMH%2F92ebAePAHhY04PemTOAiTbLTcbXzI68QvcMu0bvLYD7V03PV9EY&X-Amz-Signature=c4eb6931b33a5e18cf4966532e0a13a065a5f4a38f83e6f55a1d59dab63d3826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
