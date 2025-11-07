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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5F6SVGX%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcFLtDHK3CPCPDUT0jbpAvzudjhkQk506GFqiDMwsDQIhAIVulmsoEkWFKt3iNKe2Jof3moE2Tqey4rR2bXmLAiBIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCJtyyEqfSnG5MG3Iq3AOpIxhJlRjAq1cBXjOMrY0RvFadtg9hwd8kLcNA2LA5r%2B6kYe6qbDCLhaf7m6anIh0pKtnvKKyhuNpyh5f%2FDc9Pfa906cBTCbdiIppUaOxla6AvjLN0YG5cazQfPttSvRbcRgsjCVbL%2FDJxptU8kLWz6%2BnWNuofriJGj2%2FrDBRJfsz%2BDUeKg%2BQUO1co7MGo%2Fhd76xd2NdsAVPkoe3b2ONEoO4vGKHgokyb1aN2xzmGzYd6spMXRW3Z1in2RHOjTFvNoEsmzQGmrgz7i%2FLi3QCzN1IjLJEctC7vWeNfyoVYlFbZ3csjTWg%2FcUI0MHgGIImr84yFCLAJ0ny3mTlMJM0DyzVv9xToMA9FyNx2UdBThHfa2TU9BmuSrOyU3NZzgb%2FEVDDHV6Agvt2F%2F9ehLKKwb70uQRa%2FfDtWGaqC%2FRgxvb9ayJTtTh8KX2uSlfDd5otGnrzjbU%2BtGjiKDGC%2BBVyL53MUd8dr1aS4bOSnIS5A6qOkC4AR9E4H9l%2BfLU4Hma6DylYlqwTWu%2Bo69NKBuaVvoi%2BLzH9bzGSO3wpvsHq8gq%2FmULdNl1eFa3MCJPldbVUE8kzbsBn%2B1H%2BHEZPilmC0grluNVjRu6%2BzKs6IrOthDySym7lrMbxx3REcjqTDFl7XIBjqkAYQg%2B5ihVJyofkDdCLstBbe0JiwPTUS%2FIZ5f5%2F5NcbpsbT38E0BL5Y5UP2chbO%2FR3QBfqFxaoLT7tP8r3mMcDn7XBQqAcs916IyRxgLT3E0AR8SdPhkLD80VRRNNNHIpkqcmItXOkzhoXN7YxMHe3NrBQqAP5bHBfVHEte3jAw24c%2FqC12XzGYuDpCaWyfa1nZMBX52tncbnHCheghIjpNhoM6Q%2F&X-Amz-Signature=c61f4e56f42c1a3f0e8fe79e5db0824a0a95879dd3b56b149a1f6cb0f7abe512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
