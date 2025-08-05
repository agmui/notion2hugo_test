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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPYCRNL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC9tu0vHTAHJPVRtzxWc%2ByVaLcYBbKXJCwPBJDp9t0I0wIhAIgWqqXECTplZWJQ04Jm4ggab8TeRzEQZFN%2B6kv0i839Kv8DCGEQABoMNjM3NDIzMTgzODA1IgzWBqhi5MmibFiOQMIq3AOXPoTVsh4HKWvTjS4e23NM7lbmMDVYf4EVTm%2BMdHd3GPhz5Zj0WNo9I%2FF6T9ehDcRmy79zMhG5J53W1Ijeu2YXI4yaE6b6iCiJFkvt58QyNPYXJZzOfE6dt5%2B0Wlp6kbV%2FwK0zmt%2FAiLUHgUqgQc48bIegNQS1Uge3XUWoiMYWrJB8hnaQiT%2BM8Pbha4v%2Bigkujp81xlZqTqLzjPfXxeSiW8BTzlqtVMEX8mCOlBI6IjDO%2BVpOZv41lG3j1jXST6ecvDxvnMVS4i5F6GnvcPwvdYNwleG8w8UThTEfFNpSHCUhl70mnc7rI0EYVIHd7mKcpOv1zkSsudJqAJPVaLXN6NbodwZ10GTLZgFyGwy8h9CQHWLJ2E%2FRr0tgNAUxvS7SYP%2BLkQpxd7%2FSNnvUmlJy5FOdxS8%2BW94hEwEBdX3hKjLHtP%2FEtoSOe3k07aqvbITRMcRQsIUj%2FfF7W%2BPJezuAcQyoHXM9rCn08OBdSSblr5BUPUQ068wh4%2Fwy7K6cvKj1otSzTKNt%2FwKQHFmTUeXdst5vCiHrI99erWJsSDmF9yKEHaGO%2F6iapetbkhMawiOB3yrXOS1sWlvAbBJGK3yDXpPZB8BPCpfzVfdc2nDmGbaWhiQOR9OHfcarJjCTzcjEBjqkASusngsVJmsyzMQYBB7Z2Jt2KsWQaxeQL1uiTKWASlwKyztuiUm6Lf74%2F32wjbvGf8diqIbd%2F%2B0%2F0bYKX9EKNyL4pRD0S52Rmx5OakuAKUDpjnYM6%2BaGfBc42WCpY5YKcok8vtP6G6BAp191WB3IjO3t47www1Ny5mfvonX%2B%2FzoLh3PLStSrWh%2BIDANco7qwy7Rbw1eZf1H5u%2BudHhB54R1CMspa&X-Amz-Signature=f1603362234688a449ea75d3e7ef3d19a563c99fe188d1119920f0ad9ab15133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
