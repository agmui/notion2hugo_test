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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7DPR3DO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDJjN%2FR5nWLAOSVSvFXdyxI1kPfZ5mvPW%2FvvA6PoyzrwQIhAKUym5n1OQkK9pQhc5NqVohkqOtt8v%2B5%2Fwwdn%2B0s4Ba7Kv8DCHUQABoMNjM3NDIzMTgzODA1Igx2i5ZL5QsbkdG3D6Mq3AOmZw9wOm3Cgaz08zLprpz12WjVfJgkV2jZ5Y7D0txirRMaHZLPzB6iJV0vT9pDq5jN3NZ4bfrNYEs6ItYj2%2Fwv62U96vBZpNWv2UjL25Fsc8Y1p3Wj8DnwWt8HQbUwxy7hj9JC6sfL23lt7PCltdZOm1K6GluyTzDQunWq9gZZhzXgJ84DUUdSbD1D7N9jr22EOI6EgQL4iJ2JRqvU7NfVQHHZokls9zmp5XXFdZhfybwtVNUA7WSFDDZwHhXn4VRl9bvJ7dTF%2Bx5zGT5ly%2BvBZ0h9GmxeoqArMQgJf76qYvVwKS7oLJWpQOuFxo66x1wxWFS1HSDLuSVCjynVMstx7RSu41PPuoprdtNS3%2FOX3hz3GB%2BNSlWFVzp5sTU8eBwO0LcxdUvOMSGzYMoeX3ftX1ZioJpld1%2Fk66locO4%2FYPZ3BUlIZ2l8haZUPf0RI18mbiHmpyq5Kugtl5OOK2M045VNFpk2%2BMSz27ssp%2BIwlRz5RHyRIQ5TUnMukO22Bb3jz8fechc5T5HFUkgMKQMwmYTsInB%2FJZz87GBCN9l39kfsI3ZBIVWgrraYHc02cECEDuqtxTuz%2FpFvPeaZCopdb9Wn5cbc%2B5WUghvk6GDRXPXuQBoa5wMJQeS0kTCdtZ%2B%2FBjqkAZvhUVWIsmfzyhw2AhlBuhmemLxQgTlazykoMjNp8vfo9uWg9ne9%2B%2F%2Bahj7YRaiqZF7zoubC%2BwUKnnGViyTVcKjuSPLNNytzTRsNhNWXYkiStFWlUm5HJDBxwPfA0zcjwOobT4v5w8XqqeEIUtZxiNO2e7rcBCDFrK2auqGi%2FP78JkJJt7K4J3DHGpR2QIEe33tEMWM8jVmYFXseAhDaxIRdWdDo&X-Amz-Signature=3c39439c5895311077b60fc2c3981d3f15df5626c175ba14b1ab195b89526d31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
