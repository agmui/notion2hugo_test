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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5A2OO2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGdX8PzGD1%2F5C4cKVsmWdzWbOcpy1e%2BPygnmF29QFGGGAiAoEhLBIfmcTDIixf8qV021eKC6R0U%2Ba0Am6ggj78BPsCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRrjRr%2B%2FPhkmYexDKtwD2uNq4dIuc18Zq3snNOtHPCwd3HHLCyoUNymYdBKrdZCKblLnSSloK6qbD4W7SSJ4PPrmPqBWQs9Dge8aJ1d8ZBa10FHbvBT5b9HLQCcpSSJale8EDRtstfFkDX%2FEy05cjzzOJHw3BdZrTh13dQJy%2B9F2k0f0gyhmq1fKiDO2SHxg%2FFxJnQzTT1HdzuaHZANWZtDmBplHdQbWOtvcSy2VmylNGJqqSa4qkqmVm5WpfaVGbZ%2Fx8RzCZmD04ZcRPXmc2ZRZjd%2BxCuH8VXtlL0RFtxGhif3pXNSTDDEGQ2RufzQnoHuqRL0%2BBSTAfhepLcdUzKuTmJTwkMv2QxYSyyzyGT9X5FA04jdozIynuOR6MvxH0kLb2Q6h7xRLfLS82N2GHJR6fygaaa47GuZw%2BCpWw6D7Fc%2B8ecoIyPIzEghS%2FdkDyiMvD4qRVdOMHnTQjmwoFF2OkpSfk4ReQtVe7wifSNDf6tXWA5JMKG0ecthUJiRWCwD2XMVBZfVwqK1eBt3JIdN%2FbDEKtOFFHjjPyeU2BQeW6DjHaPDL5oT8E%2BHmzOkX9LBf246YRHuQma8SWfVMRK%2Bl7k7yH831kvSsdOnMbBTw4fJaX9GxawvKObE9K%2BZ6spLHJ0yEAwfji0Ew7pbwwQY6pgHIKgtkDR8l0vOUTHdgEAYR1PX0xSVXEdWnqkn9PQyJeU%2FHw5eAo7XKgRSkwaCSwN%2F63SXrQ4kfpKvL1XravxFNKh8O6v65t2n0jg%2BN88OtX90YOmXFcKuzEpxat3dXQf%2FUk8cXNw3F1IVTar02luhALt%2BK%2BpzAziwgykEMqrEWAAXE8ouKTGDPtHrREEs6sa5PKeZKki3PZSLBv3VThCt7zfQd65ZM&X-Amz-Signature=effe07964704962343709ea3126f47d1544c5c3e77bd63040479b59bde1c9711&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
